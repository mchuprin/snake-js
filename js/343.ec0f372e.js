"use strict";(self["webpackChunksnake"]=self["webpackChunksnake"]||[]).push([[343],{6133:function(e,t,n){n.d(t,{G:function(){return p}});n(7658);var i=n(4870),l=n(3396);const a=(0,i.iH)(null),s=(0,i.qj)({width:500,height:400}),r=(0,i.qj)({x:100,y:80}),u=(0,i.iH)(39),d=(0,i.iH)(20),o=(0,i.iH)([]),c=(0,i.iH)(5),h=(0,i.iH)();function p(){const e=(0,l.Fl)((()=>r.x<0||r.x>s.width||r.y<0||r.y>s.height));(0,l.YP)(e,(e=>{e&&clearInterval(h.value)}));const t=()=>{const e=a.value.getContext("2d");e.fillStyle="#1d3c41",e.fillRect(r.x,r.y,d.value,d.value),o.value.push({x:r.x,y:r.y})},n=({x:e,y:t})=>{const n=a.value.getContext("2d");n.fillStyle="#94bd91",n.fillRect(e,t,d.value,d.value)},i=()=>{const e=a.value.getContext("2d");e.fillStyle="#94bd91",e.fillRect(0,0,s.width,s.height),o.value=[],r.x=100,r.y=80,c.value=2,h.value=setInterval(p,300)},p=()=>{switch(u.value){case 37:r.x-=d.value;break;case 38:r.y-=d.value;break;case 39:r.x+=d.value;break;case 40:r.y+=d.value;break}t()},_=e=>{const t=[{direction:37,forbidden:39},{direction:38,forbidden:40},{direction:39,forbidden:37},{direction:40,forbidden:38}],n=t.find((e=>e.direction===u.value));n&&n.forbidden!==e&&(u.value=e)};return{field:a,fieldSize:s,snakeHeadCoordinates:r,direction:u,snakeSize:d,snakeCoordinates:o,snakeLength:c,isSnakeMoving:h,gameEnd:e,restart:i,drawSnake:t,changeDirection:_,drawField:n}}},2343:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var i=n(3396),l=n(7139),a=n(4870),s=n(9242),r=n(6133);const u=(0,i._)("h1",null,"Настройки",-1),d=(0,i._)("input",{id:"speed",type:"range",min:"100",max:"800",step:"20"},null,-1);var o={__name:"TheSettings",setup(e){const{fieldSize:t}=(0,r.G)();return(e,n)=>{const r=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",{class:(0,l.C_)(e.$style.TheSettings)},[u,(0,i._)("div",{class:(0,l.C_)(e.$style.inputs)},[(0,i._)("div",{class:(0,l.C_)(e.$style.inputWrapper)},[(0,i._)("label",{class:(0,l.C_)(e.$style.label),for:"height"},"Высота поля",2),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":n[0]||(n[0]=e=>(0,a.SU)(t).height=e),id:"height",type:"range",min:"100",max:"800",step:"20"},null,512),[[s.nr,(0,a.SU)(t).height]])],2),(0,i._)("div",{class:(0,l.C_)(e.$style.inputWrapper)},[(0,i._)("label",{class:(0,l.C_)(e.$style.label),for:"width"},"Ширина поля",2),(0,i.wy)((0,i._)("input",{"onUpdate:modelValue":n[1]||(n[1]=e=>(0,a.SU)(t).width=e),id:"width",type:"range",min:"100",max:"800",step:"20"},null,512),[[s.nr,(0,a.SU)(t).width]])],2),(0,i._)("div",{class:(0,l.C_)(e.$style.inputWrapper)},[(0,i._)("label",{class:(0,l.C_)(e.$style.label),for:"speed"},"Начальная скорость",2),d],2)],2),(0,i.Wm)(r,{class:"button",to:"/"},{default:(0,i.w5)((()=>[(0,i.Uk)("Вернуться в меню")])),_:1})],2)}}},c={button:"TheSettings_button_gDR31",TheSettings:"TheSettings_TheSettings_R8nNR",label:"TheSettings_label_NQJwP",inputs:"TheSettings_inputs_dIqjj",inputWrapper:"TheSettings_inputWrapper_JCqOk"},h=n(89);const p={};p["$style"]=c;const _=(0,h.Z)(o,[["__cssModules",p]]);var v=_}}]);
//# sourceMappingURL=343.ec0f372e.js.map