"use client";

import { fetchShapes } from "@/app/services/shapes";
import { DataProps } from "@/app/types/types";
import react, { useEffect, useState } from "react";

export default function HomePage() {

  const [shapes, setShapes] = useState<DataProps[]>([]);

  // Function to fetch shapes data from the server
  const fetchShapesData = () => {
    fetchShapes(
      (data) => {
        setShapes(data);
      },
      () => {
        console.error("Failed to fetch data");
      }
    );
  };

  // Fetch shapes data when the component mounts
  useEffect(() => {
    fetchShapesData();
  }, []);

  //displaying cards with shapes statistics (Totals, Circles, Rectangles, Triangles) in the database
  return (
    <div>
      <h1 className="text-xl font-bold text-black  dark:text-white">
        Overview
      </h1>
      <div className="flex flex-row gap-4 mt-4 sm:flex-col">
        <div className="flex flex-col bg-white rounded-xl p-4">
          <h1 className="text-xl font-bold text-black mt-2 mr-6">Total Shapes</h1>
          <p className="text-gray-500 text-bold text-3xl text-right">{shapes.length}</p>
        </div>
        <div className="flex flex-col bg-white rounded-xl p-4">
          <h1 className="text-xl font-bold text-black mt-2 mr-6">Circle Shapes</h1>
          <p className="text-gray-500 text-bold text-3xl text-right">{shapes.filter((shape) => shape.shape == 'circle').length}</p>
        </div>
        <div className="flex flex-col bg-white rounded-xl p-4">
          <h1 className="text-xl font-bold text-black mt-2 mr-6">Rectangle Shapes</h1>
          <p className="text-gray-500 text-bold text-3xl text-right">{shapes.filter((shape) => shape.shape == 'rectangle').length}</p>
        </div>
        <div className="flex flex-col bg-white rounded-xl p-4">
          <h1 className="text-xl font-bold text-black mt-2 mr-6">Triangle Shapes</h1>
          <p className="text-gray-500 text-bold text-3xl text-right">{shapes.filter((shape) => shape.shape == 'triangle').length}</p>
        </div>
      </div>
    </div>
  );
}
