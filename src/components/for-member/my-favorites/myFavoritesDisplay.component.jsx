import React from 'react';
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
            {myFavoritesItems.length === 0
              ? '您還未有收藏的商品'
              : myFavoritesItems?.map((myFavoritesItem) => (
                  <MyFavoritesDisplayItem myFavoritesItem={myFavoritesItem} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MyFavoritesDisplay;
