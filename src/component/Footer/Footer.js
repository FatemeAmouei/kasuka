import React, { Component } from 'react'
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <section id='footer'>
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-right">
                        <div className="footer-logo">
                            <img src="https://hivalearn.ir/templates/kasuka/assets/img/logo.png" alt="logo img" className="logo-img"/>
                            kasuka
                        </div>
                        <div className="footer-address">
                            <p> البرز، کرج </p>
                            <p>تلفن: 09125653427</p>
                            <p>ایمیل: amoueifateme@gmail.com</p>
                        </div>
                        <div className="footer-social">
                            <a href="#" className="twitter">
                                <i className='bx bxl-twitter'></i>
                            </a>
                            <a href="#" className="facebook">
                                <i className='bx bxl-facebook'></i>
                            </a>
                            <a href="#" className="instagram">
                                <i className='bx bxl-instagram'></i>
                            </a>
                            <a href="#" className="google-plus">
                                <i className='bx bxl-skype'></i>
                            </a>
                            <a href="#" className="linkedin">
                                <i className='bx bxl-linkedin'></i>
                            </a>

                        </div>
                    </div>

                    <div className="footer-center">
                        <div className="footer-links">
                            <h3>لینک های مفید</h3>
                            <ul>
                                <li>
                                    <i className='bx bx-chevron-left'></i>
                                    <a href="#">خانه</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-left'></i>
                                    <a href="#">درباره ما</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-left'></i>
                                    <a href="#">خدمات</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-left'></i>
                                    <a href="#">شرایط استفاده از خدمات</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-left'></i>
                                    <a href="#">سیاست حفظ حریم خصوصی</a>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-services">
                            <h3>خدمات ما</h3>
                            <ul>
                                <li>
                                    <i className='bx bx-chevron-left'></i>
                                    <a href="#">طراحی وب سایت</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-left'></i>
                                    <a href="#"> توسعه وب</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-left'></i>
                                    <a href="#">مدیریت تولید</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-left'></i>
                                    <a href="#">بازاریابی</a>
                                </li>
                                <li>
                                    <i className='bx bx-chevron-left'></i>
                                    <a href="#">طراحی گرافیک</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    
                    <div className="footer-left">
                        <h4 className="footer-left_title">خبرنامه ما</h4>
                        <p className="footer-left_text">با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد بود</p>
                        <div className="btn">
                            <input type="email" className="footer-input" />
                            <input type="submit" className="footer-btn" value=" دنبال کردن"/>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <strong>
                            <span>kasuka</span>
                        </strong>
                        همه حقوق محفوظ است
                    </div>
                    <div className="credits">
                        طراحی شده توسط
                        <a href="#"> فاطمه عموئی </a>
                    </div>
                </div>
            </div>
      </section>
    )
  }
}
