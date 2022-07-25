(function(){"use strict";var e={924:function(e,t,r){var a=r(963),o=r(252);const i={class:"button"};function n(e,t,r,a,n,s){return(0,o.wg)(),(0,o.iD)("button",i,[(0,o.WI)(e.$slots,"default")])}var s={name:"my-button"},c=r(744);const l=(0,c.Z)(s,[["render",n]]);var d=l;function u(e,t,r,i,n,s){return r.show?((0,o.wg)(),(0,o.iD)("div",{key:0,class:"modal",onClick:t[2]||(t[2]=(0,a.iM)(((...e)=>s.hideModal&&s.hideModal(...e)),["stop"])),onKeydown:t[3]||(t[3]=(0,a.iM)(((...e)=>s.hideModal&&s.hideModal(...e)),["stop"]))},[(0,o._)("div",{onClick:t[0]||(t[0]=(0,a.iM)((()=>{}),["stop"])),onKeydown:t[1]||(t[1]=(0,a.iM)((()=>{}),["stop"])),class:"modal-content"},[(0,o.WI)(e.$slots,"default")],32)],32)):(0,o.kq)("",!0)}var p={name:"my-modal",props:{show:{type:Boolean,default:!1}},methods:{hideModal(){this.$emit("update:show",!1)}}};const m=(0,c.Z)(p,[["render",u]]);var f=m,v=[d,f],h=r(577);const k={class:"app"},b={class:"header"},g={class:"header-container wrapper"},w=(0,o.Uk)("Открыть форму для создания товара"),_=(0,o._)("h2",{class:"title"},"Добавление товара",-1),C={class:"select-wrapper"},y={class:"main wrapper"},A={class:"form-wrapper"};function M(e,t,r,a,i,n){const s=(0,o.up)("my-button"),c=(0,o.up)("my-select"),l=(0,o.up)("card-form"),d=(0,o.up)("my-modal"),u=(0,o.up)("card-list");return(0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("header",b,[(0,o._)("div",g,[(0,o._)("div",{class:(0,h.C_)(["modal-button",{"modal-hidden":i.modalVisible}])},[(0,o.Wm)(s,{onClick:n.showModal,class:"modal-button__item"},{default:(0,o.w5)((()=>[w])),_:1},8,["onClick"])],2),_,(0,o._)("div",C,[(0,o.Wm)(c,{selectedSort:i.selectedSort,options:i.sortOptions,onSelect:n.changeSelect},null,8,["selectedSort","options","onSelect"])])])]),(0,o._)("main",y,[(0,o.Wm)(d,{show:i.modalVisible,"onUpdate:show":t[0]||(t[0]=e=>i.modalVisible=e)},{default:(0,o.w5)((()=>[(0,o.Wm)(l,{onCreate:n.createCard},null,8,["onCreate"])])),_:1},8,["show"]),(0,o._)("div",A,[(0,o.Wm)(l,{onCreate:n.createCard},null,8,["onCreate"])]),(0,o.Wm)(u,{cards:n.sortedPosts,onRemove:n.removeCard},null,8,["cards","onRemove"])])])}function D(e){return e.match(/http/)||e.match(/data/)?e:"https://tehnobzor.ru/wp-content/uploads/2020/12/apple-macbook-pro-13-m1-1.jpg"}var $=D;const B=[{id:1,title:"Ноутбук Asus B551LA-CN071G",desk:"Превосходно совладает и с офисными, и с мультимедийными приложениями, его явное предназначение - корпоративный сектор. Дисплей с диагональю 15,6 дюйма импонирует естественными и яркими цветами, четкой и неутомительной FHD-графикой. Основу комплектации модели образует двухъядерник Intel Core i7-4558U, органично дополненный 8 Гб оперативки",link:"https://www.pxel.ru/images/products/c987b69c17146c215bf655d59b4592aa.jpg",price:"54611"},{id:2,title:"HUAWEI MateBook D 16",desk:"HUAWEI MateBook D 16 — это 16,1-дюймовый ультратонкий ноутбук с безрамочным экраном и процессором AMD Ryzen. Качественный легкий ноутбук с металлическим корпусом определенно стоит того, чтобы обратить на него внимание. MateBook D 16 оснащен LCD IPS-экраном с разрешением 1920×1080, поддержкой цветовой гаммы sRGB 100% (типичное значение) и яркостью 300 нит (типичное значение). Впечатляющий список характеристик дополняют полезная площадь экрана 90% и скрываемая HD-камера 720p. Ноутбук поддерживает технологию Huawei Share. MateBook D 16 с поддержкой официальных программ Microsoft Office и видео в формате 4K станет вашим умным ассистентом как в работе, так и в развлечениях.",link:"https://mobile-review.com/news/wp-content/uploads/HUAWEI-MateBook-D16.jpg",price:"47999"},{id:3,title:"Ультрабук Honor MagicBook 16.1",desk:"Мощный ноутбук Honor MagicBook – это поразительная производительность. Благодаря шестиядерному процессору AMD Ryzen 5 5600H и интегрированной видеокарте AMD Radeon устройство подходит для 3D-рендеринга и монтажа видеороликов.",link:"https://c.dns-shop.ru/thumb/st1/fit/300/300/fc283a380d3486a2b8f65038d50be08a/f9953e222bbf5fcf015abf05acf35894359aaa4796414595ed332ea81e7d1d75.png",price:"89990 "},{id:4,title:"Ноутбук Acer Aspire 3 A315-23-R8WC",desk:"Если вы много времени проводите в социальных сетях или работаете удалено, то тогда вам просто необходим ноутбук ACER Aspire 3 A315-23-R8WC. Данная модель многофункциональна, практична, эргономична, а мощный процессор AMD Ryzen 5 3500U обеспечит вам высокую производительность. 256 Гб памяти хватит, чтобы устанавливать приложения и хранить личные файлы.",link:"https://cdn1.ozone.ru/s3/multimedia-e/c1200/6031291754.jpg",price:"39990"},{id:5,title:"Ноутбук Acer Nitro 5 AN515-57-51GK",desk:"Шикарные технические характеристики.Отличное качество сборки, пластик крепкий, нигде ничего не гнется.Охлаждение. 2 вентилятора отрабатывает как надо, при игре в Cyberpunk 2077 и Crusis 3 Remastered температура процессора поднималась максимум до 89, видеокарты до 72 градусов, настройки графики — ультра. Также вы можете настраивать работу вентиляторов самостоятельно через приложение NitroSense, имеется режим СoolBoost, который повышает максимальную скорость работы вентиляторов при высоких нагрузках.",link:"https://cdn.kns.ru/linkpics/acer-nitro-5-an515-57-55uk-0-v1.jpg",price:"97990"},{id:6,title:"Ноутбук Asus B551LA-CN071G",desk:"Превосходно совладает и с офисными, и с мультимедийными приложениями, его явное предназначение - корпоративный сектор. Дисплей с диагональю 15,6 дюйма импонирует естественными и яркими цветами, четкой и неутомительной FHD-графикой. Основу комплектации модели образует двухъядерник Intel Core i7-4558U, органично дополненный 8 Гб оперативки",link:"https://www.pxel.ru/images/products/c987b69c17146c215bf655d59b4592aa.jpg",price:"54611"},{id:7,title:"HUAWEI MateBook D 16",desk:"HUAWEI MateBook D 16 — это 16,1-дюймовый ультратонкий ноутбук с безрамочным экраном и процессором AMD Ryzen. Качественный легкий ноутбук с металлическим корпусом определенно стоит того, чтобы обратить на него внимание. MateBook D 16 оснащен LCD IPS-экраном с разрешением 1920×1080, поддержкой цветовой гаммы sRGB 100% (типичное значение) и яркостью 300 нит (типичное значение). Впечатляющий список характеристик дополняют полезная площадь экрана 90% и скрываемая HD-камера 720p. Ноутбук поддерживает технологию Huawei Share. MateBook D 16 с поддержкой официальных программ Microsoft Office и видео в формате 4K станет вашим умным ассистентом как в работе, так и в развлечениях.",link:"https://mobile-review.com/news/wp-content/uploads/HUAWEI-MateBook-D16.jpg",price:"47999"},{id:8,title:"Ультрабук Honor MagicBook 16.1",desk:"Мощный ноутбук Honor MagicBook – это поразительная производительность. Благодаря шестиядерному процессору AMD Ryzen 5 5600H и интегрированной видеокарте AMD Radeon устройство подходит для 3D-рендеринга и монтажа видеороликов.",link:"https://c.dns-shop.ru/thumb/st1/fit/300/300/fc283a380d3486a2b8f65038d50be08a/f9953e222bbf5fcf015abf05acf35894359aaa4796414595ed332ea81e7d1d75.png",price:"89990 "},{id:9,title:"Ноутбук Acer Aspire 3 A315-23-R8WC",desk:"Если вы много времени проводите в социальных сетях или работаете удалено, то тогда вам просто необходим ноутбук ACER Aspire 3 A315-23-R8WC. Данная модель многофункциональна, практична, эргономична, а мощный процессор AMD Ryzen 5 3500U обеспечит вам высокую производительность. 256 Гб памяти хватит, чтобы устанавливать приложения и хранить личные файлы.",link:"https://cdn1.ozone.ru/s3/multimedia-e/c1200/6031291754.jpg",price:"39990"},{id:10,title:"Ноутбук Acer Nitro 5 AN515-57-51GK",desk:"Шикарные технические характеристики.Отличное качество сборки, пластик крепкий, нигде ничего не гнется.Охлаждение. 2 вентилятора отрабатывает как надо, при игре в Cyberpunk 2077 и Crusis 3 Remastered температура процессора поднималась максимум до 89, видеокарты до 72 градусов, настройки графики — ультра. Также вы можете настраивать работу вентиляторов самостоятельно через приложение NitroSense, имеется режим СoolBoost, который повышает максимальную скорость работы вентиляторов при высоких нагрузках.",link:"https://cdn.kns.ru/linkpics/acer-nitro-5-an515-57-55uk-0-v1.jpg",price:"97990"},{id:11,title:"Ноутбук Asus B551LA-CN071G",desk:"Превосходно совладает и с офисными, и с мультимедийными приложениями, его явное предназначение - корпоративный сектор. Дисплей с диагональю 15,6 дюйма импонирует естественными и яркими цветами, четкой и неутомительной FHD-графикой. Основу комплектации модели образует двухъядерник Intel Core i7-4558U, органично дополненный 8 Гб оперативки",link:"https://www.pxel.ru/images/products/c987b69c17146c215bf655d59b4592aa.jpg",price:"54611"},{id:12,title:"HUAWEI MateBook D 16",desk:"HUAWEI MateBook D 16 — это 16,1-дюймовый ультратонкий ноутбук с безрамочным экраном и процессором AMD Ryzen. Качественный легкий ноутбук с металлическим корпусом определенно стоит того, чтобы обратить на него внимание. MateBook D 16 оснащен LCD IPS-экраном с разрешением 1920×1080, поддержкой цветовой гаммы sRGB 100% (типичное значение) и яркостью 300 нит (типичное значение). Впечатляющий список характеристик дополняют полезная площадь экрана 90% и скрываемая HD-камера 720p. Ноутбук поддерживает технологию Huawei Share. MateBook D 16 с поддержкой официальных программ Microsoft Office и видео в формате 4K станет вашим умным ассистентом как в работе, так и в развлечениях.",link:"https://mobile-review.com/news/wp-content/uploads/HUAWEI-MateBook-D16.jpg",price:"47999"},{id:13,title:"Ультрабук Honor MagicBook 16.1",desk:"Мощный ноутбук Honor MagicBook – это поразительная производительность. Благодаря шестиядерному процессору AMD Ryzen 5 5600H и интегрированной видеокарте AMD Radeon устройство подходит для 3D-рендеринга и монтажа видеороликов.",link:"https://c.dns-shop.ru/thumb/st1/fit/300/300/fc283a380d3486a2b8f65038d50be08a/f9953e222bbf5fcf015abf05acf35894359aaa4796414595ed332ea81e7d1d75.png",price:"89990 "},{id:14,title:"Ноутбук Acer Aspire 3 A315-23-R8WC",desk:"Если вы много времени проводите в социальных сетях или работаете удалено, то тогда вам просто необходим ноутбук ACER Aspire 3 A315-23-R8WC. Данная модель многофункциональна, практична, эргономична, а мощный процессор AMD Ryzen 5 3500U обеспечит вам высокую производительность. 256 Гб памяти хватит, чтобы устанавливать приложения и хранить личные файлы.",link:"https://cdn1.ozone.ru/s3/multimedia-e/c1200/6031291754.jpg",price:"39990"},{id:15,title:"Ноутбук Acer Nitro 5 AN515-57-51GK",desk:"Шикарные технические характеристики.Отличное качество сборки, пластик крепкий, нигде ничего не гнется.Охлаждение. 2 вентилятора отрабатывает как надо, при игре в Cyberpunk 2077 и Crusis 3 Remastered температура процессора поднималась максимум до 89, видеокарты до 72 градусов, настройки графики — ультра. Также вы можете настраивать работу вентиляторов самостоятельно через приложение NitroSense, имеется режим СoolBoost, который повышает максимальную скорость работы вентиляторов при высоких нагрузках.",link:"https://cdn.kns.ru/linkpics/acer-nitro-5-an515-57-55uk-0-v1.jpg",price:"97990"}];var S=B;const H=[{value:"default",name:"По умолчанию"},{value:"min",name:"По цене min"},{value:"max",name:"По цене max"},{value:"name",name:"По наименованию"}];var R=H;function W(e,t){switch(t){case"default":return[...e];case"name":return[...e].sort(((e,t)=>{const r=e.title.toLowerCase(),a=t.title.toLowerCase();return r<a?-1:r>a?1:0}));case"min":return[...e].sort(((e,t)=>e.price-t.price));case"max":return[...e].sort(((e,t)=>t.price-e.price));default:return[...e]}}var j=W;const U={for:"select"},I=["value"],O=["value"];function z(e,t,r,a,i,n){return(0,o.wg)(),(0,o.iD)("label",U,[(0,o._)("select",{class:"select",id:"select",onChange:t[0]||(t[0]=(...e)=>n.changeOption&&n.changeOption(...e)),value:r.selectedSort},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.options,(e=>((0,o.wg)(),(0,o.iD)("option",{class:"select__option",key:e.value,value:e.value},(0,h.zw)(e.name),9,O)))),128))],40,I)])}var x={props:{selectedSort:{type:String,default:"default"},options:{type:Array,default:()=>[]}},methods:{changeOption(e){this.$emit("select",e.target.value)}}};const K=(0,c.Z)(x,[["render",z]]);var E=K;const N={class:"field"},V={class:"form-label",for:"form-name"},q=(0,o._)("span",null,"Наименование товара",-1),G={class:"input-error__msg"},L={class:"field"},P={class:"form-label",for:"form-about"},Z=(0,o.Uk)(" Описание товара "),F={class:"field"},Y={class:"form-label",for:"form-link"},J=(0,o._)("span",null,"Ссылка на изображение товара",-1),T={class:"input-error__msg"},Q={class:"field"},X={class:"form-label",for:"form-price"},ee=(0,o._)("span",null,"Цена товара",-1),te={class:"input-error__msg"},re=(0,o.Uk)(" Добавить товар ");function ae(e,t,r,i,n,s){const c=(0,o.up)("my-button");return(0,o.wg)(),(0,o.iD)("form",{class:"form",onSubmit:t[4]||(t[4]=(0,a.iM)((()=>{}),["prevent"]))},[(0,o._)("div",N,[(0,o._)("label",V,[q,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[0]||(t[0]=e=>i.v$.card.name.$model=e),class:(0,h.C_)([{"input-required":i.v$.card.name.$errors.length},"form-label__input"]),type:"text",id:"form-name",placeholder:"Введите наименование товара"},null,2),[[a.nr,i.v$.card.name.$model]]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.v$.card.name.$errors,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"input-error",key:t},[(0,o._)("div",G,(0,h.zw)(e.$message),1)])))),128))])]),(0,o._)("div",L,[(0,o._)("label",P,[Z,(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":t[1]||(t[1]=e=>n.card.about=e),class:"form-label__input textarea",type:"text",id:"form-about",placeholder:"Введите описание товара"},null,512),[[a.nr,n.card.about]])])]),(0,o._)("div",F,[(0,o._)("label",Y,[J,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[2]||(t[2]=e=>i.v$.card.link.$model=e),class:(0,h.C_)([{"input-required":i.v$.card.link.$errors.length},"form-label__input"]),type:"text",id:"form-link",placeholder:"Введите ссылку"},null,2),[[a.nr,i.v$.card.link.$model]]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.v$.card.link.$errors,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"input-error",key:t},[(0,o._)("div",T,(0,h.zw)(e.$message),1)])))),128))])]),(0,o._)("div",Q,[(0,o._)("label",X,[ee,(0,o.wy)((0,o._)("input",{"onUpdate:modelValue":t[3]||(t[3]=e=>i.v$.card.price.$model=e),class:(0,h.C_)([{"input-required":i.v$.card.price.$errors.length},"form-label__input"]),type:"number",id:"form-price",placeholder:"Введите цену"},null,2),[[a.nr,i.v$.card.price.$model]]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(i.v$.card.price.$errors,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"input-error",key:t},[(0,o._)("div",te,(0,h.zw)(e.$message),1)])))),128))])]),(0,o.Wm)(c,{disabled:i.v$.card.$invalid,class:(0,h.C_)([{"button-disabled":i.v$.card.$invalid},"form-button"]),onClick:s.createCard,type:"submit"},{default:(0,o.w5)((()=>[re])),_:1},8,["disabled","class","onClick"])],32)}var oe=r(28),ie=r(587),ne={setup(){return{v$:(0,oe.ZP)()}},data(){return{card:{name:"",about:"",link:"",price:null}}},validations(){return{card:{name:{required:ie.BM.withMessage("Поле является обязательным",ie.C1)},link:{required:ie.BM.withMessage("Поле является обязательным",ie.C1)},price:{required:ie.BM.withMessage("Поле является обязательным",ie.C1)}}}},methods:{createCard(){this.card.id=Date.now(),this.$emit("create",this.card),this.card={name:"",about:"",link:"",price:null}}}};const se=(0,c.Z)(ne,[["render",ae]]);var ce=se;const le={key:0,class:"card-list"},de={key:1,class:"card-list"},ue=(0,o._)("h2",{class:"card-list__title"},"Список товаров пуст",-1),pe=[ue];function me(e,t,r,i,n,s){const c=(0,o.up)("my-card-item");return r.cards.length>0?((0,o.wg)(),(0,o.iD)("div",le,[(0,o.Wm)(a.W3,{name:"card-item"},{default:(0,o.w5)((()=>[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.cards,(t=>((0,o.wg)(),(0,o.j4)(c,{card:t,key:t.id,onRemove:r=>e.$emit("remove",t)},null,8,["card","onRemove"])))),128))])),_:1})])):((0,o.wg)(),(0,o.iD)("div",de,pe))}const fe=(0,o._)("button",{class:"button-remove"},[(0,o._)("span")],-1),ve=[fe],he={class:"card-image"},ke=["src"],be={class:"card-content"},ge={class:"card-content__title"},we={class:"card-content__desk"},_e={class:"card-content__price"};function Ce(e,t,r,i,n,s){return(0,o.wg)(),(0,o.iD)("div",{class:(0,h.C_)(["card",{"card--active":n.activeCard}]),onClick:t[4]||(t[4]=(...e)=>s.changeActiveCard&&s.changeActiveCard(...e)),onKeydown:t[5]||(t[5]=(...e)=>s.changeActiveCard&&s.changeActiveCard(...e))},[(0,o._)("div",{onClick:[t[0]||(t[0]=t=>e.$emit("remove",r.card)),t[2]||(t[2]=(0,a.iM)((()=>{}),["stop"]))],onKeydown:[t[1]||(t[1]=t=>e.$emit("remove",r.card)),t[3]||(t[3]=(0,a.iM)((()=>{}),["stop"]))],class:(0,h.C_)(["button-remove-wrapper",{"button-remove-wrapper--active":n.activeCard}])},ve,34),(0,o._)("div",he,[(0,o._)("img",{src:r.card.link,class:"card-image__img",alt:"some card"},null,8,ke)]),(0,o._)("div",be,[(0,o._)("h3",ge,(0,h.zw)(r.card.title),1),(0,o._)("p",we,(0,h.zw)(r.card.desk),1),(0,o._)("h3",_e,(0,h.zw)(r.card.price)+" руб.",1)])],34)}var ye={data(){return{activeCard:!1}},props:{card:{type:Object,required:!0}},methods:{changeActiveCard(){this.activeCard=!this.activeCard,console.log(this.activeCard)}}};const Ae=(0,c.Z)(ye,[["render",Ce]]);var Me=Ae,De={props:{cards:{type:Array,required:!0}},components:{MyCardItem:Me}};const $e=(0,c.Z)(De,[["render",me]]);var Be=$e,Se={data(){return{cards:S,modalVisible:!1,selectedSort:"default",sortOptions:R}},mounted(){if(localStorage.getItem("cards"))try{this.cards=JSON.parse(localStorage.getItem("cards"))}catch(e){localStorage.removeItem("cards")}},computed:{sortedPosts(){return j(this.cards,this.selectedSort)}},methods:{changeSelect(e){this.selectedSort=e},createCard(e){const{id:t,name:r,about:a,link:o,price:i}=e,n=$(o),s={id:t,title:r,desk:a,link:n,price:i};this.cards.push(s),this.modalVisible=!1,this.setStorageCard()},removeCard(e){this.cards=this.cards.filter((t=>t.id!==e.id)),this.setStorageCard()},setStorageCard(){const e=JSON.stringify(this.cards);localStorage.setItem("cards",e)},showModal(){this.modalVisible=!0}},components:{MySelect:E,CardList:Be,CardForm:ce}};const He=(0,c.Z)(Se,[["render",M]]);var Re=He;const We=(0,a.ri)(Re);v.forEach((e=>We.component(e.name,e))),We.mount("#app")}},t={};function r(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.m=e,function(){var e=[];r.O=function(t,a,o,i){if(!a){var n=1/0;for(d=0;d<e.length;d++){a=e[d][0],o=e[d][1],i=e[d][2];for(var s=!0,c=0;c<a.length;c++)(!1&i||n>=i)&&Object.keys(r.O).every((function(e){return r.O[e](a[c])}))?a.splice(c--,1):(s=!1,i<n&&(n=i));if(s){e.splice(d--,1);var l=o();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[a,o,i]}}(),function(){r.d=function(e,t){for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,n=a[0],s=a[1],c=a[2],l=0;if(n.some((function(t){return 0!==e[t]}))){for(o in s)r.o(s,o)&&(r.m[o]=s[o]);if(c)var d=c(r)}for(t&&t(a);l<n.length;l++)i=n[l],r.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return r.O(d)},a=self["webpackChunkidaproject_test_task"]=self["webpackChunkidaproject_test_task"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(924)}));a=r.O(a)})();
//# sourceMappingURL=app.881b237d.js.map