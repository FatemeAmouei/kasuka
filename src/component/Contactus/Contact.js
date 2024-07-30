import React, { Component } from 'react'
import './Contact.css'
import '../title/title.css'

export default class Contact extends Component {
  render() {
    return (
        <section className='contact'>
            <div className="titles">
                <h3 className="title wow animate__animated animate__slideInUp" >تماس با ما</h3>
                <h2 className="subtitle">با ما تماس بگیرید</h2>
            </div>
            <div className="contact-map wow animate__animated animate__slideInUp">
                <iframe className='contact-map__iframe' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0"></iframe>
            </div>
            <div className="contact-details wow animate__animated animate__slideInUp">
                <div className="contact-details__right">
                    <div className="address">
                        <i className='bi bi-geo-alt list-address'></i>
                        <div className="contact-left">
                            <h4>مکان:</h4>
                            <p>تهران خیابان آزادی</p>
                        </div>
                    </div>
                    <div className="email">
                        <i className='bi bi-envelope list-address'></i>
                        <div className="contact-left">
                            <h4>ایمیل:</h4>
                            <p>Info@example.com</p>
                        </div>
                    </div>
                    <div className="phone">
                        <i className='bi bi-phone list-address'></i>
                        <div className="contact-left">
                            <h4>شماره تماس:</h4>
                            <p>0123456789</p>
                        </div>
                    </div>
                </div>
                <div className="contact-details__left">
                    <form action="#" className='form'>
                        <div className="row1">
                            <input type="text" placeholder='نام' className='row1-form-input'/>
                            <input type="email" placeholder='ایمیل' className='row1-form-input'/>
                        </div>
                        <div className="row2">
                            <input type="text" placeholder='عنوان' className='row2-form-input'/>
                        </div>
                        <div className="row3">
                            <textarea name="text" placeholder='پیام' className="textarea"></textarea>
                        </div>
                    <button className="form-btn">ارسال پیام</button>
                    </form>
                </div>
            </div>
      </section>
    )
  }
}
