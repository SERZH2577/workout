function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,i=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,u="object"==typeof self&&self&&self.Object===Object&&self,l=f||u||Function("return this")(),s=Object.prototype.toString,d=Math.max,x=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var o,r,a,i,c,f,u=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,a=r;return o=r=void 0,u=t,i=e.apply(a,n)}function y(e){return u=e,c=setTimeout(j,t),l?b(e):i}function h(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-u>=a}function j(){var e=g();if(h(e))return w(e);c=setTimeout(j,function(e){var n=t-(e-f);return s?x(n,a-(e-u)):n}(e))}function w(e){return c=void 0,v&&o?b(e):(o=r=void 0,i)}function T(){var e=g(),n=h(e);if(o=arguments,r=this,f=e,n){if(void 0===c)return y(f);if(s)return c=setTimeout(j,t),b(f)}return void 0===c&&(c=setTimeout(j,t)),i}return t=p(t)||0,m(n)&&(l=!!n.leading,a=(s="maxWait"in n)?d(p(n.maxWait)||0,t):a,v="trailing"in n?!!n.trailing:v),T.cancel=function(){void 0!==c&&clearTimeout(c),u=0,o=f=r=c=void 0},T.flush=function(){return void 0===c?i:w(g())},T}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||i.test(e)?c(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),v(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".js-form"),y=document.querySelector(".js-form textarea");b.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("massage")})),y.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("massage",t)}),300)),function(){const e=localStorage.getItem("massage");e&&(y.value=e)}();new Promise(((e,t)=>{e("Good"),t("Error")})).then((e=>"100")).then((e=>200)).then((e=>{})).catch((e=>{})).finally((()=>{}));(e=>Promise.resolve(`All good. Here is your ${e}`))("bread").then((e=>e));{const e=[0xa3c8574e027a28,0xa3c8574e027970,0xa3c8574e028c58,0xa3c8574e03d250,0xa3c8574e03d0c0,0xa3c8574e029cc0,0xa3c8574e015bf8,0xa3c8574e03fb88,0xa3c8574e03cd78,0xa3c8574e03e1c8,0xa3c8574e03dea8,0xa3c8574e03d7e8,0xa3c8574e03dfd0,0xa3c8574e017070,0xa3c8574e01a198,0xa3c8574e03ef20,0xa3c8574e0309a0,0xa3c8574e0334e8,0xa3c8574e0417d0,0xa3c8574e032cb8,0xa3c8574e032ba8,0xa3c8574e026728,0xa3c8574e03a970,0xa3c8574e038fe8,0xa3c8574e024be0,0xa3c8574e0308d0,0xa3c8574e031378,0xa3c8574e03e980,0xa3c8574e03c480];console.log(function(e){let t=0;for(let n=0;n<e.length;n+=1){t+=1;for(let t=n+1;t<e.length;t+=1)if(e[n]===e[t])return`есть повтор ${e[n]}`}return`Повторов нет. Всего ${t} уникальных номеров.`}(e))}
//# sourceMappingURL=index.dbc95a41.js.map
