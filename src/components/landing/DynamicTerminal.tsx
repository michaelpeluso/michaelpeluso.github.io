import React, { useEffect, useRef, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vs } from "react-syntax-highlighter/dist/esm/styles/prism";

const codeSnippet = `
# Example Python Code
def greet(name):
    return f"Hello, {name}!"

def main():
    name = "World"
    print(greet(name))

if __name__ == "__main__":
    main()
`;

const DynamicTerminal = () => {
    const [displayedCode, setDisplayedCode] = useState(""); // Stores the typed text
    const containerRef = useRef<HTMLDivElement | null>(null);
    const indexRef = useRef(0); // Track current index

    useEffect(() => {
        const typeCharacter = () => {
            if (indexRef.current < codeSnippet.length) {
                setDisplayedCode((prev) => prev + codeSnippet[indexRef.current]); // Append next character
                indexRef.current++;
            } else {
                setTimeout(() => {
                    setDisplayedCode(""); // Reset text after delay
                    indexRef.current = 0;
                }, 1000);
            }

            // Auto-scroll down
            if (containerRef.current) {
                containerRef.current.scrollTop = containerRef.current.scrollHeight;
            }
        };

        const interval = setInterval(typeCharacter, 50); // Adjust speed as needed
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full overflow-hidden ">
            <div className="absolute inset-0 bg-black opacity-80"></div>
            <div ref={containerRef} className="relative z-10 h-full overflow-auto p-4" style={{ fontFamily: "'Source Code Pro', monospace" }}>
                <SyntaxHighlighter
                    language="python"
                    style={vs}
                    customStyle={{
                        background: "transparent",
                        padding: 0,
                        margin: 0,
                        fontSize: "0.9rem",
                    }}
                    showLineNumbers={false}
                >
                    {displayedCode}
                </SyntaxHighlighter>
            </div>
        </div>
    );
};

export default DynamicTerminal;
