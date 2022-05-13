Status = "";
img = "";

function setup(){
    canvas = createCanvas(640,330);
    canvas.center();
    objectdetector = ml5.objectDetector("cocossd",modelloaded);
    document.getElementById("status").innerHTML = "Status:Detecting object  " + "<span class='glyphicon glyphicon-cog'></span>"
}

function preload(){
    img = loadImage("dog_cat.jpg");
 }

 function modelloaded(){
    console.log("Model is working neat and fine");
    objectdetector.detect(img,gotresults);
}

function gotresults(error,results){
    if (error){
        console.log(error);
    }
    else {
      console.log(results);
    }
}

function draw(){
   image(img,0,0,640,330);
}