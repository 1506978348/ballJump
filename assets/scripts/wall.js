
cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // cc.director.getPhysicsManager().enabled = true;
        // this.childNode = this.node.children;
        // this.RigidBody = this.node.getChildByName('down').getComponent(cc.RigidBody);
        // this.RigidBodyUp = this.node.getChildByName('up').getComponent(cc.RigidBody);
    },
    
    start () {

    },
    onBeginContact: function (contact, selfCollider, otherCollider) {
        setTimeout(() => {
            selfCollider.node.removeFromParent();
            selfCollider.node.destroy();
        }, 500);
    },

    update (dt) {
        // cc.log(this.childNode)
        this.node.x-=5;
        if(this.node.x<-450){
            cc.director.loadScene('game')
        }
    },
});
