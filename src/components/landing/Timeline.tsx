// add a single timelineItems array for ordering
const timelineItems = [
    { id: 1, side: "left", title: "Backend Software Developer – GameRun", description: "Built a live-streaming sports platform with AWS.", date: "Sep 2024 – Dec 2024" },
    { id: 2, side: "left", title: "STRIDE Software Developer – ASRC Federal", description: "Led full-cycle development of P.A.N.D.O.R.A.", date: "Jun 2024 – Aug 2024" },
    { id: 3, side: "left", title: "New Jersey Institute of Technology", description: "Bachelor of Science in Information Technology", date: "Sep 2021 – Dec 2024" },
    { id: 4, side: "right", title: "Git Guru", description: "AI-powered tool that provides programmatic support.", date: "May 2024" },
    { id: 5, side: "right", title: "BookQuest", description: "full-stack web app for book searching...", date: "May 2024" },
];

export default function Timeline() {
    return (
        <div className="min-h-screen p-8">
            <div className="relative max-w-6xl mx-auto">
                <div className="absolute left-1/2 top-0 w-1 bg-shine h-full" />
                {timelineItems.map((item, i) => (
                    <div key={item.id} className="mb-8 flex justify-between items-center w-full">
                        {item.side === "left" ? (
                            <>
                                <div className={`w-5/12 text-right ${i % 2 === 0 ? "mt-8" : "mt-0"}`}>
                                    <span className="text-xs text-muted italic">{item.date}</span>
                                    <h3 className="text-xl text-body font-semibold">{item.title}</h3>
                                    <p className="text-sm text-muted">{item.description}</p>
                                </div>
                                <div className="flex items-center justify-center w-5 h-5 rounded-full z-10 ml-1 border-[3px] border-primary bg-background" />
                                <div className="w-5/12" />
                            </>
                        ) : (
                            <>
                                <div className="w-5/12" />
                                <div className="flex items-center justify-center w-5 h-5 rounded-full z-10 ml-1 border-[3px] border-primary bg-background" />
                                <div className={`w-5/12 text-left ${i % 2 === 0 ? "mt-8" : "mt-0"}`}>
                                    <span className="text-xs text-muted italic">{item.date}</span>
                                    <h3 className="text-xl text-body font-semibold">{item.title}</h3>
                                    <p className="text-sm text-muted">{item.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
