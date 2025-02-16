import React from "react";

const QuickAdd = () => {
  return (
    <div className="modal fade modal-quick-add" id="quickAdd">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="header">
            <span
              className="icon-close icon-close-popup"
              data-bs-dismiss="modal"
            />
          </div>
          <div>
            <div className="tf-product-info-list">
              <div className="tf-product-info-item">
                <div className="image">
                  <img
                    src="/assets/images/products/womens/women-1.jpg"
                    alt=""
                  />
                </div>
                <div className="content">
                  <a href="product-detail.html">Ribbed Tank Top</a>
                  <div className="tf-product-info-price">
                    <h5 className="price-on-sale font-2">$79.99</h5>
                    <div className="compare-at-price font-2">$98.99</div>
                    <div className="badges-on-sale text-btn-uppercase">
                      -25%
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf-product-info-choose-option">
                <div className="variant-picker-item">
                  <div className="variant-picker-label mb_12">
                    Colors:
                    <span className="text-title variant-picker-label-value">
                      Beige
                    </span>
                  </div>
                  <div className="variant-picker-values type-click">
                    <input
                      id="values-beige2"
                      type="radio"
                      name="color3"
                      defaultChecked=""
                    />
                    <label
                      className="hover-tooltip tooltip-bot radius-60"
                      htmlFor="values-beige2"
                      data-value="Beige"
                    >
                      <span className="btn-checkbox bg-color-beige1" />
                      <span className="tooltip">Beige</span>
                    </label>
                    <input id="values-gray2" type="radio" name="color3" />
                    <label
                      className="hover-tooltip tooltip-bot radius-60"
                      htmlFor="values-gray2"
                      data-value="Gray"
                    >
                      <span className="btn-checkbox bg-color-gray" />
                      <span className="tooltip">Gray</span>
                    </label>
                    <input id="values-grey3" type="radio" name="color3" />
                    <label
                      className="hover-tooltip tooltip-bot radius-60"
                      htmlFor="values-grey3"
                      data-value="Grey"
                    >
                      <span className="btn-checkbox bg-color-grey" />
                      <span className="tooltip">Grey</span>
                    </label>
                  </div>
                </div>
                <div className="variant-picker-item">
                  <div className="variant-picker-label">
                    Size:
                    <span className="text-title variant-picker-label-value">
                      L
                    </span>
                  </div>
                  <div className="variant-picker-values gap12">
                    <input type="radio" name="size3" id="values-s2" />
                    <label
                      className="style-text size-btn"
                      htmlFor="values-s2"
                      data-value="S"
                    >
                      <span className="text-title">S</span>
                    </label>
                    <input type="radio" name="size3" id="values-m2" />
                    <label
                      className="style-text size-btn"
                      htmlFor="values-m2"
                      data-value="M"
                    >
                      <span className="text-title">M</span>
                    </label>
                    <input
                      type="radio"
                      name="size3"
                      id="values-l2"
                      defaultChecked=""
                    />
                    <label
                      className="style-text size-btn"
                      htmlFor="values-l2"
                      data-value="L"
                    >
                      <span className="text-title">L</span>
                    </label>
                    <input type="radio" name="size3" id="values-xl2" />
                    <label
                      className="style-text size-btn"
                      htmlFor="values-xl2"
                      data-value="XL"
                    >
                      <span className="text-title">XL</span>
                    </label>
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
      </div>
    </div>
  );
};

export default QuickAdd;
