import game1 from "../assets/images/game1.png";
import game2 from "../assets/images/game2.png";
import game3 from "../assets/images/game3.png";

const products = [
  { name: "Cricket 24", desc: "Experience the thrill of international cricket with realistic gameplay. Play iconic tournaments and dominate the pitch like a pro.", img: game1 },
  { name: "Dragon Ball FighterZ", desc: "Unleash explosive combos in this fast-paced anime fighter. Battle with your favorite Dragon Ball heroes in stunning 2.5D action.", img: game2 },
  { name: "GTA V", desc: "Step into Los Santos for an unforgettable open-world journey. Live the high life, plan heists, and explore endless adventures.", img: game3 },
];

export default function Products() {
  return (
    <section id="products" className="py-20 px-8">
      <h3 className="text-3xl font-bold text-center mb-12 text-green-400">🔥 Featured Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((p, i) => (
          <div key={i} className="flex flex-col items-center gap-2 bg-gray-700 p-6 rounded-2xl shadow-lg hover:scale-105 transition">
            <img src={p.img} alt={p.name} className="w-48 h-48 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(0,255,150,0.6)] rounded-lg" loading="lazy" />
            <h4 className="font-bold text-center">{p.name}</h4>
            <p className="mt-2 text-gray-200">{`${p.desc.substring(0,100)}...`}</p>
            <button className="mt-4 bg-green-400 text-black px-5 py-2 rounded-full font-bold hover:bg-green-300 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
