import { useContext, useEffect } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";


const MyCraft = () => {

    const {user} = useContext(AuthContext)
    const {email} = user;
    console.log(email)

  

    useEffect(()=> {
        fetch(`http://localhost:5001/myCraft/${email}`)
          .then((res) => res.json())
          .then((data) => console.log(data));
    }, [email])
    
   

    return (
        <div>
            My Craft
        </div>
    );
};

export default MyCraft;