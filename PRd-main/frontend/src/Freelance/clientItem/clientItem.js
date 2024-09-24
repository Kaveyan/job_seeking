import React from "react";
import "./clientItem.css";
//  

function clientItem({ image, name, skill }) {
  return (
    <div className="free-clientItem">
      <div style={{ backgroundImage: `url(${image})` }}> </div>
      <h1> {name} </h1>
      <p> {skill} </p>
      <a href="/freelancerpayment">
      <button className="free-hire">Hire</button></a>
    </div>
  );
}

export default clientItem;
