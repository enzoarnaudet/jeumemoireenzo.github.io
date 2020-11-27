window.onload = () => {
	'use strict';

	// test si le navigateur du client gère le serviceWorker
	if ('serviceWorker' in navigator) {
	navigator.serviceWorker
			 .register('./sw.js'); // le cas échant on enregistre notre gestionnaire
	}
}


var audio = new Audio('assets/sounds/coink.mp3');

			function playSound(){
    		audio.play();
			}

var audio2 = new Audio('assets/sounds/bravo.mp3');
			function playSound2(){
			audio2.play();
			}
			function masquerlediv(){
var container_Elt = document.getElementById('moncercle2');
	container_Elt.classList.add("masquer-le-div");
	container_Elt.classList.remove("moncercle2");
  }

  			function masquerlediv2(){
var container_Elt = document.getElementById('moncercle4');
	container_Elt.classList.add("masquer-le-div");
	container_Elt.classList.remove("moncercle4");
  }

  			function masquerlediv3(){
var container_Elt = document.getElementById('moncercle6');
	container_Elt.classList.add("masquer-le-div");
	container_Elt.classList.remove("moncercle6");
  }


 			 const moncercle = document.getElementById('moncercle')
  					moncercle.onclick = () => {
	  				//permet de changer la couleur initiale en rouge car c'est une mauvaise réponse
					moncercle.style.backgroundColor= "red"
						//joue le son de la var audio (coink)
						playSound()
							//permet de remettre la coueleur initale après le click
							setTimeout(() =>{
							moncercle.style.backgroundColor="purple"},500)
  							}

  			 const moncercle3 = document.getElementById('moncercle3')
 				   moncercle3.onclick = () => {
	             //permet de changer la couleur initiale en rouge car c'est une mauvaise réponse
				   moncercle3.style.backgroundColor= "red"
						//joue le son de la var audio (coink)
						playSound()
							//permet de remettre la coueleur initale après le click
							setTimeout(() =>{
							moncercle3.style.backgroundColor="yellow"},500)
  							}

  			 const moncercle5 = document.getElementById('moncercle5')
  				   moncercle5.onclick = () => {
	               //permet de changer la couleur initiale en rouge car c'est une mauvaise réponse
				   moncercle5.style.backgroundColor= "red"
				   //joue le son de la var audio (coink)
						playSound()
						//permet de remettre la coueleur initale après le click
						setTimeout(() =>{
						moncercle5.style.backgroundColor="orange"},500)
						  }
						  
						  const moncercle2 = document.getElementById('moncercle2')
						  moncercle2.onclick = () => {
							//joue le son de la var audio (bravo)
							playSound2()
								masquerlediv()
								  }
				
								  const moncercle4 = document.getElementById('moncercle4')
						  moncercle4.onclick = () => {
							//joue le son de la var audio (bravo)
							playSound2()
								masquerlediv2()
								alert("tu as gagné");
								  }

								  setTimeout(() =>{
									moncercle2.style.backgroundColor="white"},1000)
									setTimeout(() =>{
										moncercle2.style.backgroundColor="red"},1500)


										setTimeout(() =>{
											moncercle4.style.backgroundColor="white"},2500)
											setTimeout(() =>{
												moncercle4.style.backgroundColor="blue"},3000)
									  


												
													
												  