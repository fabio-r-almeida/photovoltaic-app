import React, {Component} from "react";
import { Line } from 'react-chartjs-2'


class Corrected_Energy_Production extends Component{

constructor(props){
  super(props);
  this.state = {
    ChartData_Corrected_Energy:props.ChartData_Corrected_Energy,
    ChartData_Real_Energy:props.ChartData_Real_Energy,
    losses:props.losses,
    maximum:props.maximum
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
            label: "Real Energy ",
            data: this.props.ChartData_Corrected_Energy,
            backgroundColor: [
              'rgba(255,255,51, 1)'
            ],
            borderColor: [
              'rgba(255,255,51)'
            ],
            borderWidth: 2

          },
          {
            // Label for bars
            label: "Real Energy after losses ",
            data: this.props.ChartData_Corrected_Energy,//Object.values(this.props.ChartData_Corrected_Energy).map(x => x * (1 - this.props.losses/100)),
            backgroundColor: [
              'rgba(79, 247, 118, 1)'
            ],
            borderColor: [
              'rgba(79, 247, 118,1)'
            ],
            yAxisID: 'y2',
            borderWidth: 2

          },
          {
            // Label for bars
            label: "Ideal Energy",
            data: this.props.ChartData_Real_Energy,
            backgroundColor: [
              'rgba(168, 50, 50, 1)'
            ],
            borderColor: [
              'rgba(168, 50, 50)'
            ],
            yAxisID: 'y1',
            borderWidth: 2
          },
          
        ],
      }}
options={{
  animation: false,spanGaps: true,

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
      min: 0,
      max: this.props.maximum ,
      ticks: { color: '#fff', beginAtZero: true,  
          callback: function(value, index, ticks) {
        return 'W·h/m² ' + value;
    }  }
      
    },
    y1: {
      min: 0,
      max: this.props.maximum ,
      ticks: { color: '#fff', beginAtZero: true, }
    },
y2: {
  min: 0,
  max: this.props.maximum,
  ticks: { color: '#fff', beginAtZero: true,  }
},
    x: {
      ticks: { color: '#fff', beginAtZero: true }
    }
  },
  elements: {
    point:{
        radius: 0
    }
}
  }}



  redraw

/>


</div>

)


}


}
export default Corrected_Energy_Production;
