// 青禾博客-BaBaTa专心制作
!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.DisableDevtool=n():e.DisableDevtool=n()}(this,(function(){return function(e){var n={};function t(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}return t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(o,i,function(n){return e[n]}.bind(null,i));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var o=null,i=null,r=[],u=0;function c(){var e,n,t,c,a,f,d=!1,s=function(){d=!0},w=function(){d=!1};e=s,n=w,t=window.alert,c=window.confirm,a=window.prompt,f=function(t){return function(){e&&e(),t.apply(void 0,arguments),n&&n()}},window.alert=f(t),window.confirm=f(c),window.prompt=f(a),function(e,n){var t,o,i;void 0!==document.hidden?(t="hidden",i="visibilitychange",o="visibilityState"):void 0!==document.mozHidden?(t="mozHidden",i="mozvisibilitychange",o="mozVisibilityState"):void 0!==document.msHidden?(t="msHidden",i="msvisibilitychange",o="msVisibilityState"):void 0!==document.webkitHidden&&(t="webkitHidden",i="webkitvisibilitychange",o="webkitVisibilityState");var r=function(){document[o]===t?n():e()};document.removeEventListener(i,r,!1),document.addEventListener(i,r,!1)}(w,s),o=window.setInterval((function(){d||(r.forEach((function(e){e(u++)})),console.clear())}),v.interval),i=setTimeout((function(){/(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase())&&l()}),v.stopIntervalTime)}function a(e){r.push(e)}function l(){window.clearInterval(o)}function f(){window.clearTimeout(i)}function d(e){return-1!==navigator.userAgent.toLocaleLowerCase().indexOf(e)}function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}var v={md5:"",ondevtoolopen:function(){if(l(),v.url)window.location.href=v.url;else{try{window.opener=null,window.open("","_self"),window.close(),window.history.back()}catch(e){console.log(e)}setTimeout((function(){window.location.href="https://tackchen.gitee.io/404.html?h=".concat(encodeURIComponent(location.host))}),500)}},url:"",tkName:"ddtk",interval:200,disableMenu:!0,stopIntervalTime:5e3,clearIntervalWhenDevOpenTrigger:!1,detectors:"all"},w=["detectors"];function m(){var e="shiftKey",n="ctrlKey";d("macintosh")&&(e="metaKey",n="altKey"),window.addEventListener("keydown",(function(t){if(123===((t=t||window.event).keyCode||t.which)||t[e]&&t[n]&&73===t.keyCode)return t.returnValue=!1,t.preventDefault(),!1}),!0),v.disableMenu&&window.addEventListener("contextmenu",(function(e){return(e=e||window.event).returnValue=!1,e.preventDefault(),!1}),!0)}function p(e,n,t,o,i,r){return T((u=T(T(n,e),T(o,r)))<<(c=i)|u>>>32-c,t);var u,c}function y(e,n,t,o,i,r,u){return p(n&t|~n&o,e,n,i,r,u)}function b(e,n,t,o,i,r,u){return p(n&o|t&~o,e,n,i,r,u)}function h(e,n,t,o,i,r,u){return p(n^t^o,e,n,i,r,u)}function g(e,n,t,o,i,r,u){return p(t^(n|~o),e,n,i,r,u)}function T(e,n){var t=(65535&e)+(65535&n);return(e>>16)+(n>>16)+(t>>16)<<16|65535&t}var _,E=function(e){return function(e){for(var n="0123456789abcdef",t="",o=0;o<4*e.length;o++)t+=n.charAt(e[o>>2]>>o%4*8+4&15)+n.charAt(e[o>>2]>>o%4*8&15);return t}(function(e,n){e[n>>5]|=128<<n%32,e[14+(n+64>>>9<<4)]=n;for(var t=1732584193,o=-271733879,i=-1732584194,r=271733878,u=0;u<e.length;u+=16){var c=t,a=o,l=i,f=r;t=y(t,o,i,r,e[u+0],7,-680876936),r=y(r,t,o,i,e[u+1],12,-389564586),i=y(i,r,t,o,e[u+2],17,606105819),o=y(o,i,r,t,e[u+3],22,-1044525330),t=y(t,o,i,r,e[u+4],7,-176418897),r=y(r,t,o,i,e[u+5],12,1200080426),i=y(i,r,t,o,e[u+6],17,-1473231341),o=y(o,i,r,t,e[u+7],22,-45705983),t=y(t,o,i,r,e[u+8],7,1770035416),r=y(r,t,o,i,e[u+9],12,-1958414417),i=y(i,r,t,o,e[u+10],17,-42063),o=y(o,i,r,t,e[u+11],22,-1990404162),t=y(t,o,i,r,e[u+12],7,1804603682),r=y(r,t,o,i,e[u+13],12,-40341101),i=y(i,r,t,o,e[u+14],17,-1502002290),o=y(o,i,r,t,e[u+15],22,1236535329),t=b(t,o,i,r,e[u+1],5,-165796510),r=b(r,t,o,i,e[u+6],9,-1069501632),i=b(i,r,t,o,e[u+11],14,643717713),o=b(o,i,r,t,e[u+0],20,-373897302),t=b(t,o,i,r,e[u+5],5,-701558691),r=b(r,t,o,i,e[u+10],9,38016083),i=b(i,r,t,o,e[u+15],14,-660478335),o=b(o,i,r,t,e[u+4],20,-405537848),t=b(t,o,i,r,e[u+9],5,568446438),r=b(r,t,o,i,e[u+14],9,-1019803690),i=b(i,r,t,o,e[u+3],14,-187363961),o=b(o,i,r,t,e[u+8],20,1163531501),t=b(t,o,i,r,e[u+13],5,-1444681467),r=b(r,t,o,i,e[u+2],9,-51403784),i=b(i,r,t,o,e[u+7],14,1735328473),o=b(o,i,r,t,e[u+12],20,-1926607734),t=h(t,o,i,r,e[u+5],4,-378558),r=h(r,t,o,i,e[u+8],11,-2022574463),i=h(i,r,t,o,e[u+11],16,1839030562),o=h(o,i,r,t,e[u+14],23,-35309556),t=h(t,o,i,r,e[u+1],4,-1530992060),r=h(r,t,o,i,e[u+4],11,1272893353),i=h(i,r,t,o,e[u+7],16,-155497632),o=h(o,i,r,t,e[u+10],23,-1094730640),t=h(t,o,i,r,e[u+13],4,681279174),r=h(r,t,o,i,e[u+0],11,-358537222),i=h(i,r,t,o,e[u+3],16,-722521979),o=h(o,i,r,t,e[u+6],23,76029189),t=h(t,o,i,r,e[u+9],4,-640364487),r=h(r,t,o,i,e[u+12],11,-421815835),i=h(i,r,t,o,e[u+15],16,530742520),o=h(o,i,r,t,e[u+2],23,-995338651),t=g(t,o,i,r,e[u+0],6,-198630844),r=g(r,t,o,i,e[u+7],10,1126891415),i=g(i,r,t,o,e[u+14],15,-1416354905),o=g(o,i,r,t,e[u+5],21,-57434055),t=g(t,o,i,r,e[u+12],6,1700485571),r=g(r,t,o,i,e[u+3],10,-1894986606),i=g(i,r,t,o,e[u+10],15,-1051523),o=g(o,i,r,t,e[u+1],21,-2054922799),t=g(t,o,i,r,e[u+8],6,1873313359),r=g(r,t,o,i,e[u+15],10,-30611744),i=g(i,r,t,o,e[u+6],15,-1560198380),o=g(o,i,r,t,e[u+13],21,1309151649),t=g(t,o,i,r,e[u+4],6,-145523070),r=g(r,t,o,i,e[u+11],10,-1120210379),i=g(i,r,t,o,e[u+2],15,718787259),o=g(o,i,r,t,e[u+9],21,-343485551),t=T(t,c),o=T(o,a),i=T(i,l),r=T(r,f)}return Array(t,o,i,r)}(function(e){for(var n=Array(),t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}(e),8*e.length))};function S(){var e=window.outerWidth-window.innerWidth>100,n=window.outerHeight-window.innerHeight>300;return!e&&!n||(N(O.SIZE),!1)}function I(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var O={UNKONW:-1,REG_TO_STRING:0,DEFINE_ID:1,SIZE:2,DATE_TO_STRING:3,FUNC_TO_STRING:4},D=(I(_={},O.REG_TO_STRING,(function(){var e=d("qqbrowser"),n=d("firefox");if(e||n){var t=0,o=/./;console.log(o),o.toString=function(){if(e){var o=(new Date).getTime();t&&o-t<100?N(O.REG_TO_STRING):t=o}else n&&N(O.REG_TO_STRING);return""},a((function(){console.log(o)}))}})),I(_,O.DEFINE_ID,(function(){var e=document.createElement("div");e.__defineGetter__("id",(function(){N(O.DEFINE_ID)})),Object.defineProperty(e,"id",{get:function(){N(O.DEFINE_ID)}}),a((function(){console.log(e)}))})),I(_,O.SIZE,(function(){!function(){try{return window.self!==window.top}catch(e){return!0}}()?(S(),window.addEventListener("resize",(function(){setTimeout(S,100)}),!0)):console.warn("SizeDetector is disabled in IFrame")})),I(_,O.DATE_TO_STRING,(function(){var e=0,n=new Date;n.toString=function(){return e++,""},a((function(){e=0,console.log(n),console.clear(),e>=2&&N(O.DATE_TO_STRING)}))})),I(_,O.FUNC_TO_STRING,(function(){var e=0,n=function(){};n.toString=function(){return e++,""},a((function(){e=0,console.log(n),console.clear(),e>=2&&N(O.FUNC_TO_STRING)}))})),_);function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O.UNKONW;console.warn("You ar not allow to use DEVTOOL! 【type = ".concat(e,"】")),v.clearIntervalWhenDevOpenTrigger&&l(),f(),v.ondevtoolopen(e)}function R(e){!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var n in v)void 0===e[n]||s(v[n])!==s(e[n])&&!w.includes(n)||(v[n]=e[n])}(e),function(){if(v.md5){var e=function(e){var n=window.location.search;if(""!==n){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),o=n.substr(1).match(t);if(null!=o)return unescape(o[2])}return""}(v.tkName);if(E(e)===v.md5)return!0}return!1}()||(c(),m(),("all"===v.detectors?Object.keys(D):v.detectors).forEach((function(e){D[e]&&D[e]()})))}R.md5=E,R.version="0.1.9",R.DETECTOR_TYPE=O,function(){if("undefined"!=typeof document){var e=document.querySelector("[disable-devtool-auto]");if(e){var n={};["md5","url","tk-name","interval","disable-menu","detectors"].forEach((function(t){var o=e.getAttribute(t);null!==o&&("interval"===t?o=parseInt(o):"disable-menu"===t?o="false"!==o:"detector"===t&&"all"!==o&&(o=o.split(" ")),n[function(e){if(-1===e.indexOf("-"))return e;var n=!1;return e.split("").map((function(e){return"-"===e?(n=!0,""):n?(n=!1,e.toUpperCase()):e})).join("")}(t)]=o)})),R(n)}}}();n.default=R}]).default}));
/* 禁用右键菜单并提醒 */
document.oncontextmenu = function () {
new Vue({
    data:function(){
        this.$notify({
            title:"嘿！没有右键菜单",
            message:"复制请用键盘快捷键",
            position: 'bottom-right',
            offset: 50,
            showClose: false,
            type:"warning"
        });
        return{visible:false}
    }
})
return false;
}
/* 禁用F12按键并提醒 */
document.onkeydown = function () {
if (window.event && window.event.keyCode == 123) {
  event.keyCode = 0;
  event.returnValue = false;
    new Vue({
            data:function(){
                this.$notify({
                    title:"嘿！别瞎按",
                    message:"坏孩子！打你屁屁哦！",
                    position: 'bottom-right',
                    offset: 50,
                    showClose: false,
                    type:"error"
                });
                return{visible:false}
            }
        })
  return false;
}
};
/* 复制提醒 */
document.addEventListener("copy",function(e){
    new Vue({
        data:function(){
            this.$notify({
                title:"嘿！复制成功",
                message:"若要转载请务必保留原文链接！爱你呦~",
                position: 'bottom-right',
                offset: 50,
                showClose: false,
                type:"success"
            });
            return{visible:false}
        }
    })
})

console.group("System");
console.log("Mr.Wu QQ：281120839");
console.log("博客：https://seky.cn/");
console.groupEnd();