import CraftItemSection from "./CraftItemSection";
import Slider from "./Slider";


const Home = () => {
    return (
      <div className="space-y-5">
        <div>
          <Slider></Slider>
        </div>
        <div>
          <CraftItemSection></CraftItemSection>
        </div>
      </div>
    );
};

export default Home;