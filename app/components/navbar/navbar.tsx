import React from "react";
import Image from "next/image";

/**
 * Represents the Navbar component.
 * This is a functional component used for rendering the navigation bar.
 */
const Navbar = () => {
  return (
    // Render a div element with classes for styling
    <div className="w-full bg-white rounded-full p-2">
      
        {/* Render a div element with classes for flexbox layout */}
        <div className="flex flex-row items-center justify-center">
          {/* Render an Image component from the next/image library */}
          <Image src="/logo.png" alt="ShapeGrid Logo" width={32} height={32} />
          {/* Render an h1 element with classes for styling */}
          <h1 className="text-xl cursor-pointer font-bold text-black pl-1">ShapeGrid</h1>
        </div>
    </div>
  );
};

export default Navbar;
