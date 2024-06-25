import { useState } from "react";
import { VscAccount } from "react-icons/vsc";
import { BsCart } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { RiArrowDropDownLine } from "react-icons/ri";
import DropMenu from "./drop-category";
import { Link } from "react-router-dom";

function Navigation() {
  const [showModal, setShowModal] = useState(false);
  function DropCategory() {
    setShowModal(!showModal);
  }
  return (
    <div className="flex justify-evenly p-2 mb-3">
      <Link to="/">
        <strong>Khudra Pasal</strong>
      </Link>
      <div className="flex relative">
        <div>Categories</div>
        <RiArrowDropDownLine
          className="text-2xl mt-1 "
          onClick={DropCategory}
        />
        {showModal ? <DropMenu /> : <></>}
      </div>
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
      <Link to="/register">
        <div className="p-1">
          <VscAccount />
        </div>
      </Link>

      <Link to="/cart">
        <div className="p-1">
          <BsCart />
        </div>
      </Link>
    </div>
  );
}

export default Navigation;
