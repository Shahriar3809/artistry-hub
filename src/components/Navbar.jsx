import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";


const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);
  console.log(user)


  const handleLogOut = () => {
     logOut()
       .then(() => {
        //  toast.success("Sign Out Successful");
       })
       .catch((error) => {
         console.log(error.message);
        //  toast.error("Something went wrong");
       });
  }

    const navLinks = (
      <>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/all-items">All Art & craft Items</NavLink>
        </li>
        {user ? (
          <>
            <li>
              <NavLink to="/my-craft">My craft</NavLink>
            </li>
            <li>
              <NavLink to="/add-craft">Add craft</NavLink>
            </li>
          </>
        ) : (
          " "
        )}
      </>
    );


    return (
      <div className="navbar py-5 bg-base-300 z-20">
        <div className="navbar-start">
          <div className="dropdown z-20">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Dream Art And Craft</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className=" flex gap-3 justify-center items-center">
              <div
                tabIndex={0}
                role="button"
                data-tip={user.displayName ? user.displayName : ""}
                className="tooltip  e avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    className="w-full h-full"
                    alt="Tailwind CSS Navbar component"
                    src={
                      user.photoURL
                        ? user.photoURL
                        : "https://i.ibb.co/c2n4P7t/user-128.png"
                    }
                  />
                </div>
              </div>

              <button
                onClick={handleLogOut}
                className="font-bold rounded-md bg-orange-700 py-3 px-5 text-white"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link
                to="/login"
                className="font-bold rounded-md bg-orange-700 py-3 px-5 text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="font-bold rounded-md bg-orange-700 py-3 px-5 text-white"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    );
};

export default Navbar;