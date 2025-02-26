import { PageBuilder, PageItem } from "../basic/PageBuilder";
import { iconsMap, TagIcon } from "../basic/TagIcon";

const Tags: React.FC<{ tags: string[] }> = ({ tags }) => {
    return (
        <div className="flex flex-wrap pb-3 gap-2 md:gap-3 my-2">
            {tags.map((name) => (
                <TagIcon iconName={name} />
            ))}
        </div>
    );
};

const Content: PageItem[] = [
    { type: "title", text: "Experience" },
    { type: "subtitle", text: "Backend Software Developer", snippet: "Sept 2024 - Dec 2024" },
    {
        type: "body",
        text: (
            <>
                <Tags tags={["AWS", "OpenAI", "MongoDB", "Node", "JavaScript", "Postman"]} />
                <a className="theme-link" href="https://gamerun.ai/" target="_blank" rel="noopener noreferrer">
                    GameRun
                </a>
                <div className="text-muted">
                    <p>
                        <br />
                        Built a live-streaming sports platform with highlight generation, performance analysis, and insights. Capstone project placed <span className="text-primary">2nd of 28</span>.
                        <br />
                        <br />
                        Enhanced processing speed by <span className="text-primary">10x</span> via asynchronous, concurrent, batching, and bucketing algorithms (120+ minutes of footage in ~25 minutes).
                        <br />
                        <br />
                        Automated AI-driven, player video analysis with <span className="text-primary">AWS</span> Lambda, SageMaker, Rekognition, and OpenAI using facial and jersey recognition.
                        <br />
                        <br />
                        Developed 18 API routes with Postman, connecting MongoDB and AWS services for efficient data pipelining."
                    </p>
                </div>
            </>
        ),
    },
    { type: "subtitle", text: "STRIDE Software Developer", snippet: "Jun 2024 - Aug 2024" },
    {
        type: "body",
        text: (
            <>
                <Tags tags={["OpenAI", "Python", "Pandas", "Numpy", "Sqlite"]} />
                <a className="theme-link" href="https://www.asrcfederal.com/" target="_blank" rel="noopener noreferrer">
                    ASRC Ferderal
                </a>
                <div className="text-muted">
                    <p>
                        <br />
                        Led the full-cycle, development of <span className="text-primary">P.A.N.D.O.R.A.</span>, an AI-powered solution for NASA satellite research as part of an R&D initiative. <br />
                        <br />
                        Reduced API costs by <span className="text-primary">50%</span> through prompt engineering, batch processing, and fine-tuning while ensuring deterministic AI results.
                        <br />
                        <br />
                        Implemented <span className="text-primary">NLP</span>-driven resource management using OpenAI’s ChatGPT and Python libraries like Pandas, NumPy, and Matplotlib.
                        <br />
                    </p>
                </div>
            </>
        ),
    },
    { type: "subtitle", text: "IT Quality Assurance Technician", snippet: "Jan 2024" },
    {
        type: "body",
        text: (
            <>
                <Tags tags={["Kaseya"]} />
                <a className="theme-link" href="https://outsourcemyit.com/" target="_blank" rel="noopener noreferrer">
                    Outsource My I.T.
                </a>
                <div className="text-muted">
                    <p>
                        <br />
                        Managed IT and system issues for <span className="text-primary">300+</span> clients via Kaseya, addressing client security, program maintenance, and user account administration.
                        <br />
                        <br />
                        Diagnosed and resolved technical challenges (DNS configurations, connectivity) with a team, improving network stability and user experience.
                        <br />
                    </p>
                </div>
            </>
        ),
    },
    { type: "subtitle", text: "Project Manager, Website Developer", snippet: "Jun 2023 - Sept 2023" },
    {
        type: "body",
        text: (
            <>
                <Tags tags={["GoogleCloud", "JavaScript", "HTML", "Bootstrap"]} />
                <a className="theme-link" href="https://theguitarshop.co/" target="_blank" rel="noopener noreferrer">
                    The Guitar Shop
                </a>
                <div className="text-muted">
                    <p>
                        <br />
                        Singlehandedly designed and developed a custom <span className="text-primary">12-page</span> company website managed via GoogleCloud Platform.
                        <br />
                        <br />
                        Deployed a dynamically updating product library and filtering system for 100+ products, boosting customer engagement and sales.
                        <br />
                        <br />
                        Established online customer service outlets via embedded email support.
                        <br />
                    </p>
                </div>
            </>
        ),
    },
    { type: "subtitle", text: "Website Developer", snippet: "Apr 2023 - Aug 2023" },
    {
        type: "body",
        text: (
            <>
                <Tags tags={["WordPress", "JavaScript", "HTML", "CSS"]} />
                <a className="theme-link" href="http://c3designsllc.com/" target="_blank" rel="noopener noreferrer">
                    C3 Designs LLC
                </a>
                <div className="text-muted">
                    <p>
                        <br />
                        Transformed visions from clients into <span className="text-primary">3</span> fully functional, interactive web applications, offering an online presence and increasing awareness.
                        <br />
                        <br />
                        Created 10+ dynamic, interactive elements like navigation bars, carousels, and store reviews via WordPress and WordPress Engine.
                        <br />
                    </p>
                </div>
            </>
        ),
    },

    { type: "title", text: "University" },

    { type: "subtitle", text: "Georgia Institute of Technology", snippet: "Sept 2025 - Present" },
    {
        type: "body",
        text: (
            <>
                <div className="text-muted">
                    <p>
                        <span className="theme-body">Master of Science in Computer Science</span>
                        <br />
                        Current Student
                        <br />
                        Online & part-time
                        <br />
                    </p>
                </div>
            </>
        ),
    },
    { type: "subtitle", text: "New Jersey Institute of Technology", snippet: "Sept 2021 - May 2025" },
    {
        type: "body",
        text: (
            <>
                <div className="text-muted">
                    <p>
                        <span className="theme-body">Bachelor of Science in Information Technology</span>
                        <br />
                        Minor in Computer Science
                        <br />
                        Minor in Web and Mobile Development
                        <br />
                        <br />
                        Graduated early with Honors
                        <br />
                    </p>
                </div>
            </>
        ),
    },
];

const Career = () => {
    return <PageBuilder items={Content} />;
};

export default Career;
