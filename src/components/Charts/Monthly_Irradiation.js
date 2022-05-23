import React, {Component} from "react";
import { Bar } from 'react-chartjs-2'


class Monthly_Irradiation extends Component{

constructor(props){
  super(props);
  this.state = {
    ChartData:props.ChartData,
  }
}

render(){

return(

<div className="chart">

<Bar width={400}
    height={300}
       data={{
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
          {
            // Label for bars
            label: "kWh/m2/Month",
            data: this.props.ChartData,
            backgroundColor: [
              'rgba(252, 82, 3, 0.8)'
            ],
            borderColor: [
              'rgba(252, 82, 3)'
            ]
          },
        ],
      }}
options={{
  plugins:{
    title:{
      display:false,
      text: 'Daily Energy Production',
      color: 'rgb(255, 255, 255)'
    },
    legend: {
      display: true,
      labels: {
          color: 'rgb(255, 255, 255)'
      }},
    

    responsive:true,
    maintainAspectRatio:true,

    
  },

  scales: {
    y: {
      ticks: { color: '#fff', beginAtZero: true }
    },
    x: {
      ticks: { color: '#fff', beginAtZero: true }
    }
  }
  }}
  redraw

/>


</div>

)


}


}
export default Monthly_Irradiation;
