"use client";
import { useState } from "react";

export default function OrderOptionToggle() {
  const [selected, setSelected] = useState("pickup");

  return (
    <div>
      {/* Outer container: has the background, rounding, and padding */}
      <div className="relative bg-gray-300 rounded-full p-1 min-w-36 text-black">
        {/* Inner “track”: the pill slides within this area */}
        <div className="relative flex w-full h-6 items-center">
          {/* The pill (absolute). Moves left/right based on `selected`. */}
          <div
            className={`absolute top-0 bottom-0 left-0 w-1/2 bg-white 
                        rounded-full transition-transform duration-200
                       shadow-lg 
                        ${
                          selected === "delivery"
                            ? "translate-x-full"
                            : "translate-x-0"
                        }`}
          />

          {/* Buttons need a higher z-index so they stay clickable above the pill */}
          <button
            className={`relative flex-1 z-10 text-sm font-medium`}
            onClick={() => setSelected("pickup")}
          >
            Pickup
          </button>
          <button
            className={`relative flex-1 z-10 text-sm font-medium`}
            onClick={() => setSelected("delivery")}
          >
            Delivery
          </button>
        </div>
      </div>
    </div>
  );
}
