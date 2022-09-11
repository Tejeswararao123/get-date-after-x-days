const addDays = require("date-fns/addDays");
const getDateAfterXdays = (days) => {
  newdate = addDays(new Date(2020, 08, 22), days);
  return `${newdate.getDate()}-${
    newdate.getMonth() + 1
  }-${newdate.getFullYear()}`;
};
module.exports = getDateAfterXdays;
