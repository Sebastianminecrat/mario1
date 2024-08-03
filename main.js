function preload() {
	world_start=loadSound("world_start.wav");
	mario_gameover=loadSound("gameover.wav");
	mario_jump=loadSound("jump.wav");
    mario_coin=loadSound("coin.wav");
    mario_kick=loadSound("kick.wav");
	mario_die=loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent("canvas");
	instializeInSetup(mario);
	video=createCapture(VIDEO);
	video.size(700,800);
	video.parent("game_console");
	poseNet=ml5.poseNet(video, Mario_1);
	poseNet.on("pose", coin);
	
}

function Mario_1() {
	console.log("charge");
}

function coin(model) {
    if(model.length>0) {
		console.log(model);
		noseX=model[0].pose.nose.x;
		noseY=model[0].pose.nose.y;
	}
}

function draw() {
	game()
}






