import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// component
import MyFavoritesDisplayItem from './myFavoritesDisplayItem.component';
// myFavorits selector
import { selectMyFavoritesItems } from '../../../store/myFavorites/myFavorits.selector';

function MyFavoritesDisplay() {
  const myFavoritesItems = useSelector(selectMyFavoritesItems) || [];
  return (
    <>
      <div className="my-favorites">
        <div className="container">
          <div className="row">
            {myFavoritesItems.length === 0 ? (
              <div>
                <h3 className="empty-cart-message__subtitle text-center">
                  您尚未有收藏商品
                </h3>
                <Link
                  to={`/product-list`}
                  className="empty-cart-message__btn text-center"
                >
                  去逛逛
                </Link>
              </div>
            ) : (
              myFavoritesItems?.map((myFavoritesItem) => (
                <MyFavoritesDisplayItem
                  myFavoritesItem={myFavoritesItem}
                  key={myFavoritesItem.id}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyFavoritesDisplay;
