// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start();
require("turbolinks").start();
require("@rails/activestorage").start();
require("channels");

require("trix");
require("@rails/actiontext");

import "bootstrap";
import "css/site";

// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
window.emailValidator = function(id)
{
	document.getElementById("submit-button").disabled = true;
	var input_text = document.getElementById(id).value;
	console.log(input_text);
	if (input_text && !(/@getmainstreet.com\s*$/.test(input_text)))
	{
		document.getElementById(id).style.borderColor = "red";
		document.getElementById("emailError").innerHTML = "Must be a getmainstreet.com account only";
		return false;
	}
	else
	{
		document.getElementById("submit-button").disabled = false;
		document.getElementById("emailError").innerHTML = "";
		document.getElementById(id).style.borderColor = "green";
		return true;
	}

}