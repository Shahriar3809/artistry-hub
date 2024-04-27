import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import MyCard from "../components/MyCard";

const MyCraft = () => {

    const {user} = useContext(AuthContext)
    const {email} = user;
    // console.log(email)

    const [allData, setAllData] = useState(null)

    // console.log(allData)
  

    useEffect(()=> {
        fetch(`http://localhost:5001/myCraft/${email}`)
          .then((res) => res.json())
          .then((data) => setAllData(data));
    }, [email])
    
   

    return (
      <div>
        <h2 className="text-2xl p-5 font-bold text-center text-orange-700">
          My Added Craft
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {allData ? (
            allData.map((item) => (
              <MyCard key={item._id} item={item} allData={allData} setAllData={setAllData}></MyCard>
            ))
          ) : (
            <p className="">No Data Found</p>
          )}
        </div>
      </div>
    );
};

export default MyCraft;