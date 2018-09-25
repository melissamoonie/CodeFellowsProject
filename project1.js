alert("You're an American with a chronic illness. You're unable to work and when you lost your job, your decent health insurance went with it. This game of Monopoly simulates a year in your life. Keep an eye on your bank account.")

var currentposition = 0; //variable that keeps track of position in multiple arrays, this is dependent on dice roll results
//dice rolls add together to move the player around the board

// dice code adapted from https://codepen.io/Pyremell/pen/eZGGXX
var dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
}



//Prints dice roll to the page

function printNumber(number) {
  var placeholder = document.getElementById('dice');
  placeholder.src = dice_images[number];
  // console.log("changing image to " + dice_images[number]);
  // placeholder.innerHTML = number;
}

function printNumber2(number) {
  var placeholder2 = document.getElementById('placeholder2');
  placeholder2.innerHTML = number;
}

var button = document.getElementById('button');

button.onclick = function() {
  var result = dice.roll();

//change image and numerical value
  document.getElementById("slideshow").innerHTML = slideshow_descriptions[currentposition];
  console.log(newvalue);
		document.getElementById("insert").href = "$" + value;
//when end of array is reached, start again (simulates going in an endless loop around the board)
 currentposition= result +currentposition;
 if(currentposition >= 40){ //40 game pieces
 	currentposition= currentposition-40;
 	alert("Uh-oh. Looks like your bank balance is negative. Turns out, there's no way to get ahead in this game.")
 	// newvalue=50000-newvalue;
   // document.getElementById("slideshow").innerHTML = slideshow_descriptions2[currentposition];
 }
  document.getElementById("slideshow1").src=slideshow_images[currentposition];
    document.getElementById("insert").src= "$ " + value[currentposition];


    // I need to find a better way to do this
if(currentposition ==1){
 document.getElementById('body').style.backgroundImage="url(img/newboard22.jpg)"; 
}
if(currentposition ==2){
 document.getElementById('body').style.backgroundImage="url(img/newboard23.jpg)"; 
}
if(currentposition ==3){
 document.getElementById('body').style.backgroundImage="url(img/newboard24.jpg)"; 
}
if(currentposition ==4){
 document.getElementById('body').style.backgroundImage="url(img/newboard25.jpg)"; 
}
if(currentposition ==5){
 document.getElementById('body').style.backgroundImage="url(img/newboard26.jpg)"; 
}

         if(currentposition ==6){
 document.getElementById('body').style.backgroundImage="url(img/board1.jpg)"; 
}

     if(currentposition ==7){
 document.getElementById('body').style.backgroundImage="url(img/board2.jpg)"; 
}


         if(currentposition ==8){
 document.getElementById('body').style.backgroundImage="url(img/board3.jpg)"; 
}

         if(currentposition ==9){
 document.getElementById('body').style.backgroundImage="url(img/board4.jpg)"; 
}

              if(currentposition ==10){
 document.getElementById('body').style.backgroundImage="url(img/board5.jpg)"; 
}

         if(currentposition ==11){
 document.getElementById('body').style.backgroundImage="url(img/board6.jpg)"; 
}

     if(currentposition ==12){
 document.getElementById('body').style.backgroundImage="url(img/board7.jpg)"; 
}

      if(currentposition ==13){
 document.getElementById('body').style.backgroundImage="url(img/board8.jpg)"; 
}

    if(currentposition ==14){
 document.getElementById('body').style.backgroundImage="url(img/boad9.jpg)"; 
}
     if(currentposition ==15){
 document.getElementById('body').style.backgroundImage="url(img/board10.jpg)"; 
}
     if(currentposition ==16){
 document.getElementById('body').style.backgroundImage="url(img/board11.jpg)"; 
}
     if(currentposition ==17){
 document.getElementById('body').style.backgroundImage="url(img/board12.jpg)"; 
}
     if(currentposition ==18){
 document.getElementById('body').style.backgroundImage="url(img/board13.jpg)"; 
}
     if(currentposition ==19){
 document.getElementById('body').style.backgroundImage="url(img/board14.jpg)"; 
}

     if(currentposition ==20){
 document.getElementById('body').style.backgroundImage="url(img/board15.jpg)"; 
}
     if(currentposition ==21){
 document.getElementById('body').style.backgroundImage="url(img/board16.jpg)"; 
}
     if(currentposition ==22){
 document.getElementById('body').style.backgroundImage="url(img/board17.jpg)"; 
}

   if(currentposition ==23){
 document.getElementById('body').style.backgroundImage="url(img/newboard3.jpg)"; 
}
   if(currentposition ==24){
 document.getElementById('body').style.backgroundImage="url(img/newboard4.jpg)"; 
}

if(currentposition ==25){
 document.getElementById('body').style.backgroundImage="url(img/newboard5.jpg)"; 
}
if(currentposition ==26){
 document.getElementById('body').style.backgroundImage="url(img/newboard6.jpg)"; 
}

if(currentposition ==27){
 document.getElementById('body').style.backgroundImage="url(img/newboard7.jpg)"; 
}
if(currentposition ==28){
 document.getElementById('body').style.backgroundImage="url(img/newboard8.jpg)"; 
}

if(currentposition ==29){
 document.getElementById('body').style.backgroundImage="url(img/newboard9.jpg)"; 
}

if(currentposition ==30){
 document.getElementById('body').style.backgroundImage="url(img/newboard10.jpg)"; 
}

if(currentposition ==31){
 document.getElementById('body').style.backgroundImage="url(img/newboard12.jpg)"; 
}

if(currentposition ==32){
 document.getElementById('body').style.backgroundImage="url(img/newboard13.jpg)"; 
}
if(currentposition ==33){
 document.getElementById('body').style.backgroundImage="url(img/newboard14.jpg)"; 
}
if(currentposition ==34){
 document.getElementById('body').style.backgroundImage="url(img/newboard15.jpg)"; 
}
if(currentposition ==35){
 document.getElementById('body').style.backgroundImage="url(img/newboard16.jpg)"; 
}
if(currentposition ==36){
 document.getElementById('body').style.backgroundImage="url(img/newboard17.jpg)"; 
}
if(currentposition ==37){
 document.getElementById('body').style.backgroundImage="url(img/newboard18.jpg)"; 
}
if(currentposition ==38){
 document.getElementById('body').style.backgroundImage="url(img/newboard19.jpg)"; 
}
if(currentposition ==39){
 document.getElementById('body').style.backgroundImage="url(img/newboard20.jpg)"; 
}
if(currentposition ==40){
 document.getElementById('body').style.backgroundImage="url(img/newboard21.jpg)"; 
}



console.log(currentposition);
  // document.getElementById('body').style.backgroundImage.src="url(background_images[currentposition]"; 
 // +" background_images[currentposition])";
 console.log(background_images)
  printNumber(result-1);
  printNumber2("You rolled a " + result);
};

// selecting a random image, adapted from Javascript slideshow lesson from Ian Hale's class


var value = 30000;
newvalue=value;

dice_images = [
	"img/dice1.jpg", 
	"img/dice2.jpg", 
	"img/dice3.jpg", 
	"img/dice4.jpg", 
	"img/dice5.jpg",
	"img/dice6.jpg"
	]

slideshow_images = [
	"img/doctor.png",
	"img/doctor.png",
	"img/doctor.png",  //yellow
	"img/water.png",
	"img/doctor.png", 
	"img/doctor.png",
	"img/train.png",//train
	"img/hospital.png", //red
	"img/meds.png",
	"img/chance.png",
	"img/meds.png",
	"img/freeparking.png", //freeparking
	"img/hospitalorange.png",  //orange
	"img/hospitalorange.png", 
	"img/commchest.png",
	"img/orangedoc.png", 
	"img/train.png", //train  
	"img/immuno.png", //hot pink
	"img/immuno.png", //hot pink
	"img/electric.png",
	"img/pinkdoc.png",
	"img/jail2.png", 
	"img/occupational.png", //light blue
	"img/occupational.png", //light blue
	"img/chance.png",
	"img/occupational.png", //light blue
	"img/train.png", //train
	"img/supertax.png", //tax
	"img/brownmeds.png", //brown
	"img/commchest.png",
	"img/brownhos.png",
	"img/go.png", //go
	"img/darkblueop.png", //dark blue
	"img/supertax.png", //tax
	"img/darkbluedoc.png",
	"img/chance.png",
	"img/train.png", //train
	"img/greenhos.png", //dark green
	"img/commchest.png",
	"img/greenmeds.png",
	"img/greenops.png",
	"img/jail.png"
]

 //there are 40 game pieces
background_images = [
	"img/newboard22.jpg",
	"img/newboard23.jpg",
	"img/newboard24.jpg",
	"img/newboard25.jpg",
	"img/newboard26.jpg",
	"img/board1.jpg",
	"img/board2.jpg", 
	"img/board3.jpg", 
	"img/board4.jpg", 
	"img/board5.jpg", 
	"img/board6.jpg",
	"img/board7.jpg",
	"img/board8.jpg",
	"img/boad9.jpg",
	"img/board10.jpg",
	"img/board11.jpg",
	"img/board12.jpg",
	"img/board13.jpg",
	"img/board14.jpg",
	"img/board15.jpg",
	"img/board16.jpg",
	"img/jailboard1.jpg",
	"img/newboard2.jpg",
	"img/newboard3.jpg",
	"img/newboard4.jpg",
	"img/newboard5.jpg",
	"img/newboard6.jpg",
	"img/newboard7.jpg",
	"img/newboard8.jpg",
	"img/newboard9.jpg",
	"img/newboard10.jpg",
	// "img/newboard11.jpg",
	"img/newboard12.jpg",
	"img/newboard13.jpg",
	"img/newboard14.jpg",
	"img/newboard15.jpg",
	"img/newboard16.jpg",
	"img/newboard17.jpg",
	"img/newboard18.jpg",
	"img/newboard19.jpg",
	"img/newboard20.jpg",
	"img/newboard21.jpg"
]

slideshow_descriptions = [
newvalue=value-0,
newvalue=value-75,
newvalue=newvalue-70,
newvalue=newvalue-75,
newvalue=newvalue-75,
newvalue=newvalue-340,
newvalue=newvalue-102873,
newvalue=newvalue-220, 
newvalue=newvalue-Math.floor(Math.random()),
newvalue=newvalue- 220,
newvalue=newvalue-0,
newvalue=newvalue-102873,
newvalue=newvalue-102873,
newvalue=newvalue-Math.floor(Math.random()),
newvalue=newvalue-75,
newvalue=newvalue-340,
newvalue=newvalue-42340,
newvalue=newvalue-42340,
newvalue=newvalue-145,
newvalue=newvalue-75,//pinkdoc
newvalue=newvalue-0,
newvalue=newvalue-1245,
newvalue=newvalue-1245,
newvalue=newvalue-Math.floor(Math.random()),
newvalue=newvalue-1245,
newvalue=newvalue-340,
newvalue=newvalue-1100,
newvalue=newvalue-220,
newvalue=newvalue-Math.floor(Math.random()),
newvalue=newvalue-102873,
newvalue=newvalue+2000,
newvalue=newvalue-1245,
newvalue=newvalue-1100,
newvalue=newvalue-75,
newvalue=newvalue-Math.floor(Math.random()),
newvalue=newvalue-340,
newvalue=newvalue-102873,
newvalue=newvalue-Math.floor(Math.random()),
newvalue=newvalue-220,
newvalue=newvalue-1245,
newvalue=newvalue-0,
newvalue=newvalue-0
]

//Math.floor(Math.random() * 20); to generate random values for chance and community chest

