import { useState } from "react";

const PRODUCTS = [
  { id: 1, name: "Hangbag",  price: 9000},
  { id: 2, name: "Wig",    price: 23000 },
  { id: 3, name: "Heels",    price: 30000 },
  { id: 4, name: "Perfume",  price: 6000 },
  { id: 5, name: "Jeans",  price: 20000 },
  { id: 6, name: "Gold",  price: 50000 },
  { id: 7, name: "Wing",  price: 1000 },
  { id: 8, name: "Flower",  price: 1500 },
  { id: 9, name: "Grown",  price: 7000 },
  { id: 10,name: "Wristwatch",  price: 60000 },
  { id: 11,name: "Body oil",  price: 7500 },
];

function ShoppingCart() {

    const [items, setItems] = useState([]);
  //console.log("items in the cart", items)

   const [isOpen, setIsOpen] = useState(false);

    const addItem = (newItem) => {
    setItems(prev => [...prev, newItem]);
    };

    const removeItem = (id) => {
    setItems(prev =>
         prev.filter(item => item.id !== id)
    );
};
};

 const totalPrice = items.reduce((sum, item) => sum + item.price, 0);
  const itemCount  = items.length;

 return (
    <div className="max-w-lg mx-auto mt-10 px-4 font-sans">
      <h1 className="text-3xl font-bold mb-6">My style cart</h1>

             //* PRODUCT LIST *//
             <div className="bg-white shadow-md rounded-xl p-4 flex items-center justify-between hover:shadow-lg transition">
                {PRODUCTS.map(product => (

                <div 
                key={product.id}
            className="flex items-center justify-between border border-gray-200 rounded-lg px-4 py-3">

                 <span className="text-gray-800 font-medium">
              {`${product.name} - ₦{product.price.toLocaleString()}`}
               </span>
            <button
             onClick={() => addItem({ ...prev, Cartid: Date.now})}
             className="px-4 py-1.5 bg-gray-800 text-white text-sm rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
            >
              Add
            </button>
             </div>
             ))}
            </div>

        <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-700 transition-colors cursor-pointer"
      >
        {isOpen ? "Hide Cart" : `Show Cart (${itemCount})`}
      </button>

      {isOpen && (
  <div className="mt-6 bg-gray-50 rounded-2xl p-6 border border-gray-100 shadow-xl">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-xl font-bold text-gray-900">Your Cart</h2>
      <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
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
          <div 
            key={item.cartId}
            className="flex items-center justify-between bg-white p-4 rounded-xl shadow-sm border border-gray-100 hover:border-gray-300 transition-colors"
          >
            <div className="flex flex-col">
              <span className="font-semibold text-gray-800">{item.name}</span>
              <span className="text-sm text-gray-500 font-mono">₦{item.price.toLocaleString()}</span>
            </div>
            
            <button 
              onClick={() => removeItem(item.cartId)}
              className="text-red-400 hover:text-red-600 p-2 hover:bg-red-50 rounded-lg transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    )}

    {items.length > 0 && (
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 font-medium">Total Amount:</span>
          <span className="text-2xl font-black text-gray-900">
            ₦{items.reduce((total, item) => total + item.price, 0).toLocaleString()}
          </span>
        </div>
        <button className="w-full mt-4 py-3 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 shadow-lg">
          Checkout Now
        </button>
      </div>
    )}
  </div>
)}
      
 </div>
 )