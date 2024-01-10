
import React, { Component } from 'react'

export default class Singlecard extends Component {
  render() {
    return (
        <div className="card text-white text-center  m-3"
            style={{ width: "11rem", backgroundColor: "rgb(43, 43, 43)", marginTop: "0px !important" }}>
            <div className="card-body">
                <h6 className="card-title" >{this.props.name}</h6>
                <p className="card-text fw-bold fs-5"
                   style={{color: this.props.name=='High 24Hrs'? "rgb(51, 255, 0) " : this.props.name=='Low 24Hrs'?"rgb(255, 32, 32)":"#fcdf03" }}>
                    {this.props.value} 
                </p>
            </div>
        </div>
    
  )
  }
}
