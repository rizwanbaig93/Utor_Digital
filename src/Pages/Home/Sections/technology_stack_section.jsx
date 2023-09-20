import React from 'react'

function technology_stack_section() {
  return (
    <div>
       <div class="tech-stack-sec tab-area">
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
            <img src={require("../..//images/technology-icons/flutter.webp")} alt="Flutter Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Flutter</h4>
          </div>
        </div>
        {/* <!-- flutter --> */}
        <div class="tech tech-1 angular item">
          <div class="tech-icon" data-aos="zoom-in-right" data-aos-duration="1200" data-delay="3500">
            <img src={require("../..//images/technology-icons/angular.webp")} alt="Angular Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Angular</h4>
          </div>
        </div>
        {/* <!-- Angular --> */}
        <div class="tech tech-1 react item">
          <div class="tech-icon" data-aos="zoom-in-right" data-aos-duration="1500" data-delay="4000">
            <img src={require("../..//images/technology-icons/react.webp")} alt="React Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">React</h4>
          </div>
        </div>
        {/* <!-- React --> */}
        <div class="tech tech-1 dotNet item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="1800" data-delay="4300">
            <img src={require("../..//images/technology-icons/dot-net.webp")} alt="DotNet Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">DotNet</h4>
          </div>
        </div>
        {/* <!-- DotNet --> */}

        <div class="tech tech-1 azure item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2000" data-delay="4500">
            <img src={require("../..//images/technology-icons/azure.webp")} alt="Azure Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Azure</h4>
          </div>
        </div>
        {/* <!-- Azure --> */}
        <div class="tech tech-1 aws item">
           <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2200" data-delay="4800">
            <img src={require("../..//images/technology-icons/aws.webp")} alt="AWS Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">AWS</h4>
          </div>
        </div>
        {/* <!-- AWS --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2400" data-delay="5000">
            <img src={require("../..//images/figma-logo.webp")} alt="figma" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Figma</h4>
          </div>
        </div>
        {/* <!-- Google Cloud --> */}
        <div class="tech tech-1 wordpress item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2600" data-delay="5200">
            <img src={require("../..//images/technology-icons/wp.webp")} alt="Wordpress Icon" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Wordpress</h4>
          </div>
        </div>
        {/* <!-- Wordpress --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2800" data-delay="5500">
            <img src={require("../..//images/illustrator-logo.webp")} alt="Adobe Illustrator" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Illustrator</h4>
          </div>
        </div>
        {/* <!-- Google Cloud --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="zoom-out-right" data-aos-duration="2800" data-delay="5500">
            <img src={require("../..//images/photoshop-logo.webp")} alt="Photoshop" />
          </div>
          <div class="tech-title" data-aos="zoom-out-right">
            <h4 class="ff-Acme">Photoshop</h4>
          </div>
        </div>
           {/* <!--htlm --> */}
           <div class="tech tech-1 google-cloud item">
            <div class="tech-icon" data-aos="zoom-out-right">
              <img src={require("../..//images/html-logo.webp")} alt="html" />
            </div>
            <div class="tech-title" >
              <h4 class="ff-Acme">HTML</h4>
            </div>
          </div>
        {/* <!-- Google Cloud --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="fade-up-left">
            <img src={require("../..//images/after-effect-logo.webp")} alt="After Effects" />
          </div>
          <div class="tech-title">
            <h4 class="ff-Acme">After Effects</h4>
          </div>
        </div>
        {/* <!-- Google Cloud --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="fade-up-left">
            <img src={require("../..//images/in-design.webp")} alt="InDesign" />
          </div>
          <div class="tech-title">
            <h4 class="ff-Acme">InDesign</h4>
          </div>
        </div>
     
        {/* <!-- css --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="fade-up-left">
            <img src={require("../..//images/css-logo.webp")} alt="css" />
          </div>
          <div class="tech-title">
            <h4 class="ff-Acme">CSS</h4>
          </div>
        </div>
        {/* <!-- sass --> */}
        <div class="tech tech-1 google-cloud item">
          <div class="tech-icon" data-aos="fade-up-left">
            <img src={require("../..//images/sass.webp")} alt="" />
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
    </div>
  )
}

export default technology_stack_section
