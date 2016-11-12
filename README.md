# cssobj-plugin-keyframes
Make keyframes rules localized, and apply to animation and animation-name css props.

## Install

``` bash
npm install cssobj-plugin-keyframes
```

## Usage

``` javascript
var lib = require('cssobj-plugin-keyframes')
var obj = {
  '@keyframes abc': {},
  '@keyframes !def': {},  // adding ! to become `global` space
  p: {animation: '1s abc'}
  div: {animationName: '!def'}  // adding ! to become `global` space
}

cssobj(obj, { plugins: [lib()] })
```

result css:

``` css
@keyframes abc_i3bhs8s1_ {}
@keyframes def {}
p {
  animation: 1s abc_i3bhs8s1_;
}
div {
  animation-name: def;
}
```

## Caveat

- The name of `@keyframes` and `animation-name` should not ending with space.

- `animation-name` prop should at **last** position in [animation](https://developer.mozilla.org/en-US/docs/Web/CSS/animation) shorthand.


