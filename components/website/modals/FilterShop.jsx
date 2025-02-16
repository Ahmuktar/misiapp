import React from "react";

const FilterShop = () => {
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
          <div className="widget-facet facet-categories">
            <h6 className="facet-title">Product Categories</h6>
            <ul className="facet-content">
              <li>
                <a href="#" className="categories-item">
                  Bags <span className="count-cate">(112)</span>
                </a>
              </li>
              <li>
                <a href="#" className="categories-item">
                  Booking <span className="count-cate">(32)</span>{" "}
                </a>
              </li>
              <li>
                <a href="#" className="categories-item">
                  Clothing <span className="count-cate">(42)</span>
                </a>
              </li>
              <li>
                <a href="#" className="categories-item active">
                  Women <span className="count-cate">(65)</span>
                </a>
              </li>
              <li>
                <a href="#" className="categories-item">
                  Men <span className="count-cate">(13)</span>
                </a>
              </li>
              <li>
                <a href="#" className="categories-item">
                  Shoes <span className="count-cate">(52)</span>
                </a>
              </li>
              <li>
                <a href="#" className="categories-item">
                  Uncategorized <span className="count-cate">(14)</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="widget-facet facet-price">
            <h6 className="facet-title">Price</h6>
            {/* <div
              className="price-val-range noUi-target noUi-ltr noUi-horizontal"
              id="price-value-range"
              data-min={0}
              data-max={500}
            >
              <div className="noUi-base">
                <div className="noUi-connects">
                  <div
                    className="noUi-connect"
                    style={{ transform: "translate(0%, 0px) scale(1, 1)" }}
                  />
                </div>
                <div
                  className="noUi-origin"
                  style={{ transform: "translate(-100%, 0px)", zIndex: 5 }}
                >
                  <div
                    className="noUi-handle noUi-handle-lower"
                    data-handle={0}
                    tabIndex={0}
                    role="slider"
                    aria-orientation="horizontal"
                    aria-valuemin={0.0}
                    aria-valuemax={500.0}
                    aria-valuenow={0.0}
                    aria-valuetext={0}
                  />
                </div>
                <div
                  className="noUi-origin"
                  style={{ transform: "translate(0%, 0px)", zIndex: 4 }}
                >
                  <div
                    className="noUi-handle noUi-handle-upper"
                    data-handle={1}
                    tabIndex={0}
                    role="slider"
                    aria-orientation="horizontal"
                    aria-valuemin={0.0}
                    aria-valuemax={500.0}
                    aria-valuenow={500.0}
                    aria-valuetext={500}
                  />
                </div>
              </div>
            </div> */}
            <div className="box-price-product">
              <div className="box-price-item">
                <span className="title-price">Min price</span>
                <div
                  className="price-val"
                  id="price-min-value"
                  data-currency="$"
                >
                  0
                </div>
              </div>
              <div className="box-price-item">
                <span className="title-price">Max price</span>
                <div
                  className="price-val"
                  id="price-max-value"
                  data-currency="$"
                >
                  500
                </div>
              </div>
            </div>
          </div>
          <div className="widget-facet facet-size">
            <h6 className="facet-title">Size</h6>
            <div className="facet-size-box size-box">
              <span className="size-item size-check">XS</span>
              <span className="size-item size-check">S</span>
              <span className="size-item size-check">M</span>
              <span className="size-item size-check">L</span>
              <span className="size-item size-check">XL</span>
              <span className="size-item size-check">2XL</span>
              <span className="size-item size-check">3XL</span>
              <span className="size-item size-check free-size">Free Size</span>
            </div>
          </div>
          <div className="widget-facet facet-color">
            <h6 className="facet-title">Colors</h6>
            <div className="facet-color-box">
              <div className="color-item color-check">
                <span className="color bg-light-pink-2" />
                Pink
              </div>
              <div className="color-item color-check">
                <span className="color bg-red" /> Red
              </div>
              <div className="color-item color-check">
                <span className="color bg-beige-2" />
                Beige
              </div>
              <div className="color-item color-check">
                <span className="color bg-orange-2" />
                Orange
              </div>
              <div className="color-item color-check">
                <span className="color bg-light-green" />
                Green
              </div>
              <div className="color-item color-check">
                <span className="color bg-main" />
                Black
              </div>
              <div className="color-item color-check">
                <span className="color bg-white line-black" />
                White
              </div>
              <div className="color-item color-check">
                <span className="color bg-purple-3" />
                Purple
              </div>
              <div className="color-item color-check">
                <span className="color bg-grey" />
                Grey
              </div>
              <div className="color-item color-check">
                <span className="color bg-light-blue-5" />
                Light Blue
              </div>
              <div className="color-item color-check">
                <span className="color bg-dark-blue" />
                Dark Blue
              </div>
            </div>
          </div>
          <div className="widget-facet facet-fieldset">
            <h6 className="facet-title">Availability</h6>
            <div className="box-fieldset-item">
              <fieldset className="fieldset-item">
                <input
                  type="radio"
                  name="availability"
                  className="tf-check"
                  id="inStock"
                />
                <label htmlFor="inStock">
                  In stock <span className="count-stock">(32)</span>
                </label>
              </fieldset>
              <fieldset className="fieldset-item">
                <input
                  type="radio"
                  name="availability"
                  className="tf-check"
                  id="outStock"
                />
                <label htmlFor="outStock">
                  Out of stock <span className="count-stock">(2)</span>
                </label>
              </fieldset>
            </div>
          </div>
          <div className="widget-facet facet-fieldset">
            <h6 className="facet-title">Brands</h6>
            <div className="box-fieldset-item">
              <fieldset className="fieldset-item">
                <input
                  type="checkbox"
                  name="brand"
                  className="tf-check"
                  id="nike"
                />
                <label htmlFor="nike">
                  Nike <span className="count-brand">(112)</span>
                </label>
              </fieldset>
              <fieldset className="fieldset-item">
                <input
                  type="checkbox"
                  name="brand"
                  className="tf-check"
                  id="LV"
                />
                <label htmlFor="LV">
                  Louis Vuitton <span className="count-brand">(2)</span>
                </label>
              </fieldset>
              <fieldset className="fieldset-item">
                <input
                  type="checkbox"
                  name="brand"
                  className="tf-check"
                  id="hermes"
                />
                <label htmlFor="hermes">
                  Hermes <span className="count-brand">(42)</span>
                </label>
              </fieldset>
              <fieldset className="fieldset-item">
                <input
                  type="checkbox"
                  name="brand"
                  className="tf-check"
                  id="gucci"
                />
                <label htmlFor="gucci">
                  Gucci <span className="count-brand">(13)</span>
                </label>
              </fieldset>
              <fieldset className="fieldset-item">
                <input
                  type="checkbox"
                  name="brand"
                  className="tf-check"
                  id="zalando"
                />
                <label htmlFor="zalando">
                  Zalando <span className="count-brand">(54)</span>
                </label>
              </fieldset>
              <fieldset className="fieldset-item">
                <input
                  type="checkbox"
                  name="brand"
                  className="tf-check"
                  id="adidas"
                />
                <label htmlFor="adidas">
                  Adidas <span className="count-brand">(93)</span>
                </label>
              </fieldset>
            </div>
          </div>
        </div>
        <div className="canvas-bottom">
          <button id="reset-filter" className="tf-btn btn-reset">
            Reset Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterShop;
