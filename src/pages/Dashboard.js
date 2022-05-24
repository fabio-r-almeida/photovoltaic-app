import React, { Component } from "react";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import "./Dashboard-files/css/bootstrap.min.css";
import "./Dashboard-files/css/tooplate.css";
import "./Dashboard-files/css/css1.css";
import "./Dashboard-files/css/fontawesome.min.css";

import Yearly_Moving_Average_Production from './Dashbord-Sub-Pages/Yearly_Moving_Average_Production'
import Solar_Irradiation from './Dashbord-Sub-Pages/Solar_Irradiation'
import Average_Temp_And_Irradiation from './Dashbord-Sub-Pages/Average_Temp_And_Irradiation'
import Real_vs_Ideal_Production from './Dashbord-Sub-Pages/Real_vs_Ideal_Production'


class Dashboard extends Component {
      constructor(props) {
        super(props);
        this.state = {

          Avarage_data:false,
          Monthly_Irradiation_data:false,
          loss: props.loss,
          installed_power: props.installed_power,
          azimuth:props.azimuth,
          slope:props.slope,
          pv_technology:props.pv_technology,
          address:props.address,

          total_real_produced:props.total_real_produced,
          total_expected_produced:props.total_expected_produced,
          hide_avarage_solar_irradiation_button:"Show Solar Irradiation",
          hide_avarage_solar_irradiation_per_hour_per_month_button:"Show Solar Irradiation per hour/month",
          hide_real_vs_expected_button:"Show Energy Production per hour",
          hide_yearly_production_button:"Hide Yearly Production MA",
          yearly_production_MA:props.yearly_production_MA,

          Average_Temp_And_Irradiation_data:props.Average_Temp_And_Irradiation_data,
          Corrected_Energy_Production:props.Corrected_Energy_Production,
          Monthly_Energy_charData: props.Monthly_Energy_charData,
          Daily_Energy_charData: props.Daily_Energy_charData,
          Monthly_Irradiation_charData: props.Monthly_Irradiation_charData,
          Daily_Irradiation_charData: props.Daily_Irradiation_charData,

    
        };

         this.hide_avarage_solar_irradiation=this.hide_avarage_solar_irradiation.bind(this)
         this.hide_avarage_solar_irradiation_per_hour_per_month=this.hide_avarage_solar_irradiation_per_hour_per_month.bind(this)
         this.hide_real_vs_expected=this.hide_real_vs_expected.bind(this)
         this.hide_yearly_production=this.hide_yearly_production.bind(this)

      }


      hide_avarage_solar_irradiation() {
         var x = document.getElementById("Avarage Solar Irradiation");
         if (x.style.display === "none") {
            this.setState({hide_avarage_solar_irradiation_button:"Hide Solar Irradiation"})
            this.setState({hide_avarage_solar_irradiation_per_hour_per_month_button:"Show Solar Irradiation per hour/month"})
            this.setState({hide_real_vs_expected_button:"Show Energy Production per hour"})
            this.setState({hide_yearly_production_button:"Show Yearly Production MA"})

           x.style.display = "block";
           document.getElementById("Yearly Production MA").style.display = "none";
           document.getElementById("Average Temperature and Irradiation Hourly per Month").style.display = "none";
           document.getElementById("Real vs Ideal Energy Production").style.display = "none";
         } else {
            this.setState({hide_avarage_solar_irradiation_button:"Show Solar Irradiation"})
           x.style.display = "none";
         }
       }

       hide_avarage_solar_irradiation_per_hour_per_month() {
         var x = document.getElementById("Average Temperature and Irradiation Hourly per Month");
         if (x.style.display === "none") {
           x.style.display = "block";
           document.getElementById("Avarage Solar Irradiation").style.display = "none";
           document.getElementById("Real vs Ideal Energy Production").style.display = "none";
           document.getElementById("Yearly Production MA").style.display = "none";

           this.setState({hide_avarage_solar_irradiation_button:"Show Solar Irradiation"})
           this.setState({hide_avarage_solar_irradiation_per_hour_per_month_button:"Hide Solar Irradiation per hour/month"})
           this.setState({hide_real_vs_expected_button:"Show Energy Production per hour"})
           this.setState({hide_yearly_production_button:"Show Yearly Production MA"})

         } else {
            this.setState({hide_avarage_solar_irradiation_per_hour_per_month_button:"Show Solar Irradiation per hour/month"})
           x.style.display = "none";
         }
       }
       hide_real_vs_expected() {
         var x = document.getElementById("Real vs Ideal Energy Production");
         if (x.style.display === "none") {
            document.getElementById("Avarage Solar Irradiation").style.display = "none";
            document.getElementById("Average Temperature and Irradiation Hourly per Month").style.display = "none";
            document.getElementById("Yearly Production MA").style.display = "none";

            this.setState({hide_avarage_solar_irradiation_button:"Show Solar Irradiation"})
            this.setState({hide_avarage_solar_irradiation_per_hour_per_month_button:"Show Solar Irradiation per hour/month"})
            this.setState({hide_real_vs_expected_button:"Hide Energy Production per hour"})
            this.setState({hide_yearly_production_button:"Show Yearly Production"})

            x.style.display = "block";
         } else {
            this.setState({hide_real_vs_expected_button:"Show Energy Production per hour"})
           x.style.display = "none";
         }
      }

         hide_yearly_production() {
            var x = document.getElementById("Yearly Production MA");
            if (x.style.display === "none") {
               document.getElementById("Avarage Solar Irradiation").style.display = "none";
               document.getElementById("Average Temperature and Irradiation Hourly per Month").style.display = "none";
               document.getElementById("Real vs Ideal Energy Production").style.display = "none";
   
               this.setState({hide_avarage_solar_irradiation_button:"Show Solar Irradiation"})
               this.setState({hide_avarage_solar_irradiation_per_hour_per_month_button:"Show Solar Irradiation per hour/month"})
               this.setState({hide_real_vs_expected_button:"Show Energy Production per hour"})
               this.setState({hide_yearly_production_button:"Hide Yearly Production"})
   
               x.style.display = "block";
            } else {
               this.setState({hide_real_vs_expected_button:"Show Yearly Production"})
              x.style.display = "none";
            }
         }



       
     
/*     
<div
            className="calculate-button-container calculate-button-root-className-name3"
            >
            <button className="learn-more" >
            <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
            </span>
            <span className="button-text">{this.state.button_text}</span>
            </button>  
                          
         </div>
          */
  render() {
return (
<>
<div 
   className="calculate-button-container calculate-button-root-className-name3"
   >
   <button className="learn-more"  onClick={this.hide_yearly_production}>
   <span className="circle" aria-hidden="true">
   <span className="icon arrow"></span>
   </span>
   <span className="button-text">{this.state.hide_yearly_production_button}</span>
   </button>
   <button className="learn-more"  onClick={this.hide_avarage_solar_irradiation}>
   <span className="circle" aria-hidden="true">
   <span className="icon arrow"></span>
   </span>
   <span className="button-text">{this.state.hide_avarage_solar_irradiation_button}</span>
   </button>  
   <button className="learn-more"  onClick={this.hide_avarage_solar_irradiation_per_hour_per_month}>
   <span className="circle" aria-hidden="true">
   <span className="icon arrow"></span>
   </span>
   <span className="button-text">{this.state.hide_avarage_solar_irradiation_per_hour_per_month_button}</span>
   </button>
   <button className="learn-more"  onClick={this.hide_real_vs_expected}>
   <span className="circle" aria-hidden="true">
   <span className="icon arrow"></span>
   </span>
   <span className="button-text">{this.state.hide_real_vs_expected_button}</span>
   </button>
</div>
<div className="tm-col tm-col-big1">
   <div className="bg-white tm-block h-100">
      <div className="test-container07">
      </div>
   </div>
</div>
<div className="data-input-container">
   <div className="standard-container standard-root-className-name31">
      <label className="standard-text">
         <h1>User Parameters</h1>
      </label>
   </div>
   <div className="test-container04">
      <div className="vl" >
         <div className="test-container05">
            <div
               className="standard-container standard-root-className-name32"
               >
               <label className="standard-text">
               <span>Losses :     {this.props.loss} %</span>
               </label>
            </div>
            <div
               className="standard-container standard-root-className-name32"
               >
               <label className="standard-text">
               <span>Expected Produced Energy :     {(this.props.total_expected_produced).toFixed(2)} kWh</span>
               </label>
            </div>
            <div
               className="standard-container standard-root-className-name32"
               >
               <label className="standard-text">
               <span>Real Produced Energy :     {(this.props.total_real_produced).toFixed(2)} kWh</span>
               </label>
            </div>
            <div
               className="standard-container standard-root-className-name33"
               >
               <label className="standard-text">
               <span>Installed Solar Power :    {this.props.installed_power} kW</span>
               </label>
            </div>
            <div
               className="standard-container standard-root-className-name33"
               >
               <label style={{color:"white"}}>
               <span>Note: <br />Expected Production uses a avarage values per month<br />  Real Production: uses 2020 real values </span>
               </label>
            </div>
         </div>
      </div>
      <div className="vl" >
         <div className="test-container05">
            <div
               className="standard-container standard-root-className-name34"
               >
               <label className="standard-text">
               <span>PV Technology:   {this.props.pv_technology}</span>
               </label>
            </div>
            <div
               className="standard-container standard-root-className-name34"
               >
               <label className="standard-text">
               <span>Locality :   {this.props.address}</span>
               </label>
            </div>
            <div
               className="standard-container standard-root-className-name34"
               >
               <label className="standard-text">
               <span>Azimuth :    {this.props.azimuth} º</span>
               </label>
            </div>
            <div
               className="standard-container standard-root-className-name35"
               >
               <label className="standard-text">
               <span>Tilt :     {this.props.slope} º</span>
               </label>
            </div>
         </div>
      </div>
   </div>
</div>
<div id="reportsPage">
   <div className="" id="home">
      <div className="container">
         <div id="Avarage Solar Irradiation" style={{display:"none"}} loading="lazy">
            <Solar_Irradiation Monthly_Energy_charData={this.props.Monthly_Energy_charData} 
               Monthly_Irradiation_charData={this.props.Monthly_Irradiation_charData}
               Daily_Irradiation_charData={this.props.Daily_Irradiation_charData}
               Daily_Energy_charData={this.props.Daily_Energy_charData}         
               />
         </div>
         <div id="Yearly Production MA" style={{display:"block"}} loading="lazy">
            <Yearly_Moving_Average_Production yearly_production_MA={this.props.yearly_production_MA} />
         </div>
         <div id = "Average Temperature and Irradiation Hourly per Month" style={{display :"none"}} loading="lazy">
         <Average_Temp_And_Irradiation Average_Temp_And_Irradiation_data={this.props.Average_Temp_And_Irradiation_data}/>
      </div>
      <div id="Real vs Ideal Energy Production" style={{display :"none"}} loading="lazy">.
      <Real_vs_Ideal_Production Corrected_Energy_Production={this.props.Corrected_Energy_Production}         loss={this.props.loss} installed_power={this.props.installed_power}/>
   </div>
   <footer className="row tm-mt-small">
      <div className="col-12 font-weight-light">
         <p className="d-inline-block tm-bg-black text-white py-2 px-4"> © 2022 Photovoltaic Calculator, All Rights Reserved. </p>
      </div>
   </footer>
</div>
</div>
</div>
</>
);
  }
}

export default Dashboard;
//         
