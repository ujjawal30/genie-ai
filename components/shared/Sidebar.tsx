"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Home } from "lucide-react";
import { Montserrat } from "next/font/google";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { sidebarRoutes } from "@/constants";

const montserrat = Montserrat({
  weight: "600",
  subsets: ["latin"],
});

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky left-0 top-0 w-72 h-full overflow-auto flex flex-col bg-gray-900 text-white py-5">
      <div className="flex-1 py-2 px-4">
        <Link
          href="/dashboard"
          className={cn("flex items-center gap-4 mb-12", montserrat.className)}
        >
          <Image src="/logo.png" alt="logo" width={48} height={48} />
          <h1 className="font-bold text-3xl">GenieAI</h1>
        </Link>
        <div className="space-y-1">
          {sidebarRoutes.map((route) => (
            <Link
              href={route.href}
              key={route.label}
              className={cn(
                "text-sm p-3 w-full flex justify-start font-medium cursor-pointer hover:text-blue-500 hover:bg-white/10 rounded-lg transition",
                pathname === route.href && "bg-white/10"
              )}
            >
              <div className="flex items-center gap-2">
                <route.icon size={24} />
                <p>{route.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="py-2 px-4">
        <div className="space-y-1">
          <Link
            href="/"
            className="text-sm p-3 w-full flex justify-start font-medium cursor-pointer hover:text-blue-500 hover:bg-white/10 rounded-lg transition"
          >
            <div className="flex items-center gap-2">
              <Home size={24} />
              <p>Go to Landing Page</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
