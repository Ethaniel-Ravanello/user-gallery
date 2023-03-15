import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

import Data from "../../temp";

import Crowd from "../assets/Crowd.png";
import Card from "../components/Card";

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
}

const Home = () => {
  const [user, setUser] = useState([]);
  const getUser = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  let merged = _(user)
    .concat(Data)
    .groupBy("id")
    .map(_.spread(_.merge))
    .value();
  console.log(merged);

  return (
    <div className="w-full h-max">
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
        <div className="w-full h-fit justify-between flex">
          <p className="text-4xl pt-2">List Of Users</p>
          <input type="text" className="w-[300px] h-[45px] px-5 mb-10 " />
        </div>

        <div className="grid grid-cols-4 gap-10 w-full">
          {merged.map((index: Dat) => {
            return (
              <Card
                key={index.id}
                keys={index.id}
                name={index.name}
                username={index.username}
                email={index.email}
                image={index.index}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
