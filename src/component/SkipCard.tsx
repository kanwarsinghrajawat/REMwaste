import React from "react";
import type { SkipData } from "../types/SkipTypes";
import { FiArrowRight, FiAlertTriangle } from "react-icons/fi";
import type { SkipCardProps } from "../types";

export default function SkipCard({ skip, selected, onSelect }: SkipCardProps) {
  return (
    <button
      onClick={() => onSelect(skip)}
      className={`
        w-full rounded-md p-6 transition-all
        bg-[#252525] text-white
        hover:bg-[#2d2d2d] hover:border-[#0037C1]
        ${selected ? "ring-2 ring-[#0037C1] p-5" : ""}
      `}
    >
      <div className="relative">
        <img
          src="/yard.jpg"
          alt={`${skip.size} Yard Skip`}
          width={400}
          height={200}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="absolute top-4 right-4 bg-[#0037C1] text-white px-3 py-1 rounded-full text-sm font-medium">
          {skip.size} Yards
        </div>
        {!skip.allowed_on_road && (
          <div className="absolute bottom-4 left-4 bg-black text-yellow-400 px-3 py-1 rounded-full flex items-center text-sm font-medium">
            <FiAlertTriangle className="mr-1 h-4 w-4" />
            Not Allowed On The Road
          </div>
        )}
      </div>

      <div className="flex flex-col items-start pt-6">
        <h2 className="text-xl font-bold">{skip.size} Yard Skip</h2>
        <p className="text-gray-400 text-sm">
          {skip.hire_period_days} day hire period
        </p>
        <p className="mt-4 text-2xl font-bold text-[#0037C1]">
          £{skip.price_before_vat}
        </p>

        {selected ? (
          <button className="w-full mt-4 rounded bg-[#0037C1] py-3 text-center font-medium text-white">
            Selected
          </button>
        ) : (
          <button className="mt-4 flex w-full items-center justify-center rounded bg-[#383838] py-3 text-center font-medium text-white hover:bg-gray-600">
            Select This Skip <FiArrowRight className="ml-2 h-4 w-4" />
          </button>
        )}
      </div>
    </button>
  );
}
