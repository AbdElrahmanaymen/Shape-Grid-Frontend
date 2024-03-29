"use client";

// Importing necessary dependencies
import React, { use, useEffect, useRef } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";
import { MdOutlineLogout, MdOutlineSpaceDashboard } from "react-icons/md";
import SideNavBarItem from "../sideNavBarItem/sideNavBarItem";
import { LuShapes, LuUsers2 } from "react-icons/lu";
import { usePathname } from "next/navigation";

/**
 * Represents the SideNavBar component.
 * This component is responsible for rendering the side navigation bar.
 */
export default function SideNavBar() {
  // Setting up state variables
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();
  const sideNavBarRef = useRef(null);

  // Function to toggle the side navigation menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  /**
   * Function to handle click outside the side navigation bar.
   * Closes the side navigation bar if the click target is neither a button nor the side navigation bar itself.
   * @param event - The mouse event object.
   */
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as HTMLElement; // Getting the click target
    console.log(target) // Logging the click target
    const isButton = target.closest("button"); // Checking if the click target is a button
    const isSidebar = target.closest(".side-nav-bar"); // Checking if the click target is the side navigation bar

    if (!isButton && !isSidebar) {
      setIsOpen(false); // Closing the side navigation bar
    } 
  };

  // Add event listener to handle click outside
  useEffect(() => {
    document.addEventListener("click", handleClickOutside); // Adding event listener to handle click outside
    return () => {
      document.removeEventListener("click", handleClickOutside); // Removing event listener to handle click outside
    };
  }, []);

  // Rendering the SideNavBar component
  return (
    <div className="flex">
      {/* Side navigation menu */}
      <div
        ref={sideNavBarRef}
        className={`p-12 w-1/2 h-screen bg-[#005B41] fixed z-20 top-0 ${
          isOpen ? "left-0" : "-left-96"
        } lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200`}
      >
        <div className="flex flex-col justify-start items-center">
          {/* Logo */}
          <div className="flex flex-row items-center justify-center ">
            <Image
              src="/logo.png"
              alt="ShapeGrid Logo"
              width={32}
              height={32}
            />
            <h1 className="cursor-pointer text-xl font-bold text-white pl-1">
              ShapeGrid
            </h1>
          </div>

          {/* Side navigation items */}
          <div className="my-12 pb-4">
            <SideNavBarItem
              name="Dashboard"
              icon={<MdOutlineSpaceDashboard />}
              active={pathname == "/dashboard"}
              href="/dashboard"
            />
            <SideNavBarItem
              name="Shapes"
              icon={<LuShapes />}
              active={pathname == "/dashboard/shapes"}
              href="/dashboard/shapes"
            />
          </div>
        </div>
      </div>

      {/* Hamburger menu button */}
      <button
        className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-black dark:text-white hover:bg-[#008170] group"
        onClick={toggleMenu}
      >
        <GiHamburgerMenu
          className="block md:hidden h-6 w-7"
          aria-hidden="true"
        />
      </button>
    </div>
  );
}
