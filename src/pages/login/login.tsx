// import { useState } from "react";
// import toast, { Toaster } from "react-hot-toast";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   function LoginUser(e) {
//     e.preventDefault();

//     if (!email) {
//       toast.error(" Please Enter Email");
//     }
//     if (!password) {
//       // Display an error toast if  password is missing
//       toast.error("Please Enter Password");
//     }

//     // axios.post("http://localhost:3000/signin", { email, password });
//     axios
//       .post("http://localhost:3000/signin", { email, password })
//       .then((response) => {
//         toast.success("Logged in successfully");
//         setEmail("");
//         setPassword("");
//         console.log(response);

//         // Saving the token in localstorage
//         localStorage.setItem("session-token", response.data.accessToken);

//         //redirect to cart
//         navigate("/cart");
//       })
//       .catch((event: any) => {
//         // Display an error toast if the login attempt fails
//         toast.error(event.response.data);
//       });
//   }
//   return (
//     <form>
//       <Toaster />
//       <h1> Login</h1>
//       <label> Email</label>
//       <input
//         className="ml-4 rounded bg-slate-200 p-1"
//         type="text"
//         placeholder="Enter your email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <label> Password </label>
//       <input
//         className="ml-4 rounded bg-slate-200 p-1"
//         type="password"
//         placeholder="Enter your password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="ml-4 rounded bg-blue-600 p-1" onClick={LoginUser}>
//         {" "}
//         Login
//       </button>
//       <button
//         className="ml-4 rounded bg-blue-600 p-1"
//         onClick={() => {
//           localStorage.removeItem("token");
//         }}>
//         {" "}
//         LogOut
//       </button>
//     </form>
//   );
// }

// export default Login;
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Container from "../../components/container";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false); // To track the login process
  const navigate = useNavigate();

  function loginUser(e) {
    e.preventDefault();

    if (!email) {
      toast.error("Please Enter Email");
      return;
    }
    if (!password) {
      toast.error("Please Enter Password");
      return;
    }

    setIsLoggingIn(true); // Start the login process

    axios
      .post("http://localhost:3000/signin", { email, password })
      .then((response) => {
        toast.success("Logged in successfully");
        setEmail("");
        setPassword("");
        console.log(response);

        // Saving the token in localstorage
        localStorage.setItem("session-token", response.data.accessToken);

        // Redirect to cart after successful login
        navigate("/cart");
      })
      .catch((error) => {
        // Display an error toast if the login attempt fails
        toast.error(error.response.data.message);
      })
      .finally(() => {
        setIsLoggingIn(false); // Finish the login process
      });
  }

  return (
    <Container>
      <form className="max-w-sm mx-auto mt-8 p-4 bg-white shadow-md rounded">
        <Toaster />
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            className="mt-1 p-1 rounded bg-gray-100 w-full"
            type="text"
            placeholder="Enter your email"
            value={email}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          className={`w-full mt-2 px-4 py-2 bg-green-700 text-white rounded ${
            isLoggingIn ? "opacity-50 cursor-not-allowed" : "hover:bg-green-800"
          }`}
          onClick={loginUser}
          disabled={isLoggingIn} // Disable the button during login process
        >
          {isLoggingIn ? "Logging in..." : "Login"}
        </button>
        <button
          className="w-full mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          onClick={() => {
            localStorage.removeItem("session-token");
          }}>
          Logout
        </button>
      </form>
    </Container>
  );
}

export default Login;
