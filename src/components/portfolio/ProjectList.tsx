import React from "react";
import { PageBuilder, PageItem } from "../basic/PageBuilder";
import { ListItem } from "./ListItem";
import { Link } from "react-router-dom";

const fullStackProjects = [
    {
        title: "Wallet Network",
        alert: "featured",
        date: "Dec 2024",
        description: "A secure digital wallet equiped with seamless fund transfers, bank account integration, and real-time transaction management within a scalable financial system.",
        link: "https://github.com/michaelpeluso/Wallet-Netowrk",
    },
    {
        title: "Git Guru",
        alert: "featured",
        date: "May 2024",
        description: "An AI-powered tool delivering instant programmatic support and automating README generation for GitHub repositories through text embedding, retrieval-augmented generation, and vector search.",
        link: "https://github.com/michaelpeluso/git-guru",
    },
    {
        title: "BookQuest",
        date: "May 2024",
        description: "A collaborative web application with a scalable Linux-based deployment system, multi-environment clustering, and efficient message queue handling.",
        link: "https://github.com/IT490-Tech-Team/IT490-Project",
    },
    {
        title: "Secret Storage",
        alert: "featured",
        date: "Jul 2024",
        description: "Exploratory project of authentication and security practices, utilizing PostgreSQL, involving user registration, encryption, hashing, salting, cookie and session, and OAuth implementations.",
        link: "https://github.com/michaelpeluso/Secret-Storage",
    },
    {
        title: "Communica Social",
        date: "Dec 2023",
        description: "A social app that gives users the freedom to post their thoughts online. Uses a custom-built CRUD API to make requests to a MongoDB database.",
        link: "https://github.com/michaelpeluso/Communica-Social",
    },
    {
        title: "Rent-A-Car",
        date: "Dec 2023",
        description: "A car dealership's application used to visualize and track customer, vehicle, and registration information. Oracle SQL Developer is used extensively.",
        link: "https://github.com/michaelpeluso/Rent-A-Car-TermProject",
    },
    {
        title: "TSKB",
        date: "OCT 2023",
        description: "A bookstore’s database-oriented input system that allows users to view and update purchase records for their customers.",
        link: "https://github.com/michaelpeluso/The-Story-Keeper-Bookstore",
    },
];

const programmingProjects = [
    {
        title: "Simple Neural Networks",
        alert: "new",
        date: "Jan 2025",
        description: "Inspired by Andrew Trask's 'Grokking Deep Learning', this repository contains files from his course repositry as well as personal scripts applying theories described in the book.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/Neural-Networks",
    },
    {
        title: "Machine Learning Market Insights",
        alert: "new",
        date: "Dec 2024",
        description: "This project explores market trends across different industries, using clustering and decision tree algorithms to uncover salary distribution and in-demand skill-set patterns.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/ML-Market-Insights",
    },
    {
        title: "Spatial Hash Simulator",
        date: "Sept 2024",
        description: "A particle simulation implementing spatial hashing to optimize collision detection.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/Spacial-Hash",
    },
    {
        title: "Motion Detector",
        date: "Mar 2024",
        description: "Real-time video motion detection via low-level pixel manipulation, analyzing frame-by-frame changes using JavaScript and HTML5.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/Motion-Detector",
    },
    {
        title: "CPU Scheduling Simulation",
        date: "Apr 2023",
        description: "A simulation of serial computing, timesharing, and multitasking. Written in Python.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/Processor-Simulation",
    },
    {
        title: "Binary-Float Converter",
        date: "Oct 2023",
        description: "Two programs that convert from a float value to a binary value and vice versa. Written in C.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/Binary-to-Float",
    },
    {
        title: "Binary Search Tree",
        date: "Apr 2022",
        description: "This Java project provides an implementation of a Binary Search Tree.",
        link: "https://github.com/michaelpeluso/Program-Snippets/tree/main/BinarySearchTree",
    },
];

const frontEndProjects = [
    {
        title: "My Personal Website",
        alert: "new",
        date: "Feb 2025",
        description: "An online portfolio showcasing my skills, work, and experience, built with React and Tailwind CSS. (hint: you're looking at it)",
        link: "https://michaelpeluso.github.io/",
    },
    {
        title: "The Guitar Shop",
        date: "Sept 2023",
        description: "A local store's brand new company website. Features a dynamically updating product library containing 50+ online items.",
        link: "https://www.theguitarshop.co",
    },
    {
        title: "CRISPR/Cas9",
        date: "May 2021",
        description: "3rd place winner of the 2021 new Jersey Chemistry Olympics Research and Web Development event focused on CRISPR Research.",
        link: "https://github.com/maxmmyron/njco-CRISPR",
    },
    {
        title: "Persistent Organic Pollutants",
        date: "May 2020",
        description: "1st place winner of the 2020 new Jersey Chemistry Olympics Research and Web Development event focused on Persistent Organic Pollutants.",
        link: "https://github.com/maxmmyron/njco-2020",
    },
    {
        title: "Microplastics in the Environment",
        date: "May 2019",
        description: "2nd place winner of the 2020 new Jersey Chemistry Olympics Research and Web Development event focused on Microplastics Pollution.",
        link: "https://github.com/maxmmyron/njco-2019",
    },
];

const gameDevProjects = [
    {
        title: "Escape-2",
        date: "May 2023",
        description: "Multi-level escape room simulator in virtual reality, built with Unity in C#.",
        link: "https://github.com/michaelpeluso/Escape-2",
    },
    {
        title: "Gunslinger",
        date: "Dec 2022",
        description: "2D side scrolling, arcade-like zombie shooter, built with Unity in C#.",
        link: "https://pelso.itch.io/gunslinger",
    },
    {
        title: "Project Boost",
        date: "Aug 2021",
        description: "3D platform game encouraging players to fly a rocket from one launchpad to the next while avoiding obstacles.",
        link: "https://pelso.itch.io/project-boost",
    },
];

export const ProjectList = () => {
    const content: PageItem[] = [
        { type: "title", text: "All Projects" },
        {
            type: "body",
            text: (
                <>
                    <p className="theme-body h-0">
                        Feel free to explore each project and discover more details on{" "}
                        <Link to="https://github.com/michaelpeluso" className="theme-link font-normal">
                            GitHub
                        </Link>
                        .
                    </p>
                </>
            ),
        },
        { type: "subtitle", text: "Full Stack Application Development", snippet: "" },
        {
            type: "body",
            text: (
                <div className="flex flex-col gap-6">
                    {fullStackProjects.map((project, index) => (
                        <div id={project.title.replace(/\s+/g, "").toLowerCase()}>
                            <ListItem key={index} {...project} />
                        </div>
                    ))}
                </div>
            ),
        },
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
        { type: "subtitle", text: "Static & Front-End Web Development", snippet: "" },
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
