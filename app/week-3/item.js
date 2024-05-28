import React from "react";

const Item = ({ name, quantity, category }) => {
  const itemStyle = {
    backgroundColor: "rgb(15, 23, 42)",
  };

  return (
    <li
      className="border border-transparent w-300 rounded-sm p-2 mb-4"
      style={itemStyle}
    >
      <p className="text-lg font-semibold mb-1">{name}</p>
      <p className="text-sm text-white-600">
        Buy {quantity} in {category}
      </p>
    </li>
  );
};

export default Item;
