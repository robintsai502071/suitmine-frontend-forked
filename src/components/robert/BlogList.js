import React from 'react';
import blogimg from '../../images/robert/blog/blogimg.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BlogList() {
  // let offset = 0;
  // const handleScroll = (e) => {
  //   // console.log('hi');
  //   console.log('top', e.target.documentElement.scrollTop);
  //   console.log('win', window.innerHeight);
  //   console.log('height', e.target.documentElement.scrollHeight);
  //   if (
  //     window.innerHeight + e.target.documentElement.scrollTop + 1 >=
  //     e.target.documentElement.scrollHeight
  //   ) {
  //     // console.log('在視窗最底部');
  //     dataGet();
  //   }
  // };

  // 撈資料
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
        return { title: value.title, images: value.images, content: value.content };
      });
      setDataGet(allData);
      console.log(allData);
    };
    dataGet();
    // offset += 6;
    // window.addEventListener('scroll', handleScroll);
  }, []);

  // 存資料
  // const [pokemon, setPokemon] = useState([])

  return (
    <>
      <div className="card-group">
        <div className="row justify-content-center g-3 align-items-start">
          <h2>SUITMINE BLOG</h2>
          {dataGet.map((value, index) => {
            return (
              <>
                <div className="col-lg-4 col-md-4 col-12 d-flex">
                  <div className="card blog-card shadow">
                    <a href="#/">
                      <img src={value.images} className="card-img-top" alt="..." />
                      <h6 className="text-white position-absolute ">
                        READ MORE
                      </h6>
                    </a>
                    <div className="card-body text-start">
                      <h5 className="card-title">
                        <a className="text-dark text-decoration-none" href="#/">
                          {value.title}
                        </a>
                      </h5>
                      <p className="card-text mt-4">{value.content}</p>
                      {/* <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p> */}
                      <p className="card-text mt-3">
                        <small className="text-muted">20220630</small>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}

          <div className="col-12 text-center">
            <button
              type="button"
              className="btn btn-outline-secondary mb-3 w-25 "
            >
              LOAD MORE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogList;
