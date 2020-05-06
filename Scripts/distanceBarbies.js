
	<script language="javascript">
	function deg2rad(angle)
	{
	  var pi = Math.PI;
	  return angle * (pi/180);
	}

	function distance(p1,p2) //p_i = (latitude, longitude) = (phi, lambda)
	{
		var r = 6371; // [km]
		var lat1 = deg2rad(p1[0]);
		var lat2 = deg2rad(p2[0]);
		var long1 = deg2rad(p1[1]);
		var long2 = deg2rad(p2[1]);
		
		//var theta = Math.acos(Math.sin(lat1)*Math.sin(lat2)+Math.cos(lat1)*Math.cos(lat2)*Math.cos(long2-long1));
		var ds2= Math.pow(r, 2)*(Math.pow((lat1-lat2), 2) + Math.pow(Math.cos(lat1)*(long1-long2),2)); // [km]
		return Math.sqrt(ds2);
		//console.log(theta);
		//return r*theta; // [km]
	}
	
	var adresse_barbies = ["330 Boul. Bouvier, Québec, Qc", "580 Boul. St-Martin, Laval, Qc", "1175 Chemin du Tremblay, Longueuil, Qc", "7850 Boul. Taschereau, Brossard, Qc", "260 Montée Masson, Mascouche"]
	var coord_barbies = [[46.841485, -71.271057], [45.575422, -73.713267], [45.536869, -73.465347], [45.452896, -73.467350], [45.726860, -73.618713]];
	navigator.geolocation.getCurrentPosition(
	function distanceBarbies(position) {
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;
			var pos = [latitude, longitude];
			console.log(pos);
			var dists = [];
			for (i = 0; i < coord_barbies.length; i++) {
				dists.push(distance(pos, coord_barbies[i]));
			}
			var idx = dists.indexOf(Math.max.apply(Math, dists))-1;
			document.getElementById('Barbies_distance').innerHTML = "Le Barbies Resto Bar & Grill le plus proche est à " + parseFloat(dists[idx]).toFixed(2) + " km.";
			document.getElementById('Barbies_adresse').innerHTML = adresse_barbies[idx];
			
			return [dists[idx], adresse_barbies[idx]]; // [distance, adresse] du barbies le plus proche
		}
	);
	</script>