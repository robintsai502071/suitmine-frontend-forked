import React from 'react';
const data = [
  {
    id: 1,
    photo: '',
    email: 'qazwsx6120p@gmail.com',
    date: '2022/06/06',
    content:
      '問題的關鍵看似不明確，但想必在諸位心中已有了明確的從對於美麗東西的知覺中體驗到快樂，並且用盡一切方法使美麗的東西體現在行動中。這段話雖短，卻足以改變人類的歷史。在人生的歷程中，顧客評論的出現是必然的。',
  },
  {
    id: 2,
    photo: '',
    email: 'qazwsx6120p@gmail.com',
    date: '2022/06/06',
    content:
      '問題的關鍵看似不明確，但想必在諸位心中已有了明確的從對於美麗東西的知覺中體驗到快樂，並且用盡一切方法使美麗的東西體現在行動中。這段話雖短，卻足以改變人類的歷史。在人生的歷程中，顧客評論的出現是必然的。',
  },
  {
    id: 3,
    photo: '',
    email: 'qazwsx6120p@gmail.com',
    date: '2022/06/06',
    content: '幹你娘爛商品',
  },
  {
    id: 4,
    photo: '',
    email: 'qazwsx6120p@gmail.com',
    date: '2022/06/06',
    content:
      '問題的關鍵看似不明確，但想必在諸位心中已有了明確的從對於美麗東西的知覺中體驗到快樂，並且用盡一切方法使美麗的東西體現在行動中。這段話雖短，卻足以改變人類的歷史。在人生的歷程中，顧客評論的出現是必然的。',
  },
  {
    id: 5,
    photo: '',
    email: 'qazwsx6120p@gmail.com',
    date: '2022/06/06',
    content:
      '問題的關鍵看似不明確，但想必在諸位心中已有了明確的從對於美麗東西的知覺中體驗到快樂，並且用盡一切方法使美麗的東西體現在行動中。這段話雖短，卻足以改變人類的歷史。在人生的歷程中，顧客評論的出現是必然的。',
  },
  {
    id: 6,
    photo: '',
    email: 'qazwsx6120p@gmail.com',
    date: '2022/06/06',
    content:
      '問題的關鍵看似不明確，但想必在諸位心中已有了明確的從對於美麗東西的知覺中體驗到快樂，並且用盡一切方法使美麗的東西體現在行動中。這段話雖短，卻足以改變人類的歷史。在人生的歷程中，顧客評論的出現是必然的。',
  },
  {
    id: 7,
    photo: '',
    email: 'qazwsx6120p@gmail.com',
    date: '2022/06/06',
    content:
      '問題的關鍵看似不明確，但想必在諸位心中已有了明確的從對於美麗東西的知覺中體驗到快樂，並且用盡一切方法使美麗的東西體現在行動中。這段話雖短，卻足以改變人類的歷史。在人生的歷程中，顧客評論的出現是必然的。',
  },
];

function Comment() {
  return (
    <>
      <div className="container-fluid comment ">
        <div className="commentTitle">
          <div className="commentTitleBottomBorder">
            <h3>顧客評論</h3>
          </div>
        </div>
        {/* 評論區塊 */}
        {data.map((v, i) => {
          return (
            <div key={v.id} className="commentContainer">
              <div className="commentBlock">
                {/* 使用者訊息 */}
                <div className="topSection">
                  {/* 使用者照片ID */}
                  <div>
                    <div className="photo"></div>
                    <div className="userName">
                      <h4>{v.email}</h4>
                    </div>
                  </div>
                  {/* 評論建立時間 */}
                  <div className="date">
                    <h4 className="d-none d-sm-block">{v.date}</h4>
                    <h5 className="d-block d-sm-none">{v.date}</h5>
                  </div>
                </div>
                {/* 評論內容 */}
                <div className="buttonSection">
                  <h5>{v.content}</h5>
                </div>
              </div>
            </div>
          );
        })}

        {/*------------ 頁數 ------------*/}
        <div className="commentPager d-flex justify-content-center">
          <nav>
            <ul className="pager">
              <li className="pager__item pager__item--prev">
                <a className="pager__link" href="#/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewbox="0 0 8 12"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="#33313C"
                        d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li className="pager__item active">
                <a className="pager__link fs-6" href="#/">
                  1
                </a>
              </li>
              <li className="pager__item">
                <a className="pager__link " href="#/">
                  2
                </a>
              </li>
              <li className="pager__item pager__item--next">
                <a className="pager__link" href="#/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="12"
                    viewbox="0 0 8 12"
                  >
                    <g fill="none" fill-rule="evenodd">
                      <path
                        fill="#33313C"
                        d="M7.41 1.41L6 0 0 6l6 6 1.41-1.41L2.83 6z"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Comment;
