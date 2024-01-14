
// Import necessary dependencies and components
import { ColorPickerProps } from "@/app/types/types";
import React from "react";

/**
 * Represents a ColorPicker component.
 */
export const ColorPicker = ({ color, handleColorChange }: ColorPickerProps) => {

    const pickerID = `color-picker`; // Define the pickerID

    // Render the ColorPicker component
    return (
        <>
            {/* Hidden input element to trigger the color picker */}
            <input
                name="color"
                type={"color"}
                onChange={handleColorChange}
                id={pickerID}
                className="h-0 w-0 opacity-0"
            />
            <section className="relative">
                <label htmlFor={pickerID}>
                    {/* Color preview box */}
                    <div
                        style={{ backgroundColor: color }}
                        className="w-24 absolute h-20 rounded-xl"
                    />
                    {/* Blurred color preview box */}
                    <div
                        style={{ backgroundColor: color }}
                        className="w-24 blur-md opacity-50 h-20 rounded-xl"
                    />
                </label>
            </section>
        </>
    );
};
