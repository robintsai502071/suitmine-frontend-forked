import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
// ant search
const { Search } = Input;

const suffix = (
  <AudioOutlined
    style={{
      fontSize: 16,
      color: '#1890ff',
    }}
  />
);

const onSearch = (value) => console.log(value);

// ant select
const { Option } = Select;

const handleChange = (value) => {
  console.log(value); // { value: "lucy", key: "lucy", label: "Lucy (101)" }
};

function BlogSidebar() {
  return (
    <div>
      <Space direction="vertical">
        <Search
          placeholder="搜尋文章"
          onSearch={onSearch}
          style={{ width: 200 }}
        />
      </Space>
      <div className="blog-category">
        <h5 className="mt-3 bg-light text-secondary">文章種類</h5>
        <Select
          labelInValue
          defaultValue={{
            value: '種類一',
            label: '文章種類',
          }}
          style={{
            width: 200,
          }}
          onChange={handleChange}
        >
          
          <Option value="種類一">文章種類1</Option>
          <Option value="種類二">文章種類2</Option>
          <Option value="種類三">文章種類3</Option>
          <Option value="種類四">文章種類4</Option>
          <Option value="種類五">文章種類5</Option>
        </Select>
      </div>

      <div className="blog-new">
        <h5 className="mt-3 bg-light text-secondary">最新消息</h5>
        <p className="text-start">
          <a href="#" className="text-dark">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </a>
        </p>
        <p className="text-start">
          <a className="text-dark">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </a>
        </p>
        <p className="text-start">
          <a className="text-dark">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </a>
        </p>
      </div>
    </div>
  );
}

export default BlogSidebar;
