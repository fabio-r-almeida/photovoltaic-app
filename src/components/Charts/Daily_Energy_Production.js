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
    height={200}
       data={{
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
          {
            // Label for bars
            label: "kWh/Day",
            data: this.props.ChartData,
            backgroundColor: [
              'rgba(52, 152, 235, 0.8)'
            ],
            borderColor: [
              'rgba(48, 236, 242)'
            ]
          },
        ],
      }}
options={{
  title:{
    display:false,
    text: 'Daily Energy Production'
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
export default Daily_Energy_Production;
