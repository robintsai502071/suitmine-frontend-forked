import { Menu } from 'antd';
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';


// function getItem(label, key, children, type) {
//   return {
//     key,
//     children,
//     label,
//     type,
//   };
// }

// const items = [
//   getItem('文章管理', 'sub1', [
//     getItem('新增文章', '1'),
//     getItem('所有文章', '2'),
//     // getItem('高級西裝', '3'),
//     // getItem('奢華西裝', '4'),
//   ]),
//   // getItem('所有文章', 'sub2', [
//   //   // getItem('襯衫總覽', '5'),
//   //   // getItem('新品上市', '6'),
//   //   // getItem('休閒襯衫', '7'),
//   //   // getItem('針織襯衫', '8'),
//   // ]),
//   // getItem('西裝褲類', 'sub3', [
//   //   getItem('西裝褲總覽', '9'),
//   //   getItem('新品上市', '10'),
//   //   getItem('高級西裝褲類', '11'),
//   //   getItem('奢華西裝褲類', '12'),
//   // ]),
//   // getItem('配件類', 'sub4', [
//   //   getItem('配件總覽', '13'),
//   //   getItem('新品上市', '14'),
//   //   getItem('領帶', '15'),
//   //   getItem('領帶夾', '16'),
//   //   getItem('方巾', '17'),
//   // ]),
// ]; // submenu keys of first level

// const rootSubmenuKeys = ['sub1'];

// const BlogBackBar = () => {
//   const [openKeys, setOpenKeys] = useState(['sub1']);

//   const onOpenChange = (keys) => {
//     const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);

//     if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
//       setOpenKeys(keys);
//     } else {
//       setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
//     }
//   };

//   return (
//     <Menu
//       mode="inline"
//       openKeys={openKeys}
//       onOpenChange={onOpenChange}
//       style={{
//         width: 229,
//       }}
//       items={items}
//       className="ProductTypeBar"
//     />
//   );
// };

function BlogBackBar() {
  return (
    <>
      <div className="main__sidebar">
        {/* <div className="main__sidebar__user-info mb-3 d-flex align-items-center">
          <figure className="main__sidebar__user-info__avatar">
            <img
              className="main__sidebar__user-info__avatar__image"
              src="https://fakeimg.pl/250x100/"
              alt=""
            />
          </figure>
          <h5 className="main__sidebar__username mb-1 ms-1">br502071</h5>
        </div> */}

        <Accordion
          // defaultActiveKey={props.sidebarActiveNumber}
          flush
          className="main__sidebar__list"
        >
          {/* <Accordion.Item eventKey="0">
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
          </Accordion.Item> */}

          <Link to="/text-editor" className="d-block main__sidebar__list__link">
            <Accordion.Item eventKey="1" className="blog-backend-bar1">
              <Accordion.Header>
                <i class="fa-solid fa-file-circle-plus me-1"></i>新增文章
              </Accordion.Header>
            </Accordion.Item>
          </Link>

          <Link to="/blog" className="d-block main__sidebar__list__link">
            <Accordion.Item eventKey="2" className="blog-backend-bar2">
              <Accordion.Header>
                <i class="fa-solid fa-folder-open me-1"></i>前台所有文章
              </Accordion.Header>
            </Accordion.Item>
          </Link>

          <Link
            to="/member/my-favorites"
            className="d-block main__sidebar__list__link"
          >
            <Accordion.Item eventKey="3" className="blog-backend-bar3">
              <Accordion.Header>
                <i class="fa-solid fa-list-check me-1"></i>文章管理
              </Accordion.Header>
            </Accordion.Item>
          </Link>
        </Accordion>
      </div>
    </>
  );
}

export default BlogBackBar;
