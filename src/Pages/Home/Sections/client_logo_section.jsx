import React from 'react'
import { NavLink } from 'react-router-dom'

function client_logo_section() {
  return (
    <div>
         <section class="our-clients section-title">
    <h2 class="heading label heading-2 testimonial-label" data-aos="zoom-in-down">
      Our Happy Clients
    </h2>
    <div data-w-id="ae26c204-33eb-a28a-97e7-d663c1ab3b97" class="mgbutton_wrapper p-0 pt-1  ">
      <div class="custom-btn custom_btn_hover" data-aos="zoom-out-down"> <span></span> <span></span> <span></span> <span></span> 
      <NavLink to="/contact" className="link button viewallbtn">
          <div className="text-block ">Contact Us</div>
        </NavLink></div>
    </div>

   <div class="cover-wrapper">
      <div id="client-logos" class="owl-carousel text-center">
        <div class="item" data-aos="zoom-in-left">
          <div class="client-inners">
            <img src={require("../..//images/swvll-logo.webp")}  alt="" />
          </div>
        </div>
        <div class="item" data-aos="zoom-in-right">
          <div class="client-inners">
            <img src={require("../..//images/Frich-logo.webp")} alt="" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-up">
          <div class="client-inners">
            <img src={require("../..//images/Halahi.webp")} alt="" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-down">
          <div class="client-inners">
            <img src={require("../..//images/client-logos/KWD.webp")} alt="KWD Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-right">
          <div class="client-inners">
            <img src={require("../..//images/client-logos/Bharti.webp")} alt="Bharti Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-left">
          <div class="client-inners">
            <img src={require("../..//images/client-logos/Grait.webp")} alt="Grait Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-left">
          <div class="client-inners beyound-logo">
            <img src={require("../..//images/client-logos/Beyond.webp")} alt="Beyond Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-right">
          <div class="client-inners">
            <img src={require("../..//images/client-logos/Foodle.webp")} alt="Foodle Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-up">
          <div class="client-inners">
            <img src={require("../..//images/client-logos/Lucy.webp")} alt="Lucy Logo" />
          </div>
        </div>
        <div class="item" data-aos="zoom-out-down">
          <div class="client-inners">
            <img src={require("../..//images/client-logos/RRF.webp")} alt="RRF Logo" />
          </div>
        </div>
        <div class="item">
          <div class="client-inners">
            <img src={require("../..//images/client-logos/Taxi Vans.webp")} alt="Taxi Vans Logo" />
          </div>
        </div>
        <div class="item">
          <div class="client-inners">
            <img src={require("../..//images/client-logos/Umile.webp")} alt="Umile Logo" />
          </div>
        </div>
        <div class="item">
          <div class="client-inners">
            <img src={require("../..//images/client-logos/Zealous.webp")} alt="Zealous Logo" />
          </div>
        </div>
      </div>
    </div>
    </section>
    </div>
  )
}

export default client_logo_section