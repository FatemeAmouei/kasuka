import React, { Component } from 'react'
import './Options.css'

export default class Options extends Component {
  render() {
    return (
      <div>
        <section id="Options">
            <div className="Options">
              <div className="row">
                <div className="col-6 Options-right">
                  <img src="https://hivalearn.ir/templates/kasuka/assets/img/features.jpg" alt="img fluid" />
                </div>
                <div className="col-6 Options-left">
                  <div className='Options-left-desc'>
                    <i className='bx bx-receipt Options-left-desc__link'></i>
                    <div className="Options-left-desc__text">
                      <h3 className='Options-left-desc__title'>تبلیغ سختی است</h3>
                      <p className='Options-left-desc__parag'>نتایج یا در نتیجه هر یک از این اهداف اشتغال حاصل می شوند</p>
                    </div>
                  </div>
                  <div className='Options-left-desc'>
                    <i className='bx bx-cube-alt Options-left-desc__link'></i>
                    <div className="Options-left-desc__text">
                      <h3 className='Options-left-desc__title'>کدام یک از اینهاست</h3>
                      <p className='Options-left-desc__parag'>کسانی که هوس سیاهان می کنند نمی بینند ، آنها مقصر هستند که خدمات خود را رها کرده اند</p>
                    </div>
                  </div>
                  <div className='Options-left-desc'>
                    <i className='bx bx-images Options-left-desc__link'></i>
                    <div className="Options-left-desc__text">
                      <h3 className='Options-left-desc__title'>یا کور شده اس</h3>
                      <p className='Options-left-desc__parag'>یا می پذیرد یا زمانی که هیچ کس از همه اجتناب نمی کند. همه دردهایی که آنها را بیشتر می کند</p>
                    </div>
                  </div>
                  <div className='Options-left-desc'>
                    <i className='bx bx-shield Options-left-desc__link'></i>
                    <div className="Options-left-desc__text">
                      <h3 className='Options-left-desc__title'>حقیقت مبارک</h3>
                      <p className='Options-left-desc__parag'>آنها بدون تحمل حقیقت در زمان ستایش زندگی از هیچ چیزی پیروی نمی کنند</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </section>
      </div>
    )
  }
}





