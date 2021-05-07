import React from "react";
import { useDispatch } from "react-redux";
import { notify } from "../helpers/notify/notify";
import { loadCats } from "../redux/modules/cats";
import LazyGallery from "./share/gallery/LazyGallery";

export default function CatGallery({ cats, category, currentPage }) {
  const dispatch = useDispatch();

  const fetchErrorHandler = () =>
    notify("Something went wrong! Please try again");

  const handleLoadMore = () => {
    const getCatsReqParams = {
      category_ids: category,
      page: currentPage + 1,
    };
    dispatch(loadCats(getCatsReqParams, fetchErrorHandler));
  };

  return <LazyGallery products={cats} onLoadMore={handleLoadMore} />;
}
