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
    height={200}
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
  title:{
    display:false,
    text: 'Daily_Irradiation'
  },
    

    responsive:true,
    maintainAspectRatio:true,

    
  }}
  redraw

/>


</div>

)


}


}
export default Monthly_Irradiation;
