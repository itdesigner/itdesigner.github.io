!function(n){function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var o={};r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://static.squarespace.com/universal/scripts-compressed/",r(r.s=10752)}({10751:function(n,o,p){window,n.exports=function(n){function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}var o={};return r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=24)}([function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(3));t.WP_RUM_URLS={dev:"http://localhost:8000/api/1/wp-rum",prod:"/api/1/wp-rum",stage:"/api/1/wp-rum"},t.WP_RUM_RECORD_URL=t.WP_RUM_URLS.prod+"/record",t.WP_RUM_ERROR_URL=t.WP_RUM_URLS.prod+"/error",t.RUM_RECORD_DATA_CODES=function(e){return{data:{__encoding_action__:e,__encoding_key__:"d"},event:{__encoding_action__:function(e){return t.EVENT_DATA_CODES[e]},__encoding_key__:"e"},ts:"t"}},t.CONNECTION_DATA_CODES={downlink:"do",effectiveType:"ef",rtt:"rtt",saveData:"sd"},t.GLOBAL_DATA_CODES={app:"a",connection:{__encoding_action__:t.CONNECTION_DATA_CODES,__encoding_key__:"con"},context:"ctx",hash:"h",marketingId:"mid",pageLoadId:"pl",pathname:"p"},t.EVENT_DATA_CODES=["navigation","user","firstInteraction","paint","firstInputDelay","tti","resource"].reduce(function(e,t,n){return e[t]=n,e},{}),t.FID_DATA_CODES=o.default({},t.GLOBAL_DATA_CODES,{delay:"d",eventType:"et"}),t.FI_DATA_CODES=o.default({},t.GLOBAL_DATA_CODES,{eventType:"et",timestamp:"t"}),t.NAVIGATION_DATA_CODES=o.default({},t.GLOBAL_DATA_CODES,{connectEnd:"ce",connectStart:"c",decodedBodySize:"db",domComplete:"dc",domContentLoadedEventEnd:"de",domContentLoadedEventStart:"ds",domInteractive:"di",domLoading:"d",domainLookupEnd:"dle",domainLookupStart:"dl",encodedBodySize:"eb",fetchStart:"f",loadEventEnd:"le",loadEventStart:"l",navigationStart:"n",navigationType:"nt",nextHopProtocol:"nh",redirectCount:"rc",redirectEnd:"rde",redirectStart:"rd",requestStart:"r",responseEnd:"re",responseStart:"rs",secureConnectionStart:"s",supportLevel:"sl",transferSize:"t",unloadEventEnd:"ue",unloadEventStart:"u",visibilityStateOnDCL:"v"}),t.USER_DATA_CODES=o.default({},t.GLOBAL_DATA_CODES,{duration:"d",name:"n",startTime:"st"}),t.TTI_DATA_CODES=o.default({},t.GLOBAL_DATA_CODES,{tti:"t"}),t.PAINT_DATA_CODES=o.default({},t.GLOBAL_DATA_CODES,{firstContentfulPaint:"fcp",firstPaint:"fp"}),t.RESOURCE_DATA_CODES=o.default({},t.GLOBAL_DATA_CODES,{eventType:"et",resourceTiming:"r"}),t.FID_DATA_KEYS=Object.keys(t.FID_DATA_CODES),t.FI_DATA_KEYS=Object.keys(t.FI_DATA_CODES),t.GLOBAL_DATA_KEYS=Object.keys(t.GLOBAL_DATA_CODES),t.NAVIGATION_DATA_KEYS=Object.keys(t.NAVIGATION_DATA_CODES),t.USER_DATA_KEYS=Object.keys(t.USER_DATA_CODES),t.PAINT_DATA_KEYS=Object.keys(t.PAINT_DATA_CODES),t.TTI_DATA_KEYS=Object.keys(t.TTI_DATA_CODES),t.RESOURCE_DATA_KEYS=Object.keys(t.RESOURCE_DATA_CODES),t.USER_TIMING_EVENT="userTiming",t.INTERACTION_EVENTS=["click","mousedown","keydown","touchstart","pointerdown"],t.LOAD_EVENT="load",t.BEFORE_UNLOAD_EVENT="beforeunload",t.RESOURCE_BUFFER_FULL_EVENT="resourcetimingbufferfull",t.PAINT_EVENTS=["first-paint","first-contentful-paint"],t.RESOURCE_EVENTS=[t.LOAD_EVENT,t.BEFORE_UNLOAD_EVENT,t.RESOURCE_BUFFER_FULL_EVENT],t.MARKETING_ID_COOKIE="SS_MID"},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(6),i=n(5),a=function(){function e(){this.deliveryBuffer={},this.eventName="",this.entryType=this.eventName,this.fireOnce=!1,this.gatherEvents=[],this.supportType="PerformanceObserver"in window?"observe":"gather",this.encodeMap=r.RUM_RECORD_DATA_CODES(r.GLOBAL_DATA_CODES)}return e.prototype.getDeliveryBuffer=function(){return this.deliveryBuffer},e.prototype.getEventName=function(){return this.eventName},e.prototype.getEntryType=function(){return this.entryType},e.prototype.getGatherEvents=function(){return this.gatherEvents},e.prototype.getSupportType=function(){return this.supportType},e.prototype.shouldFireOnce=function(){return this.fireOnce},e.prototype.observerParse=function(e){return this.deliveryBuffer=e,!0},e.prototype.gather=function(e){return e},e.prototype.gatherParse=function(e){return this.deliveryBuffer=e,!0},e.prototype.deliver=function(){var e=i.createRumMetric(this.getEventName(),this.deliveryBuffer);o.beaconRumMetrics(this.getEncodeMap(),e)},e.prototype.getEncodeMap=function(){return this.encodeMap},e}();t.default=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.interactionTimingSupported=function(){return!!(window.performance&&window.performance.now&&window.addEventListener)},t.userTimingSupported=function(){return!!(window.PerformanceMeasure&&window.PerformanceMark&&window.performance&&window.performance.mark&&window.performance.measure)}},function(e,t,n){"use strict";var c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map(function(e){return t[e]}).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}()?Object.assign:function(e,t){for(var n,r,o=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),i=1;i<arguments.length;i++){for(var a in n=Object(arguments[i]))s.call(n,a)&&(o[a]=n[a]);if(c){r=c(n);for(var u=0;u<r.length;u++)f.call(n,r[u])&&(o[r[u]]=n[r[u]])}}return o}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={};for(var n in e)n in e&&(t[n]=e[n]);return t}},function(e,t,n){"use strict";function r(e){o.push(e)}Object.defineProperty(t,"__esModule",{value:!0});var o=[];t.getPerformanceData=function(){return o},t.addPerformanceData=r,t.createRumMetric=function(e,t){var n=Object.freeze({data:t,event:e,ts:Date.now()});return r(n),n}},function(e,t,n){"use strict";function r(e,t){}function o(e,t){"function"==typeof window.dispatchEvent&&"function"==typeof CustomEvent&&window.dispatchEvent(new CustomEvent(e,{detail:t}))}var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=i(n(20));t.default=r,t.emitEvent=o,t.beaconError=function(e){a.WP_RUM_ERROR_URL},t.beaconRumMetrics=function(e,t){o("onRumCollectorData",t);var n=JSON.stringify(u.default(e,t));if(!n)throw new Error("Data is empty");a.WP_RUM_RECORD_URL}},function(e,t,n){"use strict";function a(){return"mark"in window.performance&&"measure"in window.performance}Object.defineProperty(t,"__esModule",{value:!0});var u=n(0),c=n(6);t.mark=function(e){if(a()){var t="rum-start-"+e;window.performance.mark(t)}},t.measure=function(e){if(a()&&"performance"in window&&"getEntries"in window.performance&&"getEntriesByType"in window.performance&&"getEntriesByName"in window.performance){var t="rum-start-"+e,n="rum-end-"+e,r="rum-"+e;window.performance.mark(n),window.performance.measure(r,t,n);var o=window.performance.getEntriesByName(r),i=o[o.length-1];c.emitEvent(u.USER_TIMING_EVENT,i)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){function n(){t(e),o()}function r(){o()}function o(){removeEventListener("pointerup",n,i),removeEventListener("pointercancel",r,i)}var i={passive:!0,capture:!0};addEventListener("pointerup",n,i),addEventListener("pointercancel",r,i)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t){return t?(t^16*Math.random()>>t/4).toString(16):(""+1e7+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,e)}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=new RegExp("(^| )"+e+"=([^;]+)"),n=document.cookie.match(t);return n?n[2]:""}},function(e,t,n){"use strict";function r(){var e={},t=navigator.connection||navigator.mozConnection||navigator.webkitConnection;if(t){var n=(1e3*t.downlink).toString();e={downlink:parseInt(n,10),effectiveType:t.effectiveType,rtt:t.rtt,saveData:t.saveData}}return e}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i=n(0),a=o(n(10)),u=o(n(9));t.getConnection=r,t.default=function(e){var t=e.context||{};"object"!=typeof t&&(t={});var n=r();return{app:e.appName||"",connection:n,context:t,hash:window.location.hash||"",marketingId:a.default(i.MARKETING_ID_COOKIE),pageLoadId:u.default(),pathname:window.location.pathname||""}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){throw"object"==typeof e&&"name"in e&&(e.name="RUMError["+t+"]"),"object"==typeof e&&"message"in e&&(e.message+=": "+JSON.stringify(n)),e}},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=n(2),c=i(n(4)),s=function(t){function e(){var e=t.call(this)||this;return e.eventName="user",e.entryType="measure",e.gatherEvents=[a.USER_TIMING_EVENT],e.encodeMap=a.RUM_RECORD_DATA_CODES(a.USER_DATA_CODES),u.userTimingSupported()||(e.supportType=""),e}return o(e,t),e.prototype.observerParse=function(e){return this.parse(e)},e.prototype.gather=function(e){var t=e.detail;return c.default(t)},e.prototype.gatherParse=function(e){return this.parse(e)},e.prototype.parse=function(n){if(n.name.substr&&"rum-"===n.name.substr(0,4)){var e=a.USER_DATA_KEYS.reduce(function(e,t){return t in n&&(e[t]=n[t]),e},{});return this.deliveryBuffer=e,!0}return!1},e}(i(n(1)).default);t.default=s},function(Hc,Ic){var Jc;Jc=function(){return this}();try{Jc=Jc||Function("return this")()||eval("this")}catch(Hc){"object"==typeof window&&(Jc=window)}Hc.exports=Jc},function(E,O,e){(function(f){var p;!function(){function t(){t=function(){},a.Symbol||(a.Symbol=e)}function e(e){return"jscomp_symbol_"+(e||"")+c++}function r(){t();var e=a.Symbol.iterator;e||(e=a.Symbol.iterator=a.Symbol("iterator")),"function"!=typeof Array.prototype[e]&&u(Array.prototype,e,{configurable:!0,writable:!0,value:function(){return n(this)}}),r=function(){}}function n(e){var t,n=0;return t=function(){return n<e.length?{done:!1,value:e[n++]}:{done:!0}},r(),(t={next:t})[a.Symbol.iterator]=function(){return this},t}function d(e){r();var t=e[Symbol.iterator];return t?t.call(e):n(e)}function l(e){if(!(e instanceof Array)){e=d(e);for(var t,n=[];!(t=e.next()).done;)n.push(t.value);e=n}return e}function _(e,t){for(var n=(e=d(e)).next();!n.done;n=e.next())if(n=n.value,t.includes(n.nodeName.toLowerCase())||_(n.children,t))return!0;return!1}function v(e,t){if(2<e.length)return performance.now();for(var n=[],r=(t=d(t)).next();!r.done;r=t.next())r=r.value,n.push({timestamp:r.start,type:"requestStart"}),n.push({timestamp:r.end,type:"requestEnd"});for(r=(t=d(e)).next();!r.done;r=t.next())n.push({timestamp:r.value,type:"requestStart"});for(n.sort(function(e,t){return e.timestamp-t.timestamp}),e=e.length,t=n.length-1;0<=t;t--)switch((r=n[t]).type){case"requestStart":e--;break;case"requestEnd":if(2<++e)return r.timestamp;break;default:throw Error("Internal Error: This should never happen")}return 0}function o(e){e=e||{},this.w=!!e.useMutationObserver,this.u=e.minValue||null,e=window.__tti&&window.__tti.e;var n,t,r,i,a,u,o,c,s,f,p=window.__tti&&window.__tti.o;this.a=e?e.map(function(e){return{start:e.startTime,end:e.startTime+e.duration}}):[],p&&p.disconnect(),this.b=[],this.f=new Map,this.j=null,this.v=-1/0,this.i=!1,this.h=this.c=this.s=null,o=this.m.bind(this),c=this.l.bind(this),s=XMLHttpRequest.prototype.send,f=h++,XMLHttpRequest.prototype.send=function(e){for(var t=[],n=0;n<arguments.length;++n)t[n-0]=arguments[n];var r=this;return o(f),this.addEventListener("readystatechange",function(){4===r.readyState&&c(f)}),s.apply(this,t)},i=this.m.bind(this),a=this.l.bind(this),u=fetch,fetch=function(e){for(var o=[],t=0;t<arguments.length;++t)o[t-0]=arguments[t];return new Promise(function(t,n){var r=h++;i(r),u.apply(null,[].concat(l(o))).then(function(e){a(r),t(e)},function(e){a(e),n(e)})})},(r=this).c=new PerformanceObserver(function(e){for(var t=(e=d(e.getEntries())).next();!t.done;t=e.next())if("resource"===(t=t.value).entryType&&(r.b.push({start:t.fetchStart,end:t.responseEnd}),y(r,v(r.g,r.b)+5e3)),"longtask"===t.entryType){var n=t.startTime+t.duration;r.a.push({start:t.startTime,end:n}),y(r,n+5e3)}}),r.c.observe({entryTypes:["longtask","resource"]}),this.w&&(this.h=(n=this.B.bind(this),(t=new MutationObserver(function(e){for(var t=(e=d(e)).next();!t.done;t=e.next())"childList"==(t=t.value).type&&_(t.addedNodes,m)?n(t):"attributes"==t.type&&m.includes(t.target.tagName.toLowerCase())&&n(t)})).observe(document,{attributes:!0,childList:!0,subtree:!0,attributeFilter:["href","src"]}),t))}function i(e){e.i=!0;var t=0<e.a.length?e.a[e.a.length-1].end:0,n=v(e.g,e.b);y(e,Math.max(n+5e3,t))}function y(i,e){!i.i||i.v>e||(clearTimeout(i.j),i.j=setTimeout(function(){var e=performance.timing.navigationStart,t=v(i.g,i.b);if(e=(window.a&&window.a.A?1e3*window.a.A().C-e:0)||performance.timing.domContentLoadedEventEnd-e,i.u)var n=i.u;else n=performance.timing.domContentLoadedEventEnd?(n=performance.timing).domContentLoadedEventEnd-n.navigationStart:null;var r=performance.now();null===n&&y(i,Math.max(t+5e3,r+1e3));var o=i.a;(t=r-t<5e3?null:r-(t=o.length?o[o.length-1].end:e)<5e3?null:Math.max(t,n))&&(i.s(t),clearTimeout(i.j),i.i=!1,i.c&&i.c.disconnect(),i.h&&i.h.disconnect()),y(i,performance.now()+1e3)},e-performance.now()),i.v=e)}var a="undefined"!=typeof window&&window===this?this:void 0!==f&&null!=f?f:this,u="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){e!=Array.prototype&&e!=Object.prototype&&(e[t]=n.value)},c=0,h=0,m="img script iframe link audio video source".split(" ");o.prototype.getFirstConsistentlyInteractive=function(){var t=this;return new Promise(function(e){t.s=e,"complete"==document.readyState?i(t):window.addEventListener("load",function(){i(t)})})},o.prototype.m=function(e){this.f.set(e,performance.now())},o.prototype.l=function(e){this.f.delete(e)},o.prototype.B=function(){y(this,performance.now()+5e3)},a.Object.defineProperties(o.prototype,{g:{configurable:!0,enumerable:!0,get:function(){return[].concat(l(this.f.values()))}}});var s={getFirstConsistentlyInteractive:function(e){return e=e||{},"PerformanceLongTaskTiming"in window?new o(e).getFirstConsistentlyInteractive():Promise.resolve(null)}};void 0!==E&&E.exports?E.exports=s:void 0===(p=function(){return s}.apply(O,[]))||(E.exports=p)}()}).call(this,e(14))},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(3)),u=n(15),c=n(0),s=function(e){function t(t){var n=e.call(this)||this;return n.eventName="tti",n.entryType="longtask",n.supportType="observe",n.encodeMap=c.RUM_RECORD_DATA_CODES(c.TTI_DATA_CODES),n.fireOnce=!0,window.PerformanceLongTaskTiming&&window.PerformanceObserver?(window.__tti={e:[]},u.getFirstConsistentlyInteractive().then(function(e){n.parse(a.default({},t,{tti:e})),n.deliver()})):n.supportType="",n}return o(t,e),t.prototype.observerParse=function(e){return window.__tti&&(window.__tti.e=window.__tti.e.concat(e)),!1},t.prototype.parse=function(n){this.deliveryBuffer=c.TTI_DATA_KEYS.reduce(function(e,t){return t in n&&(e[t]=n[t]),e},{})},t}(i(n(1)).default);t.default=s},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.eventName="paint",e.entryType="paint",e.supportType="observe",e.encodeMap=a.RUM_RECORD_DATA_CODES(a.PAINT_DATA_CODES),e.paintsRetrieved=[],e}return o(e,t),e.prototype.observerParse=function(t){var n=this,e=t.name,r=t.startTime;if(a.PAINT_EVENTS.indexOf(e)<0)return!1;this.paintsRetrieved.push(e),0===Object.keys(this.deliveryBuffer).length&&a.PAINT_DATA_KEYS.forEach(function(e){e in t&&n.deliveryBuffer&&(n.deliveryBuffer[e]=t[e])});var o=e.replace(/-([a-zA-Z])/g,function(e,t){return t&&t.toUpperCase()||e});return this.deliveryBuffer[o]=r,!(this.paintsRetrieved.length<a.PAINT_EVENTS.length)},e}(i(n(1)).default);t.default=u},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=i(n(4)),c=function(n){function e(){var e,t=n.call(this)||this;return t.eventName="navigation",t.entryType="navigation",t.gatherEvents=[a.LOAD_EVENT],t.encodeMap=a.RUM_RECORD_DATA_CODES(a.NAVIGATION_DATA_CODES),t.supportLevel=-1,t.visibilityStateOnDCL="",e=t.getNavigationLevel(),t.supportType=e[0],t.supportLevel=e[1],window.addEventListener("DOMContentLoaded",function(e){t.visibilityStateOnDCL=document.visibilityState||""},{once:!0}),t}return o(e,n),e.prototype.observerParse=function(e){return this.parse(e)},e.prototype.gather=function(e){var t;return t=1===this.supportLevel?window.performance.timing:performance.getEntriesByType("navigation")[0],u.default(t)},e.prototype.gatherParse=function(e){return this.parse(e)},e.prototype.parse=function(n){return"navigation"in performance&&(n.navigationType=performance.navigation.type,n.redirectCount=performance.navigation.redirectCount),n.supportLevel=this.supportLevel,this.deliveryBuffer=a.NAVIGATION_DATA_KEYS.reduce(function(e,t){return t in n&&("number"==typeof n[t]&&"navigationStart"!==t&&n[t]>=n.navigationStart?e[t]=n[t]-n.navigationStart:e[t]=n[t]),e},{}),this.deliveryBuffer.visibilityStateOnDCL=this.visibilityStateOnDCL,!0},e.prototype.getNavigationLevel=function(){if(window.performance){if(window.performance.getEntriesByType&&void 0!==window.PerformanceNavigationTiming&&window.performance.getEntriesByType(this.entryType)[0]instanceof PerformanceNavigationTiming)return[this.supportType,2];if(window.performance.timing)return["gather",1]}return["",-1]},e}(i(n(1)).default);t.default=c},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=n(2),c=function(t){function e(){var e=t.call(this)||this;return e.eventName="firstInteraction",e.gatherEvents=a.INTERACTION_EVENTS,e.fireOnce=!0,e.encodeMap=a.RUM_RECORD_DATA_CODES(a.FI_DATA_CODES),u.interactionTimingSupported()?e.supportType="gather":e.supportType="",e}return o(e,t),e.prototype.gather=function(e){var t=window.performance.now();return{eventType:e.type,timestamp:t}},e.prototype.gatherParse=function(n){return this.deliveryBuffer=a.FI_DATA_KEYS.reduce(function(e,t){return t in n&&(e[t]=n[t]),e},{}),!0},e}(i(n(1)).default);t.default=c},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function e(t,n){var r,o={};for(var i in t)if(i in n){var a=t[i],u=n[i],c=void 0;if("object"==typeof a){var s=a.__encoding_action__;if(a=a.__encoding_key__,"object"==typeof s)c=e(s,u);else{if("function"!=typeof s)throw new Error("Invalid encoding map");c=s(u)}}else c="number"==typeof(r=u)&&r%1==0?u.toString(32):u;o[""+a]=c}return o}},function(e,t,n){"use strict";var r,o=this&&this.__extends||(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var a=n(0),u=n(2),c=function(t){function e(){var e=t.call(this)||this;return e.eventName="firstInputDelay",e.gatherEvents=a.INTERACTION_EVENTS,e.fireOnce=!0,e.encodeMap=a.RUM_RECORD_DATA_CODES(a.FI_DATA_CODES),u.interactionTimingSupported()?e.supportType="gather":e.supportType="",e}return o(e,t),e.prototype.gather=function(e){var t=e.timeStamp,n=1e12<t?+new Date:window.performance.now();return{delay:Math.max(n-t,0),eventType:e.type}},e.prototype.gatherParse=function(n){return this.deliveryBuffer=a.FID_DATA_KEYS.reduce(function(e,t){return t in n&&(e[t]=n[t]),e},{}),!0},e}(i(n(1)).default);t.default=c},function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var o=r(n(21)),i=r(n(19)),a=r(n(18)),u=r(n(17)),c=r(n(16)),s=r(n(13));t.default=[o.default,i.default,a.default,u.default,s.default,c.default]},function(e,t,n){"use strict";function f(e){return e+"-observer"}function r(e){for(;(0<e.timeRemaining()||e.didTimeout)&&c.length;){var t=c.shift();t&&t.deliver()}i=c.length?window.requestIdleCallback(r,{timeout:s}):void 0}function p(e){var t;window.requestIdleCallback?(t=e,c.push(t),i||(i=window.requestIdleCallback(r,{timeout:s}))):e.deliver()}var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var i,d=o(n(3)),a=o(n(22)),l=o(n(12)),u=o(n(11)),_=o(n(8)),c=[],s=2e3;t.init=function(e){var s=u.default(e),n=[];if(a.default.map(function(e){return new e(s)}).forEach(function(r){var e=r.getSupportType();if("observe"===e){var t=r.getEntryType(),o=f(t);n.push(t),window.addEventListener(o,function(e){var t=e.detail;try{r.observerParse(d.default({},s,t))&&p(r)}catch(e){var n=r.getDeliveryBuffer()||t||{};l.default(e,o,n)}})}else if("gather"===e){var i=r.getGatherEvents(),a=r.getEventName(),u=function(e){r.gatherParse(d.default({},s,e))&&p(r)},c=function(e){var t;try{"pointerdown"===(t=r.gather(e)).eventType?_.default(t,u):u(t)}catch(e){var n=r.getDeliveryBuffer()||t||{};l.default(e,a,n)}r.shouldFireOnce()&&i.forEach(function(e){window.removeEventListener(e,c)})};i.forEach(function(e){window.addEventListener(e,c)})}}),"PerformanceObserver"in window){var t=function(e){e.forEach(function(e){var t=new CustomEvent(f(e.entryType),{detail:e.toJSON()});window.dispatchEvent(t)})};t(performance.getEntries().filter(function(e){return"navigation"!==e.entryType})),new window.PerformanceObserver(function(e){t(e.getEntries())}).observe({entryTypes:n})}}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t(23);n.default=r.init;var o=t(5);n.getPerformanceData=o.getPerformanceData,function(e){for(var t in e)n.hasOwnProperty(t)||(n[t]=e[t])}(t(7))}])},10752:function(e,t,n){"use strict";var r,o=(r=n(10751))&&r.__esModule?r:{default:r};if(window.top===window){var i=window.Static&&window.Static.SQUARESPACE_CONTEXT;if(i){var a=i.website||{},u=i.websiteSettings||{},c=i.collection||{};(0,o.default)({appName:"v6-user-sites",context:{pageType:"number"==typeof i.pageType?i.pageType:-1,templateId:i.templateId||"",impersonatedSession:i.impersonatedSession||!1,websiteId:a.id||"",authenticUrl:a.authenticUrl||"",developerMode:a.developerMode||!1,timeZone:a.timeZone||"",language:a.language||"",ampEnabled:u.ampEnabled||!1,collectionType:"number"==typeof c.type?c.type:-1}})}}}});