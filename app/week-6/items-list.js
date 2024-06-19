"use client";
import React, { useState } from "react";
import Item from "./item";

export default function ItemList({ items }) {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupByCategory = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  const groupedItems = Object.keys(groupByCategory)
    .sort()
    .map((category) => (
      <div key={category} className="mb-4">
        <h2 className="capitalize text-xl font-bold mt-4 mb-2 text-white">
          {category}
        </h2>
        <ul className="bg-slate-950 rounded shadow p-4">
          {groupByCategory[category].map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      </div>
    ));

  const buttonClass =
    "px-4 py-2 mr-5 rounded shadow focus:outline-none focus:ring-2 focus:ring-blue-600 text-white";

  return (
    <div className="text-white">
      <div className="mb-4 flex items-center">
        <span className="mr-4 text-lg">Sort by:</span>
        <button
          onClick={() => setSortBy("name")}
          className={`${buttonClass} ${
            sortBy === "name" ? "bg-orange-500" : "bg-orange-700"
          }`}
        >
          Name
        </button>
        <button
          onClick={() => setSortBy("category")}
          className={`${buttonClass} ${
            sortBy === "category" ? "bg-orange-500" : "bg-orange-700"
          }`}
        >
          Category
        </button>
      </div>
      {sortBy === "group" ? (
        groupedItems
      ) : (
        <ul>
          {sortedItems.map((item) => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
