import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/user-profile"
        className="flex bg-white items-center font-bold hover:text-lime-500 cursor-pointer"
      >
        User Profile
      </Link>
      <Button
        className="flex items-center font-bold px-3 hover:bg-gray-500 cursor-pointer"
        onClick={() => logout()}
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
