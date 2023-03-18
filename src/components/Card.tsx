import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addLike, deleteLike } from "../Slices/likeSlice";

import { AiFillHeart } from "react-icons/ai";
interface Data {
  name: string;
  username: string;
  email: string;
  image: string;
  keys: number;
  diKlik: any;
  index: any;
}

interface LikePageItem {
  id: number;
}

interface LikeState {
  likePage: LikePageItem[];
  id: number;
}

const Card = ({ name, username, email, image, keys, diKlik, index }: Data) => {
  const [liked, setLiked] = useState(false);

  const dispatch = useDispatch();
  const like = useSelector((state: any) => state.userLiked);
  let result = like.likePage.map((a: LikeState) => a.id);

  console.log(like);
  console.log(result);
  console.log(keys);
  return (
    <>
      <div
        key={keys}
        className="w-[400px] h-[400px] relative rounded-lg bg-white shadow-2xl cursor-pointer hover:transition hover:ease-in-out  hover:-translate-y-1 hover:scale-110 duration-300"
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
            {result.includes(keys) ? (
              <AiFillHeart
                className={`w-7 h-7 text-red-600 `}
                onClick={() => {
                  dispatch(deleteLike(index)), setLiked(!liked);
                }}
              />
            ) : (
              <AiFillHeart
                className={`w-7 h-7 text-black `}
                onClick={() => {
                  dispatch(addLike(index)), setLiked(!liked);
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
