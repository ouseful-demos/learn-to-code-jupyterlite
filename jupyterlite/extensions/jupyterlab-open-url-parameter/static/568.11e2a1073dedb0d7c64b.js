"use strict";(self.webpackChunkjupyterlab_open_url_parameter=self.webpackChunkjupyterlab_open_url_parameter||[]).push([[568],{568:(e,r,t)=>{t.r(r),t.d(r,{default:()=>s});var a=t(687),n=t(142);const o=new RegExp("/lab/?"),s={id:"jupyterlab-open-url-parameter:plugin",autoStart:!0,requires:[a.IRouter],activate:(e,r)=>{const{commands:t}=e,a="router:fromUrl";t.addCommand(a,{execute:a=>{var s;const u=a,{request:c,search:l}=u;if(null!==(s=c.match(o))&&void 0!==s&&!s)return;const p=new URLSearchParams(l),m="fromURL",i=p.getAll(m);if(!i)return;const d=i.map((e=>decodeURIComponent(e)));e.restored.then((()=>{d.forEach((e=>{t.execute("filebrowser:open-url",{url:e})}));const e=new URL(n.URLExt.join(n.PageConfig.getBaseUrl(),c));e.searchParams.delete(m);const{pathname:a,search:o}=e;r.navigate(`${a}${o}`,{skipRouting:!0})}))}}),r.register({command:a,pattern:o})}}}}]);