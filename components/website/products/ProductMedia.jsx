"use client";
import React, { useEffect, useRef, useState } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import Drift from "drift-zoom";

const ProductMedia = ({ product }) => {
  const mainSwiperRef = useRef(null);
  const thumbsSwiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0); // Track active slide index
  const productsImages = product;

  useEffect(() => {
    if (document.querySelector(".thumbs-slider")) {
      const direction = document.querySelector(".tf-product-media-thumbs")
        .dataset.direction;

      // Initialize Swiper for thumbs
      const thumbsSwiper = new Swiper(".tf-product-media-thumbs", {
        spaceBetween: 10,
        slidesPerView: "auto",
        freeMode: true,
        direction: "vertical",
        watchSlidesProgress: true,
        observer: true,
        observeParents: true,
        breakpoints: {
          0: {
            direction: "horizontal",
          },
          1200: {
            direction: direction || "vertical",
          },
        },
      });

      // Initialize Swiper for main media
      const mainSwiper = new Swiper(".tf-product-media-main", {
        spaceBetween: 0,
        observer: true,
        observeParents: true,
        navigation: {
          nextEl: ".thumbs-next",
          prevEl: ".thumbs-prev",
        },
        thumbs: {
          swiper: thumbsSwiper,
        },
      });

      mainSwiperRef.current = mainSwiper;
      thumbsSwiperRef.current = thumbsSwiper;

      // Update active index when the main Swiper changes
      mainSwiper.on("slideChange", () => {
        setActiveIndex(mainSwiper.activeIndex);
      });

      // Initialize all functionalities
      sectionZoom();
      lightboxSwiper();

      // Cleanup on unmount
      return () => {
        mainSwiper.destroy();
        thumbsSwiper.destroy();
      };
    }
  }, []);

  // Initialize Drift zoom after Swiper is set up
  useEffect(() => {
    if (window.matchMedia("only screen and (min-width: 768px)").matches) {
      document.querySelectorAll(".tf-image-zoom").forEach((el) => {
        new Drift(el, {
          zoomFactor: 2,
          paneContainer: document.querySelector(".tf-zoom-main"),
          inlinePane: false,
          handleTouch: false,
          hoverBoundingBox: true,
          containInline: true,
        });
      });
    }
  }, [activeIndex]); // Reinitialize Drift when the active index changes

  // Handle next slide
  const handleNextSlide = (index) => {
    if (mainSwiperRef.current && thumbsSwiperRef.current) {
      mainSwiperRef.current.slideTo(index, 1000, false);
      thumbsSwiperRef.current.slideTo(index, 1000, false);
      setActiveIndex(index); // Update active index
    }
  };

  // Section zoom functionality
  const sectionZoom = () => {
    document.querySelectorAll(".tf-image-zoom").forEach((el) => {
      el.addEventListener("mouseover", () => {
        el.closest(".section-image-zoom").classList.add("zoom-active");
      });
      el.addEventListener("mouseleave", () => {
        el.closest(".section-image-zoom").classList.remove("zoom-active");
      });
    });
  };

  // Lightbox functionality
  const lightboxSwiper = () => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: "#gallery-swiper-started",
      children: "a",
      pswpModule: () => import("photoswipe"),
      bgOpacity: 1,
      secondaryZoomLevel: 2,
      maxZoomLevel: 3,
    });
    lightbox.init();

    lightbox.on("change", () => {
      const { pswp } = lightbox;
      mainSwiperRef.current.slideTo(pswp.currIndex, 0, false);
    });

    lightbox.on("afterInit", () => {
      if (mainSwiperRef.current.params.autoplay?.enabled) {
        mainSwiperRef.current.autoplay.stop();
      }
    });

    lightbox.on("closingAnimationStart", () => {
      const { pswp } = lightbox;
      mainSwiperRef.current.slideTo(pswp.currIndex, 0, false);
      if (mainSwiperRef.current.params.autoplay?.enabled) {
        mainSwiperRef.current.autoplay.start();
      }
    });
  };

  return (
    <div className="tf-product-media-wrap sticky-top">
      <div className="thumbs-slider">
        <div
          dir="ltr"
          className="swiper tf-product-media-thumbs other-image-zoom swiper-initialized swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs swiper-horizontal"
          data-direction="vertical"
        >
          <div
            className="swiper-wrapper stagger-wrap"
            id="swiper-wrapper-377e69ead368acf8"
            aria-live="polite"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {/* Thumbs slides */}
            {productsImages.map((slide, index) => (
              <div
                key={index}
                className={`swiper-slide stagger-item stagger-finished ${
                  index === activeIndex
                    ? "swiper-slide-thumb-active swiper-slide-visible swiper-slide-active"
                    : ""
                }`}
                data-color={slide.color}
                role="group"
                aria-label={`${index + 1} / 9`}
                style={{ transitionDelay: `${index * 0.2}s`, marginRight: 10 }}
              >
                <div className="item" onClick={() => handleNextSlide(index)}>
                  <img
                    className="ls-is-cached lazyloaded"
                    data-src={slide.image_url}
                    src={slide.image_url}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
        <div
          dir="ltr"
          className="swiper tf-product-media-main swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
          id="gallery-swiper-started"
        >
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-850fea4f1045c2550"
            aria-live="polite"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {/* Main slides */}
            {productsImages.map((slide, index) => (
              <div
                key={index}
                className={`swiper-slide ${
                  index === activeIndex ? "swiper-slide-active" : ""
                }`}
                data-color={slide.color}
                role="group"
                aria-label={`${index + 1} / 9`}
                style={{ width: 460 }}
              >
                <a
                  href={slide.image_url}
                  target="_blank"
                  className="item"
                  data-pswp-width="600px"
                  data-pswp-height="800px"
                >
                  <img
                    className="tf-image-zoom ls-is-cached lazyloaded"
                    data-zoom={slide.image_url}
                    data-src={slide.image_url}
                    src={slide.image_url}
                    alt=""
                  />
                </a>
              </div>
            ))}
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductMedia;
