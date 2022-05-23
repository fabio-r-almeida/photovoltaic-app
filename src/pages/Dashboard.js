import React, { Component } from "react";
// eslint-disable-next-line
import { Chart as ChartJS } from "chart.js/auto";
import "./Dashboard-files/css/bootstrap.min.css";
import "./Dashboard-files/css/tooplate.css";
import "./Dashboard-files/css/css1.css";
import "./Dashboard-files/css/fontawesome.min.css";

import Monthly_Irradiation from "../components/Charts/Monthly_Irradiation";
import Monthly_Energy_Production from "../components/Charts/Monthly_Energy_Production";
import Daily_Energy_Production from "../components/Charts/Daily_Energy_Production";
import Daily_Irradiation from "../components/Charts/Daily_Irradiation";
import Daily_Radiation_Per_Month from "../components/Charts/Daily_Radiation_Per_Month";
import Corrected_Energy_Production from "../components/Charts/Corrected_Energy_Production";

class Dashboard extends Component {
      constructor(props) {
        super(props);
        this.state = {
          Monthly_Energy_charData: props.Monthly_Energy_charData,
          Daily_Energy_charData: props.Daily_Energy_charData,
          Monthly_Irradiation_charData: props.Monthly_Irradiation_charData,
          Daily_Irradiation_charData: props.Daily_Irradiation_charData,
          Avarage_data:false,
          Monthly_Irradiation_data:false,
          loss: props.loss,
          installed_power: props.installed_power,
          azimuth:props.azimuth,
          slope:props.slope,
          pv_technology:props.pv_technology,
          address:props.address,
          button_text:"This button does absolutly nothing",
          total_real_produced:props.total_real_produced,
          total_expected_produced:props.total_expected_produced,
          hide_avarage_solar_irradiation_button:"Hide Solar Irradiation",
          hide_avarage_solar_irradiation_per_hour_per_month_button:"Show Solar Irradiation per hour/month",
          hide_real_vs_expected_button:"Show Energy Production per hour",


          January_Monthly_Avarage_Irradiation:props.January_Monthly_Avarage_Irradiation,
          February_Monthly_Avarage_Irradiation:props.February_Monthly_Avarage_Irradiation,
          March_Monthly_Avarage_Irradiation:props.March_Monthly_Avarage_Irradiation,
          April_Monthly_Avarage_Irradiation:props.April_Monthly_Avarage_Irradiation,
          May_Monthly_Avarage_Irradiation:props.May_Monthly_Avarage_Irradiation,
          June_Monthly_Avarage_Irradiation:props.June_Monthly_Avarage_Irradiation,
          July_Monthly_Avarage_Irradiation:props.July_Monthly_Avarage_Irradiation,
          August_Monthly_Avarage_Irradiation:props.August_Monthly_Avarage_Irradiation,
          September_Monthly_Avarage_Irradiation:props.September_Monthly_Avarage_Irradiation,
          October_Monthly_Avarage_Irradiation:props.October_Monthly_Avarage_Irradiation,
          November_Monthly_Avarage_Irradiation:props.November_Monthly_Avarage_Irradiation,
          December_Monthly_Avarage_Irradiation:props.December_Monthly_Avarage_Irradiation,

          January_Monthly_Avarage_Temperature:props.January_Monthly_Avarage_Temperature,
          February_Monthly_Avarage_Temperature:props.February_Monthly_Avarage_Temperature,
          March_Monthly_Avarage_Temperature:props.March_Monthly_Avarage_Temperature,
          April_Monthly_Avarage_Temperature:props.April_Monthly_Avarage_Temperature,
          May_Monthly_Avarage_Temperature:props.May_Monthly_Avarage_Temperature,
          June_Monthly_Avarage_Temperature:props.June_Monthly_Avarage_Temperature,
          July_Monthly_Avarage_Temperature:props.July_Monthly_Avarage_Temperature,
          August_Monthly_Avarage_Temperature:props.August_Monthly_Avarage_Temperature,
          September_Monthly_Avarage_Temperature:props.September_Monthly_Avarage_Temperature,
          October_Monthly_Avarage_Temperature:props.October_Monthly_Avarage_Temperature,
          November_Monthly_Avarage_Temperature:props.November_Monthly_Avarage_Temperature,
          December_Monthly_Avarage_Temperature:props.December_Monthly_Avarage_Temperature,

          January_Corrected_Energy_Production:props.January_Corrected_Energy_Production,
          February_Corrected_Energy_Production:props.February_Corrected_Energy_Production,
          March_Corrected_Energy_Production:props.March_Corrected_Energy_Production,
          April_Corrected_Energy_Production:props.April_Corrected_Energy_Production,
          May_Corrected_Energy_Production:props.May_Corrected_Energy_Production,
          June_Corrected_Energy_Production:props.June_Corrected_Energy_Production,
          July_Corrected_Energy_Production:props.July_Corrected_Energy_Production,
          August_Corrected_Energy_Production:props.August_Corrected_Energy_Production,
          September_Corrected_Energy_Production:props.September_Corrected_Energy_Production,
          October_Corrected_Energy_Production:props.October_Corrected_Energy_Production,
          November_Corrected_Energy_Production:props.November_Corrected_Energy_Production,
          December_Corrected_Energy_Production:props.December_Corrected_Energy_Production,

          January_Real_Energy_Production:props.January_Real_Energy_Production,
          February_Real_Energy_Production:props.February_Real_Energy_Production,
          March_Real_Energy_Production:props.March_Real_Energy_Production,
          April_Real_Energy_Production:props.April_Real_Energy_Production,
          May_Real_Energy_Production:props.May_Real_Energy_Production,
          June_Real_Energy_Production:props.June_Real_Energy_Production,
          July_Real_Energy_Production:props.July_Real_Energy_Production,
          August_Real_Energy_Production:props.August_Real_Energy_Production,
          September_Real_Energy_Production:props.September_Real_Energy_Production,
          October_Real_Energy_Production:props.October_Real_Energy_Production,
          November_Real_Energy_Production:props.November_Real_Energy_Production,
          December_Real_Energy_Production:props.December_Real_Energy_Production,

    
        };
this.hide_avarage_solar_irradiation=this.hide_avarage_solar_irradiation.bind(this)
this.hide_avarage_solar_irradiation_per_hour_per_month=this.hide_avarage_solar_irradiation_per_hour_per_month.bind(this)
this.hide_real_vs_expected=this.hide_real_vs_expected.bind(this)


      }


      hide_avarage_solar_irradiation() {
         var x = document.getElementById("Avarage Solar Irradiation");
         if (x.style.display === "none") {
            this.setState({hide_avarage_solar_irradiation_button:"Hide Solar Irradiation"})
            this.setState({hide_avarage_solar_irradiation_per_hour_per_month_button:"Show Solar Irradiation per hour/month"})
            this.setState({hide_real_vs_expected_button:"Show Energy Production per hour"})
           x.style.display = "block";
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
           this.setState({hide_avarage_solar_irradiation_button:"Show Solar Irradiation"})
           this.setState({hide_avarage_solar_irradiation_per_hour_per_month_button:"Hide Solar Irradiation per hour/month"})
           this.setState({hide_real_vs_expected_button:"Show Energy Production per hour"})
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
            this.setState({hide_avarage_solar_irradiation_button:"Show Solar Irradiation"})
            this.setState({hide_avarage_solar_irradiation_per_hour_per_month_button:"Show Solar Irradiation per hour/month"})
            this.setState({hide_real_vs_expected_button:"Hide Energy Production per hour"})
            x.style.display = "block";
         } else {
            this.setState({hide_real_vs_expected_button:"Show Energy Production per hour"})
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
         <h1>Used Parameters</h1>
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
               <span>Real Produced Energy :     {(this.props.total_real_produced*(1-this.props.loss/100)).toFixed(2)} kWh</span>
               </label>
            </div>
            <div
               className="standard-container standard-root-className-name33"
               >
               <label className="standard-text">
               <span>Installed Solar Power :    {this.props.installed_power} kW</span>
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
<hr>
</hr>
<hr>
</hr>
<hr>
</hr>
<div id="reportsPage">
   <div className="" id="home">

      <div className="container">
      <div id="Avarage Solar Irradiation" style={{display:"block"}}>
      <h1 className="tm-block1-title">Average Solar Irradiation and Energy Production</h1>
         <div className="row tm-content-row tm-mt-big">
            <div className="tm-col tm-col-small">
               <div className="bg-white tm-block h-100">
                  <h2 className="tm-block-title">Average Monthly sum irradiation per m<sup>2</sup></h2>
                  <Monthly_Irradiation ChartData={this.props.Monthly_Irradiation_charData} />
               </div>
            </div>
            <div className="tm-col tm-col-small">
               <div className="bg-white tm-block h-100">
                  <h2 className="tm-block-title"> Average daily sum irradiation per m<sup>2</sup></h2>
                  <Daily_Irradiation ChartData={this.props.Daily_Irradiation_charData} />
               </div>
            </div>
            <div className="tm-col tm-col-small">
               <div className="bg-white tm-block h-100">
                  <h2 className="tm-block-title">Average Monthly Energy Production</h2>
                  <Monthly_Energy_Production ChartData={this.props.Monthly_Energy_charData} />
               </div>
            </div>
            <div className="tm-col tm-col-small">
               <div className="bg-white tm-block h-100">
                  <h2 className="tm-block-title">Average Daily Energy Production</h2>
                  <Daily_Energy_Production ChartData={this.props.Daily_Energy_charData} />
               </div>
            </div>
         </div>
         </div>
         <hr>
         </hr>
         <hr>
         </hr>
         <hr>
         </hr>
         <div id = "Average Temperature and Irradiation Hourly per Month" style={{display :"none"}}>
         <h1 className="tm-block1-title">Average Temperature and Irradiation Hourly per Month</h1>
         <div className="container">
            <div className="row tm-content-row tm-mt-big">
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">January</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.January_Monthly_Avarage_Temperature} 
                        ChartData_Irradiation={this.props.January_Monthly_Avarage_Irradiation}/>
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">February</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.February_Monthly_Avarage_Temperature} 
                        ChartData_Irradiation={this.props.February_Monthly_Avarage_Irradiation} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">March</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.March_Monthly_Avarage_Temperature}
                        ChartData_Irradiation={this.props.March_Monthly_Avarage_Irradiation} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">April</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.April_Monthly_Avarage_Temperature} 
                        ChartData_Irradiation={this.props.April_Monthly_Avarage_Irradiation} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">May</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.May_Monthly_Avarage_Temperature} 
                        ChartData_Irradiation={this.props.May_Monthly_Avarage_Irradiation}/>
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">June</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.June_Monthly_Avarage_Temperature}
                        ChartData_Irradiation={this.props.June_Monthly_Avarage_Irradiation}/>
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">July</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.July_Monthly_Avarage_Temperature} 
                        ChartData_Irradiation={this.props.July_Monthly_Avarage_Irradiation} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">August</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.August_Monthly_Avarage_Temperature}
                        ChartData_Irradiation={this.props.August_Monthly_Avarage_Irradiation}/>
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">September</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.September_Monthly_Avarage_Temperature} 
                        ChartData_Irradiation={this.props.September_Monthly_Avarage_Irradiation} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">October</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.October_Monthly_Avarage_Temperature} 
                        ChartData_Irradiation={this.props.October_Monthly_Avarage_Irradiation} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">November</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.November_Monthly_Avarage_Temperature} 
                        ChartData_Irradiation={this.props.November_Monthly_Avarage_Irradiation}/>
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">December</h2>
                     <Daily_Radiation_Per_Month ChartData_Temperature={this.props.December_Monthly_Avarage_Temperature} 
                        ChartData_Irradiation={this.props.December_Monthly_Avarage_Irradiation} />
                  </div>
               </div>
            </div>
         </div>
         </div>
         <hr>
         </hr>
         <hr>
         </hr>
         <hr>
         </hr>
         <div id="Real vs Ideal Energy Production" style={{display :"none"}}>  
         <h1 className="tm-block1-title">Real vs Ideal Energy Production</h1>
         <div className="container">
            <div className="row tm-content-row tm-mt-big">
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">January</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.January_Corrected_Energy_Production} 
                     ChartData_Real_Energy={this.props.January_Real_Energy_Production} losses={this.props.loss} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">February</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.February_Corrected_Energy_Production} 
                     ChartData_Real_Energy={this.props.February_Real_Energy_Production} losses={this.props.loss} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">March</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.March_Corrected_Energy_Production}
                     ChartData_Real_Energy={this.props.March_Real_Energy_Production} losses={this.props.loss} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">April</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.April_Corrected_Energy_Production} 
                     ChartData_Real_Energy={this.props.April_Real_Energy_Production} losses={this.props.loss} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">May</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.May_Corrected_Energy_Production}
                     ChartData_Real_Energy={this.props.May_Real_Energy_Production} losses={this.props.loss} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">June</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.June_Corrected_Energy_Production} 
                     ChartData_Real_Energy={this.props.June_Real_Energy_Production}losses={this.props.loss} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">July</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.July_Corrected_Energy_Production} 
                     ChartData_Real_Energy={this.props.July_Real_Energy_Production}losses={this.props.loss} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">August</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.August_Corrected_Energy_Production} 
                     ChartData_Real_Energy={this.props.August_Real_Energy_Production}losses={this.props.loss} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">September</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.September_Corrected_Energy_Production} 
                     ChartData_Real_Energy={this.props.September_Real_Energy_Production}losses={this.props.loss} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">October</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.October_Corrected_Energy_Production}
                     ChartData_Real_Energy={this.props.October_Real_Energy_Production} losses={this.props.loss} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">November</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.November_Corrected_Energy_Production} 
                     ChartData_Real_Energy={this.props.November_Real_Energy_Production} losses={this.props.loss} />
                  </div>
               </div>
               <div className="tm-col tm-col-small">
                  <div className="bg-white tm-block h-100">
                     <h2 className="tm-block-title">December</h2>
                     <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.December_Corrected_Energy_Production}
                     ChartData_Real_Energy={this.props.December_Real_Energy_Production} losses={this.props.loss} />
                  </div>
               </div>
            </div>
         </div>
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
