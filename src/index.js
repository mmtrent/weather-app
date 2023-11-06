require('./style.css')
import setValues from "./UI";

if (location == null) {
    location = 'South Lake Tahoe';
}
setValues(location);