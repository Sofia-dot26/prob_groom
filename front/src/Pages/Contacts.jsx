import React from 'react';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import iconSet from '../fonts/selection.json';
import IcomoonReact, {iconList} from 'icomoon-react';
import './StyleSheet.css';


function Contacts() {
    return (
        <div>
            <Header />
            <ContactMap />
            <Map />
            <Footer />
        </div>
    )
}

function ContactMap() {
    return (
        <>
            <section className="title">
                <div className="container">
                    <h1> Контакты</h1>
                </div>
            </section>
            <section className="blocks">
                <div clasclassNames="container">
                    <div className="blocks_inner">
                        <div className="blocks_items">
                            <div className="blocks_title">
                                 
                                Телефон
                </div>
                            <div className="blocks_text">
                                +7(905)755-01-65
                </div>
                        </div>
                        <div className="blocks_items">
                            <div className="blocks_title">
                                E-mail
                </div>
                            <div className="blocks_text">
                                Groominsalon@gmail.com
                </div>
                        </div>
                        <div className="blocks_items">
                            <div className="blocks_title">
                                Адрес
                </div>
                            <div className="blocks_text">
                                г.Владимир, ул. Дворянская, 15
                </div>
                        </div>
                        <div className="blocks_items">
                            <div className="blocks_title">
                                Режим работы
                </div>
                            <div className="blocks_text">
                                9:00-21:00
                                (Без выходных)
                </div>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

function Map() {
    return (
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A018e28b89ea69003ebc38dd7c680d5ba444d8d6049e2f816d651899ea3a1af3e&amp;source=constructor" width="100%" height="400" frameborder="0"></iframe>
    )
}

export default Contacts;
