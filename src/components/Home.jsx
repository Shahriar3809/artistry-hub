import Accordian from "./Accordian";
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
        <div className="pt-20">
          <h1 className="text-center font-bold p-3 text-3xl py-10">
            Frequently Asked Questions: FAQ
          </h1>
          <div className="border pt-5">
            <div className="flex gap-3 p-5">
              <div className="w-1/2">
                <img
                  src="https://i.ibb.co/0QmVrJ7/ask-1014060-640.jpg"
                  alt=""
                />
              </div>
              <div className="w-1/2">
                <Accordian></Accordian>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Home;