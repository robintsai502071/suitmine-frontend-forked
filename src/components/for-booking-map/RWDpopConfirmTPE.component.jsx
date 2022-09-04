import Modal from 'react-bootstrap/Modal';
import React from 'react';

import iconTPE from '../../assests/images/booking-map/台北-01.png';
import TPEimg from '../../assests/images/booking-map/台北店照片.jpg';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="RWDcard">
          <div className="PopconfirmCardImgBox">
            <img src={TPEimg} className="PopconfirmCardImg " alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">台北店</h5>
            <div className="my-2 d-flex">
              <p className="">02-3759965</p>
            </div>
            <div className="d-flex">
              <p>台北市信義區松壽路9號</p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <button
          className="PopconfirmCardBtn btn btn-info"
          onClick={props.onHide}
        >
          <p>Close</p>
        </button>
      </Modal.Footer>
    </Modal>
  );
}

function RWDpopconfirmTPE() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div
        className="RWDtpeBox d-md-none d-flex"
        onClick={() => setModalShow(true)}
      >
        <img className="RWDiconTPE" src={iconTPE} alt="" />
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default RWDpopconfirmTPE;
