const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const fetchBlog = async (blogId) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blog/${blogId}`
    );
    const data = await response.json();
    if (data.status === "success") {
      return data.data;
    }
  } catch (error) {
    console.error("Error fetching blog:", error);
  }
};

const SingleBlog = async ({ params }) => {
  const { id } = params;
  const blogs = await fetchBlog(id);

  return (
    <div className="blog-detail-wrap">
      <img
        src={blogs?.thumbnail}
        alt="blog"
        className="w-full h-[350px] md:h-[500px] object-cover object-center"
      />
      <div className="inner mt-0 bg-white">
        <div className="heading">
          <h3 className="fw-5">{blogs?.title}</h3>
          <div className="meta justify-content-center">
            <div className="meta-item gap-8">
              <div className="icon">
                <i className="icon-calendar" />
              </div>
              <p className="body-text-1">{formatDate(blogs?.created_at)}</p>
            </div>
            <div className="meta-item gap-8">
              <div className="icon">
                <i className="icon-user" />
              </div>
              <p className="body-text-1">
                by{" "}
                <a className="link" href="#">
                  Misi Luxury
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="content">{blogs?.content}</div>
      </div>
    </div>
  );
};

export default SingleBlog;
