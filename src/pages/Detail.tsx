import { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../components/Footer";

const Detail = () => {
  const [userData, setUserData] = useState([]);

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
  return (
    <div className="w-full h-full">
      <div className="p-[80px] w-fit mx-auto flex justify-around">
        <img
          src="https://img.apmcdn.org/ebacb565e6ca1f8dd8bbd97d24e89dfb5c5c9b48/normal/5e48cc-20190327-keanu-reeves.jpg"
          alt=""
          className="w-[600px] h-[600px] object-cover mr-10"
          width={600}
          height={600}
        />
        <div className="w-full p-10 ml-10">
          <h2 className="text-5xl font-semibold mb-10">Keanu Reeves</h2>
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
              <p className="my-3">Keanu</p>
              <p className="my-3">keanue@gmail.com</p>
              <p className="my-3">081791938718921</p>
              <p className="my-3">keanu.com.id</p>
              <p className="my-3">Hehe</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Detail;
