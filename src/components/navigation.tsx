import React from "react";
import { VscAccount } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";

function Navigation() {
  return (
    <div className="flex justify-evenly p-2 mb-3">
      <div>Khudra Pasal</div>
      <div>Categories</div>
      <div>Deals</div>
      <div>What's New</div>
      <div>Delivery</div>
      <div className="flex bg-slate-200 rounded-xl">
        <input
          className="bg-slate-200 ml-2 rounded-xl border border-transparent focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          type="text"
          name="search"
          id="search-bar"
          placeholder="Search here"></input>
        <div className="p-1">
          <CiSearch />
        </div>
      </div>
      <div className="p-1">
        <VscAccount />
      </div>
      <div className="p-1">
        <BsCart />
      </div>
    </div>
  );
}

export default Navigation;
