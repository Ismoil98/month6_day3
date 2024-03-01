import React, { Component } from 'react'
import './certificate.scss'

class certificate extends Component {
  render() {
    return (
      <div className='certificate container'>
        <h2>
        Качество продукции подтверждают <span>сертификаты</span>
        </h2>
        <ul>
          <li>
            <img src="certificate1.png" alt="" />
          </li>
          <li>
            <img src="certificate2.png" alt="" />
          </li>
          <li>
            <img src="certificate3.png" alt="" />
          </li>
          <li>
            <img src="certificate4.png" alt="" />
          </li>
          <li>
            <img src="certificate5.png" alt="" />
          </li>
        </ul>
      </div>
    )
  }
}

export default certificate