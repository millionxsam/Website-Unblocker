(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[37],{"1TF+":function(e,t,c){e.exports=c.p+"static/media/xbox-com-tvsetup-qr.8293e769.png"},"450d":function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));c("jQ/y");var o=c("ERkP"),i=c("/arO");const n=[];function s(){const e=Object(o.useMemo)(()=>new i.a("useDisableBodyScrolling"),[]),t=Object(o.useRef)(Symbol("id"));n.includes(t.current)||n.push(t.current),Object(o.useEffect)(()=>{const c=t.current;return document.body.classList.add("xgp-disable-scrolling"),()=>{const t=n.indexOf(c);-1===t?e.error("Hook was not present in hook ref"):n.splice(t,1),0===n.length&&(e.debug("All hooks unmounted - Enabling scrolling"),document.body.classList.remove("xgp-disable-scrolling"))}},[e])}},COjP:function(e,t,c){"use strict";c.r(t),c.d(t,"DeviceCodePage",(function(){return y}));c("kYxP"),c("KqXw"),c("MvUL");var o=c("jg1C"),i=c("D3x/index.html"),n=c("sZmG"),s=c("I4Ow"),r=c("ERkP"),a=c("uDfI"),d=c("4Szx"),l=c("2g5M"),v=c("ZYNy"),u=c("450d"),g=c("Uxzf"),_=c("Z4B9"),j=c("HEjv"),O=c("Rvua"),b=c("ij1g"),C=c("bc7W"),D=c("1TF+"),p=c.n(D),m="DeviceCodePage-module__contentText___2x_jP",f="DeviceCodePage-module__textRow___p9obA",h="DeviceCodePage-module__numeralText___36Niv",P=(c("JtPf"),c("IXNG")),S=c("ZfzU"),x=c("WM4q"),w=c("9hyd"),N=c("Pygg"),k=c("/arO"),T=c("Xapl");const y=e=>{let{deviceCode:t}=e;var c;Object(u.a)();const D=Object(l.a)(),{deviceCodeError:y,deviceCodeResponse:A,deviceCodeState:E,fetchDeviceCode:F}=Object(d.a)()?function(){const e=Object(x.useAuthenticationProvider)(),t=Object(w.useTelemetryProvider)(),c=Object(N.a)(()=>new k.a("DeviceCodePage/useTizenGetDeviceCode")),{0:o,1:i}=Object(r.useState)(s.DeviceCodeState.None),{0:n,1:a}=Object(r.useState)(),{0:l,1:v}=Object(r.useState)(),u=Object(d.a)(),{requestMessagePort:g,responseMessagePort:_,sendDeviceCodeFlowRequest:j}=Object(r.useMemo)(()=>{var e;let o,i,n;if(u){const r="".concat(tizen.application.getCurrentApplication().appInfo.packageId,".Service");try{o=tizen.messageport.requestRemoteMessagePort(r,"deviceCodeFlow-request"),i=tizen.messageport.requestLocalMessagePort("deviceCodeFlow-response"),n=(e,n)=>new Promise((s,r)=>{const a=i.addMessagePortListener((t,o)=>{var n,d,l;try{null===(n=c.current)||void 0===n||n.info("".concat(e," response: ").concat(JSON.stringify(t))),a&&i.removeMessagePortListener(a);const o=null===(d=t.find(t=>t.key==="deviceCodeFlow-".concat(e,"-response")))||void 0===d?void 0:d.value;if(!o){const c=null===(l=t.find(t=>t.key==="deviceCodeFlow-".concat(e,"-error")))||void 0===l?void 0:l.value;throw new Error(null!==c&&void 0!==c?c:"Unexpected error")}s(JSON.parse(o))}catch(v){const e=Object(T.a)(v);r(e)}});o.sendMessage([{key:"deviceCodeFlow-".concat(e),value:n},{key:"ms-cv",value:t.cv().increment()}],i)})}catch(s){const t=Object(T.a)(s);null===(e=c.current)||void 0===e||e.error("failed to open message ports: ".concat(String(t)),s)}}return{requestMessagePort:o,responseMessagePort:i,sendDeviceCodeFlowRequest:n}},[u,c,t]),O=Object(r.useCallback)(async()=>{var e;if(u&&_&&g&&j){i(s.DeviceCodeState.FetchDeviceCode);try{const e=await j("getDeviceCode");if(null===e||void 0===e?void 0:e.device_code)return a(e),void i(s.DeviceCodeState.AuthorizationPending);throw new Error("Unexpected response: ".concat(JSON.stringify(e)))}catch(t){const o=Object(T.a)(t);null===(e=c.current)||void 0===e||e.error("[useTizenGetDeviceCode:getDeviceCode] failed: ".concat(String(o)),o),v(o),i(s.DeviceCodeState.Failed)}}},[u,c,g,_,j]),b=Object(r.useRef)(!1),C=Object(r.useCallback)(async()=>{var t,o;if(!b.current&&u&&_&&g&&n&&j){b.current=!0;try{const o=P.a.nowSeconds(),r=await j("checkForToken",n.device_code);if(null===r||void 0===r?void 0:r.access_token)return i(s.DeviceCodeState.SigningIn),await e.loadExternalTokensAndSignIn(r,o),i(s.DeviceCodeState.Complete),void(b.current=!1);if((null===r||void 0===r?void 0:r.error)===S.n.AUTHORIZATION_PENDING)return null===(t=c.current)||void 0===t||t.info("[useTizenGetDeviceCode:checkForToken] - Authorization pending, continue polling."),void(b.current=!1);throw new Error("Unexpected response: ".concat(JSON.stringify(r)))}catch(r){const e=Object(T.a)(r);null===(o=c.current)||void 0===o||o.error("[useTizenGetDeviceCode:checkForToken] failed: ".concat(String(e)),e),v(e),i(s.DeviceCodeState.Failed)}}},[e,n,u,c,g,_,j]),D=o===s.DeviceCodeState.AuthorizationPending&&n?1e3*n.interval:null;return Object(s.useInterval)(C,D),{deviceCodeError:l,deviceCodeResponse:n,deviceCodeState:o,fetchDeviceCode:O}}():Object(s.useGetDeviceCode)(),z=Object(a.useDispatch)(),[,L]=Object(g.a)("hasSkippedOnboarding"),{origin:M}=Object(a.useSelector)(n.getRequestInfo),{locale:I}=Object(a.useSelector)(n.getMarketInfo);Object(r.useEffect)(()=>{if(E===s.DeviceCodeState.None)F();else if(E===s.DeviceCodeState.Complete){const e="".concat(M,"https://www.xbox.com/").concat(I).concat(b.InitializeSinglePageApplication.getLink(D));L(!0),window.location.replace(e)}else E===s.DeviceCodeState.Failed&&z(j.a.raise(new O.a(String(y),"ErrorPage_Title_DeviceCodeAuthFail")))},[y,E,z,F,I,D,M,L]);const{isTizen:R}=Object(v.a)(),[q,U,G,H,Z]=Object(_.d)("DeviceCodePage_Title","DeviceCodePage_Step1","DeviceCodePage_Step1Link","DeviceCodePage_Step2","DeviceCodePage_Footer_Tizen"),B=null!==(c=null===A||void 0===A?void 0:A.user_code)&&void 0!==c?c:t,J=t||A&&E===s.DeviceCodeState.AuthorizationPending;return Object(o.jsx)(C.a,{location:"DeviceCodePage",children:J?Object(o.jsxs)("div",{className:"DeviceCodePage-module__page___4f0mt",children:[Object(o.jsx)("h3",{className:"DeviceCodePage-module__title___1cqTA",children:q}),Object(o.jsxs)("div",{className:"DeviceCodePage-module__content___1AmEg",children:[Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:f,children:[Object(o.jsx)("div",{className:h,children:1..toLocaleString()}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:m,children:U}),Object(o.jsx)("div",{className:"DeviceCodePage-module__linkText___b6HeP",children:G})]})]}),Object(o.jsxs)("div",{className:f,children:[Object(o.jsx)("div",{className:h,children:2..toLocaleString()}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:m,children:H}),Object(o.jsx)("div",{className:"DeviceCodePage-module__codeText___wstHg",children:B})]})]}),R&&Object(o.jsx)("div",{className:"DeviceCodePage-module__footerText___1ZVBV",children:Z})]}),Object(o.jsx)("div",{className:"DeviceCodePage-module__pictureSection___2igVT",children:Object(o.jsx)("img",{src:p.a,alt:G})})]})]}):Object(o.jsx)(i.LoadingPage,{})})};t.default=y}}]);
//# sourceMappingURL=device-code-page.21bc98b9.chunk.js.map