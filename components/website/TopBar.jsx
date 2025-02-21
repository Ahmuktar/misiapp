import Link from "next/link";
import React from "react";

function TopBar() {
  return (
    <div className="tf-topbar bg-main">
      <div className="container">
        <div className="tf-topbar_wrap d-flex align-items-center justify-content-center justify-content-xl-between">
          <ul className="topbar-left">
            <li>
              <a
                className="text-caption-1 text-white"
                href="tel:+2342092921033"
              >
                +2342092921033
              </a>
            </li>
            <li>
              <a className="text-caption-1 text-white" href="#">
                sales@misi.ng
              </a>
            </li>
            <li>
              <Link
                className="text-caption-1 text-white text-decoration-underline"
                href="/store-list"
              >
                Our Store
              </Link>
            </li>
          </ul>
          <div className="topbar-right d-none d-xl-block">
            {/* <div className="tf-cur justify-content-end">
              <div className="tf-currencies">
                <div className="dropdown bootstrap-select image-select center style-default type-currencies color-white">
                  <select className="image-select center style-default type-currencies color-white">
                    <option
                      data-thumbnail="/assets/images/country/us.svg"
                      data-content='<img src="/assets/images/country/us.svg" /> USD'
                    >
                      USD
                    </option>
                    <option
                      data-thumbnail="/assets/images/country/vn.svg"
                      data-content='<img src="/assets/images/country/vn.svg" /> VND'
                    >
                      VND
                    </option>
                  </select>
                  <button
                    type="button"
                    tabIndex={-1}
                    className="btn dropdown-toggle btn-light"
                    data-bs-toggle="dropdown"
                    role="combobox"
                    aria-owns="bs-select-1"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    title="USD"
                  >
                    <div className="filter-option">
                      <div className="filter-option-inner">
                        <div className="filter-option-inner-inner">
                          <img src="/assets/images/country/us.svg" /> USD
                        </div>
                      </div>{" "}
                    </div>
                  </button>
                  <div className="dropdown-menu ">
                    <div
                      className="inner show"
                      role="listbox"
                      id="bs-select-1"
                      tabIndex={-1}
                    >
                      <ul
                        className="dropdown-menu inner show"
                        role="presentation"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="tf-languages">
                <div className="dropdown bootstrap-select image-select center style-default type-languages color-white">
                  <select className="image-select center style-default type-languages color-white">
                    <option>English</option>
                    <option>Vietnam</option>
                  </select>
                  <button
                    type="button"
                    tabIndex={-1}
                    className="btn dropdown-toggle btn-light"
                    data-bs-toggle="dropdown"
                    role="combobox"
                    aria-owns="bs-select-2"
                    aria-haspopup="listbox"
                    aria-expanded="false"
                    title="English"
                  >
                    <div className="filter-option">
                      <div className="filter-option-inner">
                        <div className="filter-option-inner-inner">English</div>
                      </div>{" "}
                    </div>
                  </button>
                  <div className="dropdown-menu ">
                    <div
                      className="inner show"
                      role="listbox"
                      id="bs-select-2"
                      tabIndex={-1}
                    >
                      <ul
                        className="dropdown-menu inner show"
                        role="presentation"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
