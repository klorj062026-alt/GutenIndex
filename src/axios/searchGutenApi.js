import { api_guten } from "./gutenApi";

export const searchBook = async (search, page) => {
  const res = await api_guten.get("", {
    params: { search, page },
  });
  return res.data;
};
