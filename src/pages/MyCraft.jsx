import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import MyCard from "../components/MyCard";
import { IoIosArrowDown } from "react-icons/io";

const MyCraft = () => {

const { user, loading } = useContext(AuthContext);
const { email } = user;
const [originalData, setOriginalData] = useState(null);
const [filteredData, setFilteredData] = useState(null);

useEffect(() => {
    fetch(`https://art-and-craft-server-two.vercel.app/myCraft/${email}`)
        .then((res) => res.json())
        .then((data) => {
            setOriginalData(data);
            setFilteredData(data); // Initialize filteredData with original data
        });
}, [email]);


const handleYes = () => {
    const filteredDataYes = originalData.filter((item) => item.customization === "Yes");
    setFilteredData(filteredDataYes);
};

const handleNo = () => {
    const filteredDataNo = originalData.filter((item) => item.customization === "No");
    setFilteredData(filteredDataNo);
};

//----------------------------------------------

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
        <h2 className="text-2xl m-5 font-bold text-center text-orange-700">
          Craft Added By Me:
        </h2>

        <div className=" w-[250px] mx-auto pl-6 mb-5">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn">
              Filter By Customization
              <IoIosArrowDown />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={handleYes}>Yes</a>
              </li>
              <li>
                <a onClick={handleNo}>No</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-3 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredData ? (
            filteredData.map((item) => (
              <MyCard
                key={item._id}
                item={item}
                filteredData={filteredData}
                setFilteredData={setFilteredData}
              ></MyCard>
            ))
          ) : (
            <p className=""> </p>
          )}
        </div>
      </div>
    );
};

export default MyCraft;