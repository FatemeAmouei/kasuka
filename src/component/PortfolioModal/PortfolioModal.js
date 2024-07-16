import Modal from 'react-bootstrap/Modal';
import './PortfolioModal.css'
import { useEffect } from 'react';

function PortfolioModal({onHide, body}) {

  useEffect(()=>{
    const chekKey = e =>{
      if(e.keyCode === 27){
        onHide()
      }
    }
    window.addEventListener('keydown',chekKey)
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', chekKey);
      document.body.style.overflow = 'auto';
    }
  }, [onHide]);

  return (
    <Modal show={true} onHide={onHide} centered className='details-modal'>
        <Modal.Header closeButton/>
        <Modal.Body className='detail-modal__body'>
          <img src={body[0]} alt={body[1]} className='img-fluid' />
          <h4 className='details-modal__title'>{body[1]}</h4>
        </Modal.Body>
    </Modal>
  );
}

export default PortfolioModal;

