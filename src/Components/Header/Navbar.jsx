import React from 'react'
import { NavLink} from 'react-router-dom'
// import "../css/general.css";
// import "../css/normalize.css";
// import "../css/style.css";
import Logo from "../Assets/Logo/Logo.png";
const Navbar = () => {
  return (
    <>
        <header data-collapse="medium" role="banner" class="navigation w-nav">
    <div class="navigation-wrap">
      <NavLink to="/" aria-current="page" class="logo-link w-nav-brand w--current "><img src={Logo}
          width="100" sizes="100px" srcset=" " alt="" class="logo-image" /></NavLink>
      <div class="menu">
        <nav role="navigation" class="navigation-items w-nav-menu Nav_Header">
          <div class="custom-btn">
            <span></span> <span></span> <span></span> <span></span>
             <NavLink  to="/" class="navigation-item w-nav-link">Home</NavLink>
          </div>
          <div class="custom-btn">
            <span></span> <span></span> <span></span> <span></span>
            <NavLink to="/startup_fast_track"  class="navigation-item w-nav-link"> Startup Fast Track</NavLink>
          </div>
          <div class="custom-btn">
            <span></span> <span></span> <span></span> <span></span>
            <NavLink to="/portfolio"  class="navigation-item w-nav-link">Portfolio</NavLink>
          </div>
          <div class="custom-btn">
            <span></span> <span></span> <span></span> <span></span>
            <NavLink to="/services" class="navigation-item w-nav-link">Services</NavLink>
          </div>
          <div class="custom-btn">
            <span></span> <span></span> <span></span> <span></span>
            <NavLink to="/about" class="navigation-item w-nav-link">About Us</NavLink>
          </div>
          <div class="custom-btn">
            <span></span> <span></span> <span></span> <span></span>
            <NavLink to="/contact" class="navigation-item w-nav-link">Contact</NavLink>
          </div>
        </nav>
        <div class="menu-button w-nav-button">
          <img src={require ("../Assets/images/menu-icon_1menu-icon.png")} width="22" alt="" class="menu-icon" />
        </div>
      </div> 
      {/* <!-- request a qoute btn  --> */}
      <div class="custom-btn request-qoute-btn" id="dropdownMenuButton1" data-bs-toggle="dropdown"
        aria-expanded="false"> <span></span> <span></span> <span></span> <span></span> 
        <a class="navigation-item w-nav-link" >
          Request a Quote
        </a>
      </div>
      <ul class="dropdown-menu p-3" aria-labelledby="dropdownMenuButton1">
        <form class="input-forms" id="qoute-form">
          <div class="input-group">
            <label for="">Name</label>
            <input type="text" placeholder="Name" name="name" id="numb" required/>
          </div>
          <div class="input-group">
            <label for="">Email Address</label>
            <input type="email" placeholder="Email Address" name="email" id="email" required/>
          </div>
          <div class="input-group">
            <label for="">Contact Number</label>
            <input type="number" placeholder="Contact Number" name="contact" id="contact" required/>
          </div>
          <div class="input-group">
            <label for="">Your Message</label>
            <textarea name="message" placeholder="Your message" id="message" cols="30" rows="7" required></textarea>
          </div>
          <div class="get-in-touch">
           <input  readonly placeholder="Send"/>
            <button class="custom-btn" type="submit"><span></span><span></span><span></span><span></span>Send</button>
          </div>
        </form>
      </ul>
    </div>
  </header>
    </>
  );
};

export default Navbar