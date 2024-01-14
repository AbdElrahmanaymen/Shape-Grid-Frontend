"use client";

// Import necessary dependencies and components
import { ColorPicker } from "@/app/components/colorPicker/colorPicker";
import { fetchShapes, updateShape } from "@/app/services/shapes";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define the Edit Shape Page
export default function EditShapePage() {
  const router = useRouter(); // Get the router object
  const { id } = useParams(); // Get the id parameter from the URL
  const [shape, setShape] = useState({
    name: "",
    color: "#000000",
    shape: "circle",
  }); // Define the shape state
  const [loading, setLoading] = useState(true); // Add loading state

  // Fetch shape data from the server
  useEffect(() => {
    setLoading(true); // Set loading state to true before fetching data

    // Fetch shape data from the server
    fetchShapes(
      (data) => {
        console.log(data); // Log the fetched data
        setShape(data); // Update the shape state with the fetched data
        setLoading(false); // Set loading state to false after fetching data
      },
      () => {
        console.error("Failed to fetch data"); // Log error message if fetching data fails
        setLoading(false); // Set loading state to false if fetching data fails
      },
      { id: parseInt(id.toString()) } // Pass the id parameter
    );
  }, [id]); // Run this effect only once, when the component mounts

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    // Update the shape data on the server
    updateShape(
      () => {
        console.log("Data updated successfully"); // Log success message
        router.push("/dashboard/shapes"); // Redirect to the shapes dashboard page after successful update
      },
      () => {
        console.error("Failed to update data"); // Log error message
      },
      { shape } // Pass the shape object
    );
  }; 

  // Render the form
  return (
    <div className="py-8 px-4 mx-auto max-w-2xl lg:py-16">
      <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
        Update shape
      </h2>
      {loading ? ( 
        <div>Loading...</div> // Show a loading message while fetching shape data
      ) : (
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
                value={shape.name}
                onChange={(e) => setShape({ ...shape, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Shape
              </label>
              <select
                value={shape.shape}
                onChange={(e) => setShape({ ...shape, shape: e.target.value })}
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
                color={shape.color}
                handleColorChange={(e) => {
                  setShape({ ...shape, color: e.target.value });
                }}
              />
            </div>
          </div>
          <button
            type="submit"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-[#0F0F0F] rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
          >
            Update
          </button>
        </form>
      )}
    </div>
  );
}
