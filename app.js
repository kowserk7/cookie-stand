var Pike = {
  min: 23,
  max: 65,
  avg: 6.3,
  getRandom: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
  hours : ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM','5 PM', '6 PM', '7 PM', '8 PM'],
  avgCookieHr: function() {
    for ( var i = 0; i < this.hours.length; i++){
      console.log(this.hours[i]);
    }
  }
};
var SeaTac = {
  min: 3,
  max: 24,
  avg: 1.2,
  getRandom: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
};
var SeattleCenter = {
  min: 11,
  max: 38,
  avg: 3.7,
  getRandom: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
};
var CapitolHill = {
  min: 20,
  max: 38,
  avg: 2.3,
  getRandom: function() {
    var customer =  Math.random() * (this.max - this.min) + this.min;
    console.log(customer);
  },
};
var Alki = {
  min: 2,
  max: 16,
  avg: 4.6,
  getRandom: function() {
    return Math.random() * (this.max - this.min) + this.min;
  },
};
