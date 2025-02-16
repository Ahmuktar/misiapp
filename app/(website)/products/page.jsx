"use client";
import { fetchAllProducts } from "@/utils/api";
import ProductCard from "@/components/website/products/ProductCard";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      const filter = {
        page,
        limit: 1,
      };
      const data = await fetchAllProducts(filter); // Pass the current page to the API
      setTotalPages(data.data?.pagination.total_pages || 1);
      setProducts(data.data.products || []);
    };
    getProducts();
  }, [page]);

  useEffect(() => {
    const queryPage = parseInt(router.query?.page) || 1;
    setPage(queryPage);
  }, [router.query?.page]);

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > totalPages) return; // Prevent invalid page numbers
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: newPage },
    });
  };

  return (
    <>
      {/* page-title */}
      <div
        className="page-title"
        style={{
          backgroundImage: "url(/assets/images/misi/MISI 3.jpg)",
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
      {/* /page-title */}

      <section className="flat-spacing">
        <div className="container">
          <div
            dir="ltr"
            className="swiper tf-sw-categories swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
            data-preview={6}
            data-tablet={4}
            data-mobile-sm={3}
            data-mobile={2}
            data-space-lg={20}
            data-space-md={20}
            data-space={15}
            data-pagination={2}
            data-pagination-md={2}
            data-pagination-lg={1}
          >
            <div
              className="swiper-wrapper"
              id="swiper-wrapper-41b264a82aa29a87"
              aria-live="polite"
              style={{ transform: "translate3d(0px, 0px, 0px)" }}
            >
              {/* item 1 */}
              <div
                className="swiper-slide swiper-slide-active"
                role="group"
                aria-label="1 / 6"
                style={{ width: "231.75px", marginRight: 20 }}
              >
                <div className="collection-circle hover-img">
                  <a href="#" className="img-style">
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="/assets/images/collections/collection-circle/cls-circle1.jpg"
                      src="/assets/images/collections/collection-circle/cls-circle1.jpg"
                      alt="collection-img"
                    />
                  </a>
                  <div className="collection-content text-center">
                    <a href="shop-collection.html" className="cls-title">
                      <h6 className="text">New in</h6>
                    </a>
                  </div>
                </div>
              </div>
              {/* item 2 */}
              <div
                className="swiper-slide swiper-slide-next"
                role="group"
                aria-label="2 / 6"
                style={{ width: "231.75px", marginRight: 20 }}
              >
                <div className="collection-circle hover-img">
                  <a href="#" className="img-style">
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="/assets/images/collections/collection-circle/cls-circle2.jpg"
                      src="/assets/images/collections/collection-circle/cls-circle2.jpg"
                      alt="collection-img"
                    />
                  </a>
                  <div className="collection-content text-center">
                    <a href="shop-collection.html" className="cls-title">
                      <h6 className="text">Promotion</h6>
                    </a>
                  </div>
                </div>
              </div>
              {/* item 3 */}
              <div
                className="swiper-slide"
                role="group"
                aria-label="3 / 6"
                style={{ width: "231.75px", marginRight: 20 }}
              >
                <div className="collection-circle hover-img">
                  <a href="#" className="img-style">
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="/assets/images/collections/collection-circle/cls-circle3.jpg"
                      src="/assets/images/collections/collection-circle/cls-circle3.jpg"
                      alt="collection-img"
                    />
                  </a>
                  <div className="collection-content text-center">
                    <a href="shop-collection.html" className="cls-title">
                      <h6 className="text">Clothing</h6>
                    </a>
                  </div>
                </div>
              </div>
              {/* item 4 */}
              <div
                className="swiper-slide"
                role="group"
                aria-label="4 / 6"
                style={{ width: "231.75px", marginRight: 20 }}
              >
                <div className="collection-circle hover-img">
                  <a href="#" className="img-style">
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="/assets/images/collections/collection-circle/cls-circle4.jpg"
                      src="/assets/images/collections/collection-circle/cls-circle4.jpg"
                      alt="collection-img"
                    />
                  </a>
                  <div className="collection-content text-center">
                    <a href="shop-collection.html" className="cls-title">
                      <h6 className="text">Shoes</h6>
                    </a>
                  </div>
                </div>
              </div>
              {/* item 5 */}
              <div
                className="swiper-slide"
                role="group"
                aria-label="5 / 6"
                style={{ width: "231.75px", marginRight: 20 }}
              >
                <div className="collection-circle hover-img">
                  <a href="#" className="img-style">
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="/assets/images/collections/collection-circle/cls-circle5.jpg"
                      src="/assets/images/collections/collection-circle/cls-circle5.jpg"
                      alt="collection-img"
                    />
                  </a>
                  <div className="collection-content text-center">
                    <a href="shop-collection.html" className="cls-title">
                      <h6 className="text">Bags</h6>
                    </a>
                  </div>
                </div>
              </div>
              {/* item 6 */}
              <div
                className="swiper-slide"
                role="group"
                aria-label="6 / 6"
                style={{ width: "231.75px", marginRight: 20 }}
              >
                <div className="collection-circle hover-img">
                  <a href="#" className="img-style">
                    <img
                      className=" ls-is-cached lazyloaded"
                      data-src="/assets/images/collections/collection-circle/cls-accesories.jpg"
                      src="/assets/images/collections/collection-circle/cls-accesories.jpg"
                      alt="collection-img"
                    />
                  </a>
                  <div className="collection-content text-center">
                    <a href="shop-collection.html" className="cls-title">
                      <h6 className="text">Accessories</h6>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="sw-pagination-categories sw-dots type-circle justify-content-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              <span
                className="swiper-pagination-bullet swiper-pagination-bullet-active"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 1"
                aria-current="true"
              />
              <span
                className="swiper-pagination-bullet"
                tabIndex={0}
                role="button"
                aria-label="Go to slide 2"
              />
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        </div>
      </section>

      <section className="flat-spacing">
        <div className="container">
          <div className="wrapper-shop tf-grid-layout tf-col-5" id="gridLayout">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
            {/* pagination */}
            <ul className="wg-pagination justify-content-center">
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
        </div>
      </section>
    </>
  );
};

export default ProductPage;
