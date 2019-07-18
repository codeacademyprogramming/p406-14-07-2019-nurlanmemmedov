var startDate = new Date();
startDate.setFullYear(2019);
startDate.setMonth( 4);
startDate.setDate(18);  
startDate.setHours(10);
startDate.setSeconds(00);
startDate.setMinutes(00);
console.log('course starts from  -->>  ' + startDate);
let totalDuration =prompt('enter the total course time');
const passedHours = (totalDuration/10)*7*24   // 10 saat = keçən 1 hefteye  (yeni  7*24 saata)
var il = Math.trunc(passedHours/(365*24));
var ay =  Math.trunc((passedHours - il*8760) / 30/24) ;
var gun =  Math.trunc((passedHours - il*8760 - ay*732)/24);
var endDate = new Date();
endDate.setFullYear(2019 + il);
endDate.setMonth( 4 + ay);
endDate.setDate(18+gun);  
endDate.setHours(10);
endDate.setSeconds(00);
endDate.setMinutes(00);
console.log('course ends at  -->>  '+endDate);






var time = new Date();
var date = time.getDate();
function timing() {
  if (date == 6 || date == 16 || date == 26) {
    console.log(`bu gün ayın ${date}-dır`)
  } else if (date == 9 || date == 10 || date == 19 || date == 29 || date == 30) {
    console.log(`bu gün ayın ${date}-dur`)
  } else if (date == 3 || date == 4 || date == 13 || date == 14 || date == 23 || date == 24) {
    console.log(`bu gün ayın ${date}-dür`)
  } else {
    console.log(`bu gün ayın ${date}-dir`)
  }
}
timing();






var time = new Date();
time.setFullYear(2020);
time.setMonth(11);
time.setDate(3);
var month = time.getMonth();
function quarter() {
  if (month < 12 && month > 9) {
    console.log(`${time}  -->>  last quarter of the year`);
  } else if (month <= 9 && month > 6) {
    console.log(`${time}  -->>  3rd quarter of the year`);
  } else if (month <= 6 && month > 3) {
    console.log(`${time}  -->>  2nd quarter of the year`);
  } else {
    console.log(`${time}  -->>  1st quarter of the year`);
  }
}
quarter()






