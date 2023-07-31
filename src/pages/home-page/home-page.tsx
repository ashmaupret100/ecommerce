import { Link } from "react-router-dom";
import Container from "../../components/container";

function Homepage() {
  return (
    <>
      <Container>
        <div>
          {/* Image */}

          <div
            className="bg-cover bg-center w-full h-96"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
            }}></div>

          {/* Overlapping div */}
          <div className="absolute left-60 top-60">
            <div className="flex flex-col mt-20 mr-80">
              <p className="text-xl font-bold text-green-800">
                Grab Upto 50% Off on Selected Items
              </p>
              <Link to="/products">
                <button className="bg-green-700 text-white border border-transparent rounded-full py-2 px-4 text-sm mt-6 hover:bg-green-800 hover:text-white w-auto">
                  Shop Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Homepage;
