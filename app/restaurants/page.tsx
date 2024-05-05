import { Suspense } from "react";

import { getServerSession } from "next-auth";

import { db } from "../_lib/prisma";
import Restaurants from "./restaurants";
import { authOptions } from "../_lib/auth";

const RestaurantsPage = async () => {
  const session = await getServerSession(authOptions);

  const userFavoriteRestaurants = await db.userFavoriteRestaurant.findMany({
    where: {
      userId: session?.user.id,
    },
    include: {
      restaurant: true,
    },
  });

  return (
    <Suspense>
      <Restaurants userFavoriteRestaurants={userFavoriteRestaurants} />
    </Suspense>
  );
};

export default RestaurantsPage;
