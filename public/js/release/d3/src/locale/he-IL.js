// wrapped by build app
define("d3/src/locale/he-IL", ["dojo","dijit","dojox"], function(dojo,dijit,dojox){
import "locale";

var d3_locale_heIL = d3.locale({
  decimal: ".",
  thousands: ",",
  grouping: [3],
  currency: ["₪", ""],
  dateTime: "%A, %e ב%B %Y %X",
  date: "%d.%m.%Y",
  time: "%H:%M:%S",
  periods: ["AM", "PM"],
  days: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"],
  shortDays: ["א׳", "ב׳", "ג׳", "ד׳", "ה׳", "ו׳", "ש׳"],
  months: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"],
  shortMonths: ["ינו׳", "פבר׳", "מרץ", "אפר׳", "מאי", "יוני", "יולי", "אוג׳", "ספט׳", "אוק׳", "נוב׳", "דצמ׳"]
});

});
