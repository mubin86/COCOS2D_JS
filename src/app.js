var HelloWorldLayer = cc.Layer.extend({
  sprite: null,
  sprite1: null,
  sprite2: null,
  label: null,
  ctor: function () {
    //////////////////////////////
    // 1. super init first
    this._super();
    // 2. add a menu item with "X" image, which is clicked to quit the program
    //    you may modify it.
    // ask the window size
    size = cc.winSize;
    sprite = this;
    sprite1 = this;
    sprite2 = this;

    sprite = new cc.Sprite.create(res.Spin_png);
    sprite.setAnchorPoint(cc.p(0.5, 0.5));
    sprite.setPosition(cc.p(size.width / 2, size.height / 2));
    this.addChild(sprite, 0);

    sprite1 = new cc.Sprite.create(res.Indi_png);
    sprite1.setAnchorPoint(cc.p(0.51, 0.76));
    sprite1.setPosition(cc.p(size.width * 0.51, size.height * 0.76));
    this.addChild(sprite1, 0);

    var menuItem = new cc.MenuItemImage.create(res.Menu_png, res.Menu_png, tap);

    menuItem.setPosition(cc.p(size.width / 2, size.height / 2));

    var menu = new cc.Menu(menuItem);
    menu.setPosition(cc.p(0, 0));
    this.addChild(menu);

    label = new cc.LabelTTF("you have no points", "Arial");
    label.setFontSize(20);
    label.setPosition(cc.p(size.width * 0.25, size.height * 0.8));
    label.setColor(cc.color(255, 0, 0));
    this.addChild(label);

    return true;
  },
});

var sp = 0;
var size = 0;
var wheel_array = [];
var in_array = [];
var wheelAction;
var inAction;
//var label;
var tap = function () {
  cc.log("Starting Rotating");

  var random = Math.floor(Math.random() * 360) + 1;

  if (random >= 0 && random < 5) {
    random = random * 200;
  } else if (random >= 5 && random < 15) {
    random = random * 50;
  } else if (random >= 15 && random < 30) {
    random = random * 30;
  } else if (random >= 30 && random < 50) {
    random = random * 13;
  } else if (random >= 50 && random < 120) {
    random = random * 10;
  } else if (random >= 120 && random < 200) {
    random = random * 3;
  } else {
    random = random * 2;
  }

  cc.log("random value is" + random);

  var temprot = Math.floor(random / 45);

  var tempnew = random % 45;

  for (let i = 0; i < temprot; i++) {
    if (random >= 450) {
      if (i == 0) {
        wheelAction = cc.RotateBy.create(0.1, 45);
        wheel_array.push(wheelAction);
      } else if (i == 1) {
        wheelAction = cc.RotateBy.create(0.1, 45);
        wheel_array.push(wheelAction);
      } else if (i == 2) {
        wheelAction = cc.RotateBy.create(0.1, 45);
        wheel_array.push(wheelAction);
      } else if (i == 3) {
        wheelAction = cc.RotateBy.create(0.12, 45);
        wheel_array.push(wheelAction);
      } else if (i == 4) {
        wheelAction = cc.RotateBy.create(0.12, 45);
        wheel_array.push(wheelAction);
      } else if (i == 5) {
        wheelAction = cc.RotateBy.create(0.14, 45);
        wheel_array.push(wheelAction);
      } else if (i == 6) {
        wheelAction = cc.RotateBy.create(0.14, 45);
        wheel_array.push(wheelAction);
      } else if (i == 7) {
        wheelAction = cc.RotateBy.create(0.16, 45);
        wheel_array.push(wheelAction);
      } else if (i == 8) {
        wheelAction = cc.RotateBy.create(0.16, 45);
        wheel_array.push(wheelAction);
      } else if (i == 9) {
        wheelAction = cc.RotateBy.create(0.17, 45);
        wheel_array.push(wheelAction);
      } else {
        wheelAction = cc.RotateBy.create(0.19, 45);
        wheel_array.push(wheelAction);
      }
    } else {
      if (i == 0) {
        wheelAction = cc.RotateBy.create(0.12, 45);
        wheel_array.push(wheelAction);
      } else if (i == 1) {
        wheelAction = cc.RotateBy.create(0.12, 45);
        wheel_array.push(wheelAction);
      } else if (i == 2) {
        wheelAction = cc.RotateBy.create(0.13, 45);
        wheel_array.push(wheelAction);
      } else if (i == 3) {
        wheelAction = cc.RotateBy.create(0.14, 45);
        wheel_array.push(wheelAction);
      } else if (i == 4) {
        wheelAction = cc.RotateBy.create(0.16, 45);
        wheel_array.push(wheelAction);
      } else if (i == 5) {
        wheelAction = cc.RotateBy.create(0.17, 45);
        wheel_array.push(wheelAction);
      } else if (i == 6) {
        wheelAction = cc.RotateBy.create(0.18, 45);
        wheel_array.push(wheelAction);
      } else {
        wheelAction = cc.RotateBy.create(0.2, 45);
        wheel_array.push(wheelAction);
      }
    }
  }

  wheelAction = cc.RotateBy.create(0.22, tempnew);
  wheel_array.push(wheelAction);

  for (let i = 0; i < temprot; i++) {
    if (random >= 450) {
      if (i == 0) {
        inAction = cc.RotateBy.create(0.05, -15);
        in_array.push(inAction);
        inAction = cc.RotateBy.create(0.05, 15);
        in_array.push(inAction);
      } else if (i == 1) {
        inAction = cc.RotateBy.create(0.05, -15);
        in_array.push(inAction);
        inAction = cc.RotateBy.create(0.05, 15);
        in_array.push(inAction);
      } else if (i == 2) {
        inAction = cc.RotateBy.create(0.05, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.05, 15);
        in_array.push(inAction);
      } else if (i == 3) {
        inAction = cc.RotateBy.create(0.06, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.06, 15);
        in_array.push(inAction);
      } else if (i == 4) {
        inAction = cc.RotateBy.create(0.06, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.06, 15);
        in_array.push(inAction);
      } else if (i == 5) {
        inAction = cc.RotateBy.create(0.07, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.07, 15);
        in_array.push(inAction);
      } else if (i == 6) {
        inAction = cc.RotateBy.create(0.07, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.07, 15);
        in_array.push(inAction);
      } else if (i == 7) {
        inAction = cc.RotateBy.create(0.08, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.08, 15);
        in_array.push(inAction);
      } else if (i == 8) {
        inAction = cc.RotateBy.create(0.08, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.08, 15);
        in_array.push(inAction);
      } else if (i == 9) {
        inAction = cc.RotateBy.create(0.085, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.085, 15);
        in_array.push(inAction);
      } else {
        inAction = cc.RotateBy.create(0.095, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.095, 15);
        in_array.push(inAction);
      }
    } else {
      if (i == 0) {
        inAction = cc.RotateBy.create(0.06, -15);
        in_array.push(inAction);
        inAction = cc.RotateBy.create(0.06, 15);
        in_array.push(inAction);
      } else if (i == 1) {
        inAction = cc.RotateBy.create(0.06, -15);
        in_array.push(inAction);
        inAction = cc.RotateBy.create(0.06, 15);
        in_array.push(inAction);
      } else if (i == 2) {
        inAction = cc.RotateBy.create(0.065, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.065, 15);
        in_array.push(inAction);
      } else if (i == 3) {
        inAction = cc.RotateBy.create(0.07, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.07, 15);
        in_array.push(inAction);
      } else if (i == 4) {
        inAction = cc.RotateBy.create(0.08, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.08, 15);
        in_array.push(inAction);
      } else if (i == 5) {
        inAction = cc.RotateBy.create(0.085, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.085, 15);
        in_array.push(inAction);
      } else if (i == 6) {
        inAction = cc.RotateBy.create(0.09, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.09, 15);
        in_array.push(inAction);
      } else {
        inAction = cc.RotateBy.create(0.1, -15);
        in_array.push(inAction);

        inAction = cc.RotateBy.create(0.1, 15);
        in_array.push(inAction);
      }
    }
  }

  inAction = cc.RotateBy.create(0.11, -15);
  in_array.push(inAction);
  inAction = cc.RotateBy.create(0.11, 15);
  in_array.push(inAction);

  var sequence_action = cc.Sequence.create(wheel_array);
  var sequence_actionin = cc.Sequence.create(in_array);
  sprite.runAction(sequence_action);
  sprite1.runAction(sequence_actionin);

  //var rotate = cc.RotateBy.create(3, random);
  //var ease =  cc.EaseOut.create(rotate, 2);

  //var sprite_action = cc.RotateBy.create(0.5, 200);
  //var repeat_action = cc.Repeat.create(sprite_action, 16);
  //var sprite_action1 = cc.RotateBy.create(1,45);
  //var repeat_action1 =cc.Repeat.create(sprite_action1, 8);
  //var sprite_action2 = cc.RotateBy.create(1.5, 45);
  //var repeat_action2 = cc.Repeat.create(sprite_action2, 1);
  //var sprite_action3 = cc.RotateBy.create(2, 45);
  //var repeat_action3 = cc.Repeat.create(sprite_action3, 0.5);
  //var sequence_action = cc.Sequence.create(repeat_action, repeat_action1, repeat_action2, repeat_action3);

  //sprite.runAction(rotate);

  sp = sp + random;

  cc.log("value of sp is" + sp);

  var total = 0;

  if (sp >= 360) {
    total = sp % 360;
    cc.log("value of total is" + total);
  } else {
    total = sp;
    cc.log("value of less total is" + total);
  }

  var rem = 0;
  rem = total % 45;
  var res = 0;
  res = Math.floor(total / 45);

  cc.log("rem is" + rem);
  cc.log("res is" + res);

  if (rem < 21.5) {
    var finalres = res;

    if (finalres == 1) {
      cc.log("YOU HAVE GOT 5 POINTS");

      label.setString("you have got 5 points");
    } else if (finalres == 2) {
      cc.log("YOU HAVE GOT 500 POINTS");

      label.setString("you have got 500 points");
    } else if (finalres == 3) {
      cc.log("YOU HAVE GOT 150 POINTS");

      label.setString("you have got 150 points");
    } else if (finalres == 4) {
      cc.log("YOU HAVE to TAP AGAIN");
      label.setString("you have to TAP again");
    } else if (finalres == 5) {
      cc.log("YOU HAVE GOT 100 POINTS");
      label.setString("you have got 100 points");
    } else if (finalres == 6) {
      cc.log("YOU HAVE GOT 30 POINTS");

      label.setString("you have got 30 points");
    } else if (finalres == 7) {
      cc.log("YOU HAVE GOT 20 POINTS");
      label.setString("you have got 20 points");
    } else {
      cc.log("YOU HAVE GOT 10 POINTS");

      label.setString("you have got 10 points");
    }
  } else if (rem > 22) {
    var finalres = res + 1;

    if (finalres == 1) {
      cc.log("YOU HAVE GOT 5 POINTS");
      label.setString("you have got 5 points");
    } else if (finalres == 2) {
      cc.log("YOU HAVE GOT 500 POINTS");
      label.setString("you have got 500 points");
    } else if (finalres == 3) {
      cc.log("YOU HAVE GOT 150 POINTS");

      label.setString("you have got 500 points");
    } else if (finalres == 4) {
      cc.log("YOU HAVE TO TAP AGAIN");

      label.setString("You have to tap again");
    } else if (finalres == 5) {
      cc.log("YOU HAVE GOT 100 POINTS");

      label.setString("you have got 100 points");
    } else if (finalres == 6) {
      cc.log("YOU HAVE GOT 30 POINTS");

      label.setString("you have got 30 points");
    } else if (finalres == 7) {
      cc.log("YOU HAVE GOT 20 POINTS");

      label.setString("you have got 20 points");
    } else {
      cc.log("YOU HAVE GOT 10 POINTS");

      label.setString("you have got 10 points");
    }
  } else {
    cc.log("WOOWWW THIS IS TIE SO PLEASE TAP AGAIN ");
    label.setString("WOOWWW THIS IS TIE SO PLEASE TAP AGAIN");
  }
};

var HelloWorldScene = cc.Scene.extend({
  onEnter: function () {
    this._super();
    var layer = new HelloWorldLayer();
    this.addChild(layer);
  },
});
