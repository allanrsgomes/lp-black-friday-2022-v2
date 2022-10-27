const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countdownOfertas = new Date('Nov 25, 2022 00:00:00').getTime(),
    x = setInterval(function() {
        let now = new Date().getTime(),
        distance = countdownOfertas - now;
        document.getElementById('days-o').innerText = Math.floor(distance / (day)),
        document.getElementById('hours-o').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes-o').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds-o').innerText = Math.floor((distance % (minute)) / second);
    }, second)

let countdownLive = new Date('Nov 25, 2022 00:00:00').getTime(),
    y = setInterval(function() {
        let now2 = new Date().getTime(),
        distance = countdownLive - now2;
        document.getElementById('days-l').innerText = Math.floor(distance / (day)),
        document.getElementById('hours-l').innerText = Math.floor((distance % (day)) / (hour)),
        document.getElementById('minutes-l').innerText = Math.floor((distance % (hour)) / (minute)),
        document.getElementById('seconds-l').innerText = Math.floor((distance % (minute)) / second);
    }, second)
