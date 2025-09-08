const reviews = [
  { text: "Best gaming store ever! Got my PS5 in 2 days.", name: "Alex" },
  { text: "Customer service is top-notch. Highly recommend.", name: "Priya" },
  { text: "Amazing deals on new games. I’ll shop here again!", name: "John" },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 px-8 bg-gray-900/70 backdrop-blur-md">
      <h3 className="text-3xl font-bold text-center mb-12 text-green-400">⭐ What Gamers Say</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {reviews.map((r, i) => (
          <div key={i} className="bg-gray-800 p-6 rounded-2xl shadow-lg">
            <p className="text-gray-300">“{r.text}”</p>
            <h4 className="mt-4 font-bold text-green-400">- {r.name}</h4>
          </div>
        ))}
      </div>
    </section>
  );
}
