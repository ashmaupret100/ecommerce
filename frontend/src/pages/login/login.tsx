import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  console.log("email");
  console.log("password");

  function registerUser(e) {
    e.preventDefault();

    if (email && password) {
      toast.success(" Successfully logged in");
    }

    axios.post("http://localhost:3000/signin", { email, password });
  }
  return (
    <form>
      <Toaster />
      <h1> Login</h1>
      <label> Email</label>
      <input
        className="ml-4 rounded bg-slate-200 p-1"
        type="text"
        placeholder="Enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <label> Password </label>
      <input
        className="ml-4 rounded bg-slate-200 p-1"
        type="text"
        placeholder="Enter your password"
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* <label> Confirm password</label>
      <input type="text" placeholder="Re-enter your password" /> */}

      <button className="ml-4 rounded bg-blue-600 p-1" onClick={registerUser}>
        {" "}
        Login
      </button>
    </form>
  );
}

export default Register;
