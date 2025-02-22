import { BookOpen, PenLine, RefreshCw } from "lucide-react";

function EmptyBlog() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[500px] px-4 py-12 mx-auto text-center">
      {/* Decorative illustration */}
      <div className="relative mb-8">
        <div className="absolute -left-4 -top-4 w-20 h-20 bg-gray-50 rounded-lg transform -rotate-6" />
        <div className="absolute left-4 top-4 w-20 h-20 bg-gray-100 rounded-lg transform rotate-6" />
        <div className="relative w-20 h-20 bg-white rounded-lg shadow-sm border border-gray-100 flex items-center justify-center">
          <BookOpen size={32} className="text-gray-400" />
        </div>
      </div>

      <h2 className="mb-3 text-2xl font-semibold text-gray-900">
        No Blog Posts Yet
      </h2>

      <p className="mb-8 text-gray-500 max-w-md">
        We haven't published any blog posts yet. Check back later for insightful
        articles, news, and updates.
      </p>

      <div className="grid gap-4 md:grid-cols-2 max-w-lg">
        <div className="p-4 bg-gray-50 rounded-lg">
          <PenLine className="mb-2 text-gray-400" size={24} />
          <h3 className="mb-1 text-sm font-medium text-gray-900">
            Coming Soon
          </h3>
          <p className="text-sm text-gray-500">
            Our writers are working on amazing content
          </p>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg">
          <RefreshCw className="mb-2 text-gray-400" size={24} />
          <h3 className="mb-1 text-sm font-medium text-gray-900">
            Stay Updated
          </h3>
          <p className="text-sm text-gray-500">
            Subscribe to get notified about new posts
          </p>
        </div>
      </div>
    </div>
  );
}

export default EmptyBlog;
