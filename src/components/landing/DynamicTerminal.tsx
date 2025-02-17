import { useState, useEffect, useRef } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import SampleCode from "./SampleCode";

const fileLines = SampleCode;
const MAX_LINES = 15; // limit stored lines

const TerminalTypewriter = ({ speed = 25 }) => {
    const [state, setState] = useState({
        displayedLines: [] as string[],
        currentLine: "",
        lineIndex: 0,
        charIndex: 0,
    });
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const typeCharacter = () => {
            setState((prevState) => {
                let { displayedLines, currentLine, lineIndex, charIndex } = prevState;

                const currentFileLine = fileLines[lineIndex % fileLines.length]; // loop file

                if (charIndex < currentFileLine.length) {
                    // append character
                    currentLine += currentFileLine[charIndex];
                    charIndex++;
                } else {
                    // next line
                    displayedLines = [...displayedLines, currentLine].slice(-MAX_LINES); // trim old lines
                    currentLine = "";
                    charIndex = 0;
                    lineIndex++;
                }

                return { displayedLines, currentLine, lineIndex, charIndex };
            });
        };

        const timeout = setTimeout(typeCharacter, speed);
        return () => clearTimeout(timeout);
    }, [state.charIndex, state.lineIndex, speed]);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [state.displayedLines]);

    return (
        <div
            ref={containerRef}
            aria-hidden="true"
            className="w-full h-[300px] md:h-[375px] lg:h-[450px] overflow-hidden bg-transparent relative"
            style={{
                maskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 30%)",
                WebkitMaskImage: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 20%)",
            }}
        >
            <SyntaxHighlighter
                language="python"
                style={dracula}
                customStyle={{
                    background: "transparent",
                    padding: 0,
                    margin: 0,
                    whiteSpace: "pre-wrap",
                    overflow: "hidden",
                    pointerEvents: "none",
                }}
                showLineNumbers={false}
            >
                {state.displayedLines.join("\n") + "\n" + state.currentLine + " █"}
            </SyntaxHighlighter>
        </div>
    );
};

export default TerminalTypewriter;
