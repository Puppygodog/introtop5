function preload(){

}

function setup(){
    canvas = createCanvas(640,480);
    canvas.position(110,210);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0,0,640,480);
    stroke("blue");
    fill("blue");
    circle(20,10,40);
    fill("green");
    rect(20,2,670,10);
    fill("yellow");
    circle(620,10,40);
    fill("purple");
    rect(620,10,10,480);
    fill("red");
    rect(15,10,10,480);
    fill("pink")
    rect(15,470,610,10);
}

function take_snapshot(){
    save("your_picture.png")
}