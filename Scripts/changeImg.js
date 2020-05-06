<script language="javascript">
    function changeImage() {
		<!-- local: var path = location.href.slice(0,-10); -->
		<!-- webhost: var path = location.href; -->
		var path = location.href.slice(0,-10);
		console.log(path+document.getElementById("imgClickAndChange").src);
        if (document.getElementById("imgClickAndChange").src == path+"roblox_head.png") 
        {
			console.log("OOF");
            document.getElementById("imgClickAndChange").src = "lakasse_head.png";
			document.getElementById("imgClickAndChange").style = "height: 500px; width: 1000px";
			document.getElementById("oof_sound").play();
        }
		else
		{
		console.log("arrete stp")
		}
    }
	</script>