module.exports=function(t){function n(s){if(i[s])return i[s].exports;var e=i[s]={exports:{},id:s,loaded:!1};return t[s].call(e.exports,e,e.exports,n),e.loaded=!0,e.exports}var i={};return n.m=t,n.c=i,n.p="",n(0)}({0:function(t,n,i){t.exports=i(145)},145:function(t,n,i){"use strict";var s=i(146);t.exports=function(t){quasar.current.layout.vm.$data.title="Vue Transitions",t({template:s,data:{visible:!0},methods:{toggleVisibility:function(){this.visible=!this.visible}}})}},146:function(t,n){t.exports='<h2>"Slide" Transition</h2>\n\n<p>\n  Click/Tap on the button below to see the transition in action.\n</p>\n<p>\n  <button class="primary" @click="toggleVisibility()">Toggle</button>\n</p>\n\n<p>\n  <img\n    class="responsive"\n    v-show="visible"\n    transition="slide"\n    src="assets/quasar.jpg"\n  >\n</p>\n'}});