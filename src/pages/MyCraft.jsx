import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import ArtCard from '../components/ArtCard'

const MyCraft = () => {

    const {user} = useContext(AuthContext)
    const {email} = user;
    console.log(email)

    const [allData, setAllData] = useState(null)

    console.log(allData)
  

    useEffect(()=> {
        fetch(`http://localhost:5001/myCraft/${email}`)
          .then((res) => res.json())
          .then((data) => setAllData(data));
    }, [email])
    
   

    return (
        <div>
           <h2>My Added Craft</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {allData ? allData.map((item)=> <ArtCard key={item._id} item={item}></ArtCard>) : 'No Data Found'}
           </div>
        </div>
    );
};

export default MyCraft;