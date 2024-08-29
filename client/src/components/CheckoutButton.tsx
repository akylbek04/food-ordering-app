import { useAuth0 } from "@auth0/auth0-react";
import { useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import LoadingButton from "./LoadingButton";

const CheckoutButton = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    isLoading: isAuthLoading,
  } = useAuth0();

  const { pathname } = useLocation();

  const onLogin = async () => {
    await loginWithRedirect({
      appState: {
        returnTo: pathname,
      },
    });
  };

  if (!isAuthenticated) {
    return (
      <Button onClick={onLogin} className="bg-lime-500 flex-1">
        Login to checkout
      </Button>
    );
  }

  if (isAuthLoading) {
    return <LoadingButton />;
  }

  return <Button></Button>;
};

export default CheckoutButton;
