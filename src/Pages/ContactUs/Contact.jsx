/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import BusinessVideo from '../GrowBusinessVideo/BusinessVideo';
import { NavLink } from 'react-router-dom';

export default function Contact() {
  return (
    <>
    <Navbar/>

    <div class="section ">
      <div class="container">
        <div class="w-layout-grid contact-form-grid">
          <div id="w-node-_3f61509a-fac7-b0d5-3763-509be705858e-6b5e90c9" class="contact-form-wrap">
            <div class="contact-form-heading-wrap">
              <h2 class="contact-heading ff-Acme" data-aos="fade-left">Contact us</h2>
              <div class="paragraph-light ff-poppins" data-aos="fade-right">
                We work together across the globe to make a world of
                difference.
              </div>
            </div>
            <div class="contact-form w-form">
              <form data-name="Get In Touch Form" name="wf-form-Get-In-Touch-Form" id="contactForm"
                class="get-in-touch-form" data-aos="zoom-in-down">
                <label for="name" class="ff-Acme">Name</label>
                <input type="text" class="text-field cc-contact-field w-input" maxlength="256" id="name" name="name"
                  placeholder="Your name" required />
                <label for="email" class="ff-Acme">Email Address</label>
                <input type="email" class="text-field cc-contact-field w-input" maxlength="256" id="email" name="email"
                  placeholder="Your email.." required />
                  <label for="name" class="ff-Acme">Contact Number</label>
                  <input type="number" class="text-field cc-contact-field w-input" maxlength="256" id="cnumber" name="cnumber"
                    placeholder="Your Contact Number" required />
                <label for="Message" class="ff-Acme">Message</label>
                <textarea id="message" name="message"
                  placeholder="Hi there, I’m reaching out because I think we can collaborate…"
                  class="text-field cc-textarea cc-contact-field w-input"
                  style={{height: "200px"}}></textarea>
                <input type="submit" value="Submit" data-wait="Please wait..." class="button w-button" />
              </form>
              <div class="status-message cc-success-message w-form-done">
                <div class="ff-poppins">Thank you! Your submission has been received!</div>
              </div>
              <div class="status-message cc-error-message w-form-fail">
                <div class="ff-poppins">
                  check email.
                </div>
              </div>
            </div>
          </div>
          <div id="w-node-_3f61509a-fac7-b0d5-3763-509be70585a6-6b5e90c9">
            <div class="details-wrap address-utor" data-aos="zoom-in-down">
              <div class="label ff-Acme"> <h3> OUR UK OFFICE</h3></div>
              <div class="paragraph-light">
                <p class="paragraph-light ff-poppins">Nottingham, England, NG8 2EF</p>
                
              </div>
              <div class="uk-office">
                <NavLink to="mailto:ukteam@utordigital.com?subject=You&#x27;ve%20got%20mail!"
                  className="contact-email-link ff-poppins">ukteam@utordigital.com</NavLink>
                {/* <!-- <a href="https://utordigital.com" target="_blank" class="contact-email-link ff-poppins">utordigital.com</a> --> */}
                <div class="paragraph-light ff-poppins contact-email-link"> 
                <NavLink to="tel:+447832785364">+44 115 888 2961</NavLink></div>
                <p class="mb-3"> <strong>Company Registration Number: 12934463</strong>  </p>
              </div>
            </div>
            <div class="details-wrap address-utor" data-aos="fade-down-left">
              <div className="label ff-Acme"><h3>OUR UAE OFFICE</h3></div>
              <p className="paragraph-light ff-poppins">Office 2F..17, AL SAFIYA - BLDG <br /> Hor Al Anz, Dubai, UAE</p>
             
              <div class="uae-office">
                <NavLink to="mailto:sales@utordigital.com?subject=You&#x27;ve%20got%20mail!"
                  className="contact-email-link ff-poppins">sales@utordigital.com</NavLink>
                {/* <!-- <a href="https://utordigital.com" target="_blank" class="contact-email-link ff-poppins">utordigital.com</a> --> */}
                <div class="paragraph-light ff-poppins contact-email-link"> 
                <NavLink to="tel:+971509499114"> +971 50 949 9114 </NavLink></div>
                <p> <strong>Company Registration Number: 1182644</strong>  </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="">
      <div class="google-map">
        <div class="responsive-map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.8056883959944!2d55.33843749678953!3d25.277121200000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d6507af354b%3A0x703eec43931d59cd!2sSafiya%20Building%20S-14!5e0!3m2!1sen!2s!4v1689258511357!5m2!1sen!2s" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>

   <BusinessVideo/>
    <Footer/>
    </>
  )
}
