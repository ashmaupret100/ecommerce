import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { AiFillFacebook, AiFillGoogleCircle } from "react-icons/ai";
import { FaInstagramSquare } from "react-icons/fa";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [confirmpassword, setConfrimpassword] = useState("");
  console.log("email");
  console.log("password");

  const registerUser = (e) => {
    e.preventDefault();
    if (email && password) {
      toast.success(" Successfully created an account");
    }

    axios
      .post("http://localhost:3000/users", {
        email,
        password,
        // confirmpassword,
      })
      .then((response) => {
        console.log(response);

        localStorage.setItem("token", response.data.accessToken);
      })
      .catch((e) => {
        toast.error(e.response.data);
      });
  };
  return (
    <div className="flex flex-col h-screen w-full bg-green-200 justify-evenly items-center">
      <div className="flex flex-col justify-center items-center h-3/6 w-1/5 bg-gray-500 box-border border-4 border-grey-200 rounded ">
        <form className="flex flex-col justify-center items-center">
          <Toaster />
          <h1 className="text-2xl items-center"> Sign Up</h1>
          <label className="ml-3"> Email</label>
          <input
            className="rounded bg-slate-200 p-1"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label> Password </label>
          <input
            className="rounded bg-slate-200 p-1"
            type="text"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* <label> Confirm password</label>
      <input
        className="ml-4 rounded bg-slate-200 p-1"
        type="text"
        placeholder="Re-enter your password"
        onChange={(e) => setConfirmpassword(e.target.value)}
      /> */}

          <button className="rounded bg-blue-600 w-32" onClick={registerUser}>
            Register
          </button>
        </form>
        <div> Or Sign Up Using</div>
        <div className="flex flex-row items-center">
          <FaInstagramSquare size={25} /> <AiFillFacebook size={25} />{" "}
          <AiFillGoogleCircle size={25} />
        </div>
      </div>
    </div>
  );
}

export default Register;
