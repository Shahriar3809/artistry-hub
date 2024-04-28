import { Link, useLoaderData } from "react-router-dom";
// import ArtCard from "../components/ArtCard";


const AllArtNCraft = () => {
    const allData = useLoaderData();
    console.log(allData)
    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Item</th>
              <th>Price</th>
              <th>Rating</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {allData.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>{item.item_name}</td>
                <td>$ {item.price} </td>
                <td>{item.rating}</td>
                <td>
                  <Link className="bg-orange-500 p-2 text-white rounded-sm" to={`/details/${item._id}`}>
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      //     {
      //         allData.map(item=> <ArtCard item={item} key={item._id}></ArtCard> )
      //     }
      // </div>
    );
};

export default AllArtNCraft;