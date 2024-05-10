"use client";

import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { FormEventHandler, useState } from "react";
import { useRouter } from "next/navigation";

const Search = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!search) {
      return;
    }

    router.push(`/restaurants?search=${search}`);
  };

  return (
    <form
      className="relative flex items-center gap-2"
      onSubmit={handleSearchSubmit}
    >
      <Input
        placeholder="Buscar restaurantes"
        className="border-none px-10"
        onChange={handleChange}
        value={search}
      />

      <SearchIcon size={24} className="absolute left-2 text-red-600" />
    </form>
  );
};

export default Search;
