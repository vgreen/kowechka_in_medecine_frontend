import React, { Component } from 'react';
import { CHART } from '../../../../utils';
// var LineChart = require("react-chartjs").Line;
import { Line as LineChart } from 'react-chartjs';





export default class ChartEl extends Component{

	data = {
		labels: this.props.labels,
		datasets: [
			{
				label: "My First dataset",
				fillColor: "#fbeefd",
				strokeColor: "#d8a4e0",
				pointColor: "#7d4680",
				pointStrokeColor: "#fff",
				pointHighlightFill: "#fff",
				pointHighlightStroke: "rgba(220,220,220,1)",
				data: this.props.data
			}
		]
	};

    render(){
        return(
            <div className="ChartEl">
                <LineChart className="chart_c" data={this.data} options={CHART.OPTIONS} height="200%" width="600%"/>
            </div>
        )
    }
}