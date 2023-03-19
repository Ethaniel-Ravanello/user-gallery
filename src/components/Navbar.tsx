import { useNavigate } from "react-router-dom";

import Logo from "/logo.png";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-fit bg-[#131418] text-white">
      <div className=" py-5 px-10 flex justify-evenly">
        <h2 className="pt-2 text-xl">USERS</h2>
        <div className="flex w-fit">
          <p
            onClick={() => navigate("/")}
            className="text-xl cursor-pointer font-bold w-fit ml-10 pt-2"
          >
            Home
          </p>
          <p
            onClick={() => navigate("/liked")}
            className="text-xl cursor-pointer font-bold w-fit ml-10 pt-2"
          >
            Like
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
