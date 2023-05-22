/* LAB 8.2 - STOP TIME */


window.onload = pageReady;

function pageReady() {

	var startBtn = document.getElementById("btnStart");
	var stopBtn = document.getElementById("btnStop");
	var megH = document.getElementById("hoursOut");
	var megM = document.getElementById("minsOut");
	var megS = document.getElementById("secsOut");



	var tickTock = null;


	function fixDigit(timeIn){
		if(timeIn < 10){
			timeIn = "0" + timeIn;
	
		}
		return timeIn;

	}


	// create function that display the time
	function displayTime() {

		var timeNow = new Date();
		var hh = timeNow.getHours();
		var mm = timeNow.getMinutes();
		var ss = timeNow.getSeconds();


		mm = fixDigit(mm);
		ss = fixDigit(ss);

		megH.innerHTML = hh + ":";
		megM.innerHTML = mm + ":";
		megS.innerHTML = ss ;


	}
	//displayTime();

	function startClock() {
		tickTock = setInterval(displayTime, 1000);

	}

	function stopClock() {
		clearInterval(tickTock);

	}


	startBtn.onclick = startClock;
	stopBtn.onclick = stopClock;

}















































//create page load listener
// window.onload = pageReady;
// //create page load function
// function pageReady(){


// 	//create variables for required HTML elements
// 	var startbtn = document.getElementById("btnStart");
// 	var stopbtn = document.getElementById("btnStop");

// 	var hoursOut = document.getElementById("hoursOut");
// 	var minsOut = document.getElementById("minsOut");
// 	var secOut = document.getElementById("secsOut");
// 	//create time variable so all functions have access to it
// 	var time = new Date();
// 	var date = time.getTime();
// 	// var hours = new Date();
// 	// var myHours =  hours.getHours();
// 	// var minutes = new Date();
// 	// var myMin =  minutes.getMinutes();
// 	// var seconds = new Date();
// 	// var mySec =  seconds.getSeconds();





// 	//CREATE FUNCTION THAT DISPLAYS THE TIME

// function showInterval(){
// 	date += 1000;
// 	// tickTock = new Date(1514782800000);
// 	//console.log(date);
// 	var hr = new Date(date);
// 	var myHours =  hr.getHours();
// 	var myMin =  hr.getMinutes();
// 	var mySec =  hr.getSeconds();
// 	hoursOut.innerHTML =   myHours;
// 	minsOut.innerHTML =  myMin ;
// 	secOut.innerHTML = mySec;
// }




// 	//CREATE FUNCTION TO START THE CLOCK.
// 	var tickTock ;
// 	function dstartClock(){

// 		tickTock = setInterval(showInterval, 1000);
// 	}

// 	//CREATE FUNCTION TO STOP THE CLOCK
// 	function stopClock(){
// 		// clearTimeout(timeFunction);
// 		clearInterval(tickTock);

// 	}
// 	startbtn.onclick = dstartClock;
// 	stopbtn.onclick = stopClock;
// 	// SET EVENT LISTENERS
// }