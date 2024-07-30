import React, { Component } from 'react'
import Servicescompo from './Servicescompo';
import './Services.css'
import '../title/title.css'



export default class Services extends Component {
  render() {
    return (
      <div>
        <div className="services-content">
          <div className="titles wow animate__animated animate__slideInUp" >
            <h3 className="title">خدمات</h3>
            <h2 className="subtitle">خدمات ما را بررسی کنید</h2>
          </div>
          <div className="services-components wow animate__animated animate__slideInUp">
            <div className="Servicescompo1">
              <Servicescompo icon="bx bxl-dribbble" title="لورم اپیسوم" paragraph="برای آرامش بخشیدن و لذت بردن از مفاسد ، چه دردها و چه دردسرهایی را دریافت خواهند کرد" />
              <Servicescompo icon="bx bx-file" title="اما همانطور که مشاهده می کنید" paragraph="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
              <Servicescompo icon="bx bx-tachometer" title="دردهای بزرگ" paragraph="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
            </div>

            <div className="Servicescompo2">
            <Servicescompo icon="bx bx-world" title="هیچکس دیگر" paragraph="اما در واقع ما هم آنها را متهم می کنیم و هم با یک نفرت عادلانه شایسته چاپلوسی هستیم" />
            <Servicescompo icon="bx bx-slideshow" title="لولا را پاک کنید" paragraph="آنها استثنائاتی هستند که به دنبال سیاه پوستان هستند ، آنها نمی بینند ، آنها کسانی هستند که در خدمات خود مقصر هستند" />
            <Servicescompo icon="bx bx-arch" title="دیوا دان" paragraph="روشها یا تلاشهای ما علاوه بر این ، خطا فرار می کند ، بگذار کوچکتر عاقل باشد" />         
            </div>


          </div>
        </div>
      </div>
    )
  }
}

