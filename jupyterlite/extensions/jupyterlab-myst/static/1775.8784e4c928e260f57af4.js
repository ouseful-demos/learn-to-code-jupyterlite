/*! For license information please see 1775.8784e4c928e260f57af4.js.LICENSE.txt */
(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[1775],{48738:t=>{t.exports=function(t){return null!=t&&null!=t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}},41775:(t,e,n)=>{"use strict";n.d(e,{k:()=>b});var i=n(48738),o=n.n(i);function s(t){return t&&"object"==typeof t?"position"in t||"type"in t?h(t.position):"start"in t||"end"in t?h(t):"line"in t||"column"in t?r(t):"":""}function r(t){return a(t&&t.line)+":"+a(t&&t.column)}function h(t){return r(t&&t.start)+"-"+r(t&&t.end)}function a(t){return t&&"number"==typeof t?t:1}class l extends Error{constructor(t,e,n){const i=[null,null];let o={start:{line:null,column:null},end:{line:null,column:null}};if(super(),"string"==typeof e&&(n=e,e=void 0),"string"==typeof n){const t=n.indexOf(":");-1===t?i[1]=n:(i[0]=n.slice(0,t),i[1]=n.slice(t+1))}e&&("type"in e||"position"in e?e.position&&(o=e.position):"start"in e||"end"in e?o=e:("line"in e||"column"in e)&&(o.start=e)),this.name=s(e)||"1:1",this.message="object"==typeof t?t.message:t,this.stack="","object"==typeof t&&t.stack&&(this.stack=t.stack),this.reason=this.message,this.fatal,this.line=o.start.line,this.column=o.start.column,this.position=o,this.source=i[0],this.ruleId=i[1],this.file,this.actual,this.expected,this.url,this.note}}l.prototype.file="",l.prototype.name="",l.prototype.reason="",l.prototype.message="",l.prototype.stack="",l.prototype.fatal=null,l.prototype.column=null,l.prototype.line=null,l.prototype.source=null,l.prototype.ruleId=null,l.prototype.position=null;const c=function(t,e){if(void 0!==e&&"string"!=typeof e)throw new TypeError('"ext" argument must be a string');d(t);let n,i=0,o=-1,s=t.length;if(void 0===e||0===e.length||e.length>t.length){for(;s--;)if(47===t.charCodeAt(s)){if(n){i=s+1;break}}else o<0&&(n=!0,o=s+1);return o<0?"":t.slice(i,o)}if(e===t)return"";let r=-1,h=e.length-1;for(;s--;)if(47===t.charCodeAt(s)){if(n){i=s+1;break}}else r<0&&(n=!0,r=s+1),h>-1&&(t.charCodeAt(s)===e.charCodeAt(h--)?h<0&&(o=s):(h=-1,o=r));return i===o?o=r:o<0&&(o=t.length),t.slice(i,o)},u=function(t){if(d(t),0===t.length)return".";let e,n=-1,i=t.length;for(;--i;)if(47===t.charCodeAt(i)){if(e){n=i;break}}else e||(e=!0);return n<0?47===t.charCodeAt(0)?"/":".":1===n&&47===t.charCodeAt(0)?"//":t.slice(0,n)},f=function(t){d(t);let e,n=t.length,i=-1,o=0,s=-1,r=0;for(;n--;){const h=t.charCodeAt(n);if(47!==h)i<0&&(e=!0,i=n+1),46===h?s<0?s=n:1!==r&&(r=1):s>-1&&(r=-1);else if(e){o=n+1;break}}return s<0||i<0||0===r||1===r&&s===i-1&&s===o+1?"":t.slice(s,i)},p=function(...t){let e,n=-1;for(;++n<t.length;)d(t[n]),t[n]&&(e=void 0===e?t[n]:e+"/"+t[n]);return void 0===e?".":function(t){d(t);const e=47===t.charCodeAt(0);let n=function(t,e){let n,i,o="",s=0,r=-1,h=0,a=-1;for(;++a<=t.length;){if(a<t.length)n=t.charCodeAt(a);else{if(47===n)break;n=47}if(47===n){if(r===a-1||1===h);else if(r!==a-1&&2===h){if(o.length<2||2!==s||46!==o.charCodeAt(o.length-1)||46!==o.charCodeAt(o.length-2))if(o.length>2){if(i=o.lastIndexOf("/"),i!==o.length-1){i<0?(o="",s=0):(o=o.slice(0,i),s=o.length-1-o.lastIndexOf("/")),r=a,h=0;continue}}else if(o.length>0){o="",s=0,r=a,h=0;continue}e&&(o=o.length>0?o+"/..":"..",s=2)}else o.length>0?o+="/"+t.slice(r+1,a):o=t.slice(r+1,a),s=a-r-1;r=a,h=0}else 46===n&&h>-1?h++:h=-1}return o}(t,!e);return 0!==n.length||e||(n="."),n.length>0&&47===t.charCodeAt(t.length-1)&&(n+="/"),e?"/"+n:n}(e)},m="/";function d(t){if("string"!=typeof t)throw new TypeError("Path must be a string. Received "+JSON.stringify(t))}const g=function(){return"/"};function y(t){return null!==t&&"object"==typeof t&&t.href&&t.origin}const w=["history","path","basename","stem","extname","dirname"];class b{constructor(t){let e;e=t?"string"==typeof t||function(t){return o()(t)}(t)?{value:t}:y(t)?{path:t}:t:{},this.data={},this.messages=[],this.history=[],this.cwd=g(),this.value,this.stored,this.result,this.map;let n,i=-1;for(;++i<w.length;){const t=w[i];t in e&&void 0!==e[t]&&null!==e[t]&&(this[t]="history"===t?[...e[t]]:e[t])}for(n in e)w.includes(n)||(this[n]=e[n])}get path(){return this.history[this.history.length-1]}set path(t){y(t)&&(t=function(t){if("string"==typeof t)t=new URL(t);else if(!y(t)){const e=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+t+"`");throw e.code="ERR_INVALID_ARG_TYPE",e}if("file:"!==t.protocol){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return function(t){if(""!==t.hostname){const t=new TypeError('File URL host must be "localhost" or empty on darwin');throw t.code="ERR_INVALID_FILE_URL_HOST",t}const e=t.pathname;let n=-1;for(;++n<e.length;)if(37===e.charCodeAt(n)&&50===e.charCodeAt(n+1)){const t=e.charCodeAt(n+2);if(70===t||102===t){const t=new TypeError("File URL path must not include encoded / characters");throw t.code="ERR_INVALID_FILE_URL_PATH",t}}return decodeURIComponent(e)}(t)}(t)),C(t,"path"),this.path!==t&&this.history.push(t)}get dirname(){return"string"==typeof this.path?u(this.path):void 0}set dirname(t){E(this.basename,"dirname"),this.path=p(t||"",this.basename)}get basename(){return"string"==typeof this.path?c(this.path):void 0}set basename(t){C(t,"basename"),A(t,"basename"),this.path=p(this.dirname||"",t)}get extname(){return"string"==typeof this.path?f(this.path):void 0}set extname(t){if(A(t,"extname"),E(this.dirname,"extname"),t){if(46!==t.charCodeAt(0))throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=p(this.dirname,this.stem+(t||""))}get stem(){return"string"==typeof this.path?c(this.path,this.extname):void 0}set stem(t){C(t,"stem"),A(t,"stem"),this.path=p(this.dirname||"",t+(this.extname||""))}toString(t){return(this.value||"").toString(t||void 0)}message(t,e,n){const i=new l(t,e,n);return this.path&&(i.name=this.path+":"+i.name,i.file=this.path),i.fatal=!1,this.messages.push(i),i}info(t,e,n){const i=this.message(t,e,n);return i.fatal=null,i}fail(t,e,n){const i=this.message(t,e,n);throw i.fatal=!0,i}}function A(t,e){if(t&&t.includes(m))throw new Error("`"+e+"` cannot be a path: did not expect `"+m+"`")}function C(t,e){if(!t)throw new Error("`"+e+"` cannot be empty")}function E(t,e){if(!t)throw new Error("Setting `"+e+"` requires `path` to be set too")}}}]);