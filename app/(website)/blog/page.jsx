"use client";
import EmptyBlog from "@/components/website/EmptyBlog";
import BlogList from "@/components/website/BlogList";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import BlogSkeleton from "@/components/skeleton/BlogSkeleton";

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog`,
          {
            signal: controller.signal,
          }
        );
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        setBlogs(data.data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error(error);
          setError(true);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
    return () => controller.abort();
  }, []);

  return (
    <>
      {/* Page Title */}
      <div
        className="page-title"
        style={{ backgroundImage: "url(/assets/images/misi/bags-banner.webp)" }}
      >
        <div className="container-full">
          <div className="row">
            <div className="col-12">
              <h3 className="heading text-center">Blog</h3>
              <ul className="breadcrumbs d-flex align-items-center justify-content-center">
                <li>
                  <Link className="link" href="/">
                    Homepage
                  </Link>
                </li>
                <li>
                  <i className="icon-arrRight" />
                </li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Blog Content */}
      <div className="main-content-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-lg-30">
              {error ? (
                <p className="text-center text-red-500">
                  Failed to load blogs. Please try again later.
                </p>
              ) : loading ? (
                <BlogSkeleton />
              ) : blogs.length === 0 ? (
                <EmptyBlog />
              ) : (
                <Suspense fallback={<BlogSkeleton />}>
                  <BlogList blogs={blogs} />
                </Suspense>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
