import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="free-banner">
      <div className="free-content">
        <h1>POST A NEW JOB</h1>
        <h5>
          Simply post a job you need completed and receive competitive bids from
          freelancers within minutes.
        </h5>
        <div className="free-new">
          <Link to="/freelancerpost">
            <button type="button" className="free-freelance">
              <span></span>CREATE JOB
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
