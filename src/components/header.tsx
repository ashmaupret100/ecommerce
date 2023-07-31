import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="bg-green-800 text-slate-100 p-1 pr-2 flex align-center justify-center text-xs">
        <a className="pl-2 pr-1"> Get 50% Off On Selected Items </a> |{" "}
        <Link to="/products">Shop Now</Link>
      </div>
    </>
  );
}

export default Header;
