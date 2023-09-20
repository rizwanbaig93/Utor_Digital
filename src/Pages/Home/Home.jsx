import React from 'react'
import Navbar from '../../Components/Header/Navbar';
import Footer from '../../Components/Footer/Footer';
import BusinessVideo from '../GrowBusinessVideo/BusinessVideo';
import ClientLogoSection from "./Sections/client_logo_section"
import ProcessWorkSection from "./Sections/process_work_section"
import ServiceCardSection from "./Sections/service_card_section"
import TestimonialSection from "./Sections/testimonial_section"
import TechnologyStackSection from "./Sections/technology_stack_section"
import BlogCardSection from "./Sections/blog_card_section"
import HomeVideoSection from "./Sections/home_video_section"


function Home () {
  return (
    <>
    <Navbar/>   

    <HomeVideoSection/>
    <ClientLogoSection/>
    <ProcessWorkSection/>
    <ServiceCardSection/>
    <TestimonialSection/>
    <BusinessVideo/>
    <TechnologyStackSection/>
    <BlogCardSection/>
  
    <Footer/>
  </>
  );
};

export default Home;