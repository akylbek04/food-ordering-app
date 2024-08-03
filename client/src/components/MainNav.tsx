import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Button
      variant="ghost"
      className="font-bold hover:text-lime-500 hover:bg-white"
      onClick={async () => await loginWithRedirect()}
    >
      Log In
    </Button>
  );
};

export default MainNav;
