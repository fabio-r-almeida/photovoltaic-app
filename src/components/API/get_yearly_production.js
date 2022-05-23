import axios from 'axios';
//import {make_data } from '../components/Charts';

const url = "https://photovoltaicapp.herokuapp.com/https://re.jrc.ec.europa.eu/api/v5_1/seriescalc?startyear=2016&endyear=2016&";
//heroku config:set -a photovoltaicapp CORSANYWHERE_RATELIMIT="/(.*\.)?fabio-almeida\.com/ /(.*\.)?fabio-r-almeida\.github.io/"

  
  const get_yearly_production = async (long,lat,slope,azimuth) => {
    return new Promise((resolve) => {
      const years = [url+"lat="+lat+"&lon="+long+ "&angle="+slope+"&aspect="+azimuth+"&outputformat=json"  ]
Promise.all(years.map((years) => axios.get(years))).then(
  axios.spread((...allData) => {
    resolve(allData)
  })
  
).catch(err => {
  alert(err.response.data.message.replace('lon', 'Longitude').replace('lat', 'Latitude'))
  document.location = window.location.pathname;
})


  })

  };



  
  export {
    get_yearly_production
  };