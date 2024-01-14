// Importing necessary dependencies and types
import { SideNabBarItemProps } from "@/app/types/types";
import Link from "next/link";
import React from "react";

/**
 * Functional component representing a side navigation bar item.
 */
const SideNavBarItem: React.FC<SideNabBarItemProps> = ({
  icon,
  name,
  active,
  href,
}) => {
  return (
    // Wrapping the component in a Next.js Link component to enable client-side navigation
    <Link href={href}>
      <div
        // Applying conditional styling based on the 'active' prop
        className={`flex w-full px-5 mb-2 justify-start items-center gap-4 ${
          active ? "bg-[#0F0F0F] transition-all duration-300" : "hover:bg-[#0F0F0F] transition-all duration-300 hover:shadow-lg"
        } p-2 rounded-md group cursor-pointer m-auto`}
      >
        <div className="text-2xl text-white ">{icon}</div>
        <h3 className="text-base text-white  font-semibold">{name}</h3>
      </div>
    </Link>
  );
};

// Exporting the SideNavBarItem component as the default export
export default SideNavBarItem;
