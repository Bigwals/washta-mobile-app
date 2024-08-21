import moment from "moment-timezone";

 export const formatDate = (timestamp) => {
    return moment(timestamp).format('MMM DD');
  };
  
  // Function to format the time in the specified timezone
 export const formatTimeInTimezone = (timestamp, timezone) => {
    return moment(timestamp).tz(timezone).format('hh:mm A');
  };