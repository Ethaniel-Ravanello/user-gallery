import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import _ from "lodash";
import axios from "axios";

import Data from "../../temp";

import Footer from "../components/Footer";

const Detail = () => {
  const [userData, setUserData] = useState([]);

  const getUser = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUserData(res.data);
        console.log(res.data);
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
  console.log(detailId);

  let merged = _(userData)
    .concat(Data)
    .groupBy("id")
    .map(_.spread(_.merge))
    .value();
  console.log(merged);
  return (
    <div className="w-full h-full">
      {merged.map((data) => {
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
                      {data.address?.city}, {data.address?.street},{" "}
                      {data.address?.suite}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      })}
      <Footer />
    </div>
  );
};

export default Detail;
