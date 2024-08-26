import { useSearchRestaurants } from "@/api/RestaurantApi";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();
  const { results } = useSearchRestaurants(city);

  return (
    <div>
      {" "}
      User searched for {city}
      <span>
        {results?.data.map((restaurant) => (
          <span>
            found - {restaurant.restaurantName}, {restaurant.city}
          </span>
        ))}
      </span>
    </div>
  );
};

export default SearchPage;
