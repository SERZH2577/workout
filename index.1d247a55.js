!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,m=Math.min,p=function(){return s.Date.now()};function g(t,e,n){var r,i,u,f,a,c,l=0,s=!1,d=!1,g=!0;if("function"!=typeof t)throw new TypeError(o);function h(e){var n=r,o=i;return r=i=void 0,l=e,f=t.apply(o,n)}function j(t){return l=t,a=setTimeout(T,e),s?h(t):f}function w(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=u}function T(){var t=p();if(w(t))return x(t);a=setTimeout(T,function(t){var n=e-(t-c);return d?m(n,u-(t-l)):n}(t))}function x(t){return a=void 0,g&&r?h(t):(r=i=void 0,f)}function O(){var t=p(),n=w(t);if(r=arguments,i=this,c=t,n){if(void 0===a)return j(c);if(d)return a=setTimeout(T,e),h(c)}return void 0===a&&(a=setTimeout(T,e)),f}return e=b(e)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(b(n.maxWait)||0,e):u,g="trailing"in n?!!n.trailing:g),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},O.flush=function(){return void 0===a?f:x(p())},O}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=u.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),g(t,e,{leading:r,maxWait:e,trailing:i})};const h="massage",j=document.querySelector(".js-form"),w=document.querySelector(".js-form textarea");j.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem(h)})),w.addEventListener("input",t(e)((function(t){const e=t.target.value;localStorage.setItem(h,e)}),300)),function(){const t=localStorage.getItem(h);t&&(w.value=t)}();new Promise(((t,e)=>{t("Good"),e("Error")})).then((t=>"100")).then((t=>200)).then((t=>{})).catch((t=>{})).finally((()=>{}));(t=>Promise.resolve(`All good. Here is your ${t}`))("bread").then((t=>t))}();
//# sourceMappingURL=index.1d247a55.js.map
