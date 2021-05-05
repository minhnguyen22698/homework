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
        usernameLabel: cc.Label,
        passwordLabel: cc.Label,
    },

    // use this for initialization
    onLoad: function () {
        this.usernameLabel.node.active=false;
        this.passwordLabel.node.active=false;
    },
    onBeganUserName() { 
        this.usernameLabel.string='LOL'
        cc.log('lol')
        this.usernameLabel.node.active=true
        this.passwordLabel.node.active=false
    },
    onBeganPassword() { 
        cc.log('lol')
        this.passwordLabel.string='LOL'
        this.usernameLabel.node.active=false
        this.passwordLabel.node.active=true
    },

    // called every frame
    update: function (dt) {

    },
});
