import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen flex flex-row">
      <div className="sticky left-0 top-0 z-20 max-md:hidden">
        <Sidebar />
      </div>

      <main className="py-5 w-full">
        <Topbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
