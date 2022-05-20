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


class Dashboard extends Component {
      constructor(props) {
        super(props);
        this.state = {
          Monthly_Energy_charData: props.Monthly_Energy_charData,
          Daily_Energy_charData: props.Daily_Energy_charData,
          Monthly_Irradiation_charData: props.Monthly_Irradiation_charData,
          Daily_Irradiation_charData: props.Daily_Irradiation_charData,
        };
      }
     
  render() {
      return (
        <>

<div 
 />

<div id="reportsPage">
<div className="" id="home">
    <div className="container">
        <div className="row tm-content-row tm-mt-big">
            <div className="tm-col tm-col-big">
                <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">Average Monthly sum irradiation per m<sup>2</sup></h2>
               
                    <Monthly_Irradiation ChartData={this.props.Monthly_Irradiation_charData} />
                </div>
            </div>
            <div className="tm-col tm-col-big">
                <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title"> Average daily sum irradiation per m<sup>2</sup></h2>
               
                    <Daily_Irradiation ChartData={this.props.Daily_Irradiation_charData} />
                </div>
            </div>

            <div className="tm-col tm-col-small">
                <div className="bg-white tm-block h-100">
                </div>
            </div>
            
            <div className="tm-col tm-col-big">
                <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">Average Monthly Energy Production</h2>
               
                    <Monthly_Energy_Production ChartData={this.props.Monthly_Energy_charData} />
                </div>
            </div>
            <div className="tm-col tm-col-big">
                <div className="bg-white tm-block h-100">
                    <h2 className="tm-block-title">Average Daily Energy Production</h2>
               
                    <Daily_Energy_Production ChartData={this.props.Daily_Energy_charData} />
                </div>
            </div>



            <div className="tm-col tm-col-small">
                <div className="bg-white tm-block h-100">
                </div>
            </div>




            
        </div>
        <footer className="row tm-mt-small">
            <div className="col-12 font-weight-light">
                <p className="d-inline-block tm-bg-black text-white py-2 px-4">
                © 2022 Photovoltaic Calculator, All Rights Reserved.                   
                </p>
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
