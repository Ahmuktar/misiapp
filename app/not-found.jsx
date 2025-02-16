import React from "react";

const NotFound = () => {
  return (
    <section className="flat-spacing page-404">
      <div className="container">
        <div className="page-404-inner">
          <div className="image">
            <img
              data-src="/assets/images/404.png"
              alt="image"
              loading="lazy"
              width={679}
              height={701}
              decoding="async"
              data-nimg={1}
              className="lazyload"
              style={{ color: "transparent" }}
              src="/assets/images/404.png"
            />
          </div>
          <div className="content">
            <div className="heading">Oops!</div>
            <div>
              <h2 className="title mb_4">Something is Missing.</h2>
              <div className="text body-text-1 text-secondary">
                The page you are looking for cannot be found. take a break
                before trying again
              </div>
            </div>
            <a className="tf-btn btn-fill" href="/">
              <span className="text text-button">Back To Homepage</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;
