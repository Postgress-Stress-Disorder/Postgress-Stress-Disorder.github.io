export default function TerminalNav() {
  return (
    <div className="w-full my-16 px-4 select-none">
      <div
        className="
          max-w-xl mx-auto
          rounded-md overflow-hidden
          border border-neon-400
          bg-terminal
          shadow-[0_0_25px_var(--neon-main)]
          relative
        "
      >
        {/* Bar */}
        <div
          className="
            px-4 py-1.5
            bg-bar
            border-b border-dim
            text-neon-main font-mono text-xs
            shadow-[0_0_10px_var(--neon-main)]
            flex justify-between items-center
          "
        >
          <span className="opacity-80">navigation</span>

          <div className="flex items-center gap-2 opacity-70">
            <div className="w-2.5 h-2.5 bg-neon-200 border border-neon-400 rounded-[2px]" />
            <div className="w-2.5 h-2.5 bg-neon-200 border border-neon-400 rounded-[2px]" />
            <div className="w-2.5 h-2.5 bg-blood-300 border border-blood-600 rounded-[2px]" />
          </div>
        </div>

        {/* Body */}
        <div className="px-4 py-4 font-mono text-[13px] text-ash relative z-10 space-y-3">
          {/* Prompt */}
          <div className="flex items-center gap-2">
            <span className="text-neon-main">❯</span>
            <span className="opacity-80">links.list</span>
          </div>

          {/* GitHub link */}
          <a
            href="https://github.com/Postgress-Stress-Disorder"
            target="_blank"
            rel="noopener noreferrer"
            className="
              block
              rounded-md
              px-3 py-2
              border border-neon-400
              text-neon-main
              hover:bg-neon-200
              hover:text-terminal
              transition
              cursor-pointer
              w-max
            "
          >
            github://postgres-stress-disorder
          </a>
        </div>
      </div>
    </div>
  );
}
