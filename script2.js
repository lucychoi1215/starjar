$(".sparkle2").sparkle({
  color: "#FFFFFF",
  count: 30,
  overlap: 0,
  speed: 1,
  minSize: 4,
  maxSize: 10,
  direction: "both",
  color: "rainbow",

});





// var rellax = new Rellax('.rellax');

///
new WOW().init();

///

var star = document.getElementsByClassName('button');



for (var i = 0 ; i < star.length; i++) {
   star[i].addEventListener('click' , message , false ) ;
   }


function message(){

  var fortuneText = ["Wait for the right time.",
"Right Now",
"You know what's more important.",
"It helps to share about your feelings to people around you.",
"If you don't take a risk now, you will take a bigger risk later.",
"Difficulties can be overcome.",
"The outcome will make a long lasting influence.",
"You will be in a lot of confusion.",
"Your instinct is important.",

"Be patient.",
"Finish what you started.",
"An opportunity will come. Seize it.",
"Slow down.",
"Just start now.",
"Give it a try.",
"The best way to escape from it is to go past it.",
"It is neccessary to think about how others see you.",
"There are many ways.",
"There is always an enemy in a place where there is prey.",

"What falls harder jumps higher.",
"You need to see it from a realistic perspective.",
"Listen and think.",
"Be positive.",
"Be wary of the person next to you.",
"Of course.",
"Life is never fair.",
"It's for certain.",
"You will have a chance this year.",
"Think about it from a different perspecive."
]

   var randomFortuneText= Math.floor (Math.random()*fortuneText.length);

  alert(fortuneText[randomFortuneText]);

}
