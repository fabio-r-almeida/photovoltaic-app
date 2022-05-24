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
import {yearly_production_ma} from "../components/Math/Yearly_Production_calculations";
import {get_yearly_production} from "../components/API/get_yearly_production";





class DataEntry extends Component {

  constructor() {
    super();
    this.state = {
      long: "12",
      lat: "45",
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
      noct:47,
      nr_modules:4,
      power_per_module:250,
      temp_coefficient:-0.38,
      total_expected_produced:0,
      total_real_produced:0,
      yearly_production_MA:{},


      Average_Temp_And_Irradiation_data:{},
      Corrected_Energy_Production:{},
      
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
  }


  use_my_location = () => {
    navigator.geolocation.getCurrentPosition((position) => {
        this.setState({ lat: position.coords.latitude });
        this.setState({ long: position.coords.longitude });
    });
}


   get_corrected_production(data) {
    var i=1
    var total_data=[]
      data.forEach((keys) => {
         for(var k=1; k<=12;k++)
         {
         const month = 'month'+i
         if(typeof keys[month] !== "undefined")
         total_data.push(keys[month])
         if(i===12)
         i=1
         i++
         }
      });
      this.setState({Corrected_Energy_Production:total_data})
      
      
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
   var total_data=[]
   try {
      data.forEach((value) => {
        var global_irradiance =  [];
        var temperature =  [];
        value.data.outputs.daily_profile.forEach((value_month) => {
            global_irradiance.push(value_month["G(i)"])
            temperature.push(value_month["T2m"])
            if(global_irradiance.length===24){
            total_data.push(global_irradiance)
            total_data.push(temperature)
            }
        });
      });
    } catch (e) {}
    this.setState({Average_Temp_And_Irradiation_data:total_data})
  }



  async handle_output() {
    this.setState({loading:true})
    this.setState({installed_power:this.state.nr_modules*this.state.power_per_module/1000})

    const data= await get_output_data(this.state.long,this.state.lat,this.state.checkbox_slope,this.state.checkbox_azimuth,this.state.installed_power,this.state.loss);
    const input = await get_input_data(this.state.long,this.state.lat,this.state.checkbox_slope,this.state.checkbox_azimuth,this.state.installed_power,this.state.loss,this.state.slope, this.state.azimuth);
    
    this.setState({azimuth_to_dashboard: input.mounting_system.fixed.azimuth.value})
    this.setState({slope_to_dashboard: input.mounting_system.fixed.slope.value})
    
    const data_daily= await get_output_data_daily(this.state.long,this.state.lat,this.state.slope_to_dashboard,this.state.azimuth_to_dashboard);

    const address = await get_address(this.state.long,this.state.lat)
    this.setState({address: address})

    const yearly_production = await get_yearly_production(this.state.long,this.state.lat,this.state.slope_to_dashboard,this.state.azimuth_to_dashboard)

    var yearly_production_data = yearly_production_ma(yearly_production,this.state.noct, this.state.temp_coefficient, this.state.installed_power,this.state.loss)
    this.setState({yearly_production_MA:yearly_production_data[0]})
    this.setState({total_real_produced:yearly_production_data[1]})
    this.setState({total_expected_produced:yearly_production_data[2]})

    const corrected_energy_production = Corrected_Energy(data_daily,this.state.noct, this.state.temp_coefficient, this.state.installed_power)
    this.get_corrected_production(corrected_energy_production)
 




    this.getChartData(data);
    this.get_monthly_data(data_daily);
    this.setState({loading:false})


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
                              <span>Losses :</span>
                              </label>
                           </div>
                           <div
                              className="standard-container standard-root-className-name33"
                              >
                              <label className="standard-text">
                              <span>Solar Power:</span>
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
                              <span>{this.state.loss} %</span>
                              </label>
                           </div>
                           <div
                              className="standard-container standard-root-className-name36"
                              >
                              <label className="standard-text"><span>{this.state.power_per_module*this.state.nr_modules/1000} kW</span></label>
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
   <Spinner></Spinner>
</div>
}
<div id="dashboard" style={{display:"none"}}>
   <Dashboard 
      installed_power={this.state.installed_power}
      loss={this.state.loss}
      azimuth={this.state.azimuth_to_dashboard}
      slope={this.state.slope_to_dashboard}
      pv_technology={this.state.pv_technology}
      address={this.state.address}
      total_real_produced={this.state.total_real_produced}
      total_expected_produced={this.state.total_expected_produced}
      yearly_production_MA={this.state.yearly_production_MA}
      Average_Temp_And_Irradiation_data={this.state.Average_Temp_And_Irradiation_data}
      Corrected_Energy_Production={this.state.Corrected_Energy_Production}      
      Monthly_Energy_charData={this.state.Monthly_Energy_charData}
      Daily_Energy_charData={this.state.Daily_Energy_charData}
      Monthly_Irradiation_charData={this.state.Monthly_Irradiation_charData}
      Daily_Irradiation_charData={this.state.Daily_Irradiation_charData}
      />
</div>
<CookieConsent
   enableDeclineButton
   buttonClasses="btn btn-primary"
   containerClasses="alert alert-warning col-lg-12"
   contentClasses="text-capitalize"
   expires={7}
   > This website uses cookies to enhance the user experience. The cookies are automatically deleted after 7 days.{" "}</CookieConsent>
</>

      );
  }
}

export default DataEntry;
