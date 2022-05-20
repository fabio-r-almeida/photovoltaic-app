import React, {Component} from "react";
import { Bar } from 'react-chartjs-2'
import DataEntry from '../../pages/DataEntry'


class Monthly_Energy_Production extends Component{

constructor(props){
  super(props);
  this.state = {
    ChartData:props.ChartData,
  }
}

static defaultProps = {
  displayTitle :true,
  displayLegend : true,
  legendPosition : 'right'
}

render(){

return(

<div className="chart1">

<Bar width={400}
    height={200}
       data={{
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
          {
            // Label for bars
            label: "kWh/Month",
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
          display:true,
          text: 'Monthly Energy Production',
          fontSize:25},
          legend:{
            display:true,
            position:'right'
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
export default Monthly_Energy_Production;
