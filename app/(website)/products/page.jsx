"use client";
import { fetchAllProducts } from "@/utils/api";
import ProductCard from "@/components/website/products/ProductCard";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import EmptyProduct from "@/components/website/EmptyProduct";
import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";
import ProductList from "@/components/website/products/ProductList";
import FilterShop from "@/components/website/modals/FilterShop";

const FilterControl = ({ onSortChange }) => {
  const handleSortChange = (event) => {
    const sortValue = event.target.getAttribute("data-sort-value");
    onSortChange(sortValue);
  };

  return (
    <div className="tf-shop-control">
      <div className="tf-control-filter">
        <a
          href="#filterShop"
          data-bs-toggle="offcanvas"
          aria-controls="filterShop"
          className="tf-btn-filter"
        >
          <span className="icon icon-filter" />
          <span className="text">Filters</span>
        </a>
        <div className="d-none d-lg-flex shop-sale-text">
          <i className="icon icon-checkCircle" />
          <p className="text-caption-1">Shop sale items only</p>
        </div>
      </div>

      <div className="tf-control-sorting">
        <p className="d-none d-lg-block text-caption-1">Sort by:</p>
        <div className="tf-dropdown-sort" data-bs-toggle="dropdown">
          <div className="btn-select">
            <span className="text-sort-value">Best selling</span>
            <span className="icon icon-arrow-down" />
          </div>
          <div className="dropdown-menu">
            <div
              className="select-item"
              data-sort-value="best-selling"
              onClick={handleSortChange}
            >
              <span className="text-value-item">Best selling</span>
            </div>
            <div
              className="select-item"
              data-sort-value="a-z"
              onClick={handleSortChange}
            >
              <span className="text-value-item">Alphabetically, A-Z</span>
            </div>
            <div
              className="select-item"
              data-sort-value="z-a"
              onClick={handleSortChange}
            >
              <span className="text-value-item">Alphabetically, Z-A</span>
            </div>
            <div
              className="select-item"
              data-sort-value="price-low-high"
              onClick={handleSortChange}
            >
              <span className="text-value-item">Price, low to high</span>
            </div>
            <div
              className="select-item"
              data-sort-value="price-high-low"
              onClick={handleSortChange}
            >
              <span className="text-value-item">Price, high to low</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const [sort, setSort] = useState("best-selling");

  const searchParams = useSearchParams();
  const getFiltersFromURL = () => {
    const categories = searchParams.get("categories") || [];
    const priceRange = [
      parseInt(searchParams.get("min_price")) || 0,
      parseInt(searchParams.get("maxrice")) || 500,
    ];
    const sizes = searchParams.get("sizes") || [];
    const colors = searchParams.get("colors") || [];
    const availability = searchParams.get("availability") || null;
    const brands = searchParams.get("brands") || [];

    return {
      categories,
      priceRange,
      sizes,
      colors,
      availability,
      brands,
      page,
      limit: 10,
    };
  };

  useEffect(() => {
    setLoading(true);
    const filters = getFiltersFromURL();
    console.log(filters);
    const getProducts = async () => {
      const data = await fetchAllProducts(filters);
      setTotalPages(data.data?.pagination.total_pages || 1);
      setProducts(data.data.products || []);
      setLoading(false);
    };
    getProducts();
  }, [page, searchParams]);

  const handleSortChange = (newSort) => {
    setSort(newSort);
  };

  return (
    <>
      <div
        className="page-title"
        style={{
          backgroundImage: "url(/assets/images/misi/bags-banner.webp)",
        }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Products</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href="/">
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Products</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="flat-spacing">
        <div className="container">
          <FilterControl onSortChange={handleSortChange} />
          <FilterShop />
          {error ? (
            <EmptyProduct />
          ) : loading ? (
            <ProductCardSkeleton />
          ) : products.length === 0 ? (
            <EmptyProduct />
          ) : (
            <Suspense fallback={<ProductCardSkeleton />}>
              <ProductList products={products} />
            </Suspense>
          )}
          <ul className="wg-pagination justify-content-center mt-10">
            <li>
              <a
                href="#"
                className="pagination-item text-button"
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
              >
                <i className="icon-arrLeft" />
              </a>
            </li>
            {Array.from({ length: totalPages }, (_, index) => (
              <li
                key={index + 1}
                className={page === index + 1 ? "active" : ""}
              >
                <a
                  href="#"
                  className="pagination-item text-button"
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="pagination-item text-button"
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
              >
                <i className="icon-arrRight" />
              </a>
            </li>
          </ul>
        </div>
      </section>

      {/* <FilterShop /> */}
    </>
  );
};

export default ProductPage;
