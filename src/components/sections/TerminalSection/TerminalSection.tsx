// src/components/TerminalSection.tsx

interface TerminalSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function TerminalSection({ title, children }: TerminalSectionProps) {
  return (
    <section className="w-full my-16 px-4">
      <div
        className="
          max-w-5xl mx-auto
          rounded-lg overflow-hidden
          border border-neon-400
          shadow-[0_0_30px_var(--neon-main)]
          bg-terminal
        "
      >
        {/* Section Title Bar */}
        <div
          className="
            px-6 py-4
            bg-bar
            border-b border-dim
            flex
            text-neon-main font-mono
            shadow-[0_0_15px_var(--neon-main)]
          "
        >
          <h2 className="text-2xl ml-auto font-bold uppercase tracking-wide">{title}</h2>

          {/* Fake control buttons */}
          <div className="flex items-center gap-3 ml-auto">
            <div className="w-3 h-3 rounded-sm bg-neon-200 border border-neon-400 flex items-center justify-center">
              <span className="text-neon-800 leading-none">–</span>
            </div>

            <div className="w-3 h-3 rounded-sm bg-neon-200 border border-neon-400 flex items-center justify-center">
              <span className="text-neon-800 leading-none">□</span>
            </div>

            <div className="w-3 h-3 rounded-sm bg-blood-300 border border-blood-600 flex items-center justify-center">
              <span className="text-blood-900 text-[10px] leading-none">x</span>
            </div>
          </div>
        </div>

        {/* Terminal Content */}
        <div className="px-6 py-6 font-mono text-sm text-ash leading-relaxed">
          <div className="text-ash opacity-90 whitespace-pre-line">
            <span className="text-blood mr-2">❯</span>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
