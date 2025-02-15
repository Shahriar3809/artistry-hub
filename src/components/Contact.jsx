import { FaLocationDot, FaPeopleGroup } from "react-icons/fa6";
import { IoMdCall } from "react-icons/io";

const Contact = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl p-5 underline text-orange-600">
        Need Help? Contact Us Here..
      </h1>
      <div
        data-aos="fade-right"
        className="flex flex-col md:flex-row justify-around bg-base-200 p-5 md:p-20 gap-3 rounded-md"
      >
        <div className="bg-orange-600 rounded-lg text-white p-8 flex flex-col  gap-3 items-center">
          <FaLocationDot className="text-4xl" />
          <h2 className="text-3xl font-bold">Our Address</h2>
          <p className="text-xl text-center font-semibold ">
            99 Fifth Avenue San Francisco
          </p>
        </div>
        <div className=" bg-orange-600 rounded-lg text-white  p-8 flex flex-col gap-3 items-center">
          <IoMdCall className="text-4xl" />
          <h2 className="text-3xl font-bold">Contact Info</h2>
          <p className="text-xl font-semibold">+088 (246) 642-123-456</p>
        </div>
        <div className="bg-orange-600 rounded-lg text-white  p-8 flex flex-col gap-3 items-center">
          <FaPeopleGroup className="text-4xl" />
          <h2 className="text-3xl font-bold">Live Support</h2>
          <p className="text-xl font-semibold">shahriar3809@gmail.com</p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div>
        <div
          data-aos="fade-left"
          className="flex flex-col justify-center gap-5 items-center"
        >
          <h2 className="text-3xl text-center md:text-5xl underline text-orange-600 font-bold">
            Send Us a Message
          </h2>
          <p className="text-xl text-center">
            Do you need anything? Please Message Us..
          </p>
          <div className="flex w-full gap-3">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Your Number"
              className="input input-bordered w-full "
            />
          </div>
          <input
            type="email"
            placeholder="Your Email"
            className="input input-bordered w-full "
          />
          <textarea
            placeholder="Type Your Message Here"
            className="border w-full p-3"
            name=""
            id=""
            cols=""
            rows="10"
          ></textarea>
          <button className="btn bg-orange-600 text-white w-full text-xl font-bold">
            Send Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
