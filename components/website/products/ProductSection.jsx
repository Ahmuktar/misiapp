"use client";
import { Box } from "lucide-react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";
import { fetchProducts } from "@/utils/api";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();
      setProducts(products.data.products);
      setLoading(false);
    };

    getProducts();
  }, []);

  // if (loading) {
  //   return (
  //     <div className="flex min-h-[400px] items-center justify-center">
  //       <p>Loading products...</p>
  //     </div>
  //   );
  // }

  return (
    <section>
      <div className="container">
        <div
          className="heading-section text-center wow fadeInUp"
          style={{ visibility: "visible", animationName: "fadeInUp" }}
        >
          <h3 className="heading">Today's Top Picks</h3>
          <p className="subheading text-secondary">
            Fresh styles just in! Elevate your look.
          </p>
        </div>
        {products.length < 1 ? (
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
              <Box className="w-10 h-10 text-primary" />
            </div>
            <h3>No products found.</h3>
          </div>
        ) : (
          <div
            dir="ltr"
            className="swiper tf-sw-latest swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden"
            data-preview={4}
            data-tablet={3}
            data-mobile={2}
            data-space-lg={30}
            data-space-md={30}
            data-space={15}
            data-pagination={1}
            data-pagination-md={1}
            data-pagination-lg={1}
          >
            <div
              className="swiper-wrapper"
              aria-live="polite"
              style={{
                transform: "translate3d(0px, 0px, 0px)",
                transitionDuration: "0ms",
              }}
            >
              {products &&
                products.map((product) => (
                  <ProductCard key={product.id} product={product} /> // Assuming product has a unique 'id'
                ))}
            </div>
            <div className="sw-pagination-latest sw-dots type-circle justify-content-center swiper-pagination-clickable swiper-pagination-bullets swiper-pagination-horizontal">
              {/* Pagination bullets can be dynamically generated based on the number of products */}
              {Array.from({ length: Math.ceil(products.length / 4) }).map(
                (_, index) => (
                  <span
                    key={index}
                    className={`swiper-pagination-bullet ${
                      index === 0 ? "swiper-pagination-bullet-active" : ""
                    }`}
                    tabIndex={0}
                    role="button"
                    aria-label={`Go to slide ${index + 1}`}
                    aria-current={index === 0 ? "true" : "false"}
                  />
                )
              )}
            </div>
            <span
              className="swiper-notification"
              aria-live="assertive"
              aria-atomic="true"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;
