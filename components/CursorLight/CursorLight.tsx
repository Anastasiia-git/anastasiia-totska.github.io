"use client";

import { useEffect } from "react";

export default function CursorLight() {
  useEffect(() => {
    const light = document.createElement("div");

    light.className = "cursorLight";

    document.body.appendChild(light);

    const move = (e: MouseEvent) => {
      light.style.left = e.clientX + "px";
      light.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, []);

  return null;
}
