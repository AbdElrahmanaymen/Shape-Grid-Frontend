"use client"

// Import necessary dependencies
import React, { useEffect } from "react";
import ShapeCard from "../shapeCard/shape_card";
import { DataProps } from "@/app/types/types";
import { useShapesWebSocket } from "@/app/services/shapesWebSocket";

/**
 * Represents the Grid component for showing the shapes.
 */
const Grid: React.FC = () => {
  // Define state to hold the shapes data
  const [shapes, setShapes] = React.useState<DataProps[]>([]); // Add shapes state

  // Define event handlers for WebSocket connection
  const handleOpen = () => {
    console.log('WebSocket is open now.'); // Log success message
  };

  // Function to handle incoming messages
  const handleMessage = (data: any) => {
    // Parse the incoming data
    const incomingData = JSON.parse(data); 
    console.log(incomingData); // Log the incoming data

    // Update the shapes state based on the incoming data type
    // If the incoming data type is 'shapes.initial', update the shapes state with the initial data
    if (incomingData['type'] === 'shapes.initial') {
      setShapes(incomingData['data']);
    }
    // If the incoming data type is 'shapes.add', add the new shape to the shapes state
    else if(incomingData['type'] === 'shapes.add') {
      setShapes((prevShapes) => [...prevShapes, incomingData['data']]);
    }
    // If the incoming data type is 'shapes.delete', delete the shape from the shapes state
    else if (incomingData['type'] === 'shapes.delete') {
      setShapes((prevShapes) => prevShapes.filter((shape) => shape.id !== incomingData['data']));
    }
    // If the incoming data type is 'shapes.update', update the shape in the shapes state
    else if (incomingData['type'] === 'shapes.update') {
      setShapes((prevShapes) => prevShapes.map((shape) => shape.id === incomingData['data'].id ? incomingData['data'] : shape));
    }
  };

  // Function to handle WebSocket close event
  const handleClose = () => {
    console.log('WebSocket is closed now.'); // Log success message
  };

  // Use the custom hook to establish WebSocket connection and handle events
  useShapesWebSocket(handleOpen, handleClose, handleMessage); 

  // Render the Grid component
  return (
    <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-6 ">
        {shapes.map((shape) => (
            <ShapeCard
            key={shape.id}
            name={shape.name}
            timestamp={shape.timestamp}
            color={shape.color}
            shape={shape.shape}
            id={shape.id}
            />
        ))}
    </div>
  );
};

export default Grid;
