!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},o=t.parcelRequire4ecc;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},t.parcelRequire4ecc=o);var a=o("bpxeT"),c=o("2TvXO"),s=o("4V4kH"),i=o("7fB3v"),u=o("6D8LP");function d(){return l.apply(this,arguments)}function l(){return(l=e(a)(e(c).mark((function t(){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.fetchAddedProducts)();case 3:r=e.sent,u.refs.cartProductList.innerHTML=(0,i.createMarkupAddedProducts)(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.message);case 10:case"end":return e.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}a=o("bpxeT"),c=o("2TvXO");var f=o("v4drH"),p=o("hie1p");function v(){return(v=e(a)(e(c).mark((function t(r){var n,o,a,s;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,p.getData)(f.common.CART_KEY),o=r.target.closest(".products__delete")){e.next=4;break}return e.abrupt("return");case 4:a=o.closest(".products__item").dataset.id,s=n.findIndex((function(e){return e===a})),n.splice(s,1),(0,p.saveData)(n,f.common.CART_KEY),d(),n.length||localStorage.removeItem(f.common.CART_KEY);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}u=o("6D8LP");d(),u.refs.cartProductList.addEventListener("click",(function(e){return v.apply(this,arguments)}))}();
//# sourceMappingURL=cart.6fe56ced.js.map
