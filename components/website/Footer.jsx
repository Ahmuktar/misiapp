import React from "react";
import Newsletter from "./Newsletter";

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
                  <div className="footer-address text-white">
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
                    Newsletter
                  </div>
                  <Newsletter />
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
                  <div className="text-center">
                    <p className="text-caption-1">
                      ©2024 Misi Luxury Nigeria. All Rights Reserved.
                    </p>
                  </div>
                  {/* <div className="tf-payment">
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
                  </div> */}
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
