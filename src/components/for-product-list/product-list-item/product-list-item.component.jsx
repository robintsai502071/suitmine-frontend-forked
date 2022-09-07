const ProductListItem = () => (
  <a
    href="#/"
    className="col-6 col-md-3 px-3 d-flex cardSize cardBottomMargin product-list-item"
  >
    <div className="card cardStyle ">
      <div className="imgBox position-relative">
        <img
          className="imgSize card-img-top position-relative"
          src={`https://raw.githubusercontent.com/robintsai502071/suitmine-frontend-forked/dev/src/assests/images/products/suit/%E9%BB%91%E8%89%B2/%E5%93%88%E4%BD%9B%E5%A4%A9%E9%B5%9D%E7%B5%A8%E9%BB%91%E8%89%B2%E8%A5%BF%E8%A3%9D/thumb.webp`}
          alt="..."
        />
        <button className="add-to-cart-btn position-absolute for-pc">
          加到購物車<i class="fa-solid fa-cart-shopping ms-1"></i>
        </button>
      </div>
      <div className="card-body cardPadding text-center">
        <h6 className="card-title englishText ">ddd</h6>
        <p className="h6 price card-text englishText CardP_Padding">$ff</p>
        <button className="add-to-cart-btn w-100 d-lg-none mt-2">
          <i class="fa-solid fa-cart-shopping"></i>
        </button>
      </div>
    </div>
  </a>
);

export default ProductListItem;
