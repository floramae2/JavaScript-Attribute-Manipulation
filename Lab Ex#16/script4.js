function toggleClass() {
    var div = document.getElementById('myDiv');
    if (div.classList.contains('class1')) {
        div.classList.remove('class1');
        div.classList.add('class2');
    } else {
        div.classList.remove('class2');
        div.classList.add('class1');
    }
}
