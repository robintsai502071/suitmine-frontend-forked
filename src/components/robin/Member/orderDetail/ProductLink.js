import React from 'react';

function ProductLink() {
  return (
    <a className="d-block prodcut-link d-flex my-2 py-1 align-items-center">
      <figure className="prodcut-link__figure">
        <img
          src="https://fakeimg.pl/350x200/"
          alt=""
          className="prodcut-link__figure__image"
        />
      </figure>

      <div className="prodcut-link__info ms-2">
        <div className="prodcut-link__info__title">衣物洗衣袋</div>
        <div className="prodcut-link__info__counts">x5</div>
        <div className="prodcut-link__info__price">$80</div>
      </div>
    </a>
  );
}

export default ProductLink;
