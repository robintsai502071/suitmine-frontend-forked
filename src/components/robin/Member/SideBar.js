import Accordion from 'react-bootstrap/Accordion';

function SideBar() {
  return (
    <>
      <div className="main__sidebar">
        <div className="main__sidebar__user-info mb-3">
          <h5 className="main__sidebar__username mb-1">br502071</h5>
          <a href="#/" className="main__sidebar__edit-btn">
            <i className="fa-solid fa-pen-to-square me-1"></i>編輯檔案
          </a>
        </div>
        <Accordion defaultActiveKey="0" flush className="main__sidebar__list">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="main__sidebar__item">
              <i className="fa-solid fa-user me-1"></i>我的帳戶
            </Accordion.Header>
            <Accordion.Body>
              <a href="#/" className="d-block">
                個人檔案
              </a>
              <a href="#/" className="d-block">
                更改密碼
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <a href="#/" className="d-block">
            <Accordion.Item eventKey="1" className="main__sidebar__item">
              <Accordion.Header>
                <i className="fa-solid fa-table-list me-1"></i>購買清單
              </Accordion.Header>
            </Accordion.Item>
          </a>
          <a href="#/" className="d-block">
            <Accordion.Item eventKey="2" className="main__sidebar__item">
              <Accordion.Header>
                <i className="fa-solid fa-gift me-1"></i>我的禮物卡
              </Accordion.Header>
            </Accordion.Item>
          </a>
          <a href="#/" className="d-block">
            <Accordion.Item eventKey="3" className="main__sidebar__item">
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
