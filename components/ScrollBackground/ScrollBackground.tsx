"use client";

import { useEffect } from "react";

type Rgb = [number, number, number];

type ColorStop = {
  position: number;
  bgA: Rgb;
  bgB: Rgb;
  bgC: Rgb;
  glowA: Rgb;
  glowB: Rgb;
};

const colorStops: ColorStop[] = [
  {
    position: 0,
    bgA: [25, 0, 25],
    bgB: [7, 11, 31],
    bgC: [27, 42, 85],
    glowA: [80, 140, 255],
    glowB: [180, 80, 255],
  },
  {
    position: 0.34,
    bgA: [2, 8, 23],
    bgB: [6, 18, 47],
    bgC: [34, 91, 148],
    glowA: [77, 168, 255],
    glowB: [79, 92, 133],
  },
  {
    position: 0.68,
    bgA: [3, 17, 32],
    bgB: [7, 38, 62],
    bgC: [47, 91, 112],
    glowA: [45, 212, 191],
    glowB: [99, 102, 241],
  },
  {
    position: 1,
    bgA: [24, 5, 34],
    bgB: [13, 20, 48],
    bgC: [94, 52, 116],
    glowA: [244, 114, 182],
    glowB: [56, 189, 248],
  },
];

const interpolate = (from: number, to: number, progress: number) =>
  Math.round(from + (to - from) * progress);

const mixRgb = (from: Rgb, to: Rgb, progress: number): Rgb => [
  interpolate(from[0], to[0], progress),
  interpolate(from[1], to[1], progress),
  interpolate(from[2], to[2], progress),
];

const formatRgb = (rgb: Rgb) => rgb.join(" ");

export default function ScrollBackground() {
  useEffect(() => {
    const root = document.documentElement;
    let frame = 0;

    const updateColors = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress =
        scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
      const clampedProgress = Math.min(Math.max(scrollProgress, 0), 1);

      const nextStopIndex = colorStops.findIndex(
        (stop) => stop.position >= clampedProgress,
      );
      const endIndex = nextStopIndex === -1 ? colorStops.length - 1 : nextStopIndex;
      const startIndex = Math.max(endIndex - 1, 0);
      const start = colorStops[startIndex];
      const end = colorStops[endIndex];
      const range = end.position - start.position || 1;
      const localProgress = (clampedProgress - start.position) / range;

      root.style.setProperty(
        "--scroll-bg-a",
        formatRgb(mixRgb(start.bgA, end.bgA, localProgress)),
      );
      root.style.setProperty(
        "--scroll-bg-b",
        formatRgb(mixRgb(start.bgB, end.bgB, localProgress)),
      );
      root.style.setProperty(
        "--scroll-bg-c",
        formatRgb(mixRgb(start.bgC, end.bgC, localProgress)),
      );
      root.style.setProperty(
        "--scroll-glow-a",
        formatRgb(mixRgb(start.glowA, end.glowA, localProgress)),
      );
      root.style.setProperty(
        "--scroll-glow-b",
        formatRgb(mixRgb(start.glowB, end.glowB, localProgress)),
      );
    };

    const requestUpdate = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateColors();
      });
    };

    updateColors();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return null;
}
