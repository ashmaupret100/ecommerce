import React from "react";

const category_list = [
  "men's Clothing",
  "women's Clothing",
  "jewelery",
  "electronics",
];

function DropMenu() {
  return (
    <>
      <div className="absolute top-full left-0 bg-green-700 p-2 mt-1">
        {category_list.map((category, index) => (
          <div key={`div_${index}`}>
            <a href="#" className="block text-white hover:bg-green-800 p-2">
              {category}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default DropMenu;
