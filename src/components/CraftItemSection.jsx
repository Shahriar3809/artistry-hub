import { useEffect, useState } from "react";
import ArtCard from "./ArtCard";


const CraftItemSection = () => {
    const [all, setAll] = useState(null)

    useEffect(()=> {
        fetch("http://localhost:5001/crafts")
        .then(res=> res.json())
        .then(data => setAll(data))
    }, [])

    const allArtCraft = all?.slice(0, 6)
    
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {allArtCraft
          ? allArtCraft.map((item) => (
              <ArtCard key={item._id} item={item}></ArtCard>
            ))
          : ""}
      </div>
    );
};

export default CraftItemSection;