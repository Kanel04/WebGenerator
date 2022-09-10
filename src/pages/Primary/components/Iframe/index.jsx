import React, { Component } from 'react'
import Iframe from 'react-iframe'

export default class Framer extends Component {
  render() {
    return (
      <div>            
        <Iframe src={`../../../../../../BackendWebGenerator/templates/navbar/navbar.html`} height={this.props.height} width={this.props.width}>
        </Iframe>         
      </div>
    )
  }
}
