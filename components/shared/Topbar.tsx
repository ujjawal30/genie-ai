import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import React from "react";

const Topbar = () => {
  return (
    <nav className="flex p-4">
      <button className="md:hidden">
        <Menu />
      </button>
      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Topbar;
