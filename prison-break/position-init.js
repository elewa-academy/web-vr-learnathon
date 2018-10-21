AFRAME.registerComponent('camera-position', {
  init: function() {
    if (!AFRAME.utils.device.checkHeadsetConnected()) {
      this.el.object3D.position.y = 3.1;
    }
  }
})
