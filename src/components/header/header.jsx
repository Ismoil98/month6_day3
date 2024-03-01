import React, { Component } from 'react'
import './header.scss'

class header extends Component {
  render() {
    return (
      <header className=' container'>
        <a href="#">
          <img src="logoSite.svg" alt="" />
        </a>
      </header>
    )
  }
}

export default header