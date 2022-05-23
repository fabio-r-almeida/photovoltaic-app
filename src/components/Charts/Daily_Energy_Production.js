import React, {Component} from "react";
import { Bar } from 'react-chartjs-2'


class Daily_Energy_Production extends Component{

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
            label: "kWh/Day",
            data: this.props.ChartData,
            backgroundColor: [
              'rgba(79, 247, 118, 0.8)'
            ],
            borderColor: [
              'rgba(79, 247, 118)'
            ],
            borderWidth: 2
          },
        ],
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
    x: {
      ticks: { color: '#fff', beginAtZero: true }
    }
  },
  elements: {
    point:{
        radius: 2
    }
}
  }}



  redraw

/>


</div>

)


}


}
export default Daily_Energy_Production;
