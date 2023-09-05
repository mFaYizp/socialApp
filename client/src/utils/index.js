export const getUserData = async () => {
  try {
    const access_token = localStorage.getItem("profile");

    const response = await fetch(
      "https://www.googleapis.com/oauth2/v2/userinfo",
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch user data");
    }

    const data = await response.json();

    if (data) {
      return {
        name: data?.name,
        imageUrl: data?.picture,
        email: data?.email,
        id: data?.id,
      };
    }

    return null;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
