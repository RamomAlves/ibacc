//New Bono JavaScript

var imageTracker = "building";


function imgFunc(){
    var image = document.getElementById('centerIMG');
    if (imageTracker ==='building') {
        image.src='byg1.jpg';
        imageTracker='byg1';
    } else {
        image.src="building.jpg";
        imageTracker="building";
    }

}

var timer = setInterval('imgFunc();', 3000);

function stop() {
    clearInterval(timer);
}