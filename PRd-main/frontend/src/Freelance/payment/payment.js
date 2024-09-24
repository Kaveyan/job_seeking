import React from "react";
import "./payment.css";
import c1 from "../../assets/c4.jpg";
import c2 from "../../assets/c1.jpg";
import FreelancerHomeNavbar from '../navbar/Navbar';
export default function Payment() {
    return (
      <>
                    <FreelancerHomeNavbar/>
          <div className="free-payment">
     
          <div className="free-overlap-group-wrapper">
            <div className="free-overlap-group">
              <div className="free-rectangle" />
              <div className="free-div">
                <a href="./freelancerscan"><button className="free-pay1">Pay</button></a>
              </div>
              <div className="free-rectangle-2">
              <a href="./freelancerscan"><button className="free-pay2">Pay</button></a>
              </div>
              <img src={c1} className="free-image" alt="c1"></img>
              <img src={c2} className="free-img" alt="c2"></img>
              <div className="free-text-wrapper">Nick</div>
              <div className="free-text-wrapper-2">Royi</div>
              
            </div>
          </div>
        </div>
      </>
        
      );
    };