import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';

import iconCWS from '../../assests/images/booking-map/彰化-01.png';
import CWSimg from '../../assests/images/booking-map/彰化店照片.jpg';

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
                  <img src={CWSimg} className=" card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title popoverText">彰化店</h5>
                    <div>
                      <p className="">
                        {/* <i className="fa-solid fa-phone"></i> */}
                        <span className='popoverText'>04-22253456</span>
                      </p>
                    </div>
                    <div>
                      <p className="">
                        {/* <i className="fa-solid fa-location-dot"></i> */}
                        <span className='popoverText'>彰化縣彰化市旭光西路75號</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <div className="CWSBox d-md-flex d-none animate__bounce">
            <img className="iconTPE btn" src={iconCWS} alt="" />
          </div>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopconfirmTYN;
