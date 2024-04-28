import { useLoaderData } from "react-router-dom";
import ArtCard from "../components/ArtCard";


const CategoryData = () => {
    const allCategoryData = useLoaderData();
    console.log(allCategoryData)
    return (
      <div>
        <div>
          <h1 className="text-2xl text-center font-bold p-5 pt-10 text-orange-600 underline">Category: {allCategoryData ?  allCategoryData[0].sub_category_name : ''}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-5">
          {allCategoryData
            ? allCategoryData.map((item) => (
                <ArtCard key={item._id} item={item}></ArtCard>
              ))
            : ""}
        </div>
      </div>
    );
};

export default CategoryData;