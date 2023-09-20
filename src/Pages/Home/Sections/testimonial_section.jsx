import React from 'react'

function testimonial_section() {
  return (
    <div>
       <div class="testimonials wf-section section-title">
    <div class="label heading-2 testimonial-label w-100 say-about" data-aos="zoom-out-up">
      What they say about us
    </div>
    <div class="container testi-owl" data-aos="zoom-out-left">
      <div class="owl-carousel owl-theme testimonial-owl-carousel">
        <div class="item mt-2">
          <div class="bg-radil">
            <div class="testimonial-person-wrap stories-img">
              <img src={require("../..//images/1651581562810.webp")} loading="lazy" sizes="82px" srcset=" " alt="" class="testimonial-image" />
              <div class="person-name">
                <div class="text-block-2 swvldiv ff-poppins">Shashi Shekhar Singh</div>
                <div class="text-block-3 ff-poppins">Director of Operations SWVL</div>
              </div>
            </div>
            <p class="paragraph ff-poppins">
              Utor has been an amazing partner in developing some of the key
              elements for Swvl. They come up with innovative solutions to
              critical business problems and they can be trusted for on time
              deliveries.
            </p>
          </div>
        </div>
        <div class="item mt-2">
          <div class="bg-radil Hala">
            <div class="testimonial-person-wrap">
              <img src={require("../..//images/1629959460837-removebg-preview-removebg-preview.webp")} loading="lazy" alt=""
                class="testimonial-image" />
              <div class="person-name">
                <div class="text-block-2 ff-poppins">Mohamed Amine Bilarbi</div>
                <div class="text-block-3 ff-poppins">Co-Founder &amp; CTO Halahi</div>
              </div>
            </div>
            <p class="paragraph ff-poppins">
              UtoR helped us build Halahi. They were always responsive and
              vigilant and always available when we needed to support our
              platform
            </p>
          </div>
        </div>
        <div class="item mt-2">
          <div class=" bg-radil Frich">
            <div class="testimonial-person-wrap">
              <img src={require("../..//images/6d236c05-32c5-4ccf-ad22-2bb4500a87f8_thumb.webp")} loading="lazy" alt=""
                class="testimonial-image frichuser" />
              <div class="person-name">
                <div class="text-block-2 frich_text ff-poppins">Aleksendra Medina</div>
                <div class="text-block-3 frich_text ff-poppins">
                  Co-Founder &amp; CPO Frich
                </div>
              </div>
            </div>
            <p class="paragraph frich_text ff-poppins">
              Abdullah and his team have been beyond professional and have
              become valued team members. They are always easy to
              reach,committed to deadlines and will put you and your company
              as their priority.
            </p>
          </div>
        </div>
        <div class="item mt-2">
          <div class="bg-radil Frich">
            <div class="testimonial-person-wrap">
              <img src={require("../..//images/katrin-kaurov-611298-fit-removebg-preview-removebg-preview.webp")} loading="lazy" alt=""
                class="testimonial-image" />
              <div class="person-name">
                <div class="text-block-2 frich_text ff-poppins">Katrin Kaurov</div>
                <div class="text-block-3 frich_text ff-poppins">
                  Co-Founder &amp; CTO Frich
                </div>
              </div>
            </div>
            <p class="paragraph frich_text ff-poppins">
              I’m absolutely impressed by Abdullah’s and his team’s work. They
              worked all day and night when needed to hit tight deadlines and
              were incredibly responsive. I’m very grateful for all the work!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}

export default testimonial_section
