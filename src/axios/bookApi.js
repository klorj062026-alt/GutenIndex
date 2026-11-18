import { api_guten } from "./gutenApi";

export const fetchBook = async (id) => {
  const res = await api_guten.get(id);
  return res.data;
};
