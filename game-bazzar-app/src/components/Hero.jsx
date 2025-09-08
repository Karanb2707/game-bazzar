import games from "../assets/images/games.png";

export default function wHero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
      <img src={games} alt="PlayStation 5" className="w-80 h-80 md:w-[380px] h-[260px] drop-shadow-[0_0_25px_rgba(0,255,150,0.8)]" loading="lazy" />
      <h2 className="mt-8 text-4xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg">
        Level Up Your Gaming
      </h2>
      <p className="mt-4 max-w-2xl text-gray-200">
        Shop the latest consoles, accessories & legendary titles with exclusive offers.
      </p>
      <a href="signup.html" className="mt-6 bg-green-400 text-black px-6 py-3 rounded-full font-bold hover:bg-green-300 transition">
        Get Started
      </a>
    </section>
  );
}
