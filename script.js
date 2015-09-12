
var currentImageIndex = -1,
    maxImageIndex = 0,
    images = [],
    changeInterval = 4000;

// Prepares relevant variables to cycle throguh images
var setUp = function() {
    var getDivId = document.getElementById("wrapper");
    images = getDivId.getElementsByTagName("img");
    maxImageIndex = images.length;
    currentImageIndex = 0;
};

    // Changes the banner currently being displayed
var changeBanner = function() {
    var i;

    $(images[currentImageIndex]).fadeTo(1000,0, function() {
        $(images[currentImageIndex]).css("display", "none");
        currentImageIndex = (currentImageIndex >= maxImageIndex - 1) ? 0 : currentImageIndex += 1;
        $(images[currentImageIndex]).css("dispay", "inline");
        $(images[currentImageIndex]).fadeTo(1000,1.00);
    });
    

    
    
    //for (i = 0; i < maxImageIndex; i += 1) {
    //    images[i].hidden = (i !== currentImageIndex);
    //}
};

// A function which is triggered following the `load` event
window.onload = function() {
    setUp();

    images[currentImageIndex].hidden = false; // show the first banner image;

    setInterval(changeBanner, changeInterval); // following a delay, keep changing the banner image by the specified interval
};
