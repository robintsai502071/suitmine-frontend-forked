import React from 'react';
import MyFavoritesDisplayItem from './myFavoritesDisplayItem.component';
import { useSelector } from 'react-redux';
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
