(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[451],{27081:(o,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>s});var n=e(1799),c=e.n(n),t=e(82609),a=e.n(t)()(c());a.push([o.id,"/****************************************************************/\n/*   Based on mbonaci's Brackets mbo theme                      */\n/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */\n/*   Create your own: http://tmtheme-editor.herokuapp.com       */\n/****************************************************************/\n\n.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }\n.cm-s-mbo div.CodeMirror-selected { background: #716C62; }\n.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }\n.cm-s-mbo .CodeMirror-guttermarker { color: white; }\n.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }\n.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }\n.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }\n\n.cm-s-mbo span.cm-comment { color: #95958a; }\n.cm-s-mbo span.cm-atom { color: #00a8c6; }\n.cm-s-mbo span.cm-number { color: #00a8c6; }\n\n.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }\n.cm-s-mbo span.cm-keyword { color: #ffb928; }\n.cm-s-mbo span.cm-string { color: #ffcf6c; }\n.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }\n\n.cm-s-mbo span.cm-variable { color: #ffffec; }\n.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }\n.cm-s-mbo span.cm-def { color: #ffffec; }\n.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }\n.cm-s-mbo span.cm-tag { color: #9ddfe9; }\n.cm-s-mbo span.cm-link { color: #f54b07; }\n.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }\n.cm-s-mbo span.cm-qualifier { color: #ffffec; }\n\n.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }\n.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }\n.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }\n","",{version:3,sources:["webpack://./../../node_modules/codemirror/theme/mbo.css"],names:[],mappings:"AAAA,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;AACjE,iEAAiE;;AAEjE,uBAAuB,mBAAmB,EAAE,cAAc,EAAE;AAC5D,oCAAoC,mBAAmB,EAAE;AACzD,2IAA2I,mCAAmC,EAAE;AAChL,0JAA0J,mCAAmC,EAAE;AAC/L,gCAAgC,mBAAmB,EAAE,iBAAiB,EAAE;AACxE,qCAAqC,YAAY,EAAE;AACnD,4CAA4C,WAAW,EAAE;AACzD,mCAAmC,cAAc,EAAE;AACnD,+BAA+B,8BAA8B,EAAE;;AAE/D,4BAA4B,cAAc,EAAE;AAC5C,yBAAyB,cAAc,EAAE;AACzC,2BAA2B,cAAc,EAAE;;AAE3C,0DAA0D,cAAc,EAAE;AAC1E,4BAA4B,cAAc,EAAE;AAC5C,2BAA2B,cAAc,EAAE;AAC3C,uCAAuC,cAAc,EAAE;;AAEvD,6BAA6B,cAAc,EAAE;AAC7C,+BAA+B,cAAc,EAAE;AAC/C,wBAAwB,cAAc,EAAE;AACxC,4BAA4B,cAAc,EAAE,iBAAiB,EAAE;AAC/D,wBAAwB,cAAc,EAAE;AACxC,yBAAyB,cAAc,EAAE;AACzC,0BAA0B,sBAAsB,EAAE,cAAc,EAAE;AAClE,8BAA8B,cAAc,EAAE;;AAE9C,8CAA8C,mBAAmB,EAAE;AACnE,wCAAwC,yBAAyB,EAAE;AACnE,oCAAoC,oCAAoC,EAAE",sourcesContent:["/****************************************************************/\n/*   Based on mbonaci's Brackets mbo theme                      */\n/*   https://github.com/mbonaci/global/blob/master/Mbo.tmTheme  */\n/*   Create your own: http://tmtheme-editor.herokuapp.com       */\n/****************************************************************/\n\n.cm-s-mbo.CodeMirror { background: #2c2c2c; color: #ffffec; }\n.cm-s-mbo div.CodeMirror-selected { background: #716C62; }\n.cm-s-mbo .CodeMirror-line::selection, .cm-s-mbo .CodeMirror-line > span::selection, .cm-s-mbo .CodeMirror-line > span > span::selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-line::-moz-selection, .cm-s-mbo .CodeMirror-line > span::-moz-selection, .cm-s-mbo .CodeMirror-line > span > span::-moz-selection { background: rgba(113, 108, 98, .99); }\n.cm-s-mbo .CodeMirror-gutters { background: #4e4e4e; border-right: 0px; }\n.cm-s-mbo .CodeMirror-guttermarker { color: white; }\n.cm-s-mbo .CodeMirror-guttermarker-subtle { color: grey; }\n.cm-s-mbo .CodeMirror-linenumber { color: #dadada; }\n.cm-s-mbo .CodeMirror-cursor { border-left: 1px solid #ffffec; }\n\n.cm-s-mbo span.cm-comment { color: #95958a; }\n.cm-s-mbo span.cm-atom { color: #00a8c6; }\n.cm-s-mbo span.cm-number { color: #00a8c6; }\n\n.cm-s-mbo span.cm-property, .cm-s-mbo span.cm-attribute { color: #9ddfe9; }\n.cm-s-mbo span.cm-keyword { color: #ffb928; }\n.cm-s-mbo span.cm-string { color: #ffcf6c; }\n.cm-s-mbo span.cm-string.cm-property { color: #ffffec; }\n\n.cm-s-mbo span.cm-variable { color: #ffffec; }\n.cm-s-mbo span.cm-variable-2 { color: #00a8c6; }\n.cm-s-mbo span.cm-def { color: #ffffec; }\n.cm-s-mbo span.cm-bracket { color: #fffffc; font-weight: bold; }\n.cm-s-mbo span.cm-tag { color: #9ddfe9; }\n.cm-s-mbo span.cm-link { color: #f54b07; }\n.cm-s-mbo span.cm-error { border-bottom: #636363; color: #ffffec; }\n.cm-s-mbo span.cm-qualifier { color: #ffffec; }\n\n.cm-s-mbo .CodeMirror-activeline-background { background: #494b41; }\n.cm-s-mbo .CodeMirror-matchingbracket { color: #ffb928 !important; }\n.cm-s-mbo .CodeMirror-matchingtag { background: rgba(255, 255, 255, .37); }\n"],sourceRoot:""}]);const s=a},82609:o=>{"use strict";o.exports=function(o){var r=[];return r.toString=function(){return this.map((function(r){var e=o(r);return r[2]?"@media ".concat(r[2]," {").concat(e,"}"):e})).join("")},r.i=function(o,e,n){"string"==typeof o&&(o=[[null,o,""]]);var c={};if(n)for(var t=0;t<this.length;t++){var a=this[t][0];null!=a&&(c[a]=!0)}for(var s=0;s<o.length;s++){var i=[].concat(o[s]);n&&c[i[0]]||(e&&(i[2]?i[2]="".concat(e," and ").concat(i[2]):i[2]=e),r.push(i))}},r}},1799:o=>{"use strict";function r(o,r){(null==r||r>o.length)&&(r=o.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=o[e];return n}o.exports=function(o){var e,n,c=(n=4,function(o){if(Array.isArray(o))return o}(e=o)||function(o,r){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(o)){var e=[],n=!0,c=!1,t=void 0;try{for(var a,s=o[Symbol.iterator]();!(n=(a=s.next()).done)&&(e.push(a.value),!r||e.length!==r);n=!0);}catch(o){c=!0,t=o}finally{try{n||null==s.return||s.return()}finally{if(c)throw t}}return e}}(e,n)||function(o,e){if(o){if("string"==typeof o)return r(o,e);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(o,e):void 0}}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),t=c[1],a=c[3];if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),m="/*# ".concat(i," */"),A=a.sources.map((function(o){return"/*# sourceURL=".concat(a.sourceRoot||"").concat(o," */")}));return[t].concat(A).concat([m]).join("\n")}return[t].join("\n")}},50451:(o,r,e)=>{var n=e(27081);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[o.id,n,""]]);e(46062)(n,{insert:"head",singleton:!1}),n.locals&&(o.exports=n.locals)},46062:(o,r,e)=>{"use strict";var n,c={},t=function(){var o={};return function(r){if(void 0===o[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(o){e=null}o[r]=e}return o[r]}}();function a(o,r){for(var e=[],n={},c=0;c<o.length;c++){var t=o[c],a=r.base?t[0]+r.base:t[0],s={css:t[1],media:t[2],sourceMap:t[3]};n[a]?n[a].parts.push(s):e.push(n[a]={id:a,parts:[s]})}return e}function s(o,r){for(var e=0;e<o.length;e++){var n=o[e],t=c[n.id],a=0;if(t){for(t.refs++;a<t.parts.length;a++)t.parts[a](n.parts[a]);for(;a<n.parts.length;a++)t.parts.push(d(n.parts[a],r))}else{for(var s=[];a<n.parts.length;a++)s.push(d(n.parts[a],r));c[n.id]={id:n.id,refs:1,parts:s}}}}function i(o){var r=document.createElement("style");if(void 0===o.attributes.nonce){var n=e.nc;n&&(o.attributes.nonce=n)}if(Object.keys(o.attributes).forEach((function(e){r.setAttribute(e,o.attributes[e])})),"function"==typeof o.insert)o.insert(r);else{var c=t(o.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(r)}return r}var m,A=(m=[],function(o,r){return m[o]=r,m.filter(Boolean).join("\n")});function l(o,r,e,n){var c=e?"":n.css;if(o.styleSheet)o.styleSheet.cssText=A(r,c);else{var t=document.createTextNode(c),a=o.childNodes;a[r]&&o.removeChild(a[r]),a.length?o.insertBefore(t,a[r]):o.appendChild(t)}}function f(o,r,e){var n=e.css,c=e.media,t=e.sourceMap;if(c&&o.setAttribute("media",c),t&&btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(t))))," */")),o.styleSheet)o.styleSheet.cssText=n;else{for(;o.firstChild;)o.removeChild(o.firstChild);o.appendChild(document.createTextNode(n))}}var b=null,u=0;function d(o,r){var e,n,c;if(r.singleton){var t=u++;e=b||(b=i(r)),n=l.bind(null,e,t,!1),c=l.bind(null,e,t,!0)}else e=i(r),n=f.bind(null,e,r),c=function(){!function(o){if(null===o.parentNode)return!1;o.parentNode.removeChild(o)}(e)};return n(o),function(r){if(r){if(r.css===o.css&&r.media===o.media&&r.sourceMap===o.sourceMap)return;n(o=r)}else c()}}o.exports=function(o,r){(r=r||{}).attributes="object"==typeof r.attributes?r.attributes:{},r.singleton||"boolean"==typeof r.singleton||(r.singleton=(void 0===n&&(n=Boolean(window&&document&&document.all&&!window.atob)),n));var e=a(o,r);return s(e,r),function(o){for(var n=[],t=0;t<e.length;t++){var i=e[t],m=c[i.id];m&&(m.refs--,n.push(m))}o&&s(a(o,r),r);for(var A=0;A<n.length;A++){var l=n[A];if(0===l.refs){for(var f=0;f<l.parts.length;f++)l.parts[f]();delete c[l.id]}}}}}}]);
//# sourceMappingURL=451.bundle.js.map