!function(){function e(e){return e&&e.__esModule?e.default:e}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=r.parcelRequire4ecc;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,r.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,r){n[e]=r},r.parcelRequire4ecc=a);var c=a("bpxeT"),o=a("2TvXO"),s=a("4V4kH"),i=a("7fB3v"),u=a("6D8LP");function p(){return d.apply(this,arguments)}function d(){return(d=e(c)(e(o).mark((function r(){var t;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.fetchAddedProducts)();case 3:(t=e.sent).length||(u.refs.cartWrapper.innerHTML=(0,i.createMarkupEmptyCart)()),u.refs.cartProductList.innerHTML=(0,i.createMarkupAddedProducts)(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),r,null,[[0,8]])})))).apply(this,arguments)}var l=a("v4drH");i=a("7fB3v"),u=a("6D8LP");c=a("bpxeT"),o=a("2TvXO"),l=a("v4drH"),i=a("7fB3v"),u=a("6D8LP");var f=a("hie1p");function v(){return(v=e(c)(e(o).mark((function r(t){var n,a,c,s;return e(o).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=(0,f.getData)(l.common.CART_KEY),a=t.target.closest(".products__delete")){e.next=4;break}return e.abrupt("return");case 4:c=a.closest(".products__item").dataset.id,s=n.findIndex((function(e){return e===c})),n.splice(s,1),(0,f.saveData)(n,l.common.CART_KEY),p(),n.length||(u.refs.cartWrapper.innerHTML=(0,i.createMarkupEmptyCart)(),localStorage.removeItem(l.common.CART_KEY));case 10:case"end":return e.stop()}}),r)})))).apply(this,arguments)}u=a("6D8LP");p(),u.refs.cartProductList.addEventListener("click",(function(e){return v.apply(this,arguments)})),u.refs.deleteAllProducts.addEventListener("click",(function(){localStorage.removeItem(l.common.CART_KEY),u.refs.cartWrapper.innerHTML=(0,i.createMarkupEmptyCart)()}))}();
//# sourceMappingURL=cart.20003afd.js.map
