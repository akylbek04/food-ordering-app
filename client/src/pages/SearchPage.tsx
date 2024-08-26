import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();

  return <div> User searched for {city}</div>;
};

export default SearchPage;
