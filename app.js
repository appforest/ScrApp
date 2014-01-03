// Calling the actual program
var scrap = require('scrap');


// First you need to create an object specifying the properties that are shown in the next couple examples for every item price you want to check:

legoMarvel = {
	url:"http://www.amazon.com/LEGO-Marvel-Xbox-360/dp/B00B98HF1O/ref=sr_1_1?ie=UTF8&qid=1386695553&sr=8-1&keywords=marvel+lego", // The URL of the item (Amazon.com products only for now)
	containingElem: "#actualPriceContent", // The external container of the price data - *You don't need to change it*
	targetElem: ".priceLarge", // The container of the price data - *You don't need to change it*
	targetEmail: "YOUR_EMAIL@ADDRESS.com", // The email address where you'll be receiving the notifications
	interval: 10000, // How often it will be checking for a price change (in milliseconds)
	sentinelEmail: "ENTER_A_GMAIL_ACCOUNT@gmail.com", // Email account that will send the notifications (SMTP like gmail)
	sentinelPass: "ENTER_PASSWORD" // Account's password
}

xboxController = {
	url:"http://www.amazon.com/Xbox-360-Wireless-Controller-Glossy-Black/dp/B003ZSP0WW/ref=sr_1_4?ie=UTF8&qid=1388332302&sr=8-4&keywords=control+360", // The URL of the item (Amazon.com products only for now)
	containingElem: "#actualPriceContent", // The external container of the price data - *You don't need to change it*
	targetElem: ".priceLarge", // The container of the price data - *You don't need to change it*
	targetEmail: "YOUR_EMAIL@ADDRESS.com", // The email address where you'll be receiving the notifications
	interval: 10000, // How often it will be checking for a price change (in milliseconds)
	sentinelEmail: "ENTER_A_GMAIL_ACCOUNT@gmail.com", // Email account that will send the notifications (SMTP like gmail)
	sentinelPass: "ENTER_PASSWORD" // Account's password
}

//Finally you just need to 'call' the object as a parameter of the scrApp.findItem function (you have to do it for every object you want to check:
scrApp.findItem(legoMarvel);
scrApp.findItem(xboxController);

