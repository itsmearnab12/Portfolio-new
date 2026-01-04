import { useState, useRef, useEffect } from "react";
import "./TerminalContact.css";

const COMMANDS = {
    contact: [
        "Available commands:",
        "→ email",
        "→ linkedin",
        "→ github",
        "→ resume",
        "→ say_hi",
    ],
    email: ["Email: arnab122005@gmail.com"],
    linkedin: ["Opening LinkedIn..."],
    github: ["Opening GitHub..."],
    resume: ["Opening Resume..."],
    say_hi: ["Hey 👋 Thanks for reaching out!"],
};

export default function TerminalContact() {
    const [lines, setLines] = useState([
        "Welcome. Type 'contact' to begin.",
    ]);
    const [input, setInput] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const handleCommand = (e) => {
        if (e.key !== "Enter") return;

        const command = input.trim().toLowerCase();
        let output = [];

        if (COMMANDS[command]) {
            output = COMMANDS[command];

            if (command === "github") window.open("https://github.com/itsmearnab12", "_blank");
            if (command === "linkedin") window.open("https://www.linkedin.com/in/arnab-choudhury12/", "_blank");
            if (command === "resume") window.open("/resume.pdf", "_blank");
        } else {
            output = [`'${command}' is not recognized. Type 'contact'.`];
        }

        setLines((prev) => [
            ...prev,
            `C:\\portfolio> ${command}`,
            ...output,
        ]);
        setInput("");
    };

    return (
        <div className="terminal-wrapper">
            <div className="terminal">
                {lines.map((line, index) => (
                    <div key={index} className="terminal-line">
                        {line}
                    </div>
                ))}

                <div className="terminal-input">
                    <span className="prompt">C:\portfolio&gt;</span>
                    <input
                        ref={inputRef}
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleCommand}
                        spellCheck="false"
                    />
                </div>
            </div>
        </div>
    );
}
