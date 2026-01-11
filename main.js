function ChangeText() {

    var Collection = document.querySelectorAll("h1");

    if (Collection[0].textContent == "hello world") {
        Collection.forEach((item) => {
            item.textContent = "hello foes";
        })

    } else {
        Collection.forEach((item) => {
            item.textContent = "hello world";
        })
    }

}
