"use client";

import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./items-list";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <main className="p-4 bg-slate-950 min-h-screen flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-white">Shopping List</h1>
      <div className="flex flex-col items-center mb-4">
        <NewItem onAddItem={handleAddItem} />
      </div>
      <ItemList items={items} />
    </main>
  );
}
