import Modal from 'react-bootstrap/Modal';
import React, { useEffect,useState } from 'react';
import './PortfolioDetail.css'

const PortfolioDetail = ({onHide, body}) => {
  const [fullscreen, setFullscreen] = useState(true);

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
      <Modal show={true} fullscreen={fullscreen}  onHide={onHide} centered className='moreDetails-modal'>
        <Modal.Header closeButton />
        <Modal.Body className='moreDetails-modal__body'>
          <h1 className='moreDetails-modal__title'>جزئیات نمونه کارها</h1>
          <div className="moreDetails-modal">
            <div className="moreDetails-modal__right">
                <img src={body[0]} alt={body[1]} className='moreDetails-modal__right-img' />
              </div>
              <div className="moreDetails-modal__left">
                <h2 className='moreDetails-modal__left-subtitle'>{body[1]}</h2>
                <ul className='moreDetails-modal__left-item'>
                  <li className='moreDetails-modal__left-list'> <span>دسته بندی: </span> طراحی وب سایت </li>
                  <li className='moreDetails-modal__left-list'><span>مشتری :</span> شرکت ASU</li>
                  <li className='moreDetails-modal__left-list'><span>تاریخ پروژه :  </span> تیرماه 1403</li>
                  <li className='moreDetails-modal__left-list'> <span>آدرس پروژه :</span><a href='#'> www.example.com</a></li>
                </ul>
                <h2 className='moreDetails-modal__left-subtitle'>این نمونه ای از جزئیات نمونه کارها است</h2>
                <p className='moreDetails-modal__left-text'>او برای دنیای فیزیکی بازی می کرد. چه کسی باعث می شود آنها احساس درد کنند ، و مخترع آنها نیز چنین هستند ، زیرا این کار انگیزه های خودخواهانه است. آموزش نباید با مسئولیت ها کنار گذاشته شود و نباید به عنوان مسئولیت این نیازها پذیرفته شود. لذت مقام متهمان در این است که نمی دانند در همه زمانها شایسته ترین افتخار است. اما دلیلی برای پیروی از او وجود ندارد ، زیرا وقتی او را رها می کنند.</p>
            </div>
          </div>
      </Modal.Body>
    </Modal>
    );
};

export default PortfolioDetail;
