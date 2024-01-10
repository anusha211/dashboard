import React, { Component } from 'react'
import Singlecard from './Singlecard'

export class Cards extends Component {
    render() {
        return (
            <div style={{marginLeft:'50px'}}>
                <div className="fs-1 fw-bold m-3  text-Capitalize"
                    style={{
                         fontFamily: 'NHaasGroteskDSPro-65Md', 
                         marginTop: '3px !important',
                          marginBottom: '0px !important',
                          justifyContent:'center'
                         }}>
                    {this.props.coinName}
                </div>

                <section className="row m-3 mb-0" style={{ marginTop: ' 2px !important' }}>
                  <Singlecard value={this.props.mCap24 +'%'} name={'Market Cap 24Hrs'}/>
                  <Singlecard value= {'$'+this.props.ath} name={'All Time High'}/>
                  <Singlecard value={'$'+this.props.atl} name={'All Time Low'}/>
                  <Singlecard value={this.props.sentiment+'%'} name={'Positive Sentiments'}/>
                  <Singlecard value={'$'+this.props.high24} name={'High 24Hrs'}/>
                  <Singlecard value={'$'+this.props.high24} name={'Low 24Hrs'}/>
                </section>
                
                <div>
                    <div className="text-white text-center"
                        style={{ fontFamily: 'NHaasGroteskDSPro-65Md', overflow: 'visible', height: '2px', marginTop: "1%" }}> Current
                        Price</div>
                    <div style={{
                        fontFamily: 'NHaasGroteskDSPro-65Md', fontSize: '90px',
                        fontWeight: '700', color: "#90A4AE", textDecoration: 'none solid rgb(250, 250, 250)',
                        textAlign: 'center'
                    }}>
                        ${this.props.currentPrice}
                    </div>
                </div>
            </div>
        )
    }
}

export default Cards
