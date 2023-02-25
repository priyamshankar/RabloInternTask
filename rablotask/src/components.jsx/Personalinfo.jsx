import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { actionCreators } from "../state/index";

function Personalinfo() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(actionCreators.slider(10));
    };
  }, []);

  return (
    <div className="form">
      <form action="post" className="personal-info-form-fields">
        <h1>Personal Information</h1>
        <input type="text" name="f-name" id="f-name" placeholder="First Name" />
        <input type="text" name="l-name" id="l-name" placeholder="Last Name" />
        <input type="text" name="email" id="email" placeholder="Email Id" />
        <input
          type="text"
          name="univ-name"
          id="univ-name"
          placeholder="Name of University"
        />
        <input
          type="text"
          name="branch"
          id="branch"
          placeholder="Branch ex : CSE or ECE"
        />
        <label htmlFor="male">Male</label>
        <input type="radio" name="gender" id="male" />
        <label htmlFor="female">Female</label>
        <input type="radio" name="gender" id="female" />
        <label htmlFor="photo">Enter your photo</label>
        <input type="file" name="photo" id="photo" />
        <div className="navigation-button">
          <button className="button prev" onClick={(e)=>{
            e.preventDefault();
          }}><NavLink to="/">prev</NavLink></button>
          <button className="button next" onClick={(e)=>{
            e.preventDefault();
          }}><NavLink to="/address">Next</NavLink></button>
        </div>
      </form>
    </div>
  );
}

export default Personalinfo;
