'use strict';

function getList() {
  var Pike = {
    min: 23,
    max: 65,
    avg: 6.3,
    cookiesHr: [],
    cookiesDay: 0,
    id:'pike',
    randomCust: function() {
      var randomNumber = Math.round(Math.random() * (this.max - this.min)) + this.min;
      return randomNumber;
    },
    cookieCount: function() {
      var cookieCount = (Math.round(this.avg * this.randomCust()));
      return cookieCount;
    },
    display: function () {
      for(var i = 0; i < 14; i++){
        var randomCookie = this.cookieCount();
        this.cookiesHr.push(randomCookie);
        this.cookiesDay += randomCookie;
      }
    },
  };
  var SeaTac = {
    min: 3,
    max: 24,
    avg: 1.2,
    cookiesHr: [],
    cookiesDay: 0,
    id:'seatac',
    randomCust: function() {
      var randomNumber = Math.round(Math.random() * (this.max - this.min)) + this.min;
      return randomNumber;
    },
    cookieCount: function() {
      var cookieCount = (Math.round(this.avg * this.randomCust()));
      return cookieCount;
    },
    display: function () {
      for(var i = 0; i < 14; i++){
        var randomCookie = this.cookieCount();
        this.cookiesHr.push(randomCookie);
        this.cookiesDay += randomCookie;
      }
    },
  };
  var SeattleCenter = {
    min: 11,
    max: 38,
    avg: 3.7,
    cookiesHr: [],
    cookiesDay: 0,
    id:'seattlecenter',
    randomCust: function() {
      var randomNumber = Math.round(Math.random() * (this.max - this.min)) + this.min;
      return randomNumber;
    },
    cookieCount: function() {
      var cookieCount = (Math.round(this.avg * this.randomCust()));
      return cookieCount;
    },
    display: function () {
      for(var i = 0; i < 14; i++){
        var randomCookie = this.cookieCount();
        this.cookiesHr.push(randomCookie);
        this.cookiesDay += randomCookie;
      }
    },
  };
  var CapitolHill = {
    min: 20,
    max: 38,
    avg: 2.3,
    cookiesHr: [],
    cookiesDay: 0,
    id:'capitolhill',
    randomCust: function() {
      var randomNumber = Math.round(Math.random() * (this.max - this.min)) + this.min;
      return randomNumber;
    },
    cookieCount: function() {
      var cookieCount = (Math.round(this.avg * this.randomCust()));
      return cookieCount;
    },
    display: function () {
      for(var i = 0; i < 14; i++){
        var randomCookie = this.cookieCount();
        this.cookiesHr.push(randomCookie);
        this.cookiesDay += randomCookie;
      }
    },
  };
  var Alki = {
    min: 2,
    max: 16,
    avg: 4.6,
    cookiesHr: [],
    cookiesDay: 0,
    id:'alki',
    randomCust: function() {
      var randomNumber = Math.round(Math.random() * (this.max - this.min)) + this.min;
      return randomNumber;
    },
    cookieCount: function() {
      var cookieCount = (Math.round(this.avg * this.randomCust()));
      return cookieCount;
    },
    display: function () {
      for(var i = 0; i < 14; i++){
        var randomCookie = this.cookieCount();
        this.cookiesHr.push(randomCookie);
        this.cookiesDay += randomCookie;
      }
    },
  };
  return [Pike, SeaTac, CapitolHill, SeattleCenter, Alki];
}


console.log('store list', getList());

function rendorStore() {
  var rendorStore = getList();
  rendorStore.forEach(function(store){
    console.log('display', store.display());
    store.display();
    var uList = document.getElementById(store.id);
    var listItems = uList.getElementsByTagName('li');
    for (var i = 0; i < listItems.length - 1; i++) {
      listItems[i].innerText += ' '.concat(store.cookiesHr[i]).concat(' cookies');
    }
    listItems[listItems.length - 1].innerText += ' '.concat(store.cookiesDay).concat(' cookies');
    console.log(store.id + ' cookies per day:', store.cookiesDay);
  });
}
