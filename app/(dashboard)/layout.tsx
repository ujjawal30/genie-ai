import React, { ReactNode } from "react";

import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";
import { fetchUser } from "@/lib/actions";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const userDetails = await fetchUser();

  return (
    <div className="h-screen flex flex-row overflow-hidden">
      <section className="max-md:hidden">
        <Sidebar apiLimitCount={userDetails?.limit} />
      </section>

      <main className="py-5 w-full overflow-auto">
        <Topbar apiLimitCount={userDetails?.limit} />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
