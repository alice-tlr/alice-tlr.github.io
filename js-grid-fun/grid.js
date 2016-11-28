
document.addEventListener('DOMContentLoaded', setEventListeners);

function setEventListeners() {
  //1. get all of the elements with class grid
  var gridElements = document.getElementsByClassName('grid');
  //2. for each element add a mouseover handler
  for(var i = 0; i < gridElements.length; i++){
     gridElements[i].addEventListener('mouseover', bindSound);
     gridElements[i].addEventListener('mouseleave', pauseSound)
  }

  function bindSound(event){
     console.log(event);
     //event.target is the element where the event was triggered from (e.g. the div that was moused over)
     var sourceDiv = event.target;
     //children returns an array of child elements from the sourceDiv
     sourceDiv.children[0].play();
  }

  function pauseSound(event){
     console.log(event);
     //event.target is the element where the event was triggered from (e.g. the div that was moused over)
     var sourceDiv = event.target;
     //children returns an array of child elements from the sourceDiv
     sourceDiv.children[0].pause();
  }

}
