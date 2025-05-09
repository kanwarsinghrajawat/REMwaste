import React from "react";
import type { SkipData } from "../types/SkipTypes";
import SkipCard from "./SkipCard";
import type { SkipGridProps } from "../types";

export default function SkipGrid({
  skips,
  selectedSkip,
  onSelect,
}: SkipGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {skips.map((skip) => (
        <SkipCard
          key={skip.id}
          skip={skip}
          selected={selectedSkip?.id === skip.id}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
}
