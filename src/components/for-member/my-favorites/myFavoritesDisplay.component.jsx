import React from 'react';
import MyFavoritesDisplayItem from './myFavoritesDisplayItem.component';
import { useState } from 'react';

function MyFavoritesDisplay() {
  let [arr, setArr] = useState([]);

  return (
    <>
      <div className="my-favorites">
        <div className="container">
          <div className="row">
            <MyFavoritesDisplayItem />
            <MyFavoritesDisplayItem />
            <MyFavoritesDisplayItem />
            <MyFavoritesDisplayItem />
            <MyFavoritesDisplayItem />
            <MyFavoritesDisplayItem />
            <MyFavoritesDisplayItem />
            <MyFavoritesDisplayItem />
            <MyFavoritesDisplayItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default MyFavoritesDisplay;
