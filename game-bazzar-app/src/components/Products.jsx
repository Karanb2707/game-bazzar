import ps5 from "../assets/images/ps5.png";
import xbox from "../assets/images/xbox.png";
import gta from "../assets/images/gta.png";

const products = [
  { name: "PlayStation 5", desc: "Next-gen speed, stunning graphics, and epic adventures.", img: ps5 },
  { name: "Xbox Series X", desc: "True 4K gaming with the most powerful console ever.", img: xbox },
  { name: "GTA 6", desc: "Step into the most awaited open-world adventure.", img:gta},
];

export default function Products() {
  return (
    <section id="products" className="py-20 px-8">
      <h3 className="text-3xl font-bold text-center mb-12 text-green-400">🔥 Featured Products</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((p, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition text-center">
            <img src={p.img} alt={p.name} className="w-52 h-48 mx-auto mb-4 drop-shadow-[0_0_20px_rgba(0,255,150,0.6)] rounded-lg" loading="lazy" />
            <h4 className="text-xl font-bold">{p.name}</h4>
            <p className="mt-2 text-gray-300">{p.desc}</p>
            <button className="mt-4 bg-green-400 text-black px-5 py-2 rounded-full font-bold hover:bg-green-300 transition">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
