import ProductListCard from "@/components/website/products/ProductList";
import Link from "next/link";
import React, { Suspense } from "react";

const ProductPage = () => {
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
        <Suspense>
          <ProductListCard />
        </Suspense>
      </section>
    </>
  );
};

export default ProductPage;
