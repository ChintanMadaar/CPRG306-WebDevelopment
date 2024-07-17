"use client";
import React, { useState, useEffect } from "react";
import { getItems, addItem } from "../_services/shopping-list-service";
import NewItem from "./new-item";
import ItemList from "./items-list";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { useRouter } from "next/navigation";

const ShoppingList = () => {
  const { user } = useUserAuth();
  const router = useRouter();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        if (user && user.uid) {
          console.log("Fetching items for user:", user.uid);
          const fetchedItems = await getItems(user.uid);
          console.log("Fetched Items: ", fetchedItems);
          setItems(fetchedItems);
        }
      } catch (error) {
        console.error("Failed to load items:", error);
      }
    };

    loadItems();
  }, [user]);

  const handleAddItem = async (item) => {
    try {
      const newItemId = await addItem(user.uid, item);
      console.log("Added new item with ID: ", newItemId);

      const fetchedItems = await getItems(user.uid);
      setItems(fetchedItems);
    } catch (error) {
      console.error("Failed to add item:", error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-800 flex flex-col py-10">
      <div className="bg-slate-600 p-6 rounded-lg w-full min-h-min shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-center text-slate-100">
          Shopping List
        </h2>
        <div className="flex flex-row">
          <div className="w-1/2 pr-4">
            <div>
              <NewItem onAddItem={handleAddItem} />
              <h3 className="text-lg font-semibold mb-2 text-slate-100">
                Items List
              </h3>
              <ItemList items={items} />
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <MealIdeas />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
