import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import iconTYN from '../../images/BookingMap/桃園-01.png';
import TYNimg from '../../images/BookingMap/桃園店照片.jpg';
import 'animate.css';

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
                <div class="TPEcard">
                  <img src={TYNimg} class=" card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">桃園店</h5>
                    <div>
                      <p class="">
                        {/* <i class="fa-solid fa-phone"></i> */}
                        <span className="popoverText">03-2189658</span>
                      </p>
                    </div>
                    <div>
                      <p class="">
                        {/* <i class="fa-solid fa-location-dot"></i> */}
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
