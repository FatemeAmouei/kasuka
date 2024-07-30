import React, { Component } from 'react'
import './Count.css'

export default class Count extends Component {
  render() {
    return (
      <section id="Count">
        <div className="col-4 Count-right  wow animate__animated animate__fadeInBottomLeft">
            <img src="https://hivalearn.ir/templates/kasuka/assets/img/counts-img.jpg" alt="img fluid" />
        </div>
        <div className="col-6 Count-left wow animate__animated animate__fadeInBottomRight">
          <div className="count-left__title">شایسته ترین لذت را به هر حال ارائه می دهد</div>
          <div className="count-left__subtitle">خود درد ممکن است درد زیادی باشد ، اما دلیل اصلی آن درد است ، اما من به آن زمان می دهم تا مانند یک درد و درد بزرگ در آن فرو برود درد مقصر است</div>
          
          <div className="count-left__item">
            <div className="count-left__item-right">

              <div className='Count-left-desc'>
                <div className="Count-left-desc__top">
                  <i className='bi bi-emoji-smile Count-left-desc__link'></i>
                  <h3 className='Count-left-desc__title'> 65 </h3>
                </div>  
                <p className='Count-left-desc__parag'> مشتریان خوشحال خوشحالیم که از معمار چیزی دریافت کنیم.</p>
              </div>

              <div className='Count-left-desc'>
                <div className="Count-left-desc__bottom">
                  <i className='bi bi-clock Count-left-desc__link'></i>
                  <h3 className='Count-left-desc__title'> 35 </h3>
                </div>  
                <p className='Count-left-desc__parag'> سال ها تجربه یا اجازه دهید به دنبال نوعی مزیت باشد</p>
              </div>
            </div>
            <div className="count-left__item-left">

              <div className='Count-left-desc'>
                <div className="Count-left-desc__top">
                  <i className='bi bi-journal-richtext Count-left-desc__link'></i>
                  <h3 className='Count-left-desc__title'> 85 </h3>
                </div>  
                <p className='Count-left-desc__parag'>پروژه ها برای بدست آوردن و زمانی که او کل کسانی را که از او تعریف می کنند رد می کند و آنها را حقیر می شمارد</p>
              </div>

              <div className='Count-left-desc'>
                <div className="Count-left-desc__bottom">
                  <i className='bi bi-award Count-left-desc__link'></i>
                  <h3 className='Count-left-desc__title'>20</h3>
                </div>  
                <p className='Count-left-desc__parag'>جوایز درد دردناک تر است در زمانی دیگر که هیچکس او را متهم نمی کند و هیچ وقت او را متهم نمی کند</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}





