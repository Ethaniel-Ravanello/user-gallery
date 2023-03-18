import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addLike } from "../Slices/likeSlice";

import { AiFillHeart } from "react-icons/ai";
interface Data {
  name: string;
  username: string;
  email: string;
  image: string;
  keys: number;
  diKlik: any;
  index: any;
  dispatchs: any;
  heart: any;
}

const Card = ({
  name,
  username,
  email,
  image,
  keys,
  diKlik,
  index,
  dispatchs,
  heart,
}: Data) => {
  const dispatch = useDispatch();
  const like = useSelector((state: any) => state.userLiked);
  console.log(like);
  const [liked, setLiked] = useState(false);
  return (
    <>
      <div
        key={keys}
        className="w-[400px] h-[400px] relative bg-white shadow-2xl cursor-pointer hover:transition hover:ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
      >
        <div>
          <img
            src={image}
            onClick={diKlik}
            alt=""
            className="w-full h-[200px] object-cover"
            loading="lazy"
          />
        </div>
        <div className="w-full h-full p-8">
          <h2 className="text-xl">{name}</h2>
          <h3 className="text-slate-600 mt-5">{username}</h3>
          <h3 className="text-slate-600 mt-1">{email}</h3>
          <div className="w-full h-fit pt-6 pb-2">
            <AiFillHeart
              className={`w-7 h-7 ${liked ? "text-red-600" : "text-black"}`}
              onClick={() => {
                dispatch(addLike(index)), setLiked(!liked);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
