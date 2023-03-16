import { useDispatch, useSelector } from "react-redux";
import { addLike } from "../Slices/likeSlice";
interface Data {
  name: string;
  username: string;
  email: string;
  image: string;
  keys: number;
  diKlik: any;
  index: any;
}

const Card = ({ name, username, email, image, keys, diKlik, index }: Data) => {
  const dispatch = useDispatch();
  const handleAddToLike = (product) => {
    dispatch(addLike(product));
  };
  const like = useSelector((state) => state.userLiked);
  console.log(like);
  return (
    <>
      <div
        key={keys}
        className="w-[400px] h-[400px] relative bg-white shadow-2xl cursor-pointer"
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
          <button
            className="bg-slate-800 text-white"
            onClick={() => handleAddToLike(index)}
          >
            Add To Favorite
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
