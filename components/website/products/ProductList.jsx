import React from "react";
import ProductCard from "./ProductCard";

const ProductList = React.memo(({ products }) => {
  return (
    <div className="wrapper-shop tf-grid-layout tf-col-5" id="gridLayout">
      {/* <div className="meta-filter-shop" style={{}}>
        <div id="product-count-grid" className="count-text">
          <span className="count">3</span> Products Found
        </div>
        <div id="product-count-list" className="count-text">
          <span className="count">0</span> Products Found
        </div>
        <div id="applied-filters">
          <span className="filter-tag">
            XS <span className="remove-tag icon-close" data-filter="size" />
          </span>
          <span className="filter-tag">
            $0 - $360{" "}
            <span className="remove-tag icon-close" data-filter="price" />
          </span>
        </div>
        <button
          id="remove-all"
          className="remove-all-filters text-btn-uppercase"
          style={{}}
        >
          REMOVE ALL <i className="icon icon-close" />
        </button>
      </div> */}

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
});

export default ProductList;
