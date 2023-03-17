import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import axios from "axios";

import Data from "../../temp";
import type { Url } from "../../type";

import Footer from "../components/Footer";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const Detail = () => {
  const [userData, setUserData] = useState<User[]>([]);

  const getUser = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  const location = useLocation();
  const detailId = location?.state.id;

  const mergedArray = userData.map((item1) => {
    const item2 = Data.find((item2) => item2.id === item1.id);
    return { ...item1, ...item2 };
  });

  return (
    <div className="w-full h-full">
      {mergedArray.map((data: any) => {
        if (data.id === detailId) {
          return (
            <div className="p-[80px] w-fit mx-auto flex justify-around">
              <img
                src={data.url}
                alt="Profile Picture"
                className="w-[600px] h-[600px] object-cover mr-10"
                loading="lazy"
                width={600}
                height={600}
              />
              <div className="w-full p-10 ml-10">
                <h2 className="text-5xl font-semibold mb-10">{data.name}</h2>
                <div className="w-full flex justify-between text-3xl">
                  <div>
                    <p className="my-3">Username</p>
                    <p className="my-3">Email</p>
                    <p className="my-3">Phone</p>
                    <p className="my-3">Website</p>
                    <p className="my-3">Address</p>
                  </div>
                  <div className="mx-10">
                    <p className="my-3">:</p>
                    <p className="my-3">:</p>
                    <p className="my-3">:</p>
                    <p className="my-3">:</p>
                    <p className="my-3">:</p>
                  </div>
                  <div>
                    <p className="my-3">{data.username}</p>
                    <p className="my-3">{data.email}</p>
                    <p className="my-3">{data.phone}</p>
                    <p className="my-3">{data.website}</p>
                    <p className="my-3">
                      {data.address?.city}, {data.address?.street},
                      {data.address?.suite}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default Detail;
