import './Navbar.css'

function Navbar(){
  
  const logoClickHandler = ()=>{
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    }) 
 }

  const homeClickHandler = e =>{
    e.preventDefault()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    }) 
  }

  const aboutusClickHandler = e =>{
    e.preventDefault()
    window.scrollTo({
      top: 600,
      left: 0,
      behavior: "smooth",
    })
  }

  const servicesClickHandler = e =>{
    e.preventDefault()
    window.scrollTo({
      top: 2050,
      left: 0,
      behavior: "smooth",
    })
  }

  const resumeClickHandler = e =>{
    e.preventDefault()
    window.scrollTo({
      top: 3250,
      left: 0,
      behavior: "smooth",
    })
  }

  const teamsClickHandler = e =>{
    e.preventDefault()
    window.scrollTo({
      top: 5820,
      left: 0,
      behavior: "smooth",
    })
  }

  const contactUsClickHandler = e =>{
    e.preventDefault()
    window.scrollTo({
      top: 6500,
      left: 0,
      behavior: "smooth",
    })
  }
  
  const startbtnClickHandler = e =>{
    e.preventDefault()
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }
  return (
    <div className="section-navbar">
      <div className="col-4 section-navbar__right">
          <img src="https://hivalearn.ir/templates/kasuka/assets/img/logo.png" alt="logo img"/>
          <h2 className="logo">
              <a href='#' onClick={logoClickHandler}>kasuka</a>
          </h2>
      </div>
      <div className="col-6 section-navbar__center">
        <ul className="navbar-list">
          <li className='navbar-list-li'> <a href='Home' className='navbar-list-link active' onClick={homeClickHandler}>خانه</a></li>
          <li className='navbar-list-li'> <a href='aboutUs' className='navbar-list-link' onClick={aboutusClickHandler}>درباره ما</a></li>
          <li className='navbar-list-li'> <a href='services' className='navbar-list-link' onClick={servicesClickHandler}>خدمات</a></li>
          <li className='navbar-list-li'> <a href='resume' className='navbar-list-link' onClick={resumeClickHandler}>نمونه کارها</a></li>
          <li className='navbar-list-li'> <a href='team' className='navbar-list-link' onClick={teamsClickHandler}>تیم</a></li>
          <li className='navbar-list-li'>
              <a href='lEVEL1' className='navbar-list-link'> لیست کشویی 
                  <i className="fas fa-angle-down navbar-list__link-icon"></i>
              </a>
               <ul className="navbar-list__dropdown">
                  <li className="navbar-list__dropdown-item">
                      <a href="#" className="navbar-list__dropdown-link">لیست کشویی 1  </a>
                  </li>
                  <li className="navbar-list__dropdown-item navbar-list__dropdown-subitem">
                      <a href="#" className="navbar-list__dropdown-link"> لیست کشویی عمیق 
                          <i className="fas fa-angle-left navbar-list__dropdown-link-icon"></i>
                      </a>
                  <ul className="dropdown-list">
                    <li className="dropdown-item__subitem">
                      <a href="#" className="navbar-list__dropdown-link">  لیست کشویی عمیق 1</a>  
                    </li>
                    <li className="dropdown-item__subitem">
                      <a href="#" className="navbar-list__dropdown-link">  لیست کشویی عمیق 2</a>  
                    </li>
                    <li className="dropdown-item__subitem">
                      <a href="#" className="navbar-list__dropdown-link">  لیست کشویی عمیق 3</a>  
                    </li>
                    <li className="dropdown-item__subitem">
                      <a href="#" className="navbar-list__dropdown-link">  لیست کشویی عمیق 4</a>  
                    </li>
                    <li className="dropdown-item__subitem">
                      <a href="#" className="navbar-list__dropdown-link">  لیست کشویی عمیق 5</a>  
                    </li>
                  </ul> 
                  </li>
                  <li className="navbar-list__dropdown-item">
                      <a href="#" className="navbar-list__dropdown-link"> لیست کشویی 2  </a>
                  </li>
                  <li className="navbar-list__dropdown-item">
                      <a href="#" className="navbar-list__dropdown-link"> لیست کشویی 3  </a>
                  </li> 
                  <li className="navbar-list__dropdown-item">
                      <a href="#" className="navbar-list__dropdown-link"> لیست کشویی 4  </a>
                  </li>          
                </ul>
          </li>
          <li className='navbar-list-li'> <a href='contactUs' className='navbar-list-link' onClick={contactUsClickHandler}>تماس با ما</a></li>
        </ul>
      </div>
      <div className="col-4 section-navbar__left">
          <a href="#" className="section-navbar__btn" onClick={startbtnClickHandler}>شروع</a>
      </div>
    </div>

  )
}


export default Navbar;

