const Emitter = require("Emitter");
cc.Class({
  extends: cc.Component,

  properties: {
    username: {
      default: null,
      type: cc.EditBox,

    },
    password: {
      default: null,
      type: cc.EditBox,
    },
  },
  // LIFE-CYCLE CALLBACKS:

  onLoad() {  
    Emitter.instance = new Emitter();
    Emitter.instance.registerEvent('sign-up',this.onSignUp.bind(this))
  },
  onSignUp(){
    Emitter.instance.emit('show-noti',this.username.string)
  },
  oneEditBegan(evt) {
    Emitter.instance.emit('show-label',evt.node.name)
  },
  oneEditEnd(evt) {
      Emitter.instance.emit('edit-end',evt,evt.string)
  },
  start() {},
  // update (dt) {},
});
