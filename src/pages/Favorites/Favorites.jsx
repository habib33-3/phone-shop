import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);
  const [notFound, setNotFound] = useState("");

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorite"));

    if (favoriteItems) {
      setFavorite(favoriteItems);
    } else {
      setNotFound("Not Data found");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setFavorite([]);
    setNotFound("Not Data found");
  };

  return (
    <div>
      <div className="h-[80vh] flex justify-center items-center">
        {notFound ? (
          <p>{notFound}</p>
        ) : (
          <div>
            {favorite.length > 0 && (
              <button
                onClick={handleRemove}
                className="px-5 block bg-green-200 mx-auto my-20"
              >
                Delete All Favorite
              </button>
            )}
            <div className="grid grid-cold-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {favorite.map((phone) => (
                <PhoneCard
                  phone={phone}
                  key={phone.id}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
