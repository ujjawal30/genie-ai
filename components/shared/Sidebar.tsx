import React from "react";

const Sidebar = () => {
  return (
    <section className="h-full w-fit overflow-auto bg-gray-900 py-5">
      <div className="flex w-full flex-col gap-6 px-6">
        <div className="text-white">Signin</div>
        <div className="text-white">Register</div>
      </div>
    </section>
  );
};

export default Sidebar;
