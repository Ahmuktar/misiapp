import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="footer bg-main">
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="footer-infor">
                  <div className="footer-logo">
                    <a href="index.html">
                      <img src="/assets/images/logo/misilogo.png" alt="" />
                    </a>
                  </div>
                  <div className="footer-address">
                    <p>549 Oak St.Crystal Lake, IL 60014</p>
                    <a
                      href="contact.html"
                      className="tf-btn-default style-white fw-6"
                    >
                      GET DIRECTION
                      <i className="icon-arrowUpRight" />
                    </a>
                  </div>
                  <ul className="footer-info">
                    <li>
                      <i className="icon-mail" />
                      <p>sales@misi.ng</p>
                    </li>
                    <li>
                      <i className="icon-phone" />
                      <p>+234 209 2921 033</p>
                    </li>
                  </ul>
                  <ul className="tf-social-icon style-white">
                    <li>
                      <a href="#" className="social-facebook">
                        <i className="icon icon-fb" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-twiter">
                        <i className="icon icon-x" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-instagram">
                        <i className="icon icon-instagram" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-tiktok">
                        <i className="icon icon-tiktok" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-amazon">
                        <i className="icon icon-amazon" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="social-pinterest">
                        <i className="icon icon-pinterest" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-menu">
                  <div className="footer-col-block">
                    <div className="footer-heading text-button footer-heading-mobile">
                      Infomation
                    </div>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        <li className="text-caption-1">
                          <a href="about-us.html" className="footer-menu_item">
                            About Us
                          </a>
                        </li>
                        <li className="text-caption-1">
                          <a href="#" className="footer-menu_item">
                            Our Stories
                          </a>
                        </li>
                        <li className="text-caption-1">
                          <a href="#" className="footer-menu_item">
                            Size Guide
                          </a>
                        </li>
                        <li className="text-caption-1">
                          <a href="contact.html" className="footer-menu_item">
                            Contact us
                          </a>
                        </li>
                        <li className="text-caption-1">
                          <a href="#" className="footer-menu_item">
                            Career
                          </a>
                        </li>
                        <li className="text-caption-1">
                          <a
                            href="my-account.html"
                            className="footer-menu_item"
                          >
                            My Account
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="footer-col-block">
                    <div className="footer-heading text-button footer-heading-mobile">
                      Customer Services
                    </div>
                    <div className="tf-collapse-content">
                      <ul className="footer-menu-list">
                        <li className="text-caption-1">
                          <a href="#" className="footer-menu_item">
                            Shipping
                          </a>
                        </li>
                        <li className="text-caption-1">
                          <a href="#" className="footer-menu_item">
                            Return &amp; Refund
                          </a>
                        </li>
                        <li className="text-caption-1">
                          <a href="#" className="footer-menu_item">
                            Privacy Policy
                          </a>
                        </li>
                        <li className="text-caption-1">
                          <a
                            href="term-of-use.html"
                            className="footer-menu_item"
                          >
                            Terms &amp; Conditions
                          </a>
                        </li>
                        <li className="text-caption-1">
                          <a href="FAQs.html" className="footer-menu_item">
                            Orders FAQs
                          </a>
                        </li>
                        <li className="text-caption-1">
                          <a href="wish-list.html" className="footer-menu_item">
                            My Wishlist
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="footer-col-block">
                  <div className="footer-heading text-button footer-heading-mobile">
                    Newletter
                  </div>
                  <div className="tf-collapse-content">
                    <div className="footer-newsletter">
                      <p className="text-caption-1">
                        Sign up for our newsletter and get 10% off your first
                        purchase
                      </p>
                      <div className="sib-form">
                        <div
                          id="sib-form-container"
                          className="sib-form-container"
                        >
                          <div
                            id="error-message"
                            className="sib-form-message-panel"
                          >
                            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                              <span className="sib-form-message-panel__inner-text">
                                Your subscription could not be saved. Please try
                                again.
                              </span>
                            </div>
                          </div>
                          <div
                            id="success-message"
                            className="sib-form-message-panel"
                          >
                            <div className="sib-form-message-panel__text sib-form-message-panel__text--center">
                              <span className="sib-form-message-panel__inner-text">
                                Your subscription has been successful.
                              </span>
                            </div>
                          </div>
                          <div
                            id="sib-container"
                            className="sib-container--large sib-container--vertical"
                          >
                            <form
                              id="sib-form"
                              method="POST"
                              className="form-newsletter style-black"
                              action="https://3c02c1a1.sibforms.com/serve/MUIFAOAhSCDRnPhdPWLTpLBkaFR0CvSbJ_okYrjCbXQRLkZZU67Hn2jdn18hTWJuGupI4VUfB4deuJIyP5yRoHWVb9pIrENAMcal9Jtz8q_qN4dpHNMIG454DwSVNVmnLXuePoOCvDqN_Vvs0ga_kzg7ouD63HjCaukRz3LGCQsfnQJBN4-KS2D3DVitqvFsDHSqevjjqLk2xFO4"
                              data-type="subscription"
                              noValidate={true}
                            >
                              <div>
                                <div className="sib-form-block">
                                  <p />
                                </div>
                              </div>
                              <div>
                                <div className="sib-form-block">
                                  <div className="sib-text-form-block">
                                    <p />
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="sib-input sib-form-block">
                                  <div className="form__entry entry_block">
                                    <div className="form__label-row ">
                                      <label
                                        className="entry__label"
                                        htmlFor="EMAIL"
                                      ></label>
                                      <div className="entry__field">
                                        <input
                                          className="input radius-60"
                                          type="text"
                                          id="EMAIL"
                                          name="EMAIL"
                                          autoComplete="off"
                                          placeholder="Enter your e-mail..."
                                          data-required="true"
                                          required=""
                                        />
                                      </div>
                                    </div>
                                    <label className="entry__error entry__error--primary" />
                                    <label className="entry__specification"></label>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="sib-optin sib-form-block">
                                  <div className="form__entry entry_mcq">
                                    <div className="form__label-row ">
                                      <div className="entry__choice">
                                        <label>
                                          <input
                                            type="checkbox"
                                            className="input_replaced"
                                            defaultValue={1}
                                            id="OPT_IN"
                                            name="OPT_IN"
                                          />
                                          <span className="checkbox checkbox_tick_positive" />
                                          <span>
                                            <p />
                                          </span>
                                        </label>
                                      </div>
                                    </div>
                                    <label className="entry__error entry__error--primary"></label>
                                    <label className="entry__specification"></label>
                                  </div>
                                </div>
                              </div>
                              <div>
                                <div className="sib-form-block">
                                  <button
                                    className="sib-form-block__button sib-form-block__button-with-loader subscribe-button radius-60"
                                    form="sib-form"
                                    type="submit"
                                  >
                                    <svg
                                      className="icon clickable__icon progress-indicator__icon sib-hide-loader-icon"
                                      viewBox="0 0 512 512"
                                    >
                                      <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z" />
                                    </svg>
                                    <i className="icon icon-arrowUpRight" />
                                  </button>
                                </div>
                              </div>
                              <input
                                type="text"
                                name="email_address_check"
                                defaultValue=""
                                className="input--hidden"
                                aria-hidden="true"
                              />
                              <input
                                type="hidden"
                                name="locale"
                                defaultValue="en"
                              />
                            </form>
                          </div>
                        </div>
                      </div>
                      <div className="tf-cart-checkbox">
                        <div className="tf-checkbox-wrapp">
                          <input
                            className=""
                            type="checkbox"
                            id="footer-Form_agree"
                            name="agree_checkbox"
                          />
                          <div>
                            <i className="icon-check" />
                          </div>
                        </div>
                        <label
                          className="text-caption-1"
                          htmlFor="footer-Form_agree"
                        >
                          By clicking subcribe, you agree to the{" "}
                          <a className="fw-6 link" href="term-of-use.html">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a className="fw-6 link" href="#">
                            Privacy Policy
                          </a>
                          .
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap">
                  <div className="left">
                    <p className="text-caption-1">
                      ©2024 Misi Luxury Nigeria. All Rights Reserved.
                    </p>
                    {/* <div className="tf-cur justify-content-end">
                      <div className="tf-currencies">
                        <div className="dropdown bootstrap-select image-select center style-default type-currencies color-secondary-2">
                          <select className="image-select center style-default type-currencies color-secondary-2">
                            <option
                              defaultValue
                              data-thumbnail="/assets/images/country/us.svg"
                              data-content='<img src="/assets/images/country/us.svg" /> USD'
                            >
                              USD
                            </option>
                            <option
                              data-thumbnail="/assets/images/country/vn.svg"
                              data-content='<img src="/assets/images/country/vn.svg" /> VND'
                            >
                              VND
                            </option>
                            <option
                              data-thumbnail="/assets/images/country/fr.svg"
                              data-content='<img src="/assets/images/country/fr.svg" /> EUR'
                            >
                              EUR
                            </option>
                          </select>
                          <button
                            type="button"
                            tabIndex={-1}
                            className="btn dropdown-toggle btn-light"
                            data-bs-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-1"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="USD"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  <img src="/assets/images/country/us.svg" />{" "}
                                  USD
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-1"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="tf-languages">
                        <div className="dropdown bootstrap-select image-select center style-default type-languages color-secondary-2">
                          <select className="image-select center style-default type-languages color-secondary-2">
                            <option>English</option>
                            <option>Vietnam</option>
                          </select>
                          <button
                            type="button"
                            tabIndex={-1}
                            className="btn dropdown-toggle btn-light"
                            data-bs-toggle="dropdown"
                            role="combobox"
                            aria-owns="bs-select-2"
                            aria-haspopup="listbox"
                            aria-expanded="false"
                            title="English"
                          >
                            <div className="filter-option">
                              <div className="filter-option-inner">
                                <div className="filter-option-inner-inner">
                                  English
                                </div>
                              </div>{" "}
                            </div>
                          </button>
                          <div className="dropdown-menu ">
                            <div
                              className="inner show"
                              role="listbox"
                              id="bs-select-2"
                              tabIndex={-1}
                            >
                              <ul
                                className="dropdown-menu inner show"
                                role="presentation"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
                  </div>
                  <div className="tf-payment">
                    <p className="text-caption-1">Payment:</p>
                    <ul>
                      <li>
                        <img src="/assets/images/payment/img-1.png" alt="" />
                      </li>
                      <li>
                        <img src="/assets/images/payment/img-2.png" alt="" />
                      </li>
                      <li>
                        <img src="/assets/images/payment/img-3.png" alt="" />
                      </li>
                      <li>
                        <img src="/assets/images/payment/img-4.png" alt="" />
                      </li>
                      <li>
                        <img src="/assets/images/payment/img-5.png" alt="" />
                      </li>
                      <li>
                        <img src="/assets/images/payment/img-6.png" alt="" />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
