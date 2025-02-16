import React from "react";

const WishlistModal = () => {
  return (
    <div className="modal fullRight fade modal-wishlist" id="wishlist">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="header">
            <h5 className="title">Wish List</h5>
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
                    <div className="tf-mini-cart-item file-delete">
                      <div className="tf-mini-cart-image">
                        <img
                          className="lazyload"
                          data-src="/assets/images/products/womens/women-19.jpg"
                          src="/assets/images/products/womens/women-19.jpg"
                          alt=""
                        />
                      </div>
                      <div className="tf-mini-cart-info flex-grow-1">
                        <div className="mb_12 d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-title">
                            <a
                              href="product-detail.html"
                              className="link text-line-clamp-1"
                            >
                              Contrasting sheepskin
                            </a>
                          </div>
                          <div className="text-button tf-btn-remove remove">
                            Remove
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-secondary-2">XL/Blue</div>
                          <div className="text-button">1 X $60.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-mini-cart-item file-delete">
                      <div className="tf-mini-cart-image">
                        <img
                          className="lazyload"
                          data-src="/assets/images/products/womens/women-1.jpg"
                          src="/assets/images/products/womens/women-1.jpg"
                          alt=""
                        />
                      </div>
                      <div className="tf-mini-cart-info flex-grow-1">
                        <div className="mb_12 d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-title">
                            <a
                              href="product-detail.html"
                              className="link text-line-clamp-1"
                            >
                              Suede leggings
                            </a>
                          </div>
                          <div className="text-button tf-btn-remove remove">
                            Remove
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-secondary-2">XL/Blue</div>
                          <div className="text-button">1 X $60.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-mini-cart-item file-delete">
                      <div className="tf-mini-cart-image">
                        <img
                          className="lazyload"
                          data-src="/assets/images/products/womens/women-2.jpg"
                          src="/assets/images/products/womens/women-2.jpg"
                          alt=""
                        />
                      </div>
                      <div className="tf-mini-cart-info flex-grow-1">
                        <div className="mb_12 d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-title">
                            <a
                              href="product-detail.html"
                              className="link text-line-clamp-1"
                            >
                              Faux-leather trousers
                            </a>
                          </div>
                          <div className="text-button tf-btn-remove remove">
                            Remove
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-secondary-2">XL/Blue</div>
                          <div className="text-button">1 X $60.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-mini-cart-item file-delete">
                      <div className="tf-mini-cart-image">
                        <img
                          className="lazyload"
                          data-src="/assets/images/products/womens/women-3.jpg"
                          src="/assets/images/products/womens/women-3.jpg"
                          alt=""
                        />
                      </div>
                      <div className="tf-mini-cart-info flex-grow-1">
                        <div className="mb_12 d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-title">
                            <a
                              href="product-detail.html"
                              className="link text-line-clamp-1"
                            >
                              Biker-style leggings
                            </a>
                          </div>
                          <div className="text-button tf-btn-remove remove">
                            Remove
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-secondary-2">XL/Blue</div>
                          <div className="text-button">1 X $60.00</div>
                        </div>
                      </div>
                    </div>
                    <div className="tf-mini-cart-item file-delete">
                      <div className="tf-mini-cart-image">
                        <img
                          className="lazyload"
                          data-src="/assets/images/products/womens/women-4.jpg"
                          src="/assets/images/products/womens/women-4.jpg"
                          alt=""
                        />
                      </div>
                      <div className="tf-mini-cart-info flex-grow-1">
                        <div className="mb_12 d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-title">
                            <a
                              href="product-detail.html"
                              className="link text-line-clamp-1"
                            >
                              Jacquard fluid trousers
                            </a>
                          </div>
                          <div className="text-button tf-btn-remove remove">
                            Remove
                          </div>
                        </div>
                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-12">
                          <div className="text-secondary-2">XL/Blue</div>
                          <div className="text-button">1 X $60.00</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf-mini-cart-bottom">
                <a
                  href="wish-list.html"
                  className="btn-style-2 w-100 radius-4 view-all-wishlist"
                >
                  <span className="text-btn-uppercase">View All Wish List</span>
                </a>
                <a href="shop-default-grid.html" className="text-btn-uppercase">
                  Or continue shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistModal;
