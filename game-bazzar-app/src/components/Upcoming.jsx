const upcoming = [
    { name: "GTA VI", date: "2025", desc: "The most awaited open-world epic." },
    { name: "Cyberpunk 2077: Expansion", date: "2025", desc: "New story & futuristic chaos." },
    { name: "FIFA 26", date: "2026", desc: "Next-gen football experience." },
];

export default function Upcoming() {
    return (
        <section id="upcoming" className="py-12 px-8 bg-gray-900/70 backdrop-blur-md">
            <h3 className="text-3xl font-bold text-center mb-12 text-green-400">
                🚀 Upcoming Releases
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {upcoming.map((g, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center gap-2 p-6 bg-purple-900 rounded-2xl shadow-lg hover:scale-105 transition"
                    >
                        <div className="flex flex-col items-center gap-1">
                            <h4 className="text-xl font-bold">{g.name}</h4>
                            <p className="text-sm text-gray-100">Release: {g.date}</p>
                        </div>
                        <p className="mt-2 text-gray-200">{g.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
