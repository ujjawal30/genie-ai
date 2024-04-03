import React, { ReactNode } from "react";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import Sidebar from "@/components/shared/Sidebar";
import Topbar from "@/components/shared/Topbar";
import { registerUser } from "@/lib/actions";

const DashboardLayout = async ({ children }: { children: ReactNode }) => {
  const user = await currentUser();
  if (!user) return null;

  const userDetails = await registerUser(
    user?.id,
    user?.firstName || user?.emailAddresses[0].emailAddress
  );
  if (!userDetails) redirect("/");

  return (
    <div className="h-screen flex flex-row overflow-hidden">
      <section className="max-md:hidden">
        <Sidebar />
      </section>

      <main className="py-5 w-full overflow-auto">
        <Topbar />
        Hi {userDetails.name}
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
