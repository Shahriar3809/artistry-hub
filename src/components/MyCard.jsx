
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ArtCard = ({ item , allData , setAllData}) => {
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


  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5001/crafts/${id}`, {
          method: "DELETE",

        })
        .then(res=> res.json())
        .then(data=> {
          if(data.deletedCount > 0){
            Swal.fire({
              title: "Deleted!",
              text: "Your Craft item has been deleted.",
              icon: "success",
            });
            const remaining = allData.filter((item) => item._id != _id);
            setAllData(remaining);
          }
        })


        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  }

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
        <div className="card-actions justify-center">
          <Link to={`/update/${_id}`}>
            <button className="btn bg-orange-500 text-white">
              Update Craft
            </button>
          </Link>
          <Link to={`/details/${_id}`}>
            <button className="btn bg-orange-500 text-white">
              View Details
            </button>
          </Link>
        </div>
        <div>
          <button
            onClick={() => handleDelete(_id)}
            className="btn w-full bg-orange-700 font-bold text-xl text-white"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

ArtCard.propTypes = {
  item: PropTypes.object,
  allData: PropTypes.any,
  setAllData: PropTypes.func
};
export default ArtCard;
