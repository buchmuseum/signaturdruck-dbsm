function makelabel() {
    var zeilen = document.querySelectorAll('#formular input');
    var labeltext = '';
    for (let i = 0; i < zeilen.length; i++) {
        var zeilennummer = i + 1;
        labeltext += "<div class='zeile' id='z" + zeilennummer + "'>";
        labeltext += zeilen[i].value;
        labeltext += "</div>";
    }

    var labels = document.querySelectorAll(".label")
    for (var index = 0; index < labels.length; index++) {
        labels[index].innerHTML = labeltext;
    }
}

makelabel();
document.querySelector('#formular').addEventListener('input', makelabel);