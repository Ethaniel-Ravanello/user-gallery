import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setFilter } from "../Slices/filterSlice";
import axios from "axios";
import _ from "lodash";

import Data from "../../temp";

import Crowd from "../assets/Crowd.png";
import Card from "../components/Card";
import Footer from "../components/Footer";

interface Url {
  image: string;
  url: string;
  id: number;
}

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

  let merged = _(user)
    .concat(
      Data.map((data) => ({
        id: data.id,
        url: data.url,
      }))
    )
    .groupBy("id")
    .map(_.spread(_.merge))
    .value();
  console.log(merged);

  const filter = useSelector((state: any) => state.userFilter.filter);
  const dispatch = useDispatch();

  const getUser = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="w-full h-max bg-slate-200">
      <div className="w-full h-fit relative">
        <img
          src={Crowd}
          alt="Crowd Of People"
          className="h-[300px] w-full object-cover"
        />
        <div className="w-full h-[300px] bg-black/70 absolute top-0">
          <div className="flex justify-center items-center h-full">
            <p className="text-white text-center text-5xl">
              Discover New People
            </p>
          </div>
        </div>
        <div className="w-full h-fit justify-between flex px-10">
          <p className="text-4xl pt-2">List Of Users</p>
          <input
            type="text"
            onChange={(e) => dispatch(setFilter(e.target.value))}
            value={filter}
            className="w-[300px] h-[45px] px-5 mb-10 mt-2 rounded-lg "
          />
        </div>

        <div className="flex justify-around flex-wrap gap-8 w-full px-8">
          {merged
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
      <Footer />
    </div>
  );
};

export default Home;
