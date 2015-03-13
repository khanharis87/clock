
var clock = new Clock('clock');
var clock2 = new Clock('clock2', -60 ,"UTC");

function Clock(id,offset, label){
	offset = offset || 0;
	label = label || "";
	var d = new Date();
	this.offset= (offset + d.getTimezoneOffset())*60*100;

	this.updateClock= function(){
		var date = new Date();
			date = new Date(this.offset + date.getTime());
		var clock = document.getElementById(id);
		clock.innerHTML = this.formatDigits(date.getHours()) + ":" + this.formatDigits(date.getMinutes()) + ":" + this.formatDigits(date.getSeconds()) + " "+ label;
	};


	this.formatDigits = function(val){
		if(val<10){
			val = "0" + val;
		}
		return val;
	};

	var that = this;
	setInterval(function(){that.updateClock();}, 1000);

	this.updateClock();
}
