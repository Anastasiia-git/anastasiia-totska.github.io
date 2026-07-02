"use client";

import { useEffect } from "react";

type ScrollLockState = {
  scrollY: number;
  bodyOverflow: string;
  bodyPosition: string;
  bodyTop: string;
  bodyWidth: string;
  htmlOverflow: string;
};

let activeLocks = 0;
let lockState: ScrollLockState | null = null;

const restoreScrollPosition = (scrollY: number) => {
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  window.scrollTo({ top: scrollY, left: 0, behavior: "auto" });

  window.requestAnimationFrame(() => {
    root.style.scrollBehavior = previousScrollBehavior;
  });
};

export function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;

    activeLocks += 1;

    if (activeLocks === 1) {
      lockState = {
        scrollY: window.scrollY,
        bodyOverflow: document.body.style.overflow,
        bodyPosition: document.body.style.position,
        bodyTop: document.body.style.top,
        bodyWidth: document.body.style.width,
        htmlOverflow: document.documentElement.style.overflow,
      };

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${lockState.scrollY}px`;
      document.body.style.width = "100%";
      document.documentElement.style.overflow = "hidden";
    }

    return () => {
      activeLocks = Math.max(activeLocks - 1, 0);

      if (activeLocks > 0 || !lockState) return;

      const state = lockState;
      lockState = null;

      document.body.style.overflow = state.bodyOverflow;
      document.body.style.position = state.bodyPosition;
      document.body.style.top = state.bodyTop;
      document.body.style.width = state.bodyWidth;
      document.documentElement.style.overflow = state.htmlOverflow;

      restoreScrollPosition(state.scrollY);
    };
  }, [locked]);
}
