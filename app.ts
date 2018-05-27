setInterval(function (handle) {
    // const seconds = date.getSeconds();
    // const hours = date.getHours();
    // const minutes = date.getMinutes();
    let date = new Date();
    clock.innerHTML = date.getHours() + ":"+ date.getMinutes() + ":" + date.getSeconds();
},1000);

const clock = document.getElementById("clock");
