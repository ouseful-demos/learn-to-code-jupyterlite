"use strict";(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[8338,2520],{22520:(s,n,e)=>{e.r(n),e.d(n,{ISessions:()=>t,Sessions:()=>r});var i=e(93315);const t=new i.Token("@jupyterlite/session:ISessions");var o=e(58623);class r{constructor(s){this._sessions=[],this._kernels=s.kernels}async get(s){const n=this._sessions.find((n=>n.id===s));if(!n)throw Error(`Session ${s} not found`);return n}async list(){return this._sessions}async patch(s){const{id:n,path:e,name:i}=s,t=this._sessions.findIndex((s=>s.id===n)),o=this._sessions[t];if(!o)throw Error(`Session ${n} not found`);const r={...o,path:null!=e?e:o.path,name:null!=i?i:o.name};return this._sessions[t]=r,r}async startNew(s){var n,e,t;const{path:o,name:r}=s,a=this._sessions.find((s=>s.name===r));if(a)return a;const d=null!==(e=null===(n=s.kernel)||void 0===n?void 0:n.name)&&void 0!==e?e:"",h=null!==(t=s.id)&&void 0!==t?t:i.UUID.uuid4(),l=await this._kernels.startNew({id:h,name:d}),u={id:h,path:o,name:null!=r?r:o,type:"notebook",kernel:{id:l.id,name:l.name}};return this._sessions.push(u),u}async shutdown(s){var n;const e=this._sessions.find((n=>n.id===s));if(!e)throw Error(`Session ${s} not found`);const i=null===(n=e.kernel)||void 0===n?void 0:n.id;i&&await this._kernels.shutdown(i),o.ArrayExt.removeFirstOf(this._sessions,e)}}}}]);
//# sourceMappingURL=8338.6e3fad19e67b127af120.js.map