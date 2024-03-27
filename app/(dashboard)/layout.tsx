import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";
import React, { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-row">
      <section className="max-md:hidden">
        <Sidebar />
      </section>

      <main className="py-5 w-full">
        <Topbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
