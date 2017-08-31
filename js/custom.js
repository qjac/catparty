$(document).ready(function(){

    $("#scroll").endlessRiver({
 
  // scrolling speed in ms
  speed: 50,
 
  // pause on hover
  pause: true,
  
  // shows play / pause buttons
  buttons: false
 
	}); //end scroll plug in
if ($('#contactForm').length) {
	$('#contactForm input:text, #contactForm textarea').first().focus();
	$('#contactForm').validate({
	   rules: {
	     email: {
	        required: true,
	        email: true
	     },
	   }, //end rules
	   messages: {
	      name: {
	         required: "Please tell us your name.",
	       },
	       email: {
	         required: "Please supply an e-mail address.",
	         email: "This is not a valid email address."
	       },
	       mailinglist: {
	         required: "Please choose an option.",
	       },
	   },
	   errorPlacement: function(error, element) { 
	       if ( element.is(":radio") || element.is(":checkbox")) {
	          error.appendTo( element.parent());  
	          /*
				CN - appendTo() adds HTML as the last child element of the selected element.
				Here the element.parent() is the div where the radios and checkboxes are nested,
				so the error is addes just before the </div>.
	          */
	        } else {
	          error.insertAfter(element);
	        } 
	    } 

	  }); // end validate 
	}
}); //end ready

