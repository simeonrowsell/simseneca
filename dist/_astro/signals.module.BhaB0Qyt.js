import{l as U,t as T,x as G}from"./preact.module.mNte_dLy.js";import{T as E}from"./hooks.module.ymPEv3ir.js";var J=Symbol.for("preact-signals");function $(){if(a>1)a--;else{for(var i,n=!1;p!==void 0;){var e=p;for(p=void 0,w++;e!==void 0;){var t=e.o;if(e.o=void 0,e.f&=-3,!(8&e.f)&&k(e))try{e.c()}catch(s){n||(i=s,n=!0)}e=t}}if(w=0,a--,n)throw i}}var r=void 0,p=void 0,a=0,w=0,y=0;function N(i){if(r!==void 0){var n=i.n;if(n===void 0||n.t!==r)return n={i:0,S:i,p:r.s,n:void 0,t:r,e:void 0,x:void 0,r:n},r.s!==void 0&&(r.s.n=n),r.s=n,i.n=n,32&r.f&&i.S(n),n;if(n.i===-1)return n.i=0,n.n!==void 0&&(n.n.p=n.p,n.p!==void 0&&(n.p.n=n.n),n.p=r.s,n.n=void 0,r.s.n=n,r.s=n),n}}function o(i){this.v=i,this.i=0,this.n=void 0,this.t=void 0}o.prototype.brand=J;o.prototype.h=function(){return!0};o.prototype.S=function(i){this.t!==i&&i.e===void 0&&(i.x=this.t,this.t!==void 0&&(this.t.e=i),this.t=i)};o.prototype.U=function(i){if(this.t!==void 0){var n=i.e,e=i.x;n!==void 0&&(n.x=e,i.e=void 0),e!==void 0&&(e.e=n,i.x=void 0),i===this.t&&(this.t=e)}};o.prototype.subscribe=function(i){var n=this;return x(function(){var e=n.value,t=r;r=void 0;try{i(e)}finally{r=t}})};o.prototype.valueOf=function(){return this.value};o.prototype.toString=function(){return this.value+""};o.prototype.toJSON=function(){return this.value};o.prototype.peek=function(){var i=r;r=void 0;try{return this.value}finally{r=i}};Object.defineProperty(o.prototype,"value",{get:function(){var i=N(this);return i!==void 0&&(i.i=this.i),this.v},set:function(i){if(i!==this.v){if(w>100)throw new Error("Cycle detected");this.v=i,this.i++,y++,a++;try{for(var n=this.t;n!==void 0;n=n.x)n.t.N()}finally{$()}}}});function O(i){return new o(i)}function k(i){for(var n=i.s;n!==void 0;n=n.n)if(n.S.i!==n.i||!n.S.h()||n.S.i!==n.i)return!0;return!1}function C(i){for(var n=i.s;n!==void 0;n=n.n){var e=n.S.n;if(e!==void 0&&(n.r=e),n.S.n=n,n.i=-1,n.n===void 0){i.s=n;break}}}function j(i){for(var n=i.s,e=void 0;n!==void 0;){var t=n.p;n.i===-1?(n.S.U(n),t!==void 0&&(t.n=n.n),n.n!==void 0&&(n.n.p=t)):e=n,n.S.n=n.r,n.r!==void 0&&(n.r=void 0),n=t}i.s=e}function c(i){o.call(this,void 0),this.x=i,this.s=void 0,this.g=y-1,this.f=4}(c.prototype=new o).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===y))return!0;if(this.g=y,this.f|=1,this.i>0&&!k(this))return this.f&=-2,!0;var i=r;try{C(this),r=this;var n=this.x();(16&this.f||this.v!==n||this.i===0)&&(this.v=n,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return r=i,j(this),this.f&=-2,!0};c.prototype.S=function(i){if(this.t===void 0){this.f|=36;for(var n=this.s;n!==void 0;n=n.n)n.S.S(n)}o.prototype.S.call(this,i)};c.prototype.U=function(i){if(this.t!==void 0&&(o.prototype.U.call(this,i),this.t===void 0)){this.f&=-33;for(var n=this.s;n!==void 0;n=n.n)n.S.U(n)}};c.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var i=this.t;i!==void 0;i=i.x)i.t.N()}};Object.defineProperty(c.prototype,"value",{get:function(){if(1&this.f)throw new Error("Cycle detected");var i=N(this);if(this.h(),i!==void 0&&(i.i=this.i),16&this.f)throw this.v;return this.v}});function V(i){return new c(i)}function P(i){var n=i.u;if(i.u=void 0,typeof n=="function"){a++;var e=r;r=void 0;try{n()}catch(t){throw i.f&=-2,i.f|=8,g(i),t}finally{r=e,$()}}}function g(i){for(var n=i.s;n!==void 0;n=n.n)n.S.U(n);i.x=void 0,i.s=void 0,P(i)}function q(i){if(r!==this)throw new Error("Out-of-order effect");j(this),r=i,this.f&=-2,8&this.f&&g(this),$()}function l(i){this.x=i,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}l.prototype.c=function(){var i=this.S();try{if(8&this.f||this.x===void 0)return;var n=this.x();typeof n=="function"&&(this.u=n)}finally{i()}};l.prototype.S=function(){if(1&this.f)throw new Error("Cycle detected");this.f|=1,this.f&=-9,P(this),C(this),a++;var i=r;return r=this,q.bind(this,i)};l.prototype.N=function(){2&this.f||(this.f|=2,this.o=p,p=this)};l.prototype.d=function(){this.f|=8,1&this.f||g(this)};function x(i){var n=new l(i);try{n.c()}catch(e){throw n.d(),e}return n.d.bind(n)}var b;function v(i,n){U[i]=n.bind(null,U[i]||function(){})}function S(i){b&&b(),b=i&&i.S()}function A(i){var n=this,e=i.data,t=B(e);t.value=e;var s=E(function(){for(var f=n.__v;f=f.__;)if(f.__c){f.__c.__$f|=4;break}return n.__$u.c=function(){var u,d=n.__$u.S(),h=s.value;d(),T(h)||((u=n.base)==null?void 0:u.nodeType)!==3?(n.__$f|=1,n.setState({})):n.base.data=h},V(function(){var u=t.value.value;return u===0?0:u===!0?"":u||""})},[]);return s.value}A.displayName="_st";Object.defineProperties(o.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:A},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}});v("__b",function(i,n){if(typeof n.type=="string"){var e,t=n.props;for(var s in t)if(s!=="children"){var f=t[s];f instanceof o&&(e||(n.__np=e={}),e[s]=f,t[s]=f.peek())}}i(n)});v("__r",function(i,n){S();var e,t=n.__c;t&&(t.__$f&=-2,(e=t.__$u)===void 0&&(t.__$u=e=function(s){var f;return x(function(){f=this}),f.c=function(){t.__$f|=1,t.setState({})},f}())),S(e),i(n)});v("__e",function(i,n,e,t){S(),i(n,e,t)});v("diffed",function(i,n){S();var e;if(typeof n.type=="string"&&(e=n.__e)){var t=n.__np,s=n.props;if(t){var f=e.U;if(f)for(var u in f){var d=f[u];d!==void 0&&!(u in t)&&(d.d(),f[u]=void 0)}else e.U=f={};for(var h in t){var _=f[h],m=t[h];_===void 0?(_=z(e,h,m,s),f[h]=_):_.o(m,s)}}}i(n)});function z(i,n,e,t){var s=n in i&&i.ownerSVGElement===void 0,f=O(e);return{o:function(u,d){f.value=u,t=d},d:x(function(){var u=f.value.value;t[n]!==u&&(t[n]=u,s?i[n]=u:u?i.setAttribute(n,u):i.removeAttribute(n))})}}v("unmount",function(i,n){if(typeof n.type=="string"){var e=n.__e;if(e){var t=e.U;if(t){e.U=void 0;for(var s in t){var f=t[s];f&&f.d()}}}}else{var u=n.__c;if(u){var d=u.__$u;d&&(u.__$u=void 0,d.d())}}i(n)});v("__h",function(i,n,e,t){(t<3||t===9)&&(n.__$f|=2),i(n,e,t)});G.prototype.shouldComponentUpdate=function(i,n){var e=this.__$u;if(!(e&&e.s!==void 0||4&this.__$f)||3&this.__$f)return!0;for(var t in n)return!0;for(var s in i)if(s!=="__source"&&i[s]!==this.props[s])return!0;for(var f in this.props)if(!(f in i))return!0;return!1};function B(i){return E(function(){return O(i)},[])}export{o as Signal,V as computed,x as effect,O as signal,B as useSignal};
