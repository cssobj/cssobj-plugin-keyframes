// helper functions for cssobj

// check n is numeric, or string of numeric


function own(o, k) {
  return {}.hasOwnProperty.call(o, k)
}

// set default option (not deeply)


// convert js prop into css prop (dashified)


// capitalize str


// repeat str for num times


// don't use String.prototype.trim in cssobj, using below instead


// random string, should used across all cssobj plugins
var random = (function () {
  var count = 0;
  return function () {
    count++;
    return '_' + Math.floor(Math.random() * Math.pow(2, 32)).toString(36) + count + '_'
  }
})();

// extend obj from source, if it's no key in obj, create one


// ensure obj[k] as array, then push v into it
function arrayKV (obj, k, v, reverse, unique) {
  obj[k] = k in obj ? [].concat(obj[k]) : [];
  if(unique && obj[k].indexOf(v)>-1) { return }
  reverse ? obj[k].unshift(v) : obj[k].push(v);
}

// replace find in str, with rep function result


// get parents array from node (when it's passed the test)


// split selector etc. aware of css attributes


// checking for valid css value

function fm(option) {
  option = option || {};
  var suffix = option.suffix = option.suffix || random();
  return {
    selector: function(sel, node) {
      var match = /^\s*@keyframes\s+(.*)$/i.exec(node.groupText);
      if(match) {
        node.groupText = '@keyframes ' +
          (
            match[1].charAt(0)=='!'
              ? match[1].slice(1)
              : match[1]+suffix
          );
      }
      return sel
    },
    value: function(val, key) {
      return ['animationName', 'animation'].indexOf(key) > -1
        ? val.charAt(0)=='!' ? val.slice(1) : val + suffix
        : val
    }
  }
}

export default fm;
