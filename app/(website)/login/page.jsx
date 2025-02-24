"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useAuth } from "@/stores/useAuth"; // Adjust the path as necessary
import { Alegreya } from "next/font/google";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const { setUser, setToken } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    // Basic client-side validation
    if (!email || !password) {
      setErrorMsg("Please fill in all fields.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/login?userType=customer`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed. Please try again.");
      }

      if (data.status === "success") {
        // Save user and token to the auth store
        setUser(data.data.user);
        setToken(data.data.token);

        // Redirect to the desired page
        const urlParams = new URLSearchParams(window.location.search);
        const redirectTo = urlParams.get("redirect") || "/";
        window.location.href = redirectTo;
      } else {
        setErrorMsg(data.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setErrorMsg(error.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="page-title">
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Login</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href="/">
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Login</li>
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
                <h4>Login</h4>
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
                  <fieldset>
                    <input
                      type="email"
                      placeholder="Username or email address*"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-required="true"
                      required
                      disabled={loading}
                    />
                  </fieldset>
                  <fieldset className="position-relative password-item">
                    <input
                      type="password"
                      placeholder="Password*"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-required="true"
                      required
                      disabled={loading}
                    />
                    <span className="toggle-password unshow">
                      <i className="icon-eye-hide-line" />
                    </span>
                  </fieldset>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="tf-cart-checkbox">
                      <div className="tf-checkbox-wrapp">
                        <input
                          type="checkbox"
                          id="login-form_agree"
                          name="agree_checkbox"
                          disabled={loading}
                        />
                        <div>
                          <i className="icon-check" />
                        </div>
                      </div>
                      <label htmlFor="login-form_agree">Remember me</label>
                    </div>
                    <a
                      href="forget-password.html"
                      className="font-2 text-button forget-password link"
                    >
                      Forgot Your Password?
                    </a>
                  </div>
                </div>
                <div className="button-submit">
                  <button
                    className="tf-btn btn-fill"
                    type="submit"
                    disabled={loading}
                  >
                    <span className="text text-button">
                      {loading ? "Logging in..." : "Login"}
                    </span>
                  </button>
                </div>
              </form>
            </div>
            <div className="right">
              <h4 className="mb_8">New Customer</h4>
              <p className="text-secondary">
                Be part of our growing family of new customers! Join us today
                and unlock a world of exclusive benefits, offers, and
                personalized experiences.
              </p>
              <Link href="/register" className="tf-btn btn-fill">
                <span className="text text-button">Register</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
