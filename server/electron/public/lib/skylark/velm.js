/**
 * skylark - An Elegant JavaScript Library and HTML5 Application Framework.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define(["skylark/skylark","skylark/langx","skylark/datax","skylark/dnd","skylark/eventer","skylark/filer","skylark/finder","skylark/fx","skylark/geom","skylark/mover","skylark/noder","skylark/styler"],function(e,t,n,r,a,o,i,l,s,d,c,f){function g(e,n){return function(){var r=this,a=r.domNode,o=e.apply(n,[a].concat(u.call(arguments)));if(o){if(o===n)return r;o instanceof HTMLElement?o=new k(o):t.isArrayLike(o)&&(o=p.call(o,function(e){return e instanceof HTMLElement?new k(o):e}))}return o}}var p=Array.prototype.map,u=Array.prototype.slice,k=t.klass({klassName:"VisualElement",init:function(e){t.isString(e)&&(e=document.getElementById(e)),this.domNode=e}}),m=new k(document.body),h=function(e){return e?new k(e):m};return t.mixin(h,{batch:function(e,t,n){return e.forEach(function(e){var r=e instanceof k?e:h(e);r[t].apply(r,n)}),this},root:new k(document.body),VisualElement:k,delegate:function(e,t){var n={};e.forEach(function(e){n[e]=g(t[e],t)}),k.partial(n)}}),h.delegate(["attr","data","prop","removeAttr","removeData","text","val"],n),h.delegate(["draggable","droppable"],r),h.delegate(["off","on","one","shortcuts","trigger"],a),h.delegate(["picker","dropzone"],o),h.delegate(["ancestor","ancestors","children","descendant","find","findAll","firstChild","lastChild","matches","nextSibling","nextSiblings","parent","previousSibling","previousSiblings","siblings"],i),h.find=function(e){return"body"===e?this.root:this.root.descendant(e)},h.delegate(["animate","fadeIn","fadeOut","fadeTo","fadeToggle","hide","scrollToTop","show","toggle"],l),h.delegate(["borderExtents","boundingPosition","boundingRect","clientHeight","clientSize","clientWidth","contentRect","height","marginExtents","offsetParent","paddingExtents","pagePosition","pageRect","relativePosition","relativeRect","scrollIntoView","scrollLeft","scrollTop","size","width"],s),h.delegate(["movable"],r),h.delegate(["after","append","before","clone","contains","contents","empty","html","isChildOf","ownerDoc","prepend","remove","replace","reverse","throb","traverse","wrapper","wrapperInner","unwrap"],c),h.delegate(["addClass","className","css","hasClass","hide","isInvisible","removeClass","show","toggleClass"],f),e.velm=h});