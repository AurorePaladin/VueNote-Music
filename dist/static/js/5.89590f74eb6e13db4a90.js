webpackJsonp([5],{581:function(t,n,e){e(619);var i=e(9)(e(600),e(631),"data-v-31b15d8e",null);t.exports=i.exports},594:function(t,n,e){"use strict";function i(){var t=a()({},l.b,{uin:0,needNewCode:1,platform:"h5"});return e.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_myqq_toplist.fcg",t,l.c)}function o(t){var n=a()({},l.b,{topid:t,needNewCode:1,uin:0,tpl:3,page:"detail",type:"top",platform:"h5"});return e.i(A.a)("https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg",n,l.c)}n.b=i,n.a=o;var s=e(88),a=e.n(s),A=e(200),l=e(65)},600:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=e(57),o=e.n(i),s=e(66),a=e.n(s),A=e(201),l=e.n(A),r=e(594),p=e(65),d=e(87),c=e(49);n.default={mixins:[d.c],created:function(){this._getTopList()},data:function(){return{topList:[]}},methods:o()({handlePlaylist:function(t){var n=t.length>0?"60px":"";this.$refs.rank.style.bottom=n,this.$refs.toplist.refresh()},selectItem:function(t){this.$router.push({path:"/rank/"+t.id}),this.setTopList(t)},_getTopList:function(){var t=this;e.i(r.b)().then(function(n){n.code===p.a&&(t.topList=n.data.topList)})}},e.i(c.b)({setTopList:"SET_TOP_LIST"})),watch:{topList:function(){var t=this;setTimeout(function(){t.$Lazyload.lazyLoadHandler()},20)}},components:{Scroll:a.a,Loading:l.a}}},609:function(t,n,e){n=t.exports=e(578)(!0),n.push([t.i,".rank[data-v-31b15d8e]{position:fixed;width:100%;top:88px;bottom:0}.rank .toplist[data-v-31b15d8e]{height:100%;overflow:hidden}.rank .toplist .item[data-v-31b15d8e]{display:-ms-flexbox;display:flex;margin:0 20px;padding-top:20px;height:100px}.rank .toplist .item[data-v-31b15d8e]:last-child{padding-bottom:20px}.rank .toplist .item .icon[data-v-31b15d8e]{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;height:100px}.rank .toplist .item .songlist[data-v-31b15d8e]{-ms-flex:1;flex:1;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;padding:0 20px;height:100px;overflow:hidden;background:#333;color:hsla(0,0%,100%,.3);font-size:12px}.rank .toplist .item .songlist .song[data-v-31b15d8e]{text-overflow:ellipsis;overflow:hidden;white-space:nowrap;line-height:26px}.rank .toplist .loading-container[data-v-31b15d8e]{position:absolute;width:100%;top:50%;transform:translateY(-50%)}","",{version:3,sources:["/Users/Aurore/git/FENote/VueNote-Music/src/components/rank/rank.vue"],names:[],mappings:"AACA,uBACE,eAAgB,AAChB,WAAY,AACZ,SAAU,AACV,QAAU,CACX,AACD,gCACE,YAAa,AACb,eAAiB,CAClB,AACD,sCACE,oBAAqB,AACrB,aAAc,AACd,cAAe,AACf,iBAAkB,AAClB,YAAc,CACf,AACD,iDACE,mBAAqB,CACtB,AACD,4CACE,mBAAoB,AAChB,eAAgB,AACpB,YAAa,AACb,YAAc,CACf,AACD,gDACE,WAAY,AACR,OAAQ,AACZ,oBAAqB,AACrB,aAAc,AACd,0BAA2B,AACvB,sBAAuB,AAC3B,qBAAsB,AAClB,uBAAwB,AAC5B,eAAgB,AAChB,aAAc,AACd,gBAAiB,AACjB,gBAAiB,AACjB,yBAA6B,AAC7B,cAAgB,CACjB,AACD,sDACE,uBAAwB,AACxB,gBAAiB,AACjB,mBAAoB,AACpB,gBAAkB,CACnB,AACD,mDACE,kBAAmB,AACnB,WAAY,AACZ,QAAS,AACT,0BAA4B,CAC7B",file:"rank.vue",sourcesContent:["\n.rank[data-v-31b15d8e] {\n  position: fixed;\n  width: 100%;\n  top: 88px;\n  bottom: 0;\n}\n.rank .toplist[data-v-31b15d8e] {\n  height: 100%;\n  overflow: hidden;\n}\n.rank .toplist .item[data-v-31b15d8e] {\n  display: -ms-flexbox;\n  display: flex;\n  margin: 0 20px;\n  padding-top: 20px;\n  height: 100px;\n}\n.rank .toplist .item[data-v-31b15d8e]:last-child {\n  padding-bottom: 20px;\n}\n.rank .toplist .item .icon[data-v-31b15d8e] {\n  -ms-flex: 0 0 100px;\n      flex: 0 0 100px;\n  width: 100px;\n  height: 100px;\n}\n.rank .toplist .item .songlist[data-v-31b15d8e] {\n  -ms-flex: 1;\n      flex: 1;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-direction: column;\n      flex-direction: column;\n  -ms-flex-pack: center;\n      justify-content: center;\n  padding: 0 20px;\n  height: 100px;\n  overflow: hidden;\n  background: #333;\n  color: rgba(255,255,255,0.3);\n  font-size: 12px;\n}\n.rank .toplist .item .songlist .song[data-v-31b15d8e] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  line-height: 26px;\n}\n.rank .toplist .loading-container[data-v-31b15d8e] {\n  position: absolute;\n  width: 100%;\n  top: 50%;\n  transform: translateY(-50%);\n}"],sourceRoot:""}])},619:function(t,n,e){var i=e(609);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);e(579)("68fe82cf",i,!0)},631:function(t,n){t.exports={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{ref:"rank",staticClass:"rank"},[e("scroll",{ref:"toplist",staticClass:"toplist",attrs:{data:t.topList}},[e("ul",t._l(t.topList,function(n){return e("li",{staticClass:"item",on:{click:function(e){t.selectItem(n)}}},[e("div",{staticClass:"icon"},[e("img",{directives:[{name:"lazy",rawName:"v-lazy",value:n.picUrl,expression:"item.picUrl"}],attrs:{width:"100",height:"100"}})]),t._v(" "),e("ul",{staticClass:"songlist"},t._l(n.songList,function(n,i){return e("li",{staticClass:"song"},[e("span",[t._v(t._s(i+1))]),t._v(" "),e("span",[t._v(t._s(n.songname)+"-"+t._s(n.singername))])])}))])})),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!t.topList.length,expression:"!topList.length"}],staticClass:"loading-container"},[e("loading")],1)]),t._v(" "),e("router-view")],1)},staticRenderFns:[]}}});
//# sourceMappingURL=5.89590f74eb6e13db4a90.js.map