import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="flex align-center items-center justify-center flex-col">
        <h1 className="text-3xl font-extrabold">404 Error Page</h1>;
        <div className="w-44 h-40">
          <img
            src="https://as1.ftcdn.net/v2/jpg/02/15/41/96/1000_F_215419689_y053h5dnFf7IoxPaXYkraed09jeeYK0M.jpg"
            alt="error pics"
          />
        </div>
        <h2 className="font-extrabold ">
          Please go to our{" "}
          <button>
            <Link to="/">home page</Link>
          </button>
        </h2>
      </div>
    </>
  );
}

export default ErrorPage;
