import setValues from "./setValues";

export default function getSearch () {
    let weatherLocation = document.getElementsByName('locationSearch')[0].value;
    setValues(weatherLocation);    
}