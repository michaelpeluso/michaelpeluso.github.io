import React from "react";
import { PinnedItem } from "./PinnedItem";
import { iconsMap } from "../basic/TagIcon";
import PageBuilder, { PageItem } from "../basic/PageBuilder";

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
        tags: ["Python", "Sqlite", "Flask", "Openai", "Langchain"],
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
            <div className="mx-auto">
                <div className="flex flex-col gap-6">
                    {pinnedProjects.map((project, index) => (
                        <PinnedItem key={index} {...project} />
                    ))}
                </div>
            </div>
        ),
    },
];

export const PinnedProjects = () => {
    return <PageBuilder items={Content} />;
};
