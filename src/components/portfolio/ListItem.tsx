import React from "react";
import { Link } from "react-router-dom";

interface ProjectProps {
    title: string;
    alert?: string;
    date: string;
    description: string;
    link: string;
}

export const ListItem: React.FC<ProjectProps> = ({ title, alert, date, description, link }) => {
    return (
        <Link to={link}>
            <div className="group relative bg-shadow lg:bg-transparent p-3 px-4 rounded-lg flex flex-col gap-1 hover:bg-shadow duration-300 w-full">
                <div className="flex justify-between items-start">
                    {alert ? (
                        <div className="flex gap-4">
                            <p className="theme-body">{title}</p>
                            <span className="top-0 right-[-1.5rem] flex items-center">
                                <span className="h-2 w-2 bg-accent rounded-full"></span>
                                <span className="ml-[0.1rem] md:ml-1 text-[0.6rem] md:text-[0.65rem] opacity-100 md:opacity-0 translate-x-1 md:-translate-x-0  group-hover:opacity-100 group-hover:translate-x-1  transition-all duration-300">
                                    {alert}
                                </span>
                            </span>
                        </div>
                    ) : (
                        <p className="theme-body">{title}</p>
                    )}
                    <p className="theme-muted italic">
                        <span className="text-[0.6rem] md:text-[0.75rem] lg:text-sm">{date}</span>
                    </p>
                </div>
                <p className="theme-muted">{description}</p>
            </div>
        </Link>
    );
};
