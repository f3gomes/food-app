import { ChevronRightIcon } from "lucide-react";

import Link from "next/link";

import Header from "./_components/header";
import Search from "./_components/search";
import { Button } from "./_components/ui/button";
import { fetchProducts } from "./_actions/products";
import ProductList from "./_components/product-list";
import PromoBanner from "./_components/promo-banner";
import RestaurantList from "./_components/restaurant-list";
import { CategoryList } from "./_components/category-list";

const Home = async () => {
  const { products, burguersCategory, pizzasCategory } = await fetchProducts();

  return (
    <div className="container px-0">
      <Header />
      <div className="px-5 pt-6">
        <Search />
      </div>

      <div className="px-5 pt-6">
        <CategoryList />
      </div>

      <div className="px-5 pt-6">
        <Link href={`/categories/${pizzasCategory?.id}/products`}>
          <PromoBanner
            src="/promo-banner-01.png"
            alt="Até 30% de desconto em pizzas!"
          />
        </Link>
      </div>

      <div className="space-y-4 pt-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Pedidos Recomendados</h2>

          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
            asChild
          >
            <Link href="/products/recommended">
              Ver todos
              <ChevronRightIcon size={16} />
            </Link>
          </Button>
        </div>
      </div>

      <div className="px-5 pt-6">
        <ProductList products={products} />
      </div>

      <div className="px-5 pt-6">
        <Link href={`/categories/${burguersCategory?.id}/products`}>
          <PromoBanner
            src="/promo-banner-02.png"
            alt="A partir de R$17,90 em lanches"
          />
        </Link>
      </div>

      <div className="space-y-4 py-6">
        <div className="flex items-center justify-between px-5">
          <h2 className="font-semibold">Restaurantes Recomendados</h2>

          <Button
            variant="ghost"
            className="h-fit p-0 text-primary hover:bg-transparent"
            asChild
          >
            <Link href="/restaurants/recommended">
              Ver todos
              <ChevronRightIcon size={16} />
            </Link>
          </Button>
        </div>
      </div>

      <div className="px-5 pt-6">
        <RestaurantList />
      </div>
    </div>
  );
};

export default Home;
