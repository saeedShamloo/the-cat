import React from "react";
import Gallery from "./Gallery";
import Button from "../button/Button";

export default function LazyGallery({ products, onLoadMore }) {
  return (
    <>
      <Gallery products={products} />
      <Button onClick={onLoadMore} primary={true} fullWidth={true}>
        Load more...
      </Button>
    </>
  );
}
