import React, { Component } from 'react'
import './Header.css'
import Headercompo from'./Headercompo.js'

export default class Header extends Component {
  render() {
    return (
      <div className='Header-container' id='container-img'>
        <div className="header-content">
          <div className="Header-row">
            <div className="col-xl-6 col-lg-8">
              <h1>راه حل های قدرتمند دیجیتال با <br/>
                <span>Kasuka</span>
              </h1>
                <h2>ما تیمی از بازاریابان با استعداد دیجیتال هستیم</h2>
            </div>
          </div>
          <div className="allboxes">
            <Headercompo icon="bx bx-store" title="متن نمایشی" />      
            <Headercompo icon="bx bx-chart" title=" نمودار کیفی" />      
            <Headercompo icon="bx bx-box" title="  نمونه کار ها"/>      
            <Headercompo icon="bx bx-brush"  title=" عملکردهای پایانی"/>      
            <Headercompo icon="bx bx-data" title=" اطلاعات ذخیره شده" />      
          </div>
        </div>       
      </div>
    )
  }
}
