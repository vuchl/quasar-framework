module.exports=function(e){function n(o){if(i[o])return i[o].exports;var l=i[o]={exports:{},id:o,loaded:!1};return e[o].call(l.exports,l,l.exports,n),l.loaded=!0,l.exports}var i={};return n.m=e,n.c=i,n.p="",n(0)}({0:function(e,n,i){e.exports=i(119)},119:function(e,n,i){"use strict";var o=i(120);e.exports={template:o,data:{size:36,color:"#000000",spinners:["audio","ball","bars","circles","dots","grid","hearts","ios","oval","puff","rings","tail"],colorOptions:[{label:"Black",value:"#000000"},{label:"Red",value:"#ff0000"},{label:"Green",value:"#00ff00"},{label:"Blue",value:"#0000ff"}]},ready:function(){quasar.current.layout.vm.$data.title="Spinners"}}},120:function(e,n){e.exports='<h5>Configure them</h5>\n\n<div class="list item-delimiter bordered">\n  <div class="item">\n    <i>format_size</i>\n    <div class="item-content">\n      <range :model.sync="size" min="20" max="256"></range>\n      <div class="item-left-margin item-value" style="font-weight: bold">{{size}}px</div>\n    </div>\n  </div>\n  <div class="item fixed-label">\n    <i>palette</i>\n    <div class="item-content">\n      <label for="color-spinner" class="item-label">Color</label>\n      <input id="color-spinner" v-model="color">\n      <choice :model.sync="color" :options="colorOptions" ok-label="Pick" title="Spinner Color"></choice>\n    </div>\n  </div>\n</div>\n\n<h5>Hover over them to see their names</h5>\n\n<div style="margin-top: 20px">\n  <div v-for="spinner in spinners" v-tooltip.inline="spinner">\n    <spinner :name="spinner" :color="color" :size="size"></spinner>\n  </div>\n</div>\n'}});