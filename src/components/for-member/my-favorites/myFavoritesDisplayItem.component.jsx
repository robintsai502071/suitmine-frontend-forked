import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setMyFavoriteItems } from '../../../store/myFavorites/myFavorits.slice';
import { selectMyFavoritesItems } from '../../../store/myFavorites/myFavorits.selector';

function MyFavoritesDisplayItem({ myFavoritesItem }) {
  const dispatch = useDispatch();
  const myFavoritesItems = useSelector(selectMyFavoritesItems);

  const handleSetMyFavoriteItems = (myFavoritesItems, itemToHandle) => (e) => {
    e.preventDefault();
    dispatch(setMyFavoriteItems({ myFavoritesItems, itemToHandle }));
  };

  const { id, product_name, product_price, product_photo } = myFavoritesItem;
  return (
    <Link
      to={`/product-detail/${id}`}
      className="col-6 col-md-3 col-lg-2 mb-2 myFavoritesDisplayItem"
    >
      <div className="card">
        <img
          src={product_photo}
          className="card-img-top myFavoritesDisplayItem__image"
          alt={product_name}
        />
        <div className="card-body d-flex flex-column align-items-center">
          <p className="myFavoritesDisplayItem__title">{product_name}</p>
          <p className="myFavoritesDisplayItem__price my-2">
            ${(product_price || '').toLocaleString()}
          </p>
          <i
            className="fa-solid fa-heart myFavoritesDisplayItem__heart"
            onClick={handleSetMyFavoriteItems(
              myFavoritesItems,
              myFavoritesItem
            )}
          ></i>
        </div>
      </div>
    </Link>
  );
}

export default MyFavoritesDisplayItem;
