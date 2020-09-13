var state = null;
cc.Class({
    extends: cc.Component,

    properties: {
        wall: cc.Prefab,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.gameState = gameState;
        // cc.director.getPhysicsManager().enabled = true;//存在一定的问题，只可使用
        cc.director.getPhysicsManager().enabled = true;
        this.node.on(cc.Node.EventType.TOUCH_START, this.TouchStart, this)
        this.node.on(cc.Node.EventType.TOUCH_END, this.TouchEnd, this)
    },

    start() {
        
    },
    TouchStart() {
        // 小鸟向上飞翔
        this.state = 1
    },
    TouchEnd() {
        // cc.log('end')
        this.state = 0
    },
    gameStartBtn(){//开始游戏按钮点击
        this.gameState=1;
        this.node.getChildByName('gameMask').active = false;

        if(this.gameState==1){//开始按钮已经点击
            setInterval(() => {
                this.createWall();//创建水管
            }, 2000);
        }
    },
    createWall() {
        let wallNode = this.node.getChildByName('wallNode');
        let y = -200 + Math.random() * 400;
        let wall = cc.instantiate(this.wall);
        wall.x = 450;
        wall.y = y
        wallNode.addChild(wall);
        // let wallNode = this.node.getChildByName('wallNode');
        // let y = -200 + Math.random() * 400;
        // this.wall = cc.instantiate(this.wall);
        // this.wall.x = 400;
        // this.wall.y = y
        // wallNode.addChild(this.wall);
    },

    update(dt) {
        let bird = this.node.getChildByName('ball')
        if(this.gameState==1){

            if (this.state == 1) {
                bird.y += 5
                bird.angle < 20 ? bird.angle += 1 : bird.angle = 20
            } else {
                bird.y -= 5
                bird.angle = 0 ? bird.angle -= 0.5 : bird.angle = 0
            }
        }
        
    },

});
