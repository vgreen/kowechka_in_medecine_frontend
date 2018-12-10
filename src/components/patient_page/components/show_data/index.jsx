import React, { Component } from 'react';

import './index.scss';

export default class ShowData extends Component{
    render(){
        const { data } = this.props,
            { pulse, temperature, pressure } = data

        return(
            <div className="ShowData">
                <div className="pulse row">
                    <img alt="" src={ require( `../../../../asssets/pulse.png` ) }></img>
                    <p>Пульс: { pulse[pulse.length - 1] }</p>
                </div>
                <div className="temperature row">
                    <img alt="" src={ require( `../../../../asssets/temperature.png` ) }></img>
                    <p>Пикфлуометрия: { temperature[temperature.length - 1] }</p>
                </div>
                <div className="pressure row">
                    <img alt="" src={ require( `../../../../asssets/pressure.png` ) }></img>
                    <p>Давление: { pressure[pressure.length - 1] }/80</p>
                </div>
            </div>
        )
    }
}