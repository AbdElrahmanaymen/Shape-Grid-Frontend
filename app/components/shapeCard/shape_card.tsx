// Import necessary dependencies and components
import React from "react";
import { CircleShape, RectangleShape, TriangleShape } from "../shapes/shapes";
import { DataProps } from "@/app/types/types";
import moment from "moment";

/**
 * ShapeCard component receives the following props:
 * @param {string} name - The name of the shape.
 * @param {number} timestamp - The timestamp of when the shape was created.
 * @param {string} color - The color of the shape.
 * @param {string} shape - The shape type.
 * @param {string} id - The unique identifier of the shape.
 */
const ShapeCard: React.FC<DataProps> = ({ name, timestamp, color, shape, id }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl p-4 transition-transform transform hover:scale-105">
      {/* Render the appropriate shape component based on the shape prop */}
      {shape == "circle" ? (
        <CircleShape color={color} />
      ) : shape == "rectangle" ? (
        <RectangleShape color={color} />
      ) : (
        <TriangleShape color={color} />
      )}
      <h1 className="text-xl font-bold text-black mt-2">{name}</h1>
      {/* Format the timestamp using moment.js library */}
      <p className="text-gray-500">{moment(timestamp).format("DD MMM YYYY HH:mm")}</p>
    </div>
  );
};

export default ShapeCard;
