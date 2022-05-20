import image from './DataEntry-files/images/01.svg'
import image1 from './DataEntry-files/images/02.svg'
import image2 from './DataEntry-files/images/05.svg'
import image3 from './DataEntry-files/images/06.svg'
import image5 from './DataEntry-files/images/left.svg'
import image6 from './DataEntry-files/images/right.svg'
import './DataEntry-files/css.css'
import solarpanel from './DataEntry-files/images/solar-panel-angle-700w.webp'
import { get_output_data} from "../components/API/get_data";
import React, { Component } from "react";
import Dashboard from './Dashboard'




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
      checkbox_slope: true,
      checkbox_azimuth: false,
      Monthly_Energy_charData: {},
      Daily_Energy_charData: {},
      Monthly_Irradiation_charData: {},
      Daily_Irradiation_charData: {},
      Data:{}
    };
    this.handle_output = this.handle_output.bind(this);
  }

  componentDidMount() {
    this.getChartData(this.state.Data);
    var x = document.getElementById("dashboard");
    x.style.display = "none";
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
      this.setState({Monthly_Energy_charData: reset,});
      this.setState({Daily_Energy_charData: reset });

      this.setState({Monthly_Irradiation_charData: reset,});
      this.setState({Daily_Irradiation_charData: reset });
    } else {
      

  

      this.setState({Monthly_Energy_charData: monthly_energy_new_data });
      this.setState({Daily_Energy_charData: daily_energy_new_data });

      this.setState({Monthly_Irradiation_charData: monthly_irradiation_new_data });
      this.setState({Daily_Irradiation_charData: daily_irradiation_new_data });
    }
  }




  async handle_output() {
    this.getChartData({});

    const data= await get_output_data(this.state.long,this.state.lat,this.state.checkbox_slope,this.state.checkbox_azimuth,this.state.installed_power,this.state.loss);

    //alert("Falta adicionar o slope / azimuth optimizer")
    //if(this.state.checkbox_slope || this.state.checkbox_azimuth){
     // const input_data= await get_input_data(this.state.long,this.state.lat,this.state.checkbox_slope,this.state.checkbox_azimuth,this.state.installed_power,this.state.loss);
     // document.getElementById("slope").innerHTML = "Slope (Optimal)";
    // document.getElementById("checkbox_slope_input").value  = input_data.mounting_system.fixed.slope.value;
      
      
   // }
    //document.getElementById("data").innerHTML = JSON.stringify(data,4);
    //document.getElementById("data").innerHTML = " E_d: Average daily energy production from the given system (kWh/d)\n E_m: Average monthly energy production from the given system (kWh/mo)\n H(i)_d: Average daily sum of global irradiation per square meter received by the modules of the given system (kWh/m2/d)\n H(i)_m: Average monthly sum of global irradiation per square meter received by the modules of the given system (kWh/m2/mo)\n SD_m: Standard deviation of the monthly energy production due to year-to-year variation (kWh) ";
    this.getChartData(data);
    //this.getChartData(data);

    var x = document.getElementById("input_data");
    x.style.display = "none";
    var xx = document.getElementById("dashboard");
    xx.style.display = "block";
    document.body.scrollTop = document.documentElement.scrollTop = 0;


  }

  update_checkbox_slope(e) {
    if (document.getElementById("checkbox_slope").hasAttribute('readonly')){
    document.getElementById("checkbox_slope").removeAttribute("readonly")
    this.setState({ slope: this.state.last_slope });
    }
    else{
      this.setState({ last_slope:  this.state.slope });
      this.setState({ slope: "Optimized" });
    document.getElementById("checkbox_slope").setAttribute("readonly", "readonly");
    }

    this.setState({ checkbox_slope: e.target.value });
  }


  update_checkbox_azimuth(e) {
    if (document.getElementById("checkbox_azimuth").hasAttribute('readonly')){
      document.getElementById("checkbox_azimuth").removeAttribute("readonly")
      this.setState({ azimuth: this.state.last_azimuth });
      }
      else{
        this.setState({ last_azimuth:  this.state.azimuth });
        this.setState({ azimuth: "Optimized" });
      document.getElementById("checkbox_azimuth").setAttribute("readonly", "readonly");
      }
    this.setState({ checkbox_azimuth: e.target.value });
  }
  
  render() {
      return (
<>
<body>
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
                  <div className="latitude-container">
                    <img
                     alt="image_text"
                      src={image}
                     className="latitude-image"
                    />
                    <label className="latitude-text"><span>Latitude</span></label>
                  </div>
                  <div className="input-container">
                  <input className="input-textinput input" placeholder="38.6969" value={this.state.lat} onChange={(e)=> {this.setState({lat:e.target.value})}}></input>

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
                          <span>14</span>
                        </label>
                      </div>
                      <div
                        className="standard-container standard-root-className-name36"
                      >
                        <label className="standard-text"><span>1</span></label>
                      </div>
                      <div
                        className="standard-container standard-root-className-name37"
                      >
                        <label className="standard-text"><span>0º</span></label>
                      </div>
                      <div
                        className="standard-container standard-root-className-name38"
                      >
                        <label className="standard-text"><span>35º</span></label>
                      </div>
                    </div>
                  </div>
                  <div className="test-container07">
                    <div
                      className="calculate-button-container calculate-button-root-className-name3"
                    >
                      <button className="calculate-button-button button" onClick={this.handle_output} >Calculate</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="test-container08">
                <iframe
                title="Map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=-9.20,38.12,-9.39,39"
                  className="test-iframe"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="test-features2">
          <div className="test-features3">
            <div className="params-tittle-container">
              <div className="params-tittle-container1">
                <img
                  alt="image_text"
                  src={image6}
                  loading="lazy"
                  className="params-tittle-image"
                />
                <h1 className="params-tittle-text">
                  <span>Parameters & Optimizations</span>
                </h1>
              </div>
            </div>
            <div className="test-container09">
              <div className="test-container10">
                <div className="test-container11">
                  <div className="latitude-container latitude-root-className-name4">
                    <img
                              alt="image_text"
                      src={image3}
                      className="latitude-image"
                    />
                    <label className="latitude-text"><span>Losses</span></label>
                  </div>
                  <div className="input-params-container">
                  <input className="input-textinput input" placeholder="14" value={this.state.loss} onChange={(e)=> {this.setState({loss:e.target.value})}}></input>

                  </div>
                  <div className="latitude-container latitude-root-className-name5">
                    <img
                                alt="image_text"
                      src={image1}
                      className="latitude-image"
                    />
                    <label className="latitude-text">
                      <span>Installed kW</span>
                    </label>
                  </div>
                  <div className="input-params-container">
                  <input className="input-textinput input" placeholder="1" value={this.state.installed_power} onChange={(e)=> {this.setState({installed_power:e.target.value})}}></input>

                  </div>
                  <div
                    className="optimization1-container optimization1-root-className-name2"
                  >
                    <div className="optimization1-container01">
                      <div className="optimization1-container02">
                        <img
                                            alt="image_text"
                          src={image2}
                          className="optimization1-image"
                        />
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
                          <input  onChange={(e)=> {this.update_checkbox_slope(e)}} type="checkbox" className="optimization1-checkbox" /> 

                          <input onChange={(e)=> {this.update_checkbox_azimuth(e)}} type="checkbox" className="optimization1-checkbox" /> 
                          </div>
                        </div>
                        <div className="optimization1-container08">
                          <div className="optimization1-container09">
                            <label className="optimization1-label1">
                              <span>Tilt</span>
                            </label>
                            <label className="optimization1-label2">
                              <span>Azimuth</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="test-container12">
                <img
                  alt="image_text"
                                    src={solarpanel}
                  className="test-image"
                />
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
    
  </body>
  <div id="dashboard">
  <Dashboard Monthly_Energy_charData={this.state.Monthly_Energy_charData}
  Daily_Energy_charData={this.state.Daily_Energy_charData}
  Monthly_Irradiation_charData={this.state.Monthly_Irradiation_charData}
  Daily_Irradiation_charData={this.state.Daily_Irradiation_charData}
   />
     </div>




</>

      );
  }
}

export default DataEntry;
