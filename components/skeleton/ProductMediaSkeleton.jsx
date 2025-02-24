import React from "react";

const ProductMediaSkeleton = () => {
  return (
    <div className="tf-product-media-wrap sticky top-0">
      <div className="thumbs-slider">
        <div
          className="swiper tf-product-media-thumbs other-image-zoom swiper-initialized swiper-pointer-events swiper-free-mode swiper-watch-progress swiper-backface-hidden swiper-thumbs swiper-horizontal"
          data-direction="vertical"
        >
          <div
            className="swiper-wrapper stagger-wrap"
            aria-live="polite"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="swiper-slide stagger-item stagger-finished mr-2.5"
              >
                <div className="item">
                  <div className="skeleton-image w-full h-24 bg-gray-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="swiper tf-product-media-main swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
          <div
            className="swiper-wrapper"
            aria-live="polite"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <div className="swiper-slide">
              <div className="skeleton-image w-full h-96 bg-gray-300" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductMediaSkeleton;
