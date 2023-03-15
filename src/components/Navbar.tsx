import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-fit bg-[#131418] text-white">
      <div className=" py-5 px-10">
        <p
          onClick={() => navigate("/")}
          className="font-bold text-xl cursor-pointer w-fit"
        >
          USERS
        </p>
      </div>
    </div>
  );
};

export default Navbar;
