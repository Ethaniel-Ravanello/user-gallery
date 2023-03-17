import { useNavigate } from "react-router-dom";

import Logo from "../assets/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-fit bg-[#131418] text-white">
      <div className=" py-5 px-10 flex justify-evenly">
        <img
          src={Logo}
          onClick={() => navigate("/")}
          alt="Nav Logo"
          className="object-contain cursor-pointer"
          width={50}
          height={50}
        />
        <p
          onClick={() => navigate("/liked")}
          className="text-xl cursor-pointer font-bold w-fit ml-10 pt-2"
        >
          Like People
        </p>
      </div>
    </div>
  );
};

export default Navbar;
