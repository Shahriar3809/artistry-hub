import CategorySection from "./CategorySection";
import CraftItemSection from "./CraftItemSection";
import Slider from "./Slider";


const Home = () => {
    return (
      <div className="space-y-5 p-2 md:p-0">
        <div>
          <Slider></Slider>
        </div>
        <div>
          <CraftItemSection></CraftItemSection>
        </div>
        <div>
          <CategorySection></CategorySection>
        </div>
      </div>
    );
};

export default Home;