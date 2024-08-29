// soundhandler must be imported in a-sound tag
AFRAME.registerComponent("soundhandler", {
  init: function () {
    this.entity = this.el;
    this.markerEl = this.entity.parentNode;
    this.playingSound = false;
  },

  tick: function () {
    if (this.playingSound == false && this.markerEl.object3D.visible == true) {
      this.entity.components.sound.playSound();
      this.playingSound = true;
    } else if (
      this.playingSound == true &&
      this.markerEl.object3D.visible == false
    ) {
      this.entity.components.sound.stopSound();
      this.playingSound = false;
    }
  },
});
