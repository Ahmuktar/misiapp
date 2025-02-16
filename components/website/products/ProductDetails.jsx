// "use client";
// import { useToast } from "@/hooks/use-toast";
// import useCartStore from "@/stores/cartStore";
// import { useAuth } from "@/stores/useAuth";
// import { ToastAction } from "@radix-ui/react-toast";
// import { useParams, useRouter } from "next/navigation";
// import React, { useEffect, useState } from "react";

// const ProductDetails = () => {
//   const params = useParams();
//   const productId = params.id;
//   const [product, setProduct] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [isPageLoading, setIsPageLoading] = useState(false);
//   const [selectedColor, setSelectedColor] = useState("");
//   const [selectedSize, setSelectedSize] = useState("");
//   const [quantity, setQuantity] = useState(1);
//   const { addItemToCart, fetchCart } = useCartStore(); // Get the addItemToCart function from the store
//   const { token } = useAuth(); // Get the token from the auth hook
//   const { toast } = useToast();
//   const router = useRouter(); // Get the router instance

//   useEffect(() => {
//     const fetchProduct = async () => {
//       setIsPageLoading(true);
//       try {
//         const response = await fetch(`${API_URL}/products/${productId}`);
//         const data = await response.json();
//         if (data.status === "success") {
//           setProduct(data.data);
//           setSelectedColor(data.data.available_colors.split(",")[0]); // Set default color
//           setSelectedSize(data.data.available_sizes.split(",")[0]); // Set default size
//         }
//       } catch (error) {
//         console.error("Error fetching product:", error);
//       } finally {
//         setIsPageLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [productId]);

//   const handleColorChange = (color) => {
//     setSelectedColor(color);
//   };

//   const handleSizeChange = (size) => {
//     setSelectedSize(size);
//   };

//   const handleQuantityChange = (e) => {
//     const value = Math.max(1, e.target.value); // Ensure quantity is at least 1
//     setQuantity(value);
//   };

//   const addToCart = async () => {
//     setIsLoading(true);
//     const cartData = {
//       product_id: product?.id,
//       quantity: quantity,
//       selected_color: selectedColor,
//       selected_size: selectedSize,
//     };

//     try {
//       const response = await fetch(`${API_URL}/cart`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // if needed
//         },
//         body: JSON.stringify(cartData),
//       });
//       setIsLoading(false);
//       fetchCart(token);

//       // if the error is due to unauthenticated user, redirect to login page
//       if (response.status === 401) {
//         router.push(
//           `/login?redirect=${encodeURIComponent(window.location.pathname)}`
//         ); // Redirect to login page if unauthorized
//         return;
//       }

//       if (!response.ok) {
//         throw new Error("Network response was not ok");
//       }

//       const result = await response.json();

//       console.log("Product added to cart:", result);
//       toast({
//         description: `${product?.name} has been added to your cart!`,
//       });
//     } catch (error) {
//       console.error("Error adding product to cart:", error);
//       toast({
//         variant: "destructive",
//         title: "Uh oh! Something went wrong.",
//         description: "Error adding product to cart",
//       });
//       setIsLoading(false);
//     }
//   };

//   const handleAddToCart = () => {
//     addToCart();
//   };

//   if (isPageLoading) {
//     return <div>Loading...</div>; // Loading state
//   }

//   if (!product) {
//     return <div>Product not found.</div>; // Handle case where product is not found
//   }

//   const {
//     name,
//     description,
//     original_price,
//     sale_price,
//     available_colors,
//     available_sizes,
//     images,
//   } = product;

//   return (
//     <>
//       <section className="flat-spacing">
//         <div className="tf-main-product section-image-zoom">
//           <div className="container">
//             <div className="row">
//               {/* Product default */}
//               <div className="col-md-6">
//                 <div className="tf-product-media-wrap sticky-top">
//                   <div className="thumbs-slider">
//                     <div className="swiper tf-product-media-thumbs">
//                       <div className="swiper-wrapper">
//                         {images.map((image) => (
//                           <div className="swiper-slide" key={image.id}>
//                             <div className="item">
//                               <img
//                                 className="ls-is-cached lazyloaded"
//                                 src={image.image_url}
//                                 alt={name}
//                               />
//                             </div>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                     <div className="swiper tf-product-media-main">
//                       <div className="swiper-wrapper">
//                         {images.map((image) => (
//                           <div className="swiper-slide" key={image.id}>
//                             <a
//                               href={image.image_url}
//                               target="_blank"
//                               className="item"
//                             >
//                               <img
//                                 className="tf-image-zoom ls-is-cached lazyloaded"
//                                 src={image.image_url}
//                                 alt={name}
//                               />
//                             </a>
//                           </div>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* /Product default */}
//               {/* tf-product-info-list */}
//               <div className="col-md-6">
//                 <div className="tf-product-info-wrap position-relative">
//                   <div className="tf-product-info-list other-image-zoom">
//                     <div className="tf-product-info-heading">
//                       <div className="tf-product-info-name">
//                         <div className="text text-btn-uppercase">
//                           {product.category}
//                         </div>
//                         <h3 className="name">{name}</h3>
//                         {/* <div className="sub">
//                           <div className="tf-product-info-rate">
//                             <div className="list-star">
//                               <i className="icon icon-star" />
//                               <i className="icon icon-star" />
//                               <i className="icon icon-star" />
//                               <i className="icon icon-star" />
//                               <i className="icon icon-star" />
//                             </div>
//                             <div className="text text-caption-1">
//                               (134 reviews)
//                             </div>
//                           </div>
//                         </div> */}
//                       </div>
//                       <div className="tf-product-info-desc">
//                         <div className="tf-product-info-price">
//                           <h5 className="price-on-sale font-2">
//                             ${sale_price}
//                           </h5>
//                           <div className="compare-at-price font-2">
//                             ${original_price}
//                           </div>
//                           <div className="badges-on-sale text-btn-uppercase">
//                             {(
//                               ((original_price - sale_price) / original_price) *
//                               100
//                             ).toFixed(0)}
//                             %
//                           </div>
//                         </div>
//                         <p>{description}</p>
//                       </div>
//                     </div>
//                     <div className="tf-product-info-choose-option">
//                       <div className="variant-picker-item">
//                         <div className="variant-picker-label mb_12">
//                           Colors:
//                           <span className="text-title variant-picker-label-value value-currentColor">
//                             {selectedColor}
//                           </span>
//                         </div>
//                         <div className="variant-picker-values">
//                           {available_colors.split(",").map((color, index) => (
//                             <label
//                               key={index}
//                               className="hover-tooltip tooltip-bot radius-60 color-btn"
//                             >
//                               <input
//                                 type="radio"
//                                 name="color"
//                                 value={color}
//                                 checked={selectedColor === color}
//                                 onChange={() => handleColorChange(color)}
//                               />
//                               <span
//                                 className={`btn-checkbox bg-color-${color.toLowerCase()}`}
//                               />
//                               <span className="tooltip">{color}</span>
//                             </label>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="variant-picker-item">
//                         <div className="d-flex justify-content-between mb_12">
//                           <div className="variant-picker-label">
//                             Size:
//                             <span className="text-title variant-picker-label-value">
//                               {selectedSize}
//                             </span>
//                           </div>
//                           <a
//                             href="#size-guide"
//                             data-bs-toggle="modal"
//                             className="size-guide text-title link"
//                           >
//                             Size Guide
//                           </a>
//                         </div>
//                         <div className="variant-picker-values gap12">
//                           {available_sizes.split(",").map((size, index) => (
//                             <label key={index} className="style-text size-btn">
//                               <input
//                                 type="radio"
//                                 name="size"
//                                 value={size}
//                                 checked={selectedSize === size}
//                                 onChange={() => handleSizeChange(size)}
//                               />
//                               <span className="text-title">{size}</span>
//                             </label>
//                           ))}
//                         </div>
//                       </div>
//                       <div className="tf-product-info-quantity">
//                         <div className="title mb_12">Quantity:</div>
//                         <div className="wg-quantity">
//                           <span
//                             className="btn-quantity btn-decrease"
//                             onClick={() =>
//                               setQuantity(Math.max(1, quantity - 1))
//                             }
//                           >
//                             -
//                           </span>
//                           <input
//                             className="quantity-product"
//                             type="number"
//                             name="number"
//                             value={quantity}
//                             onChange={handleQuantityChange}
//                           />
//                           <span
//                             className="btn-quantity btn-increase"
//                             onClick={() => setQuantity(quantity + 1)}
//                           >
//                             +
//                           </span>
//                         </div>
//                       </div>
//                       <div>
//                         <div className="tf-product-info-by-btn mb_10">
//                           <button
//                             onClick={handleAddToCart}
//                             className="btn-style-2 flex-grow-1 text-btn-uppercase fw-6 btn-add-to-cart"
//                           >
//                             <span>
//                               {isLoading ? "Adding.." : "Add to cart"} -&nbsp;
//                             </span>
//                             <span className="tf-qty-price total-price">
//                               ₦{parseFloat(sale_price * quantity).toFixed(2)}
//                             </span>
//                           </button>
//                           {/* <a
//                             href="#compare"
//                             data-bs-toggle="offcanvas"
//                             aria-controls="compare"
//                             className="box-icon hover-tooltip compare btn-icon-action"
//                           >
//                             <span className="icon icon-gitDiff" />
//                             <span className="tooltip text-caption-2">
//                               Compare
//                             </span>
//                           </a>
//                           <a
//                             href="javascript:void(0);"
//                             className="box-icon hover-tooltip text-caption-2 wishlist btn-icon-action"
//                           >
//                             <span className="icon icon-heart" />
//                             <span className="tooltip text-caption-2">
//                               Wishlist
//                             </span>
//                           </a> */}
//                         </div>
//                         {/* <a href="#" className="btn-style-3 text-btn-uppercase">
//                           Buy it now
//                         </a> */}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               {/* /tf-product-info-list */}
//             </div>
//           </div>
//         </div>
//         {/* <div className="tf-sticky-btn-atc">
//           <div className="container">
//             <div className="row">
//               <div className="col-12">
//                 <form className="form-sticky-atc">
//                   <div className="tf-sticky-atc-product">
//                     <div className="image">
//                       <img
//                         className="ls-is-cached lazyloaded"
//                         src={images[0].image_url}
//                         alt={name}
//                       />
//                     </div>
//                     <div className="content">
//                       <div className="text-title">{name}</div>
//                       <div className="text-caption-1 text-secondary-2">
//                         {selectedColor}, {selectedSize}
//                       </div>
//                       <div className="text-title">${sale_price}</div>
//                     </div>
//                   </div>
//                   <div className="tf-sticky-atc-infos">
//                     <div className="tf-sticky-atc-size d-flex gap-12 align-items-center">
//                       <div className="tf-sticky-atc-infos-title text-title">
//                         Size:
//                       </div>
//                       <div
//                         className="tf-dropdown-sort style-2"
//                         data-bs-toggle="dropdown"
//                       >
//                         <div className="btn-select">
//                           <span className="text-sort-value font-2">
//                             {selectedSize}
//                           </span>
//                           <span className="icon icon-arrow-down" />
//                         </div>
//                         <div className="dropdown-menu">
//                           {available_sizes.split(",").map((size, index) => (
//                             <div className="select-item" key={index}>
//                               <span
//                                 className="text-value-item"
//                                 onClick={() => handleSizeChange(size)}
//                               >
//                                 {size}
//                               </span>
//                             </div>
//                           ))}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="tf-sticky-atc-quantity d-flex gap-12 align-items-center">
//                       <div className="tf-sticky-atc-infos-title text-title">
//                         Quantity:
//                       </div>
//                       <div className="wg-quantity style-1">
//                         <span
//                           className="btn-quantity minus-btn"
//                           onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                         >
//                           -
//                         </span>
//                         <input
//                           type="number"
//                           name="number"
//                           value={quantity}
//                           onChange={handleQuantityChange}
//                         />
//                         <span
//                           className="btn-quantity plus-btn"
//                           onClick={() => setQuantity(quantity + 1)}
//                         >
//                           +
//                         </span>
//                       </div>
//                     </div>
//                     <div className="tf-sticky-atc-btns">
//                       <button
//                         onClick={handleAddToCart}
//                         className="tf-btn w-100 btn-reset radius-4 btn-add-to-cart"
//                       >
//                         <span className="text text-btn-uppercase">
//                           Add To Cart
//                         </span>
//                       </button>
//                     </div>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div> */}
//       </section>
//     </>
//   );
// };

// export default ProductDetails;
