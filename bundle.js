(()=>{"use strict";var e={431:(e,n,t)=>{t.d(n,{A:()=>x});var a=t(601),r=t.n(a),o=t(314),i=t.n(o),l=t(417),c=t.n(l),d=new URL(t(815),t.b),s=new URL(t(743),t.b),p=new URL(t(600),t.b),u=i()(r()),m=c()(d),h=c()(s),f=c()(p);u.push([e.id,`*,\n::after,\n::before {\n  margin: 0px;\n  padding: 0px;\n  box-sizing: border-box;\n}\n@font-face {\n    font-family: 'musashi';\n    src: url(${m}) format('truetype');\n    font-size: xx-large;\n\n}\n@font-face {\n    font-family: 'samurai';\n    src: url(${h}) format('truetype');\n}\n\n#container{\n    background-image: url(${f});\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n    height: 85vh;\n}\n  \nbody {\n    font-family: 'samurai', sans-serif;\n    font-size: 1.2em;\n}\n\nheader{\n    height: 70px;\n    background-color: #fef6eb;\n    padding: 0px 20px;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.logo{\n    height: 50px;\n    width:50px ;\n    margin-left: 10px;\n}\n\nheader>nav>button{\n    height: 60px;\n    width: 115px;\n    border: 0px;\n    background-color: transparent;\n    font-family: 'samurai', sans-serif;\n    font-size: x-large;\n}\n\nheader>nav>button:hover{\n    text-decoration: underline black;\n    color: #BC002D;\n}\nfooter{\n    height: 5.4vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    background-color: #feaeaf;\n}\nfooter>a{\n    text-decoration: none;\n    color: black;\n}\nfooter>a::before{\n    color: WHITE;\n}\nfooter>a::after{\n    color: WHITE;\n}\nfooter>a:hover{\n    color: #BC002D;\n}\n@media screen and (max-width: 600px){\n    header>nav>button{\n        font-size: 77%;\n        width: 70px;\n\n    }\n}\n`,""]);const x=u},593:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(601),r=t.n(a),o=t(314),i=t.n(o)()(r());i.push([e.id,".us{\n    height: 85vh;\n    padding-top: 50px;\n    background-color: #000000a8;\n    text-align: center;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n.ecriture{\n    width: 85vw;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    cursor:default;\n    \n}\n\n.ecriture> h1{\n    color: #BC002D;\n}\n\n.ecriture > h4{\n    color: #FAEAEA;\n    text-decoration:underline;\n}\n\n@media screen and (max-width:600px) {\n    .ecriture{\n        width: 95vw;\n        overflow-y: auto ;\n    }\n}",""]);const l=i},558:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(601),r=t.n(a),o=t(314),i=t.n(o),l=t(417),c=t.n(l),d=new URL(t(743),t.b),s=i()(r()),p=c()(d);s.push([e.id,`@font-face {\n    font-family: 'samurai';\n    src: url(${p}) format('truetype');\n}\n\n.containe{\n    height: 85vh;\n    padding-top: 50px;\n    background-color: #000000a8;\n    text-align: center;\n    color: white;\n    display: flex;\n    font-family: 'samurai';\n    font-size: x-large;\n}\n\n\nform{\n    background-color: #cbada4e4;\n    height: 500px;\n    width: 500px;\n    padding: 30px;\n    text-align: start;\n    display: flex;\n    flex-direction: column;\n    border-radius: 20px 30px 5px 10px;\n    margin: 0px auto;\n}\n\nform>input{\n    margin-bottom: 15px;\n    width: 300px;\n    height: 70px;\n    border-radius: 10px 5px 10px 5px;\n   padding-left: 3px;\n    font-size: large;\n    margin-left: auto;\n    margin-right: auto;\n\n}\n\nform>textarea{\n    width: 300px;\n    height: auto;\n    resize: none;\n    margin-bottom: 25px;\n    margin-left: auto;\n    margin-right: auto;\n}\n\nform>input[type="submit"] {\n    font-family: 'samurai';\n    height: 70px;\n}\n\nform>input[type="submit"]:hover {\n    background-color: #6c3c0e;\n    color: white;\n}\n\n@media screen and (max-width:600px) {\n\n    form{\n        width: 350px;\n        height: 480px;\n    }\n    \n}`,""]);const u=s},665:(e,n,t)=>{t.d(n,{A:()=>l});var a=t(601),r=t.n(a),o=t(314),i=t.n(o)()(r());i.push([e.id,".mid{\n    height: 85vh;\n    padding-top: 50px;\n    background-color: #000000a8;\n    text-align: center;\n    color: white;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 10px;\n}\n.texte{\n  font-size: 1.4em;\n}\n\n.hr{\n    height: 350px;\n    width: 500px;\n    border: 4px solid pink;\n    border-radius: 40px;\n    margin-top: 30px;\n    padding: 10px;\n\n}\n.hr>ul {\n  margin-top: 20px;\n  margin-left: 20px;\n}\n.hr>ul>li{\n    margin: 15px 30px;\n    text-align:start;\n    list-style:square;\n}\n.hr>ul>h2{\n  color: brown;\n}\n\n@media screen and (max-width: 600px){\n  .mid{\n    gap: 5px;\n  }\n  .texte{\n    font-size: x-large;\n  }\n  .hr{\n    padding-top: 0px;\n    height: 280px;\n    width: 360px;\n    border: 4px solid pink;\n    border-radius: 20px;\n    font-size: medium;\n\n  }\n}",""]);const l=i},437:(e,n,t)=>{t.d(n,{A:()=>u});var a=t(601),r=t.n(a),o=t(314),i=t.n(o),l=t(417),c=t.n(l),d=new URL(t(731),t.b),s=i()(r()),p=c()(d);s.push([e.id,`.cardsContainer{\n    height: 85vh;\n    background-color: #000000a8;\n    text-align: center;\n    color: white;\n    display: flex;\n    font-size: x-small;\n    overflow-x:auto;\n    overflow-anchor:auto;\n    align-items: center;\n\n    scrollbar-color: #feaeaf #0000004a;\n\n}\n\n.text{\n    width: 250px;\n    font-size: large;\n    \n}\n.card{\n    width: 500px;\n    height: 250px;\n    padding: 10px;\n    margin: 0px 0px 0px 20px;\n    background-color: #fafafab1;\n    display: flex;\n    align-items: center;\n    border: 2px solid #BC002D;\n    border-radius: 10px;\n    text-align: start;\n    background-image: url(${p});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n\n}\n\n.card>.text>h2{\n    text-align: center;\n    color :#BC002D;\n}\n\n.card>.text>p{\n    color: #FFF\n}\n\n.card:hover{\n    box-shadow: 0px 0px 20px #BC002D;\n}\n\n\n@media screen and (max-width: 600px){\n    .cardsContainer{\n        flex-direction: column;\n        \n    }\n    .card{\n        width: 350px;\n        height: 400px;\n        margin: 20px 0px 10px 0px;\n        padding: 15px;\n        gap: 5px;\n    }\n    .card > .image>img{\n        width: 175px;\n    }\n}`,""]);const u=s},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",a=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),a&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),a&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,a,r,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(a)for(var l=0;l<this.length;l++){var c=this[l][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var s=[].concat(e[d]);a&&i[s[0]]||(void 0!==o&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=o),t&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=t):s[2]=t),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),n.push(s))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,a=0;a<n.length;a++)if(n[a].identifier===e){t=a;break}return t}function a(e,a){for(var o={},i=[],l=0;l<e.length;l++){var c=e[l],d=a.base?c[0]+a.base:c[0],s=o[d]||0,p="".concat(d," ").concat(s);o[d]=s+1;var u=t(p),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=r(m,a);a.byIndex=l,n.splice(l,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function r(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,r){var o=a(e=e||[],r=r||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var l=t(o[i]);n[l].references--}for(var c=a(e,r),d=0;d<o.length;d++){var s=t(o[d]);0===n[s].references&&(n[s].updater(),n.splice(s,1))}o=c}}},659:e=>{var n={};e.exports=function(e,t){var a=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(a,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},815:(e,n,t)=>{e.exports=t.p+"fonts/MUSASHI.ttf"},743:(e,n,t)=>{e.exports=t.p+"fonts/SamuraiBlast.woff"},731:(e,n,t)=>{e.exports=t.p+"7b2f02650e4920fa28c1.jpg"},600:(e,n,t)=>{e.exports=t.p+"4cf65feb6b2484a05d2b.jpg"}},n={};function t(a){var r=n[a];if(void 0!==r)return r.exports;var o=n[a]={id:a,exports:{}};return e[a](o,o.exports,t),o.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var a in n)t.o(n,a)&&!t.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:n[a]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var a=n.getElementsByTagName("script");if(a.length)for(var r=a.length-1;r>-1&&(!e||!/^http(s?):/.test(e));)e=a[r--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0;var a=t(72),r=t.n(a),o=t(825),i=t.n(o),l=t(659),c=t.n(l),d=t(56),s=t.n(d),p=t(540),u=t.n(p),m=t(113),h=t.n(m),f=t(558),x={};x.styleTagTransform=h(),x.setAttributes=s(),x.insert=c().bind(null,"head"),x.domAPI=i(),x.insertStyleElement=u(),r()(f.A,x),f.A&&f.A.locals&&f.A.locals;var g=t(665),v={};function b(e){let n=document.createElement("div");n.classList.add("mid");let t=document.createElement("div");t.classList.add("texte");let a=document.createElement("h2");a.textContent="Bienvenue Chez Le Grand";let r=document.createElement("h1");r.style.color="#BC002D",r.textContent="DAWASUSHI";let o=document.createElement("p");o.textContent="restuarant spécialisé dans la gastronomie japonaise",t.appendChild(a),t.appendChild(r),t.appendChild(o);let i=document.createElement("div");i.classList.add("hr");let l=document.createElement("ul"),c=document.createElement("h2");c.textContent="Horaire d'ouverture",l.appendChild(c);let d=document.createElement("li");d.textContent="Lundi 12H00 - 22H00",l.appendChild(d);let s=document.createElement("li");s.textContent="Mardi 12H00 - 22H00",l.appendChild(s);let p=document.createElement("li");p.textContent="Mecredi 12H00 - 22H00",l.appendChild(p);let u=document.createElement("li");u.textContent="Jeudi 12H00 - 22H00",l.appendChild(u);let m=document.createElement("li");m.textContent="Vendredi 12H00 - 22H00",l.appendChild(m);let h=document.createElement("li");h.textContent="Samedi 12H00 - 23H30",l.appendChild(h);let f=document.createElement("li");f.textContent="Dimanche 12H00 - 23H30",l.appendChild(f),i.appendChild(l),n.appendChild(t),n.appendChild(i),e.appendChild(n)}v.styleTagTransform=h(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=u(),r()(g.A,v),g.A&&g.A.locals&&g.A.locals;var C=t(593),y={};y.styleTagTransform=h(),y.setAttributes=s(),y.insert=c().bind(null,"head"),y.domAPI=i(),y.insertStyleElement=u(),r()(C.A,y),C.A&&C.A.locals&&C.A.locals;var E=t(437),w={};w.styleTagTransform=h(),w.setAttributes=s(),w.insert=c().bind(null,"head"),w.domAPI=i(),w.insertStyleElement=u(),r()(E.A,w),E.A&&E.A.locals&&E.A.locals;const A=JSON.parse('[{"nomPlat":"Edamame","descriptionPlat":"Fèves de soja légèrement salées, servies dans leur cosse. Une entrée simple et saine."},{"nomPlat":"Tempura de Crevettes","descriptionPlat":"Crevettes croustillantes enrobées d\'une pâte légère, servies avec une sauce tempura maison."},{"nomPlat":"Gyoza","descriptionPlat":"Raviolis japonais grillés et farcis au porc, accompagnés d\'une sauce soja piquante."},{"nomPlat":"Sushi Assorti","descriptionPlat":"Sélection de nigiri et maki préparés avec du poisson frais de la journée, servi avec du gingembre mariné et du wasabi."},{"nomPlat":"Sashimi de Thon Rouge","descriptionPlat":"Tranches de thon rouge ultra-frais, servies avec une sauce soja et du wasabi."},{"nomPlat":"Ramen Tonkotsu","descriptionPlat":"Bouillon riche et crémeux à base d\'os de porc, servi avec des nouilles ramen, des tranches de porc, un œuf mollet, des champignons et des oignons verts."},{"nomPlat":"Unagi Don","descriptionPlat":"Anguille grillée nappée de sauce teriyaki, servie sur un lit de riz blanc moelleux.","imagePlat":""},{"nomPlat":"Onigiri","descriptionPlat":"Boulettes de riz farcies au saumon ou à l\'umeboshi (prune salée), enveloppées d\'algues nori."},{"nomPlat":"Miso Soup","descriptionPlat":"Soupe traditionnelle à base de pâte de miso, avec des morceaux de tofu et des algues."},{"nomPlat":"Dorayaki","descriptionPlat":"Pancakes japonais garnis de pâte de haricots rouges sucrée."},{"nomPlat":"Mochi","descriptionPlat":"Gâteaux de riz gluant farcis à la pâte de haricots rouges sucrée ou à la crème glacée."},{"nomPlat":"Matcha Ice Cream","descriptionPlat":"Crème glacée onctueuse parfumée au thé vert matcha, servie avec un biscuit croquant."}]'),P=[t.p+"41e634059e73baa51b0f.png",t.p+"054a154bbe159819ca4a.jpg",t.p+"f2e4817edb521866fb9e.jpg",t.p+"74d46a71abcdd487d6d9.jpg",t.p+"884eaf0d9b2581c21801.jpg",t.p+"48a8df9db9347fcbc4b4.jpeg",t.p+"d12fc135bf958850a033.jpg",t.p+"8684a2d66e9182141961.jpg",t.p+"8da4c0dc387f392c4c0c.jpg",t.p+"60e33c4ff2c7ff8ff36d.jpg",t.p+"cbf242a161f7f51652e6.jpg",t.p+"ca3de454b03b6c2797d0.jpg"];var j=t(431),S={};S.styleTagTransform=h(),S.setAttributes=s(),S.insert=c().bind(null,"head"),S.domAPI=i(),S.insertStyleElement=u(),r()(j.A,S),j.A&&j.A.locals&&j.A.locals;const T=t.p+"5f3f0ec1a876c5e24287.png",k=document.querySelectorAll("button"),H=document.querySelector("#container"),z=document.createElement("img");z.src=T,z.width=50,z.height=50,document.querySelector(".logo").appendChild(z),b(H),k.forEach((e=>{e.addEventListener("click",(()=>{H.innerHTML="","Home"==e.className?b(H):"Contact"==e.className?function(e){let n=document.createElement("div");n.classList.add("containe");let t=document.createElement("form"),a=document.createElement("label");a.setAttribute("for","lastName"),a.textContent="Nom :";let r=document.createElement("input");r.type="text",r.name="lastName",r.id="lastName",r.placeholder="nom";let o=document.createElement("label");o.setAttribute("for","Name"),o.textContent="Prenom :";let i=document.createElement("input");i.type="text",i.name="Name",i.id="Name",i.placeholder="prenom";let l=document.createElement("label");l.setAttribute("for","numTel"),l.textContent="Num Telephone : ";let c=document.createElement("input");c.type="tel",c.name="numTel",c.id="lnumTel",c.placeholder="+213 5 - - - -";let d=document.createElement("label");d.setAttribute("for","email"),d.textContent="Email :";let s=document.createElement("input");s.type="email",s.id="email",s.placeholder="exmple@email.com";let p=document.createElement("label");p.setAttribute("for","text"),p.textContent="Votre texte : ";let u=document.createElement("textarea");u.name="text",u.id="text",u.rows=5,u.placeholder="Avis / commentaire ...";let m=document.createElement("input");m.type="submit",m.value="Envoyer",document.createElement("div").classList.add("ban"),document.createElement("div").classList.add("ban"),t.appendChild(a),t.appendChild(r),t.appendChild(o),t.appendChild(i),t.appendChild(l),t.appendChild(c),t.appendChild(d),t.appendChild(s),t.appendChild(p),t.appendChild(u),t.appendChild(m),n.appendChild(t),e.appendChild(n)}(H):"About"==e.className?function(e){let n=document.createElement("div");n.classList.add("us");let t=document.createElement("div");t.classList.add("ecriture");let a=document.createElement("h1");a.textContent="C'est qui DAWASUSHI ?";let r=document.createElement("p");r.textContent="Dawasushi incarne l'essence de la gastronomie japonaise authentique. \n                Niché au cœur de la ville, notre restaurant est un sanctuaire où l'art du sushi et les saveurs japonaises\n                se rencontrent avec passion et précision. Chaque plat est une ode à la tradition, préparé par nos chefs talentueux\n                qui maîtrisent les techniques séculaires tout en explorant de nouvelles saveurs modernes. ";let o=document.createElement("p");o.textContent="Nous nous engageons fermement envers la qualité, \n                    en sélectionnant soigneusement les meilleurs ingrédients. Chaque poisson frais,\n                    chaque légume croquant est choisi avec attention pour garantir une expérience gustative inoubliable à chaque visite.";let i=document.createElement("p");i.textContent="Bienvenue chez Dawasushi, où chaque repas devient une célébration de la richesse culinaire du Japon.\n                    Venez savourer une expérience authentique dans une ambiance accueillante où chaque détail est pensé pour \n                    vous offrir une immersion complète dans la cuisine japonaise.";let l=document.createElement("p");l.textContent="Ne tardez plus et reservez une place au sein de notre reataurant a l'adresse suivente : ";let c=document.createElement("h2");c.textContent="Rue des freres tifaoui, Dawadji, Bejaia, 06000 ";let d=document.createElement("h4");d.textContent="DAWASUSHI = dawadji + sushi",t.appendChild(a),t.appendChild(r),t.appendChild(o),t.appendChild(i),t.appendChild(l),t.appendChild(c),t.appendChild(d),n.appendChild(t),e.appendChild(n)}(H):"Menu"==e.className&&function(e){let n=0,t=document.createElement("div");t.classList.add("cardsContainer"),A.forEach((e=>{t.appendChild(function(e,n){let t=document.createElement("div");t.classList.add("card");let a=document.createElement("div");a.classList.add("text");let r=document.createElement("h2");r.textContent=e.nomPlat;let o=document.createElement("p");o.textContent=e.descriptionPlat;let i=document.createElement("img");i.src=P[n],i.title=e.nomPlat,i.width=250,i.height=200;let l=document.createElement("div");return l.classList.add("image"),a.appendChild(r),a.appendChild(o),l.appendChild(i),t.appendChild(a),t.appendChild(l),t}(e,n)),n++})),e.appendChild(t)}(H)}))}))})();