(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{289:function(e,t,n){"use strict";function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return a})},300:function(e,t,n){e.exports=n.p+"static/media/LogoColor.6263c207.png"},330:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(1),c=n.n(o),i=n(13),s=n.n(i),l=n(94),p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}var f=function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)},m=function(e){function t(){var n,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var r=arguments.length,o=Array(r),c=0;c<r;c++)o[c]=arguments[c];return n=a=u(this,e.call.apply(e,[this].concat(o))),a.handleClick=function(e){if(a.props.onClick&&a.props.onClick(e),!e.defaultPrevented&&0===e.button&&!a.props.target&&!f(e)){e.preventDefault();var t=a.context.router.history,n=a.props,r=n.replace,o=n.to;r?t.replace(o):t.push(o)}},u(a,n)}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.render=function(){var e=this.props,t=(e.replace,e.to),n=e.innerRef,a=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(e,["replace","to","innerRef"]);s()(this.context.router,"You should not use <Link> outside a <Router>"),s()(void 0!==t,'You must specify the "to" property');var o=this.context.router.history,c="string"===typeof t?Object(l.b)(t,null,null,o.location):t,i=o.createHref(c);return r.a.createElement("a",p({},a,{onClick:this.handleClick,href:i,ref:n}))},t}(r.a.Component);m.propTypes={onClick:c.a.func,target:c.a.string,replace:c.a.bool,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired,innerRef:c.a.oneOfType([c.a.string,c.a.func])},m.defaultProps={replace:!1},m.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired,createHref:c.a.func.isRequired}).isRequired}).isRequired},t.a=m},416:function(e,t,n){"use strict";var a=n(2),r=n.n(a),o=n(1),c=n.n(o),i=n(6),s=n.n(i),l=n(13),p=n.n(l),u=n(94),f=n(96),m=n.n(f),h={},d=0,y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return"/"===e?e:function(e){var t=e,n=h[t]||(h[t]={});if(n[e])return n[e];var a=m.a.compile(e);return d<1e4&&(n[e]=a,d++),a}(e)(t,{pretty:!0})},b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e};var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.isStatic=function(){return this.context.router&&this.context.router.staticContext},t.prototype.componentWillMount=function(){p()(this.context.router,"You should not use <Redirect> outside a <Router>"),this.isStatic()&&this.perform()},t.prototype.componentDidMount=function(){this.isStatic()||this.perform()},t.prototype.componentDidUpdate=function(e){var t=Object(u.b)(e.to),n=Object(u.b)(this.props.to);Object(u.c)(t,n)?s()(!1,"You tried to redirect to the same route you're currently on: \""+n.pathname+n.search+'"'):this.perform()},t.prototype.computeTo=function(e){var t=e.computedMatch,n=e.to;return t?"string"===typeof n?y(n,t.params):b({},n,{pathname:y(n.pathname,t.params)}):n},t.prototype.perform=function(){var e=this.context.router.history,t=this.props.push,n=this.computeTo(this.props);t?e.push(n):e.replace(n)},t.prototype.render=function(){return null},t}(r.a.Component);E.propTypes={computedMatch:c.a.object,push:c.a.bool,from:c.a.string,to:c.a.oneOfType([c.a.string,c.a.object]).isRequired},E.defaultProps={push:!1},E.contextTypes={router:c.a.shape({history:c.a.shape({push:c.a.func.isRequired,replace:c.a.func.isRequired}).isRequired,staticContext:c.a.object}).isRequired};var v=E;t.a=v},640:function(e,t,n){"use strict";n.r(t);var a=n(289),r=n(88),o=n(89),c=n(91),i=n(90),s=n(92),l=n(2),p=n.n(l),u=n(416),f=n(330),m=n(262),h=function(e){function t(){var e,n;Object(r.a)(this,t);for(var o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return(n=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(s)))).state={identification:"",name:"",email:"",password:"",Rpassword:"",ok:!1,error:!1},n.valida=function(e){return function(t){n.setState(Object(a.a)({},e,t.target.value))}},n.componentWillUnmount=function(){return n.setState({ok:!1})},n.login=function(e){e.preventDefault(),console.log(n.state);var t=n.state,a=t.email,r=t.password,o=t.Rpassword,c=t.name,i=t.identification;return console.log(a,r),r!==o?(alert("las contrase\xf1as no coinciden"),n.setState({Rpassword:"",password:""})):fetch("https://peerpeel.herokuapp.com/v1/client",{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({email:a,name:c,identification:i,password:r})}).then(function(e){return e.json()}).then(function(e){var t=e.data.id;return localStorage.setItem("uid",t),console.log(e),n.setState({ok:!0}),p.a.createElement(u.a,{push:!0,to:"/forms"})}).catch(function(e){return n.setState({error:!0})})},n}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.ok;t.error;return a?p.a.createElement(u.a,{push:!0,to:"/forms"}):p.a.createElement("div",{className:"app flex-row align-items-center"},p.a.createElement(m.w,null,p.a.createElement(m.fb,{className:"justify-content-center"},p.a.createElement(m.u,{md:"9",lg:"7",xl:"6"},p.a.createElement(m.i,{className:"mx-4"},p.a.createElement(m.j,{className:"p-4"},p.a.createElement(m.C,null,p.a.createElement("img",{src:n(300),style:{width:"100%"}}),p.a.createElement("br",null),p.a.createElement("br",null),p.a.createElement("p",{className:"text-muted"},"Create your account"),p.a.createElement(m.F,{className:"mb-3"},p.a.createElement(m.G,{addonType:"prepend"},p.a.createElement(m.H,null,p.a.createElement("i",{className:"icon-user"}))),p.a.createElement(m.E,{type:"text",placeholder:"Username",autoComplete:"username",onChange:this.valida("name")})),p.a.createElement(m.F,{className:"mb-3"},p.a.createElement(m.G,{addonType:"prepend"},p.a.createElement(m.H,null,"#")),p.a.createElement(m.E,{type:"number",placeholder:"Identification",autoComplete:"identification",onChange:this.valida("identification")})),p.a.createElement(m.F,{className:"mb-3"},p.a.createElement(m.G,{addonType:"prepend"},p.a.createElement(m.H,null,"@")),p.a.createElement(m.E,{type:"text",placeholder:"Email",autoComplete:"email",onChange:this.valida("email")})),p.a.createElement(m.F,{className:"mb-3"},p.a.createElement(m.G,{addonType:"prepend"},p.a.createElement(m.H,null,p.a.createElement("i",{className:"icon-lock"}))),p.a.createElement(m.E,{type:"password",placeholder:"Password",autoComplete:"new-password",onChange:this.valida("password")})),p.a.createElement(m.F,{className:"mb-4"},p.a.createElement(m.G,{addonType:"prepend"},p.a.createElement(m.H,null,p.a.createElement("i",{className:"icon-lock"}))),p.a.createElement(m.E,{type:"password",placeholder:"Repeat password",autoComplete:"new-password",onChange:this.valida("Rpassword")})),p.a.createElement(m.e,{color:"success",onClick:function(t){return e.login(t)},block:!0},"Create Account"),p.a.createElement(f.a,{to:"/login"},p.a.createElement(m.e,{color:"link",className:"px-0"},"I already have an account!")))),p.a.createElement(m.l,{className:"p-4"},p.a.createElement(m.fb,null,p.a.createElement(m.u,{xs:"12",sm:"6"},p.a.createElement(m.e,{className:"btn-facebook mb-1",block:!0},p.a.createElement("span",null,"facebook"))),p.a.createElement(m.u,{xs:"12",sm:"6"},p.a.createElement(m.e,{className:"btn-twitter mb-1",block:!0},p.a.createElement("span",null,"twitter"))))))))))}}]),t}(l.Component);t.default=h}}]);
//# sourceMappingURL=6.b29b4819.chunk.js.map