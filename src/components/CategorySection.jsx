import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";


const CategorySection = () => {

    const [categoryData, setCategoryData] = useState(null)
// console.log(categoryData)
    useEffect(()=>{
        fetch("http://localhost:5001/painting")
        .then(res=> res.json())
        .then(data=> setCategoryData(data))
    },[])

    return (
      <div>
        <h2 className="text-4xl text-center p-5 pt-10 underline font-bold text-orange-600">Art and Craft Category:</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          {categoryData
            ? categoryData.map((item) => (
                <CategoryCard key={item._id} item={item}></CategoryCard>
              ))
            : ""}
        </div>
      </div>
    );
};

export default CategorySection;