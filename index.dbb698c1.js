!function(){function t(t){return t&&t.__esModule?t.default:t}var e,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,f=/^0o[0-7]+$/i,a=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,s=c||l||Function("return this")(),d=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return s.Date.now()};function m(t,e,n){var r,i,u,f,a,c,l=0,s=!1,d=!1,m=!0;if("function"!=typeof t)throw new TypeError(o);function j(e){var n=r,o=i;return r=i=void 0,l=e,f=t.apply(o,n)}function T(t){return l=t,a=setTimeout(w,e),s?j(t):f}function h(t){var n=t-c;return void 0===c||n>=e||n<0||d&&t-l>=u}function w(){var t=g();if(h(t))return x(t);a=setTimeout(w,function(t){var n=e-(t-c);return d?p(n,u-(t-l)):n}(t))}function x(t){return a=void 0,m&&r?j(t):(r=i=void 0,f)}function O(){var t=g(),n=h(t);if(r=arguments,i=this,c=t,n){if(void 0===a)return T(c);if(d)return a=setTimeout(w,e),j(c)}return void 0===a&&(a=setTimeout(w,e)),f}return e=b(e)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(b(n.maxWait)||0,e):u,m="trailing"in n?!!n.trailing:m),O.cancel=function(){void 0!==a&&clearTimeout(a),l=0,r=c=i=a=void 0},O.flush=function(){return void 0===a?f:x(g())},O}function y(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function b(t){if("number"==typeof t)return t;if(function(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&"[object Symbol]"==d.call(t)}(t))return NaN;if(y(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=y(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(r,"");var n=u.test(t);return n||f.test(t)?a(t.slice(2),n?2:8):i.test(t)?NaN:+t}e=function(t,e,n){var r=!0,i=!0;if("function"!=typeof t)throw new TypeError(o);return y(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),m(t,e,{leading:r,maxWait:e,trailing:i})};const j="massage",T=document.querySelector(".js-form"),h=document.querySelector(".js-form textarea");T.addEventListener("submit",(function(t){t.preventDefault(),t.currentTarget.reset(),localStorage.removeItem(j)})),h.addEventListener("input",t(e)((function(t){const e=t.target.value;localStorage.setItem(j,e)}),300)),function(){const t=localStorage.getItem(j);t&&(h.value=t)}()}();
//# sourceMappingURL=index.dbb698c1.js.map