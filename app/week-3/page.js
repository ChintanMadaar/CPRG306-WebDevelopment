import React from "react";
import ItemList from "./item-list";

const Page = () => {
  return (
    <main className="max-w-3xl max-auto px-4 py-8 flex flex-col  items-start ">
      <div div="flex flex-col ">
        <h1 className="text-3xl font-semibold mb-8">Shopping List</h1>

        <ItemList />
      </div>
    </main>
  );
};

export default Page;
