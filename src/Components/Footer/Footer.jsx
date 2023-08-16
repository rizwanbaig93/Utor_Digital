import React from 'react'
import WhiteLogo from "../Assets/images/Logo-White.png"
import "../css/general.css"
import "../css/normalize.css"
import "../css/style.css"

function Footer() {
  return (
    <>
    <footer class="section footer_sec" data-aos="fade-up">
    <video class="video-tag is-visible is-playing" loop autoPlay muted>
               {/* <video src="https://dpxvvh5ebrof7.cloudfront.net/ac954200-3ffa-46fb-b8c1-af81d1b7556f.mp4" type="video/mp4" data-aos="zoom-in-left" /> */}
              <source src="https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_61516878597381.93871393_FPpreview.mp4" type="video/mp4" />
               {/* <video src="https://dpxvvh5ebrof7.cloudfront.net/ac954200-3ffa-46fb-b8c1-af81d1b7556f.mp4" type="video/mp4" data-aos="zoom-in-left" /> */}
              <source src="https://v4.cdnpk.net/videvo_files/video/free/video0467/large_watermarked/_import_61516878597381.93871393_FPpreview.mp4" type="video/mp4" />
            </video>
    
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
                <a href="iot_solutions.html" class="link_nl iot_link" data-aos="zoom-in-down">IoT Solution</a>
                <a href="software_solutions.html" class="link_nl ss_link" data-aos="zoom-in-right">Software Solutions</a>
                <a href="technology_consultancy.html" class="link_nl tc_link" data-aos="zoom-in-up">Technology Consultancy</a>
                <a href="web_design_development.html" class="link_nl wdd_link" data-aos="zoom-in-left">Web Design and Development</a>
                <a href="software_quality_assurance.html" class="link_nl sqa_link" data-aos="zoom-in-right">Software Quality Assurance</a>
                <a href="cloud_platform.html" class="link_nl cpm_link" data-aos="zoom-in-up">Cloud Platform And Migration</a>
                <a href="enterprise_solutions.html" class="link_nl es_solution" data-aos="zoom-in-down">Enterprise Solution</a>
              </div>
            </div>
            <div class="w-col w-col-3 w-col-medium-4 w-col-small-small-stack">
              <div class="utor_links">
                <h4 class="heading-4" data-aos="zoom-out-down">UtoR Digital</h4>
                <a href="Startup_fast_track.html" class="link_nl sft_link" data-aos="zoom-out-right">Startup fast track</a>
                <a href="about.html" class="link_nl aboutus_link" data-aos="zoom-out-left">About Us</a>
                <a href="services.html" class="link_nl services_link" data-aos="zoom-out-up">Services</a>
                <a href="projects.html" class="link_nl projects-link" data-aos="zoom-out-down">Portfolio</a>
                <a href="contact.html" class="link_nl contact_link" data-aos="zoom-out-left">Contact Us</a>
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
              <div class="pceb_container">
                {/* <img src={psep} loading="lazy" alt="" /> */}
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