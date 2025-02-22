import GalleryGrid from "@/components/website/GalleryGrid";
import { images } from "@/lib/images";
import Link from "next/link";
import React from "react";

const GalleryPage = () => {
  return (
    <>
      {/* page-title */}
      <div
        className="page-title"
        style={{
          backgroundImage: "url(/assets/images/misi/bags-banner.webp)",
          backgroundPosition: "top",
          backgroundSize: "cover",
        }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12" data-aos="fade-up">
              <h3 className="heading text-center">Gallery</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href="/">
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Gallery</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <GalleryGrid images={images} />
    </>
  );
};

export default GalleryPage;
