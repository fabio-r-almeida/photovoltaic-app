import React, { Component } from "react";
import Corrected_Energy_Production from "../../components/Charts/Corrected_Energy_Production";

class Real_vs_Ideal_Production extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Corrected_Energy_Production:props.Corrected_Energy_Production,
            loss:props.loss,
            installed_power:props.installed_power,

        }
    
    }


  render() {
      return (
<>
        <h1 className="tm-block1-title">Real vs Ideal Energy Production</h1>
        <div className="container">
           <div className="row tm-content-row tm-mt-big">
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">January</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[0]} 
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[12]} losses={this.props.loss} maximum={this.props.installed_power*1000}/>
                 </div>
              </div>
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">February</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[1]} 
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[13]} losses={this.props.loss} maximum={this.props.installed_power*1000}/>
                 </div>
              </div>
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">March</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[2]}
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[14]} losses={this.props.loss} maximum={this.props.installed_power*1000}/>
                 </div>
              </div>
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">April</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[3]} 
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[15]} losses={this.props.loss} maximum={this.props.installed_power*1000}/>
                 </div>
              </div>
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">May</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[4]}
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[16]} losses={this.props.loss} maximum={this.props.installed_power*1000}/>
                 </div>
              </div>
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">June</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[5]} 
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[17]}losses={this.props.loss} maximum={this.props.installed_power*1000}/>
                 </div>
              </div>
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">July</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[6]} 
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[18]}losses={this.props.loss} maximum={this.props.installed_power*1000}/>
                 </div>
              </div>
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">August</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[7]} 
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[19]}losses={this.props.loss} maximum={this.props.installed_power*1000} />
                 </div>
              </div>
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">September</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[8]} 
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[20]}losses={this.props.loss} maximum={this.props.installed_power*1000}/>
                 </div>
              </div>
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">October</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[9]}
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[21]} losses={this.props.loss} maximum={this.props.installed_power*1000} />
                 </div>
              </div>
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">November</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[10]} 
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[22]} losses={this.props.loss} maximum={this.props.installed_power*1000}/>
                 </div>
              </div>
              <div className="tm-col tm-col-small">
                 <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">December</h2>
                    <Corrected_Energy_Production ChartData_Corrected_Energy={this.props.Corrected_Energy_Production[11]}
                    ChartData_Real_Energy={this.props.Corrected_Energy_Production[23]} losses={this.props.loss} maximum={this.props.installed_power*1000} />
                 </div>
              </div>
           </div>
        </div>
      
        </>
      );
  }
}

export default Real_vs_Ideal_Production;
