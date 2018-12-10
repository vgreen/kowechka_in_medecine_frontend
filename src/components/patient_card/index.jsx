import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { URLS } from '../../utils';

import './index.scss';

export default class PatientCard extends Component{
    state = {
        
    }

    
    render() {
        return (
            <div className="PatientCard">
                <div className="card-wrp">
                    <Link className="category-header"  to={URLS.PATIENT}><p>{this.props.patient.name} {this.props.patient.second_name}</p><h3>развернуть</h3></Link>
                </div>
            </div>
        );
      }
}
