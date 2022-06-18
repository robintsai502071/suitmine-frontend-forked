import Accordion from 'react-bootstrap/Accordion';

function SideBar(props) {
  return (
    <>
      <div className="main__sidebar">
        <div className="main__sidebar__user-info mb-3">
          <h5 className="main__sidebar__username mb-1">br502071</h5>
        </div>

        <Accordion
          defaultActiveKey={props.sidebarActiveNumber}
          flush
          className="main__sidebar__list"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <i className="fa-solid fa-user me-2"></i>我的帳戶
            </Accordion.Header>
            <Accordion.Body>
              <a
                href="http://localhost:3000/member/user"
                className="d-block main__sidebar__list__link"
              >
                個人檔案
              </a>

              <a
                href="http://localhost:3000/member/user/change-password"
                className="d-block main__sidebar__list__link"
              >
                更改密碼
              </a>
            </Accordion.Body>
          </Accordion.Item>

          <a
            href="http://localhost:3000/member/my-order"
            className="d-block main__sidebar__list__link"
          >
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <i className="fa-solid fa-table-list me-1"></i>購買清單
              </Accordion.Header>
            </Accordion.Item>
          </a>

          <a href="http://localhost:3000/member/my-gift-card" className="d-block main__sidebar__list__link">
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <i className="fa-solid fa-gift me-1"></i>我的禮物卡
              </Accordion.Header>
            </Accordion.Item>
          </a>

          <a href="http://localhost:3000/member/my-favorites" className="d-block main__sidebar__list__link">
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <i className="fa-solid fa-heart me-1"></i>我的收藏
              </Accordion.Header>
            </Accordion.Item>
          </a>
        </Accordion>
      </div>
    </>
  );
}

export default SideBar;
