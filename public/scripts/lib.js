var $$modules={};if(typeof module=="undefined"&&typeof window!=="undefined"){window.module={}}(function(__global,__module,factory){var name="$Export";if(typeof exports==="object"&&typeof __module!=="undefined"){__module.exports=factory()}else{if(typeof window!=="undefined"){__global=window}else if(typeof global!=="undefined"){__global=global}__global[name]=factory()}})(this,module,function(){"use strict";function exportObj(obj,name,path){$$modules[name]={obj:obj,path:path};return{include:include(obj,name),init:init(obj,name,[])}}function include(obj,name){return function(modules){return{init:init(obj,name,modules)}}}function init(obj,name,__modules){return function(__global,__module,callback){if(typeof window!=="undefined"){__global=window}else if(typeof global!=="undefined"){__global=global}var factory=function(__window,__document){var m,modules=[],window=window||__window||{},document=document||__document||window.document||{};if(__modules.length<1)return callback.apply(__global,modules);for(var i=0;i<__modules.length;i++){switch(__modules[i]){case"window":modules[i]=window;break;case"document":modules[i]=document;break;default:m=$$modules[__modules[i]];if(typeof m==="undefined")throw new Error("`"+__modules[i]+"` module doesn't exists!");modules[i]=__global[m["obj"]]||require(m["path"])(window,document);break}}return callback.apply(__global,modules)};if(typeof exports==="object"&&typeof __module!=="undefined"){__module.exports=factory}else if(typeof window!=={}){if(name[0]=="@")__global[obj]=factory(window,document);else factory(window,document)}else{__global[obj]=factory}}}return{module:exportObj}});var $Export=$Export||require("../export");$Export.module("Element","Element","./window/element").include(["window"]).init(this,module,function(window){return window.Element||{}});var $Export=$Export||require("../export");$Export.module("CSSStyleSheet","CSSStyleSheet","./window/style").include(["window"]).init(this,module,function(window){return window.CSSStyleSheet||{}});var $Export=$Export||require("../export");$Export.module("HTMLAllCollection","HTMLAllCollection","./window/html").include(["window"]).init(this,module,function(window){return window.HTMLAllCollection||{}});var $Export=$Export||require("./export");$Export.module("Ruddy","@core","./core").include(["window","document","HTMLAllCollection"]).init(this,module,function(window,document,HTMLAllCollection){var cache={},events={},exportObj=$Export.module,TAGNAMES={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img",input:"input"},assignObj=Object.prototype.assign||function(target){"use strict";if(target===null)throw new TypeError("Cannot convert null or undefined to an object");target=Object(target);for(var index=1;index<arguments.length;index++){var source=arguments[index];if(source!=null){for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key]}}}}return target},isObject=function(value){return typeof value=="object"||typeof value=="function"},isFunction=function(value){return typeof value=="function"},isArray=Array.isArray||function(value){return value&&value.constructor===Array||""+value!==value&&{}.toString.call(value)=="[object Array]"},isString=function(value){return typeof value==="string"},isNumber=function(value){return typeof value=="number"},isInt=Number.isInteger||function(value){return isNumber(value)&&isFinite(value)&&Math.round(value)===value},isFloat=function(value){return isNumber(value)&&Math.round(value)!==value},isDate=function(value){return Object.prototype.toString.call(value)==="[object Date]"},isBool=function(value){return typeof value==="boolean"},isNodes=function(value){var stringRepr=Object.prototype.toString.call(value);return typeof value==="object"&&(/^\[object (HTMLCollection|NodeList|Object)\]$/.test(stringRepr)&&typeof value.length==="number"||value[0]&&isElement(value[0]))||window.HTMLAllCollection&&value instanceof HTMLAllCollection},isElement=function(value){return value&&(value.nodeName||value.tagName||value.className||value.id)&&value!=document?true:false},isDoc=function(value){return value==document},isEvent=function(value){if(typeof document==={})return false;var el=document.createElement(TAGNAMES[value]||"div"),isSupported;value="on"+value;if(!(isSupported=value in el)){el.setAttribute(value,"return;");isSupported=typeof el[value]=="function"}el=null;return isSupported};return{cache:cache,events:events,assign:assignObj,export:exportObj,isObj:isObject,isFunc:isFunction,isArr:isArray,isEl:isElement,isStr:isString,isNum:isNumber,isInt:isInt,isFloat:isFloat,isDate:isDate,isBool:isBool,isNodes:isNodes,isDoc:isDoc,isEvent:isEvent}});var $Export=$Export||require("../core/export");$Export.module("$arr","@array","../globals/array").include(["@core"]).init(this,module,function(__core){"use strict";var array=function(arr){if(__core.isArr(arr)===false)throw new TypeError("Array type - argument provided is not an array type");var prototype={isEmpty:function(){return arr.length==0},join:Array.prototype.join||function(c){"use strict";var a=arr,l=a.length,i=0,s="",c=c||",";for(i;i!==l-1;i++){s+=a[i]+c}s+=a[l-1];return s},push:Array.prototype.push||function(){"use strict";var arg=arguments,l=arg.length,i=0;for(i;i!==l;i++){arr[arr.length]=arg[i]}return arr.length},pop:Array.prototype.pop||function(){"use strict";var last;if(arr.length<=0)return undefined;last=arr[arr.length-1];arr.length=arr.length-1;return last},reverse:Array.prototype.reverse||function(){"use strict";var len=arr.length-1,id=0,i=0,a=[];for(len;len>=i;len--){a[id]=arr[len];id++}return a},concat:Array.prototype.concat||function(){"use strict";var arg=arguments,l=arg.length,i=0,s=$arr(arr).join();for(i;i!==l;i++){s+=","+arg[i]}return s.split(",")},forEach:Array.prototype.forEach||function(f,p){"use strict";if(typeof f!=="function")throw new TypeError(f+" is not a function");var a=arr.join().split(","),p=p||arr,l=a.length,i=0;for(i;i!==l;i++){f.call(p,a[i],i,a)}},map:Array.prototype.map||function(f,p){"use strict";var t=arr,a=[],i=0,l=t.length,v;for(i;i!=l;i++){v=t[i];a[i]=p?f.call(p,v,i,t):f(v,i,t)}return a},reduce:Array.prototype.reduce||function(callback){"use strict";if(typeof callback!=="function")throw new TypeError(callback+" is not a function");var t=arr,l=t.length>>>0,k=0,value;if(arguments.length==2){value=arguments[1]}else{while(k<l&&!k in t){k++}if(k>=l)throw new TypeError("Reduce of empty array with no initial value");value=t[k++]}for(;k<l;k++){if(k in t){value=callback(value,t[k],k,t)}}return value},indexOf:Array.prototype.indexOf||function(elt){var len=this.length>>>0;var from=Number(arguments[1])||0;from=from<0?Math.ceil(from):Math.floor(from);if(from<0)from+=len;for(;from<len;from++){if(from in this&&this[from]===elt)return from}return-1},first:function(){if(arr.length<=0)return undefined;return arr[0]},last:function(){if(arr.length<=0)return undefined;return arr[arr.length-1]}};return __core.assign(arr,prototype)};return array});var $Export=$Export||require("../core/export");$Export.module("$str","@string","../globals/string").include(["@core"]).init(this,module,function(__core){"use strict";var string=function(str){if(__core.isStr(str)===false)throw new TypeError("String type - argument provided is not a string type");var prototype={isEmpty:function(){var s=str;return s==null||s==""||s.length==0},toLowerCase:String.prototype.toLowerCase||function(){return str.replace(/[a-z]/g,function(ch){return String.fromCharCode(ch.charCodeAt(0)&~32)})},toUpperCase:String.prototype.toUpperCase||function(){return str.replace(/[A-Z]/g,function(c){return String.fromCharCode(c.charCodeAt(0)|32)})},ucfirst:function(){return str.charAt(0).toUpperCase()+this.substr(1)},pregMatch:function(regex){var reg=new RegExp(regex);return reg.test(str)},escapeHTML:function(){var div=document.createElement("div");div.appendChild(document.createTextNode(str));return div.innerHTML},toHTML:function(){var div=document.createElement("div");div.innerHTML=str;var child=div.childNodes[0];return child?child.nodeValue:""}};return __core.assign(str,prototype)};return string});var $Export=$Export||require("../core/export");$Export.module("$num","@number","../globals/number").include(["@core"]).init(this,module,function(__core){"use strict";var number=function(num){if(__core.isNumber(num)===false)throw new TypeError("Number type - argument provided is not an number type");var prototype={isInteger:function(){return __core.isInt(num)},isFloat:function(){return __core.isFloat(num)}};return __core.assign(num,prototype)};return number});var $Export=$Export||require("../core/export");$Export.module("$int","@integer","../globals/integer").include(["@core"]).init(this,module,function(__core){"use strict";var integer=function(int){if(__core.isInt(int)===false)throw new TypeError("Integer type - argument provided is not an integer type");var prototype={};return __core.assign(int,prototype)};return integer});var $Export=$Export||require("../core/export");$Export.module("$float","@float","../globals/float").include(["@core"]).init(this,module,function(__core){var float=function(float){if(__core.isFloat(float)===false)throw new TypeError("Float type - argument provided is not an float type");var prototype={};return __core.assign(float,prototype)};return float});var $Export=$Export||require("../core/export");$Export.module("$obj","@object","../globals/object").include(["@core"]).init(this,module,function(__core){"use strict";var object=function(obj){if(__core.isObj(obj)===false)throw new TypeError("Object type - argument provided is not an object type");var prototype={keys:function(){"use strict";var k,r=[],i=0;for(k in obj){if(!prototype[k]){r[i]=k;i++}}return r},values:function(){"use strict";var k,r=[],i=0;for(k in obj){if(!prototype[k]){r[i]=obj[k];i++}}return r},push:function(){"use strict";var a=arguments,v,k;for(k in a){v=a[k];obj[v.key]=v.value}return $obj(obj).keys().length},map:function(f,p){"use strict";var o=obj,a=[],k,v;for(k in o){v=o[k];a[k]=p?f.call(p,v,k,o):f(v,k,o)}return a},forEach:function(f,p){"use strict";if(typeof f!=="function")throw new TypeError(f+" is not a function");var p=p||obj,k;for(k in obj){if(!prototype[k]){f.call(p,obj[k],k,obj)}}},assign:function(name,func){return obj.prototype[name]=func},extend:function(source){source=source.prototype;for(var attrname in source){if(!obj.prototype[attrname])obj.prototype[attrname]=source[attrname]}return obj}};return __core.assign(obj,prototype)};return object});var $Export=$Export||require("../core/export");$Export.module("$func","@function","../globals/function").include(["@core"]).init(this,module,function(__core){"use strict";var funct=function(func){if(__core.isFunc(func)===false)throw new TypeError("Function type - argument provided is not a function type");var prototype={assign:function(name,func){return func.prototype[name]=func},bind:Function.prototype.bind||function(b){"use strict";var a=[].slice,f=a.call(arguments,1),e=func,d=function(){return e.apply(func instanceof c?func:b||window,f.concat(a.call(arguments)))};function c(){}c.prototype=func.prototype;d.prototype=new c;return d}};return __core.assign(func,prototype)};return funct});var $Export=$Export||require("../core/export");$Export.module("$nodes","@nodes","../globals/nodes").include(["@core"]).init(this,module,function(__core){var nodeList=function(nodes){if(__core.isNodes(nodes)===false)throw new TypeError("Nodes type - argument provided is not a nodeList type");var prototype={push:function(){"use strict";var arg=arguments,l=arg.length,i=0;for(i;i!==l;i++){nodes[nodes.length]=arg[i]}return nodes.length},concat:function(){"use strict";var arg=arguments,l=arg.length,i=0,s=$nodes(nodes).join();for(i;i!==l;i++){s+=","+arg[i]}return s.split(",")},forEach:Array.prototype.forEach||function(f,p){"use strict";if(typeof f!=="function")throw new TypeError(f+" is not a function");var a=nodes,p=p||nodes,l=a.length,i=0;for(i;i!==l;i++){f.call(p,a[i],i,a)}},map:function(f,p){"use strict";var t=nodes,a=[],i=0,l=t.length,v;for(i;i!=l;i++){v=t[i];a[i]=p?f.call(p,v,i,t):f(v,i,t)}return a},first:function(){"use strict";if(nodes.length==0)throw new TypeError("Cant retrieve first element of an nodeList array with no initial value");return nodes[0]},last:function(){"use strict";if(nodes.length==0)throw new TypeError("Cant retrieve last element of an empty nodeList with no initial value");return nodes[nodes.length-1]},isOne:function(){"use strict";if(nodes.length==0)throw new TypeError("Cant retrieve last element of an empty nodeList with no initial value");return nodes.length==1},indexOf:function(value){"use strict";var a=nodes,key;for(key in a){if(value==a[key]){return key}}return-1}};return __core.assign(nodes,prototype)};return nodeList});var $Export=$Export||require("../core/export");$Export.module("$css","@style","../globals/style").include(["@core","window","document","Element","CSSStyleSheet"]).init(this,module,function(__core,window,document,Element,CSSStyleSheet){"use strict";var style=function(css){var prototype={getRule:function(index){return css.cssRules[index]},getCSSText:function(index){return css.cssRules[index].cssText},insertRule:"CSSStyleSheet"in window?CSSStyleSheet.prototype.insertRule:function(rule,index){var arr;rule=rule.replace(/\s+/g,"");arr=rule.split("{");css.addRule(arr[0],arr[1].replace("}",""),index);return index},deleteRule:"CSSStyleSheet"in window?CSSStyleSheet.prototype.deleteRule:function(index){return css.removeRule(index)},ruleToJson:function(rule){rule=rule.replace(/\s+/g,"");rule=rule.split("{");var selector=rule[0],json='{"selector":"'+selector+'","'+rule[1].replace(":",'":"').replace(";}",'"}').replace(";",'","');return json},jsonToRule:function(json){var selector=JSON.parse(json)["selector"],rule=selector+json.replace(/"/g,"").replace(/,/g,";").replace("selector:"+selector+";","");return rule},ruleToObj:function(rule){rule=rule.replace(/\s+/g,"");rule=rule.split("{");var obj={},style=null,i=0,selector=rule[0],styles=rule[1].replace("}").split(";");obj[selector]={};for(i;i!=styles.length;i++){if(styles[i]==""){continue}style=styles[i].split(":");obj[selector][style[0]]=style[1]}return obj},objToRule:function(obj){var str="",selector,style;for(selector in obj){str+=selector+"{";for(style in obj[selector]){str+=style+":"+obj[selector][style]}}return str+"}"}};return __core.assign(css,prototype)};return style});var $Export=$Export||require("../core/export");$Export.module("$doc","@document","../globals/document").include(["@core","window","document","Element"]).init(this,module,function(__core,window,document,Element){"use strict";var docum=function(doc){if(__core.isDoc(doc)===false)throw new TypeError("Document type - argument provided is not a document variable");var prototype={querySelectorAll:document.querySelectorAll||function(r,c,i,j,a){var d=document,s=d.createStyleSheet();a=d.all;c=[];r=r.replace(/\[for\b/gi,"[htmlFor").split(",");for(i=r.length;i--;){s.addRule(r[i],"visiblility:visible",0);for(j=a.length;j--;){a[j].currentStyle.visiblility&&c.push(a[j])}s.removeRule(0)}return c},querySelector:document.querySelector||function(selectors){var elements=prototype.querySelectorAll.call(document,selectors);return elements.length?elements[0]:null},createStyle:function(title){var style=document.createElement("style"),element;style.title=title;element=document.getElementsByTagName("head")[0].appendChild(style);return element.sheet},getStyle:function(title){var sheets=document.styleSheets,len=sheets.length,i;for(i=len;i--;){if(sheets[i].title==title){return sheets[i]}}return false},addEventListener:document.addEventListener||function(eventNameWithoutOn,callback){return doc.attachEvent("on"+eventNameWithoutOn,callback)},dispatchEvent:"Element"in window?Element.prototype.dispatchEvent:function(eventObject){return doc.fireEvent("on"+eventObject.type,eventObject)},customEvent:function(event,params){if(typeof window.CustomEvent==="function")return new CustomEvent(event,params);function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var e=document.createEvent("CustomEvent");e.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return e}window.CustomEvent=CustomEvent;return new CustomEvent(event,params)},mousePosition:function(e,property){var x=e.pageX||e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft||(e.changedTouches?e.changedTouches[0].pageX:0),y=e.pageY||e.clientY+document.body.scrollTop+document.documentElement.scrollTop||(e.changedTouches?e.changedTouches[0].pageY:0),obj={x:Math.round(x),y:Math.round(y)};return property&&obj[property]?obj[property]:obj},size:function(property){var w=Math.max(document.documentElement["clientWidth"],document.body["scrollWidth"],document.documentElement["scrollWidth"],document.body["offsetWidth"],document.documentElement["offsetWidth"])||0,h=Math.max(document.documentElement["clientHeight"],document.body["scrollHeight"],document.documentElement["scrollHeight"],document.body["offsetHeight"],document.documentElement["offsetHeight"])||0,obj={width:w,height:h};return property&&obj[property]?obj[property]:obj},viewport:function(property){var w=window.innerWidth||(document.documentElement?document.documentElement.clientWidth:document.body.clientWidth)||0,h=window.innerHeight||(document.documentElement?document.documentElement.clientHeight:document.body.clientHeight)||0,obj={width:w,height:h};return property&&obj[property]?obj[property]:obj},getComputedStyle:function(){if("getComputedStyle"in window)return window.getComputedStyle.apply(window,arguments);function getPixelSize(element,style,property,fontSize){var sizeWithSuffix=style[property],size=parseFloat(sizeWithSuffix),suffix=sizeWithSuffix.split(/\d/)[0],rootSize;fontSize=fontSize!=null?fontSize:/%|em/.test(suffix)&&element.parentElement?getPixelSize(element.parentElement,element.parentElement.currentStyle,"fontSize",null):16;rootSize=property=="fontSize"?fontSize:/width/i.test(property)?element.clientWidth:element.clientHeight;return suffix=="em"?size*fontSize:suffix=="in"?size*96:suffix=="pt"?size*96/72:suffix=="%"?size/100*rootSize:size}function setShortStyleProperty(style,property){var borderSuffix=property=="border"?"Width":"",t=property+"Top"+borderSuffix,r=property+"Right"+borderSuffix,b=property+"Bottom"+borderSuffix,l=property+"Left"+borderSuffix;style[property]=(style[t]==style[r]==style[b]==style[l]?[style[t]]:style[t]==style[b]&&style[l]==style[r]?[style[t],style[r]]:style[l]==style[r]?[style[t],style[r],style[b]]:[style[t],style[r],style[b],style[l]]).join(" ")}function CSSStyleDeclaration(element){var currentStyle=element.currentStyle,style=this,fontSize=getPixelSize(element,currentStyle,"fontSize",null);for(var property in currentStyle){if(/width|height|margin.|padding.|border.+W/.test(property)&&style[property]!=="auto"){style[property]=getPixelSize(element,currentStyle,property,fontSize)+"px"}else if(property==="styleFloat"){style["float"]=currentStyle[property]}else{style[property]=currentStyle[property]}}setShortStyleProperty(style,"margin");setShortStyleProperty(style,"padding");setShortStyleProperty(style,"border");style.fontSize=fontSize+"px";return style}CSSStyleDeclaration.prototype={constructor:CSSStyleDeclaration,getPropertyPriority:function(){},getPropertyValue:function(prop){return this[prop]||""},item:function(){},removeProperty:function(){},setProperty:function(){},getPropertyCSSValue:function(){}};function getComputedStyle(element){return new CSSStyleDeclaration(element)}return getComputedStyle}};return __core.assign(doc,prototype)};return docum});var $Export=$Export||require("../core/export");$Export.module("$el","@element","../globals/element").include(["window","document","Element","@core","@document","@nodes"]).init(this,module,function(window,document,Element,__core,$doc,$nodes){"use strict";var element=function(el){if(__core.isEl(el)===false)throw new TypeError("Element type - argument provided is not an element type");var prototype={querySelectorAll:"Element"in window?Element.prototype.querySelectorAll:function(selector){var nodes=el.childNodes,list=[],i,l=0;for(i=0;i<nodes.length;i++){if($nodes($doc(document).querySelectorAll(selector)).indexOf(nodes[i])!==-1){list[l]=nodes[i];l++}}return list},querySelector:"Element"in window?Element.prototype.querySelector:function(selectors){var elements=$el(el).querySelectorAll(selectors);return elements.length?elements[0]:null},addEventListener:"Element"in window?Element.prototype.addEventListener:function(eventNameWithoutOn,callback){return el.attachEvent("on"+eventNameWithoutOn,callback)},dispatchEvent:"Element"in window?Element.prototype.dispatchEvent:function(eventObject){return el.fireEvent("on"+eventObject.type,eventObject)},getAttribute:"Element"in window?Element.prototype.getAttribute:function(attributeName){var attrs=el.attributes,i;for(i=attrs.length;i--;){if(attrs[i].name==attributeName){return attrs[i].value}}return null},setAttribute:"Element"in window?Element.prototype.setAttribute:function(name,value){var attrs=el.attributes,i;for(i=attrs.length;i--;){if(attrs[i].name==name){attrs[i].value=value;return}}attrs[attrs.length]={};attrs[attrs.length][name]={}}};return __core.assign(el,prototype)};return element});var $Export=$Export||require("../core/export");$Export.module("$r","@ruddy","../globals/ruddy").include(["window","document","@core","@object","@function","@element","@document","@nodes","@style"]).init(this,module,function(window,document,__core,$obj,$func,$el,$doc,$nodes,$css){"use strict";var $$rCache=__core.cache["$r"]={},doc=$doc(document),all=$nodes(typeof doc.all==="undefined"?doc.getElementsByTagName("*"):doc.all),css=$css(doc.createStyle("ruddyjs"));var $r=$obj(function(param){if(!(this instanceof $r)){return new $r(param)}var el,index=param;if(__core.isEl(index))index=all.indexOf(param);if($$rCache[index]){var cache=$$rCache[index];this.el=cache.el;this.param=cache.param;this.index=cache.index}else{if(__core.isEl(param)){el=$el(param);param=index}else if(__core.isStr(param)){el=$nodes(doc.querySelectorAll(param));index=el.length==1?all.indexOf(el.first()):param;el=el.length==1?el[0]:el}else if(__core.isInt(param)){el=all[param]?all[param]:null;index=param}else{el=param;index=JSON.stringify(param)||param}this.el=el;this.param=param;this.index=index;$$rCache[index]={el:this.el,param:this.param,index:this.index}}});$r.assign("find",$func(function(selectors){var key=this.param+":"+selectors,el=this.el;if($$rCache[key]){return $r(key)}el=$nodes($el(el).querySelectorAll(selectors));el=el.length==1?$el(el.first()):el;$$rCache[key]={el:el,param:key,index:$nodes(doc.all).indexOf(el),rule:null};return $r(key)}));$r.assign("each",$func(function(callback){var obj=this.el;if(__core.isArr(obj)||__core.isNodes(obj)){obj.forEach.call(obj,callback,this);return this}callback.call(this,obj,0,obj);return this}));$r.assign("html",$func(function(content){var el=this.el;if(typeof content==="undefined")return el.innerHTML;return{inner:function(){if(__core.isFunc(content))return el.innerHTML=content.call(el);return el.innerHTML=content},append:function(){if(__core.isFunc(content))return el.innerHTML+=content.call(el);return el.innerHTML+=content}}}));$r.assign("attribute",$func(function(name,value){if(__core.isEl(this.el)===false)throw new TypeError("$r argument provided is not an element");if(!value)return this.el.getAttribute(name);return this.el.setAttribute(name,value)}));$r.assign("value",$func(function(value){if(__core.isEl(this.el)===false)throw new TypeError("$r argument provided is not an element");if(value)return this.el.value=value;return this.el.value}));$r.assign("createRule",$func(function(css){var index=css.insertRule(this.param+"{}",css.cssRules.length);$$rCache[this.param].rule=this.rule=css.getRule(index);return index}));$r.assign("css",$func(function(rule,value){var css=this.rule;rule+="";if(!value)return css.style[rule];return css.style[rule]=value}));$r.assign("style",$func(function(rule,value){var el=this.el;if(value)return el.style[rule]=value;return!$str(el.style[rule]).isEmpty()?el.style[rule]:doc.getComputedStyle(el).getPropertyValue(rule)}));$r.assign("if",$func(function(expression,callback){this.total=1;this.count=0;if(expression){this.count++}if(this.count==this.total&&callback){callback.call(this,this.el)}return this}));$r.assign("elseif",$func(function(expression,callback){if(this.count!=1){if(expression){this.count++;this.total=0}}this.total++;if(this.count==this.total&&callback){callback.call(this,this.el)}return this}));$r.assign("else",$func(function(callback){if(this.count!=1){this.count++;this.total=1;callback.call(this,this.el)}this.total++;return this}));$r.assign("when",$func(function(expression,callback){this.total=1;this.count=0;expression=typeof expression=="function"?expression.call(this):expression;if(expression){this.count++}return this}));$r.assign("do",$func(function(callback){if(this.count==this.total){callback.call(this,this.el)}return this}));$r.assign("or",$func(function(expression,callback){expression=typeof expression=="function"?expression.call(this):expression;if(this.count!=1){if(expression){this.count++;this.total=0}}this.total++;return this}));$r.assign("on",$func(function(listener,callback,settings){var obj=this.el,target,calls=0;if(listener in __core.events){obj.calls=__core.events[listener].call(this,obj,callback,settings);return}obj.addEventListener(listener,function(e){e=e||window.event;target=e.target||e.srcElement;calls++;callback.call(this,e,target,obj,calls)},false)}));$r.assign("position",$func(function(property){var obj,box="getBoundingClientRect"in this.el?this.el.getBoundingClientRect():{top:0,left:0},body=document.body,docElem=document.documentElement,scrollTop,scrollLeft,clientTop,clientLeft,x,y;scrollTop=window.pageYOffset||docElem.scrollTop||body.scrollTop;scrollLeft=window.pageXOffset||docElem.scrollLeft||body.scrollLeft;clientTop=docElem.clientTop||body.clientTop||0;clientLeft=docElem.clientLeft||body.clientLeft||0;x=box.left+scrollLeft-clientLeft;y=box.top+scrollTop-clientTop;obj={x:Math.round(x)||0,y:Math.round(y)||0};return property&&property in obj?obj[property]:obj}));$r.assign("size",$func(function(property){var w=parseInt(this.style("width"))||this.el.offsetWidth||0,h=parseInt(this.style("height"))||this.el.offsetHeight||0,obj={width:w,height:h};return property&&obj[property]?obj[property]:obj}));$r.assign("getTranslate",$func(function(){var style=this.style("transform"),values;if(style){values=style.match(/translate\((.*)px, (.*)px\)/)?style.match(/(translate)\((.*)px, (.*)px\)/):style.match(/translate(X|Y)\((.*)px\)/)}if(values!=null){switch(values[1]){case"X":return{x:parseInt(values[2])||0,y:0};break;case"Y":return{x:0,y:parseInt(values[2])||0};break;default:return{x:parseInt(values[2])||0,y:parseInt(values[3])||0};break}}return{x:parseInt(this.style("left"))||0,y:parseInt(this.style("top"))||0}}));$r.assign("setTranslate",$func(function(x,y){if("transform"in document.body.style){this.style("transform","translate("+x+"px, "+y+"px)");return this}this.style("top",y+"px");this.style("left",x+"px");return this}));$r.assign("setTranslateX",$func(function(x){if("transform"in document.body.style){this.style("transform","translateX("+x+"px)");return this}this.style("left",x+"px");return this}));$r.assign("setTranslateY",$func(function(y){if("transform"in document.body.style){this.style("transform","translateY("+y+"px)");return this}this.style("left",y+"px");return this}));return $r});
/**
 * RuddyJS Extenstions - Animation
 *
 * @package     ruddy-animation
 * @author      Gil Nimer <info@ruddymonkey.com>
 * @author      Nick Vlug <info@ruddy.nl>
 * @copyright   RuddyJS licensed under MIT. Copyright (c) 2017 Ruddy Monkey & ruddy.nl
 */

var $Export = $Export || require('ruddy').export;

$Export
    .module(
        'Animation',
        '+animation',
        'ruddy-animation'
    )
    .include([
        'window',
        '@function',
        '@ruddy'
    ])
    .init(
        this,
        module,
        function (window, $func, $r) {
            "use strict";

            var lastTime = 0;
            var vendors = ['ms', 'moz', 'webkit', 'o'];

            for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
                window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
                window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame']
                    || window[vendors[x] + 'CancelRequestAnimationFrame'];
            }

            if(!window.setTimeout)
                window.setTimeout = setTimeout;

            if(!window.clearTimeout)
                window.clearTimeout = clearTimeout;

            if (!window.requestAnimationFrame)
                window.requestAnimationFrame = function (callback, element) {
                    var currTime = new Date().getTime();
                    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
                    var id = window.setTimeout(function () {
                            callback(currTime + timeToCall);
                        },
                        timeToCall);
                    lastTime = currTime + timeToCall;
                    return id;
                };

            if (!window.cancelAnimationFrame) {
                window.cancelAnimationFrame = function (id) {
                    clearTimeout(id);
                };
            }

            /**
             * Animation Object
             *
             * @module ext/Animation
             * @param options
             * @returns {Animation}
             *
             * @constructor
             */
            function Animation(options) {
                if (!(this instanceof Animation)) {
                    return new Animation(options);
                }

                this.options = options || {};
            }

            Animation.prototype = {
                /**
                 *
                 */
                delta: {
                    /**
                     *
                     * @param progress
                     * @returns {*}
                     */
                    linear: function (progress) {
                        return progress;
                    },

                    /**
                     *
                     * @param progress
                     * @param x
                     * @returns {number}
                     */
                    quadrantic: function (progress, x) {
                        return Math.pow(progress, x);
                    },

                    /**
                     *
                     * @param progress
                     * @returns {number}
                     */
                    circ: function (progress) {
                        return 1 - Math.sin(Math.acos(progress));
                    },

                    /**
                     *
                     * @param progress
                     * @param x
                     * @returns {number}
                     */
                    backbow: function (progress, x) {
                        return Math.pow(progress, 2) * ((x + 1) * progress - x);
                    },

                    /**
                     *
                     * @param progress
                     * @returns {number}
                     */
                    bounce: function (progress) {
                        for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
                            if (progress >= (7 - 4 * a) / 11) {
                                return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
                            }
                        }
                    },

                    /**
                     *
                     * @param progress
                     * @param x
                     * @returns {number}
                     */
                    elastic: function (progress, x) {
                        return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
                    },

                    /**
                     *
                     * @param progress
                     * @returns {number}
                     */
                    custom: function (progress) {
                        return Math.pow(progress, Math.LOG10E);
                    }
                },

                /**
                 *
                 * @param callback
                 * @returns {Number}
                 */
                requestAnimation: function (animation) {
                    return window.requestAnimationFrame(animation);
                },

                /**
                 *
                 * @param callback
                 */
                cancleAnimation: function (animation) {
                    this.animation = function () {
                        window.cancelAnimationFrame(animation || this.animation);
                    };

                    this.animation();
                },

                /**
                 * Get current value
                 *
                 * @param startPoint
                 * @param endPoint
                 * @param delta
                 * @returns {*}
                 */
                getValue: function (startPoint, endPoint, delta) {
                    return startPoint + (endPoint - startPoint) * delta;
                },

                /**
                 * Start animation
                 *
                 * @param opts
                 * @param callback
                 * @param condition
                 */
                setAni: function (opts, action, callback, condition) {
                    var start = Date.now(), delay = Date.now(), time, timePassed, progress, delta;

                    this.animation = $func(function () {
                        time = Date.now();

                        if (!condition || opts.startPoint == opts.endPoint) {
                            if (callback)
                                callback.apply(this.options, opts);

                            return;
                        }

                        if(time - delay >= opts.delay * 1000) {
                            timePassed = Date.now() - start;
                            progress = timePassed / opts.duration;

                            if (progress > 1)
                                progress = 1;

                            delta = opts.delta(progress);
                            opts.step(delta);

                            if (action)
                                action.apply(this.options, opts);

                            if (progress == 1) {
                                if (callback)
                                    callback.apply(this.options, opts);

                                this.cancleAnimation(this.animation);
                                return;
                            }

                            delay = Date.now();
                        }

                        window.requestAnimationFrame(this.animation.bind(this));
                    });

                    this.animation();
                },

                /**
                 * Animate (set values)
                 *
                 * @param params {step: *, startPoint: *, endPoint: *, delay: *, duration: *, delta: *, ext: *, callback: *, condition: *}
                 */
                animate: function (params) {
                    var
                        params      = params            || {},
                        ext         = params.ext        || '',
                        delay       = params.delay      || 0,
                        startPoint  = params.startPoint || 0,
                        endPoint    = params.endPoint   || 0,
                        callback    = params.callback   || false,
                        action      = params.action     || false,
                        condition   = params.condition  || true,
                        step        = params.step       || function(){},
                        duration    = params.duration * 1000 || 1000,
                        delta       = params.delta || this.setDelta('easeOut', {name: 'linear', progress: 1});

                    this.setAni({
                        delay:      delay,
                        duration:   duration,
                        delta:      delta,
                        ext:        ext,
                        startPoint: startPoint,
                        endPoint:   endPoint,
                        step: $func(function (delta) {
                            step(this.getValue, startPoint, endPoint, delta, ext);
                        }).bind(this)
                    }, action, callback, condition);
                },
                /**
                 * Get delta
                 *
                 * @param name
                 * @param x
                 * @returns {Function}
                 */
                getDelta: function (name, x) {
                    var delta = this.delta;

                    if(!(name in delta))
                        return function linear(progress) { return progress; };

                    return function(progress) {
                        return delta[name](progress, x);
                    }
                },

                /**
                 * Set ease
                 *
                 * @param type
                 * @param delta
                 * @param delta_2
                 * @returns {*}
                 */
                setEase: function (type, delta, delta_2) {
                    switch (type) {
                        case 'easeOut':
                            return function (progress) {
                                return 1 - delta(1 - progress);
                            };
                            break;

                        case 'easeInOut':
                            return function (progress) {
                                if (progress < .5) {
                                    return delta(2 * progress) / 2
                                } else {
                                    return (2 - delta(2 * (1 - progress))) / 2
                                }
                            };
                            break;

                        case 'easeInOut_delta':
                            return function (progress) {
                                if (progress < 0.5) {
                                    return delta(2 * progress) / 2
                                } else {
                                    return (2 - delta_2(2 * (1 - progress))) / 2
                                }
                            };
                            break;

                        default:
                            return delta;
                            break;
                    }
                },

                /**
                 * Set delta
                 *
                 * @param type
                 * @param delta
                 * @param delta_2
                 * @returns {*}
                 */
                setDelta: function (type, delta, delta_2) {
                    delta = (delta) ? this.getDelta(delta.name, delta.progress) : false;
                    delta_2 = (delta_2) ? this.getDelta(delta_2.name, delta_2.progress) : false;
                    return this.setEase(type, delta, delta_2);
                }
            }

            if(typeof $r === 'undefined')
                return Animation;

            /**
             * Animation extenstion for Ruddy
             *
             * @method animate
             * @param params
             *
             * @returns {*}
             */
            $r.assign('animate', function(params) {
                var style = params.style || '',
                    value;

                if(!('animation' in this))
                    this.animation = Animation(this);

                params.step = $func(function(getValue, startPoint, endPoint, delta, ext) {
                    switch(style) {
                        case 'x':
                            this.setTranslateX(getValue(startPoint, endPoint, delta));
                            break;

                        case 'y':
                            this.setTranslateY(getValue(startPoint, endPoint, delta));
                            break;

                        case 'xy':
                            this.setTranslate(
                                getValue(startPoint.x, endPoint.x, delta),
                                getValue(startPoint.y, endPoint.y, delta)
                            );
                            break;

                        default:
                            if(typeof style == 'function') {
                                style.call(this, getValue, startPoint, endPoint, delta);
                                return;
                            }

                            value = getValue(startPoint, endPoint, delta);
                            this.style(style, value + ext);
                            break;
                    }
                }).bind(this);

                return this.animation.animate(params);
            });

            /**
             *
             * @param type
             * @param delta
             * @param delta_2
             * @returns {*}
             */
            $r.assign('setDelta', function(type, delta, delta_2) {
                if(!('animation' in this))
                    this.animation = Animation(this);

                return this.animation.setDelta(type, delta, delta_2);
            });

            return Animation;
        }
    );
/**
 * RuddyJS Extenstions - Ajax
 *
 * @package     ruddy-scroll
 * @author      Gil Nimer <info@ruddymonkey.com>
 * @author      Nick Vlug <info@ruddy.nl>
 * @copyright   RuddyJS licensed under MIT. Copyright (c) 2017 Ruddy Monkey & ruddy.nl
 */

var $Export = $Export || require('ruddy').export;

$Export
    .module(
        'Scroll',
        '+scroll',
        'ruddy-scroll'
    )
    .include([
        'window',
        '@core',
        '@function',
        '@ruddy'
    ])
    .init(
        this,
        module,
        function (window, __core, $func, $r) {

            /**
             * pageXOffset
             *
             * @type {Number|number}
             */
            function pageXOffset() {
                return window.pageXOffset || (
                        (document.documentElement.clientWidth) ? document.documentElement.scrollLeft : document.body.scrollLeft
                    );
            }

            /**
             * pageYOffset
             *
             * @type {Number|number}
             */
            function pageYOffset() {
                return window.pageYOffset || (
                        (document.documentElement.clientHeight) ? document.documentElement.scrollTop : document.body.scrollTop
                    );
            }

            /**
             * scroll page both X and Y axis
             *
             * @param x
             * @param y
             * @param settings
             */
            $r.assign('scroll', $func (function(x, y, settings) {
                var
                    minX        = pageXOffset(),
                    minY        = pageYOffset(),
                    settings    = settings              || {},
                    duration    = settings.duration     || 1,
                    delay       = settings.delay        || 0,
                    action      = settings.action       || false,
                    callback    = settings.callback     || false,
                    condition   = settings.condition    || true,
                    delta       = settings.delta        || undefined;

                this.animate({
                    delay:      delay,
                    duration:   duration,
                    delta:      delta,
                    startPoint: {x: minX, y: minY},
                    endPoint:   {x: x, y: y},
                    style: function(getValue, start, end, delta) {
                        if(minX == x && minY == y)
                            return;

                        window.scrollTo(getValue(start.x, end.x, delta), getValue(start.y, end.y, delta));
                    },
                    action: action,
                    callback: callback,
                    condition: condition
                });
            }));

            /**
             * scroll page the X axis only
             *
             * @param to
             * @param settings
             */
            $r.assign('scrollX', $func (function(to, settings) {
                var
                    minX        = pageXOffset(),
                    settings    = settings              || {},
                    duration    = settings.duration     || 1,
                    delay       = settings.delay        || 0,
                    action      = settings.action       || false,
                    callback    = settings.callback     || false,
                    condition   = settings.condition    || true,
                    delta       = settings.delta        || undefined;

                this.animate({
                    delay:      delay,
                    duration:   duration,
                    delta:      delta,
                    startPoint: minX,
                    endPoint:   to,
                    style: function(getValue, start, end, delta) {
                        if(minX == to)
                            return;

                        window.scrollTo(getValue(start, end, delta), pageYOffset());
                    },
                    action: action,
                    callback: callback,
                    condition: condition
                });
            }));

            /**
             * scroll page the Y axis only
             *
             * @param to
             * @param settings
             */
            $r.assign('scrollY', $func (function(to, settings)
            {
                var
                    minY        = pageYOffset(),
                    settings    = settings              || {},
                    duration    = settings.duration     || 1,
                    delay       = settings.delay        || 0,
                    action      = settings.action       || false,
                    callback    = settings.callback     || false,
                    condition   = settings.condition    || true,
                    delta       = settings.delta        || undefined;

                this.animate({
                    delay:      delay,
                    duration:   duration,
                    delta:      delta,
                    startPoint: minY,
                    endPoint:   to,
                    style: function(getValue, start, end, delta) {
                        if(minY == end)
                            return;

                        window.scrollTo(pageXOffset(), getValue(start, end, delta));
                    },
                    action: action,
                    callback: callback,
                    condition: condition
                });
            }));

            return {xy: $r.scroll, x: $r.scrollX, y: $r.scrollY};
        });
/**
 * RuddyJS Extenstions - Ajax
 *
 * @package     ruddy-ajax
 * @author      Gil Nimer <info@ruddymonkey.com>
 * @author      Nick Vlug <info@ruddy.nl>
 * @copyright   RuddyJS licensed under MIT. Copyright (c) 2017 Ruddy Monkey & ruddy.nl
 */

var $Export = $Export || require('ruddy').export;

$Export
    .module(
        'Ajax',
        '+ajax',
        'ruddy-ajax'
    )
    .include([
        'window',
        '@core',
        '@function',
        '@ruddy'
    ])
    .init(
        this,
        module,
        function (window, __core, $func, $r) {
            /**
             * Ajax request polyfill
             */
            if (!window.XMLHttpRequest) {
                var AXOs = ['MSXML2.XMLHTTP.6.0', 'MSXML3.XMLHTTP', 'Microsoft.XMLHTTP', 'MSXML2.XMLHTTP.3.0'];
                var correctAXO = null;

                window.XMLHttpRequest = function () {
                    if (correctAXO === null) {
                        var request;
                        if (window.Activerequestect) {
                            for (var i = 0, c = AXOs.length; i < c; i++) {
                                try {
                                    request = new window.Activerequestect(AXOs[i]);
                                } catch (e) {
                                    request = false;
                                }
                                if (request) {
                                    correctAXO = AXOs[i];
                                    return request;
                                }
                            }
                        }
                        correctAXO = false;
                    }
                    if (correctAXO === false) {
                        throw new Error('XMLHttpRequest not supported in this browser');
                    }
                    return new window.Activerequestect(correctAXO);
                };

            }

            /**
             * Ajax
             *
             * @param params
             */
            $r.assign('ajax', $func(function (params) {
                var
                    request     = new XMLHttpRequest(),
                    url         = this.param['url'] || false,
                    params      = params || {},
                    method      = params.method || 'GET',
                    async       = params.async || true,
                    contentType = params.contentType || 'application/x-www-form-urlencoded',
                    mimeType    = params.mimeType || false,
                    success     = params.success || function () {},
                    error       = params.error || function () {},
                    data        = params.data || null,
                    query       = null;

                if (method == 'GET' && data) {
                    var id;
                    query = '?';

                    for (id in params.data) {
                        query += (id + '=' + params.data[id] + "&");
                    }

                    query.slice(0, -1);
                    url += query;
                }
                request.open(method, encodeURI(url), async);

                if (mimeType) {
                    request.overrideMimeType(mimeType)
                }

                request.setRequestHeader('Content-Type', contentType);
                request.onreadystatechange = function () {
                    var response = (request.response || request.responseText || null);

                    if (request.readyState === 4 && request.status === 200) {
                        success(request, response);
                    } else {
                        error(request, response);
                    }
                };

                request.send(data);

                return request;
            }));

            /**
             *
             * @param params
             */
            $r.assign('jsonp', function(params) {
                var script, element,
                    url             = this.param['url'] || false,
                    params          = params || {},
                    callback        = params.callback || 'callback',
                    async           = params.async || true,
                    success         = params.success || function () {},
                    error           = params.timeout || function () {},
                    timeout         = params.timelimit || 10;

                var trigger = window.setTimeout(function(){
                    window[callback] = function(){};
                    error();
                }, timeout * 1000);

                window[callback] = function(data){
                    window.clearTimeout(trigger);
                    success(data, element);
                };

                script = document.createElement('script');
                script.type = 'text/javascript';
                script.async = async;
                script.src = url;

                element = document.getElementsByTagName('head')[0].appendChild(script);
            });

            /**
             *
             * @param url
             * @param data
             * @param success
             * @param dataType
             * @returns {{then: then}}
             */
            __core.post = function (url, data, success, dataType) {
                if (__core.isFunc(data)) {
                    success = data;
                    dataType = success;
                    data = false;
                }

                var
                    request = $r({url: url}).ajax({
                        method: 'POST',
                        success: success || false,
                        data: data || false,
                        dataType: dataType || false
                    }),
                    response = request.response || request.responseText || null;

                return {
                    then: function (callback) {
                        request.onreadystatechange = function () {
                            if (request.readyState === 4 && request.status === 200);
                            callback(request, response);
                        };

                        return {
                            catch: function (callback) {
                                request.onreadystatechange = function () {
                                    if (request.readyState !== 4 || request.status !== 200)
                                        callback(request, response);
                                };
                            }
                        };
                    }
                };
            };

            /***
             *
             * @param url
             * @param data
             * @param success
             * @param dataType
             * @returns {{then: then}}
             */
            __core.get = function (url, data, success, dataType) {
                if (__core.isFunc(data)) {
                    success = data;
                    dataType = success;
                    data = false;
                }

                var
                    request = $r({url: url}).ajax({
                        method: 'GET',
                        success: success || false,
                        data: data || false,
                        dataType: dataType || false
                    }),
                    response = request.response || request.responseText || null;

                return {
                    then: function (callback) {
                        if (request.readyState === 4 && request.status === 200)
                            callback(request, response);

                        return {
                            catch: function (callback) {
                                if (request.readyState !== 4 || request.status !== 200)
                                    callback(request, response);
                            }
                        };
                    }
                };
            };

            return {
                get: __core.get,
                post: __core.post
            }
        });
/*!

cssFx - vendor prefix generator
Version 0.9.7+7cy57
© 2015 Ivan Malopinsky - http://imsky.co

Site:     http://imsky.github.io/cssFx
Issues:   https://github.com/imsky/cssFx/issues
License:  http://opensource.org/licenses/MIT

*/
!function e(t,r,n){function o(i,s){if(!r[i]){if(!t[i]){var c="function"==typeof require&&require;if(!s&&c)return c(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var u=r[i]={exports:{}};t[i][0].call(u.exports,function(e){var r=t[i][1][e];return o(r?r:e)},u,u.exports,e,t,r,n)}return r[i].exports}for(var a="function"==typeof require&&require,i=0;i<n.length;i++)o(n[i]);return o}({1:[function(e,t,r){var n=n||{};!function(t){var r=e("./helpers"),n=r.ajax,o=r.contentLoaded,a=r.str_combo,i=r.rgb2hex,s=r.inArray,c=r.forEach,l=["-moz-","-webkit-","-o-","-ms-"],u={moz_webkit:["background-origin","background-size","border-image","border-image-outset","border-image-repeat","border-image-source","border-image-width","border-radius","box-shadow","column-count","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-width"],moz_webkit_ms:["box-flex","box-orient","box-align","box-ordinal-group","box-flex-group","box-pack","box-direction","box-lines","box-sizing","animation-duration","animation-name","animation-delay","animation-direction","animation-iteration-count","animation-play-state","animation-timing-function","animation-fill-mode"],moz_webkit_ms_o:["perspective","transform","transform-origin","transition","transition-property","transition-duration","transition-timing-function","transition-delay","user-select"],misc:["background-clip","border-bottom-left-radius","border-bottom-right-radius","border-top-left-radius","border-top-right-radius"]},f=l[0],p=l[1],d=l[2],m=l[3],h=u.moz_webkit,g=u.moz_webkit_ms,b=u.moz_webkit_ms_o,v=u.misc,x=v.concat(b,h,g),y=["display","opacity","text-overflow","background-image","background"].concat(x),S="filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='{1}', endColorstr='{2}',GradientType=0)";t.processCSS=function(e,r){for(var n=[],o=/([\s\S]*?)\{([\s\S]*?)\}/gim,i=/\@import\s+(?:url\([\'\"]?(.*)[\'\"]?\))\s*\;?/gim,s=/@keyframes\s*([^\{]*)\{([^@]*)\}/g,u=0;u<e.length;u++){var f=a(e[u],1),p=[],d=i.test(f)&&f.match(i),m=s.test(f)&&f.match(s);i.lastIndex=0,s.lastIndex=0;for(var h=0;h<d.length;h++){f=f.replace(d[h],"");var g=i.exec(d[h])[1],b="/"==g[0]?g:r.replace(/[^\/]*?$/,"")+g;t.fetchCSS(b,function(e){t.insertCSS(t.processCSS([e],r))}),i.lastIndex=0}for(var h=0,v=m.length;v>h;h++){f=f.replace(m[h],"");var x=s.exec(m[h]);if(x){for(var S=x[2].match(o),k=[],w=0;w<S.length;w++){var C=o.exec(S[w]);C&&k.push(a(C[1])+"{"+t.processDec(C[2],!0)+"}"),o.lastIndex=0}c([0,1,3],function(e){p.push("@"+l[e]+"keyframes "+a(x[1])+"{"+k.join("\n")+"}")})}s.lastIndex=0}var E=o.test(f)&&f.match(o);o.lastIndex=0;for(var _=0,T=E.length;T>_;_++){var z=o.exec(E[_]);if(null!==z)for(var j=a(z[1],1),M=a(z[2],1),O=0,I=y.length;I>O;O++)if(M.indexOf(y[O])>=0){var L=t.processDec(M);L&&p.push(j+"{"+L+"}");break}o.lastIndex=0}p.length&&n.push(p.join("\n"))}return n},t.insertCSS=function(e){for(var t=0;t<e.length;t++){var r=document.createElement("style");r.setAttribute("type","text/css"),r.styleSheet?r.styleSheet.cssText=e[t]:r.textContent=e[t],document.getElementsByTagName("head")[0].appendChild(r)}},t.processDec=function(e,t){for(var r=e.split(";"),n=[],o="background",u=0;u<r.length;u++)if(!(r[u].indexOf(":")<0)){var y=r[u].split(":");if(2==y.length){var k=a(y[0]),w=a(y[1]),C=[k,w].join(":"),E=[];if(s(k,h))E.push(f+C,p+C);else if(s(k,g))E.push(f+C,p+C,"box-align"==k?m+k+":middle":m+C);else if(s(k,b))c([0,1,2,3],function(e){var t=l[e];if("transition"==k){var r=w.split(" ")[0];E.push(s(r,x)?t+C.replace(r,t+r):t+C)}else if("transition-property"==k){if(t==f){var n=w.split(","),o=[];c(n,function(e){var r=a(e);s(r,x)&&o.push(t+r)}),E.push(t+k+":"+o.join(","))}}else E.push(t+C)});else if(s(k,v))if(k==o+"-clip")"padding-box"===w&&E.push(p+C,f+k+":padding");else{var _=k.split("-");E.push(f+"border-radius-"+_[1]+_[2]+":"+w,p+C)}else switch(k){case"display":"box"==w?c([0,1,3],function(e){E.push("display:"+l[e]+w)}):"inline-block"==w&&E.push("display:"+f+"inline-stack",C,"zoom:1;*display:inline");break;case"text-overflow":"ellipsis"==w&&E.push(d+C);break;case"opacity":var T=Math.round(100*w);E.push(m+"filter:progid:DXImageTransform.Microsoft.Alpha(Opacity="+T+")","filter: alpha(opacity="+T+")",f+C,p+C);break;case o+"-image":case o+"-color":case o:var z="linear-gradient";if(w.indexOf(z)>=0){var j=new RegExp(z+"\\s?\\((.*)\\)","ig").exec(w);if(null!=j[1]){j=j[1];var M=z+"("+j+")";c([0,1,2,3],function(e){E.push(k+":"+l[e]+M)});var O=j.match(/\#([a-z0-9]{3,})/g);O&&O.length>1&&null!=O[O.length-1]&&E.push(S.replace("{1}",O[0]).replace("{2}",O[O.length-1]))}}else if(w.indexOf("rgba")>=0){var I=w.match(/rgba\((.*?)\)/)[1].split(","),L=Math.floor(255*+a(I[3])).toString(16)+i(+a(I[0]),+a(I[1]),+a(I[2]));E.push("*background:transparent;"+S.replace("{1}","#"+L).replace("{2}","#"+L)+";zoom:1")}break;default:t&&E.push(C)}E.length&&n.push(E.join(";"))}}return n.length&&n.join(";")},t.fetchCSS=function(e,r){n(e,null==r?function(r){t.insertCSS(t.processCSS([r],e))}:r)};var k=function(){var e=document.getElementsByTagName("style"),r=document.getElementsByTagName("link");for(var n in r)"object"==typeof r[n]&&"cssfx"===r[n].className&&t.fetchCSS(r[n].href);var o=[];for(var n in e)"object"==typeof e[n]&&o.push(e[n].innerHTML);o.length&&t.insertCSS(t.processCSS(o))};o(k)}(n)},{"./helpers":2}],2:[function(e,t,n){t.exports={rgb2hex:function(e,t,r){return((256+e<<8|t)<<8|r).toString(16).slice(1)},inArray:function(e,t){for(var r=0,n=t.length;n>r;r++)if(t[r]==e)return!0;return!1},forEach:function(e,t){for(var r=e.length,n=0;r>n;n++)t.call(this,e[n])},str_combo:function(e,t){return e.replace(null!=t?/\/\*([\s\S]*?)\*\//gim:"","").replace(/\n/gm,"").replace(/^\s*|\s*$/g,"").replace(/\s{2,}|\t/gm," ")},contentLoaded:function(e){var t=window,r="addEventListener",n="complete",o="readystatechange",a=!1,i=a,s=!0,c=t.document,l=c.documentElement,u=c[r]?r:"attachEvent",f=c[r]?"removeEventListener":"detachEvent",p=c[r]?"":"on",d=function(r){(r.type!=o||c.readyState==n)&&(("load"==r.type?t:c)[f](p+r.type,d,a),!i&&(i=!0)&&e.call(t,r.type||r))},m=function(){try{l.doScroll("left")}catch(e){return void setTimeout(m,50)}d("poll")};if(c.readyState==n)e.call(t,"lazy");else{if(c.createEventObject&&l.doScroll){try{s=!t.frameElement}catch(h){}s&&m()}c[u](p+"DOMContentLoaded",d,a),c[u](p+o,d,a),t[u](p+"load",d,a)}},ajax:function(e,t){var n=function(e){for(e=0;4>e;e++)try{return e?new ActiveXObject([,"Msxml2","Msxml3","Microsoft"][e]+".XMLHTTP"):new XMLHttpRequest}catch(t){}};(r=n())&&(r.onreadystatechange=function(){4==r.readyState&&t(r.responseText)},r.open("GET",e,!0),r.send(null))}}},{}]},{},[1]);
/*!
Copyright 2014 Adobe Systems Inc.;
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
!function(a){"use strict";function b(a){var b=getComputedStyle(a);this.units={px:1},this.element=a;var c=function(a){return a&&a.length?parseInt(a):0};this.margins=[b.marginTop,b.marginRight,b.marginBottom,b.marginLeft],this.margins=this.margins.map(c),this.borders=[b.borderTopWidth,b.borderRightWidth,b.borderBottomWidth,b.borderLeftWidth],this.borders=this.borders.map(c),this.paddings=[b.paddingTop,b.paddingRight,b.paddingBottom,b.paddingLeft],this.paddings=this.paddings.map(c),this.borderBox={x:0,y:0,width:a.offsetWidth,height:a.offsetHeight},this.marginBox={x:-this.margins[3],y:-this.margins[0],width:a.offsetWidth+this.margins[1]+this.margins[3],height:a.offsetHeight+this.margins[0]+this.margins[2]};var d=this,e=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];this.borderBox.radii=e.map(function(a){return a=b[a].split(/\s+/),[d.toPixels(a[0],d.borderBox.width),d.toPixels(a.length>1?a[1]:a[0],d.borderBox.height)]}),this.cssFloat=b.cssFloat}function c(a,b,c){return(c.x-a.x)*(b.y-a.y)-(b.x-a.x)*(c.y-a.y)}function d(a,b,d){return Math.abs(c(a,b,d))<350}function e(a,b){return a.x==b.x&&a.y==b.y}function f(a,b,c){return c.x>=Math.min(a.x,b.x)&&c.x<=Math.max(a.x,b.x)&&d(a,b,c)}function g(){}function h(a,b,c,d){if(a.y>=c&&a.y<=d)return{x1:a.x-b,x2:a.x+b};var e,f;return d<a.y?(e=d-a.y,f=z(e,b,b),{x1:a.x-f,x2:a.x+f}):(e=c-a.y,f=z(e,b,b),{x1:a.x-f,x2:a.x+f})}function i(a,b,c){this.init(a,b,c)}function j(a,b){var c=a.polygon.shapeMargin,d=b.x*c,e=b.y*c;this.anchorEdge=a,this.normalUnitVector=b;var f={x:a.vertex1.x+d,y:a.vertex1.y+e},g={x:a.vertex2.x+d,y:a.vertex2.y+e};this.init(a.polygon,f,g)}function k(a){for(var b=0,d=1;d<a.length;++d){var e=a[d];(e.y<a[b].y||e.y==a[b].y&&e.x<a[b].x)&&(b=d)}var f=a[(b+1)%a.length],g=a[(b+a.length-1)%a.length];return c(g,a[b],f)<0}function l(a,b,c){if(this.m_vertices=a,this.fillRule=b,this.shapeMargin=c,a.length<3)return this.m_edges=[],void(this.shapeMarginEdges=[]);var e=[],f=a.length>0?a[0].x:void 0,g=a.length>0?a[0].y:void 0,h=f,l=g,m=k(a),n=0;do{var o=this.nextEdgeVertexIndex(n,m);e.push(new i(this,a[n],a[o]));var p=a[n].x,q=a[n].y;f=Math.min(p,f),g=Math.min(q,g),h=Math.max(p,h),l=Math.max(q,l),n=o}while(0!==n);for(var r,s=0;s<e.length&&e.length>3;)r=(s+1)%e.length,d(e[s].vertex1,e[s].vertex2,e[r].vertex2)?(e[s].vertex2=e[r].vertex2,e.splice(r,1)):s++;if(0===c)this.shapeMarginEdges=e;else{for(var t=[],u=0;u<e.length;u++)t.push(new j(e[u],e[u].outwardNormal())),t.push(new j(e[u],e[u].inwardNormal()));this.shapeMarginEdges=t}this.m_edges=e,this.bounds=new x(f-c,g-c,2*c+(h-f),2*c+(l-g))}function m(a,b){return a.minX-b.minX}function n(a,b){return b.x-a.x}function o(a,b){return b.maxX-a.maxX}function p(a,b){return a.x-b.x}function q(a,b,c){this.y=a,this.startX=b,this.endX=c}function r(a,b){this.intervals=[],this.yOffset=a,this.size=b;for(var c=0;b>c;c++)this.intervals[c]=r.none;this.minY=-a,this.maxY=b-a}function s(a){this.shapeMargin=a,this.xIntercepts=[];for(var b=0;a>=b;b++)this.xIntercepts[b]=Math.sqrt(a*a-b*b)}function t(a,b){console.log("Unable to load image ",a,". It's probably missing or you've run into a CORS issue."),b&&console.log("The exact problem was ",b)}function u(a,b,c){var d=document.createElement("canvas");this.width=d.width=b,this.height=d.height=c;var e=d.getContext("2d");e.drawImage(a,0,0,b,c);try{this.imageData=e.getImageData(0,0,b,c)}catch(f){t(a.src,f)}}function v(a,b,c,d,e,f){this.url=a,this.box=b,this.shapeImageThreshold=256*c,this.shapeMargin=d,this.clip=e,this.init(f)}function w(a,b){this.width=a,this.height=b}function x(a,b,c,d){this.x=a,this.y=b,this.width=c,this.height=d,this.maxX=a+c,this.maxY=b+d}function y(a,b,c,d,e){this.rect=a,this.radii={topLeft:b,topRight:c,bottomLeft:d,bottomRight:e}}function z(a,b,c){return b*Math.sqrt(1-a*a/(c*c))}function A(a,b,c){return 0===b?1:Math.round(0===a||c>a*b/2?b:Math.sqrt(2*c*(b/a)))}function B(a,b){return a.maxX-b}function C(a,b){return a.x+b}function D(a){return a.x}function E(a){return a.maxX}function F(a,b,c,d){return function(e,f,g){if(!this.rect.overlapsYRange(e,f))return[{x:void 0,height:f-e}];var h=[];e<this.rect.y&&h.push({x:void 0,height:this.rect.y-e});var i,j,k,l,m,n,o=a.call(this),p=b.call(this),q=new x(this.rect.x,o.maxY,this.rect.width,p.y-o.maxY);if(o.overlapsYRange(e,f))for(i=A(o.width,o.height,g),j=Math.max(o.y,e),k=Math.min(o.maxY,f),l=j;k>l;l+=i)m=o.maxY-Math.min(l+i,k),n=z(m,o.width,o.height),h.push({height:Math.min(i,k-l),x:d(o,n)});if(j=Math.max(q.y,e),k=Math.min(q.maxY,f),q.overlapsYRange(e,f)&&h.push({x:c(q),height:k-j}),p.overlapsYRange(e,f))for(i=A(p.width,p.height,g),j=Math.max(e,p.y),k=Math.min(p.maxY,f),l=j;k>l;l+=i)m=l-p.y,n=z(m,p.width,p.height),h.push({height:Math.min(i,k-l),x:d(p,n)});return f>this.rect.maxY&&h.push({x:void 0,height:f-this.rect.maxY}),h}}function G(a,b){var c=a.r+b,d=new w(c,c);return new y(new x(a.cx-c,a.cy-c,2*c,2*c),d,d,d,d)}function H(a,b){var c=new w(a.rx+b,a.ry+b);return new y(new x(a.cx-c.width,a.cy-c.height,2*c.width,2*c.height),c,c,c,c)}function I(a,b){function c(a){return new w(a[0]+b,a[1]+b)}var d=c(a.radii[0]),e=c(a.radii[1]),f=c(a.radii[2]),g=c(a.radii[3]),h=new x(a.x-b,a.y-b,a.width+2*b,a.height+2*b);return new y(h,d,e,g,f)}function J(a,b){function c(a){return new w(a[0]+b,a[1]+b)}var d=c(a.radii[0]),e=c(a.radii[1]),f=c(a.radii[2]),g=c(a.radii[3]),h=new x(-b,-b,a.width+2*b,a.height+2*b);return new y(h,d,e,g,f)}function K(a,b,c,d,e,f){var g=new x(e.x,e.y,e.width,e.height);return new v(a,b,c,d,g,f)}function L(a,b){return new l(a.points,a.fillRule,b)}function M(a,b){var c,d=void 0===a.shapeMargin?0:a.shapeMargin;if(a.shape){switch(a.shape.type){case"circle":c=G(a.shape,d);break;case"ellipse":c=H(a.shape,d);break;case"inset":c=I(a.shape,d),c.isRenderable()||c.adjustRadii();break;case"polygon":c=L(a.shape,d)}return b(),c}return a.url?K(a.url,a.box,a.shapeImageThreshold,d,a.clip,b):a.box?(c=J(a.box,d),b(),c):void console.error("Unrecognized shape")}function N(a){this.metrics=new b(a);var c={metrics:this.metrics,shapeOutside:a.getAttribute("data-shape-outside"),shapeMargin:a.getAttribute("data-shape-margin"),shapeImageThreshold:a.getAttribute("data-shape-image-threshold")};this.shapeValue=new R(c);var d=this;this.geometry=M(this.shapeValue,function(){d.ready=!0,d.callback&&d.callback()})}function O(a){this.scope=a;var b=document.currentScript;b||(b=document.getElementsByTagName("script"),b=b[b.length-1]);var c=this,d="false"!==b.getAttribute("data-auto-run");d&&a.addEventListener&&a.addEventListener("load",function(){c.run()})}function P(a,b){var c,d=document.createElement("div");b.forEach(function(a){var b=a.bottom-a.top,e=document.createElement("div");e.className="sandbag",c={cssFloat:a.cssFloat,width:a.offset+"px",height:b+"px",clear:a.cssFloat};for(var f in c)e.style[f]=c[f];d.appendChild(e)}),c={position:"relative",width:"auto",height:"0",clear:"both",pointerEvents:"none"};for(var e in c)d.style[e]=c[e];var f,g=a.parentNode,h=getComputedStyle(g),i=parseFloat(h.borderTop)+parseFloat(h.borderBottom);c={position:"absolute",top:"0",width:"100%",height:g.clientHeight-i,left:"0"},f=document.createElement("div");for(e in c)f.style[e]=c[e];d.appendChild(f),a.parentNode&&a.parentNode.insertBefore(d,a),f.appendChild(a),d.setAttribute("data-shape-outside-container","true")}function Q(a,b){var c;return function(){var d=this,e=arguments;clearTimeout(c),c=setTimeout(function(){c=null,a.apply(d,e)},b)}}function R(a){return a&&a.metrics&&a.shapeOutside?(this.url=this.parseUrl(a.shapeOutside),this.box=this.parseBox(this.url?"content-box":a.shapeOutside,a.metrics),this.shape=this.parseBasicShape(a.shapeOutside,this.box,a.metrics),this.clip=this.computeClip(this.box,a.metrics),this.shapeMargin=this.parseShapeMargin(a.shapeMargin,this.box,a.metrics),void(this.shapeImageThreshold=this.parseShapeImageThreshold(a.shapeImageThreshold))):void console.error("ShapeValue requires at least a metrics object and shape-outside string")}function S(a,b,c){var d=c.reduce(function(a,b){return a+b[0]},0),e=c.reduce(function(a,b){return a+b[1]},0),f=c.reduce(function(a,b){return a+b[2]},0),g=c.reduce(function(a,b){return a+b[3]},0);a.x-=b*g,a.y-=b*d,a.width+=b*(g+e),a.height+=b*(d+f)}function T(a,b,c){if(0>b)return Math.max(a+b*c,0);var d=Math.abs(a/c);return 1>d?Math.max(a+c*(1+Math.pow(d-1,3)),0):a+c}function U(a,b,c){var d=c.reduce(function(a,b){return a+b[0]},0),e=c.reduce(function(a,b){return a+b[1]},0),f=c.reduce(function(a,b){return a+b[2]},0),g=c.reduce(function(a,b){return a+b[3]},0);a[0][0]=T(a[0][0],b,g),a[0][1]=T(a[0][1],b,d),a[1][0]=T(a[1][0],b,e),a[1][1]=T(a[1][1],b,d),a[2][0]=T(a[2][0],b,e),a[2][1]=T(a[2][1],b,f),a[3][0]=T(a[3][0],b,g),a[3][1]=T(a[3][1],b,f)}function V(a,b){return a.map(function(a){return a[b]})}function W(a,b,c){a=a.split(/\s+/);var d="TopLeft",e=0;switch(a[0]){case"top":case"left":break;case"bottom":case"right":d="BottomRight";break;case"center":e=b/2;break;default:e=c.toPixels(a[0],b)}return a.length>1&&(e=c.toPixels(a[1],b)),"TopLeft"===d?e:b-e}function X(a,b,c,d){return"closest-side"===a?Math.min.apply(null,b):"farthest-side"===a?Math.max.apply(null,b):d.toPixels(a,c)}function Y(){var a,b,c=document,d=[];if("function"==typeof c.querySelectorAll)d=c.querySelectorAll('link[rel="stylesheet"], style'),d=Array.prototype.slice.call(d,0);else{var e=c.getElementsByTagName("link");if(e.length)for(a=0,b=e.length;b>a;a++)"stylesheet"===e[a].getAttribute("rel")&&d.push(e[a]);for(e=c.getElementsByTagName("style"),a=0,b=e.length;b>a;a++)d.push(e[a])}return d}function Z(a){this.source=a,this.url=a.href||null,this.cssText=""}function $(a){return this instanceof $?(this.stylesheets=[],this.queueCount=0,this.callback=a||function(){},void this.init()):new $(a)}function _(a){this.callback=a||function(){};var b=this;new $(function(a){b.onStylesLoaded(a)})}b.prototype.unitToPx=function(a){if(this.units[a])return this.units[a];var b=this.element.style.getPropertyValue("line-height");return this.element.style.setProperty("line-height",1+a),this.units[a]=parseFloat(getComputedStyle(this.element).getPropertyValue("line-height")),this.element.style.setProperty("line-height",b),this.units[a]},b.prototype.getUnitsMap=function(a){var b=["em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","in","px","pt","pc"],c=document.createElement("div");c.style.width="0px",c.style.height="0px",a.appendChild(c);var d=getComputedStyle(c),e={};return b.forEach(function(a){c.style.lineHeight="1"+a,e[a]=parseFloat(d.lineHeight)}),c.parentNode.removeChild(c),e},b.prototype.toPixels=function(a,b){var c=/([\-0-9\.]*)([a-z%]*)/.exec(a);return c[1]=parseFloat(c[1]),c[2]?"%"===c[2]?c[1]*b/100:c[1]*this.unitToPx(c[2]):c[1]},g.prototype.init=function(a,b,c){this.polygon=a,this.vertex1=b,this.vertex2=c,this.minX=Math.min(this.vertex1.x,this.vertex2.x),this.maxX=Math.max(this.vertex1.x,this.vertex2.x)},g.prototype.containsPoint=function(a){return f(this.vertex1,this.vertex2,a)},g.prototype.overlapsYRange=function(a,b){var c=this.vertex1.y,d=this.vertex2.y;return b>=Math.min(c,d)&&a<=Math.max(c,d)},g.prototype.isWithinYRange=function(a,b){var c=this.vertex1.y,d=this.vertex2.y;return a<=Math.min(c,d)&&b>=Math.max(c,d)},g.prototype.inwardNormal=function(){var a=this.vertex2.x-this.vertex1.x,b=this.vertex2.y-this.vertex1.y,c=Math.sqrt(a*a+b*b);return{x:-b/c,y:a/c}},g.prototype.outwardNormal=function(){var a=this.inwardNormal();return{x:-a.x,y:-a.y}},g.prototype.xIntercept=function(a){var b=this.vertex1.y,c=this.vertex2.y;return b==c?Math.min(this.vertex1.x,this.vertex2.x):a==Math.min(b,c)?c>b?this.vertex1.x:this.vertex2.x:a==Math.max(b,c)?b>c?this.vertex1.x:this.vertex2.x:this.vertex1.x+(a-b)*(this.vertex2.x-this.vertex1.x)/(c-b)},g.prototype.clippedEdgeXRange=function(a,b){if(this.isWithinYRange(a,b)){var c=this.vertex1.x,d=this.vertex2.x;return{x1:Math.min(c,d),x2:Math.max(c,d)}}var e,f;this.vertex1.y<this.vertex2.y?(e=this.vertex1,f=this.vertex2):(e=this.vertex2,f=this.vertex1);var g=e.y<a?this.xIntercept(a):e.x,h=f.y>b?this.xIntercept(b):f.x;return{x1:Math.min(g,h),x2:Math.max(g,h)}},i.prototype=new g,j.prototype=new g,l.prototype.vertexAt=function(a){return this.m_vertices[a]},l.prototype.edgeAt=function(a){return this.m_edges[a]},l.prototype.isEmpty=function(){return this.m_edges.length<3||this.bounds.isEmpty()},l.prototype.vertices=function(){return this.m_vertices.slice(0)},l.prototype.edges=function(){return this.m_edges.slice(0)},l.prototype.overlapsYRange=function(a,b){return a<this.bounds.maxY&&b>=this.bounds.y},l.prototype.nextVertexIndex=function(a,b){var c=this.m_vertices.length;return(b?a+1:a-1+c)%c},l.prototype.nextEdgeVertexIndex=function(a,b){for(var c=(this.m_vertices.length,this.nextVertexIndex(a,b));c&&e(this.vertexAt(a),this.vertexAt(c));)c=this.nextVertexIndex(c,b);for(;c;){var f=this.nextVertexIndex(c,b);if(!d(this.vertexAt(a),this.vertexAt(c),this.vertexAt(f)))break;c=f}return c},l.prototype.containsPointEvenOdd=function(a){for(var b=0,c=0;c<this.m_edges.length;++c){var d=this.edgeAt(c);if(d.containsPoint(a))return!0;var e=d.vertex1,f=d.vertex2;if(e.y<=a.y&&f.y>a.y||e.y>a.y&&f.y<=a.y){var g=(a.y-e.y)/(f.y-e.y);a.x<e.x+g*(f.x-e.x)&&++b}}return 0!==(1&b)},l.prototype.containsPointNonZero=function(a){for(var b=0,d=0;d<this.m_edges.length;++d){var e=this.edgeAt(d);if(e.containsPoint(a))return!0;var f=e.vertex1,g=e.vertex2;g.y<a.y?f.y>a.y&&c(f,g,a)>0&&++b:g.y>a.y&&f.y<=a.y&&c(f,g,a)<0&&--b}return 0!==b},l.prototype.containsPoint=function(a){return this.bounds.containsPoint(a)?"nonzero"==this.fillRule?this.containsPointNonZero(a):this.containsPointEvenOdd(a):!1},l.prototype.edgeVerticesThatOverlapYRange=function(a,b){for(var c=[],d=0;d<this.m_edges.length;d++){var e=this.edgeAt(d).vertex1;e.y>=a&&e.y<b&&c.push(e)}return c},l.prototype.edgesThatOverlapYRange=function(a,b){for(var c=[],d=0;d<this.m_edges.length;d++){var e=this.edgeAt(d);e.overlapsYRange(a,b)&&c.push(e)}return c},l.prototype.shapeMarginEdgesThatOverlapYRange=function(a,b){for(var c=[],d=0;d<this.shapeMarginEdges.length;d++){var e=this.shapeMarginEdges[d];e.overlapsYRange(a,b)&&c.push(e)}return c},l.prototype.leftExclusionEdge=function(a,b){if(this.isEmpty()||!this.bounds.overlapsYRange(a,b))return void 0;var c,d,e,f=this.shapeMarginEdgesThatOverlapYRange(a,b);if(0!==f.length)for(f.sort(m),c=f[0].clippedEdgeXRange(a,b).x1,d=1;d<f.length&&!(f[d].minX>c);d++)e=f[d].clippedEdgeXRange(a,b),c=void 0===c?e.x1:Math.min(c,e.x1);var g=this.shapeMargin;if(g>0){var i=this.edgeVerticesThatOverlapYRange(a-g,b+g);for(i.sort(n),d=0;d<i.length;d++)e=h(i[d],g,a,b),c=void 0===c?e.x1:Math.min(c,e.x1)}return void 0===c&&console.error("Polygon leftExclusionEdge() failed"),c},l.prototype.rightExclusionEdge=function(a,b){if(this.isEmpty()||!this.bounds.overlapsYRange(a,b))return void 0;var c,d,e,f=this.shapeMarginEdgesThatOverlapYRange(a,b);if(0!==f.length)for(f.sort(o),c=f[0].clippedEdgeXRange(a,b).x2,d=1;d<f.length&&!(f[d].maxX<c);d++)e=f[d].clippedEdgeXRange(a,b),c=Math.max(c,e.x2);var g=this.shapeMargin;if(g>0){var i=this.edgeVerticesThatOverlapYRange(a-g,b+g);for(i.sort(p),d=0;d<i.length;d++)e=h(i[d],g,a,b),c=void 0===c?e.x2:Math.max(c,e.x2)}return void 0===c&&console.error("Polygon rightExclusionEdge() failed"),c},r.none={},r.prototype.intervalAt=function(a){return this.intervals[a+this.yOffset]},r.prototype.setIntervalAt=function(a,b){this.intervals[a+this.yOffset]=b},r.prototype.uniteIntervalAt=function(a,b){var c=this.intervalAt(a);c===r.none?this.setIntervalAt(a,b):(c.startX=Math.min(c.startX,b.startX),c.endX=Math.max(c.endX,b.endX))},r.prototype.intervalAtContains=function(a,b){var c=this.intervalAt(a);return c==r.none?!1:c.startX<=b.startX&&c.endX>=b.endX},s.prototype.generateIntervalAt=function(a,b){var c=Math.abs(a-b.y),d=c>this.shapeMargin?0:this.xIntercepts[c];return new q(a,b.startX-d,b.endX+d)},r.prototype.computeMarginIntervals=function(a){for(var b=new s(a),c=new r(this.yOffset,this.size),d=this.minY;d<this.maxY;++d){var e=this.intervalAt(d);if(e!=r.none){var f,g=Math.max(this.minY,d-a),h=Math.min(this.maxY-1,d+a);for(f=d-1;f>=g&&!(f>0&&this.intervalAtContains(f,e));--f)c.uniteIntervalAt(f,b.generateIntervalAt(f,e));for(c.uniteIntervalAt(d,b.generateIntervalAt(d,e)),f=d+1;h>=f&&!(f<this.maxY&&this.intervalAtContains(f,e));++f)c.uniteIntervalAt(f,b.generateIntervalAt(f,e))}}return c},u.prototype.hasData=function(){return!!this.imageData},u.prototype.alphaAt=function(a,b){return this.imageData.data[4*a+3+b*this.width*4]},v.prototype.init=function(a){var b,c=this,d=new Image,e=document.createElement("canvas");if(e.getContext||(t(c.url),a()),d.onload=function(){c.intervals=c.computeIntervals(d),c.intervals&&c.shapeMargin>0&&(c.intervals=c.intervals.computeMarginIntervals(c.shapeMargin,c.clip)),b&&URL.revokeObjectURL(b),a()},d.onerror=function(){t(c.url),a()},!d.hasOwnProperty("crossOrigin")&&window.URL&&window.URL.createObjectURL){var f=new XMLHttpRequest;f.onreadystatechange=function(){4===f.readyState&&(200===f.status?(b=URL.createObjectURL(f.response),d.src=b):(t(c.url),a()))},f.open("GET",c.url,!0),f.responseType="blob",f.send()}else d.crossOrigin="anonymous",d.src=c.url},v.prototype.computeIntervals=function(a){var b=this.clip,c=this.shapeImageThreshold,d=this.box.width,e=this.box.height,f=new u(a,d,e);if(!f.hasData())return void 0;for(var g=new r(-b.y,b.height),h=Math.min(b.height,this.box.height),i=0;h>i;i++)for(var j=-1,k=0;k<this.box.width;k++){var l=f.alphaAt(k,i);-1==j&&l>c?(j=k,g.intervalAt(i)===r.none&&g.setIntervalAt(i,new q(i,j,d))):-1!=j&&c>=l&&(g.intervalAt(i).endX=k,j=-1)}return g},v.prototype.rightExclusionEdge=function(a,b){var c=this.intervals;if(!c)return this.clip.width;for(var d,e=Math.max(a,this.clip.y);b>=e&&e<this.clip.maxY;e++){var f=c.intervalAt(e).endX;(void 0===d||void 0!==f&&f>d)&&(d=f)}return d},v.prototype.leftExclusionEdge=function(a,b){var c=this.intervals;if(!c)return 0;for(var d,e=Math.max(a,this.clip.y);b>=e&&e<this.clip.maxY;e++){var f=c.intervalAt(e).startX;(void 0===d||void 0!==f&&d>f)&&(d=f)}return d},w.zeroSize={width:0,height:0},w.prototype.isEmpty=function(){return this.width<=0||this.height<=0},w.prototype.scale=function(a){this.width*=a,this.height*=a},x.prototype.isEmpty=function(){return this.width<=0||this.height<=0},x.prototype.containsX=function(a){return a>=this.x&&a<this.maxX},x.prototype.containsY=function(a){return a>=this.y&&a<this.maxY},x.prototype.containsPoint=function(a){return this.containsX(a.x)&&this.containsY(a.y)},x.prototype.shiftLeftEdgeTo=function(a){this.width-=a-this.x,this.x=a},x.prototype.shiftTopEdgeTo=function(a){this.height-=a-this.y,this.y=a},x.prototype.shiftRightEdgeTo=function(a){this.width=a-this.x},x.prototype.shiftBottomEdgeTo=function(a){this.height=a-this.y},x.prototype.overlapsYRange=function(a,b){return!this.isEmpty()&&b>=this.y&&a<this.maxY},x.prototype.overlapsXRange=function(a,b){return!this.isEmpty()&&b>=this.x&&a<this.maxX},y.prototype.isEmpty=function(){return this.width<=0||this.height<=0},y.prototype.topLeftCorner=function(){return new x(this.rect.x,this.rect.y,this.radii.topLeft.width,this.radii.topLeft.height)},y.prototype.topRightCorner=function(){return new x(this.rect.maxX-this.radii.topRight.width,this.rect.y,this.radii.topRight.width,this.radii.topRight.height)},y.prototype.bottomLeftCorner=function(){return new x(this.rect.x,this.rect.maxY-this.radii.bottomLeft.height,this.radii.bottomLeft.width,this.radii.bottomLeft.height)},y.prototype.bottomRightCorner=function(){return new x(this.rect.maxX-this.radii.bottomRight.width,this.rect.maxY-this.radii.bottomRight.height,this.radii.bottomRight.width,this.radii.bottomRight.height)},y.prototype.isRounded=function(){function a(a){return a.width>0&&a.height>0}return a(this.radii.topLeft)||a(this.radii.topRight)||a(this.radii.bottomLeft)||a(this.radii.bottomRight)},y.prototype.cornersInsetRect=function(){var a=this.topLeftCorner(),b=this.topRightCorner(),c=this.bottomLeftCorner(),d=this.bottomRightCorner(),e=Math.max(a.maxX,c.maxX),f=Math.max(a.maxY,b.maxY);return new x(e,f,Math.min(b.x,d.x)-e,Math.min(c.y,d.y)-f)},y.prototype.scaleRadii=function(a){if(1!=a){var b=this.radii;b.topLeft.scale(a),b.topLeft.isEmpty()&&(b.topLeft=w.zeroSize),b.topRight.scale(a),b.topRight.isEmpty()&&(b.topRight=w.zeroSize),b.bottomLeft.scale(a),b.bottomLeft.isEmpty()&&(b.bottomLeft=w.zeroSize),b.bottomRight.scale(a),b.bottomRight.isEmpty()&&(b.bottomRight=w.zeroSize)}},y.prototype.isRenderable=function(){var a=this.radii,b=this.rect;return a.topLeft.width+a.topRight.width<=b.width&&a.bottomLeft.width+a.bottomRight.width<=b.width&&a.topLeft.height+a.bottomLeft.height<=b.height&&a.topRight.height+a.bottomRight.height<=b.height},y.prototype.adjustRadii=function(){var a=this.radii,b=Math.max(a.topLeft.width+a.topRight.width,a.bottomLeft.width+a.bottomRight.width),c=Math.max(a.topLeft.height+a.bottomLeft.height,a.topRight.height+a.bottomRight.height);if(0>=b||0>=c)return void(this.radii={topLeft:w.zeroSize,topRight:w.zeroSize,bottomRight:w.zeroSize,bottomLeft:w.zeroSize});var d=this.rect,e=d.width/b,f=d.height/c;this.scaleRadii(f>e?e:f)},y.prototype.minXInterceptAt=function(a,b){if(!this.rect.containsY(a))return b;var c,d=this.topLeftCorner();if(d.containsY(a))return c=d.maxY-a,d.maxX-z(c,d.width,d.height);var e=this.bottomLeftCorner();return e.containsY(a)?(c=a-e.y,e.maxX-z(c,e.width,e.height)):this.rect.x},y.prototype.maxXInterceptAt=function(a,b){if(!this.rect.containsY(a))return b;var c,d=this.topRightCorner();if(d.containsY(a))return c=d.maxY-a,d.x+z(c,d.width,d.height);var e=this.bottomRightCorner();return e.containsY(a)?(c=a-e.y,e.x+z(c,e.width,e.height)):this.rect.maxX},y.prototype.rightExclusionEdge=function(a,b){return this.rect.isEmpty()||!this.rect.overlapsYRange(a,b)?void 0:!this.isRounded()||this.cornersInsetRect().overlapsYRange(a,b)?this.rect.maxX:Math.max(this.maxXInterceptAt(a,this.rect.x),this.maxXInterceptAt(b,this.rect.x))},y.prototype.leftExclusionEdge=function(a,b){return this.rect.isEmpty()||!this.rect.overlapsYRange(a,b)?void 0:!this.isRounded()||this.cornersInsetRect().overlapsYRange(a,b)?this.rect.x:Math.min(this.minXInterceptAt(a,this.rect.maxX),this.minXInterceptAt(b,this.rect.maxX))},y.prototype.rightExclusionOffsets=F(y.prototype.topRightCorner,y.prototype.bottomRightCorner,E,C),y.prototype.leftExclusionOffsets=F(y.prototype.topLeftCorner,y.prototype.bottomLeftCorner,D,B),N.prototype.onReady=function(a){this.ready?a():this.callback=a},N.prototype.leftExclusionEdge=function(a){return this.geometry?this.geometry.leftExclusionEdge(a.top,a.bottom):a.left},N.prototype.rightExclusionEdge=function(a){return this.geometry?this.geometry.rightExclusionEdge(a.top,a.bottom):a.right},N.prototype.computeStepOffsets=function(a){for(var b,c=[],d=0;d<Math.ceil(this.metrics.marginBox.height/a);d++){var e={left:0,right:this.shapeValue.box.width,top:d*a,bottom:Math.min((d+1)*a,this.metrics.marginBox.height)};e.top-=this.metrics.margins[0]+this.shapeValue.box.y,e.bottom-=this.metrics.margins[0]+this.shapeValue.box.y,"left"===this.metrics.cssFloat?(b=this.rightExclusionEdge(e),b=void 0===b?0:b+this.shapeValue.box.x+this.metrics.margins[3]):(b=this.leftExclusionEdge(e),b=void 0===b?0:this.metrics.marginBox.width-(b+this.shapeValue.box.x+this.metrics.margins[3])),c.push({cssFloat:this.metrics.cssFloat,top:e.top+this.shapeValue.box.y+this.metrics.margins[0],bottom:e.bottom+this.shapeValue.box.y+this.metrics.margins[0],offset:Math.min(b,this.metrics.marginBox.width)})}return c},N.prototype.computeAdaptiveOffsets=function(a){for(var b=this.shapeValue.box.x+this.metrics.margins[3],c=this.metrics.margins[0]+this.shapeValue.box.y,d="left"===this.metrics.cssFloat?this.geometry.rightExclusionOffsets(-c,this.metrics.marginBox.height-c,a):this.geometry.leftExclusionOffsets(-c,this.metrics.marginBox.height-c,a),e=[],f=0,g=0;g<d.length;g++){var h;void 0===d[g].x?h=0:(h="left"==this.metrics.cssFloat?d[g].x+b:this.metrics.marginBox.width-(d[g].x+b),h=Math.min(h,this.metrics.marginBox.width)),e.push({offset:h,top:f,bottom:f+d[g].height,cssFloat:this.metrics.cssFloat}),f+=d[g].height}return e},N.prototype.offsets=function(a){return this.geometry instanceof y?"step"==(a&&a.mode)?this.computeStepOffsets(a.step):this.computeAdaptiveOffsets(a.limit):this.computeStepOffsets(a.step)},O.prototype.polyfill=function(a,b){var c=getComputedStyle(a);if(/left|right/.test(c.cssFloat)&&a.getAttribute("data-shape-outside")){var d=b&&b.step||parseInt(c.fontSize),e=b&&b.mode||"adaptive",f=b&&b.limit||1.8*d,g=new N(a),h=this;g.onReady(function(){var c=g.offsets({mode:e,limit:f,step:d});P(a,c),b&&b.callback&&"function"==typeof b.callback&&b.callback.call(h.scope)})}},O.prototype.removePolyfill=function(a){var b=a.parentNode;for(b=a.parentNode;b&&b.hasAttribute&&!b.hasAttribute("data-shape-outside-container");b=b.parentNode);b&&b.hasAttribute&&(b.parentNode.insertBefore(a,b),b.parentNode.removeChild(b))},O.prototype.run=function(a){var b=this,c=a&&a.force,d=(c&&(c===this.Force.Layout||c===this.Force.LayoutStyles),c&&(c===this.Force.Styles||c===this.Force.LayoutStyles));if(c===this.Force.LayoutStyles?a.force=this.Force.Layout:c&&delete a.force,void 0===this.hasNativeSupport){var e=document.createElement("div"),f=["shape-outside","-webkit-shape-outside"];f.forEach(function(a){e.style.setProperty(a,"content-box"),b.hasNativeSupport=b.hasNativeSupport||e.style.getPropertyValue(a)})}if(!this.hasNativeSupport||c){if(!this.stylesLoaded||d){this.stylesLoaded=!0,new _(function(c){c.forEach(function(a){for(var b=document.querySelectorAll(a.selector),c=0;c<b.length;c++)b[c].setAttribute("data-"+a.property,a.value)}),b.run(a)});var g=Q(function(){b.teardown(),b.run(a)},300);return void this.scope.addEventListener("resize",g)}for(var h=document.querySelectorAll("[data-shape-outside]"),i=0;i<h.length;i++)this.polyfill(h[i],a)}},O.prototype.teardown=function(){for(var a=document.querySelectorAll("[data-shape-outside]"),b=0;b<a.length;b++)this.removePolyfill(a[b])},O.prototype.Force={Layout:"force-layout",Styles:"force-styles",LayoutStyles:"force-layout-styles"},Object.freeze&&(O.prototype.Force=Object.freeze(O.prototype.Force)),R.prototype.parseUrl=function(a){var b=/url\((.*)\)/.exec(a);return b?(b=b[1],b=b.replace(/^['"]/,""),b=b.replace(/['"]$/,"")):null},R.prototype.parseBox=function(a,b){var c=/margin-box|border-box|padding-box|content-box/.exec(a);c=c?c[0]:"margin-box";var d=JSON.parse(JSON.stringify(b.borderBox.radii)),e={text:c,x:b.borderBox.x,y:b.borderBox.y,width:b.borderBox.width,height:b.borderBox.height,radii:d};switch(c){case"content-box":S(e,-1,[b.paddings,b.borders]),U(e.radii,-1,[b.paddings,b.borders]);break;case"padding-box":S(e,-1,[b.borders]),U(e.radii,-1,[b.borders]);break;case"border-box":break;case"margin-box":S(e,1,[b.margins]),U(e.radii,1,[b.margins])}return e},R.prototype.printShape=function(){if(this.shape)switch(this.shape.type){case"inset":return"inset("+this.shape.insets.join(" ")+" round "+V(this.shape.radii,0).join(" ")+" / "+V(this.shape.radii,1).join(" ")+")";case"circle":return"circle("+this.shape.r+" at "+this.shape.cx+" "+this.shape.cy+")";case"ellipse":return"ellipse("+this.shape.rx+" "+this.shape.ry+" at "+this.shape.cx+" "+this.shape.cy+")";case"polygon":return"polygon("+this.shape.fillRule+", "+this.shape.points.map(function(a){return a.x+" "+a.y}).join(", ")+")";default:return"not yet implemented for "+this.shape.type}return"no shape specified"},R.prototype.printBox=function(){return this.box?this.box.text+" { x: "+this.box.x+", y: "+this.box.y+", width: "+this.box.width+", height: "+this.box.height+", radii: "+V(this.box.radii,0).join(" ")+" / "+V(this.box.radii,1).join(" ")+" }":"no box specified"},R.prototype.parseBasicShape=function(a,b,c){var d=/(inset|circle|ellipse|polygon)\((.*)\)/.exec(a);if(!d)return null;var e=d[1],f=d[2]?d[2]:"";switch(e){case"inset":return this.parseInset(f,b,c);case"circle":return this.parseCircle(f,b,c);case"ellipse":return this.parseEllipse(f,b,c);case"polygon":return this.parsePolygon(f,b,c);default:return null}},R.prototype.parseInset=function(a,b,c){var d=/((?:[^r]|r(?!o))*)?\s*(?:round\s+([^\/]*)(?:\s*\/\s*(.*))?)?/;a=d.exec(a);var e={type:"inset",insets:[0,0,0,0],radii:[[0,0],[0,0],[0,0],[0,0]]};if(a&&a[1]){var f=a[1].trim();f=f.split(/\s+/),e.insets[0]=f[0],e.insets[1]=f.length>1?f[1]:e.insets[0],e.insets[2]=f.length>2?f[2]:e.insets[0],e.insets[3]=f.length>3?f[3]:e.insets[1],e.insets[0]=c.toPixels(e.insets[0],b.height),e.insets[1]=c.toPixels(e.insets[1],b.width),e.insets[2]=c.toPixels(e.insets[2],b.height),e.insets[3]=c.toPixels(e.insets[3],b.width)}var g;return a&&a[2]&&(g=a[2].trim(),g=g.split(/\s+/),g.length<2&&g.push(g[0]),g.length<3&&g.push(g[0]),g.length<4&&g.push(g[1]),e.radii=g.map(function(a){return a=c.toPixels(a,b.width),[a,a]})),a&&a[3]&&(g=a[3].trim(),g=g.split(/\s+/),g.length<2&&g.push(g[0]),g.length<3&&g.push(g[0]),g.length<4&&g.push(g[1]),g.forEach(function(a,d){e.radii[d][1]=c.toPixels(a,b.height)})),e.x=e.insets[3],e.y=e.insets[0],e.width=b.width-(e.insets[1]+e.insets[3]),e.height=b.height-(e.insets[0]+e.insets[2]),e},R.prototype.parseEllipsoid=function(a){var b=/((?:[^a]|a(?!t))*)?\s*(?:at\s+(.*))?/;a=b.exec(a);var c={};if(a&&a[1]){var d=a[1].trim();d=d.split(/\s+/),c.rx=d[0],c.ry=d.length>1?d[1]:d[0]}else c.rx=c.ry="closest-side";var e=[];if(a&&a[2]){var f=a[2].trim();f=f.split(/\s+/);var g=!1;f.forEach(function(a){/\d+/.test(a)&&g?e[e.length-1]+=" "+a:e.push(a),g=/top|bottom|left|right/.test(a)&&f.length>2})}for(;e.length<2;)e.push("center");if(/top|bottom/.test(e[0])||/left|right/.test(e[1])){var h=e[0];e[0]=e[1],e[1]=h}return c.cx=e[0],c.cy=e[1],c},R.prototype.parseCircle=function(a,b,c){var d=this.parseEllipsoid(a);return d.type="circle",d.cx=W(d.cx,b.width,c),d.cy=W(d.cy,b.height,c),d.r=X(d.rx,[Math.abs(d.cx),Math.abs(b.width-d.cx),Math.abs(d.cy),Math.abs(b.height-d.cy)],Math.sqrt((b.width*b.width+b.height*b.height)/2),c),delete d.rx,delete d.ry,d},R.prototype.parseEllipse=function(a,b,c){var d=this.parseEllipsoid(a);return d.type="ellipse",d.cx=W(d.cx,b.width,c),d.cy=W(d.cy,b.height,c),d.rx=X(d.rx,[Math.abs(d.cx),Math.abs(b.width-d.cx)],b.width,c),d.ry=X(d.ry,[Math.abs(d.cy),Math.abs(b.height-d.cy)],b.height,c),d},R.prototype.parsePolygon=function(a,b,c){a=a.split(/\s*,\s*/);var d="nonzero";a.length>0&&/nonzero|evenodd/.test(a[0])&&(d=a[0].trim(),a=a.slice(1));var e=a.map(function(a){var d=a.split(/\s+/);return{x:c.toPixels(d[0],b.width),y:c.toPixels(d[1],b.height)}});return{type:"polygon",fillRule:d,points:e}},R.prototype.computeClip=function(a,b){var c=b.margins[3],d=b.margins[0],e=b.margins[3]+b.margins[1],f=b.margins[0]+b.margins[2];return{x:-a.x-c,y:-a.y-d,width:b.borderBox.width+e,height:b.borderBox.height+f}},R.prototype.parseShapeMargin=function(a,b,c){return parseInt(a)?Math.max(0,c.toPixels(a,b.width)):0},R.prototype.parseShapeImageThreshold=function(a){var b=parseFloat(a);return b?Math.min(Math.max(0,b),1):0},Z.prototype.load=function(a,b,c){var d=this;if(this.url){var e=new XMLHttpRequest;e.onreadystatechange=function(){4===e.readyState&&(200===e.status?(d.cssText=e.responseText,a.call(c,d)):b.call(c,d))},e.open("GET",this.url);try{e.send(null)}catch(f){console.log("An error occurred loading a stylesheet, probably because we can't access the local file system"),b.call(c,d)}}else this.cssText=this.source.textContent,a.call(c,d)},$.prototype.init=function(){var a,b,c=Y(),d=c.length;for(this.queueCount=d,b=0;d>b;b++)a=new Z(c[b]),this.stylesheets.push(a),a.load(this.onStyleSheetLoad,this.onStyleSheetError,this)},$.prototype.onStyleSheetLoad=function(){this.queueCount--,this.onComplete.call(this)},$.prototype.onStyleSheetError=function(a){var b,c=this.stylesheets.length;for(b=0;c>b;b++)if(a.source===this.stylesheets[b].source)return this.stylesheets.splice(b,1),this.queueCount--,void this.onComplete.call(this)},$.prototype.onComplete=function(){0===this.queueCount&&this.callback.call(this,this.stylesheets)},_.prototype.onStylesLoaded=function(a){var b,c,d="\\s*([^{}]*[^\\s])\\s*{[^\\}]*",e="\\s*:\\s*((?:[^;\\(]|\\([^\\)]*\\))*)\\s*;",f=[],g=["shape-outside","shape-margin","shape-image-threshold"];
g.forEach(function(g){b=new RegExp(d+"("+g+")"+e,"ig"),a.forEach(function(a){for(;null!==(c=b.exec(a.cssText));)f.push({selector:c[1],property:c[2],value:c[3]})})}),this.callback(f)},a.ShapesPolyfill=new O(a)}(window);