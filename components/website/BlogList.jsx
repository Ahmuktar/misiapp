import Link from "next/link";
import Image from "next/image";
import React from "react";

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const BlogList = React.memo(({ blogs }) => {
  return (
    <div className="tf-grid-layout md-col-3">
      {blogs.map((post) => (
        <div className="wg-blog style-1 hover-image" key={post.id}>
          {/* Blog Image */}
          <div className="image w-full h-80 object-cover object-top">
            <img
              src={post?.thumbnail || "/default-thumbnail.jpg"}
              alt={post?.title || "Blog image"}
              width={400}
              height={300}
              className="lazyloaded"
            />
          </div>

          {/* Blog Content */}
          <div className="content">
            <div className="meta">
              <div className="meta-item gap-8">
                <div className="icon">
                  <i className="icon-calendar" />
                </div>
                <p className="text-caption-1">{formatDate(post.created_at)}</p>
              </div>
              <div className="meta-item gap-8">
                <div className="icon">
                  <i className="icon-user" />
                </div>
                <p className="text-caption-1">
                  by{" "}
                  <a className="link" href="#">
                    Misi Luxury
                  </a>
                </p>
              </div>
            </div>

            {/* Blog Title & Excerpt */}
            <h6 className="title fw-5">
              <Link className="link" href={`/blog/${post.id}`}>
                {post.title}
              </Link>
            </h6>
            <div className="body-text">
              {post.content.split(" ").slice(0, 20).join(" ")}...
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default BlogList;
