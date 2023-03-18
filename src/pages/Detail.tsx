import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import Data from "../../temp";

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
      .catch((err) => {});
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
            <div className="w-full h-full mx-auto lg:flex justify-around">
              <div className="w-full h-full">
                <img
                  src={data.url}
                  alt="Profile Picture"
                  className="w-full lg:h-screen object-cover"
                  loading="lazy"
                />
              </div>
              <div className="w-full h-full p-2 lg:p-10 ">
                <h2 className="text-5xl font-semibold mb-10">{data.name}</h2>
                <div className="w-full flex justify-between text-xl lg:text-3xl">
                  <div>
                    <p className="my-3">Username</p>
                    <p className="my-3">Email</p>
                    <p className="my-3">Phone</p>
                    <p className="my-3">Website</p>
                    <p className="my-3">Address</p>
                  </div>

                  <div className="mx-5">
                    <p className="my-3">:</p>
                    <p className="my-3">:</p>
                    <p className="my-3">:</p>
                    <p className="my-3">:</p>
                    <p className="my-3">:</p>
                  </div>

                  <div className="w-fit">
                    <p className="my-3 max-w-fit h-fit break-all flex-wrap">
                      {data.username}
                    </p>
                    <p className="my-3 max-w-fit h-fit break-all flex-wrap">
                      {data.email}
                    </p>
                    <p className="my-3 max-w-fit h-fit break-all flex-wrap">
                      {data.phone}
                    </p>
                    <p className="my-3 max-w-fit h-fit break-all flex-wrap">
                      {data.website}
                    </p>
                    <p className="my-3 max-w-fit h-fit break-all flex-wrap">
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
