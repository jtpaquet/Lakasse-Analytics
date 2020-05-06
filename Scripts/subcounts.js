<script src="odometer.js"></script>
<script type="text/javascript" src="jquery-3.1.1.min.js"> </script>

import * as jq3 from 'jquery-3.1.1.min.js';
import * as odometer from 'odometer.js';


<script type="text/javascript">
	
	$(document).ready( function() {

		var key = "AIzaSyDU7VAS5CR7Et9igBibH5GizTn7CiFyJJc";

		var chanNames = ["LaKasse", "La Rotie du Dechet", "Roulo", "Pierre-Poom", "Lakasse2", "Pewdiepie", "T-Series"];
		var chanIds = ["UCKVY24k7S_JJlLJt-NAoFQQ", "UCqmrfCRbn0tOlxeeT1i1kgA", "UC9gfNh5MiOQhLvokywh-TdQ", "UCq2qgqXAVSWBVrP4rSrrCKg", "UCgs7BG_0c4ddW0SOav_n10w", "UC-lHJZR3Gqxm24_Vd_AJ5Yw", "UCq-Fj5jknLsUf-MWSy4_brA"];
		var odometers = ["LaKasseOdo", "LaRotieduDechetOdo", "RouloOdo", "Pierre-PoomOdo", "Lakasse2Odo", "PewdiepieOdo", "T-SeriesOdo"];

		for (i = 0; i < chanNames.length; i++) {
			loadChannel(chanIds[i], odometers[i]);
		}
		loadSubGap();

		function loadChannel(name, odo) {
			chanName = name;
			chanOdo = odo;
			var url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+name+"&key="+key;
			$.getJSON(url, function(data) {
				$('#'+odo).html(data.items[0].statistics.subscriberCount);
			});
		}
		
		setInterval( function () {
			for (i = 0; i < chanNames.length; i++) {
			loadChannel(chanIds[i], odometers[i]);
			loadSubGap();
		};
		}, 10000);

		function loadSubGap() {
			pewds_url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+chanIds[5]+"&key="+key;
			tseries_url = "https://www.googleapis.com/youtube/v3/channels?part=statistics&id="+chanIds[6]+"&key="+key;


			function get_subcount(chan_url) {
				var subcount;
				$.ajax({
					url:chan_url,
					datatype:'json',
					async:false,
					success: function(data) {
					subcount = data.items[0].statistics.subscriberCount;
					}
				});
				return subcount
			}

			pewds_subcount = get_subcount(pewds_url);
			tseries_subcount = get_subcount(tseries_url);
			let subgap = pewds_subcount - tseries_subcount;

			$("#SubGapOdo").html(subgap.toString());
		}
			
	});
	
	</script>