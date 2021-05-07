import req from "../../lib/ajax/request";

export const getCats = async (params) =>
  await req.get("images/search?", { ...params, limit: 10 });
export const getCategories = async () => await req.get("categories", {});
