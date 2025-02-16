"use client";
import { API_URL } from "@/constant";
import { useToast } from "@/hooks/use-toast";
import useCartStore from "@/stores/cartStore";
import { useAuth } from "@/stores/useAuth";
import { File } from "lucide-react";
import React, { useEffect, useState } from "react";

const CartItem = ({ cart, handleRemoveItem, isRemoving }) => {
  return (
    <div className="tf-mini-cart-item file-delete">
      <div className="tf-mini-cart-image">
        <img
          className="lazyload"
          src={cart?.product?.image_url}
          alt={cart?.product?.name}
        />
      </div>
      <div className="tf-mini-cart-info flex-grow-1">
        <div className="mb_12 d-flex align-items-center justify-content-between flex-wrap gap-12">
          <div className="text-title">
            <a
              href={`/products/${cart?.product?.productId}`}
              className="link text-line-clamp-1"
            >
              {cart?.product?.name}
            </a>
          </div>
          <div
            className="text-button tf-btn-remove remove"
            onClick={() => handleRemoveItem(cart?.id)} // Call with cart id
            disabled={isRemoving} // Disable button if removing
          >
            {isRemoving ? "Removing..." : "Remove"}
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-between flex-wrap gap-12">
          <div className="text-secondary-2">
            {cart?.selected_size}/{cart?.selected_color}
          </div>
          <div className="text-button">
            {cart?.quantity} X ₦{cart?.product?.sale_price}
          </div>
        </div>
      </div>
    </div>
  );
};

const ShoppingCart = () => {
  const { token, isLoggedIn } = useAuth(); // Get login status from useAuth
  const [isLoading, setIsLoading] = useState(false);
  const [removingItemId, setRemovingItemId] = useState(null); // Track which item is being removed
  const [isTermsChecked, setIsTermsChecked] = useState(false); // Track terms checkbox state
  const { fetchCart, cartItems } = useCartStore(); // Fetch cart from store
  const { toast } = useToast();
  useEffect(() => {
    if (isLoggedIn) {
      fetchCart(token); // Fetch cart only if user is logged in
    }
  }, []);

  const handleRemoveItem = async (id) => {
    setRemovingItemId(id); // Set the item being removed
    setIsLoading(true); // Set loading state
    try {
      const response = await fetch(`${API_URL}/cart/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // if needed
        },
      });
      const data = await response.json();
      if (data.status === "success") {
        // Refresh cart after successful deletion
        toast({
          description: `Item has been remove from your cart!`,
        });
        fetchCart(token);
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "Error removing item from cart",
      });
      console.error("Error removing item from cart:", error);
    } finally {
      setIsLoading(false); // Reset loading state
      setRemovingItemId(null); // Reset the removing item ID
    }
  };

  // Calculate subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, cart) => {
      return total + cart.quantity * cart.product.sale_price;
    }, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <>
      <a
        href="#shoppingCart"
        data-bs-toggle="modal"
        className="btn-fixed-cart d-none d-lg-flex"
      >
        <svg
          className="icon"
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.5078 10.8734V6.36686C16.5078 5.17166 16.033 4.02541 15.1879 3.18028C14.3428 2.33514 13.1965 1.86035 12.0013 1.86035C10.8061 1.86035 9.65985 2.33514 8.81472 3.18028C7.96958 4.02541 7.49479 5.17166 7.49479 6.36686V10.8734M4.11491 8.62012H19.8877L21.0143 22.1396H2.98828L4.11491 8.62012Z"
            stroke="#FFFFFF"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="count-box">{cartItems.length}</span>
      </a>
      <div
        className="modal fullRight fade modal-shopping-cart"
        id="shoppingCart"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="d-flex flex-column flex-grow-1 h-100">
              <div className="header">
                <h5 className="title">Shopping Cart</h5>
                <span
                  className="icon-close icon-close-popup"
                  data-bs-dismiss="modal"
                />
              </div>
              <div className="wrap">
                <div className="tf-mini-cart-wrap">
                  <div className="tf-mini-cart-main">
                    <div className="tf-mini-cart-sroll">
                      <div className="tf-mini-cart-items">
                        {isLoading && <div>Loading...</div>}
                        {!isLoading && !isLoggedIn && (
                          <div className="text-center">
                            <p>Please log in to view your cart.</p>
                            <a href="/login" className="btn btn-primary">
                              Log In
                            </a>
                          </div>
                        )}
                        {!isLoading && isLoggedIn && cartItems.length === 0 && (
                          // <div className="text-center space-y-10">
                          //   <h5 className="title">Your cart is empty.</h5>
                          //   <a
                          //     href="/products"
                          //     className="tf-btn w-50 btn-fill radius-4"
                          //   >
                          //     Continue Shopping
                          //   </a>
                          // </div>
                          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-md border border-dashed p-8 text-center animate-in fade-in-50">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                              <ShoppingCart className="w-10 h-10 text-primary" />
                            </div>
                            <h5 className="title">Your cart is empty.</h5>
                          </div>
                        )}
                        {!isLoading &&
                          isLoggedIn &&
                          cartItems.map((cart) => (
                            <CartItem
                              key={cart?.id}
                              cart={cart}
                              handleRemoveItem={handleRemoveItem} // Pass the function
                              isRemoving={removingItemId === cart.id} // Check if this item is being removed
                            />
                          ))}
                      </div>
                    </div>
                  </div>
                  <div className="tf-mini-cart-bottom">
                    <div className="tf-mini-cart-bottom-wrap">
                      <div className="tf-cart-totals-discounts">
                        <h5>Subtotal</h5>
                        <h5 className="tf-totals-total-value">
                          ₦{subtotal.toFixed(2)}
                        </h5>
                      </div>
                      <div className="tf-cart-checkbox">
                        <div className="tf-checkbox-wrapp">
                          <input
                            className=""
                            type="checkbox"
                            id="CartDrawer-Form_agree"
                            name="agree_checkbox"
                            checked={isTermsChecked}
                            onChange={(e) =>
                              setIsTermsChecked(e.target.checked)
                            } // Update state on change
                          />
                          <div>
                            <i className="icon-check" />
                          </div>
                        </div>
                        <label htmlFor="CartDrawer-Form_agree">
                          I agree with
                          <a href="term-of-use.html" title="Terms of Service">
                            Terms &amp; Conditions
                          </a>
                        </label>
                      </div>
                      <div className="tf-mini-cart-view-checkout">
                        <a
                          href="/cart"
                          className="tf-btn w-100 btn-white radius-4 has-border"
                        >
                          <span className="text">View cart</span>
                        </a>
                        <a
                          href="/cart"
                          className={`tf-btn w-100 btn-fill radius-4 ${
                            !isTermsChecked ? "disabled" : ""
                          }`} // Add disabled class if terms not checked
                          onClick={(e) => !isTermsChecked && e.preventDefault()} // Prevent default action if terms not checked
                        >
                          <span className="text">Check Out</span>
                        </a>
                      </div>
                      <div className="text-center">
                        <a className="link text-btn-uppercase" href="/products">
                          Or continue shopping
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShoppingCart;
