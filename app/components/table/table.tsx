import React from "react";
import TableItem from "../tableItem/tableItem";
import { TableProps } from "@/app/types/types";

/**
 * Represents a table component.
 *
 * @component
 * @param {TableProps} props - The props for the Table component.
 * @returns {JSX.Element} The rendered Table component.
 */
// Define a functional component called Table that accepts props of type TableProps
const Table: React.FC<TableProps> = ({ cols, onAddClicked, rows, onDeleteClicked, onEditClicked }) => {
  return (
    // Render a div container with background color and shadow
    <div className="bg-white dark:bg-[#005B41] relative shadow-md sm:rounded-lg overflow-hidden max-h-screen mt-4">
      <div className="flex flex-col md:flex-row items-center justify-end space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
          {/* Render a button for adding a new item */}
          <button
            type="button"
            className="flex items-center justify-center text-white bg-[#0F0F0F] hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            onClick={onAddClicked}
          >
            Add
          </button>
        </div>
      </div>
      <div className="overflow-x-auto">
        {/* Render a table */}
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-200">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-[#008170] dark:text-white">
            <tr>
              {/* Render table column headers */}
              {cols.map((col, index) => (
                <th key={index} scope="col" className="px-4 py-3 capitalize">
                  {col}
                </th>
              ))}
              {/* Render an empty column for actions */}
              <th scope="col" className="px-4 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Render table rows */}
            {rows.map((row, index) => (
              <TableItem
                key={index}
                data={row}
                onDeleteClicked={(id) => onDeleteClicked(id)}
                onEditClicked={(id) => onEditClicked(id)}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
