import React, { Component } from 'react'
import '../About/About.css'
import { RiCheckDoubleFill } from "react-icons/ri";


export default class About extends Component {
  render() {
    return (
      <div>
        <section className="about">
          <div className="about-content">
            <div className="col-6 about-right wow animate__animated animate__fadeInBottomLeft">
              <h3 className='about-right__title'>شرکت دیجیتال کاسوکا</h3>
              <p className='about-right__text'>شرکت دیجیتال مارکتینگ نوآد به عنوان شرکتی پیشرو در صنعت دیجیتال مارکتینگ ایران در تلاش است تا با بهره گیری از دانش فنی روز و ارایه راهکارهای نوین بازاریابی و برندینگ، با پیشرفت کسب و کارهای داخلی نقش مهمی در شکوفایی اقتصادی ایران ایفا نماید و با تثبیت نام نوآد به عنوان تخصصی ترین برند دیجیتال مارکتینگ در ایران و گسترش نام آن در بازارهای جهانی به صادرات خدمات مبتنی بر تکنولوژی های نوین گام بردارد. نوآد پیشرفت خود در طول یک دهه فعالیت را مرهون شفافیت، انسجام و پایبندی به نتایج پیش بینی شده مشتریان خود می داند. سرمایه گذاری روی تکنولوژی های نوین، کیفیت و نوآوری، پایبندی به تعهدات، رضایتمندی و وفاداری مشتریان، نیروی انسانی متمرکز و پویا از ارزش های ذاتی نوآد می باشند. فضای دیجیتال تحول شگرف در ارتباطات و نحوه تعامل مردم با یکدیگر بوجود آورده است. ابزارها و پلتفرم های بوجود آمده در این عصر، قدرت چانه زنی و انتخاب را برای مردم افزایش داده و موجب سهولت در ارزیابی و مقایسه برندها و محصولات مختلف گردیده است. ما این تغییر نگرش در انتخاب یک برند و محصول را نوعی فرصت برای خود و مشتریانمان به حساب می آوریم. در فضای دیجیتال به راحتی می توان بازار هدف را شناسایی، نیازها، خواسته ها و علایق آنها را کشف و با استفاده از اطلاعاتی که بدست می آید به خلق و توسعه محصولات، برند و تجربیات مناسب که از ادغام تکنولوژی و خلاقیت در کنار متد بازاریابی نوین ناشی میشود، اقدام کرد. در نوآد ما آماده پذیرفتن چالش های جدید هستیم و با هر قیمت که شده به تعهدات خود پایبند می مانیم.</p>
              <ul className='about-right__list'>
                <li className='about-right__item'>
                  <RiCheckDoubleFill className='about-right__icon'/>
                  <span className="list_item"> سال تجربه ارایه خدمات تخصصی دیجیتال مارکتینگ و راهکارهای نوین بازاریابی</span>
                </li>
                <li className='about-right__item'>
                  <RiCheckDoubleFill className='about-right__icon'/>
                  <span className="list_item">تمرکز ما در تمامی استراتژی های اجرایی معطوف به دیجیتال برندینگ و همسو کردن استراتژی های دیجیتال مارکتینگ با دیگر فعالیت های برندینگ و بازاریابی شما می باشد.</span>
                </li>
                <li className='about-right__item'>
                  <RiCheckDoubleFill className='about-right__icon'/>
                  <span className="list_item">برای دریافت آخرین اخبار، گرایش ها و رویداد های دیجیتال مارکتینگ ثبت نام کنید</span>
                </li>
              </ul>
              <p className='about-right__text'>خدمات نوآد در جهت یکپارچه سازی تمامی فعالیت های یک کسب و کار از مرحله ورود به بازار، ساخت، گسترش و ایجاد تصویری یکپاچه از برند، دیجیتال مارکتینگ، افزایش مزیت رقابتی و سهم بازار تا مراحل پس از فروش و ایجاد وفاداری در مشتریان یک برند ارایه می گردد.</p>
            </div>
            <div className="col-4 about-left wow animate__animated animate__fadeInBottomRight">
              <img src="https://hivalearn.ir/templates/kasuka/assets/img/about.jpg" alt="img fluid" />
            </div>
          </div>
        </section>
      </div>
    )
  }
}





