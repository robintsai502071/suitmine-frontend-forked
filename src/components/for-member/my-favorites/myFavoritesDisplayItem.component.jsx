import React from 'react';

function MyFavoritesDisplayItem() {
  return (
    <div className="col-6 col-md-4 col-lg-2 mb-2 myFavoritesDisplayItem">
      <div className="card">
        <img
          src="https://fakeimg.pl/250x200/"
          className="card-img-top myFavoritesDisplayItem__image"
          alt="..."
        />
        <div className="card-body d-flex flex-column align-items-center">
          <p className="myFavoritesDisplayItem__title">高級黑西裝</p>
          <p className="myFavoritesDisplayItem__price my-2">$ 1,699</p>
          <i className="fa-solid fa-heart myFavoritesDisplayItem__heart"></i>
        </div>
      </div>
    </div>
  );
}

export default MyFavoritesDisplayItem;
