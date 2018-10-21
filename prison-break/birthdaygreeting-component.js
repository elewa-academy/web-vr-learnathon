AFRAME.registerComponent('birthdaygreeting', {
  init: function() {
    let backgroundmusic = document.querySelector("#soundtrack");
    let audio = document.querySelector("#happy");
    // audio.play();
    let played = false;
    this.el.addEventListener('mouseenter', () => {
      if (!played) {
        let audio = document.querySelector("#happy");
        audio.play();
        played = true;
      }
    });
  }
})