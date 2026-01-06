import "./Projectpage.css"
import { Projectcard } from "../Components/Projectcard";
import { FaHammer } from "react-icons/fa6";
import { LuConstruction } from "react-icons/lu";
export function ProjectPage() {
    return (
        <>
            <div className="Projectpage">
                <h5>-My Projects</h5>
                <h2><LuConstruction />Projects... Stay tuned!<FaHammer /></h2>
                <h4>A learning journey through projects and real-world implementations, each one helping me learn something new.</h4>
            </div>
            <div className="Project">
                <Projectcard
                    Title="Chatapp"
                    Development="FULLSTACK"
                    Discription="A real-time chat application that allows users to communicate instantly, focusing on performance, usability, and a responsive design."
                    Tech="React.js Express.js Node.js Tailwind Css Socket.io"
                    Livelink="https://chat-app-wine-seven-52.vercel.app/"
                    Github="https://github.com/itsmearnab12/Chatapp"
                />
                <Projectcard
                    Title="News Website"
                    Development="FULLSTACK"
                    Discription="A dynamic news platform built to fetch and display real-time news with a modern and user-friendly interface."
                    Tech="HTML Express.js Node.JS CSS News.io"
                    Livelink="https://chat-app-wine-seven-52.vercel.app/"
                    Github="https://github.com/itsmearnab12/FullStackProjects/tree/main/Project%201"
                />
                <Projectcard
                    Title="Simple Portfolio website"
                    Development="FRONTEND"
                    Discription="A dynamic news platform built to fetch and display real-time news with a modern and user-friendly interface."
                    Tech="HTML Express.js Node.JS CSS News.io"
                    Livelink="https://itsmearnab12.github.io/Portfolio/"
                    Github="https://github.com/itsmearnab12/Portfolio"
                />
                <Projectcard
                    Title="News Website"
                    Discription="A dynamic news platform built to fetch and display real-time news with a modern and user-friendly interface."
                    Tech="HTML Express.js Node.JS CSS News.io"
                    Livelink="https://chat-app-wine-seven-52.vercel.app/"
                    Github="https://github.com/itsmearnab12/FullStackProjects/tree/main/Project%201"
                />
                <Projectcard
                    Title="Simple Portfolio website"
                    Development="FRONTEND"
                    Discription="A dynamic news platform built to fetch and display real-time news with a modern and user-friendly interface."
                    Tech="HTML Express.js Node.JS CSS News.io"
                    Livelink="https://itsmearnab12.github.io/Portfolio/"
                    Github="https://github.com/itsmearnab12/Portfolio"
                />
                <Projectcard
                    Title="News Website"
                    Discription="A dynamic news platform built to fetch and display real-time news with a modern and user-friendly interface."
                    Tech="HTML Express.js Node.JS CSS News.io"
                    Livelink="https://chat-app-wine-seven-52.vercel.app/"
                    Github="https://github.com/itsmearnab12/FullStackProjects/tree/main/Project%201"
                />
            </div>
        </>
    )
}