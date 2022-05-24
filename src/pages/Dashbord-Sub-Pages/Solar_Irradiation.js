import React, { Component } from "react";
import Monthly_Irradiation from "../../components/Charts/Monthly_Irradiation";
import Monthly_Energy_Production from "../../components/Charts/Monthly_Energy_Production";
import Daily_Energy_Production from "../../components/Charts/Daily_Energy_Production";
import Daily_Irradiation from "../../components/Charts/Daily_Irradiation";

class Solar_Irradiation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Monthly_Irradiation_charData: props.Monthly_Irradiation_charData,
      Daily_Irradiation_charData: props.Daily_Irradiation_charData,
      Monthly_Energy_charData: props.Monthly_Energy_charData,
      Daily_Energy_charData: props.Daily_Energy_charData,
    };
  }

  render() {
    return (
      <div loading="lazy">
        <h1 className="tm-block1-title">
          Average Solar Irradiation and Energy Production
        </h1>
        <div className="row tm-content-row tm-mt-big">
          <div className="tm-col tm-col-small">
            <div className="bg-white tm-block h-100">
              <h2 className="tm-block-title">
                Average Monthly sum irradiation per m<sup>2</sup>
              </h2>
              <Monthly_Irradiation
                ChartData={this.props.Monthly_Irradiation_charData}
              />
            </div>
          </div>
          <div className="tm-col tm-col-small">
            <div className="bg-white tm-block h-100">
              <h2 className="tm-block-title">
                {" "}
                Average daily sum irradiation per m<sup>2</sup>
              </h2>
              <Daily_Irradiation
                ChartData={this.props.Daily_Irradiation_charData}
              />
            </div>
          </div>
          <div className="tm-col tm-col-small">
            <div className="bg-white tm-block h-100">
              <h2 className="tm-block-title">
                Average Monthly Energy Production
              </h2>
              <Monthly_Energy_Production
                ChartData={this.props.Monthly_Energy_charData}
              />
            </div>
          </div>
          <div className="tm-col tm-col-small">
            <div className="bg-white tm-block h-100">
              <h2 className="tm-block-title">
                Average Daily Energy Production
              </h2>
              <Daily_Energy_Production
                ChartData={this.props.Daily_Energy_charData}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Solar_Irradiation;
