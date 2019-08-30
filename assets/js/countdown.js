// set the date that's counting down
let countDownDate = new Date('Sept 15, 2019 15:30:25').getTime();

// update the count down every 1 second
let x = setInterval(function() {
  // get today's date and tiem
  let now = new Date().getTime();
  // find the distance between now and the count down date
  let distance = countDownDate - now;

  // time calculations for days, hours, minutes and seconds
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display the result in the element with id-memo
  document.getElementById('demo').innerHTML =
    'Coming Soon! - ' +
    days +
    'd ' +
    hours +
    'h ' +
    minutes +
    'm ' +
    seconds +
    's ';
});
