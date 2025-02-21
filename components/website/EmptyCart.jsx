import { ShoppingCart } from "lucide-react";

function EmptyCart() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] px-4 py-8 mx-auto text-center">
      <div className="mb-6">
        <div className="relative inline-block">
          <ShoppingCart size={64} className="text-gray-300" />
          <span className="absolute -bottom-2 -right-2 h-5 w-5 rounded-full border-2 border-white bg-gray-50 flex items-center justify-center">
            <span className="absolute h-2 w-0.5 bg-gray-300 rotate-45"></span>
            <span className="absolute h-0.5 w-2 bg-gray-300"></span>
          </span>
        </div>
      </div>

      <h3 className="mb-2 text-xl font-medium text-gray-900">
        Your cart is empty
      </h3>

      <p className="mb-6 text-sm text-gray-500 max-w-md">
        Looks like you haven't added anything to your cart yet. Start shopping
        to fill it with amazing products!
      </p>

      <button className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-indigo-600 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
        Start Shopping
      </button>

      <div className="mt-8 space-y-4 text-sm text-gray-500">
        <p className="flex items-center justify-center">
          <span className="mr-2">•</span>
          Free shipping on orders over $50
        </p>
        <p className="flex items-center justify-center">
          <span className="mr-2">•</span>
          30-day easy returns
        </p>
        <p className="flex items-center justify-center">
          <span className="mr-2">•</span>
          Secure checkout
        </p>
      </div>
    </div>
  );
}

export default EmptyCart;
