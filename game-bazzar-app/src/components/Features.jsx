const features = [
  { title: "🚀 Fast Delivery", desc: "Get your favorite games & consoles delivered lightning-fast.", color: "from-purple-700 to-purple-900" },
  { title: "💰 Best Prices", desc: "Unbeatable deals on all your gaming needs.", color: "from-green-700 to-green-900" },
  { title: "🎮 Top Brands", desc: "From PlayStation to Xbox — we’ve got you covered.", color: "from-blue-700 to-blue-900" },
  { title: "🔥 Exclusive Games", desc: "Find trending & rare games only available here.", color: "from-pink-700 to-pink-900" },
  { title: "💬 24/7 Support", desc: "We’re always here for your gaming journey.", color: "from-yellow-600 to-yellow-800" },
  { title: "🔒 Secure Payments", desc: "Shop with full confidence, always.", color: "from-red-700 to-red-900" },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-8 bg-gray-900/70 backdrop-blur-md">
      <h3 className="text-3xl font-bold text-center mb-12 text-green-400">⚡ Why Choose Game Bazzar?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((f, i) => (
          <div key={i} className={`p-8 rounded-2xl bg-gradient-to-br ${f.color} shadow-lg hover:scale-105 transition`}>
            <h4 className="text-xl font-bold">{f.title}</h4>
            <p className="mt-2 text-gray-200">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
