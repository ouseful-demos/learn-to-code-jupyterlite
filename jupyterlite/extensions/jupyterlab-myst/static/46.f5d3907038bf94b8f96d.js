"use strict";(self.webpackChunkjupyterlab_myst=self.webpackChunkjupyterlab_myst||[]).push([[46],{70046:(t,e,s)=>{s.r(e),s.d(e,{tabDirectives:()=>n,tabItemDirective:()=>i,tabSetDirective:()=>a});const a={name:"tab-set",alias:["tabSet"],options:{class:{type:String}},body:{type:"myst"},run(t){var e;return[{type:"tabSet",class:null===(e=t.options)||void 0===e?void 0:e.class,children:t.body||[]}]}},i={name:"tab-item",alias:["tabItem","tab"],arg:{type:String},options:{sync:{type:String},selected:{type:Boolean}},body:{type:"myst"},run(t){var e,s,a;return[{type:"tabItem",title:null!==(e=t.arg)&&void 0!==e?e:"Tab Title",sync:null===(s=t.options)||void 0===s?void 0:s.sync,selected:null===(a=t.options)||void 0===a?void 0:a.selected,children:t.body||[]}]}},n=[a,i]}}]);