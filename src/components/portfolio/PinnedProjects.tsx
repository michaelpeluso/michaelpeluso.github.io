import React from "react";
import SpecialContainer from "../basic/SpecialContainer";
import { TagIcon } from "../basic/TagIcon";
import PageBuilder, { PageItem } from "../basic/PageBuilder";
import { Button } from "../basic/Button";

const pinnedProjects = [
    {
        title: "Book Quest",
        date: "May 2024",
        description: "A multi-environment, Linux-based web system designed with distributed architecture, featuring message queue integration, automated provisioning, and cluster-based deployment.",
        tags: ["JavaScript", "PHP", "phpMyAdmin", "Linux", "RabbitMQ"],
        link: "https://github.com/IT490-Tech-Team/IT490-Project",
        image: require("../../assets/images/pinned-projects/book-quest.png"),
    },
    {
        title: "Git Guru",
        date: "May 2024",
        description: "An AI-powered tool delivering instant programmatic support and automating README generation for GitHub repositories through text embedding, retrieval-augmented generation, and vector search.",
        tags: ["Python", "Sqlite", "Flask", "OpenAI", "Langchain"],
        link: "https://github.com/michaelpeluso/git-guru",
        image: require("../../assets/images/pinned-projects/git-guru.png"),
    },
    {
        title: "Wallet Network",
        date: "Dec 2024",
        description: "A secure digital wallet equiped with seamless fund transfers, bank account integration, and real-time transaction management within a scalable financial system.",
        tags: ["Python", "MySQL", "Flask"],
        link: "https://github.com/michaelpeluso/Wallet-Netowrk",
        image: require("../../assets/images/pinned-projects/wallet-network.png"),
    },
];

const Content: PageItem[] = [
    { type: "title", text: "Featured" },
    {
        type: "body",
        text: (
            <>
                <p className="theme-body">
                    Take a look at some of my recent projects that I'm most proud of. Take advantage of any extra resources included in some repositories, like video demos, product reports, or extensive documentaion. Hover over the icons to see the
                    technologies I used during development.
                </p>
                <br />
            </>
        ),
    },
    {
        type: "body",
        text: (
            <div className="flex flex-col gap-6">
                {pinnedProjects.map((project) => (
                    <SpecialContainer>
                        <div className="relative z-10 sm:w-[50%]">
                            <h2 className="theme-subtitle">{project.title}</h2>
                            <p className="theme-body pt-2">
                                {project.description}
                                <span className="theme-muted xs:text-xl md:text-base italic pl-3 md:pl-5">{project.date}</span>
                            </p>

                            {/* Tags Section */}
                            <div className="flex flex-wrap pt-2 gap-2 md:gap-3 my-2">
                                {project.tags.map((name, i) => (
                                    <TagIcon key={i} iconName={name} />
                                ))}
                            </div>

                            {/* Button */}
                            <div className="mt-auto gap-3 pt-3">
                                <Button link={project.link} title="View Code" />
                            </div>
                        </div>

                        {/* Image */}
                        {project.image && (
                            <div className="hidden md:block absolute left-[55%] top-[-20%] w-[60%] h-[30rem] pointer-events-none">
                                <img src={project.image} alt="Project Image" className="w-full h-full object-cover object-left-top rotate-12 opacity-80" />
                            </div>
                        )}
                    </SpecialContainer>
                ))}
            </div>
        ),
    },
];

export const PinnedProjects = () => {
    return <PageBuilder items={Content} />;
};
