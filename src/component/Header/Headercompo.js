import './Header.css'
import React from 'react';

const Headercompo = (props) => {
  return (
    <div>
        <div className="row-box">
            <i className={props.icon}></i>
            <h3> 
                <a href='#'className='Options-left-desc__title'>{props.title}</a>
            </h3>
        </div>
    </div>
  );
};

export default Headercompo;
