import React from "react";
import { setFilter } from "../Slices/filterSlice";
import { useDispatch, useSelector } from "react-redux";

import Card from "../components/Card";

import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

interface Data {
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

interface User {
  user: string;
  name: string;
}

const Like = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state: any) => state.userFilter.filter);
  const like = useSelector((state: any) => state.userLiked.likePage);
  const navigate = useNavigate();
  return (
    <div className="w-full h-max bg-slate-200">
      <div className="px-10">
        <div className="w-full h-fit justify-between pt-10 flex">
          <p className="text-4xl pt-2 font-bold">List Of Users</p>
          <div className="relative">
            <input
              type="text"
              onChange={(e) => dispatch(setFilter(e.target.value))}
              value={filter}
              className="w-[300px] h-[45px] pl-10 pr-5 mb-10 mt-2 rounded-lg "
            />
            <AiOutlineSearch className="absolute z-50 w-5 h-5 top-[22px] left-[10px]" />
          </div>
        </div>
        <div className="w-full min-h-[570px] flex flex-wrap gap-8 justify-around">
          {like
            .filter((user: User) =>
              filter
                ? user.name.toLowerCase().toUpperCase().includes(filter)
                : true
            )
            .map((data: Data) => {
              return (
                <Card
                  key={data.id}
                  keys={data.id}
                  name={data.name}
                  username={data.username}
                  email={data.email}
                  image={data.url}
                  diKlik={() => {
                    navigate("/detail", {
                      state: {
                        id: data.id,
                      },
                    });
                  }}
                  index={data}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Like;
