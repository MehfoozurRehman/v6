"use client";

import { useEffect, useRef, useState } from "react";

export function CursorHighlight() {
  const highlightRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const pointerRef = useRef({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const canUsePointerGlow =
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!canUsePointerGlow) {
      return;
    }

    const updatePosition = () => {
      frameRef.current = null;
      highlightRef.current?.style.setProperty(
        "--cursor-x",
        `${pointerRef.current.x}px`,
      );
      highlightRef.current?.style.setProperty(
        "--cursor-y",
        `${pointerRef.current.y}px`,
      );
    };

    const handlePointerMove = (event: PointerEvent) => {
      pointerRef.current = { x: event.clientX, y: event.clientY };
      setVisible(true);

      if (frameRef.current === null) {
        frameRef.current = window.requestAnimationFrame(updatePosition);
      }
    };

    const handlePointerLeave = () => {
      setVisible(false);
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handlePointerLeave,
      );

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={highlightRef}
      className="cursor-highlight pointer-events-none fixed left-0 top-0 z-0 size-[34rem] rounded-full"
      data-visible={visible}
      style={{
        background:
          "radial-gradient(circle at center, var(--cursor-glow) 0%, transparent 36%), radial-gradient(circle at center, var(--cursor-glow-soft) 0%, transparent 72%)",
        filter: "blur(18px)",
        opacity: visible ? 1 : 0,
        transform:
          "translate3d(calc(var(--cursor-x, 50vw) - 50%), calc(var(--cursor-y, 50vh) - 50%), 0)",
        transition: "opacity 180ms ease",
      }}
      aria-hidden="true"
    />
  );
}
