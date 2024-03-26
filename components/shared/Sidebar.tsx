import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <section className="h-full w-fit overflow-auto bg-gray-900 py-5">
      <div className="flex w-full flex-col gap-6 px-6">
        <Link href="/sign-in">
          <Button variant={"secondary"}>Signin</Button>
        </Link>
        <Link href="/sign-up">
          <Button variant={"secondary"}>Register</Button>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
