import{S as f,j as o,o as c}from"./chunk-VWVZCUPY.js";import{a as h}from"./chunk-Q5N6OLXX.js";import{d as a}from"./chunk-KFZQC3P5.js";var s=h("Preferences",{web:()=>import("./chunk-AUW2OTFA.js").then(t=>new t.PreferencesWeb)});var n=function(t){return t[t.SET=0]="SET",t[t.REMOVE=1]="REMOVE",t}(n||{}),d=(()=>{let i=class i{constructor(){this.actionQueue=[],this.actionInProgress=!1}set(e,r){this.actionQueue.push({type:n.SET,key:e,value:r}),this.actionInProgress||this.handleNextAction()}get(e){return o(s.get({key:e})).pipe(c(({value:r})=>r?JSON.parse(r):null))}remove(e){this.actionQueue.push({type:n.REMOVE,key:e}),this.actionInProgress||this.handleNextAction()}clear(){return o(s.clear())}handleNextAction(){return a(this,null,function*(){this.actionInProgress=!0;let e=this.actionQueue.shift();if(e!==void 0)if(e.type===n.SET){let r=JSON.stringify(e.value);yield s.set({key:e.key,value:r})}else yield s.remove({key:e.key});this.actionQueue.length>0?yield this.handleNextAction():this.actionInProgress=!1})}};i.\u0275fac=function(r){return new(r||i)},i.\u0275prov=f({token:i,factory:i.\u0275fac,providedIn:"root"});let t=i;return t})();export{d as a};
