webpackJsonp([1],{"4rCt":function(e,t){},BzB5:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("7+uW"),s=r("Dd8w"),n=r.n(s),o=r("NYxO"),i={name:"method-base",props:{urlPath:{type:String,default:"length"}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._t("title")],2),this._v(" "),t("p",{staticClass:"desc"},[this._t("desc")],2),this._v(" "),t("p",{staticClass:"link"},[t("em",[t("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/"+this.urlPath,target:"_blank"}},[this._v("see the docs →")])])])])},staticRenderFns:[]};var c={components:{MethodBase:r("VU/8")(i,l,!1,function(e){r("fIpx")},"data-v-f67b1968",null).exports},props:{methodType:{type:String,required:!1},options:{type:Array,required:!0}},data:function(){return{selected:""}},computed:{isSelected:function(){return this.$store.state.selectedMethod}},watch:{selected:function(){this.$store.commit("selectionMethod",this.selected)}}},d={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("p",[r("label",{attrs:{for:"methodoptions"}},[e._v("I need to "+e._s(e.methodType))]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],attrs:{id:"methodoptions",name:"select"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selected=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("...")]),e._v(" "),e._l(e.options,function(t){return r("option",{key:t.desc,domProps:{value:t}},[e._v("\n        "+e._s(t.shortDesc)+"\n      ")])})],2)]),e._v(" "),r("method-base",{directives:[{name:"show",rawName:"v-show",value:e.isSelected,expression:"isSelected"}],attrs:{urlPath:e.selected.name}},["length"===e.selected.name?r("span",{attrs:{slot:"title"},slot:"title"},[e._v("Array."+e._s(e.selected.name))]):r("span",{attrs:{slot:"title"},slot:"title"},[e._v("Array."+e._s(e.selected.name)+"()")]),e._v(" "),r("span",{attrs:{slot:"desc"},domProps:{innerHTML:e._s(e.selected.desc)},slot:"desc"})])],1)},staticRenderFns:[]};var h={components:{MethodChoice:r("VU/8")(c,d,!1,function(e){r("BzB5")},"data-v-55177a1a",null).exports},data:function(){return{selectedFilter:"",selectedFind:"",options:["add items or other arrays","remove items","find items","walk over items","return a string","order an array","something else"]}},computed:n()({},Object(o.b)(["adding","removing","iterate","string","ordering","other","find"])),watch:{selectedFilter:function(){this.$store.commit("resetSelection")},selectedFind:function(){this.$store.commit("resetSelection")}}},u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("label",{attrs:{for:"firstmethod"}},[e._v("I have an array, I would like to")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedFilter,expression:"selectedFilter"}],attrs:{id:"firstmethod",name:"select"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedFilter=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("...")]),e._v(" "),e._l(e.options,function(t){return r("option",{key:t.name,domProps:{value:t}},[e._v("\n      "+e._s(t)+"\n    ")])})],2),e._v(" "),"add items or other arrays"===e.selectedFilter?r("div",[r("method-choice",{attrs:{options:e.adding,methodType:"add"}})],1):"remove items"===e.selectedFilter?r("div",[r("method-choice",{attrs:{options:e.removing,methodType:"remove"}})],1):"walk over items"===e.selectedFilter?r("div",[r("method-choice",{attrs:{options:e.iterate,methodType:"iterate by"}})],1):"find items"===e.selectedFilter?r("div",[r("p",[r("label",{attrs:{for:"findmethod"}},[e._v("I'm trying to find")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedFind,expression:"selectedFind"}],attrs:{id:"findMethod",name:"select"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){return"_value"in e?e._value:e.value});e.selectedFind=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("...")]),e._v(" "),r("option",{attrs:{value:"single"}},[e._v("one item")]),e._v(" "),r("option",{attrs:{value:"many"}},[e._v("one or many items")])])]),e._v(" "),"single"===e.selectedFind?r("div",[r("method-choice",{attrs:{options:e.find.single,methodType:"find"}})],1):"many"===e.selectedFind?r("div",[r("method-choice",{attrs:{options:e.find.many,methodType:"find"}})],1):e._e()]):"order an array"===e.selectedFilter?r("div",[r("method-choice",{attrs:{options:e.ordering}})],1):"return a string"===e.selectedFilter?r("div",[r("method-choice",{attrs:{options:e.string}})],1):"something else"===e.selectedFilter?r("div",[r("method-choice",{attrs:{options:e.other}})],1):e._e()])},staticRenderFns:[]};var m=r("VU/8")(h,u,!1,function(e){r("k8QI")},"data-v-b0d2d336",null).exports,p={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("a",{staticClass:"github-corner",attrs:{href:"https://github.com/sdras/array-explorer","aria-label":"View source on Github"}},[t("svg",{staticStyle:{fill:"#FD6C6C",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[t("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),t("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),t("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])])])},staticRenderFns:[]};var f=r("VU/8")(null,p,!1,function(e){r("VPtu")},"data-v-ba6985fe",null).exports,g=r("+Uzz"),v={methods:{typeOut:function(){var e=new SplitText(this.$refs.ex,{type:"chars"}),t=new SplitText(this.$refs.ex2,{type:"chars"}),r=new g.TimelineMax;r.add("start"),r.to(this.$refs.ex,.1,{opacity:1}),r.staggerFromTo(e.chars,.1,{opacity:0,scale:0,color:"#aeded4",transformOrigin:"50% 50%",ease:g.Power4.easeOut},{opacity:1,scale:1,color:"#fff",transformOrigin:"50% 50%",ease:g.Power4.easeOut},.03,"start+=0"),r.staggerTo(e.chars,.1,{color:"#aeded4",ease:g.Back.easeIn},.03,"start+=0.1"),r.to(this.$refs.ex2,.1,{opacity:1}),r.staggerFromTo(t.chars,.1,{opacity:0,scale:0,color:"#aeded4",transformOrigin:"50% 50%",ease:g.Power4.easeOut},{opacity:1,scale:1,color:"#fff",transformOrigin:"50% 50%",ease:g.Power4.easeOut},.03,"start1+=0"),r.staggerTo(t.chars,.1,{color:"#ecc2a4",ease:g.Back.easeIn},.03,"start1+=0.1")}},computed:{selectedUsage:function(){return this.$store.state.selectedMethod}},watch:{selectedUsage:function(){var e=this;this.selectedUsage&&(TweenMax.set([this.$refs.ex,this.$refs.ex2],{opacity:0}),setTimeout(function(){e.typeOut()},500))}}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("aside",[t("div",{staticClass:"usage-code usage1"},[t("p",[t("span",[this._v("let arr = [5, 1, 8];")]),t("br"),this._v(" "),this.selectedUsage?t("span",{ref:"ex",staticClass:"exampleoutput",domProps:{innerHTML:this._s(this.selectedUsage.example)}}):this._e()])]),this._v(" "),this.selectedUsage?t("div",{staticClass:"usage2"},[t("h3",{staticStyle:{"margin-top":"50px"}},[this._v("Output")]),this._v(" "),t("div",{staticClass:"usage-code"},[t("p",[t("span",{ref:"ex2",staticClass:"exampleoutput2",domProps:{innerHTML:this._s(this.selectedUsage.output)}})])])]):this._e()])},staticRenderFns:[]};var b={components:{AppMethodPrimary:m,AppGithubCorner:f,AppCode:r("VU/8")(v,y,!1,function(e){r("cxxI")},null,null).exports}},x={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("app-github-corner"),this._v(" "),t("main",[t("section",{staticClass:"a"},[t("h1",[this._v("Array Explorer")]),this._v(" "),this._m(0),this._v(" "),t("app-method-primary")],1),this._v(" "),t("section",{staticClass:"b"},[t("h3",{staticClass:"usage"},[this._v("Usage")]),this._v(" "),t("app-code")],1)])],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"subtitle"},[t("em",[this._v("Find the array method you need without digging through the docs")])])}]};var _=r("VU/8")(b,x,!1,function(e){r("4rCt")},null,null).exports;a.a.use(o.a);const w=new o.a.Store({state:{selectedMethod:"",adding:[{name:"splice",shortDesc:"element/s to an array",desc:"Adds and/or removes elements from an array.",example:"arr.splice(2, 0, 'tacos');<br>\n        console.log(arr);",output:"[5, 1, 'tacos', 8]"},{name:"push",shortDesc:"elements to the end of an array",desc:"Adds one or more elements to the end of an array and returns the new length of the array.",example:"arr.push(2);<br>\n        console.log(arr);",output:"[5, 1, 8, 2]"},{name:"unshift",shortDesc:"elements to the front of an array",desc:"Adds one or more elements to the front of an array and returns the new length of the array.",example:"arr.unshift(2, 7);<br>\n        console.log(arr);",output:"[2, 7, 5, 1, 8]"},{name:"concat",shortDesc:"this array to other array(s) and/or value(s)",desc:"Returns a new array comprised of this array joined with other array(s) and/or value(s).",example:"let arr2 = ['a', 'b', 'c'];<br>\n        let arr3 = arr.concat(arr2);<br>\n        console.log(arr);",output:"[5, 1, 8, 'a', 'b', 'c']"}],removing:[{name:"splice",shortDesc:"element/s from an array",desc:"Adds and/or removes elements from an array.",example:"arr.splice(2, 1);<br>\n        console.log(arr);",output:"[5, 1]"},{name:"pop",shortDesc:"the last element of the array",desc:"Removes the last element from an array and returns that element.",example:"arr.pop();<br>\n        console.log(arr);",output:"[5, 1]"},{name:"shift",shortDesc:"the first element of the array",desc:"Removes the first element from an array and returns that element.",example:"arr.shift();<br>\n        console.log(arr);",output:"[1, 8]"},{name:"slice",shortDesc:"one or more elements in order for use, leaving the array as is",desc:"The <code>slice()</code> method returns a shallow copy of a portion of an array into a new array object. You can specify either just the ending element (where begin will default to zero) or both the beginning and the end, comma-separated. The original array will not be modified.",example:"let slicedArr = arr.slice(1);<br>\n        console.log(arr);<br>\n        console.log(slicedArr);",output:"[5, 1, 8]<br>\n        [1, 8]"}],string:[{name:"join",shortDesc:"join all elements of the array into a string",desc:"Joins all elements of an array into a string. You can join it together as is or with something in between, <code>elements.join(' -\n          ')</code> gives you <code>foo-bar</code>",example:"arr.join();<br>\n        console.log(arr);",output:'"5,1,8"'},{name:"toString",shortDesc:"return a string representing the array.",desc:"Returns a string representing the array and its elements.",example:"arr.toString();<br>\n        console.log(arr);",output:'"5,1,8"'},{name:"toLocaleString",shortDesc:"return a localized string representing the array.",desc:"This one is a bit wacko. Returns a localized string representing the array and its elements. This is very useful for dates and currency and has some strange native abstractions, so best to consult the docs when using it",example:"let date = [new Date()];<br>\n        arr.toLocaleString();<br>\n        date.toLocaleString();<br>\n        console.log(arr, date);",output:'"5,1,8 12/26/2017, 6:54:49 PM"'}],ordering:[{name:"reverse",shortDesc:"reverse the order of the array",desc:"Reverses the order of the elements of an array in place — the first becomes the last, and the last becomes the first.",example:"arr.reverse();<br>\n        console.log(arr);",output:"[8, 1, 5]"},{name:"sort",shortDesc:"sort the items of the array",desc:"Sorts the elements of an array in place and returns the array.",example:"arr.sort();<br>\n        console.log(arr);",output:"[1, 5, 8]"}],other:[{name:"length",shortDesc:"find the length of the array",desc:"Returns the number of elements in that array.",example:"console.log(arr.length);",output:"3"},{name:"fill",shortDesc:"fill all the elements of the array with a static value",desc:"Fills all the elements of an array from a start index to an end index with a static value.",example:"arr.fill(2);<br>\n        console.log(arr);",output:"[2, 2, 2]"},{name:"copyWithin",shortDesc:"copy a sequence of array elements within the array.",desc:"Copies a sequence of array elements within the array. You can specify either just the ending element (where begin will default to zero) or both the beginning and the end, comma-separated.",example:"arr.copyWithin(1);<br>\n        console.log(arr);",output:"[5, 5, 8]"}],iterate:[{name:"forEach",shortDesc:"executing a function you create for each element",desc:"The forEach() method executes a provided function once for each array element.",example:"arr.forEach((element) => {<br>\n        &nbsp;&nbsp;console.log(element)<br> \n        });",output:"5<br>\n        1<br>\n        8"},{name:"map",shortDesc:"creating a new array from each element with a function you create",desc:"Creates a new array with the results of calling a provided function on every element in this array.",example:"let map = arr.map(x => x + 1);<br>\n        console.log(map);",output:"[6, 2, 9]"},{name:"entries",shortDesc:"creating an iterator object",desc:"Returns a new Array Iterator object that contains the key/value pairs for each index in the array. There are a lot of uses for iterators, as well as other methods used with it in conjuction, like <code>values</code> and <code>keys</code>",example:"let iterator = arr.entries();<br>\n        console.log(iterator.next().value);",output:'[0, 5]<br>\n        <span class="comment">// the 0 is the index,</span><br>\n        <span class="comment">// the 5 is the first number</span>'}],find:{single:[{name:"includes",shortDesc:"out if a certain element exists",desc:"Determines whether an array contains a certain element, returning true or false as appropriate.",example:"console.log(arr.includes(1));",output:"true"},{name:"indexOf",shortDesc:"the first index of a particular item",desc:"Returns the first index at which a given element can be found in the array, or -1 if it is not present.",example:"console.log(arr.indexOf(5));",output:"0"},{name:"lastIndexOf",shortDesc:"the last index of a particular item",desc:"Returns the last (greatest) index of an element within the array equal to the specified value, or -1 if none is found.",example:"console.log(arr.indexOf(5));",output:"0"},{name:"find",shortDesc:"the first element that satisfies a condition",desc:"Returns the found value in the array, if an element in the array satisfies the provided testing function or undefined if not found. Similar to <code>findIndex()</code>, but it returns the item instead of the index.",example:"let isTiny = (el) => el < 2;<br>\n          console.log(arr.find(isTiny));",output:"1"},{name:"findIndex",shortDesc:"the first index of an item that satisfies a condition",desc:"Returns the index of the first element in the array that satisfies the provided testing function. Otherwise -1 is returned. Similar to <code>find()</code>, but it returns the index instead of the item.",example:"let isBig = (el) => el > 6;<br>\n          console.log(arr.findIndex(isBig));",output:"2"},{name:"reduce",shortDesc:"a value by reducing the Array, start to finish",desc:"Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.",example:"let reducer = (a, b) => a + b;<br>\n          &#9;console.log(arr.reduce(reducer));",output:"14"},{name:"reduceRight",shortDesc:"a value by reducing the Array, finish to start",desc:"Apply a function against an accumulator and each value of the array (from right-to-left) as to reduce it to a single value.",example:"[arr, [0, 1]].reduceRight((a, b) => {<br>\n          &#9;return a.concat(b)<br>\n          }, [])",output:"[0, 1, 5, 1, 8]"}],many:[{name:"filter",shortDesc:"values based on a condition you create",desc:"Creates a new array with all of the elements of this array for which the provided filtering function returns true.",example:"let filtered = arr.filter(el => el > 4);<br>\n          console.log(filtered)",output:"[5, 8]"},{name:"every",shortDesc:"whether or not every item satisfies a condition",desc:"Returns true if every element in this array satisfies the provided testing function.",example:"let isSmall = (el) => el < 10;<br>\n          console.log(arr.every(isSmall));",output:"true"},{name:"some",shortDesc:"whether or not at least one item satisfies a condition",desc:"Returns true if at least one element in this array satisfies the provided testing function.",example:"let biggerThan4 = (el) => el > 4;<br>\n          console.log(arr.some(biggerThan4));",output:"true"}]}},mutations:{selectionMethod(e,t){e.selectedMethod=t},resetSelection(e){e.selectedMethod=""}}});var C=r("P6sg");a.a.use(C.a),a.a.config.productionTip=!1,new a.a({el:"#app",store:w,template:"<App/>",components:{App:_}})},VPtu:function(e,t){},cxxI:function(e,t){},fIpx:function(e,t){},k8QI:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1cfa179f96c8a62792d7.js.map