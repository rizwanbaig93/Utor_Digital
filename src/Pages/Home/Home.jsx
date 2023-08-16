import React from 'react'
// import Video from '../../Components/Video/Video'
import Navbar from '../../Components/Header/Navbar';
import GetStart from "../images/get-start.jpg";
import developdebug from "../images/develop-debug.jpg";
import sysdesigining from "../images/sys-desigining.jpg";
import deliveredImage from "../images/delivered.jpg";
import Azure from "../images/technology-icons/azure.png";
import DotNet from "../images/technology-icons/dot-net.png";
import Aws from "../images/technology-icons/aws.png";
import Flutter from "../images/technology-icons/flutter.png";
import Angular from "../images/technology-icons/angular.png";
import Footer from '../../Components/Footer/Footer';
import Swvll from "../images/swvll-logo.svg";
import Frich from "../images/Frich-logo.png";
import Halahi from "../images/hala.svg";
import Kwd from "../images/client-logos/KWD.png";
import Bharti from "../images/client-logos/Bharti.png";
import Grit from "../images/client-logos/Grait.png";
import Beyond from "../images/client-logos/Beyond.png";
import Foodle from "../images/client-logos/Foodle.png";
import Lucy from "../images/client-logos/Lucy.png";
import Rff from "../images/client-logos/RRF.png";
import TaxiVan from "../images/client-logos/Taxi Vans.png";
import Umile from "../images/client-logos/Umile.png";
import Zealous from "../images/client-logos/Zealous.png";
import TestimonialImg1 from "../images/1651581562810.jpg";
import TestimonialImg2 from "../images/1629959460837-removebg-preview-removebg-preview.png";
import TestimonialImg3 from "../images/6d236c05-32c5-4ccf-ad22-2bb4500a87f8_thumb.jpg";
import TestimonialImg4 from "../images/katrin-kaurov-611298-fit-removebg-preview-removebg-preview.jpg";
import FlutterImg from "../images/technology-icons/flutter.png";
import AngularImg from "../images/technology-icons/angular.png";
import ReactImg from "../images/technology-icons/react.png";
import AzureImg from "../images/technology-icons/azure.png";
import AwsImg from "../images/technology-icons/aws.png";
import FigmaImg from "../images/figma-logo.png";
import WpImg from "../images/technology-icons/wp.png";
import IllustratorImg from "../images/illustrator-logo.png";
import PhotoshopImg from "../images/photoshop-logo.png";
import HtmlImg from "../images/html-logo.png";
import AfterEffectImg from "../images/after-effect-logo.png";
import InDesignImg from "../images/in-design.png";
import CssImg from "../images/css-logo.png";
import SassImg from "../images/sass.png";
import DotNetImg from "../images/technology-icons/dot-net.png";



function Home () {
  return (
    <>
<Navbar/>

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
                  <a href="services.html" class="button cc-jumbo-button cc-jumbo-white w-inline-block"
                    data-aos="fade-up-left">
                    <div class="ff-poppins">Learn More</div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </div>
 
  {/* <!-- our clients logo section  --> */}
   <section class="our-clients section-title">
    <h2 class="heading label heading-2 testimonial-label" data-aos="zoom-in-down">
      Our Happy Clients
    </h2>
    <div data-w-id="ae26c204-33eb-a28a-97e7-d663c1ab3b97" class="mgbutton_wrapper p-0 pt-1  ">
      <div class="custom-btn" data-aos="zoom-out-down"> <span></span> <span></span> <span></span> <span></span> <a
          href="contact.html" class="link button viewallbtn">
          <div class="text-block">Contact Us</div>
        </a></div>
    </div>

<div class="cover-wrapper">
      <div id="client-logos" class="owl-carousel text-center">
        <div class="item" data-aos="zoom-in-left">
          <div class="client-inners">
            <img src={Swvll}  alt="" />
          </div>
        </div>
        <div class="item" data-aos="zoom-in-right">
          <div class="client-inners">
            <img src={Frich} alt="" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-up">
          <div class="client-inners">
            <img src={Halahi} alt="" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-down">
          <div class="client-inners">
            <img src={Kwd} alt="KWD Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-right">
          <div class="client-inners">
            <img src={Bharti} alt="Bharti Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-left">
          <div class="client-inners">
            <img src={Grit} alt="Grait Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-left">
          <div class="client-inners beyound-logo">
            <img src={Beyond} alt="Beyond Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-right">
          <div class="client-inners">
            <img src={Foodle} alt="Foodle Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-up">
          <div class="client-inners">
            <img src={Lucy} alt="Lucy Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-down">
          <div class="client-inners">
            <img src={Rff} alt="RRF Logo" />
          </div>
        </div>
        <div class="item">
          <div class="client-inners">
            <img src={TaxiVan} alt="Taxi Vans Logo" />
          </div>
        </div>
        <div class="item">
          <div class="client-inners">
            <img src={Umile} alt="Umile Logo" />
          </div>
        </div>
        <div class="item">
          <div class="client-inners">
            <img src={Zealous} alt="Zealous Logo" />
          </div>
        </div>
      </div>
    </div>
  </section> 


  <section class="testing-section tab-area pb-3 process-section">
    <div class="section-title" data-aos="zoom-out-right">
      {/* <!-- <span>Working Process</span> --> */}
      <h3 class="label heading-2">How We Process Work?</h3>
    </div>
    <section class="sticky-nav-tabs container d-none">
      <div class="sticky-nav-tabs-container nav tab-list-nav nav-tabs" id="myTab"> <a class="sticky-nav-tab"
          href="#tab-react" data-aos="zoom-out-left">1. Discovery and Analysis</a> <a class="sticky-nav-tab"
          href="#tab-angular" data-aos="zoom-out-left">
          2. High-Level Design
        </a> <a class="sticky-nav-tab" href="#tab-cssscript" data-aos="zoom-out-left">3. Development and Testing</a> <a
          class="sticky-nav-tab" href="#tab-vue" data-aos="zoom-out-left">4. Support and Maintenance</a> <span
          class="sticky-nav-tab-slider"></span> </div>
    </section>
    <div class="spa-main container">
      <section class="spa-slide tab-item-single " id="tab-react">
        <div class="row">
          <h2 class="process-card-title section-title-h2 heading-jumbo-small ananlysis" data-aos="zoom-out-left"> Discovery and
            Analysis</h2>
          <h4 class="tab-Heading paragraph-bigger cc-bigger-light py-1rem p-0 m-0" data-aos="zoom-out-right">
            Understand the client's goals, requirements, and
            challenges. Conduct a thorough analysis of the
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
            <img src={GetStart} alt="" />

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
              <img src={sysdesigining} alt="tab-img"/>
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
              <img src={developdebug} alt="tab-img" />
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
              <img src={deliveredImage} alt="tab-img" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
  <div class="our-service-sec">
    <div class="default-animation">
      <div class="shape-img1" data-aos="zoom-out-right"><img src={Azure}
          alt="Animation icon 1" /></div>
      <div class="shape-img2" data-aos="zoom-out-down"><img src={DotNet}
          alt="Animation icon 2" /></div>
      <div class="shape-img3" data-aos="zoom-out-up"><img src={Aws}
          alt="Animation icon 3" /></div>
      <div class="shape-img4" data-aos="zoom-out-left"><img src={Flutter}
          alt="Animation icon 4" /></div>
      <div class="shape-img5" data-aos="zoom-in-down"><img src={Angular}
          alt="Animation icon 5" /></div>
    </div>
    <div class="container ourservices">
      <div class="section-heading-wrap innovative-product">
        <div class="label heading-2 testimonial-label flex-column section-title">
          <div class="label heading-2 inovative" data-aos="zoom-out-right">Innovative Product Development Partner</div>
          <div class="heading-jumbo-small idea-market" data-aos="zoom-out-left">From Idea to Market Success, Full-Stack Solutions,
            User-Centric
            Design<br/>
          </div>
          {/* <!-- <h1 class="m-0">Innovative Product Development Partner</h1> --> */}
          {/* <!-- <p class="heading-jumbo-small service-para">
              From Idea to Market Success, Full-Stack Solutions, User-Centric
              Design
            </p> --> */}
        </div>
      </div>
      {/* <!-- New service card --> */}
      <div class="w-layout-grid our-services-grid margin-top-40">
        <div id="w-node-deebbad6-1307-0d30-3a46-d875e4018a80-6b5e90c3" class="div-block" data-aos="zoom-out-right">
          <div class="img-div">
            <img src="images/IoT-Icon.png" width="155" sizes="155px" srcset="
                  images/IoT-Icon-p-500.png 500w,
                  images/IoT-Icon.png       512w
                " alt="" class="service-icon" />
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
            <a href="contact.html" class="link"> Read More → </a>
          </div>
        </div>
        <div id="w-node-deebbad6-1307-0d30-3a46-d875e4018a86-6b5e90c3" class="div-block div-block-2"
          data-aos="zoom-out-left">
          <div class="img-div">
            <img src="images/Software-solution.png" width="155" sizes="155px" srcset="
                  images/Software-solution-p-500.png 500w,
                  images/Software-solution.png       512w
                " alt="" class="service-icon" />
          </div>
          <div class="paragraph-bigger custom-font launch-card">Design & Launch your MVP</div>
          <div class="paragraph-light">
            Our expert team will guide you through the MVP development
            journey, helping you validate your ideas, minimize risk, and
            accelerate time to market for your groundbreaking product
          </div>
          <div data-w-id="d8580cb3-4f6e-2bf7-0cf1-e8c2dcb2bd9b" class="text-block-4 pb-0">
            <a href="contact.html" class="link"> Read More → </a>
          </div>
        </div>
        <div id="w-node-deebbad6-1307-0d30-3a46-d875e4018a8c-6b5e90c3" class="div-block div-block-3"
          data-aos="zoom-out-up">
          <div class="img-div">
            <img src="images/Web-Development.png" width="155" sizes="155px" srcset="
                  images/Web-Development-p-500.png 500w,
                  images/Web-Development.png       512w
                " alt="" class="service-icon" />
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
            <a href="contact.html" class="link"> Read More → </a>
          </div>
        </div>
      
      </div>
      <div data-w-id="5722a384-1111-d9da-7f96-bff6449c16ad" class="mgbutton_wrapper view-btn p-0">
        <div class="custom-btn"> <span></span> <span></span> <span></span> <span></span> <a href="services.html"
            class="link button viewallbtn">View All</a></div>
      </div>
    </div>
  </div>
  <div class="testimonials wf-section section-title">
    <div class="label heading-2 testimonial-label w-100 say-about" data-aos="zoom-out-up">
      What they say about us
    </div>
    <div class="container testi-owl" data-aos="zoom-out-left">
      <div class="owl-carousel owl-theme testimonial-owl-carousel">
        <div class="item mt-2">
          <div class="bg-radil">
            <div class="testimonial-person-wrap stories-img">
              <img src={TestimonialImg1} loading="lazy" sizes="82px" srcset=" " alt="" class="testimonial-image" />
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
              <img src={TestimonialImg2} loading="lazy" alt=""
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
              <img src={TestimonialImg3} loading="lazy" alt=""
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
              <img src={TestimonialImg4} loading="lazy" alt=""
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
              <div class="custom-btn" data-aos="zoom-out-down"> <span></span> <span></span> <span></span> <span></span>
                <a href="contact.html" class="link button viewallbtn">
                  <div class="text-block">Contact Us</div>
                </a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
 
  {/* <!-- tech stack starts  --> */}
  <div class="tech-stack-sec tab-area">
    {/* <!-- <div id="particles-js2">
    </div> --> */}
    <div class="container">
      <div class="our-clients section-title">
        <h2 class="heading label heading-2 testimonial-label ff-Unbounded" data-aos="zoom-out-up">
          Technology Stack
        </h2>
      </div>
      {/* <!-- section-title --> */}
      <div class="tech-stacks-list owl-carousel text-center" id="techStacks">
        <div class="tech tech-1 flutter item">
          <div class="tech-icon" data-aos="zoom-in-right" data-aos-duration="1000" data-delay="3000">
            <img src={FlutterImg} alt="Flutter Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Flutter</h4>
          </div>
        </div>
        {/* <!-- flutter --> */}
        <div class="tech tech-1 angular item">
          <div class="tech-icon" data-aos="zoom-in-right" data-aos-duration="1200" data-delay="3500">
            <img src={AngularImg} alt="Angular Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Angular</h4>
          </div>
        </div>
        {/* <!-- Angular --> */}
        <div class="tech tech-1 react item">
          <div class="tech-icon" data-aos="zoom-in-right" data-aos-duration="1500" data-delay="4000">
            <img src={ReactImg} alt="React Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">React</h4>
          </div>
        </div>
        {/* <!-- React --> */}
        <div class="tech tech-1 dotNet item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="1800" data-delay="4300">
            <img src={DotNetImg} alt="DotNet Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">DotNet</h4>
          </div>
        </div>
        {/* <!-- DotNet --> */}

        <div class="tech tech-1 azure item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2000" data-delay="4500">
            <img src={AzureImg} alt="Azure Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Azure</h4>
          </div>
        </div>
        {/* <!-- Azure --> */}
        <div class="tech tech-1 aws item">
           <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2200" data-delay="4800">
            <img src={AwsImg} alt="AWS Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">AWS</h4>
          </div>
        </div>
        {/* <!-- AWS --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2400" data-delay="5000">
            <img src={FigmaImg} alt="figma" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Figma</h4>
          </div>
        </div>
        {/* <!-- Google Cloud --> */}
        <div class="tech tech-1 wordpress item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2600" data-delay="5200">
            <img src={WpImg} alt="Wordpress Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Wordpress</h4>
          </div>
        </div>
        {/* <!-- Wordpress --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2800" data-delay="5500">
            <img src={IllustratorImg} alt="Adobe Illustrator" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Illustrator</h4>
          </div>
        </div>
        {/* <!-- Google Cloud --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2800" data-delay="5500">
            <img src={PhotoshopImg} alt="Photoshop" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Photoshop</h4>
          </div>
        </div>
           {/* <!--htlm --> */}
           <div class="tech tech-1 google-cloud item">
            <div class="tech-icon" data-aos="zoom-out-right">
              <img src={HtmlImg} alt="html" />
            </div>
            <div class="tech-title" >
              <h4 class="ff-Acme">HTML</h4>
            </div>
          </div>
        {/* <!-- Google Cloud --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="fade-up-left">
            <img src={AfterEffectImg} alt="After Effects" />
          </div>
          <div class="tech-title">
            <h4 class="ff-Acme">After Effects</h4>
          </div>
        </div>
        {/* <!-- Google Cloud --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="fade-up-left">
            <img src={InDesignImg} alt="InDesign" />
          </div>
          <div class="tech-title">
            <h4 class="ff-Acme">InDesign</h4>
          </div>
        </div>
     
        {/* <!-- css --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="fade-up-left">
            <img src={CssImg} alt="css" />
          </div>
          <div class="tech-title">
            <h4 class="ff-Acme">CSS</h4>
          </div>
        </div>
        {/* <!-- sass --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="fade-up-left">
            <img src={SassImg} alt="" />
          </div>
          <div class="tech-title">
            <h4 class="ff-Acme">Sass</h4>
          </div>
        </div>
        {/* <!-- Google Cloud --> */}
      </div>
      {/* <!-- tech-stacks-list --> */}
    </div>
    {/* <!-- container --> */}
  </div>
  
  <Footer/>
  </>
  );
};

export default Home;