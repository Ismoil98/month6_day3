import React, { Component } from 'react'
import './command.scss'

class command extends Component {
  render() {
    return (
      <div className='command container'>
        <h2>
            Наша <span>команда</span>
        </h2>
        <ul>
            <li>
                <img src="command1.png" alt="" />
                <h3>
                    Войнич Дарья
                </h3>
                <p className='info'>
                    Заместитель директора по продажам
                </p>
                <p className='tel'>
                    +375 (17) 270-53-77 (317)
                </p>
                <p className='mail'>
                    k.melnichenko@leangroup.by
                </p>
            </li>
            <li>
                <img src="command2.png" alt="" />
                <h3>
                    Войнич Дарья
                </h3>
                <p className='info'>
                    Заместитель директора по продажам
                </p>
                <p className='tel'>
                    +375 (17) 270-53-77 (317)
                </p>
                <p className='mail'>
                    k.melnichenko@leangroup.by
                </p>
            </li>
            <li>
                <img src="command3.png" alt="" />
                <h3>
                    Войнич Дарья
                </h3>
                <p className='info'>
                    Заместитель директора по продажам
                </p>
                <p className='tel'>
                    +375 (17) 270-53-77 (317)
                </p>
                <p className='mail'>
                    k.melnichenko@leangroup.by
                </p>
            </li>
            <li>
                <img src="command4.png" alt="" />
                <h3>
                    Войнич Дарья
                </h3>
                <p className='info'>
                    Заместитель директора по продажам
                </p>
                <p className='tel'>
                    +375 (17) 270-53-77 (317)
                </p>
                <p className='mail'>
                    k.melnichenko@leangroup.by
                </p>
            </li>
            <li>
                <img src="command5.png" alt="" />
                <h3>
                    Войнич Дарья
                </h3>
                <p className='info'>
                    Заместитель директора по продажам
                </p>
                <p className='tel'>
                    +375 (17) 270-53-77 (317)
                </p>
                <p className='mail'>
                    k.melnichenko@leangroup.by
                </p>
            </li>
        </ul>
      </div>
    )
  }
}

export default command