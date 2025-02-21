import React from "react";

const TestimonialSection = () => {
  return (
    <section data-aos="fade-up">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Customer Say!</h3>
          <p className="subheading">
            Our customers adore our products, and we constantly aim to delight
            them.
          </p>
        </div>
        <div
          data-aos="fade-right"
          dir="ltr"
          className="swiper tf-sw-testimonial wow fadeInUp"
          data-wow-delay="0.1s"
          data-preview={2}
          data-tablet="1.3"
          data-mobile={1}
          data-space-lg={30}
          data-space-md={30}
          data-space={15}
          data-pagination={1}
          data-pagination-md={1}
          data-pagination-lg={1}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="testimonial-item hover-img">
                <div className="img-style">
                  <img
                    data-src="/assets/images/misi/MISI 47.jpeg"
                    src="/assets/images/misi/MISI 47.jpeg"
                    alt="img-testimonial"
                  />
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    className="box-icon hover-tooltip center"
                  >
                    <span className="icon icon-eye" />
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>
                <div className="content">
                  <div className="content-top">
                    <div className="list-star-default">
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                    </div>
                    <p className="text-secondary">
                      "Fantastic shop! Great selection, fair prices, and
                      friendly staff. Highly recommended. The quality of the
                      products is exceptional, and the prices are very
                      reasonable!"
                    </p>
                    <div className="box-author">
                      <div className="text-title author">Sybil Sharp</div>
                      <svg
                        className="icon"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_15758_14563)">
                          <path
                            d="M6.875 11.6255L8.75 13.5005L13.125 9.12549"
                            stroke="#3DAB25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 18.5005C14.1421 18.5005 17.5 15.1426 17.5 11.0005C17.5 6.85835 14.1421 3.50049 10 3.50049C5.85786 3.50049 2.5 6.85835 2.5 11.0005C2.5 15.1426 5.85786 18.5005 10 18.5005Z"
                            stroke="#3DAB25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_15758_14563">
                            <rect
                              width={20}
                              height={20}
                              fill="white"
                              transform="translate(0 0.684082)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="box-avt">
                    <div className="avatar avt-60 round">
                      <img
                        src="/assets/images/avatar/user-default.jpg"
                        alt="avt"
                      />
                    </div>
                    <div className="box-price">
                      <p className="text-title text-line-clamp-1">
                        Contrasting sheepskin sweatshirt
                      </p>
                      <div className="text-button price">₦60,000.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item hover-img">
                <div className="img-style">
                  <img
                    data-src="/assets/images/misi/MISI 40.jpg"
                    src="/assets/images/misi/MISI 40.jpg"
                    alt="img-testimonial"
                  />
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    className="box-icon hover-tooltip center"
                  >
                    <span className="icon icon-eye" />
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>
                <div className="content">
                  <div className="content-top">
                    <div className="list-star-default">
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                    </div>
                    <p className="text-secondary">
                      "I absolutely love this shop! The products are
                      high-quality and the customer service is excellent. I
                      always leave with exactly what I need and a smile on my
                      face."
                    </p>
                    <div className="box-author">
                      <div className="text-title author">Mark G.</div>
                      <svg
                        className="icon"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_15758_145)">
                          <path
                            d="M6.875 11.6255L8.75 13.5005L13.125 9.12549"
                            stroke="#3DAB25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 18.5005C14.1421 18.5005 17.5 15.1426 17.5 11.0005C17.5 6.85835 14.1421 3.50049 10 3.50049C5.85786 3.50049 2.5 6.85835 2.5 11.0005C2.5 15.1426 5.85786 18.5005 10 18.5005Z"
                            stroke="#3DAB25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_15758_145">
                            <rect
                              width={20}
                              height={20}
                              fill="white"
                              transform="translate(0 0.684082)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="box-avt">
                    <div className="avatar avt-60 round">
                      <img
                        src="/assets/images/avatar/user-default.jpg"
                        alt="avt"
                      />
                    </div>
                    <div className="box-price">
                      <p className="text-title text-line-clamp-1">
                        Contrasting sheepskin sweatshirt
                      </p>
                      <div className="text-button price">₦60,000.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="testimonial-item hover-img">
                <div className="img-style">
                  <img
                    data-src="/assets/images/misi/MISI 28.jpg"
                    src="/assets/images/misi/MISI 28.jpg"
                    alt="img-testimonial"
                  />
                  <a
                    href="#"
                    data-bs-toggle="modal"
                    className="box-icon hover-tooltip center"
                  >
                    <span className="icon icon-eye" />
                    <span className="tooltip">Quick View</span>
                  </a>
                </div>
                <div className="content">
                  <div className="content-top">
                    <div className="list-star-default">
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                      <i className="icon icon-star" />
                    </div>
                    <p className="text-secondary">
                      "Fantastic shop! Great selection, fair prices, and
                      friendly staff. Highly recommended. The quality of the
                      products is exceptional, and the prices are very
                      reasonable!"
                    </p>
                    <div className="box-author">
                      <div className="text-title author">Sybil Sharp</div>
                      <svg
                        className="icon"
                        width={20}
                        height={21}
                        viewBox="0 0 20 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_15758_14)">
                          <path
                            d="M6.875 11.6255L8.75 13.5005L13.125 9.12549"
                            stroke="#3DAB25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M10 18.5005C14.1421 18.5005 17.5 15.1426 17.5 11.0005C17.5 6.85835 14.1421 3.50049 10 3.50049C5.85786 3.50049 2.5 6.85835 2.5 11.0005C2.5 15.1426 5.85786 18.5005 10 18.5005Z"
                            stroke="#3DAB25"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_15758_14">
                            <rect
                              width={20}
                              height={20}
                              fill="white"
                              transform="translate(0 0.684082)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="box-avt">
                    <div className="avatar avt-60 round">
                      <img
                        src="/assets/images/avatar/user-default.jpg"
                        alt="avt"
                      />
                    </div>
                    <div className="box-price">
                      <p className="text-title text-line-clamp-1">
                        Contrasting sheepskin sweatshirt
                      </p>
                      <div className="text-button price">₦60,000.00</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sw-pagination-testimonial sw-dots type-circle d-flex justify-content-center" />
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
