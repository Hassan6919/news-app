import React, { Component } from 'react'
import Ripple from "./Ripple@1x-1.3s-200px-200px.gif"
export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img src={Ripple} alt="Ripple" />
      </div>
    )
  }
}

export default Spinner
