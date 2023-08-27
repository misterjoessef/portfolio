"use client";
import { useState, useEffect } from "react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [enabled, setEnabled] = useState(theme == "dark");
  const iconSize = 4;
  return (
    <div>
      <div
        className={`flex rounded-full bg-secondary p-1 text-center text-sm font-medium  text-base-400 transition-all duration-200 hover:p-px`}
      >
        <label className={`swap-rotate swap hover:text-accent`}>
          {/* this hidden checkbox controls the state */}
          <input
            checked={enabled}
            type="checkbox"
            onChange={() => {
              setEnabled(!enabled);
              if (enabled) {
                setTheme("light");
              } else {
                setTheme("dark");
              }
            }}
          />

          <BsFillSunFill
            className={`swap-on h-${iconSize} w-${iconSize} m-1 fill-current  `}
          />
          <BsFillMoonFill
            className={`swap-off h-${iconSize} w-${iconSize} m-1 fill-current `}
          />
        </label>
      </div>
    </div>
  );
}
