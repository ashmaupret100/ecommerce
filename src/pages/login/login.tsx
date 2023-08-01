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
    <div className="flex flex-col h-screen w-full bg-green-200 justify-evenly items-center">
      <div className="flex flex-col h-3/6 w-1/5 bg-gray-500 box-border border-4 border-grey-400 rounded m-1">
        <form className="flex flex-col m-4 p-2">
          <Toaster />
          <h1 className="text-2xl"> Login</h1>
          <label className=""> Email</label>
          <input
            className="rounded bg-slate-200 p-1"
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label> Password </label>
          <input
            className=" rounded bg-slate-200 p-1"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {/* <label> Confirm password</label>
      <input type="text" placeholder="Re-enter your password" /> */}

          <button className=" w-24 rounded bg-green-600 " onClick={LoginUser}>
            LogIn
          </button>
          <button
            className=" w-24 rounded bg-green-600 "
            onClick={() => {
              localStorage.removeItem("token");
            }}
          >
            SignUp
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
