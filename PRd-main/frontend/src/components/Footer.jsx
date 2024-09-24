import React from "react";
import {FaFacebook} from "react-icons/fa";
import {BsLinkedin,BsGithub} from "react-icons/bs";
import {BiLogoGmail} from "react-icons/bi";
import './Student_dashboard.css'
function Footer(){
    return(
        <div className="footer">
            <ul className='ul-footer'>
              <li className='main-footer'>
                  <ul>
                    <li>YOUR SECURITY</li>
                    <li>
                      <ul>
                        <li>Terms & Conditions</li>
                        <li>Privacy & Security</li>
                        <li>Cookie Policy</li>
                        <li>Accessibility</li>
                      </ul>
                    </li>
                  </ul>
              </li>
              <li className='main-footer'>
                    <ul>
                      <li>WHO WE ARE</li>
                      <li>
                        <ul>
                          <li>Our History</li>
                          <li>Our Community</li>
                          <li>Careers</li>

                          <li>Corporate Polices</li>
                        </ul>
                      </li>
                    </ul>  
              </li>
              <li className='main-footer'>
              <ul>
                      <li>HIRING & FREELANCING</li>
                      <li>
                        <ul>
                          <li>Top MNC</li>
                          <li>Freelancing</li>
                          <li>AI Mock Interview</li>
                          <li>Leader Board</li>
                      
                        </ul>
                      </li>
                    </ul> 
              </li>
              <li className='main-footer'>
              <ul>
                      <li>HELP & SUPPORT</li>
                      <li>
                        <ul>
                          <li>Contact Us</li>
                          <li>Delivery</li>
                          <li>Payment Options</li>
                          <li>Payment Security</li>
                        </ul>
                      </li>
                    </ul> 
              </li>
              <li className='main-footer'>
                        <ul className='main-follow'>
                          <li >
                            <h2>FOLLOW US ON</h2>
                            <div className='icon'>
                              <a href='#'><FaFacebook className="social-media-icon"/></a>
                              <a href='#'><BsLinkedin className="social-media-icon"/></a>
                              <a href='#'><BiLogoGmail className="social-media-icon"/></a> 
                              <a href='#'><BsGithub className="social-media-icon"/></a> 
                            </div>
                          </li>
                          <li>
                            <h3>For the latest price and VIP information</h3>
                            <div className='footer-email'>
                              <input type='text' placeholder='Enter Your Mail...'/>
                              <button type='click'>SUBMIT</button>
                            </div>
                          </li>
                        </ul>
              </li> 
            </ul>
        </div>
        

    );
}
export default Footer;