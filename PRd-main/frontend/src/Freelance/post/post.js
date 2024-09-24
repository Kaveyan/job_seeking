import React, { useEffect, useState } from "react";
import "./post.css";
import "../../assets/4.jpg";
import FreelancerHomeNavbar from '../navbar/Navbar';
import { reset ,FreelancerPost} from '../../features/auth/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function CreatePost() {
  const [freePost, setFreePost] = useState({
    title: "", skill: "", description: "", salary: ""
  });
  console.log(freePost)
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { user, message } = useSelector((state) => state.auth);

  const handleChange = ({ currentTarget: input }) => {
    setFreePost({ ...freePost, [input.name]: input.value });
  };

  useEffect(() => {
    if (message) {
      toast.error(message);
    }
    dispatch(reset());
  }, [user, message]);

  const handleSubmit = event => {
    console.log("handleSubmit ran");
    event.preventDefault();
    dispatch(FreelancerPost(freePost))
    navigate('/freepostlist')
  };

  return (
    <>
    <FreelancerHomeNavbar />
    <div className="free-contact">
      
      <div className="free-rightSide">
        <h1> New Job</h1>

        <form id="free-contact-form" method="POST" onSubmit={handleSubmit}>
          <label htmlFor="name" className="free-post-type">Title of your project</label>
          <input name="title" value={freePost.title} placeholder="" type="text" onChange={handleChange} className="free-post-input" />
          
          <label htmlFor="SKILL" className="free-post-type">Skill:</label>
          <select id="free-Skill" value={freePost.skill} name="skill" onChange={handleChange} className="free-post-select">
            <option value="nil">select</option>
            <option value="Front-end developer">Front-end developer</option>
            <option value="Full-stack developer">Full-stack developer</option>
            <option value="ML Engineer">ML Engineer</option>
            <option value="UI/UX developer">UI/UX developer</option>
            <option value="Social media management">Social media management</option>
          </select>

          <label htmlFor="message" className="free-post-type">Description</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            value={freePost.description}
            name="description"
            onChange={handleChange}
            required
          ></textarea>

          <label htmlFor="salary" className="free-post-type">salary</label>
          <select id="salary" name="salary" value={freePost.salary} onChange={handleChange}>
            <option value="0">select</option>
            <option value="1">30000-50000</option>
            <option value="2">50000-100000</option>
            <option value="3">100000-150000</option>
            <option value="4">150000-200000</option>
          </select>

          <button type="submit" className="free-freelance">Post</button>
        </form>
      </div>
    </div>
    </>
    
  );
}
