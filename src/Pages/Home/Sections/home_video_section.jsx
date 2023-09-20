import React from 'react'
import { NavLink } from 'react-router-dom'

function home_video_section() {
  return (
    <div>
        <div class="section cc-store-home-wrap">
    <div data-delay="3000" data-animation="slide" class="slider-2 w-slider" data-autoplay="true" data-easing="ease"
      data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="5"
      data-duration="500" data-infinite="true">
      <div class="w-slider-mask">
        <div class="section cc-home-wrap about-us-first-sec">
          <div id="particles-js"></div>
          <div class="hero-sec-bg-video" >
            <video class="video-tag is-visible is-playing" loop autoPlay muted>
               {/* <video src="https://dpxvvh5ebrof7.cloudfront.net/ac954200-3ffa-46fb-b8c1-af81d1b7556f.mp4" type="video/mp4" data-aos="zoom-in-left" /> */}
              <source src="https://dpxvvh5ebrof7.cloudfront.net/9011e8e2-4d03-40f2-88e5-6adfc525b737.mp4" type="video/mp4" />
            </video>
          </div>
          <div data-w-id="063e3bf9-2744-8c7c-aed4-c8397ea3ebe9" class="intro-header main-page-banner cc-subpage slide-1">
            <div class="intro-content">
              <div class="intro-text">
                <div class="heading-jumbo" data-aos="fade-right" data-aos-duration="1500">
                  <h1 class="hero-title mb-0 ff-poppins"> Innovate . Transform . Revolutionize</h1>
                </div>
                <div class="paragraph-bigger cc-bigger-white-light  w-auto" data-aos="fade-right" data-aos-duration="2000">
                  <h2 class="hero-sub-title"> Transform Your Ideas into Revolutionary Products </h2><br />
                </div>
                <div data-w-id="a56a7972-ead2-5105-a305-da00726053fd" class="mgbutton_wrapper">
                  <NavLink to="/services" className="button cc-jumbo-button cc-jumbo-white w-inline-block"
                    data-aos="fade-up-left">
                    <div class="ff-poppins">Learn More</div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
    </div>
    </div>
  )
}

export default home_video_section
