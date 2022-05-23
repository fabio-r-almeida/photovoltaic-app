import image from './DataEntry-files/images/01.svg'
import image5 from './DataEntry-files/images/left.svg'
import solar_module from './DataEntry-files/images/solar_panel.png'

import './DataEntry-files/css.css'
import { get_input_data, get_output_data, get_address} from "../components/API/get_data";
import { get_output_data_daily} from "../components/API/get_daily";
import React, { Component } from "react";
import Dashboard from './Dashboard';
import Spinner from './Spinner';
import Cookies from 'universal-cookie';
import CookieConsent, {getCookieConsentValue } from "react-cookie-consent";
import {Corrected_Energy} from "../components/Math/Calculate";




class DataEntry extends Component {

  constructor() {
    super();
    this.state = {
      long: "-9.3146",
      lat: "38.6969",
      loss: 14,
      installed_power:1,
      slope:0,
      last_slope:0,
      azimuth:0,
      last_azimuth:0,
      azimuth_to_dashboard:0,
      slope_to_dashboard:0,
      checkbox_slope: false,
      checkbox_azimuth: false,
      Monthly_Energy_charData: {},
      Daily_Energy_charData: {},
      Monthly_Irradiation_charData: {},
      Daily_Irradiation_charData: {},
      Data:{},
      pv_technology:"c-Si",
      address:"",
      loading:false,
      loading_text:"",
      noct:47,
      nr_modules:4,
      power_per_module:250,
      temp_coefficient:-0.38,
      total_expected_produced:0,
      total_real_produced:0,

      January_Monthly_Avarage_Irradiation:{},
      February_Monthly_Avarage_Irradiation:{},
      March_Monthly_Avarage_Irradiation:{},
      April_Monthly_Avarage_Irradiation:{},
      May_Monthly_Avarage_Irradiation:{},
      June_Monthly_Avarage_Irradiation:{},
      July_Monthly_Avarage_Irradiation:{},
      August_Monthly_Avarage_Irradiation:{},
      September_Monthly_Avarage_Irradiation:{},
      October_Monthly_Avarage_Irradiation:{},
      November_Monthly_Avarage_Irradiation:{},
      December_Monthly_Avarage_Irradiation:{},

      January_Monthly_Avarage_Temperature:{},
      February_Monthly_Avarage_Temperature:{},
      March_Monthly_Avarage_Temperature:{},
      April_Monthly_Avarage_Temperature:{},
      May_Monthly_Avarage_Temperature:{},
      June_Monthly_Avarage_Temperature:{},
      July_Monthly_Avarage_Temperature:{},
      August_Monthly_Avarage_Temperature:{},
      September_Monthly_Avarage_Temperature:{},
      October_Monthly_Avarage_Temperature:{},
      November_Monthly_Avarage_Temperature:{},
      December_Monthly_Avarage_Temperature:{},

      January_Corrected_Energy_Production:{},
      February_Corrected_Energy_Production:{},
      March_Corrected_Energy_Production:{},
      April_Corrected_Energy_Production:{},
      May_Corrected_Energy_Production:{},
      June_Corrected_Energy_Production:{},
      July_Corrected_Energy_Production:{},
      August_Corrected_Energy_Production:{},
      September_Corrected_Energy_Production:{},
      October_Corrected_Energy_Production:{},
      November_Corrected_Energy_Production:{},
      December_Corrected_Energy_Production:{},

      January_Real_Energy_Production:{},
      February_Real_Energy_Production:{},
      March_Real_Energy_Production:{},
      April_Real_Energy_Production:{},
      May_Real_Energy_Production:{},
      June_Real_Energy_Production:{},
      July_Real_Energy_Production:{},
      August_Real_Energy_Production:{},
      September_Real_Energy_Production:{},
      October_Real_Energy_Production:{},
      November_Real_Energy_Production:{},
      December_Real_Energy_Production:{},
      
    };
    this.handle_output = this.handle_output.bind(this);
    this.set_cookies = this.set_cookies.bind(this);
    this.get_cookies = this.get_cookies.bind(this);



  }
  
  set_cookies(){
   const cookies = new Cookies();
   if(getCookieConsentValue())
    cookies.set('previousState', this.state, { path: '/' ,expires: new Date(Date.now()+86400000*7)});

  }
  get_cookies(){
    const cookies = new Cookies();
    this.setState(cookies.get('previousState'), () => {
      if(this.state.checkbox_azimuth)
      document.getElementById("checkbox_for_azimuth").checked = true;
      if(this.state.checkbox_slope)
      document.getElementById("checkbox_for_slope").checked = true;
    })
    this.setState({loading:false})
    
  }
  

  componentDidMount() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.getChartData(this.state.Data);
    var x = document.getElementById("dashboard");
    x.style.display = "none";
 
    window.addEventListener('load', this.get_cookies);


  }
  use_my_location = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
    });
}


   get_corrected_production(data) {
   
 
      this.setState({January_Corrected_Energy_Production:data[0].month1})
      this.setState({February_Corrected_Energy_Production:data[0].month2})
      this.setState({March_Corrected_Energy_Production:data[0].month3})
      this.setState({April_Corrected_Energy_Production:data[0].month4})
      this.setState({May_Corrected_Energy_Production:data[0].month5})
      this.setState({June_Corrected_Energy_Production:data[0].month6})
      this.setState({July_Corrected_Energy_Production:data[0].month7})
      this.setState({August_Corrected_Energy_Production:data[0].month8})
      this.setState({September_Corrected_Energy_Production:data[0].month9})
      this.setState({October_Corrected_Energy_Production:data[0].month10})
      this.setState({November_Corrected_Energy_Production:data[0].month11})
      this.setState({December_Corrected_Energy_Production:data[0].month12})

      this.setState({January_Real_Energy_Production:data[1].month1})
      this.setState({February_Real_Energy_Production:data[1].month2})
      this.setState({March_Real_Energy_Production:data[1].month3})
      this.setState({April_Real_Energy_Production:data[1].month4})
      this.setState({May_Real_Energy_Production:data[1].month5})
      this.setState({June_Real_Energy_Production:data[1].month6})
      this.setState({July_Real_Energy_Production:data[1].month7})
      this.setState({August_Real_Energy_Production:data[1].month8})
      this.setState({September_Real_Energy_Production:data[1].month9})
      this.setState({October_Real_Energy_Production:data[1].month10})
      this.setState({November_Real_Energy_Production:data[1].month11})
      this.setState({December_Real_Energy_Production:data[1].month12})

      this.setState({total_expected_produced:data[3]})
      this.setState({total_real_produced:data[2]})

   }


  getChartData(data) {
    var monthly_energy_new_data = [];
    var daily_energy_new_data = [];
    var monthly_irradiation_new_data = [];
    var daily_irradiation_new_data = [];
    var reset = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    try {
      data.monthly.fixed.forEach((value) => {
        monthly_energy_new_data.push(value["E_m"]);
        daily_energy_new_data.push(value["E_d"]);
        monthly_irradiation_new_data.push(value["H(i)_m"]);
        daily_irradiation_new_data.push(value["H(i)_d"]);
      });
    } catch (e) {}

    if (Object.keys(data).length === 0) {
      this.setState({Monthly_Energy_charData: reset});
      this.setState({Daily_Energy_charData: reset });

      this.setState({Monthly_Irradiation_charData: reset});
      this.setState({Daily_Irradiation_charData: reset });
    } else {
  
      this.setState({Monthly_Energy_charData: monthly_energy_new_data });
      this.setState({Daily_Energy_charData: daily_energy_new_data });

      this.setState({Monthly_Irradiation_charData: monthly_irradiation_new_data });
      this.setState({Daily_Irradiation_charData: daily_irradiation_new_data });
    }
  }

  get_monthly_data(data) {
   try {
      data.forEach((value) => {
        var global_irradiance =  [];
        var temperature =  [];
        value.data.outputs.daily_profile.forEach((value_month) => {

            global_irradiance.push(value_month["G(i)"])
            temperature.push(value_month["T2m"])
            if(value_month.month === 1 && temperature.length===24){
              this.setState({January_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({January_Monthly_Avarage_Temperature: temperature }); 
            }
            if(value_month.month === 2 && temperature.length===24){
              this.setState({February_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({February_Monthly_Avarage_Temperature: temperature });
            }
            if(value_month.month === 3 && temperature.length===24){
              this.setState({March_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({March_Monthly_Avarage_Temperature: temperature });
            }
            if(value_month.month === 4 && temperature.length===24){
              this.setState({April_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({April_Monthly_Avarage_Temperature: temperature });
            }
            if(value_month.month === 5 && temperature.length===24){
              this.setState({May_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({May_Monthly_Avarage_Temperature: temperature });
            }
            if(value_month.month === 6 && temperature.length===24){
              this.setState({June_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({June_Monthly_Avarage_Temperature: temperature });
            }
            if(value_month.month === 7 && temperature.length===24){
              this.setState({July_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({July_Monthly_Avarage_Temperature: temperature });
            }
            if(value_month.month === 8 && temperature.length===24){
              this.setState({August_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({August_Monthly_Avarage_Temperature: temperature });
            }
            if(value_month.month === 9 && temperature.length===24){
              this.setState({September_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({September_Monthly_Avarage_Temperature: temperature });
            }
            if(value_month.month === 10 && temperature.length===24){
              this.setState({October_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({October_Monthly_Avarage_Temperature: temperature });
            }
            if(value_month.month === 11 && temperature.length===24){
              this.setState({November_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({November_Monthly_Avarage_Temperature: temperature });
            }
            if(value_month.month === 12 && temperature.length===24){
              this.setState({December_Monthly_Avarage_Irradiation: global_irradiance });
              this.setState({December_Monthly_Avarage_Temperature: temperature });
              
            }


            
        });
      });
    } catch (e) {}

  }



  async handle_output() {

   this.setState({installed_power:this.state.nr_modules*this.state.power_per_module/1000})

    this.getChartData({});
    this.setState({loading:true})
    this.setState({loading_text:"Fetching Irradiation data"})
    const data= await get_output_data(this.state.long,this.state.lat,this.state.checkbox_slope,this.state.checkbox_azimuth,this.state.installed_power,this.state.loss);
    this.setState({loading_text:"Fetching Daily Data"})
    const input = await get_input_data(this.state.long,this.state.lat,this.state.checkbox_slope,this.state.checkbox_azimuth,this.state.installed_power,this.state.loss);
    this.setState({loading_text:"Calculating Angles and Azimuths"})
    
    const data_daily= await get_output_data_daily(this.state.long,this.state.lat,input.mounting_system.fixed.slope.value,input.mounting_system.fixed.azimuth.value);

    this.setState({loading_text:"Determination Location"})
    const address = await get_address(this.state.long,this.state.lat)

    const corrected_energy_production = Corrected_Energy(data_daily,this.state.noct, this.state.temp_coefficient, this.state.installed_power)
    this.get_corrected_production(corrected_energy_production)
 
    this.setState({azimuth_to_dashboard: input.mounting_system.fixed.azimuth.value})
    this.setState({slope_to_dashboard: input.mounting_system.fixed.slope.value})
    this.setState({address: address})

    this.getChartData(data);
    this.get_monthly_data(data_daily);
    this.setState({loading:false})
    this.setState({loading_text:""})


    this.set_cookies()
    var x = document.getElementById("input_data");
    x.style.display = "none";
    var xx = document.getElementById("dashboard");
    xx.style.display = "block";
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    document.body.style.zoom = "30%"
    }
  }

  update_checkbox_slope(e) {

    if(document.getElementById("checkbox_for_slope").checked){
      document.getElementById("checkbox_slope").setAttribute("readonly", "readonly");
      this.setState({ last_slope:  this.state.slope });
      this.setState({checkbox_slope:true})
      this.setState({ slope: "Optimized"})
    }
    else{
      document.getElementById("checkbox_slope").removeAttribute("readonly")
      this.setState({ slope: this.state.last_slope });
      this.setState({checkbox_slope:false})
    }

  }


  update_checkbox_azimuth(e) {

    if(document.getElementById("checkbox_for_azimuth").checked){
      document.getElementById("checkbox_azimuth").setAttribute("readonly", "readonly");
      this.setState({ last_azimuth:  this.state.azimuth });
      this.setState({checkbox_azimuth:true})
      this.setState({ azimuth: "Optimized"})
      if(!document.getElementById("checkbox_for_slope").checked){
      document.getElementById("checkbox_slope").setAttribute("readonly", "readonly");
      this.setState({ last_slope:  this.state.slope });
      this.setState({checkbox_slope:true})
      this.setState({ slope: "Optimized"})
      }

    }
    else{
      document.getElementById("checkbox_azimuth").removeAttribute("readonly")
      this.setState({ azimuth: this.state.last_azimuth });
      this.setState({checkbox_azimuth:false})
      if(!document.getElementById("checkbox_for_slope").checked){
      document.getElementById("checkbox_slope").removeAttribute("readonly")
      this.setState({ slope: this.state.last_slope });
      this.setState({checkbox_slope:false})
      }
    }

  }
  
  render() {
      return (
        
<>

<div id="input_data">
   <div className="test-container">
      <div className="test-features">
         <div className="test-features1">
            <div className="test-container01">
               <div className="test-container02">
                  <div className="test-container03">
                     <div className="data-input-container">
                        <h1 className="data-input-text"><span>Data Input</span></h1>
                        <img
                           alt="image_text"
                           src={image5}
                           loading="lazy"
                           className="data-input-image"
                           />
                     </div>
                     <button className="learn-more"  onClick={this.use_my_location}>
                     <span className="circle" aria-hidden="true">
                     <span className="icon arrow"></span>
                     </span>
                     <span className="button-text">My Location</span>
                     </button>
                     <hr>
                     </hr>
                     <div className="latitude-container">
                        <img
                           alt="image_text"
                           src={image}
                           className="latitude-image"
                           />
                        <label className="latitude-text">
                        <span >Latitude</span>
                        </label>
                     </div>
                     <div className="input-container">
                        <input  className="input-textinput input" placeholder="38.6969" value={this.state.lat} onChange={(e)=> {this.setState({lat:e.target.value})}}></input>
                     </div>
                     <div className="longitude-container">
                        <img
                           alt="image_text"
                           src={image}
                           className="longitude-image"
                           />
                        <label className="longitude-text"><span>Longitude</span></label>
                     </div>
                     <div className="input-container">
                        <input className="input-textinput input" placeholder="-9.3146" value={this.state.long} onChange={(e)=> {this.setState({long:e.target.value})}}></input>
                     </div>
                     <div className="latitude-container">
                        <label className="latitude-text"><span>Losses</span></label>
                     </div>
                     <div className="input-container">
                        <input className="input-textinput input" placeholder="14" value={this.state.loss} onChange={(e)=> {this.setState({loss:e.target.value})}}></input>
                     </div>
                     <div
                        className="optimization1-container optimization1-root-className-name2"
                        >
                        <div className="optimization1-container01">
                           <div className="optimization1-container02">
                              <label className="optimization1-label">
                              <span>Azimuth and Tilt</span>
                              </label>
                           </div>
                           <div className="optimization1-container03">
                              <div className="optimization1-container04">
                                 <div className="optimization1-container05">
                                    <input id="checkbox_slope" className="optimization1-textinput input" placeholder="35" value={this.state.slope} onChange={(e)=> {this.setState({slope:e.target.value})}}></input>
                                    <input id="checkbox_azimuth" className="optimization1-textinput input" placeholder="0" value={this.state.azimuth} onChange={(e)=> {this.setState({azimuth:e.target.value})}}></input>
                                 </div>
                              </div>
                              <div className="optimization1-container06">
                                 <div className="optimization1-container07">
                                    <input id="checkbox_for_slope" onChange={(e)=> {this.update_checkbox_slope(e)}} type="checkbox" className="optimization1-checkbox" /> 
                                    <input id="checkbox_for_azimuth" onChange={(e)=> {this.update_checkbox_azimuth(e)}} type="checkbox" className="optimization1-checkbox" /> 
                                 </div>
                              </div>
                              <div className="optimization1-container08">
                                 <div className="optimization1-container09">
                                    <label className="optimization1-label1">
                                    <span>Tilt</span>
                                    </label>
                                    <label className="optimization1-label2">
                                    <span>Azimuth & Tilt</span>
                                    </label>
                                 </div>
                              </div>
                              
                              
                           </div>
                           
                        </div>
                        
                     </div>
                     <div className="standard-container standard-root-className-name31">
                        <label className="standard-text">
                        <span>Default Parameters</span>
                        </label>
                     </div>
                     <div className="test-container04">
                        <div className="test-container05">
                           <div
                              className="standard-container standard-root-className-name32"
                              >
                              <label className="standard-text">
                              <span>Losses (%):</span>
                              </label>
                           </div>
                           <div
                              className="standard-container standard-root-className-name33"
                              >
                              <label className="standard-text">
                              <span>Solar Power (kW):</span>
                              </label>
                           </div>
                           <div
                              className="standard-container standard-root-className-name34"
                              >
                              <label className="standard-text">
                              <span>Azimuth:</span>
                              </label>
                           </div>
                           <div
                              className="standard-container standard-root-className-name35"
                              >
                              <label className="standard-text"><span>Tilt:</span></label>
                           </div>
                        </div>
                        <div className="test-container06">
                           <div className="losses-values-container">
                              <label className="losses-values-text">
                              <span>{this.state.loss}</span>
                              </label>
                           </div>
                           <div
                              className="standard-container standard-root-className-name36"
                              >
                              <label className="standard-text"><span>{this.state.power_per_module*this.state.nr_modules/1000}</span></label>
                           </div>
                           <div
                              className="standard-container standard-root-className-name37"
                              >
                              <label className="standard-text"><span>{this.state.azimuth}</span></label>
                           </div>
                           <div
                              className="standard-container standard-root-className-name38"
                              >
                              <label className="standard-text"><span>{this.state.slope}</span></label>
                           </div>
                        </div>
                     </div>

                  </div>
               </div>
               <div className="test-container02">
               <img
                           alt="image_text"
                           src={solar_module}
                           loading="lazy"
                           />
                  <div className="test-container03">
                     
                     <div className="data-input-container">
                        
                        <h2 className="data-input-text"><span>Module Eletrical Specifications</span></h2>
                     </div>
                     
                     <div className="longitude-container">
                        
                     <label className="noct-text"><span>Peak Power Output</span></label>
                     </div>
                     <div className="input-container">
                        <input className="noct-textinput input" placeholder="250" value={this.state.power_per_module} onChange={(e)=> {this.setState({power_per_module:e.target.value})}}></input>
                     </div>
                     <div className="longitude-container">
                     <label className="noct-text"><span>Number of Modules</span></label>
                     </div>
                     <div className="input-container">
                        <input className="noct-textinput input" placeholder="4" value={this.state.nr_modules} onChange={(e)=> {this.setState({nr_modules:e.target.value})}}></input>
                     </div>
                     <div className="latitude-container">
                        <label className="noct-text"><span>Nominal Operating Cell Temperature (NOCT)</span></label>
                     </div>
                     <div className="input-container">
                        <input className="noct-textinput input" placeholder="47" value={this.state.noct} onChange={(e)=> {this.setState({noct:e.target.value})}}></input>
                     </div>
                     <div className="longitude-container">

                        <label className="noct-text"><span>Temperature coefficient (%/ °C)</span></label>
                     </div>
                     <div className="input-container">
                        <input className="noct-textinput input" placeholder="-0.38" value={this.state.temp_coefficient} onChange={(e)=> {
                          if(e.target.value>0)
                          alert("Please confirm if this value if positive.\nFor the most part it is negative")
                          this.setState({temp_coefficient:e.target.value})}}></input>
                     </div>
                     

                     <button className="learn-more"  onClick={this.handle_output}>
                     <span className="circle" aria-hidden="true">
                     <span className="icon arrow"></span>
                     </span>
                     <span className="button-text">Calculate</span>
                     </button>
                  </div>
           
                  
                  

               </div>
 
               

            </div>





            
         </div>

      </div>




      <footer className="test-footer">
         <span className="test-text">
         © 2022 Photovoltaic Calculator, All Rights Reserved.
         </span>
      </footer>
   </div>
</div>
{this.state.loading && 
               <div className="fadeMe">
                  <Spinner>{this.state.loading_text}</Spinner>
               </div>
               }
<div id="dashboard">
   <Dashboard 
      Monthly_Energy_charData={this.state.Monthly_Energy_charData}
      Daily_Energy_charData={this.state.Daily_Energy_charData}
      Monthly_Irradiation_charData={this.state.Monthly_Irradiation_charData}
      Daily_Irradiation_charData={this.state.Daily_Irradiation_charData}
      installed_power={this.state.installed_power}
      loss={this.state.loss}
      azimuth={this.state.azimuth_to_dashboard}
      slope={this.state.slope_to_dashboard}
      pv_technology={this.state.pv_technology}
      address={this.state.address}

      total_real_produced={this.state.total_real_produced}
      total_expected_produced={this.state.total_expected_produced}

      January_Monthly_Avarage_Irradiation={this.state.January_Monthly_Avarage_Irradiation}
      February_Monthly_Avarage_Irradiation={this.state.February_Monthly_Avarage_Irradiation}
      March_Monthly_Avarage_Irradiation={this.state.March_Monthly_Avarage_Irradiation}
      April_Monthly_Avarage_Irradiation={this.state.April_Monthly_Avarage_Irradiation}
      May_Monthly_Avarage_Irradiation={this.state.May_Monthly_Avarage_Irradiation}
      June_Monthly_Avarage_Irradiation={this.state.June_Monthly_Avarage_Irradiation}
      July_Monthly_Avarage_Irradiation={this.state.July_Monthly_Avarage_Irradiation}
      August_Monthly_Avarage_Irradiation={this.state.August_Monthly_Avarage_Irradiation}
      September_Monthly_Avarage_Irradiation={this.state.September_Monthly_Avarage_Irradiation}
      October_Monthly_Avarage_Irradiation={this.state.October_Monthly_Avarage_Irradiation}
      November_Monthly_Avarage_Irradiation={this.state.November_Monthly_Avarage_Irradiation}
      December_Monthly_Avarage_Irradiation={this.state.December_Monthly_Avarage_Irradiation}

      January_Monthly_Avarage_Temperature={this.state.January_Monthly_Avarage_Temperature}
      February_Monthly_Avarage_Temperature={this.state.February_Monthly_Avarage_Temperature}
      March_Monthly_Avarage_Temperature={this.state.March_Monthly_Avarage_Temperature}
      April_Monthly_Avarage_Temperature={this.state.April_Monthly_Avarage_Temperature}
      May_Monthly_Avarage_Temperature={this.state.May_Monthly_Avarage_Temperature}
      June_Monthly_Avarage_Temperature={this.state.June_Monthly_Avarage_Temperature}
      July_Monthly_Avarage_Temperature={this.state.July_Monthly_Avarage_Temperature}
      August_Monthly_Avarage_Temperature={this.state.August_Monthly_Avarage_Temperature}
      September_Monthly_Avarage_Temperature={this.state.September_Monthly_Avarage_Temperature}
      October_Monthly_Avarage_Temperature={this.state.October_Monthly_Avarage_Temperature}
      November_Monthly_Avarage_Temperature={this.state.November_Monthly_Avarage_Temperature}
      December_Monthly_Avarage_Temperature={this.state.December_Monthly_Avarage_Temperature}

      January_Corrected_Energy_Production={this.state.January_Corrected_Energy_Production}
      February_Corrected_Energy_Production={this.state.February_Corrected_Energy_Production}
      March_Corrected_Energy_Production={this.state.March_Corrected_Energy_Production}
      April_Corrected_Energy_Production={this.state.April_Corrected_Energy_Production}
      May_Corrected_Energy_Production={this.state.May_Corrected_Energy_Production}
      June_Corrected_Energy_Production={this.state.June_Corrected_Energy_Production}
      July_Corrected_Energy_Production={this.state.July_Corrected_Energy_Production}
      August_Corrected_Energy_Production={this.state.August_Corrected_Energy_Production}
      September_Corrected_Energy_Production={this.state.September_Corrected_Energy_Production}
      October_Corrected_Energy_Production={this.state.October_Corrected_Energy_Production}
      November_Corrected_Energy_Production={this.state.November_Corrected_Energy_Production}
      December_Corrected_Energy_Production={this.state.December_Corrected_Energy_Production}

      January_Real_Energy_Production={this.state.January_Real_Energy_Production}
      February_Real_Energy_Production={this.state.February_Real_Energy_Production}
      March_Real_Energy_Production={this.state.March_Real_Energy_Production}
      April_Real_Energy_Production={this.state.April_Real_Energy_Production}
      May_Real_Energy_Production={this.state.May_Real_Energy_Production}
      June_Real_Energy_Production={this.state.June_Real_Energy_Production}
      July_Real_Energy_Production={this.state.July_Real_Energy_Production}
      August_Real_Energy_Production={this.state.August_Real_Energy_Production}
      September_Real_Energy_Production={this.state.September_Real_Energy_Production}
      October_Real_Energy_Production={this.state.October_Real_Energy_Production}
      November_Real_Energy_Production={this.state.November_Real_Energy_Production}
      December_Real_Energy_Production={this.state.December_Real_Energy_Production}

      />
</div>
<CookieConsent
   enableDeclineButton
   buttonClasses="btn btn-primary"
   containerClasses="alert alert-warning col-lg-12"
   contentClasses="text-capitalize"
   expires={7}
   > This website uses cookies to enhance the user experience. The cookies are automatically deleted after 7 days.{" "}
</CookieConsent>
</>

      );
  }
}

export default DataEntry;
