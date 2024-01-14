"use client";

// Import necessary dependencies and components
import { ColorPicker } from "@/app/components/colorPicker/colorPicker";
import { postShape } from "@/app/services/shapes";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Define the Add Shape Page
export default function AddShapePage() {
  const router = useRouter(); // Get the router object
  const [shapeData, setShapeData] = useState({
    name: "",
    color: "#000000",
    shape: "circle",
  }); // Define the shapeData state

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Call the postShape function to add shape data
    postShape(
      () => {
        console.log("Data added successfully");  // Log success message
        router.push("/dashboard/shapes"); // Navigate to the shapes page
      },
      () => {
        console.error("Failed to update data"); // Log error message
      },
      { shapeData } // Pass the shapeData object
    );
  };

  // Render the form
  return (
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Add a new shape
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
          <div className="">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder="Type name"
              value={shapeData.name}
              onChange={(e) =>
                setShapeData({ ...shapeData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Shape
            </label>
            <select
              value={shapeData.shape}
              onChange={(e) =>
                setShapeData({ ...shapeData, shape: e.target.value })
              }
              name="shape"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            >
              <option disabled>Select shape</option>
              <option value="rectangle">Rectangle</option>
              <option value="circle">Circle</option>
              <option value="triangle">Triangle</option>
            </select>
          </div>
          <div className="sm:col-span-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Color
            </label>
            <ColorPicker
              color={shapeData.color}
              handleColorChange={(e) => {
                setShapeData({ ...shapeData, color: e.target.value });
              }}
            />
          </div>
        </div>
        <button
          type="submit"
          className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-[#0F0F0F] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Add shape
        </button>
      </form>
    </div>
  );
}
