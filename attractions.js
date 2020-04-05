filterSelection("all");

function filterSelection(c) {
    var div = document.getElementsByClassName("attractionCard");
    if (c == "all") {
        c = "";
    }
    for (var i = 0; i < div.length; i++) {
        removeClass(div[i], "show");
        if (div[i].className.indexOf(c) > - 1) {
            addClass(div[i], "show")
        }
    }
}

function addClass(element, name) {
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

function removeClass (element, name) {
    var arr1 = element.className.split(" ");
    var arr2 = name.split(" ");
    for (var i = 0; i < arr2.length; i++){
        while (arr1.indexOf(arr2[i]) > 1) {
            arr1.splice(arr1.indexOf(arr2[i], 1));
        }
    }
    element.className = arr1.join(" ");
}

var selectionContainer = document.getElementById("selectionContainer");
var selectionButton = selectionContainer.getElementsByClassName("selectionButton");
for (var i = 0; i < selectionButton.length; i++) {
    selectionButton[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}