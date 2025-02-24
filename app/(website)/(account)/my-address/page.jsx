"use client";
import React, { useState, useEffect } from "react";
import { API_URL } from "@/constant";
import { useAuth } from "@/stores/useAuth"; // Adjust the path as necessary

const MyAddressPage = () => {
  const [showForm, setShowForm] = useState(false);
  const [addresses, setAddresses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [countries, setCountries] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    // Fetch addresses from API
    fetch(`${API_URL}/addresses`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setAddresses(data.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching addresses:", error);
      });
  }, [token]);

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

  const handleShowAddressForm = () => {
    setShowForm(!showForm);
  };

  const handleEditAddress = (index) => {
    setEditIndex(index === editIndex ? null : index);
  };

  const handleAddAddress = (newAddress) => {
    fetch(`${API_URL}/addresses`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newAddress),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          setAddresses([...addresses, data.data]);
          setShowForm(false);
        }
      })
      .catch((error) => {
        console.error("Error adding address:", error);
      });
  };

  const handleUpdateAddress = (index, updatedAddress) => {
    const addressId = addresses[index].id;
    fetch(`${API_URL}/addresses/${addressId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(updatedAddress),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          const updatedAddresses = addresses.map((address, i) =>
            i === index ? data.data : address
          );
          setAddresses(updatedAddresses);
          setEditIndex(null);
        }
      })
      .catch((error) => {
        console.error("Error updating address:", error);
      });
  };

  const handleDeleteAddress = (index) => {
    const addressId = addresses[index].id;
    fetch(`${API_URL}/addresses/${addressId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          const updatedAddresses = addresses.filter((_, i) => i !== index);
          setAddresses(updatedAddresses);
        }
      })
      .catch((error) => {
        console.error("Error deleting address:", error);
      });
  };

  return (
    <div className="account-address">
      <div className="text-center widget-inner-address">
        <button
          onClick={handleShowAddressForm}
          className="tf-btn btn-fill radius-4 mb_20 btn-address"
        >
          <span className="text text-caption-1">Add a new address</span>
        </button>
        {showForm && (
          <form
            className="wd-form-address"
            onSubmit={(e) => {
              e.preventDefault();
              const newAddress = {
                // ...collect form data...
              };
              handleAddAddress(newAddress);
            }}
          >
            <div className="title">Add a new address</div>
            <div className="cols mb_20">
              <fieldset className="">
                <input
                  className=""
                  type="text"
                  placeholder="First Name*"
                  name="text"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required=""
                />
              </fieldset>
              <fieldset className="">
                <input
                  className=""
                  type="text"
                  placeholder="Last Name*"
                  name="text"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required=""
                />
              </fieldset>
            </div>
            <div className="cols mb_20">
              <fieldset className="">
                <input
                  className=""
                  type="email"
                  placeholder="Username or email address*"
                  name="email"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required=""
                />
              </fieldset>
              <fieldset className="">
                <input
                  className=""
                  type="text"
                  placeholder="Phone*"
                  name="text"
                  tabIndex={2}
                  defaultValue=""
                  aria-required="true"
                  required=""
                />
              </fieldset>
            </div>
            <fieldset className="mb_20">
              <input
                className=""
                type="text"
                placeholder="Address"
                name="text"
                tabIndex={2}
                defaultValue=""
                aria-required="true"
                required=""
              />
            </fieldset>
            <div className="tf-select mb_20">
              <select
                className="text-title"
                name="address[country]"
                data-default=""
              >
                {countries.map((country) => (
                  <option key={country.iso2} value={country.country}>
                    {country.country}
                  </option>
                ))}
              </select>
            </div>
            <fieldset className="mb_20">
              <input
                className=""
                type="text"
                placeholder="City"
                name="text"
                tabIndex={2}
                defaultValue=""
                aria-required="true"
                required=""
              />
            </fieldset>
            <div className="tf-cart-checkbox mb_20">
              <div className="tf-checkbox-wrapp">
                <input
                  defaultChecked=""
                  className=""
                  type="checkbox"
                  id="CartDrawer-Form_agree"
                  name="agree_checkbox"
                />
                <div>
                  <i className="icon-check" />
                </div>
              </div>
              <label htmlFor="CartDrawer-Form_agree">
                Set as default address.
              </label>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-20">
              <button type="submit" className="tf-btn btn-fill radius-4">
                <span className="text">Add address</span>
              </button>
              <span className="tf-btn btn-fill radius-4 btn-hide-address">
                <span className="text">Cancel</span>
              </span>
            </div>
          </form>
        )}
        <div className="list-account-address">
          {addresses.map((address, index) => (
            <div key={index} className="account-address-item">
              <h6 className="mb_20">{address.isDefault ? "Default" : ""}</h6>
              <h6 className="mb_20">{address.address_type}</h6>
              <p>
                {address.firstName} {address.lastName}
              </p>
              <p>{address.street}</p>
              <p>{address.city}</p>
              <p>{address.state}</p>
              <p className="mb_10">{address.country}</p>
              <div className="d-flex gap-10 justify-content-center">
                <button
                  className="tf-btn radius-4 btn-fill justify-content-center btn-edit-address"
                  onClick={() => handleEditAddress(index)}
                >
                  <span className="text">Edit</span>
                </button>
                <button
                  className="tf-btn radius-4 btn-outline justify-content-center btn-delete-address"
                  onClick={() => handleDeleteAddress(index)}
                >
                  <span className="text">Delete</span>
                </button>
              </div>
              {editIndex === index && (
                <form
                  className="wd-form-address"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const updatedAddress = {
                      // ...collect form data...
                    };
                    handleUpdateAddress(index, updatedAddress);
                  }}
                >
                  <div className="title">Edit address</div>
                  <fieldset className="mb_20">
                    <input
                      className=""
                      type="text"
                      placeholder="First Name*"
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                  <fieldset className="mb_20">
                    <input
                      className=""
                      type="text"
                      placeholder="Last Name*"
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                  <fieldset className="mb_20">
                    <input
                      className=""
                      type="email"
                      placeholder="Username or email address*"
                      name="email"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                  <fieldset className="mb_20">
                    <input
                      className=""
                      type="text"
                      placeholder="Phone*"
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                  <fieldset className="mb_20">
                    <input
                      className=""
                      type="text"
                      placeholder="Address"
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                  <div className="tf-select mb_20">
                    <select
                      className="text-title"
                      name="address[country]"
                      data-default=""
                    >
                      {countries.map((country) => (
                        <option key={country.iso2} value={country.country}>
                          {country.country}
                        </option>
                      ))}
                    </select>
                  </div>
                  <fieldset className="mb_20">
                    <input
                      className=""
                      type="text"
                      placeholder="City"
                      name="text"
                      tabIndex={2}
                      defaultValue=""
                      aria-required="true"
                      required=""
                    />
                  </fieldset>
                  <div className="tf-cart-checkbox mb_20">
                    <div className="tf-checkbox-wrapp">
                      <input
                        defaultChecked=""
                        className=""
                        type="checkbox"
                        id="CartDrawer-Form_agree"
                        name="agree_checkbox"
                      />
                      <div>
                        <i className="icon-check" />
                      </div>
                    </div>
                    <label htmlFor="CartDrawer-Form_agree">
                      Set as default address.
                    </label>
                  </div>
                  <div className="d-flex flex-column gap-20">
                    <button type="submit" className="tf-btn btn-fill radius-4">
                      <span className="text">Update address</span>
                    </button>
                    <span className="tf-btn btn-fill radius-4 btn-hide-edit-address">
                      <span className="text">Cancel</span>
                    </span>
                  </div>
                </form>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyAddressPage;
