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