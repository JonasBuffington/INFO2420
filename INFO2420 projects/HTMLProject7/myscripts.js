PrintButton1 = new Image
PrintButton2 = new Image
logo1 = new Image
logo2 = new Image
if (document.images) {
	PrintButton1.src = "Images/print1.png"
	PrintButton2.src = "Images/print2.png"
	logo1.src = "Images/logo1.png"
	logo2.src = "Images/logo2.png"
}

var imgArray = new Array(
    'Image1Lg.jpg',
    'Image2Lg.jpg',
    'Image3Lg.jpg',
    'Image4Lg.jpg'
);

var titleArray = new Array(
    'Heron Drinking From Pond',
    'Pigeon Perched on Stones',
    'Cardinal on a Snowy Branch',
    'Pelicans at the Beach'
);
    
var imgPath = "Images/fullsize/";

function swapImage(imgID) {
    var theImage = document.getElementById('theImage');
    var textDiv = document.getElementById('bottomText');
    var newImg;
    var textTitle;
    newImg = imgArray[imgID];
    theImage.src = imgPath + newImg;
    textTitle = titleArray[imgID];
    textDiv.innerHTML = textTitle;
}
    
function preloadImages() {		
    for(var i = 0; i < imgArray.length; i++) {
        var tmpImg = new Image;
        tmpImg.src = imgPath + imgArray[i];
    }
}