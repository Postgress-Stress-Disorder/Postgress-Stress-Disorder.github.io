import Header from "./components/sections/UI/Header";
import Divider from "./components/sections/Divider/Divider";
import TerminalSection from "./components/sections/TerminalSection/TerminalSection";
import TerminalNav from "./components/sections/TerminalNav/TerminalNav";
function App() {
  return (
    <>
      <Header />
      <Divider
        query="SELECT * FROM dev_collective WHERE sanity <= 0;"
        error={{
          code: "sanity_constraint_violation",
          detail: "expected > 0, got 0",
          hint: "maybe take a break",
        }}
      />
      <TerminalSection title="Who We Are">
        A scattered cult of developers bound together by caffeine, regret, and an unhealthy
        relationship with relational databases. We build things because nobody can stop us, and
        because therapy is expensive. Corporate best-practices are observed only as an
        archaeological curiosity.
        <p>
          <span className="text-blood">❯</span> We chase bizarre ideas, half-finished prototypes,
          weird tech stacks, and the kind of “learning experiences” that ruin weekends. If a project
          survives long enough to run, that’s a win. If it crashes in a way that teaches us
          something, also a win. If it takes out prod? Well… that’s character development.
        </p>
      </TerminalSection>
      <Divider
        query="SELECT mission FROM dev_collective WHERE meaning IS NOT NULL;"
        error={{
          code: "no_rows_returned",
          detail: "collective purpose undefined since inception",
          hint: "improvise confidently",
        }}
      />
      <TerminalSection title="Our Purpose">
        <ul className="list-none space-y-2 mt-2">
          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Build things for fun, chaos, and accidental enlightenment.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Create projects nobody asked for, but everyone enjoys anyway.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Learn by breaking, fixing, swearing, and repeating.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Make space for experimentation without corporate rituals.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Replace fear of failure with curiosity and caffeine.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Collaborate without bureaucracy, ego, or five-layer approval chains.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>
              Build a community where everyone gets better together, intentionally or not.
            </span>
          </li>
        </ul>
      </TerminalSection>
      <Divider
        query="SELECT principle FROM team_values WHERE enforced = TRUE;"
        error={{
          code: "no_matching_rows",
          detail: "expected at least one functional value",
          hint: "consider defining some",
        }}
      />
      <TerminalSection title="Our Values">
        <ul className="list-none space-y-2 mt-2">
          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Chaos, but with comments.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Velocity, but without guilt.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Learning, but only the painful way.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>
              Zero bureaucracy. We left the corporate womb willingly and we're not crawling back for
              color-coded swimlanes.
            </span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Shipping over perfection.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Review when it matters, trust by default.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Document it only when people keep asking for it.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Deploy bravely, rollback gracefully.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Own your mess, laugh, improve the next one.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Respect time — your own and everyone else's.</span>
          </li>

          <li className="flex gap-2">
            <span className="text-neon-main">❯</span>
            <span>Leave the codebase slightly less cursed than you found it.</span>
          </li>
        </ul>
      </TerminalSection>
      <Divider
        query="SELECT link FROM navigation WHERE accessible = TRUE;"
        error={{
          code: "no_matching_rows",
          detail: "navigation requires manual discovery",
          hint: "try scanning for repositories",
        }}
      />
      <TerminalNav />
    </>
  );
}

export default App;
