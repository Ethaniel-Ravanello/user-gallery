import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../Slices/filterSlice";
import axios from "axios";

import Data from "../../temp";

import Crowd from "../assets/Crowd.png";
import Card from "../components/Card";
import { AiOutlineSearch } from "react-icons/ai";

interface Dat {
  id: number;
  key: number;
  keys: number;
  name: string;
  username: string;
  email: string;
  image: string;
  url: string;
  index: any;
}

const Home = () => {
  const [user, setUser] = useState<Dat[]>([]);
  const navigate = useNavigate();

  const filter = useSelector((state: any) => state.userFilter.filter);
  const dispatch = useDispatch();

  const getUser = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getUser();
  }, []);

  const mergedArray = user.map((item1) => {
    const item2 = Data.find((item2) => item2.id === item1.id);
    return { ...item1, ...item2 };
  });

  return (
    <div className="w-full h-max bg-[#131418]">
      <div className="w-full h-fit relative s">
        <img
          src={Crowd}
          alt="Crowd Of People"
          className="h-[500px] w-full object-cover"
        />

        <div className="w-full h-[500px] bg-black/70 absolute top-0">
          <div className="flex justify-center items-center h-full">
            <p className="text-white text-center text-5xl">
              Discover New Peoples
            </p>
          </div>
        </div>

        <div className="w-full h-fit justify-between mt-5 lg:flex px-10">
          <p className="text-4xl text-white pt-2 font-bold">List Of Users</p>
          <div className="relative">
            <input
              type="text"
              onChange={(e) => dispatch(setFilter(e.target.value))}
              value={filter}
              className="w-[80%] h-[45px] pl-10 pr-5 mb-10 mt-2 rounded-lg "
            />
            <AiOutlineSearch className="absolute z-50 w-5 h-5 top-[22px] left-[10px]" />
          </div>
        </div>

        <div className="flex justify-around flex-wrap gap-8 w-full px-8">
          {mergedArray
            .filter((user) =>
              filter ? user.name.toLowerCase().includes(filter) : true
            )
            .map((index: Dat) => {
              return (
                <Card
                  key={index.id}
                  keys={index.id}
                  name={index.name}
                  username={index.username}
                  email={index.email}
                  image={index.url}
                  index={index}
                  diKlik={() => {
                    navigate("/detail", {
                      state: {
                        id: index.id,
                      },
                    });
                  }}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
