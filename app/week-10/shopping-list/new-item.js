import React, { useState } from "react";

const NewItem = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("produce");

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { name, quantity, category };
    console.log(item);
    alert(
      ` Added item: ${name} , quantity: ${quantity} , category: ${category}`
    );
    setName("");
    setQuantity(1);
    setCategory("Produce");
  };

  return (
    <div className=" h-2/3 flex flex-col items-left w-2/3">
      <div className="bg-slate-400 p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold mb-4 text-center text-black">
          Add New Item
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              placeholder="Item Name"
              type="text"
              id="name"
              className="mt-1 block w-96 h-10 pl-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 flex justify-between items-center">
            <div className="w-1/2 mr-2">
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-black"
              >
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                className="mt-1 block w-35 h-10 border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black text-center"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                max="99"
                required
              />
            </div>

            <div className="w-1/2 ml-2">
              <label
                htmlFor="category"
                className="block text-sm font-medium text-black"
              >
                Category
              </label>
              <select
                id="category"
                className="mt-1 block w-full h-10 border-black rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm text-black"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option disabled value="category">
                  Category
                </option>
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen">Frozen Foods</option>
                <option value="canned">Canned Goods</option>
                <option value="dry">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            +
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewItem;
