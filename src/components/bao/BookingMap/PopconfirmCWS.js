import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import iconCWS from '../../images/BookingMap/彰化-01.png';
import CWSimg from '../../images/BookingMap/彰化店照片.jpg';

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
                  <img src={CWSimg} class=" card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">彰化店</h5>
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
          <div className="CWSBox">
            <img className="iconTPE btn" src={iconCWS} alt="" />
          </div>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopconfirmTYN;
