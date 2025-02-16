import Image from "next/image";
import Link from "next/link";
import React from "react";

const AboutUsPage = () => {
  return (
    <>
      {/* page-title */}
      <div
        className="page-title"
        style={{
          backgroundImage: "url(/assets/images/misi/MISI 3.jpg)",
        }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">About Our Store</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href="/">
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>About Our Store</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* /page-title */}
      {/* about-us */}
      <section className="flat-spacing about-us-main pb_0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center justify-content-end">
              <div className="wow fadeInLeft">
                <Image
                  src="/assets/images/misi/MISI 18.jpg"
                  alt="image-team"
                  className="lazyload rounded-2xl"
                  data-src="/assets/images/misi/MISI 17.jpg"
                  width={500}
                  height={500}
                />
              </div>
              {/* <div className="about-us-features wow fadeInLeft">
                <img
                  className="lazyload"
                  data-src="/assets/images/misi/MISI 17.jpg"
                  src="/assets/images/misi/MISI 18.jpg"
                  alt="image-team"
                />
              </div> */}
            </div>
            <div className="col-md-6">
              <div className="about-us-content">
                <h3 className="title wow fadeInUp">
                  Misi – Offering rare and beautiful items worldwide
                </h3>
                <div className="widget-tabs style-3">
                  <ul className="widget-menu-tab wow fadeInUp">
                    <li className="item-title active">
                      <span className="inner text-button">Introduction</span>
                    </li>
                    <li className="item-title">
                      <span className="inner text-button">Our Vision</span>
                    </li>
                    <li className="item-title">
                      <span className="inner text-button">
                        What Sets Us Apart
                      </span>
                    </li>
                    <li className="item-title">
                      <span className="inner text-button">Our Commitment</span>
                    </li>
                  </ul>
                  <div className="widget-content-tab wow fadeInUp">
                    <div className="widget-content-inner active">
                      <p>
                        At Misi Luxury, we believe that luxury is not just a
                        status but a lifestyle. Our clothings are made in the
                        principles of sophistication, exclusivity, and great
                        craftsmanship, and we are dedicated to creating
                        experiences that resonate with elegance and appeal.
                        Every Misi collection is a testament to our commitment
                        to excellence.
                      </p>
                    </div>
                    <div className="widget-content-inner">
                      <p>
                        But Misi Luxury is more than a brand; it is a journey of
                        refinement. We aim to inspire confidence and
                        self-expression, providing our customers with pieces
                        that elevate their lifestyle and reflect their unique
                        taste.
                      </p>
                    </div>
                    <div className="widget-content-inner">
                      <p>
                        Misi Luxury clothing is designed for the discerning
                        individual who values elegance, sophistication, and
                        timeless style. Our audience comprises men and women who
                        seek more than just products—they desire experiences
                        that reflect their fashion taste and align with their
                        preferences. <br /> At Misi Luxury, we are committed to
                        serving this niche audience with offerings that not only
                        meet but exceed their expectations. Our goal is to
                        create trust, reliability, and exceptional value,
                        ensuring our customers feel truly seen,
                        valued, and celebrated.
                      </p>
                    </div>
                    <div className="widget-content-inner">
                      <p>
                        Whether you're stepping into one of our shop or browsing
                        our collections online, Misi Luxury promises a seamless
                        experience. <br />
                        <br />
                        Welcome to a world where luxury is
                        redefined—welcome to Misi
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* /about-us */}
      {/* Iconbox */}
      <section className="flat-spacing line-bottom-container">
        <div className="container">
          <div
            dir="ltr"
            className="swiper tf-sw-iconbox"
            data-preview={4}
            data-tablet={3}
            data-mobile-sm={2}
            data-mobile={1}
            data-space-lg={30}
            data-space-md={30}
            data-space={15}
            data-pagination={1}
            data-pagination-sm={2}
            data-pagination-md={3}
            data-pagination-lg={4}
          >
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="tf-icon-box style-2">
                  <div className="icon-box">
                    <span className="icon icon-return" />
                  </div>
                  <div className="content">
                    <h6>14-Day Returns</h6>
                    <p className="text-secondary">
                      Risk-free shopping with easy returns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tf-icon-box style-2">
                  <div className="icon-box">
                    <span className="icon icon-shipping" />
                  </div>
                  <div className="content">
                    <h6>Free Shipping</h6>
                    <p className="text-secondary">
                      No extra costs, just the price you see.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tf-icon-box style-2">
                  <div className="icon-box">
                    <span className="icon icon-headset" />
                  </div>
                  <div className="content">
                    <h6>24/7 Support</h6>
                    <p className="text-secondary">
                      24/7 support, always here just for you
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tf-icon-box style-2">
                  <div className="icon-box">
                    <span className="icon icon-sealCheck" />
                  </div>
                  <div className="content">
                    <h6>Member Discounts</h6>
                    <p className="text-secondary">
                      Special prices for our loyal customers.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="sw-pagination-iconbox sw-dots type-circle justify-content-center" />
          </div>
        </div>
      </section>
      {/* /Iconbox */}

      {/* Testimonial */}
      <section className="flat-spacing">
        <div className="container">
          <div className="heading-section text-center wow fadeInUp">
            <h3 className="heading">Customer Review</h3>
          </div>
          <div
            dir="ltr"
            className="swiper tf-sw-testimonial wow fadeInUp"
            data-wow-delay="0.1s"
            data-preview={3}
            data-tablet={2}
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
                <div className="testimonial-item style-4">
                  <div className="content-top">
                    <div className="box-icon">
                      <i className="icon icon-quote" />
                    </div>
                    <div className="text-title">Variety of Styles!</div>
                    <p className="text-secondary">
                      "Fantastic shop! Great selection, fair prices, and
                      friendly staff. Highly recommended. The quality of the
                      products is exceptional, and the prices are very
                      reasonable!"
                    </p>
                    <div className="box-rate-author">
                      <div className="box-author">
                        <div className="text-title author">Sybil Sharp</div>
                      </div>
                      <div className="list-star-default text-warning">
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item style-4">
                  <div className="content-top">
                    <div className="box-icon">
                      <i className="icon icon-quote" />
                    </div>
                    <div className="text-title">Quality of Clothing!</div>
                    <p className="text-secondary">
                      "I absolutely love this shop! The products are
                      high-quality and the customer service is excellent. I
                      always leave with exactly what I need and a smile on my
                      face."
                    </p>
                    <div className="box-rate-author">
                      <div className="box-author">
                        <div className="text-title author">Mark G.</div>
                      </div>
                      <div className="list-star-default text-warning">
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item style-4">
                  <div className="content-top">
                    <div className="box-icon">
                      <i className="icon icon-quote" />
                    </div>
                    <div className="text-title">Customer Service!</div>
                    <p className="text-secondary">
                      "I love this shop! The products are always top-quality,
                      and the staff is incredibly friendly and helpful. They go
                      out of their way to make sure that I'm satisfied with my
                      purchase.”
                    </p>
                    <div className="box-rate-author">
                      <div className="box-author">
                        <div className="text-title author">Emily S.</div>
                      </div>
                      <div className="list-star-default text-warning">
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testimonial-item style-4">
                  <div className="content-top">
                    <div className="box-icon">
                      <i className="icon icon-quote" />
                    </div>
                    <div className="text-title">Variety of Styles!</div>
                    <p className="text-secondary">
                      "Fantastic shop! Great selection, fair prices, and
                      friendly staff. Highly recommended. The quality of the
                      products is exceptional, and the prices are very
                      reasonable!"
                    </p>
                    <div className="box-rate-author">
                      <div className="box-author">
                        <div className="text-title author">Sybil Sharp</div>
                      </div>
                      <div className="list-star-default text-warning">
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
                        <i className="icon icon-star" />
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

      {/* Partner */}
      <section className="flat-spacing-5 bg-surface">
        <div
          dir="ltr"
          className="swiper tf-sw-partner sw-auto"
          data-preview="auto"
          data-tablet="auto"
          data-mobile-sm="auto"
          data-mobile="auto"
          data-space-lg={74}
          data-space-md={50}
          data-space={50}
          data-loop="true"
          data-auto-play="true"
          data-delay={0}
        >
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/vanfaba.png" alt="brand" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/anvouge.png" alt="brand" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/carolin.png" alt="brand" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/shangxi.png" alt="brand" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/ecomife.png" alt="brand" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/cheryl.png" alt="brand" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/sopify.png" alt="brand" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/pennyw.png" alt="brand" />
              </a>
            </div>
            <div className="swiper-slide">
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/panadoxn.png" alt="brand" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* /Partner */}
    </>
  );
};

export default AboutUsPage;
