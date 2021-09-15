var clicked = false;

function toggle1() {
    if (!clicked) {
        clicked = true;
        document.getElementById("follow1").innerHTML = "Follow";
        document.getElementById("follow1").style.color = "black";
        document.getElementById("follow1").style.backgroundColor = '#EDEEF0';
    } else {
        clicked = false;
        document.getElementById("follow1").style.backgroundColor = 'black';
        document.getElementById("follow1").style.color = 'white';
        document.getElementById("follow1").innerHTML = "Followed";

    }
}

function toggle2() {
    if (!clicked) {
        clicked = true;

        document.getElementById("follow2").style.backgroundColor = 'black';
        document.getElementById("follow2").style.color = 'white';
        document.getElementById("follow2").innerHTML = "Followed";

    } else {
        clicked = false;
        document.getElementById("follow2").innerHTML = "Follow";
        document.getElementById("follow2").style.color = "black";
        document.getElementById("follow2").style.backgroundColor = '#EDEEF0';
    }
}

function toggle3() {
    if (!clicked) {
        clicked = true;

        document.getElementById("follow3").style.backgroundColor = 'black';
        document.getElementById("follow3").style.color = 'white';
        document.getElementById("follow3").innerHTML = "Followed";
    } else {
        clicked = false;
        document.getElementById("follow3").innerHTML = "Follow";
        document.getElementById("follow3").style.color = "black";
        document.getElementById("follow3").style.backgroundColor = '#EDEEF0';
    }
}

function toggle4() {
    if (!clicked) {
        clicked = true;

        document.getElementById("follow4").style.backgroundColor = 'black';
        document.getElementById("follow4").style.color = 'white';
        document.getElementById("follow4").innerHTML = "Followed";
    } else {
        clicked = false;
        document.getElementById("follow4").innerHTML = "Follow";
        document.getElementById("follow4").style.color = "black";
        document.getElementById("follow4").style.backgroundColor = '#EDEEF0';
    }
}