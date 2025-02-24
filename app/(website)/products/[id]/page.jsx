import NotFound from "@/app/not-found";
import ProductDetailsSkeleton from "@/components/skeleton/ProductDetailsSkeleton";
import ProductMediaSkeleton from "@/components/skeleton/ProductMediaSkeleton";
import ProductDetails from "@/components/website/products/ProductDetails";
import ProductMedia from "@/components/website/products/ProductMedia";
import React, { Suspense } from "react";

const fetchProduct = async (productId) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${productId}`
    );
    const data = await response.json();
    if (data.status === "success") {
      return data.data;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
  }
};

const ProductDetailsPage = async (props) => {
  const { id } = await props.params;
  const product = await fetchProduct(id);

  if (!product) {
    return NotFound();
  }

  return (
    <section className="flat-spacing">
      <div className="tf-main-product section-image-zoom">
        <div className="container">
          <div className="row">
            {/* Product Media */}
            <div className="col-md-6">
              {/* <Suspense fallback={<ProductMediaSkeleton />}> */}
              <ProductMedia product={product?.images} />
              {/* </Suspense> */}
            </div>
            {/* Product Details */}
            <div className="col-md-6">
              {/* <Suspense fallback={<ProductDetailsSkeleton />}> */}
              <ProductDetails product={product} />
              {/* </Suspense> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
