import { useLoaderData } from "react-router-dom";

const Details = () => {
  const data = useLoaderData();

  const {
    customization,
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
  
  return (
    <div className="flex flex-col md:flex-row gap-8 p-5 bg-gray-100 rounded-lg mt-5">
      <div className="w-1/2 md:w-full">
        <img className="w-full" src={photo} alt="" />
      </div>
      <div className="w-1/2 md:w-full space-y-5">
        <div>
          <h1 className="text-5xl font-bold text-orange-700">{item_name}</h1>
          <p className="font-bold text-2xl  text-black">
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
          <p className="text-xl font-bold">Ratings: {rating}</p>
           <p>
            <span className="text-xl font-bold">Processing Time: </span>
            <span className="underline font-bold text-2xl">{processing_time}</span>
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
