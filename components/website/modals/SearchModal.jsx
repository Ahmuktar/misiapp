import React from "react";

const SearchModal = () => {
  return (
    <div className="modal fade modal-search" id="search">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="d-flex justify-content-between align-items-center">
            <h5>Search</h5>
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <form className="form-search">
            <fieldset className="text">
              <input
                type="text"
                placeholder="Searching..."
                className=""
                name="text"
                tabIndex={0}
                defaultValue=""
                aria-required="true"
                required=""
              />
            </fieldset>
            <button className="" type="submit">
              <svg
                className="icon"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z"
                  stroke="#181818"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M21.35 21.0004L17 16.6504"
                  stroke="#181818"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </form>
          <div>
            <h5 className="mb_16">Feature keywords Today</h5>
            <ul className="list-tags">
              <li>
                <a href="#" className="radius-60 link">
                  Dresses
                </a>
              </li>
              <li>
                <a href="#" className="radius-60 link">
                  Dresses women
                </a>
              </li>
              <li>
                <a href="#" className="radius-60 link">
                  Dresses midi
                </a>
              </li>
              <li>
                <a href="#" className="radius-60 link">
                  Dress summer
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="mb_16">Recently viewed products</h6>
            <div
              className="tf-grid-layout tf-col-2 lg-col-3 xl-col-4 loadmore-item"
              data-display={4}
              data-count={4}
            >
              <div className="fl-item card-product card-product-size">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/womens/women-8.jpg"
                      src="/assets/images/products/womens/women-8.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/womens/women-9.jpg"
                      src="/assets/images/products/womens/women-9.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="variant-wrap size-list">
                    <ul className="variant-box">
                      <li className="size-item">S</li>
                      <li className="size-item">M</li>
                      <li className="size-item">L</li>
                      <li className="size-item">XL</li>
                    </ul>
                  </div>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Quick Add
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    Ribbed cotton-blend top
                  </a>
                  <span className="price current-price">$39.99</span>
                </div>
              </div>
              <div className="fl-item card-product">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/womens/women-171.jpg"
                      src="/assets/images/products/womens/women-171.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/womens/women-172.jpg"
                      src="/assets/images/products/womens/women-172.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Quick Add
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    Faux-leather trousers
                  </a>
                  <span className="price current-price">$79.99</span>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Orange
                      </span>
                      <span className="swatch-value bg-orange" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-171.jpg"
                        src="/assets/images/products/womens/women-171.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch">
                      <span className="d-none text-capitalize color-filter">
                        Pink
                      </span>
                      <span className="swatch-value bg-dark-pink" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-172.jpg"
                        src="/assets/images/products/womens/women-172.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fl-item card-product card-product-size">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/womens/women-83.jpg"
                      src="/assets/images/products/womens/women-83.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/womens/women-84.jpg"
                      src="/assets/images/products/womens/women-84.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="on-sale-wrap">
                    <span className="on-sale-item">-25%</span>
                  </div>
                  <div className="variant-wrap size-list">
                    <ul className="variant-box">
                      <li className="size-item">S</li>
                      <li className="size-item">M</li>
                      <li className="size-item">L</li>
                      <li className="size-item">XL</li>
                    </ul>
                  </div>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Quick Add
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    Belt wrap dress
                  </a>
                  <div className="price">
                    <span className="old-price">$98.00</span>
                    <span className="current-price">$129.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Green
                      </span>
                      <span className="swatch-value bg-light-green" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-83.jpg"
                        src="/assets/images/products/womens/women-83.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch">
                      <span className="d-none text-capitalize color-filter">
                        Grey
                      </span>
                      <span className="swatch-value bg-grey" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-94.jpg"
                        src="/assets/images/products/womens/women-94.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch line">
                      <span className="d-none text-capitalize color-filter">
                        White
                      </span>
                      <span className="swatch-value bg-white" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-87.jpg"
                        src="/assets/images/products/womens/women-87.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fl-item card-product card-product-size">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/womens/women-102.jpg"
                      src="/assets/images/products/womens/women-102.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/womens/women-103.jpg"
                      src="/assets/images/products/womens/women-103.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="on-sale-wrap">
                    <span className="on-sale-item">-25%</span>
                  </div>
                  <div className="variant-wrap size-list">
                    <ul className="variant-box">
                      <li className="size-item">S</li>
                      <li className="size-item">M</li>
                      <li className="size-item">L</li>
                      <li className="size-item">XL</li>
                    </ul>
                  </div>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Quick Add
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    Double-button trench coat
                  </a>
                  <div className="price">
                    <span className="old-price">$98.00</span>
                    <span className="current-price">$219.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Grey
                      </span>
                      <span className="swatch-value bg-grey-2" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-102.jpg"
                        src="/assets/images/products/womens/women-102.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch">
                      <span className="d-none text-capitalize color-filter">
                        Orange
                      </span>
                      <span className="swatch-value bg-light-orange" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-111.jpg"
                        src="/assets/images/products/womens/women-111.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch line">
                      <span className="d-none text-capitalize color-filter">
                        White
                      </span>
                      <span className="swatch-value bg-white" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-104.jpg"
                        src="/assets/images/products/womens/women-104.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fl-item card-product">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/mens/men-11.jpg"
                      src="/assets/images/products/mens/men-11.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/mens/men-12.jpg"
                      src="/assets/images/products/mens/men-12.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    V-neck cotton T-shirt
                  </a>
                  <span className="price current-price">$59.99</span>
                </div>
              </div>
              <div className="fl-item card-product">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/mens/men-13.jpg"
                      src="/assets/images/products/mens/men-13.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/mens/men-14.jpg"
                      src="/assets/images/products/mens/men-14.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="on-sale-wrap">
                    <span className="on-sale-item">-25%</span>
                  </div>
                  <div className="marquee-product bg-main">
                    <div className="marquee-wrapper">
                      <div className="initial-child-container">
                        <div className="marquee-child-item">
                          <p className="font-2 text-btn-uppercase fw-6 text-white">
                            Hot Sale 25% OFF
                          </p>
                        </div>
                        <div className="marquee-child-item">
                          <span className="icon icon-lightning text-critical" />
                        </div>
                        <div className="marquee-child-item">
                          <p className="font-2 text-btn-uppercase fw-6 text-white">
                            Hot Sale 25% OFF
                          </p>
                        </div>
                        <div className="marquee-child-item">
                          <span className="icon icon-lightning text-critical" />
                        </div>
                        <div className="marquee-child-item">
                          <p className="font-2 text-btn-uppercase fw-6 text-white">
                            Hot Sale 25% OFF
                          </p>
                        </div>
                        <div className="marquee-child-item">
                          <span className="icon icon-lightning text-critical" />
                        </div>
                        <div className="marquee-child-item">
                          <p className="font-2 text-btn-uppercase fw-6 text-white">
                            Hot Sale 25% OFF
                          </p>
                        </div>
                        <div className="marquee-child-item">
                          <span className="icon icon-lightning text-critical" />
                        </div>
                        <div className="marquee-child-item">
                          <p className="font-2 text-btn-uppercase fw-6 text-white">
                            Hot Sale 25% OFF
                          </p>
                        </div>
                        <div className="marquee-child-item">
                          <span className="icon icon-lightning text-critical" />
                        </div>
                      </div>
                    </div>
                    <div className="marquee-wrapper">
                      <div className="initial-child-container">
                        <div className="marquee-child-item">
                          <p className="font-2 text-btn-uppercase fw-6 text-white">
                            Hot Sale 25% OFF
                          </p>
                        </div>
                        <div className="marquee-child-item">
                          <span className="icon icon-lightning text-critical" />
                        </div>
                        <div className="marquee-child-item">
                          <p className="font-2 text-btn-uppercase fw-6 text-white">
                            Hot Sale 25% OFF
                          </p>
                        </div>
                        <div className="marquee-child-item">
                          <span className="icon icon-lightning text-critical" />
                        </div>
                        <div className="marquee-child-item">
                          <p className="font-2 text-btn-uppercase fw-6 text-white">
                            Hot Sale 25% OFF
                          </p>
                        </div>
                        <div className="marquee-child-item">
                          <span className="icon icon-lightning text-critical" />
                        </div>
                        <div className="marquee-child-item">
                          <p className="font-2 text-btn-uppercase fw-6 text-white">
                            Hot Sale 25% OFF
                          </p>
                        </div>
                        <div className="marquee-child-item">
                          <span className="icon icon-lightning text-critical" />
                        </div>
                        <div className="marquee-child-item">
                          <p className="font-2 text-btn-uppercase fw-6 text-white">
                            Hot Sale 25% OFF
                          </p>
                        </div>
                        <div className="marquee-child-item">
                          <span className="icon icon-lightning text-critical" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    Polarized sunglasses
                  </a>
                  <div className="price">
                    <span className="old-price">$98.00</span>{" "}
                    <span className="current-price">$79.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Beige
                      </span>
                      <span className="swatch-value bg-beige" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/mens/men-13.jpg"
                        src="/assets/images/products/mens/men-13.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch">
                      <span className="d-none text-capitalize color-filter">
                        Light Blue
                      </span>
                      <span className="swatch-value bg-light-blue-2" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/mens/men-12.jpg"
                        src="/assets/images/products/mens/men-12.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fl-item card-product card-product-size">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/mens/men-7.jpg"
                      src="/assets/images/products/mens/men-7.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/mens/men-8.jpg"
                      src="/assets/images/products/mens/men-8.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="on-sale-wrap">
                    <span className="on-sale-item">-25%</span>
                  </div>
                  <div className="variant-wrap size-list">
                    <ul className="variant-box">
                      <li className="size-item">S</li>
                      <li className="size-item">M</li>
                      <li className="size-item">L</li>
                      <li className="size-item">XL</li>
                    </ul>
                  </div>
                  <div className="variant-wrap countdown-wrap">
                    <div className="variant-box">
                      <div
                        className="js-countdown"
                        data-timer={1007500}
                        data-labels="D :,H :,M :,S"
                      />
                    </div>
                  </div>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Quick Add
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    Ramie shirt with pockets{" "}
                  </a>
                  <div className="price">
                    <span className="old-price">$98.00</span>{" "}
                    <span className="current-price">$89.99</span>
                  </div>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active line">
                      <span className="d-none text-capitalize color-filter">
                        Green
                      </span>
                      <span className="swatch-value bg-light-green" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/mens/men-7.jpg"
                        src="/assets/images/products/mens/men-7.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch">
                      <span className="d-none text-capitalize color-filter">
                        Grey
                      </span>
                      <span className="swatch-value bg-light-grey" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/mens/men-11.jpg"
                        src="/assets/images/products/mens/men-11.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fl-item card-product">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/mens/men-1.jpg"
                      src="/assets/images/products/mens/men-1.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/mens/men-3.jpg"
                      src="/assets/images/products/mens/men-3.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    Ribbed cotton-blend top
                  </a>
                  <span className="price current-price">$69.99</span>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active line">
                      <span className="d-none text-capitalize color-filter">
                        Light Blue
                      </span>
                      <span className="swatch-value bg-light-blue" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/mens/men-1.jpg"
                        src="/assets/images/products/mens/men-1.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch">
                      <span className="d-none text-capitalize color-filter">
                        Pink
                      </span>
                      <span className="swatch-value bg-light-pink" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/mens/men-13.jpg"
                        src="/assets/images/products/mens/men-13.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch">
                      <span className="d-none text-capitalize color-filter">
                        Grey
                      </span>
                      <span className="swatch-value bg-dark-grey-2" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/mens/men-9.jpg"
                        src="/assets/images/products/mens/men-9.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fl-item card-product card-product-size">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/womens/women-37.jpg"
                      src="/assets/images/products/womens/women-37.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/womens/women-38.jpg"
                      src="/assets/images/products/womens/women-38.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="variant-wrap size-list">
                    <ul className="variant-box">
                      <li className="size-item">XS</li>
                      <li className="size-item">L</li>
                      <li className="size-item">XL</li>
                      <li className="size-item">2XL</li>
                      <li className="size-item">3XL</li>
                    </ul>
                  </div>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Quick Add
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    Buttoned cotton shirt
                  </a>
                  <span className="price current-price">$89.99</span>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Light Blue
                      </span>
                      <span className="swatch-value bg-light-blue" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-37.jpg"
                        src="/assets/images/products/womens/women-37.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch line">
                      <span className="d-none text-capitalize color-filter">
                        White
                      </span>
                      <span className="swatch-value bg-white" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-41.jpg"
                        src="/assets/images/products/womens/women-41.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fl-item card-product card-product-size">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/mens/men-15.jpg"
                      src="/assets/images/products/mens/men-15.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/mens/men-16.jpg"
                      src="/assets/images/products/mens/men-16.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="variant-wrap size-list">
                    <ul className="variant-box">
                      <li className="size-item">XS</li>
                      <li className="size-item">M</li>
                      <li className="size-item">L</li>
                      <li className="size-item">XL</li>
                      <li className="size-item">2XL</li>
                      <li className="size-item">3XL</li>
                    </ul>
                  </div>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Quick Add
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    Chest pocket cotton over shirt
                  </a>
                  <span className="price current-price">$99.25</span>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active">
                      <span className="d-none text-capitalize color-filter">
                        Beige
                      </span>
                      <span className="swatch-value bg-beige" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/mens/men-15.jpg"
                        src="/assets/images/products/mens/men-15.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch">
                      <span className="d-none text-capitalize color-filter">
                        Black
                      </span>
                      <span className="swatch-value bg-main" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/mens/men-18.jpg"
                        src="/assets/images/products/mens/men-18.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch">
                      <span className="d-none text-capitalize color-filter">
                        Dark Blue
                      </span>
                      <span className="swatch-value bg-dark-blue" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/mens/men-17.jpg"
                        src="/assets/images/products/mens/men-17.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fl-item card-product">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/womens/women-167.jpg"
                      src="/assets/images/products/womens/women-167.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/womens/women-168.jpg"
                      src="/assets/images/products/womens/women-168.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#shoppingCart"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Add To cart
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    Cotton shopper bag
                  </a>
                  <span className="price current-price">$199.25</span>
                  <ul className="list-color-product">
                    <li className="list-color-item color-swatch active line">
                      <span className="d-none text-capitalize color-filter">
                        White
                      </span>
                      <span className="swatch-value bg-white" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-167.jpg"
                        src="/assets/images/products/womens/women-167.jpg"
                        alt="image-product"
                      />
                    </li>
                    <li className="list-color-item color-swatch">
                      <span className="d-none text-capitalize color-filter">
                        Beige
                      </span>
                      <span className="swatch-value bg-beige" />
                      <img
                        className="lazyload"
                        data-src="/assets/images/products/womens/women-162.jpg"
                        src="/assets/images/products/womens/women-162.jpg"
                        alt="image-product"
                      />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="fl-item card-product card-product-size">
                <div className="card-product-wrapper">
                  <a href="product-detail.html" className="product-img">
                    <img
                      className="lazyload img-product"
                      data-src="/assets/images/products/mens/men-19.jpg"
                      src="/assets/images/products/mens/men-19.jpg"
                      alt="image-product"
                    />
                    <img
                      className="lazyload img-hover"
                      data-src="/assets/images/products/mens/men-20.jpg"
                      src="/assets/images/products/mens/men-20.jpg"
                      alt="image-product"
                    />
                  </a>
                  <div className="variant-wrap size-list">
                    <ul className="variant-box">
                      <li className="size-item">XS</li>
                      <li className="size-item">M</li>
                      <li className="size-item">L</li>
                      <li className="size-item">XL</li>
                      <li className="size-item">2XL</li>
                      <li className="size-item">3XL</li>
                    </ul>
                  </div>
                  <div className="list-product-btn">
                    <a
                      href="javascript:void(0);"
                      className="box-icon wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip">Wishlist</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon compare btn-icon-action"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip">Compare</span>
                    </a>
                    <a
                      href="#quickView"
                      data-bs-toggle="modal"
                      className="box-icon quickview tf-btn-loading"
                    >
                      <span className="icon icon-eye" />
                      <span className="tooltip">Quick View</span>
                    </a>
                  </div>
                  <div className="list-btn-main">
                    <a
                      href="#quickAdd"
                      data-bs-toggle="modal"
                      className="btn-main-product"
                    >
                      Quick Add
                    </a>
                  </div>
                </div>
                <div className="card-product-info">
                  <a href="product-detail.html" className="title link">
                    Chest pocket cotton over shirt
                  </a>
                  <span className="price current-price">$250.00</span>
                </div>
              </div>
            </div>
          </div>
          {/* Load Item */}
          <div className="wd-load view-more-button text-center">
            <button className="tf-loading btn-loadmore tf-btn btn-reset">
              <span className="text text-btn text-btn-uppercase">
                Load more
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
