import React, {Component} from "react";
import { Line } from 'react-chartjs-2'


class Daily_Radiation_Per_Month extends Component{

constructor(props){
  super(props);
  this.state = {
    ChartData_Temperature:props.ChartData_Temperature,
    ChartData_Irradiation:props.ChartData_Irradiation,
  }
}

render(){

return(

<div className="chart">

<Line width={500}
    height={400}
       data={{
        labels: ["00:00","01:00","02:00","03:00","04:00","05:00","06:00","07:00","08:00","09:00","10:00","11:00","12:00","13:00","14:00","15:00","16:00","17:00","18:00","19:00","20:00","21:00","22:00","23:00"],
        datasets: [
          {
            // Label for bars
            label: "Temp (ºC)",
            data: this.props.ChartData_Temperature,
            backgroundColor: [
              'rgba(79, 247, 118, 0.8)'
            ],
            borderColor: [
              'rgba(79, 247, 118)'
            ],
            borderWidth: 2
          },
          {
            // Label for bars
            label: "Irradiation (w/m^2)",
            data: this.props.ChartData_Irradiation,
            backgroundColor: [
              'rgba(168, 50, 50)'
            ],
            borderColor: [
              'rgba(168, 50, 50)'
            ],
            yAxisID: 'y1',
            borderWidth: 2
          },
        ]
      }}
options={{
  plugins: {
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
    y1: {
      ticks: { color: '#fff', beginAtZero: true, }},
    x: {
      ticks: { color: '#fff', beginAtZero: true }
    }
  },
  elements: {
    point:{
        radius: 1
    }
}
  }}



  redraw

/>


</div>

)


}


}
export default Daily_Radiation_Per_Month;
