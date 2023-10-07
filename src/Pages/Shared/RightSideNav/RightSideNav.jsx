import { FaGoogle, FaGithub,FaFacebook,FaTwitter,FaInstagram } from "react-icons/fa";
import QZone1 from "../../../assets/qZone1.png"
import QZone2 from "../../../assets/qZone2.png"
import QZone3 from "../../../assets/qZone3.png"

const RightSideNav = () => {
  return (
    <div className="mb-20">
      {/* Login */}
      <div className="p-1 flex flex-col gap-4 text-center mb-6">
        <h2 className="text-3xl text-start">Login With</h2>
        <button className="btn w-full">
          <FaGoogle className="text-xl"></FaGoogle>
          Google
        </button>
        <button className="btn w-full">
          <FaGithub className="text-xl"></FaGithub>
          Github
        </button>
      </div>

      {/*Find Us */}
      <div className="p-1  mb-6">
        <h2 className="text-3xl">Find Us On</h2>
        <div className="flex flex-col mt-3">

        <a href="" className="px-4 text-lg text-gray-700 border border-b-0 py-2">
            <FaFacebook className="inline-block mr-2"></FaFacebook>
            Facebook
        </a>
        <a href="" className="px-4 text-lg text-gray-700 border border-b-0 py-2">
            <FaTwitter className="inline-block mr-2"></FaTwitter>
            Twitter
        </a>
        <a href="" className="px-4 text-lg text-gray-700 border py-2">
            <FaInstagram className="inline-block mr-2"></FaInstagram>
            Instagram
        </a>
        </div>
      </div>

      {/*Q-Zone  */}
      <div className="p-1 flex flex-col gap-4 mb-6">
        <h2 className="text-3xl">Q-Zone</h2>
        <img className="shadow-md" src={QZone1} alt="" />
        <img className="shadow-md" src={QZone2} alt="" />
        <img className="shadow-md" src={QZone3} alt="" />
      </div>
    </div>
  );
};

export default RightSideNav;
