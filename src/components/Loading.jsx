import React from "react";
import { useSelector } from "react-redux";
import { getCatsLoadingStaus } from "../redux/modules/cats";
import FullScreenSpinner from "./share/spinner/FullScreenSpinner";

export default function Loading() {
  const isLoading = useSelector(getCatsLoadingStaus);

  return isLoading ? <FullScreenSpinner /> : null;
}
