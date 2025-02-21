"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { DataTable } from "simple-datatables";

export default function ProductTable({ products }) {
  const tableRef = useRef();

  useEffect(() => {
    if (tableRef.current) {
      const dataTable = new DataTable(tableRef.current, {
        searchable: true,
        perPage: 10,
        ordering: false,
        sortable: false,
      });

      return () => {
        dataTable.destroy();
      };
    }
  }, [tableRef]); // Updated dependency

  return (
    <div>
      <Link
        href="/add-edit-product"
        className="inline-block mb-4 text-sm px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        New Product
      </Link>
      <div className="overflow-x-auto bg-white p-2">
        <table ref={tableRef} className="min-w-full bg-white">
          <thead className="bg-gray-200">
            <tr>
              <th className="py-2 px-4 text-left">Image</th>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Colors</th>
              <th className="py-2 px-4 text-left">Sizes</th>
              <th className="py-2 px-4 text-left">Stock</th>
              <th className="py-2 px-4 text-left"></th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((product) => (
                <tr key={product.id}>
                  <td>
                    <div className="relative w-16 h-16">
                      <img
                        src={product.images[0] || "/placeholder.svg"}
                        alt={product.name}
                        layout="fill"
                        objectFit="cover"
                        className="rounded"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-sm text-gray-600">
                      {product.description}
                    </div>
                  </td>
                  <td>{product.category}</td>
                  <td>
                    {product.original_price !== product.sale_price ? (
                      <div>
                        <span className="font-bold text-red-600">
                          ${product.sale_price}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ${product.original_price}
                        </span>
                      </div>
                    ) : (
                      <span className="font-bold">
                        ${product.original_price}
                      </span>
                    )}
                  </td>
                  <td>{product.available_colors}</td>
                  <td>{product.available_sizes}</td>
                  <td>{product.stock_quantity}</td>
                  <td>
                    <Link
                      href={`/add-edit-product?id=${product.id}`}
                      className="text-blue-500 hover:underline"
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
