import PropTypes from "prop-types";
import { Link } from "react-router-dom";


const ArtCard = ({ item }) => {
    const {
      // customization,
      _id,
      photo,
      item_name,
      description,
    //   price,
      processing_time,
    //   rating,
      stock_status, 
    //   sub_category_name,
    

    } = item;

  

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="photo" />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-2xl">{item_name}</h2>
        <p className="">{description}</p>
        <div>
          <div className="flex justify-between">
            <p className="underline">
              Stock: <span className="font-bold ">{stock_status}</span>
            </p>
            <p>
              Processing Time: <span>{processing_time}</span>
            </p>
          </div>
        </div>
        <div className="card-actions justify-end">
          
          <Link to={`/details/${_id}`}>
            <button className="btn bg-orange-600 text-white">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};


ArtCard.propTypes = {
  item: PropTypes.object,
};
export default ArtCard;
