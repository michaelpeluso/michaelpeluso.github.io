import React from "react";
import { PinnedItem } from "./PinnedItem";
import { iconsMap } from "../basic/TagIcon";
import PageBuilder, { PageItem } from "../basic/PageBuilder";

const pinnedProjects = [
    {
        title: "Programming Snippets",
        date: "Oct 2023 - Present",
        description: "An accumulation of discrete projects spanning various topics and languages.",
        tags: ["C", "R", "Python", "Java", "Javascript", "Jupyter", "Opengl", "Html5", "Bootstrap"].filter((tag) => tag in iconsMap),
        link: "https://github.com/michaelpeluso/Program-Snippets",
    },
    {
        title: "Wallet Network",
        date: "Nov 2024 - Dec 2024",
        description: "A digital wallet app with a secure and scalable payment system.",
        tags: ["Python", "Mysql", "Flask", "Html5", "Bootstrap"].filter((tag) => tag in iconsMap),
        link: "https://github.com/michaelpeluso/Wallet-Netowrk",
    },
    {
        title: "GitGuru",
        date: "Mar 2024",
        description: "A front-end chat that utilizes Retrieval Augmented Generation (RAG) for GitHub support.",
        tags: ["Python", "Sqlite", "Flask", "Openai", "Langchain"].filter((tag) => tag in iconsMap),
        link: "https://github.com/michaelpeluso/git-guru",
    },
];

const Content: PageItem[] = [
    { type: "title", text: "Pinned" },
    {
        type: "body",
        text: (
            <>
                <p className="theme-body">
                    Take a look at some of my recent projects that I'm most proud of. Please feel free visiting my GitHub to learn more about each one. Take advantage of extra resources available under some projects like videos or demos. Hover over
                    the icons to see the technologies I used during development.
                </p>
                <br />
            </>
        ),
    },
    {
        type: "body",
        text: (
            <div className="mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
