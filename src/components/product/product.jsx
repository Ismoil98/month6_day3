import React, { Component } from 'react'
import './product.scss'
import Button from '../button/button'


class product extends Component {
  render() {
    return (
      <div className='product container'>
        <h2>
            Наша <span>продукция</span>
        </h2>
        <Button className="btn">Экструзионные тубы</Button>
        <ul>
            <li>
                <img src="product1.png" alt="" />
            </li>
            <li>
                <img src="product2.png" alt="" />
            </li>
            <li>
                <img src="product3.png" alt="" />
            </li>
            <li>
                <img src="product4.png" alt="" />
            </li>
            <li>
                <img src="product5.png" alt="" />
            </li>
        </ul>  
      </div>
    )
  }
}

export default product