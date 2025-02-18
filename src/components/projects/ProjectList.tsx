import React from "react";
import { PageBuilder, PageItem } from "../basic/PageBuilder";
import { ListItem } from "./ListItem";

const programmingProjects = [
    {
        title: "Simple Neural Networks",
        date: "2025",
        description: "Inspired by Andrew Trask's 'Grokking Deep Learning', this repository contains files from his course repositry as well as personal scripts applying theories described in the book.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/Neural-Networks",
    },
    {
        title: "Machine Learning Market Insights",
        date: "2024",
        description: "This project explores market trends across different industries, using clustering and decision tree algorithms to uncover salary distribution and in-demand skill-set patterns.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/ML-Market-Insights",
    },
    {
        title: "Motion Detector",
        date: "2024",
        description: "Real-time video motion detection via low-level pixel manipulation, analyzing frame-by-frame changes using JavaScript and HTML5.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/Motion-Detector",
    },
    {
        title: "Spatial Hash Simulator",
        date: "2024",
        description: "A particle simulation implementing spatial hashing to optimize collision detection.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/Spacial-Hash",
    },
    {
        title: "CPU Scheduling Simulation",
        date: "2023",
        description: "A simulation of serial computing, timesharing, and multitasking. Written in Python.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/Processor-Simulation",
    },
    {
        title: "Binary-Float Converter",
        date: "2023",
        description: "Two programs that convert from a float value to a binary value and vice versa. Written in C.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/Binary-to-Float",
    },
    {
        title: "Binary Search Tree",
        date: "2023",
        description: "This Java project provides an implementation of a Binary Search Tree.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/BinarySearchTree",
    },
];

const fullStackProjects = [
    {
        title: "Wallet Network",
        date: "2024",
        description: "A digital wallet app with a secure and scalable payment system.",
        link: "https://github.com/michaelpeluso/Wallet-Netowrk",
    },
    {
        title: "Git Guru",
        date: "2024",
        description: "A front-end chat that utilizes Retrieval Augmented Generation (RAG) to provide instant programmatic support for any public GitHub repository.",
        link: "https://github.com/michaelpeluso/git-guru",
    },
    {
        title: "BookQuest",
        date: "2024",
        description: "A book reviewing app featuring asynchronous message handling, secure cross-cluster synchronization, and multi-environment deployment.",
        link: "https://github.com/IT490-Tech-Team/IT490-Project",
    },
    {
        title: "Secret Storage",
        date: "2024",
        description: "An in-depth exploration of web security, including registration, encryption, hashing, salting, cookie handling, and OAuth implementations.",
        link: "https://github.com/michaelpeluso/Secret-Storage",
    },
    {
        title: "Communica Social",
        date: "2023",
        description: "A social app that gives users the freedom to post their thoughts online. Uses a custom-built CRUD API to make requests to a MongoDB database.",
        link: "https://github.com/michaelpeluso/Communica-Social",
    },
    {
        title: "Rent-A-Car",
        date: "2023",
        description: "A car dealership's application used to visualize and track customer, vehicle, and registration information. Oracle SQL Developer is used extensively.",
        link: "https://github.com/michaelpeluso/Rent-A-Car-TermProject",
    },
    {
        title: "TSKB",
        date: "2023",
        description: "A bookstore’s database-oriented input system that allows users to view and update purchase records for their customers.",
        link: "https://web.njit.edu/~mp272/IT_202/Assignment4/index.php",
    },
];

const frontEndProjects = [
    {
        title: "The Guitar Shop",
        date: "2023",
        description: "A local store's brand new company website. Features a dynamically updating product library containing 50+ online items.",
        link: "https://www.theguitarshop.co",
    },
    {
        title: "CRISPR/Cas9",
        date: "2021",
        description: "3rd place winner of the 2021 New Jersey Chemistry Olympics Research and Web Development event focused on CRISPR Research.",
        link: "https://github.com/maxmmyron/njco-CRISPR",
    },
    {
        title: "Persistent Organic Pollutants",
        date: "2020",
        description: "1st place winner of the 2020 New Jersey Chemistry Olympics Research and Web Development event focused on Persistent Organic Pollutants.",
        link: "https://github.com/maxmmyron/njco-2020",
    },
    {
        title: "Microplastics in the Environment",
        date: "2019",
        description: "2nd place winner of the 2020 New Jersey Chemistry Olympics Research and Web Development event focused on Microplastics Pollution.",
        link: "https://github.com/maxmmyron/njco-2019",
    },
];

const gameDevProjects = [
    {
        title: "Escape-2",
        date: "2023",
        description: "Multi-level escape room simulator in virtual reality.",
        link: "https://github.com/michaelpeluso/Escape-2",
    },
    {
        title: "Gunslinger",
        date: "2023",
        description: "A 2D side scrolling, arcade-like shooter. The player must fight zombies and acquire new weapons in order to survive.",
        link: "https://pelso.itch.io/gunslinger",
    },
    {
        title: "Project Boost",
        date: "2021",
        description: "A 3D platform game requiring players to fly a rocket from one launchpad to the next while avoiding obstacles.",
        link: "https://pelso.itch.io/project-boost",
    },
];

export const ProjectList = () => {
    const content: PageItem[] = [
        { type: "title", text: "My Full Portfolio" },
        { type: "subtitle", text: "Applied Computational Programming", snippet: "" },
        {
            type: "body",
            text: (
                <div className="flex flex-col gap-6">
                    {programmingProjects.map((project, index) => (
                        <ListItem key={index} {...project} />
                    ))}
                </div>
            ),
        },
        { type: "subtitle", text: "Full Stack Application Development", snippet: "" },
        {
            type: "body",
            text: (
                <div className="flex flex-col gap-6">
                    {fullStackProjects.map((project, index) => (
                        <ListItem key={index} {...project} />
                    ))}
                </div>
            ),
        },
        { type: "subtitle", text: "Static & Front End Web Development", snippet: "" },
        {
            type: "body",
            text: (
                <div className="flex flex-col gap-6">
                    {frontEndProjects.map((project, index) => (
                        <ListItem key={index} {...project} />
                    ))}
                </div>
            ),
        },
        { type: "subtitle", text: "Game Development", snippet: "" },
        {
            type: "body",
            text: (
                <div className="flex flex-col gap-6">
                    {gameDevProjects.map((project, index) => (
                        <ListItem key={index} {...project} />
                    ))}
                </div>
            ),
        },
    ];

    return <PageBuilder items={content} />;
};
