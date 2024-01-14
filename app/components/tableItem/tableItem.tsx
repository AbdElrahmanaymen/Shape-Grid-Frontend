// Import necessary dependencies and components
import React from "react";
import { CircleShape, RectangleShape, TriangleShape } from "../shapes/shapes";
import { TableRowProps } from "@/app/types/types";
import moment from "moment";

  /**
   * Renders a table row for a shape item.
   *
   * @param {Object} data - The shape item data.
   * @param {string} data.name - The name of the shape.
   * @param {string} data.color - The color of the shape.
   * @param {string} data.shape - The shape type (circle, rectangle, triangle).
   * @param {Date} data.timestamp - The timestamp of the shape item.
   * @param {Function} onEditClicked - The callback function when the edit link is clicked.
   * @param {Function} onDeleteClicked - The callback function when the delete link is clicked.
   * @returns {JSX.Element} The table row component.
   */
const TableItem: React.FC<TableRowProps> = ({
  data, // Add data prop
  onDeleteClicked, // Add onDeleteClicked prop
  onEditClicked, // Add onEditClicked prop
}) => {
  return (
    <tr className="border-b dark:border-gray-700">
      <th
        scope="row"
        className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {data.name}
      </th>
      <td className="px-4 py-3">
        <CircleShape color={data.color} />
      </td>
      <td className="px-4 py-3">
        {data.shape == "circle" ? (
          <CircleShape color={data.color} />
        ) : data.shape == "rectangle" ? (
          <RectangleShape color={data.color} />
        ) : (
          <TriangleShape color={data.color} />
        )}
      </td>
      <td className="px-4 py-3">
        {moment(data.timestamp).format("DD MMM YYYY HH:mm")}
      </td>
      <td className="px-4 py-3 flex flex-col md:flex-row items-center justify-end">
        <a
          className="font-medium text-blue-600 dark:text-white hover:underline cursor-pointer mr-2"
          onClick={() => onEditClicked(data.id)}
        >
          Edit
        </a>
        <a
          className="font-medium text-blue-600 dark:text-white hover:underline cursor-pointer"
          onClick={() => onDeleteClicked(data.id)}
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default TableItem;
