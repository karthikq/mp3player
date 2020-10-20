// var noOfSongs = document.querySelectorAll(".stretchy").length;
//
// for (var i=0; i <=noOfSongs; i++) {
//   document.querySelectorAll(".stretchy")[i].addEventListener("click", function(){
//
//   var buttenhtml = this.getAttribute("alt");
// console.log(buttenhtml);
//       switch (buttenhtml) {
//         case "A":
//         function playAudio() {
//
//   var audio = new Audio("Music/LAKEY INSPIRED - Chill Day (Vlog No Copyright Music)-vtHGESuQ22s.webm");
//           if(audio.paused){
//
//             audio.play();
//           document.querySelector("#font").setAttribute("class","fa fa-pause");
//           }
//           else {
//             audio.pause();
//             document.querySelector("#font").setAttribute("class","fa fa-play");
//           }
//         }
//
//
//           break;
//         case "BS":
//           var audio = new Audio("Music/LAKEY INSPIRED - Chill Day (Vlog No Copyright Music)-vtHGESuQ22s.webm");
//           audio.play();
//           break;
//         case "H":
//           var audio = new Audio("Music/OCTILARY - CHILL TRAP BEAT _ No Copyright Trap-J3VrtjFIy7U.mkv");
//           audio.play();
//           break;
//
//
//
//             break;
//         default:
//
//       }
//
//
// }
// );
// }


// function playAudio() {
//
// }
// function music1(buttenhtml) {
//
//   var audio =  new Audio("buttenhtml");
//   audio.pause();
//
// }

var y = document.getElementById("myAudio2");
var z = document.getElementById("myAudio3");
var b = document.getElementById("myAudio5");
var a = document.getElementById("myAudio4");


var x = document.getElementById("myAudio");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");

var audio1 = document.getElementById("myAudio0");
var audio2 = document.getElementById("myAudio1");
var audio3= document.getElementById("myAudio2");
var audio4= document.getElementById("myAudio3");
var audio5 = document.getElementById("myAudio4");




    //
    // for (var i = 1; i <= 5; i++) {
    //
    //   button1.addEventListener("click", function playAudio() {
    //
    //     if (audio1.paused) {
    //       audio1.play();
    //       document.querySelector("#font0").setAttribute("class", "fa fa-pause");
    //     } else {
    //       audio1.pause();
    //       document.querySelector("#font0").setAttribute("class", "fa fa-play");
    //     }
    //   });
    //   if(audio2.paused){
    //     audio2.play();
    //   document.querySelector("#font2").setAttribute("class","fa fa-pause");
    //   }
    //   else {
    //     audio2.pause();
    //     document.querySelector("#font2").setAttribute("class","fa fa-play");
    //   }
    // }




button1.addEventListener("click", function playAudio(){
  if(audio1.paused){
    audio1.play();
  document.querySelector("#font0").setAttribute("class","fa fa-pause");
  }
  else {
    audio1.pause();
    document.querySelector("#font0").setAttribute("class","fa fa-play");
  }
});






button2.addEventListener("click", function playAudio2(){
  if(audio2.paused){
    audio2.play();
  document.querySelector("#font1").setAttribute("class","fa fa-pause");
  }
  else {
    audio2.pause();
    document.querySelector("#font1").setAttribute("class","fa fa-play");
  }
});

button3.addEventListener("click", function playAudio3(){
  if(audio3.paused){
    audio3.play();
  document.querySelector("#font2").setAttribute("class","fa fa-pause");
  }
  else {
    audio3.pause();
    document.querySelector("#font2").setAttribute("class","fa fa-play");
  }

});



button4.addEventListener("click", function playAudio4(){
  if(audio4.paused){
    audio4.play();
  document.querySelector("#font3").setAttribute("class","fa fa-pause");
  }
  else {
    audio4.pause();
    document.querySelector("#font3").setAttribute("class","fa fa-play");
  }
});

button5.addEventListener("click", function playAudio5(){
  if(audio5.paused){
    audio5.play();
  document.querySelector("#font4").setAttribute("class","fa fa-pause");
  }
  else {
    audio4.pause();
    document.querySelector("#font4").setAttribute("class","fa fa-play");
  }
});
