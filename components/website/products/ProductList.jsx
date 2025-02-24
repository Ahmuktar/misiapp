"use client";
import React, { Suspense, useEffect, useState, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ProductCard from "@/components/website/products/ProductCard";
import EmptyProduct from "@/components/website/EmptyProduct";
import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";
import FilterShop from "@/components/website/modals/FilterShop";

const fetchAllProducts = async (filters) => {
  try {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, item));
      } else if (value !== null && value !== undefined) {
        params.append(key, value);
      }
    });

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }

    const data = await response.json();
    if (data?.status === "success" && Array.isArray(data.data?.products)) {
      return data;
    } else {
      throw new Error("Invalid response structure");
    }
  } catch (error) {
    console.error("Error fetching products:", error.message);
    return {
      status: "error",
      message: error.message,
      data: { products: [], pagination: { total_pages: 1 } },
    };
  }
};

const FilterControl = React.memo(({ onSortChange }) => {
  const handleSortChange = useCallback(
    (event) => {
      const sortValue = event.target.getAttribute("data-sort-value");
      onSortChange(sortValue);
    },
    [onSortChange]
  );

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
            {[
              "best-selling",
              "a-z",
              "z-a",
              "price-low-high",
              "price-high-low",
            ].map((sortValue) => (
              <div
                key={sortValue}
                className="select-item"
                data-sort-value={sortValue}
                onClick={handleSortChange}
              >
                <span className="text-value-item">
                  {sortValue
                    .replace(/-/g, " ")
                    .replace(/\b\w/g, (l) => l.toUpperCase())}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
});

const ProductCards = React.memo(({ products }) => {
  return (
    <div className="wrapper-shop tf-grid-layout tf-col-5" id="gridLayout">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
});

const ProductListCard = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sort, setSort] = useState("best-selling");
  const [filters, setFilters] = useState({
    category: null,
    min_price: 0,
    max_price: 500,
    size: [],
    color: [],
    availability: null,
    brands: [],
    sale: false,
    page: 1,
    limit: 10,
  });

  const searchParams = useSearchParams();
  const router = useRouter();

  // Update URL and fetch products when filters change
  useEffect(() => {
    const params = new URLSearchParams();
    Object.entries(filters).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item) => params.append(key, item));
      } else if (value !== null && value !== undefined) {
        params.set(key, value);
      }
    });

    router.push(`/products?${params.toString()}`);
  }, [filters, router]);

  // Fetch products when filters or page change
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(false);
      try {
        const data = await fetchAllProducts(filters);
        if (data.status === "success") {
          setProducts(data.data.products || []);
          setTotalPages(data.data?.pagination.total_pages || 1);
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters, page]);

  const handleFilterChange = useCallback((newFilters) => {
    setFilters((prevFilters) => ({ ...prevFilters, ...newFilters }));
  }, []);

  const handleResetFilters = useCallback(() => {
    setFilters({
      category: null,
      min_price: 0,
      max_price: 500,
      size: [],
      color: [],
      availability: null,
      brands: [],
      sale: false,
      page: 1,
      limit: 10,
    });
  }, []);

  const handleSortChange = useCallback((newSort) => {
    setSort(newSort);
  }, []);

  const handlePageChange = useCallback(
    (newPage) => {
      if (newPage >= 1 && newPage <= totalPages) {
        setPage(newPage);
      }
    },
    [totalPages]
  );

  return (
    <div className="container">
      <FilterControl onSortChange={handleSortChange} />
      <FilterShop
        filters={filters}
        onFilterChange={handleFilterChange}
        onResetFilters={handleResetFilters}
      />

      {error ? (
        <EmptyProduct />
      ) : loading ? (
        <ProductCardSkeleton />
      ) : products.length === 0 ? (
        <EmptyProduct />
      ) : (
        <Suspense fallback={<ProductCardSkeleton />}>
          <ProductCards products={products} />
        </Suspense>
      )}

      <ul className="wg-pagination justify-content-center mt-10">
        <li>
          <button
            className="pagination-item text-button"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <i className="icon-arrLeft" />
          </button>
        </li>
        {Array.from({ length: totalPages }, (_, index) => (
          <li key={index + 1} className={page === index + 1 ? "active" : ""}>
            <button
              className="pagination-item text-button"
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          </li>
        ))}
        <li>
          <button
            className="pagination-item text-button"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === totalPages}
          >
            <i className="icon-arrRight" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ProductListCard;
