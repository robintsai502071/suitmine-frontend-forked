import Modal from 'react-bootstrap/Modal';
import React from 'react';

import iconTYN from '../../assests/images/booking-map/桃園-01.png';
import TYNimg from '../../assests/images/booking-map/桃園店照片.jpg';

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
            <img src={TYNimg} className="PopconfirmCardImg " alt="..." />
          </div>
          <div className="card-body">
            <h5 className="card-title">桃園店</h5>
            <div className="my-2 d-flex">
              <p className="">03-2189658</p>
            </div>
            <div className="d-flex">
              <p>桃園市中壢區新生街226巷8弄5號</p>
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

function RWDpopconfirmTYN() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <div
        className="RWDtynBox d-md-none d-flex"
        onClick={() => setModalShow(true)}
      >
        <img className="RWDiconTYN" src={iconTYN} alt="" />
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default RWDpopconfirmTYN;
