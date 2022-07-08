import React from 'react';

function ProductLink(props) {
  const { item } = props;
  // console.log(item);
  return (
    <a className="d-block prodcut-link d-flex my-2 py-1 align-items-center">
      <figure className="prodcut-link__figure">
        <img
          src={item.product_photo}
          alt=""
          className="prodcut-link__figure__image"
        />
      </figure>

      <div className="prodcut-link__info ms-2">
        <div className="prodcut-link__info__title">{item.product_name}</div>
        <div className="prodcut-link__info__counts">x{item.product_count}</div>
        <div className="prodcut-link__info__price">{item.product_price}</div>
      </div>
    </a>
  );
}

export default ProductLink;
