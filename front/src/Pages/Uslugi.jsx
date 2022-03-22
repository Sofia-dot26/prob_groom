import React from 'react';
import Footer from '../Component/Footer';
import Header from '../Component/Header';
import './StyleSheet.css';


function Uslugi() {
    return (
        <div>
            <Header />
            <Table />
            <Footer />
        </div>
    )
}

function Table() {
    return (
        <>
            <section>
                <div className="container">
                    <div className="table">
                        <h1>Стрижки для собак</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th width="35"></th>
                                    <th width="350">Комплекс для собак</th>
                                    <th width="250"><span>Для взрослых собак</span></th>
                                    <th width="250">Скидка -20% *</th>
                                    <th width="250">Скидка -10% *</th>
                                    <th width="180">Для щенков **</th>
                                    <th></th>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td width="300">Маленькие гладкошерстные породы</td>
                                    <td class="ro">950 руб.</td>
                                    <td class="ro">760 руб.</td>
                                    <td class="ro">855 руб.</td>
                                    <td class="ro">590 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Маленькие длинношерстные породы</td>
                                    <td class="ro">1 250 руб.</td>
                                    <td class="ro">1 000 руб.</td>
                                    <td class="ro">1 125 руб.</td>
                                    <td class="ro">850 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Средние породы</td>
                                    <td class="ro">1400 - 2250 руб.</td>
                                    <td class="ro">1120 - 1800 руб.</td>
                                    <td class="ro">1260 - 2025 руб.</td>
                                    <td class="ro">1 100 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Крупные породы</td>
                                    <td class="ro">от 1 690 руб.</td>
                                    <td class="ro">от 1 360 руб.</td>
                                    <td class="ro">1 520 руб.</td>
                                    <td class="ro">1 500 руб.</td>

                                </tr>
                            </tbody>
                        </table>
                        <div className="p">*– 20% – от стоимости комплекса при повторном посещении салона в течение 30 дней</div>
                        <div className="p">– 10% – от стоимости комплекса при повторном посещении салона в течение 60 дней</div>
                        <div className="p">** – комплекс для щенков до 6 месячного возраста.</div>
                        <div className="p">!Цена действительна при предъявлении вет. паспорта животного или щенячьей метрики. На данный комплекс скидки не действуют.</div>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="table">
                        <h1>Стрижки для кошек</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th width="35"></th>
                                    <th width="300">Комплекс для кошек</th>
                                    <th></th>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td width="300">Комплекс "Стрижка кошек"</td>
                                    <td class="ro">1 100 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Комплекс "Стрижка Мейн-Куна"</td>
                                    <td class="ro">1 250 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Комплекс "Купание кошек"</td>
                                    <td class="ro">890 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Экспресс-линька</td>
                                    <td class="ro">1 250 руб.</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="table">
                        <h1>Чистка зубов</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td width="300">Мелкие породы</td>
                                    <td class="ro">1 300 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Средние породы</td>
                                    <td class="ro">1 500 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Крупные породы</td>
                                    <td class="ro">2 100 руб.</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
            <section>
                <div className="container">
                    <div className="table">
                        <h1>Гигиенические Услуги</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <td></td>
                                    <td width="300">Чистка параанальных желез</td>
                                    <td class="ro">200 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Стрижка когтей</td>
                                    <td class="ro">200 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Стрижка когтей с полировкой</td>
                                    <td class="ro">300 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Установка антицарапок</td>
                                    <td class="ro">375 руб.</td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Чистка ушек</td>
                                    <td class="ro">150 руб.</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}


export default Uslugi;