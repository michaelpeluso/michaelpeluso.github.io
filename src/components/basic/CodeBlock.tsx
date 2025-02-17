import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeBlockProps {
    code: string;
    language?: string;
}

const CodeBlock: React.FC<CodeBlockProps> = ({ code, language = "javascript" }) => {
    return (
        <div className="w-full max-w-3xl bg-[#1E1E1E] rounded-lg shadow-lg border border-[#2A2A2A]">
            {/* Minimal Terminal Header */}
            <div className="flex items-center px-4 py-2 bg-[#252526] rounded-t-lg border-b border-[#2A2A2A]">
                <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="ml-4 text-xs text-gray-400">terminal</span>
            </div>

            {/* Code Area */}
            <div className="p-4 overflow-auto rounded-b-lg">
                <SyntaxHighlighter
                    language={language}
                    style={dracula}
                    customStyle={{
                        background: "transparent",
                        padding: 0,
                        margin: 0,
                        fontSize: "0.9rem",
                    }}
                    showLineNumbers={false}
                >
                    {code}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default CodeBlock;
