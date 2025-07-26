"use client";
import { useEffect, useState } from "react";

export default function GridBox() {
  const [boxes, setBoxes] = useState<number>(0);

  useEffect(() => {
    // Runs only on the client
    const width = window.innerWidth;
    const height = 256; // h-64 = 64 * 4px = 256px
    const cols = Math.ceil(width / 40);
    const rows = Math.ceil(height / 40);
    setBoxes(cols * rows);

    // ✅ Optional: Handle resizing
    const handleResize = () => {
      const newCols = Math.ceil(window.innerWidth / 40);
      const newRows = Math.ceil(8);
      setBoxes(newCols * newRows);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full h-70 bg-black flex items-center justify-center mb-6 relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-[repeat(auto-fill,_40px)]">
        {Array.from({ length: boxes }).map((_, i) => (
          <div
            key={i}
            className="border border-white/50 w-10 h-10"
          />
        ))}
      </div>
    </div>
  );
}
