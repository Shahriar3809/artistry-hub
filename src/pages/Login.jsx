
// import { useContext } from "react";
import { useContext } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProviders/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
  
const { loginUser, setUser, githubLogin, googleLogin } =
  useContext(AuthContext);
const location = useLocation();
const navigate = useNavigate();


  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email, password)
    loginUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
        event.target.reset();
        Swal.fire({
          icon: "success",
          title: "Nice",
          text: "Login Successful",
          footer: "",
        });
      })
      .catch((error) => {
        console.log(error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email or Password not matched.",
          footer: '',
        });
      });
  };




   const handleGoogleLogin = () => {
     googleLogin()
       .then((result) => {
        //  setUser(result.user);
         console.log(result.user);
         navigate(location?.state ? location.state : "/");
       })
       .catch((error) => {
         console.log(error);
       });
   };

   const handleGithubLogin = () => {
     githubLogin()
       .then((result) => {
        //  setUser(result.user);
        console.log(result.user)
         navigate(location?.state ? location.state : "/");
       })
       .catch((error) => {
         console.log(error.message);
       });
   };




    return (
      <div className="bg-gray-100">
        <h1 className="text-5xl text-center pt-10 text-black font-bold">
          Login now!
        </h1>
        <div className="hero  ">
          <div className="hero-content flex-col-reverse md:flex-row text-white  md:gap-5 lg:flex-row">
            <div className="text-center md:p-16 md:w-1/2 lg:text-left flex flex-col-reverse">
              <img
                className="p-20 md:p-10"
                src="https://i.ibb.co/1fcMRXr/Asset-1-2x.png"
                alt=""
              />

              <p className="py-6 text-center"></p>
            </div>
            <div className=" md:w-1/2 md:p-10 text-white ">
              <form onSubmit={handleLogin} className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className=" p-5 rounded-md text-gray-500"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="p-5 rounded-md text-gray-500"
                    required
                  />
                  <label className="label">
                    <a
                      href="#"
                      className="label-text-alt text-black link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary font-bold text-xl">
                    Login
                  </button>
                </div>
              </form>

              <div className="flex flex-col md:flex-row mx-8 gap-3 md:mx-0 text-black mt-10 md:gap-0 justify-around mb-5">
                <button
                  onClick={handleGoogleLogin}
                  className="font-bold flex gap-3 items-center border px-12 py-3 hover:bg-blue-700 hover:text-white rounded-md"
                >
                  <FaGoogle className="text-xl" />
                  Google
                </button>
                <button
                  onClick={handleGithubLogin}
                  className="font-bold flex gap-3 items-center border px-12 py-3 hover:bg-blue-700 hover:text-white rounded-md"
                >
                  <FaGithub className="text-xl" />
                  Github
                </button>
              </div>

              <div className="mt-6">
                <Link className="text-black text-xl " to="/register">
                  Do not have an account?{" "}
                  <span className="text-blue-500 font-bold underline">
                    Register
                  </span>{" "}
                  Here.
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;