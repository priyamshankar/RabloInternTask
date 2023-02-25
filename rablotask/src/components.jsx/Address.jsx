import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../state/index";
import { NavLink } from "react-router-dom";

function Address() {
  const dispatch = useDispatch();
  useEffect(() => {
    return () => {
      dispatch(actionCreators.slider(33));
    };
  }, []);
  return (
    <div className="form">
      <form action="post" className="personal-info-form-fields">
        <h1>Address Information </h1>
        <input type="text" name="Address" id="Address" placeholder="Address" />
        <input
          type="text"
          name="addressline2"
          id="addressline2"
          placeholder="Address Line 2"
        />
        <input type="text" name="city" id="city" placeholder="City" />
        <input type="text" name="State" id="State" placeholder="State" />
        <input
          type="text"
          name="pincode"
          id="pincode"
          placeholder="Enter the Pincode"
        />
        <div className="radial">
          <label htmlFor="ut">Union Territory</label>
          <input type="radio" name="ut" id="ut" />
        </div>

        <div className="radial">
          <label htmlFor="notut">Normal State</label>
          <input type="radio" name="ut" id="notut" />
        </div>
        <label htmlFor="photo">Enter your photo</label>
        <input type="file" name="photo" id="photo" />
        <div className="navigation-button">
          <button
            className="button prev"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <NavLink to="/personalinfo">prev</NavLink>
          </button>
          <button
            className="button next"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            <NavLink to="/account">Next</NavLink>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Address;
