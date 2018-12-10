import React, { Component } from 'react'
import './index.scss'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { URLS } from '../../utils'
import { Link } from 'react-router-dom'
import  ChartEl from './components/chart'
import ShowData from './components/show_data'

export default class PatientPage extends Component {

  state = {
      name: "Vasya Pupkin",
      age: 42,
      number: 34,
      recomedation: "",
      diagnouse: "",
      sent: false

  }

  showSendState = () =>{
    let a = !this.state.sent
    this.setState({ sent: a })
    
  }
  
  items = () => {
    if(this.state.sent) return (<ReactCSSTransitionGroup transitionName="example" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
                                    <div className="message">Рекомендации успешно отправлены</div>
                                </ReactCSSTransitionGroup>)
    
  }

  render() {
    const { data } = this.props,
      { name, second_name, wtf } = data

    return (
      <div className="PatientPage">
        {this.items()}
        <header>
          <h1>{ name } { second_name }  ({ wtf })</h1>
          <h3><Link className="Link" to={ URLS.HOME }>Назад</Link></h3>
        </header>

        <div className = "page-wrp">
          <div className = "patient-side">
            <div className="list">
              <p className='title'>Данные на { data.dates[data.dates.length - 1]}</p>
              <ShowData data = { data }></ShowData>
            </div>

            <div className="list">
              <p className='title'>График сердцебиения</p>
              <ChartEl className="chart" data = { data.pulse } labels = {data.dates}></ChartEl>
            </div>

            <div className="list">
              <p className='title'>График пикфлуометрии</p>
              <ChartEl className="chart" data = { data.temperature } labels = {data.dates}></ChartEl>
            </div>

            
          </div>

          <div className = "doc-side">
            <div className="list">
              <p className='title'>График давления</p>
              <ChartEl className="chart" data = { data.pressure } labels = {data.dates}></ChartEl>
            </div>

            <div className="recomedation list">
              <p className='title'>Рекомендации пациенту </p>
              <textarea className="input" onChange = {(e)=> {this.setState( {recomedation: e.target.value})}}></textarea>
              <div className='submit' onClick = {this.showSendState}>Отправить</div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}
