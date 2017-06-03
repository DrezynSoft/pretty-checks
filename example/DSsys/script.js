DSsys.ladowanie.dodAuto(function () {
    ds('#btn1').on('click', function (e) {
        var czek = ds('#czek7').el();
        if (czek.disabled) {
            ds(e.elmn).war('Disable');
            czek.dssys.czek.disable(false);
        } else {
            ds(e.elmn).war('Enable');
            czek.dssys.czek.disable(true);
        }
    });
    ds('#btn2').on('click', function (e) {
        var czek = ds('#czek7').el();
        if (czek.checked) {
            ds(e.elmn).war('Check');
            czek.dssys.czek.check(false);
        } else {
            ds(e.elmn).war('Uncheck');
            czek.dssys.czek.check(true);
        }
    });
    ds('#btn3').on('click', function (e) {
        var czek = ds('#czek7').el();
        if (czek.dssys.czek.ifIs()) {
            ds(e.elmn).war('Build');
            czek.dssys.czek.destroy();
        } else {
            ds(e.elmn).war('Destroy');
            czek.dssys.czek.build(true);
        }
    });
});