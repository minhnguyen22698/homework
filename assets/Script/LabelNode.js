// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
const Emitter = require("Emitter");
var utils = require("utils");
cc.Class({
  extends: cc.Component,

  properties: {
    username: {
      default: null,
      type: cc.Label,
    },
    password: {
      default: null,
      type: cc.Label,
    },
    enough: {
      default: null,
      type: cc.RichText,
    },
    noti: {
      default: null,
      type: cc.RichText,
    },
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    // Emitter.instance = new Emitter();
    // Emitter.instance.registerEvent('sign-up',this.onShowNoti.bind(this))
    Emitter.instance.registerEvent("show-noti", this.onShowNoti.bind(this));
    Emitter.instance.registerEvent("edit-end", this.onEditEnd.bind(this));
    Emitter.instance.registerEvent("show-label", this.onShowLabel.bind(this));
    this.enough.node.active = false;
  },
  onEditEnd(arg, str) {
    var valid = new utils();
    if (!valid.editTextValid(str)) {
      if (arg.node.name == "username") {
        this.username.string = "Username invalid: contains special characters";
      } else {
        this.password.string = "Password invalid: contains special characters";
      }
    } else {
      if (arg.node.name == "username") {
        this.username.node.active = false;
      } else {
        this.password.string = valid.passwordValid(str);
      }
    }
  },
  onShowNoti(arg) {
    var date = new Date();
    var timestamp =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    this.noti.string = `Chào mừng <b><color=fff000><u>${arg}</u></color></b> đã gia nhập lúc <i><color=fcba03>${timestamp}</color></i>`;
  },
  onShowLabel(arg) {
    if (arg == "username") {
      this.username.string =
        "Username cannot over 10 characters and includes special characters";
      this.username.node.active = true;
      this.password.node.active = false;
      // this.listView.node.active = false
      // cc.log(this.username)
    } else {
      this.password.string = "Input password here and don`t forget it :3";
      this.username.node.active = false;
      this.password.node.active = true;
      // this.listView.node.active = false
    }
  },
  start() {},

  // update (dt) {},
});
