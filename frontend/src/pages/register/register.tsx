import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

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
      .post("http://localhost:3000/", {
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
    <form>
      <Toaster />
      <h1> Sign Up</h1>
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
      <input
        className="ml-4 rounded bg-slate-200 p-1"
        type="text"
        placeholder="Re-enter your password"
        onChange={(e) => setConfirmpassword(e.target.value)}
      /> */}

      <button className="ml-4 rounded bg-blue-600 p-1" onClick={registerUser}>
        {" "}
        Register
      </button>
    </form>
  );
}

export default Register;
