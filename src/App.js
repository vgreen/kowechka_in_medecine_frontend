import React, { Component } from 'react';

import './App.scss';
import { URLS } from './utils';
import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';

import PatientPage from './components/patient_page';
import MainPage from './components/main_page';
import Login from './components/login'

class App extends Component {

  
  state = {
    cur_user: "",
    cur_patient_id: 0,
    data:[ 
      {
        name:"Petya",
        second_name:"Smirnov",
        wtf: 18,
        pulse:[100, 120, 80],
        temperature:[300, 400, 500],
        pressure:[120, 130, 128],
        dates:['01/06', '05/06', '10/06']
      }
    ]
  }
  
  	
	loadData() {
    
    fetch('http://195.19.40.201:32284')
			.then(response => response.json())
			.then(data => {
        console.log(data.data)
        this.setState({ data:data.data})
      })
      
	}

  updateData = (value) => {
      this.setState({ cur_user: value})
      this.loadData()
  }

 


  MainPage = () =>{
    return <MainPage cur_user = {this.state.cur_user} data = {this.state.data} ></MainPage>
  }
 
  Login = () => {
    return <Login updateData={this.updateData}></Login>
  }

  PatientPage = () =>{
    return <PatientPage data = {this.state.data[this.state.cur_patient_id]}></PatientPage>
  }
  render() {
    return (
      <Router>
        <div className = "mainApp">

          

          <AnimatedRoute
              className="main-page"
              exact path={URLS.ROOT} component = {this.Login}
              atEnter={{ scale: 2, opacity: 0 }}
              atLeave={{ scale: 2, opacity: 0 }}
              atActive={{ scale: 1, opacity: 1 }}
              mapStyles={(styles) => ({
                transform: `scale(${styles.scale})`,
                opacity: styles.opacity
              })}
            />
          <AnimatedRoute
              className="app-patient"
              exact path={URLS.PATIENT} component={this.PatientPage}
              atEnter={{ scale: 0, opacity: 0 }}
              atLeave={{ scale: 0, opacity: 0 }}
              atActive={{ scale: 1, opacity: 1 }}
              mapStyles={(styles) => ({
                transform: `scale(${styles.scale})`,
                opacity: styles.opacity
              })}
            />
            <AnimatedRoute
              className="app-patient"
              exact path={URLS.HOME} component = { this.MainPage}
              atEnter={{ scale: 0, opacity: 0 }}
              atLeave={{ scale: 0, opacity: 0 }}
              atActive={{ scale: 1, opacity: 1 }}
              mapStyles={(styles) => ({
                transform: `scale(${styles.scale})`,
                opacity: styles.opacity
              })}
            />
            
        </div>
        
      </Router>
    );
  }
}

export default App;
