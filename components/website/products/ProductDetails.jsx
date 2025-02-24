"use client"; // Mark this as a Client Component
import useCartStore from "@/stores/cartStore";
import React, { useState } from "react";
import toast from "react-hot-toast";

const ProductDetails = ({ product }) => {
  const { addToCart } = useCartStore();

  // State for user selections
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [errorMsg, setErrorMsg] = useState("");

  if (!product) {
    return null; // Or return a skeleton/fallback UI
  }

  // Handle adding to cart
  const handleAddToCart = () => {
    if (!selectedColor) {
      setErrorMsg("color");
      toast.error("Choose a color");
      return;
    }
    if (!selectedSize) {
      setErrorMsg("size");
      toast.error("Choose a size");
      return;
    }

    const payload = {
      product_id: product.id,
      quantity: quantity,
      selected_color: selectedColor,
      selected_size: selectedSize,
    };

    addToCart(payload);
    toast.success("Item added to cart");
  };

  return (
    <div className="tf-product-info-wrap position-relative">
      <div className="tf-zoom-main" />
      <div className="tf-product-info-list other-image-zoom">
        <div className="tf-product-info-heading">
          <div className="tf-product-info-name">
            <div className="text text-btn-uppercase">{product?.category}</div>
            <h3 className="name">{product?.name}</h3>
          </div>
          <div className="tf-product-info-desc">
            <div className="tf-product-info-price">
              {product.sale_price !== product.original_price ? (
                <>
                  <h5 className="price-on-sale font-2">
                    ₦{product?.sale_price}
                  </h5>
                  <div className="compare-at-price font-2">
                    ₦{product?.original_price}
                  </div>
                </>
              ) : (
                <h5 className="price-on-sale font-2">₦{product?.sale_price}</h5>
              )}
            </div>
            <p>{product?.description}</p>
          </div>
        </div>
        <div className="tf-product-info-choose-option">
          {/* Color Selection */}
          <div className="variant-picker-item">
            <div className="variant-picker-label mb_12">
              Colors:
              <span
                className={`text-title variant-picker-label-value value-currentColor ${
                  errorMsg === "color" && "text-danger"
                }`}
              >
                {selectedColor || "Select a color"}
              </span>
            </div>
            <div className="variant-picker-values">
              {product.available_colors.split(",").map((color, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    name="color1"
                    id={`values-${color.trim().toLowerCase()}`}
                    onChange={() => setSelectedColor(color.trim())}
                  />
                  <label
                    className="hover-tooltip tooltip-bot radius-60 color-btn"
                    htmlFor={`values-${color.trim().toLowerCase()}`}
                    data-value={color.trim()}
                    data-color={color.trim().toLowerCase()}
                  >
                    <span
                      className={`btn-checkbox bg-color-${color
                        .trim()
                        .toLowerCase()}`}
                    />
                    <span className="tooltip">{color.trim()}</span>
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="variant-picker-item">
            <div className="d-flex justify-content-between mb_12">
              <div className="variant-picker-label">
                Size:
                <span
                  className={`text-title variant-picker-label-value ${
                    errorMsg === "size" && "text-danger"
                  }`}
                >
                  {selectedSize || "Select a size"}
                </span>
              </div>
              <a
                href="#size-guide"
                data-bs-toggle="modal"
                className="size-guide text-title link"
              >
                Size Guide
              </a>
            </div>
            <div className="variant-picker-values gap12">
              {product.available_sizes.split(",").map((size, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    name="size1"
                    id={`values-${size.trim().toLowerCase()}`}
                    onChange={() => setSelectedSize(size.trim())}
                  />
                  <label
                    className="style-text size-btn"
                    htmlFor={`values-${size.trim().toLowerCase()}`}
                    data-value={size.trim()}
                  >
                    <span className="text-title">{size.trim()}</span>
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="tf-product-info-quantity">
            <div className="title mb_12">Quantity:</div>
            <div className="wg-quantity">
              <span
                className="btn-quantity btn-decrease"
                onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
              >
                -
              </span>
              <input
                className="quantity-product"
                type="text"
                name="number"
                value={quantity}
                readOnly
              />
              <span
                className="btn-quantity btn-increase"
                onClick={() => setQuantity((prev) => prev + 1)}
              >
                +
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div>
            <div className="tf-product-info-by-btn mb_10">
              <button
                className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6 btn-add-to-cart"
                onClick={handleAddToCart}
              >
                <span>Add to cart -&nbsp;</span>
                <span className="tf-qty-price total-price">
                  ₦{(product?.sale_price * quantity).toFixed(2)}
                </span>
              </button>
              {/* <a
                href="#compare"
                data-bs-toggle="offcanvas"
                aria-controls="compare"
                className="box-icon hover-tooltip compare btn-icon-action"
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
              </a> */}
            </div>
            {/* <a href="#" className="btn-style-3 text-btn-uppercase">
              Buy it now
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
