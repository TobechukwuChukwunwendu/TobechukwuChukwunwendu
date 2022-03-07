/*
* @title generator.js for random_number_generator
* @description This software provides the styling for the random number generator
* Copyright (c) 2022 Tobechukwu Chukwunwendu
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
*
* @contact https://github.com/Tobechukwu Chukwunwendu
*/
 "use strict" //strict mode

function clock(){
	//Function to display time
	let time = new Date();
	let time_call = time.getHours() + ":" + time.getMinutes();
	form.clock.value = time_call;
}

clock();

 function gen2(){
 	//Function to reload page and clear content
 	let timeout = setTimeout(function(){location.reload()},20000);
 }

function gen(){
	/*Function to generate random numbers 
	* and also implement the reload page and clear content
	* function above
	*/

	document.querySelector('.first').innerHTML = Math.floor(Math.random()*50);
	document.querySelector('.second').innerHTML = Math.floor(Math.random()*50);
	document.querySelector('.third').innerHTML = Math.floor(Math.random()*50);
	document.querySelector('.fourth').innerHTML = Math.floor(Math.random()*50);
	document.querySelector('.fifth').innerHTML = Math.floor(Math.random()*50);

	form.display.value = "Numbers Generated";

	document.querySelector('marquee').innerHTML = "Numbers will clear in 20 seconds";
	gen2();
}