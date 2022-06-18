import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import iconTPE from '../../images/BookingMap/台北-01.png';
import TPEimg from "../../images/BookingMap/7749becf67d72d3b69c25a2fdf03867e.jpg"

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
                  <img src={TPEimg} class="d card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">台北店</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                
              </Popover.Body>
            </Popover>
          }
        >
          <div className="TPEBox">
            <img className="iconTPE btn" src={iconTPE} alt="" />
          </div>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopconfirmTPE;
