import './Customers.css'
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function Customers(){
  return (
    <div className='customer-section'>
      <div id='customer-container' className="customers-container">
        <Swiper
          slidesPerView={1}
          centeredSlides={true}
          spaceBetween={false}
          grabCursor={false}
          pagination={{clickable: true}}
          Autoplay={{ delay: 3000 }}
          modules={[Pagination,Autoplay]}
          className="CustomersSwiper">
            <SwiperSlide className="Customers-SwiperSlide">
              <div className="Customers-text">
              <img className='slider-img' src="https://hivalearn.ir/templates/kasuka/assets/img/testimonials/testimonials-1.jpg" alt="#" />
                <h3 className="Customers-text__title">ساول گودمن</h3>
                <h4 className="Customers-text__subtitle">مدیران عامل : پایه گذار</h4>
                <p className='slider-text' href='#'>
                  <i className="bx bxs-quote-alt-left quote-icone-left"></i>
                  پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن همیشه می خندد.                                        
                  <i className="bx bxs-quote-alt-right quote-icone-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Customers-SwiperSlide">
              <div className="Customers-text">
              <img className='slider-img' src="https://hivalearn.ir/templates/kasuka/assets/img/testimonials/testimonials-2.jpg" alt="#" />
                <h3 className="Customers-text__title">سارا ویلسون </h3>
                <h4 className="Customers-text__subtitle"> طراح </h4>
                <p className='slider-text' href='#'>
                  <i className="bx bxs-quote-alt-left quote-icone-left"></i>
                  پیامدهای خالص شکر خالص تا زمانی که ورودی پرتقال را دریافت کند ، خوب درمان می شوند. متهمان چه هستند ، فقط به نوعی بودجه نیاز دارد. میسن همیشه می خندد.                  
                  <i className="bx bxs-quote-alt-right quote-icone-right"></i>
                  <i className="bx bxs-quote-alt-right quote-icone-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Customers-SwiperSlide">
              <div className="Customers-text">
              <img className='slider-img' src="https://hivalearn.ir/templates/kasuka/assets/img/testimonials/testimonials-3.jpg" alt="#" />
                <h3 className="Customers-text__title">ینا کارلیس  </h3>
                <h4 className="Customers-text__subtitle"> صاحب فروشگاه </h4>
                <p className='slider-text' href='#'>
                  <i className="bx bxs-quote-alt-left quote-icone-left"></i>
                  زیرا اگر زحمت کسانی که خدایان هستند را صادر کنید ، کار کسانی که مهم هستند ، چیزهایی که هیچ کدام از آنها نخواهد آمد ، و زحمت کسانی که کمترین زمان را دارند ، زحماتی که من کشیدم ، و عشق به کسانی که کمترین افراد خواهند بود.                  
                  <i className="bx bxs-quote-alt-right quote-icone-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Customers-SwiperSlide">
              <div className="Customers-text">
              <img className='slider-img' src="https://hivalearn.ir/templates/kasuka/assets/img/testimonials/testimonials-4.jpg" alt="#" />
                <h3 className="Customers-text__title">مت براندون  </h3>
                <h4 className="Customers-text__subtitle"> فریلنسر </h4>
                <p className='slider-text' href='#'>
                  <i className="bx bxs-quote-alt-left quote-icone-left"></i>
                  زیرا من آن کسی بودم که از درد رهایی می یافت ، درد هیچ تقصیری از بسیاری ندارد ، حداقل فوجیات را حداقل از طریق درد ، کار می کند.                  
                  <i className="bx bxs-quote-alt-right quote-icone-right"></i>
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide className="Customers-SwiperSlide">
              <div className="Customers-text">
              <img className='slider-img' src="https://hivalearn.ir/templates/kasuka/assets/img/testimonials/testimonials-5.jpg" alt="#" />
                <h3 className="Customers-text__title">جان لارسون  </h3>
                <h4 className="Customers-text__subtitle"> کارآفرین </h4>
                <p className='slider-text' href='#'>
                  <i className="bx bxs-quote-alt-left quote-icone-left"></i>
                  چه کسی برخی از مواردی را که من خواهم خواند ، مطمئن بودم که برخی از آنها به موقع عفو ما به دلیل تقصیر زایمان تقصیر خواهند آمد ، تقصیر او نیست  من می خوانم که او می آید ، تقصیر خواهد بود چیزی جز                  
                  <i className="bx bxs-quote-alt-right quote-icone-right"></i>
                </p>
              </div>
            </SwiperSlide>
        </Swiper>                    
      </div>
    </div> 
  )
}


export default Customers;

