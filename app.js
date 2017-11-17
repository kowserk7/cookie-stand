'use strict';
var stores = [];

var hours = ['6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM','11:00 AM','12:00 PM','1:00 PM','2:00 PM','3:00 PM','4:00 PM','5:00 PM','6:00 PM','7:00 PM','8:00 PM','Total'];

function Store (id, min, max, avg){
  this.id = id;
  this.min = min;
  this.max = max;
  this.avg = avg;
  this.hourlyCookies = [];
  this.dailyTotal = 0;
  stores.push(this);
  this.getHourlyCookies();
}
console.log(Store);

Store.prototype.randomCust = function () {
  return getRandomNum(this.min, this.max);
};

Store.prototype.getHourlyCookies = function() {
  for(var i = 0 ; i < hours.length; i++) {
    this.hourlyCookies.push(Math.floor(this.randomCust() * this.avg));
    this.dailyTotal += this.hourlyCookies[i];
  }
  return this.getHourlyCookies;
};

new Store ('1st and Pike', 23, 65, 6.3);
new Store ('SeaTac Airport', 3, 24, 1.2);
new Store ('Seattle Center', 11, 38, 3.7);
new Store ('Capitol Hill', 20, 38, 2.3);
new Store ('Alki', 2, 26, 1.2);

function getRandomNum(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function createTable() {
  var tableElement = document.getElementById('table');
  tableElement.id = 'newBody';
  tableElement.appendChild(createTableHead());
  tableElement.appendChild(createTableBody());
}

function createTableHead() {
  var tableHeadElement = document.createElement('thead');
  var tableHeadRow =  createTableRow(' ', hours, 'Totals');
  tableHeadElement.appendChild(tableHeadRow);
  return tableHeadElement;
}
console.log(createTableHead());

function createTableBody() {
  var tableBodyElement = document.createElement('tbody');
  for (var k = 0; k < stores.length; k++){
    var bodyRow = createTableRow(stores[k].id, stores[k].hourlyCookies, stores[k].dailyTotal);
    tableBodyElement.appendChild(bodyRow);
  }
  return tableBodyElement;
}
console.log(createTableBody);

function createTableRow(varticalHeader, dataPoints, verticalFooter){
  var tableRowElements = document.createElement('tr');
  var tableDataOne = document.createElement('td');
  tableDataOne.textContent = varticalHeader;
  tableRowElements.appendChild(tableDataOne);

  for (var j = 0 ; j < dataPoints.length; j++) {
    var tableDataTwo = document.createElement('td');
    tableDataTwo.textContent = dataPoints[j];
    tableRowElements.appendChild(tableDataTwo);
  }

  var tableDataThree = document.createElement('td');
  tableDataThree.textContent = verticalFooter;
  tableRowElements.appendChild(tableDataThree);
  return tableRowElements;
}


createTable();


// Store.header = function() {
//   var tblEl = document.getElementById('table');
//   var thead = document.createElement('thead');
//   tblEl.appendChild(thead);
//   var trEl = document.createElement('tr');
//   thead.appendChild(trEl);
//   var tdEl = document.createElement('td');
//   tdEl.textContent = '';
//   trEl.appendChild(tdEl);
//   for(var i = 0; i <= 15; i++) {
//     tdEl = document.createElement('td');
//     var time = hours[i];
//     tdEl.textContent = time;
//     trEl.appendChild(tdEl);
//   }
// };
// Store.header();
//
// Store.prototype.tableContent = function() {
//   var cookiesDay = 0;
//   var tblEl = document.getElementById('table');
//   var tbody = document.createElement('tbody');
//   tblEl.appendChild(tbody);
//   var trEl = document.createElement('tr');
//   tbody.appendChild(trEl);
//   var tdEl = document.createElement('td');
//   tdEl.textContent = stores[k].id;
//   trEl.appendChild(tdEl);
//   for(var i = 0; i <= 15; i++) {
//     var cookieC = this.cookieCount();
//     cookiesDay += cookieC;
//     tdEl = document.createElement('td');
//     var cookies = cookieC;
//     tdEl.textContent = cookies;
//     trEl.appendChild(tdEl);
//   }
//   var dataTotal = document.createElement('td');
//   tdEl.textContent = cookiesDay;
//   tblEl.appendChild(dataTotal);
// };
//
// for(var k = 0; k < 5; k++){
//   stores [k].tableContent();
// }
var newNumber = 5;
var formEl = document.getElementById('form');
function onSubmit(event) {
  event.preventDefault();
  console.log('event object', event.target.id.value);
  console.log('the form was submitted');
  var myFormData = {
    id: event.target.id.value,
    min: event.target.min.value,
    max: event.target.max.value,
    avg: event.target.avg.value,
  };
  console.log('my form data', myFormData);
  new Store (myFormData.id, myFormData.min, myFormData.max, myFormData.avg);
  function updateTableBody() {
    var bodyElementUpdate = document.getElementById('newBody');
    var bodyRow = createTableRow(stores[newNumber].id, stores[newNumber].hourlyCookies, stores[newNumber].dailyTotal);
    bodyElementUpdate.appendChild(bodyRow);
    newNumber += 1;
    return bodyElementUpdate;
  }
  updateTableBody();
}
formEl.addEventListener('submit', onSubmit);
console.log('submit', onSubmit());
