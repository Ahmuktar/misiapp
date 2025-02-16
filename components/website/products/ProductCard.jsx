import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      className="swiper-slide swiper-slide-next"
      role="group"
      aria-label="2 / 4"
      style={{ width: "270.667px", marginRight: 30 }}
    >
      <div
        className="card-product wow fadeInUp"
        data-wow-delay="0.1s"
        style={{
          visibility: "visible",
          animationDelay: "0.1s",
          animationName: "fadeInUp",
        }}
      >
        <div className="card-product-wrapper">
          <a href={`/products/${product.id}`} className="product-img">
            <img
              className="img-product"
              src={product?.images[0]} // First image as the main image
              alt={product?.name}
            />
            <img
              className="img-hover"
              src={product?.images[1] ? product?.images[1] : product?.images[0]} // Second image or fallback to first image
              alt={product?.name}
            />
          </a>
          {/* <div className="list-product-btn">
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
                onClick={handleQuickViewOpen}
              >
                <span className="icon icon-eye" />
                <span className="tooltip">Quick View</span>
              </a>
            </div> */}
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
          <a href={`/products/${product.id}`} className="title link">
            {product.name}
          </a>
          <span className="price">
            {product.sale_price &&
            product.sale_price !== product.original_price ? (
              <>
                <span className="old-price">₦{product.original_price}</span> ₦
                {product.sale_price}
              </>
            ) : (
              `₦${product.original_price}`
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
