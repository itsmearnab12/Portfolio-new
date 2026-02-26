import { IoDocumentTextOutline } from "react-icons/io5";
import "./Aboutpage.css"
export function AboutPage() {
    return (
        <>
            <div className="AboutPage">
                <h5>-About Me</h5>
                <h1>A Journary from knowing nothing about coding to learing and building...</h1>
                <div className="Aboutme">
                    <h3>
                        My journey into programming began with curiosity and perseverance. Until my higher studies, I had no prior exposure to coding. I started with C programming, which initially challenged me but helped me build a strong foundation in logic and problem-solving. I later moved on to Java, further strengthening my understanding of core programming concepts.
                    </h3>
                </div>

                <div className="Aboutme">
                    <h3>
                        As I discovered web development, I learned HTML, CSS, and JavaScript and realized that real growth comes from building, not just watching tutorials. This led me to modern frontend development with React, where I learned to create dynamic, component-based user interfaces. To complement this, I explored backend technologies like Node.js and Express.js, gaining an understanding of APIs, server-side logic, and full-stack application flow. Today, I focus on learning and building full-stack projects that turn ideas into real-world solutions, continuously learning by experimenting, solving problems, and improving my craft.
                    </h3>
                </div>

                <div className="Aboutme">
                    <h3>
                        Additionally, I’m a data enthusiast. I’ve always been curious about how massive volumes of data are managed, what technologies power them, and how organizations turn complex data into accurate, data-driven decisions. This curiosity led me to actively explore how data is collected, processed, analyzed, and visualized using modern tools and technologies. I’m the kind of person who, whenever I encounter something interesting, feels a strong urge to understand how it works and to learn it deeply.
                    </h3>
                </div>
                <h5>-Why me?</h5>
                <h2>What I Bring to the Table</h2>
                <div className="Aboutme">
                    <h3>
                        I don’t just aim for working solutions—I focus on clean design, clear structure, and intuitive interactions. My goal is to deliver interfaces that feel polished, purposeful, and easy to use.
                    </h3>
                </div>
                <div className="Aboutme">
                    <h3>
                        I prioritize learning how things work before using tools or libraries, which allows me to write maintainable, scalable code and adapt quickly to new technologies across the full stack.
                    </h3>
                </div>
                <div className="Aboutme">
                    <h3>
                        I actively refine my projects by revisiting design decisions, optimizing performance, and improving clarity. This iterative mindset helps me deliver better results and grow consistently as a developer.
                    </h3>
                </div>
                <button className="Resume" onClick={() => window.open("/Arnab.pdf", "_blank")}><IoDocumentTextOutline />View Resume</button>
            </div>

        </>
    );
}