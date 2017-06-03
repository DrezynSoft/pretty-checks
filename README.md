# Pretty checks

This is JavaScript, CSS code which make desired inputs of type `checkbox` and `radio` looking nicely.

## Instalation

You can use [jQuery] or [DSsys] JavaScript framework to make use of this library.

### jQuery

``` html
<script src="../../src/jQuery/czeki.js"></script>
<!-- view as sprite -->
<link rel="stylesheet" href="../../dist/css/czeki_sprite.css" />
<!-- or view as Font Awsome -->
<link rel="stylesheet" href="../../dist/css/czeki_fa.css" />
```

### DSsys

``` html
<script src="../../src/DSsys/czeki.js"></script>
<!-- view as sprite -->
<link rel="stylesheet" href="../../dist/css/czeki_sprite.css" />
<!-- or view as Font Awsome -->
<link rel="stylesheet" href="../../dist/css/czeki_fa.css" />
```

## Usage

### jQuery

``` js
$(function() {
    $('#czek1,#czek2,#czek3,#czek4,#czek5,#czek6,#czek7').each(function () {
        new DSsys.czek(this);
    });
});
```

### DSsys

``` js
DSsys.start();
. . .
DSsys.ladowanie.dodAuto(function() {
    ds('#czek1,#czek2,#czek3,#czek4,#czek5,#czek6,#czek7').dla(function (el) {
        new DSsys.czek(el);
    });
});
```

## Constructor

- param `check` HTML DOM Element of input control of type `radio` or `checkbox`
- param `opts` See below.

Access to instance of `DSsys.czek` is via `el.dssys` property of element given in `check` param.

## Options param

### `type`

Type of input.

- `radio`
- `checkbox`

Default is type provided by `type` attribute but it can be changed by this option.

### `span`

Content appended to created span.

Default is only one space to ensure that view will be shown.

### `getRadioGroupFn`

Param - The input control is injected to call of this function every time when is necessary to get list of radio corresponding inputs.

Return - It should return array of inputs controls HTML DOM Elements.

Default if not given - All input controls of type `radio` with the same `name` attribute.

> See examples.

### `className`

Main class of span element which is visual representation of pretty check.

Default `hook`.

### `classes`

Modification classes for type of pretty check.
Type given while providing `type` option.

Default

- `radio` type - `{sel: 'sel-r', noSel: 'no-sel-r', sel_noAct: 'sel-r-no-act', noSel_noAct: 'no-sel-r-no-act'}`
- `checkbox` type - `{sel: 'sel', noSel: 'no-sel', sel_noAct: 'sel-no-act', noSel_noAct: 'no-sel-no-act'}`

> You can change it unless preserving names of keys.

## Simple API

Access to instance of `DSsys.czek` is via `el.dssys.czek[method]([param])` where `el` is HTML DOM input of type `radio` or `checkbox`.

``` html
<input type="checkbox" value="true" id="check1" />
```
``` js
//after initializing element `check1`
var check = document.getElementById('check1');
check.dssys.czek.destroy();
```

### `DSsys.czek::check(sel)`

Param `sel`

- `true` - make checked.
- `false` - make unchecked.

Making that input control is checked to `sel` param and also the display of pretty check is changed accordingly.

### `DSsys.czek::disable(disable)`

Param `disable`

- `true` - make disabled.
- `false` - make enabled.

Making that input control is disabled or enabled according to `disable` param and also the display of pretty check is changed accordingly.

### `DSsys.czek::refreshState()`

Updates the display (and only display) of pretty check if some changes of state attributes:

- checked
- disable

have changed.

### `DSsys.czek::checked()`

Return `true` if input control of pretty check is checked, `false` otherwise.

### `DSsys.czek::disabled()`

Return `true` if input control of pretty check is disabled, `false` otherwise.

### `DSsys.czek::build()`

Build pretty view of input control.
Is called automaticly if pretty check is created.

### `DSsys.czek::destroy()`

Removes pretty view of input control.
If you want restore pretty view, use `bulid` method.

## Examples

### jQuery

- [jQuery - Example Font Awesome]
- [jQuery - Example Sprite]

### DSsys

- [DSsys - Example Font Awesome]
- [DSsys - Example Sprite]

## License

> All right reserved. [DrezynSoft] 2017

Commercial use without permission prohibited.

[//]: #
   [DrezynSoft]: <http://drezynsoft.fotokrajobrazy.warmia.pl>
   [DSsys]: <http://dssys.fotokrajobrazy.warmia.pl>
   [DSsys - Example Font Awesome]: <http://dssys.fotokrajobrazy.warmia.pl/przyklady/czeki/example/DSsys/fa.htm>
   [DSsys - Example Sprite]: <http://dssys.fotokrajobrazy.warmia.pl/przyklady/czeki/example/DSsys/sprite.htm>
   [jQuery]: <http://jquery.com>
   [jQuery - Example Font Awesome]: <http://dssys.fotokrajobrazy.warmia.pl/przyklady/czeki/example/jQuery/fa.htm>
   [jQuery - Example Sprite]: <http://dssys.fotokrajobrazy.warmia.pl/przyklady/czeki/example/jQuery/sprite.htm>