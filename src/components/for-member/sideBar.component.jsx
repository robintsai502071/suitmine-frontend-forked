import Accordion from 'react-bootstrap/Accordion';
function SideBar(props) {
  // const { givenMemberData, setSidebarActive } = props;
  return (
    <>
      <div className="main__sidebar">
        <div className="main__sidebar__user-info mb-3 d-flex align-items-center">
          <figure className="main__sidebar__user-info__avatar">
            <img
              className="main__sidebar__user-info__avatar__image"
              // src={givenMemberData.photo}
              alt=""
            />
          </figure>
          <h5 className="main__sidebar__username mb-1 ms-2">br502071</h5>
        </div>

        <Accordion
          // defaultActiveKey={props.sidebarActiveNumber}
          defaultActiveKey={0}
          flush
          className="main__sidebar__list"
        >
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <i className="fa-solid fa-user me-2"></i>我的帳戶
            </Accordion.Header>
            <Accordion.Body>
              <a
                className="d-block main__sidebar__list__link"
                onClick={(e) => {
                  e.preventDefault();
                  // setSidebarActive('個人檔案');
                }}
              >
                個人檔案
              </a>

              <a
                to={`/member/user/change-password`}
                className="d-block main__sidebar__list__link"
                onClick={(e) => {
                  e.preventDefault();
                  // setSidebarActive('更改密碼');
                }}
              >
                更改密碼
              </a>
            </Accordion.Body>
          </Accordion.Item>

          <a
            // href="http://localhost:3000/member/my-order"
            className="d-block main__sidebar__list__link"
          >
            <Accordion.Item
              eventKey="1"
              onClick={() => {
                // setSidebarActive('購買清單');
              }}
            >
              <Accordion.Header>
                <i className="fa-solid fa-table-list me-1"></i>購買清單
              </Accordion.Header>
            </Accordion.Item>
          </a>

          <a
            // href="http://localhost:3000/member/my-favorites"
            className="d-block main__sidebar__list__link"
          >
            <Accordion.Item
              eventKey="3"
              onClick={() => {
                // setSidebarActive('我的收藏');
              }}
            >
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
