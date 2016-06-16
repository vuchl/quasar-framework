module.exports=function(s){function n(i){if(e[i])return e[i].exports;var l=e[i]={exports:{},id:i,loaded:!1};return s[i].call(l.exports,l,l.exports,n),l.loaded=!0,l.exports}var e={};return n.m=s,n.c=e,n.p="",n(0)}({0:function(s,n,e){s.exports=e(116)},116:function(s,n,e){"use strict";var i=e(117),l=e(118);s.exports={template:i,methods:{launchModal:function(){new quasar.Modal({template:l}).set({maximized:!0}).show()}},ready:function(){quasar.current.layout.vm.$data.title="Slider"}}},117:function(s,n){s.exports='<h5>\n  Basic Slider. No controls. Just swipe between slides or\n  use you mouse to drag slides to left or right.\n</h5>\n<slider class="text-white">\n  <div slot="slide" class="bg-primary">\n    Slide 1\n  </div>\n  <div slot="slide" class="bg-secondary">\n    Slide 2\n  </div>\n  <div slot="slide" class="bg-tertiary">\n    Slide 3\n  </div>\n</slider>\n\n<h5>Slider with Arrows, Dots and Fullscreen controls.</h5>\n<slider arrows dots fullscreen class="text-white">\n  <div slot="slide" class="bg-primary">\n    <div>Slide 1</div>\n    <div v-for="n in 12">Line {{(n+2)}}</div>\n  </div>\n  <div slot="slide" class="bg-secondary">\n    Slide 2\n  </div>\n  <div slot="slide" class="bg-tertiary">\n    Slide 3\n  </div>\n</slider>\n\n<h5>Slider with Centered Content</h5>\n<slider arrows dots class="text-white">\n  <div slot="slide" class="bg-primary centered">\n    Slide 1\n  </div>\n  <div slot="slide" class="bg-secondary centered">\n    Slide 2\n  </div>\n  <div slot="slide" class="bg-tertiary centered">\n    Slide 3\n  </div>\n</slider>\n\n<h5>Slider with Custom Actions as Controls</h5>\n<slider arrows dots actions class="text-white">\n  <div slot="slide" class="bg-primary">\n    <div v-for="n in 20">Slide {{n}}</div>\n  </div>\n  <div slot="slide" class="bg-secondary">\n    Slide 2\n  </div>\n  <div slot="slide" class="bg-tertiary">\n    Slide 3\n  </div>\n  <i slot="action">camera_enhance</i>\n  <i slot="action">bookmark_border</i>\n  <i slot="action">add_shopping_cart</i>\n</slider>\n\n<h5>Launch Slider on Fullscreen</h5>\n<button class="primary glossy" @click="launchModal()">\n  Launch\n</button>\n'},118:function(s,n){s.exports='<slider arrows dots class="text-white full-height">\n  <div slot="slide" class="bg-primary centered">\n    <div>Slide 1</div>\n    <button class="dark glossy" @click="close()">Close Me</button>\n  </div>\n  <div slot="slide" class="bg-secondary centered">\n    <div>Slide 2</div>\n    <button class="dark glossy" @click="close()">Close Me</button>\n  </div>\n  <div slot="slide" class="bg-tertiary centered">\n    <div>Slide 3</div>\n    <button class="dark glossy" @click="close()">Close Me</button>\n  </div>\n</slider>\n'}});