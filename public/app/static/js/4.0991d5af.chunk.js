(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{300:function(e,n,t){e.exports=t.p+"static/media/LogoColor.6263c207.png"},363:function(e,n,t){},680:function(e,n,t){"use strict";t.r(n);var a,l=t(88),r=t(89),o=t(91),i=t(90),u=t(92),c=t(2),s=t.n(c),m=t(687),d=t(631),h=t(416),p=t(262),f=t(308),b={items:[{title:!0,name:"PeerPeel",wrapper:{element:"",attributes:{}}},{name:"Service",url:"/forms",icon:"icon-puzzle"}]},g=function(){var e=localStorage.getItem("uid"),n=!1;try{n=null!==e}catch(t){return!1}return n},E=function(e){return function(n){return g()?s.a.createElement(e,n):s.a.createElement(h.a,{to:"/login"})}},y=t(289),v=t(440),z=t(686),C=t(681),k=t(679),w=t(418),S=t(684),O=t(638),j={box:{backgroundColor:"white",border:"1px solid #e6e6e6",textAlign:"center",marginBottom:"1em",padding:"2em"}},x=function(e){return s.a.createElement("div",{style:j.box},e.children)},I=(t(363),function(e){var n=e.handleClick,a=e.handleChange,l=e.handleSubmit;return s.a.createElement("div",null,s.a.createElement(x,null,s.a.createElement("img",{src:t(300),alt:"logo"}),s.a.createElement(k.a,{onSubmit:function(e){return l(e)}},s.a.createElement(k.a.Field,null,s.a.createElement(k.a.Input,{name:"email",onChange:a,placeholder:"Tel\xe9fono, Email o Nombre de usuario",icon:s.a.createElement(w.a,{color:"green",size:"large"})})),s.a.createElement(k.a.Field,null,s.a.createElement(k.a.Input,{name:"password",onChange:a,type:"password",placeholder:"Contrase\xf1a",icon:s.a.createElement(w.a,{color:"red",size:"large"})})),s.a.createElement(S.a,{primary:!0,fluid:!0,type:"submit"},"Entrar"),s.a.createElement(O.a,{horizontal:!0}," O "),s.a.createElement(S.a,{color:"google plus"},s.a.createElement("p",null," ",s.a.createElement(w.a,{name:"google"}),"  Iniciar sesi\xf3n con Google ")))),s.a.createElement(x,null,s.a.createElement("p",null,"\xbfNo tienes una cuenta? ",s.a.createElement("button",{onClick:n},"Registrate"))))}),R=function(e){return s.a.createElement("div",null,s.a.createElement(x,null,s.a.createElement("h3",null,"Reg\xedstrate para ver fotos y v\xeddeos de tus amigos."),s.a.createElement(k.a,{onSubmit:function(n){return e.handleSubmit(n)}},s.a.createElement(S.a,{color:"google plus"},s.a.createElement("p",null," ",s.a.createElement(w.a,{name:"google"}),"  Iniciar sesi\xf3n con Google ")),s.a.createElement(O.a,{horizontal:!0}," O "),s.a.createElement(k.a.Field,null,s.a.createElement(k.a.Input,{name:"email",onChange:e.handleChange,placeholder:"N\xfamero de m\xf3vil o correo electr\xf3nico"})),s.a.createElement(k.a.Field,null,s.a.createElement(k.a.Input,{name:"nombre",onChange:e.handleChange,placeholder:"Nombre Completo"})),s.a.createElement(k.a.Field,null,s.a.createElement(k.a.Input,{placeholder:"Nombre de usuario"})),s.a.createElement(k.a.Field,null,s.a.createElement(k.a.Input,{name:"password",onChange:e.handleChange,type:"password",placeholder:"Contrase\xf1a"})),s.a.createElement(S.a,{primary:!0,fluid:!0,type:"submit"},"Registrarse")),s.a.createElement("h3",null,"Al registrarte, aceptas nuestras Condiciones, la Pol\xedtica de datos y la Pol\xedtica de cookies.")),s.a.createElement(x,null,s.a.createElement("p",null,"\xbfTienes una cuenta? ",s.a.createElement("button",{className:"button",onClick:e.handleClick},"Inicia Sesi\xf3n"))))},P=[{key:1,header:"Project Report - April",description:"Leverage agile frameworks to provide a robust synopsis for high level overviews.",meta:"ROI: 30%"},{key:2,header:"Project Report - May",description:"Bring to the table win-win survival strategies to ensure proactive domination.",meta:"ROI: 34%"},{key:3,header:"Project Report - June",description:"Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.",meta:"ROI: 27%"},{key:4,header:"Project Report - April",description:"Leverage agile frameworks to provide a robust synopsis for high level overviews.",meta:"ROI: 30%"}],N=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(r)))).state={visible:0,ok:!1,args:{}},t.showRegister=function(e){e.preventDefault(),t.setState({visible:1})},t.showLogin=function(e){e.preventDefault(),t.setState({visible:0})},t.handleChange=function(e,n){var a=t.state.args,l=n.name,r=n.value,o=Object(v.a)({},a,Object(y.a)({},l,r));t.setState({args:o})},t.handleSubmitLogin=function(e){var n=t.state.args,a=n.email,l=n.password;return console.log(a,l),fetch("https://peerpeel.herokuapp.com/v1/login/client",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:a,password:l})}).then(function(e){return e.json()}).then(function(e){return localStorage.setItem("token",e.token),t.setState({ok:!0}),s.a.createElement(h.a,{push:!0,to:"/dashboard"})}).catch(function(e){return console.error(e)})},t}return Object(u.a)(n,e),Object(r.a)(n,[{key:"render",value:function(){var e=this.state,n=e.visible;return e.ok?s.a.createElement(h.a,{push:!0,to:"/dashboard"}):s.a.createElement(z.a,{columns:"2",centered:!0,verticalAlign:"middle",style:L.grid},s.a.createElement(z.a.Row,{centered:!0,stretched:!0},s.a.createElement(z.a.Column,{mobile:3,tablet:8,computer:6},s.a.createElement("div",{style:L.scroll},s.a.createElement(x,null,s.a.createElement(C.a.Group,{centered:!0,items:P})))),s.a.createElement(z.a.Column,{mobile:6,tablet:8,computer:7},0===n&&s.a.createElement(I,{handleChange:this.handleChange,handleClick:this.showRegister,handleSubmit:this.handleSubmitLogin}),1===n&&s.a.createElement(R,{handleClick:this.showLogin,handleChange:this.handleChange,handleSubmit:this.handleSubmitLogin}))))}}]),n}(c.Component),L={grid:{height:"100%",width:"900px",margin:"0 auto"},scroll:{height:"450px",marginBottom:"4%",overflow:"scroll"}},A=(s.a.lazy(function(){return t.e(12).then(t.bind(null,646))}),s.a.lazy(function(){return t.e(13).then(t.bind(null,647))})),F=(s.a.lazy(function(){return t.e(14).then(t.bind(null,648))}),s.a.lazy(function(){return t.e(15).then(t.bind(null,649))}),s.a.lazy(function(){return t.e(16).then(t.bind(null,650))}),s.a.lazy(function(){return t.e(17).then(t.bind(null,651))})),B=(s.a.lazy(function(){return t.e(18).then(t.bind(null,652))}),s.a.lazy(function(){return t.e(19).then(t.bind(null,653))}),s.a.lazy(function(){return t.e(20).then(t.bind(null,654))}),s.a.lazy(function(){return t.e(21).then(t.bind(null,655))}),s.a.lazy(function(){return t.e(22).then(t.bind(null,656))}),s.a.lazy(function(){return t.e(23).then(t.bind(null,657))}),s.a.lazy(function(){return t.e(24).then(t.bind(null,658))}),s.a.lazy(function(){return t.e(25).then(t.bind(null,659))}),s.a.lazy(function(){return t.e(26).then(t.bind(null,660))}),s.a.lazy(function(){return t.e(27).then(t.bind(null,661))}),s.a.lazy(function(){return t.e(28).then(t.bind(null,662))}),s.a.lazy(function(){return t.e(29).then(t.bind(null,663))}),s.a.lazy(function(){return t.e(30).then(t.bind(null,664))}),s.a.lazy(function(){return t.e(31).then(t.bind(null,665))}),s.a.lazy(function(){return t.e(32).then(t.bind(null,666))}),s.a.lazy(function(){return Promise.all([t.e(1),t.e(33)]).then(t.bind(null,667))}),s.a.lazy(function(){return Promise.all([t.e(1),t.e(2),t.e(34)]).then(t.bind(null,668))}),s.a.lazy(function(){return t.e(35).then(t.bind(null,669))}),s.a.lazy(function(){return t.e(36).then(t.bind(null,670))}),s.a.lazy(function(){return t.e(37).then(t.bind(null,671))}),s.a.lazy(function(){return t.e(38).then(t.bind(null,672))}),s.a.lazy(function(){return t.e(39).then(t.bind(null,673))}),s.a.lazy(function(){return t.e(40).then(t.bind(null,674))}),s.a.lazy(function(){return t.e(41).then(t.bind(null,675))}),s.a.lazy(function(){return Promise.all([t.e(2),t.e(42)]).then(t.bind(null,676))}),s.a.lazy(function(){return t.e(43).then(t.bind(null,677))}),s.a.lazy(function(){return Promise.all([t.e(1),t.e(44)]).then(t.bind(null,683))}),s.a.lazy(function(){return t.e(45).then(t.bind(null,678))}),s.a.lazy(function(){return t.e(46).then(t.bind(null,682))}),[{path:"/",exact:!0,name:"Home",component:H},{path:"/forms",name:"Forms",component:E(F)},{path:"/buttons",exact:!0,name:"Buttons",component:E(A)},{path:"/login1",component:(a=N,function(e){return g()?s.a.createElement(h.a,{to:"/"}):s.a.createElement(a,e)}),exact:!0}]),J=s.a.lazy(function(){return t.e(9).then(t.bind(null,643))}),T=s.a.lazy(function(){return t.e(10).then(t.bind(null,644))}),D=s.a.lazy(function(){return t.e(11).then(t.bind(null,645))}),G=function(e){function n(){var e,t;Object(l.a)(this,n);for(var a=arguments.length,r=new Array(a),u=0;u<a;u++)r[u]=arguments[u];return(t=Object(o.a)(this,(e=Object(i.a)(n)).call.apply(e,[this].concat(r)))).loading=function(){return s.a.createElement("div",{className:"animated fadeIn pt-1 text-center"},"Loading...")},t}return Object(u.a)(n,e),Object(r.a)(n,[{key:"signOut",value:function(e){e.preventDefault(),this.props.history.push("/login")}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"app"},s.a.createElement(f.d,{fixed:!0,style:{backgroundColor:"#2F353A"}},s.a.createElement(c.Suspense,{fallback:this.loading()},s.a.createElement(D,{onLogout:function(n){return e.signOut(n)}}))),s.a.createElement("div",{className:"app-body"},s.a.createElement(f.f,{fixed:!0,display:"lg"},s.a.createElement(f.i,null),s.a.createElement(f.h,null),s.a.createElement(c.Suspense,null,s.a.createElement(f.k,Object.assign({navConfig:b},this.props))),s.a.createElement(f.g,null),s.a.createElement(f.j,null)),s.a.createElement("main",{className:"main"},s.a.createElement(f.b,{appRoutes:B}),s.a.createElement(p.w,{fluid:!0},s.a.createElement(c.Suspense,{fallback:this.loading()},s.a.createElement(m.a,null,B.map(function(e,n){return e.component?s.a.createElement(d.a,{key:n,path:e.path,exact:e.exact,name:e.name,render:function(n){return s.a.createElement(e.component,n)}}):null}),s.a.createElement(h.a,{from:"/",to:"/forms"}))))),s.a.createElement(f.a,{fixed:!0},s.a.createElement(c.Suspense,{fallback:this.loading()},s.a.createElement(J,null)))),s.a.createElement(f.c,null,s.a.createElement(c.Suspense,{fallback:this.loading()},s.a.createElement(T,null))))}}]),n}(c.Component),H=n.default=G}}]);
//# sourceMappingURL=4.0991d5af.chunk.js.map