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
cc.Class({
  extends: cc.Component,

  properties: {
    accountList: {
      default: null,
      type: cc.ScrollView,
    },
    btnSignUp: {
      default: null,
      type: cc.Button,
    },
    progressBar: {
      default: null,
      type: cc.ProgressBar,
    },
    account:{
      default:null,
      type:cc.Prefab,
    },
    _index:0
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    //  this.accountList.node.active = false;
    Emitter.instance.registerEvent('addItem', this.onAddItem.bind(this));
    this.btnSignUp.node.on("click", this.onSignUp.bind(this));
  },
  onAddItem(info) {
      var item = new cc.instantiate(this.account)
      item.getComponent(cc.Label).string = info;
      item.y -= 30 * this._index++;
      this.progressBar.progress+=1/8
      this.accountList.content.addChild(item)
      if(this.progressBar.progress==1){
        this.btnSignUp.node.active=false
        Emitter.instance.emit('stopResgiter')
      }  
  },
  onSignUp() {
    Emitter.instance.emit('sign-up')
  },

  start() { },

  // update (dt) {},
});
