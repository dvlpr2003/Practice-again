function ChangeText() {
    var text = document.querySelector("h1").textContent;
    if (text == "hello foes") {
        document.querySelector("h1").textContent = "hello world";
    } else {
        document.querySelector("h1").textContent = "hello foes";
    }

}