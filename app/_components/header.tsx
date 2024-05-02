import React from "react";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <div className="flex justify-between px-5 pt-6">
      <div className="relative h-[30px] w-[100px]">
        <Link href="/">
          <Image
            src="/logo.png"
            alt="FSW Foods"
            fill
            className="object-cover"
          />
        </Link>
      </div>

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
