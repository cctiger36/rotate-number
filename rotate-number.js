(function($) {
  $.rotateNumber = function(el, options) {
    var base = this, opts;

    base.init = function() {
      opts = $.extend({}, $.rotateNumber.defaultOptions, options);
      base.createDigitElements();
      base.initBaseStyles();
    }

    base.createDigitElements = function() {
      for (var i = 0; i < opts.digits; i ++) {
        var e = document.createElement("span");
        e.innerHTML = "0 1 2 3 4 5 6 7 8 9";
        e.className = "digit";
        el[0].appendChild(e);
        if (opts.separator !== '' && opts.digits > i + 1 && (opts.digits - i) % 3 == 1) {
          el[0].appendChild(base.separator());
        }
      }
    }

    base.separator = function() {
      var e = document.createElement("span");
      e.innerHTML = opts.separator;
      e.className = "separator";
      return e;
    }

    base.initBaseStyles = function() {
      el[0].style.height = opts.digitSize + "px";
      el[0].style.fontSize = opts.digitSize + "px";
      el[0].style.lineHeight = opts.digitSize + "px";
      el[0].style.textAlign = "center";
      el[0].style.overflow = "hidden";
      el.find(".digit, .separator").each(function(index, c) {
        c.style.position = "relative";
        c.style.display = "block";
        c.style.cssFloat = "left";
        c.style.top = 0;
        c.style.transition = "top " + opts.rotateDuration + "s ease";
      });
    }

    base.setNumber = function(number) {
      el.find(".digit").each(function(index, c) {
        var n = Math.floor((number % Math.pow(10, opts.digits - index)) / Math.pow(10, opts.digits - index - 1));
        $(c).css('top', -n * opts.digitSize);
      });
    }

    base.resizeDigit = function(digitSize) {
      opts.digitSize = digitSize;
      el[0].style.height = opts.digitSize + "px";
      el[0].style.fontSize = opts.digitSize + "px";
      el[0].style.lineHeight = opts.digitSize + "px";
    }

    base.init();
  };

  $.rotateNumber.defaultOptions = {
    digits: 3,
    digitSize: 50,
    rotateDuration: .6,
    separator: ''
  };

  $.fn.rotateNumber = function(options) {
    return Object.create(new $.rotateNumber(this, options));
  };
}(window.Zepto || window.jQuery));
