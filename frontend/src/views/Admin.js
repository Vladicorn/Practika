import React from 'react';

import Footer from '../components/Footer';
import './Admin.css';
import Header from '../components/Header';

function Admin() {
  async function AddCalc() {

    const json = document.getElementById('json').value
    const login = document.getElementById('login').value
    const pass = document.getElementById('pass').value

    const loginApi = 'http://127.0.0.1:9001/login'

    let jwt

    const loginJson = {
      login: login,
      password: pass
    }

    await fetch(loginApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginJson)
    })
      .then((result) => result.json())
      .then((result) => {
        if (Object.hasOwn(result, 'token')) {
          jwt = result.token
        } else {
          document.getElementById('message').innerText = result.message
        }
      })

    if (jwt === null) {
      return
    }

    const api = 'http://127.0.0.1:9001/calculator/add'//добавление
    const obj = JSON.parse(json)
    const data = {
      token: jwt,
      calculator: obj
    }

    await fetch(api, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((result) => result.json())
      .then((result) => {
        document.getElementById('message').innerText = result.message
      })
  }

  const example = {
    "Calc": "Калькулятор рассрочки",
    "numberFields": [
      {
        "fieldName": "Сумма рассрочки",
        "field": "a"
      },
      {
        "fieldName": "Ежемесячная ставка",
        "field": "b"
      },
      {
        "fieldName": "Общая ставка",
        "field": "c"
      }
    ],
    "formula": "(a * b * c) / (c - 1)"
  }


  return (
    <>
  <Header />
      <div className='Admin'>
        <div className='content'>
          <p>Перед созданием калькулятора вам потребуется войти <strong>в аккаунт админа: (admin, admin)</strong></p>
        <input id="login" type="text" placeholder="Введите логин от админа" />
          <input id="pass" type="password" placeholder="Введите пароль от админа" />

          <p>
             Введите модель калькулятора в формате JSON.<strong> Пример:</strong>
          </p>
          <pre>
            {JSON.stringify(example, null, 2)}
          </pre>
          <textarea id="json"/>

          <button id="create" onClick={() => AddCalc()}>Создать</button>
          <p id='message'></p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Admin;