// rollup.config.js

import buble from 'rollup-plugin-buble'
import minify from 'rollup-plugin-minify'

export default {
  entry: './src/index.js',
  moduleName: 'cssobj_plugin_keyframes',
  plugins:[
    buble(),
    minify({iife: 'dist/cssobj-plugin-keyframes.min.js'})
  ],
  targets: [
    { format: 'es',   dest: 'dist/cssobj-plugin-keyframes.es.js'   },
    { format: 'cjs',  dest: 'dist/cssobj-plugin-keyframes.cjs.js'  },
    { format: 'amd',  dest: 'dist/cssobj-plugin-keyframes.amd.js'  },
    { format: 'iife', dest: 'dist/cssobj-plugin-keyframes.iife.js' },
  ]
}
