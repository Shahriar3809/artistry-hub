import { FaFacebook, FaReddit , FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" p-10 mt-10 bg-orange-700 text-white">
      <div className="footer max-w-[1170px] mx-auto md:p-5">
        <aside>
          <h3 className="text-3xl font-bold">Dream Art And Craft</h3>
          <p>
            Dream Art and Craft Ltd.
            <br />
            Providing reliable service since 2000
          </p>
        </aside>
        <nav className="text-center">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Art</a>
          <a className="link link-hover">Craft</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <hr /><br />
      <div className="space-y-3">
        <h2 className="text-xl text-center">Social Media: </h2>
        <div className="flex gap-3 text-3xl justify-center ">
          <FaFacebook />

          <FaInstagramSquare />
          <FaReddit />
        </div>
        <p className="text-center pt-5">
          {" "}
          Ⓒ All right reserved to Dream Art And Craft- 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
