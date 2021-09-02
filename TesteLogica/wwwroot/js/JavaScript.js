function logica() {
    $('#result').html('');

    for (var i = 1; i <= 200; i++) {
        if (i % 5 == 0 && i % 3 == 0)
            addValue('Z', i);
        else if (i % 3 == 0)
            addValue('X', i);
        else if (i % 5 == 0)
            addValue('Y', i);
        else
            addValue(i, i);
    }
    buttonEnd()

    setTimeout(function () {
        buttonStart()
    }, 5000);
}
function addValue(value, repeat) {
    if (repeat == 200)
        $('#result').append(value);
    else
        $('#result').append(value + ',');
}
function buttonStart() {
    $('#buttonAction').removeClass('btn-success');
    $('#buttonAction').addClass('btn-primary');
    $('#buttonAction').text('Iniciar');
    $("#buttonAction").attr("disabled", false);
}
function buttonEnd() {
    $('#buttonAction').removeClass('btn-primary');
    $('#buttonAction').addClass('btn-success');
    $('#buttonAction').text('Finalizado aguarde');
    $("#buttonAction").attr("disabled", true);
}