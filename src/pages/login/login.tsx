import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function LoginUser(e) {
    e.preventDefault();

    if (!email) {
      toast.error(" Please Enter Email");
    }
    if (!password) {
      // Display an error toast if  password is missing
      toast.error("Please Enter Password");
    }

    // axios.post("http://localhost:3000/signin", { email, password });
    axios
      .post("http://localhost:3000/signin", { email, password })
      .then((response) => {
        toast.success("Logged in successfully");
        setEmail("");
        setPassword("");
        console.log(response);

        // Saving the token in localstorage
        localStorage.setItem("session-token", response.data.accessToken);

        //redirect to cart
        navigate("/cart");
      })
      .catch((event: any) => {
        // Display an error toast if the login attempt fails
        toast.error(event.response.data);
      });
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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <label> Password </label>
      <input
        className="ml-4 rounded bg-slate-200 p-1"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {/* <label> Confirm password</label>
      <input type="text" placeholder="Re-enter your password" /> */}

      <button className="ml-4 rounded bg-blue-600 p-1" onClick={LoginUser}>
        {" "}
        Login
      </button>
      <button
        className="ml-4 rounded bg-blue-600 p-1"
        onClick={() => {
          localStorage.removeItem("token");
        }}>
        {" "}
        LogOut
      </button>
    </form>
  );
}

export default Login;
