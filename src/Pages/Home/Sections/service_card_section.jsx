import React from 'react'
import { NavLink } from 'react-router-dom'

function service_card_section() {
  return (
    <div>
      {/* <!-- ======================= Service Animation Section Start ================= --> */}
  <div class="our-service-sec">
    <div class="default-animation">
      <div class="shape-img1" data-aos="zoom-out-right"><img src={require("../..//images/technology-icons/azure.webp")} alt="Animation icon 1" /></div>
      <div class="shape-img2" data-aos="zoom-out-down"><img src={require("../..//images/technology-icons/dot-net.webp")}
          alt="Animation icon 2" /></div>
      <div class="shape-img3" data-aos="zoom-out-up"><img src={require("../..//images/technology-icons/aws.webp")}
          alt="Animation icon 3" /></div>
      <div class="shape-img4" data-aos="zoom-out-left"><img src={require("../..//images/technology-icons/flutter.webp")}
          alt="Animation icon 4" /></div>
      <div class="shape-img5" data-aos="zoom-in-down"><img src={require("../..//images/technology-icons/angular.webp")}
          alt="Animation icon 5" /></div>
    </div>
  {/* <!-- ======================= Service Animation Section Ends =================== --> */}

  {/* <!-- ======================= Service Card Section Start ================= --> */}
  <div class="container ourservices">
      <div class="section-heading-wrap innovative-product">
        <div class="label heading-2 testimonial-label flex-column section-title">
          <div class="label heading-2 inovative" data-aos="zoom-out-right">Innovative Product Development Partner</div>
          <div class="heading-jumbo-small idea-market" data-aos="zoom-out-left">From Idea to Market Success, Full-Stack Solutions,
            User-Centric
            Design<br/>
          </div>
        </div>
      </div>
     
      <div class="w-layout-grid our-services-grid margin-top-40">
        <div id="w-node-deebbad6-1307-0d30-3a46-d875e4018a80-6b5e90c3" class="div-block" data-aos="zoom-out-right">
          <div class="img-div">
            <img src={require("../..//images/IoT-Icon.webp")} width="155" sizes="155px" srcset="" alt="" class="service-icon" />
          </div>
          <div class="paragraph-bigger custom-font line-height">
            Development for disruptive technologies
          </div>
          <div class="paragraph-light">
            Unleash the Potential of Disruptive Technologies with our Expert
            Software Development Services. We specialize in creating
            transformative software solutions that harness the power of
            emerging technologies, propelling your business into the future of
            innovation and success.
          </div>
          <div data-w-id="d8580cb3-4f6e-2bf7-0cf1-e8c2dcb2bd9b" class="text-block-4 pb-0">
            <NavLink to="/contact" class="link" target="_blank"> Read More → </NavLink>
          </div>
        </div>
        <div id="w-node-deebbad6-1307-0d30-3a46-d875e4018a86-6b5e90c3" class="div-block div-block-2"
          data-aos="zoom-out-left">
          <div class="img-div">
            <img src={require("../..//images/Software-solution.webp")} width="155" sizes="155px" srcset="" alt="" class="service-icon" />
          </div>
          <div class="paragraph-bigger custom-font launch-card">Design & Launch your MVP</div>
          <div class="paragraph-light">
            Our expert team will guide you through the MVP development
            journey, helping you validate your ideas, minimize risk, and
            accelerate time to market for your groundbreaking product
          </div>
          <div data-w-id="d8580cb3-4f6e-2bf7-0cf1-e8c2dcb2bd9b" class="text-block-4 pb-0">
          <NavLink to="/contact" class="link" target="_blank"> Read More → </NavLink>
          </div>
        </div>
        <div id="w-node-deebbad6-1307-0d30-3a46-d875e4018a8c-6b5e90c3" class="div-block div-block-3"
          data-aos="zoom-out-up">
          <div class="img-div">
            <img src={require("../..//images/Web-Development.webp")} width="155" sizes="155px" srcset=" " alt="" class="service-icon" />
          </div>
          <div class="paragraph-bigger custom-font launch-card">Business Intelligence Consulting</div>
          <div class="paragraph-light">
            Unlock Actionable Insights with Expert Business Intelligence
            Consulting. Our seasoned consultants leverage advanced analytics
            and data visualization techniques to help you make data-driven
            decisions, optimize operations, and drive sustainable growth for
            your business.
          </div>
          <div data-w-id="d8580cb3-4f6e-2bf7-0cf1-e8c2dcb2bd9b" class="text-block-4 pb-0">
          <NavLink to="/contact" className="link" target="_blank"> Read More → </NavLink>
          </div>
        </div>
      
      </div>
      <div data-w-id="5722a384-1111-d9da-7f96-bff6449c16ad" class="mgbutton_wrapper view-btn p-0">
        <div class="custom-btn custom_btn_hover" > <span></span> <span></span> <span></span> <span></span>
         <NavLink to="/services" className="link button viewallbtn text-block">View All</NavLink>
            </div>
      </div>
    </div>
  </div>
  {/* <!-- ======================= Service Card Section Ends =================== --> */}
    </div>
  )
}

export default service_card_section
