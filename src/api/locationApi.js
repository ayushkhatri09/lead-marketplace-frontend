import axios from "axios";

export const searchAddress = async (query) => {
  const response = await axios.get(
    "https://nominatim.openstreetmap.org/search",
    {
      params: {
        q: query,
        format: "jsonv2",
        limit: 5,
      },
      headers: {
        Accept: "application/json",
      },
    }
  );

  return response.data;
};