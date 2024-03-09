import React from "react";
import Aboutimg from "../imaige/About.jpg"
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import "./About.css"

function About() {


    return (
        <>
            <section id="About">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            <div className="About-img">
                                <img src={Aboutimg}></img>
                            </div>
                        </div>



                        <div className="col-lg-7">
                            <div className="About-con">
                                <h2>About Me</h2>

                                <p>"There are many variations of passages of Lorem Ipsum available,
                                    but the majority have suffered &lsaquo;a href="#"&rsaquo;alteration&lsaquo;/a&rsaquo; in some form,
                                    by injected humour, or randomised words which dont look even slightly
                                    believable. If you are going to use a passage of Lorem Ipsum,"</p>
                                <ControlledTabsExample></ControlledTabsExample>



                            </div>
                        </div>
                    </div>

                </div>


            </section>


        </>
    )
}
export default About;

function ControlledTabsExample() {
    const [key, setKey] = useState('home');

    return (
        <div className="tab_wrap">
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 mt-5"

            >
                <Tab eventKey="home" title="Mainskills">
                    <div id="mainskills">
                        <p><span>User experience design</span> - UI/UX<br></br>
                            Delight the user and make it work</p>
                        <p><span>Web and user interface design </span>- Development<br></br>
                            Websites, web experiences, ...</p>
                        <p><span>Interaction design </span>- Animation<br></br>
                            I like to move it move it.</p>
                    </div>
                </Tab>
                <Tab eventKey="Awards" title="Awards" id="About_tab">
                    <div id="mainskills">
                        <p><span>Awwwards.com</span> - Winner<br></br>
                            2019 - 2020</p>
                        <p><span>CSS Design Awards</span> - Winner
                            2017 - 2018</p>
                        <p><span>Design nominees</span> - site of the day<br></br>
                            2013- 2014</p>
                    </div>
                </Tab>


                <Tab eventKey="Experince" title="Experience" id="About_tab">
                    <div id="mainskills">
                        <p><span>Sr. Front-end Engineer</span> - Google<br></br>
                            2018 - Current</p>
                        <p><span>Front-end Engineer </span>- Microsoft<br></br>
                            2017 - 2018</p>
                        <p><span>Software Engineer </span>- Alibaba<br></br>
                            2013- 2014</p>
                    </div>
                </Tab>


                <Tab eventKey="Education" title="Education" id="About_tab">
                    <div id="mainskills">
                        <p><span>BSc In CSE</span> - ABC University, Los Angeles, CA<br></br>
                            2010</p>
                        <p><span>Diploma in Computer Science</span> - Gamma Technical Institute<br></br>
                            2009</p>
                        <p><span>Graphic Designer</span> - ABC Institute, Los Angeles, CA<br></br>
                            2007</p>
                    </div>
                </Tab>

            </Tabs>
        </div>
    );
}