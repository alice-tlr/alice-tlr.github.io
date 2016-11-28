//hi :)
document.addEventListener('DOMContentLoaded', bindSound)


var audioSounds = ["audioSounds1", "audioSounds2", "audioSounds3", "audioSounds4", "audioSounds5", "audioSounds6"];
var gridNum = ["grid-1", "grid-2", "grid-3", "grid-4", "grid-5", "grid-6"];
var hoverOver = gridNum.length;


 function bindSound(){
  for (i = 0; i < gridNum.length; i++){
    var allGrids = document.getElementsByClassName(gridNum[i])
    var squares = allGrids[0]
    document.getElementByClassName("grid-1")addEventListener('mouseover',chooseAudioSound);
    //play this audio

  /*if (gridNum[i] === "grid-1") {
    var allTheFoos = document.getElementsByClassName('grid-1')
    var grid-1 = allTheFoos[0]
    theThingToBindTo.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
    else if (gridNum === "grid-2") {
      document.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
    else if (gridNum = "grid-3") {
      document.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
    else if (gridNum = "grid-4") {
    document.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
    else if (gridNum = "grid-5") {
    document.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
    else if (gridNum = "grid-6") {
    document.addEventListener('mouseover',chooseAudioSound);
    //play this audio
  }
};*/


function chooseAudioSound (evt){///here is where it is established which audio sound to request, depending on what grid is being hovered over...

  // IF evt.target has the class grid-1
  // THEN play sound 1
  // evt.target is a div
  if (event.target === 'grid-1'){
    play audioSounds.1
}
  else if (event.target === 'grid-3'){
    play audioSounds.2
  }
  else if (event.target === 'grid-4'){
    play audioSounds.4
  }
  else if (event.target === 'grid-5'){
    play audioSounds.5
  }
  else if (event.target === 'grid-6'){
    play audioSounds.6
  }
  // open JS console , do a console.log(evt.target.classList)
  /*for (var i = 0; i < hoverOver; i++){
   if ('grid-1' == true) { //if it is grid-1
     var audioSounds1 //then play this sound bite
   }
     else if ('grid-2' == true) {
     audioSounds2("2")
   }
     else if ('grid-3' == true) {
     audioSounds3("3")
   }
     else if ('grid-4' == true) {
     audioSounds4("4")
    }
    else if ('grid-5' == true) {
    audioSounds5("5")
    }
    else if ('grid-6' == true) {
    audioSounds6("6")
    }
  }
};*/

function mp3 () {
var audioSounds = {
 1:"127788__149203__key-01-16bit.wav",
 2:"316901__jaz-the-man-2__do-octave.wav",
 3:"363161__sirkoto51__toy-piano-key-g.wav",
 4:"316901__jaz-the-man-2__do-octave.wav",
 5:"316912__jaz-the-man-2__sol.wav",
 6:"363161__sirkoto51__toy-piano-key-g.wav"
}
}
