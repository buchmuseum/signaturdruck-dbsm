document.querySelector('#formular').addEventListener('input', makelabel);

function makelabel() {
    var zeile1 = document.getElementById("zeile1").value,
        zeile2 = document.getElementById("zeile2").value;

    document.querySelector('output').textContent = zeile1 + zeile2;
}
