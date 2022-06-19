import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import iconTPE from '../../images/BookingMap/台北-01.png';
import TPEimg from "../../images/BookingMap/台北店照片.jpg"

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
                <div class="TPEcard" >
                  <img src={TPEimg} class=" card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">台北店</h5>
                    <div>
                      <p class="">
                        <i class="fa-solid fa-phone"></i>
                        <span>03-2189658</span>
                      </p>
                    </div>
                    <div>
                      <p class="">
                        <i class="fa-solid fa-location-dot"></i>
                        <span>桃園市中壢區新生街226巷8弄5號</span>
                      </p>
                    </div>
                  </div>
                </div>
              </Popover.Body>
            </Popover>
          }
        >
          <div className="TPEBox d-md-flex d-none">
            <img className="iconTPE btn" src={iconTPE} alt="" />
          </div>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopconfirmTPE;
