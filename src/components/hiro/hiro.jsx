import React, { Component } from 'react'
import Button from '../button/button'
import './hiro.scss'

class hiro extends Component {
  render() {
    return (
      <div className='hiro'>
        <div className='content container'>
            <p className='info'>
                LEANGROUP - тубы и этикетки
            </p>
            <h1>
                Ламинатные тубы
            </h1>
            <p className='text'>
            Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).
            </p>
            <Button>Каталог</Button>
        </div>
      </div>
    )
  }
}

export default hiro