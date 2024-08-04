import { useMutation } from "react-query";

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const useCreateMyUser = () => {
  const createMyUserRequest = async (user: CreateUserRequest) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/my/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        }
      );

      if (!response.ok) throw new Error("failed to create a user");
    } catch (error) {
      console.log(error);
    }
  };

  const {
    mutateAsync: createUser,
    isError,
    isLoading,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isError,
    isLoading,
    isSuccess,
  };
};
