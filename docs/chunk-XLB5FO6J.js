import{a as l}from"./chunk-A5KQFQ6K.js";import{S as c,X as a,Za as n}from"./chunk-VWVZCUPY.js";import{a as i,b as o}from"./chunk-KFZQC3P5.js";var u=(()=>{let t=class t{get currentChosenCards(){return this.cards.asReadonly()}constructor(e){this.storageService=e,this.cards=n({villageois:0,loupGarou:0,playersNumber:0,selectedRoles:new Set}),this.CARDS_KEY="CardChoiceService_cards",this.initFromStorage()}setCards(e){this.cards.set(e);let s=o(i({},e),{selectedRoles:Array.from(e.selectedRoles)});this.storageService.set(this.CARDS_KEY,s)}initFromStorage(){this.storageService.get(this.CARDS_KEY).subscribe(e=>{if(e){let s=o(i({},e),{selectedRoles:new Set(e.selectedRoles)});this.cards.set(s)}})}};t.\u0275fac=function(s){return new(s||t)(a(l))},t.\u0275prov=c({token:t,factory:t.\u0275fac,providedIn:"root"});let r=t;return r})();export{u as a};
