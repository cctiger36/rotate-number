Rotate number plugin
=================

A simple jQuery plugin to create animations of digital number rotation. Compatible with Zepto.

Example
---------------------

### HTML Snippet ######

    <div id="rotate"></div>

### Javascript ######

    $("#rotate").rotateNumber({digits: 5});

### CSS ######

    #rotate {
      font-family: Arial;
    }
    #rotate .digit {
      width: 30px;
    }

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
</table>
