import React from 'react'

export default function BusinessVideo() {
  return (
    <div>
         <div class="section cc-cta grow-business-sec ">
    <div class="container ">
      <div class="hero-sec-bg-video">
        <video class="video-tag is-visible is-playing" loop autoPlay muted poster="./images/services-bg.jpg">
               {/* <video src="https://dpxvvh5ebrof7.cloudfront.net/ac954200-3ffa-46fb-b8c1-af81d1b7556f.mp4" type="video/mp4" data-aos="zoom-in-left" /> */}
              <source src="https://dpxvvh5ebrof7.cloudfront.net/86cd5f8e-9e4e-4cb9-8183-45352a35ab74.mp4" type="video/mp4" />
            </video>
      </div>
      <div class="cta-wrap">
        <div class="custom-slide-in" data-aos="fade-down-right">
          <div class="cta-text section-title hide-slide">
            <div class="label heading-2 testimonial-label" data-aos="zoom-out">
              Grow your business.<br />
            </div>
            <div class="paragraph-bigger custom-font cc-bigger-light ff-poppins" data-aos="zoom-out-left">
              Whether you are looking to automate your existing workflow with
              state-of-the-art technology or need a better alternative to your
              existing automated system.<br />
            </div>
            <div data-w-id="2edbe9ca-babc-f4c1-b329-b1ec47b4ec9e" class="mgbutton_wrapper grow-business-btn">
              <div class="custom-btn custom_btn_hover" data-aos="zoom-out-down"> <span></span> <span></span> <span></span> <span></span>
                <a href="contact.html" class="link button text-block viewallbtn">
                  Contact Us
                </a>
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
