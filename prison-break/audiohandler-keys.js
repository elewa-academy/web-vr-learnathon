AFRAME.registerComponent('keys-audio', {
  init: function() {
    let audio = document.querySelector("#keys-audio");
    this.el.addEventListener('click', () => {
      audio.play();
    });
  }
})