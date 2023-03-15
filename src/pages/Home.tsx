import React, { useState, useEffect } from "react";
import axios from "axios";

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

        <div className="flex justify-around gap-10 w-full flex-wrap">
          {user.map((index: Dat) => {
            return (
              <div key={index.id}>
                {Data.map((url) => {
                  return (
                    <Card
                      key={url.id}
                      keys={url.url}
                      name={index.name}
                      username={index.username}
                      email={index.email}
                      image={url.url}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
