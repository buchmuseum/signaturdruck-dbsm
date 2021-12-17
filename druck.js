document.querySelector('#formular').addEventListener('input', makelabel);

function makelabel() {
    var zeile1 = document.getElementById("zeile1").value,
        zeile2 = document.getElementById("zeile2").value;

    labels = document.querySelectorAll(".label")
    for (var index = 0; index < labels.length; index++) {
        labels[index].textContent = zeile1 + zeile2;
    }
}
