import React, { useState } from 'react';
import PortfolioModal from '../PortfolioModal/PortfolioModal';
import PortfolioDetail from '../PortfolioDetail/PortfolioDetail';
import './Portfolio.css';
import '../title/title.css';

export default function Portfolio() {
  const [isShowDetailModal, setisShowDetailModal] = useState(false);
  const [isShowDetailMoreModal, setisShowDetailMoreModal] = useState(false);
  const [mainPortfolioInfos, setMainPortfolioInfos] = useState({});
  const [activeFilter, setActiveFilter] = useState('*');

  const CloseModalDetails = () => setisShowDetailModal(false);
  const CloseModalMoreDetails = () => setisShowDetailMoreModal(false);

  const openModalDetails = (info) => {
    setMainPortfolioInfos(info);
    setisShowDetailModal(true);
  };

  const moreDetails = (info) => {
    console.log(info);
    setMainPortfolioInfos(info);
    setisShowDetailMoreModal(true);
  };

  const portfolioItems = [
    {
      img: "https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-1.jpg",
      title: "برنامه 1",
      category: "برنامه",
      filter: "filter-app"
    },
    {
      img: "https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-2.jpg",
      title: "اینترنت 3",
      category: "اینترنت",
      filter: "filter-web"
    },
    {
      img: "https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-3.jpg",
      title: "برنامه 2",
      category: "برنامه",
      filter: "filter-app"
    },
    {
      img: "https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-4.jpg",
      title: "محصول 2",
      category: "محصول",
      filter: "filter-card"
    },
    {
      img: "https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-5.jpg",
      title: "اینترنت 2",
      category: "اینترنت",
      filter: "filter-web"
    },
    {
      img: "https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-6.jpg",
      title: "برنامه 3",
      category: "برنامه",
      filter: "filter-app"
    },
    {
      img: "https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-7.jpg",
      title: "محصول 1",
      category: "محصول",
      filter: "filter-card"
    },
    {
      img: "https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-8.jpg",
      title: "محصول 3",
      category: "محصول",
      filter: "filter-card"
    },
    {
      img: "https://hivalearn.ir/templates/kasuka/assets/img/portfolio/portfolio-9.jpg",
      title: "اینترنت 3",
      category: "اینترنت",
      filter: "filter-web"
    },
  ];

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  };

  return (
    <section id='Portfolio' className='Portfolio'>
      <div className="Portfolio-container">
        <div className="Portfolio-text titles wow animate__animated animate__slideInUp">
          <h2 className='title'>نمونه کارها</h2>
          <p className="subtitle">نمونه کارهای ما را بررسی کنید</p>
        </div>
        <div className="Portfolio-content wow animate__animated animate__slideInUp">
          <div className="col-12">
            <ul className="Portfolio-content-ul">
              <li className={`Portfolio-content-list ${activeFilter === '*' ? 'active-li' : ''}`} onClick={() => handleFilterClick('*')}>همه</li>
              <li className={`Portfolio-content-list ${activeFilter === 'filter-app' ? 'active-li' : ''}`} onClick={() => handleFilterClick('filter-app')}>برنامه</li>
              <li className={`Portfolio-content-list ${activeFilter === 'filter-card' ? 'active-li' : ''}`} onClick={() => handleFilterClick('filter-card')}>محصول</li>
              <li className={`Portfolio-content-list ${activeFilter === 'filter-web' ? 'active-li' : ''}`} onClick={() => handleFilterClick('filter-web')}>اینترنت</li>
            </ul>
          </div>
        </div>
        <div className="Portfolio-Allimg wow animate__animated animate__slideInUp">
          {portfolioItems.filter(item => activeFilter === '*' || item.filter === activeFilter).map((item, index) => (
            <div className={`col-lg-4 Portfolioimg img${index + 1} ${item.filter}`} key={index}>
              <div className="Portfolioimg-wrap">
                <img src={item.img} alt={`portfolio-${index + 1}`} className='img-fluid' />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <p>{item.category}</p>
                  <div className="portfolio-links">
                    <a href="#" onClick={e => {
                      e.preventDefault();
                      openModalDetails(item);
                    }}> <i className='bx bx-plus'></i>
                    </a>
                    <a href="/" onClick={e => {
                      e.preventDefault();
                      moreDetails(item);
                    }}> <i className='bx bx-link'></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {isShowDetailModal && <PortfolioModal onHide={CloseModalDetails} body={[mainPortfolioInfos.img, mainPortfolioInfos.title]} />}

      {isShowDetailMoreModal && <PortfolioDetail onHide={CloseModalMoreDetails} body={[mainPortfolioInfos.img, mainPortfolioInfos.title]} />}
    </section>
  );
}
