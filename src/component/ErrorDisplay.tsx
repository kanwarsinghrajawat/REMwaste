import React from "react";
import type { ErrorDisplayProps } from "../types";
export default function ErrorDisplay({
  message,
  isEmpty = false,
}: ErrorDisplayProps) {
  const colorClass = isEmpty ? "text-gray-400" : "text-red-500";
  return (
    <div className={`flex items-center justify-center h-screen ${colorClass}`}>
      <p>{message}</p>
    </div>
  );
}
