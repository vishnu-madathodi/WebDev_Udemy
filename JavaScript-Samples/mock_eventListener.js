//working of event listener, callback functions
function addAnotherListner(eventHappened, callbackFunction){
  var value = {
    eventType: "keypress",
    key: "p",
    duration: 2
  };
  if(value.eventType === eventHappened){
    callbackFunction(value);
  }
}

addAnotherListner("keypress", function(event){
  console.log(event);
});
