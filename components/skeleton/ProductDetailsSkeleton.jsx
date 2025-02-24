import React from "react";

const ProductDetailsSkeleton = () => {
  return (
    <div className="tf-product-info-wrap">
      <div className="tf-product-info-list other-image-zoom">
        <div className="tf-product-info-heading">
          <div className="tf-product-info-name">
            <div className="skeleton-text w-24 h-5 bg-gray-300" />
            <h3 className="name">
              <div className="skeleton-text w-48 h-7 bg-gray-300" />
            </h3>
            <div className="sub">
              <div className="skeleton-text w-36 h-5 bg-gray-300" />
            </div>
          </div>
          <div className="tf-product-info-desc">
            <div className="skeleton-text w-24 h-5 bg-gray-300" />
            <div className="skeleton-text w-20 h-5 bg-gray-300" />
            <div className="skeleton-text w-30 h-5 bg-gray-300" />
          </div>
        </div>
        <div className="tf-product-info-choose-option">
          <div className="skeleton-text w-full h-24 bg-gray-300" />
        </div>
        <div className="tf-product-info-quantity">
          <div className="skeleton-text w-full h-12 bg-gray-300" />
        </div>
        <div className="skeleton-text w-full h-12 bg-gray-300" />
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
