import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const FilterShop = () => {
  const router = useRouter();

  // Update URL query parameters whenever filters change
  const updateFilters = (newFilters) => {
    const params = new URLSearchParams();

    Object.entries(newFilters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, item));
      } else if (value !== null && value !== undefined && value !== "") {
        params.set(key, value);
      }
    });

    router.push(`/products?${params ? params.toString() : ""}`);
  };

  // Handle price range change
  const handlePriceChange = (values) => {
    updateFilters({
      min_price: values[0],
      max_price: values[1],
    });
  };

  // Handle size filter change
  const handleSizeChange = (size) => {
    updateFilters({
      size,
    });
  };

  // Handle color filter change
  const handleColorChange = (color) => {
    updateFilters({
      color,
    });
  };

  // Handle availability filter change
  const handleAvailabilityChange = (availability) => {
    updateFilters({
      availability,
    });
  };

  // Handle brand filter change
  const handleBrandChange = (brandId, brandLabel) => {
    updateFilters({
      brands: [{ id: brandId, label: brandLabel }],
    });
  };

  // Handle sale filter change
  const handleSaleChange = () => {
    updateFilters({
      sale: true,
    });
  };

  // Reset all filters
  const handleResetFilters = () => {
    updateFilters({});
  };

  return (
    <div className="offcanvas offcanvas-start canvas-filter" id="filterShop">
      <div className="canvas-wrapper">
        <div className="canvas-header">
          <h5>Filters</h5>
          <span
            className="icon-close icon-close-popup"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="canvas-body">
          {/* Price Range Filter */}
          <div className="widget-facet facet-price">
            <h6 className="facet-title">Price</h6>
            <Slider range min={0} max={500} onChange={handlePriceChange} />
            <div className="box-price-product">
              <div className="box-price-item">
                <span className="title-price">Min price</span>
                <div className="price-val">$0</div>
              </div>
              <div className="box-price-item">
                <span className="title-price">Max price</span>
                <div className="price-val">$500</div>
              </div>
            </div>
          </div>

          {/* Size Filter */}
          <div className="widget-facet facet-size">
            <h6 className="facet-title">Size</h6>
            <div className="facet-size-box size-box">
              {["XS", "S", "M", "L", "XL", "2XL", "3XL", "Free Size"].map(
                (size) => (
                  <span
                    key={size}
                    className="size-item size-check"
                    onClick={() => handleSizeChange(size)}
                  >
                    {size}
                  </span>
                )
              )}
            </div>
          </div>

          {/* Color Filter */}
          <div className="widget-facet facet-color">
            <h6 className="facet-title">Colors</h6>
            <div className="facet-color-box">
              {[
                { value: "pink", label: "Pink", bg: "bg-light-pink-2" },
                { value: "red", label: "Red", bg: "bg-red" },
                { value: "beige", label: "Beige", bg: "bg-beige-2" },
                { value: "orange", label: "Orange", bg: "bg-orange-2" },
                { value: "green", label: "Green", bg: "bg-light-green" },
                { value: "black", label: "Black", bg: "bg-main" },
                { value: "white", label: "White", bg: "bg-white line-black" },
                { value: "purple", label: "Purple", bg: "bg-purple-3" },
                { value: "grey", label: "Grey", bg: "bg-grey" },
                {
                  value: "light-blue",
                  label: "Light Blue",
                  bg: "bg-light-blue-5",
                },
                { value: "dark-blue", label: "Dark Blue", bg: "bg-dark-blue" },
              ].map((color) => (
                <div
                  key={color.value}
                  className="color-item color-check"
                  onClick={() => handleColorChange(color.value)}
                >
                  <span className={`color ${color.bg}`} /> {color.label}
                </div>
              ))}
            </div>
          </div>

          {/* Availability Filter */}
          <div className="widget-facet facet-fieldset">
            <h6 className="facet-title">Availability</h6>
            <div className="box-fieldset-item">
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="inStock"
                  onChange={() => handleAvailabilityChange("inStock")}
                />
                In stock <span className="count-stock">(32)</span>
              </label>
              <label>
                <input
                  type="radio"
                  name="availability"
                  value="outStock"
                  onChange={() => handleAvailabilityChange("outStock")}
                />
                Out of stock <span className="count-stock">(2)</span>
              </label>
            </div>
          </div>

          {/* Brand Filter */}
          <div className="widget-facet facet-fieldset">
            <h6 className="facet-title">Brands</h6>
            <div className="box-fieldset-item">
              {[
                { id: "nike", label: "Nike", count: 112 },
                { id: "LV", label: "Louis Vuitton", count: 2 },
                { id: "hermes", label: "Hermes", count: 42 },
                { id: "gucci", label: "Gucci", count: 13 },
                { id: "zalando", label: "Zalando", count: 54 },
                { id: "adidas", label: "Adidas", count: 93 },
              ].map((brand) => (
                <label key={brand.id}>
                  <input
                    type="checkbox"
                    name="brand"
                    onChange={() => handleBrandChange(brand.id, brand.label)}
                  />
                  {brand.label}{" "}
                  <span className="count-brand">({brand.count})</span>
                </label>
              ))}
            </div>
          </div>
        </div>
        <div className="canvas-bottom">
          <button
            id="reset-filter"
            className="tf-btn btn-reset"
            onClick={handleResetFilters}
          >
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterShop;
