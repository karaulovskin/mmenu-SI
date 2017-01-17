$(document).ready(function(){


		// Открытие меню
	// (function(){

	// 	$('.nav__trigger-link').click(function(e){
	// 		// e.preventDefault();
	// 		$('.nav__list').slideToggle();
	// 	});

	// }());



	// MMENU

	(function(){

		if($(window).width() <= '992'){

			$("#mmenu").mmenu({

				"counters": true,

	    		"offCanvas": {
		            "position": "left"
		        },

		        "extensions": [
		            "theme-dark",
		            "border-fule",
		            "pagedim-black"
		        ]

		    });
	    } 

	}());

});

