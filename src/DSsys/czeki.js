/**
 * Pretty Checks Extension of DSsys from http://dssys.fotokrajobrazy.warmia.pl
 * All right reserved. DrezynSoft 2017
 * Commercial use without permission prohibited.
 */
if (!window.DSsys) {
    window.DSsys = {};
}
DSsys.czek = function (czek, opts)
{
    this.czek = czek;

    if (opts && opts.type) {
        this.type = opts.type;
    }
    if (opts && opts.span) {
        this.spanContent = opts.span;
    }
    if (opts && opts.getRadioGroupFn) {
        this.getRadioGroupFn = opts.getRadioGroupFn;
    }
    if (opts && opts.className) {
        this.className = opts.className;
    } else {
        this.className = 'hook';
    }
    if (opts && opts.classes) {
        this.classNames = opts.classNames;
    } else {
        if (this.getType() == 'radio') {
            this.classNames = {sel: 'sel-r', noSel: 'no-sel-r', sel_noAct: 'sel-r-no-act', noSel_noAct: 'no-sel-r-no-act'};
        } else {
            this.classNames = {sel: 'sel', noSel: 'no-sel', sel_noAct: 'sel-no-act', noSel_noAct: 'no-sel-no-act'};
        }
    }

    if (!this.czek.dssys) {
        this.czek.dssys = {};
    }
    this.czek.dssys.czek = this;

    this.build();
};
DSsys.czek.prototype.check = function (sel)
{
    if (this.getType() == 'radio') {
        var els = this.asRadioGroup()(this.czek);
        for (var i = 0; i < els.length; i++) {
            var span = ds(ds(els[i]).poprzedniEl());
            span.zmnKlase(this.classNames['sel'], this.classNames['noSel']);
            if (els[i].disabled) {
                span.zmnKlase(this.classNames['sel' + '_noAct'], this.classNames['noSel' + '_noAct']);
            }
        }
    }
    if (sel) {
        this.czek.checked = true;
        this.sp.zmnKlase(this.classNames['noSel'], this.classNames['sel']);
        if (this.czek.disabled) {
            this.sp.zmnKlase(this.classNames['noSel' + '_noAct'], this.classNames['sel' + '_noAct']);
        }
    } else {
        this.czek.checked = false;
        this.sp.zmnKlase(this.classNames['sel'], this.classNames['noSel']);
        if (this.czek.disabled) {
            this.sp.zmnKlase(this.classNames['sel' + '_noAct'], this.classNames['noSel' + '_noAct']);
        }
    }
};
DSsys.czek.prototype.disable = function (disable)
{
    if (disable) {
        this.czek.disabled = true;
        this.sp.zmnKlase('', this.classNames[this.getBaseClass() + '_noAct']);
    } else {
        this.czek.disabled = false;
        this.sp.zmnKlase(this.classNames[this.getBaseClass() + '_noAct'], '');
    }
};
DSsys.czek.prototype.refreshState = function ()
{
    if (this.ifIs()) {
        if (this.czek.checked) {
            this.sp.zmnKlase(this.classNames['noSel'], this.classNames['sel']);
        } else {
            this.sp.zmnKlase(this.classNames['sel'], this.classNames['noSel']);
        }
        this.sp.zmnKlase(this.classNames['noSel' + '_noAct'], '');
        this.sp.zmnKlase(this.classNames['sel' + '_noAct'], '');
        if (this.czek.disabled) {
            this.sp.zmnKlase('', this.classNames[this.getBaseClass() + '_noAct']);
        }
    }
};
DSsys.czek.prototype.checked = function ()
{
    return this.czek.checked;
};
DSsys.czek.prototype.disabled = function ()
{
    return this.czek.disabled;
};
DSsys.czek.prototype.build = function ()
{
    if (!this.ifIs()) {
        if ((this.czek.type == 'checkbox') || (this.czek.type == 'radio')) {
            this.addNestedLabelEvent(this.addLabelEvent());
            this.sp = ds(this.czek.parentNode.insertBefore(this.createSpan(), this.czek));
            this.displayVal = this.czek.style.display;
            this.czek.style.display = 'none';
        }
    }
};
DSsys.czek.prototype.destroy = function ()
{
    if (this.ifIs()) {
        ds(ds(this.czek).poprzedniEl()).usun();
        this.czek.style.display = this.displayVal;
    }
};
DSsys.czek.prototype.ifIs = function ()
{
    var sp = ds(this.czek).poprzedniEl();
    if (sp) {
        return ds(sp).czyJestKlasa(this.className);
    }
    return false;
};
DSsys.czek.prototype.getType = function ()
{
    return (this.type) ? this.type : this.czek.type;
};
DSsys.czek.prototype.asRadioGroup = function ()
{
    return (this.getRadioGroupFn) ? this.getRadioGroupFn : function(czek) {
        var form = ds(czek).najblizszy('form').el();
        if (form) {
            return ds('input[type="radio"][name="' + czek.name + '"]', form).elmn;
        }
        return ds('input[type="radio"][name="' + czek.name + '"]').elmn;
    };
};
DSsys.czek.prototype.getBaseClass = function ()
{
    return (this.czek.checked) ? 'sel' : 'noSel';
};
DSsys.czek.prototype.updateLabel = function (e)
{
    ds.zda.stopDomyslne(e.zda);
    this.updateInput();
};
DSsys.czek.prototype.update = function (zda)
{
    this.updateInput();
};
DSsys.czek.prototype.updateInput = function ()
{
    if (this.czek.checked && !this.czek.disabled) {
        this.check(false);
        ds(this.czek).odpalZda('change');
    } else if (!this.czek.disabled) {
        this.check(true);
        ds(this.czek).odpalZda('change');
    }
};
DSsys.czek.prototype.addLabelEvent = function ()
{
    if (this.czek.id != '') {
        var lab = ds('label[for="' + this.czek.id + '"]').el();
        if (lab) {
            ds(lab).on('click', ds.zwiazFnZda(this.updateLabel, this));
            this.label = false;
        }
    }
    return lab;
};
DSsys.czek.prototype.addNestedLabelEvent = function (l)
{
    var lab = this.czek.parentNode;
    while (lab) {
        if (lab.nodeName.toLowerCase() == 'label') {
            if (lab !== l) {
                ds(lab).on('click', ds.zwiazFnZda(this.updateLabel, this));
            }
            this.label = true;
            break;
        }
        lab = lab.parentNode;
    }
};
DSsys.czek.prototype.createSpan = function ()
{
    var type = this.getBaseClass();
    var sp = document.createElement('span');
    if (this.spanContent) {
        sp.innerHTML = this.spanContent;
    } else {
        var t = document.createTextNode(' ');
        sp.appendChild(t);
    }
    var className = this.className + ' ' + this.classNames[type];
    if (this.czek.disabled) {
        className += ' ' + this.classNames[type + '_noAct'];
    }
    sp.className = className;
    if (!this.label) {
        ds(sp).on('click', ds.zwiazFnZda(this.update, this));
    }
    return sp;
};