"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Flight API
----------------------------------------------------------------------------- */
//*todo /* dateToLocaleString(date:Date): */

module.exports = function (dateData) {
  return dateData.toLocaleString("de-De", {
    dateStyle: "full",
    timeStyle: "medium",
  });
};
