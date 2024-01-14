import { useEffect } from "react";

// Custom hook for handling WebSocket connection
export function useShapesWebSocket(
  onOpen: () => void, // Callback function to be executed when WebSocket connection is opened
  onClose: () => void, // Callback function to be executed when WebSocket connection is closed
  onMessage: (data: any) => void // Callback function to be executed when a message is received from the WebSocket
) {
  useEffect(() => {
    // Create a new WebSocket instance
    const socket = new WebSocket("ws://shapegrid-1b327639b860.herokuapp.com/ws/shapes/");

    // Event listener for WebSocket connection open
    socket.addEventListener("open", () => {
      onOpen && onOpen(); // Execute the onOpen callback function if provided
    });

    // Event listener for WebSocket message received
    socket.addEventListener("message", (event) => {
      onMessage && onMessage(event.data); // Execute the onMessage callback function if provided, passing the received data
    });

    // Event listener for WebSocket connection close
    socket.addEventListener("close", () => {
      onClose && onClose(); // Execute the onClose callback function if provided
    });

    // Cleanup function to be executed when the component unmounts or the WebSocket connection is closed
    return () => {
      socket.close(); // Close the WebSocket connection
    };
  }, []); // Run this effect only once, when the component mounts
}