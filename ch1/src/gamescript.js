
var gameScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        console.log("My Awesome Game Starts Here");
        var gameLayer = new game();
        gameLayer.init();
        this.addChild(gameLayer);
        
    }
});
var backgroundLayer;
var game = cc.Layer.extend({
    
    init:function () {
        this._super();
        backgroundLayer = cc.LayerColor.create(new cc.Color(40,40,40,255), 320, 480);
        this.addChild(backgroundLayer);
        var target = cc.Sprite.create("assets/target.png");
        backgroundLayer.addChild(target,0);
        target.setPosition(160,240);
        setTimeout(function() {
            backgroundLayer.removeChild(target);
        }, 3000);
    }
    
});