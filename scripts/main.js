function initClock() {

	
	renderClock();


	setInterval(renderClock, 1000);
}


function renderClock() {
	var clock = document.getElementById('clock');
	var time  = getCurrentTime(new Date());
	var sep   = flashSeperator(time['seconds']);

	clock.innerHTML = time['day'] + "-" + time['month'] + " " + time['hours'] + sep +  time['minutes'];
}


function flashSeperator(seconds) {
	if(seconds % 2 === 1)  {
		return "<span class='trans'>:</span>";
	} else {
		return "<span>:</span>" ;
	}
}


function getCurrentTime(date) {
	var time = [];

	time['day'] = date.getDate(),
	time['month'] = (date.getMonth()+1),
	time['seconds'] = date.getSeconds(),
	time['minutes'] = date.getMinutes(),
	time['hours']   = date.getHours();


	if (time['hours'] < 10) {
		time['hours'] = '0' + time['hours'];
	}

	if (time['minutes'] < 10) {
		time['minutes'] = '0' + time['minutes'];
	}

	if (time['day'] < 10) {
		time['day'] = '0' + time['day'];
	}

	if (time['month'] < 10) {
		time['month'] = '0' + time['month'];
	}

	return time;
}

initClock();

var button = document.getElementById("animate2")
var button2 = document.getElementById("animate")

button.onclick = function(){
	var dayMode = document.getElementById("bcloud01").className += "cloud2 bcloud01";
	var dayMode = document.getElementById("bcloud02").className += "cloud2 bcloud02";
	var dayMode = document.getElementById("bcloud03").className += "cloud2 bcloud03";
	var dayMode = document.getElementById("sun").innerHTML += '<img class="sun" src="styles/images/sun.png" class="moon"></img>';

	var dayMode = document.getElementById("fcloud01").className -= "cloud2 fcloud01";
	var dayMode = document.getElementById("fcloud02").className -= "cloud2 fcloud02";
	var dayMode = document.getElementById("fcloud03").className -= "cloud2 fcloud03";
	var dayMode = document.getElementById("moon").innerHTML -= '<img src="styles/images/moon.png" class="moon"></img>';
}

button2.onclick = function(){
	var dayMode = document.getElementById("bcloud01").className -= "cloud2 bcloud01";
	var dayMode = document.getElementById("bcloud02").className -= "cloud2 bcloud02";
	var dayMode = document.getElementById("bcloud03").className -= "cloud2 bcloud03";
	var dayMode = document.getElementById("sun").innerHTML -= '<img class="sun" src="styles/images/sun.png" class="moon"></img>';

	var dayMode = document.getElementById("fcloud01").className += "cloud2 fcloud01";
	var dayMode = document.getElementById("fcloud02").className += "cloud2 fcloud02";
	var dayMode = document.getElementById("fcloud03").className += "cloud2 fcloud03";
	var dayMode = document.getElementById("moon").innerHTML += '<img src="styles/images/moon.png" class="moon"></img>';
}
