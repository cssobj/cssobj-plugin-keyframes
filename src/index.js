import {random} from '../../cssobj-helper/lib/cssobj-helper.js'

export default function fm(option) {
  option = option || {}
  const space = option.space = option.space || random('ani_')
  return {
    selector: function(sel, node) {
      const match = /^\s*@keyframes\s+(.*)$/i.exec(node.groupText)
      if(match) {
        node.groupText = '@keyframes ' +
          (
            match[1].charAt(0)=='!'
              ? match[1].slice(1)
              : match[1]+space
          )
      }
      return sel
    },
    value: function(val, key) {
      return ['animationName', 'animation'].indexOf(key) > -1
        ? val.charAt(0)=='!' ? val.slice(1) : val + space
        : val
    }
  }
}
