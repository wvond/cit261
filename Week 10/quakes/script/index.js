import { getJSON, getLocation } from './utilities.js';
//import QuakesController from './quakesController';

const baseUrl ='https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=2019-01-01&endtime=2019-02-02';


let url = '';

getLocation().then(
    location => {
        console.log(location)
        console.log(location.coords.latitude)
        console.log(location.coords.longitude)
        
        url = baseUrl + `&latitude=${location.coords.latitude}&longitude=${location.coords.longitude}&maxradiuskm=100`
        console.log(url);
    }
    
);
