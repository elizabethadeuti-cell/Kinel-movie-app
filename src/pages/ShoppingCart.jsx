import React, { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Hangbag", price: 9000 },
  { id: 2, name: "Wig", price: 23000 },
  { id: 3, name: "Heels", price: 30000 },
  { id: 4, name: "Perfume", price: 6000 },
  { id: 5, name: "Jeans", price: 20000 },
  { id: 6, name: "Gold", price: 50000 },
  { id: 7, name: "Wing", price: 1000 },
  { id: 8, name: "Flower", price: 1500 },
  { id: 9, name: "Gown", price: 7000 },
  { id: 10, name: "Wristwatch", price: 60000 },
  { id: 11, name: "Body oil", price: 7500 },
];

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const addItem = (product) => {
    setItems((prev) => [...prev, { ...product, cartId: Date.now() }]);
  };

  const removeItem = (cartId) => {
    setItems((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">My Style Cart</h1>

      {/* Product List Section */}
      <div className="bg-white rounded-xl shadow-md p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4 border-b pb-2">Product List</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="flex justify-between items-center p-3 border rounded-lg hover:bg-gray-50">
              <div className="flex flex-col">
                <span className="font-medium">{product.name}</span>
                <span className="text-gray-600">₦{product.price.toLocaleString()}</span>
              </div>
              <button
                onClick={() => addItem(product)}
                className="bg-black text-white px-4 py-1 rounded-md text-sm hover:bg-gray-800 transition"
              >
                Add
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Controls */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-gray-200 py-3 rounded-lg font-medium mb-4"
      >
        {isOpen ? "Hide Cart" : `Show Cart (${items.length})`}
      </button>

      {isOpen && (
        <div className="mt-6 bg-gray-50 rounded-2xl p-6 border shadow-inner">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
            <span className="bg-gray-800 text-white text-xs px-3 py-1 rounded-full">
              {items.length} Items
            </span>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-10">
              <p className="text-gray-400 text-sm italic">Your cart feels lonely... add some items!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item.cartId} className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="flex flex-col">
                    <span className="font-semibold text-gray-800">{item.name}</span>
                    <span className="text-blue-600 font-medium">₦{item.price.toLocaleString()}</span>
                  </div>
                  <button
                    onClick={() => removeItem(item.cartId)}
                    className="text-red-500 hover:text-red-700 text-sm font-medium"
                  >
                    Remove
                  </button>
                </div>
              ))}
              
              <div className="pt-6 border-t mt-6">
                <div className="flex justify-between items-center mb-4 text-xl font-bold">
                  <span>Total:</span>
                  <span>₦{items.reduce((sum, item) => sum + item.price, 0).toLocaleString()}</span>
                </div>
                <button className="w-full bg-green-600 text-white py-4 rounded-xl font-bold hover:bg-green-700 transition shadow-lg">
                  CHECKOUT NOW
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ShoppingCart;