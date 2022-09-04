import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import 'animate.css';

import iconTYN from '../../assests/images/booking-map/桃園-01.png';
import TYNimg from '../../assests/images/booking-map/桃園店照片.jpg';

function PopconfirmTYN() {
  return (
    <>
      {['left'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Body>
                <div className="TPEcard">
                  <img src={TYNimg} className=" card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">桃園店</h5>
                    <div>
                      <p className="">
                        {/* <i className="fa-solid fa-phone"></i> */}
                        <span className="popoverText">03-2189658</span>
                      </p>
                    </div>
                    <div>
                      <p className="">
                        {/* <i className="fa-solid fa-location-dot"></i> */}
                        <span className="popoverText">
                          桃園市中壢區新生街226巷8弄5號
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <div className="TYNBox d-md-flex d-none animate__bounce">
            <img className="iconTPE btn" src={iconTYN} alt="" />
          </div>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopconfirmTYN;
