import React, { Component } from 'react'
import './Clients.css'
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default class Clients extends Component {

  render() {
    return (
      <div>
        <section id='Clients'>
            <div className="Clients">
                <div className="Clients-slider wow animate__animated animate__slideInUp">
                    <Swiper
                        slidesPerView={6}
                        centeredSlides={false}
                        spaceBetween={10}
                        grabCursor={false}
                        pagination={{
                        clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper">
                            <SwiperSlide>
                                <img src="https://hivalearn.ir/templates/kasuka/assets/img/clients/client-1.png" alt="MYBO" className="Clients-slide__img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://hivalearn.ir/templates/kasuka/assets/img/clients/client-2.png" alt="CITRUS" className="Clients-slide__img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://hivalearn.ir/templates/kasuka/assets/img/clients/client-3.png" alt="OLDENDROFF" className="Clients-slide__img" />
                            </SwiperSlide>
                            <SwiperSlide> 
                                <img src="https://hivalearn.ir/templates/kasuka/assets/img/clients/client-7.png" alt="BELIMO" className="Clients-slide__img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://hivalearn.ir/templates/kasuka/assets/img/clients/client-5.png" alt="LIFEGROUPS" className="Clients-slide__img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://hivalearn.ir/templates/kasuka/assets/img/clients/client-6.png" alt="TRUSTLI" className="Clients-slide__img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://hivalearn.ir/templates/kasuka/assets/img/clients/client-7.png" alt="TRUSTLI" className="Clients-slide__img" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="https://hivalearn.ir/templates/kasuka/assets/img/clients/client-8.png" alt="TRUSTLI" className="Clients-slide__img" />
                            </SwiperSlide>
                    </Swiper>
                </div>
            </div>            
        </section>

      </div>
    )
  }
}


