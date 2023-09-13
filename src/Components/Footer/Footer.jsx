import React from 'react'
import WhiteLogo from "../Assets/images/Logo-White.png"
import "../css/general.css"
import "../css/normalize.css"
import "../css/style.css"
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <>
    <footer class="section footer_sec hero">

    <div class=""> 
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
  <div class="cube"></div>
</div>
    <div class="container">
      <div class="footer-wrap">
        <div class="footer" data-aos="zoom-in-left">
          <div class="w-row">
            <div class="section1 w-col w-col-3 w-col-medium-4 w-col-small-small-stack">
              <div class="logoblock" data-aos="zoom-in-left">
                <img src={WhiteLogo} loading="lazy" width="231" sizes="231px" srcset=" " alt="" class="image-3" />
              </div>
              <div class="cta__text" data-aos="zoom-out-down">
                <div class="text-block-6">
                  A trusted design &amp; development technology company. For
                  new Projects<br />
                </div>
              </div>
            </div>
            <div class="servics_section w-col w-col-3 w-col-medium-4 w-col-small-small-stack">
              <div class="our_services">
                <h4 class="heading-4" data-aos="zoom-in-left">Our Services</h4>
                <NavLink to="iot_solutions.html" className="link_nl iot_link" data-aos="zoom-in-down">IoT Solution</NavLink>
                <NavLink to="software_solutions.html" className="link_nl ss_link" data-aos="zoom-in-right">Software Solutions</NavLink>
                <NavLink to="technology_consultancy.html" className="link_nl tc_link" data-aos="zoom-in-up">Technology Consultancy</NavLink>
                <NavLink to="web_design_development.html" className="link_nl wdd_link" data-aos="zoom-in-left">Web Design and Development</NavLink>
                <NavLink to="software_quality_assurance.html" className="link_nl sqa_link" data-aos="zoom-in-right">Software Quality Assurance</NavLink>
                <NavLink to="cloud_platform.html" className="link_nl cpm_link" data-aos="zoom-in-up">Cloud Platform And Migration</NavLink>
                <NavLink to="enterprise_solutions.html" className="link_nl es_solution" data-aos="zoom-in-down">Enterprise Solution</NavLink>
              </div>
            </div>
            <div class="w-col w-col-3 w-col-medium-4 w-col-small-small-stack">
              <div class="utor_links">
                <h4 class="heading-4" data-aos="zoom-out-down">UtoR Digital</h4>
                <NavLink to="/startup_fast_track" class="link_nl sft_link text-white " data-aos="zoom-out-right">Startup fast track</NavLink>
                <NavLink to="/about" class="link_nl aboutus_link " data-aos="zoom-out-left">About Us</NavLink>
                <NavLink to="/services" class="link_nl services_link " data-aos="zoom-out-up">Services</NavLink>
                <NavLink to="/portfolio" class="link_nl projects-link " data-aos="zoom-out-down">Portfolio</NavLink>
                <NavLink to="/contact" class="link_nl contact_link " data-aos="zoom-out-left">Contact Us</NavLink>
              </div>
            </div>
            <div class="w-col w-col-3 w-col-medium-4 w-col-small-small-stack get-in-touch">
              <h4 class="heading-4 " >Get in Touch</h4>
              {/* <!-- <a href="#" class="cta_link">Get in Touch.</a> --> */}
              <div class="socialbox" >
                <div class="fb_box" >
                  <a href="#" class="fb_link">Facebook</a>
                </div>
                <div class="twitter_box" >
                  <a href="#" class="twitter_link">Twitter</a>
                </div>
                <div class="linkedin_box" >
                  <a href="https://www.linkedin.com/company/utor-digital/mycompany/?viewAsMember=true" class="linkedin_link" target="_blank">Linkedin</a>
                </div>
              </div>
              {/* <lottie-player src="https://lottie.host/498723bd-b8a3-4c45-97de-7fe44e6d225e/u0zCEYLc3V.json" background="transparent" speed="1" style={{ width: "350px", height: "350px;"}}  loop autoplay></lottie-player> */}
              <div class="pceb_container">
                <img src={require ("../Assets/images/pseb.png")} loading="lazy" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copy-right" >&copy;<span id="year"> 2023 </span><span> UtoR Digital. All rights reserved.</span></div>
  </footer>
  </>
  )
}

export default Footer;