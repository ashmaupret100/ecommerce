import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (email && password) {
      toast.success("Successfully created an account");
    }

    axios
      .post("http://localhost:3000/users", {
        email,
        password,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("token", response.data.accessToken);
        navigate("/signin");
      })
      .catch((e) => {
        toast.error(e.response.data);
      });
  };

  return (
    <Container>
      <form className="max-w-sm mx-auto mt-20 p-4 bg-white shadow-md rounded">
        <Toaster />
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            className="mt-1 p-1 rounded bg-gray-100 w-full"
            type="text"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            className="mt-1 p-1 rounded bg-gray-100 w-full"
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className="w-full mt-2 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
          onClick={registerUser}>
          Register
        </button>
      </form>
    </Container>
  );
}

export default Register;
