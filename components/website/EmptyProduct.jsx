import { ShoppingBag } from "lucide-react";

function EmptyProduct() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4 py-8 mx-auto text-center">
      <div className="relative mb-6">
        <ShoppingBag size={64} className="text-gray-300" />
        <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-500">
          0
        </span>
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900">
        No products found
      </h3>

      <p className="mb-6 text-sm text-gray-500 max-w-md">
        We couldn't find any products matching your search. Try adjusting your
        filters or browse our categories below.
      </p>

      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        Browse Categories
      </button>
    </div>
  );
}

export default EmptyProduct;
