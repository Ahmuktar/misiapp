import EmptyBlog from "@/components/website/EmptyBlog";
import BlogList from "@/components/website/BlogList";
import Link from "next/link";
import { Suspense } from "react";
import BlogSkeleton from "@/components/skeleton/BlogSkeleton";

const fetchBlog = async () => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blog`);
    const data = await response.json();
    if (data.status === "success") {
      return data.data;
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
  }
};

const BlogPage = async () => {
  const blogs = await fetchBlog();

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
              {!blogs ? (
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
