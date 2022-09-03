import React from 'react';
import { useState } from 'react';

function MyFavoritesDisplayItem(props) {
  const { name, price, product_photo, product_id, handleDelete } = props;
  const newProduct_photo = `http://localhost:3001/${product_photo}`;
  // console.log(product_id);

  return (
    <a href="#/" className="d-block my-favorites-display-item text-center my-3">
      <div className="my-favorites-display-item__image-wrapper">
        <img
          className="my-favorites-display-item__image classForFit"
          src={newProduct_photo}
          alt=""
        />
      </div>

      <h6 className="my-favorites-display-item__title my-2">{name}</h6>
      <div className="my-favorites-display-item__price">${price}</div>
      <button
        className="loveBtn"
        onClick={async () => {
          handleDelete(product_id);
        }}
        data-runner="1"
      >
        <i className="fa-solid fa-heart my-2"></i>
      </button>
    </a>
  );
}

export default MyFavoritesDisplayItem;
