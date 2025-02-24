"use client";
import Link from "next/link";
import React, { useState } from "react";
import { z } from "zod";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [errors, setErrors] = useState({});

  const schema = z
    .object({
      email: z.string().email("Invalid email address"),
      password: z.string().min(6, "Password must be at least 6 characters"),
      confirmPassword: z
        .string()
        .min(6, "Password must be at least 6 characters"),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: "Passwords don't match",
      path: ["confirmPassword"],
    });

  const validate = () => {
    try {
      schema.parse({ email, password, confirmPassword });
      setErrors({});
      return true;
    } catch (e) {
      const fieldErrors = e.errors.reduce((acc, error) => {
        acc[error.path[0]] = error.message;
        return acc;
      }, {});
      setErrors(fieldErrors);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        console.log(data);
        // Handle successful registration
      } else {
        setErrorMsg(data.message);
      }
    } catch (error) {
      console.error("Error registering:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="page-title">
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Create An Account</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href="/">
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="flat-spacing">
        <div className="container">
          <div className="login-wrap">
            <div className="left">
              <div className="heading">
                <h4>Register</h4>
              </div>
              <form
                onSubmit={handleSubmit}
                className="form-login form-has-password"
              >
                {errorMsg && (
                  <div className="alert alert-danger" role="alert">
                    {errorMsg}
                  </div>
                )}
                <div className="wrap">
                  <fieldset className="">
                    <input
                      className=""
                      type="email"
                      placeholder="Username or email address*"
                      name="email"
                      tabIndex={2}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-required="true"
                      required=""
                    />
                    {errors.email && (
                      <span className="error">{errors.email}</span>
                    )}
                  </fieldset>
                  <fieldset className="position-relative password-item">
                    <input
                      className="input-password"
                      type="password"
                      placeholder="Password*"
                      name="password"
                      tabIndex={2}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-required="true"
                      required=""
                    />
                    {errors.password && (
                      <span className="error">{errors.password}</span>
                    )}
                    <span className="toggle-password unshow">
                      <i className="icon-eye-hide-line" />
                    </span>
                  </fieldset>
                  <fieldset className="position-relative password-item">
                    <input
                      className="input-password"
                      type="password"
                      placeholder="Confirm Password*"
                      name="confirmPassword"
                      tabIndex={2}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      aria-required="true"
                      required=""
                    />
                    {errors.confirmPassword && (
                      <span className="error">{errors.confirmPassword}</span>
                    )}
                    <span className="toggle-password unshow">
                      <i className="icon-eye-hide-line" />
                    </span>
                  </fieldset>
                  <div className="d-flex align-items-center">
                    <div className="tf-cart-checkbox">
                      <div className="tf-checkbox-wrapp">
                        <input
                          defaultChecked=""
                          className=""
                          type="checkbox"
                          id="login-form_agree"
                          name="agree_checkbox"
                        />
                        <div>
                          <i className="icon-check" />
                        </div>
                      </div>
                      <label
                        className="text-secondary-2"
                        htmlFor="login-form_agree"
                      >
                        I agree to the&nbsp;
                      </label>
                    </div>
                    <a href="term-of-use.html" title="Terms of Service">
                      {" "}
                      Terms of User
                    </a>
                  </div>
                </div>
                <div className="button-submit">
                  <button className="tf-btn btn-fill" type="submit">
                    <span className="text text-button">Register</span>
                  </button>
                </div>
              </form>
            </div>
            <div className="right">
              <h4 className="mb_8">Already have an account?</h4>
              <p className="text-secondary">
                Welcome back. Sign in to access your personalized experience,
                saved preferences, and more. We're thrilled to have you with us
                again!
              </p>
              <Link href="/login" className="tf-btn btn-fill">
                <span className="text text-button">Login</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
