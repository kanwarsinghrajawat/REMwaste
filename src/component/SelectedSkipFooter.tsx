import type { SkipData } from "../types/SkipTypes";
import { FiArrowRight } from "react-icons/fi";
import React from "react";
import type { SelectedSkipFooterProps } from "../types";

export default function SelectedSkipFooter({
  skip,
  onBack,
}: SelectedSkipFooterProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 flex items-center justify-between bg-[#2A2A2A] py-4 px-6">
      <div className="flex items-center">
        <span className="mr-2 text-gray-400">{skip.size} Yard Skip</span>
        <span className="mr-4 text-xl font-bold text-[#0037C1]">
          £{skip.price_before_vat}
        </span>
        <span className="text-gray-400">{skip.hire_period_days} day hire</span>
      </div>
      <div className="flex items-center">
        <button
          onClick={onBack}
          className="mr-3 rounded bg-gray-700 px-6 py-2 text-white hover:bg-gray-600"
        >
          Back
        </button>
        <button className="flex items-center rounded bg-[#0037C1] px-6 py-2 text-white">
          Continue <FiArrowRight className="ml-2 h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
