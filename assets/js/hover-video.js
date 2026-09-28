if (window.matchMedia('(hover: hover) and (pointer: fine)').matches && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  document.querySelectorAll('.frame').forEach(function (frame) {
    var video = frame.querySelector('.hover-vid');
    if (!video) return;
    frame.addEventListener('mouseenter', function () {
      var playPromise = video.play();
      if (playPromise) {
        playPromise.then(function () {
          frame.classList.add('playing');
        }).catch(function () {});
      }
    });
    frame.addEventListener('mouseleave', function () {
      frame.classList.remove('playing');
      video.pause();
      video.currentTime = 0;
    });
  });
}