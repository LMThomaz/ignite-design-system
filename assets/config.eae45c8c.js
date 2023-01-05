var k=Object.defineProperty;var o=(r,e)=>k(r,"name",{value:e,configurable:!0});import{w as M,p as D}from"./iframe.6d084262.js";import"./es.map.constructor.c04a94f9.js";import{r as h}from"./index.c360ffdc.js";import{r as d,R as P}from"./index.c51b828c.js";import{j as p}from"./jsx-runtime.dbc498b7.js";function w(r){return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(r)}o(w,"_typeof");function T(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}o(T,"_classCallCheck");function O(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}o(O,"_defineProperties");function A(r,e,t){return e&&O(r.prototype,e),t&&O(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}o(A,"_createClass");function j(r,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),Object.defineProperty(r,"prototype",{writable:!1}),e&&b(r,e)}o(j,"_inherits");function b(r,e){return b=Object.setPrototypeOf||o(function(n,a){return n.__proto__=a,n},"_setPrototypeOf"),b(r,e)}o(b,"_setPrototypeOf");function N(r){var e=C();return o(function(){var n=y(r),a;if(e){var u=y(this).constructor;a=Reflect.construct(n,arguments,u)}else a=n.apply(this,arguments);return F(this,a)},"_createSuperInternal")}o(N,"_createSuper");function F(r,e){if(e&&(w(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return W(r)}o(F,"_possibleConstructorReturn");function W(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}o(W,"_assertThisInitialized");function C(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}o(C,"_isNativeReflectConstruct");function y(r){return y=Object.setPrototypeOf?Object.getPrototypeOf:o(function(t){return t.__proto__||Object.getPrototypeOf(t)},"_getPrototypeOf"),y(r)}o(y,"_getPrototypeOf");function _(r,e,t,n,a,u,i){try{var c=r[u](i),s=c.value}catch(l){t(l);return}c.done?e(s):Promise.resolve(s).then(n,a)}o(_,"asyncGeneratorStep");function g(r){return function(){var e=this,t=arguments;return new Promise(function(n,a){var u=r.apply(e,t);function i(s){_(u,n,a,i,c,"next",s)}o(i,"_next");function c(s){_(u,n,a,i,c,"throw",s)}o(c,"_throw"),i(void 0)})}}o(g,"_asyncToGenerator");var f=M.FRAMEWORK_OPTIONS,v=new Map,Y=o(function(e,t){var n=t.id,a=t.component;if(!a)throw new Error("Unable to render story ".concat(n," as the component annotation is missing from the default export"));return p(a,{...e})},"render"),I=o(function(e){var t=e.callback,n=e.children,a=h.exports.useRef();return h.exports.useLayoutEffect(function(){a.current!==t&&(a.current=t,t())},[t]),n},"WithCallback"),B=function(){var r=g(regeneratorRuntime.mark(o(function e(t,n){var a;return regeneratorRuntime.wrap(o(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,K(n);case 2:return a=i.sent,i.abrupt("return",new Promise(function(c){a?a.render(p(I,{callback:o(function(){return c(null)},"callback"),children:t})):P.render(t,n,function(){return c(null)})}));case 4:case"end":return i.stop()}},"_callee$"),e)},"_callee")));return o(function(t,n){return r.apply(this,arguments)},"renderElement")}(),U=d.exports.version&&(d.exports.version.startsWith("18")||d.exports.version.startsWith("0.0.0")),$=(f==null?void 0:f.legacyRootApi)!==!0,S=$&&U,G=o(function(e){var t=v.get(e);t&&S?(t.unmount(),v.delete(e)):P.unmountComponentAtNode(e)},"unmountElement"),K=function(){var r=g(regeneratorRuntime.mark(o(function e(t){var n,a;return regeneratorRuntime.wrap(o(function(i){for(;;)switch(i.prev=i.next){case 0:if(S){i.next=2;break}return i.abrupt("return",null);case 2:if(n=v.get(t),n){i.next=9;break}return i.next=6,D(()=>import("./client.6e0ee459.js").then(c=>c.c),["assets/client.6e0ee459.js","assets/index.c51b828c.js","assets/iframe.6d084262.js","assets/index.c360ffdc.js"]);case 6:a=i.sent.default,n=a.createRoot(t),v.set(t,n);case 9:return i.abrupt("return",n);case 10:case"end":return i.stop()}},"_callee2$"),e)},"_callee2")));return o(function(t){return r.apply(this,arguments)},"getReactRoot")}(),L=function(r){j(t,r);var e=N(t);function t(){var n;T(this,t);for(var a=arguments.length,u=new Array(a),i=0;i<a;i++)u[i]=arguments[i];return n=e.call.apply(e,[this].concat(u)),n.state={hasError:!1},n}return o(t,"ErrorBoundary"),A(t,[{key:"componentDidMount",value:o(function(){var a=this.state.hasError,u=this.props.showMain;a||u()},"componentDidMount")},{key:"componentDidCatch",value:o(function(a){var u=this.props.showException;u(a)},"componentDidCatch")},{key:"render",value:o(function(){var a=this.state.hasError,u=this.props.children;return a?null:u},"render")}],[{key:"getDerivedStateFromError",value:o(function(){return{hasError:!0}},"getDerivedStateFromError")}]),t}(h.exports.Component),x=f!=null&&f.strictMode?h.exports.StrictMode:h.exports.Fragment;function Z(r,e){return R.apply(this,arguments)}o(Z,"renderToDOM");function R(){return R=g(regeneratorRuntime.mark(o(function r(e,t){var n,a,u,i,c,s,l,E;return regeneratorRuntime.wrap(o(function(m){for(;;)switch(m.prev=m.next){case 0:return n=e.storyContext,a=e.unboundStoryFn,u=e.showMain,i=e.showException,c=e.forceRemount,s=a,l=p(L,{showMain:u,showException:i,children:p(s,{...n})}),E=x?p(x,{children:l}):l,c&&G(t),m.next=7,B(E,t);case 7:case"end":return m.stop()}},"_callee3$"),r)},"_callee3"))),R.apply(this,arguments)}o(R,"_renderToDOM");var ee={framework:"react"};export{ee as parameters,Y as render,Z as renderToDOM};
//# sourceMappingURL=config.eae45c8c.js.map
