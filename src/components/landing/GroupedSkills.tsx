import React from "react";

const GroupedSkills = () => {
    return (
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl mx-auto p-12 md:p-10">
            {/* Left Section: Image */}
            <div className="flex items-center justify-center w-full md:w-1/3 h-64 md:h-auto border-2 border-black rounded-lg bg-gray-300">
                <p className="text-lg font-semibold">Image here</p>
            </div>

            {/* Right Section: Text Boxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full md:w-2/3">
                {Array.from({ length: 6 }).map((_, index) => (
                    <div key={index} className="border-2 border-black rounded-lg p-4 bg-gray-200 text-center shadow-md">
                        <h3 className="text-xl font-bold">Title</h3>
                        <p className="text-sm">text</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GroupedSkills;
