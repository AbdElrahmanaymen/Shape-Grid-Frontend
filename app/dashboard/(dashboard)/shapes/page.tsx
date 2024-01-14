"use client"

// Import necessary dependencies and components
import Table from "@/app/components/table/table";
import { deleteShape, fetchShapes } from "@/app/services/shapes";
import { DataProps } from "@/app/types/types";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Define the ShapesPage
export default function ShapesPage() {
  const router = useRouter();
  const [shapes, setShapes] = useState<DataProps[]>([]);

  // Function to fetch shapes data from the server
  const fetchShapesData = () => {
    fetchShapes(
      (data) => {
        setShapes(data); // Setting the fetched data to the state
      },
      () => {
        console.error("Failed to fetch data"); // Handling error
      }
    );
  };

  // Fetch shapes data when the component mounts
  useEffect(() => {
    fetchShapesData(); // Calling the fetchShapesData function
  }, []); // Run this effect only once, when the component mounts

  // Function to handle refresh button click
  const handleRefresh = () => {
    fetchShapesData(); // Calling the fetchShapesData function
  };

  // Render the Table component with the necessary props
  return (
    <Table
      cols={["Name", "Color", "Shape", "Created At"]}
      onAddClicked={() => {
        router.push("/dashboard/shapes/add");
      }}
      rows={shapes}
      onDeleteClicked={(id) => {
        deleteShape(
          () => {
            handleRefresh();
          },
          () => {},
          { id }
        );
      }}
      onEditClicked={(id) => {
        router.push(`/dashboard/shapes/${id}`);
      }}
    />
  );
}
