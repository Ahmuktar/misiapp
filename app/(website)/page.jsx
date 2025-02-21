"use client";
import CollectionSection from "@/components/website/CollectionSection";
import Hero from "@/components/website/Hero";
import InstagramGallery from "@/components/website/InstagramGallery";
import MarqueeOne from "@/components/website/MarqueeOne";
import MarqueeTwo from "@/components/website/MarqueeTwo";
import ProductSection from "@/components/website/products/ProductSection";
import TestimonialSection from "@/components/website/TestimonialSection";
import Aos from "aos";
import {
  LucideGem,
  LucidePlane,
  LucideScissors,
  LucideSparkles,
} from "lucide-react";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);
  return (
    <div>
      <Hero />
      {/* <MarqueeTwo /> */}
      <CollectionSection />
      {/* <ProductSection /> */}
      <section className="container">
        <div className="md:w-2/3 mb-20 text-center mx-auto" data-aos="fade-up">
          <h1 className="text-2xl md:text-4xl font-bold">
            Discover our exquisite collection of handcrafted masterpieces, where
            every stitch tells a story of luxury and sophistication.
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-20 mb-3">
          <div className="md:col-span-2" data-aos="zoom-in">
            <img
              className="lazyloaded w-full h-80 object-cover object-top rounded-2xl"
              src="/assets/images/misi/MISI 27.jpg"
              alt="store-img"
            />
          </div>
          <div
            className="hidden md:block"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img
              className="lazyloaded w-full h-80 object-cover object-top rounded-2xl"
              src="/assets/images/misi/MISI 6.jpg"
              alt="store-img"
            />
          </div>
          <div
            className="hidden md:block"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <img
              className="lazyloaded w-full h-80 object-cover object-top rounded-2xl"
              src="/assets/images/misi/MISI 14.jpg"
              alt="store-img"
            />
          </div>
          <div
            className="hidden md:block md:col-span-2 lg:col-span-1"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <img
              className="lazyloaded w-full h-80 object-cover object-top rounded-2xl"
              src="/assets/images/misi/MISI 40.jpg"
              alt="store-img"
            />
          </div>
          <div
            className="md:col-span-2"
            data-aos="zoom-in"
            data-aos-delay="800"
          >
            <img
              className="lazyloaded w-full h-80 object-cover object-top rounded-2xl"
              src="/assets/images/misi/MISI 18.jpg"
              alt="store-img"
            />
          </div>
          <div
            className="hidden md:block"
            data-aos="zoom-in"
            data-aos-delay="1000"
          >
            <img
              className="lazyloaded w-full h-80 object-cover object-top rounded-2xl"
              src="/assets/images/misi/MISI 48.jpeg"
              alt="store-img"
            />
          </div>
        </div>
      </section>
      <section className="bg-main text-slate-300/95">
        <div className="grid grid-cols-1 md:grid-cols-3 px-4 lg:px-0 gap-20 mb-3 items-center">
          <div className="md:col-span-2 lg:pl-28 mt-10" data-aos="fade-right">
            <h1 className="text-2xl md:text-4xl lg:w-4/5 font-bold text-primary mb-4">
              Embrace the night with our stunning evening wear, designed for
              those who dare to stand out in the crowd.
            </h1>
            <p className="text-md">
              Here at Flowbite we focus on markets where technology, innovation,
              and capital can unlock long-term value and drive economic growth.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-20 my-5">
              <div
                className="space-y-4"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <LucideGem className="text-primary" />
                <h2 className="text-base text-white">Unparalleled Quality</h2>
                <p className="text-sm">
                  Every piece is meticulously designed with precision, using the
                  finest fabrics and materials for an unmatched touch of
                  sophistication.
                </p>
              </div>
              <div
                className="space-y-4"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <LucideScissors className="text-primary" />
                <h2 className="text-base text-white">Exclusive Designs</h2>
                <p className="text-sm">
                  We offer limited-edition collections curated by world-renowned
                  designers, giving you access to rare and unique fashion
                  statements.
                </p>
              </div>
              <div
                className="space-y-4"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <LucidePlane className="text-primary" />
                <h2 className="text-base text-white">
                  Global Luxury, Delivered
                </h2>
                <p className="text-sm">
                  Wherever you are, we bring the world of high fashion to your
                  doorstep with seamless, premium shipping options.
                </p>
              </div>
              <div
                className="space-y-4"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <LucideSparkles className="text-primary" />
                <h2 className="text-base text-white">
                  Personalized Shopping Experience
                </h2>
                <p className="text-sm">
                  Enjoy a curated selection tailored to your taste, with bespoke
                  recommendations and VIP styling services.
                </p>
              </div>
            </div>
          </div>
          <div
            className="hidden md:block"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <img
              className="lazyloaded w-full h-full"
              src="/assets/images/misi/MISI 27.jpg"
              alt="store-img"
            />
          </div>
        </div>
      </section>
      <section className="flat-spacing" data-aos="fade-up">
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
