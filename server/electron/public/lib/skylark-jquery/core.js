/**
 * skylark-jquery - The skylark plugin library for fully compatible API with jquery.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
define("skylark-jquery/core",["skylark/langx","skylark/noder","skylark/datax","skylark/eventer","skylark/finder","skylark/styler","skylark/query"],function(e,n,t,i,r,o,a){var s=Array.prototype.filter,l=Array.prototype.slice;return function(n){n.fn.jquery="2.2.0",n.camelCase=e.camelCase,n.each=e.each,n.extend=function(n){var t,i=l.call(arguments,1);return"boolean"==typeof n&&(t=n,n=i.shift()),0==i.length&&(i=[n],n=this),i.forEach(function(i){e.mixin(n,i,t)}),n},n.grep=function(e,n){return s.call(e,n)},n.isArray=e.isArray,n.isEmptyObject=e.isEmptyObject,n.isFunction=e.isFunction,n.isWindow=e.isWindow,n.isPlainObject=e.isPlainObject,n.inArray=e.inArray,n.makeArray=e.makeArray,n.map=e.map,n.noop=function(){},n.parseJSON=window.JSON.parse,n.proxy=e.proxy,n.trim=e.trim,n.type=e.type,n.fn.extend=function(t){e.mixin(n.fn,t)},n.fn.serializeArray=function(){var t,i,r=[],o=function(e){return e.forEach?e.forEach(o):void r.push({name:t,value:e})};return this[0]&&e.each(this[0].elements,function(e,r){i=r.type,t=r.name,t&&"fieldset"!=r.nodeName.toLowerCase()&&!r.disabled&&"submit"!=i&&"reset"!=i&&"button"!=i&&"file"!=i&&("radio"!=i&&"checkbox"!=i||r.checked)&&o(n(r).val())}),r},n.fn.serialize=function(){var e=[];return this.serializeArray().forEach(function(n){e.push(encodeURIComponent(n.name)+"="+encodeURIComponent(n.value))}),e.join("&")}}(a),function(n){n.Event=function(n,t){return n&&!e.isString(n)&&(t=n,n=t.type),i.create(n,t)},n.event={},n.fn.submit=function(e){if(0 in arguments)this.bind("submit",e);else if(this.length){var t=n.Event("submit");this.eq(0).trigger(t),t.isDefaultPrevented()||this.get(0).submit()}return this},n.fn.triggerHandler=n.fn.trigger,n.fn.delegate=function(e,n,t){return this.on(n,e,t)},n.fn.undelegate=function(e,n,t){return this.off(n,e,t)},n.fn.live=function(e,t){return n(document.body).delegate(this.selector,e,t),this},n.fn.die=function(e,t){return n(document.body).undelegate(this.selector,e,t),this},n.fn.bind=function(e,n,t,i){return this.on(e,n,t,i)},n.fn.unbind=function(e,n){return this.off(e,n)},n.fn.ready=function(e){return i.ready(e),this},n.fn.hover=function(e,n){return this.mouseenter(e).mouseleave(n||e)},n.fn.stop=function(){return this},n.fn.moveto=function(e,n){return this.animate({left:e+"px",top:n+"px"},.4)},n.ready=i.ready,n.on=i.on,n.off=i.off}(a),function(e){e.uuid=0,e.support={},e.expr={},e.expr[":"]=e.expr.pseudos=e.expr.filters=r.pseudos,e.contains=n.contains,e.css=o.css,e.data=t.data,e.offset={},e.offset.setOffset=function(n,t,i){var r=e.css(n,"position");"static"===r&&(n.style.position="relative");var o,a,s=e(n),l=s.offset(),f=e.css(n,"top"),u=e.css(n,"left"),c=("absolute"===r||"fixed"===r)&&e.inArray("auto",[f,u])>-1,p={},y={};c?(y=s.position(),o=y.top,a=y.left):(o=parseFloat(f)||0,a=parseFloat(u)||0),e.isFunction(t)&&(t=t.call(n,i,l)),null!=t.top&&(p.top=t.top-l.top+o),null!=t.left&&(p.left=t.left-l.left+a),"using"in t?t.using.call(n,p):s.css(p)}}(a),function(e){e.event.special=e.event.special||{};var n=e.fn.on;e.fn.on=function(t,i,r,o,a){if("object"==typeof t)return n.apply(this,[t,i,r,o,a]);var s,l=this,f=(e(l),t);return null==o&&(o=r,r=null),e.each(t.split(/\s/),function(n,t){t=t.split(/\./)[0],t in e.event.special&&(s=e.event.special[t],f=s.bindType||f,s._init||(s._init=!0,s.originalHandler=s.handler||s.handle,s.handler=function(){var n=Array.prototype.slice.call(arguments);n[0]=e.extend({},n[0]),e.event.handle=function(){var n=Array.prototype.slice.call(arguments),t=n[0],i=e(t.target);i.trigger.apply(i,arguments)},s.originalHandler.apply(this,n)}),s.setup&&s.setup.apply(l,[r]))}),n.apply(this,[f,i,r,o,a])}}(a),window.jQuery=window.$=a});