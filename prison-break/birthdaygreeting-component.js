// AFRAME.registerComponent('birthdaygreeting', {
//   init: function() {
//     // let backgroundmusic = document.querySelector("#soundtrack");
//     // let audio = document.querySelector("#happy");
//     let played = false;

//     this.el.addEventListener('click', () => {
//       console.log("hello again!")
//       if (!played) {
//         let audio = document.querySelector("#happy");
//         audio.play();
//         played = false;
//       }
//     });
//   }
// })


AFRAME.registerComponent('birthdaygreeting', {
  init: function() {
    // let audio = document.querySelector("#outsidesounds");
    // audio.play();
    let playing = false;
    this.el.addEventListener('click', () => {
      if (!playing) {
        let audio = document.querySelector("#happy");
        audio.play();
        playing = true;
      }
    });
  }
})