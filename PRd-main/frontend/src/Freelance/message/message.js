import React from "react";
import "./message.css";
import userPic from "../../assets/user.png";
import c1 from "../../assets/c4.jpg";
import c2 from "../../assets/c1.jpg";
import emoji from "../../assets/smile.png"
import files from "../../assets/add.png"
import FreelancerHomeNavbar from '../navbar/Navbar';

const Message = () =>  {
      return (

        <>
        <FreelancerHomeNavbar/> 
        <div className="free-message">

          <div className="free-overlap-group-wrapper">
            <div className="free-overlap-group">
              <div className="free-rectangle" />
              <div className="free-div" />
              <div className="free-text-wrapper">WeChat</div>
              <img src={userPic} className="image" alt="user"></img>
              <div className="free-rectangle-2" />
              <div className="free-rectangle-3" />
              <div className="free-text-wrapper-2">Nick</div>
              <div className="free-text-wrapper-3">Royi</div>
              <div className="free-rectangle-4" />
              <div className="free-rectangle-5" />
              <div className="free-rectangle-6" />
              <div className="free-text-wrapper-4">Send a message</div>
              <img src={emoji} className="free-smile-png" alt="emoji"></img>
              <img src={files} className="line" alt="add"></img>
              <div className="free-rectangle-7" />
              <div className="free-rectangle-8" />
              <div className="free-text-wrapper-5">Hello Nick!</div>
              <div className="free-text-wrapper-6">Hi sir</div>
              <img src={c1} className="free-image-2" alt="client1"></img>
              <img src={c2} className="free-image-3" alt="client2"></img>
            </div>
          </div>
        </div>
        </>
        
      );
    };
    
export default Message;