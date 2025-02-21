import React from "react";

const InstagramGallery = () => {
  return (
    <section className="flat-spacing" data-aos="fade-up">
      <div className="container">
        <div className="heading-section text-center wow fadeInUp">
          <h3 className="heading">Shop Instagram</h3>
          <p className="subheading text-secondary">
            Elevate your wardrobe with fresh finds today!
          </p>
        </div>
        <div
          data-aos="fade-left"
          dir="ltr"
          className="swiper tf-sw-shop-gallery"
          data-preview={5}
          data-tablet={3}
          data-mobile={2}
          data-space-lg={10}
          data-space-md={10}
          data-space={8}
          data-pagination={2}
          data-pagination-md={3}
          data-pagination-lg={1}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="gallery-item hover-overlay hover-img wow fadeInUp"
                data-wow-delay=".1s"
              >
                <div className="img-style">
                  <img
                    className="lazyload img-hover"
                    data-src="/assets/images/misi/EVOLVE1.jpg"
                    src="/assets/images/misi/EVOLVE1.jpg"
                    alt="image-gallery"
                  />
                </div>
                <a href="#" className="box-icon hover-tooltip">
                  <span className="icon icon-eye" />{" "}
                  <span className="tooltip">View Product</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="gallery-item hover-overlay hover-img wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="img-style">
                  <img
                    className="lazyload img-hover"
                    data-src="/assets/images/misi/EVOLVE2.jpg"
                    src="/assets/images/misi/EVOLVE2.jpg"
                    alt="image-gallery"
                  />
                </div>
                <a href="#" className="box-icon hover-tooltip">
                  <span className="icon icon-eye" />{" "}
                  <span className="tooltip">View Product</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="gallery-item hover-overlay hover-img wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="img-style">
                  <img
                    className="lazyload img-hover"
                    data-src="/assets/images/misi/MISI 6.jpg"
                    src="/assets/images/misi/MISI 6.jpg"
                    alt="image-gallery"
                  />
                </div>
                <a href="#" className="box-icon hover-tooltip">
                  <span className="icon icon-eye" />{" "}
                  <span className="tooltip">View Product</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="gallery-item hover-overlay hover-img wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="img-style">
                  <img
                    className="lazyload img-hover"
                    data-src="/assets/images/misi/MISI 14.jpg"
                    src="/assets/images/misi/MISI 14.jpg"
                    alt="image-gallery"
                  />
                </div>
                <a href="#" className="box-icon hover-tooltip">
                  <span className="icon icon-eye" />{" "}
                  <span className="tooltip">View Product</span>
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="gallery-item hover-overlay hover-img wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="img-style">
                  <img
                    className="lazyload img-hover"
                    data-src="/assets/images/misi/MISI 20.jpg"
                    src="/assets/images/misi/MISI 20.jpg"
                    alt="image-gallery"
                  />
                </div>
                <a href="#" className="box-icon hover-tooltip">
                  <span className="icon icon-eye" />{" "}
                  <span className="tooltip">View Product</span>
                </a>
              </div>
            </div>
          </div>
          <div className="sw-pagination-gallery sw-dots type-circle justify-content-center" />
        </div>
      </div>
    </section>
  );
};

export default InstagramGallery;
