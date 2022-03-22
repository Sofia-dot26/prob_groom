import React, {Component,useEffect, useState} from 'react'
import jwt_decode from "jwt-decode"
import {Form, Button} from 'react-bootstrap';
import {addEx} from '../API'
import {admin} from "../API"



function Order() {
  const [data,setData] = useState([])
  const cleanTheDate=(dateStr)=>{
    return new Date(dateStr).toISOString().
    replace(/T/, ' ').
    replace(/\..+/, '')
  }
  const token = jwt_decode(localStorage.getItem('token')) 
  // console.log(token)
  const [isRoles,setIsRoles] = useState(token.role==="Admin"?true:false)
  useEffect(()=>{
      setIsRoles((token.role==="Admin"?true:false))
    },[token.role])
//   const [data,setData] = useState([])
//   useEffect(async()=>{
//     setData(await roles())
//  },[data.length])
 
    return (
<div className="upper-content">
        <div className ="img_account"></div>
        {!isRoles ? <>
          {/* Гость */}
            <Table/>
          </>:<div>
          
          <table className = "table-acc">
                <thead>
                <tr><th>Имя</th><th>Логин</th><th>Роль</th></tr>
                {data.map(item=>
                <tr><td>{cleanTheDate(item.name)}</td><td>{item.login}</td><td>{item.role}</td></tr>    
                )}

                </thead>          
            </table>


        </div>}
        </div>
    )
}

function Table() {
  const [name,setName] = useState("")
  const [phone,setPhone] = useState("")
  const [service_id,setService] = useState("")

  const handleClick = async() => {
      await addEx( name, phone,service_id)
  } 
  const handleOnChange1 = (event) =>{
        setName(event.target.value)
    }
    const handleOnChange2 = (event) =>{
        setPhone(event.target.value)
    }
    const handleOnChange3 = (event) =>{
        setService(event.target.value)
    }
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
                                    <td className="ro">200 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Стрижка когтей</td>
                                    <td className="ro">200 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Стрижка когтей с полировкой</td>
                                    <td className="ro">300 руб.</td>
                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Установка антицарапок</td>
                                    <td className="ro">375 руб.</td>

                                </tr>
                                <tr>
                                    <td></td>
                                    <td>Чистка ушек</td>
                                    <td className="ro">150 руб.</td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

  <h1>Заказ услуг</h1>
  <div className="form">
  <Form.Group controlId="formBasicName">
    <Form.Control style={{fontSize:25}} className="mt-5" type="name" custom value={name} onChange={(event)=>handleOnChange1(event)} placeholder="Введите ваше имя.." />
   
  </Form.Group>

  <Form.Group controlId="formBasicPassword">
    <Form.Control style={{fontSize:25}} className="mt-5" type="password" custom value={phone} onChange={(event)=>handleOnChange2(event)} placeholder="Введите телефон.." />
  </Form.Group>
  
  <Form.Group controlId="formBasicUslugi">
    <Form.Control style={{fontSize:25}} className="mt-5" type="uslugi" custom value={service_id} onChange={(event)=>handleOnChange3(event)} placeholder="Введите услугу.." />
  </Form.Group>
  <Button style={{fontSize:20}} className="mt-4" variant="primary" type="submit" onChange={handleClick}>
    Записаться
  </Button>
  </div>
        </>
    )
}



export default Order