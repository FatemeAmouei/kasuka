import './Services.css'
import React from 'react';

const Servicescompo = (props) => {
  return (
    <div>
      <div className="services-box">
        <div className='services-box__content'>
          <i className={`services-box__content-icon ${props.icon}`}></i>
          <h3 className='Options-left-desc__title'>{props.title}</h3>
          <p className='Options-left-desc__paragraph'>{props.paragraph}</p>          
        </div>
      </div>
    </div>
  );
};

export default Servicescompo;
