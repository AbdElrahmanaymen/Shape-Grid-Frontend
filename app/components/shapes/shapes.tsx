import React from 'react';
import { ShapeProps } from '../../types/types';

// CircleShape component represents a circle shape with a given color
export const CircleShape: React.FC<ShapeProps> = ({ color }) => {
    return <div style={{ backgroundColor: color }} className={`w-[32px] h-[32px] rounded-full`} />;
};

// RectangleShape component represents a rectangle shape with a given color
export const RectangleShape: React.FC<ShapeProps> = ({ color }) => {
    return <div style={{ backgroundColor: color }} className={`w-[32px] h-[32px]`} />;
};

// TriangleShape component represents a triangle shape with a given color
export const TriangleShape: React.FC<ShapeProps> = ({ color }) => {
    return (
        <div
            style={{ borderBottomColor: color }}
            className={`w-0 h-0 border-solid border-x-transparent border-b-[32px] border-l-[16px] border-r-[16px] ]`}
        />
    );
};
