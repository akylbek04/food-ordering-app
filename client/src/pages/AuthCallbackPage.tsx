import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { createUser } = useCreateMyUser();
  const { user } = useAuth0();
  const userExist = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && userExist.current) {
      createUser({
        auth0Id: user.sub,
        email: user.email,
      });
      userExist.current = true;
    }
    navigate("/");
  }, [navigate, createUser, user]);

  return <p>...Loading</p>;
};

export default AuthCallbackPage;
