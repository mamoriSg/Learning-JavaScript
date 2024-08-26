function btnClick() {
    console.log("message");
}

var counter = 0; 
function btnOnceClick(el) {
    counter++;
    el.innerHTMl = "count: " + counter;
    // el.name = "new value"
    // alert(el.name); 
}

function userInput(el) {
    if (el.value == "font");
    el.style.fontSize = "20px"; 
    
    else if (el.value == "color")
        el.style.color = "red";
    else if (el.value == "color")
        el.style.backgroundColor = "black";
}