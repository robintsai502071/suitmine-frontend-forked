import React from 'react';
import blogimg from '../../images/robert/blog/blogimg.png';

function BlogList() {
  return (
    <div className="card-group">
      <div className="row justify-content-center g-4">
        <div className="col-md-9 col-12 ">
          <div className="card border-0 ">
            <a href="#" className="position-relative">
              <img src={blogimg} className="card-img-top" alt="..." />
              <h6 className="text-white position-absolute ">READ MORE</h6>
            </a>
            <div className="card-body text-center">
              <h3 className="card-title">
                <a className="text-dark text-decoration-none" href="">
                  Card title
                </a>
              </h3>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Style Points, Suit Up</small>
              </p>
            </div>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0">
            <a href="#">
              <img src={blogimg} className="card-img-top" alt="..." />
              <h6 className="text-white position-absolute ">READ MORE</h6>
            </a>
            <div className="card-body text-center">
              <h3 className="card-title">
                <a className="text-dark text-decoration-none" href="">
                  Card title
                </a>
              </h3>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Style Points, Suit Up</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0">
            <a href="#">
              <img src={blogimg} className="card-img-top" alt="..." />
              <h6 className="text-white position-absolute ">READ MORE</h6>
            </a>
            <div className="card-body text-center">
              <h3 className="card-title">
                <a className="text-dark text-decoration-none" href="">
                  Card title
                </a>
              </h3>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Style Points, Suit Up</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0">
            <a href="#">
              <img src={blogimg} className="card-img-top" alt="..." />
              <h6 className="text-white position-absolute ">READ MORE</h6>
            </a>
            <div className="card-body text-center">
              <h3 className="card-title">
                <a className="text-dark text-decoration-none" href="">
                  Card title
                </a>
              </h3>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Style Points, Suit Up</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0">
            <a href="#">
              <img src={blogimg} className="card-img-top" alt="..." />
              <h6 className="text-white position-absolute ">READ MORE</h6>
            </a>
            <div className="card-body text-center">
              <h3 className="card-title">
                <a className="text-dark text-decoration-none" href="">
                  Card title
                </a>
              </h3>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Style Points, Suit Up</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0">
            <a href="#">
              <img src={blogimg} className="card-img-top" alt="..." />
              <h6 className="text-white position-absolute ">READ MORE</h6>
            </a>
            <div className="card-body text-center">
              <h3 className="card-title">
                <a className="text-dark text-decoration-none" href="">
                  Card title
                </a>
              </h3>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Style Points, Suit Up</small>
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 col-12">
          <div className="card border-0">
            <a href="#">
              <img src={blogimg} className="card-img-top" alt="..." />
              <h6 className="text-white position-absolute ">READ MORE</h6>
            </a>
            <div className="card-body text-center">
              <h3 className="card-title">
                <a className="text-dark text-decoration-none" href="">
                  Card title
                </a>
              </h3>
              <p className="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p className="card-text">
                <small className="text-muted">Style Points, Suit Up</small>
              </p>
            </div>
          </div>
        </div>
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
  );
}

export default BlogList;
