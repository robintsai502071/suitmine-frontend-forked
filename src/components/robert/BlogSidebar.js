import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BlogSidebar(props) {
  const { setSearchWord, setSelectOption } = props;
  const { Search } = Input;

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  // ant select
  const { Option } = Select;
  const categories = [
    '所有文章',
    '西裝穿搭',
    '穿搭新聞',
    '名人穿搭',
    '西裝配件',
  ];
  const [optionSeperate, setOptionSeperate] = useState('');

  // -------------------------------------撈資料-----------------------------------------

  //  -----------------------------------------------------------------------------------------
  const [dataGet, setDataGet] = useState([]);
  useEffect(() => {
    let dataGet = async () => {
      // http://localhost:3001/stocks/2330?page=1
      // http://localhost:3001/api/auth/checkIsLogin
      let response = await axios.get(
        // `https://pokeapi.co/api/v2/pokemon?limit=20`
        `http://localhost:3001/api/blogs`
      );
      // console.log(response.data.results);
      // 抓出title和images的資料
      let allData = response.data.blogs.map((value) => {
        return {
          title: value.title,
          images: value.images,
          content: value.content,
          create_time: value.create_time,
          id: value.id,
        };
      });
      //  console.log('所有data要的', allData);
      //  console.log('將資料拆借', allData[0].title);

      setDataGet(allData);
      // console.log(stringToHtml.__html[0].title);
      // console.log(allData[0].content);
    };
    dataGet();
  }, []);

  return (
    <div>
      {/* --------------------------------------文章搜尋------------------------------------- */}
      <Space direction="vertical" className="blog-article-search">
        <Search
          type="text"
          placeholder="搜尋文章"
          onSearch={(v, e) => {
            // console.log(v)
            setSearchWord(v);
            // console.log(v);
          }}
          style={{ width: 200 }}
          name="searchBar"
        />
      </Space>
      {/* --------------------------------文章select---------------------------------------- */}
      <div className="blog-category">
        <h5 className="mt-3 bg-light text-secondary mb-2">文章種類</h5>
        <Select
          // labelInValue
          defaultValue="請選擇"
          style={{
            width: 200,
          }}
          className="optionSeperates"
          // value={setSelectOption}
          onSelect={(v) => {
            setSelectOption(v);
            // console.log('555');
          }}
        >
          {categories.map((v, i) => {
            return (
              <React.Fragment key={i}>
                <Option key={i} value={v}>
                  {v}
                </Option>
              </React.Fragment>
            );
          })}
        </Select>
      </div>

      <div className="blog-new">
        <h5 className="mt-3 bg-light text-secondary mb-2">最新消息</h5>
        <p className="text-start mb-4">
          <a href="#/" className="text-dark blog-bar-text">
            《腥紅山莊 Crimoson Peak》湯姆希德斯頓 Tom Hiddleston
            教你用西裝打造不同型男LOOK
          </a>
        </p>
        <p className="text-start mb-4">
          <a href="#/" className="text-dark blog-bar-text">
            型男衣櫃必備單品！2種超簡單「襯衫」穿搭教學，輕鬆穿出時尚品味！
          </a>
        </p>
        <p className="text-start mb-4">
          <a href="#/" className="text-dark blog-bar-text">
            超簡單圍巾圍法，手殘也能圍出紳士雅痞味！
          </a>
        </p>
      </div>
    </div>
  );
}

export default BlogSidebar;
