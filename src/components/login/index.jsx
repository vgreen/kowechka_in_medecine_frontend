import React, { Component } from 'react';
import { URLS } from '../../utils';
import { Redirect } from 'react-router-dom'
import './index.scss';

export default class Login extends Component{

    data = [
            {
                name: "doctor",
                passwd: "kowechka"
            },
            {
                name: "mihas",
                passwd: "tver"
            }
    ]  

  state = {
    cur_name:"",
    cur_pasw:"",
    redirect: false
  }

  setName = (e) => {
        this.setState({
        cur_name : e.target.value
        })
    }
  setPsw = (e) => {
        this.setState({
        cur_pasw : e.target.value
        })
    }
  
  renderRedirect = () => {
        if (this.state.redirect) {
            this.setState({
                redirect: false
            })
          return <Redirect to={URLS.HOME} />
        }
    }

  checkUser = () =>{
    for(let i = 0; i < this.data.length;i++){
        if(this.state.cur_name === this.data[i].name && this.state.cur_pasw === this.data[i].passwd ){
            this.props.updateData(this.state.cur_name)
            this.setState({
                redirect: true
            })
        } 
    }
  }


  render() {
    return (
      <div className="Login">
      {this.renderRedirect()}
        <header><h1>Kowechka in Medecine</h1></header>
        <div className="main_wrp"> 
          <h2>Введите логин и пароль</h2>  
          <div className = "form-holder">
            <input type="text" onChange = {this.setName}></input>
            <input type="password" onChange = {this.setPsw}></input>
            <div className = "sign-in-but" onClick = {this.checkUser}>Sign In</div>
          </div>
        </div>
        
      </div>
    );
  }
}