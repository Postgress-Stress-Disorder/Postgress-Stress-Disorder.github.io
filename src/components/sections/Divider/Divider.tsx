import { useEffect, useRef, useState } from "react";

interface ErrorObject {
  code: string;
  detail: string;
  hint: string;
}

interface DividerProps {
  query: string;
  error: ErrorObject;
}

export default function Divider({ query, error }: DividerProps) {
  const [typed, setTyped] = useState("");
  const [hasPlayed, setHasPlayed] = useState(false); // run once
  const ref = useRef<HTMLDivElement>(null);

  // start typing when visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries[0].isIntersecting;
        if (visible && !hasPlayed) {
          setHasPlayed(true);
        }
      },
      { threshold: 0.3 } // adjust sensitivity
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasPlayed]);

  // typing effect
  useEffect(() => {
    if (!hasPlayed) return;

    let i = 0;
    setTyped(""); // reset for replay if you ever change logic

    const interval = setInterval(() => {
      setTyped((prev) => prev + query[i]);
      i++;
      if (i >= query.length - 1) clearInterval(interval);
    }, 25);

    return () => clearInterval(interval);
  }, [hasPlayed, query]);

  return (
    <div ref={ref} className="w-full my-10 px-4 select-none">
      <div
        className="
          max-w-4xl mx-auto
          rounded-md overflow-hidden
          border border-green-400
          bg-terminal
          shadow-[0_0_25px_var(--green-main)]
          relative
          crt-bloom
        "
      >
        {/* Scanlines */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.08] bg-[linear-gradient(transparent_50%,_rgba(0,0,0,0.35)_51%)] bg-[length:100%_4px]"></div>

        {/* Title bar */}
        <div
          className="
            px-4 py-1.5
            bg-bar
            border-b border-dim
            text-green-main font-mono text-xs
            shadow-[0_0_10px_var(--green-main)]
            flex justify-between items-center
          "
        >
          <span className="opacity-80">error.log</span>

          <div className="flex items-center gap-2 opacity-70">
            <div className="w-2.5 h-2.5 bg-green-200 border border-green-400 rounded-[2px]" />
            <div className="w-2.5 h-2.5 bg-green-200 border border-green-400 rounded-[2px]" />
            <div className="w-2.5 h-2.5 bg-blood-300 border border-blood-600 rounded-[2px]" />
          </div>
        </div>

        {/* Body */}
        <div className="px-4 py-4 font-mono text-[13px] text-green-main relative z-10 space-y-1">
          <div>
            <span className="text-green-main">❯</span>{" "}
            <span className="opacity-80">postgres://dev-collective&gt;</span>
          </div>

          {/* Typed query */}
          <div className="opacity-90 whitespace-pre">{typed}</div>

          {/* Errors */}
          <div className="text-blood opacity-80 mt-2">ERROR: {error.code}</div>
          <div className="text-blood-600 text-[11px] opacity-70">DETAIL: {error.detail}</div>
          <div className="text-blood-600 text-[11px] opacity-70">HINT: {error.hint}</div>
        </div>
      </div>
    </div>
  );
}
