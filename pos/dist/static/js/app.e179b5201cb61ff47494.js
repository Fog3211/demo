webpackJsonp([1],{"GMp+":function(t,s){},NHnr:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=a("7+uW"),e={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"left-nav"},[a("ul",[a("li",[a("i",{staticClass:"icon iconfont icon-wodezichan"}),t._v(" "),a("div",[t._v("\n                收银\n            ")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-dianpu"}),t._v(" "),a("div",[t._v("\n                店铺\n            ")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-huiyuanqia"}),t._v(" "),a("div",[t._v("\n                会员\n            ")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-hanbao"}),t._v(" "),a("div",[t._v("\n                商品\n            ")])]),t._v(" "),a("li",[a("i",{staticClass:"icon iconfont icon-tongji"}),t._v(" "),a("div",[t._v("\n                统计\n            ")])])])])}]};var n={name:"App",components:{leftNav:a("VU/8")({name:"leftNav",data:function(){return{}}},e,!1,function(t){a("qTNo")},"data-v-60bd41c8",null).exports}},i={render:function(){var t=this.$createElement,s=this._self._c||t;return s("div",{attrs:{id:"app"}},[s("leftNav"),this._v(" "),s("div",{staticClass:"main"},[s("router-view")],1)],1)},staticRenderFns:[]};var l=a("VU/8")(n,i,!1,function(t){a("lQM7")},null,null).exports,c=a("/ocq"),r=a("mtWM"),d=a.n(r),v={name:"Pos",data:function(){return{tableData:[],oftenGoods:[],type0Goods:[],type1Goods:[],type2Goods:[],type3Goods:[]}},mounted:function(){var t=document.getElementById("order-list"),s=document.body.clientHeight;t.style.height=s+"px"},created:function(){var t=this;d.a.get("http://localhost:8080/static/oftenGoods.json",{}).then(function(s){t.oftenGoods=s.data}).catch(function(t){console.log(t),alert("网络错误，不能访问")}),d.a.get("http://localhost:8080/static/typeGoods.json",{}).then(function(s){for(var a=0;a<4;a++)t["type"+a+"Goods"]=s.data[a]}).catch(function(t){console.log(t),alert("网络错误，不能访问")})}},u={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"pos"},[a("el-row",[a("el-col",{staticClass:"pos-order",attrs:{span:7,id:"order-list"}},[a("el-tabs",{staticClass:"select-list"},[a("el-tab-pane",{attrs:{label:"点餐"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{border:"",data:t.tableData,stripe:""}},[a("el-table-column",{attrs:{prop:"goodsName",label:"商品",align:"center"}}),t._v(" "),a("el-table-column",{attrs:{prop:"count",label:"数量",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{prop:"price",label:"金额",width:"60"}}),t._v(" "),a("el-table-column",{attrs:{label:"操作",width:"100",fixed:"right",align:"center"},scopedSlots:t._u([{key:"default",fn:function(s){return[a("el-button",{attrs:{type:"text",size:"small"}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"text",size:"small"}},[t._v("增加")])]}}])})],1),t._v(" "),a("div",{staticClass:"totalDiv"},[a("small",[t._v("数量:")]),t._v(" "),a("small",[t._v("合计:")])]),t._v(" "),a("div",{staticClass:"order-btn"},[a("el-button",{attrs:{type:"warning"}},[t._v("挂单")]),t._v(" "),a("el-button",{attrs:{type:"danger"},on:{click:function(s){t.delAllGoods()}}},[t._v("删除")]),t._v(" "),a("el-button",{attrs:{type:"success"},on:{click:function(s){t.checkout()}}},[t._v(" 结账")])],1)],1),t._v(" "),a("el-tab-pane",{attrs:{label:"挂单"}},[t._v("\n          挂单\n        ")]),t._v(" "),a("el-tab-pane",{attrs:{label:"外卖"}},[t._v("\n          外卖\n        ")])],1)],1),t._v(" "),a("el-col",{attrs:{span:17}},[a("div",{staticClass:"often-goods"},[a("div",{staticClass:"title"},[t._v("\n          常用商品\n        ")]),t._v(" "),a("div",{staticClass:"often-goods-list"},[a("ul",t._l(t.oftenGoods,function(s){return a("li",{key:s.goodsId},[a("span",[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"o-price"},[t._v(t._s(s.price))])])}))])]),t._v(" "),a("el-tabs",{staticClass:"select-list"},[a("el-tab-pane",{attrs:{label:"汉堡"}},[a("ul",{staticClass:"cookList"},t._l(t.type0Goods,function(s){return a("li",{key:s.goodsId,on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))]),t._v(" "),a("el-tab-pane",{attrs:{label:"小吃"}},[a("ul",{staticClass:"cookList"},t._l(t.type1Goods,function(s){return a("li",{key:s.goodsId,on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))]),t._v(" "),a("el-tab-pane",{attrs:{label:"饮料"}},[a("ul",{staticClass:"cookList"},t._l(t.type2Goods,function(s){return a("li",{key:s.goodsId,on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))]),t._v(" "),a("el-tab-pane",{attrs:{label:"套餐"}},[a("ul",{staticClass:"cookList"},t._l(t.type3Goods,function(s){return a("li",{key:s.goodsId,on:{click:function(a){t.addOrderList(s)}}},[a("span",{staticClass:"foodImg"},[a("img",{attrs:{src:s.goodsImg,width:"100%"}})]),t._v(" "),a("span",{staticClass:"foodName"},[t._v(t._s(s.goodsName))]),t._v(" "),a("span",{staticClass:"foodPrice"},[t._v("￥"+t._s(s.price)+"元")])])}))])],1)],1)],1)],1)},staticRenderFns:[]};var _=a("VU/8")(v,u,!1,function(t){a("GMp+")},"data-v-a3806f24",null).exports;o.default.use(c.a);var p=new c.a({routes:[{path:"/",name:"Pos",component:_}]}),f=a("zL8q"),m=a.n(f);a("tvR6");o.default.config.productionTip=!1,o.default.use(m.a),new o.default({el:"#app",router:p,components:{App:l},template:"<App/>"})},lQM7:function(t,s){},qTNo:function(t,s){},tvR6:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.e179b5201cb61ff47494.js.map