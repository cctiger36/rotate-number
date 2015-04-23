Rotate number plugin
=================

A simple jQuery plugin to create animations of digital number rotation. Compatible with Zepto.

Usage
---------------------

### HTML Snippet ###

```html
<div id="rotate"></div>
```

### Javascript ###

```javascript
var rotator = $("#rotate").rotateNumber({digits: 5});
```

### CSS ###

```css
#rotate {
  font-family: Arial;
}
#rotate .digit {
  width: 30px;
}
```

### Update Number ###

```javascript
rotator.setNumber(NEW_NUMBER);
```

### Resize ###

```javascript
rotator.resizeDigit(NEW_FONT_SIZE);
```

Options
---------------------

<table>
  <tr>
    <th>Option</th><th>Description</th><th>Default</th>
  </tr>
  <tr>
    <td>digits</td><td>Number of the digits</td><td>3</td>
  </tr>
  <tr>
    <td>digitSize</td><td>Font size of the digits</td><td>50</td>
  </tr>
  <tr>
    <td>rotateDuration</td><td>Duration of the rotate animation</td><td>0.6 (s)</td>
  </tr>
  <tr>
    <td>separator</td><td>Insert separator per 3 digits (e.g. ',')</td><td>None</td>
  </tr>
</table>

Demo
---------------------
[Live demo here](http://cctiger36.github.io/rotate-number)
