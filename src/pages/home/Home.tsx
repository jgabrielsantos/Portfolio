import React from "react";
import { projectsQA, projectsFE } from "../../data";


const Home = () => {

    return(
        <div>
            <h1>João Gabriel Santos</h1>
            <h3>Frontend Developer and Quality Assurance Specialist @ <a target="_blank" href="https://cctech.io/">Convervenge Concepts</a></h3>

            <h4>Passionate about technology, huge eager to learn and spread knowledge</h4>


            <div>
                <h4>Work</h4>
                <h3>Frontend Developer projects</h3>
                {projectsFE.map(item => {
                    while(item.id < 3) {
                        return (
                            <h5>{item.name}</h5>
                        )
                    }
                })}

                <h3>QA Specialist projects</h3>
                {projectsQA.map(item => {
                    while(item.id < 3) {
                        return (
                            <h5>{item.name}</h5>
                        )
                    }
                })}
            </div>
        </div>
    )
}

export default Home