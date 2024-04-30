import React from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

export const Search = () => {
  return (
    <div className="flex gap-2">
      <Input />
      <Button size={"icon"}>
        <SearchIcon size={18} />
      </Button>
    </div>
  );
};
