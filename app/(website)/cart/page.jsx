"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useCartStore from "@/stores/cartStore";
import { useRouter } from "next/navigation";
import { useAuth } from "@/stores/useAuth";
import EmptyCart from "@/components/website/EmptyCart";
import toast from "react-hot-toast";

const CartItem = ({
  cart,
  handleRemoveItem,
  isRemoving,
  quantity,
  handleQuantityChange,
  handleColorChange,
  handleSizeChange,
}) => {
  return (
    <tr className="tf-cart-item file-delete">
      <td className="tf-cart-item_product">
        <a href={`/products/${cart?.product?.productId}`} className="img-box">
          <img src={cart?.product?.image_url} alt={cart?.product?.name} />
        </a>
        <div className="cart-info">
          <a
            href={`/products/${cart?.product?.productId}`}
            className="cart-title link"
          >
            {cart?.product?.name}
          </a>
          <p>
            {cart?.selected_size} / {cart?.selected_color}
          </p>
          <div className="variant-box">
            <div className="tf-select">
              <select
                value={cart?.selected_color}
                onChange={(e) => handleColorChange(cart.id, e.target.value)}
              >
                <option value="Black">Black</option>
                <option value="White">White</option>
                <option value="Red">Red</option>
                <option value="Beige">Beige</option>
                <option value="Pink">Pink</option>
              </select>
            </div>
            <div className="tf-select">
              <select
                value={cart?.selected_size}
                onChange={(e) => handleSizeChange(cart.id, e.target.value)}
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="2XL">2XL</option>
              </select>
            </div>
          </div>
        </div>
      </td>
      <td data-cart-title="Price" className="tf-cart-item_price text-center">
        <div className="cart-price text-button price-on-sale">
          ₦{cart?.product?.sale_price}
        </div>
      </td>
      <td data-cart-title="Quantity" className="tf-cart-item_quantity">
        <div className="wg-quantity">
          <span
            className="btn-quantity btn-decrease"
            onClick={() =>
              handleQuantityChange(cart.id, Math.max(1, quantity - 1))
            }
          >
            -
          </span>
          <input
            className="quantity-product"
            type="number"
            name="number"
            value={quantity}
            onChange={(e) =>
              handleQuantityChange(cart.id, Math.max(1, e.target.value))
            }
          />
          <span
            className="btn-quantity btn-increase"
            onClick={() => handleQuantityChange(cart.id, quantity + 1)}
          >
            +
          </span>
        </div>
      </td>
      <td data-cart-title="Total" className="tf-cart-item_total text-center">
        <div className="cart-total text-button total-price">
          ₦{parseFloat(cart?.product?.sale_price * quantity).toFixed(2)}
        </div>
      </td>
      <td
        data-cart-title="Remove"
        className="remove-cart"
        onClick={() => handleRemoveItem(cart?.id)}
        disabled={isRemoving}
      >
        <span className="remove icon icon-close" />
      </td>
    </tr>
  );
};

const CartPage = () => {
  const { token } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [removingItemId, setRemovingItemId] = useState(null);
  const [isTermsChecked, setIsTermsChecked] = useState(false);
  const { cartItems, fetchCartItems, removeFromCart } = useCartStore();
  const [quantities, setQuantities] = useState({});
  const router = useRouter();

  useEffect(() => {
    fetchCartItems(token);
  }, [token]);

  useEffect(() => {
    const initialQuantities = {};
    cartItems.forEach((cart) => {
      initialQuantities[cart.id] = cart.quantity;
    });
    setQuantities(initialQuantities);
  }, [cartItems]);

  const handleRemoveItem = async (id) => {
    setRemovingItemId(id);
    try {
      await removeFromCart(id, token);
      toast.success("Item removed from cart");
    } catch (error) {
      toast.error("Failed to remove item");
    } finally {
      setRemovingItemId(null);
    }
  };

  const updateCartItem = async (id, data) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/cart/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      if (result.status === "success") {
        toast.success("Cart updated successfully");
        fetchCartItems(token); // Refresh cart items
      } else {
        throw new Error(result.message || "Failed to update cart");
      }
    } catch (error) {
      toast.error(error.message || "An error occurred");
    }
  };

  const handleQuantityChange = async (id, newQuantity) => {
    setQuantities((prev) => ({ ...prev, [id]: newQuantity }));
    await updateCartItem(id, { quantity: newQuantity });
  };

  const handleColorChange = async (id, newColor) => {
    await updateCartItem(id, { selected_color: newColor });
  };

  const handleSizeChange = async (id, newSize) => {
    await updateCartItem(id, { selected_size: newSize });
  };

  const handleCheckout = () => {
    if (!isTermsChecked) {
      toast.error("Please agree to the terms and conditions");
      return;
    }
    router.push("/checkout");
  };

  const calculateSubtotal = () => {
    return cartItems.reduce((total, cart) => {
      return (
        total + (quantities[cart.id] || cart.quantity) * cart.product.sale_price
      );
    }, 0);
  };

  const subtotal = calculateSubtotal();

  return (
    <>
      <div className="page-title">
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Shopping Cart</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <a className="link" href="/">
                    Homepage
                  </a>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Shopping Cart</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section className="flat-spacing">
        <div className="container">
          <div className="row">
            <div className="col-xl-8">
              <form>
                <table className="tf-table-page-cart">
                  <thead>
                    <tr>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total Price</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((cart) => (
                      <CartItem
                        key={cart.id}
                        cart={cart}
                        handleRemoveItem={handleRemoveItem}
                        isRemoving={removingItemId === cart.id}
                        quantity={quantities[cart.id] || cart.quantity}
                        handleQuantityChange={handleQuantityChange}
                        handleColorChange={handleColorChange}
                        handleSizeChange={handleSizeChange}
                      />
                    ))}
                    {cartItems.length === 0 && (
                      <tr>
                        <td colSpan={4}>
                          <EmptyCart />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </form>
            </div>
            <div className="col-xl-4">
              <div className="fl-sidebar-cart">
                <div className="box-order bg-surface">
                  <h5 className="title">Order Summary</h5>
                  <div className="subtotal text-button d-flex justify-content-between align-items-center">
                    <span>Subtotal</span>
                    <span className="total">₦{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="discount text-button d-flex justify-content-between align-items-center">
                    <span>Discounts</span>
                    <span className="total">₦0.00</span>
                  </div>
                  <h5 className="total-order d-flex justify-content-between align-items-center">
                    <span>Total</span>
                    <span className="total">₦{subtotal.toFixed(2)}</span>
                  </h5>
                  <div className="box-progress-checkout">
                    <fieldset className="check-agree">
                      <input
                        type="checkbox"
                        id="check-agree"
                        className="tf-check-rounded"
                        checked={isTermsChecked}
                        onChange={(e) => setIsTermsChecked(e.target.checked)}
                      />
                      <label htmlFor="check-agree">
                        I agree with the{" "}
                        <a href="term-of-use.html">terms and conditions</a>
                      </label>
                    </fieldset>
                    <button
                      className="tf-btn btn-reset disabled:bg-gray-500/80"
                      onClick={handleCheckout}
                    >
                      Process To Checkout
                    </button>
                    <Link href="/products" className="text-button text-center">
                      Or continue shopping
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CartPage;
