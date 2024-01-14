import React from "react";

import SideNavBar from "../../components/sideNavBar/sideNavBar";

const DashboardLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Building layout with side navigation bar for all dashboard pages
  return (
    <>
      <SideNavBar />
      <div className="lg:ml-[250px] p-12">{children}</div>
    </>
  );
};

export default DashboardLayout;
