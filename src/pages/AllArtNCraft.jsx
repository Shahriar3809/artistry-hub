import { useLoaderData } from "react-router-dom";
import ArtCard from "../components/ArtCard";


const AllArtNCraft = () => {
    const allData = useLoaderData();
    console.log(allData)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {
                allData.map(item=> <ArtCard item={item} key={item._id}></ArtCard> )
            }
        </div>
    );
};

export default AllArtNCraft;