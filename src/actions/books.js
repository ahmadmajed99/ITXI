import axios from "axios";

export const getBooksByQuery = async (query) => {
  const response = await axios.get(
    `${window.env.GOOGLE_API_END_POINT_URL}books/v1/volumes?q=` +
      query +
      `&orderBy=newest&maxResults=40
          `
  );

  return response;
};
