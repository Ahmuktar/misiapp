"use client";
import { useAuth } from "@/stores/useAuth";
import React, { useState } from "react";

const UserAccount = () => {
  const { user } = useAuth();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="account-details">
      <form action="#" className="form-account-details form-has-password">
        <div className="account-info">
          <h5 className="title">Information</h5>
          <div className="cols mb_20">
            <fieldset className="">
              <input
                className=""
                type="text"
                placeholder="Full Name*"
                name="text"
                tabIndex={2}
                defaultValue={user?.name}
                aria-required="true"
                required=""
              />
            </fieldset>
          </div>
          <div className="cols mb_20">
            <fieldset className="">
              <input
                className=""
                type="email"
                placeholder="Email address*"
                name="email"
                tabIndex={2}
                defaultValue={user?.email}
                aria-required="true"
                required=""
              />
            </fieldset>
            <fieldset className="">
              <input
                className=""
                type="text"
                placeholder="Phone*"
                name="text"
                tabIndex={2}
                defaultValue={user?.phone}
              />
            </fieldset>
          </div>
        </div>
        <div className="account-password">
          <h5 className="title">Change Password</h5>
          <fieldset className="position-relative password-item mb_20">
            <input
              className="input-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password*"
              name="password"
              tabIndex={2}
              defaultValue=""
              aria-required="true"
              required=""
            />
            <span
              className={`toggle-password
                ${!showPassword && "unshow"}
              `}
              onClick={togglePasswordVisibility}
            >
              <i className="icon-eye-hide-line" />
            </span>
          </fieldset>
          <fieldset className="position-relative password-item mb_20">
            <input
              className="input-password"
              type={showPassword ? "text" : "password"}
              placeholder="New Password*"
              name="password"
              tabIndex={2}
              defaultValue=""
              aria-required="true"
              required=""
            />
            <span
              className={`toggle-password
                ${!showPassword && "unshow"}
              `}
              onClick={togglePasswordVisibility}
            >
              <i className="icon-eye-hide-line" />
            </span>
          </fieldset>
          <fieldset className="position-relative password-item">
            <input
              className="input-password"
              type={showPassword ? "text" : "password"}
              placeholder="Confirm Password*"
              name="password"
              tabIndex={2}
              defaultValue=""
              aria-required="true"
              required=""
            />
            <span
              className={`toggle-password
                ${!showPassword && "unshow"}
              `}
              onClick={togglePasswordVisibility}
            >
              <i className="icon-eye-hide-line" />
            </span>
          </fieldset>
        </div>
        <div className="button-submit">
          <button className="tf-btn btn-fill" type="submit">
            <span className="text text-button">Update Account</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserAccount;
