"use client";
import ProductTable from "@/components/admin/ProductTable";
import { getProducts } from "@/actions/product.action";
import { useState, useEffect } from "react";
import "./productTable.css";

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    current_page: 1,
    per_page: 10,
    total: 0,
    total_pages: 0,
  });

  useEffect(() => {
    async function fetchProducts() {
      const data = await getProducts(
        pagination.current_page,
        pagination.per_page
      );
      console.log(data.products);
      console.log(data.pagination);
      // setProducts(data.products);
      // setPagination(data.pagination);
    }
    fetchProducts();
  }, [pagination.current_page]);

  const handlePageChange = (newPage) => {
    setPagination((prev) => ({ ...prev, current_page: newPage }));
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-xl lg:text-3xl font-bold mb-4">Products</h1>
      <ProductTable products={products} />
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange(pagination?.current_page - 1)}
          disabled={pagination?.current_page === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span>
          Page {pagination?.current_page} of {pagination.total_pages}
        </span>
        <button
          onClick={() => handlePageChange(pagination?.current_page + 1)}
          disabled={pagination?.current_page === pagination.total_pages}
          className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}
