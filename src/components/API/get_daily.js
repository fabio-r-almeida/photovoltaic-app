import axios from 'axios';
//import {make_data } from '../components/Charts';

const url = "https://photovoltaicapp.herokuapp.com/https://re.jrc.ec.europa.eu/api/v5_1/DRcalc?localtime=1&";
//heroku config:set -a photovoltaicapp CORSANYWHERE_RATELIMIT="/(.*\.)?fabio-almeida\.com/ /(.*\.)?fabio-r-almeida\.github.io/"

  
  const get_output_data_daily = async (long,lat,slope, azimuth) => {
    return new Promise((resolve) => {

      const months = [
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+1+"&outputformat=json",
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+2+"&outputformat=json",
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+3+"&outputformat=json",
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+4+"&outputformat=json",
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+5+"&outputformat=json",
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+6+"&outputformat=json",
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+7+"&outputformat=json",
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+8+"&outputformat=json",
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+9+"&outputformat=json",
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+10+"&outputformat=json",
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+11+"&outputformat=json",
        url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&global=1&showtemperatures=1&month="+12+"&outputformat=json",
        
      ]
Promise.all(months.map((months) => axios.get(months))).then(
  axios.spread((...allData) => {
    resolve(allData)
  })
  
).catch(err => {
  alert(err.response.data.message.replace('lon', 'Longitude').replace('lat', 'Latitude'))
  document.location = window.location.pathname;
})



/*
      axios.get(url+"lat="+lat+"&lon="+long+ "&month="+1+"&outputformat=json")
      .then((response)=>{
        resolve(response.data['outputs']);
      })
      .catch(err => {
        alert(err.response.data.message.replace('lon', 'Longitude').replace('lat', 'Latitude'))
      document.getElementById("data").innerHTML = err.response.data.message.replace('lon', 'Longitude').replace('lat', 'Latitude')}
      )  
     */ 
  })

  };



  
  export {
    get_output_data_daily
  };