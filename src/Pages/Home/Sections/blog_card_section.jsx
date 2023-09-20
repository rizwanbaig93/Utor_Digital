/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { NavLink } from 'react-router-dom'

function blog_section() {
  return (
    <div>
        <section class="blog-section">

{/* <!-- design 5 start  --> */}
<div class="blog-design blog-design-5">
<testing/>

 <div class="container">
   <div class="section-title">
     <h2 class="heading label heading-2 testimonial-label ff-Unbounded aos-init aos-animate" data-aos="zoom-out-up">
       Latest Blogs
     </h2>
   </div>
   <div class="parent">
      {/* blog cards 1 */}
 <article class="card">
     <header class="card__thumb">
         <NavLink to=""><img src={require("../..//images/agile-methodology5.webp")}/></NavLink>
     </header>
     
     <div class="card__body">
         <div class="card__category "><NavLink className='text-white' target='blank' to="/agile_development">Agile Development</NavLink></div>
         <h2 class="card__title"><NavLink className='card_tittle_heading' to="">Introduction to Agile Development:</NavLink></h2>
         <div class="card__subtitle"> A Paradigm Shift in Software Engineering.</div>
         <p class="card__description blog_One">Explore the transformative world of Agile
                 Development, a paradigm shift in software engineering. This article delves into Agile's origins, core
                 values, and methodologies, including Scrum, Kanban, Extreme Programming (XP), and Lean.
                 <NavLink  to="/agile_development"  className="learn-more-btn learn_btn"  target='blank'> Learn More </NavLink>
               </p> 
     </div>
     <footer class="card__footer">
     <span class="icon ion-chatbox"> <i class="fa fa-comment" aria-hidden="true"></i> </span>
     <NavLink to=""> 4 Minutes Read</NavLink>
     </footer>
 </article>

 <article class="card">
   <header class="card__thumb">
       <NavLink to="#"><img src={require("../..//images/qa-5.webp")}/></NavLink>
   </header>
   <div class="card__body">
       <div class="card__category">
         <NavLink className='text-white' target='blank' to="/software_testing">Software Testing</NavLink>
         </div>
       <h2 class="card__title">
         <NavLink className='card_tittle_heading' to="#">Best Practices for Software Testing and Quality Assurance</NavLink>
         </h2>
       <div class="card__subtitle">Discover essential best practices for software testing and quality assurance
               (QA) in the fast-paced world of software development.</div>
       <p class="card__description blog_ptag">In the fast-paced world of software development,
                 delivering a product that not only meets but exceeds user expectations is paramount. Achieving this
                 goal requires a systematic approach to software testing and quality assurance (QA).
                 <NavLink to="/software_testing" className="learn-more-btn learn_btn"  target='blank'> Learn More </NavLink>
                 </p>
   </div>
   <footer class="card__footer">
   <span class="icon ion-chatbox"> <i class="fa fa-comment" aria-hidden="true"></i> </span>
   <NavLink to=""> 7 Minutes Read</NavLink>
   </footer>
</article>  
<article class="card">
 <header class="card__thumb">
     <NavLink to="/blog"><img src={require("../..//images/cc-3.webp")} /></NavLink>
 </header>

 <div class="card__body">
     <div class="card__category">
       <NavLink className='text-white' target='blank' to="/cloud_computing">Cloud Computing</NavLink>
       </div>
     <h2 class="card__title">
       <NavLink className='card_tittle_heading' to="#">Best Practices for Unlocking the Benefits of Cloud Computing for Businesses</NavLink></h2>
     <div class="card__subtitle">Explore the transformative power of cloud computing for businesses and learn
               how to leverage its advantages effectively. </div>
     <p class="card__description blog_ptag">Explore performance monitoring, disaster recovery
                 planning, training and skill development, compliance, governance, and the importance of regular
                 evaluation and optimization in maximizing the potential of cloud technology for your business. 
                 <NavLink to="/cloud_computing" className="learn-more-btn learn_btn"  target='blank'> Learn More </NavLink></p>
 </div>
 <footer class="card__footer">
 <span class="icon ion-chatbox"> <i class="fa fa-comment" aria-hidden="true"></i> </span>
 <NavLink to=""> 8 Minutes Read</NavLink>
 </footer>
</article> 

<article class="card">
 <header class="card__thumb">
     <NavLink to="/blog"><img src={require("../..//images/ai-1.webp")} /></NavLink>
 </header>
 <div class="card__body">
     <div class="card__category">
       <NavLink className='text-white' target='blank' to="/machine_learning">Machine Learning</NavLink></div>
     <h2 class="card__title">
       <NavLink className='card_tittle_heading' to="#">Machine Learning and AI Applications in Software Development</NavLink></h2>
     <div class="card__subtitle">Discover the keys to successful machine learning and AI development for software solutions.</div>
     <p className="card__description Card_Padding blog_ptag">Explore essential best practices for integrating
                 machine learning and artificial intelligence into software development projects. Learn how to define
                 clear objectives, ensure data quality, select the right models, and prioritize ethics and
                 transparency.
                 <NavLink to="/machine_learning" className="learn-more-btn learn_btn" target='blank'> Learn More </NavLink>
                 </p>
 </div>
 <footer class="card__footer">
 <span class="icon ion-chatbox"> <i class="fa fa-comment" aria-hidden="true"></i> </span>
 <NavLink to=""> 10 Minutes Read</NavLink>
 </footer>
</article>
</div>
</div>
</div>
{/* <!-- design 5 ends  --> */}
  </section>
    </div>
  )
}

export default blog_section
