interface Data {
  name: string;
  username: string;
  email: string;
  image: string;
  keys: string;
}

const Card = ({ name, username, email, image, keys }: Data) => {
  return (
    <div key={keys} className="w-[400px] h-[400px] relative bg-white">
      <div>
        <img
          src={image}
          alt=""
          className="w-full h-[200px] object-cover"
          loading="lazy"
        />
      </div>
      <div className="w-full h-full p-8">
        <h2 className="text-xl">{name}</h2>
        <h3 className="text-slate-600 mt-5">{username}</h3>
        <h3 className="text-slate-600 mt-1">{email}</h3>
      </div>
    </div>
  );
};

export default Card;
