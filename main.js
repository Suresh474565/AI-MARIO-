function preload() {
	world_start = loadSound("world_start.wav");
	jump = loadSound("jump.wav");
	kick = loadSound("kick.wav");
	coin_got = loadSound("coin.wav");
	game_over = loadSound("gameover.wav");
	death= loadSound("mariodie.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,366);
	canvas.parent('canvas')
	instializeInSetup(mario);
	video = createCapture(VIDEO);
	video.size(800,400);
	video.parent('game_console');
poseNet= ml5.poseNet(video,modelLoaded);
poseNet.on("pose",gotResults);
	

	
}

function modelLoaded()
{

console.log("FOOTBALL can be played");

}

function gotResults(results)
{

	if(results.length>0)
	{

console.log(results);

NoseX=results[0].pose.nose.x;
NoseY=results[0].pose.nose.y;



	}


}

function draw() {
	game();

}






