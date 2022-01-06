function preload() {
}

function setup() {

    canvas = createCanvas(700, 500);
    canvas.position(400,300);
    video = createCapture(VIDEO);
    video.hide();

    tintcolor = "";
}

function draw() {
    image(video, 0, 0, 700, 500);
    tint(tintcolor);

}

function take_snapshot() {
    save('my_image.png');
}

function filter_tint() {
    tintcolor = document.getElementById("color_name").value;

}