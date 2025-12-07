export default function Header() {
  return (
    <header className="w-full flex flex-col items-center text-center pt-12 px-6">
      <div className="relative w-full max-w-3xl">
        <img
          src="./postgres-stress-elephant.jpg"
          alt="Postgres Stress Disorder"
          className="w-full object-contain drop-shadow-[0_0_35px_rgba(41,230,255,0.35)]"
        />
      </div>

      <h1
        className="mt-8 text-5xl font-extrabold tracking-tight 
                     text-[#29e6ff] drop-shadow-[0_0_8px_rgba(41,230,255,0.45)]"
      >
        POSTGRES STRESS DISORDER
      </h1>

      <p className="mt-3 text-lg text-gray-300 max-w-xl">
        A dev collective dedicated to learning, breaking things, and pretending the errors were
        intentional.
      </p>
    </header>
  );
}
