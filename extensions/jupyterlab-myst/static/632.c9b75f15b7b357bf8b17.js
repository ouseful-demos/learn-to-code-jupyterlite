/*! For license information please see 632.c9b75f15b7b357bf8b17.js.LICENSE.txt */
"use strict";(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[632],{3437:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.withBaseurl=t.useBaseurl=t.BaseUrlProvider=void 0;const u=r(85893),s=i(r(56271)),a=s.default.createContext({});t.BaseUrlProvider=function({baseurl:e,children:t}){return(0,u.jsx)(a.Provider,Object.assign({value:{baseurl:e}},{children:t}))},t.useBaseurl=function(){const e=(0,s.useContext)(a);return null==e?void 0:e.baseurl},t.withBaseurl=function(e,t){return t?t+e:e}},86044:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useMediaQuery=void 0;const n=r(56271);t.useMediaQuery=function(e){const t="undefined"==typeof document,r=e=>!t&&window.matchMedia(e).matches,[o,i]=(0,n.useState)(r(e));function u(){i(r(e))}return(0,n.useEffect)((()=>{if(t)return;const r=window.matchMedia(e);return u(),r.addEventListener("change",u),()=>{r.removeEventListener("change",u)}}),[e]),o}},76632:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),o(r(86044),t),o(r(34655),t),o(r(48169),t),o(r(3437),t),o(r(35013),t),o(r(2460),t),o(r(45999),t),o(r(80868),t),o(r(76363),t)},48169:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.useFrontmatter=t.useReferences=t.ReferencesProvider=void 0;const u=r(85893),s=i(r(56271)),a=s.default.createContext({});t.ReferencesProvider=function({references:e,frontmatter:t,children:r}){return(0,u.jsx)(a.Provider,Object.assign({value:{references:e,frontmatter:t}},{children:r}))},t.useReferences=function(){const e=(0,s.useContext)(a);return null==e?void 0:e.references},t.useFrontmatter=function(){const e=(0,s.useContext)(a);return null==e?void 0:e.frontmatter}},2460:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t};Object.defineProperty(t,"__esModule",{value:!0}),t.useComputeOptions=t.useSiteManifest=t.SiteProvider=void 0;const u=r(85893),s=i(r(56271)),a=s.default.createContext(void 0);function c(){return(0,s.useContext)(a)}t.SiteProvider=function({config:e,children:t}){return(0,u.jsx)(a.Provider,Object.assign({value:e},{children:t}))},t.useSiteManifest=c,t.useComputeOptions=function(){var e;const t=c(),r=null===(e=null==t?void 0:t.projects)||void 0===e?void 0:e[0],n=null==r?void 0:r.thebe;return{canCompute:void 0!==n,thebe:n,binderUrl:null==r?void 0:r.binder,binderLink:!0}}},45999:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useTabSet=t.TabStateProvider=void 0;const n=r(85893),o=r(56271),i=(0,o.createContext)(void 0);t.TabStateProvider=function({children:e}){const[t,r]=(0,o.useState)("");return(0,n.jsx)(i.Provider,Object.assign({value:[t,r]},{children:e}))},t.useTabSet=function(){return(0,o.useContext)(i)}},34655:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,o)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},u=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r};Object.defineProperty(t,"__esModule",{value:!0}),t.useNavLinkProvider=t.useLinkProvider=t.useNodeRenderers=t.useTheme=t.ThemeProvider=t.isTheme=t.Theme=void 0;const s=r(85893),a=i(r(56271));var c;function l(e){var{to:t,className:r,children:n}=e,o=u(e,["to","className","children"]);return(0,s.jsx)("a",Object.assign({href:t,className:r},o,{children:n}))}function d(e){var{to:t,className:r,children:n}=e,o=u(e,["to","className","children"]);const i="function"==typeof r?r({isActive:!1}):r;return(0,s.jsx)("a",Object.assign({href:t,className:i},o,{children:n}))}function f(e){return"string"==typeof e&&Object.values(c).includes(e)}!function(e){e.light="light",e.dark="dark"}(c=t.Theme||(t.Theme={})),t.isTheme=f;const v=a.createContext(void 0);v.displayName="ThemeContext",t.ThemeProvider=function({children:e,theme:t,renderers:r,Link:n,NavLink:o}){const[i,u]=a.useState((()=>t?f(t)?t:null:"undefined"==typeof document?null:window.matchMedia("(prefers-color-scheme: light)").matches?c.light:c.dark)),l=a.useCallback((e=>{if(!e||e===i||!f(e))return;"undefined"!=typeof document&&(document.getElementsByTagName("html")[0].className=e);const t=new XMLHttpRequest;t.open("POST","/api/theme"),t.setRequestHeader("Content-Type","application/json;charset=UTF-8"),t.send(JSON.stringify({theme:e})),u(e)}),[i]);return(0,s.jsx)(v.Provider,Object.assign({value:{theme:i,setTheme:l,renderers:r,Link:n,NavLink:o}},{children:e}))},t.useTheme=function(){const e=a.useContext(v);if(void 0===e){const e="useTheme should be used within a ThemeProvider",t=()=>{throw new Error(e)};return console.error(e),{theme:c.light,isLight:!0,isDark:!1,setTheme:t,nextTheme:t}}const{theme:t,setTheme:r}=e,n=t===c.dark,o=t===c.light,i=a.useCallback((()=>{const e=t===c.light?c.dark:c.light;r(e)}),[t]);return{theme:t,isLight:o,isDark:n,setTheme:r,nextTheme:i}},t.useNodeRenderers=function(){const e=a.useContext(v),{renderers:t}=null!=e?e:{};return t},t.useLinkProvider=function(){const e=a.useContext(v),{Link:t}=null!=e?e:{};return null!=t?t:l},t.useNavLinkProvider=function(){const e=a.useContext(v),{NavLink:t}=null!=e?e:{};return null!=t?t:d}},76363:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},35013:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.useNavOpen=t.UiStateProvider=void 0;const n=r(85893),o=r(56271),i=r(86044),u=(0,o.createContext)(void 0);t.UiStateProvider=function({children:e}){const t=(0,i.useMediaQuery)("(min-width: 1280px)"),[r,s]=(0,o.useState)({isNavOpen:!1});return(0,o.useEffect)((()=>{t&&s(Object.assign(Object.assign({},r),{isNavOpen:!1}))}),[t]),(0,n.jsx)(u.Provider,Object.assign({value:[r,s]},{children:e}))},t.useNavOpen=function(){var e,t;const[r,n]=null!==(e=(0,o.useContext)(u))&&void 0!==e?e:[];return[null!==(t=null==r?void 0:r.isNavOpen)&&void 0!==t&&t,e=>{e!==(null==r?void 0:r.isNavOpen)&&(null==n||n(Object.assign(Object.assign({},r),{isNavOpen:e})))}]}},80868:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.XRefProvider=t.useXRefState=void 0;const n=r(85893),o=r(56271),i=(0,o.createContext)(void 0);function u(){var e;return null!==(e=(0,o.useContext)(i))&&void 0!==e?e:{inCrossRef:!1,remote:!1,url:void 0}}t.useXRefState=u,t.XRefProvider=function({remote:e,url:t,dataUrl:r,children:o}){const s=u(),a={inCrossRef:!0,remote:null!=e?e:s.remote,url:null!=t?t:s.url,dataUrl:null!=r?r:s.dataUrl};return a.remote&&!a.url&&(a.remote=!1),(0,n.jsx)(i.Provider,Object.assign({value:a},{children:o}))}},27418:e=>{var t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable;e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},r=0;r<10;r++)t["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(e){return!1}}()?Object.assign:function(e,o){for(var i,u,s=function(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}(e),a=1;a<arguments.length;a++){for(var c in i=Object(arguments[a]))r.call(i,c)&&(s[c]=i[c]);if(t){u=t(i);for(var l=0;l<u.length;l++)n.call(i,u[l])&&(s[u[l]]=i[u[l]])}}return s}},75251:(e,t,r)=>{r(27418);var n=r(56271),o=60103;if(t.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var i=Symbol.for;o=i("react.element"),t.Fragment=i("react.fragment")}var u=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,i={},c=null,l=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)s.call(t,n)&&!a.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:c,ref:l,props:i,_owner:u.current}}t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)}}]);