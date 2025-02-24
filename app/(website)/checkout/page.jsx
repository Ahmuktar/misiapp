"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import useCartStore from "@/stores/cartStore";
import { useRouter } from "next/navigation";
import { useAuth } from "@/stores/useAuth";
import EmptyCart from "@/components/website/EmptyCart";
import toast from "react-hot-toast";
import { capitalizeWords } from "@/lib/utils";

const CartItem = ({ cart }) => {
  return (
    <div className="item-product">
      <Link
        href={`/products/${cart?.product?.productId}`}
        className="img-product"
      >
        <img src={cart?.product?.image_url} alt={cart?.product?.name} />
      </Link>
      <div className="content-box">
        <div className="info">
          <Link
            href={`/products/${cart?.product?.productId}`}
            className="name-product link text-title"
          >
            {cart?.product?.name}
          </Link>
          <div className="variant text-caption-1 text-secondary">
            <span className="size">{cart?.selected_size}</span>/
            <span className="color">{cart?.selected_color}</span>
          </div>
        </div>
        <div className="total-price text-button">
          <span className="count">{cart?.quantity}</span>X
          <span className="price">₦{cart?.product?.sale_price}</span>
        </div>
      </div>
    </div>
  );
};

const CheckoutPage = () => {
  const { token, user } = useAuth(); // Get login status from useAuth
  const [isLoading, setIsLoading] = useState(false);
  const [removingItemId, setRemovingItemId] = useState(null); // Track which item is being removed
  const [isTermsChecked, setIsTermsChecked] = useState(false); // Track terms checkbox state
  const { cartItems, fetchCartItems, removeFromCart } = useCartStore();

  const router = useRouter();
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [formData, setFormData] = useState({
    address: {
      country: "",
      state: "",
      street: "",
      city: "",
      postalCode: "",
    },
  });
  const [userAddresses, setUserAddresses] = useState([]); // State to hold user addresses
  const [selectedAddress, setSelectedAddress] = useState(null); // State to hold selected address

  useEffect(() => {
    fetchCartItems();
    fetchUserAddresses(); // Fetch user addresses when logged in
  }, [token]);

  const fetchUserAddresses = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/addresses`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        setUserAddresses(data.data); // Assuming data.data contains the addresses
      } else {
        toast({
          variant: "destructive",
          title: "Failed to fetch addresses",
          description:
            data.message || "An error occurred while fetching addresses.",
        });
      }
    } catch (error) {
      console.error("Error fetching addresses:", error);
      toast({
        variant: "destructive",
        title: "Error",
        description: "An error occurred while fetching addresses.",
      });
    }
  };

  useEffect(() => {
    // Fetch countries from API
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setCountries(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []);

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, country },
    }));
    fetchCountryState(country);
  };

  const fetchCountryState = (country) => {
    fetch("https://countriesnow.space/api/v0.1/countries/states", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ country }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (!data.error) {
          setStates(data.data.states);
        }
      })
      .catch((error) => {
        console.error("Error fetching states:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      address: { ...prev.address, [name]: value },
    }));
  };

  const handleSelectAddress = (address) => {
    setSelectedAddress(address);
    setSelectedCountry(address.country);
    setStates([{ name: address.state }]);
    setFormData((prev) => ({
      ...prev,
      address: {
        country: address.country,
        state: address.state,
        street: address.street,
        city: address.city,
        postalCode: address.postal_code,
      },
    }));
  };

  const addAddress = async (addressData) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/addresses`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token if needed
          },
          body: JSON.stringify(addressData),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success("Address added successfully!");
        return data.data.address_id; // Return the new address ID
      } else {
        toast.error("Failed to add address");
      }
    } catch (error) {
      toast.error("Failed to add address");
      console.error("Error adding address:", error);
    }
  };

  const handleCheckout = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setIsLoading(true);
    try {
      let addressId = null;

      // Check if the selected address is different from the form data
      if (selectedAddress) {
        const isSameAddress =
          selectedAddress.street === formData.address.street &&
          selectedAddress.city === formData.address.city &&
          selectedAddress.state === formData.address.state &&
          selectedAddress.postal_code === formData.address.postalCode &&
          selectedAddress.country === formData.address.country;

        if (!isSameAddress) {
          // If the address is different, add it as a new address
          const newAddressData = {
            user_id: user.id,
            address_type: "shipping",
            street: formData.address.street,
            city: formData.address.city,
            state: formData.address.state,
            postal_code: formData.address.postalCode,
            country: formData.address.country,
          };
          const response = await addAddress(newAddressData); // Get the new address ID
          addressId = response.address_id; // Extract address ID from response
        } else {
          // If the address is the same, use the existing address ID
          addressId = selectedAddress.id;
        }
      }

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // if needed
          },
          body: JSON.stringify({
            address_id: addressId,
          }),
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        toast.success("Checkout successful!");
        router.push(`/success?orderId=${data.data.order_id}`); // Redirect to a success page
      } else {
        toast.error("Checkout failed");
      }
    } catch (error) {
      toast.error("Uh oh! Something went wrong.");
      console.error("Error during checkout:", error);
    } finally {
      setIsLoading(false);
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
      <div className="page-title">
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Checkout</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <a className="link" href="/">
                    Homepage
                  </a>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Checkout</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-xl-6">
              <div className="flat-spacing tf-page-checkout">
                <div>
                  <h5 className="mb-3">Saved Addresses</h5>
                  <div className="list-group">
                    {userAddresses.map((address, index) => (
                      <div
                        key={index}
                        className="list-group-item d-flex align-items-center"
                      >
                        <input
                          type="radio"
                          id={`address-${index}`}
                          name="saved-address"
                          value={address.id}
                          checked={selectedAddress === address}
                          onChange={() => handleSelectAddress(address)}
                          className="form-check-input me-2"
                        />
                        <label
                          htmlFor={`address-${index}`}
                          className="form-check-label"
                        >
                          <div
                            className="tf-store-item"
                            data-bs-toggle="tab"
                            aria-selected="false"
                            role="tab"
                            tabIndex={-1}
                          >
                            <h6 className="tf-store-title">
                              {capitalizeWords(address.address_type)} Address
                            </h6>
                            <div className="tf-store-info">
                              <p>
                                {`${address.street}, ${address.city}, ${address.state}, ${address.country}, ${address.postal_code}`}
                              </p>
                            </div>
                          </div>
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="wrap mt-4">
                  <h5 className="title">Shipping Address</h5>
                  <form className="info-box" onSubmit={handleCheckout}>
                    <div className="tf-select">
                      <select
                        className="text-title"
                        name="country"
                        onChange={handleCountryChange}
                        value={formData.address.country}
                        required
                      >
                        <option value="">Select Country</option>
                        {countries.map((country) => (
                          <option key={country.iso2} value={country.country}>
                            {country.country}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="grid-2">
                      <div className="tf-select">
                        <select
                          className="text-title"
                          name="state"
                          onChange={handleAddressChange}
                          value={formData.address.state}
                          required
                        >
                          <option value="">Choose State</option>
                          {states.map((state, index) => (
                            <option key={index} value={state.name}>
                              {state.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <input
                        type="text"
                        name="street"
                        value={formData.address.street}
                        onChange={handleAddressChange}
                        placeholder="Street, ..."
                        required
                      />
                    </div>
                    <div className="grid-2">
                      <input
                        type="text"
                        name="city"
                        value={formData.address.city}
                        onChange={handleAddressChange}
                        placeholder="Town/City*"
                        required
                      />
                      <input
                        type="text"
                        name="postalCode"
                        value={formData.address.postalCode}
                        onChange={handleAddressChange}
                        placeholder="Postal Code*"
                        required
                      />
                    </div>
                    <button
                      type="submit"
                      className="tf-btn btn-reset"
                      disabled={isLoading}
                    >
                      {isLoading ? "Processing..." : "Proceed to Payment"}
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-xl-1">
              <div className="line-separation" />
            </div>
            <div className="col-xl-5">
              <div className="flat-spacing flat-sidebar-checkout">
                <div className="sidebar-checkout-content">
                  <h5 className="title">Shopping Cart</h5>
                  <div className="list-product">
                    {cartItems.map((cart) => (
                      <CartItem key={cart?.id} cart={cart} />
                    ))}
                    {cartItems.length === 0 && <EmptyCart />}
                  </div>
                  <div className="sec-total-price">
                    <div className="top">
                      <div className="item d-flex align-items-center justify-content-between text-button">
                        <span>Discounts</span>
                        <span>₦0.00</span>
                      </div>
                    </div>
                    <div className="bottom">
                      <h5 className="d-flex justify-content-between">
                        <span>Total</span>
                        <span className="total-price-checkout">
                          ₦{subtotal}
                        </span>
                      </h5>
                    </div>
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

export default CheckoutPage;
