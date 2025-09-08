import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Products from "./components/Products";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-purple-900 text-white font-sans">
      <Navbar />
      <Hero />
      <Features />
      <Products />
      <Reviews />
      <Footer />
    </div>
  );
}
