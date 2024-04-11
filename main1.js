function preload(){}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    posenet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){}

function takesnap(){
    save("funnypic.png");
}

function modelLoaded(){
    console.log("PoseNet is initialized!!");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        console.log("nosex = " + results[0].pose.nose.x);
        console.log("nosey = " + results[0].pose.nose.y);
    }
}