import React from 'react';
import logo from '../images/Logo.jpg';
import iconSet from '../fonts/selection.json';
import IcomoonReact, {iconList} from 'icomoon-react';




function Header() {
  return (
    <div className="header">
      <div className="header_top">
        <div className="container">
          <div className="header_contacts">
              <a className="header_phone" ><IcomoonReact iconSet={iconSet} color="rgb(58, 31, 19)" size={20} icon="phone" />+7(905)755-01-65</a>
              <a className="header_email" ><IcomoonReact iconSet={iconSet} color="rgb(58, 31, 19)" size={20} icon="mail2" />groominsalon@gmail.com</a>
              <a className="header_btn" href = "/signin"><IcomoonReact iconSet={iconSet} color="rgb(58, 31, 19)" size={20} icon="quill" /> Вход</a>
            </div>
          </div>
        </div>
        <div className="header_content">
          <div className="container">
            <div className="header_content-inner">
              <div className="header_logo">
                <a href="default.html">
                  <img src={logo}/>
                </a>
              </div>
              <nav className="menu">
                <ul>
                  <li><a href="/home">Главная</a></li>
                  <li><a href="/uslugi">Услуги</a></li>
                  <li><a href="/mastera">Мастера</a></li>
                  <li><a href="/contact">Контакты</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
    </div>
  )
}


export default Header;
