(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.cssobj_plugin_keyframes = factory());
}(this, (function () { 'use strict';

// helper functions for cssobj

// check n is numeric, or string of numeric




// set default option (not deeply)


// convert js prop into css prop (dashified)


// capitalize str


// repeat str for num times


// random string, should used across all cssobj plugins
var random = (function () {
  var count = 0;
  return function (prefix) {
    count++;
    return '_' + (prefix||'') + Math.floor(Math.random() * Math.pow(2, 32)).toString(36) + count + '_'
  }
})();

// extend obj from source, if it's no key in obj, create one


// ensure obj[k] as array, then push v into it


// replace find in str, with rep function result


// get parents array from node (when it's passed the test)


// split selector with comma, aware of css attributes


// split selector with splitter, aware of css attributes


// split char aware of syntax


// checking for valid css value

function fm (option) {
  option = option || {};
  var space = option.space = option.space || random('ani_');
  return {
    selector: function (sel, node) {
      var match = /^\s*@keyframes\s+(.*)$/i.exec(node.groupText);
      if (match) {
        node.groupText = '@keyframes ' +
          (
            match[1].charAt(0) == '!'
              ? match[1].slice(1)
              : match[1].trim() + space
          );
      }
      return sel
    },
    value: function (val, key) {
      return ['animationName', 'animation'].indexOf(key) > -1
        ? val.charAt(0) == '!' ? val.slice(1) : val.trim() + space
      : val
    }
  }
}

return fm;

})));
