import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { URLS } from '../../utils';

import './index.scss';
import PatientCard from '../patient_card'

export default class MainPage extends Component{



  render() {
    const { data, cur_user } = this.props

    return (
      <div className="MainPage">
        <header>
          <h1>Kowechka in Medicine</h1>
          <h3>{ cur_user }  <Link className="Link" to={ URLS.ROOT }>Выйти</Link></h3>
        </header>
        <div className="main_wrp"> 
          {/* {this.patientCardMaker(this.props.patients)} */}

          {
            data.map((item, i) => {
              return <PatientCard key={ i } patient={ item }></PatientCard>
            })
          }
        </div>
        
      </div>
    );
  }
}
