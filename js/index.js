var id = setInterval(my_func, 1000);

var counter = 0;
function my_func() {
    document.getElementById("timer").innerHTML = "Counter: " + counter;
    counter++;
}

function stopInterval() {
    // clearInterval(id);
    clearTimeout(timerid);
}

setInterval(function () {
    console.log('sec...');
}, 2000);

var timerid = setTimeout(function () {
    alert("Message");
}, 5000);