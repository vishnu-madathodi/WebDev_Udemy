// crate an instance of the XMLHttpRequest class (pre-defined)
let xhttp = new XMLHttpRequest();

//call back function (anonymous function)
xhttp.onload = function(){
    //content of the function
}

// - open() method specifies to the request type and the URL and whether the request should be asynchronous
// - send() method sends the request to the server
xhttp.open("GET", "data.txt", true);
xhttp.send();

// when the server is ReadableByteStreamController, the onreadystatechange event is triggered
// readyState = 4 means the request has been completed (readyState predefined)
xhttp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        document.getElementById("demo").innerHTML = this.responseText;
    }
}
