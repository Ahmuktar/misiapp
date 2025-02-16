import React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";

const QuickView = ({ product, onClose, onOpen, defaultOpen }) => {
  const availableColors = product.available_colors.split(",");
  const availableSizes = product.available_sizes.split(",");

  return (
    <Sheet onOpenChange={(open) => !open && onClose()}>
      <SheetContent
        style={{ width: "800px" }}
        className="fullRight modal-quick-view"
      >
        <div className="modal-content" style={{ width: "800px" }}>
          <div className="tf-quick-view-image">
            <div className="wrap-quick-view wrapper-scroll-quickview">
              {availableColors.map((color, index) => (
                <div
                  key={index}
                  className="quickView-item item-scroll-quickview"
                  data-scroll-quickview={color.toLowerCase()}
                >
                  <img
                    className="lazyload"
                    data-src={
                      product.images[1] ? product.images[1] : product.images[0]
                    }
                    src={product.images[0]}
                    alt={product.name}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="wrap">
            <div className="header">
              <h5 className="title">Quick View</h5>
              <span
                className="icon-close icon-close-popup"
                data-bs-dismiss="modal"
                onClick={onClose}
              />
            </div>
            <div className="tf-product-info-list">
              <div className="tf-product-info-heading">
                <div className="tf-product-info-name">
                  <div className="text text-btn-uppercase">
                    {product.category}
                  </div>
                  <h3 className="name">{product.name}</h3>
                </div>
                <div className="tf-product-info-desc">
                  <div className="tf-product-info-price">
                    {product.sale_price &&
                    product.sale_price !== product.original_price ? (
                      <>
                        <h5 className="price-on-sale font-2">
                          ${product.sale_price}
                        </h5>
                      </>
                    ) : (
                      <div className="compare-at-price font-2">
                        ${product.original_price}
                      </div>
                    )}
                  </div>
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="tf-product-info-choose-option">
                <div className="variant-picker-item">
                  <div className="variant-picker-label mb_12">
                    Colors:
                    <span className="text-title variant-picker-label-value">
                      {availableColors[0]}
                    </span>
                  </div>
                  <div className="variant-picker-values">
                    {availableColors.map((color, index) => (
                      <React.Fragment key={index}>
                        <input
                          id={`values-${color.toLowerCase()}1`}
                          type="radio"
                          name="color2"
                          defaultChecked={index === 0}
                        />
                        <label
                          className={`hover-tooltip tooltip-bot radius-60 color-btn btn-scroll-quickview ${
                            index === 0 ? "active" : ""
                          }`}
                          data-slide={index}
                          data-price="79.99"
                          htmlFor={`values-${color.toLowerCase()}1`}
                          data-value={color}
                          data-scroll-quickview={color.toLowerCase()}
                        >
                          <span
                            className={`btn-checkbox bg-color-${color.toLowerCase()}1`}
                          />
                          <span className="tooltip">{color}</span>
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="variant-picker-item">
                  <div className="d-flex justify-content-between mb_12">
                    <div className="variant-picker-label">
                      Size:
                      <span className="text-title variant-picker-label-value">
                        {availableSizes[0]}
                      </span>
                    </div>
                    <a className="size-guide text-title link show-size-guide">
                      Size Guide
                    </a>
                  </div>
                  <div className="variant-picker-values gap12">
                    {availableSizes.map((size, index) => (
                      <React.Fragment key={index}>
                        <input
                          type="radio"
                          name="size2"
                          id={`values-${size.toLowerCase()}1`}
                          defaultChecked={index === 0}
                        />
                        <label
                          className="style-text size-btn"
                          htmlFor={`values-${size.toLowerCase()}1`}
                          data-value={size}
                        >
                          <span className="text-title">{size}</span>
                        </label>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
                <div className="tf-product-info-quantity">
                  <div className="title mb_12">Quantity:</div>
                  <div className="wg-quantity">
                    <span className="btn-quantity btn-decrease">-</span>
                    <input
                      className="quantity-product"
                      type="text"
                      name="number"
                      defaultValue={1}
                    />
                    <span className="btn-quantity btn-increase">+</span>
                  </div>
                </div>
                <div>
                  <div className="tf-product-info-by-btn mb_10">
                    <a className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6 show-shopping-cart">
                      <span>Add to cart -&nbsp;</span>
                      <span className="tf-qty-price total-price">$79.99</span>
                    </a>
                    <a
                      href="#compare"
                      data-bs-toggle="offcanvas"
                      aria-controls="compare"
                      className="box-icon hover-tooltip compare btn-icon-action show-compare"
                    >
                      <span className="icon icon-gitDiff" />
                      <span className="tooltip text-caption-2">Compare</span>
                    </a>
                    <a
                      href="javascript:void(0);"
                      className="box-icon hover-tooltip text-caption-2 wishlist btn-icon-action"
                    >
                      <span className="icon icon-heart" />
                      <span className="tooltip text-caption-2">Wishlist</span>
                    </a>
                  </div>
                  <a href="#" className="btn-style-3 text-btn-uppercase">
                    Buy it now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default QuickView;
