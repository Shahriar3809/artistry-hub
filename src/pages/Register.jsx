import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle, FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useContext, useState } from "react";
import { AuthContext } from "../AuthProviders/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";



const Register = () => {
    
    const { createUser, setUser, googleLogin, githubLogin } =
      useContext(AuthContext);

       const navigate = useNavigate();

 const {
   register,
   handleSubmit,
   formState: { errors },
 } = useForm();
const [show, setShow] = useState(true);

   const onSubmit = (data) => {
     const { email, name, photo, password } = data;
     createUser(email, password)
     .then(res=> {
       console.log(res.user);
       setUser(res.user);

       Swal.fire({
         icon: "success",
         title: "Wow!",
         text: "Account created successfully",
         footer: "",
       });

       navigate('/')
       // Update Profile while registration
       updateProfile(res.user, {
         displayName: name,
         photoURL: photo,
       })
         .then((res) => {
           console.log(res, "Successfully Update");
         })
         .catch((err) => {
           console.log(err);
         });
     })
     .catch(err=> {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went Wrong",
        footer: "",
      });
      console.log(err)
     })
     console.log(email, name, photo, password);

   };




 const handleGoogleLogin = () => {
   googleLogin()
     .then((result) => {
       setUser(result.user);
      console.log(result.user)
      //  navigate(location?.state ? location.state : "/");
       
     })
     .catch((error) => {
       console.log(error);
     });
 };




  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };





    return (
      <div className="bg-gray-100">
        <h1 className="text-5xl text-center pt-10 text-black font-bold">
          Register now!
        </h1>
        <div className="hero  ">
          <div className="hero-content flex-col-reverse md:flex-row text-black  md:gap-5 lg:flex-row">
            <div className="text-center md:p-16 md:w-1/2 lg:text-left flex flex-col-reverse">
              <img
                className="p-20 md:p-10"
                src="https://i.ibb.co/1fcMRXr/Asset-1-2x.png"
                alt=""
              />
              <h1 className="text-5xl text-center text-black font-bold">
                Register now!
              </h1>
              <p className="py-6 text-center"></p>
            </div>
            <div className=" md:w-1/2 md:p-10 text-white ">
              <form onSubmit={handleSubmit(onSubmit)} className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="Name"
                    className="p-5 rounded-md"
                    required
                  />

                  <label className="label">
                    <span className="label-text text-black">Photo</span>
                  </label>
                  <input
                    type="text"
                    {...register("photo")}
                    placeholder="Photo URL"
                    className="p-5 rounded-md"
                    required
                  />

                  <label className="label">
                    <span className="label-text text-black">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", { required: true })}
                    placeholder="Email"
                    className=" p-5 rounded-md"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-black">Password</span>
                  </label>
                  <div className="relative">
                    <input
                      {...register("password", {
                        required: true,
                        pattern: {
                          value: /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/,
                          message:
                            "Password must be in one uppercase, one lowercase letters and at least 6 character",
                        },
                      })}
                      type={show ? "password" : "text"}
                      name="password"
                      placeholder="password"
                      className="input text-black input-bordered w-full"
                    />
                    <div
                      onClick={() => {
                        setShow(!show);
                      }}
                      className="absolute right-3 top-4 text-xl"
                    >
                      {show ? <FaRegEye /> : <FaRegEyeSlash />}
                    </div>
                  </div>

                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password.message}
                    </span>
                  )}

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
                    Register
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
                <Link className="text-black text-xl " to="/login">
                  Already have an account?{" "}
                  <span className="text-blue-500 font-bold underline">
                    Login
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

export default Register;