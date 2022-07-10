import React from 'react';

function MyFavoritesDisplayItem(props) {
  const { name, price, product_photo } = props;
  const newProduct_photo = `http://localhost:3001/${product_photo}`;

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
      <button className="loveBtn">
        <i className="fa-solid fa-heart my-2"></i>
        {/* <i class="fa-solid fa-heart-crack"></i> */}
      </button>
    </a>
  );
}

export default MyFavoritesDisplayItem;
