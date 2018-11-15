
function onload(){

	function callback(current){
	var date = new Date();
	var minutes = date.getMinutes();
	var hour = date.getHours();
	// console.log(minutes);
	console.log(hours.options[hours.selectedIndex].text,hour,mins.options[mins.selectedIndex].text,minutes);


		window.requestAnimationFrame(callback);	

		if (mySource.src !=stations.options[stations.selectedIndex].value){
			if (hours.options[hours.selectedIndex].text==hour){
				if (mins.options[mins.selectedIndex].text==minutes){
					loadUrl(stations.options[stations.selectedIndex].value);
					console.log(stations.options[stations.selectedIndex].value);
				}

			}

	
		}

	}
	
	window.requestAnimationFrame(callback);

	var library = [
	"http://14653.live.streamtheworld.com/883JIA.mp3?_=1",
	"https://playerservices.streamtheworld.com/api/livestream-redirect/987FMAAC.aac",
	"https://playerservices.streamtheworld.com/api/livestream-redirect/YES933AAC.aac",
	"https://playerservices.streamtheworld.com/api/livestream-redirect/LOVE972FMAAC.aac",
	"https://playerservices.streamtheworld.com/api/livestream-redirect/CAPITAL958FMAAC.aac",
	"https://playerservices.streamtheworld.com/api/livestream-redirect/CLASS95AAC.aac",
	"https://playerservices.streamtheworld.com/api/livestream-redirect/GOLD905AAC.aac",
	"https://playerservices.streamtheworld.com/api/livestream-redirect/938NOWAAC.aac",
	"https://playerservices.streamtheworld.com/api/livestream-redirect/SYMPHONY924AAC.aac",
	"https://playerservices.streamtheworld.com/api/livestream-redirect/WARNA942FMAAC.aac",
	"https://playerservices.streamtheworld.com/api/livestream-redirect/RIA897FMAAC.aac",
	"https://playerservices.streamtheworld.com/api/livestream-redirect/OLI968FMAAC.aac"]

	var player = document.getElementById("myAudio");
	var mySource= document.getElementById("mySource");
	var hours = document.getElementById("hours");
	var mins = document.getElementById("mins");
	var stations =document.getElementById("stations");
	var displays= document.getElementById("displays");
	var confirm =document.getElementById("confirm");
	
	
	function loadUrl(url){
		mySource.src=url;
		player.load();
		player.play();

	}

	for (var i = 0; i<24; i++){
		var hour = document.createElement("option");
		 hour.value=i;
		 hour.text=i.toString().padStart(2, '0');
		 hours.appendChild(hour);

	}
	

	for (var i = 0; i<60; i++){
		var min = document.createElement("option");
		 min.value=i;
		 min.text=i.toString().padStart(2, '0');
		 mins.appendChild(min);
	}



	var nom = 0

	confirm.addEventListener("click",draw);
	function draw(){
		var choice = document.createElement("span");
		choice.id= "A" + nom
		nom +=1

		displays.appendChild(choice)
		choice.innerText=stations.options[stations.selectedIndex].text;
		// console.log (stations.selectedIndex);

		displays.appendChild(choice);
		choice.innerText+= "                " + hours.options[hours.selectedIndex].text;
		
		displays.appendChild(choice);
		choice.innerText+= "           " + mins.options[mins.selectedIndex].text;
	

		function deleted(){
			displays.removeChild(choice);
		}
		var deleteButton =document.createElement("button");
		deleteButton.innerText="X";
		deleteButton.addEventListener("click", deleted);
		choice.appendChild(deleteButton);

		// loadUrl(stations.options[stations.selectedIndex].value);

	}
	








}

window.addEventListener('load',onload);

