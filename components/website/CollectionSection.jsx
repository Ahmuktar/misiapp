import React from "react";

const CollectionItem = ({ collection }) => {
  return (
    <div
      className="swiper-slide"
      role="group"
      aria-label="1 / 8"
      style={{ width: "321.875px", marginRight: 20 }}
    >
      <div className="collection-position-2 hover-img">
        <a className="img-style">
          <img
            className="ls-is-cached lazyloaded"
            data-src={collection.image}
            src={collection.image}
            alt="banner-cls"
          />
        </a>
        <div className="content">
          <a href="shop-collection.html" className="cls-btn">
            <h6 className="text">{collection.title}</h6>
            <i className="icon icon-arrowUpRight" />
          </a>
        </div>
      </div>
    </div>
  );
};

const collections = [
  { image: "/assets/images/misi/MISI 27.jpg", title: "New in" },
  { image: "/assets/images/misi/MISI 42.jpg", title: "Promotion" },
  { image: "/assets/images/misi/MISI 46.jpeg", title: "Clothing" },
  {
    image: "/assets/images/misi/shoes.jpg",
    title: "Shoes",
  },
  {
    image: "/assets/images/misi/bags.jpg",
    title: "Bags",
  },
  {
    image: "/assets/images/misi/accessories.jpg",
    title: "Accessories",
  },
];

const CollectionSection = () => {
  // const collections = dummyData.categories;
  return (
    <section className="flat-spacing" data-aos="fade-up">
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
            {collections.map((collection, index) => (
              <CollectionItem collection={collection} key={index} />
            ))}
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
