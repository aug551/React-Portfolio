import React from 'react'
import { Accordion } from 'react-bootstrap'
import './About.css'

export default function About() {
    return (
        <main className='about-container'>
            <article>
                <h2>Aaron Cruz</h2>
                <div className='intro-container'>
                    <p className='description'>As an avid learner, I have a high interest in every field of technology, be it hardware, software or electronics. Although I graduated in Computer Science for Video Games (Video Game Programming), most of my projects and works are related to web development. Currently, I am studying Software Engineering at École de Téchnologie Supérieure (ÉTS) in Montréal, Quebec.</p>
                    <div className='pic-container'>
                        <img src='' alt='Profile' />
                    </div>
                </div>
                <h3>The following are some of my qualifications:</h3>
                <div className='qualifications-container'>
                    <Accordion className='qualifications' alwaysOpen={true}>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Languages (Advanced Knowledge)</Accordion.Header>
                            <Accordion.Body>
                                <h4>Programming Languages</h4>
                                <ul>
                                    <li>Javascript</li>
                                    <li>C#</li>
                                    <li>Java</li>
                                    <li>C++</li>
                                    <li>Python</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Tools/Technologies</Accordion.Header>
                            <Accordion.Body>
                                <h4>Web Development</h4>
                                <ul>
                                    <li>Node.js</li>
                                    <li>React</li>
                                    <li>MongoDB</li>
                                    <li>Express</li>
                                </ul>
                                <h4>Video Game Development</h4>
                                <ul>
                                    <li>Unity</li>
                                    <li>Unreal Engine 4</li>
                                </ul>
                                <h4>Others</h4>
                                <ul>
                                    <li>Git/GitHub</li>
                                    <li>Linux (mostly Debian-based systems)</li>
                                    <li>Trello</li>
                                    <li>Raspberry Pi</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Accordion className='qualifications' alwaysOpen={true}>
                        <Accordion.Item eventKey='0'>
                            <Accordion.Header>Education</Accordion.Header>
                            <Accordion.Body>
                                <h4>Education</h4>
                                <ul>
                                    <li>Bachelor's in Software Engineering, ÉTS</li>
                                    <li>Technical DEC in Computer Science, Collège LaSalle</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey='1'>
                            <Accordion.Header>Professional Experience</Accordion.Header>
                            <Accordion.Body>
                                <h4>Experience which includes monetary gains</h4>
                                <ul>
                                    <li>Scheduler Project (see Projects), February 2022</li>
                                    <li>Video game programming internship/project, Summer 2021</li>
                                    <li>Staples as a technology associate, 2018 - 2021</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </article>
        </main>
    )
}