import { useContext, useEffect, useState } from "react";
import ArtCard from "./ArtCard";
import { AuthContext } from "../AuthProviders/AuthProvider";


const CraftItemSection = () => {
    const [all, setAll] = useState(null)
    const { loading } = useContext(AuthContext);

    useEffect(()=> {
        fetch("https://art-and-craft-server-two.vercel.app/crafts")
        .then(res=> res.json())
        .then(data => setAll(data))
    }, [])

    const allArtCraft = all?.slice(0, 6)
    


    if (loading) {
      return (
        <>
          <div className="flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        </>
      );
    }
    
    return (
      <div>
        <h1 className="text-3xl font-bold text-center p-5 underline text-orange-600">
          Some Art and Craft:
        </h1>
        <p className="max-w-[500px] mx-auto pt-0 p-5 text-center">
          Some art and carft item from added item from all user of our site.
          Here you can see some art and crafts.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allArtCraft
            ? allArtCraft.map((item) => (
                <ArtCard key={item._id} item={item}></ArtCard>
              ))
            : ""}
        </div>
      </div>
    );
};

export default CraftItemSection;