(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{104:function(e,t,a){},107:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),c=(a(80),a(65)),i=a(24),u=a(18),m=a.n(u),s=a(29),p=a(23),f=a(30),d=a.n(f),g=a(138),b=a(143),h=a(144),E=a(145),v=a(108),w=a(142),y=a(153),x=Object(g.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",marginBottom:8,justifyContent:"center"},input:{marginLeft:e.spacing(1),flex:1},button:{marginLeft:10}}})),j=r.a.forwardRef((function(e,t){var a=e.onSubmit,n=x();return r.a.createElement(v.a,{component:"form",className:n.root,onSubmit:a},r.a.createElement(y.a,{name:"upload-file",type:"file",inputRef:t}),r.a.createElement(w.a,{className:n.button,color:"primary",variant:"contained","aria-label":"upload",type:"submit"},"Import"))})),O=Object(g.a)((function(e){return{root:{width:"70vw"},table:{maxHeight:"50vh"}}}));function S(){var e=O(),t=r.a.useState(!1),a=Object(p.a)(t,2),n=a[0],o=a[1],l=r.a.useRef(null),c=function(){var e=Object(s.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("file",l.current.files[0]),console.log("formData",a),o(!0),e.next=7,d.a.post("/import_data",a,{headers:{"Content-Type":"multipart/form-data"},responseType:"blob"});case 7:e.sent,o(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(b.a,{className:e.root},r.a.createElement(h.a,null,r.a.createElement(j,{onSubmit:c,ref:l}),n?r.a.createElement(E.a,{height:300}):null))}var N=a(148),k=a(152),C=a(151),B=a(147),R=a(149),L=a(150),D=a(45),I=a.n(D),T=a(44),F=a.n(T),H=a(154),M=a(146),_=a(64),A=a.n(_),J=Object(g.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",marginBottom:8},input:{marginLeft:e.spacing(1),flex:1},iconButton:{padding:10}}}));function P(e){var t=e.onSubmit,a=e.onChange,n=J();return r.a.createElement(v.a,{component:"form",className:n.root,onSubmit:t},r.a.createElement(H.a,{autoFocus:!0,onChange:a,className:n.input,placeholder:"First name",inputProps:{"aria-label":"first-name"}}),r.a.createElement(M.a,{className:n.iconButton,"aria-label":"search",type:"submit"},r.a.createElement(A.a,null)))}var U=Object(g.a)((function(e){return{root:{width:"70vw"},table:{maxHeight:"50vh"}}})),W=new Map([[1,"masculine"],[2,"feminine"],[0,"ambiguous"]]),V=new Map([[1,"male"],[2,"female"]]),$=new Map([[1,F.a[500]],[2,I.a[200]]]);function q(){var e=U(),t=r.a.useState([]),a=Object(p.a)(t,2),n=a[0],o=a[1],l=r.a.useState(),c=Object(p.a)(l,2),i=c[0],u=c[1],f=r.a.useState(!1),g=Object(p.a)(f,2),v=g[0],w=g[1],y=function(){var e=Object(s.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),w(!0),e.next=4,d.a.get("/users?firstname=".concat(i));case 4:a=e.sent,w(!1),o(a.data);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(b.a,{className:e.root},r.a.createElement(h.a,null,r.a.createElement(P,{onSubmit:y,onChange:function(e){u(e.target.value)}}),v?r.a.createElement(E.a,{height:300}):r.a.createElement(B.a,{className:e.table},r.a.createElement(N.a,null,r.a.createElement(R.a,null,r.a.createElement(L.a,null,r.a.createElement(C.a,null,"Name"),r.a.createElement(C.a,{align:"right"},"Type"),r.a.createElement(C.a,{align:"right"},"Priority gender"),r.a.createElement(C.a,{align:"right"},"Origin"))),r.a.createElement(k.a,null,n.map((function(e){var t=e.type,a=e.gender,n=e.origin,o=W.get(t),l=V.get(a),c=$.get(t);return r.a.createElement(L.a,{key:e.id,style:{backgroundColor:c}},r.a.createElement(C.a,{component:"th",scope:"row"},e.label),r.a.createElement(C.a,{align:"right"},o),r.a.createElement(C.a,{align:"right"},l),r.a.createElement(C.a,{align:"right"},n))})))))))}var z=Object(g.a)((function(e){return{root:{padding:"2px 4px",display:"flex",alignItems:"center",marginBottom:8,justifyContent:"center"},input:{marginLeft:e.spacing(1),flex:1},button:{marginLeft:10}}})),G=r.a.forwardRef((function(e,t){var a=e.onSubmit,n=z();return r.a.createElement(v.a,{component:"form",className:n.root,onSubmit:a},r.a.createElement(y.a,{name:"upload-file",type:"file",inputRef:t}),r.a.createElement(w.a,{className:n.button,color:"primary",variant:"contained","aria-label":"upload",type:"submit"},"Validate"))})),K=Object(g.a)((function(e){return{root:{width:"70vw"},table:{maxHeight:"50vh"}}}));function Q(){var e=K(),t=r.a.useState(!1),a=Object(p.a)(t,2),n=a[0],o=a[1],l=r.a.useRef(null),c=function(){var e=Object(s.a)(m.a.mark((function e(t){var a,n,r,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),(a=new FormData).append("file",l.current.files[0]),o(!0),e.next=6,d.a.post("/upload_file",a,{headers:{"Content-Type":"multipart/form-data"},responseType:"blob"});case 6:n=e.sent,r=window.URL.createObjectURL(new Blob([n.data])),(c=document.createElement("a")).href=r,c.setAttribute("download","export.csv"),document.body.appendChild(c),c.click(),o(!1);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(b.a,{className:e.root},r.a.createElement(h.a,null,r.a.createElement(G,{onSubmit:c,ref:l}),n?r.a.createElement(E.a,{height:300}):null))}a(104);var X=function(){return r.a.createElement(c.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(i.c,null,r.a.createElement(i.a,{path:"/search"},r.a.createElement(q,null)),r.a.createElement(i.a,{path:"/treatment"},r.a.createElement(Q,null)),r.a.createElement(i.a,{path:"/import_data"},r.a.createElement(S,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},75:function(e,t,a){e.exports=a(107)},80:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.0f931809.chunk.js.map