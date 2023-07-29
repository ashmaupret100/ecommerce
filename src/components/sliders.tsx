import SimpleImageSlider from "react-simple-image-slider";
import img1 from "../assets/mens.jpg";
import img2 from "../assets/shoe.jpg";
import img3 from "../assets/tshirt.jpg";

const images = [{ url: img1 }, { url: img2 }, { url: img3 }];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={1620}
        height={630}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
};

export default Slider;
