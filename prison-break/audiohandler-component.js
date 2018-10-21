AFRAME.registerComponent('audiohandler', {
  init: function() {
    // let audio = document.querySelector("#outsidesounds");
    // audio.play();
    let playing = false;
    this.el.addEventListener('mouseenter', () => {
      if (!playing) {
        let audio = document.querySelector("#soundtrack");
        audio.play();
        playing = true;
      }
    });
  }
})