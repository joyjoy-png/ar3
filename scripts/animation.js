// animation-jump // 점프 애니메이션 // 점프하기
// animation-scale // 축소 확장 //
// animation-scale-stop // 축소 확장 멈춤 //
// animation-scale-large // 축소 확장 크게 //
// animation-scale-updown // 늘였다 줄였다 (위아래로) //
// animation-scale-side // 늘였다 줄였다 (양옆으로) //
// animation-rotation-fast // 빙글빙글 (빠르게) //
// animation-rotation-slow // 빙글빙글 (느리게) //
// animation-rotation-z // 오뚜기 //
// animation-opacity // 사라졌다 나타났다 //
// animation-right // 오른쪽으로 이동하기 애니메이션 // 오른쪽으로
// animation-left // 오른쪽으로 이동하기 애니메이션 //


let defaultScale = [8, 12, 12];

// toScale x와 y 사이즈를 1씩 늘림
const toScale = (x, y, z) => {
  let defaultScaleTemp = new Array(3);
  defaultScaleTemp[0] = defaultScale[0] + x;
  defaultScaleTemp[1] = defaultScale[1] + y;
  defaultScaleTemp[2] = defaultScale[2] + z;

  return defaultScaleTemp.join(" ");
};

// 점프 애니메이션 //
// animation-jump //
AFRAME.registerComponent("점프하기", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__jump", {
      property: "position",
      to: "0 5 0.5",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// 오른쪽으로 이동하기 애니메이션 //
// animation-right //
AFRAME.registerComponent("오른쪽으로", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__right", {
      property: "position",
      to: "5 0 0.5",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// 오른쪽으로 이동하기 애니메이션 //
// animation-left //
AFRAME.registerComponent("오른쪽으로이동하고멈추기", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__left__stop", {
      property: "position",
      to: "5 0 0.5",
      dur: "2000",
      easing: "easeInOutQuad",
    });
  },
});

// 왼쪽으로 이동하기 애니메이션 //
// animation-left //
AFRAME.registerComponent("왼쪽으로이동하고멈추기", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__left__stop", {
      property: "position",
      to: "-5 0 0.5",
      dur: "2000",
      easing: "easeInOutQuad",
    });
  },
});

// 아래쪽으로 이동하기 애니메이션 //
// animation-down //
AFRAME.registerComponent("아래쪽으로이동하고멈추기", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__down__stop", {
      property: "position",
      to: "0 -5 0.5",
      dur: "2000",
      easing: "easeInOutQuad",
    });
  },
});

// 확장-축소 반복, 커지고 작아지고 //
// animation-scale //
AFRAME.registerComponent("커졌다가작아지기", {
  init: function () {
    this.entity = this.el;
    this.fromScale = defaultScale.join(" ");

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      to: toScale(2, 2, 0),
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// 확장하고 멈춤 //
// animation-scale-stop //
AFRAME.registerComponent("커졌다가멈추기", {
  init: function () {
    this.entity = this.el;
    this.fromScale = defaultScale.join(" ");
    this.running = false;

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      from: toScale(-2, -2, 0),
      to: toScale(2, 2, 0),
      dur: "3000",
      easing: "easeInOutQuint",
      loop: "true",
      //startEvents: "start",
      //pauseEvents: "pause",
    });
  },

  // trigger 마커가 보일때마다 다시 시작
  /* tick: function () {
    if (this.running == false && this.markerEl.object3D.visible == true) {
      //this.entity.emit("start");
      this.running = true;
    } else if (
      this.running == true &&
      this.markerEl.object3D.visible == false
    ) {
      //this.entity.emit("pause");
      this.running = false;
    }
  }, */
});

// 축소하고 멈춤 //
// animation-scale-stop-reverse //
AFRAME.registerComponent("animation-scale-stop-reverse", {
  init: function () {
    this.entity = this.el;
    this.fromScale = defaultScale.join(" ");
    this.running = false;

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      from: toScale(0, 0, 0),
      to: toScale(-8, -8, 0),
      dur: "10000",
      easing: "linear",
      loop: "true",
      //startEvents: "start",
      //pauseEvents: "pause",
    });
  },

  // trigger 마커가 보일때마다 다시 시작
  /* tick: function () {
    if (this.running == false && this.markerEl.object3D.visible == true) {
      //this.entity.emit("start");
      this.running = true;
    } else if (
      this.running == true &&
      this.markerEl.object3D.visible == false
    ) {
      //this.entity.emit("pause");
      this.running = false;
    }
  }, */
});

// 크게 확장-축소 반복, 커지고 작아지고 (큰버전) //
// animation-scale-large //
AFRAME.registerComponent("크게커졌다가작아지기", {
  init: function () {
    this.entity = this.el;
    this.fromScale = defaultScale.join(" ");

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      from: toScale(-5, -5, 0),
      to: toScale(2, 2, 0),
      delay: "2000",
      dur: "1000",
      loop: "true",
      dir: "alternate",
      easing: "easeInOutQuad",
    });
  },
});

// 늘였다 줄였다 (위아래로) //
// animation-scale-updown //
AFRAME.registerComponent("위아래로늘렸다가줄이기", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      from: toScale(0, -3, 0),
      to: toScale(0, 3, 0),
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// 늘였다 줄였다 (양옆으로) //
// animation-scale-side //
AFRAME.registerComponent("양옆으로늘렸다가줄이기", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__scale", {
      property: "scale",
      from: toScale(-3, 0, 0),
      to: toScale(3, 0, 0),
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// 빙글빙글 (빠르게) //
// animation-rotation-fast //
AFRAME.registerComponent("빠르게회전하기", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 0 0",
      to: "0 0 360",
      dur: "1000",
      loop: "true",
      easing: "linear",
    });
  },
});

// 빙글빙글 (느리게) //
// animation-rotation-slow //
AFRAME.registerComponent("느리게회전하기", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 0 0",
      to: "0 0 360",
      dur: "3000",
      loop: "true",
      easing: "linear",
    });
  },
});

// 이름표 마커에 사용됨. //
// animation-rotation-y //
AFRAME.registerComponent("animation-rotation-y", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 0 0",
      to: "0 360 0",
      dur: "4000",
      loop: "true",
      easing: "linear",
    });
  },
});

// 오뚜기 //
// animation-rotation-z //
AFRAME.registerComponent("오뚜기", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__rotation", {
      property: "rotation",
      from: "0 0 -20",
      to: "0 0 20",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});

// 사라졌다 나타났다 //
// animation-opacity //
AFRAME.registerComponent("사라졌다가나타나기", {
  init: function () {
    this.entity = this.el;

    this.entity.setAttribute("animation__opacity", {
      property: "material.opacity",
      to: "0 0 0",
      dir: "alternate",
      dur: "1000",
      loop: "true",
      easing: "easeInOutQuad",
    });
  },
});
