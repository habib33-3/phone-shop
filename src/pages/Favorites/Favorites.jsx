import { useEffect, useState } from "react";
import PhoneCard from "../Phone/PhoneCard";

const Favorites = () => {
  const [favorite, setFavorite] = useState([]);
  const [notFound, setNotFound] = useState("");
  const [isShow, setIsShow] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const favoriteItems = JSON.parse(localStorage.getItem("favorite"));

    if (favoriteItems) {
      setFavorite(favoriteItems);

      const total = favoriteItems.reduce(
        (preValue, currentItem) => preValue + currentItem.price,
        0
      );
      setTotalPrice(total);
    } else {
      setNotFound("No Data found");
    }
  }, []);

  const handleRemove = () => {
    localStorage.clear();
    setFavorite([]);
    setNotFound("Not Data found");
  };

  return (
    <div>
      <div className=" flex justify-center items-center">
        {notFound ? (
          <p>{notFound}</p>
        ) : (
          <div>
            {favorite.length > 0 && (
              <div className="my-20">
                <button
                  onClick={handleRemove}
                  className="px-5 block bg-green-200 mx-auto "
                >
                  Delete All Favorite
                </button>
                <p>{totalPrice}</p>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {isShow
                ? favorite.map((phone) => (
                    <PhoneCard
                      phone={phone}
                      key={phone.id}
                    />
                  ))
                : favorite.slice(0, 4).map((phone) => (
                    <PhoneCard
                      phone={phone}
                      key={phone.id}
                    />
                  ))}
            </div>

            <button
              onClick={() => setIsShow(!isShow)}
              className="px-5 block bg-green-200 mx-auto my-20"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
