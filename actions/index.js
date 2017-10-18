import axios from 'axios';
import API_KEY from '../config'

const getNewAirData = (location) => {
  console.log('getting the location', location);
  const lat = location.latitude;
  const lon = location.longitude;
  const airData = axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${lon}&key=${API_KEY}`);
  console.log(airData)
  return {
    type: 'NEW_AIR_DATA',
    payload: airData,
  };
};

export default getNewAirData;
