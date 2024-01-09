var clickpoint = 0; 
function onClick() { 
    clickpoint += 1;
    document.getElementById("clickcount").innerHTML = "points: " + clickpoint;
    if (clickpoint >= 1 ) { 
			firsttime.innerHTML = "Achievement get: Easy task";
		}	
	if (clickpoint >= 10 ) { 
            actuallytrying.innerHTML = "Achievement get: Felt like trying"; 
        }
        if (clickpoint >= 50) {
            youriq.innerHTML = "Achievement get: Halfway there";
        }
        if (clickpoint >= 100) { 
            britain.innerHTML = "Achievement get: Pound";
        } 
        if (clickpoint >= 250) { 
            quarter.innerHTML = "Achievement get: A Quarter Way There"; 
        }
        if (clickpoint >= 1000) {
            begindestroy.innerHTML = "Achievement get: Typical 4 years old pocket money";
        }
        if (clickpoint >= 5000) {
            mousedestroyer.innerHTML = "Achievement get: Your pocket money at 6 years old";
        }
    }