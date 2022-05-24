import React, { Component } from "react";
import Daily_Radiation_Per_Month from "../../components/Charts/Daily_Radiation_Per_Month";

class Average_Temp_And_Irradiation extends Component {
  constructor(props) {
    super(props);
    this.state = {
        Average_Temp_And_Irradiation_data:
        props.Average_Temp_And_Irradiation_data,
    };
  }

  render() {
    return (
      <div loading="lazy">
        <h1 className="tm-block1-title">
          Average Temperature and Irradiation Hourly per Month
        </h1>
        <div className="container">
          <div className="row tm-content-row tm-mt-big">
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">January</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[0]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[1]
                  }
                />
              </div>
            </div>
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">February</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[2]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[3]
                  }
                />
              </div>
            </div>
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">March</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[4]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[5]
                  }
                />
              </div>
            </div>
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">April</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[6]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[7]
                  }
                />
              </div>
            </div>
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">May</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[8]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[9]
                  }
                />
              </div>
            </div>
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">June</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[10]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[11]
                  }
                />
              </div>
            </div>
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">July</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[12]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[13]
                  }
                />
              </div>
            </div>
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">August</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[14]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[15]
                  }
                />
              </div>
            </div>
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">September</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[16]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[17]
                  }
                />
              </div>
            </div>
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">October</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[18]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[19]
                  }
                />
              </div>
            </div>
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">November</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[20]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[21]
                  }
                />
              </div>
            </div>
            <div className="tm-col tm-col-small">
              <div className="bg-white tm-block h-100">
                <h2 className="tm-block-title">December</h2>
                <Daily_Radiation_Per_Month
                  ChartData_Temperature={
                    this.props.Average_Temp_And_Irradiation_data[22]
                  }
                  ChartData_Irradiation={
                    this.props.Average_Temp_And_Irradiation_data[23]
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Average_Temp_And_Irradiation;
