"use client";
import { useAuth } from "@/stores/useAuth";
import { useEffect, useState } from "react";

const MyOrderDetailsPage = ({ params }) => {
  const [orderDetails, setOrderDetails] = useState(null);
  const { token } = useAuth();

  // const handleTabClick = (index) => {
  //   setActiveTab(index);
  // };

  useEffect(() => {
    const fetchOrderDetails = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/orders/${params.id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Include token if needed
          },
        }
      );
      const data = await response.json();
      setOrderDetails(data.data);
    };

    fetchOrderDetails();
  }, []);

  if (!orderDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className="account-order-details">
      <div className="wd-form-order">
        <div className="order-head">
          <div className="content">
            <div className="badge">{orderDetails?.status}</div>
            <h6 className="mt-8 fw-5">Order #{orderDetails?.order_id}</h6>
          </div>
        </div>
        <div className="tf-grid-layout md-col-2 gap-15">
          <div className="item">
            <div className="text-2 text_black-2">Order ID</div>
            <div className="text-2 mt_4 fw-6">#{orderDetails?.order_id}</div>
          </div>
          <div className="item">
            <div className="text-2 text_black-2">Status</div>
            <div className="text-2 mt_4 fw-6 badge">{orderDetails?.status}</div>
          </div>
          <div className="item">
            <div className="text-2 text_black-2">Date</div>
            <div className="text-2 mt_4 fw-6">{orderDetails?.created_at}</div>
          </div>
          <div className="item">
            <div className="text-2 text_black-2">Address</div>
            <div className="text-2 mt_4 fw-6">
              {`${orderDetails?.address?.street}, ${orderDetails?.address?.city}, ${orderDetails?.address?.state}, ${orderDetails?.address?.country}, ${orderDetails?.address?.postal_code}`}
            </div>
          </div>
        </div>
        {orderDetails?.items.map((item) => (
          <div className="order-head">
            <figure className="img-product">
              <img
                src={`${item?.product_images[0]}`}
                alt={item?.product_name}
              />
            </figure>
            <div className="content">
              <div className="text-2 fw-6">{item?.product_name}</div>
              <div className="total-price text-button">
                <span className="count">{item?.quantity}</span> X
                <span className="price"> ₦{item?.price}</span>
              </div>
              <div className="mt_4">
                <span className="fw-6"></span> {item?.selected_size} /{" "}
                {item?.selected_color}
              </div>
            </div>
          </div>
        ))}
        <ul>
          {/* <li className="d-flex justify-content-between text-2">
            <span>Total Price</span>
            <span className="fw-6">$28.95</span>
          </li> */}
          <li className="d-flex justify-content-between text-2 mt_4 pb_8 line-bt">
            <span>Total Discounts</span>
            <span className="fw-6">₦0.00</span>
          </li>
          <li className="d-flex justify-content-between text-2 mt_8">
            <span>Order Total</span>
            <span className="fw-6">₦{orderDetails?.total_amount}</span>
          </li>
        </ul>
        {/* <div className="widget-tabs style-3 widget-order-tab">
          <ul className="widget-menu-tab">
            <li
              className={`item-title ${activeTab === 0 ? "active" : ""}`}
              onClick={() => handleTabClick(0)}
            >
              <span className="inner">Order History</span>
            </li>
            <li
              className={`item-title ${activeTab === 1 ? "active" : ""}`}
              onClick={() => handleTabClick(1)}
            >
              <span className="inner">Item Details</span>
            </li>
            <li
              className={`item-title ${activeTab === 2 ? "active" : ""}`}
              onClick={() => handleTabClick(2)}
            >
              <span className="inner">Courier</span>
            </li>
            <li
              className={`item-title ${activeTab === 3 ? "active" : ""}`}
              onClick={() => handleTabClick(3)}
            >
              <span className="inner">Receiver</span>
            </li>
          </ul>
          <div className="widget-content-tab">
            <div
              className={`widget-content-inner ${
                activeTab === 0 ? "active" : ""
              }`}
            >
              <div className="widget-timeline">
                <ul className="timeline">
                  <li>
                    <div className="timeline-badge success" />
                    <div className="timeline-box">
                      <a className="timeline-panel" href="javascript:void(0);">
                        <div className="text-2 fw-6">Product Shipped</div>
                        <span>10/07/2024 4:30pm</span>
                      </a>
                      <p>
                        <strong>Courier Service : </strong>FedEx World Service
                        Center
                      </p>
                      <p>
                        <strong>Estimated Delivery Date : </strong>12/07/2024
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge success" />
                    <div className="timeline-box">
                      <a className="timeline-panel" href="javascript:void(0);">
                        <div className="text-2 fw-6">Product Shipped</div>
                        <span>10/07/2024 4:30pm</span>
                      </a>
                      <p>
                        <strong>Tracking Number : </strong>2307-3215-6759
                      </p>
                      <p>
                        <strong>Warehouse : </strong>T-Shirt 10b
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge" />
                    <div className="timeline-box">
                      <a className="timeline-panel" href="javascript:void(0);">
                        <div className="text-2 fw-6">Product Packaging</div>
                        <span>12/07/2024 4:34pm</span>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge" />
                    <div className="timeline-box">
                      <a className="timeline-panel" href="javascript:void(0);">
                        <div className="text-2 fw-6">Order Placed</div>
                        <span>11/07/2024 2:36pm</span>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className={`widget-content-inner ${
                activeTab === 1 ? "active" : ""
              }`}
            >
              <div className="order-head">
                <figure className="img-product">
                  <img
                    src="/assets/images/products/womens/women-1.jpg"
                    alt="product"
                  />
                </figure>
                <div className="content">
                  <div className="text-2 fw-6">Ribbed modal T-shirt</div>
                  <div className="mt_4">
                    <span className="fw-6">Price :</span> $28.95
                  </div>
                  <div className="mt_4">
                    <span className="fw-6">Size :</span> XL
                  </div>
                </div>
              </div>
              <ul>
                <li className="d-flex justify-content-between text-2">
                  <span>Total Price</span>
                  <span className="fw-6">$28.95</span>
                </li>
                <li className="d-flex justify-content-between text-2 mt_4 pb_8 line-bt">
                  <span>Total Discounts</span>
                  <span className="fw-6">$10</span>
                </li>
                <li className="d-flex justify-content-between text-2 mt_8">
                  <span>Order Total</span>
                  <span className="fw-6">$18.95</span>
                </li>
              </ul>
            </div>
            <div
              className={`widget-content-inner ${
                activeTab === 2 ? "active" : ""
              }`}
            >
              <p>
                Our courier service is dedicated to providing fast, reliable,
                and secure delivery solutions tailored to meet your needs.
                Whether you're sending documents, parcels, or larger shipments,
                our team ensures that your items are handled with the utmost
                care and delivered on time. With a commitment to customer
                satisfaction, real-time tracking, and a wide network of routes,
                we make it easy for you to send and receive packages both
                locally and internationally. Choose our service for a seamless
                and efficient delivery experience.
              </p>
            </div>
            <div
              className={`widget-content-inner ${
                activeTab === 3 ? "active" : ""
              }`}
            >
              <p className="text-2 text-success">
                Thank you Your order has been received
              </p>
              <ul className="mt_20">
                <li>
                  Order Number : <span className="fw-7">#17493</span>
                </li>
                <li>
                  Date : <span className="fw-7"> 17/07/2024, 02:34pm</span>
                </li>
                <li>
                  Total : <span className="fw-7">$18.95</span>
                </li>
                <li>
                  Payment Methods :{" "}
                  <span className="fw-7">Cash on Delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MyOrderDetailsPage;
