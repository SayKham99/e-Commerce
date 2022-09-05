import React from 'react'
import Container from "../Container/Container";
import './Navbar.scss'
import sony from '../../assets/images/sony.png'
import canon from '../../assets/images/canon.png'

const large = [
    {
        id: 1,
        image: canon,
        model: 'PowerShot SX620 HS',
        company: 'Canon',
        prices: [
              {id: 1, title: 'Будний', price: '630 Р'},
              {id: 2, title: 'Выходной', price: '750 Р'},
              {id: 1, title: 'Неделя', price: '4 380 Р'},
              {id: 1, title: 'Месяц', price: '12 250 Р'},
        ]
    }
]
const small = [
    {
        id: 1,
        image: sony,
        model: 'Alpha ILCE-6000 Kit',
        company: 'Sony',
        price:'От 2 400 Р'
    }
]

function Navbar() {
    return (
          <nav className='navbar'>
              <Container>
              </Container>
          </nav>
    )
}

export default Navbar