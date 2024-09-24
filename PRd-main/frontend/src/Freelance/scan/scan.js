import React from "react";
import "./scan.css";
import bank1 from "../../assets/1.png";
import bank2 from "../../assets/2.png";
import bank3 from "../../assets/3.png";
import code from "../../assets/scan.png";
import FreelancerHomeNavbar from '../navbar/Navbar';

export default function Scan() {
    return (
      <>
         <FreelancerHomeNavbar/>
      <div className="free-scan">
                
          <div className="free-overlap-group-wrapper">
            <div className="free-overlap-group">
            <img src={code} className="free-qr" alt="user"></img>
              <div className="free-text-wrapper">Make your payment through</div>
            <img src={bank1} className="free-bank1" alt="1"></img>
            <img src={bank2} className="free-bank2" alt="2"></img>
            <img src={bank3} className="free-bank3" alt="3"></img>
            </div>
          </div>
        </div>
      </>
        
      );
    };