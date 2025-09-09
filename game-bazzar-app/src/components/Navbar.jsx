export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-8 py-5 fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50 shadow-lg">
      <h1 className="text-3xl font-extrabold text-green-400">🎮 Game Bazzar</h1>
      <nav className="hidden md:flex space-x-8">
        <a href="#" className="hover:text-green-400 transition font-semibold">Home</a>
        <a href="#features" className="hover:text-green-400 transition font-semibold">Features</a>
        <a href="#products" className="hover:text-green-400 transition font-semibold">Products</a>
        <a href="#reviews" className="hover:text-green-400 transition font-semibold">Reviews</a>
      </nav>
      <a href="signup.html" className="hidden md:block bg-green-400 text-black px-5 py-2 rounded-full font-bold hover:bg-green-300 transition">
        Sign Up
      </a>
    </header>
  );
}
