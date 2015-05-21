/**
 * Prevent Console Errors
 *
 * @desc  Avoid `console` errors in browsers that lack a console.
 * @url   https://github.com/h5bp/html5-boilerplate/blob/master/dist/js/plugins.js
 * @date  2015-05-20
 * @since 0.0.1
 */

var overrideConsole = function(prevent){
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    prevent = prevent || false;

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method] || prevent) {
            console[method] = noop;
        }
    }
};
overrideConsole();


/**
 * String.format
 *
 * @desc  Equivalent of String.format in Javascript
 * @url   http://stackoverflow.com/questions/1038746/equivalent-of-string-format-in-jquery
 * @date  2015-05-20
 * @since 0.0.1
 */

if (typeof String.prototype.format !== "function") {
    String.prototype.format = function () {
        var s = this,
            i = arguments.length;

        while (i--) {
            s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
        }
        return s;
    };
}


/**
 * String.stripHtmlTags
 *
 * @desc  Strip HTML Tags. Sample: "Hello <br>World!" -> "Hello World!"
 * @date  2015-05-20
 * @since 0.0.1
 */

if (typeof String.prototype.stripHtmlTags !== "function") {
    String.prototype.stripHtmlTags = function () {
        return this.replace(/(<([^>]+)>)/ig, "");
    }
}


/**
 * String.repeat
 *
 * @desc  Repeat string. Sample: "a".repeat(5) -> "aaaaa"
 * @date  2015-05-20
 * @since 0.0.1
 */

if (typeof String.prototype.repeat !== "function") {
    String.prototype.repeat = function (num) {
        return new Array(num + 1).join(this);
    }
}


/**
 * Array.indexOf
 *
 * @desc  IE<9 doesn't have an .indexOf() function for Array
 * @url   https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf#Polyfill
 * @date  2015-05-20
 * @since 0.0.1
 */

// Production steps of ECMA-262, Edition 5, 15.4.4.14
// Reference: http://es5.github.io/#x15.4.4.14
if (!Array.prototype.indexOf) {
  Array.prototype.indexOf = function(searchElement, fromIndex) {

    var k;

    // 1. Let O be the result of calling ToObject passing
    //    the this value as the argument.
    if (this == null) {
      throw new TypeError('"this" is null or not defined');
    }

    var O = Object(this);

    // 2. Let lenValue be the result of calling the Get
    //    internal method of O with the argument "length".
    // 3. Let len be ToUint32(lenValue).
    var len = O.length >>> 0;

    // 4. If len is 0, return -1.
    if (len === 0) {
      return -1;
    }

    // 5. If argument fromIndex was passed let n be
    //    ToInteger(fromIndex); else let n be 0.
    var n = +fromIndex || 0;

    if (Math.abs(n) === Infinity) {
      n = 0;
    }

    // 6. If n >= len, return -1.
    if (n >= len) {
      return -1;
    }

    // 7. If n >= 0, then Let k be n.
    // 8. Else, n<0, Let k be len - abs(n).
    //    If k is less than 0, then let k be 0.
    k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

    // 9. Repeat, while k < len
    while (k < len) {
      // a. Let Pk be ToString(k).
      //   This is implicit for LHS operands of the in operator
      // b. Let kPresent be the result of calling the
      //    HasProperty internal method of O with argument Pk.
      //   This step can be combined with c
      // c. If kPresent is true, then
      //    i.  Let elementK be the result of calling the Get
      //        internal method of O with the argument ToString(k).
      //   ii.  Let same be the result of applying the
      //        Strict Equality Comparison Algorithm to
      //        searchElement and elementK.
      //  iii.  If same is true, return k.
      if (k in O && O[k] === searchElement) {
        return k;
      }
      k++;
    }
    return -1;
  };
}


/**
 * Array.max
 *
 * @desc  Function to get the Max value in Array
 * @date  2015-05-20
 * @since 0.0.1
 */

if (!Array.prototype.max) {
    Array.max = function (array) {
        return Math.max.apply(Math, array);
    };
}


/**
 * Array.min
 *
 * @desc  Function to get the Min value in Array
 * @date  2015-05-20
 * @since 0.0.1
 */

if (!Array.prototype.min) {
    Array.min = function (array) {
        return Math.min.apply(Math, array);
    };
}


/**
 * Number.formatMoney
 *
 * @desc  Format money
 * @url   http://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-money-in-javascript#answer-149099
 * @date  2015-05-20
 * @since 0.0.1
 */

if (!Number.prototype.formatMoney) {
    Number.prototype.formatMoney = function (c, d, t) {
        var n = this,
            c = isNaN(c = Math.abs(c)) ? 2 : c,
            d = d == undefined ? "." : d,
            t = t == undefined ? "," : t,
            s = n < 0 ? "-" : "",
            i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j = (j = i.length) > 3 ? j % 3 : 0;
        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
    };
}

