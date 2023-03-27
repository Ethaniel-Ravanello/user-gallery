import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  return (
    <div className="w-full h-fit bg-[#131418] text-white">
      <div className=" py-5 px-10 flex justify-evenly">
        <h2 className="pt-2 text-xl">USERS</h2>
        <div className="flex w-fit">
          <p
            onClick={() => navigate("/")}
            className={`text-xl cursor-pointer font-bold w-fit ml-10 pt-2 ${
              pathname === "/" ? "border-b-2 border-white" : ""
            } `}
          >
            Home
          </p>
          <p
            onClick={() => navigate("/liked")}
            className={`text-xl cursor-pointer font-bold w-fit ml-10 pt-2 ${
              pathname === "/liked" ? "border-b-2 border-white" : ""
            }`}
          >
            Like
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
