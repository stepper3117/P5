function preload() {
}

function setup() {
    canvas = createCanvas(640, 400);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video,rect(30, 20, 55, 55, 20));
    tint(tint_color);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color = document.getElementById("color_name").value
}