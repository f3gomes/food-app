import React from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

export const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <Image src={"/logo.png"} alt="Food App" height={30} width={100} />

      <Button
        size={"icon"}
        variant={"outline"}
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};
