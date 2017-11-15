'use strict';

var Pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  cookiesHr: [],
  cookiesDay: 0,
  id:'pike',
  hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCust: function() {
    return Math.round(Math.random() * (this.max - this.min)) + this.min;
  },
  cookieCount: function() {
    return (Math.round(this.avg * this.randomCust()));
  },

  rendor: function () {
    for(var i = 0; i < 16; i++) {
      if (i < 15) {
        var cookieCount = this.cookieCount();
        this.cookiesDay += cookieCount;
        this.cookiesHr.push(cookieCount);
        var newLi = document.createElement('li');
        console.log(newLi);
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
        console.log(newContent);
        newLi.appendChild(newContent);
        var current = document.getElementById('li1');
        current.appendChild(newLi);
        // document.body.insertBefore(newLi, current);
      } else
      {
        var newLiT = document.createElement('li');
        var newContentT = document.createTextNode('Total: ' + this.cookiesDay);
        newLiT.appendChild(newContentT);
        var currentT = document.getElementById('li1');
        currentT.appendChild(newLiT);
        break;
      }
    }
  },
};
console.log (Pike);
Pike.rendor();
var SeaTac = {
  min: 3,
  max: 24,
  avg: 1.2,
  cookiesHr: [],
  cookiesDay: 0,
  id:'seatac',
  hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCust: function() {
    return Math.round(Math.random() * (this.max - this.min)) + this.min;
  },
  cookieCount: function() {
    return (Math.round(this.avg * this.randomCust()));
  },

  rendor: function () {
    for(var i = 0; i < 16; i++) {
      if (i < 15) {
        var cookieCount = this.cookieCount();
        this.cookiesDay += cookieCount;
        this.cookiesHr.push(cookieCount);
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
        newLi.appendChild(newContent);
        console.log(newLi);
        var current = document.getElementById('li3');
        current.appendChild(newLi);
      } else {
        var newLiT = document.createElement('li');
        var newContentT = document.createTextNode('Total: ' + this.cookiesDay);
        newLiT.appendChild(newContentT);
        var currentT = document.getElementById('li3');
        currentT.appendChild(newLiT);
        break;
      }
    }
  },
};
console.log (SeaTac);
SeaTac.rendor();

var SeattleCenter = {
  min: 11,
  max: 38,
  avg: 3.7,
  cookiesHr: [],
  cookiesDay: 0,
  id:'seattlecenter',
  hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCust: function() {
    return Math.round(Math.random() * (this.max - this.min)) + this.min;
  },
  cookieCount: function() {
    return (Math.round(this.avg * this.randomCust()));
  },

  rendor: function () {
    for(var i = 0; i < 16; i++) {
      if (i < 15) {
        var cookieCount = this.cookieCount();
        this.cookiesDay += cookieCount;
        this.cookiesHr.push(cookieCount);
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li4');
        current.appendChild(newLi);
      } else {
        var newLiT = document.createElement('li');
        var newContentT = document.createTextNode('Total: ' + this.cookiesDay);
        newLiT.appendChild(newContentT);
        var currentT = document.getElementById('li4');
        currentT.appendChild(newLiT);
        break;
      }
    }
  },
};
console.log (SeattleCenter);
SeattleCenter.rendor();

var CapitolHill = {
  min: 20,
  max: 38,
  avg: 2.3,
  cookiesHr: [],
  cookiesDay: 0,
  id:'capitolhill',
  hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCust: function() {
    return Math.round(Math.random() * (this.max - this.min)) + this.min;
  },
  cookieCount: function() {
    return (Math.round(this.avg * this.randomCust()));
  },

  rendor: function () {
    for(var i = 0; i < 16; i++) {
      if (i < 15) {
        var cookieCount = this.cookieCount();
        this.cookiesDay += cookieCount;
        this.cookiesHr.push(cookieCount);
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li5');
        current.appendChild(newLi);
      } else {
        var newLiT = document.createElement('li');
        var newContentT = document.createTextNode('Total: ' + this.cookiesDay);
        newLiT.appendChild(newContentT);
        var currentT = document.getElementById('li5');
        currentT.appendChild(newLiT);
        break;
      }
    }
  },
};
console.log (CapitolHill);
CapitolHill.rendor();

var Alki = {
  min: 2,
  max: 16,
  avg: 4.6,
  cookiesHr: [],
  cookiesDay: 0,
  id:'alki',
  hours: ['6am', '7am', '8am', '9am', '10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'],
  randomCust: function() {
    return Math.round(Math.random() * (this.max - this.min)) + this.min;
  },
  cookieCount: function() {
    return (Math.round(this.avg * this.randomCust()));
  },
  rendor: function () {
    for(var i = 0; i < 16; i++) {
      if (i < 15) {
        var cookieCount = this.cookieCount();
        this.cookiesDay += cookieCount;
        this.cookiesHr.push(cookieCount);
        var newLi = document.createElement('li');
        var newContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
        newLi.appendChild(newContent);
        var current = document.getElementById('li2');
        current.appendChild(newLi);
      } else {
        var newLiT = document.createElement('li');
        var newContentT = document.createTextNode('Total: ' + this.cookiesDay);
        newLiT.appendChild(newContentT);
        var currentT = document.getElementById('li2');
        currentT.appendChild(newLiT);
        break;
      }
    }
  },
};
console.log (Alki);
Alki.rendor();
