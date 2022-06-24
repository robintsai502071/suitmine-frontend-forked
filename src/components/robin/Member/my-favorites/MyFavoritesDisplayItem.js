import React from 'react';

function MyFavoritesDisplayItem() {
  return (
    <a href="#/" className="d-block my-favorites-display-item text-center my-3">
      <div className="my-favorites-display-item__image-wrapper">
        <img
          className="my-favorites-display-item__image"
          src="https://fakeimg.pl/250x130/"
          alt=""
        />
      </div>

      <h6 className="my-favorites-display-item__title my-2">
        迪士尼文具旗艦店 | 圖繪抗 UV 摺疊傘
      </h6>
      <div className="my-favorites-display-item__price">$320</div>
      <i className="fa-solid fa-heart my-2 heart-icon"></i>
    </a>
  );
}

export default MyFavoritesDisplayItem;
