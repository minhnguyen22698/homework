var valid = require('./validate')
cc.Class({
    extends: cc.Component,

    properties: {
        username: {
            default: null,
            type: cc.EditBox,
            tooltip: "Input username "
        },
        password: {
            default: null,
            type: cc.EditBox,
            tooltip: "Input password"
        },
        submit: {
            default: null,
            type: cc.Button,
            tooltip: "Button submit your account"
        },
        listView: {
            default: null,
            type: cc.Node,
        },
        usernameLabel: cc.Label,
        passwordLabel: cc.Label,
        notification: cc.RichText,
        btnSubmit: cc.Button,
        listItem: {
            default: null,
            type: cc.Prefab
        },
        _password: '',
        _username: ''
    },
    // use this for initialization
    onLoad: function () {
        this.usernameLabel.node.active = false;
        this.passwordLabel.node.active = false;
        this.btnSubmit.node.on('click', this.onClick.bind(this, 'hahah'), this);
    },
    onClick: function () {
        var date = new Date()
        var timestamp = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
        this.notification.string = `Chào mừng <b><color=fff000><u>${this._username}</u></color></b> đã gia nhập lúc <i><color=fcba03>${timestamp}</color></i>`
        var item = new cc.instantiate(this.listItem)
        // item.width=64;
        // item.height=64;
        cc.log(this.listView)
        this.listView.addChild(item)
        
    },
    onBeganUserName() {
        this.usernameLabel.string = 'Username cannot over 10 characters and includes special characters';
        this.usernameLabel.node.active = true;
        this.passwordLabel.node.active = false;
    },
    onBeganPassword() {
        this.passwordLabel.string = 'Input password here and don`t forget it :3';
        this.usernameLabel.node.active = false;
        this.passwordLabel.node.active = true;
    },
    onEditEndUN(arg) {
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        if (format.test(arg.textLabel.string)) {
            this.usernameLabel.string = 'Username invalid: contains special characters'
        } else {
            this.usernameLabel.node.active = false;
            this._username = arg.textLabel.string;
        }
    },
    onEditPW(arg) {
        this._password = arg
    },
    onEditEndPW() {
        var text = this._password
        var format = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
        cc.log(text)
        if (format.test(this._password)) {
            this.passwordLabel.string = 'Username invalid: contains special characters'
        } else {
            this.passwordLabel.string = valid.passwValid(text)
        }
    },
    update: function (dt) {

    },
});
