function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,f=parseInt,a="object"==typeof n&&n&&n.Object===Object&&n,l="object"==typeof self&&self&&self.Object===Object&&self,c=a||l||Function("return this")(),s=Object.prototype.toString,d=Math.max,g=Math.min,v=function(){return c.Date.now()};function m(e,t,n){var o,r,i,u,f,a,l=0,c=!1,s=!1,m=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,l=t,u=e.apply(i,n)}function h(e){return l=e,f=setTimeout(w,t),c?b(e):u}function j(e){var n=e-a;return void 0===a||n>=t||n<0||s&&e-l>=i}function w(){var e=v();if(j(e))return T(e);f=setTimeout(w,function(e){var n=t-(e-a);return s?g(n,i-(e-l)):n}(e))}function T(e){return f=void 0,m&&o?b(e):(o=r=void 0,u)}function x(){var e=v(),n=j(e);if(o=arguments,r=this,a=e,n){if(void 0===f)return h(a);if(s)return f=setTimeout(w,t),b(a)}return void 0===f&&(f=setTimeout(w,t)),u}return t=y(t)||0,p(n)&&(c=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,m="trailing"in n?!!n.trailing:m),x.cancel=function(){void 0!==f&&clearTimeout(f),l=0,o=a=r=f=void 0},x.flush=function(){return void 0===f?u:T(v())},x}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||u.test(e)?f(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),m(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".js-form"),h=document.querySelector(".js-form textarea");b.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("massage")})),h.addEventListener("input",e(t)((function(e){const t=e.target.value;localStorage.setItem("massage",t)}),300)),function(){const e=localStorage.getItem("massage");e&&(h.value=e)}();new Promise(((e,t)=>{e("Good"),t("Error")})).then((e=>"100")).then((e=>200)).then((e=>{})).catch((e=>{})).finally((()=>{}));(e=>Promise.resolve(`All good. Here is your ${e}`))("bread").then((e=>e));{function j(e){let t=0,n=0,o=-1;for(let o=0;o<e.length;o+=1){for(let t=o+1;t<e.length;t+=1)n+=e[t];if(t===n)return o;n=0,t+=e[o]}return o}console.log(j([1,100,50,-51,1,1])),console.log(j([1,2,3,4,3,2,1])),console.log(j([10,-80,10,10,10,15,35])),console.log(j([1,2,3,4,5,6]))}
//# sourceMappingURL=index.d7f16fcf.js.map