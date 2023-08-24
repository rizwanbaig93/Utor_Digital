import React from 'react'
import Footer from "../..//../Components/Footer/Footer";

export default function UmileCaseStudy() {
  return (
    <>
     <div class="section cc-cta grow-business-sec">
      <div class="container ">
        <div class="hero-sec-bg-video title-vedio">
          <video class="video-tag is-visible is-playing" autoplay="" muted="" loop="" poster="./images/services-bg.jpg">
            <source src="videos/UMILE.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
      <div class="container-fluid ourservices">
        <div class="intro-detail container  case-study-height">
          <strong class="ff-Unbounded" data-aos="zoom-in-right">
            Umile.co.nz is a mobile beauty service based in Auckland, New
            Zealand, that offers a wide range of beauty services delivered
            right to customers' doorsteps. In this case study, we will delve
            into the problem statement, the solution provided by Umile, and
            the impact it has made on the beauty service industry in
            Auckland.
          </strong>
        </div>
   <div class="custom-container">
    <div class="row">
      <div class="col-md-6">
        <div class="umile-intro" data-aos="fade-up">
          <h2 class="ff-Acme">Problem Statement</h2>
          <p class="ff-poppins">In the traditional beauty salon model, customers often face challenges such as limited
            appointment availability, travel time, and parking difficulties. Additionally, the COVID-19
            pandemic further exacerbated these challenges, as people became more conscious of
            visiting crowded places and desired personalized services in the comfort and safety of
            their own homes. Auckland lacked a convenient and reliable mobile beauty service that
            could meet these evolving customer needs.</p>
            <h2 class="ff-Acme">Solution</h2>
            <p class="ff-poppins" >Umile.co.nz partnered with UtoR Digital, a renowned software development company, to
              develop a robust and user-friendly mobile and web application that would bridge the gap
              between customers and beauty services. The application was designed to offer an
              extensive range of services and ensure high-quality experiences while maintaining strict
              hygiene and safety protocols. </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="umile-intro d-flex justify-content-center align-items-center" data-aos="fade-up">
        <img src={require ("../../images/vedios/problem-solving.gif")} alt="" />
        </div>
      </div>
      
      <div class="col-md-6">
        <div class="umile-intro d-flex justify-content-center align-items-center" data-aos="fade-right">
        <img src={require ("../../images/vedios/mobile-dev.gif")} alt="" class="img-fluid" />
         </div>
      </div>
      <div class="col-md-6 mobile-app">
        <div class="w-100" data-aos="zoom-in-down">
          <h2 class="ff-Acme">Mobile Application</h2>
        </div>
        
        <p class="ff-poppins" data-aos="fade-left">The Umile mobile app was built using the Flutter framework, enabling it to run
          seamlessly on both iOS and Android devices. This cross-platform development
          approach ensured a consistent user experience across different operating systems.
          Customers could easily browse services, view available appointment slots, and book
          appointments with just a few taps. The app also incorporated a secure payment gateway
          for hassle-free transactions. </p>

          <div class="w-100" data-aos="zoom-in-right">
            <h2 class="ff-Acme">Web Application</h2>
          </div>
          <p class="ff-poppins" data-aos="fade-down">For customers who preferred to access Umile's services through the web, UtoR Digital
            developed a web application using the Angular web framework. The web application
            provided a responsive and intuitive interface, allowing users to explore services,
            schedule appointments, and manage their accounts. Microsoft Azure, a cloud computing
            platform, was utilized to host the web services, ensuring scalability, reliability, and data
            security.  
            </p>
      </div>
    </div>
   </div>
   <div class="impact-bg p-4 ">
    <div class="impact-title intro-detail" data-aos="zoom-in-down">
      <strong>Umile.co.nz experienced significant success and made a profound impact on the beauty
        service industry in Auckland. Here are some key outcomes:</strong>
    </div>
   
    <div class="row ">
      <div class="col-md-6">
       <div class="umile-intro ">
        {/* <!-- <h2 class="ff-Acme">Impact</h2> --> */}
       
          <ul class="mt-5" data-aos="zoom-in-left">
            <li>● Convenience and Accessibility
              <p class="ff-poppins">Umile's mobile beauty service brought convenience and accessibility to
                customers' doorsteps. By eliminating the need to travel to a salon, customers
                saved time and effort, allowing them to enjoy beauty treatments in the comfort of
                their own homes. The mobile app and web application provided an easy-to-use
                interface for seamless booking and management of appointments</p>
            </li>

            <li>● High Standards of Sanitation and Safety
              <p class="ff-poppins">Recognizing the importance of health and safety, Umile implemented rigorous
                sanitation protocols. Customers were assured that all beauticians were highly
                skilled and fully vaccinated. By maintaining these high standards, Umile fostered
                trust and loyalty among its customer base.</p>
            </li>
            <li>● Rapid Customer Acquisition
              <p class="ff-poppins">Through effective marketing strategies and the user-friendly nature of the mobile
                and web applications, Umile attracted a remarkable 10,000 customers within the
                first three months of launch. This rapid customer acquisition demonstrated the
                demand for mobile beauty services in Auckland and validated Umile's value
                proposition.</p>
            </li>
            <li>● Enhanced Customer Experience
              <p class="ff-poppins">Umile prioritized personalized customer care, ensuring that every individual
                received the attention and service they desired. The mobile and web applications
                provided customers with the flexibility to choose their preferred beautician,
                browse service packages, and tailor their beauty experience to their specific
                needs. By delivering exceptional customer experiences, Umile fostered customer
                satisfaction and loyalty.</p>
            </li>
          </ul>
       </div>
      </div>
      <div class="col-md-6">
        <div class="umile-intro impact-gif" data-aos="fade-up">
        <img src={require ("../../images/vedios/impact.gif")} alt="" class="img-fluid" />
         </div>
      </div>
    </div>
   </div>
   </div>
   <div class="section cc-cta grow-business-sec">
        <div class="container ">
          <div class="hero-sec-bg-video">
            <video class="video-tag is-visible is-playing" autoplay="" muted="" loop="" poster={require("..//../images/footer-bg.webp")}>
              <source src="images/vedios/umile.mp4" type="video/mp4" />
              {/* <!-- <source src="./videos/intro-video.mp4" type="video/mp4"> --> */}
            </video>
          </div>
          <div class="cta-wrap">
            <div class="custom-slide-in aos-init aos-animate" data-aos="fade-down-right">
              <div class="cta-text section-title hide-slide">
                <div class="label heading-2 testimonial-label aos-init aos-animate conculsion-label" data-aos="zoom-out">
                 Conclusion
                </div>
                <div class="paragraph-bigger cc-bigger-light ff-poppins aos-init" data-aos="zoom-out-left">
                  <p class="ff-poppins">Umile.co.nz, in collaboration with UtoR Digital, successfully addressed the challenges
                    faced by customers in accessing premier beauty services. By leveraging cutting-edge
                    technologies such as Flutter, Angular, and Microsoft Azure, Umile developed a mobile
                    and web application that revolutionized the beauty service industry in Auckland. The
                    company's commitment to convenience, sanitation, and personalized customer care
                    enabled them to attract a significant customer base and establish a strong foothold in the
                    market. Umile's success exemplifies the transformative potential of mobile beauty
                    services in meeting the evolving needs of customers in today's fast-paced world.
                    </p>
                </div>
           
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}
