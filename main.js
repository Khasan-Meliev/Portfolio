function javob() {
    var input = document.getElementById('answer').value.toLowerCase();

    if(input == "html") {
        document.getElementById('output').innerHTML = "80%";
    }
    else if(input == "css"){
        document.getElementById('output').innerHTML = "60%";
    }
    else if(input == "javascript" || input == "js"){
        document.getElementById('output').innerHTML = "30%";
    }
    else if(input == "c++" || input == "cplusplus"){
        document.getElementById('output').innerHTML = "40%";
    }
    else {
        document.getElementById('output').innerHTML = "Unfortunately I don’t know other languages!😒";
    }
}