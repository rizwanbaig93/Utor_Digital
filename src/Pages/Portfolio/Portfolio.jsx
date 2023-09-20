/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import BusinessVideo from '../GrowBusinessVideo/BusinessVideo';

export default function Portfolio() {
  return (
    <>
    <Navbar/>
    <div class="projects-detail-page">
   
    <div class="section projects-section pt-60">
         {/* <!-- frich starts  --> */}
         <div class="container">
          <div class=" row maobile-margin">
            <div class="col-md-6">
              <div class="image_block project-img">
                <div
                  data-w-id="4744c2d5-0b32-3de6-1f49-52724279cf1b"
                  class=" frich_block" data-aos="fade-up-right"
                >
                  <img
                    src={require ("../images/Frich.webp")}
                    loading="lazy"
                    alt=""
                    class="image frich_img img-fluid"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6 portfolio-content">
              <div class=" ooutsrc_nz_con " data-aos="fade-down-left">
                <h1 class="heading-2 ff-Unbounded">Frich<br /></h1>
                <h5 class="heading-3 ff-Acme">First Social Finance App for Gen Z</h5>
                <p class="ff-poppins">
                  Hack Money Together with friends.Frich makes money social. It is
                  the first social finance app empowering Gen Z to take control of
                  their personal finances by setting spending goals together with
                  friends using gamification and social media elements.
                
                  <NavLink to="/FrichCaseStudy"  target="_blank" class="learn-more ff-poppins mt-2">Learn More <i class="fa-solid fa-arrow-right"></i></NavLink>
                </p>
              </div>
            </div>
          </div>
         {/* <!-- frich ends  --> */}

         {/* <!-- swvl_col starts  -->* */}
         <div class=" row maobile-margin flex-directions">
          <div class="col-md-6 portfolio-content">
            <div class=" swvl_con " data-aos="fade-down">
              <h1 class="heading-2 ff-Unbounded">SWVL<br /></h1>
              <h5 class="heading-3 ff-Acme">
                A tech-driven, affordable, and convenient transportation service
              </h5>
              <p class="paragraph-4 ff-poppins">
                Swvl is UAE based Nasdaq listed company with operations in more
                than 4 countries. UtoR’s engineering teams helps Swvl in
                multiple projects where ever required. UtoR has already helped
                them in projects for business website and OPS Automation
                
              </p>
              <NavLink to="/SwvlCaseStudy" target="_blank" class="learn-more ff-poppins">Learn More <i class="fa-solid fa-arrow-right"></i></NavLink>
            </div>
          </div>
          <div class="col-md-6">
            <div class="image_block project-img">
              <div
                data-w-id="4744c2d5-0b32-3de6-1f49-52724279cefa"
                class=" swvl_block" data-aos="fade-up"
              >
                <img src={require ("../images/our-products/swvl-logo-full.webp")}
                  loading="lazy"alt="Product Image"
                  class="image swvl_img img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
    
        {/* <!-- swvl_col ends -->
          <!-- halahi_col starts  --> */}
      <div class="row maobile-margin ">
        <div class="col-md-6">
          <div class="image_block project-img">
            <div class=" " data-aos="fade-right">
              <img
                src={require ("../images/Halahi.webp")}
                loading="lazy"
                data-w-id="4744c2d5-0b32-3de6-1f49-52724279cee4"
             
                alt=""
                class="image halahi_img"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 portfolio-content">
          <div class=" halahi_con" data-aos="fade-left">
            <h1 class="heading-2 ff-Unbounded">Halahi<br /></h1>
            <h5 class="heading-3 ff-Acme">Celebrity Shot-out Platform</h5>
            <p class="ff-poppins">
              A Celebrity Shout-out online platform built that connects users
              with their favorite celebrities. Users can pay them a fixed
              amount via this app solution to get customized shout-outs.
              <NavLink to="/HalahiCaseStudy" target="_blank" class="learn-more ff-poppins mt-2">Learn More <i class="fa-solid fa-arrow-right"></i></NavLink>
            </p>
          </div>
        </div>
      </div>
 
      {/* <!-- halahi_col ends -->
      <!-- Umile --> */}
      <div class="row maobile-margin flex-directions">
        <div class="col-md-6 portfolio-content">
          <div class=" ooutsrc_nz_con" data-aos="fade-down-left">
            <h1 class="heading-2 ff-Unbounded">Umile<br /></h1>
            <h5 class="heading-3 ff-Acme">Umile, bring a beauty salon to the comfort of your own home</h5>
            <p class="ff-poppins">
              Umile.co.nz is a mobile beauty service based in Auckland, New Zealand, that offers a
              wide range of beauty services delivered right to customers' doorsteps. In this case study,
              we will delve into the problem statement, the solution provided by Umile, and the impact
              it has made on the beauty service industry in Auckland.
              <NavLink to="/UmileCaseStudy" target="_blank" class="learn-more ff-poppins mt-2">Learn More <i class="fa-solid fa-arrow-right"></i></NavLink>
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="image_block project-img">
            <div
              data-w-id="4744c2d5-0b32-3de6-1f49-52724279cf1b"
              class=" frich_block" data-aos="fade-up-right"
            >
              <img
               src={require ("../images/umile.webp")}
                loading="lazy"
                width="500"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 500px, (max-width: 991px) 40vw, 38vw"
                alt=""
                class="image frich_img"
              />
            </div>
          </div>
        </div>
     
      </div>
    
      {/* <!-- umile end -->
   
      <!-- RRF starts  --> */}
      <div class="row maobile-margin">
        <div class="col-md-6">
          <div class="image_block project-img">
            <div
              data-w-id="4744c2d5-0b32-3de6-1f49-52724279cf1b"
              class=" frich_block" data-aos="fade-up-right"
            >
              <img
                src={require ("../images/RRF-Logo.webp")}
                loading="lazy"
                width="500"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 500px, (max-width: 991px) 40vw, 38vw"
            
                class="image frich_img"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 portfolio-content">
          <div class=" ooutsrc_nz_con" data-aos="fade-down-left">
            <h1 class="heading-2 ff-Unbounded">RRF<br /></h1>
            <h5 class="heading-3 ff-Acme">The Radical Relief Fund, supported by the website and mobile app.</h5>
            <p class="ff-poppins">
              The Radical Relief Fund is a charitable organization dedicated to providing financial
assistance to individuals and families facing financial uncertainty due to various
challenges. This case study explores the problem statement that led to the
establishment of the fund, the solution offered by the Radical Relief Fund, and the
impactful outcomes achieved through their website and mobile app developed by UtoR
Digital.

              <NavLink to="/RRFCaseStudy" target="_blank" class="learn-more ff-poppins mt-2">Learn More <i class="fa-solid fa-arrow-right"></i></NavLink>
            </p>
          </div>
        </div>
      
       
      </div>
    
      {/* <!-- RRF ends  -->
      <!-- Foodle start --> */}
      <div class="row maobile-margin flex-directions">
        <div class="col-md-6 portfolio-content">
          <div class="ooutsrc_nz_con" data-aos="fade-down-left">
            <h1 class="heading-2 ff-Unbounded">Foodle<br /></h1>
            <h5 class="heading-3 ff-Acme">Like videos, create playlist, follow restaurants and more!</h5>
            <p class="ff-poppins">
              Foodle.nyc is a revolutionary restaurant discovery app that caters to foodies, offering a
curated platform to explore the best food, drinks, and restaurants locally and globally.
This case study will delve into the problem statement that led to the development of
Foodle, the solution provided by UtoR Digital, and the impactful outcomes achieved
through their software architecture design, web services, and mobile app development.


              <NavLink to="/FoodleCaseStudy" target="_blank" class="learn-more ff-poppins mt-2">Learn More <i class="fa-solid fa-arrow-right"></i></NavLink>
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <div class="image_block project-img">
            <div
              data-w-id="4744c2d5-0b32-3de6-1f49-52724279cf1b"
              class=" frich_block" data-aos="fade-up-right"
            >
              <img
                src={require ("../images/Foodle-logo.webp")}
                loading="lazy"
                width="500"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 500px, (max-width: 991px) 40vw, 38vw"
            
                class="image frich_img"
              />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- foodle-end -->
            
      <!-- Bhartee start --> */}
      <div class="row maobile-margin">
        <div class="col-md-6">
          <div class="image_block project-img">
            <div class="" data-aos="fade-right">
              <img
                src={require ("../images/Bhartee4site.webp")}
                loading="lazy"
                data-w-id="4744c2d5-0b32-3de6-1f49-52724279cee4"
                sizes="(max-width: 479px) 88.9375px, (max-width: 767px) 32vw, 38vw"
            
                class="image halahi_img img-fluid"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 portfolio-content">
          <div class=" halahi_con" data-aos="fade-left">
            <h1 class="heading-2 ff-Unbounded">Bhartee<br /></h1>
            <h5 class="heading-3 ff-Acme">Democratizing Recruitment</h5>
            <p class="ff-poppins">
              Bhartee is a tech startup in Pakistan that aims to empower businesses of all sizes by
providing a seamless and efficient process to fulfill their staffing needs. This case study
explores the problem statement that led to the development of Bhartee, the solution
provided by UtoR, and the impactful outcomes achieved through their product strategy,
design, and development from the Minimum Viable Product (MVP) to a full launch
globally.
              <NavLink to="/BharteeCaseStudy" target="_blank" class="learn-more ff-poppins mt-2">Learn More <i class="fa-solid fa-arrow-right"></i></NavLink>
            </p>
          </div>
        </div>
      </div>
      {/* <!-- Bhartee end -->
              <!-- outsoruce-nz-project starts  --> */}
              <div class="row maobile-margin flex-directions">
                <div class="col-md-6 portfolio-content">
                  <div class=" ooutsrc_nz_con" data-aos="fade-down-left">
                    <h1 class="heading-2 ff-Unbounded">Outsource Nz<br /></h1>
                    <h5 class="heading-3 ff-Acme">State of the art software house</h5>
                    <p class="ff-poppins">
                      Founded in 2011, Outsource NZ is a state of the art software
                      house with whom we have diligently created a versatile range of
                      custom projects.
                      <NavLink to="/portfolio" target="_blank" class="learn-more ff-poppins mt-2">Learn More <i class="fa-solid fa-arrow-right"></i></NavLink>
                    </p>
                  </div>
                </div>
          
                <div class="col-md-6">
                  <div class="image_block project-img">
                    <div
                      data-w-id="4744c2d5-0b32-3de6-1f49-52724279cf16"
                      class=" osnz_block" data-aos="fade-left"
                    >
                      <img
                        src={require ("../images/OSNZ.webp")}
                        loading="lazy"
                        width="500"
                        sizes="(max-width: 479px) 100vw, (max-width: 767px) 500px, (max-width: 991px) 48vw, 38vw"
                        srcset=" "
                        alt=""
                        class="image osnz_img"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- outsoruce-nz-project ends --> */}

              {/* <!-- korneez_col starts  -->  */}
      <div class="row maobile-margin">
        <div class="col-md-6">
          <div class="image_block project-img">
            <div
              data-w-id="4744c2d5-0b32-3de6-1f49-52724279ceff"
              class=" korneez_block" data-aos="fade-up"
            >
              <img
                src={require ("../images/Korneez-1.webp")}
                loading="lazy"
                width="493"
                sizes="(max-width: 479px) 100vw, (max-width: 767px) 500px, (max-width: 991px) 45vw, 38vw"
                srcset=""
                alt=""
                class="image korneez_img"
              />
            </div>
          </div>
        </div>
        <div class="col-md-6 portfolio-content">
          <div class=" korneez_con" data-aos="fade-down">
            <h1 class="heading-2 ff-Unbounded">Korneez<br /></h1>
            <h5 class="heading-3 ff-Acme">ERP for Manufacturing Business</h5>
            <p class="ff-poppins">
              This is an Enterprise Resource Planning project built for a
              manufacturing business which integrates the various business
              functions of inventory, requisition, procurement, orders,
              gatepasses and accounts.
              <NavLink to="/KorneezCaseStudy" target="_blank" class="learn-more ff-poppins mt-2">Learn More <i class="fa-solid fa-arrow-right"></i></NavLink>
            </p>
          </div>
        </div>
      </div>
       {/* <!-- korneez_col ends --> */}

    </div>     
    </div>
  <BusinessVideo/>
  </div>
  <Footer/>
</>
  )
}

