import { motion } from "framer-motion";
import games from "../assets/images/games.png";

export default function wHero() {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center text-center px-6 pt-20 pb-6">
      <motion.img
        src={games}
        alt="Games"
        className="w-80 h-80 md:w-[380px] md:h-[260px] drop-shadow-[0_0_25px_rgba(0,255,150,0.8)] rounded-xl"
        loading="lazy"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05 }}
      />
      <motion.h2
        className="mt-8 text-4xl md:text-6xl font-extrabold text-green-400 drop-shadow-lg"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Level Up Your Gaming
      </motion.h2>
      <motion.p
        className="mt-6 max-w-2xl font-semibold text-gray-200"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Shop the latest consoles, accessories & legendary titles with exclusive offers.
      </motion.p>
      <motion.a
        href="signup.html"
        className="mt-6 bg-green-400 text-black px-6 py-3 rounded-full font-bold hover:bg-green-300 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.9 }}
      >
        Get Started
      </motion.a>
    </section>
  );
}
