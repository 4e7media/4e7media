$(document).ready(function () {
    anime({
        targets: '.load.lines path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInSine',
        duration: 2000,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
      });
});
