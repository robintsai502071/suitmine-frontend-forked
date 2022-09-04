import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import iconTPE from '../../assests/images/booking-map/台北-01.png';
import TPEimg from '../../assests/images/booking-map/台北店照片.jpg';

function PopconfirmTPE() {
  return (
    <>
      {['right'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          key={placement}
          placement={placement}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Body>
                <div className="TPEcard">
                  <img src={TPEimg} className=" card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">台北店</h5>
                    <div>
                      <p className="">
                        {/* <i className="fa-solid fa-phone"></i> */}
                        <span className="popoverText">02-3759965</span>
                      </p>
                    </div>
                    <div>
                      <p className="">
                        {/* <i className="fa-solid fa-location-dot"></i> */}
                        <span className="popoverText">
                          台北市信義區松壽路9號
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <div className="TPEBox d-md-flex d-none animate__bounce">
            <img className="iconTPE btn" src={iconTPE} alt="" />
          </div>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopconfirmTPE;
