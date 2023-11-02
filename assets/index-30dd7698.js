var Xh=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var dx=Xh(ue=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ta="158",ai={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},oi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qh=0,Xa=1,Yh=2,Gl=1,jh=2,Sn=3,zn=0,Ue=1,un=2,Nn=0,Di=1,qa=2,Ya=3,ja=4,$h=5,Kn=100,Kh=101,Zh=102,$a=103,Ka=104,Jh=200,Qh=201,tc=202,ec=203,ca=204,ua=205,nc=206,ic=207,sc=208,rc=209,ac=210,oc=211,lc=212,hc=213,cc=214,uc=0,fc=1,dc=2,er=3,pc=4,mc=5,_c=6,gc=7,Hl=0,vc=1,Mc=2,Un=0,xc=1,yc=2,Sc=3,Ec=4,Tc=5,kl=300,Oi=301,Fi=302,fa=303,da=304,dr=306,pa=1e3,en=1001,ma=1002,De=1003,Za=1004,wr=1005,je=1006,bc=1007,rs=1008,On=1009,Ac=1010,wc=1011,ba=1012,Vl=1013,Dn=1014,In=1015,as=1016,Wl=1017,Xl=1018,Jn=1020,Rc=1021,nn=1023,Cc=1024,Pc=1025,Qn=1026,Bi=1027,Lc=1028,ql=1029,Dc=1030,Yl=1031,jl=1033,Rr=33776,Cr=33777,Pr=33778,Lr=33779,Ja=35840,Qa=35841,to=35842,eo=35843,Ic=36196,no=37492,io=37496,so=37808,ro=37809,ao=37810,oo=37811,lo=37812,ho=37813,co=37814,uo=37815,fo=37816,po=37817,mo=37818,_o=37819,go=37820,vo=37821,Dr=36492,Mo=36494,xo=36495,Nc=36283,yo=36284,So=36285,Eo=36286,$l=3e3,ti=3001,Uc=3200,Oc=3201,Fc=0,Bc=1,Ke="",Me="srgb",Tn="srgb-linear",Aa="display-p3",pr="display-p3-linear",nr="linear",Qt="srgb",ir="rec709",sr="p3",li=7680,To=519,zc=512,Gc=513,Hc=514,kc=515,Vc=516,Wc=517,Xc=518,qc=519,bo=35044,Ao="300 es",_a=1035,En=2e3,rr=2001;class ri{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Se=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wo=1234567;const es=Math.PI/180,os=180/Math.PI;function ki(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Se[n&255]+Se[n>>8&255]+Se[n>>16&255]+Se[n>>24&255]+"-"+Se[t&255]+Se[t>>8&255]+"-"+Se[t>>16&15|64]+Se[t>>24&255]+"-"+Se[e&63|128]+Se[e>>8&255]+"-"+Se[e>>16&255]+Se[e>>24&255]+Se[i&255]+Se[i>>8&255]+Se[i>>16&255]+Se[i>>24&255]).toLowerCase()}function Ae(n,t,e){return Math.max(t,Math.min(e,n))}function wa(n,t){return(n%t+t)%t}function Yc(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function jc(n,t,e){return n!==t?(e-n)/(t-n):0}function ns(n,t,e){return(1-e)*n+e*t}function $c(n,t,e,i){return ns(n,t,1-Math.exp(-e*i))}function Kc(n,t=1){return t-Math.abs(wa(n,t*2)-t)}function Zc(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Jc(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Qc(n,t){return n+Math.floor(Math.random()*(t-n+1))}function tu(n,t){return n+Math.random()*(t-n)}function eu(n){return n*(.5-Math.random())}function nu(n){n!==void 0&&(wo=n);let t=wo+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function iu(n){return n*es}function su(n){return n*os}function ga(n){return(n&n-1)===0&&n!==0}function ru(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ar(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function au(n,t,e,i,s){const r=Math.cos,o=Math.sin,a=r(e/2),l=o(e/2),h=r((t+i)/2),u=o((t+i)/2),c=r((t-i)/2),f=o((t-i)/2),m=r((i-t)/2),_=o((i-t)/2);switch(s){case"XYX":n.set(a*u,l*c,l*f,a*h);break;case"YZY":n.set(l*f,a*u,l*c,a*h);break;case"ZXZ":n.set(l*c,l*f,a*u,a*h);break;case"XZX":n.set(a*u,l*_,l*m,a*h);break;case"YXY":n.set(l*m,a*u,l*_,a*h);break;case"ZYZ":n.set(l*_,l*m,a*u,a*h);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ti(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ce(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const ou={DEG2RAD:es,RAD2DEG:os,generateUUID:ki,clamp:Ae,euclideanModulo:wa,mapLinear:Yc,inverseLerp:jc,lerp:ns,damp:$c,pingpong:Kc,smoothstep:Zc,smootherstep:Jc,randInt:Qc,randFloat:tu,randFloatSpread:eu,seededRandom:nu,degToRad:iu,radToDeg:su,isPowerOfTwo:ga,ceilPowerOfTwo:ru,floorPowerOfTwo:ar,setQuaternionFromProperEuler:au,normalize:Ce,denormalize:Ti};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,i,s,r,o,a,l,h){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h)}set(t,e,i,s,r,o,a,l,h){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],h=i[1],u=i[4],c=i[7],f=i[2],m=i[5],_=i[8],g=s[0],p=s[3],d=s[6],S=s[1],M=s[4],E=s[7],T=s[2],R=s[5],A=s[8];return r[0]=o*g+a*S+l*T,r[3]=o*p+a*M+l*R,r[6]=o*d+a*E+l*A,r[1]=h*g+u*S+c*T,r[4]=h*p+u*M+c*R,r[7]=h*d+u*E+c*A,r[2]=f*g+m*S+_*T,r[5]=f*p+m*M+_*R,r[8]=f*d+m*E+_*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8];return e*o*u-e*a*h-i*r*u+i*a*l+s*r*h-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=u*o-a*h,f=a*l-u*r,m=h*r-o*l,_=e*c+i*f+s*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return t[0]=c*g,t[1]=(s*h-u*i)*g,t[2]=(a*i-s*o)*g,t[3]=f*g,t[4]=(u*e-s*l)*g,t[5]=(s*r-a*e)*g,t[6]=m*g,t[7]=(i*l-h*e)*g,t[8]=(o*e-i*r)*g,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),h=Math.sin(r);return this.set(i*l,i*h,-i*(l*o+h*a)+o+t,-s*h,s*l,-s*(-h*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ir.makeScale(t,e)),this}rotate(t){return this.premultiply(Ir.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ir.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ir=new Ht;function Kl(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function or(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function lu(){const n=or("canvas");return n.style.display="block",n}const Ro={};function is(n){n in Ro||(Ro[n]=!0,console.warn(n))}const Co=new Ht().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Po=new Ht().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Es={[Tn]:{transfer:nr,primaries:ir,toReference:n=>n,fromReference:n=>n},[Me]:{transfer:Qt,primaries:ir,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[pr]:{transfer:nr,primaries:sr,toReference:n=>n.applyMatrix3(Po),fromReference:n=>n.applyMatrix3(Co)},[Aa]:{transfer:Qt,primaries:sr,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Po),fromReference:n=>n.applyMatrix3(Co).convertLinearToSRGB()}},hu=new Set([Tn,pr]),Kt={enabled:!0,_workingColorSpace:Tn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!hu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=Es[t].toReference,s=Es[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Es[n].primaries},getTransfer:function(n){return n===Ke?nr:Es[n].transfer}};function Ii(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Nr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let hi;class Zl{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{hi===void 0&&(hi=or("canvas")),hi.width=t.width,hi.height=t.height;const i=hi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Ii(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Ii(e[i]/255)*255):e[i]=Ii(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let cu=0;class Jl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:cu++}),this.uuid=ki(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ur(s[o].image)):r.push(Ur(s[o]))}else r=Ur(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Ur(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Zl.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let uu=0;class ke extends ri{constructor(t=ke.DEFAULT_IMAGE,e=ke.DEFAULT_MAPPING,i=en,s=en,r=je,o=rs,a=nn,l=On,h=ke.DEFAULT_ANISOTROPY,u=Ke){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:uu++}),this.uuid=ki(),this.name="",this.source=new Jl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===ti?Me:Ke),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case pa:t.x=t.x-Math.floor(t.x);break;case en:t.x=t.x<0?0:1;break;case ma:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case pa:t.y=t.y-Math.floor(t.y);break;case en:t.y=t.y<0?0:1;break;case ma:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Me?ti:$l}set encoding(t){is("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ti?Me:Ke}}ke.DEFAULT_IMAGE=null;ke.DEFAULT_MAPPING=kl;ke.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,i=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,h=l[0],u=l[4],c=l[8],f=l[1],m=l[5],_=l[9],g=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(c-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+g)<.1&&Math.abs(_+p)<.1&&Math.abs(h+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(h+1)/2,E=(m+1)/2,T=(d+1)/2,R=(u+f)/4,A=(c+g)/4,F=(_+p)/4;return M>E&&M>T?M<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(M),s=R/i,r=A/i):E>T?E<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),i=R/s,r=F/s):T<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),i=A/r,s=F/r),this.set(i,s,r,e),this}let S=Math.sqrt((p-_)*(p-_)+(c-g)*(c-g)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(c-g)/S,this.z=(f-u)/S,this.w=Math.acos((h+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fu extends ri{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};i.encoding!==void 0&&(is("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ti?Me:Ke),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:je,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new ke(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ei extends fu{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Ql extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class du extends ke{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=De,this.minFilter=De,this.wrapR=en,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gn{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],h=i[s+1],u=i[s+2],c=i[s+3];const f=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){t[e+0]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=g;return}if(c!==g||l!==f||h!==m||u!==_){let p=1-a;const d=l*f+h*m+u*_+c*g,S=d>=0?1:-1,M=1-d*d;if(M>Number.EPSILON){const T=Math.sqrt(M),R=Math.atan2(T,d*S);p=Math.sin(p*R)/T,a=Math.sin(a*R)/T}const E=a*S;if(l=l*p+f*E,h=h*p+m*E,u=u*p+_*E,c=c*p+g*E,p===1-a){const T=1/Math.sqrt(l*l+h*h+u*u+c*c);l*=T,h*=T,u*=T,c*=T}}t[e]=l,t[e+1]=h,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],h=i[s+2],u=i[s+3],c=r[o],f=r[o+1],m=r[o+2],_=r[o+3];return t[e]=a*_+u*c+l*m-h*f,t[e+1]=l*_+u*f+h*c-a*m,t[e+2]=h*_+u*m+a*f-l*c,t[e+3]=u*_-a*c-l*f-h*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,h=a(i/2),u=a(s/2),c=a(r/2),f=l(i/2),m=l(s/2),_=l(r/2);switch(o){case"XYZ":this._x=f*u*c+h*m*_,this._y=h*m*c-f*u*_,this._z=h*u*_+f*m*c,this._w=h*u*c-f*m*_;break;case"YXZ":this._x=f*u*c+h*m*_,this._y=h*m*c-f*u*_,this._z=h*u*_-f*m*c,this._w=h*u*c+f*m*_;break;case"ZXY":this._x=f*u*c-h*m*_,this._y=h*m*c+f*u*_,this._z=h*u*_+f*m*c,this._w=h*u*c-f*m*_;break;case"ZYX":this._x=f*u*c-h*m*_,this._y=h*m*c+f*u*_,this._z=h*u*_-f*m*c,this._w=h*u*c+f*m*_;break;case"YZX":this._x=f*u*c+h*m*_,this._y=h*m*c+f*u*_,this._z=h*u*_-f*m*c,this._w=h*u*c-f*m*_;break;case"XZY":this._x=f*u*c-h*m*_,this._y=h*m*c-f*u*_,this._z=h*u*_+f*m*c,this._w=h*u*c+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],h=e[2],u=e[6],c=e[10],f=i+a+c;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-h)*m,this._z=(o-s)*m}else if(i>a&&i>c){const m=2*Math.sqrt(1+i-a-c);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+h)/m}else if(a>c){const m=2*Math.sqrt(1+a-i-c);this._w=(r-h)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+c-i-a);this._w=(o-s)/m,this._x=(r+h)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,h=e._z,u=e._w;return this._x=i*u+o*a+s*h-r*l,this._y=s*u+o*l+r*a-i*h,this._z=r*u+o*h+i*l-s*a,this._w=o*u-i*a-s*l-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(l),u=Math.atan2(h,a),c=Math.sin((1-e)*u)/h,f=Math.sin(e*u)/h;return this._w=o*c+this._w*f,this._x=i*c+this._x*f,this._y=s*c+this._y*f,this._z=r*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,h=2*(o*s-a*i),u=2*(a*e-r*s),c=2*(r*i-o*e);return this.x=e+l*h+o*c-a*u,this.y=i+l*u+a*h-r*c,this.z=s+l*c+r*u-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Or.copy(this).projectOnVector(t),this.sub(Or)}reflect(t){return this.sub(Or.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ae(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Or=new D,Lo=new Gn;class us{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ze.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ze.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ze.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ze):Ze.fromBufferAttribute(r,o),Ze.applyMatrix4(t.matrixWorld),this.expandByPoint(Ze);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ts.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ts.copy(i.boundingBox)),Ts.applyMatrix4(t.matrixWorld),this.union(Ts)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ze),Ze.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qi),bs.subVectors(this.max,qi),ci.subVectors(t.a,qi),ui.subVectors(t.b,qi),fi.subVectors(t.c,qi),An.subVectors(ui,ci),wn.subVectors(fi,ui),Xn.subVectors(ci,fi);let e=[0,-An.z,An.y,0,-wn.z,wn.y,0,-Xn.z,Xn.y,An.z,0,-An.x,wn.z,0,-wn.x,Xn.z,0,-Xn.x,-An.y,An.x,0,-wn.y,wn.x,0,-Xn.y,Xn.x,0];return!Fr(e,ci,ui,fi,bs)||(e=[1,0,0,0,1,0,0,0,1],!Fr(e,ci,ui,fi,bs))?!1:(As.crossVectors(An,wn),e=[As.x,As.y,As.z],Fr(e,ci,ui,fi,bs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ze).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ze).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const gn=[new D,new D,new D,new D,new D,new D,new D,new D],Ze=new D,Ts=new us,ci=new D,ui=new D,fi=new D,An=new D,wn=new D,Xn=new D,qi=new D,bs=new D,As=new D,qn=new D;function Fr(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){qn.fromArray(n,r);const a=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),l=t.dot(qn),h=e.dot(qn),u=i.dot(qn);if(Math.max(-Math.max(l,h,u),Math.min(l,h,u))>a)return!1}return!0}const pu=new us,Yi=new D,Br=new D;class mr{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):pu.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Yi.subVectors(t,this.center);const e=Yi.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Yi,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Br.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Yi.copy(t.center).add(Br)),this.expandByPoint(Yi.copy(t.center).sub(Br))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const vn=new D,zr=new D,ws=new D,Rn=new D,Gr=new D,Rs=new D,Hr=new D;class Ra{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(vn.copy(this.origin).addScaledVector(this.direction,e),vn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){zr.copy(t).add(e).multiplyScalar(.5),ws.copy(e).sub(t).normalize(),Rn.copy(this.origin).sub(zr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(ws),a=Rn.dot(this.direction),l=-Rn.dot(ws),h=Rn.lengthSq(),u=Math.abs(1-o*o);let c,f,m,_;if(u>0)if(c=o*l-a,f=o*a-l,_=r*u,c>=0)if(f>=-_)if(f<=_){const g=1/u;c*=g,f*=g,m=c*(c+o*f+2*a)+f*(o*c+f+2*l)+h}else f=r,c=Math.max(0,-(o*f+a)),m=-c*c+f*(f+2*l)+h;else f=-r,c=Math.max(0,-(o*f+a)),m=-c*c+f*(f+2*l)+h;else f<=-_?(c=Math.max(0,-(-o*r+a)),f=c>0?-r:Math.min(Math.max(-r,-l),r),m=-c*c+f*(f+2*l)+h):f<=_?(c=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+h):(c=Math.max(0,-(o*r+a)),f=c>0?r:Math.min(Math.max(-r,-l),r),m=-c*c+f*(f+2*l)+h);else f=o>0?-r:r,c=Math.max(0,-(o*f+a)),m=-c*c+f*(f+2*l)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(zr).addScaledVector(ws,f),m}intersectSphere(t,e){vn.subVectors(t.center,this.origin);const i=vn.dot(this.direction),s=vn.dot(vn)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const h=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return h>=0?(i=(t.min.x-f.x)*h,s=(t.max.x-f.x)*h):(i=(t.max.x-f.x)*h,s=(t.min.x-f.x)*h),u>=0?(r=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),c>=0?(a=(t.min.z-f.z)*c,l=(t.max.z-f.z)*c):(a=(t.max.z-f.z)*c,l=(t.min.z-f.z)*c),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,vn)!==null}intersectTriangle(t,e,i,s,r){Gr.subVectors(e,t),Rs.subVectors(i,t),Hr.crossVectors(Gr,Rs);let o=this.direction.dot(Hr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Rn.subVectors(this.origin,t);const l=a*this.direction.dot(Rs.crossVectors(Rn,Rs));if(l<0)return null;const h=a*this.direction.dot(Gr.cross(Rn));if(h<0||l+h>o)return null;const u=-a*Rn.dot(Hr);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ce{constructor(t,e,i,s,r,o,a,l,h,u,c,f,m,_,g,p){ce.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,h,u,c,f,m,_,g,p)}set(t,e,i,s,r,o,a,l,h,u,c,f,m,_,g,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=h,d[6]=u,d[10]=c,d[14]=f,d[3]=m,d[7]=_,d[11]=g,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ce().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),o=1/di.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),h=Math.sin(s),u=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const f=o*u,m=o*c,_=a*u,g=a*c;e[0]=l*u,e[4]=-l*c,e[8]=h,e[1]=m+_*h,e[5]=f-g*h,e[9]=-a*l,e[2]=g-f*h,e[6]=_+m*h,e[10]=o*l}else if(t.order==="YXZ"){const f=l*u,m=l*c,_=h*u,g=h*c;e[0]=f+g*a,e[4]=_*a-m,e[8]=o*h,e[1]=o*c,e[5]=o*u,e[9]=-a,e[2]=m*a-_,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*u,m=l*c,_=h*u,g=h*c;e[0]=f-g*a,e[4]=-o*c,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*h,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*u,m=o*c,_=a*u,g=a*c;e[0]=l*u,e[4]=_*h-m,e[8]=f*h+g,e[1]=l*c,e[5]=g*h+f,e[9]=m*h-_,e[2]=-h,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,m=o*h,_=a*l,g=a*h;e[0]=l*u,e[4]=g-f*c,e[8]=_*c+m,e[1]=c,e[5]=o*u,e[9]=-a*u,e[2]=-h*u,e[6]=m*c+_,e[10]=f-g*c}else if(t.order==="XZY"){const f=o*l,m=o*h,_=a*l,g=a*h;e[0]=l*u,e[4]=-c,e[8]=h*u,e[1]=f*c+g,e[5]=o*u,e[9]=m*c-_,e[2]=_*c-m,e[6]=a*u,e[10]=g*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(mu,t,_u)}lookAt(t,e,i){const s=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),Cn.crossVectors(i,Ge),Cn.lengthSq()===0&&(Math.abs(i.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),Cn.crossVectors(i,Ge)),Cn.normalize(),Cs.crossVectors(Ge,Cn),s[0]=Cn.x,s[4]=Cs.x,s[8]=Ge.x,s[1]=Cn.y,s[5]=Cs.y,s[9]=Ge.y,s[2]=Cn.z,s[6]=Cs.z,s[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],h=i[12],u=i[1],c=i[5],f=i[9],m=i[13],_=i[2],g=i[6],p=i[10],d=i[14],S=i[3],M=i[7],E=i[11],T=i[15],R=s[0],A=s[4],F=s[8],y=s[12],w=s[1],W=s[5],j=s[9],tt=s[13],L=s[2],k=s[6],Y=s[10],X=s[14],st=s[3],K=s[7],$=s[11],I=s[15];return r[0]=o*R+a*w+l*L+h*st,r[4]=o*A+a*W+l*k+h*K,r[8]=o*F+a*j+l*Y+h*$,r[12]=o*y+a*tt+l*X+h*I,r[1]=u*R+c*w+f*L+m*st,r[5]=u*A+c*W+f*k+m*K,r[9]=u*F+c*j+f*Y+m*$,r[13]=u*y+c*tt+f*X+m*I,r[2]=_*R+g*w+p*L+d*st,r[6]=_*A+g*W+p*k+d*K,r[10]=_*F+g*j+p*Y+d*$,r[14]=_*y+g*tt+p*X+d*I,r[3]=S*R+M*w+E*L+T*st,r[7]=S*A+M*W+E*k+T*K,r[11]=S*F+M*j+E*Y+T*$,r[15]=S*y+M*tt+E*X+T*I,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],h=t[13],u=t[2],c=t[6],f=t[10],m=t[14],_=t[3],g=t[7],p=t[11],d=t[15];return _*(+r*l*c-s*h*c-r*a*f+i*h*f+s*a*m-i*l*m)+g*(+e*l*m-e*h*f+r*o*f-s*o*m+s*h*u-r*l*u)+p*(+e*h*c-e*a*m-r*o*c+i*o*m+r*a*u-i*h*u)+d*(-s*a*u-e*l*c+e*a*f+s*o*c-i*o*f+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],h=t[7],u=t[8],c=t[9],f=t[10],m=t[11],_=t[12],g=t[13],p=t[14],d=t[15],S=c*p*h-g*f*h+g*l*m-a*p*m-c*l*d+a*f*d,M=_*f*h-u*p*h-_*l*m+o*p*m+u*l*d-o*f*d,E=u*g*h-_*c*h+_*a*m-o*g*m-u*a*d+o*c*d,T=_*c*l-u*g*l-_*a*f+o*g*f+u*a*p-o*c*p,R=e*S+i*M+s*E+r*T;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return t[0]=S*A,t[1]=(g*f*r-c*p*r-g*s*m+i*p*m+c*s*d-i*f*d)*A,t[2]=(a*p*r-g*l*r+g*s*h-i*p*h-a*s*d+i*l*d)*A,t[3]=(c*l*r-a*f*r-c*s*h+i*f*h+a*s*m-i*l*m)*A,t[4]=M*A,t[5]=(u*p*r-_*f*r+_*s*m-e*p*m-u*s*d+e*f*d)*A,t[6]=(_*l*r-o*p*r-_*s*h+e*p*h+o*s*d-e*l*d)*A,t[7]=(o*f*r-u*l*r+u*s*h-e*f*h-o*s*m+e*l*m)*A,t[8]=E*A,t[9]=(_*c*r-u*g*r-_*i*m+e*g*m+u*i*d-e*c*d)*A,t[10]=(o*g*r-_*a*r+_*i*h-e*g*h-o*i*d+e*a*d)*A,t[11]=(u*a*r-o*c*r-u*i*h+e*c*h+o*i*m-e*a*m)*A,t[12]=T*A,t[13]=(u*g*s-_*c*s+_*i*f-e*g*f-u*i*p+e*c*p)*A,t[14]=(_*a*s-o*g*s-_*i*l+e*g*l+o*i*p-e*a*p)*A,t[15]=(o*c*s-u*a*s+u*i*l-e*c*l-o*i*f+e*a*f)*A,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,h=r*o,u=r*a;return this.set(h*o+i,h*a-s*l,h*l+s*a,0,h*a+s*l,u*a+i,u*l-s*o,0,h*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,h=r+r,u=o+o,c=a+a,f=r*h,m=r*u,_=r*c,g=o*u,p=o*c,d=a*c,S=l*h,M=l*u,E=l*c,T=i.x,R=i.y,A=i.z;return s[0]=(1-(g+d))*T,s[1]=(m+E)*T,s[2]=(_-M)*T,s[3]=0,s[4]=(m-E)*R,s[5]=(1-(f+d))*R,s[6]=(p+S)*R,s[7]=0,s[8]=(_+M)*A,s[9]=(p-S)*A,s[10]=(1-(f+g))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=di.set(s[0],s[1],s[2]).length();const o=di.set(s[4],s[5],s[6]).length(),a=di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Je.copy(this);const h=1/r,u=1/o,c=1/a;return Je.elements[0]*=h,Je.elements[1]*=h,Je.elements[2]*=h,Je.elements[4]*=u,Je.elements[5]*=u,Je.elements[6]*=u,Je.elements[8]*=c,Je.elements[9]*=c,Je.elements[10]*=c,e.setFromRotationMatrix(Je),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=En){const l=this.elements,h=2*r/(e-t),u=2*r/(i-s),c=(e+t)/(e-t),f=(i+s)/(i-s);let m,_;if(a===En)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===rr)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=c,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=En){const l=this.elements,h=1/(e-t),u=1/(i-s),c=1/(o-r),f=(e+t)*h,m=(i+s)*u;let _,g;if(a===En)_=(o+r)*c,g=-2*c;else if(a===rr)_=r*c,g=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*h,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const di=new D,Je=new ce,mu=new D(0,0,0),_u=new D(1,1,1),Cn=new D,Cs=new D,Ge=new D,Do=new ce,Io=new Gn;class _r{constructor(t=0,e=0,i=0,s=_r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],h=s[5],u=s[9],c=s[2],f=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,m),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ae(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,h),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Do.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Do,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Io.setFromEuler(this),this.setFromQuaternion(Io,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_r.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gu=0;const No=new D,pi=new Gn,Mn=new ce,Ps=new D,ji=new D,vu=new D,Mu=new Gn,Uo=new D(1,0,0),Oo=new D(0,1,0),Fo=new D(0,0,1),xu={type:"added"},yu={type:"removed"};class xe extends ri{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gu++}),this.uuid=ki(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new D,e=new _r,i=new Gn,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ce},normalMatrix:{value:new Ht}}),this.matrix=new ce,this.matrixWorld=new ce,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(Uo,t)}rotateY(t){return this.rotateOnAxis(Oo,t)}rotateZ(t){return this.rotateOnAxis(Fo,t)}translateOnAxis(t,e){return No.copy(t).applyQuaternion(this.quaternion),this.position.add(No.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Uo,t)}translateY(t){return this.translateOnAxis(Oo,t)}translateZ(t){return this.translateOnAxis(Fo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ps.copy(t):Ps.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mn.lookAt(ji,Ps,this.up):Mn.lookAt(Ps,ji,this.up),this.quaternion.setFromRotationMatrix(Mn),s&&(Mn.extractRotation(s.matrixWorld),pi.setFromRotationMatrix(Mn),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(xu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yu)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let s=0,r=this.children.length;s<r;s++){const o=this.children[s].getObjectsByProperty(t,e);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,t,vu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ji,Mu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++){const r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let h=0,u=l.length;h<u;h++){const c=l[h];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,h=this.material.length;l<h;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),h=o(t.textures),u=o(t.images),c=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),h.length>0&&(i.textures=h),u.length>0&&(i.images=u),c.length>0&&(i.shapes=c),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(a){const l=[];for(const h in a){const u=a[h];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}xe.DEFAULT_UP=new D(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qe=new D,xn=new D,kr=new D,yn=new D,mi=new D,_i=new D,Bo=new D,Vr=new D,Wr=new D,Xr=new D;let Ls=!1;class tn{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Qe.subVectors(t,e),s.cross(Qe);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Qe.subVectors(s,e),xn.subVectors(i,e),kr.subVectors(t,e);const o=Qe.dot(Qe),a=Qe.dot(xn),l=Qe.dot(kr),h=xn.dot(xn),u=xn.dot(kr),c=o*h-a*a;if(c===0)return r.set(-2,-1,-1);const f=1/c,m=(h*l-a*u)*f,_=(o*u-a*l)*f;return r.set(1-m-_,_,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,yn),yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getUV(t,e,i,s,r,o,a,l){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),this.getInterpolation(t,e,i,s,r,o,a,l)}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,yn),l.setScalar(0),l.addScaledVector(r,yn.x),l.addScaledVector(o,yn.y),l.addScaledVector(a,yn.z),l}static isFrontFacing(t,e,i,s){return Qe.subVectors(i,e),xn.subVectors(t,e),Qe.cross(xn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Qe.cross(xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Ls===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ls=!0),tn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;mi.subVectors(s,i),_i.subVectors(r,i),Vr.subVectors(t,i);const l=mi.dot(Vr),h=_i.dot(Vr);if(l<=0&&h<=0)return e.copy(i);Wr.subVectors(t,s);const u=mi.dot(Wr),c=_i.dot(Wr);if(u>=0&&c<=u)return e.copy(s);const f=l*c-u*h;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(mi,o);Xr.subVectors(t,r);const m=mi.dot(Xr),_=_i.dot(Xr);if(_>=0&&m<=_)return e.copy(r);const g=m*h-l*_;if(g<=0&&h>=0&&_<=0)return a=h/(h-_),e.copy(i).addScaledVector(_i,a);const p=u*_-m*c;if(p<=0&&c-u>=0&&m-_>=0)return Bo.subVectors(r,s),a=(c-u)/(c-u+(m-_)),e.copy(s).addScaledVector(Bo,a);const d=1/(p+g+f);return o=g*d,a=f*d,e.copy(i).addScaledVector(mi,o).addScaledVector(_i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Pn={h:0,s:0,l:0},Ds={h:0,s:0,l:0};function qr(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Kt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Kt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Kt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Kt.workingColorSpace){if(t=wa(t,1),e=Ae(e,0,1),i=Ae(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=qr(o,r,t+1/3),this.g=qr(o,r,t),this.b=qr(o,r,t-1/3)}return Kt.toWorkingColorSpace(this,s),this}setStyle(t,e=Me){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){const i=eh[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ii(t.r),this.g=Ii(t.g),this.b=Ii(t.b),this}copyLinearToSRGB(t){return this.r=Nr(t.r),this.g=Nr(t.g),this.b=Nr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Kt.fromWorkingColorSpace(Ee.copy(this),t),Math.round(Ae(Ee.r*255,0,255))*65536+Math.round(Ae(Ee.g*255,0,255))*256+Math.round(Ae(Ee.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Kt.workingColorSpace){Kt.fromWorkingColorSpace(Ee.copy(this),e);const i=Ee.r,s=Ee.g,r=Ee.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,h;const u=(a+o)/2;if(a===o)l=0,h=0;else{const c=o-a;switch(h=u<=.5?c/(o+a):c/(2-o-a),o){case i:l=(s-r)/c+(s<r?6:0);break;case s:l=(r-i)/c+2;break;case r:l=(i-s)/c+4;break}l/=6}return t.h=l,t.s=h,t.l=u,t}getRGB(t,e=Kt.workingColorSpace){return Kt.fromWorkingColorSpace(Ee.copy(this),e),t.r=Ee.r,t.g=Ee.g,t.b=Ee.b,t}getStyle(t=Me){Kt.fromWorkingColorSpace(Ee.copy(this),t);const e=Ee.r,i=Ee.g,s=Ee.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Pn),this.setHSL(Pn.h+t,Pn.s+e,Pn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Pn),t.getHSL(Ds);const i=ns(Pn.h,Ds.h,e),s=ns(Pn.s,Ds.s,e),r=ns(Pn.l,Ds.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ee=new Yt;Yt.NAMES=eh;let Su=0;class fs extends ri{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=ki(),this.name="",this.type="Material",this.blending=Di,this.side=zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ca,this.blendDst=ua,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Yt(0,0,0),this.blendAlpha=0,this.depthFunc=er,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=To,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=li,this.stencilZFail=li,this.stencilZPass=li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(i.blending=this.blending),this.side!==zn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ca&&(i.blendSrc=this.blendSrc),this.blendDst!==ua&&(i.blendDst=this.blendDst),this.blendEquation!==Kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==er&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==To&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ds extends fs{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Hl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const he=new D,Is=new zt;class dn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=bo,this.updateRange={offset:0,count:-1},this.gpuType=In,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix3(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyMatrix4(t),this.setXYZ(e,he.x,he.y,he.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.applyNormalMatrix(t),this.setXYZ(e,he.x,he.y,he.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)he.fromBufferAttribute(this,e),he.transformDirection(t),this.setXYZ(e,he.x,he.y,he.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Ti(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ce(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ti(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ti(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ti(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ti(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ce(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ce(e,this.array),i=Ce(i,this.array),s=Ce(s,this.array),r=Ce(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==bo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class nh extends dn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class ih extends dn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ve extends dn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Eu=0;const Xe=new ce,Yr=new xe,gi=new D,He=new us,$i=new us,_e=new D;class on extends ri{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eu++}),this.uuid=ki(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Kl(t)?ih:nh)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Ht().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,i){return Xe.makeTranslation(t,e,i),this.applyMatrix4(Xe),this}scale(t,e,i){return Xe.makeScale(t,e,i),this.applyMatrix4(Xe),this}lookAt(t){return Yr.lookAt(t),Yr.updateMatrix(),this.applyMatrix4(Yr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gi).negate(),this.translate(gi.x,gi.y,gi.z),this}setFromPoints(t){const e=[];for(let i=0,s=t.length;i<s;i++){const r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ve(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];He.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(He.min,$i.min),He.expandByPoint(_e),_e.addVectors(He.max,$i.max),He.expandByPoint(_e)):(He.expandByPoint($i.min),He.expandByPoint($i.max))}He.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(_e));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let h=0,u=a.count;h<u;h++)_e.fromBufferAttribute(a,h),l&&(gi.fromBufferAttribute(t,h),_e.add(gi)),s=Math.max(s,i.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,h=[],u=[];for(let w=0;w<a;w++)h[w]=new D,u[w]=new D;const c=new D,f=new D,m=new D,_=new zt,g=new zt,p=new zt,d=new D,S=new D;function M(w,W,j){c.fromArray(s,w*3),f.fromArray(s,W*3),m.fromArray(s,j*3),_.fromArray(o,w*2),g.fromArray(o,W*2),p.fromArray(o,j*2),f.sub(c),m.sub(c),g.sub(_),p.sub(_);const tt=1/(g.x*p.y-p.x*g.y);isFinite(tt)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(tt),S.copy(m).multiplyScalar(g.x).addScaledVector(f,-p.x).multiplyScalar(tt),h[w].add(d),h[W].add(d),h[j].add(d),u[w].add(S),u[W].add(S),u[j].add(S))}let E=this.groups;E.length===0&&(E=[{start:0,count:i.length}]);for(let w=0,W=E.length;w<W;++w){const j=E[w],tt=j.start,L=j.count;for(let k=tt,Y=tt+L;k<Y;k+=3)M(i[k+0],i[k+1],i[k+2])}const T=new D,R=new D,A=new D,F=new D;function y(w){A.fromArray(r,w*3),F.copy(A);const W=h[w];T.copy(W),T.sub(A.multiplyScalar(A.dot(W))).normalize(),R.crossVectors(F,W);const tt=R.dot(u[w])<0?-1:1;l[w*4]=T.x,l[w*4+1]=T.y,l[w*4+2]=T.z,l[w*4+3]=tt}for(let w=0,W=E.length;w<W;++w){const j=E[w],tt=j.start,L=j.count;for(let k=tt,Y=tt+L;k<Y;k+=3)y(i[k+0]),y(i[k+1]),y(i[k+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const s=new D,r=new D,o=new D,a=new D,l=new D,h=new D,u=new D,c=new D;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),g=t.getX(f+1),p=t.getX(f+2);s.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,p),u.subVectors(o,r),c.subVectors(s,r),u.cross(c),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,g),h.fromBufferAttribute(i,p),a.add(u),l.add(u),h.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(p,h.x,h.y,h.z)}else for(let f=0,m=e.count;f<m;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,r),c.subVectors(s,r),u.cross(c),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,l){const h=a.array,u=a.itemSize,c=a.normalized,f=new h.constructor(l.length*u);let m=0,_=0;for(let g=0,p=l.length;g<p;g++){a.isInterleavedBufferAttribute?m=l[g]*a.data.stride+a.offset:m=l[g]*u;for(let d=0;d<u;d++)f[_++]=h[m++]}return new dn(f,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new on,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],h=t(l,i);e.setAttribute(a,h)}const r=this.morphAttributes;for(const a in r){const l=[],h=r[a];for(let u=0,c=h.length;u<c;u++){const f=h[u],m=t(f,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const h in l)l[h]!==void 0&&(t[h]=l[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const h=i[l];t.data.attributes[l]=h.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const h=this.morphAttributes[l],u=[];for(let c=0,f=h.length;c<f;c++){const m=h[c];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const u=s[h];this.setAttribute(h,u.clone(e))}const r=t.morphAttributes;for(const h in r){const u=[],c=r[h];for(let f=0,m=c.length;f<m;f++)u.push(c[f].clone(e));this.morphAttributes[h]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,u=o.length;h<u;h++){const c=o[h];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const zo=new ce,Yn=new Ra,Ns=new mr,Go=new D,vi=new D,Mi=new D,xi=new D,jr=new D,Us=new D,Os=new zt,Fs=new zt,Bs=new zt,Ho=new D,ko=new D,Vo=new D,zs=new D,Gs=new D;class rn extends xe{constructor(t=new on,e=new ds){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Us.set(0,0,0);for(let l=0,h=r.length;l<h;l++){const u=a[l],c=r[l];u!==0&&(jr.fromBufferAttribute(c,t),o?Us.addScaledVector(jr,u):Us.addScaledVector(jr.sub(e),u))}e.add(Us)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ns.copy(i.boundingSphere),Ns.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(Ns.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Ns,Go)===null||Yn.origin.distanceToSquared(Go)>(t.far-t.near)**2))&&(zo.copy(r).invert(),Yn.copy(t.ray).applyMatrix4(zo),!(i.boundingBox!==null&&Yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,h=r.attributes.uv,u=r.attributes.uv1,c=r.attributes.normal,f=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,T=M;E<T;E+=3){const R=a.getX(E),A=a.getX(E+1),F=a.getX(E+2);s=Hs(this,d,t,i,h,u,c,R,A,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const S=a.getX(p),M=a.getX(p+1),E=a.getX(p+2);s=Hs(this,o,t,i,h,u,c,S,M,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=f.length;_<g;_++){const p=f[_],d=o[p.materialIndex],S=Math.max(p.start,m.start),M=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=S,T=M;E<T;E+=3){const R=E,A=E+1,F=E+2;s=Hs(this,d,t,i,h,u,c,R,A,F),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const _=Math.max(0,m.start),g=Math.min(l.count,m.start+m.count);for(let p=_,d=g;p<d;p+=3){const S=p,M=p+1,E=p+2;s=Hs(this,o,t,i,h,u,c,S,M,E),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function Tu(n,t,e,i,s,r,o,a){let l;if(t.side===Ue?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===zn,a),l===null)return null;Gs.copy(a),Gs.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Gs);return h<e.near||h>e.far?null:{distance:h,point:Gs.clone(),object:n}}function Hs(n,t,e,i,s,r,o,a,l,h){n.getVertexPosition(a,vi),n.getVertexPosition(l,Mi),n.getVertexPosition(h,xi);const u=Tu(n,t,e,i,vi,Mi,xi,zs);if(u){s&&(Os.fromBufferAttribute(s,a),Fs.fromBufferAttribute(s,l),Bs.fromBufferAttribute(s,h),u.uv=tn.getInterpolation(zs,vi,Mi,xi,Os,Fs,Bs,new zt)),r&&(Os.fromBufferAttribute(r,a),Fs.fromBufferAttribute(r,l),Bs.fromBufferAttribute(r,h),u.uv1=tn.getInterpolation(zs,vi,Mi,xi,Os,Fs,Bs,new zt),u.uv2=u.uv1),o&&(Ho.fromBufferAttribute(o,a),ko.fromBufferAttribute(o,l),Vo.fromBufferAttribute(o,h),u.normal=tn.getInterpolation(zs,vi,Mi,xi,Ho,ko,Vo,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const c={a,b:l,c:h,normal:new D,materialIndex:0};tn.getNormal(vi,Mi,xi,c.normal),u.face=c}return u}class ps extends on{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],h=[],u=[],c=[];let f=0,m=0;_("z","y","x",-1,-1,i,e,t,o,r,0),_("z","y","x",1,-1,i,e,-t,o,r,1),_("x","z","y",1,1,t,i,e,s,o,2),_("x","z","y",1,-1,t,i,-e,s,o,3),_("x","y","z",1,-1,t,e,i,s,r,4),_("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ve(h,3)),this.setAttribute("normal",new Ve(u,3)),this.setAttribute("uv",new Ve(c,2));function _(g,p,d,S,M,E,T,R,A,F,y){const w=E/A,W=T/F,j=E/2,tt=T/2,L=R/2,k=A+1,Y=F+1;let X=0,st=0;const K=new D;for(let $=0;$<Y;$++){const I=$*W-tt;for(let H=0;H<k;H++){const ut=H*w-j;K[g]=ut*S,K[p]=I*M,K[d]=L,h.push(K.x,K.y,K.z),K[g]=0,K[p]=0,K[d]=R>0?1:-1,u.push(K.x,K.y,K.z),c.push(H/A),c.push(1-$/F),X+=1}}for(let $=0;$<F;$++)for(let I=0;I<A;I++){const H=f+I+k*$,ut=f+I+k*($+1),ft=f+(I+1)+k*($+1),_t=f+(I+1)+k*$;l.push(H,ut,_t),l.push(ut,ft,_t),st+=6}a.addGroup(m,st,y),m+=st,f+=X}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ps(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zi(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Pe(n){const t={};for(let e=0;e<n.length;e++){const i=zi(n[e]);for(const s in i)t[s]=i[s]}return t}function bu(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function sh(n){return n.getRenderTarget()===null?n.outputColorSpace:Kt.workingColorSpace}const Au={clone:zi,merge:Pe};var wu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ru=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends fs{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wu,this.fragmentShader=Ru,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=bu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class rh extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ce,this.projectionMatrix=new ce,this.projectionMatrixInverse=new ce,this.coordinateSystem=En}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class $e extends rh{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=os*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return os*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(es*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,h=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/h,s*=o.width/l,i*=o.height/h}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const yi=-90,Si=1;class Cu extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new $e(yi,Si,t,e);s.layers=this.layers,this.add(s);const r=new $e(yi,Si,t,e);r.layers=this.layers,this.add(r);const o=new $e(yi,Si,t,e);o.layers=this.layers,this.add(o);const a=new $e(yi,Si,t,e);a.layers=this.layers,this.add(a);const l=new $e(yi,Si,t,e);l.layers=this.layers,this.add(l);const h=new $e(yi,Si,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const h of e)this.remove(h);if(t===En)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===rr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,h,u]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=g,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(c,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class ah extends ke{constructor(t,e,i,s,r,o,a,l,h,u){t=t!==void 0?t:[],e=e!==void 0?e:Oi,super(t,e,i,s,r,o,a,l,h,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Pu extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(is("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ti?Me:Ke),this.texture=new ah(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:je}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ps(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ue,blending:Nn});r.uniforms.tEquirect.value=e;const o=new rn(s,r),a=e.minFilter;return e.minFilter===rs&&(e.minFilter=je),new Cu(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const $r=new D,Lu=new D,Du=new Ht;class Ln{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=$r.subVectors(i,e).cross(Lu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta($r),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Du.getNormalMatrix(t),s=this.coplanarPoint($r).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new mr,ks=new D;class Ca{constructor(t=new Ln,e=new Ln,i=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=En){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],h=s[4],u=s[5],c=s[6],f=s[7],m=s[8],_=s[9],g=s[10],p=s[11],d=s[12],S=s[13],M=s[14],E=s[15];if(i[0].setComponents(l-r,f-h,p-m,E-d).normalize(),i[1].setComponents(l+r,f+h,p+m,E+d).normalize(),i[2].setComponents(l+o,f+u,p+_,E+S).normalize(),i[3].setComponents(l-o,f-u,p-_,E-S).normalize(),i[4].setComponents(l-a,f-c,p-g,E-M).normalize(),e===En)i[5].setComponents(l+a,f+c,p+g,E+M).normalize();else if(e===rr)i[5].setComponents(a,c,g,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(ks.x=s.normal.x>0?t.max.x:t.min.x,ks.y=s.normal.y>0?t.max.y:t.min.y,ks.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oh(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Iu(n,t){const e=t.isWebGL2,i=new WeakMap;function s(h,u){const c=h.array,f=h.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,c,f),h.onUploadCallback();let _;if(c instanceof Float32Array)_=n.FLOAT;else if(c instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)_=n.SHORT;else if(c instanceof Uint32Array)_=n.UNSIGNED_INT;else if(c instanceof Int32Array)_=n.INT;else if(c instanceof Int8Array)_=n.BYTE;else if(c instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:m,type:_,bytesPerElement:c.BYTES_PER_ELEMENT,version:h.version}}function r(h,u,c){const f=u.array,m=u.updateRange;n.bindBuffer(c,h),m.count===-1?n.bufferSubData(c,0,f):(e?n.bufferSubData(c,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(c,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function a(h){h.isInterleavedBufferAttribute&&(h=h.data);const u=i.get(h);u&&(n.deleteBuffer(u.buffer),i.delete(h))}function l(h,u){if(h.isGLBufferAttribute){const f=i.get(h);(!f||f.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const c=i.get(h);c===void 0?i.set(h,s(h,u)):c.version<h.version&&(r(c.buffer,h,u),c.version=h.version)}return{get:o,remove:a,update:l}}class Pa extends on{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),h=a+1,u=l+1,c=t/a,f=e/l,m=[],_=[],g=[],p=[];for(let d=0;d<u;d++){const S=d*f-o;for(let M=0;M<h;M++){const E=M*c-r;_.push(E,-S,0),g.push(0,0,1),p.push(M/a),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<a;S++){const M=S+h*d,E=S+h*(d+1),T=S+1+h*(d+1),R=S+1+h*d;m.push(M,E,R),m.push(E,T,R)}this.setIndex(m),this.setAttribute("position",new Ve(_,3)),this.setAttribute("normal",new Ve(g,3)),this.setAttribute("uv",new Ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Nu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ou=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Bu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,zu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ku=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,ju=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$u=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ku=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ef=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Mf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,yf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ef=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Tf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Af=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Df=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,If=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Nf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Of=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Gf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,jf=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Zf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,td=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ed=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,nd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,id=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ad=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,od=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ld=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ud=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,md=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,gd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Md=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,xd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Sd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ed=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Td=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ad=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,wd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Cd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Pd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ld=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Dd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Id=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ud=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Od=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Fd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bd=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gd=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vd=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xd=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qd=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Yd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jd=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$d=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kd=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jd=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Qd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ep=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,np=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ip=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ap=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,cp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,up=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bt={alphahash_fragment:Nu,alphahash_pars_fragment:Uu,alphamap_fragment:Ou,alphamap_pars_fragment:Fu,alphatest_fragment:Bu,alphatest_pars_fragment:zu,aomap_fragment:Gu,aomap_pars_fragment:Hu,begin_vertex:ku,beginnormal_vertex:Vu,bsdfs:Wu,iridescence_fragment:Xu,bumpmap_pars_fragment:qu,clipping_planes_fragment:Yu,clipping_planes_pars_fragment:ju,clipping_planes_pars_vertex:$u,clipping_planes_vertex:Ku,color_fragment:Zu,color_pars_fragment:Ju,color_pars_vertex:Qu,color_vertex:tf,common:ef,cube_uv_reflection_fragment:nf,defaultnormal_vertex:sf,displacementmap_pars_vertex:rf,displacementmap_vertex:af,emissivemap_fragment:of,emissivemap_pars_fragment:lf,colorspace_fragment:hf,colorspace_pars_fragment:cf,envmap_fragment:uf,envmap_common_pars_fragment:ff,envmap_pars_fragment:df,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Af,envmap_vertex:mf,fog_vertex:_f,fog_pars_vertex:gf,fog_fragment:vf,fog_pars_fragment:Mf,gradientmap_pars_fragment:xf,lightmap_fragment:yf,lightmap_pars_fragment:Sf,lights_lambert_fragment:Ef,lights_lambert_pars_fragment:Tf,lights_pars_begin:bf,lights_toon_fragment:wf,lights_toon_pars_fragment:Rf,lights_phong_fragment:Cf,lights_phong_pars_fragment:Pf,lights_physical_fragment:Lf,lights_physical_pars_fragment:Df,lights_fragment_begin:If,lights_fragment_maps:Nf,lights_fragment_end:Uf,logdepthbuf_fragment:Of,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:zf,map_fragment:Gf,map_pars_fragment:Hf,map_particle_fragment:kf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphcolor_vertex:qf,morphnormal_vertex:Yf,morphtarget_pars_vertex:jf,morphtarget_vertex:$f,normal_fragment_begin:Kf,normal_fragment_maps:Zf,normal_pars_fragment:Jf,normal_pars_vertex:Qf,normal_vertex:td,normalmap_pars_fragment:ed,clearcoat_normal_fragment_begin:nd,clearcoat_normal_fragment_maps:id,clearcoat_pars_fragment:sd,iridescence_pars_fragment:rd,opaque_fragment:ad,packing:od,premultiplied_alpha_fragment:ld,project_vertex:hd,dithering_fragment:cd,dithering_pars_fragment:ud,roughnessmap_fragment:fd,roughnessmap_pars_fragment:dd,shadowmap_pars_fragment:pd,shadowmap_pars_vertex:md,shadowmap_vertex:_d,shadowmask_pars_fragment:gd,skinbase_vertex:vd,skinning_pars_vertex:Md,skinning_vertex:xd,skinnormal_vertex:yd,specularmap_fragment:Sd,specularmap_pars_fragment:Ed,tonemapping_fragment:Td,tonemapping_pars_fragment:bd,transmission_fragment:Ad,transmission_pars_fragment:wd,uv_pars_fragment:Rd,uv_pars_vertex:Cd,uv_vertex:Pd,worldpos_vertex:Ld,background_vert:Dd,background_frag:Id,backgroundCube_vert:Nd,backgroundCube_frag:Ud,cube_vert:Od,cube_frag:Fd,depth_vert:Bd,depth_frag:zd,distanceRGBA_vert:Gd,distanceRGBA_frag:Hd,equirect_vert:kd,equirect_frag:Vd,linedashed_vert:Wd,linedashed_frag:Xd,meshbasic_vert:qd,meshbasic_frag:Yd,meshlambert_vert:jd,meshlambert_frag:$d,meshmatcap_vert:Kd,meshmatcap_frag:Zd,meshnormal_vert:Jd,meshnormal_frag:Qd,meshphong_vert:tp,meshphong_frag:ep,meshphysical_vert:np,meshphysical_frag:ip,meshtoon_vert:sp,meshtoon_frag:rp,points_vert:ap,points_frag:op,shadow_vert:lp,shadow_frag:hp,sprite_vert:cp,sprite_frag:up},lt={common:{diffuse:{value:new Yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Yt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},cn={basic:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Bt.meshbasic_vert,fragmentShader:Bt.meshbasic_frag},lambert:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Bt.meshlambert_vert,fragmentShader:Bt.meshlambert_frag},phong:{uniforms:Pe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)},specular:{value:new Yt(1118481)},shininess:{value:30}}]),vertexShader:Bt.meshphong_vert,fragmentShader:Bt.meshphong_frag},standard:{uniforms:Pe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag},toon:{uniforms:Pe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Yt(0)}}]),vertexShader:Bt.meshtoon_vert,fragmentShader:Bt.meshtoon_frag},matcap:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Bt.meshmatcap_vert,fragmentShader:Bt.meshmatcap_frag},points:{uniforms:Pe([lt.points,lt.fog]),vertexShader:Bt.points_vert,fragmentShader:Bt.points_frag},dashed:{uniforms:Pe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Bt.linedashed_vert,fragmentShader:Bt.linedashed_frag},depth:{uniforms:Pe([lt.common,lt.displacementmap]),vertexShader:Bt.depth_vert,fragmentShader:Bt.depth_frag},normal:{uniforms:Pe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Bt.meshnormal_vert,fragmentShader:Bt.meshnormal_frag},sprite:{uniforms:Pe([lt.sprite,lt.fog]),vertexShader:Bt.sprite_vert,fragmentShader:Bt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Bt.background_vert,fragmentShader:Bt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Bt.backgroundCube_vert,fragmentShader:Bt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Bt.cube_vert,fragmentShader:Bt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Bt.equirect_vert,fragmentShader:Bt.equirect_frag},distanceRGBA:{uniforms:Pe([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Bt.distanceRGBA_vert,fragmentShader:Bt.distanceRGBA_frag},shadow:{uniforms:Pe([lt.lights,lt.fog,{color:{value:new Yt(0)},opacity:{value:1}}]),vertexShader:Bt.shadow_vert,fragmentShader:Bt.shadow_frag}};cn.physical={uniforms:Pe([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Yt(0)},specularColor:{value:new Yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Bt.meshphysical_vert,fragmentShader:Bt.meshphysical_frag};const Vs={r:0,b:0,g:0};function fp(n,t,e,i,s,r,o){const a=new Yt(0);let l=r===!0?0:1,h,u,c=null,f=0,m=null;function _(p,d){let S=!1,M=d.isScene===!0?d.background:null;M&&M.isTexture&&(M=(d.backgroundBlurriness>0?e:t).get(M)),M===null?g(a,l):M&&M.isColor&&(g(M,1),S=!0);const E=n.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),M&&(M.isCubeTexture||M.mapping===dr)?(u===void 0&&(u=new rn(new ps(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:zi(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:Ue,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),u.material.uniforms.envMap.value=M,u.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=Kt.getTransfer(M.colorSpace)!==Qt,(c!==M||f!==M.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,c=M,f=M.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):M&&M.isTexture&&(h===void 0&&(h=new rn(new Pa(2,2),new ni({name:"BackgroundMaterial",uniforms:zi(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=M,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=Kt.getTransfer(M.colorSpace)!==Qt,M.matrixAutoUpdate===!0&&M.updateMatrix(),h.material.uniforms.uvTransform.value.copy(M.matrix),(c!==M||f!==M.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,c=M,f=M.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function g(p,d){p.getRGB(Vs,sh(n)),i.buffers.color.setClear(Vs.r,Vs.g,Vs.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),l=d,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,g(a,l)},render:_}}function dp(n,t,e,i){const s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},l=p(null);let h=l,u=!1;function c(L,k,Y,X,st){let K=!1;if(o){const $=g(X,Y,k);h!==$&&(h=$,m(h.object)),K=d(L,X,Y,st),K&&S(L,X,Y,st)}else{const $=k.wireframe===!0;(h.geometry!==X.id||h.program!==Y.id||h.wireframe!==$)&&(h.geometry=X.id,h.program=Y.id,h.wireframe=$,K=!0)}st!==null&&e.update(st,n.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,F(L,k,Y,X),st!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(st).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(L){return i.isWebGL2?n.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return i.isWebGL2?n.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,k,Y){const X=Y.wireframe===!0;let st=a[L.id];st===void 0&&(st={},a[L.id]=st);let K=st[k.id];K===void 0&&(K={},st[k.id]=K);let $=K[X];return $===void 0&&($=p(f()),K[X]=$),$}function p(L){const k=[],Y=[],X=[];for(let st=0;st<s;st++)k[st]=0,Y[st]=0,X[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:Y,attributeDivisors:X,object:L,attributes:{},index:null}}function d(L,k,Y,X){const st=h.attributes,K=k.attributes;let $=0;const I=Y.getAttributes();for(const H in I)if(I[H].location>=0){const ft=st[H];let _t=K[H];if(_t===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(_t=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(_t=L.instanceColor)),ft===void 0||ft.attribute!==_t||_t&&ft.data!==_t.data)return!0;$++}return h.attributesNum!==$||h.index!==X}function S(L,k,Y,X){const st={},K=k.attributes;let $=0;const I=Y.getAttributes();for(const H in I)if(I[H].location>=0){let ft=K[H];ft===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(ft=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(ft=L.instanceColor));const _t={};_t.attribute=ft,ft&&ft.data&&(_t.data=ft.data),st[H]=_t,$++}h.attributes=st,h.attributesNum=$,h.index=X}function M(){const L=h.newAttributes;for(let k=0,Y=L.length;k<Y;k++)L[k]=0}function E(L){T(L,0)}function T(L,k){const Y=h.newAttributes,X=h.enabledAttributes,st=h.attributeDivisors;Y[L]=1,X[L]===0&&(n.enableVertexAttribArray(L),X[L]=1),st[L]!==k&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,k),st[L]=k)}function R(){const L=h.newAttributes,k=h.enabledAttributes;for(let Y=0,X=k.length;Y<X;Y++)k[Y]!==L[Y]&&(n.disableVertexAttribArray(Y),k[Y]=0)}function A(L,k,Y,X,st,K,$){$===!0?n.vertexAttribIPointer(L,k,Y,st,K):n.vertexAttribPointer(L,k,Y,X,st,K)}function F(L,k,Y,X){if(i.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;M();const st=X.attributes,K=Y.getAttributes(),$=k.defaultAttributeValues;for(const I in K){const H=K[I];if(H.location>=0){let ut=st[I];if(ut===void 0&&(I==="instanceMatrix"&&L.instanceMatrix&&(ut=L.instanceMatrix),I==="instanceColor"&&L.instanceColor&&(ut=L.instanceColor)),ut!==void 0){const ft=ut.normalized,_t=ut.itemSize,At=e.get(ut);if(At===void 0)continue;const kt=At.buffer,wt=At.type,Dt=At.bytesPerElement,Jt=i.isWebGL2===!0&&(wt===n.INT||wt===n.UNSIGNED_INT||ut.gpuType===Vl);if(ut.isInterleavedBufferAttribute){const Ft=ut.data,U=Ft.stride,ye=ut.offset;if(Ft.isInstancedInterleavedBuffer){for(let St=0;St<H.locationSize;St++)T(H.location+St,Ft.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Ft.meshPerAttribute*Ft.count)}else for(let St=0;St<H.locationSize;St++)E(H.location+St);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let St=0;St<H.locationSize;St++)A(H.location+St,_t/H.locationSize,wt,ft,U*Dt,(ye+_t/H.locationSize*St)*Dt,Jt)}else{if(ut.isInstancedBufferAttribute){for(let Ft=0;Ft<H.locationSize;Ft++)T(H.location+Ft,ut.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ft=0;Ft<H.locationSize;Ft++)E(H.location+Ft);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let Ft=0;Ft<H.locationSize;Ft++)A(H.location+Ft,_t/H.locationSize,wt,ft,_t*Dt,_t/H.locationSize*Ft*Dt,Jt)}}else if($!==void 0){const ft=$[I];if(ft!==void 0)switch(ft.length){case 2:n.vertexAttrib2fv(H.location,ft);break;case 3:n.vertexAttrib3fv(H.location,ft);break;case 4:n.vertexAttrib4fv(H.location,ft);break;default:n.vertexAttrib1fv(H.location,ft)}}}}R()}function y(){j();for(const L in a){const k=a[L];for(const Y in k){const X=k[Y];for(const st in X)_(X[st].object),delete X[st];delete k[Y]}delete a[L]}}function w(L){if(a[L.id]===void 0)return;const k=a[L.id];for(const Y in k){const X=k[Y];for(const st in X)_(X[st].object),delete X[st];delete k[Y]}delete a[L.id]}function W(L){for(const k in a){const Y=a[k];if(Y[L.id]===void 0)continue;const X=Y[L.id];for(const st in X)_(X[st].object),delete X[st];delete Y[L.id]}}function j(){tt(),u=!0,h!==l&&(h=l,m(h.object))}function tt(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:c,reset:j,resetDefaultState:tt,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfProgram:W,initAttributes:M,enableAttribute:E,disableUnusedAttributes:R}}function pp(n,t,e,i){const s=i.isWebGL2;let r;function o(h){r=h}function a(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,c){if(c===0)return;let f,m;if(s)f=n,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](r,h,u,c),e.update(u,r,c)}this.setMode=o,this.render=a,this.renderInstances=l}function mp(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const l=r(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const h=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),M=f>0,E=o||t.has("OES_texture_float"),T=M&&E,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:M,floatFragmentTextures:E,floatVertexTextures:T,maxSamples:R}}function _p(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new Ln,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){const m=c.length!==0||f||i!==0||s;return s=f,i=c.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,m){const _=c.clippingPlanes,g=c.clipIntersection,p=c.clipShadows,d=n.get(c);if(!s||_===null||_.length===0||r&&!p)r?u(null):h();else{const S=r?0:i,M=S*4;let E=d.clippingState||null;l.value=E,E=u(_,f,M,m);for(let T=0;T!==M;++T)E[T]=e[T];d.clippingState=E,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function h(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(c,f,m,_){const g=c!==null?c.length:0;let p=null;if(g!==0){if(p=l.value,_!==!0||p===null){const d=m+g*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<d)&&(p=new Float32Array(d));for(let M=0,E=m;M!==g;++M,E+=4)o.copy(c[M]).applyMatrix4(S,a),o.normal.toArray(p,E),p[E+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,p}}function gp(n){let t=new WeakMap;function e(o,a){return a===fa?o.mapping=Oi:a===da&&(o.mapping=Fi),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===fa||a===da)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const h=new Pu(l.height/2);return h.fromEquirectangularTexture(n,o),t.set(o,h),o.addEventListener("dispose",s),e(h.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class lh extends rh{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,o=r+h*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const wi=4,Wo=[.125,.215,.35,.446,.526,.582],Zn=20,Kr=new lh,Xo=new Yt;let Zr=null,Jr=0,Qr=0;const $n=(1+Math.sqrt(5))/2,Ei=1/$n,qo=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,$n,Ei),new D(0,$n,-Ei),new D(Ei,0,$n),new D(-Ei,0,$n),new D($n,Ei,0),new D(-$n,Ei,0)];class Yo{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ko(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$o(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zr,Jr,Qr),t.scissorTest=!1,Ws(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Oi||t.mapping===Fi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zr=this._renderer.getRenderTarget(),Jr=this._renderer.getActiveCubeFace(),Qr=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:je,minFilter:je,generateMipmaps:!1,type:as,format:nn,colorSpace:Tn,depthBuffer:!1},s=jo(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jo(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=vp(r)),this._blurMaterial=Mp(r,t,e)}return s}_compileMaterial(t){const e=new rn(this._lodPlanes[0],t);this._renderer.compile(e,Kr)}_sceneToCubeUV(t,e,i,s){const a=new $e(90,1,e,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,f=u.toneMapping;u.getClearColor(Xo),u.toneMapping=Un,u.autoClear=!1;const m=new ds({name:"PMREM.Background",side:Ue,depthWrite:!1,depthTest:!1}),_=new rn(new ps,m);let g=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,g=!0):(m.color.copy(Xo),g=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(a.up.set(0,l[d],0),a.lookAt(h[d],0,0)):S===1?(a.up.set(0,0,l[d]),a.lookAt(0,h[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,h[d]));const M=this._cubeSize;Ws(s,S*M,d>2?M:0,M,M),u.setRenderTarget(s),g&&u.render(_,a),u.render(t,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=f,u.autoClear=c,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Oi||t.mapping===Fi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ko()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$o());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new rn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ws(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,Kr)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=qo[(s-1)%qo.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new rn(this._lodPlanes[s],h),f=h.uniforms,m=this._sizeLods[i]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Zn-1),g=r/_,p=isFinite(r)?1+Math.floor(u*g):Zn;p>Zn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Zn}`);const d=[];let S=0;for(let A=0;A<Zn;++A){const F=A/g,y=Math.exp(-F*F/2);d.push(y),A===0?S+=y:A<p&&(S+=2*y)}for(let A=0;A<d.length;A++)d[A]=d[A]/S;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:M}=this;f.dTheta.value=_,f.mipInt.value=M-i;const E=this._sizeLods[s],T=3*E*(s>M-wi?s-M+wi:0),R=4*(this._cubeSize-E);Ws(e,T,R,3*E,2*E),l.setRenderTarget(e),l.render(c,Kr)}}function vp(n){const t=[],e=[],i=[];let s=n;const r=n-wi+1+Wo.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-wi?l=Wo[o-n+wi-1]:o===0&&(l=0),i.push(l);const h=1/(a-2),u=-h,c=1+h,f=[u,u,c,u,c,c,u,u,c,c,u,c],m=6,_=6,g=3,p=2,d=1,S=new Float32Array(g*_*m),M=new Float32Array(p*_*m),E=new Float32Array(d*_*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,F=R>2?0:-1,y=[A,F,0,A+2/3,F,0,A+2/3,F+1,0,A,F,0,A+2/3,F+1,0,A,F+1,0];S.set(y,g*_*R),M.set(f,p*_*R);const w=[R,R,R,R,R,R];E.set(w,d*_*R)}const T=new on;T.setAttribute("position",new dn(S,g)),T.setAttribute("uv",new dn(M,p)),T.setAttribute("faceIndex",new dn(E,d)),t.push(T),s>wi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function jo(n,t,e){const i=new ei(n,t,e);return i.texture.mapping=dr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ws(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Mp(n,t,e){const i=new Float32Array(Zn),s=new D(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:Zn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function $o(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function Ko(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:La(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Nn,depthTest:!1,depthWrite:!1})}function La(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function xp(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,h=l===fa||l===da,u=l===Oi||l===Fi;if(h||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let c=t.get(a);return e===null&&(e=new Yo(n)),c=h?e.fromEquirectangular(a,c):e.fromCubemap(a,c),t.set(a,c),c.texture}else{if(t.has(a))return t.get(a).texture;{const c=a.image;if(h&&c&&c.height>0||u&&c&&s(c)){e===null&&(e=new Yo(n));const f=h?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let l=0;const h=6;for(let u=0;u<h;u++)a[u]!==void 0&&l++;return l===h}function r(a){const l=a.target;l.removeEventListener("dispose",r);const h=t.get(l);h!==void 0&&(t.delete(l),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function yp(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Sp(n,t,e,i){const s={},r=new WeakMap;function o(c){const f=c.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const g=f.morphAttributes[_];for(let p=0,d=g.length;p<d;p++)t.remove(g[p])}f.removeEventListener("dispose",o),delete s[f.id];const m=r.get(f);m&&(t.remove(m),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(c,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(c){const f=c.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const m=c.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,d=g.length;p<d;p++)t.update(g[p],n.ARRAY_BUFFER)}}function h(c){const f=[],m=c.index,_=c.attributes.position;let g=0;if(m!==null){const S=m.array;g=m.version;for(let M=0,E=S.length;M<E;M+=3){const T=S[M+0],R=S[M+1],A=S[M+2];f.push(T,R,R,A,A,T)}}else if(_!==void 0){const S=_.array;g=_.version;for(let M=0,E=S.length/3-1;M<E;M+=3){const T=M+0,R=M+1,A=M+2;f.push(T,R,R,A,A,T)}}else return;const p=new(Kl(f)?ih:nh)(f,1);p.version=g;const d=r.get(c);d&&t.remove(d),r.set(c,p)}function u(c){const f=r.get(c);if(f){const m=c.index;m!==null&&f.version<m.version&&h(c)}else h(c);return r.get(c)}return{get:a,update:l,getWireframeAttribute:u}}function Ep(n,t,e,i){const s=i.isWebGL2;let r;function o(f){r=f}let a,l;function h(f){a=f.type,l=f.bytesPerElement}function u(f,m){n.drawElements(r,m,a,f*l),e.update(m,r,1)}function c(f,m,_){if(_===0)return;let g,p;if(s)g=n,p="drawElementsInstanced";else if(g=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](r,m,a,f*l,_),e.update(m,r,_)}this.setMode=o,this.setIndex=h,this.render=u,this.renderInstances=c}function Tp(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function bp(n,t){return n[0]-t[0]}function Ap(n,t){return Math.abs(t[1])-Math.abs(n[1])}function wp(n,t,e){const i={},s=new Float32Array(8),r=new WeakMap,o=new ge,a=[];for(let h=0;h<8;h++)a[h]=[h,0];function l(h,u,c){const f=h.morphTargetInfluences;if(t.isWebGL2===!0){const _=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let k=function(){tt.dispose(),r.delete(u),u.removeEventListener("dispose",k)};var m=k;p!==void 0&&p.texture.dispose();const M=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],F=u.morphAttributes.color||[];let y=0;M===!0&&(y=1),E===!0&&(y=2),T===!0&&(y=3);let w=u.attributes.position.count*y,W=1;w>t.maxTextureSize&&(W=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const j=new Float32Array(w*W*4*g),tt=new Ql(j,w,W,g);tt.type=In,tt.needsUpdate=!0;const L=y*4;for(let Y=0;Y<g;Y++){const X=R[Y],st=A[Y],K=F[Y],$=w*W*4*Y;for(let I=0;I<X.count;I++){const H=I*L;M===!0&&(o.fromBufferAttribute(X,I),j[$+H+0]=o.x,j[$+H+1]=o.y,j[$+H+2]=o.z,j[$+H+3]=0),E===!0&&(o.fromBufferAttribute(st,I),j[$+H+4]=o.x,j[$+H+5]=o.y,j[$+H+6]=o.z,j[$+H+7]=0),T===!0&&(o.fromBufferAttribute(K,I),j[$+H+8]=o.x,j[$+H+9]=o.y,j[$+H+10]=o.z,j[$+H+11]=K.itemSize===4?o.w:1)}}p={count:g,texture:tt,size:new zt(w,W)},r.set(u,p),u.addEventListener("dispose",k)}let d=0;for(let M=0;M<f.length;M++)d+=f[M];const S=u.morphTargetsRelative?1:1-d;c.getUniforms().setValue(n,"morphTargetBaseInfluence",S),c.getUniforms().setValue(n,"morphTargetInfluences",f),c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let g=i[u.id];if(g===void 0||g.length!==_){g=[];for(let E=0;E<_;E++)g[E]=[E,0];i[u.id]=g}for(let E=0;E<_;E++){const T=g[E];T[0]=E,T[1]=f[E]}g.sort(Ap);for(let E=0;E<8;E++)E<_&&g[E][1]?(a[E][0]=g[E][0],a[E][1]=g[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(bp);const p=u.morphAttributes.position,d=u.morphAttributes.normal;let S=0;for(let E=0;E<8;E++){const T=a[E],R=T[0],A=T[1];R!==Number.MAX_SAFE_INTEGER&&A?(p&&u.getAttribute("morphTarget"+E)!==p[R]&&u.setAttribute("morphTarget"+E,p[R]),d&&u.getAttribute("morphNormal"+E)!==d[R]&&u.setAttribute("morphNormal"+E,d[R]),s[E]=A,S+=A):(p&&u.hasAttribute("morphTarget"+E)===!0&&u.deleteAttribute("morphTarget"+E),d&&u.hasAttribute("morphNormal"+E)===!0&&u.deleteAttribute("morphNormal"+E),s[E]=0)}const M=u.morphTargetsRelative?1:1-S;c.getUniforms().setValue(n,"morphTargetBaseInfluence",M),c.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function Rp(n,t,e,i){let s=new WeakMap;function r(l){const h=i.render.frame,u=l.geometry,c=t.get(l,u);if(s.get(c)!==h&&(t.update(c),s.set(c,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==h&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==h&&(f.update(),s.set(f,h))}return c}function o(){s=new WeakMap}function a(l){const h=l.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:o}}const hh=new ke,ch=new Ql,uh=new du,fh=new ah,Zo=[],Jo=[],Qo=new Float32Array(16),tl=new Float32Array(9),el=new Float32Array(4);function Vi(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Zo[s];if(r===void 0&&(r=new Float32Array(s),Zo[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function fe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function de(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function gr(n,t){let e=Jo[t];e===void 0&&(e=new Int32Array(t),Jo[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Cp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Pp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2fv(this.addr,t),de(e,t)}}function Lp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fe(e,t))return;n.uniform3fv(this.addr,t),de(e,t)}}function Dp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4fv(this.addr,t),de(e,t)}}function Ip(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),de(e,t)}else{if(fe(e,i))return;el.set(i),n.uniformMatrix2fv(this.addr,!1,el),de(e,i)}}function Np(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),de(e,t)}else{if(fe(e,i))return;tl.set(i),n.uniformMatrix3fv(this.addr,!1,tl),de(e,i)}}function Up(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(fe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),de(e,t)}else{if(fe(e,i))return;Qo.set(i),n.uniformMatrix4fv(this.addr,!1,Qo),de(e,i)}}function Op(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Fp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2iv(this.addr,t),de(e,t)}}function Bp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;n.uniform3iv(this.addr,t),de(e,t)}}function zp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4iv(this.addr,t),de(e,t)}}function Gp(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Hp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fe(e,t))return;n.uniform2uiv(this.addr,t),de(e,t)}}function kp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fe(e,t))return;n.uniform3uiv(this.addr,t),de(e,t)}}function Vp(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fe(e,t))return;n.uniform4uiv(this.addr,t),de(e,t)}}function Wp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2D(t||hh,s)}function Xp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||uh,s)}function qp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||fh,s)}function Yp(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||ch,s)}function jp(n){switch(n){case 5126:return Cp;case 35664:return Pp;case 35665:return Lp;case 35666:return Dp;case 35674:return Ip;case 35675:return Np;case 35676:return Up;case 5124:case 35670:return Op;case 35667:case 35671:return Fp;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return Gp;case 36294:return Hp;case 36295:return kp;case 36296:return Vp;case 35678:case 36198:case 36298:case 36306:case 35682:return Wp;case 35679:case 36299:case 36307:return Xp;case 35680:case 36300:case 36308:case 36293:return qp;case 36289:case 36303:case 36311:case 36292:return Yp}}function $p(n,t){n.uniform1fv(this.addr,t)}function Kp(n,t){const e=Vi(t,this.size,2);n.uniform2fv(this.addr,e)}function Zp(n,t){const e=Vi(t,this.size,3);n.uniform3fv(this.addr,e)}function Jp(n,t){const e=Vi(t,this.size,4);n.uniform4fv(this.addr,e)}function Qp(n,t){const e=Vi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function tm(n,t){const e=Vi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function em(n,t){const e=Vi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function nm(n,t){n.uniform1iv(this.addr,t)}function im(n,t){n.uniform2iv(this.addr,t)}function sm(n,t){n.uniform3iv(this.addr,t)}function rm(n,t){n.uniform4iv(this.addr,t)}function am(n,t){n.uniform1uiv(this.addr,t)}function om(n,t){n.uniform2uiv(this.addr,t)}function lm(n,t){n.uniform3uiv(this.addr,t)}function hm(n,t){n.uniform4uiv(this.addr,t)}function cm(n,t,e){const i=this.cache,s=t.length,r=gr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),de(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||hh,r[o])}function um(n,t,e){const i=this.cache,s=t.length,r=gr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),de(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||uh,r[o])}function fm(n,t,e){const i=this.cache,s=t.length,r=gr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),de(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||fh,r[o])}function dm(n,t,e){const i=this.cache,s=t.length,r=gr(e,s);fe(i,r)||(n.uniform1iv(this.addr,r),de(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ch,r[o])}function pm(n){switch(n){case 5126:return $p;case 35664:return Kp;case 35665:return Zp;case 35666:return Jp;case 35674:return Qp;case 35675:return tm;case 35676:return em;case 5124:case 35670:return nm;case 35667:case 35671:return im;case 35668:case 35672:return sm;case 35669:case 35673:return rm;case 5125:return am;case 36294:return om;case 36295:return lm;case 36296:return hm;case 35678:case 36198:case 36298:case 36306:case 35682:return cm;case 35679:case 36299:case 36307:return um;case 35680:case 36300:case 36308:case 36293:return fm;case 36289:case 36303:case 36311:case 36292:return dm}}class mm{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=jp(e.type)}}class _m{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=pm(e.type)}}class gm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const ta=/(\w+)(\])?(\[|\.)?/g;function nl(n,t){n.seq.push(t),n.map[t.id]=t}function vm(n,t,e){const i=n.name,s=i.length;for(ta.lastIndex=0;;){const r=ta.exec(i),o=ta.lastIndex;let a=r[1];const l=r[2]==="]",h=r[3];if(l&&(a=a|0),h===void 0||h==="["&&o+2===s){nl(e,h===void 0?new mm(a,n,t):new _m(a,n,t));break}else{let c=e.map[a];c===void 0&&(c=new gm(a),nl(e,c)),e=c}}}class Zs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);vm(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function il(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const Mm=37297;let xm=0;function ym(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Sm(n){const t=Kt.getPrimaries(Kt.workingColorSpace),e=Kt.getPrimaries(n);let i;switch(t===e?i="":t===sr&&e===ir?i="LinearDisplayP3ToLinearSRGB":t===ir&&e===sr&&(i="LinearSRGBToLinearDisplayP3"),n){case Tn:case pr:return[i,"LinearTransferOETF"];case Me:case Aa:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function sl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ym(n.getShaderSource(t),o)}else return s}function Em(n,t){const e=Sm(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Tm(n,t){let e;switch(t){case xc:e="Linear";break;case yc:e="Reinhard";break;case Sc:e="OptimizedCineon";break;case Ec:e="ACESFilmic";break;case Tc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function bm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zi).join(`
`)}function Am(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function wm(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Zi(n){return n!==""}function rl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function al(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function va(n){return n.replace(Rm,Pm)}const Cm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Pm(n,t){let e=Bt[t];if(e===void 0){const i=Cm.get(t);if(i!==void 0)e=Bt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return va(e)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ol(n){return n.replace(Lm,Dm)}function Dm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ll(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Im(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Sn&&(t="SHADOWMAP_TYPE_VSM"),t}function Nm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Oi:case Fi:t="ENVMAP_TYPE_CUBE";break;case dr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Um(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fi:t="ENVMAP_MODE_REFRACTION";break}return t}function Om(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hl:t="ENVMAP_BLENDING_MULTIPLY";break;case vc:t="ENVMAP_BLENDING_MIX";break;case Mc:t="ENVMAP_BLENDING_ADD";break}return t}function Fm(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Bm(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Im(e),h=Nm(e),u=Um(e),c=Om(e),f=Fm(e),m=e.isWebGL2?"":bm(e),_=Am(r),g=s.createProgram();let p,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Zi).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Zi).join(`
`),d.length>0&&(d+=`
`)):(p=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),d=[m,ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?Bt.tonemapping_pars_fragment:"",e.toneMapping!==Un?Tm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Bt.colorspace_pars_fragment,Em("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Zi).join(`
`)),o=va(o),o=rl(o,e),o=al(o,e),a=va(a),a=rl(a,e),a=al(a,e),o=ol(o),a=ol(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Ao?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ao?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const M=S+p+o,E=S+d+a,T=il(s,s.VERTEX_SHADER,M),R=il(s,s.FRAGMENT_SHADER,E);s.attachShader(g,T),s.attachShader(g,R),e.index0AttributeName!==void 0?s.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function A(W){if(n.debug.checkShaderErrors){const j=s.getProgramInfoLog(g).trim(),tt=s.getShaderInfoLog(T).trim(),L=s.getShaderInfoLog(R).trim();let k=!0,Y=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(k=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,g,T,R);else{const X=sl(s,T,"vertex"),st=sl(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Program Info Log: `+j+`
`+X+`
`+st)}else j!==""?console.warn("THREE.WebGLProgram: Program Info Log:",j):(tt===""||L==="")&&(Y=!1);Y&&(W.diagnostics={runnable:k,programLog:j,vertexShader:{log:tt,prefix:p},fragmentShader:{log:L,prefix:d}})}s.deleteShader(T),s.deleteShader(R),F=new Zs(s,g),y=wm(s,g)}let F;this.getUniforms=function(){return F===void 0&&A(this),F};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let w=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=s.getProgramParameter(g,Mm)),w},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xm++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=R,this}let zm=0;class Gm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Hm(t),e.set(t,i)),i}}class Hm{constructor(t){this.id=zm++,this.code=t,this.usedTimes=0}}function km(n,t,e,i,s,r,o){const a=new th,l=new Gm,h=[],u=s.isWebGL2,c=s.logarithmicDepthBuffer,f=s.vertexTextures;let m=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return y===0?"uv":`uv${y}`}function p(y,w,W,j,tt){const L=j.fog,k=tt.geometry,Y=y.isMeshStandardMaterial?j.environment:null,X=(y.isMeshStandardMaterial?e:t).get(y.envMap||Y),st=X&&X.mapping===dr?X.image.height:null,K=_[y.type];y.precision!==null&&(m=s.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const $=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,I=$!==void 0?$.length:0;let H=0;k.morphAttributes.position!==void 0&&(H=1),k.morphAttributes.normal!==void 0&&(H=2),k.morphAttributes.color!==void 0&&(H=3);let ut,ft,_t,At;if(K){const oe=cn[K];ut=oe.vertexShader,ft=oe.fragmentShader}else ut=y.vertexShader,ft=y.fragmentShader,l.update(y),_t=l.getVertexShaderID(y),At=l.getFragmentShaderID(y);const kt=n.getRenderTarget(),wt=tt.isInstancedMesh===!0,Dt=!!y.map,Jt=!!y.matcap,Ft=!!X,U=!!y.aoMap,ye=!!y.lightMap,St=!!y.bumpMap,Rt=!!y.normalMap,Ct=!!y.displacementMap,te=!!y.emissiveMap,Ut=!!y.metalnessMap,It=!!y.roughnessMap,qt=y.anisotropy>0,ae=y.clearcoat>0,pe=y.iridescence>0,b=y.sheen>0,v=y.transmission>0,O=qt&&!!y.anisotropyMap,et=ae&&!!y.clearcoatMap,Z=ae&&!!y.clearcoatNormalMap,nt=ae&&!!y.clearcoatRoughnessMap,vt=pe&&!!y.iridescenceMap,at=pe&&!!y.iridescenceThicknessMap,ct=b&&!!y.sheenColorMap,C=b&&!!y.sheenRoughnessMap,rt=!!y.specularMap,q=!!y.specularColorMap,Tt=!!y.specularIntensityMap,Mt=v&&!!y.transmissionMap,Et=v&&!!y.thicknessMap,gt=!!y.gradientMap,mt=!!y.alphaMap,Vt=y.alphaTest>0,P=!!y.alphaHash,ot=!!y.extensions,J=!!k.attributes.uv1,V=!!k.attributes.uv2,it=!!k.attributes.uv3;let yt=Un;return y.toneMapped&&(kt===null||kt.isXRRenderTarget===!0)&&(yt=n.toneMapping),{isWebGL2:u,shaderID:K,shaderType:y.type,shaderName:y.name,vertexShader:ut,fragmentShader:ft,defines:y.defines,customVertexShaderID:_t,customFragmentShaderID:At,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,instancing:wt,instancingColor:wt&&tt.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:kt===null?n.outputColorSpace:kt.isXRRenderTarget===!0?kt.texture.colorSpace:Tn,map:Dt,matcap:Jt,envMap:Ft,envMapMode:Ft&&X.mapping,envMapCubeUVHeight:st,aoMap:U,lightMap:ye,bumpMap:St,normalMap:Rt,displacementMap:f&&Ct,emissiveMap:te,normalMapObjectSpace:Rt&&y.normalMapType===Bc,normalMapTangentSpace:Rt&&y.normalMapType===Fc,metalnessMap:Ut,roughnessMap:It,anisotropy:qt,anisotropyMap:O,clearcoat:ae,clearcoatMap:et,clearcoatNormalMap:Z,clearcoatRoughnessMap:nt,iridescence:pe,iridescenceMap:vt,iridescenceThicknessMap:at,sheen:b,sheenColorMap:ct,sheenRoughnessMap:C,specularMap:rt,specularColorMap:q,specularIntensityMap:Tt,transmission:v,transmissionMap:Mt,thicknessMap:Et,gradientMap:gt,opaque:y.transparent===!1&&y.blending===Di,alphaMap:mt,alphaTest:Vt,alphaHash:P,combine:y.combine,mapUv:Dt&&g(y.map.channel),aoMapUv:U&&g(y.aoMap.channel),lightMapUv:ye&&g(y.lightMap.channel),bumpMapUv:St&&g(y.bumpMap.channel),normalMapUv:Rt&&g(y.normalMap.channel),displacementMapUv:Ct&&g(y.displacementMap.channel),emissiveMapUv:te&&g(y.emissiveMap.channel),metalnessMapUv:Ut&&g(y.metalnessMap.channel),roughnessMapUv:It&&g(y.roughnessMap.channel),anisotropyMapUv:O&&g(y.anisotropyMap.channel),clearcoatMapUv:et&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:Z&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:at&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ct&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:C&&g(y.sheenRoughnessMap.channel),specularMapUv:rt&&g(y.specularMap.channel),specularColorMapUv:q&&g(y.specularColorMap.channel),specularIntensityMapUv:Tt&&g(y.specularIntensityMap.channel),transmissionMapUv:Mt&&g(y.transmissionMap.channel),thicknessMapUv:Et&&g(y.thicknessMap.channel),alphaMapUv:mt&&g(y.alphaMap.channel),vertexTangents:!!k.attributes.tangent&&(Rt||qt),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,vertexUv1s:J,vertexUv2s:V,vertexUv3s:it,pointsUvs:tt.isPoints===!0&&!!k.attributes.uv&&(Dt||mt),fog:!!L,useFog:y.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:tt.isSkinnedMesh===!0,morphTargets:k.morphAttributes.position!==void 0,morphNormals:k.morphAttributes.normal!==void 0,morphColors:k.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:H,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&W.length>0,shadowMapType:n.shadowMap.type,toneMapping:yt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Dt&&y.map.isVideoTexture===!0&&Kt.getTransfer(y.map.colorSpace)===Qt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===un,flipSided:y.side===Ue,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:ot&&y.extensions.derivatives===!0,extensionFragDepth:ot&&y.extensions.fragDepth===!0,extensionDrawBuffers:ot&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:ot&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()}}function d(y){const w=[];if(y.shaderID?w.push(y.shaderID):(w.push(y.customVertexShaderID),w.push(y.customFragmentShaderID)),y.defines!==void 0)for(const W in y.defines)w.push(W),w.push(y.defines[W]);return y.isRawShaderMaterial===!1&&(S(w,y),M(w,y),w.push(n.outputColorSpace)),w.push(y.customProgramCacheKey),w.join()}function S(y,w){y.push(w.precision),y.push(w.outputColorSpace),y.push(w.envMapMode),y.push(w.envMapCubeUVHeight),y.push(w.mapUv),y.push(w.alphaMapUv),y.push(w.lightMapUv),y.push(w.aoMapUv),y.push(w.bumpMapUv),y.push(w.normalMapUv),y.push(w.displacementMapUv),y.push(w.emissiveMapUv),y.push(w.metalnessMapUv),y.push(w.roughnessMapUv),y.push(w.anisotropyMapUv),y.push(w.clearcoatMapUv),y.push(w.clearcoatNormalMapUv),y.push(w.clearcoatRoughnessMapUv),y.push(w.iridescenceMapUv),y.push(w.iridescenceThicknessMapUv),y.push(w.sheenColorMapUv),y.push(w.sheenRoughnessMapUv),y.push(w.specularMapUv),y.push(w.specularColorMapUv),y.push(w.specularIntensityMapUv),y.push(w.transmissionMapUv),y.push(w.thicknessMapUv),y.push(w.combine),y.push(w.fogExp2),y.push(w.sizeAttenuation),y.push(w.morphTargetsCount),y.push(w.morphAttributeCount),y.push(w.numDirLights),y.push(w.numPointLights),y.push(w.numSpotLights),y.push(w.numSpotLightMaps),y.push(w.numHemiLights),y.push(w.numRectAreaLights),y.push(w.numDirLightShadows),y.push(w.numPointLightShadows),y.push(w.numSpotLightShadows),y.push(w.numSpotLightShadowsWithMaps),y.push(w.numLightProbes),y.push(w.shadowMapType),y.push(w.toneMapping),y.push(w.numClippingPlanes),y.push(w.numClipIntersection),y.push(w.depthPacking)}function M(y,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.matcap&&a.enable(4),w.envMap&&a.enable(5),w.normalMapObjectSpace&&a.enable(6),w.normalMapTangentSpace&&a.enable(7),w.clearcoat&&a.enable(8),w.iridescence&&a.enable(9),w.alphaTest&&a.enable(10),w.vertexColors&&a.enable(11),w.vertexAlphas&&a.enable(12),w.vertexUv1s&&a.enable(13),w.vertexUv2s&&a.enable(14),w.vertexUv3s&&a.enable(15),w.vertexTangents&&a.enable(16),w.anisotropy&&a.enable(17),w.alphaHash&&a.enable(18),y.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.useLegacyLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.transmission&&a.enable(15),w.sheen&&a.enable(16),w.opaque&&a.enable(17),w.pointsUvs&&a.enable(18),w.decodeVideoTexture&&a.enable(19),y.push(a.mask)}function E(y){const w=_[y.type];let W;if(w){const j=cn[w];W=Au.clone(j.uniforms)}else W=y.uniforms;return W}function T(y,w){let W;for(let j=0,tt=h.length;j<tt;j++){const L=h[j];if(L.cacheKey===w){W=L,++W.usedTimes;break}}return W===void 0&&(W=new Bm(n,w,y,r),h.push(W)),W}function R(y){if(--y.usedTimes===0){const w=h.indexOf(y);h[w]=h[h.length-1],h.pop(),y.destroy()}}function A(y){l.remove(y)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:E,acquireProgram:T,releaseProgram:R,releaseShaderCache:A,programs:h,dispose:F}}function Vm(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function Wm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function cl(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(c,f,m,_,g,p){let d=n[t];return d===void 0?(d={id:c.id,object:c,geometry:f,material:m,groupOrder:_,renderOrder:c.renderOrder,z:g,group:p},n[t]=d):(d.id=c.id,d.object=c,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=c.renderOrder,d.z=g,d.group=p),t++,d}function a(c,f,m,_,g,p){const d=o(c,f,m,_,g,p);m.transmission>0?i.push(d):m.transparent===!0?s.push(d):e.push(d)}function l(c,f,m,_,g,p){const d=o(c,f,m,_,g,p);m.transmission>0?i.unshift(d):m.transparent===!0?s.unshift(d):e.unshift(d)}function h(c,f){e.length>1&&e.sort(c||Wm),i.length>1&&i.sort(f||hl),s.length>1&&s.sort(f||hl)}function u(){for(let c=t,f=n.length;c<f;c++){const m=n[c];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:h}}function Xm(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new cl,n.set(i,[o])):s>=r.length?(o=new cl,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function qm(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Yt};break;case"SpotLight":e={position:new D,direction:new D,color:new Yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Yt,groundColor:new Yt};break;case"RectAreaLight":e={color:new Yt,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function Ym(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let jm=0;function $m(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Km(n,t){const e=new qm,i=Ym(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)s.probe.push(new D);const r=new D,o=new ce,a=new ce;function l(u,c){let f=0,m=0,_=0;for(let j=0;j<9;j++)s.probe[j].set(0,0,0);let g=0,p=0,d=0,S=0,M=0,E=0,T=0,R=0,A=0,F=0,y=0;u.sort($m);const w=c===!0?Math.PI:1;for(let j=0,tt=u.length;j<tt;j++){const L=u[j],k=L.color,Y=L.intensity,X=L.distance,st=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=k.r*Y*w,m+=k.g*Y*w,_+=k.b*Y*w;else if(L.isLightProbe){for(let K=0;K<9;K++)s.probe[K].addScaledVector(L.sh.coefficients[K],Y);y++}else if(L.isDirectionalLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*w),L.castShadow){const $=L.shadow,I=i.get(L);I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,s.directionalShadow[g]=I,s.directionalShadowMap[g]=st,s.directionalShadowMatrix[g]=L.shadow.matrix,E++}s.directional[g]=K,g++}else if(L.isSpotLight){const K=e.get(L);K.position.setFromMatrixPosition(L.matrixWorld),K.color.copy(k).multiplyScalar(Y*w),K.distance=X,K.coneCos=Math.cos(L.angle),K.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),K.decay=L.decay,s.spot[d]=K;const $=L.shadow;if(L.map&&(s.spotLightMap[A]=L.map,A++,$.updateMatrices(L),L.castShadow&&F++),s.spotLightMatrix[d]=$.matrix,L.castShadow){const I=i.get(L);I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,s.spotShadow[d]=I,s.spotShadowMap[d]=st,R++}d++}else if(L.isRectAreaLight){const K=e.get(L);K.color.copy(k).multiplyScalar(Y),K.halfWidth.set(L.width*.5,0,0),K.halfHeight.set(0,L.height*.5,0),s.rectArea[S]=K,S++}else if(L.isPointLight){const K=e.get(L);if(K.color.copy(L.color).multiplyScalar(L.intensity*w),K.distance=L.distance,K.decay=L.decay,L.castShadow){const $=L.shadow,I=i.get(L);I.shadowBias=$.bias,I.shadowNormalBias=$.normalBias,I.shadowRadius=$.radius,I.shadowMapSize=$.mapSize,I.shadowCameraNear=$.camera.near,I.shadowCameraFar=$.camera.far,s.pointShadow[p]=I,s.pointShadowMap[p]=st,s.pointShadowMatrix[p]=L.shadow.matrix,T++}s.point[p]=K,p++}else if(L.isHemisphereLight){const K=e.get(L);K.skyColor.copy(L.color).multiplyScalar(Y*w),K.groundColor.copy(L.groundColor).multiplyScalar(Y*w),s.hemi[M]=K,M++}}S>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=m,s.ambient[2]=_;const W=s.hash;(W.directionalLength!==g||W.pointLength!==p||W.spotLength!==d||W.rectAreaLength!==S||W.hemiLength!==M||W.numDirectionalShadows!==E||W.numPointShadows!==T||W.numSpotShadows!==R||W.numSpotMaps!==A||W.numLightProbes!==y)&&(s.directional.length=g,s.spot.length=d,s.rectArea.length=S,s.point.length=p,s.hemi.length=M,s.directionalShadow.length=E,s.directionalShadowMap.length=E,s.pointShadow.length=T,s.pointShadowMap.length=T,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=E,s.pointShadowMatrix.length=T,s.spotLightMatrix.length=R+A-F,s.spotLightMap.length=A,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=y,W.directionalLength=g,W.pointLength=p,W.spotLength=d,W.rectAreaLength=S,W.hemiLength=M,W.numDirectionalShadows=E,W.numPointShadows=T,W.numSpotShadows=R,W.numSpotMaps=A,W.numLightProbes=y,s.version=jm++)}function h(u,c){let f=0,m=0,_=0,g=0,p=0;const d=c.matrixWorldInverse;for(let S=0,M=u.length;S<M;S++){const E=u[S];if(E.isDirectionalLight){const T=s.directional[f];T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),f++}else if(E.isSpotLight){const T=s.spot[_];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),T.direction.setFromMatrixPosition(E.matrixWorld),r.setFromMatrixPosition(E.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(d),_++}else if(E.isRectAreaLight){const T=s.rectArea[g];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),a.identity(),o.copy(E.matrixWorld),o.premultiply(d),a.extractRotation(o),T.halfWidth.set(E.width*.5,0,0),T.halfHeight.set(0,E.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),g++}else if(E.isPointLight){const T=s.point[m];T.position.setFromMatrixPosition(E.matrixWorld),T.position.applyMatrix4(d),m++}else if(E.isHemisphereLight){const T=s.hemi[p];T.direction.setFromMatrixPosition(E.matrixWorld),T.direction.transformDirection(d),p++}}}return{setup:l,setupView:h,state:s}}function ul(n,t){const e=new Km(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(c){i.push(c)}function a(c){s.push(c)}function l(c){e.setup(i,c)}function h(c){e.setupView(i,c)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:h,pushLight:o,pushShadow:a}}function Zm(n,t){let e=new WeakMap;function i(r,o=0){const a=e.get(r);let l;return a===void 0?(l=new ul(n,t),e.set(r,[l])):o>=a.length?(l=new ul(n,t),a.push(l)):l=a[o],l}function s(){e=new WeakMap}return{get:i,dispose:s}}class Jm extends fs{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qm extends fs{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const t0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function n0(n,t,e){let i=new Ca;const s=new zt,r=new zt,o=new ge,a=new Jm({depthPacking:Oc}),l=new Qm,h={},u=e.maxTextureSize,c={[zn]:Ue,[Ue]:zn,[un]:un},f=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:t0,fragmentShader:e0}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new on;_.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new rn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gl;let d=this.type;this.render=function(T,R,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const F=n.getRenderTarget(),y=n.getActiveCubeFace(),w=n.getActiveMipmapLevel(),W=n.state;W.setBlending(Nn),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const j=d!==Sn&&this.type===Sn,tt=d===Sn&&this.type!==Sn;for(let L=0,k=T.length;L<k;L++){const Y=T[L],X=Y.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const st=X.getFrameExtents();if(s.multiply(st),r.copy(X.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/st.x),s.x=r.x*st.x,X.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/st.y),s.y=r.y*st.y,X.mapSize.y=r.y)),X.map===null||j===!0||tt===!0){const $=this.type!==Sn?{minFilter:De,magFilter:De}:{};X.map!==null&&X.map.dispose(),X.map=new ei(s.x,s.y,$),X.map.texture.name=Y.name+".shadowMap",X.camera.updateProjectionMatrix()}n.setRenderTarget(X.map),n.clear();const K=X.getViewportCount();for(let $=0;$<K;$++){const I=X.getViewport($);o.set(r.x*I.x,r.y*I.y,r.x*I.z,r.y*I.w),W.viewport(o),X.updateMatrices(Y,$),i=X.getFrustum(),E(R,A,X.camera,Y,this.type)}X.isPointLightShadow!==!0&&this.type===Sn&&S(X,A),X.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(F,y,w)};function S(T,R){const A=t.update(g);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ei(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,A,f,g,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,A,m,g,null)}function M(T,R,A,F){let y=null;const w=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)y=w;else if(y=A.isPointLight===!0?l:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const W=y.uuid,j=R.uuid;let tt=h[W];tt===void 0&&(tt={},h[W]=tt);let L=tt[j];L===void 0&&(L=y.clone(),tt[j]=L),y=L}if(y.visible=R.visible,y.wireframe=R.wireframe,F===Sn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:c[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,A.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const W=n.properties.get(y);W.light=A}return y}function E(T,R,A,F,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Sn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);const j=t.update(T),tt=T.material;if(Array.isArray(tt)){const L=j.groups;for(let k=0,Y=L.length;k<Y;k++){const X=L[k],st=tt[X.materialIndex];if(st&&st.visible){const K=M(T,st,F,y);n.renderBufferDirect(A,null,j,K,T,X)}}}else if(tt.visible){const L=M(T,tt,F,y);n.renderBufferDirect(A,null,j,L,T,null)}}const W=T.children;for(let j=0,tt=W.length;j<tt;j++)E(W[j],R,A,F,y)}}function i0(n,t,e){const i=e.isWebGL2;function s(){let P=!1;const ot=new ge;let J=null;const V=new ge(0,0,0,0);return{setMask:function(it){J!==it&&!P&&(n.colorMask(it,it,it,it),J=it)},setLocked:function(it){P=it},setClear:function(it,yt,Wt,oe,We){We===!0&&(it*=oe,yt*=oe,Wt*=oe),ot.set(it,yt,Wt,oe),V.equals(ot)===!1&&(n.clearColor(it,yt,Wt,oe),V.copy(ot))},reset:function(){P=!1,J=null,V.set(-1,0,0,0)}}}function r(){let P=!1,ot=null,J=null,V=null;return{setTest:function(it){it?Dt(n.DEPTH_TEST):Jt(n.DEPTH_TEST)},setMask:function(it){ot!==it&&!P&&(n.depthMask(it),ot=it)},setFunc:function(it){if(J!==it){switch(it){case uc:n.depthFunc(n.NEVER);break;case fc:n.depthFunc(n.ALWAYS);break;case dc:n.depthFunc(n.LESS);break;case er:n.depthFunc(n.LEQUAL);break;case pc:n.depthFunc(n.EQUAL);break;case mc:n.depthFunc(n.GEQUAL);break;case _c:n.depthFunc(n.GREATER);break;case gc:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}J=it}},setLocked:function(it){P=it},setClear:function(it){V!==it&&(n.clearDepth(it),V=it)},reset:function(){P=!1,ot=null,J=null,V=null}}}function o(){let P=!1,ot=null,J=null,V=null,it=null,yt=null,Wt=null,oe=null,We=null;return{setTest:function(Zt){P||(Zt?Dt(n.STENCIL_TEST):Jt(n.STENCIL_TEST))},setMask:function(Zt){ot!==Zt&&!P&&(n.stencilMask(Zt),ot=Zt)},setFunc:function(Zt,we,ln){(J!==Zt||V!==we||it!==ln)&&(n.stencilFunc(Zt,we,ln),J=Zt,V=we,it=ln)},setOp:function(Zt,we,ln){(yt!==Zt||Wt!==we||oe!==ln)&&(n.stencilOp(Zt,we,ln),yt=Zt,Wt=we,oe=ln)},setLocked:function(Zt){P=Zt},setClear:function(Zt){We!==Zt&&(n.clearStencil(Zt),We=Zt)},reset:function(){P=!1,ot=null,J=null,V=null,it=null,yt=null,Wt=null,oe=null,We=null}}}const a=new s,l=new r,h=new o,u=new WeakMap,c=new WeakMap;let f={},m={},_=new WeakMap,g=[],p=null,d=!1,S=null,M=null,E=null,T=null,R=null,A=null,F=null,y=new Yt(0,0,0),w=0,W=!1,j=null,tt=null,L=null,k=null,Y=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let st=!1,K=0;const $=n.getParameter(n.VERSION);$.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec($)[1]),st=K>=1):$.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),st=K>=2);let I=null,H={};const ut=n.getParameter(n.SCISSOR_BOX),ft=n.getParameter(n.VIEWPORT),_t=new ge().fromArray(ut),At=new ge().fromArray(ft);function kt(P,ot,J,V){const it=new Uint8Array(4),yt=n.createTexture();n.bindTexture(P,yt),n.texParameteri(P,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(P,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Wt=0;Wt<J;Wt++)i&&(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)?n.texImage3D(ot,0,n.RGBA,1,1,V,0,n.RGBA,n.UNSIGNED_BYTE,it):n.texImage2D(ot+Wt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,it);return yt}const wt={};wt[n.TEXTURE_2D]=kt(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=kt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(wt[n.TEXTURE_2D_ARRAY]=kt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=kt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),h.setClear(0),Dt(n.DEPTH_TEST),l.setFunc(er),Ut(!1),It(Xa),Dt(n.CULL_FACE),Ct(Nn);function Dt(P){f[P]!==!0&&(n.enable(P),f[P]=!0)}function Jt(P){f[P]!==!1&&(n.disable(P),f[P]=!1)}function Ft(P,ot){return m[P]!==ot?(n.bindFramebuffer(P,ot),m[P]=ot,i&&(P===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ot),P===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ot)),!0):!1}function U(P,ot){let J=g,V=!1;if(P)if(J=_.get(ot),J===void 0&&(J=[],_.set(ot,J)),P.isWebGLMultipleRenderTargets){const it=P.texture;if(J.length!==it.length||J[0]!==n.COLOR_ATTACHMENT0){for(let yt=0,Wt=it.length;yt<Wt;yt++)J[yt]=n.COLOR_ATTACHMENT0+yt;J.length=it.length,V=!0}}else J[0]!==n.COLOR_ATTACHMENT0&&(J[0]=n.COLOR_ATTACHMENT0,V=!0);else J[0]!==n.BACK&&(J[0]=n.BACK,V=!0);V&&(e.isWebGL2?n.drawBuffers(J):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(J))}function ye(P){return p!==P?(n.useProgram(P),p=P,!0):!1}const St={[Kn]:n.FUNC_ADD,[Kh]:n.FUNC_SUBTRACT,[Zh]:n.FUNC_REVERSE_SUBTRACT};if(i)St[$a]=n.MIN,St[Ka]=n.MAX;else{const P=t.get("EXT_blend_minmax");P!==null&&(St[$a]=P.MIN_EXT,St[Ka]=P.MAX_EXT)}const Rt={[Jh]:n.ZERO,[Qh]:n.ONE,[tc]:n.SRC_COLOR,[ca]:n.SRC_ALPHA,[ac]:n.SRC_ALPHA_SATURATE,[sc]:n.DST_COLOR,[nc]:n.DST_ALPHA,[ec]:n.ONE_MINUS_SRC_COLOR,[ua]:n.ONE_MINUS_SRC_ALPHA,[rc]:n.ONE_MINUS_DST_COLOR,[ic]:n.ONE_MINUS_DST_ALPHA,[oc]:n.CONSTANT_COLOR,[lc]:n.ONE_MINUS_CONSTANT_COLOR,[hc]:n.CONSTANT_ALPHA,[cc]:n.ONE_MINUS_CONSTANT_ALPHA};function Ct(P,ot,J,V,it,yt,Wt,oe,We,Zt){if(P===Nn){d===!0&&(Jt(n.BLEND),d=!1);return}if(d===!1&&(Dt(n.BLEND),d=!0),P!==$h){if(P!==S||Zt!==W){if((M!==Kn||R!==Kn)&&(n.blendEquation(n.FUNC_ADD),M=Kn,R=Kn),Zt)switch(P){case Di:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qa:n.blendFunc(n.ONE,n.ONE);break;case Ya:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ja:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Di:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qa:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Ya:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case ja:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}E=null,T=null,A=null,F=null,y.set(0,0,0),w=0,S=P,W=Zt}return}it=it||ot,yt=yt||J,Wt=Wt||V,(ot!==M||it!==R)&&(n.blendEquationSeparate(St[ot],St[it]),M=ot,R=it),(J!==E||V!==T||yt!==A||Wt!==F)&&(n.blendFuncSeparate(Rt[J],Rt[V],Rt[yt],Rt[Wt]),E=J,T=V,A=yt,F=Wt),(oe.equals(y)===!1||We!==w)&&(n.blendColor(oe.r,oe.g,oe.b,We),y.copy(oe),w=We),S=P,W=!1}function te(P,ot){P.side===un?Jt(n.CULL_FACE):Dt(n.CULL_FACE);let J=P.side===Ue;ot&&(J=!J),Ut(J),P.blending===Di&&P.transparent===!1?Ct(Nn):Ct(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),l.setFunc(P.depthFunc),l.setTest(P.depthTest),l.setMask(P.depthWrite),a.setMask(P.colorWrite);const V=P.stencilWrite;h.setTest(V),V&&(h.setMask(P.stencilWriteMask),h.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),h.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),ae(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?Dt(n.SAMPLE_ALPHA_TO_COVERAGE):Jt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(P){j!==P&&(P?n.frontFace(n.CW):n.frontFace(n.CCW),j=P)}function It(P){P!==qh?(Dt(n.CULL_FACE),P!==tt&&(P===Xa?n.cullFace(n.BACK):P===Yh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Jt(n.CULL_FACE),tt=P}function qt(P){P!==L&&(st&&n.lineWidth(P),L=P)}function ae(P,ot,J){P?(Dt(n.POLYGON_OFFSET_FILL),(k!==ot||Y!==J)&&(n.polygonOffset(ot,J),k=ot,Y=J)):Jt(n.POLYGON_OFFSET_FILL)}function pe(P){P?Dt(n.SCISSOR_TEST):Jt(n.SCISSOR_TEST)}function b(P){P===void 0&&(P=n.TEXTURE0+X-1),I!==P&&(n.activeTexture(P),I=P)}function v(P,ot,J){J===void 0&&(I===null?J=n.TEXTURE0+X-1:J=I);let V=H[J];V===void 0&&(V={type:void 0,texture:void 0},H[J]=V),(V.type!==P||V.texture!==ot)&&(I!==J&&(n.activeTexture(J),I=J),n.bindTexture(P,ot||wt[P]),V.type=P,V.texture=ot)}function O(){const P=H[I];P!==void 0&&P.type!==void 0&&(n.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function et(){try{n.compressedTexImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function nt(){try{n.texSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function vt(){try{n.texSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function at(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function C(){try{n.texStorage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function rt(){try{n.texStorage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function q(){try{n.texImage2D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Tt(){try{n.texImage3D.apply(n,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Mt(P){_t.equals(P)===!1&&(n.scissor(P.x,P.y,P.z,P.w),_t.copy(P))}function Et(P){At.equals(P)===!1&&(n.viewport(P.x,P.y,P.z,P.w),At.copy(P))}function gt(P,ot){let J=c.get(ot);J===void 0&&(J=new WeakMap,c.set(ot,J));let V=J.get(P);V===void 0&&(V=n.getUniformBlockIndex(ot,P.name),J.set(P,V))}function mt(P,ot){const V=c.get(ot).get(P);u.get(ot)!==V&&(n.uniformBlockBinding(ot,V,P.__bindingPointIndex),u.set(ot,V))}function Vt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},I=null,H={},m={},_=new WeakMap,g=[],p=null,d=!1,S=null,M=null,E=null,T=null,R=null,A=null,F=null,y=new Yt(0,0,0),w=0,W=!1,j=null,tt=null,L=null,k=null,Y=null,_t.set(0,0,n.canvas.width,n.canvas.height),At.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),h.reset()}return{buffers:{color:a,depth:l,stencil:h},enable:Dt,disable:Jt,bindFramebuffer:Ft,drawBuffers:U,useProgram:ye,setBlending:Ct,setMaterial:te,setFlipSided:Ut,setCullFace:It,setLineWidth:qt,setPolygonOffset:ae,setScissorTest:pe,activeTexture:b,bindTexture:v,unbindTexture:O,compressedTexImage2D:et,compressedTexImage3D:Z,texImage2D:q,texImage3D:Tt,updateUBOMapping:gt,uniformBlockBinding:mt,texStorage2D:C,texStorage3D:rt,texSubImage2D:nt,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ct,scissor:Mt,viewport:Et,reset:Vt}}function s0(n,t,e,i,s,r,o){const a=s.isWebGL2,l=s.maxTextures,h=s.maxCubemapSize,u=s.maxTextureSize,c=s.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let g;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(b,v){return d?new OffscreenCanvas(b,v):or("canvas")}function M(b,v,O,et){let Z=1;if((b.width>et||b.height>et)&&(Z=et/Math.max(b.width,b.height)),Z<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const nt=v?ar:Math.floor,vt=nt(Z*b.width),at=nt(Z*b.height);g===void 0&&(g=S(vt,at));const ct=O?S(vt,at):g;return ct.width=vt,ct.height=at,ct.getContext("2d").drawImage(b,0,0,vt,at),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+vt+"x"+at+")."),ct}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function E(b){return ga(b.width)&&ga(b.height)}function T(b){return a?!1:b.wrapS!==en||b.wrapT!==en||b.minFilter!==De&&b.minFilter!==je}function R(b,v){return b.generateMipmaps&&v&&b.minFilter!==De&&b.minFilter!==je}function A(b){n.generateMipmap(b)}function F(b,v,O,et,Z=!1){if(a===!1)return v;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let nt=v;if(v===n.RED&&(O===n.FLOAT&&(nt=n.R32F),O===n.HALF_FLOAT&&(nt=n.R16F),O===n.UNSIGNED_BYTE&&(nt=n.R8)),v===n.RED_INTEGER&&(O===n.UNSIGNED_BYTE&&(nt=n.R8UI),O===n.UNSIGNED_SHORT&&(nt=n.R16UI),O===n.UNSIGNED_INT&&(nt=n.R32UI),O===n.BYTE&&(nt=n.R8I),O===n.SHORT&&(nt=n.R16I),O===n.INT&&(nt=n.R32I)),v===n.RG&&(O===n.FLOAT&&(nt=n.RG32F),O===n.HALF_FLOAT&&(nt=n.RG16F),O===n.UNSIGNED_BYTE&&(nt=n.RG8)),v===n.RGBA){const vt=Z?nr:Kt.getTransfer(et);O===n.FLOAT&&(nt=n.RGBA32F),O===n.HALF_FLOAT&&(nt=n.RGBA16F),O===n.UNSIGNED_BYTE&&(nt=vt===Qt?n.SRGB8_ALPHA8:n.RGBA8),O===n.UNSIGNED_SHORT_4_4_4_4&&(nt=n.RGBA4),O===n.UNSIGNED_SHORT_5_5_5_1&&(nt=n.RGB5_A1)}return(nt===n.R16F||nt===n.R32F||nt===n.RG16F||nt===n.RG32F||nt===n.RGBA16F||nt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),nt}function y(b,v,O){return R(b,O)===!0||b.isFramebufferTexture&&b.minFilter!==De&&b.minFilter!==je?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function w(b){return b===De||b===Za||b===wr?n.NEAREST:n.LINEAR}function W(b){const v=b.target;v.removeEventListener("dispose",W),tt(v),v.isVideoTexture&&_.delete(v)}function j(b){const v=b.target;v.removeEventListener("dispose",j),k(v)}function tt(b){const v=i.get(b);if(v.__webglInit===void 0)return;const O=b.source,et=p.get(O);if(et){const Z=et[v.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&L(b),Object.keys(et).length===0&&p.delete(O)}i.remove(b)}function L(b){const v=i.get(b);n.deleteTexture(v.__webglTexture);const O=b.source,et=p.get(O);delete et[v.__cacheKey],o.memory.textures--}function k(b){const v=b.texture,O=i.get(b),et=i.get(v);if(et.__webglTexture!==void 0&&(n.deleteTexture(et.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(O.__webglFramebuffer[Z]))for(let nt=0;nt<O.__webglFramebuffer[Z].length;nt++)n.deleteFramebuffer(O.__webglFramebuffer[Z][nt]);else n.deleteFramebuffer(O.__webglFramebuffer[Z]);O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer[Z])}else{if(Array.isArray(O.__webglFramebuffer))for(let Z=0;Z<O.__webglFramebuffer.length;Z++)n.deleteFramebuffer(O.__webglFramebuffer[Z]);else n.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&n.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&n.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let Z=0;Z<O.__webglColorRenderbuffer.length;Z++)O.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(O.__webglColorRenderbuffer[Z]);O.__webglDepthRenderbuffer&&n.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let Z=0,nt=v.length;Z<nt;Z++){const vt=i.get(v[Z]);vt.__webglTexture&&(n.deleteTexture(vt.__webglTexture),o.memory.textures--),i.remove(v[Z])}i.remove(v),i.remove(b)}let Y=0;function X(){Y=0}function st(){const b=Y;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),Y+=1,b}function K(b){const v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function $(b,v){const O=i.get(b);if(b.isVideoTexture&&ae(b),b.isRenderTargetTexture===!1&&b.version>0&&O.__version!==b.version){const et=b.image;if(et===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(et.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Dt(O,b,v);return}}e.bindTexture(n.TEXTURE_2D,O.__webglTexture,n.TEXTURE0+v)}function I(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Dt(O,b,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,O.__webglTexture,n.TEXTURE0+v)}function H(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Dt(O,b,v);return}e.bindTexture(n.TEXTURE_3D,O.__webglTexture,n.TEXTURE0+v)}function ut(b,v){const O=i.get(b);if(b.version>0&&O.__version!==b.version){Jt(O,b,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture,n.TEXTURE0+v)}const ft={[pa]:n.REPEAT,[en]:n.CLAMP_TO_EDGE,[ma]:n.MIRRORED_REPEAT},_t={[De]:n.NEAREST,[Za]:n.NEAREST_MIPMAP_NEAREST,[wr]:n.NEAREST_MIPMAP_LINEAR,[je]:n.LINEAR,[bc]:n.LINEAR_MIPMAP_NEAREST,[rs]:n.LINEAR_MIPMAP_LINEAR},At={[zc]:n.NEVER,[qc]:n.ALWAYS,[Gc]:n.LESS,[kc]:n.LEQUAL,[Hc]:n.EQUAL,[Xc]:n.GEQUAL,[Vc]:n.GREATER,[Wc]:n.NOTEQUAL};function kt(b,v,O){if(O?(n.texParameteri(b,n.TEXTURE_WRAP_S,ft[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,ft[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,ft[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,_t[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,_t[v.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==en||v.wrapT!==en)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,w(v.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,w(v.minFilter)),v.minFilter!==De&&v.minFilter!==je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,At[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const et=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===De||v.minFilter!==wr&&v.minFilter!==rs||v.type===In&&t.has("OES_texture_float_linear")===!1||a===!1&&v.type===as&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(b,et.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function wt(b,v){let O=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",W));const et=v.source;let Z=p.get(et);Z===void 0&&(Z={},p.set(et,Z));const nt=K(v);if(nt!==b.__cacheKey){Z[nt]===void 0&&(Z[nt]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,O=!0),Z[nt].usedTimes++;const vt=Z[b.__cacheKey];vt!==void 0&&(Z[b.__cacheKey].usedTimes--,vt.usedTimes===0&&L(v)),b.__cacheKey=nt,b.__webglTexture=Z[nt].texture}return O}function Dt(b,v,O){let et=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(et=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(et=n.TEXTURE_3D);const Z=wt(b,v),nt=v.source;e.bindTexture(et,b.__webglTexture,n.TEXTURE0+O);const vt=i.get(nt);if(nt.version!==vt.__version||Z===!0){e.activeTexture(n.TEXTURE0+O);const at=Kt.getPrimaries(Kt.workingColorSpace),ct=v.colorSpace===Ke?null:Kt.getPrimaries(v.colorSpace),C=v.colorSpace===Ke||at===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,C);const rt=T(v)&&E(v.image)===!1;let q=M(v.image,rt,!1,u);q=pe(v,q);const Tt=E(q)||a,Mt=r.convert(v.format,v.colorSpace);let Et=r.convert(v.type),gt=F(v.internalFormat,Mt,Et,v.colorSpace,v.isVideoTexture);kt(et,v,Tt);let mt;const Vt=v.mipmaps,P=a&&v.isVideoTexture!==!0,ot=vt.__version===void 0||Z===!0,J=y(v,q,Tt);if(v.isDepthTexture)gt=n.DEPTH_COMPONENT,a?v.type===In?gt=n.DEPTH_COMPONENT32F:v.type===Dn?gt=n.DEPTH_COMPONENT24:v.type===Jn?gt=n.DEPTH24_STENCIL8:gt=n.DEPTH_COMPONENT16:v.type===In&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Qn&&gt===n.DEPTH_COMPONENT&&v.type!==ba&&v.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=Dn,Et=r.convert(v.type)),v.format===Bi&&gt===n.DEPTH_COMPONENT&&(gt=n.DEPTH_STENCIL,v.type!==Jn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Jn,Et=r.convert(v.type))),ot&&(P?e.texStorage2D(n.TEXTURE_2D,1,gt,q.width,q.height):e.texImage2D(n.TEXTURE_2D,0,gt,q.width,q.height,0,Mt,Et,null));else if(v.isDataTexture)if(Vt.length>0&&Tt){P&&ot&&e.texStorage2D(n.TEXTURE_2D,J,gt,Vt[0].width,Vt[0].height);for(let V=0,it=Vt.length;V<it;V++)mt=Vt[V],P?e.texSubImage2D(n.TEXTURE_2D,V,0,0,mt.width,mt.height,Mt,Et,mt.data):e.texImage2D(n.TEXTURE_2D,V,gt,mt.width,mt.height,0,Mt,Et,mt.data);v.generateMipmaps=!1}else P?(ot&&e.texStorage2D(n.TEXTURE_2D,J,gt,q.width,q.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,q.width,q.height,Mt,Et,q.data)):e.texImage2D(n.TEXTURE_2D,0,gt,q.width,q.height,0,Mt,Et,q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){P&&ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,J,gt,Vt[0].width,Vt[0].height,q.depth);for(let V=0,it=Vt.length;V<it;V++)mt=Vt[V],v.format!==nn?Mt!==null?P?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,q.depth,Mt,mt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,V,gt,mt.width,mt.height,q.depth,0,mt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?e.texSubImage3D(n.TEXTURE_2D_ARRAY,V,0,0,0,mt.width,mt.height,q.depth,Mt,Et,mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,V,gt,mt.width,mt.height,q.depth,0,Mt,Et,mt.data)}else{P&&ot&&e.texStorage2D(n.TEXTURE_2D,J,gt,Vt[0].width,Vt[0].height);for(let V=0,it=Vt.length;V<it;V++)mt=Vt[V],v.format!==nn?Mt!==null?P?e.compressedTexSubImage2D(n.TEXTURE_2D,V,0,0,mt.width,mt.height,Mt,mt.data):e.compressedTexImage2D(n.TEXTURE_2D,V,gt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):P?e.texSubImage2D(n.TEXTURE_2D,V,0,0,mt.width,mt.height,Mt,Et,mt.data):e.texImage2D(n.TEXTURE_2D,V,gt,mt.width,mt.height,0,Mt,Et,mt.data)}else if(v.isDataArrayTexture)P?(ot&&e.texStorage3D(n.TEXTURE_2D_ARRAY,J,gt,q.width,q.height,q.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Mt,Et,q.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,gt,q.width,q.height,q.depth,0,Mt,Et,q.data);else if(v.isData3DTexture)P?(ot&&e.texStorage3D(n.TEXTURE_3D,J,gt,q.width,q.height,q.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Mt,Et,q.data)):e.texImage3D(n.TEXTURE_3D,0,gt,q.width,q.height,q.depth,0,Mt,Et,q.data);else if(v.isFramebufferTexture){if(ot)if(P)e.texStorage2D(n.TEXTURE_2D,J,gt,q.width,q.height);else{let V=q.width,it=q.height;for(let yt=0;yt<J;yt++)e.texImage2D(n.TEXTURE_2D,yt,gt,V,it,0,Mt,Et,null),V>>=1,it>>=1}}else if(Vt.length>0&&Tt){P&&ot&&e.texStorage2D(n.TEXTURE_2D,J,gt,Vt[0].width,Vt[0].height);for(let V=0,it=Vt.length;V<it;V++)mt=Vt[V],P?e.texSubImage2D(n.TEXTURE_2D,V,0,0,Mt,Et,mt):e.texImage2D(n.TEXTURE_2D,V,gt,Mt,Et,mt);v.generateMipmaps=!1}else P?(ot&&e.texStorage2D(n.TEXTURE_2D,J,gt,q.width,q.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Mt,Et,q)):e.texImage2D(n.TEXTURE_2D,0,gt,Mt,Et,q);R(v,Tt)&&A(et),vt.__version=nt.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Jt(b,v,O){if(v.image.length!==6)return;const et=wt(b,v),Z=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+O);const nt=i.get(Z);if(Z.version!==nt.__version||et===!0){e.activeTexture(n.TEXTURE0+O);const vt=Kt.getPrimaries(Kt.workingColorSpace),at=v.colorSpace===Ke?null:Kt.getPrimaries(v.colorSpace),ct=v.colorSpace===Ke||vt===at?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const C=v.isCompressedTexture||v.image[0].isCompressedTexture,rt=v.image[0]&&v.image[0].isDataTexture,q=[];for(let V=0;V<6;V++)!C&&!rt?q[V]=M(v.image[V],!1,!0,h):q[V]=rt?v.image[V].image:v.image[V],q[V]=pe(v,q[V]);const Tt=q[0],Mt=E(Tt)||a,Et=r.convert(v.format,v.colorSpace),gt=r.convert(v.type),mt=F(v.internalFormat,Et,gt,v.colorSpace),Vt=a&&v.isVideoTexture!==!0,P=nt.__version===void 0||et===!0;let ot=y(v,Tt,Mt);kt(n.TEXTURE_CUBE_MAP,v,Mt);let J;if(C){Vt&&P&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ot,mt,Tt.width,Tt.height);for(let V=0;V<6;V++){J=q[V].mipmaps;for(let it=0;it<J.length;it++){const yt=J[it];v.format!==nn?Et!==null?Vt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,it,0,0,yt.width,yt.height,Et,yt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,it,mt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,it,0,0,yt.width,yt.height,Et,gt,yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,it,mt,yt.width,yt.height,0,Et,gt,yt.data)}}}else{J=v.mipmaps,Vt&&P&&(J.length>0&&ot++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ot,mt,q[0].width,q[0].height));for(let V=0;V<6;V++)if(rt){Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,q[V].width,q[V].height,Et,gt,q[V].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,mt,q[V].width,q[V].height,0,Et,gt,q[V].data);for(let it=0;it<J.length;it++){const Wt=J[it].image[V].image;Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,it+1,0,0,Wt.width,Wt.height,Et,gt,Wt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,it+1,mt,Wt.width,Wt.height,0,Et,gt,Wt.data)}}else{Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,0,0,Et,gt,q[V]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,0,mt,Et,gt,q[V]);for(let it=0;it<J.length;it++){const yt=J[it];Vt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,it+1,0,0,Et,gt,yt.image[V]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+V,it+1,mt,Et,gt,yt.image[V])}}}R(v,Mt)&&A(n.TEXTURE_CUBE_MAP),nt.__version=Z.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Ft(b,v,O,et,Z,nt){const vt=r.convert(O.format,O.colorSpace),at=r.convert(O.type),ct=F(O.internalFormat,vt,at,O.colorSpace);if(!i.get(v).__hasExternalTextures){const rt=Math.max(1,v.width>>nt),q=Math.max(1,v.height>>nt);Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?e.texImage3D(Z,nt,ct,rt,q,v.depth,0,vt,at,null):e.texImage2D(Z,nt,ct,rt,q,0,vt,at,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),qt(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,Z,i.get(O).__webglTexture,0,It(v)):(Z===n.TEXTURE_2D||Z>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,et,Z,i.get(O).__webglTexture,nt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function U(b,v,O){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let et=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(O||qt(v)){const Z=v.depthTexture;Z&&Z.isDepthTexture&&(Z.type===In?et=n.DEPTH_COMPONENT32F:Z.type===Dn&&(et=n.DEPTH_COMPONENT24));const nt=It(v);qt(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,et,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,et,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,et,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){const et=It(v);O&&qt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,v.width,v.height):qt(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const et=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let Z=0;Z<et.length;Z++){const nt=et[Z],vt=r.convert(nt.format,nt.colorSpace),at=r.convert(nt.type),ct=F(nt.internalFormat,vt,at,nt.colorSpace),C=It(v);O&&qt(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,C,ct,v.width,v.height):qt(v)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,C,ct,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,ct,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function ye(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),$(v.depthTexture,0);const et=i.get(v.depthTexture).__webglTexture,Z=It(v);if(v.depthTexture.format===Qn)qt(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(v.depthTexture.format===Bi)qt(v)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function St(b){const v=i.get(b),O=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");ye(v.__webglFramebuffer,b)}else if(O){v.__webglDepthbuffer=[];for(let et=0;et<6;et++)e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[et]),v.__webglDepthbuffer[et]=n.createRenderbuffer(),U(v.__webglDepthbuffer[et],b,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),U(v.__webglDepthbuffer,b,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Rt(b,v,O){const et=i.get(b);v!==void 0&&Ft(et.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),O!==void 0&&St(b)}function Ct(b){const v=b.texture,O=i.get(b),et=i.get(v);b.addEventListener("dispose",j),b.isWebGLMultipleRenderTargets!==!0&&(et.__webglTexture===void 0&&(et.__webglTexture=n.createTexture()),et.__version=v.version,o.memory.textures++);const Z=b.isWebGLCubeRenderTarget===!0,nt=b.isWebGLMultipleRenderTargets===!0,vt=E(b)||a;if(Z){O.__webglFramebuffer=[];for(let at=0;at<6;at++)if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer[at]=[];for(let ct=0;ct<v.mipmaps.length;ct++)O.__webglFramebuffer[at][ct]=n.createFramebuffer()}else O.__webglFramebuffer[at]=n.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){O.__webglFramebuffer=[];for(let at=0;at<v.mipmaps.length;at++)O.__webglFramebuffer[at]=n.createFramebuffer()}else O.__webglFramebuffer=n.createFramebuffer();if(nt)if(s.drawBuffers){const at=b.texture;for(let ct=0,C=at.length;ct<C;ct++){const rt=i.get(at[ct]);rt.__webglTexture===void 0&&(rt.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&qt(b)===!1){const at=nt?v:[v];O.__webglMultisampledFramebuffer=n.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let ct=0;ct<at.length;ct++){const C=at[ct];O.__webglColorRenderbuffer[ct]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,O.__webglColorRenderbuffer[ct]);const rt=r.convert(C.format,C.colorSpace),q=r.convert(C.type),Tt=F(C.internalFormat,rt,q,C.colorSpace,b.isXRRenderTarget===!0),Mt=It(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,Mt,Tt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,O.__webglColorRenderbuffer[ct])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(O.__webglDepthRenderbuffer=n.createRenderbuffer(),U(O.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,et.__webglTexture),kt(n.TEXTURE_CUBE_MAP,v,vt);for(let at=0;at<6;at++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let ct=0;ct<v.mipmaps.length;ct++)Ft(O.__webglFramebuffer[at][ct],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,ct);else Ft(O.__webglFramebuffer[at],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);R(v,vt)&&A(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(nt){const at=b.texture;for(let ct=0,C=at.length;ct<C;ct++){const rt=at[ct],q=i.get(rt);e.bindTexture(n.TEXTURE_2D,q.__webglTexture),kt(n.TEXTURE_2D,rt,vt),Ft(O.__webglFramebuffer,b,rt,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,0),R(rt,vt)&&A(n.TEXTURE_2D)}e.unbindTexture()}else{let at=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?at=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(at,et.__webglTexture),kt(at,v,vt),a&&v.mipmaps&&v.mipmaps.length>0)for(let ct=0;ct<v.mipmaps.length;ct++)Ft(O.__webglFramebuffer[ct],b,v,n.COLOR_ATTACHMENT0,at,ct);else Ft(O.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,at,0);R(v,vt)&&A(at),e.unbindTexture()}b.depthBuffer&&St(b)}function te(b){const v=E(b)||a,O=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let et=0,Z=O.length;et<Z;et++){const nt=O[et];if(R(nt,v)){const vt=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,at=i.get(nt).__webglTexture;e.bindTexture(vt,at),A(vt),e.unbindTexture()}}}function Ut(b){if(a&&b.samples>0&&qt(b)===!1){const v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],O=b.width,et=b.height;let Z=n.COLOR_BUFFER_BIT;const nt=[],vt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,at=i.get(b),ct=b.isWebGLMultipleRenderTargets===!0;if(ct)for(let C=0;C<v.length;C++)e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,at.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglFramebuffer);for(let C=0;C<v.length;C++){nt.push(n.COLOR_ATTACHMENT0+C),b.depthBuffer&&nt.push(vt);const rt=at.__ignoreDepthValues!==void 0?at.__ignoreDepthValues:!1;if(rt===!1&&(b.depthBuffer&&(Z|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(Z|=n.STENCIL_BUFFER_BIT)),ct&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,at.__webglColorRenderbuffer[C]),rt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[vt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[vt])),ct){const q=i.get(v[C]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,q,0)}n.blitFramebuffer(0,0,O,et,0,0,O,et,Z,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,nt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ct)for(let C=0;C<v.length;C++){e.bindFramebuffer(n.FRAMEBUFFER,at.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.RENDERBUFFER,at.__webglColorRenderbuffer[C]);const rt=i.get(v[C]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,at.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+C,n.TEXTURE_2D,rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,at.__webglMultisampledFramebuffer)}}function It(b){return Math.min(c,b.samples)}function qt(b){const v=i.get(b);return a&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ae(b){const v=o.render.frame;_.get(b)!==v&&(_.set(b,v),b.update())}function pe(b,v){const O=b.colorSpace,et=b.format,Z=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===_a||O!==Tn&&O!==Ke&&(Kt.getTransfer(O)===Qt?a===!1?t.has("EXT_sRGB")===!0&&et===nn?(b.format=_a,b.minFilter=je,b.generateMipmaps=!1):v=Zl.sRGBToLinear(v):(et!==nn||Z!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),v}this.allocateTextureUnit=st,this.resetTextureUnits=X,this.setTexture2D=$,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=ut,this.rebindTextures=Rt,this.setupRenderTarget=Ct,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=Ut,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=qt}function r0(n,t,e){const i=e.isWebGL2;function s(r,o=Ke){let a;const l=Kt.getTransfer(o);if(r===On)return n.UNSIGNED_BYTE;if(r===Wl)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Xl)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Ac)return n.BYTE;if(r===wc)return n.SHORT;if(r===ba)return n.UNSIGNED_SHORT;if(r===Vl)return n.INT;if(r===Dn)return n.UNSIGNED_INT;if(r===In)return n.FLOAT;if(r===as)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Rc)return n.ALPHA;if(r===nn)return n.RGBA;if(r===Cc)return n.LUMINANCE;if(r===Pc)return n.LUMINANCE_ALPHA;if(r===Qn)return n.DEPTH_COMPONENT;if(r===Bi)return n.DEPTH_STENCIL;if(r===_a)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Lc)return n.RED;if(r===ql)return n.RED_INTEGER;if(r===Dc)return n.RG;if(r===Yl)return n.RG_INTEGER;if(r===jl)return n.RGBA_INTEGER;if(r===Rr||r===Cr||r===Pr||r===Lr)if(l===Qt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Rr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Cr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Pr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Lr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Rr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Cr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Pr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Lr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Ja||r===Qa||r===to||r===eo)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Ja)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Qa)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===to)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===eo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Ic)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===no||r===io)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===no)return l===Qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===io)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===so||r===ro||r===ao||r===oo||r===lo||r===ho||r===co||r===uo||r===fo||r===po||r===mo||r===_o||r===go||r===vo)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===so)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ro)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ao)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oo)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===lo)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ho)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===co)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uo)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fo)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===po)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===mo)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===_o)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===go)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===vo)return l===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Dr||r===Mo||r===xo)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Dr)return l===Qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Mo)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===xo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Nc||r===yo||r===So||r===Eo)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Dr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===yo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===So)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Eo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Jn?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}class a0 extends $e{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xs extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const o0={type:"move"};class ea{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const g of t.hand.values()){const p=e.getJointPose(g,i),d=this._getHandJoint(h,g);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const u=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],f=u.position.distanceTo(c.position),m=.02,_=.005;h.inputState.pinching&&f>m+_?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&f<=m-_&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Xs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class l0 extends ke{constructor(t,e,i,s,r,o,a,l,h,u){if(u=u!==void 0?u:Qn,u!==Qn&&u!==Bi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Qn&&(i=Dn),i===void 0&&u===Bi&&(i=Jn),super(null,s,r,o,a,l,u,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:De,this.minFilter=l!==void 0?l:De,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class h0 extends ri{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,h=null,u=null,c=null,f=null,m=null,_=null;const g=e.getContextAttributes();let p=null,d=null;const S=[],M=[],E=new $e;E.layers.enable(1),E.viewport=new ge;const T=new $e;T.layers.enable(2),T.viewport=new ge;const R=[E,T],A=new a0;A.layers.enable(1),A.layers.enable(2);let F=null,y=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(I){let H=S[I];return H===void 0&&(H=new ea,S[I]=H),H.getTargetRaySpace()},this.getControllerGrip=function(I){let H=S[I];return H===void 0&&(H=new ea,S[I]=H),H.getGripSpace()},this.getHand=function(I){let H=S[I];return H===void 0&&(H=new ea,S[I]=H),H.getHandSpace()};function w(I){const H=M.indexOf(I.inputSource);if(H===-1)return;const ut=S[H];ut!==void 0&&(ut.update(I.inputSource,I.frame,h||o),ut.dispatchEvent({type:I.type,data:I.inputSource}))}function W(){s.removeEventListener("select",w),s.removeEventListener("selectstart",w),s.removeEventListener("selectend",w),s.removeEventListener("squeeze",w),s.removeEventListener("squeezestart",w),s.removeEventListener("squeezeend",w),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",j);for(let I=0;I<S.length;I++){const H=M[I];H!==null&&(M[I]=null,S[I].disconnect(H))}F=null,y=null,t.setRenderTarget(p),m=null,f=null,c=null,s=null,d=null,$.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(I){r=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(I){a=I,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(I){h=I},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return c},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(I){if(s=I,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",w),s.addEventListener("selectstart",w),s.addEventListener("selectend",w),s.addEventListener("squeeze",w),s.addEventListener("squeezestart",w),s.addEventListener("squeezeend",w),s.addEventListener("end",W),s.addEventListener("inputsourceschange",j),g.xrCompatible!==!0&&await e.makeXRCompatible(),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const H={antialias:s.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,H),s.updateRenderState({baseLayer:m}),d=new ei(m.framebufferWidth,m.framebufferHeight,{format:nn,type:On,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let H=null,ut=null,ft=null;g.depth&&(ft=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,H=g.stencil?Bi:Qn,ut=g.stencil?Jn:Dn);const _t={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};c=new XRWebGLBinding(s,e),f=c.createProjectionLayer(_t),s.updateRenderState({layers:[f]}),d=new ei(f.textureWidth,f.textureHeight,{format:nn,type:On,depthTexture:new l0(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,H),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0});const At=t.properties.get(d);At.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),h=null,o=await s.requestReferenceSpace(a),$.setContext(s),$.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function j(I){for(let H=0;H<I.removed.length;H++){const ut=I.removed[H],ft=M.indexOf(ut);ft>=0&&(M[ft]=null,S[ft].disconnect(ut))}for(let H=0;H<I.added.length;H++){const ut=I.added[H];let ft=M.indexOf(ut);if(ft===-1){for(let At=0;At<S.length;At++)if(At>=M.length){M.push(ut),ft=At;break}else if(M[At]===null){M[At]=ut,ft=At;break}if(ft===-1)break}const _t=S[ft];_t&&_t.connect(ut)}}const tt=new D,L=new D;function k(I,H,ut){tt.setFromMatrixPosition(H.matrixWorld),L.setFromMatrixPosition(ut.matrixWorld);const ft=tt.distanceTo(L),_t=H.projectionMatrix.elements,At=ut.projectionMatrix.elements,kt=_t[14]/(_t[10]-1),wt=_t[14]/(_t[10]+1),Dt=(_t[9]+1)/_t[5],Jt=(_t[9]-1)/_t[5],Ft=(_t[8]-1)/_t[0],U=(At[8]+1)/At[0],ye=kt*Ft,St=kt*U,Rt=ft/(-Ft+U),Ct=Rt*-Ft;H.matrixWorld.decompose(I.position,I.quaternion,I.scale),I.translateX(Ct),I.translateZ(Rt),I.matrixWorld.compose(I.position,I.quaternion,I.scale),I.matrixWorldInverse.copy(I.matrixWorld).invert();const te=kt+Rt,Ut=wt+Rt,It=ye-Ct,qt=St+(ft-Ct),ae=Dt*wt/Ut*te,pe=Jt*wt/Ut*te;I.projectionMatrix.makePerspective(It,qt,ae,pe,te,Ut),I.projectionMatrixInverse.copy(I.projectionMatrix).invert()}function Y(I,H){H===null?I.matrixWorld.copy(I.matrix):I.matrixWorld.multiplyMatrices(H.matrixWorld,I.matrix),I.matrixWorldInverse.copy(I.matrixWorld).invert()}this.updateCamera=function(I){if(s===null)return;A.near=T.near=E.near=I.near,A.far=T.far=E.far=I.far,(F!==A.near||y!==A.far)&&(s.updateRenderState({depthNear:A.near,depthFar:A.far}),F=A.near,y=A.far);const H=I.parent,ut=A.cameras;Y(A,H);for(let ft=0;ft<ut.length;ft++)Y(ut[ft],H);ut.length===2?k(A,E,T):A.projectionMatrix.copy(E.projectionMatrix),X(I,A,H)};function X(I,H,ut){ut===null?I.matrix.copy(H.matrixWorld):(I.matrix.copy(ut.matrixWorld),I.matrix.invert(),I.matrix.multiply(H.matrixWorld)),I.matrix.decompose(I.position,I.quaternion,I.scale),I.updateMatrixWorld(!0),I.projectionMatrix.copy(H.projectionMatrix),I.projectionMatrixInverse.copy(H.projectionMatrixInverse),I.isPerspectiveCamera&&(I.fov=os*2*Math.atan(1/I.projectionMatrix.elements[5]),I.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(I){l=I,f!==null&&(f.fixedFoveation=I),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=I)};let st=null;function K(I,H){if(u=H.getViewerPose(h||o),_=H,u!==null){const ut=u.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let ft=!1;ut.length!==A.cameras.length&&(A.cameras.length=0,ft=!0);for(let _t=0;_t<ut.length;_t++){const At=ut[_t];let kt=null;if(m!==null)kt=m.getViewport(At);else{const Dt=c.getViewSubImage(f,At);kt=Dt.viewport,_t===0&&(t.setRenderTargetTextures(d,Dt.colorTexture,f.ignoreDepthValues?void 0:Dt.depthStencilTexture),t.setRenderTarget(d))}let wt=R[_t];wt===void 0&&(wt=new $e,wt.layers.enable(_t),wt.viewport=new ge,R[_t]=wt),wt.matrix.fromArray(At.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(At.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(kt.x,kt.y,kt.width,kt.height),_t===0&&(A.matrix.copy(wt.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),ft===!0&&A.cameras.push(wt)}}for(let ut=0;ut<S.length;ut++){const ft=M[ut],_t=S[ut];ft!==null&&_t!==void 0&&_t.update(ft,H,h||o)}st&&st(I,H),H.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:H}),_=null}const $=new oh;$.setAnimationLoop(K),this.setAnimationLoop=function(I){st=I},this.dispose=function(){}}}function c0(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,sh(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,S,M,E){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(p,d):d.isMeshToonMaterial?(r(p,d),c(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,E)):d.isMeshMatcapMaterial?(r(p,d),_(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),g(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?l(p,d,S,M):d.isSpriteMaterial?h(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Ue&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Ue&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const S=t.get(d).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const M=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*M,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,S,M){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*S,p.scale.value=M*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function h(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function c(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,S){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ue&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function g(p,d){const S=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function u0(n,t,e,i){let s={},r={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,M){const E=M.program;i.uniformBlockBinding(S,E)}function h(S,M){let E=s[S.id];E===void 0&&(_(S),E=u(S),s[S.id]=E,S.addEventListener("dispose",p));const T=M.program;i.updateUBOMapping(S,T);const R=t.render.frame;r[S.id]!==R&&(f(S),r[S.id]=R)}function u(S){const M=c();S.__bindingPointIndex=M;const E=n.createBuffer(),T=S.__size,R=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,E),n.bufferData(n.UNIFORM_BUFFER,T,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,M,E),E}function c(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const M=s[S.id],E=S.uniforms,T=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,M);for(let R=0,A=E.length;R<A;R++){const F=E[R];if(m(F,R,T)===!0){const y=F.__offset,w=Array.isArray(F.value)?F.value:[F.value];let W=0;for(let j=0;j<w.length;j++){const tt=w[j],L=g(tt);typeof tt=="number"?(F.__data[0]=tt,n.bufferSubData(n.UNIFORM_BUFFER,y+W,F.__data)):tt.isMatrix3?(F.__data[0]=tt.elements[0],F.__data[1]=tt.elements[1],F.__data[2]=tt.elements[2],F.__data[3]=tt.elements[0],F.__data[4]=tt.elements[3],F.__data[5]=tt.elements[4],F.__data[6]=tt.elements[5],F.__data[7]=tt.elements[0],F.__data[8]=tt.elements[6],F.__data[9]=tt.elements[7],F.__data[10]=tt.elements[8],F.__data[11]=tt.elements[0]):(tt.toArray(F.__data,W),W+=L.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,y,F.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(S,M,E){const T=S.value;if(E[M]===void 0){if(typeof T=="number")E[M]=T;else{const R=Array.isArray(T)?T:[T],A=[];for(let F=0;F<R.length;F++)A.push(R[F].clone());E[M]=A}return!0}else if(typeof T=="number"){if(E[M]!==T)return E[M]=T,!0}else{const R=Array.isArray(E[M])?E[M]:[E[M]],A=Array.isArray(T)?T:[T];for(let F=0;F<R.length;F++){const y=R[F];if(y.equals(A[F])===!1)return y.copy(A[F]),!0}}return!1}function _(S){const M=S.uniforms;let E=0;const T=16;let R=0;for(let A=0,F=M.length;A<F;A++){const y=M[A],w={boundary:0,storage:0},W=Array.isArray(y.value)?y.value:[y.value];for(let j=0,tt=W.length;j<tt;j++){const L=W[j],k=g(L);w.boundary+=k.boundary,w.storage+=k.storage}if(y.__data=new Float32Array(w.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=E,A>0){R=E%T;const j=T-R;R!==0&&j-w.boundary<0&&(E+=T-R,y.__offset=E)}E+=w.storage}return R=E%T,R>0&&(E+=T-R),S.__size=E,S.__cache={},this}function g(S){const M={boundary:0,storage:0};return typeof S=="number"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function p(S){const M=S.target;M.removeEventListener("dispose",p);const E=o.indexOf(M.__bindingPointIndex);o.splice(E,1),n.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function d(){for(const S in s)n.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:l,update:h,dispose:d}}class dh{constructor(t={}){const{canvas:e=lu(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:h=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const d=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Me,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;const M=this;let E=!1,T=0,R=0,A=null,F=-1,y=null;const w=new ge,W=new ge;let j=null;const tt=new Yt(0);let L=0,k=e.width,Y=e.height,X=1,st=null,K=null;const $=new ge(0,0,k,Y),I=new ge(0,0,k,Y);let H=!1;const ut=new Ca;let ft=!1,_t=!1,At=null;const kt=new ce,wt=new zt,Dt=new D,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ft(){return A===null?X:1}let U=i;function ye(x,N){for(let B=0;B<x.length;B++){const z=x[B],G=e.getContext(z,N);if(G!==null)return G}return null}try{const x={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:h,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ta}`),e.addEventListener("webglcontextlost",Vt,!1),e.addEventListener("webglcontextrestored",P,!1),e.addEventListener("webglcontextcreationerror",ot,!1),U===null){const N=["webgl2","webgl","experimental-webgl"];if(M.isWebGL1Renderer===!0&&N.shift(),U=ye(N,x),U===null)throw ye(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&U instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),U.getShaderPrecisionFormat===void 0&&(U.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(x){throw console.error("THREE.WebGLRenderer: "+x.message),x}let St,Rt,Ct,te,Ut,It,qt,ae,pe,b,v,O,et,Z,nt,vt,at,ct,C,rt,q,Tt,Mt,Et;function gt(){St=new yp(U),Rt=new mp(U,St,t),St.init(Rt),Tt=new r0(U,St,Rt),Ct=new i0(U,St,Rt),te=new Tp(U),Ut=new Vm,It=new s0(U,St,Ct,Ut,Rt,Tt,te),qt=new gp(M),ae=new xp(M),pe=new Iu(U,Rt),Mt=new dp(U,St,pe,Rt),b=new Sp(U,pe,te,Mt),v=new Rp(U,b,pe,te),C=new wp(U,Rt,It),vt=new _p(Ut),O=new km(M,qt,ae,St,Rt,Mt,vt),et=new c0(M,Ut),Z=new Xm,nt=new Zm(St,Rt),ct=new fp(M,qt,ae,Ct,v,f,l),at=new n0(M,v,Rt),Et=new u0(U,te,Rt,Ct),rt=new pp(U,St,te,Rt),q=new Ep(U,St,te,Rt),te.programs=O.programs,M.capabilities=Rt,M.extensions=St,M.properties=Ut,M.renderLists=Z,M.shadowMap=at,M.state=Ct,M.info=te}gt();const mt=new h0(M,U);this.xr=mt,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const x=St.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=St.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(x){x!==void 0&&(X=x,this.setSize(k,Y,!1))},this.getSize=function(x){return x.set(k,Y)},this.setSize=function(x,N,B=!0){if(mt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=x,Y=N,e.width=Math.floor(x*X),e.height=Math.floor(N*X),B===!0&&(e.style.width=x+"px",e.style.height=N+"px"),this.setViewport(0,0,x,N)},this.getDrawingBufferSize=function(x){return x.set(k*X,Y*X).floor()},this.setDrawingBufferSize=function(x,N,B){k=x,Y=N,X=B,e.width=Math.floor(x*B),e.height=Math.floor(N*B),this.setViewport(0,0,x,N)},this.getCurrentViewport=function(x){return x.copy(w)},this.getViewport=function(x){return x.copy($)},this.setViewport=function(x,N,B,z){x.isVector4?$.set(x.x,x.y,x.z,x.w):$.set(x,N,B,z),Ct.viewport(w.copy($).multiplyScalar(X).floor())},this.getScissor=function(x){return x.copy(I)},this.setScissor=function(x,N,B,z){x.isVector4?I.set(x.x,x.y,x.z,x.w):I.set(x,N,B,z),Ct.scissor(W.copy(I).multiplyScalar(X).floor())},this.getScissorTest=function(){return H},this.setScissorTest=function(x){Ct.setScissorTest(H=x)},this.setOpaqueSort=function(x){st=x},this.setTransparentSort=function(x){K=x},this.getClearColor=function(x){return x.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor.apply(ct,arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha.apply(ct,arguments)},this.clear=function(x=!0,N=!0,B=!0){let z=0;if(x){let G=!1;if(A!==null){const dt=A.texture.format;G=dt===jl||dt===Yl||dt===ql}if(G){const dt=A.texture.type,xt=dt===On||dt===Dn||dt===ba||dt===Jn||dt===Wl||dt===Xl,bt=ct.getClearColor(),Pt=ct.getClearAlpha(),Gt=bt.r,Nt=bt.g,Ot=bt.b;xt?(m[0]=Gt,m[1]=Nt,m[2]=Ot,m[3]=Pt,U.clearBufferuiv(U.COLOR,0,m)):(_[0]=Gt,_[1]=Nt,_[2]=Ot,_[3]=Pt,U.clearBufferiv(U.COLOR,0,_))}else z|=U.COLOR_BUFFER_BIT}N&&(z|=U.DEPTH_BUFFER_BIT),B&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Vt,!1),e.removeEventListener("webglcontextrestored",P,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Z.dispose(),nt.dispose(),Ut.dispose(),qt.dispose(),ae.dispose(),v.dispose(),Mt.dispose(),Et.dispose(),O.dispose(),mt.dispose(),mt.removeEventListener("sessionstart",We),mt.removeEventListener("sessionend",Zt),At&&(At.dispose(),At=null),we.stop()};function Vt(x){x.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function P(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const x=te.autoReset,N=at.enabled,B=at.autoUpdate,z=at.needsUpdate,G=at.type;gt(),te.autoReset=x,at.enabled=N,at.autoUpdate=B,at.needsUpdate=z,at.type=G}function ot(x){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function J(x){const N=x.target;N.removeEventListener("dispose",J),V(N)}function V(x){it(x),Ut.remove(x)}function it(x){const N=Ut.get(x).programs;N!==void 0&&(N.forEach(function(B){O.releaseProgram(B)}),x.isShaderMaterial&&O.releaseShaderCache(x))}this.renderBufferDirect=function(x,N,B,z,G,dt){N===null&&(N=Jt);const xt=G.isMesh&&G.matrixWorld.determinant()<0,bt=Hh(x,N,B,z,G);Ct.setMaterial(z,xt);let Pt=B.index,Gt=1;if(z.wireframe===!0){if(Pt=b.getWireframeAttribute(B),Pt===void 0)return;Gt=2}const Nt=B.drawRange,Ot=B.attributes.position;let ie=Nt.start*Gt,Be=(Nt.start+Nt.count)*Gt;dt!==null&&(ie=Math.max(ie,dt.start*Gt),Be=Math.min(Be,(dt.start+dt.count)*Gt)),Pt!==null?(ie=Math.max(ie,0),Be=Math.min(Be,Pt.count)):Ot!=null&&(ie=Math.max(ie,0),Be=Math.min(Be,Ot.count));const me=Be-ie;if(me<0||me===1/0)return;Mt.setup(G,z,bt,B,Pt);let _n,ne=rt;if(Pt!==null&&(_n=pe.get(Pt),ne=q,ne.setIndex(_n)),G.isMesh)z.wireframe===!0?(Ct.setLineWidth(z.wireframeLinewidth*Ft()),ne.setMode(U.LINES)):ne.setMode(U.TRIANGLES);else if(G.isLine){let Xt=z.linewidth;Xt===void 0&&(Xt=1),Ct.setLineWidth(Xt*Ft()),G.isLineSegments?ne.setMode(U.LINES):G.isLineLoop?ne.setMode(U.LINE_LOOP):ne.setMode(U.LINE_STRIP)}else G.isPoints?ne.setMode(U.POINTS):G.isSprite&&ne.setMode(U.TRIANGLES);if(G.isInstancedMesh)ne.renderInstances(ie,me,G.count);else if(B.isInstancedBufferGeometry){const Xt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Er=Math.min(B.instanceCount,Xt);ne.renderInstances(ie,me,Er)}else ne.render(ie,me)};function yt(x,N,B){x.transparent===!0&&x.side===un&&x.forceSinglePass===!1?(x.side=Ue,x.needsUpdate=!0,Ss(x,N,B),x.side=zn,x.needsUpdate=!0,Ss(x,N,B),x.side=un):Ss(x,N,B)}this.compile=function(x,N,B=null){B===null&&(B=x),p=nt.get(B),p.init(),S.push(p),B.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),x!==B&&x.traverseVisible(function(G){G.isLight&&G.layers.test(N.layers)&&(p.pushLight(G),G.castShadow&&p.pushShadow(G))}),p.setupLights(M._useLegacyLights);const z=new Set;return x.traverse(function(G){const dt=G.material;if(dt)if(Array.isArray(dt))for(let xt=0;xt<dt.length;xt++){const bt=dt[xt];yt(bt,B,G),z.add(bt)}else yt(dt,B,G),z.add(dt)}),S.pop(),p=null,z},this.compileAsync=function(x,N,B=null){const z=this.compile(x,N,B);return new Promise(G=>{function dt(){if(z.forEach(function(xt){Ut.get(xt).currentProgram.isReady()&&z.delete(xt)}),z.size===0){G(x);return}setTimeout(dt,10)}St.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let Wt=null;function oe(x){Wt&&Wt(x)}function We(){we.stop()}function Zt(){we.start()}const we=new oh;we.setAnimationLoop(oe),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(x){Wt=x,mt.setAnimationLoop(x),x===null?we.stop():we.start()},mt.addEventListener("sessionstart",We),mt.addEventListener("sessionend",Zt),this.render=function(x,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),mt.enabled===!0&&mt.isPresenting===!0&&(mt.cameraAutoUpdate===!0&&mt.updateCamera(N),N=mt.getCamera()),x.isScene===!0&&x.onBeforeRender(M,x,N,A),p=nt.get(x,S.length),p.init(),S.push(p),kt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),ut.setFromProjectionMatrix(kt),_t=this.localClippingEnabled,ft=vt.init(this.clippingPlanes,_t),g=Z.get(x,d.length),g.init(),d.push(g),ln(x,N,0,M.sortObjects),g.finish(),M.sortObjects===!0&&g.sort(st,K),this.info.render.frame++,ft===!0&&vt.beginShadows();const B=p.state.shadowsArray;if(at.render(B,x,N),ft===!0&&vt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ct.render(g,x),p.setupLights(M._useLegacyLights),N.isArrayCamera){const z=N.cameras;for(let G=0,dt=z.length;G<dt;G++){const xt=z[G];za(g,x,xt,xt.viewport)}}else za(g,x,N);A!==null&&(It.updateMultisampleRenderTarget(A),It.updateRenderTargetMipmap(A)),x.isScene===!0&&x.onAfterRender(M,x,N),Mt.resetDefaultState(),F=-1,y=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,d.pop(),d.length>0?g=d[d.length-1]:g=null};function ln(x,N,B,z){if(x.visible===!1)return;if(x.layers.test(N.layers)){if(x.isGroup)B=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(N);else if(x.isLight)p.pushLight(x),x.castShadow&&p.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||ut.intersectsSprite(x)){z&&Dt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(kt);const xt=v.update(x),bt=x.material;bt.visible&&g.push(x,xt,bt,B,Dt.z,null)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||ut.intersectsObject(x))){const xt=v.update(x),bt=x.material;if(z&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),Dt.copy(x.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Dt.copy(xt.boundingSphere.center)),Dt.applyMatrix4(x.matrixWorld).applyMatrix4(kt)),Array.isArray(bt)){const Pt=xt.groups;for(let Gt=0,Nt=Pt.length;Gt<Nt;Gt++){const Ot=Pt[Gt],ie=bt[Ot.materialIndex];ie&&ie.visible&&g.push(x,xt,ie,B,Dt.z,Ot)}}else bt.visible&&g.push(x,xt,bt,B,Dt.z,null)}}const dt=x.children;for(let xt=0,bt=dt.length;xt<bt;xt++)ln(dt[xt],N,B,z)}function za(x,N,B,z){const G=x.opaque,dt=x.transmissive,xt=x.transparent;p.setupLightsView(B),ft===!0&&vt.setGlobalState(M.clippingPlanes,B),dt.length>0&&Gh(G,dt,N,B),z&&Ct.viewport(w.copy(z)),G.length>0&&ys(G,N,B),dt.length>0&&ys(dt,N,B),xt.length>0&&ys(xt,N,B),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function Gh(x,N,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;const dt=Rt.isWebGL2;At===null&&(At=new ei(1,1,{generateMipmaps:!0,type:St.has("EXT_color_buffer_half_float")?as:On,minFilter:rs,samples:dt?4:0})),M.getDrawingBufferSize(wt),dt?At.setSize(wt.x,wt.y):At.setSize(ar(wt.x),ar(wt.y));const xt=M.getRenderTarget();M.setRenderTarget(At),M.getClearColor(tt),L=M.getClearAlpha(),L<1&&M.setClearColor(16777215,.5),M.clear();const bt=M.toneMapping;M.toneMapping=Un,ys(x,B,z),It.updateMultisampleRenderTarget(At),It.updateRenderTargetMipmap(At);let Pt=!1;for(let Gt=0,Nt=N.length;Gt<Nt;Gt++){const Ot=N[Gt],ie=Ot.object,Be=Ot.geometry,me=Ot.material,_n=Ot.group;if(me.side===un&&ie.layers.test(z.layers)){const ne=me.side;me.side=Ue,me.needsUpdate=!0,Ga(ie,B,z,Be,me,_n),me.side=ne,me.needsUpdate=!0,Pt=!0}}Pt===!0&&(It.updateMultisampleRenderTarget(At),It.updateRenderTargetMipmap(At)),M.setRenderTarget(xt),M.setClearColor(tt,L),M.toneMapping=bt}function ys(x,N,B){const z=N.isScene===!0?N.overrideMaterial:null;for(let G=0,dt=x.length;G<dt;G++){const xt=x[G],bt=xt.object,Pt=xt.geometry,Gt=z===null?xt.material:z,Nt=xt.group;bt.layers.test(B.layers)&&Ga(bt,N,B,Pt,Gt,Nt)}}function Ga(x,N,B,z,G,dt){x.onBeforeRender(M,N,B,z,G,dt),x.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),G.onBeforeRender(M,N,B,z,x,dt),G.transparent===!0&&G.side===un&&G.forceSinglePass===!1?(G.side=Ue,G.needsUpdate=!0,M.renderBufferDirect(B,N,z,G,x,dt),G.side=zn,G.needsUpdate=!0,M.renderBufferDirect(B,N,z,G,x,dt),G.side=un):M.renderBufferDirect(B,N,z,G,x,dt),x.onAfterRender(M,N,B,z,G,dt)}function Ss(x,N,B){N.isScene!==!0&&(N=Jt);const z=Ut.get(x),G=p.state.lights,dt=p.state.shadowsArray,xt=G.state.version,bt=O.getParameters(x,G.state,dt,N,B),Pt=O.getProgramCacheKey(bt);let Gt=z.programs;z.environment=x.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(x.isMeshStandardMaterial?ae:qt).get(x.envMap||z.environment),Gt===void 0&&(x.addEventListener("dispose",J),Gt=new Map,z.programs=Gt);let Nt=Gt.get(Pt);if(Nt!==void 0){if(z.currentProgram===Nt&&z.lightsStateVersion===xt)return ka(x,bt),Nt}else bt.uniforms=O.getUniforms(x),x.onBuild(B,bt,M),x.onBeforeCompile(bt,M),Nt=O.acquireProgram(bt,Pt),Gt.set(Pt,Nt),z.uniforms=bt.uniforms;const Ot=z.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ot.clippingPlanes=vt.uniform),ka(x,bt),z.needsLights=Vh(x),z.lightsStateVersion=xt,z.needsLights&&(Ot.ambientLightColor.value=G.state.ambient,Ot.lightProbe.value=G.state.probe,Ot.directionalLights.value=G.state.directional,Ot.directionalLightShadows.value=G.state.directionalShadow,Ot.spotLights.value=G.state.spot,Ot.spotLightShadows.value=G.state.spotShadow,Ot.rectAreaLights.value=G.state.rectArea,Ot.ltc_1.value=G.state.rectAreaLTC1,Ot.ltc_2.value=G.state.rectAreaLTC2,Ot.pointLights.value=G.state.point,Ot.pointLightShadows.value=G.state.pointShadow,Ot.hemisphereLights.value=G.state.hemi,Ot.directionalShadowMap.value=G.state.directionalShadowMap,Ot.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Ot.spotShadowMap.value=G.state.spotShadowMap,Ot.spotLightMatrix.value=G.state.spotLightMatrix,Ot.spotLightMap.value=G.state.spotLightMap,Ot.pointShadowMap.value=G.state.pointShadowMap,Ot.pointShadowMatrix.value=G.state.pointShadowMatrix),z.currentProgram=Nt,z.uniformsList=null,Nt}function Ha(x){if(x.uniformsList===null){const N=x.currentProgram.getUniforms();x.uniformsList=Zs.seqWithValue(N.seq,x.uniforms)}return x.uniformsList}function ka(x,N){const B=Ut.get(x);B.outputColorSpace=N.outputColorSpace,B.instancing=N.instancing,B.instancingColor=N.instancingColor,B.skinning=N.skinning,B.morphTargets=N.morphTargets,B.morphNormals=N.morphNormals,B.morphColors=N.morphColors,B.morphTargetsCount=N.morphTargetsCount,B.numClippingPlanes=N.numClippingPlanes,B.numIntersection=N.numClipIntersection,B.vertexAlphas=N.vertexAlphas,B.vertexTangents=N.vertexTangents,B.toneMapping=N.toneMapping}function Hh(x,N,B,z,G){N.isScene!==!0&&(N=Jt),It.resetTextureUnits();const dt=N.fog,xt=z.isMeshStandardMaterial?N.environment:null,bt=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Tn,Pt=(z.isMeshStandardMaterial?ae:qt).get(z.envMap||xt),Gt=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Nt=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ot=!!B.morphAttributes.position,ie=!!B.morphAttributes.normal,Be=!!B.morphAttributes.color;let me=Un;z.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=M.toneMapping);const _n=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ne=_n!==void 0?_n.length:0,Xt=Ut.get(z),Er=p.state.lights;if(ft===!0&&(_t===!0||x!==y)){const ze=x===y&&z.id===F;vt.setState(z,x,ze)}let le=!1;z.version===Xt.__version?(Xt.needsLights&&Xt.lightsStateVersion!==Er.state.version||Xt.outputColorSpace!==bt||G.isInstancedMesh&&Xt.instancing===!1||!G.isInstancedMesh&&Xt.instancing===!0||G.isSkinnedMesh&&Xt.skinning===!1||!G.isSkinnedMesh&&Xt.skinning===!0||G.isInstancedMesh&&Xt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Xt.instancingColor===!1&&G.instanceColor!==null||Xt.envMap!==Pt||z.fog===!0&&Xt.fog!==dt||Xt.numClippingPlanes!==void 0&&(Xt.numClippingPlanes!==vt.numPlanes||Xt.numIntersection!==vt.numIntersection)||Xt.vertexAlphas!==Gt||Xt.vertexTangents!==Nt||Xt.morphTargets!==Ot||Xt.morphNormals!==ie||Xt.morphColors!==Be||Xt.toneMapping!==me||Rt.isWebGL2===!0&&Xt.morphTargetsCount!==ne)&&(le=!0):(le=!0,Xt.__version=z.version);let Vn=Xt.currentProgram;le===!0&&(Vn=Ss(z,N,G));let Va=!1,Xi=!1,Tr=!1;const Re=Vn.getUniforms(),Wn=Xt.uniforms;if(Ct.useProgram(Vn.program)&&(Va=!0,Xi=!0,Tr=!0),z.id!==F&&(F=z.id,Xi=!0),Va||y!==x){Re.setValue(U,"projectionMatrix",x.projectionMatrix),Re.setValue(U,"viewMatrix",x.matrixWorldInverse);const ze=Re.map.cameraPosition;ze!==void 0&&ze.setValue(U,Dt.setFromMatrixPosition(x.matrixWorld)),Rt.logarithmicDepthBuffer&&Re.setValue(U,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Re.setValue(U,"isOrthographic",x.isOrthographicCamera===!0),y!==x&&(y=x,Xi=!0,Tr=!0)}if(G.isSkinnedMesh){Re.setOptional(U,G,"bindMatrix"),Re.setOptional(U,G,"bindMatrixInverse");const ze=G.skeleton;ze&&(Rt.floatVertexTextures?(ze.boneTexture===null&&ze.computeBoneTexture(),Re.setValue(U,"boneTexture",ze.boneTexture,It),Re.setValue(U,"boneTextureSize",ze.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const br=B.morphAttributes;if((br.position!==void 0||br.normal!==void 0||br.color!==void 0&&Rt.isWebGL2===!0)&&C.update(G,B,Vn),(Xi||Xt.receiveShadow!==G.receiveShadow)&&(Xt.receiveShadow=G.receiveShadow,Re.setValue(U,"receiveShadow",G.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Wn.envMap.value=Pt,Wn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),Xi&&(Re.setValue(U,"toneMappingExposure",M.toneMappingExposure),Xt.needsLights&&kh(Wn,Tr),dt&&z.fog===!0&&et.refreshFogUniforms(Wn,dt),et.refreshMaterialUniforms(Wn,z,X,Y,At),Zs.upload(U,Ha(Xt),Wn,It)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Zs.upload(U,Ha(Xt),Wn,It),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Re.setValue(U,"center",G.center),Re.setValue(U,"modelViewMatrix",G.modelViewMatrix),Re.setValue(U,"normalMatrix",G.normalMatrix),Re.setValue(U,"modelMatrix",G.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const ze=z.uniformsGroups;for(let Ar=0,Wh=ze.length;Ar<Wh;Ar++)if(Rt.isWebGL2){const Wa=ze[Ar];Et.update(Wa,Vn),Et.bind(Wa,Vn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Vn}function kh(x,N){x.ambientLightColor.needsUpdate=N,x.lightProbe.needsUpdate=N,x.directionalLights.needsUpdate=N,x.directionalLightShadows.needsUpdate=N,x.pointLights.needsUpdate=N,x.pointLightShadows.needsUpdate=N,x.spotLights.needsUpdate=N,x.spotLightShadows.needsUpdate=N,x.rectAreaLights.needsUpdate=N,x.hemisphereLights.needsUpdate=N}function Vh(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(x,N,B){Ut.get(x.texture).__webglTexture=N,Ut.get(x.depthTexture).__webglTexture=B;const z=Ut.get(x);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||St.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(x,N){const B=Ut.get(x);B.__webglFramebuffer=N,B.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(x,N=0,B=0){A=x,T=N,R=B;let z=!0,G=null,dt=!1,xt=!1;if(x){const Pt=Ut.get(x);Pt.__useDefaultFramebuffer!==void 0?(Ct.bindFramebuffer(U.FRAMEBUFFER,null),z=!1):Pt.__webglFramebuffer===void 0?It.setupRenderTarget(x):Pt.__hasExternalTextures&&It.rebindTextures(x,Ut.get(x.texture).__webglTexture,Ut.get(x.depthTexture).__webglTexture);const Gt=x.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(xt=!0);const Nt=Ut.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Nt[N])?G=Nt[N][B]:G=Nt[N],dt=!0):Rt.isWebGL2&&x.samples>0&&It.useMultisampledRTT(x)===!1?G=Ut.get(x).__webglMultisampledFramebuffer:Array.isArray(Nt)?G=Nt[B]:G=Nt,w.copy(x.viewport),W.copy(x.scissor),j=x.scissorTest}else w.copy($).multiplyScalar(X).floor(),W.copy(I).multiplyScalar(X).floor(),j=H;if(Ct.bindFramebuffer(U.FRAMEBUFFER,G)&&Rt.drawBuffers&&z&&Ct.drawBuffers(x,G),Ct.viewport(w),Ct.scissor(W),Ct.setScissorTest(j),dt){const Pt=Ut.get(x.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,Pt.__webglTexture,B)}else if(xt){const Pt=Ut.get(x.texture),Gt=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,Pt.__webglTexture,B||0,Gt)}F=-1},this.readRenderTargetPixels=function(x,N,B,z,G,dt,xt){if(!(x&&x.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Ut.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&xt!==void 0&&(bt=bt[xt]),bt){Ct.bindFramebuffer(U.FRAMEBUFFER,bt);try{const Pt=x.texture,Gt=Pt.format,Nt=Pt.type;if(Gt!==nn&&Tt.convert(Gt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ot=Nt===as&&(St.has("EXT_color_buffer_half_float")||Rt.isWebGL2&&St.has("EXT_color_buffer_float"));if(Nt!==On&&Tt.convert(Nt)!==U.getParameter(U.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Nt===In&&(Rt.isWebGL2||St.has("OES_texture_float")||St.has("WEBGL_color_buffer_float")))&&!Ot){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=x.width-z&&B>=0&&B<=x.height-G&&U.readPixels(N,B,z,G,Tt.convert(Gt),Tt.convert(Nt),dt)}finally{const Pt=A!==null?Ut.get(A).__webglFramebuffer:null;Ct.bindFramebuffer(U.FRAMEBUFFER,Pt)}}},this.copyFramebufferToTexture=function(x,N,B=0){const z=Math.pow(2,-B),G=Math.floor(N.image.width*z),dt=Math.floor(N.image.height*z);It.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,B,0,0,x.x,x.y,G,dt),Ct.unbindTexture()},this.copyTextureToTexture=function(x,N,B,z=0){const G=N.image.width,dt=N.image.height,xt=Tt.convert(B.format),bt=Tt.convert(B.type);It.setTexture2D(B,0),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment),N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,z,x.x,x.y,G,dt,xt,bt,N.image.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,z,x.x,x.y,N.mipmaps[0].width,N.mipmaps[0].height,xt,N.mipmaps[0].data):U.texSubImage2D(U.TEXTURE_2D,z,x.x,x.y,xt,bt,N.image),z===0&&B.generateMipmaps&&U.generateMipmap(U.TEXTURE_2D),Ct.unbindTexture()},this.copyTextureToTexture3D=function(x,N,B,z,G=0){if(M.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const dt=x.max.x-x.min.x+1,xt=x.max.y-x.min.y+1,bt=x.max.z-x.min.z+1,Pt=Tt.convert(z.format),Gt=Tt.convert(z.type);let Nt;if(z.isData3DTexture)It.setTexture3D(z,0),Nt=U.TEXTURE_3D;else if(z.isDataArrayTexture)It.setTexture2DArray(z,0),Nt=U.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,z.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,z.unpackAlignment);const Ot=U.getParameter(U.UNPACK_ROW_LENGTH),ie=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Be=U.getParameter(U.UNPACK_SKIP_PIXELS),me=U.getParameter(U.UNPACK_SKIP_ROWS),_n=U.getParameter(U.UNPACK_SKIP_IMAGES),ne=B.isCompressedTexture?B.mipmaps[0]:B.image;U.pixelStorei(U.UNPACK_ROW_LENGTH,ne.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ne.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,x.min.x),U.pixelStorei(U.UNPACK_SKIP_ROWS,x.min.y),U.pixelStorei(U.UNPACK_SKIP_IMAGES,x.min.z),B.isDataTexture||B.isData3DTexture?U.texSubImage3D(Nt,G,N.x,N.y,N.z,dt,xt,bt,Pt,Gt,ne.data):B.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),U.compressedTexSubImage3D(Nt,G,N.x,N.y,N.z,dt,xt,bt,Pt,ne.data)):U.texSubImage3D(Nt,G,N.x,N.y,N.z,dt,xt,bt,Pt,Gt,ne),U.pixelStorei(U.UNPACK_ROW_LENGTH,Ot),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,ie),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Be),U.pixelStorei(U.UNPACK_SKIP_ROWS,me),U.pixelStorei(U.UNPACK_SKIP_IMAGES,_n),G===0&&z.generateMipmaps&&U.generateMipmap(Nt),Ct.unbindTexture()},this.initTexture=function(x){x.isCubeTexture?It.setTextureCube(x,0):x.isData3DTexture?It.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?It.setTexture2DArray(x,0):It.setTexture2D(x,0),Ct.unbindTexture()},this.resetState=function(){T=0,R=0,A=null,Ct.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return En}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Aa?"display-p3":"srgb",e.unpackColorSpace=Kt.workingColorSpace===pr?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Me?ti:$l}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ti?Me:Tn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class f0 extends dh{}f0.prototype.isWebGL1Renderer=!0;class d0 extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class Da extends fs{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fl=new D,dl=new D,pl=new ce,na=new Ra,qs=new mr;class p0 extends xe{constructor(t=new on,e=new Da){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)fl.fromBufferAttribute(e,s-1),dl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=fl.distanceTo(dl);t.setAttribute("lineDistance",new Ve(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),qs.copy(i.boundingSphere),qs.applyMatrix4(s),qs.radius+=r,t.ray.intersectsSphere(qs)===!1)return;pl.copy(s).invert(),na.copy(t.ray).applyMatrix4(pl);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,h=new D,u=new D,c=new D,f=new D,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const d=Math.max(0,o.start),S=Math.min(_.count,o.start+o.count);for(let M=d,E=S-1;M<E;M+=m){const T=_.getX(M),R=_.getX(M+1);if(h.fromBufferAttribute(p,T),u.fromBufferAttribute(p,R),na.distanceSqToSegment(h,u,f,c)>l)continue;f.applyMatrix4(this.matrixWorld);const F=t.ray.origin.distanceTo(f);F<t.near||F>t.far||e.push({distance:F,point:c.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),S=Math.min(p.count,o.start+o.count);for(let M=d,E=S-1;M<E;M+=m){if(h.fromBufferAttribute(p,M),u.fromBufferAttribute(p,M+1),na.distanceSqToSegment(h,u,f,c)>l)continue;f.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(f);R<t.near||R>t.far||e.push({distance:R,point:c.clone().applyMatrix4(this.matrixWorld),index:M,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}class vr extends on{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let h=0;const u=[],c=new D,f=new D,m=[],_=[],g=[],p=[];for(let d=0;d<=i;d++){const S=[],M=d/i;let E=0;d===0&&o===0?E=.5/e:d===i&&l===Math.PI&&(E=-.5/e);for(let T=0;T<=e;T++){const R=T/e;c.x=-t*Math.cos(s+R*r)*Math.sin(o+M*a),c.y=t*Math.cos(o+M*a),c.z=t*Math.sin(s+R*r)*Math.sin(o+M*a),_.push(c.x,c.y,c.z),f.copy(c).normalize(),g.push(f.x,f.y,f.z),p.push(R+E,1-M),S.push(h++)}u.push(S)}for(let d=0;d<i;d++)for(let S=0;S<e;S++){const M=u[d][S+1],E=u[d][S],T=u[d+1][S],R=u[d+1][S+1];(d!==0||o>0)&&m.push(M,E,R),(d!==i-1||l<Math.PI)&&m.push(E,T,R)}this.setIndex(m),this.setAttribute("position",new Ve(_,3)),this.setAttribute("normal",new Ve(g,3)),this.setAttribute("uv",new Ve(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ph extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const ia=new ce,ml=new D,_l=new D;class m0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ca,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(ml),_l.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(_l),e.updateMatrixWorld(),ia.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ia),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ia)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _0 extends m0{constructor(){super(new lh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class g0 extends ph{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new _0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class v0 extends ph{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class gl{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ta}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ta);const vl={type:"change"},sa={type:"start"},Ml={type:"end"},Ys=new Ra,xl=new Ln,M0=Math.cos(70*ou.DEG2RAD);class x0 extends ri{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ai.ROTATE,MIDDLE:ai.DOLLY,RIGHT:ai.PAN},this.touches={ONE:oi.ROTATE,TWO:oi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",v),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",v),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(vl),i.update(),r=s.NONE},this.update=function(){const C=new D,rt=new Gn().setFromUnitVectors(t.up,new D(0,1,0)),q=rt.clone().invert(),Tt=new D,Mt=new Gn,Et=new D,gt=2*Math.PI;return function(Vt=null){const P=i.object.position;C.copy(P).sub(i.target),C.applyQuaternion(rt),a.setFromVector3(C),i.autoRotate&&r===s.NONE&&W(y(Vt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ot=i.minAzimuthAngle,J=i.maxAzimuthAngle;isFinite(ot)&&isFinite(J)&&(ot<-Math.PI?ot+=gt:ot>Math.PI&&(ot-=gt),J<-Math.PI?J+=gt:J>Math.PI&&(J-=gt),ot<=J?a.theta=Math.max(ot,Math.min(J,a.theta)):a.theta=a.theta>(ot+J)/2?Math.max(ot,a.theta):Math.min(J,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*h),C.setFromSpherical(a),C.applyQuaternion(q),P.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let V=!1;if(i.zoomToCursor&&R){let it=null;if(i.object.isPerspectiveCamera){const yt=C.length();it=K(yt*h);const Wt=yt-it;i.object.position.addScaledVector(E,Wt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const yt=new D(T.x,T.y,0);yt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),V=!0;const Wt=new D(T.x,T.y,0);Wt.unproject(i.object),i.object.position.sub(Wt).add(yt),i.object.updateMatrixWorld(),it=C.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;it!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(it).add(i.object.position):(Ys.origin.copy(i.object.position),Ys.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Ys.direction))<M0?t.lookAt(i.target):(xl.setFromNormalAndCoplanarPoint(i.object.up,i.target),Ys.intersectPlane(xl,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/h)),i.object.updateProjectionMatrix(),V=!0);return h=1,R=!1,V||Tt.distanceToSquared(i.object.position)>o||8*(1-Mt.dot(i.object.quaternion))>o||Et.distanceToSquared(i.target)>0?(i.dispatchEvent(vl),Tt.copy(i.object.position),Mt.copy(i.object.quaternion),Et.copy(i.target),V=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Z),i.domElement.removeEventListener("pointerdown",Ut),i.domElement.removeEventListener("pointercancel",qt),i.domElement.removeEventListener("wheel",b),i.domElement.removeEventListener("pointermove",It),i.domElement.removeEventListener("pointerup",qt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",v),i._domElementKeyEvents=null)};const i=this,s={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=s.NONE;const o=1e-6,a=new gl,l=new gl;let h=1;const u=new D,c=new zt,f=new zt,m=new zt,_=new zt,g=new zt,p=new zt,d=new zt,S=new zt,M=new zt,E=new D,T=new zt;let R=!1;const A=[],F={};function y(C){return C!==null?2*Math.PI/60*i.autoRotateSpeed*C:2*Math.PI/60/60*i.autoRotateSpeed}function w(){return Math.pow(.95,i.zoomSpeed)}function W(C){l.theta-=C}function j(C){l.phi-=C}const tt=function(){const C=new D;return function(q,Tt){C.setFromMatrixColumn(Tt,0),C.multiplyScalar(-q),u.add(C)}}(),L=function(){const C=new D;return function(q,Tt){i.screenSpacePanning===!0?C.setFromMatrixColumn(Tt,1):(C.setFromMatrixColumn(Tt,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(q),u.add(C)}}(),k=function(){const C=new D;return function(q,Tt){const Mt=i.domElement;if(i.object.isPerspectiveCamera){const Et=i.object.position;C.copy(Et).sub(i.target);let gt=C.length();gt*=Math.tan(i.object.fov/2*Math.PI/180),tt(2*q*gt/Mt.clientHeight,i.object.matrix),L(2*Tt*gt/Mt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(tt(q*(i.object.right-i.object.left)/i.object.zoom/Mt.clientWidth,i.object.matrix),L(Tt*(i.object.top-i.object.bottom)/i.object.zoom/Mt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function Y(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h/=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(C){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?h*=C:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function st(C){if(!i.zoomToCursor)return;R=!0;const rt=i.domElement.getBoundingClientRect(),q=C.clientX-rt.left,Tt=C.clientY-rt.top,Mt=rt.width,Et=rt.height;T.x=q/Mt*2-1,T.y=-(Tt/Et)*2+1,E.set(T.x,T.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(C){return Math.max(i.minDistance,Math.min(i.maxDistance,C))}function $(C){c.set(C.clientX,C.clientY)}function I(C){st(C),d.set(C.clientX,C.clientY)}function H(C){_.set(C.clientX,C.clientY)}function ut(C){f.set(C.clientX,C.clientY),m.subVectors(f,c).multiplyScalar(i.rotateSpeed);const rt=i.domElement;W(2*Math.PI*m.x/rt.clientHeight),j(2*Math.PI*m.y/rt.clientHeight),c.copy(f),i.update()}function ft(C){S.set(C.clientX,C.clientY),M.subVectors(S,d),M.y>0?Y(w()):M.y<0&&X(w()),d.copy(S),i.update()}function _t(C){g.set(C.clientX,C.clientY),p.subVectors(g,_).multiplyScalar(i.panSpeed),k(p.x,p.y),_.copy(g),i.update()}function At(C){st(C),C.deltaY<0?X(w()):C.deltaY>0&&Y(w()),i.update()}function kt(C){let rt=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?j(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,i.keyPanSpeed),rt=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?j(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(0,-i.keyPanSpeed),rt=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?W(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(i.keyPanSpeed,0),rt=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?W(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):k(-i.keyPanSpeed,0),rt=!0;break}rt&&(C.preventDefault(),i.update())}function wt(){if(A.length===1)c.set(A[0].pageX,A[0].pageY);else{const C=.5*(A[0].pageX+A[1].pageX),rt=.5*(A[0].pageY+A[1].pageY);c.set(C,rt)}}function Dt(){if(A.length===1)_.set(A[0].pageX,A[0].pageY);else{const C=.5*(A[0].pageX+A[1].pageX),rt=.5*(A[0].pageY+A[1].pageY);_.set(C,rt)}}function Jt(){const C=A[0].pageX-A[1].pageX,rt=A[0].pageY-A[1].pageY,q=Math.sqrt(C*C+rt*rt);d.set(0,q)}function Ft(){i.enableZoom&&Jt(),i.enablePan&&Dt()}function U(){i.enableZoom&&Jt(),i.enableRotate&&wt()}function ye(C){if(A.length==1)f.set(C.pageX,C.pageY);else{const q=ct(C),Tt=.5*(C.pageX+q.x),Mt=.5*(C.pageY+q.y);f.set(Tt,Mt)}m.subVectors(f,c).multiplyScalar(i.rotateSpeed);const rt=i.domElement;W(2*Math.PI*m.x/rt.clientHeight),j(2*Math.PI*m.y/rt.clientHeight),c.copy(f)}function St(C){if(A.length===1)g.set(C.pageX,C.pageY);else{const rt=ct(C),q=.5*(C.pageX+rt.x),Tt=.5*(C.pageY+rt.y);g.set(q,Tt)}p.subVectors(g,_).multiplyScalar(i.panSpeed),k(p.x,p.y),_.copy(g)}function Rt(C){const rt=ct(C),q=C.pageX-rt.x,Tt=C.pageY-rt.y,Mt=Math.sqrt(q*q+Tt*Tt);S.set(0,Mt),M.set(0,Math.pow(S.y/d.y,i.zoomSpeed)),Y(M.y),d.copy(S)}function Ct(C){i.enableZoom&&Rt(C),i.enablePan&&St(C)}function te(C){i.enableZoom&&Rt(C),i.enableRotate&&ye(C)}function Ut(C){i.enabled!==!1&&(A.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",It),i.domElement.addEventListener("pointerup",qt)),nt(C),C.pointerType==="touch"?O(C):ae(C))}function It(C){i.enabled!==!1&&(C.pointerType==="touch"?et(C):pe(C))}function qt(C){vt(C),A.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",It),i.domElement.removeEventListener("pointerup",qt)),i.dispatchEvent(Ml),r=s.NONE}function ae(C){let rt;switch(C.button){case 0:rt=i.mouseButtons.LEFT;break;case 1:rt=i.mouseButtons.MIDDLE;break;case 2:rt=i.mouseButtons.RIGHT;break;default:rt=-1}switch(rt){case ai.DOLLY:if(i.enableZoom===!1)return;I(C),r=s.DOLLY;break;case ai.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;H(C),r=s.PAN}else{if(i.enableRotate===!1)return;$(C),r=s.ROTATE}break;case ai.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;$(C),r=s.ROTATE}else{if(i.enablePan===!1)return;H(C),r=s.PAN}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(sa)}function pe(C){switch(r){case s.ROTATE:if(i.enableRotate===!1)return;ut(C);break;case s.DOLLY:if(i.enableZoom===!1)return;ft(C);break;case s.PAN:if(i.enablePan===!1)return;_t(C);break}}function b(C){i.enabled===!1||i.enableZoom===!1||r!==s.NONE||(C.preventDefault(),i.dispatchEvent(sa),At(C),i.dispatchEvent(Ml))}function v(C){i.enabled===!1||i.enablePan===!1||kt(C)}function O(C){switch(at(C),A.length){case 1:switch(i.touches.ONE){case oi.ROTATE:if(i.enableRotate===!1)return;wt(),r=s.TOUCH_ROTATE;break;case oi.PAN:if(i.enablePan===!1)return;Dt(),r=s.TOUCH_PAN;break;default:r=s.NONE}break;case 2:switch(i.touches.TWO){case oi.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ft(),r=s.TOUCH_DOLLY_PAN;break;case oi.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;U(),r=s.TOUCH_DOLLY_ROTATE;break;default:r=s.NONE}break;default:r=s.NONE}r!==s.NONE&&i.dispatchEvent(sa)}function et(C){switch(at(C),r){case s.TOUCH_ROTATE:if(i.enableRotate===!1)return;ye(C),i.update();break;case s.TOUCH_PAN:if(i.enablePan===!1)return;St(C),i.update();break;case s.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ct(C),i.update();break;case s.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(C),i.update();break;default:r=s.NONE}}function Z(C){i.enabled!==!1&&C.preventDefault()}function nt(C){A.push(C)}function vt(C){delete F[C.pointerId];for(let rt=0;rt<A.length;rt++)if(A[rt].pointerId==C.pointerId){A.splice(rt,1);return}}function at(C){let rt=F[C.pointerId];rt===void 0&&(rt=new zt,F[C.pointerId]=rt),rt.set(C.pageX,C.pageY)}function ct(C){const rt=C.pointerId===A[0].pointerId?A[1]:A[0];return F[rt.pointerId]}i.domElement.addEventListener("contextmenu",Z),i.domElement.addEventListener("pointerdown",Ut),i.domElement.addEventListener("pointercancel",qt),i.domElement.addEventListener("wheel",b,{passive:!1}),this.update()}}function y0(n){n("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),n("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),n("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),n.WGS84=n["EPSG:4326"],n["EPSG:3785"]=n["EPSG:3857"],n.GOOGLE=n["EPSG:3857"],n["EPSG:900913"]=n["EPSG:3857"],n["EPSG:102113"]=n["EPSG:3857"]}var ii=1,si=2,Ni=3,S0=4,Ma=5,yl=6378137,E0=6356752314e-3,Sl=.0066943799901413165,ss=484813681109536e-20,Q=Math.PI/2,T0=.16666666666666666,b0=.04722222222222222,A0=.022156084656084655,ht=1e-10,ve=.017453292519943295,fn=57.29577951308232,jt=Math.PI/4,ls=Math.PI*2,se=3.14159265359,Fe={};Fe.greenwich=0;Fe.lisbon=-9.131906111111;Fe.paris=2.337229166667;Fe.bogota=-74.080916666667;Fe.madrid=-3.687938888889;Fe.rome=12.452333333333;Fe.bern=7.439583333333;Fe.jakarta=106.807719444444;Fe.ferro=-17.666666666667;Fe.brussels=4.367975;Fe.stockholm=18.058277777778;Fe.athens=23.7163375;Fe.oslo=10.722916666667;const w0={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}};var El=/[\s_\-\/\(\)]/g;function Hn(n,t){if(n[t])return n[t];for(var e=Object.keys(n),i=t.toLowerCase().replace(El,""),s=-1,r,o;++s<e.length;)if(r=e[s],o=r.toLowerCase().replace(El,""),o===i)return n[r]}function xa(n){var t={},e=n.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,l){var h=l.split("=");return h.push(!0),a[h[0].toLowerCase()]=h[1],a},{}),i,s,r,o={proj:"projName",datum:"datumCode",rf:function(a){t.rf=parseFloat(a)},lat_0:function(a){t.lat0=a*ve},lat_1:function(a){t.lat1=a*ve},lat_2:function(a){t.lat2=a*ve},lat_ts:function(a){t.lat_ts=a*ve},lon_0:function(a){t.long0=a*ve},lon_1:function(a){t.long1=a*ve},lon_2:function(a){t.long2=a*ve},alpha:function(a){t.alpha=parseFloat(a)*ve},gamma:function(a){t.rectified_grid_angle=parseFloat(a)},lonc:function(a){t.longc=a*ve},x_0:function(a){t.x0=parseFloat(a)},y_0:function(a){t.y0=parseFloat(a)},k_0:function(a){t.k0=parseFloat(a)},k:function(a){t.k0=parseFloat(a)},a:function(a){t.a=parseFloat(a)},b:function(a){t.b=parseFloat(a)},r_a:function(){t.R_A=!0},zone:function(a){t.zone=parseInt(a,10)},south:function(){t.utmSouth=!0},towgs84:function(a){t.datum_params=a.split(",").map(function(l){return parseFloat(l)})},to_meter:function(a){t.to_meter=parseFloat(a)},units:function(a){t.units=a;var l=Hn(w0,a);l&&(t.to_meter=l.to_meter)},from_greenwich:function(a){t.from_greenwich=a*ve},pm:function(a){var l=Hn(Fe,a);t.from_greenwich=(l||parseFloat(a))*ve},nadgrids:function(a){a==="@null"?t.datumCode="none":t.nadgrids=a},axis:function(a){var l="ewnsud";a.length===3&&l.indexOf(a.substr(0,1))!==-1&&l.indexOf(a.substr(1,1))!==-1&&l.indexOf(a.substr(2,1))!==-1&&(t.axis=a)},approx:function(){t.approx=!0}};for(i in e)s=e[i],i in o?(r=o[i],typeof r=="function"?r(s):t[r]=s):t[i]=s;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}var hs=1,mh=2,_h=3,lr=4,gh=5,Ia=-1,R0=/\s/,C0=/[A-Za-z]/,P0=/[A-Za-z84_]/,Mr=/[,\]]/,vh=/[\d\.E\-\+]/;function bn(n){if(typeof n!="string")throw new Error("not a string");this.text=n.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=hs}bn.prototype.readCharicter=function(){var n=this.text[this.place++];if(this.state!==lr)for(;R0.test(n);){if(this.place>=this.text.length)return;n=this.text[this.place++]}switch(this.state){case hs:return this.neutral(n);case mh:return this.keyword(n);case lr:return this.quoted(n);case gh:return this.afterquote(n);case _h:return this.number(n);case Ia:return}};bn.prototype.afterquote=function(n){if(n==='"'){this.word+='"',this.state=lr;return}if(Mr.test(n)){this.word=this.word.trim(),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in afterquote yet, index '+this.place)};bn.prototype.afterItem=function(n){if(n===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=hs;return}if(n==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=hs,this.currentObject=this.stack.pop(),this.currentObject||(this.state=Ia);return}};bn.prototype.number=function(n){if(vh.test(n)){this.word+=n;return}if(Mr.test(n)){this.word=parseFloat(this.word),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in number yet, index '+this.place)};bn.prototype.quoted=function(n){if(n==='"'){this.state=gh;return}this.word+=n};bn.prototype.keyword=function(n){if(P0.test(n)){this.word+=n;return}if(n==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=hs;return}if(Mr.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in keyword yet, index '+this.place)};bn.prototype.neutral=function(n){if(C0.test(n)){this.word=n,this.state=mh;return}if(n==='"'){this.word="",this.state=lr;return}if(vh.test(n)){this.word=n,this.state=_h;return}if(Mr.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in neutral yet, index '+this.place)};bn.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===Ia)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function L0(n){var t=new bn(n);return t.output()}function Tl(n,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var i=t?{}:n,s=e.reduce(function(r,o){return Ri(o,r),r},i);t&&(n[t]=s)}function Ri(n,t){if(!Array.isArray(n)){t[n]=!0;return}var e=n.shift();if(e==="PARAMETER"&&(e=n.shift()),n.length===1){if(Array.isArray(n[0])){t[e]={},Ri(n[0],t[e]);return}t[e]=n[0];return}if(!n.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=n;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(n);return}Array.isArray(e)||(t[e]={});var i;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:n[0].toLowerCase(),convert:n[1]},n.length===3&&Ri(n[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:n[0],a:n[1],rf:n[2]},n.length===4&&Ri(n[3],t[e]);return;case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":n[0]=["name",n[0]],Tl(t,e,n);return;default:for(i=-1;++i<n.length;)if(!Array.isArray(n[i]))return Ri(n,t[e]);return Tl(t,e,n)}}var D0=.017453292519943295;function I0(n,t){var e=t[0],i=t[1];!(e in n)&&i in n&&(n[e]=n[i],t.length===3&&(n[e]=t[2](n[e])))}function hn(n){return n*D0}function N0(n){if(n.type==="GEOGCS"?n.projName="longlat":n.type==="LOCAL_CS"?(n.projName="identity",n.local=!0):typeof n.PROJECTION=="object"?n.projName=Object.keys(n.PROJECTION)[0]:n.projName=n.PROJECTION,n.AXIS){for(var t="",e=0,i=n.AXIS.length;e<i;++e){var s=[n.AXIS[e][0].toLowerCase(),n.AXIS[e][1].toLowerCase()];s[0].indexOf("north")!==-1||(s[0]==="y"||s[0]==="lat")&&s[1]==="north"?t+="n":s[0].indexOf("south")!==-1||(s[0]==="y"||s[0]==="lat")&&s[1]==="south"?t+="s":s[0].indexOf("east")!==-1||(s[0]==="x"||s[0]==="lon")&&s[1]==="east"?t+="e":(s[0].indexOf("west")!==-1||(s[0]==="x"||s[0]==="lon")&&s[1]==="west")&&(t+="w")}t.length===2&&(t+="u"),t.length===3&&(n.axis=t)}n.UNIT&&(n.units=n.UNIT.name.toLowerCase(),n.units==="metre"&&(n.units="meter"),n.UNIT.convert&&(n.type==="GEOGCS"?n.DATUM&&n.DATUM.SPHEROID&&(n.to_meter=n.UNIT.convert*n.DATUM.SPHEROID.a):n.to_meter=n.UNIT.convert));var r=n.GEOGCS;n.type==="GEOGCS"&&(r=n),r&&(r.DATUM?n.datumCode=r.DATUM.name.toLowerCase():n.datumCode=r.name.toLowerCase(),n.datumCode.slice(0,2)==="d_"&&(n.datumCode=n.datumCode.slice(2)),(n.datumCode==="new_zealand_geodetic_datum_1949"||n.datumCode==="new_zealand_1949")&&(n.datumCode="nzgd49"),(n.datumCode==="wgs_1984"||n.datumCode==="world_geodetic_system_1984")&&(n.PROJECTION==="Mercator_Auxiliary_Sphere"&&(n.sphere=!0),n.datumCode="wgs84"),n.datumCode.slice(-6)==="_ferro"&&(n.datumCode=n.datumCode.slice(0,-6)),n.datumCode.slice(-8)==="_jakarta"&&(n.datumCode=n.datumCode.slice(0,-8)),~n.datumCode.indexOf("belge")&&(n.datumCode="rnb72"),r.DATUM&&r.DATUM.SPHEROID&&(n.ellps=r.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),n.ellps.toLowerCase().slice(0,13)==="international"&&(n.ellps="intl"),n.a=r.DATUM.SPHEROID.a,n.rf=parseFloat(r.DATUM.SPHEROID.rf,10)),r.DATUM&&r.DATUM.TOWGS84&&(n.datum_params=r.DATUM.TOWGS84),~n.datumCode.indexOf("osgb_1936")&&(n.datumCode="osgb36"),~n.datumCode.indexOf("osni_1952")&&(n.datumCode="osni52"),(~n.datumCode.indexOf("tm65")||~n.datumCode.indexOf("geodetic_datum_of_1965"))&&(n.datumCode="ire65"),n.datumCode==="ch1903+"&&(n.datumCode="ch1903"),~n.datumCode.indexOf("israel")&&(n.datumCode="isr93")),n.b&&!isFinite(n.b)&&(n.b=n.a);function o(h){var u=n.to_meter||1;return h*u}var a=function(h){return I0(n,h)},l=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",hn],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",hn],["x0","false_easting",o],["y0","false_northing",o],["long0","central_meridian",hn],["lat0","latitude_of_origin",hn],["lat0","standard_parallel_1",hn],["lat1","standard_parallel_1",hn],["lat2","standard_parallel_2",hn],["azimuth","Azimuth"],["alpha","azimuth",hn],["srsCode","name"]];l.forEach(a),!n.long0&&n.longc&&(n.projName==="Albers_Conic_Equal_Area"||n.projName==="Lambert_Azimuthal_Equal_Area")&&(n.long0=n.longc),!n.lat_ts&&n.lat1&&(n.projName==="Stereographic_South_Pole"||n.projName==="Polar Stereographic (variant B)")?(n.lat0=hn(n.lat1>0?90:-90),n.lat_ts=n.lat1):!n.lat_ts&&n.lat0&&n.projName==="Polar_Stereographic"&&(n.lat_ts=n.lat0,n.lat0=hn(n.lat0>0?90:-90))}function Mh(n){var t=L0(n),e=t.shift(),i=t.shift();t.unshift(["name",i]),t.unshift(["type",e]);var s={};return Ri(t,s),N0(s),s}function Le(n){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?Le[n]=xa(arguments[1]):Le[n]=Mh(arguments[1]):Le[n]=e}else if(arguments.length===1){if(Array.isArray(n))return n.map(function(i){Array.isArray(i)?Le.apply(t,i):Le(i)});if(typeof n=="string"){if(n in Le)return Le[n]}else"EPSG"in n?Le["EPSG:"+n.EPSG]=n:"ESRI"in n?Le["ESRI:"+n.ESRI]=n:"IAU2000"in n?Le["IAU2000:"+n.IAU2000]=n:console.log(n);return}}y0(Le);function U0(n){return typeof n=="string"}function O0(n){return n in Le}var F0=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function B0(n){return F0.some(function(t){return n.indexOf(t)>-1})}var z0=["3857","900913","3785","102113"];function G0(n){var t=Hn(n,"authority");if(t){var e=Hn(t,"epsg");return e&&z0.indexOf(e)>-1}}function H0(n){var t=Hn(n,"extension");if(t)return Hn(t,"proj4")}function k0(n){return n[0]==="+"}function V0(n){if(U0(n)){if(O0(n))return Le[n];if(B0(n)){var t=Mh(n);if(G0(t))return Le["EPSG:3857"];var e=H0(t);return e?xa(e):t}if(k0(n))return xa(n)}else return n}function bl(n,t){n=n||{};var e,i;if(!t)return n;for(i in t)e=t[i],e!==void 0&&(n[i]=e);return n}function mn(n,t,e){var i=n*t;return e/Math.sqrt(1-i*i)}function ms(n){return n<0?-1:1}function pt(n){return Math.abs(n)<=se?n:n-ms(n)*ls}function an(n,t,e){var i=n*e,s=.5*n;return i=Math.pow((1-i)/(1+i),s),Math.tan(.5*(Q-t))/i}function cs(n,t){for(var e=.5*n,i,s,r=Q-2*Math.atan(t),o=0;o<=15;o++)if(i=n*Math.sin(r),s=Q-2*Math.atan(t*Math.pow((1-i)/(1+i),e))-r,r+=s,Math.abs(s)<=1e-10)return r;return-9999}function W0(){var n=this.b/this.a;this.es=1-n*n,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=mn(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function X0(n){var t=n.x,e=n.y;if(e*fn>90&&e*fn<-90&&t*fn>180&&t*fn<-180)return null;var i,s;if(Math.abs(Math.abs(e)-Q)<=ht)return null;if(this.sphere)i=this.x0+this.a*this.k0*pt(t-this.long0),s=this.y0+this.a*this.k0*Math.log(Math.tan(jt+.5*e));else{var r=Math.sin(e),o=an(this.e,e,r);i=this.x0+this.a*this.k0*pt(t-this.long0),s=this.y0-this.a*this.k0*Math.log(o)}return n.x=i,n.y=s,n}function q0(n){var t=n.x-this.x0,e=n.y-this.y0,i,s;if(this.sphere)s=Q-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var r=Math.exp(-e/(this.a*this.k0));if(s=cs(this.e,r),s===-9999)return null}return i=pt(this.long0+t/(this.a*this.k0)),n.x=i,n.y=s,n}var Y0=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const j0={init:W0,forward:X0,inverse:q0,names:Y0};function $0(){}function Al(n){return n}var K0=["longlat","identity"];const Z0={init:$0,forward:Al,inverse:Al,names:K0};var J0=[j0,Z0],Js={},hr=[];function xh(n,t){var e=hr.length;return n.names?(hr[e]=n,n.names.forEach(function(i){Js[i.toLowerCase()]=e}),this):(console.log(t),!0)}function Q0(n){if(!n)return!1;var t=n.toLowerCase();if(typeof Js[t]<"u"&&hr[Js[t]])return hr[Js[t]]}function t_(){J0.forEach(xh)}const e_={start:t_,add:xh,get:Q0};var Lt={};Lt.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};Lt.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};Lt.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};Lt.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};Lt.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};Lt.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};Lt.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};Lt.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};Lt.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};Lt.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};Lt.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};Lt.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};Lt.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};Lt.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};Lt.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};Lt.clrk80ign={a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"};Lt.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};Lt.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};Lt.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};Lt.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};Lt.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};Lt.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};Lt.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};Lt.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};Lt.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};Lt.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};Lt.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};Lt.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};Lt.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};Lt.hough={a:6378270,rf:297,ellipseName:"Hough"};Lt.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};Lt.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};Lt.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};Lt.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};Lt.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};Lt.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};Lt.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};Lt.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};Lt.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};Lt.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};Lt.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};Lt.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var n_=Lt.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};Lt.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function i_(n,t,e,i){var s=n*n,r=t*t,o=(s-r)/s,a=0;i?(n*=1-o*(T0+o*(b0+o*A0)),s=n*n,o=0):a=Math.sqrt(o);var l=(s-r)/r;return{es:o,e:a,ep2:l}}function s_(n,t,e,i,s){if(!n){var r=Hn(Lt,i);r||(r=n_),n=r.a,t=r.b,e=r.rf}return e&&!t&&(t=(1-1/e)*n),(e===0||Math.abs(n-t)<ht)&&(s=!0,t=n),{a:n,b:t,rf:e,sphere:s}}var ue={};ue.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"};ue.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"};ue.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"};ue.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"};ue.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"};ue.potsdam={towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"};ue.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"};ue.hermannskogel={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"};ue.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"};ue.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"};ue.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"};ue.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"};ue.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"};ue.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"};ue.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"};ue.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"};ue.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"};function r_(n,t,e,i,s,r,o){var a={};return n===void 0||n==="none"?a.datum_type=Ma:a.datum_type=S0,t&&(a.datum_params=t.map(parseFloat),(a.datum_params[0]!==0||a.datum_params[1]!==0||a.datum_params[2]!==0)&&(a.datum_type=ii),a.datum_params.length>3&&(a.datum_params[3]!==0||a.datum_params[4]!==0||a.datum_params[5]!==0||a.datum_params[6]!==0)&&(a.datum_type=si,a.datum_params[3]*=ss,a.datum_params[4]*=ss,a.datum_params[5]*=ss,a.datum_params[6]=a.datum_params[6]/1e6+1)),o&&(a.datum_type=Ni,a.grids=o),a.a=e,a.b=i,a.es=s,a.ep2=r,a}var yh={};function a_(n,t){var e=new DataView(t),i=h_(e),s=c_(e,i),r=u_(e,s,i),o={header:s,subgrids:r};return yh[n]=o,o}function o_(n){if(n===void 0)return null;var t=n.split(",");return t.map(l_)}function l_(n){if(n.length===0)return null;var t=n[0]==="@";return t&&(n=n.slice(1)),n==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:n,mandatory:!t,grid:yh[n]||null,isNull:!1}}function Ci(n){return n/3600*Math.PI/180}function h_(n){var t=n.getInt32(8,!1);return t===11?!1:(t=n.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function c_(n,t){return{nFields:n.getInt32(8,t),nSubgridFields:n.getInt32(24,t),nSubgrids:n.getInt32(40,t),shiftType:ya(n,56,56+8).trim(),fromSemiMajorAxis:n.getFloat64(120,t),fromSemiMinorAxis:n.getFloat64(136,t),toSemiMajorAxis:n.getFloat64(152,t),toSemiMinorAxis:n.getFloat64(168,t)}}function ya(n,t,e){return String.fromCharCode.apply(null,new Uint8Array(n.buffer.slice(t,e)))}function u_(n,t,e){for(var i=176,s=[],r=0;r<t.nSubgrids;r++){var o=d_(n,i,e),a=p_(n,i,o,e),l=Math.round(1+(o.upperLongitude-o.lowerLongitude)/o.longitudeInterval),h=Math.round(1+(o.upperLatitude-o.lowerLatitude)/o.latitudeInterval);s.push({ll:[Ci(o.lowerLongitude),Ci(o.lowerLatitude)],del:[Ci(o.longitudeInterval),Ci(o.latitudeInterval)],lim:[l,h],count:o.gridNodeCount,cvs:f_(a)}),i+=176+o.gridNodeCount*16}return s}function f_(n){return n.map(function(t){return[Ci(t.longitudeShift),Ci(t.latitudeShift)]})}function d_(n,t,e){return{name:ya(n,t+8,t+16).trim(),parent:ya(n,t+24,t+24+8).trim(),lowerLatitude:n.getFloat64(t+72,e),upperLatitude:n.getFloat64(t+88,e),lowerLongitude:n.getFloat64(t+104,e),upperLongitude:n.getFloat64(t+120,e),latitudeInterval:n.getFloat64(t+136,e),longitudeInterval:n.getFloat64(t+152,e),gridNodeCount:n.getInt32(t+168,e)}}function p_(n,t,e,i){for(var s=t+176,r=16,o=[],a=0;a<e.gridNodeCount;a++){var l={latitudeShift:n.getFloat32(s+a*r,i),longitudeShift:n.getFloat32(s+a*r+4,i),latitudeAccuracy:n.getFloat32(s+a*r+8,i),longitudeAccuracy:n.getFloat32(s+a*r+12,i)};o.push(l)}return o}function pn(n,t){if(!(this instanceof pn))return new pn(n);t=t||function(h){if(h)throw h};var e=V0(n);if(typeof e!="object"){t(n);return}var i=pn.projections.get(e.projName);if(!i){t(n);return}if(e.datumCode&&e.datumCode!=="none"){var s=Hn(ue,e.datumCode);s&&(e.datum_params=e.datum_params||(s.towgs84?s.towgs84.split(","):null),e.ellps=s.ellipse,e.datumName=s.datumName?s.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var r=s_(e.a,e.b,e.rf,e.ellps,e.sphere),o=i_(r.a,r.b,r.rf,e.R_A),a=o_(e.nadgrids),l=e.datum||r_(e.datumCode,e.datum_params,r.a,r.b,o.es,o.ep2,a);bl(this,e),bl(this,i),this.a=r.a,this.b=r.b,this.rf=r.rf,this.sphere=r.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=l,this.init(),t(null,this)}pn.projections=e_;pn.projections.start();function m_(n,t){return n.datum_type!==t.datum_type||n.a!==t.a||Math.abs(n.es-t.es)>5e-11?!1:n.datum_type===ii?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]:n.datum_type===si?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]&&n.datum_params[3]===t.datum_params[3]&&n.datum_params[4]===t.datum_params[4]&&n.datum_params[5]===t.datum_params[5]&&n.datum_params[6]===t.datum_params[6]:!0}function Sh(n,t,e){var i=n.x,s=n.y,r=n.z?n.z:0,o,a,l,h;if(s<-Q&&s>-1.001*Q)s=-Q;else if(s>Q&&s<1.001*Q)s=Q;else{if(s<-Q)return{x:-1/0,y:-1/0,z:n.z};if(s>Q)return{x:1/0,y:1/0,z:n.z}}return i>Math.PI&&(i-=2*Math.PI),a=Math.sin(s),h=Math.cos(s),l=a*a,o=e/Math.sqrt(1-t*l),{x:(o+r)*h*Math.cos(i),y:(o+r)*h*Math.sin(i),z:(o*(1-t)+r)*a}}function Eh(n,t,e,i){var s=1e-12,r=s*s,o=30,a,l,h,u,c,f,m,_,g,p,d,S,M,E=n.x,T=n.y,R=n.z?n.z:0,A,F,y;if(a=Math.sqrt(E*E+T*T),l=Math.sqrt(E*E+T*T+R*R),a/e<s){if(A=0,l/e<s)return F=Q,y=-i,{x:n.x,y:n.y,z:n.z}}else A=Math.atan2(T,E);h=R/l,u=a/l,c=1/Math.sqrt(1-t*(2-t)*u*u),_=u*(1-t)*c,g=h*c,M=0;do M++,m=e/Math.sqrt(1-t*g*g),y=a*_+R*g-m*(1-t*g*g),f=t*m/(m+y),c=1/Math.sqrt(1-f*(2-f)*u*u),p=u*(1-f)*c,d=h*c,S=d*_-p*g,_=p,g=d;while(S*S>r&&M<o);return F=Math.atan(d/Math.abs(p)),{x:A,y:F,z:y}}function __(n,t,e){if(t===ii)return{x:n.x+e[0],y:n.y+e[1],z:n.z+e[2]};if(t===si){var i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],h=e[6];return{x:h*(n.x-l*n.y+a*n.z)+i,y:h*(l*n.x+n.y-o*n.z)+s,z:h*(-a*n.x+o*n.y+n.z)+r}}}function g_(n,t,e){if(t===ii)return{x:n.x-e[0],y:n.y-e[1],z:n.z-e[2]};if(t===si){var i=e[0],s=e[1],r=e[2],o=e[3],a=e[4],l=e[5],h=e[6],u=(n.x-i)/h,c=(n.y-s)/h,f=(n.z-r)/h;return{x:u+l*c-a*f,y:-l*u+c+o*f,z:a*u-o*c+f}}}function js(n){return n===ii||n===si}function v_(n,t,e){if(m_(n,t)||n.datum_type===Ma||t.datum_type===Ma)return e;var i=n.a,s=n.es;if(n.datum_type===Ni){var r=wl(n,!1,e);if(r!==0)return;i=yl,s=Sl}var o=t.a,a=t.b,l=t.es;if(t.datum_type===Ni&&(o=yl,a=E0,l=Sl),s===l&&i===o&&!js(n.datum_type)&&!js(t.datum_type))return e;if(e=Sh(e,s,i),js(n.datum_type)&&(e=__(e,n.datum_type,n.datum_params)),js(t.datum_type)&&(e=g_(e,t.datum_type,t.datum_params)),e=Eh(e,l,o,a),t.datum_type===Ni){var h=wl(t,!0,e);if(h!==0)return}return e}function wl(n,t,e){if(n.grids===null||n.grids.length===0)return console.log("Grid shift grids not found"),-1;var i={x:-e.x,y:e.y},s={x:Number.NaN,y:Number.NaN},r=[];t:for(var o=0;o<n.grids.length;o++){var a=n.grids[o];if(r.push(a.name),a.isNull){s=i;break}if(a.mandatory,a.grid===null){if(a.mandatory)return console.log("Unable to find mandatory grid '"+a.name+"'"),-1;continue}for(var l=a.grid.subgrids,h=0,u=l.length;h<u;h++){var c=l[h],f=(Math.abs(c.del[1])+Math.abs(c.del[0]))/1e4,m=c.ll[0]-f,_=c.ll[1]-f,g=c.ll[0]+(c.lim[0]-1)*c.del[0]+f,p=c.ll[1]+(c.lim[1]-1)*c.del[1]+f;if(!(_>i.y||m>i.x||p<i.y||g<i.x)&&(s=M_(i,t,c),!isNaN(s.x)))break t}}return isNaN(s.x)?(console.log("Failed to find a grid shift table for location '"+-i.x*fn+" "+i.y*fn+" tried: '"+r+"'"),-1):(e.x=-s.x,e.y=s.y,0)}function M_(n,t,e){var i={x:Number.NaN,y:Number.NaN};if(isNaN(n.x))return i;var s={x:n.x,y:n.y};s.x-=e.ll[0],s.y-=e.ll[1],s.x=pt(s.x-Math.PI)+Math.PI;var r=Rl(s,e);if(t){if(isNaN(r.x))return i;r.x=s.x-r.x,r.y=s.y-r.y;var o=9,a=1e-12,l,h;do{if(h=Rl(r,e),isNaN(h.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}l={x:s.x-(h.x+r.x),y:s.y-(h.y+r.y)},r.x+=l.x,r.y+=l.y}while(o--&&Math.abs(l.x)>a&&Math.abs(l.y)>a);if(o<0)return console.log("Inverse grid shift iterator failed to converge."),i;i.x=pt(r.x+e.ll[0]),i.y=r.y+e.ll[1]}else isNaN(r.x)||(i.x=n.x+r.x,i.y=n.y+r.y);return i}function Rl(n,t){var e={x:n.x/t.del[0],y:n.y/t.del[1]},i={x:Math.floor(e.x),y:Math.floor(e.y)},s={x:e.x-1*i.x,y:e.y-1*i.y},r={x:Number.NaN,y:Number.NaN},o;if(i.x<0||i.x>=t.lim[0]||i.y<0||i.y>=t.lim[1])return r;o=i.y*t.lim[0]+i.x;var a={x:t.cvs[o][0],y:t.cvs[o][1]};o++;var l={x:t.cvs[o][0],y:t.cvs[o][1]};o+=t.lim[0];var h={x:t.cvs[o][0],y:t.cvs[o][1]};o--;var u={x:t.cvs[o][0],y:t.cvs[o][1]},c=s.x*s.y,f=s.x*(1-s.y),m=(1-s.x)*(1-s.y),_=(1-s.x)*s.y;return r.x=m*a.x+f*l.x+_*u.x+c*h.x,r.y=m*a.y+f*l.y+_*u.y+c*h.y,r}function Cl(n,t,e){var i=e.x,s=e.y,r=e.z||0,o,a,l,h={};for(l=0;l<3;l++)if(!(t&&l===2&&e.z===void 0))switch(l===0?(o=i,"ew".indexOf(n.axis[l])!==-1?a="x":a="y"):l===1?(o=s,"ns".indexOf(n.axis[l])!==-1?a="y":a="x"):(o=r,a="z"),n.axis[l]){case"e":h[a]=o;break;case"w":h[a]=-o;break;case"n":h[a]=o;break;case"s":h[a]=-o;break;case"u":e[a]!==void 0&&(h.z=o);break;case"d":e[a]!==void 0&&(h.z=-o);break;default:return null}return h}function Th(n){var t={x:n[0],y:n[1]};return n.length>2&&(t.z=n[2]),n.length>3&&(t.m=n[3]),t}function x_(n){Pl(n.x),Pl(n.y)}function Pl(n){if(typeof Number.isFinite=="function"){if(Number.isFinite(n))return;throw new TypeError("coordinates must be finite numbers")}if(typeof n!="number"||n!==n||!isFinite(n))throw new TypeError("coordinates must be finite numbers")}function y_(n,t){return(n.datum.datum_type===ii||n.datum.datum_type===si||n.datum.datum_type===Ni)&&t.datumCode!=="WGS84"||(t.datum.datum_type===ii||t.datum.datum_type===si||t.datum.datum_type===Ni)&&n.datumCode!=="WGS84"}function cr(n,t,e,i){var s;Array.isArray(e)?e=Th(e):e={x:e.x,y:e.y,z:e.z,m:e.m};var r=e.z!==void 0;if(x_(e),n.datum&&t.datum&&y_(n,t)&&(s=new pn("WGS84"),e=cr(n,s,e,i),n=s),i&&n.axis!=="enu"&&(e=Cl(n,!1,e)),n.projName==="longlat")e={x:e.x*ve,y:e.y*ve,z:e.z||0};else if(n.to_meter&&(e={x:e.x*n.to_meter,y:e.y*n.to_meter,z:e.z||0}),e=n.inverse(e),!e)return;if(n.from_greenwich&&(e.x+=n.from_greenwich),e=v_(n.datum,t.datum,e),!!e)return t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*fn,y:e.y*fn,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),i&&t.axis!=="enu"?Cl(t,!0,e):(e&&!r&&delete e.z,e)}var Ll=pn("WGS84");function ra(n,t,e,i){var s,r,o;return Array.isArray(e)?(s=cr(n,t,e,i)||{x:NaN,y:NaN},e.length>2?typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof s.z=="number"?[s.x,s.y,s.z].concat(e.splice(3)):[s.x,s.y,e[2]].concat(e.splice(3)):[s.x,s.y].concat(e.splice(2)):[s.x,s.y]):(r=cr(n,t,e,i),o=Object.keys(e),o.length===2||o.forEach(function(a){if(typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(a==="x"||a==="y"||a==="z")return}else if(a==="x"||a==="y")return;r[a]=e[a]}),r)}function Dl(n){return n instanceof pn?n:n.oProj?n.oProj:pn(n)}function Oe(n,t,e){n=Dl(n);var i=!1,s;return typeof t>"u"?(t=n,n=Ll,i=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,t=n,n=Ll,i=!0),t=Dl(t),e?ra(n,t,e):(s={forward:function(r,o){return ra(n,t,r,o)},inverse:function(r,o){return ra(t,n,r,o)}},i&&(s.oProj=t),s)}var Il=6,bh="AJSAJS",Ah="AFAFAF",Pi=65,Ne=73,qe=79,Ji=86,Qi=90;const S_={forward:wh,inverse:E_,toPoint:Rh};function wh(n,t){return t=t||5,A_(T_({lat:n[1],lon:n[0]}),t)}function E_(n){var t=Na(Ph(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function Rh(n){var t=Na(Ph(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function aa(n){return n*(Math.PI/180)}function Nl(n){return 180*(n/Math.PI)}function T_(n){var t=n.lat,e=n.lon,i=6378137,s=.00669438,r=.9996,o,a,l,h,u,c,f,m=aa(t),_=aa(e),g,p;p=Math.floor((e+180)/6)+1,e===180&&(p=60),t>=56&&t<64&&e>=3&&e<12&&(p=32),t>=72&&t<84&&(e>=0&&e<9?p=31:e>=9&&e<21?p=33:e>=21&&e<33?p=35:e>=33&&e<42&&(p=37)),o=(p-1)*6-180+3,g=aa(o),a=s/(1-s),l=i/Math.sqrt(1-s*Math.sin(m)*Math.sin(m)),h=Math.tan(m)*Math.tan(m),u=a*Math.cos(m)*Math.cos(m),c=Math.cos(m)*(_-g),f=i*((1-s/4-3*s*s/64-5*s*s*s/256)*m-(3*s/8+3*s*s/32+45*s*s*s/1024)*Math.sin(2*m)+(15*s*s/256+45*s*s*s/1024)*Math.sin(4*m)-35*s*s*s/3072*Math.sin(6*m));var d=r*l*(c+(1-h+u)*c*c*c/6+(5-18*h+h*h+72*u-58*a)*c*c*c*c*c/120)+5e5,S=r*(f+l*Math.tan(m)*(c*c/2+(5-h+9*u+4*u*u)*c*c*c*c/24+(61-58*h+h*h+600*u-330*a)*c*c*c*c*c*c/720));return t<0&&(S+=1e7),{northing:Math.round(S),easting:Math.round(d),zoneNumber:p,zoneLetter:b_(t)}}function Na(n){var t=n.northing,e=n.easting,i=n.zoneLetter,s=n.zoneNumber;if(s<0||s>60)return null;var r=.9996,o=6378137,a=.00669438,l,h=(1-Math.sqrt(1-a))/(1+Math.sqrt(1-a)),u,c,f,m,_,g,p,d,S,M=e-5e5,E=t;i<"N"&&(E-=1e7),p=(s-1)*6-180+3,l=a/(1-a),g=E/r,d=g/(o*(1-a/4-3*a*a/64-5*a*a*a/256)),S=d+(3*h/2-27*h*h*h/32)*Math.sin(2*d)+(21*h*h/16-55*h*h*h*h/32)*Math.sin(4*d)+151*h*h*h/96*Math.sin(6*d),u=o/Math.sqrt(1-a*Math.sin(S)*Math.sin(S)),c=Math.tan(S)*Math.tan(S),f=l*Math.cos(S)*Math.cos(S),m=o*(1-a)/Math.pow(1-a*Math.sin(S)*Math.sin(S),1.5),_=M/(u*r);var T=S-u*Math.tan(S)/m*(_*_/2-(5+3*c+10*f-4*f*f-9*l)*_*_*_*_/24+(61+90*c+298*f+45*c*c-252*l-3*f*f)*_*_*_*_*_*_/720);T=Nl(T);var R=(_-(1+2*c+f)*_*_*_/6+(5-2*f+28*c-3*f*f+8*l+24*c*c)*_*_*_*_*_/120)/Math.cos(S);R=p+Nl(R);var A;if(n.accuracy){var F=Na({northing:n.northing+n.accuracy,easting:n.easting+n.accuracy,zoneLetter:n.zoneLetter,zoneNumber:n.zoneNumber});A={top:F.lat,right:F.lon,bottom:T,left:R}}else A={lat:T,lon:R};return A}function b_(n){var t="Z";return 84>=n&&n>=72?t="X":72>n&&n>=64?t="W":64>n&&n>=56?t="V":56>n&&n>=48?t="U":48>n&&n>=40?t="T":40>n&&n>=32?t="S":32>n&&n>=24?t="R":24>n&&n>=16?t="Q":16>n&&n>=8?t="P":8>n&&n>=0?t="N":0>n&&n>=-8?t="M":-8>n&&n>=-16?t="L":-16>n&&n>=-24?t="K":-24>n&&n>=-32?t="J":-32>n&&n>=-40?t="H":-40>n&&n>=-48?t="G":-48>n&&n>=-56?t="F":-56>n&&n>=-64?t="E":-64>n&&n>=-72?t="D":-72>n&&n>=-80&&(t="C"),t}function A_(n,t){var e="00000"+n.easting,i="00000"+n.northing;return n.zoneNumber+n.zoneLetter+w_(n.easting,n.northing,n.zoneNumber)+e.substr(e.length-5,t)+i.substr(i.length-5,t)}function w_(n,t,e){var i=Ch(e),s=Math.floor(n/1e5),r=Math.floor(t/1e5)%20;return R_(s,r,i)}function Ch(n){var t=n%Il;return t===0&&(t=Il),t}function R_(n,t,e){var i=e-1,s=bh.charCodeAt(i),r=Ah.charCodeAt(i),o=s+n-1,a=r+t,l=!1;o>Qi&&(o=o-Qi+Pi-1,l=!0),(o===Ne||s<Ne&&o>Ne||(o>Ne||s<Ne)&&l)&&o++,(o===qe||s<qe&&o>qe||(o>qe||s<qe)&&l)&&(o++,o===Ne&&o++),o>Qi&&(o=o-Qi+Pi-1),a>Ji?(a=a-Ji+Pi-1,l=!0):l=!1,(a===Ne||r<Ne&&a>Ne||(a>Ne||r<Ne)&&l)&&a++,(a===qe||r<qe&&a>qe||(a>qe||r<qe)&&l)&&(a++,a===Ne&&a++),a>Ji&&(a=a-Ji+Pi-1);var h=String.fromCharCode(o)+String.fromCharCode(a);return h}function Ph(n){if(n&&n.length===0)throw"MGRSPoint coverting from nothing";for(var t=n.length,e=null,i="",s,r=0;!/[A-Z]/.test(s=n.charAt(r));){if(r>=2)throw"MGRSPoint bad conversion from: "+n;i+=s,r++}var o=parseInt(i,10);if(r===0||r+3>t)throw"MGRSPoint bad conversion from: "+n;var a=n.charAt(r++);if(a<="A"||a==="B"||a==="Y"||a>="Z"||a==="I"||a==="O")throw"MGRSPoint zone letter "+a+" not handled: "+n;e=n.substring(r,r+=2);for(var l=Ch(o),h=C_(e.charAt(0),l),u=P_(e.charAt(1),l);u<L_(a);)u+=2e6;var c=t-r;if(c%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+n;var f=c/2,m=0,_=0,g,p,d,S,M;return f>0&&(g=1e5/Math.pow(10,f),p=n.substring(r,r+f),m=parseFloat(p)*g,d=n.substring(r+f),_=parseFloat(d)*g),S=m+h,M=_+u,{easting:S,northing:M,zoneLetter:a,zoneNumber:o,accuracy:g}}function C_(n,t){for(var e=bh.charCodeAt(t-1),i=1e5,s=!1;e!==n.charCodeAt(0);){if(e++,e===Ne&&e++,e===qe&&e++,e>Qi){if(s)throw"Bad character: "+n;e=Pi,s=!0}i+=1e5}return i}function P_(n,t){if(n>"V")throw"MGRSPoint given invalid Northing "+n;for(var e=Ah.charCodeAt(t-1),i=0,s=!1;e!==n.charCodeAt(0);){if(e++,e===Ne&&e++,e===qe&&e++,e>Ji){if(s)throw"Bad character: "+n;e=Pi,s=!0}i+=1e5}return i}function L_(n){var t;switch(n){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+n}function Gi(n,t,e){if(!(this instanceof Gi))return new Gi(n,t,e);if(Array.isArray(n))this.x=n[0],this.y=n[1],this.z=n[2]||0;else if(typeof n=="object")this.x=n.x,this.y=n.y,this.z=n.z||0;else if(typeof n=="string"&&typeof t>"u"){var i=n.split(",");this.x=parseFloat(i[0],10),this.y=parseFloat(i[1],10),this.z=parseFloat(i[2],10)||0}else this.x=n,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}Gi.fromMGRS=function(n){return new Gi(Rh(n))};Gi.prototype.toMGRS=function(n){return wh([this.x,this.y],n)};var D_=1,I_=.25,Ul=.046875,Ol=.01953125,Fl=.01068115234375,N_=.75,U_=.46875,O_=.013020833333333334,F_=.007120768229166667,B_=.3645833333333333,z_=.005696614583333333,G_=.3076171875;function Lh(n){var t=[];t[0]=D_-n*(I_+n*(Ul+n*(Ol+n*Fl))),t[1]=n*(N_-n*(Ul+n*(Ol+n*Fl)));var e=n*n;return t[2]=e*(U_-n*(O_+n*F_)),e*=n,t[3]=e*(B_-n*z_),t[4]=e*n*G_,t}function xr(n,t,e,i){return e*=t,t*=t,i[0]*n-e*(i[1]+t*(i[2]+t*(i[3]+t*i[4])))}var H_=20;function Dh(n,t,e){for(var i=1/(1-t),s=n,r=H_;r;--r){var o=Math.sin(s),a=1-t*o*o;if(a=(xr(s,o,Math.cos(s),e)-n)*(a*Math.sqrt(a))*i,s-=a,Math.abs(a)<ht)return s}return s}function k_(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=Lh(this.es),this.ml0=xr(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function V_(n){var t=n.x,e=n.y,i=pt(t-this.long0),s,r,o,a=Math.sin(e),l=Math.cos(e);if(this.es){var u=l*i,c=Math.pow(u,2),f=this.ep2*Math.pow(l,2),m=Math.pow(f,2),_=Math.abs(l)>ht?Math.tan(e):0,g=Math.pow(_,2),p=Math.pow(g,2);s=1-this.es*Math.pow(a,2),u=u/Math.sqrt(s);var d=xr(e,a,l,this.en);r=this.a*(this.k0*u*(1+c/6*(1-g+f+c/20*(5-18*g+p+14*f-58*g*f+c/42*(61+179*p-p*g-479*g)))))+this.x0,o=this.a*(this.k0*(d-this.ml0+a*i*u/2*(1+c/12*(5-g+9*f+4*m+c/30*(61+p-58*g+270*f-330*g*f+c/56*(1385+543*p-p*g-3111*g))))))+this.y0}else{var h=l*Math.sin(i);if(Math.abs(Math.abs(h)-1)<ht)return 93;if(r=.5*this.a*this.k0*Math.log((1+h)/(1-h))+this.x0,o=l*Math.cos(i)/Math.sqrt(1-Math.pow(h,2)),h=Math.abs(o),h>=1){if(h-1>ht)return 93;o=0}else o=Math.acos(o);e<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return n.x=r,n.y=o,n}function W_(n){var t,e,i,s,r=(n.x-this.x0)*(1/this.a),o=(n.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+o/this.k0,e=Dh(t,this.es,this.en),Math.abs(e)<Q){var c=Math.sin(e),f=Math.cos(e),m=Math.abs(f)>ht?Math.tan(e):0,_=this.ep2*Math.pow(f,2),g=Math.pow(_,2),p=Math.pow(m,2),d=Math.pow(p,2);t=1-this.es*Math.pow(c,2);var S=r*Math.sqrt(t)/this.k0,M=Math.pow(S,2);t=t*m,i=e-t*M/(1-this.es)*.5*(1-M/12*(5+3*p-9*_*p+_-4*g-M/30*(61+90*p-252*_*p+45*d+46*_-M/56*(1385+3633*p+4095*d+1574*d*p)))),s=pt(this.long0+S*(1-M/6*(1+2*p+_-M/20*(5+28*p+24*d+8*_*p+6*_-M/42*(61+662*p+1320*d+720*d*p))))/f)}else i=Q*ms(o),s=0;else{var a=Math.exp(r/this.k0),l=.5*(a-1/a),h=this.lat0+o/this.k0,u=Math.cos(h);t=Math.sqrt((1-Math.pow(u,2))/(1+Math.pow(l,2))),i=Math.asin(t),o<0&&(i=-i),l===0&&u===0?s=0:s=pt(Math.atan2(l,u)+this.long0)}return n.x=s,n.y=i,n}var X_=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const Qs={init:k_,forward:V_,inverse:W_,names:X_};function Ih(n){var t=Math.exp(n);return t=(t-1/t)/2,t}function sn(n,t){n=Math.abs(n),t=Math.abs(t);var e=Math.max(n,t),i=Math.min(n,t)/(e||1);return e*Math.sqrt(1+Math.pow(i,2))}function q_(n){var t=1+n,e=t-1;return e===0?n:n*Math.log(t)/e}function Y_(n){var t=Math.abs(n);return t=q_(t*(1+t/(sn(1,t)+1))),n<0?-t:t}function Ua(n,t){for(var e=2*Math.cos(2*t),i=n.length-1,s=n[i],r=0,o;--i>=0;)o=-r+e*s+n[i],r=s,s=o;return t+o*Math.sin(2*t)}function j_(n,t){for(var e=2*Math.cos(t),i=n.length-1,s=n[i],r=0,o;--i>=0;)o=-r+e*s+n[i],r=s,s=o;return Math.sin(t)*o}function $_(n){var t=Math.exp(n);return t=(t+1/t)/2,t}function Nh(n,t,e){for(var i=Math.sin(t),s=Math.cos(t),r=Ih(e),o=$_(e),a=2*s*o,l=-2*i*r,h=n.length-1,u=n[h],c=0,f=0,m=0,_,g;--h>=0;)_=f,g=c,f=u,c=m,u=-_+a*f-l*c+n[h],m=-g+l*f+a*c;return a=i*o,l=s*r,[a*u-l*m,a*m+l*u]}function K_(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(Qs.init.apply(this),this.forward=Qs.forward,this.inverse=Qs.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var n=this.es/(1+Math.sqrt(1-this.es)),t=n/(2-n),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var i=Ua(this.cbg,this.lat0);this.Zb=-this.Qn*(i+j_(this.gtu,2*i))}function Z_(n){var t=pt(n.x-this.long0),e=n.y;e=Ua(this.cbg,e);var i=Math.sin(e),s=Math.cos(e),r=Math.sin(t),o=Math.cos(t);e=Math.atan2(i,o*s),t=Math.atan2(r*s,sn(i,s*o)),t=Y_(Math.tan(t));var a=Nh(this.gtu,2*e,2*t);e=e+a[0],t=t+a[1];var l,h;return Math.abs(t)<=2.623395162778?(l=this.a*(this.Qn*t)+this.x0,h=this.a*(this.Qn*e+this.Zb)+this.y0):(l=1/0,h=1/0),n.x=l,n.y=h,n}function J_(n){var t=(n.x-this.x0)*(1/this.a),e=(n.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var i,s;if(Math.abs(t)<=2.623395162778){var r=Nh(this.utg,2*e,2*t);e=e+r[0],t=t+r[1],t=Math.atan(Ih(t));var o=Math.sin(e),a=Math.cos(e),l=Math.sin(t),h=Math.cos(t);e=Math.atan2(o*h,sn(l,h*a)),t=Math.atan2(l,h*a),i=pt(t+this.long0),s=Ua(this.cgb,e)}else i=1/0,s=1/0;return n.x=i,n.y=s,n}var Q_=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","tmerc"];const tr={init:K_,forward:Z_,inverse:J_,names:Q_};function tg(n,t){if(n===void 0){if(n=Math.floor((pt(t)+Math.PI)*30/Math.PI)+1,n<0)return 0;if(n>60)return 60}return n}var eg="etmerc";function ng(){var n=tg(this.zone,this.long0);if(n===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(n)-183)*ve,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,tr.init.apply(this),this.forward=tr.forward,this.inverse=tr.inverse}var ig=["Universal Transverse Mercator System","utm"];const sg={init:ng,names:ig,dependsOn:eg};function Oa(n,t){return Math.pow((1-n)/(1+n),t)}var rg=20;function ag(){var n=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*n*n),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(n/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+jt)/(Math.pow(Math.tan(.5*this.lat0+jt),this.C)*Oa(this.e*n,this.ratexp))}function og(n){var t=n.x,e=n.y;return n.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+jt),this.C)*Oa(this.e*Math.sin(e),this.ratexp))-Q,n.x=this.C*t,n}function lg(n){for(var t=1e-14,e=n.x/this.C,i=n.y,s=Math.pow(Math.tan(.5*i+jt)/this.K,1/this.C),r=rg;r>0&&(i=2*Math.atan(s*Oa(this.e*Math.sin(n.y),-.5*this.e))-Q,!(Math.abs(i-n.y)<t));--r)n.y=i;return r?(n.x=e,n.y=i,n):null}var hg=["gauss"];const Fa={init:ag,forward:og,inverse:lg,names:hg};function cg(){Fa.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function ug(n){var t,e,i,s;return n.x=pt(n.x-this.long0),Fa.forward.apply(this,[n]),t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),s=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*i),n.x=s*e*Math.sin(n.x),n.y=s*(this.cosc0*t-this.sinc0*e*i),n.x=this.a*n.x+this.x0,n.y=this.a*n.y+this.y0,n}function fg(n){var t,e,i,s,r;if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,r=Math.sqrt(n.x*n.x+n.y*n.y)){var o=2*Math.atan2(r,this.R2);t=Math.sin(o),e=Math.cos(o),s=Math.asin(e*this.sinc0+n.y*t*this.cosc0/r),i=Math.atan2(n.x*t,r*this.cosc0*e-n.y*this.sinc0*t)}else s=this.phic0,i=0;return n.x=i,n.y=s,Fa.inverse.apply(this,[n]),n.x=pt(n.x+this.long0),n}var dg=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const pg={init:cg,forward:ug,inverse:fg,names:dg};function mg(n,t,e){return t*=e,Math.tan(.5*(Q+n))*Math.pow((1-t)/(1+t),.5*e)}function _g(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ht&&(this.k0=.5*(1+ms(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=ht&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ht&&Math.abs(Math.cos(this.lat_ts))>ht&&(this.k0=.5*this.cons*mn(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/an(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=mn(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-Q,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function gg(n){var t=n.x,e=n.y,i=Math.sin(e),s=Math.cos(e),r,o,a,l,h,u,c=pt(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=ht&&Math.abs(e+this.lat0)<=ht?(n.x=NaN,n.y=NaN,n):this.sphere?(r=2*this.k0/(1+this.sinlat0*i+this.coslat0*s*Math.cos(c)),n.x=this.a*r*s*Math.sin(c)+this.x0,n.y=this.a*r*(this.coslat0*i-this.sinlat0*s*Math.cos(c))+this.y0,n):(o=2*Math.atan(this.ssfn_(e,i,this.e))-Q,l=Math.cos(o),a=Math.sin(o),Math.abs(this.coslat0)<=ht?(h=an(this.e,e*this.con,this.con*i),u=2*this.a*this.k0*h/this.cons,n.x=this.x0+u*Math.sin(t-this.long0),n.y=this.y0-this.con*u*Math.cos(t-this.long0),n):(Math.abs(this.sinlat0)<ht?(r=2*this.a*this.k0/(1+l*Math.cos(c)),n.y=r*a):(r=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*a+this.cosX0*l*Math.cos(c))),n.y=r*(this.cosX0*a-this.sinX0*l*Math.cos(c))+this.y0),n.x=r*l*Math.sin(c)+this.x0,n))}function vg(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,s,r,o=Math.sqrt(n.x*n.x+n.y*n.y);if(this.sphere){var a=2*Math.atan(o/(2*this.a*this.k0));return t=this.long0,e=this.lat0,o<=ht?(n.x=t,n.y=e,n):(e=Math.asin(Math.cos(a)*this.sinlat0+n.y*Math.sin(a)*this.coslat0/o),Math.abs(this.coslat0)<ht?this.lat0>0?t=pt(this.long0+Math.atan2(n.x,-1*n.y)):t=pt(this.long0+Math.atan2(n.x,n.y)):t=pt(this.long0+Math.atan2(n.x*Math.sin(a),o*this.coslat0*Math.cos(a)-n.y*this.sinlat0*Math.sin(a))),n.x=t,n.y=e,n)}else if(Math.abs(this.coslat0)<=ht){if(o<=ht)return e=this.lat0,t=this.long0,n.x=t,n.y=e,n;n.x*=this.con,n.y*=this.con,i=o*this.cons/(2*this.a*this.k0),e=this.con*cs(this.e,i),t=this.con*pt(this.con*this.long0+Math.atan2(n.x,-1*n.y))}else s=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,o<=ht?r=this.X0:(r=Math.asin(Math.cos(s)*this.sinX0+n.y*Math.sin(s)*this.cosX0/o),t=pt(this.long0+Math.atan2(n.x*Math.sin(s),o*this.cosX0*Math.cos(s)-n.y*this.sinX0*Math.sin(s)))),e=-1*cs(this.e,Math.tan(.5*(Q+r)));return n.x=t,n.y=e,n}var Mg=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)","Polar_Stereographic"];const xg={init:_g,forward:gg,inverse:vg,names:Mg,ssfn_:mg};function yg(){var n=this.lat0;this.lambda0=this.long0;var t=Math.sin(n),e=this.a,i=this.rf,s=1/i,r=2*s-Math.pow(s,2),o=this.e=Math.sqrt(r);this.R=this.k0*e*Math.sqrt(1-r)/(1-r*Math.pow(t,2)),this.alpha=Math.sqrt(1+r/(1-r)*Math.pow(Math.cos(n),4)),this.b0=Math.asin(t/this.alpha);var a=Math.log(Math.tan(Math.PI/4+this.b0/2)),l=Math.log(Math.tan(Math.PI/4+n/2)),h=Math.log((1+o*t)/(1-o*t));this.K=a-this.alpha*l+this.alpha*o/2*h}function Sg(n){var t=Math.log(Math.tan(Math.PI/4-n.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(n.y))/(1-this.e*Math.sin(n.y))),i=-this.alpha*(t+e)+this.K,s=2*(Math.atan(Math.exp(i))-Math.PI/4),r=this.alpha*(n.x-this.lambda0),o=Math.atan(Math.sin(r)/(Math.sin(this.b0)*Math.tan(s)+Math.cos(this.b0)*Math.cos(r))),a=Math.asin(Math.cos(this.b0)*Math.sin(s)-Math.sin(this.b0)*Math.cos(s)*Math.cos(r));return n.y=this.R/2*Math.log((1+Math.sin(a))/(1-Math.sin(a)))+this.y0,n.x=this.R*o+this.x0,n}function Eg(n){for(var t=n.x-this.x0,e=n.y-this.y0,i=t/this.R,s=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),r=Math.asin(Math.cos(this.b0)*Math.sin(s)+Math.sin(this.b0)*Math.cos(s)*Math.cos(i)),o=Math.atan(Math.sin(i)/(Math.cos(this.b0)*Math.cos(i)-Math.sin(this.b0)*Math.tan(s))),a=this.lambda0+o/this.alpha,l=0,h=r,u=-1e3,c=0;Math.abs(h-u)>1e-7;){if(++c>20)return;l=1/this.alpha*(Math.log(Math.tan(Math.PI/4+r/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(h))/2)),u=h,h=2*Math.atan(Math.exp(l))-Math.PI/2}return n.x=a,n.y=h,n}var Tg=["somerc"];const bg={init:yg,forward:Sg,inverse:Eg,names:Tg};var bi=1e-7;function Ag(n){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof n.PROJECTION=="object"?Object.keys(n.PROJECTION)[0]:n.PROJECTION;return"no_uoff"in n||"no_off"in n||t.indexOf(e)!==-1}function wg(){var n,t,e,i,s,r,o,a,l,h,u=0,c,f=0,m=0,_=0,g=0,p=0,d=0;this.no_off=Ag(this),this.no_rot="no_rot"in this;var S=!1;"alpha"in this&&(S=!0);var M=!1;if("rectified_grid_angle"in this&&(M=!0),S&&(d=this.alpha),M&&(u=this.rectified_grid_angle*ve),S||M)f=this.longc;else if(m=this.long1,g=this.lat1,_=this.long2,p=this.lat2,Math.abs(g-p)<=bi||(n=Math.abs(g))<=bi||Math.abs(n-Q)<=bi||Math.abs(Math.abs(this.lat0)-Q)<=bi||Math.abs(Math.abs(p)-Q)<=bi)throw new Error;var E=1-this.es;t=Math.sqrt(E),Math.abs(this.lat0)>ht?(a=Math.sin(this.lat0),e=Math.cos(this.lat0),n=1-this.es*a*a,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/E),this.A=this.B*this.k0*t/n,i=this.B*t/(e*Math.sqrt(n)),s=i*i-1,s<=0?s=0:(s=Math.sqrt(s),this.lat0<0&&(s=-s)),this.E=s+=i,this.E*=Math.pow(an(this.e,this.lat0,a),this.B)):(this.B=1/t,this.A=this.k0,this.E=i=s=1),S||M?(S?(c=Math.asin(Math.sin(d)/i),M||(u=d)):(c=u,d=Math.asin(i*Math.sin(c))),this.lam0=f-Math.asin(.5*(s-1/s)*Math.tan(c))/this.B):(r=Math.pow(an(this.e,g,Math.sin(g)),this.B),o=Math.pow(an(this.e,p,Math.sin(p)),this.B),s=this.E/r,l=(o-r)/(o+r),h=this.E*this.E,h=(h-o*r)/(h+o*r),n=m-_,n<-Math.pi?_-=ls:n>Math.pi&&(_+=ls),this.lam0=pt(.5*(m+_)-Math.atan(h*Math.tan(.5*this.B*(m-_))/l)/this.B),c=Math.atan(2*Math.sin(this.B*pt(m-this.lam0))/(s-1/s)),u=d=Math.asin(i*Math.sin(c))),this.singam=Math.sin(c),this.cosgam=Math.cos(c),this.sinrot=Math.sin(u),this.cosrot=Math.cos(u),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(i*i-1)/Math.cos(d))),this.lat0<0&&(this.u_0=-this.u_0)),s=.5*c,this.v_pole_n=this.ArB*Math.log(Math.tan(jt-s)),this.v_pole_s=this.ArB*Math.log(Math.tan(jt+s))}function Rg(n){var t={},e,i,s,r,o,a,l,h;if(n.x=n.x-this.lam0,Math.abs(Math.abs(n.y)-Q)>ht){if(o=this.E/Math.pow(an(this.e,n.y,Math.sin(n.y)),this.B),a=1/o,e=.5*(o-a),i=.5*(o+a),r=Math.sin(this.B*n.x),s=(e*this.singam-r*this.cosgam)/i,Math.abs(Math.abs(s)-1)<ht)throw new Error;h=.5*this.ArB*Math.log((1-s)/(1+s)),a=Math.cos(this.B*n.x),Math.abs(a)<bi?l=this.A*n.x:l=this.ArB*Math.atan2(e*this.cosgam+r*this.singam,a)}else h=n.y>0?this.v_pole_n:this.v_pole_s,l=this.ArB*n.y;return this.no_rot?(t.x=l,t.y=h):(l-=this.u_0,t.x=h*this.cosrot+l*this.sinrot,t.y=l*this.cosrot-h*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function Cg(n){var t,e,i,s,r,o,a,l={};if(n.x=(n.x-this.x0)*(1/this.a),n.y=(n.y-this.y0)*(1/this.a),this.no_rot?(e=n.y,t=n.x):(e=n.x*this.cosrot-n.y*this.sinrot,t=n.y*this.cosrot+n.x*this.sinrot+this.u_0),i=Math.exp(-this.BrA*e),s=.5*(i-1/i),r=.5*(i+1/i),o=Math.sin(this.BrA*t),a=(o*this.cosgam+s*this.singam)/r,Math.abs(Math.abs(a)-1)<ht)l.x=0,l.y=a<0?-Q:Q;else{if(l.y=this.E/Math.sqrt((1+a)/(1-a)),l.y=cs(this.e,Math.pow(l.y,1/this.B)),l.y===1/0)throw new Error;l.x=-this.rB*Math.atan2(s*this.cosgam-o*this.singam,Math.cos(this.BrA*t))}return l.x+=this.lam0,l}var Pg=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const Lg={init:wg,forward:Rg,inverse:Cg,names:Pg};function Dg(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<ht)){var n=this.b/this.a;this.e=Math.sqrt(1-n*n);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),i=mn(this.e,t,e),s=an(this.e,this.lat1,t),r=Math.sin(this.lat2),o=Math.cos(this.lat2),a=mn(this.e,r,o),l=an(this.e,this.lat2,r),h=an(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>ht?this.ns=Math.log(i/a)/Math.log(s/l):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=i/(this.ns*Math.pow(s,this.ns)),this.rh=this.a*this.f0*Math.pow(h,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function Ig(n){var t=n.x,e=n.y;Math.abs(2*Math.abs(e)-Math.PI)<=ht&&(e=ms(e)*(Q-2*ht));var i=Math.abs(Math.abs(e)-Q),s,r;if(i>ht)s=an(this.e,e,Math.sin(e)),r=this.a*this.f0*Math.pow(s,this.ns);else{if(i=e*this.ns,i<=0)return null;r=0}var o=this.ns*pt(t-this.long0);return n.x=this.k0*(r*Math.sin(o))+this.x0,n.y=this.k0*(this.rh-r*Math.cos(o))+this.y0,n}function Ng(n){var t,e,i,s,r,o=(n.x-this.x0)/this.k0,a=this.rh-(n.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(o*o+a*a),e=1):(t=-Math.sqrt(o*o+a*a),e=-1);var l=0;if(t!==0&&(l=Math.atan2(e*o,e*a)),t!==0||this.ns>0){if(e=1/this.ns,i=Math.pow(t/(this.a*this.f0),e),s=cs(this.e,i),s===-9999)return null}else s=-Q;return r=pt(l/this.ns+this.long0),n.x=r,n.y=s,n}var Ug=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const Og={init:Dg,forward:Ig,inverse:Ng,names:Ug};function Fg(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function Bg(n){var t,e,i,s,r,o,a,l=n.x,h=n.y,u=pt(l-this.long0);return t=Math.pow((1+this.e*Math.sin(h))/(1-this.e*Math.sin(h)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(h/2+this.s45),this.alfa)/t)-this.s45),i=-u*this.alfa,s=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(i)),r=Math.asin(Math.cos(e)*Math.sin(i)/Math.cos(s)),o=this.n*r,a=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(s/2+this.s45),this.n),n.y=a*Math.cos(o)/1,n.x=a*Math.sin(o)/1,this.czech||(n.y*=-1,n.x*=-1),n}function zg(n){var t,e,i,s,r,o,a,l,h=n.x;n.x=n.y,n.y=h,this.czech||(n.y*=-1,n.x*=-1),o=Math.sqrt(n.x*n.x+n.y*n.y),r=Math.atan2(n.y,n.x),s=r/Math.sin(this.s0),i=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(i)-Math.sin(this.ad)*Math.cos(i)*Math.cos(s)),e=Math.asin(Math.cos(i)*Math.sin(s)/Math.cos(t)),n.x=this.long0-e/this.alfa,a=t,l=0;var u=0;do n.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(a))/(1-this.e*Math.sin(a)),this.e/2))-this.s45),Math.abs(a-n.y)<1e-10&&(l=1),a=n.y,u+=1;while(l===0&&u<15);return u>=15?null:n}var Gg=["Krovak","krovak"];const Hg={init:Fg,forward:Bg,inverse:zg,names:Gg};function Ie(n,t,e,i,s){return n*s-t*Math.sin(2*s)+e*Math.sin(4*s)-i*Math.sin(6*s)}function _s(n){return 1-.25*n*(1+n/16*(3+1.25*n))}function gs(n){return .375*n*(1+.25*n*(1+.46875*n))}function vs(n){return .05859375*n*n*(1+.75*n)}function Ms(n){return n*n*n*(35/3072)}function Hi(n,t,e){var i=t*e;return n/Math.sqrt(1-i*i)}function Wi(n){return Math.abs(n)<Q?n:n-ms(n)*Math.PI}function ur(n,t,e,i,s){var r,o;r=n/t;for(var a=0;a<15;a++)if(o=(n-(t*r-e*Math.sin(2*r)+i*Math.sin(4*r)-s*Math.sin(6*r)))/(t-2*e*Math.cos(2*r)+4*i*Math.cos(4*r)-6*s*Math.cos(6*r)),r+=o,Math.abs(o)<=1e-10)return r;return NaN}function kg(){this.sphere||(this.e0=_s(this.es),this.e1=gs(this.es),this.e2=vs(this.es),this.e3=Ms(this.es),this.ml0=this.a*Ie(this.e0,this.e1,this.e2,this.e3,this.lat0))}function Vg(n){var t,e,i=n.x,s=n.y;if(i=pt(i-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(s)*Math.sin(i)),e=this.a*(Math.atan2(Math.tan(s),Math.cos(i))-this.lat0);else{var r=Math.sin(s),o=Math.cos(s),a=Hi(this.a,this.e,r),l=Math.tan(s)*Math.tan(s),h=i*Math.cos(s),u=h*h,c=this.es*o*o/(1-this.es),f=this.a*Ie(this.e0,this.e1,this.e2,this.e3,s);t=a*h*(1-u*l*(1/6-(8-l+8*c)*u/120)),e=f-this.ml0+a*r/o*u*(.5+(5-l+6*c)*u/24)}return n.x=t+this.x0,n.y=e+this.y0,n}function Wg(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,s;if(this.sphere){var r=e+this.lat0;i=Math.asin(Math.sin(r)*Math.cos(t)),s=Math.atan2(Math.tan(t),Math.cos(r))}else{var o=this.ml0/this.a+e,a=ur(o,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(a)-Q)<=ht)return n.x=this.long0,n.y=Q,e<0&&(n.y*=-1),n;var l=Hi(this.a,this.e,Math.sin(a)),h=l*l*l/this.a/this.a*(1-this.es),u=Math.pow(Math.tan(a),2),c=t*this.a/l,f=c*c;i=a-l*Math.tan(a)/h*c*c*(.5-(1+3*u)*c*c/24),s=c*(1-f*(u/3+(1+3*u)*u*f/15))/Math.cos(a)}return n.x=pt(s+this.long0),n.y=Wi(i),n}var Xg=["Cassini","Cassini_Soldner","cass"];const qg={init:kg,forward:Vg,inverse:Wg,names:Xg};function Fn(n,t){var e;return n>1e-7?(e=n*t,(1-n*n)*(t/(1-e*e)-.5/n*Math.log((1-e)/(1+e)))):2*t}var Yg=1,jg=2,$g=3,Kg=4;function Zg(){var n=Math.abs(this.lat0);if(Math.abs(n-Q)<ht?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(n)<ht?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var t;switch(this.qp=Fn(this.e,1),this.mmf=.5/(1-this.es),this.apa=av(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=Fn(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function Jg(n){var t,e,i,s,r,o,a,l,h,u,c=n.x,f=n.y;if(c=pt(c-this.long0),this.sphere){if(r=Math.sin(f),u=Math.cos(f),i=Math.cos(c),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+u*i:1+this.sinph0*r+this.cosph0*u*i,e<=ht)return null;e=Math.sqrt(2/e),t=e*u*Math.sin(c),e*=this.mode===this.EQUIT?r:this.cosph0*r-this.sinph0*u*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(f+this.lat0)<ht)return null;e=jt-f*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(c),e*=i}}else{switch(a=0,l=0,h=0,i=Math.cos(c),s=Math.sin(c),r=Math.sin(f),o=Fn(this.e,r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(a=o/this.qp,l=Math.sqrt(1-a*a)),this.mode){case this.OBLIQ:h=1+this.sinb1*a+this.cosb1*l*i;break;case this.EQUIT:h=1+l*i;break;case this.N_POLE:h=Q+f,o=this.qp-o;break;case this.S_POLE:h=f-Q,o=this.qp+o;break}if(Math.abs(h)<ht)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:h=Math.sqrt(2/h),this.mode===this.OBLIQ?e=this.ymf*h*(this.cosb1*a-this.sinb1*l*i):e=(h=Math.sqrt(2/(1+l*i)))*a*this.ymf,t=this.xmf*h*l*s;break;case this.N_POLE:case this.S_POLE:o>=0?(t=(h=Math.sqrt(o))*s,e=i*(this.mode===this.S_POLE?h:-h)):t=e=0;break}}return n.x=this.a*t+this.x0,n.y=this.a*e+this.y0,n}function Qg(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,s,r,o,a,l,h;if(this.sphere){var u=0,c,f=0;if(c=Math.sqrt(t*t+e*e),s=c*.5,s>1)return null;switch(s=2*Math.asin(s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(f=Math.sin(s),u=Math.cos(s)),this.mode){case this.EQUIT:s=Math.abs(c)<=ht?0:Math.asin(e*f/c),t*=f,e=u*c;break;case this.OBLIQ:s=Math.abs(c)<=ht?this.lat0:Math.asin(u*this.sinph0+e*f*this.cosph0/c),t*=f*this.cosph0,e=(u-Math.sin(s)*this.sinph0)*c;break;case this.N_POLE:e=-e,s=Q-s;break;case this.S_POLE:s-=Q;break}i=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(h=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,l=Math.sqrt(t*t+e*e),l<ht)return n.x=this.long0,n.y=this.lat0,n;o=2*Math.asin(.5*l/this.rq),r=Math.cos(o),t*=o=Math.sin(o),this.mode===this.OBLIQ?(h=r*this.sinb1+e*o*this.cosb1/l,a=this.qp*h,e=l*this.cosb1*r-e*this.sinb1*o):(h=e*o/l,a=this.qp*h,e=l*r)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),a=t*t+e*e,!a)return n.x=this.long0,n.y=this.lat0,n;h=1-a/this.qp,this.mode===this.S_POLE&&(h=-h)}i=Math.atan2(t,e),s=ov(Math.asin(h),this.apa)}return n.x=pt(this.long0+i),n.y=s,n}var tv=.3333333333333333,ev=.17222222222222222,nv=.10257936507936508,iv=.06388888888888888,sv=.0664021164021164,rv=.016415012942191543;function av(n){var t,e=[];return e[0]=n*tv,t=n*n,e[0]+=t*ev,e[1]=t*iv,t*=n,e[0]+=t*nv,e[1]+=t*sv,e[2]=t*rv,e}function ov(n,t){var e=n+n;return n+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var lv=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const hv={init:Zg,forward:Jg,inverse:Qg,names:lv,S_POLE:Yg,N_POLE:jg,EQUIT:$g,OBLIQ:Kg};function kn(n){return Math.abs(n)>1&&(n=n>1?1:-1),Math.asin(n)}function cv(){Math.abs(this.lat1+this.lat2)<ht||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=mn(this.e3,this.sin_po,this.cos_po),this.qs1=Fn(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=mn(this.e3,this.sin_po,this.cos_po),this.qs2=Fn(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=Fn(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>ht?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function uv(n){var t=n.x,e=n.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var i=Fn(this.e3,this.sin_phi),s=this.a*Math.sqrt(this.c-this.ns0*i)/this.ns0,r=this.ns0*pt(t-this.long0),o=s*Math.sin(r)+this.x0,a=this.rh-s*Math.cos(r)+this.y0;return n.x=o,n.y=a,n}function fv(n){var t,e,i,s,r,o;return n.x-=this.x0,n.y=this.rh-n.y+this.y0,this.ns0>=0?(t=Math.sqrt(n.x*n.x+n.y*n.y),i=1):(t=-Math.sqrt(n.x*n.x+n.y*n.y),i=-1),s=0,t!==0&&(s=Math.atan2(i*n.x,i*n.y)),i=t*this.ns0/this.a,this.sphere?o=Math.asin((this.c-i*i)/(2*this.ns0)):(e=(this.c-i*i)/this.ns0,o=this.phi1z(this.e3,e)),r=pt(s/this.ns0+this.long0),n.x=r,n.y=o,n}function dv(n,t){var e,i,s,r,o,a=kn(.5*t);if(n<ht)return a;for(var l=n*n,h=1;h<=25;h++)if(e=Math.sin(a),i=Math.cos(a),s=n*e,r=1-s*s,o=.5*r*r/i*(t/(1-l)-e/r+.5/n*Math.log((1-s)/(1+s))),a=a+o,Math.abs(o)<=1e-7)return a;return null}var pv=["Albers_Conic_Equal_Area","Albers","aea"];const mv={init:cv,forward:uv,inverse:fv,names:pv,phi1z:dv};function _v(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function gv(n){var t,e,i,s,r,o,a,l,h=n.x,u=n.y;return i=pt(h-this.long0),t=Math.sin(u),e=Math.cos(u),s=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*s,r=1,o>0||Math.abs(o)<=ht?(a=this.x0+this.a*r*e*Math.sin(i)/o,l=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)/o):(a=this.x0+this.infinity_dist*e*Math.sin(i),l=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*s)),n.x=a,n.y=l,n}function vv(n){var t,e,i,s,r,o;return n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,(t=Math.sqrt(n.x*n.x+n.y*n.y))?(s=Math.atan2(t,this.rc),e=Math.sin(s),i=Math.cos(s),o=kn(i*this.sin_p14+n.y*e*this.cos_p14/t),r=Math.atan2(n.x*e,t*this.cos_p14*i-n.y*this.sin_p14*e),r=pt(this.long0+r)):(o=this.phic0,r=0),n.x=r,n.y=o,n}var Mv=["gnom"];const xv={init:_v,forward:gv,inverse:vv,names:Mv};function yv(n,t){var e=1-(1-n*n)/(2*n)*Math.log((1-n)/(1+n));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*Q:Q;for(var i=Math.asin(.5*t),s,r,o,a,l=0;l<30;l++)if(r=Math.sin(i),o=Math.cos(i),a=n*r,s=Math.pow(1-a*a,2)/(2*o)*(t/(1-n*n)-r/(1-a*a)+.5/n*Math.log((1-a)/(1+a))),i+=s,Math.abs(s)<=1e-10)return i;return NaN}function Sv(){this.sphere||(this.k0=mn(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function Ev(n){var t=n.x,e=n.y,i,s,r=pt(t-this.long0);if(this.sphere)i=this.x0+this.a*r*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var o=Fn(this.e,Math.sin(e));i=this.x0+this.a*this.k0*r,s=this.y0+this.a*o*.5/this.k0}return n.x=i,n.y=s,n}function Tv(n){n.x-=this.x0,n.y-=this.y0;var t,e;return this.sphere?(t=pt(this.long0+n.x/this.a/Math.cos(this.lat_ts)),e=Math.asin(n.y/this.a*Math.cos(this.lat_ts))):(e=yv(this.e,2*n.y*this.k0/this.a),t=pt(this.long0+n.x/(this.a*this.k0))),n.x=t,n.y=e,n}var bv=["cea"];const Av={init:Sv,forward:Ev,inverse:Tv,names:bv};function wv(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function Rv(n){var t=n.x,e=n.y,i=pt(t-this.long0),s=Wi(e-this.lat0);return n.x=this.x0+this.a*i*this.rc,n.y=this.y0+this.a*s,n}function Cv(n){var t=n.x,e=n.y;return n.x=pt(this.long0+(t-this.x0)/(this.a*this.rc)),n.y=Wi(this.lat0+(e-this.y0)/this.a),n}var Pv=["Equirectangular","Equidistant_Cylindrical","eqc"];const Lv={init:wv,forward:Rv,inverse:Cv,names:Pv};var Bl=20;function Dv(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=_s(this.es),this.e1=gs(this.es),this.e2=vs(this.es),this.e3=Ms(this.es),this.ml0=this.a*Ie(this.e0,this.e1,this.e2,this.e3,this.lat0)}function Iv(n){var t=n.x,e=n.y,i,s,r,o=pt(t-this.long0);if(r=o*Math.sin(e),this.sphere)Math.abs(e)<=ht?(i=this.a*o,s=-1*this.a*this.lat0):(i=this.a*Math.sin(r)/Math.tan(e),s=this.a*(Wi(e-this.lat0)+(1-Math.cos(r))/Math.tan(e)));else if(Math.abs(e)<=ht)i=this.a*o,s=-1*this.ml0;else{var a=Hi(this.a,this.e,Math.sin(e))/Math.tan(e);i=a*Math.sin(r),s=this.a*Ie(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+a*(1-Math.cos(r))}return n.x=i+this.x0,n.y=s+this.y0,n}function Nv(n){var t,e,i,s,r,o,a,l,h;if(i=n.x-this.x0,s=n.y-this.y0,this.sphere)if(Math.abs(s+this.a*this.lat0)<=ht)t=pt(i/this.a+this.long0),e=0;else{o=this.lat0+s/this.a,a=i*i/this.a/this.a+o*o,l=o;var u;for(r=Bl;r;--r)if(u=Math.tan(l),h=-1*(o*(l*u+1)-l-.5*(l*l+a)*u)/((l-o)/u-1),l+=h,Math.abs(h)<=ht){e=l;break}t=pt(this.long0+Math.asin(i*Math.tan(l)/this.a)/Math.sin(e))}else if(Math.abs(s+this.ml0)<=ht)e=0,t=pt(this.long0+i/this.a);else{o=(this.ml0+s)/this.a,a=i*i/this.a/this.a+o*o,l=o;var c,f,m,_,g;for(r=Bl;r;--r)if(g=this.e*Math.sin(l),c=Math.sqrt(1-g*g)*Math.tan(l),f=this.a*Ie(this.e0,this.e1,this.e2,this.e3,l),m=this.e0-2*this.e1*Math.cos(2*l)+4*this.e2*Math.cos(4*l)-6*this.e3*Math.cos(6*l),_=f/this.a,h=(o*(c*_+1)-_-.5*c*(_*_+a))/(this.es*Math.sin(2*l)*(_*_+a-2*o*_)/(4*c)+(o-_)*(c*m-2/Math.sin(2*l))-m),l-=h,Math.abs(h)<=ht){e=l;break}c=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=pt(this.long0+Math.asin(i*c/this.a)/Math.sin(e))}return n.x=t,n.y=e,n}var Uv=["Polyconic","poly"];const Ov={init:Dv,forward:Iv,inverse:Nv,names:Uv};function Fv(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function Bv(n){var t,e=n.x,i=n.y,s=i-this.lat0,r=e-this.long0,o=s/ss*1e-5,a=r,l=1,h=0;for(t=1;t<=10;t++)l=l*o,h=h+this.A[t]*l;var u=h,c=a,f=1,m=0,_,g,p=0,d=0;for(t=1;t<=6;t++)_=f*u-m*c,g=m*u+f*c,f=_,m=g,p=p+this.B_re[t]*f-this.B_im[t]*m,d=d+this.B_im[t]*f+this.B_re[t]*m;return n.x=d*this.a+this.x0,n.y=p*this.a+this.y0,n}function zv(n){var t,e=n.x,i=n.y,s=e-this.x0,r=i-this.y0,o=r/this.a,a=s/this.a,l=1,h=0,u,c,f=0,m=0;for(t=1;t<=6;t++)u=l*o-h*a,c=h*o+l*a,l=u,h=c,f=f+this.C_re[t]*l-this.C_im[t]*h,m=m+this.C_im[t]*l+this.C_re[t]*h;for(var _=0;_<this.iterations;_++){var g=f,p=m,d,S,M=o,E=a;for(t=2;t<=6;t++)d=g*f-p*m,S=p*f+g*m,g=d,p=S,M=M+(t-1)*(this.B_re[t]*g-this.B_im[t]*p),E=E+(t-1)*(this.B_im[t]*g+this.B_re[t]*p);g=1,p=0;var T=this.B_re[1],R=this.B_im[1];for(t=2;t<=6;t++)d=g*f-p*m,S=p*f+g*m,g=d,p=S,T=T+t*(this.B_re[t]*g-this.B_im[t]*p),R=R+t*(this.B_im[t]*g+this.B_re[t]*p);var A=T*T+R*R;f=(M*T+E*R)/A,m=(E*T-M*R)/A}var F=f,y=m,w=1,W=0;for(t=1;t<=9;t++)w=w*F,W=W+this.D[t]*w;var j=this.lat0+W*ss*1e5,tt=this.long0+y;return n.x=tt,n.y=j,n}var Gv=["New_Zealand_Map_Grid","nzmg"];const Hv={init:Fv,forward:Bv,inverse:zv,names:Gv};function kv(){}function Vv(n){var t=n.x,e=n.y,i=pt(t-this.long0),s=this.x0+this.a*i,r=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return n.x=s,n.y=r,n}function Wv(n){n.x-=this.x0,n.y-=this.y0;var t=pt(this.long0+n.x/this.a),e=2.5*(Math.atan(Math.exp(.8*n.y/this.a))-Math.PI/4);return n.x=t,n.y=e,n}var Xv=["Miller_Cylindrical","mill"];const qv={init:kv,forward:Vv,inverse:Wv,names:Xv};var Yv=20;function jv(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=Lh(this.es)}function $v(n){var t,e,i=n.x,s=n.y;if(i=pt(i-this.long0),this.sphere){if(!this.m)s=this.n!==1?Math.asin(this.n*Math.sin(s)):s;else for(var r=this.n*Math.sin(s),o=Yv;o;--o){var a=(this.m*s+Math.sin(s)-r)/(this.m+Math.cos(s));if(s-=a,Math.abs(a)<ht)break}t=this.a*this.C_x*i*(this.m+Math.cos(s)),e=this.a*this.C_y*s}else{var l=Math.sin(s),h=Math.cos(s);e=this.a*xr(s,l,h,this.en),t=this.a*i*h/Math.sqrt(1-this.es*l*l)}return n.x=t,n.y=e,n}function Kv(n){var t,e,i,s;return n.x-=this.x0,i=n.x/this.a,n.y-=this.y0,t=n.y/this.a,this.sphere?(t/=this.C_y,i=i/(this.C_x*(this.m+Math.cos(t))),this.m?t=kn((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=kn(Math.sin(t)/this.n)),i=pt(i+this.long0),t=Wi(t)):(t=Dh(n.y/this.a,this.es,this.en),s=Math.abs(t),s<Q?(s=Math.sin(t),e=this.long0+n.x*Math.sqrt(1-this.es*s*s)/(this.a*Math.cos(t)),i=pt(e)):s-ht<Q&&(i=this.long0)),n.x=i,n.y=t,n}var Zv=["Sinusoidal","sinu"];const Jv={init:jv,forward:$v,inverse:Kv,names:Zv};function Qv(){}function tM(n){for(var t=n.x,e=n.y,i=pt(t-this.long0),s=e,r=Math.PI*Math.sin(e);;){var o=-(s+Math.sin(s)-r)/(1+Math.cos(s));if(s+=o,Math.abs(o)<ht)break}s/=2,Math.PI/2-Math.abs(e)<ht&&(i=0);var a=.900316316158*this.a*i*Math.cos(s)+this.x0,l=1.4142135623731*this.a*Math.sin(s)+this.y0;return n.x=a,n.y=l,n}function eM(n){var t,e;n.x-=this.x0,n.y-=this.y0,e=n.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var i=pt(this.long0+n.x/(.900316316158*this.a*Math.cos(t)));i<-Math.PI&&(i=-Math.PI),i>Math.PI&&(i=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var s=Math.asin(e);return n.x=i,n.y=s,n}var nM=["Mollweide","moll"];const iM={init:Qv,forward:tM,inverse:eM,names:nM};function sM(){Math.abs(this.lat1+this.lat2)<ht||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=_s(this.es),this.e1=gs(this.es),this.e2=vs(this.es),this.e3=Ms(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=mn(this.e,this.sinphi,this.cosphi),this.ml1=Ie(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<ht?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=mn(this.e,this.sinphi,this.cosphi),this.ml2=Ie(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Ie(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function rM(n){var t=n.x,e=n.y,i;if(this.sphere)i=this.a*(this.g-e);else{var s=Ie(this.e0,this.e1,this.e2,this.e3,e);i=this.a*(this.g-s)}var r=this.ns*pt(t-this.long0),o=this.x0+i*Math.sin(r),a=this.y0+this.rh-i*Math.cos(r);return n.x=o,n.y=a,n}function aM(n){n.x-=this.x0,n.y=this.rh-n.y+this.y0;var t,e,i,s;this.ns>=0?(e=Math.sqrt(n.x*n.x+n.y*n.y),t=1):(e=-Math.sqrt(n.x*n.x+n.y*n.y),t=-1);var r=0;if(e!==0&&(r=Math.atan2(t*n.x,t*n.y)),this.sphere)return s=pt(this.long0+r/this.ns),i=Wi(this.g-e/this.a),n.x=s,n.y=i,n;var o=this.g-e/this.a;return i=ur(o,this.e0,this.e1,this.e2,this.e3),s=pt(this.long0+r/this.ns),n.x=s,n.y=i,n}var oM=["Equidistant_Conic","eqdc"];const lM={init:sM,forward:rM,inverse:aM,names:oM};function hM(){this.R=this.a}function cM(n){var t=n.x,e=n.y,i=pt(t-this.long0),s,r;Math.abs(e)<=ht&&(s=this.x0+this.R*i,r=this.y0);var o=kn(2*Math.abs(e/Math.PI));(Math.abs(i)<=ht||Math.abs(Math.abs(e)-Q)<=ht)&&(s=this.x0,e>=0?r=this.y0+Math.PI*this.R*Math.tan(.5*o):r=this.y0+Math.PI*this.R*-Math.tan(.5*o));var a=.5*Math.abs(Math.PI/i-i/Math.PI),l=a*a,h=Math.sin(o),u=Math.cos(o),c=u/(h+u-1),f=c*c,m=c*(2/h-1),_=m*m,g=Math.PI*this.R*(a*(c-_)+Math.sqrt(l*(c-_)*(c-_)-(_+l)*(f-_)))/(_+l);i<0&&(g=-g),s=this.x0+g;var p=l+c;return g=Math.PI*this.R*(m*p-a*Math.sqrt((_+l)*(l+1)-p*p))/(_+l),e>=0?r=this.y0+g:r=this.y0-g,n.x=s,n.y=r,n}function uM(n){var t,e,i,s,r,o,a,l,h,u,c,f,m;return n.x-=this.x0,n.y-=this.y0,c=Math.PI*this.R,i=n.x/c,s=n.y/c,r=i*i+s*s,o=-Math.abs(s)*(1+r),a=o-2*s*s+i*i,l=-2*o+1+2*s*s+r*r,m=s*s/l+(2*a*a*a/l/l/l-9*o*a/l/l)/27,h=(o-a*a/3/l)/l,u=2*Math.sqrt(-h/3),c=3*m/h/u,Math.abs(c)>1&&(c>=0?c=1:c=-1),f=Math.acos(c)/3,n.y>=0?e=(-u*Math.cos(f+Math.PI/3)-a/3/l)*Math.PI:e=-(-u*Math.cos(f+Math.PI/3)-a/3/l)*Math.PI,Math.abs(i)<ht?t=this.long0:t=pt(this.long0+Math.PI*(r-1+Math.sqrt(1+2*(i*i-s*s)+r*r))/2/i),n.x=t,n.y=e,n}var fM=["Van_der_Grinten_I","VanDerGrinten","vandg"];const dM={init:hM,forward:cM,inverse:uM,names:fM};function pM(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function mM(n){var t=n.x,e=n.y,i=Math.sin(n.y),s=Math.cos(n.y),r=pt(t-this.long0),o,a,l,h,u,c,f,m,_,g,p,d,S,M,E,T,R,A,F,y,w,W,j;return this.sphere?Math.abs(this.sin_p12-1)<=ht?(n.x=this.x0+this.a*(Q-e)*Math.sin(r),n.y=this.y0-this.a*(Q-e)*Math.cos(r),n):Math.abs(this.sin_p12+1)<=ht?(n.x=this.x0+this.a*(Q+e)*Math.sin(r),n.y=this.y0+this.a*(Q+e)*Math.cos(r),n):(A=this.sin_p12*i+this.cos_p12*s*Math.cos(r),T=Math.acos(A),R=T?T/Math.sin(T):1,n.x=this.x0+this.a*R*s*Math.sin(r),n.y=this.y0+this.a*R*(this.cos_p12*i-this.sin_p12*s*Math.cos(r)),n):(o=_s(this.es),a=gs(this.es),l=vs(this.es),h=Ms(this.es),Math.abs(this.sin_p12-1)<=ht?(u=this.a*Ie(o,a,l,h,Q),c=this.a*Ie(o,a,l,h,e),n.x=this.x0+(u-c)*Math.sin(r),n.y=this.y0-(u-c)*Math.cos(r),n):Math.abs(this.sin_p12+1)<=ht?(u=this.a*Ie(o,a,l,h,Q),c=this.a*Ie(o,a,l,h,e),n.x=this.x0+(u+c)*Math.sin(r),n.y=this.y0+(u+c)*Math.cos(r),n):(f=i/s,m=Hi(this.a,this.e,this.sin_p12),_=Hi(this.a,this.e,i),g=Math.atan((1-this.es)*f+this.es*m*this.sin_p12/(_*s)),p=Math.atan2(Math.sin(r),this.cos_p12*Math.tan(g)-this.sin_p12*Math.cos(r)),p===0?F=Math.asin(this.cos_p12*Math.sin(g)-this.sin_p12*Math.cos(g)):Math.abs(Math.abs(p)-Math.PI)<=ht?F=-Math.asin(this.cos_p12*Math.sin(g)-this.sin_p12*Math.cos(g)):F=Math.asin(Math.sin(r)*Math.cos(g)/Math.sin(p)),d=this.e*this.sin_p12/Math.sqrt(1-this.es),S=this.e*this.cos_p12*Math.cos(p)/Math.sqrt(1-this.es),M=d*S,E=S*S,y=F*F,w=y*F,W=w*F,j=W*F,T=m*F*(1-y*E*(1-E)/6+w/8*M*(1-2*E)+W/120*(E*(4-7*E)-3*d*d*(1-7*E))-j/48*M),n.x=this.x0+T*Math.sin(p),n.y=this.y0+T*Math.cos(p),n))}function _M(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,s,r,o,a,l,h,u,c,f,m,_,g,p,d,S,M,E,T,R,A,F;return this.sphere?(t=Math.sqrt(n.x*n.x+n.y*n.y),t>2*Q*this.a?void 0:(e=t/this.a,i=Math.sin(e),s=Math.cos(e),r=this.long0,Math.abs(t)<=ht?o=this.lat0:(o=kn(s*this.sin_p12+n.y*i*this.cos_p12/t),a=Math.abs(this.lat0)-Q,Math.abs(a)<=ht?this.lat0>=0?r=pt(this.long0+Math.atan2(n.x,-n.y)):r=pt(this.long0-Math.atan2(-n.x,n.y)):r=pt(this.long0+Math.atan2(n.x*i,t*this.cos_p12*s-n.y*this.sin_p12*i))),n.x=r,n.y=o,n)):(l=_s(this.es),h=gs(this.es),u=vs(this.es),c=Ms(this.es),Math.abs(this.sin_p12-1)<=ht?(f=this.a*Ie(l,h,u,c,Q),t=Math.sqrt(n.x*n.x+n.y*n.y),m=f-t,o=ur(m/this.a,l,h,u,c),r=pt(this.long0+Math.atan2(n.x,-1*n.y)),n.x=r,n.y=o,n):Math.abs(this.sin_p12+1)<=ht?(f=this.a*Ie(l,h,u,c,Q),t=Math.sqrt(n.x*n.x+n.y*n.y),m=t-f,o=ur(m/this.a,l,h,u,c),r=pt(this.long0+Math.atan2(n.x,n.y)),n.x=r,n.y=o,n):(t=Math.sqrt(n.x*n.x+n.y*n.y),p=Math.atan2(n.x,n.y),_=Hi(this.a,this.e,this.sin_p12),d=Math.cos(p),S=this.e*this.cos_p12*d,M=-S*S/(1-this.es),E=3*this.es*(1-M)*this.sin_p12*this.cos_p12*d/(1-this.es),T=t/_,R=T-M*(1+M)*Math.pow(T,3)/6-E*(1+3*M)*Math.pow(T,4)/24,A=1-M*R*R/2-T*R*R*R/6,g=Math.asin(this.sin_p12*Math.cos(R)+this.cos_p12*Math.sin(R)*d),r=pt(this.long0+Math.asin(Math.sin(p)*Math.sin(R)/Math.cos(g))),F=Math.sin(g),o=Math.atan2((F-this.es*A*this.sin_p12)*Math.tan(g),F*(1-this.es)),n.x=r,n.y=o,n))}var gM=["Azimuthal_Equidistant","aeqd"];const vM={init:pM,forward:mM,inverse:_M,names:gM};function MM(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function xM(n){var t,e,i,s,r,o,a,l,h=n.x,u=n.y;return i=pt(h-this.long0),t=Math.sin(u),e=Math.cos(u),s=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*s,r=1,(o>0||Math.abs(o)<=ht)&&(a=this.a*r*e*Math.sin(i),l=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)),n.x=a,n.y=l,n}function yM(n){var t,e,i,s,r,o,a;return n.x-=this.x0,n.y-=this.y0,t=Math.sqrt(n.x*n.x+n.y*n.y),e=kn(t/this.a),i=Math.sin(e),s=Math.cos(e),o=this.long0,Math.abs(t)<=ht?(a=this.lat0,n.x=o,n.y=a,n):(a=kn(s*this.sin_p14+n.y*i*this.cos_p14/t),r=Math.abs(this.lat0)-Q,Math.abs(r)<=ht?(this.lat0>=0?o=pt(this.long0+Math.atan2(n.x,-n.y)):o=pt(this.long0-Math.atan2(-n.x,n.y)),n.x=o,n.y=a,n):(o=pt(this.long0+Math.atan2(n.x*i,t*this.cos_p14*s-n.y*this.sin_p14*i)),n.x=o,n.y=a,n))}var SM=["ortho"];const EM={init:MM,forward:xM,inverse:yM,names:SM};var ee={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},$t={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function TM(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=Q-jt/2?this.face=ee.TOP:this.lat0<=-(Q-jt/2)?this.face=ee.BOTTOM:Math.abs(this.long0)<=jt?this.face=ee.FRONT:Math.abs(this.long0)<=Q+jt?this.face=this.long0>0?ee.RIGHT:ee.LEFT:this.face=ee.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function bM(n){var t={x:0,y:0},e,i,s,r,o,a,l={value:0};if(n.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(n.y)):e=n.y,i=n.x,this.face===ee.TOP)r=Q-e,i>=jt&&i<=Q+jt?(l.value=$t.AREA_0,s=i-Q):i>Q+jt||i<=-(Q+jt)?(l.value=$t.AREA_1,s=i>0?i-se:i+se):i>-(Q+jt)&&i<=-jt?(l.value=$t.AREA_2,s=i+Q):(l.value=$t.AREA_3,s=i);else if(this.face===ee.BOTTOM)r=Q+e,i>=jt&&i<=Q+jt?(l.value=$t.AREA_0,s=-i+Q):i<jt&&i>=-jt?(l.value=$t.AREA_1,s=-i):i<-jt&&i>=-(Q+jt)?(l.value=$t.AREA_2,s=-i-Q):(l.value=$t.AREA_3,s=i>0?-i+se:-i-se);else{var h,u,c,f,m,_,g;this.face===ee.RIGHT?i=Ui(i,+Q):this.face===ee.BACK?i=Ui(i,+se):this.face===ee.LEFT&&(i=Ui(i,-Q)),f=Math.sin(e),m=Math.cos(e),_=Math.sin(i),g=Math.cos(i),h=m*g,u=m*_,c=f,this.face===ee.FRONT?(r=Math.acos(h),s=$s(r,c,u,l)):this.face===ee.RIGHT?(r=Math.acos(u),s=$s(r,c,-h,l)):this.face===ee.BACK?(r=Math.acos(-h),s=$s(r,c,-u,l)):this.face===ee.LEFT?(r=Math.acos(-u),s=$s(r,c,h,l)):(r=s=0,l.value=$t.AREA_0)}return a=Math.atan(12/se*(s+Math.acos(Math.sin(s)*Math.cos(jt))-Q)),o=Math.sqrt((1-Math.cos(r))/(Math.cos(a)*Math.cos(a))/(1-Math.cos(Math.atan(1/Math.cos(s))))),l.value===$t.AREA_1?a+=Q:l.value===$t.AREA_2?a+=se:l.value===$t.AREA_3&&(a+=1.5*se),t.x=o*Math.cos(a),t.y=o*Math.sin(a),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,n.x=t.x,n.y=t.y,n}function AM(n){var t={lam:0,phi:0},e,i,s,r,o,a,l,h,u,c={value:0};if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,i=Math.atan(Math.sqrt(n.x*n.x+n.y*n.y)),e=Math.atan2(n.y,n.x),n.x>=0&&n.x>=Math.abs(n.y)?c.value=$t.AREA_0:n.y>=0&&n.y>=Math.abs(n.x)?(c.value=$t.AREA_1,e-=Q):n.x<0&&-n.x>=Math.abs(n.y)?(c.value=$t.AREA_2,e=e<0?e+se:e-se):(c.value=$t.AREA_3,e+=Q),u=se/12*Math.tan(e),o=Math.sin(u)/(Math.cos(u)-1/Math.sqrt(2)),a=Math.atan(o),s=Math.cos(e),r=Math.tan(i),l=1-s*s*r*r*(1-Math.cos(Math.atan(1/Math.cos(a)))),l<-1?l=-1:l>1&&(l=1),this.face===ee.TOP)h=Math.acos(l),t.phi=Q-h,c.value===$t.AREA_0?t.lam=a+Q:c.value===$t.AREA_1?t.lam=a<0?a+se:a-se:c.value===$t.AREA_2?t.lam=a-Q:t.lam=a;else if(this.face===ee.BOTTOM)h=Math.acos(l),t.phi=h-Q,c.value===$t.AREA_0?t.lam=-a+Q:c.value===$t.AREA_1?t.lam=-a:c.value===$t.AREA_2?t.lam=-a-Q:t.lam=a<0?-a-se:-a+se;else{var f,m,_;f=l,u=f*f,u>=1?_=0:_=Math.sqrt(1-u)*Math.sin(a),u+=_*_,u>=1?m=0:m=Math.sqrt(1-u),c.value===$t.AREA_1?(u=m,m=-_,_=u):c.value===$t.AREA_2?(m=-m,_=-_):c.value===$t.AREA_3&&(u=m,m=_,_=-u),this.face===ee.RIGHT?(u=f,f=-m,m=u):this.face===ee.BACK?(f=-f,m=-m):this.face===ee.LEFT&&(u=f,f=m,m=-u),t.phi=Math.acos(-_)-Q,t.lam=Math.atan2(m,f),this.face===ee.RIGHT?t.lam=Ui(t.lam,-Q):this.face===ee.BACK?t.lam=Ui(t.lam,-se):this.face===ee.LEFT&&(t.lam=Ui(t.lam,+Q))}if(this.es!==0){var g,p,d;g=t.phi<0?1:0,p=Math.tan(t.phi),d=this.b/Math.sqrt(p*p+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-d*d)/(this.one_minus_f*d)),g&&(t.phi=-t.phi)}return t.lam+=this.long0,n.x=t.lam,n.y=t.phi,n}function $s(n,t,e,i){var s;return n<ht?(i.value=$t.AREA_0,s=0):(s=Math.atan2(t,e),Math.abs(s)<=jt?i.value=$t.AREA_0:s>jt&&s<=Q+jt?(i.value=$t.AREA_1,s-=Q):s>Q+jt||s<=-(Q+jt)?(i.value=$t.AREA_2,s=s>=0?s-se:s+se):(i.value=$t.AREA_3,s+=Q)),s}function Ui(n,t){var e=n+t;return e<-se?e+=ls:e>+se&&(e-=ls),e}var wM=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const RM={init:TM,forward:bM,inverse:AM,names:wM};var Sa=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],ts=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],Uh=.8487,Oh=1.3523,Fh=fn/5,CM=1/Fh,Li=18,fr=function(n,t){return n[0]+t*(n[1]+t*(n[2]+t*n[3]))},PM=function(n,t){return n[1]+t*(2*n[2]+t*3*n[3])};function LM(n,t,e,i){for(var s=t;i;--i){var r=n(s);if(s-=r,Math.abs(r)<e)break}return s}function DM(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function IM(n){var t=pt(n.x-this.long0),e=Math.abs(n.y),i=Math.floor(e*Fh);i<0?i=0:i>=Li&&(i=Li-1),e=fn*(e-CM*i);var s={x:fr(Sa[i],e)*t,y:fr(ts[i],e)};return n.y<0&&(s.y=-s.y),s.x=s.x*this.a*Uh+this.x0,s.y=s.y*this.a*Oh+this.y0,s}function NM(n){var t={x:(n.x-this.x0)/(this.a*Uh),y:Math.abs(n.y-this.y0)/(this.a*Oh)};if(t.y>=1)t.x/=Sa[Li][0],t.y=n.y<0?-Q:Q;else{var e=Math.floor(t.y*Li);for(e<0?e=0:e>=Li&&(e=Li-1);;)if(ts[e][0]>t.y)--e;else if(ts[e+1][0]<=t.y)++e;else break;var i=ts[e],s=5*(t.y-i[0])/(ts[e+1][0]-i[0]);s=LM(function(r){return(fr(i,r)-t.y)/PM(i,r)},s,ht,100),t.x/=fr(Sa[e],s),t.y=(5*e+s)*ve,n.y<0&&(t.y=-t.y)}return t.x=pt(t.x+this.long0),t}var UM=["Robinson","robin"];const OM={init:DM,forward:IM,inverse:NM,names:UM};function FM(){this.name="geocent"}function BM(n){var t=Sh(n,this.es,this.a);return t}function zM(n){var t=Eh(n,this.es,this.a,this.b);return t}var GM=["Geocentric","geocentric","geocent","Geocent"];const HM={init:FM,forward:BM,inverse:zM,names:GM};var Te={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},Ki={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function kM(){if(Object.keys(Ki).forEach((function(e){if(typeof this[e]>"u")this[e]=Ki[e].def;else{if(Ki[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);Ki[e].num&&(this[e]=parseFloat(this[e]))}Ki[e].degrees&&(this[e]=this[e]*ve)}).bind(this)),Math.abs(Math.abs(this.lat0)-Q)<ht?this.mode=this.lat0<0?Te.S_POLE:Te.N_POLE:Math.abs(this.lat0)<ht?this.mode=Te.EQUIT:(this.mode=Te.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var n=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(n),this.sw=Math.sin(n)}function VM(n){n.x-=this.long0;var t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),s,r;switch(this.mode){case Te.OBLIQ:r=this.sinph0*t+this.cosph0*e*i;break;case Te.EQUIT:r=e*i;break;case Te.S_POLE:r=-t;break;case Te.N_POLE:r=t;break}switch(r=this.pn1/(this.p-r),s=r*e*Math.sin(n.x),this.mode){case Te.OBLIQ:r*=this.cosph0*t-this.sinph0*e*i;break;case Te.EQUIT:r*=t;break;case Te.N_POLE:r*=-(e*i);break;case Te.S_POLE:r*=e*i;break}var o,a;return o=r*this.cg+s*this.sg,a=1/(o*this.sw*this.h1+this.cw),s=(s*this.cg-r*this.sg)*this.cw*a,r=o*a,n.x=s*this.a,n.y=r*this.a,n}function WM(n){n.x/=this.a,n.y/=this.a;var t={x:n.x,y:n.y},e,i,s;s=1/(this.pn1-n.y*this.sw),e=this.pn1*n.x*s,i=this.pn1*n.y*this.cw*s,n.x=e*this.cg+i*this.sg,n.y=i*this.cg-e*this.sg;var r=sn(n.x,n.y);if(Math.abs(r)<ht)t.x=0,t.y=n.y;else{var o,a;switch(a=1-r*r*this.pfact,a=(this.p-Math.sqrt(a))/(this.pn1/r+r/this.pn1),o=Math.sqrt(1-a*a),this.mode){case Te.OBLIQ:t.y=Math.asin(o*this.sinph0+n.y*a*this.cosph0/r),n.y=(o-this.sinph0*Math.sin(t.y))*r,n.x*=a*this.cosph0;break;case Te.EQUIT:t.y=Math.asin(n.y*a/r),n.y=o*r,n.x*=a;break;case Te.N_POLE:t.y=Math.asin(o),n.y=-n.y;break;case Te.S_POLE:t.y=-Math.asin(o);break}t.x=Math.atan2(n.x,n.y)}return n.x=t.x+this.long0,n.y=t.y,n}var XM=["Tilted_Perspective","tpers"];const qM={init:kM,forward:VM,inverse:WM,names:XM};function YM(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var n=1-this.es,t=1/n;this.radius_p=Math.sqrt(n),this.radius_p2=n,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function jM(n){var t=n.x,e=n.y,i,s,r,o;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var a=this.radius_p/sn(this.radius_p*Math.cos(e),Math.sin(e));if(s=a*Math.cos(t)*Math.cos(e),r=a*Math.sin(t)*Math.cos(e),o=a*Math.sin(e),(this.radius_g-s)*s-r*r-o*o*this.radius_p_inv2<0)return n.x=Number.NaN,n.y=Number.NaN,n;i=this.radius_g-s,this.flip_axis?(n.x=this.radius_g_1*Math.atan(r/sn(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(r/i),n.y=this.radius_g_1*Math.atan(o/sn(r,i)))}else this.shape==="sphere"&&(i=Math.cos(e),s=Math.cos(t)*i,r=Math.sin(t)*i,o=Math.sin(e),i=this.radius_g-s,this.flip_axis?(n.x=this.radius_g_1*Math.atan(r/sn(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(r/i),n.y=this.radius_g_1*Math.atan(o/sn(r,i))));return n.x=n.x*this.a,n.y=n.y*this.a,n}function $M(n){var t=-1,e=0,i=0,s,r,o,a;if(n.x=n.x/this.a,n.y=n.y/this.a,this.shape==="ellipse"){this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*sn(1,i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*sn(1,e));var l=i/this.radius_p;if(s=e*e+l*l+t*t,r=2*this.radius_g*t,o=r*r-4*s*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-r-Math.sqrt(o))/(2*s),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t),n.y=Math.atan(this.radius_p_inv2*Math.tan(n.y))}else if(this.shape==="sphere"){if(this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*Math.sqrt(1+i*i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*Math.sqrt(1+e*e)),s=e*e+i*i+t*t,r=2*this.radius_g*t,o=r*r-4*s*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-r-Math.sqrt(o))/(2*s),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t)}return n.x=n.x+this.long0,n}var KM=["Geostationary Satellite View","Geostationary_Satellite","geos"];const ZM={init:YM,forward:jM,inverse:$M,names:KM};function JM(n){n.Proj.projections.add(Qs),n.Proj.projections.add(tr),n.Proj.projections.add(sg),n.Proj.projections.add(pg),n.Proj.projections.add(xg),n.Proj.projections.add(bg),n.Proj.projections.add(Lg),n.Proj.projections.add(Og),n.Proj.projections.add(Hg),n.Proj.projections.add(qg),n.Proj.projections.add(hv),n.Proj.projections.add(mv),n.Proj.projections.add(xv),n.Proj.projections.add(Av),n.Proj.projections.add(Lv),n.Proj.projections.add(Ov),n.Proj.projections.add(Hv),n.Proj.projections.add(qv),n.Proj.projections.add(Jv),n.Proj.projections.add(iM),n.Proj.projections.add(lM),n.Proj.projections.add(dM),n.Proj.projections.add(vM),n.Proj.projections.add(EM),n.Proj.projections.add(RM),n.Proj.projections.add(OM),n.Proj.projections.add(HM),n.Proj.projections.add(qM),n.Proj.projections.add(ZM)}Oe.defaultDatum="WGS84";Oe.Proj=pn;Oe.WGS84=new Oe.Proj("WGS84");Oe.Point=Gi;Oe.toPoint=Th;Oe.defs=Le;Oe.nadgrid=a_;Oe.transform=cr;Oe.mgrs=S_;Oe.version="__VERSION__";JM(Oe);const QM="+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";Oe.defs("EPSG:32118",QM);function xs(n,t){if(!Number.isFinite(n)||!Number.isFinite(t))throw new Error(`Invalid coordinates: longitude (${n}), latitude (${t})`);return Oe("EPSG:32118").forward([n,t])}let oa=4,la=0;const zl=["←","↖","↑","↗","→","↘","↓","↙"];let ha=0;function tx(){const n=document.getElementById("progress-bar");n.textContent=zl[ha],ha=(ha+1)%zl.length}const ex=setInterval(tx,100);function Ks(){la++;const n=la/oa*100,t=document.getElementById("progress-bar");if(t.style.width=`${n/oa*33}%`,la===oa){clearInterval(ex),t.textContent="Loading complete!";const e=document.getElementById("three-container");t.style.display="none",e.style.visibility="visible"}}let Bn,re,Ai,be;function nx(){Bn=new d0,re=new $e(75,window.innerWidth/window.innerHeight,.1,1e3),re.position.z=20,Ai=new dh({antialias:!0}),Ai.setSize(window.innerWidth,window.innerHeight),document.getElementById("three-container").appendChild(Ai.domElement),be=new x0(re,Ai.domElement);let n=new v0(4210752);Bn.add(n);let t=new g0(16777215,.5);t.position.set(0,1,0),Bn.add(t),Ai.setClearColor(0),Ba()}function Bh(){requestAnimationFrame(Bh),be.update(),Ai.render(Bn,re),console.log("animating")}document.addEventListener("DOMContentLoaded",n=>{nx(),Bh()});function zh(){const n=document.getElementById("info-container"),t=document.getElementById("info-button");n.style.opacity="0",n.style.pointerEvents="none",t.style.display="block"}function Ba(){const n=document.getElementById("info-container"),t=document.getElementById("info-button");n.style.opacity="1",n.style.visibility="visible",n.style.pointerEvents="auto",t.style.display="none"}document.getElementById("info-container").addEventListener("transitionend",function(n){n.propertyName==="opacity"&&getComputedStyle(this).opacity==0&&(this.style.visibility="hidden")});Ba();document.addEventListener("mousedown",zh);document.addEventListener("keypress",zh);document.getElementById("info-button").addEventListener("click",function(){Ba()});const Ye=.05;function ix(n){n.preventDefault();const t=.025,e=new D,i=new D(1,0,0);switch(console.log(`Key pressed: ${n.key}`),n.key){case"w":re.position.y+=Ye,be.target.y+=Ye;break;case"s":re.position.y-=Ye,be.target.y-=Ye;break;case"a":re.position.x-=Ye,be.target.x-=Ye;break;case"d":re.position.x+=Ye,be.target.x+=Ye;break;case"f":case"r":const s=(n.key==="f"?1:-1)*t,r=new Gn().setFromAxisAngle(i,s);e.copy(re.position).sub(be.target),e.applyQuaternion(r),re.position.copy(be.target).add(e),re.lookAt(be.target);break}be.update()}document.addEventListener("keydown",ix,!1);function yr(n,t){re.position.x+=n*Ye,re.position.y+=t*Ye,be.target.x+=n*Ye,be.target.y+=t*Ye,be.update()}document.getElementById("pan-up").addEventListener("click",()=>yr(0,1));document.getElementById("pan-down").addEventListener("click",()=>yr(0,-1));document.getElementById("pan-left").addEventListener("click",()=>yr(-1,0));document.getElementById("pan-right").addEventListener("click",()=>yr(1,0));const Sr=5e-4;function sx(n,t,e){const i=[{stop:0,color:new Yt(255)},{stop:.5,color:new Yt(65280)},{stop:1,color:new Yt(16711680)}],s=(n-t)/(e-t);let r=i[0],o=i[i.length-1];for(let l=0;l<i.length-1;l++)if(s>=i[l].stop&&s<=i[l+1].stop){r=i[l],o=i[l+1];break}return r.color.clone().lerp(o.color,(s-r.stop)/(o.stop-r.stop))}let Ea=1/0;function rx(n){const t=n.features.map(s=>s.properties.Contour),e=Math.min(...t);Ea=Math.min(Ea,e);const i=Math.max(...t);n.features.forEach((s,r)=>{const o=s.properties.Contour,a=s.geometry.coordinates,l=sx(o,e,i);let h=new Da({color:l});const u=(c,f)=>{let m=[];if(c.forEach(_=>{if(!Array.isArray(_)||_.length!==2||_.some(d=>isNaN(d))){console.error(`Feature ${r} has invalid coordinates`,_);return}const[g,p]=_;try{const[d,S]=xs(g,p),M=f*Sr;m.push(d,S,M)}catch(d){console.error(`Feature ${r} error in toStatePlane:`,d.message)}}),m.length>0){const _=new on;_.setAttribute("position",new Ve(m,3));const g=new p0(_,h);Bn.add(g)}};s.geometry.type==="LineString"?u(a,o):s.geometry.type==="MultiLineString"?a.forEach(c=>{u(c,o)}):console.error(`Unsupported geometry type: ${s.geometry.type}`)})}function ax(n,t=10){const e=new ds({color:16716947,transparent:!0,wireframe:!0,opacity:.33,side:un});for(let i=0;i<n.features.length;i+=t){const s=n.features[i];try{const r=s.geometry.coordinates[0],o=[];let a=new D(0,0,0);r.forEach(c=>{const[f,m]=xs(c[0],c[1]),_=Ea*Sr;o.push(new D(f,m,_)),a.add(new D(f,m,_))}),a.divideScalar(r.length),o.unshift(a);const l=new on,h=[];for(let c=1;c<=r.length;c++)h.push(a.x,a.y,a.z),h.push(o[c%r.length].x,o[c%r.length].y,o[c%r.length].z),h.push(o[(c+1)%r.length].x,o[(c+1)%r.length].y,o[(c+1)%r.length].z);l.setAttribute("position",new Ve(h,3)),l.computeVertexNormals();const u=new rn(l,e);Bn.add(u)}catch(r){console.error(`Error processing feature at index ${i}:`,r)}}}function ox(n){const t=new ds({color:16776960,wireframe:!0});n.features.forEach(e=>{if(e.geometry.type==="Point"){const[i,s]=e.geometry.coordinates,[r,o]=xs(i,s),a=e.properties.Elevation*Sr,l=new vr(.005,3,3),h=new rn(l,t);h.position.set(r,o,a),Bn.add(h)}})}function lx(n){const e=new ds({color:16711680,wireframe:!0,transparent:!0,opacity:.5});n.features.forEach(i=>{if(i.geometry.type==="Point"){const[s,r]=i.geometry.coordinates,o=i.properties.Elevation;try{const[a,l]=xs(s,r),h=o*Sr,u=new vr(.005,32,32),c=new rn(u,e);c.position.set(a,l,h),Bn.add(c)}catch(a){console.error("Error projecting point:",a.message)}}else console.error(`Unsupported geometry type for points: ${i.geometry.type}`)})}function hx(n){let t=1/0,e=-1/0,i=1/0,s=-1/0;const r=o=>{o.forEach(a=>{if(Array.isArray(a[0]))r(a);else{const[l,h]=a,[u,c]=xs(l,h);t=Math.min(t,u),e=Math.max(e,u),i=Math.min(i,c),s=Math.max(s,c)}})};return n.features.forEach(o=>{r(o.geometry.coordinates)}),{min:new D(t,i,-1/0),max:new D(e,s,1/0)}}function cx(n,t){n.addEventListener("change",()=>{re.position.x=Math.max(t.min.x,Math.min(t.max.x,re.position.x)),re.position.y=Math.max(t.min.y+.25,Math.min(t.max.y,re.position.y)),re.position.z=Math.max(t.min.z,Math.min(t.max.z,re.position.z)),n.target.x=Math.max(t.min.x,Math.min(t.max.x,n.target.x)),n.target.y=Math.max(t.min.y,Math.min(t.max.y,n.target.y)),n.target.z=Math.max(t.min.z,Math.min(t.max.z,n.target.z))})}function ux(n){return new D((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,0)}function fx(n){return new D(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)}new Da({color:16711680,linewidth:4});fetch("data/cont49l010a_Clip_SimplifyLin.geojson").then(n=>n.json()).then(n=>{rx(n),Ks(),fetch("data/Cellular_Tower_HIFLD_NYSclip_20231101.geojson").then(a=>a.json()).then(a=>{lx(a),console.log("adding points"),Ks()}).catch(a=>{console.error("Error loading points GeoJSON:",a)}),fetch("data/FM_contours_NYS_clip_20231101.geojson").then(a=>a.json()).then(a=>{ax(a),console.log("Polygons added"),Ks()}).catch(a=>{console.error("Error loading polygon GeoJSON:",a)}),fetch("data/FM_TransTowers_PairwiseClip_NYS_20231101.geojson").then(a=>a.json()).then(a=>{ox(a),console.log("Yellow points added"),Ks()}).catch(a=>{console.error("Error loading points GeoJSON:",a)});const t=hx(n),e=ux(t),i=fx(t),s=Math.max(i.x,i.y),r=re.fov*(Math.PI/180);let o=Math.abs(s/2/Math.tan(r/2));o*=.7,re.position.set(e.x,e.y,o),be.target.set(e.x,e.y,0),cx(be,t),be.update()}).catch(n=>{console.error("Error loading GeoJSON:",n)})});export default dx();
