const ProductListItem = () => (
  <a
    href="#/"
    className="col-6 col-md-3 px-3 d-flex cardSize cardBottomMargin product-list-item"
  >
    <div className="card cardStyle ">
      <div className="imgBox position-relative">
        <img
          className="imgSize card-img-top position-relative"
          src={`https://fakeimg.pl/250x300/`}
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
