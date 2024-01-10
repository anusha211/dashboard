import React, { Component } from 'react'
import axios from 'axios';
import Cards from './Components/Cards';
import Header from './Components/Header';
import ChartSection from './Components/ChartSection';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      ID:'bitcoin',
      Data:{}
     }
     axios.create({baseURL:""});
     const instance = axios.create(
       {
               baseURL: "",
               withCredentials: false,
               headers: {
                 'Access-Control-Allow-Origin' : '*',
                 'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',   
             }
         })
  }


  getData= async()=>{
   let getdata= await axios.get('https://api.coingecko.com/api/v3/coins/'+this.state.ID)
   this.setState({ID:getdata.data.id,Data:getdata.data})
  } 

  handleSubmit= async(event)=>{
    await this.setState({ID:event.target.value,Data:this.state.Data})
    this.getData();
  }

  componentDidMount(){
    this.getData();
  }


  render() {

    return (
      <div>
        <Header handle_Submit={this.handleSubmit}/>
        <Cards coinName={this.state.Data.name}
               currentPrice={this.state.Data.market_data ? this.state.Data.market_data.current_price["usd"] : ""}
               mCap24={this.state.Data.market_data ? this.state.Data.market_data.market_cap_change_percentage_24h : ""}
               ath={this.state.Data.market_data ? this.state.Data.market_data.ath.usd : ""} 
               atl={this.state.Data.market_data ? this.state.Data.market_data.atl.usd : ""}
               sentiment={this.state.Data.sentiment_votes_up_percentage}
               high24={this.state.Data.market_data ? this.state.Data.market_data.high_24h["usd"] : ""}
               low24={this.state.Data.market_data ? this.state.Data.market_data.low_24h["usd"] : ""} />
      <ChartSection Id={this.state.ID}/>
      </div>

    )
  }
}
