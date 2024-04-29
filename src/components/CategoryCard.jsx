import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const CategoryCard = ({ item }) => {
  const {
    
    photo,
    item_name,
    description,
      
      sub_category_name,
  } = item;
  return (
    <div className=" border card-side bg-base-100 shadow-xl">
      <figure>
        <img className="w-3/3 h-[450px] " src={photo} alt="Movie" />
      </figure>
      <div className="p-2 space-y-3">
        <div className="flex justify-between">
          <h2 className="card-title font-bold text-2xl">{item_name}</h2>
          <h2 className="bg-orange-300 rounded-l-full px-8 -mr-2 font-bold text-gray-700 p-3">Category: {sub_category_name}</h2>
        </div>
        <p>{description}</p>
        <div className="card-actions ">
          <Link
            to={`/categoryData/${sub_category_name}`}
            className="btn bg-orange-600 text-white w-full md:text-xl font-bold"
          >
            {" "}
            See {sub_category_name} Category Data
          </Link>
        </div>
      </div>
    </div>
  );
};

CategoryCard.propTypes = {
  item: PropTypes.any,
};
export default CategoryCard;
