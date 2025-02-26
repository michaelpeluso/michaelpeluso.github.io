import { Link } from "react-router-dom";

const timelineItems = [
    {
        title: "Attend Georgia Institute of Technology",
        date: "Sep 2025",
        description: "Pursuing a Master of Science in Computer Science.",
        side: "left",
        page: "Career",
    },
    {
        title: "Simple Neural Networks",
        date: "Jan 2025",
        description: "Neural network implementations inspired by 'Grokking Deep Learning', with personal experiments and scripts.",
        side: "right",
        page: "Portfolio",
    },
    {
        title: "Graduate New Jersey Institute of Technology",
        date: "Dec 2024",
        description: "Graduated early with Honors, earning a BS in IT with minors in CS and Web Development.",
        side: "left",
        page: "Career",
    },
    {
        title: "Wallet Network",
        date: "Dec 2024",
        description: "A secure digital wallet with fund transfers, bank integration, and real-time transaction management.",
        side: "right",
        page: "Portfolio",
    },
    {
        title: "Machine Learning Market Insights",
        date: "Dec 2024",
        description: "Analyzed market trends with clustering and decision tree algorithms to uncover salary patterns.",
        side: "right",
        page: "Portfolio",
    },
    {
        title: "Backend Software Developer",
        date: "Sep - Dec 2024",
        description: "Built a live-streaming sports platform with AI-driven player analysis and improved video processing speeds by 10x.",
        side: "left",
        page: "Career",
    },
    {
        title: "Spatial Hash Simulator",
        date: "Sept 2024",
        description: "A particle simulation with spatial hashing to optimize collision detection.",
        side: "right",
        page: "Portfolio",
    },
    {
        title: "STRIDE Software Developer",
        date: "Jun - Aug 2024",
        description: "Built P.A.N.D.O.R.A., an AI-powered NASA research tool, cutting API costs by 50% through prompt engineering.",
        side: "left",
        page: "Career",
    },
    {
        title: "BookQuest",
        date: "May 2024",
        description: "A collaborative app with Linux-based deployment, multi-environment clustering, and message queue handling.",
        side: "right",
        page: "Portfolio",
    },
    {
        title: "Git Guru",
        date: "May 2024",
        description: "An AI-powered tool automating README generation and providing GitHub support via text embedding and vector search.",
        side: "right",
        page: "Portfolio",
    },
];

export default function Timeline() {
    return (
        <div className="min-h-screen p-8">
            <h2 className="theme-title text-center ">Recent Milestones</h2>
            <div className="relative max-w-6xl mx-auto">
                <div className="absolute md:left-1/2 top-0 w-1 bg-shine h-full" />
                {timelineItems.map((item, i) => (
                    <>
                        <div key={i} className="mb-6 md:mb-0 flex justify-between items-center w-full">
                            {/* Circle for small screens */}
                            <div className="absolute md:hidden items-center justify-center w-5 h-5 rounded-full z-10 -ml-2 border-[3px] border-primary bg-background" />
                            {/* Content */}
                            <Link
                                to={`/${item.page}#${item.title.replace(/\s+/g, "").toLowerCase()}`}
                                className={`peer w-[1000%] md:w-5/12 pl-7 md:p-4 rounded-xl duration-200 md:hover:bg-shadow ${item.side === "left" ? "md:text-right" : "text-left md:translate-x-[140%]"} ${i % 2 === 0 ? "mt-8" : "mt-0"}`}
                                style={{ marginTop: 0 }}
                            >
                                <span className="text-xs text-muted italic">{item.date}</span>
                                <h3 className="text-lg md:text-xl text-body font-semibold -mt-1 md:mt-0">{item.title}</h3>
                            </Link>
                            {/* Circle for large screens */}
                            <div className="hidden md:flex items-center justify-center w-5 h-5 rounded-full z-10 ml-1 border-[3px] border-primary bg-background duration-200 md:peer-hover:bg-primary" />{" "}
                            <div className={`w-5/12 ${item.side === "right" ? "" : "w-5/12"}`} />
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
}
