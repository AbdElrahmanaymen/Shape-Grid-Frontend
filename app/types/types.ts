// Importing necessary types from the 'react' library
import { ChangeEvent, ReactElement, ReactNode } from "react";

// ShapeProps interface represents the properties of a shape
export interface ShapeProps {
    color: string; // Color of the shape
}

// DataProps interface represents the properties of data
export interface DataProps {
    id: number; // Unique identifier
    name: string; // Name of the shape
    color: string; // Color of the shape
    shape: string; // Type of the shape
    timestamp: number; // Timestamp of the shape
}

// SideNabBarItemProps interface represents the properties of a sidebar navigation item
export interface SideNabBarItemProps {
    icon: ReactElement; // Icon of the sidebar navigation item
    name: string; // Name of the sidebar navigation item
    active: boolean; // Whether the sidebar navigation item is active or not
    href: string; // URL of the sidebar navigation item
}

// TableProps interface represents the properties of a table
export interface TableProps {
    cols: string[]; // Columns of the table
    onAddClicked: () => void; // Function to be called when the add button is clicked
    onDeleteClicked: (id: number) => void; // Function to be called when the delete button is clicked
    onEditClicked: (id: number) => void; // Function to be called when the edit button is clicked
    rows: DataProps[]; // Rows of the table
}

// TableRowProps interface represents the properties of a table row
export interface TableRowProps {
    data: DataProps; // Data of the table row
    onDeleteClicked: (id: number) => void; // Function to be called when the delete button is clicked
    onEditClicked: (id: number) => void; // Function to be called when the edit button is clicked
}

// ColorPickerProps interface represents the properties of a color picker
export interface ColorPickerProps {
    color: string; // Color of the color picker
    handleColorChange: (event: ChangeEvent<HTMLInputElement>) => void; // Function to be called when the color picker value is changed
}