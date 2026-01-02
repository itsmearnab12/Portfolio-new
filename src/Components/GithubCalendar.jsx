import React from "react";
import { GitHubCalendar } from "github-contribution-calendar";

export function GithubCalendar() {
    return (
        <>
        <div>
            <h1>My Github Contributions</h1>
        </div>
        <div>
            <GitHubCalendar
                username="itsmearnab12"
                showLabels={true} 
                fontSize={15}
                theme="forest"
            />
        </div>
        </>
    )
}