function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,f="object"==typeof self&&self&&self.Object===Object&&self,c=u||f||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return c.Date.now()};function h(e,t,n){var o,r,i,a,l,u,f=0,c=!1,s=!1,h=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,i=r;return o=r=void 0,f=t,a=e.apply(i,n)}function b(e){return f=e,l=setTimeout(j,t),c?y(e):a}function $(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-f>=i}function j(){var e=v();if($(e))return x(e);l=setTimeout(j,function(e){var n=t-(e-u);return s?g(n,i-(e-f)):n}(e))}function x(e){return l=void 0,h&&o?y(e):(o=r=void 0,a)}function w(){var e=v(),n=$(e);if(o=arguments,r=this,u=e,n){if(void 0===l)return b(u);if(s)return l=setTimeout(j,t),y(u)}return void 0===l&&(l=setTimeout(j,t)),a}return t=p(t)||0,m(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(p(n.maxWait)||0,t):i,h="trailing"in n?!!n.trailing:h),w.cancel=function(){void 0!==l&&clearTimeout(l),f=0,o=u=r=l=void 0},w.flush=function(){return void 0===l?a:x(v())},w}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||a.test(e)?l(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),h(e,t,{leading:o,maxWait:t,trailing:r})};const y=document.querySelector(".js-form"),b=document.querySelector(".js-form textarea");y.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("massage")})),b.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("massage",t)}),300)),function(){const e=localStorage.getItem("massage");e&&(b.value=e)}();new Promise(((e,t)=>{e("Good"),t("Error")})).then((e=>"100")).then((e=>200)).then((e=>{})).catch((e=>{})).finally((()=>{}));(e=>Promise.resolve(`All good. Here is your ${e}`))("bread").then((e=>e));{function $(e){let t="";return 0===e.length?t="no one likes this":1===e.length?t=`${e[0]} likes this`:2===e.length?t=`${e[0]} and ${e[1]} like this`:3===e.length?t=`${e[0]}, ${e[1]} and ${e[2]} like this`:e.length>3&&(t=`${e[0]}, ${e[1]} and ${e.length-2} others like this`),t}console.log($([])),console.log($(["Peter"])),console.log($(["Jacob","Alex"])),console.log($(["Max","John","Mark"])),console.log($(["Alex","Jacob","Mark","Max"]))}
//# sourceMappingURL=index.8b578210.js.map
