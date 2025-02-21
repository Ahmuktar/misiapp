import Image from "next/image";
import React from "react";

const StoreList = () => {
  return (
    <section className="flat-spacing">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="flat-animate-tab">
              <ul className="tf-store-list style-row" role="tablist">
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#New-York"
                    className="tf-store-item active"
                    data-bs-toggle="tab"
                    aria-selected="true"
                    role="tab"
                  >
                    <h6 className="tf-store-title">New York Office</h6>
                    <div className="tf-store-info">
                      <p>Phone: +1 666 234 8888</p>
                      <p>Email: themesflat@gmail.com</p>
                      <p>Address: 432 Park Avenue, New York, New York</p>
                    </div>
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#Houston"
                    className="tf-store-item"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    role="tab"
                    tabIndex={-1}
                  >
                    <h6 className="tf-store-title">Houston Office</h6>
                    <div className="tf-store-info">
                      <p>Phone: +1 666 234 8888</p>
                      <p>Email: themesflat@gmail.com</p>
                      <p>Address: 432 Park Avenue, New York, New York</p>
                    </div>
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#San-Francisco"
                    className="tf-store-item"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    role="tab"
                    tabIndex={-1}
                  >
                    <h6 className="tf-store-title">San Francisco Office</h6>
                    <div className="tf-store-info">
                      <p>Phone: +1 415 987 6543</p>
                      <p>Email: themesflat@gmail.com</p>
                      <p>
                        Address: 321 Market Street, San Francisco, California
                      </p>
                    </div>
                  </a>
                </li>
                <li className="nav-tab-item" role="presentation">
                  <a
                    href="#Miami"
                    className="tf-store-item"
                    data-bs-toggle="tab"
                    aria-selected="false"
                    role="tab"
                    tabIndex={-1}
                  >
                    <h6 className="tf-store-title">Miami Office</h6>
                    <div className="tf-store-info">
                      <p>Phone: +1 305 543 2109</p>
                      <p>Email: themesflat@gmail.com</p>
                      <p>Address: 654 Ocean Drive, Miami, Florida</p>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="tab-content">
                <div
                  className="tab-pane active show"
                  id="New-York"
                  role="tabpanel"
                >
                  <div className="wg-card-store align-items-center tf-grid-layout md-col-2 gap-0">
                    <div className="">
                      <img
                        className="lazyloaded w-full h-96 object-cover object-top rounded-md"
                        data-src="/assets/images/misi/MISI 10.jpg"
                        src="/assets/images/misi/MISI 10.jpg"
                        alt="store-img"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="card-store-info">
                      <h3 className="card-store-heading">New York Office</h3>
                      <ul>
                        <li>
                          <h6 className="mb_8">Address:</h6>
                          <p className="text-secondary">
                            2163 Phillips Gap Rd West Jefferson, North Carolina
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Opentime:</h6>
                          <p className="text-secondary">
                            Monay - Friday: <br />
                            <span className="text-title text-main">
                              08:00 - 20:00
                            </span>{" "}
                            <br />
                            Saturday - Sunday: <br />
                            <span className="text-title text-main">
                              10:00 - 18:00
                            </span>
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Infomation:</h6>
                          <p className="text-secondary">
                            +1 666 234 8888 <br />
                            themesflat@gmail.com
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Our social media:</h6>
                          <ul className="tf-social-icon style-2">
                            <li>
                              <a href="#" className="social-facebook">
                                <i className="icon icon-fb" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="social-instagram">
                                <i className="icon icon-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="social-youtube">
                                <i className="icon icon-youtube" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="Houston" role="tabpanel">
                  <div className="wg-card-store align-items-center tf-grid-layout md-col-2 gap-0">
                    <div className="">
                      <img
                        className="lazyloaded w-full h-96 object-cover object-top rounded-md"
                        data-src="/assets/images/misi/MISI 17.jpg"
                        src="/assets/images/misi/MISI 17.jpg"
                        alt="store-img"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="card-store-info">
                      <h3 className="card-store-heading">Houston Office</h3>
                      <ul>
                        <li>
                          <h6 className="mb_8">Address:</h6>
                          <p className="text-secondary">
                            789 Main Street, Houston, Texas
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Opentime:</h6>
                          <p className="text-secondary">
                            Monay - Friday: <br />
                            <span className="text-title text-main">
                              08:00 - 20:00
                            </span>{" "}
                            <br />
                            Saturday - Sunday: <br />
                            <span className="text-title text-main">
                              10:00 - 18:00
                            </span>
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Infomation:</h6>
                          <p className="text-secondary">
                            +1 713 432 8765 <br />
                            themesflat@gmail.com
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Our social media:</h6>
                          <ul className="tf-social-icon style-2">
                            <li>
                              <a href="#" className="social-facebook">
                                <i className="icon icon-fb" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="social-instagram">
                                <i className="icon icon-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="social-youtube">
                                <i className="icon icon-youtube" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="San-Francisco" role="tabpanel">
                  <div className="wg-card-store align-items-center tf-grid-layout md-col-2 gap-0">
                    <div className="">
                      <img
                        className="lazyloaded w-full h-96 object-cover object-top rounded-md"
                        data-src="/assets/images/misi/MISI 20.jpg"
                        src="/assets/images/misi/MISI 20.jpg"
                        alt="store-img"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="card-store-info">
                      <h3 className="card-store-heading">
                        San Francisco Office
                      </h3>
                      <ul>
                        <li>
                          <h6 className="mb_8">Address:</h6>
                          <p className="text-secondary">
                            321 Market Street, San Francisco, California
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Opentime:</h6>
                          <p className="text-secondary">
                            Monay - Friday: <br />
                            <span className="text-title text-main">
                              08:00 - 20:00
                            </span>{" "}
                            <br />
                            Saturday - Sunday: <br />
                            <span className="text-title text-main">
                              10:00 - 18:00
                            </span>
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Infomation:</h6>
                          <p className="text-secondary">
                            +1 415 987 6543 <br />
                            themesflat@gmail.com
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Our social media:</h6>
                          <ul className="tf-social-icon style-2">
                            <li>
                              <a href="#" className="social-facebook">
                                <i className="icon icon-fb" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="social-instagram">
                                <i className="icon icon-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="social-youtube">
                                <i className="icon icon-youtube" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane" id="Miami" role="tabpanel">
                  <div className="wg-card-store align-items-center tf-grid-layout md-col-2 gap-0">
                    <div className="">
                      <img
                        className="lazyloaded w-full h-96 object-cover object-top rounded-md"
                        data-src="/assets/images/misi/MISI 27.jpg"
                        src="/assets/images/misi/MISI 27.jpg"
                        alt="store-img"
                        width={100}
                        height={100}
                      />
                    </div>
                    <div className="card-store-info">
                      <h3 className="card-store-heading">Miami Office</h3>
                      <ul>
                        <li>
                          <h6 className="mb_8">Address:</h6>
                          <p className="text-secondary">
                            654 Ocean Drive, Miami, Florida
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Opentime:</h6>
                          <p className="text-secondary">
                            Monay - Friday: <br />
                            <span className="text-title text-main">
                              08:00 - 20:00
                            </span>{" "}
                            <br />
                            Saturday - Sunday: <br />
                            <span className="text-title text-main">
                              10:00 - 18:00
                            </span>
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Infomation:</h6>
                          <p className="text-secondary">
                            +1 305 543 2109 <br />
                            themesflat@gmail.com
                          </p>
                        </li>
                        <li>
                          <h6 className="mb_8">Our social media:</h6>
                          <ul className="tf-social-icon style-2">
                            <li>
                              <a href="#" className="social-facebook">
                                <i className="icon icon-fb" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="social-instagram">
                                <i className="icon icon-instagram" />
                              </a>
                            </li>
                            <li>
                              <a href="#" className="social-youtube">
                                <i className="icon icon-youtube" />
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoreList;
