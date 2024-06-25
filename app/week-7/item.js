import React from "react";

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <li
      className="bg-slate-900 border border-transparent rounded-sm p-4 mb-4 max-w-xs cursor-pointer"
      onClick={onSelect} // Add onClick handler
    >
      <p className="text-lg font-semibold mb-1 text-white">{name}</p>
      <p className="text-sm text-gray-300">
        Buy {quantity} in {category}
      </p>
    </li>
  );
};

export default Item;
