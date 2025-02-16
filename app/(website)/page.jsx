import CollectionSection from "@/components/website/CollectionSection";
import Hero from "@/components/website/Hero";
import InstagramGallery from "@/components/website/InstagramGallery";
import MarqueeOne from "@/components/website/MarqueeOne";
import ProductSection from "@/components/website/products/ProductSection";
import TestimonialSection from "@/components/website/TestimonialSection";

export default function Home() {
  return (
    <div>
      <Hero />
      <MarqueeOne />
      <CollectionSection />
      <ProductSection />
      <section className="flat-spacing">
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
                <div className="tf-icon-box">
                  <div className="icon-box">
                    <span className="icon icon-return" />
                  </div>
                  <div className="content text-center">
                    <h6>14-Day Returns</h6>
                    <p className="text-secondary">
                      Risk-free shopping with easy returns.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tf-icon-box">
                  <div className="icon-box">
                    <span className="icon icon-shipping" />
                  </div>
                  <div className="content text-center">
                    <h6>Free Shipping</h6>
                    <p className="text-secondary">
                      No extra costs, just the price you see.
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tf-icon-box">
                  <div className="icon-box">
                    <span className="icon icon-headset" />
                  </div>
                  <div className="content text-center">
                    <h6>24/7 Support</h6>
                    <p className="text-secondary">
                      24/7 support, always here just for you
                    </p>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="tf-icon-box">
                  <div className="icon-box">
                    <span className="icon icon-sealCheck" />
                  </div>
                  <div className="content text-center">
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
      <TestimonialSection />
      <section className="flat-spacing pt-0">
        <div className="tf-marquee marquee-style2">
          <div className="marquee-wrapper">
            <div className="initial-child-container">
              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Embrace Endless Possibilities
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Simplify Your Style Statement
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">Embrace New Horizons</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>

              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Embrace Endless Possibilities
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Simplify Your Style Statement
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">Embrace New Horizons</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>

              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Embrace Endless Possibilities
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Simplify Your Style Statement
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">Embrace New Horizons</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>

              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Embrace Endless Possibilities
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Simplify Your Style Statement
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">Embrace New Horizons</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
            </div>
          </div>
        </div>
        <div className="tf-marquee marquee-style2 marquee-animation-right">
          <div className="marquee-wrapper">
            <div className="initial-child-container">
              <div className="marquee-child-item">
                <h3 className="text-uppercase">Redesign Your Path</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">Craft Your Own Adventure</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Welcome Limitless Opportunities
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>

              <div className="marquee-child-item">
                <h3 className="text-uppercase">Redesign Your Path</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">Craft Your Own Adventure</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Welcome Limitless Opportunities
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>

              <div className="marquee-child-item">
                <h3 className="text-uppercase">Redesign Your Path</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">Craft Your Own Adventure</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Welcome Limitless Opportunities
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>

              <div className="marquee-child-item">
                <h3 className="text-uppercase">Redesign Your Path</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">Craft Your Own Adventure</h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
              <div className="marquee-child-item">
                <h3 className="text-uppercase">
                  Welcome Limitless Opportunities
                </h3>
              </div>
              <div className="marquee-child-item">
                <span className="icon icon-tshirt"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <InstagramGallery />
      {/* Partners */}
      <section className="flat-spacing-5 line-top">
        <div
          dir="ltr"
          className="swiper tf-sw-partner sw-auto swiper-initialized swiper-horizontal swiper-pointer-events"
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
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-35877f1e45d5e41010"
            aria-live="off"
            style={{
              transform: "translate3d(-2046.01px, 0px, 0px)",
              transitionDuration: "0ms",
            }}
          >
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={0}
              role="group"
              aria-label="1 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/vanfaba.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
              data-swiper-slide-index={1}
              role="group"
              aria-label="2 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/anvouge.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={2}
              role="group"
              aria-label="3 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/carolin.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
              data-swiper-slide-index={3}
              role="group"
              aria-label="4 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/shangxi.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={4}
              role="group"
              aria-label="5 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/ecomife.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={5}
              role="group"
              aria-label="6 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/cheryl.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={6}
              role="group"
              aria-label="7 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/sopify.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={7}
              role="group"
              aria-label="8 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/pennyw.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={8}
              role="group"
              aria-label="9 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/panadoxn.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={0}
              role="group"
              aria-label="1 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/vanfaba.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-prev"
              data-swiper-slide-index={1}
              role="group"
              aria-label="2 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/anvouge.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-active"
              data-swiper-slide-index={2}
              role="group"
              aria-label="3 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/carolin.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-next"
              data-swiper-slide-index={3}
              role="group"
              aria-label="4 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/shangxi.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={4}
              role="group"
              aria-label="5 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/ecomife.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={5}
              role="group"
              aria-label="6 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/cheryl.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={6}
              role="group"
              aria-label="7 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/sopify.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={7}
              role="group"
              aria-label="8 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/pennyw.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide"
              data-swiper-slide-index={8}
              role="group"
              aria-label="9 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/panadoxn.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={0}
              role="group"
              aria-label="1 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/vanfaba.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev"
              data-swiper-slide-index={1}
              role="group"
              aria-label="2 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/anvouge.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active"
              data-swiper-slide-index={2}
              role="group"
              aria-label="3 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/carolin.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next"
              data-swiper-slide-index={3}
              role="group"
              aria-label="4 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/shangxi.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={4}
              role="group"
              aria-label="5 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/ecomife.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={5}
              role="group"
              aria-label="6 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/cheryl.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={6}
              role="group"
              aria-label="7 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/sopify.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={7}
              role="group"
              aria-label="8 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/pennyw.png" alt="brand" />
              </a>
            </div>
            <div
              className="swiper-slide swiper-slide-duplicate"
              data-swiper-slide-index={8}
              role="group"
              aria-label="9 / 9"
              style={{ marginRight: 50 }}
            >
              <a href="#" className="brand-item">
                <img src="/assets/images/brand/panadoxn.png" alt="brand" />
              </a>
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
      </section>
    </div>
  );
}
