import React from 'react';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import about1 from '../images/about-1.png';
import about2 from '../images/about-2.png';
import about3 from '../images/about-3.png';
import iconSet from '../fonts/selection.json';
import IcomoonReact, {iconList} from 'icomoon-react';
import './StyleSheet.css';


function Home(){
  return(
    <div>
      <Header/>
      <Banner/>
      <About/>
      <Footer/>
    </div>
  )
}

function Banner() {
  return (
    <section className="banner">
        <div className="container">
            <div className="banner_inner">
                <div className="banner_item">
                    <div className="banner_title">
                        Groom Bar
                    </div>
                    <div className="banner_text">
                        Для кошек и собак
                    </div>
                    <a className="banner_btn default-btn" href="/signin">
                    Записаться Онлайн 
                    <IcomoonReact iconSet={iconSet} color="#fff14f" size={20} icon="quill" /> 
                    </a>
                </div>
            </div>
        </div>
      </section>
  )
}
function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-top">
          <div className="about-title-box">
            <div className="about-title">
              Почему клиенты выбирают салон Groom Bar...
            </div>
            <div className="about-text">
              и рады приходить в наш салон снова и снова?
            </div>
            </div>
          <div className="about-btn">
            <a href="/uslugi">
              Показать все услуги
            </a>
          </div>
        </div>
        <div className="about_items">
          <div className="about_item">
            <img src={about1} />
            <div className="about_item-text">
              Современное оборудование;
              Качественная косметика.
            </div>
            </div>
          <div className="about_item">
            <img src={about2} />
            <div className="about_item-text">
              Комфортные условия;
              Удобное местоположение.
            </div>
          </div>
          <div className="about_item">
            <img src={about3}/>
            <div className="about_item-text">
              Адекватные цены и скидки постоянным клиентам.
            </div>
          </div>
        </div>
    </div>
</section>
  )
}


export default Home;
