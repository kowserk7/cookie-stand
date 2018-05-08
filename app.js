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

  render: function () {
    for(var i = 0; i <= this.hours.length; i++) {
      if (i < this.hours.length) {
        var randomCust = this.randomCust();
        var cookieCount = this.cookieCount();
        this.cookiesDay += cookieCount;
        this.cookiesHr.push(randomCust);
        var pikeUl = document.getElementById('pikeList');
        var pikeLi = document.createElement('li');
        var pikeContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
        console.log(pikeContent);
        pikeLi.appendChild(pikeContent);
        pikeUl.appendChild(pikeLi);
      } else
      {
        var pikeUlT = document.getElementById('pikeTotal');
        var pikeLiT = document.createElement('li');
        var pikeContentT = document.createTextNode('Total: ' + this.cookiesDay);
        pikeLiT.appendChild(pikeContentT);
        pikeUlT.appendChild(pikeLiT);
        break;
      }

    }
  },
};

console.log (Pike);
Pike.render();


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

  render: function () {
    for(var i = 0; i <= this.hours.length; i++) {
      if (i < this.hours.length) {
        var randomCust = this.randomCust();
        var cookieCount = this.cookieCount();
        this.cookiesDay += cookieCount;
        this.cookiesHr.push(randomCust);
        var seatacUl = document.getElementById('seatacList');
        var seatacLi = document.createElement('li');
        var seatacContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
        console.log(seatacContent);
        seatacLi.appendChild(seatacContent);
        seatacUl.appendChild(seatacLi);
      } else
      {
        var pikeUlT = document.getElementById('seatacTotal');
        var pikeLiT = document.createElement('li');
        var pikeContentT = document.createTextNode('Total: ' + this.cookiesDay);
        pikeLiT.appendChild(pikeContentT);
        pikeUlT.appendChild(pikeLiT);
        break;
      }

    }
  },
};
console.log (SeaTac);
SeaTac.render();

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

  render: function () {
    for(var i = 0; i <= this.hours.length; i++) {
      if (i < this.hours.length) {
        var randomCust = this.randomCust();
        var cookieCount = this.cookieCount();
        this.cookiesDay += cookieCount;
        this.cookiesHr.push(randomCust);
        var seattlecenterUl = document.getElementById('seattlecenterList');
        var seattlecenterLi = document.createElement('li');
        var seattlecenterContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
        seattlecenterLi.appendChild(seattlecenterContent);
        seattlecenterUl.appendChild(seattlecenterLi);
      } else
      {
        var seattlecenterUlT = document.getElementById('seattlecenterTotal');
        var seattlecenterLiT = document.createElement('li');
        var seattlecenterContentT = document.createTextNode('Total: ' + this.cookiesDay);
        seattlecenterLiT.appendChild(seattlecenterContentT);
        seattlecenterUlT.appendChild(seattlecenterLiT);
        break;
      }

    }
  },
};
console.log (SeattleCenter);
SeattleCenter.render();

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

  render: function () {
    for(var i = 0; i <= this.hours.length; i++) {
      if (i < this.hours.length) {
        var randomCust = this.randomCust();
        var cookieCount = this.cookieCount();
        this.cookiesDay += cookieCount;
        this.cookiesHr.push(randomCust);
        var caphillUl = document.getElementById('caphillList');
        var caphillLi = document.createElement('li');
        var caphillContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
        caphillLi.appendChild(caphillContent);
        caphillUl.appendChild(caphillLi);
      } else
      {
        var caphillUlT = document.getElementById('caphillTotal');
        var caphillLiT = document.createElement('li');
        var caphillContentT = document.createTextNode('Total: ' + this.cookiesDay);
        caphillLiT.appendChild(caphillContentT);
        caphillUlT.appendChild(caphillLiT);
        break;
      }

    }
  },
};
console.log (CapitolHill);
CapitolHill.render();

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
  render: function () {
    for(var i = 0; i <= this.hours.length; i++) {
      if (i < this.hours.length) {
        var randomCust = this.randomCust();
        var cookieCount = this.cookieCount();
        this.cookiesDay += cookieCount;
        this.cookiesHr.push(randomCust);
        var alkiUl = document.getElementById('alkiList');
        var alkiLi = document.createElement('li');
        var alkiContent = document.createTextNode(this.hours[i] + ': ' + cookieCount + ' cookies');
        alkiLi.appendChild(alkiContent);
        alkiUl.appendChild(alkiLi);
      } else
      {
        var alkiUlT = document.getElementById('alkiTotal');
        var alkiLiT = document.createElement('li');
        var alkiContentT = document.createTextNode('Total: ' + this.cookiesDay);
        alkiLiT.appendChild(alkiContentT);
        alkiUlT.appendChild(alkiLiT);
        break;
      }

    }
  },
};
console.log (Alki);
Alki.render();
