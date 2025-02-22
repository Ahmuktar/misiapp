const BlogSkeleton = () => {
  return (
    <div className="tf-grid-layout md-col-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div className="wg-blog style-1 hover-image animate-pulse" key={index}>
          <div className="image bg-gray-300 w-full h-80 rounded-md"></div>
          <div className="content mt-4">
            <div className="meta">
              <div className="meta-item gap-8">
                <div className="icon bg-gray-300 w-5 h-5 rounded-full"></div>
                <p className="text-caption-1 bg-gray-300 w-24 h-4 rounded"></p>
              </div>
            </div>
            <div className="mt-3 bg-gray-300 h-6 w-48 rounded"></div>
            <div className="mt-2 bg-gray-300 h-4 w-full rounded"></div>
            <div className="mt-2 bg-gray-300 h-4 w-3/4 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BlogSkeleton;
