
import React from 'react'
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import katrinImg from "../images/katrin-kaurov-611298-fit-removebg-preview-removebg-preview.jpg";

function StartupFastTrack () {
  return (
  <>
    <Navbar/>
   
    <div class="section cc-store-home-wrap startup-page">
    <div data-delay="3000" data-animation="slide" class="" data-autoplay="true" data-easing="ease"
      data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="5"
      data-duration="500" data-infinite="true" >
      <div class="w-slider-mask">
        <div class="slide1 w-slide startup-track-main">
          <div id="particles-js">
          </div>
          <div data-w-id="063e3bf9-2744-8c7c-aed4-c8397ea3ebe9" class="">
            <div class="intro-content  container">
              <div class="intro-text">
                <div class="heading-jumbo">
                 <h1 class="hero-title   ff-Unbounded vision_title" data-aos="zoom-in-down" > Are you a visionary entrepreneur with a groundbreaking startup idea?</h1>
                </div>
                <div class="paragraph-bigger cc-bigger-white-light ff-Acme vision-subtitle startup-track-main-title" data-aos="fade-up-left" >
                  Look no further! Startup Fast Track is your ultimate destination  for accelerating the growth of your
                  startup.<br />
                </div>
                <div class="mgbutton_wrapper cursor-pointer" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  <a href class="button cc-jumbo-button cc-jumbo-white w-inline-block" data-aos="fade-down-left" >
                    <div class="ff-Acme">Discuss Your Project</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container my-5">
      <div class=" section-title">
        <div class="label  heading-2 tab-margin">
          <h2 class="heading ff-Acme heading-2 testimonial-label track-title m-0" data-aos="fade-up" >
            What is Startup Fast Track
          </h2>
          {/* <!-- <h2 class="heading  ff-Acme"></h2> --> */}
        </div>
        <div class="row">
          <div class="col-lg-6 d-flex justify-content-center align-items-center">
            {/* <!-- <h2 class="section-title-h2 heading-jumbo-small">Our Mission</h2> --> */}
            <p class="heading-jumbo-small start_up_para ff-poppins" data-aos="fade-down" >
              At Startup Fast Track, we understand that time is of the essence for startups.
              That's why we offer a comprehensive suite of services designed to fast-track your
              entrepreneurial journey. Our experienced team of mentors, advisors, and industry
              experts are passionate about helping startups like yours succeed.
            </p>
          </div>
          <div class="col-lg-6 d-flex justify-content-center align-items-center" data-aos="fade-up" >
            <div class="track-img">
              <img  src={ require('../images/track.gif') } alt="gif" />
            </div>
           
          </div>
        </div>
      </div>
      <div class="divider"></div>
    </div>

    <div class="testinomial-slider approach ">
      <div class="container success-story-carousel testi-owl">
        <div class="title-heading text-light mt-3 mb-4 ff-Unbounded Success-Stories" data-aos="fade-down" >Success Stories</div>
        <div class="owl-carousel owl-theme">
          <div class="item">
            <div class="bg-radil" data-aos="fade-up-left" >
              <div class="testimonial-person-wrap stories-img">
                <img src={require ("../images/1651581562810.jpg")} data-aos="fade-left"  loading="lazy" sizes="82px" srcset=" " alt="" class="testimonial-image" />
                <div class="person-name" data-aos="fade-right" >
                  <div class="text-block-2 swvldiv ff-Unbounded">Shashi Shekhar Singh</div>
                  <div class="text-block-3 ff-Acme">Director of Operations SWVL</div>
                </div>
               </div> 
              <p class="paragraph ff-poppins" data-aos="zoom-in-up" >
                Utor has been an amazing partner in developing some of the key
                elements for Swvl. They come up with innovative solutions to
                critical business problems and they can be trusted for on time
                deliveries.
              </p>
            </div>
          </div>
          <div class="item" data-aos="fade-up" >
            <div class="bg-radil Hala">
              <div class="testimonial-person-wrap">
                <img src={require ("../images/1629959460837-removebg-preview-removebg-preview.png")} data-aos="fade-left"  loading="lazy" alt=""
                  class="testimonial-image" />
                <div class="person-name" data-aos="fade-right" >
                  <div class="text-block-2 ff-Unbounded">Mohamed Amine Bilarbi</div>
                  <div class="text-block-3 ff-Acme">Co-Founder &amp; CTO Halahi</div>
                </div>
              </div>
              <p class="paragraph ff-poppins" data-aos="zoom-in-down" >
                UtoR helped us build Halahi. They were always responsive and
                vigilant and always available when we needed to support our
                platform
              </p>
            </div>
          </div>
          <div class="item" data-aos="fade-right" >
            <div class=" bg-radil Frich">
              <div class="testimonial-person-wrap">
                <img src={require ("../images/6d236c05-32c5-4ccf-ad22-2bb4500a87f8_thumb.jpg")} data-aos="fade-right"  loading="lazy" alt=""
                  class="testimonial-image frichuser" />
                <div class="person-name" data-aos="fade-left" >
                  <div class="text-block-2 frich_text ff-Unbounded">Aleksendra Medina</div>
                  <div class="text-block-3 frich_text ff-Acme">
                    Co-Founder &amp; CPO Frich
                  </div>
                </div>
              </div>
              <p class="paragraph frich_text ff-poppins" data-aos="zoom-in-right" >
                Abdullah and his team have been beyond professional and have
                become valued team members. They are always easy to
                reach,committed to deadlines and will put you and your company
                as their priority.
              </p>
            </div>
          </div>
          <div class="item">
            <div class="bg-radil Frich">
              <div class="testimonial-person-wrap">
                <img src={katrinImg} data-aos="fade-right"  loading="lazy" alt=""
                  class="testimonial-image" />
                <div class="person-name" data-aos="fade-left" >
                  <div class="text-block-2 frich_text ff-Unbounded">Katrin Kaurov</div>
                  <div class="text-block-3 frich_text ff-Acme">
                    Co-Founder &amp; CTO Frich
                  </div>
                </div>
              </div>
              <p class="paragraph frich_text ff-poppins" data-aos="zoom-in-down" >
                I’m absolutely impressed by Abdullah’s and his team’s work. They
                worked all day and night when needed to hit tight deadlines and
                were incredibly responsive. I’m very grateful for all the work!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="approach intro-header cc-subpage height-auto">
      <div class="container">
        <div class=" section-title">
          <div class="title-heading mt-5 ff-Unbounded" data-aos="zoom-in-up">Our Approach</div>
          <div class="row mt-5 mb-4 margin-top-0">
            <div class="col-lg-6 d-flex justify-content-center align-items-center">
              <img src={require ("../images/approach-unscreen.gif")} alt="gif" data-aos="fade-right" />
            </div>
            <div class="col-lg-6 d-flex justify-content-center align-items-center">
              {/* <!-- <h2 class="section-title-h2 heading-jumbo-small">Our Mission</h2> --> */}
              <p class="heading-jumbo-small start_up_para ff-poppins m-0" data-aos="fade-left">
                At Startup Fast Track, we understand that time is of the essence for startups.
                That's why we offer a comprehensive suite of services designed to fast-track your
                entrepreneurial journey. Our experienced team of mentors, advisors, and industry
                experts are passionate about helping startups like yours succeed.
              </p>
            </div>
          </div>
        </div>
        <div class="divider"></div>
      </div>
    </div>
    {/* <!-- join our team --> */}
    <div class="section cc-home-wrap about-us-first-sec join-today">
      <div class="intro-header cc-subpage">
        <div class="intro-content">
          <div class="heading-jumbo about_heading about-us-heading ff-Unbounded development-line-heigth startup-today" data-aos="zoom-in-up">Join Startup Fast Track today and accelerate the
            development
            of your product</div>
          <div class="mgbutton_wrapper " data-bs-toggle="modal" data-bs-target="#exampleModal" data-aos="zoom-in-down">
            <a class="contact_btn w-button get-touch ff-Acme">Get in Touch</a>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- services offer --> */}
    <div class="section service-we-offer service-offer">
      <div class="container ">
        <div class="label  heading-2 my-5 ff-Unbounded offers-service" data-aos="zoom-in-down">Services We Offer</div>
        <div class="w-layout-grid our-services-grid">
          <div class="div-block" data-aos="fade-right">
            <div class="inner_container">
              <div class="animateblock"></div>
              <div class="img-div"> 
              <img src={require ("../images/IoT-Icon.png")} width="155" sizes="155px" alt="" class="service-icon" />
              </div>
              <div class="paragraph-bigger ff-Unbounded launch-card product-card">Product Ideation and Conceptualization</div>
              <strong class="paragraph-bigger sub-heading ff-Acme launch-card ">Unlock the Potential of IoT</strong>
              <div class="paragraph-light ff-poppins">
                We help you refine your product concept, define the unique value
                proposition, and assess market viability. Our team conducts thorough
                market research and competitor analysis to ensure your product stands
                out in the crowded marketplace
              </div>
            </div>
          </div>
          <div class="div-block-2 div-block" data-aos="fade-down">
            <div class="inner_container">
              <div class="animateblock"></div>
              <div class="img-div"> 
              <img src={require ("../images/Software-solution.png")} width="155" sizes="155px" srcset="" alt="" class="service-icon" />
                </div>
              <div class="paragraph-bigger ff-Unbounded product-card launch-card">Minimum Viable Product (MVP) Development</div>
              <div class="paragraph-light ff-poppins">
                We assist you in developing a scalable MVP that demonstrates the core
                functionalities of your product. Our agile development approach ensures
                rapid iterations and feedback gathering to validate and refine your product
                idea
              </div>
            </div>
          </div>
          <div class="div-block-3 div-block" data-aos="fade-left">
            <div class="inner_container">
              <div class="animateblock"></div>
              <div class="img-div">
                <img src={require ("../images/Web-Development.png")} width="155" sizes="155px" srcset="" class="service-icon" />
                </div>
              <div class="paragraph-bigger ff-Unbounded launch-card">User Experience (UX) Design</div>
              <div class="paragraph-light ff-poppins">
                Our UX design experts create intuitive and visually appealing user
                interfaces that enhance user engagement and satisfaction. We conduct
                user testing and gather feedback to continuously improve the user
                experience of your product.
              </div>
            </div>
          </div>
          <div class="div-block-4 div-block" data-aos="fade-right">
            <div class="inner_container">
              <div class="animateblock"></div>
              <div class="img-div"> 
              <img src={require ("../images/ui-design.png")} width="155" sizes="155px" srcset="" class="service-icon" />
                </div>
              <div class="paragraph-bigger ff-Unbounded launch-card">
                Technology Stack Selection
              </div>
              <div class="paragraph-light ff-poppins">
                Our dedicated QA team ensures the highest level of quality for your
                product. We conduct comprehensive testing across various scenarios to
                identify and fix any issues, ensuring a robust and reliable product.
              </div>
            </div>
          </div>
          <div class="div-block-5 div-block" data-aos="fade-down">
            <div class="inner_container">
              <div class="animateblock"></div>
              <div class="img-div">
                 <img src={require ("../images/prototype.png")} width="155" sizes="155px" srcset="" class="service-icon" />
                </div>
              <div class="paragraph-bigger ff-Unbounded product-card"> Prototyping and Iterative Development</div>
              <div class="paragraph-light ff-poppins">
                We facilitate the creation of prototypes and iterative development cycles,
                allowing you to gather user feedback, make necessary improvements,
                and iterate quickly to achieve a market-ready product.
              </div>
            </div>
          </div>
          <div class="div-block-5 div-block" data-aos="fade-left">
            <div class="inner_container">
              <div class="animateblock"></div>
              <div class="img-div">
                <img src={require ("../images/consulting-1.png")} width="155" sizes="155px" srcset="" class="service-icon" />
                </div>
              <div class="paragraph-bigger ff-Unbounded launch-card">Quality Assurance and Testing
              </div>
              <div class="paragraph-light ff-poppins">
                Our dedicated QA team ensures the highest level of quality for your
                product. We conduct comprehensive testing across various scenarios to
                identify and fix any issues, ensuring a robust and reliable product.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer/>
    </>
  );
}

export default StartupFastTrack;
