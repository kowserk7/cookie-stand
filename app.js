'use strict';
var stores = [];

var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','Total'];


function Store (id, min, max, avg){
  this.id = id;
  this.min = min;
  this.max = max;
  this.avg = avg;
  stores.push(this);
}
console.log(Store);

new Store ('1st and Pike', 23, 65, 6.3);
new Store ('SeaTac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 26, 1.2);

Store.prototype.randomCust = function () {
  return Math.round(Math.random() * (this.max - this.min)) + this.min;
};
stores [0].randomCust();

Store.prototype.cookieCount = function () {
  return Math.round(this.avg * this.randomCust());
};
stores [0].cookieCount();


Store.header = function() {
  var tblEl = document.getElementById('table');
  var tbody = document.createElement('tbody');
  tblEl.appendChild(tbody);
  var trEl = document.createElement('tr');
  tbody.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.setAttribute('style','background-color:white;');
  // tdEl.setAttribute('style','maragin: 65px;');
  tdEl.textContent = '';
  trEl.appendChild(tdEl);
  for(var i = 0; i <= 14; i++) {
    tdEl = document.createElement('td');
    var time = hours[i];
    tdEl.textContent = time;
    trEl.appendChild(tdEl);
  }
};
Store.header();

Store.prototype.tableContent = function() {
  var cookiesDay = 0;
  var tblEl = document.getElementById('table');
  var tbody = document.createElement('tbody');
  tblEl.appendChild(tbody);
  var trEl = document.createElement('tr');
  tbody.appendChild(trEl);
  var tdEl = document.createElement('td');
  tdEl.textContent = stores[k].id;
  trEl.appendChild(tdEl);
  for(var i = 0; i <= 15; i++) {
    var cookieC = this.cookieCount();
    cookiesDay += cookieC;
    tdEl = document.createElement('td');
    var cookies = cookieC;
    tdEl.textContent = cookies;
    trEl.appendChild(tdEl);
  }
  var dataTotal = document.createElement('td');
  tdEl.textContent = cookiesDay;
  tblEl.appendChild(dataTotal);
};

for(var k = 0; k < 5; k++){
  stores [k].tableContent();
}

//       var newLi = document.createElement('li');
//       var newContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
//       newLi.appendChild(newContent);
//       var current = document.getElementById('li4');
//       current.appendChild(newLi);
//     } else {
//       var newLiT = document.createElement('li');
//       var newContentT = document.createTextNode('Total: ' + this.cookiesDay);
//       newLiT.appendChild(newContentT);
//       var currentT = document.getElementById('li4');
//       currentT.appendChild(newLiT);
//       break;
//     }
//   }
// };

// var Pike = {
//   min: 23,
//   max: 65,
//   avg: 6.3,
//   cookiesHr: [],
//   cookiesDay: 0,
//   id:'pike',
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCust: function() {
//     return Math.round(Math.random() * (this.max - this.min)) + this.min;
//   },
//   cookieCount: function() {
//     return (Math.round(this.avg * this.randomCust()));
//   },
//
//   rendor: function () {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieCount = this.cookieCount();
//         this.cookiesDay += cookieCount;
//         this.cookiesHr.push(cookieCount);
//         var newLi = document.createElement('li');
//         console.log(newLi);
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
//         console.log(newContent);
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li1');
//         current.appendChild(newLi);
//       } else
//       {
//         var newLiT = document.createElement('li');
//         var newContentT = document.createTextNode('Total: ' + this.cookiesDay);
//         newLiT.appendChild(newContentT);
//         var currentT = document.getElementById('li1');
//         currentT.appendChild(newLiT);
//         break;
//       }
//     }
//   },
// };
// console.log (Pike);
// Pike.rendor();
// var SeaTac = {
//   min: 3,
//   max: 24,
//   avg: 1.2,
//   cookiesHr: [],
//   cookiesDay: 0,
//   id:'seatac',
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCust: function() {
//     return Math.round(Math.random() * (this.max - this.min)) + this.min;
//   },
//   cookieCount: function() {
//     return (Math.round(this.avg * this.randomCust()));
//   },
//
//   rendor: function () {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieCount = this.cookieCount();
//         this.cookiesDay += cookieCount;
//         this.cookiesHr.push(cookieCount);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
//         newLi.appendChild(newContent);
//         console.log(newLi);
//         var current = document.getElementById('li3');
//         current.appendChild(newLi);
//       } else {
//         var newLiT = document.createElement('li');
//         var newContentT = document.createTextNode('Total: ' + this.cookiesDay);
//         newLiT.appendChild(newContentT);
//         var currentT = document.getElementById('li3');
//         currentT.appendChild(newLiT);
//         break;
//       }
//     }
//   },
// };
// console.log (SeaTac);
// SeaTac.rendor();
//
// var SeattleCenter = {
//   min: 11,
//   max: 38,
//   avg: 3.7,
//   cookiesHr: [],
//   cookiesDay: 0,
//   id:'seattlecenter',
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCust: function() {
//     return Math.round(Math.random() * (this.max - this.min)) + this.min;
//   },
//   cookieCount: function() {
//     return (Math.round(this.avg * this.randomCust()));
//   },
//
//   rendor: function () {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieCount = this.cookieCount();
//         this.cookiesDay += cookieCount;
//         this.cookiesHr.push(cookieCount);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li4');
//         current.appendChild(newLi);
//       } else {
//         var newLiT = document.createElement('li');
//         var newContentT = document.createTextNode('Total: ' + this.cookiesDay);
//         newLiT.appendChild(newContentT);
//         var currentT = document.getElementById('li4');
//         currentT.appendChild(newLiT);
//         break;
//       }
//     }
//   },
// };
// console.log (SeattleCenter);
// SeattleCenter.rendor();
//
// var CapitolHill = {
//   min: 20,
//   max: 38,
//   avg: 2.3,
//   cookiesHr: [],
//   cookiesDay: 0,
//   id:'capitolhill',
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCust: function() {
//     return Math.round(Math.random() * (this.max - this.min)) + this.min;
//   },
//   cookieCount: function() {
//     return (Math.round(this.avg * this.randomCust()));
//   },
//
//   rendor: function () {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieCount = this.cookieCount();
//         this.cookiesDay += cookieCount;
//         this.cookiesHr.push(cookieCount);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li5');
//         current.appendChild(newLi);
//       } else {
//         var newLiT = document.createElement('li');
//         var newContentT = document.createTextNode('Total: ' + this.cookiesDay);
//         newLiT.appendChild(newContentT);
//         var currentT = document.getElementById('li5');
//         currentT.appendChild(newLiT);
//         break;
//       }
//     }
//   },
// };
// console.log (CapitolHill);
// CapitolHill.rendor();
//
// var Alki = {
//   min: 2,
//   max: 16,
//   avg: 4.6,
//   cookiesHr: [],
//   cookiesDay: 0,
//   id:'alki',
//   hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
//   randomCust: function() {
//     return Math.round(Math.random() * (this.max - this.min)) + this.min;
//   },
//   cookieCount: function() {
//     return (Math.round(this.avg * this.randomCust()));
//   },
//   rendor: function () {
//     for(var i = 0; i < 16; i++) {
//       if (i < 15) {
//         var cookieCount = this.cookieCount();
//         this.cookiesDay += cookieCount;
//         this.cookiesHr.push(cookieCount);
//         var newLi = document.createElement('li');
//         var newContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
//         newLi.appendChild(newContent);
//         var current = document.getElementById('li2');
//         current.appendChild(newLi);
//       } else {
//         var newLiT = document.createElement('li');
//         var newContentT = document.createTextNode('Total: ' + this.cookiesDay);
//         newLiT.appendChild(newContentT);
//         var currentT = document.getElementById('li2');
//         currentT.appendChild(newLiT);
//         break;
//       }
//     }
//   },
// };
// console.log (Alki);
// Alki.rendor();
