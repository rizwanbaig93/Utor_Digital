import React from 'react'
import { NavLink } from 'react-router-dom'

function process_work_section() {
  return (
    <div>
      <section class="testing-section tab-area pb-3 process-section">
    <div class="section-title" data-aos="zoom-out-right">
      {/* <!-- <span>Working Process</span> --> */}
      <h3 class="label heading-2">How We Process Work?</h3>
    </div>
    <section class="sticky-nav-tabs container d-none">
      <div class="sticky-nav-tabs-container nav tab-list-nav nav-tabs" id="myTab"> 
      <NavLink class="sticky-nav-tab" href="#tab-react" data-aos="zoom-out-left">1. Discovery and Analysis</NavLink> 
          <NavLink class="sticky-nav-tab" href="#tab-angular" data-aos="zoom-out-left">
          2. High-Level Design  </NavLink> 
          <NavLink class="sticky-nav-tab" href="#tab-cssscript" data-aos="zoom-out-left">3. Development and Testing</NavLink>
           <NavLink class="sticky-nav-tab" href="#tab-vue" data-aos="zoom-out-left">4. Support and Maintenance</NavLink> <span
          class="sticky-nav-tab-slider"></span> </div>
    </section>
    <div class="spa-main container">
      <section class="spa-slide tab-item-single " id="tab-react">
        <div class="row">
          <h2 class="process-card-title section-title-h2 heading-jumbo-small ananlysis" data-aos="zoom-out-left"> Discovery and
            Analysis</h2>
          <h4 class="tab-Heading paragraph-bigger cc-bigger-light py-1rem p-0 m-0" data-aos="zoom-out-right">
            Understand the client's goals, requirements, and
            challenges.Conduct a thorough analysis of the
            existing systems, processes, and technologies
          </h4>
          <div class="col-lg-6">
            <div class="tab-item-single-content">
              <div class="single mb-2">
                <div class="icon">
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>
                <div class="content home-content" data-aos="zoom-out-left">
                  <h3 class="mt-0">Planning and Strategy</h3>
                  <p>
                    Define a clear roadmap and project plan based on
                    the analysis. Identify key milestones,
                    deliverables, and timelines. Develop a
                    comprehensive strategy to address the client's
                    needs.
                  </p>
                </div>
              </div>
              <div class="single mb-2">
                <div class="icon">
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>
                <div class="content home-content" data-aos="zoom-out-left">
                  <h3>Requirement Gathering</h3>
                  <p>
                    Collaborate with stakeholders to gather detailed
                    requirements. Conduct workshops, interviews, and
                    surveys to capture all necessary information.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-center justify-content-end">
            <div class="tab-item-single-img" data-aos="zoom-out-right">
            <img src={require("../..//images/get-start.webp")} alt="" />

            </div>
          </div>
        </div>
      </section>
      <section class="spa-slide tab-item-single" id="tab-angular">
        <div class="row">
          <h2 class="process-card-title section-title-h2 heading-jumbo-small" data-aos="zoom-out-left"> High-Level
            Design</h2>
          <h4 class="tab-Heading paragraph-bigger cc-bigger-light py-1rem p-0 m-0" data-aos="zoom-out-down">
            Our team of IT professionals including Software
            Architects and Engineers work together to design the
            system.
          </h4>
          <div class="col-lg-6">
            <div class="tab-item-single-content">
              <div class="single mb-2">
                <div class="icon">
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>
                <div class="content home-content" data-aos="zoom-out-left">
                  <h3>Design and Architecture</h3>
                  <p>
                    Create a high-level design and system architecture
                    that aligns with the client's requirements.
                  </p>
                </div>
              </div>
              <div class="single mb-2">
                <div class="icon">
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>
                <div class="content home-content" data-aos="zoom-out-left">
                  <h3 class="">
                    Technology Stacks, Frameworks, and Infrastructure
                    Considerations
                  </h3>
                  <p>
                    Identify and define the most suitable technology
                    stacks, frameworks, and infrastructure components
                    to support the design and architecture. This
                    includes selecting the appropriate software tools,
                    programming languages, frameworks, and
                    infrastructure setup required to build and deploy
                    the system effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-center justify-content-end">
            <div class="tab-item-single-img" data-aos="zoom-out-right">
              <img src={require("../..//images/sys-desigining.webp")} alt="tab-img"/>
            </div>
          </div>
        </div>
      </section>
      <section class="spa-slide tab-item-single" id="tab-cssscript">
        <div class="row">
          <h2 class="process-card-title section-title-h2 heading-jumbo-small" data-aos="zoom-out-left"> Development and
            Testing</h2>
          <h4 class="tab-Heading paragraph-bigger cc-bigger-light py-1rem p-0 m-0" data-aos="zoom-out-up">
            Implement the solution according to the design and
            architecture. Follow industry best practices and
            coding standards. Perform rigorous testing to ensure
            functionality, performance, and security
          </h4>
          <div class="col-lg-6">
            <div class="tab-item-single-content">
              <div class="single mb-2">
                <div class="icon">
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>
                <div class="content home-content" data-aos="zoom-out-right">
                  <h3 class="m-0">Deployment and Integration</h3>
                  <p>
                    Deploy the software or system in the client's
                    environment. Integrate with existing systems and
                    perform necessary configurations. Conduct thorough
                    testing and user acceptance.
                  </p>
                </div>
              </div>
              <div class="single mb-2">
                <div class="icon">
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>
                <div class="content home-content" data-aos="zoom-out-right">
                  <h3 class="m-0">Training and Documentation</h3>
                  <p>
                    Provide comprehensive training to end-users and
                    system administrators. Create detailed
                    documentation, user manuals, and guides for future
                    reference.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-center justify-content-end">
            <div class="tab-item-single-img" data-aos="zoom-in-left">
              <img src={require("../..//images/develop-debug.webp")} alt="tab-img" />
            </div>
          </div>
        </div>
      </section>
      <section class="spa-slide tab-item-single" id="tab-vue">
        <div class="row">
          <h2 class="process-card-title section-title-h2 heading-jumbo-small" data-aos="zoom-out-left"> Support and
            Maintenance</h2>
          <h4 class="tab-Heading paragraph-bigger cc-bigger-light py-1rem p-0 m-0" data-aos="zoom-out-down">
            Offer ongoing support and maintenance services to
            ensure smooth operation of the software or system.
            Address any issues, apply updates, and provide
            continuous improvements as needed.
          </h4>
          <div class="col-lg-6">
            <div class="tab-item-single-content">
              <div class="single mb-2">
                <div class="icon">
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>
                <div class="content home-content" data-aos="zoom-out-right">
                  <h3 class="m-0">Evaluation and Optimization</h3>
                  <p>
                    Continuously evaluate the solution's performance,
                    gather feedback, and identify areas for
                    optimization. Collaborate with the client to make
                    necessary refinements and enhancements.
                  </p>
                </div>
              </div>
              <div class="single mb-2">
                <div class="icon">
                  <i class="fas fa-long-arrow-alt-right"></i>
                </div>
                <div class="content home-content" data-aos="zoom-out-right">
                  <h3 class="m-0">Project Closure and Review</h3>
                  <p>
                    Conduct a final project review, assess the
                    outcomes against initial objectives, and seek
                    client feedback.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 d-flex align-items-center justify-content-end">
            <div class="tab-item-single-img" data-aos="zoom-out-left">
              <img src={require("../..//images/delivered.webp")} alt="tab-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
   </section>
    </div>
  )
}

export default process_work_section
