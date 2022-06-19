import iconTYN from '../../images/BookingMap/桃園-01.png';
import TYNimg from '../../images/BookingMap/桃園店照片.jpg';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React from 'react';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="sm"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div class="TPEcard">
          <img src={TYNimg} class=" card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">桃園店</h5>
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
      </Modal.Body>
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
