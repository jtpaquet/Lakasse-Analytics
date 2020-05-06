

<script type="text/javascript">
$(document).ready( function() {


	Date.daysBetween = function( date1, date2 ) {
		//Get 1 day in milliseconds
		var one_day=1000*60*60*24;

		// Convert both dates to milliseconds
		var date1_ms = date1.getTime();
		var date2_ms = date2.getTime();

		// Calculate the difference in milliseconds
		var difference_ms = date2_ms - date1_ms;
			
		// Convert back to days and return
		return difference_ms/one_day; 
	}


	var departLacasse  = new Date(2018, 7, 26); //Month is 0-11 in JavaScript
	var departRoulo  = new Date(2018, 7, 15); //Month is 0-11 in JavaScript
	var retourLacasse = new Date(2019, 5, 17);
	var retourRoulo = new Date(2018, 11, 19);

	function updatePourcentage() {

		var currentTime = new Date();
		var totalLacasse = Date.daysBetween(retourLacasse, departLacasse);
		var faitLacasse = Date.daysBetween(currentTime, departLacasse);
		var pourcentageLacasse = faitLacasse/totalLacasse * 100;
		var pourcentageRoulo = 100;

		if (pourcentageLacasse < 0) {
		  pourcentageLacasse = 100;
		}

		var LacasseBar = document.getElementById("LacasseBar");
		LacasseBar.style.width = pourcentageLacasse.toString() + '%';
		LacasseBar.innerHTML = pourcentageLacasse.toFixed(7) + '%';

		var RouloBar = document.getElementById("RouloBar");
		RouloBar.style.width = pourcentageRoulo.toString() + '%';
		RouloBar.innerHTML = pourcentageRoulo.toFixed(7) + '%';
	}

	setInterval(function() {updatePourcentage(); }, 10);

	updatePourcentage();
});

</script>