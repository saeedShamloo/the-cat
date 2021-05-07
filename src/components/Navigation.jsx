import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Sidebar from "./share/sidebar/Sidebar";
import { loadCats } from "../redux/modules/cats";
import { getCategories } from "../helpers/apiCall/fetchData";
import { notify } from "../helpers/notify/notify";

export default function Navigation() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);

  useEffect(async () => {
    try {
      const categories = await getCategories();
      setCategories(categories);
    } catch (error) {
      fetchErrorHandler();
    }
  }, []);

  const fetchErrorHandler = () =>
    notify("Something went wrong! Please refresh the page");

  const fetchCat = (id) =>
    dispatch(loadCats({ category_ids: id }, fetchErrorHandler));

  const logo = (
    <img src="https://www.devolon.fi/wp-content/uploads/2020/09/Devolon-logopurple.png" />
  );

  return <Sidebar logo={logo} items={categories} onItemClick={fetchCat} />;
}
