import React, { Component } from 'react'
import './button.scss'

class button extends Component {
  render() {
    return (
      <button className='mainBtn'>{this.props.children}</button>
    )
  }
}

export default button