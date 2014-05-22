console.log('SchedMed');

var drunk_status = "hell no";

var locs=["Right Leg", "Left Leg", "Right Hip", "Left Hip", "Right Stomach", "Left Stomach"];

var sYear = '2014';
var sMon  = '3';
var sDay  = '25';

var origd = new Date();
origd.setFullYear(sYear,sMon,sDay);

var currd = new Date();
var currh = currd.getHours();

var millisecondsPerDay = 1000 * 60 * 60 * 24;
var millisBetween = currd.getTime() - origd.getTime();
var days = millisBetween / millisecondsPerDay;

days = Math.floor(days);

var locref=days%6;

if (currh > 0 && currh < 4){
  drunk_status = "hell yes";
  if (locref === 0){
    locref = 6;
  }else{
    locref = locref-1;
  }
} 

simply.setText({
  title: 'SchedMed',
  body: 'Location is ' + locs[locref] + '\r\nDays so far: ' + days + '\r\nAre you drunk? ' + drunk_status,
}, true);
