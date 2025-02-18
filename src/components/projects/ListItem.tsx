import React from "react";
import { Link } from "react-router-dom";

interface ProjectProps {
    title: string;
    date: string;
    description: string;
    link: string;
}

export const ListItem: React.FC<ProjectProps> = ({ title, date, description, link }) => {
    return (
        <Link to={link}>
            <div className="relative bg-shadow lg:bg-transparent p-3 px-4 rounded-lg flex flex-col gap-1 hover:bg-shadow duration-300 w-full">
                <div className="flex justify-between items-start">
                    <p className="theme-body">{title}</p>
                    <p className="theme-muted italic">
                        <span className="text-[0.6rem] md:text-[0.75rem] lg:text-sm">{date}</span>
                    </p>
                </div>
                <p className="theme-muted">{description}</p>
            </div>
        </Link>
    );
};
