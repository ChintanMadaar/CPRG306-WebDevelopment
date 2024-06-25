"use client";
import React, { useState } from "react";
import NewItem from "./new-item";
import ItemList from "./items-list";
import MealIdeas from "./meal-ideas";
import itemsData from "./items.json";

export default function Page() {
  const [items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleItemSelect = (item) => {
    const cleanedName = item.name
      .split(",")[0]
      .trim()
      .replace(
        /([\u2700-\u27BF]|[\uE000-\uF8FF]|[\u2011-\u26FF]|[\u2600-\u26FF]|[\uD83C-\uDBFF\uDC00-\uDFFF])/g,
        ""
      );
    setSelectedItemName(cleanedName);
  };

  return (
    <main className="p-4 bg-slate-950  flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-white text-left w-full ">
        Shopping List
      </h1>
      <div className="flex w-full">
        <div className="w-full lg:w-1/2 p-2">
          <div className="mb-4">
            <NewItem onAddItem={handleAddItem} />
          </div>
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-full lg:w-1/2 p-2">
          <MealIdeas ingredient={selectedItemName} />
        </div>
      </div>
    </main>
  );
}
