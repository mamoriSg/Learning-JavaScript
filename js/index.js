var date = new Date();
// date.setHours(23);

setInterval(function () {
    var time = "Час : " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    document.getElementById('time').innerHTML = time;
}, 1000);


