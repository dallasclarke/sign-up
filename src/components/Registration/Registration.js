import React from "react";
import "./Registration.css";

function Registration(props) {
  return (
    <div>
      <form className="reg-form">
        <div className="email-area">
          <label className="email-text">Email</label>
          <br />
          <input type="email" id="email" placeholder="Please enter email" />
        </div>
        <div className="password-area">
          <label className="pass-text">Password</label>
          <br />
          <input type="password" id="password" placeholder="Enter Password" />
        </div>
        <button className="submit">Submit</button>
      </form>
    </div>
  );
}

export default Registration;
