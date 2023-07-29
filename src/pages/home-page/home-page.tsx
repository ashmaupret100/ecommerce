import Container from "../../components/container";
import Header from "../../components/header";
import Slider from "../../components/sliders";

function Homepage() {
  return (
    <>
      <Container>
        <Slider />
        <div className="absolute right-60 top-40 ">
          <button>Shop Now</button>
          <button className="bg-green-700 border border-transparent rounded-full py-2 px-4 text-black hover:bg-green-800 hover:text-white text-sm">
            Add To Cart
          </button>
        </div>
      </Container>
      <div className="bg-red-100">Homepage</div>
    </>
  );
}

export default Homepage;
