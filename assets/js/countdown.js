// set the date that's counting down
const countDownDate = new Date('August 31, 2019 15:30:25');

// update the count down every 1 second
const x = setInterval(function() {
  // get today's date and tiem
  const now = new Data().getTime();
  // find the distance between now and the count down date
  const distance = countDownDate - now;

  // time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
});
