import axios from 'axios';
//import {make_data } from '../components/Charts';

const url = "https://photovoltaicapp.herokuapp.com/https://re.jrc.ec.europa.eu/api/v5_2/PVcalc?";
//heroku config:set -a photovoltaicapp CORSANYWHERE_RATELIMIT="/(.*\.)?fabio-almeida\.com/ /(.*\.)?fabio-r-almeida\.github.io/"


  const get_input_data = async (long,lat, slope, azimuth, installed_power,loss,slope_value,azimuth_value) => {

    return new Promise((resolve) => {
      if(isNaN(azimuth))
      azimuth = 0
      if(isNaN(slope))
      slope = 0
      if(azimuth_value=="Optimized")
      azimuth_value=0
      if(slope_value=="Optimized")
      slope_value=0


      axios.get(url+"lat="+lat+"&lon="+long+ "&angle="+slope_value+"&aspect="+azimuth_value+"&optimalinclination="+Number(slope)+ "&optimalangles=" +Number(azimuth) +"&peakpower="+installed_power+"&loss="+loss+"&outputformat=json")
      .then((response)=>{
        resolve(response.data['inputs']);
      })
      .catch(err => {
        alert(err.response.data.message.replace('lon', 'Longitude').replace('lat', 'Latitude'))
        document.location = window.location.pathname;
            }      )  
  })
  };
  
  const get_output_data = async (long,lat, slope, azimuth, installed_power,loss) => {
    return new Promise((resolve) => {
      if(isNaN(azimuth))
      azimuth = 0
      if(isNaN(slope))
      slope = 0
      axios.get(url+"lat="+lat+"&lon="+long+ "&optimalinclination="+Number(slope)+ "&optimalangles=" +Number(azimuth) +"&peakpower="+installed_power+"&loss="+loss+"&outputformat=json")
      .then((response)=>{
        resolve(response.data['outputs']);
      })
      .catch(err => {
        alert(err.response.data.message.replace('lon', 'Longitude').replace('lat', 'Latitude'))
         document.location = window.location.pathname;
      }      )  
     
  })
  };


  const get_meta_data = async (long,lat, slope, azimuth, installed_power,loss)=> {
    return new Promise((resolve) => {
      if(isNaN(azimuth))
      azimuth = 0
      if(isNaN(slope))
      slope = 0
      axios.get(url+"lat="+lat+"&lon="+long+ "&optimalinclination="+Number(slope)+ "&optimalangles=" +Number(azimuth) +"&peakpower="+installed_power+"&loss="+loss+"&outputformat=json")
      .then((response)=>{resolve(response.data['meta']);
      })
      .catch(err => {
        alert(err.response.data.message.replace('lon', 'Longitude').replace('lat', 'Latitude'))

      }      )  
  })
  };

  const get_address = async (long,lat) => {
    return new Promise((resolve) => {
      axios.get("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude="+lat+"&longitude="+long+"&localityLanguage=en")
      .then((response)=>{
        resolve(response.data.locality);
      })
      .catch(err => {
        document.location = window.location.pathname;
            }      )  
  })
  };

  
  export {
    get_input_data,
    get_output_data,
    get_meta_data,
    get_address
  };