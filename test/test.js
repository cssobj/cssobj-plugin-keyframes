var expect = require('chai').expect
var _cssobj = require('cssobj-core')
var gencss = require('cssobj-plugin-gencss')

Math.random = function() {
  return 0.1933085600492057
}

var lib = require('../')

describe('test plugin', function() {
  it('@keyframes and animation names', function() {
    var obj={
      '@keyframes abc': { from:{width: 100}, to:{width:200}  },
      p: {
        color: 'red',
        animation: '4s linear 0s infinite alternate abc',
        animationDuration: '1s'
      },
      div: {
        animationName: 'abc',
        animationDelay: '5s'
      }
    }
    var cssobj = _cssobj({plugins:[gencss(), lib()]})
    var ret = cssobj(obj)
    expect(ret.css).equal(`@keyframes abc_ani_dqb81j1_ {
  from {
    width: 100;
  }
  to {
    width: 200;
  }
}
p {
  color: red;
  animation: 4s linear 0s infinite alternate abc_ani_dqb81j1_;
  animation-duration: 1s;
}
div {
  animation-name: abc_ani_dqb81j1_;
  animation-delay: 5s;
}
`)
  })

  it('should custom space', function() {
    var obj = {
      '@keyframes abc': {},
      '@keyframes !def': {},
      p: {animation: '1s abc'},
      div: {animationName: '!def'}
    }

    var option = {}
    lib(option)
    expect(option.space).equal('_ani_dqb81j2_')

    option = {space: 'xyz'}
    var cssobj = _cssobj({plugins:[gencss(), lib(option)]})
    var ret = cssobj(obj)
    expect(ret.css).equal(`@keyframes abcxyz {
}
@keyframes def {
}
p {
  animation: 1s abcxyz;
}
div {
  animation-name: def;
}
`)
  })
})
