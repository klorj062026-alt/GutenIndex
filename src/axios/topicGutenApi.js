import { api_guten } from "./gutenApi";

export const topicBook = async (topic, page) => {
  const res = await api_guten.get("", {
    params: { topic, page },
  });
  return res.data;
};
