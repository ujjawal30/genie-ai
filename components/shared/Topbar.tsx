import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";

const Topbar = () => {
  return (
    <nav className="flex p-4">
      <Button variant={"default"} size={"icon"} className="md:hidden">
        <Menu />
      </Button>
      <div className="w-full flex justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};

export default Topbar;
