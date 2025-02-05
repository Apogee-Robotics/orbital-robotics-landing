import React from 'react';
import './About.css'; // CSS file for styling

import videoBg from "../assets/video/ai_catch_montage.mp4"

function About() {
    return (

        <div className="about-container">
            <div className="about-background">
                {/* <div className="about-content" >
                </div> */}
                <section class="vision-section">
                    <div class="vision-intro-card">
                        <h2 class="section-title">Our Vision</h2>
                        <p class="section-description">
                            The Future of In Space Satellite Spacecraft Servicing
                        </p>
                    </div>

                    <div class="vision-card">
                        <h3 class="card-heading">The need for this type of product</h3>
                        <p class="card-description">
                            The White House released a national strategy for In-Space Servicing, Assembly, and Manufacturing which describes how developing the technology my servicer satellites will be capable of is necessary to maintain the United States Dominance in the Space Industry. President Trump's declaration of going to Mars further enhances this stance as autonomous servicers which can be sent along with the spacecraft to Mars will become the standard. Not only does this allow making repairs to spacecraft, but having a servicer which can make repairs reduces risk and can therefore lead to faster development cycles by not needing to develop additional measurements for each possible failure scenario beforehand. I've discussed with multiple companies working on government contracts to provide this servicing capabilities, but I believe many of them are going to struggle without the addition of AI. From what I have observed, those that realize they need AI don't know how to certify it or attract those with AI experience. More commercial companies such as Lumen Orbit are beginning to deliver space assets so this need won't be limited to government contracts for long.                </p>
                    </div>
                    <div class="vision-card">
                        <h3 class="card-heading">What will the product be?</h3>
                        <p class="card-description">
                            I envision us building a workforce of free-flying swarm satellites/agents which our customers can hire and program (at a high level) to achieve their goals. Each servicer/assembler in the swarm may include robotic arms, but some use cases (e.g. visual inspection) don't require robotic arms so we will build some without them to reduce the price for those missions. We will focus our workforce on the following use cases: on-orbit satellite servicing, space debris removal, in-space assembly, and inspection. While this is a very generic approach, I believe taking this approach will position us to take over a large portion of the market rather than pigeonholing ourselves into a smaller slice of the market. Some rationale behind this decision is that with a single hardware design we can capture the entire market, the only part that needs to change is the software programming. I also believe there is no research that needs to be done to build the hardware (electrical and mechanical) design. That could be done with commercial-off-the-shelf (COTS) parts, although after an initial demo we will likely bring the hardware development in-house. The most difficult part of developing a product to address our use cases is the software. There are several programs (DARPA Phoenix, ISAM 1, and ISAM 2) that were cancelled and cited software complexity as a primary cause for the cancellation. The software we develop will abstract away this complexity for our users so they can focus on developing a high level mission plan our servicers can follow (or we can develop the mission plan for them). I have started working on a prototype where the user provides an example of the mission by teleoperating a servicer or servicer swarm in a simplified environment (e.g controlling with a keyboard without the complexity of orbital dynamics), then a combination of model predictive control, imitation learning, and reinforcement learning is used to repeat the example and optimize the behavior of the agent to achieve the mission even in situations which weren't included in the example. The user will also receive a report which describes the behavior of the servicer agents and metrics to indicate the robustness of the servicer agent's behavior.
                        </p>
                    </div>
                    <div class="vision-card">
                        <h3 class="card-heading">This is a capital intensive market, how will I use your funds to generate revenue or gain enough traction to raise another round while minimizing dilution.</h3>
                        <p class="card-description">
                            We will use the pre-seed funds for about one year of work which we will use to develop a software prototype, hardware design, and business plan. You mentioned you worked on cubesats while in school so you are likely familiar with NASA's gated review process. We will aim to hold a Preliminary Design Review (PDR) by the end of the year. If you aren't familiar with the process, PDR means we have an initial baseline (aka version) of the design which is reviewed. The software prototype should work, although the code is likely not up to the desired quality or tested so now that we know what the software needs to do and how it works we can rewrite it so it can be certifiable and have far better quality. The hardware (electrical and mechanical) design as well as the software prototype should be sufficient to convince further investors our product will work technically, but we will need to provide further evidence our investors will likely 10x their investment. It will be difficult to accurately predict revenue and therefore profit without talking to enough customers to get a good sample size, but in the aerospace industry, it is difficult for customers to take you seriously until you have launched or delivered something tangible. We will focus on developing our technology while promoting our progress and networking with potential customers, then a couple of months before raising again, we will attempt to get letters of intent from our potential customers.                </p>
                    </div>

                    <div class="vision-card">
                        <h3 class="card-heading">This is a capital intensive market, how will I use your funds to generate revenue or gain enough traction to raise another round while minimizing dilution.</h3>
                        <p class="card-description">
                            We are also working on a few proposals for NASA small business innovation research (SBIR) phase 1 grants which will provide $150k for each accepted proposal. If accepted, we will receive the funding around August/September. This is also a prerequisite to receiving NASA, Space Force, and DOD contracts. The SBIR topics are closely related to our expertise/product and one of our team members is receiving mentorship on writing SBIR proposals so I believe there is a high probability of acceptance. If one of our phase 1 proposals is accepted, we can apply to a phase 2 grant which would be $850k awarded around August 2026. With a seed round and the SBIR grants, I believe we would be able to launch our first servicer in 2027 using mostly COTS hardware. We may be able to get revenue from the first launch if successful, however it may be difficult to gain enough trust beforehand so we could perform a demo scenario instead. There are other opportunities to generate revenue other than launching which we could take advantage of if needed. I've discussed with several aerospace companies which are delivering only software for government missions or are subcontracted by a commercial company to deliver only software. We could do this as well, and I believe we would be competitive as the companies I have met with lack the software/AI talent which would be required. (edited)
                        </p>
                        <div className='video-main'>
                            <video src={videoBg} autoPlay loop muted />
                        </div>
                    </div>
                </section>
            </div>
        </div>



    );
}

export default About;
