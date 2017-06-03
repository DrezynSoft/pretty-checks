$(function () {
    $('#btn1').on('click', function () {
        var czek = $('#czek7');
        if (czek.prop('disabled')) {
            $(this).val('Disable');
            czek.get(0).dssys.czek.disable(false);
        } else {
            $(this).val('Enable');
            czek.get(0).dssys.czek.disable(true);
        }
    });
    $('#btn2').on('click', function () {
        var czek = $('#czek7');
        if (czek.prop('checked')) {
            $(this).val('Check');
            czek.get(0).dssys.czek.check(false);
        } else {
            $(this).val('Uncheck');
            czek.get(0).dssys.czek.check(true);
        }
    });
    $('#btn3').on('click', function () {
        var czek = $('#czek7').get(0);
        if (czek.dssys.czek.ifIs()) {
            $(this).val('Build');
            czek.dssys.czek.destroy();
        } else {
            $(this).val('Destroy');
            czek.dssys.czek.build(true);
        }
    });
});