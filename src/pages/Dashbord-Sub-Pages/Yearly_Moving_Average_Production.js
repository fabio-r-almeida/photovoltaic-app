import React, { Component } from "react";
import Yearly_Production from "../../components/Charts/Yearly_Production";



class Yearly_Moving_Average_Production extends Component {

    constructor(props) {
        super(props);
        this.state = {
            yearly_production_MA:props.yearly_production_MA
        }
    
    }


  render() {
      return (

        
        <div id="Yearly Production MA"  loading="lazy">
        <div className="row tm-content-row tm-mt-big">
                 <h2 className="tm-block-title">Yearly Production</h2>
        </div>
        <Yearly_Production ChartData={this.props.yearly_production_MA} />

        </div>

      );
  }
}

export default Yearly_Moving_Average_Production;
