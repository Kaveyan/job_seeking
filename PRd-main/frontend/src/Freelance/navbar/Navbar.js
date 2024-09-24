import React, { useState, useEffect } from "react";
import "./Navbar.css";
import userProfilePic from "../../assets/user.png"; // Tell webpack this JS file uses this image
import { Link } from "react-router-dom";
const Navbar = () => {
  const [offset] = useState(0);
  useEffect(() => {
    window.onscroll = () => {
      // setOffset(window.pageYOffset);
    };
  }, []);

  return (
    <nav
      className={`${
        offset >= document.body.scrollHeight * 0.5 ? "onscroll" : ""
      }`}
    >
      <div className="free-navbar">
        <Link to="/" className="name">
          NeuroWizard
        </Link>
        <ul className="free-nav-down">
          <input type="text" className="free-searchBox" placeholder="Search.." />

          <li className="free-dropdown">
            <div className="free-dropdown-toggle">Job</div>
            <ul className="free-dropdown-menu">
              <li>
                <Link to="/post" className="free-postJob">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link to="./jobs" className="free-browseJob">
                  Your Jobs
                </Link>
              </li>
            </ul>
          </li>
          <li>
            Discover
          </li>
          <li>
            Message
          </li>
          <li>
            Payment
          </li>
        </ul>
        <li className="free-dropdown">
        <div className="free-display-user">
          <img
            src={userProfilePic}
            className="free-userPic"
            alt="user"
          ></img></div>
            <ul className="free-dropdown-menu">
              <li>
                <Link to="" className="free-postJob">
                  Logout
                </Link>
              </li>
            </ul>  
        </li>
      </div>
    </nav>
  );
};
export default Navbar;
