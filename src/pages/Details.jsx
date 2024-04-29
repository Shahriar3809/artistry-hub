import { useLoaderData } from "react-router-dom";
import { FaRegStar } from "react-icons/fa";

const Details = () => {
  const data = useLoaderData();

  const {
    customization,
    user_name,
    // _id,
    photo,
    item_name,
    description,
    price,
    processing_time,
    rating,
    stock_status,
    sub_category_name,
  } = data;
  console.log(data)
  
  return (
    <div className="flex flex-col md:flex-row gap-8 p-5 bg-gray-100 rounded-lg mt-5">
      <div className="md:w-1/2 w-full">
        <img className="w-full rounded-lg h-full" src={photo} alt="" />
      </div>
      <div className="md:w-1/2 w-full space-y-5">
        <div>
          <h1 className="text-5xl text-center md:text-left p-3 md:p-0 font-bold text-orange-700">
            {item_name}
          </h1>
          <p className="font-bold my-2 text-2xl  text-black">
            Stock Status: {stock_status}
          </p>
        </div>
        <div className="flex text-xl font-bold justify-around">
          <p className="bg-orange-200 rounded-md p-2 px-4">Price: {price} $</p>
          <p className="bg-orange-200 px-4 rounded-md p-2">
            Customization: {customization}
          </p>
        </div>
        <div>
          <p>
            <span className="text-xl font-bold">Details:</span> {description}
          </p>
        </div>
        <div className="space-y-5">
          <div className="flex justify-between">
            <p className="text-xl gap-1 flex items-center font-bold">
              Ratings: {rating} <FaRegStar />
            </p>
            <p className="text-xl font-bold">Created by: {user_name}</p>
          </div>
          <p>
            <span className="text-xl font-bold">Processing Time: </span>
            <span className="underline font-bold text-2xl">
              {processing_time}
            </span>
          </p>
          <p className="text-xl bg-orange-600 text-white text-center font-bold p-2">
            Category: <span className="underline">{sub_category_name}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
