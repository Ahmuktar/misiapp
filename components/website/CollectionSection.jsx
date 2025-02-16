import React from "react";

const CollectionItem = ({ collection }) => {
  return (
    <div className="swiper-slide">
      <div className="collection-circle hover-img">
        <a href="shop-collection.html" className="img-style">
          <img
            className="lazyload"
            data-src={collection.image}
            src={collection.image}
            alt="collection-img"
          />
        </a>
        <div className="collection-content text-center">
          <div>
            <a href="shop-collection.html" className="cls-title">
              <h6 className="text">{collection.title}</h6>
              <i className="icon icon-arrowUpRight" />
            </a>
          </div>
          <div className="count text-secondary">{collection.items} items</div>
        </div>
      </div>
    </div>
  );
};

const CollectionSection = () => {
  // const collections = dummyData.categories;
  return (
    <section className="flat-spacing">
      <div className="container">
        <div
          className="heading-section-2 wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <h3 className="heading">Explore Collections</h3>
          <a href="shop-collection.html" className="btn-line">
            View All Collection
          </a>
        </div>
      </div>
      <div
        className="container-full slider-layout-right wow fadeInUp"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <div
          dir="ltr"
          className="swiper tf-sw-categories swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
          data-preview="6.2"
          data-tablet="3.2"
          data-mobile="2.2"
          data-space-lg={20}
          data-space-md={20}
          data-space={15}
          data-pagination={1}
          data-pagination-md={1}
          data-pagination-lg={1}
        >
          <div
            className="swiper-wrapper"
            id="swiper-wrapper-679f42100c1dddd5b"
            aria-live="polite"
            style={{
              transform: "translate3d(0px, 0px, 0px)",
              transitionDuration: "0ms",
            }}
          >
            {/* 1 */}
            <div
              className="swiper-slide swiper-slide-active"
              role="group"
              aria-label="1 / 8"
              style={{ width: "321.875px", marginRight: 20 }}
            >
              <div className="collection-position-2 hover-img">
                <a className="img-style">
                  <img
                    className=" ls-is-cached lazyloaded"
                    data-src="/assets/images/collections/cls1.jpg"
                    src="/assets/images/collections/cls1.jpg"
                    alt="banner-cls"
                  />
                </a>
                <div className="content">
                  <a href="shop-collection.html" className="cls-btn">
                    <h6 className="text">New in</h6>
                    <i className="icon icon-arrowUpRight" />
                  </a>
                </div>
              </div>
            </div>
            {/* 2 */}
            <div
              className="swiper-slide swiper-slide-next"
              role="group"
              aria-label="2 / 8"
              style={{ width: "321.875px", marginRight: 20 }}
            >
              <div className="collection-position-2 hover-img">
                <a className="img-style">
                  <img
                    className=" ls-is-cached lazyloaded"
                    data-src="/assets/images/collections/cls2.jpg"
                    src="/assets/images/collections/cls2.jpg"
                    alt="banner-cls"
                  />
                </a>
                <div className="content">
                  <a href="shop-collection.html" className="cls-btn">
                    <h6 className="text">Promotion</h6>
                    <i className="icon icon-arrowUpRight" />
                  </a>
                </div>
              </div>
            </div>
            {/* 3 */}
            <div
              className="swiper-slide"
              role="group"
              aria-label="3 / 8"
              style={{ width: "321.875px", marginRight: 20 }}
            >
              <div className="collection-position-2 hover-img">
                <a className="img-style">
                  <img
                    className=" ls-is-cached lazyloaded"
                    data-src="/assets/images/collections/cls6.jpg"
                    src="/assets/images/collections/cls6.jpg"
                    alt="banner-cls"
                  />
                </a>
                <div className="content">
                  <a href="shop-collection.html" className="cls-btn">
                    <h6 className="text">Clothing</h6>
                    <i className="icon icon-arrowUpRight" />
                  </a>
                </div>
              </div>
            </div>
            {/* 4 */}
            <div
              className="swiper-slide"
              role="group"
              aria-label="4 / 8"
              style={{ width: "321.875px", marginRight: 20 }}
            >
              <div className="collection-position-2 hover-img">
                <a className="img-style">
                  <img
                    className=" ls-is-cached lazyloaded"
                    data-src="/assets/images/collections/cls4.jpg"
                    src="/assets/images/collections/cls4.jpg"
                    alt="banner-cls"
                  />
                </a>
                <div className="content">
                  <a href="shop-collection.html" className="cls-btn">
                    <h6 className="text">Shoes</h6>
                    <i className="icon icon-arrowUpRight" />
                  </a>
                </div>
              </div>
            </div>
            {/* 5 */}
            <div
              className="swiper-slide"
              role="group"
              aria-label="5 / 8"
              style={{ width: "321.875px", marginRight: 20 }}
            >
              <div className="collection-position-2 hover-img">
                <a className="img-style">
                  <img
                    className=" ls-is-cached lazyloaded"
                    data-src="/assets/images/collections/cls5.jpg"
                    src="/assets/images/collections/cls5.jpg"
                    alt="banner-cls"
                  />
                </a>
                <div className="content">
                  <a href="shop-collection.html" className="cls-btn">
                    <h6 className="text">Bags</h6>
                    <i className="icon icon-arrowUpRight" />
                  </a>
                </div>
              </div>
            </div>
            {/* 6 */}
            <div
              className="swiper-slide"
              role="group"
              aria-label="6 / 8"
              style={{ width: "321.875px", marginRight: 20 }}
            >
              <div className="collection-position-2 hover-img">
                <a className="img-style">
                  <img
                    className=" ls-is-cached lazyloaded"
                    data-src="/assets/images/collections/cls6.jpg"
                    src="/assets/images/collections/cls6.jpg"
                    alt="banner-cls"
                  />
                </a>
                <div className="content">
                  <a href="shop-collection.html" className="cls-btn">
                    <h6 className="text">Accessories</h6>
                    <i className="icon icon-arrowUpRight" />
                  </a>
                </div>
              </div>
            </div>
            {/* 7 */}
            <div
              className="swiper-slide"
              role="group"
              aria-label="7 / 8"
              style={{ width: "321.875px", marginRight: 20 }}
            >
              <div className="collection-position-2 hover-img">
                <a className="img-style">
                  <img
                    className=" ls-is-cached lazyloaded"
                    data-src="/assets/images/collections/cls1.jpg"
                    src="/assets/images/collections/cls1.jpg"
                    alt="banner-cls"
                  />
                </a>
                <div className="content">
                  <a href="shop-collection.html" className="cls-btn">
                    <h6 className="text">New in</h6>
                    <i className="icon icon-arrowUpRight" />
                  </a>
                </div>
              </div>
            </div>
            {/* 8 */}
            <div
              className="swiper-slide"
              role="group"
              aria-label="8 / 8"
              style={{ width: "321.875px", marginRight: 20 }}
            >
              <div className="collection-position-2 hover-img">
                <a className="img-style">
                  <img
                    className=" ls-is-cached lazyloaded"
                    data-src="/assets/images/collections/cls5.jpg"
                    src="/assets/images/collections/cls5.jpg"
                    alt="banner-cls"
                  />
                </a>
                <div className="content">
                  <a href="shop-collection.html" className="cls-btn">
                    <h6 className="text">Bags</h6>
                    <i className="icon icon-arrowUpRight" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
      </div>
    </section>
  );
};

export default CollectionSection;
