import jwt_decode from "jwt-decode";

export const getUserData = () => {
  const jwtToken = localStorage.getItem("profile");
  if (jwtToken) {
    const tokenData = jwt_decode(jwtToken);
    return {
      name: tokenData?.name,
      imageUrl: tokenData?.picture,
      email: tokenData?.email,
      id: tokenData?.id ?? tokenData?.sub,
      exp: tokenData?.exp,
    };
  }
  return null;
};
