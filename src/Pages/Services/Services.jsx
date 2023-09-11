import React from 'react'
import Navbar from '../../Components/Header/Navbar';
import IT_Starategy_Img from "../images/services/it-starategy.png";
import Footer from '../../Components/Footer/Footer';
import { NavLink } from 'react-router-dom';

export default function Services () {
  return (
    <>
     <Navbar/>


     <div class="container ourservices">
      <div class="blog-heading section-title container">
        <div class="label cc-light heading-2 ff-Unbounded service-title" data-aos="zoom-in-up"> We Empower Your Digital Success</div>
        <div class="heading-jumbo-small ff-Acme service-subtitle" data-aos="zoom-in-left">
          Unleash innovation with our comprehensive services, from custom software
          development to strategic consulting.<br/>
        </div>
      </div>
      <div class="w-layout-grid our-services-grid">
     
      
        <div class="div-block div-block-2" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={IT_Starategy_Img} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Internet of Things</div>
          <strong class="paragraph-bigger sub-heading ff-Acme">Unlock the Potential of IoT</strong>
          <div class="paragraph-light ff-poppins">
            We are leading IoT consulting implementation services providers,
              with vast experience in IoT System Integration for small and large
              enterprises.
          </div>
          <div class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>
        <div class="div-block div-block-2" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={IT_Starategy_Img} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Software Solution</div>
         
          <div class="paragraph-light ff-poppins">
            Crisp, seamless, and scalable projects are what we boast of. The
            software solutions at Utor are custom designed as per your
            preferences, efficiently optimized, and tweaked to perfection.
          </div>
          <div  class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>

        <div class="div-block div-block-2" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={IT_Starategy_Img} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Web Design &amp; Development</div>
         
          <div class="paragraph-light ff-poppins">
            UtoR has an array of web design &amp; development projects to its
            credit. With more than 15 years of industrial experience in web
            design and development solutions.
          </div>
          <div  class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>

        <div class="div-block div-block-2" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={IT_Starategy_Img} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded"> UX Design &amp; Consultancy</div>
         
          <div class="paragraph-light ff-poppins">
            Our User experience speaks for itself; humanistic and realistic.
            We religiously hold on to the mantra of usability and
            accessibility.
          </div>
          <div  class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>

        <div class="div-block div-block-2" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={IT_Starategy_Img} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Technology Consultancy</div>
         
          <div class="paragraph-light ff-poppins">
            The use of the right technology works like a hand in glove for
              your business goals. This is why we at UtoR solutions make it a
              point to provide you with the technology that best suits you.
          </div>
          <div  class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>

        <div class="div-block div-block-2" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={IT_Starategy_Img} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Cloud Platform &amp; Migration</div>
         
          <div class="paragraph-light ff-poppins">
            The world is going cloud and so are we. Cloud platform and
              migration means increased efficiency, enhanced optimization and
              smooth and seamless user experiences.
          </div>
          <div  class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>

        <div class="div-block div-block-2" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={IT_Starategy_Img} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Software Quality Assurance</div>
         
          <div class="paragraph-light ff-poppins">
            Quality assurance is a culture that we proudly boast of. Software
            quality assurance is best identified with an in-depth knowledge of
            the ideal genre in QA.
          </div>
          <div  class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>
    
        <div class="div-block div-block-2" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={IT_Starategy_Img} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Enterprise Solutions</div>
         
          <div class="paragraph-light ff-poppins">
            Enterprise solutions at UtoR are multi ranged, as we provide a
            vast array of services spanning across installation, integration,
            and deployment to quality control and support.
          </div>
          <div  class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>

        <div class="div-block div-block-2" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={IT_Starategy_Img} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">IT System and Application Integration Services</div>
         
          <div class="paragraph-light ff-poppins">
            By integrating applications and systems, businesses can achieve
            more efficient and agile operations. Some examples of application
            integration services are Amazon API Gateway, Amazon EventBridge,
            Amazon Simple Notification Service (SNS), Amazon Simple Queue
            Service (SQS), and Amazon AppFlow.
          </div>
          <div  class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>
    

        <div class="div-block div-block-2" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={IT_Starategy_Img} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">IT Resource Sharing</div>
          <strong class="paragraph-bigger sub-heading ff-Acme">Unlock Your Business Potential with Expert IT Strategy and
            Consulting</strong>
          <div class="paragraph-light ff-poppins">
            When it comes to IT resource hiring and management, there are many
            flexible alternatives available. A startup may not be able to
            afford and focus on hiring a complete staff for...
          </div>
          <div  class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>

        <div class="div-block div-block-2" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={IT_Starategy_Img} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">IT Strategy and Consulting</div>
          <strong class="paragraph-bigger sub-heading ff-Acme">Unlock Your Business Potential with Expert IT Strategy and
            Consulting</strong>
          <div class="paragraph-light ff-poppins">
            Our seasoned consultants provide tailored solutions, leveraging
            technology to align your business objectives, optimize operations,
            and drive sustainable growth.
          </div>
          <div  class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>
        <div class="div-block div-block-3" data-aos="zoom-in-left">
          <div class="img-div">
            <img src={require ("../images/services/app-service.png")} width="155" sizes="155px"  alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Application Services</div>
          <strong class="paragraph-bigger sub-heading ff-Acme">Unleash the Power of Custom Application Services</strong>
          <div class="paragraph-light ff-poppins">
            Our expert team crafts tailored software solutions that drive
            innovation, enhance user experiences, and propel businesses towards
            success in the digital age.
          </div>
          <div data-w-id="d8580cb3-4f6e-2bf7-0cf1-e8c2dcb2bd9b" class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>
        <div class="div-block div-block-4" data-aos="fade-left">
          <div class="img-div">
            <img src={require ("../images/services/business-intelligence.png")} width="155" sizes="155px"  alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Business Intelligence Consulting</div>
          <strong class="paragraph-bigger sub-heading ff-Acme">Gain Actionable Insights with Expert Business Intelligence
            Consulting.</strong>
          <div class="paragraph-light ff-poppins">
            Our data-driven approach and advanced analytics solutions empower
            businesses to make informed decisions, optimize performance, and
            drive growth in today's competitive landscape.
          </div>
          <div data-w-id="d8580cb3-4f6e-2bf7-0cf1-e8c2dcb2bd9b" class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>
        <div class="div-block div-block-5" data-aos="zoom-in-down">
          <div class="img-div">
            <img src={require ("../images/services/cloud-service.png")} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Cloud</div>
          <strong class="paragraph-bigger sub-heading ff-Acme">Embrace the Cloud for Business Transformation</strong>
          <div class="paragraph-light ff-poppins">
            We offer secure and scalable solutions, optimizing operations and
            driving growth through flexible cloud technologies.
          </div>
          <div data-w-id="d8580cb3-4f6e-2bf7-0cf1-e8c2dcb2bd9b" class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>
        <div id="" class="div-block div-block-5" data-aos="zoom-in-up">
          <div class="img-div">
            <img src={require ("../images/services/cyber-security.png")} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Cybersecurity</div>
          <strong class="paragraph-bigger sub-heading ff-Acme">Protect Your Business with Robust Cybersecurity
            Solutions</strong>
          <div class="paragraph-light ff-poppins">
            Our experts ensure comprehensive defense against cyber threats,
            safeguarding your data, reputation, and customer trust in today's
            digital landscape.
          </div>
          <div data-w-id="d8580cb3-4f6e-2bf7-0cf1-e8c2dcb2bd9b" class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>
        <div id="" class="div-block div-block-5" data-aos="fade-down">
          <div class="img-div">
            <img src={require ("../images/services/AI.png")} width="155" sizes="155px" alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Data and Artificial Intelligence</div>
          <strong class="paragraph-bigger sub-heading ff-Acme">Empower Your Business with Data and AI Advantages</strong>
          <div class="paragraph-light ff-poppins">
            Harness the power of data and artificial intelligence, unlocking
            valuable insights and driving innovation for your business.
          </div>
          <div data-w-id="d8580cb3-4f6e-2bf7-0cf1-e8c2dcb2bd9b" class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>
        <div id="" class="div-block div-block-5" data-aos="fade-left">
          <div class="img-div">
            <img src={require ("../images/services/ui-design.png")} width="155" sizes="155px"  alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">User Experience Design</div>
          <strong class="paragraph-bigger sub-heading ff-Acme">Elevate User Experiences with Expert UX Design</strong>
          <div class="paragraph-light ff-poppins">
            Our UX design experts create intuitive and engaging interfaces that
            captivate users, boost conversions, and enhance your brand's digital
            presence.
          </div>
          <div data-w-id="d8580cb3-4f6e-2bf7-0cf1-e8c2dcb2bd9b" class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>
        <div id="" class="div-block div-block-5" data-aos="fade-right">
          <div class="img-div">
            <img src={require ("../images/services/business-process.png")} width="155" sizes="155px"
             alt="Service Icon" class="service-icon" />
          </div>
          <div class="paragraph-bigger ff-Unbounded">Business Process Outsourcing</div>
          <strong class="paragraph-bigger sub-heading ff-Acme">Enhance Call Center Efficiency with Streamlined BPO
            Solutions</strong>
          <div class="paragraph-light ff-poppins">
            We optimize operations, improve customer experiences, and drive
            business success, supporting your call center operations for maximum
            efficiency.
          </div>
          <div data-w-id="d8580cb3-4f6e-2bf7-0cf1-e8c2dcb2bd9b" class="text-block-4 pb-0">
            <NavLink to="/contact" target="_blank" class="link ff-Acme"> Learn More → </NavLink>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}
