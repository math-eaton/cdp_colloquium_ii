var hf=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var M1=hf(ve=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Do="158",Gn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ti={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lf=0,ch=1,cf=2,_c=1,uf=2,Fn=3,Vn=0,We=1,Bn=2,si=0,ir=1,uh=2,fh=3,dh=4,ff=5,Mi=100,df=101,pf=102,ph=103,mh=104,mf=200,gf=201,_f=202,vf=203,po=204,mo=205,yf=206,Mf=207,xf=208,Ef=209,Sf=210,bf=211,wf=212,Tf=213,Af=214,Rf=0,Cf=1,Lf=2,Ws=3,Pf=4,Df=5,Nf=6,If=7,vc=0,Uf=1,Of=2,ai=0,Ff=1,Gf=2,Bf=3,zf=4,kf=5,yc=300,hr=301,lr=302,go=303,_o=304,ra=306,vo=1e3,_n=1001,yo=1002,ke=1003,gh=1004,Ea=1005,an=1006,Hf=1007,Vr=1008,oi=1009,Vf=1010,Wf=1011,No=1012,Mc=1013,ii=1014,ri=1015,Wr=1016,xc=1017,Ec=1018,Ei=1020,$f=1021,vn=1023,Xf=1024,qf=1025,Si=1026,cr=1027,jf=1028,Sc=1029,Yf=1030,bc=1031,wc=1033,Sa=33776,ba=33777,wa=33778,Ta=33779,_h=35840,vh=35841,yh=35842,Mh=35843,Kf=36196,xh=37492,Eh=37496,Sh=37808,bh=37809,wh=37810,Th=37811,Ah=37812,Rh=37813,Ch=37814,Lh=37815,Ph=37816,Dh=37817,Nh=37818,Ih=37819,Uh=37820,Oh=37821,Aa=36492,Fh=36494,Gh=36495,Zf=36283,Bh=36284,zh=36285,kh=36286,Tc=3e3,bi=3001,Jf=3200,Qf=3201,td=0,ed=1,ln="",Re="srgb",Wn="srgb-linear",Io="display-p3",sa="display-p3-linear",$s="linear",oe="srgb",Xs="rec709",qs="p3",Li=7680,Hh=519,nd=512,id=513,rd=514,sd=515,ad=516,od=517,hd=518,ld=519,Mo=35044,Vh="300 es",xo=1035,zn=2e3,js=2001;class Ci{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wh=1234567;const Fr=Math.PI/180,$r=180/Math.PI;function kn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pe[n&255]+Pe[n>>8&255]+Pe[n>>16&255]+Pe[n>>24&255]+"-"+Pe[t&255]+Pe[t>>8&255]+"-"+Pe[t>>16&15|64]+Pe[t>>24&255]+"-"+Pe[e&63|128]+Pe[e>>8&255]+"-"+Pe[e>>16&255]+Pe[e>>24&255]+Pe[i&255]+Pe[i>>8&255]+Pe[i>>16&255]+Pe[i>>24&255]).toLowerCase()}function Ie(n,t,e){return Math.max(t,Math.min(e,n))}function Uo(n,t){return(n%t+t)%t}function cd(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function ud(n,t,e){return n!==t?(e-n)/(t-n):0}function Gr(n,t,e){return(1-e)*n+e*t}function fd(n,t,e,i){return Gr(n,t,1-Math.exp(-e*i))}function dd(n,t=1){return t-Math.abs(Uo(n,t*2)-t)}function pd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function md(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function gd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function _d(n,t){return n+Math.random()*(t-n)}function vd(n){return n*(.5-Math.random())}function yd(n){n!==void 0&&(Wh=n);let t=Wh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Md(n){return n*Fr}function xd(n){return n*$r}function Eo(n){return(n&n-1)===0&&n!==0}function Ed(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Ys(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Sd(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),h=o(e/2),l=s((t+i)/2),c=o((t+i)/2),u=s((t-i)/2),f=o((t-i)/2),m=s((i-t)/2),_=o((i-t)/2);switch(r){case"XYX":n.set(a*c,h*u,h*f,a*l);break;case"YZY":n.set(h*f,a*c,h*u,a*l);break;case"ZXZ":n.set(h*u,h*f,a*c,a*l);break;case"XZX":n.set(a*c,h*_,h*m,a*l);break;case"YXY":n.set(h*m,a*c,h*_,a*l);break;case"ZYZ":n.set(h*_,h*m,a*c,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Tn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function te(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const bd={DEG2RAD:Fr,RAD2DEG:$r,generateUUID:kn,clamp:Ie,euclideanModulo:Uo,mapLinear:cd,inverseLerp:ud,lerp:Gr,damp:fd,pingpong:dd,smoothstep:pd,smootherstep:md,randInt:gd,randFloat:_d,randFloatSpread:vd,seededRandom:yd,degToRad:Md,radToDeg:xd,isPowerOfTwo:Eo,ceilPowerOfTwo:Ed,floorPowerOfTwo:Ys,setQuaternionFromProperEuler:Sd,normalize:te,denormalize:Tn};class At{constructor(t=0,e=0){At.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Wt{constructor(t,e,i,r,s,o,a,h,l){Wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,h,l)}set(t,e,i,r,s,o,a,h,l){const c=this.elements;return c[0]=t,c[1]=r,c[2]=a,c[3]=e,c[4]=s,c[5]=h,c[6]=i,c[7]=o,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],h=i[6],l=i[1],c=i[4],u=i[7],f=i[2],m=i[5],_=i[8],y=r[0],p=r[3],d=r[6],b=r[1],g=r[4],v=r[7],x=r[2],R=r[5],T=r[8];return s[0]=o*y+a*b+h*x,s[3]=o*p+a*g+h*R,s[6]=o*d+a*v+h*T,s[1]=l*y+c*b+u*x,s[4]=l*p+c*g+u*R,s[7]=l*d+c*v+u*T,s[2]=f*y+m*b+_*x,s[5]=f*p+m*g+_*R,s[8]=f*d+m*v+_*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8];return e*o*c-e*a*l-i*s*c+i*a*h+r*s*l-r*o*h}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=c*o-a*l,f=a*h-c*s,m=l*s-o*h,_=e*u+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return t[0]=u*y,t[1]=(r*l-c*i)*y,t[2]=(a*i-r*o)*y,t[3]=f*y,t[4]=(c*e-r*h)*y,t[5]=(r*s-a*e)*y,t[6]=m*y,t[7]=(i*h-l*e)*y,t[8]=(o*e-i*s)*y,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const h=Math.cos(s),l=Math.sin(s);return this.set(i*h,i*l,-i*(h*o+l*a)+o+t,-r*l,r*h,-r*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ra.makeScale(t,e)),this}rotate(t){return this.premultiply(Ra.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ra.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ra=new Wt;function Ac(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Ks(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function wd(){const n=Ks("canvas");return n.style.display="block",n}const $h={};function Br(n){n in $h||($h[n]=!0,console.warn(n))}const Xh=new Wt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),qh=new Wt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),os={[Wn]:{transfer:$s,primaries:Xs,toReference:n=>n,fromReference:n=>n},[Re]:{transfer:oe,primaries:Xs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[sa]:{transfer:$s,primaries:qs,toReference:n=>n.applyMatrix3(qh),fromReference:n=>n.applyMatrix3(Xh)},[Io]:{transfer:oe,primaries:qs,toReference:n=>n.convertSRGBToLinear().applyMatrix3(qh),fromReference:n=>n.applyMatrix3(Xh).convertLinearToSRGB()}},Td=new Set([Wn,sa]),ee={enabled:!0,_workingColorSpace:Wn,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Td.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=os[t].toReference,r=os[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return os[n].primaries},getTransfer:function(n){return n===ln?$s:os[n].transfer}};function rr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ca(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Pi;class Rc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Pi===void 0&&(Pi=Ks("canvas")),Pi.width=t.width,Pi.height=t.height;const i=Pi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ks("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=rr(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(rr(e[i]/255)*255):e[i]=rr(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ad=0;class Cc{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=kn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(La(r[o].image)):s.push(La(r[o]))}else s=La(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function La(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Rc.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rd=0;class $e extends Ci{constructor(t=$e.DEFAULT_IMAGE,e=$e.DEFAULT_MAPPING,i=_n,r=_n,s=an,o=Vr,a=vn,h=oi,l=$e.DEFAULT_ANISOTROPY,c=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=kn(),this.name="",this.source=new Cc(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new At(0,0),this.repeat=new At(1,1),this.center=new At(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===bi?Re:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vo:t.x=t.x-Math.floor(t.x);break;case _n:t.x=t.x<0?0:1;break;case yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vo:t.y=t.y-Math.floor(t.y);break;case _n:t.y=t.y<0?0:1;break;case yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Re?bi:Tc}set encoding(t){Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===bi?Re:ln}}$e.DEFAULT_IMAGE=null;$e.DEFAULT_MAPPING=yc;$e.DEFAULT_ANISOTROPY=1;class Te{constructor(t=0,e=0,i=0,r=1){Te.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const h=t.elements,l=h[0],c=h[4],u=h[8],f=h[1],m=h[5],_=h[9],y=h[2],p=h[6],d=h[10];if(Math.abs(c-f)<.01&&Math.abs(u-y)<.01&&Math.abs(_-p)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+y)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const g=(l+1)/2,v=(m+1)/2,x=(d+1)/2,R=(c+f)/4,T=(u+y)/4,A=(_+p)/4;return g>v&&g>x?g<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(g),r=R/i,s=T/i):v>x?v<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),i=R/r,s=A/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=T/s,r=A/s),this.set(i,r,s,e),this}let b=Math.sqrt((p-_)*(p-_)+(u-y)*(u-y)+(f-c)*(f-c));return Math.abs(b)<.001&&(b=1),this.x=(p-_)/b,this.y=(u-y)/b,this.z=(f-c)/b,this.w=Math.acos((l+m+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cd extends Ci{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Te(0,0,t,e),this.scissorTest=!1,this.viewport=new Te(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(Br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===bi?Re:ln),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new $e(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Cc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class wi extends Cd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Lc extends $e{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ld extends $e{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=ke,this.minFilter=ke,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $n{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let h=i[r+0],l=i[r+1],c=i[r+2],u=i[r+3];const f=s[o+0],m=s[o+1],_=s[o+2],y=s[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=m,t[e+2]=_,t[e+3]=y;return}if(u!==y||h!==f||l!==m||c!==_){let p=1-a;const d=h*f+l*m+c*_+u*y,b=d>=0?1:-1,g=1-d*d;if(g>Number.EPSILON){const x=Math.sqrt(g),R=Math.atan2(x,d*b);p=Math.sin(p*R)/x,a=Math.sin(a*R)/x}const v=a*b;if(h=h*p+f*v,l=l*p+m*v,c=c*p+_*v,u=u*p+y*v,p===1-a){const x=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=x,l*=x,c*=x,u*=x}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],h=i[r+1],l=i[r+2],c=i[r+3],u=s[o],f=s[o+1],m=s[o+2],_=s[o+3];return t[e]=a*_+c*u+h*m-l*f,t[e+1]=h*_+c*f+l*u-a*m,t[e+2]=l*_+c*m+a*f-h*u,t[e+3]=c*_-a*u-h*f-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(i/2),c=a(r/2),u=a(s/2),f=h(i/2),m=h(r/2),_=h(s/2);switch(o){case"XYZ":this._x=f*c*u+l*m*_,this._y=l*m*u-f*c*_,this._z=l*c*_+f*m*u,this._w=l*c*u-f*m*_;break;case"YXZ":this._x=f*c*u+l*m*_,this._y=l*m*u-f*c*_,this._z=l*c*_-f*m*u,this._w=l*c*u+f*m*_;break;case"ZXY":this._x=f*c*u-l*m*_,this._y=l*m*u+f*c*_,this._z=l*c*_+f*m*u,this._w=l*c*u-f*m*_;break;case"ZYX":this._x=f*c*u-l*m*_,this._y=l*m*u+f*c*_,this._z=l*c*_-f*m*u,this._w=l*c*u+f*m*_;break;case"YZX":this._x=f*c*u+l*m*_,this._y=l*m*u+f*c*_,this._z=l*c*_-f*m*u,this._w=l*c*u-f*m*_;break;case"XZY":this._x=f*c*u-l*m*_,this._y=l*m*u-f*c*_,this._z=l*c*_+f*m*u,this._w=l*c*u+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],h=e[9],l=e[2],c=e[6],u=e[10],f=i+a+u;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(c-h)*m,this._y=(s-l)*m,this._z=(o-r)*m}else if(i>a&&i>u){const m=2*Math.sqrt(1+i-a-u);this._w=(c-h)/m,this._x=.25*m,this._y=(r+o)/m,this._z=(s+l)/m}else if(a>u){const m=2*Math.sqrt(1+a-i-u);this._w=(s-l)/m,this._x=(r+o)/m,this._y=.25*m,this._z=(h+c)/m}else{const m=2*Math.sqrt(1+u-i-a);this._w=(o-r)/m,this._x=(s+l)/m,this._y=(h+c)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ie(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,h=e._y,l=e._z,c=e._w;return this._x=i*c+o*a+r*l-s*h,this._y=r*c+o*h+s*a-i*l,this._z=s*c+o*l+i*h-r*a,this._w=o*c-i*a-r*h-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const h=1-a*a;if(h<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(h),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,f=Math.sin(e*c)/l;return this._w=o*u+this._w*f,this._x=i*u+this._x*f,this._y=r*u+this._y*f,this._z=s*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,i=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*r-a*i),c=2*(a*e-s*r),u=2*(s*i-o*e);return this.x=e+h*l+o*u-a*c,this.y=i+h*c+a*l-s*u,this.z=r+h*u+s*c-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,h=e.z;return this.x=r*h-s*a,this.y=s*o-i*h,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Pa.copy(this).projectOnVector(t),this.sub(Pa)}reflect(t){return this.sub(Pa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ie(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Pa=new U,jh=new $n;class Kr{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,dn):dn.fromBufferAttribute(s,o),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),hs.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),hs.copy(i.boundingBox)),hs.applyMatrix4(t.matrixWorld),this.union(hs)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mr),ls.subVectors(this.max,Mr),Di.subVectors(t.a,Mr),Ni.subVectors(t.b,Mr),Ii.subVectors(t.c,Mr),jn.subVectors(Ni,Di),Yn.subVectors(Ii,Ni),di.subVectors(Di,Ii);let e=[0,-jn.z,jn.y,0,-Yn.z,Yn.y,0,-di.z,di.y,jn.z,0,-jn.x,Yn.z,0,-Yn.x,di.z,0,-di.x,-jn.y,jn.x,0,-Yn.y,Yn.x,0,-di.y,di.x,0];return!Da(e,Di,Ni,Ii,ls)||(e=[1,0,0,0,1,0,0,0,1],!Da(e,Di,Ni,Ii,ls))?!1:(cs.crossVectors(jn,Yn),e=[cs.x,cs.y,cs.z],Da(e,Di,Ni,Ii,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Dn=[new U,new U,new U,new U,new U,new U,new U,new U],dn=new U,hs=new Kr,Di=new U,Ni=new U,Ii=new U,jn=new U,Yn=new U,di=new U,Mr=new U,ls=new U,cs=new U,pi=new U;function Da(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){pi.fromArray(n,s);const a=r.x*Math.abs(pi.x)+r.y*Math.abs(pi.y)+r.z*Math.abs(pi.z),h=t.dot(pi),l=e.dot(pi),c=i.dot(pi);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>a)return!1}return!0}const Pd=new Kr,xr=new U,Na=new U;class aa{constructor(t=new U,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Pd.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;xr.subVectors(t,this.center);const e=xr.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(xr,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Na.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(xr.copy(t.center).add(Na)),this.expandByPoint(xr.copy(t.center).sub(Na))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Nn=new U,Ia=new U,us=new U,Kn=new U,Ua=new U,fs=new U,Oa=new U;class oa{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Nn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Nn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Nn.copy(this.origin).addScaledVector(this.direction,e),Nn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){Ia.copy(t).add(e).multiplyScalar(.5),us.copy(e).sub(t).normalize(),Kn.copy(this.origin).sub(Ia);const s=t.distanceTo(e)*.5,o=-this.direction.dot(us),a=Kn.dot(this.direction),h=-Kn.dot(us),l=Kn.lengthSq(),c=Math.abs(1-o*o);let u,f,m,_;if(c>0)if(u=o*h-a,f=o*a-h,_=s*c,u>=0)if(f>=-_)if(f<=_){const y=1/c;u*=y,f*=y,m=u*(u+o*f+2*a)+f*(o*u+f+2*h)+l}else f=s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*h)+l;else f=-s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*h)+l;else f<=-_?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-h),s),m=-u*u+f*(f+2*h)+l):f<=_?(u=0,f=Math.min(Math.max(-s,-h),s),m=f*(f+2*h)+l):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-h),s),m=-u*u+f*(f+2*h)+l);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),m=-u*u+f*(f+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(Ia).addScaledVector(us,f),m}intersectSphere(t,e){Nn.subVectors(t.center,this.origin);const i=Nn.dot(this.direction),r=Nn.dot(Nn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,h=i+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,h;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),c>=0?(s=(t.min.y-f.y)*c,o=(t.max.y-f.y)*c):(s=(t.max.y-f.y)*c,o=(t.min.y-f.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),i>h||a>r)||((a>i||i!==i)&&(i=a),(h<r||r!==r)&&(r=h),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Nn)!==null}intersectTriangle(t,e,i,r,s){Ua.subVectors(e,t),fs.subVectors(i,t),Oa.crossVectors(Ua,fs);let o=this.direction.dot(Oa),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Kn.subVectors(this.origin,t);const h=a*this.direction.dot(fs.crossVectors(Kn,fs));if(h<0)return null;const l=a*this.direction.dot(Ua.cross(Kn));if(l<0||h+l>o)return null;const c=-a*Kn.dot(Oa);return c<0?null:this.at(c/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class de{constructor(t,e,i,r,s,o,a,h,l,c,u,f,m,_,y,p){de.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,h,l,c,u,f,m,_,y,p)}set(t,e,i,r,s,o,a,h,l,c,u,f,m,_,y,p){const d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=h,d[2]=l,d[6]=c,d[10]=u,d[14]=f,d[3]=m,d[7]=_,d[11]=y,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new de().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Ui.setFromMatrixColumn(t,0).length(),s=1/Ui.setFromMatrixColumn(t,1).length(),o=1/Ui.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(r),l=Math.sin(r),c=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const f=o*c,m=o*u,_=a*c,y=a*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=m+_*l,e[5]=f-y*l,e[9]=-a*h,e[2]=y-f*l,e[6]=_+m*l,e[10]=o*h}else if(t.order==="YXZ"){const f=h*c,m=h*u,_=l*c,y=l*u;e[0]=f+y*a,e[4]=_*a-m,e[8]=o*l,e[1]=o*u,e[5]=o*c,e[9]=-a,e[2]=m*a-_,e[6]=y+f*a,e[10]=o*h}else if(t.order==="ZXY"){const f=h*c,m=h*u,_=l*c,y=l*u;e[0]=f-y*a,e[4]=-o*u,e[8]=_+m*a,e[1]=m+_*a,e[5]=o*c,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const f=o*c,m=o*u,_=a*c,y=a*u;e[0]=h*c,e[4]=_*l-m,e[8]=f*l+y,e[1]=h*u,e[5]=y*l+f,e[9]=m*l-_,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const f=o*h,m=o*l,_=a*h,y=a*l;e[0]=h*c,e[4]=y-f*u,e[8]=_*u+m,e[1]=u,e[5]=o*c,e[9]=-a*c,e[2]=-l*c,e[6]=m*u+_,e[10]=f-y*u}else if(t.order==="XZY"){const f=o*h,m=o*l,_=a*h,y=a*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=f*u+y,e[5]=o*c,e[9]=m*u-_,e[2]=_*u-m,e[6]=a*c,e[10]=y*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dd,t,Nd)}lookAt(t,e,i){const r=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),Zn.crossVectors(i,Ze),Zn.lengthSq()===0&&(Math.abs(i.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),Zn.crossVectors(i,Ze)),Zn.normalize(),ds.crossVectors(Ze,Zn),r[0]=Zn.x,r[4]=ds.x,r[8]=Ze.x,r[1]=Zn.y,r[5]=ds.y,r[9]=Ze.y,r[2]=Zn.z,r[6]=ds.z,r[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],h=i[8],l=i[12],c=i[1],u=i[5],f=i[9],m=i[13],_=i[2],y=i[6],p=i[10],d=i[14],b=i[3],g=i[7],v=i[11],x=i[15],R=r[0],T=r[4],A=r[8],M=r[12],E=r[1],L=r[5],D=r[9],j=r[13],N=r[2],z=r[6],q=r[10],$=r[14],et=r[3],Z=r[7],K=r[11],O=r[15];return s[0]=o*R+a*E+h*N+l*et,s[4]=o*T+a*L+h*z+l*Z,s[8]=o*A+a*D+h*q+l*K,s[12]=o*M+a*j+h*$+l*O,s[1]=c*R+u*E+f*N+m*et,s[5]=c*T+u*L+f*z+m*Z,s[9]=c*A+u*D+f*q+m*K,s[13]=c*M+u*j+f*$+m*O,s[2]=_*R+y*E+p*N+d*et,s[6]=_*T+y*L+p*z+d*Z,s[10]=_*A+y*D+p*q+d*K,s[14]=_*M+y*j+p*$+d*O,s[3]=b*R+g*E+v*N+x*et,s[7]=b*T+g*L+v*z+x*Z,s[11]=b*A+g*D+v*q+x*K,s[15]=b*M+g*j+v*$+x*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],h=t[9],l=t[13],c=t[2],u=t[6],f=t[10],m=t[14],_=t[3],y=t[7],p=t[11],d=t[15];return _*(+s*h*u-r*l*u-s*a*f+i*l*f+r*a*m-i*h*m)+y*(+e*h*m-e*l*f+s*o*f-r*o*m+r*l*c-s*h*c)+p*(+e*l*u-e*a*m-s*o*u+i*o*m+s*a*c-i*l*c)+d*(-r*a*c-e*h*u+e*a*f+r*o*u-i*o*f+i*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],c=t[8],u=t[9],f=t[10],m=t[11],_=t[12],y=t[13],p=t[14],d=t[15],b=u*p*l-y*f*l+y*h*m-a*p*m-u*h*d+a*f*d,g=_*f*l-c*p*l-_*h*m+o*p*m+c*h*d-o*f*d,v=c*y*l-_*u*l+_*a*m-o*y*m-c*a*d+o*u*d,x=_*u*h-c*y*h-_*a*f+o*y*f+c*a*p-o*u*p,R=e*b+i*g+r*v+s*x;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/R;return t[0]=b*T,t[1]=(y*f*s-u*p*s-y*r*m+i*p*m+u*r*d-i*f*d)*T,t[2]=(a*p*s-y*h*s+y*r*l-i*p*l-a*r*d+i*h*d)*T,t[3]=(u*h*s-a*f*s-u*r*l+i*f*l+a*r*m-i*h*m)*T,t[4]=g*T,t[5]=(c*p*s-_*f*s+_*r*m-e*p*m-c*r*d+e*f*d)*T,t[6]=(_*h*s-o*p*s-_*r*l+e*p*l+o*r*d-e*h*d)*T,t[7]=(o*f*s-c*h*s+c*r*l-e*f*l-o*r*m+e*h*m)*T,t[8]=v*T,t[9]=(_*u*s-c*y*s-_*i*m+e*y*m+c*i*d-e*u*d)*T,t[10]=(o*y*s-_*a*s+_*i*l-e*y*l-o*i*d+e*a*d)*T,t[11]=(c*a*s-o*u*s-c*i*l+e*u*l+o*i*m-e*a*m)*T,t[12]=x*T,t[13]=(c*y*r-_*u*r+_*i*f-e*y*f-c*i*p+e*u*p)*T,t[14]=(_*a*r-o*y*r-_*i*h+e*y*h+o*i*p-e*a*p)*T,t[15]=(o*u*r-c*a*r+c*i*h-e*u*h-o*i*f+e*a*f)*T,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,h=t.z,l=s*o,c=s*a;return this.set(l*o+i,l*a-r*h,l*h+r*a,0,l*a+r*h,c*a+i,c*h-r*o,0,l*h-r*a,c*h+r*o,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,h=e._w,l=s+s,c=o+o,u=a+a,f=s*l,m=s*c,_=s*u,y=o*c,p=o*u,d=a*u,b=h*l,g=h*c,v=h*u,x=i.x,R=i.y,T=i.z;return r[0]=(1-(y+d))*x,r[1]=(m+v)*x,r[2]=(_-g)*x,r[3]=0,r[4]=(m-v)*R,r[5]=(1-(f+d))*R,r[6]=(p+b)*R,r[7]=0,r[8]=(_+g)*T,r[9]=(p-b)*T,r[10]=(1-(f+y))*T,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Ui.set(r[0],r[1],r[2]).length();const o=Ui.set(r[4],r[5],r[6]).length(),a=Ui.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],pn.copy(this);const l=1/s,c=1/o,u=1/a;return pn.elements[0]*=l,pn.elements[1]*=l,pn.elements[2]*=l,pn.elements[4]*=c,pn.elements[5]*=c,pn.elements[6]*=c,pn.elements[8]*=u,pn.elements[9]*=u,pn.elements[10]*=u,e.setFromRotationMatrix(pn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=zn){const h=this.elements,l=2*s/(e-t),c=2*s/(i-r),u=(e+t)/(e-t),f=(i+r)/(i-r);let m,_;if(a===zn)m=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===js)m=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=c,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=m,h[14]=_,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=zn){const h=this.elements,l=1/(e-t),c=1/(i-r),u=1/(o-s),f=(e+t)*l,m=(i+r)*c;let _,y;if(a===zn)_=(o+s)*u,y=-2*u;else if(a===js)_=s*u,y=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=2*l,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-m,h[2]=0,h[6]=0,h[10]=y,h[14]=-_,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Ui=new U,pn=new de,Dd=new U(0,0,0),Nd=new U(1,1,1),Zn=new U,ds=new U,Ze=new U,Yh=new de,Kh=new $n;class ha{constructor(t=0,e=0,i=0,r=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],h=r[1],l=r[5],c=r[9],u=r[2],f=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Ie(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,m),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ie(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ie(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Ie(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ie(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Ie(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Yh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Yh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Kh.setFromEuler(this),this.setFromQuaternion(Kh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class Oo{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Id=0;const Zh=new U,Oi=new $n,In=new de,ps=new U,Er=new U,Ud=new U,Od=new $n,Jh=new U(1,0,0),Qh=new U(0,1,0),tl=new U(0,0,1),Fd={type:"added"},Gd={type:"removed"};class Me extends Ci{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Id++}),this.uuid=kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new U,e=new ha,i=new $n,r=new U(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new de},normalMatrix:{value:new Wt}}),this.matrix=new de,this.matrixWorld=new de,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Oo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Jh,t)}rotateY(t){return this.rotateOnAxis(Qh,t)}rotateZ(t){return this.rotateOnAxis(tl,t)}translateOnAxis(t,e){return Zh.copy(t).applyQuaternion(this.quaternion),this.position.add(Zh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jh,t)}translateY(t){return this.translateOnAxis(Qh,t)}translateZ(t){return this.translateOnAxis(tl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?ps.copy(t):ps.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Er.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(Er,ps,this.up):In.lookAt(ps,Er,this.up),this.quaternion.setFromRotationMatrix(In),r&&(In.extractRotation(r.matrixWorld),Oi.setFromRotationMatrix(In),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Fd)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Gd)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),In.multiply(t.parent.matrixWorld)),t.applyMatrix4(In),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(t,e);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,t,Ud),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Er,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const u=h[l];s(t.shapes,u)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(s(t.materials,this.material[h]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];r.animations.push(s(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),l=o(t.textures),c=o(t.images),u=o(t.shapes),f=o(t.skeletons),m=o(t.animations),_=o(t.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),c.length>0&&(i.images=c),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const h=[];for(const l in a){const c=a[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}Me.DEFAULT_UP=new U(0,1,0);Me.DEFAULT_MATRIX_AUTO_UPDATE=!0;Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new U,Un=new U,Fa=new U,On=new U,Fi=new U,Gi=new U,el=new U,Ga=new U,Ba=new U,za=new U;let ms=!1;class on{constructor(t=new U,e=new U,i=new U){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),mn.subVectors(t,e),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){mn.subVectors(r,e),Un.subVectors(i,e),Fa.subVectors(t,e);const o=mn.dot(mn),a=mn.dot(Un),h=mn.dot(Fa),l=Un.dot(Un),c=Un.dot(Fa),u=o*l-a*a;if(u===0)return s.set(-2,-1,-1);const f=1/u,m=(l*h-a*c)*f,_=(o*c-a*h)*f;return s.set(1-m-_,_,m)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,On),On.x>=0&&On.y>=0&&On.x+On.y<=1}static getUV(t,e,i,r,s,o,a,h){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),this.getInterpolation(t,e,i,r,s,o,a,h)}static getInterpolation(t,e,i,r,s,o,a,h){return this.getBarycoord(t,e,i,r,On),h.setScalar(0),h.addScaledVector(s,On.x),h.addScaledVector(o,On.y),h.addScaledVector(a,On.z),h}static isFrontFacing(t,e,i,r){return mn.subVectors(i,e),Un.subVectors(t,e),mn.cross(Un).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return on.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return on.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return ms===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),ms=!0),on.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return on.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return on.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return on.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Fi.subVectors(r,i),Gi.subVectors(s,i),Ga.subVectors(t,i);const h=Fi.dot(Ga),l=Gi.dot(Ga);if(h<=0&&l<=0)return e.copy(i);Ba.subVectors(t,r);const c=Fi.dot(Ba),u=Gi.dot(Ba);if(c>=0&&u<=c)return e.copy(r);const f=h*u-c*l;if(f<=0&&h>=0&&c<=0)return o=h/(h-c),e.copy(i).addScaledVector(Fi,o);za.subVectors(t,s);const m=Fi.dot(za),_=Gi.dot(za);if(_>=0&&m<=_)return e.copy(s);const y=m*l-h*_;if(y<=0&&l>=0&&_<=0)return a=l/(l-_),e.copy(i).addScaledVector(Gi,a);const p=c*_-m*u;if(p<=0&&u-c>=0&&m-_>=0)return el.subVectors(s,r),a=(u-c)/(u-c+(m-_)),e.copy(r).addScaledVector(el,a);const d=1/(p+y+f);return o=y*d,a=f*d,e.copy(i).addScaledVector(Fi,o).addScaledVector(Gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Pc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Jn={h:0,s:0,l:0},gs={h:0,s:0,l:0};function ka(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Kt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Re){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ee.workingColorSpace){return this.r=t,this.g=e,this.b=i,ee.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ee.workingColorSpace){if(t=Uo(t,1),e=Ie(e,0,1),i=Ie(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=ka(o,s,t+1/3),this.g=ka(o,s,t),this.b=ka(o,s,t-1/3)}return ee.toWorkingColorSpace(this,r),this}setStyle(t,e=Re){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Re){const i=Pc[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}copyLinearToSRGB(t){return this.r=Ca(t.r),this.g=Ca(t.g),this.b=Ca(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Re){return ee.fromWorkingColorSpace(De.copy(this),t),Math.round(Ie(De.r*255,0,255))*65536+Math.round(Ie(De.g*255,0,255))*256+Math.round(Ie(De.b*255,0,255))}getHexString(t=Re){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(De.copy(this),e);const i=De.r,r=De.g,s=De.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let h,l;const c=(a+o)/2;if(a===o)h=0,l=0;else{const u=o-a;switch(l=c<=.5?u/(o+a):u/(2-o-a),o){case i:h=(r-s)/u+(r<s?6:0);break;case r:h=(s-i)/u+2;break;case s:h=(i-r)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Re){ee.fromWorkingColorSpace(De.copy(this),t);const e=De.r,i=De.g,r=De.b;return t!==Re?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(Jn),this.setHSL(Jn.h+t,Jn.s+e,Jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Jn),t.getHSL(gs);const i=Gr(Jn.h,gs.h,e),r=Gr(Jn.s,gs.s,e),s=Gr(Jn.l,gs.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Kt;Kt.NAMES=Pc;let Bd=0;class pr extends Ci{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=kn(),this.name="",this.type="Material",this.blending=ir,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=po,this.blendDst=mo,this.blendEquation=Mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Ws,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ir&&(i.blending=this.blending),this.side!==Vn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==po&&(i.blendSrc=this.blendSrc),this.blendDst!==mo&&(i.blendDst=this.blendDst),this.blendEquation!==Mi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ws&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const h=s[a];delete h.metadata,o.push(h)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Zr extends pr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=vc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new U,_s=new At;class cn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mo,this.updateRange={offset:0,count:-1},this.gpuType=ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)_s.fromBufferAttribute(this,e),_s.applyMatrix3(t),this.setXY(e,_s.x,_s.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Tn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=te(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Tn(e,this.array)),e}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Tn(e,this.array)),e}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Tn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Tn(e,this.array)),e}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),r=te(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=te(e,this.array),i=te(i,this.array),r=te(r,this.array),s=te(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class Dc extends cn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Nc extends cn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class tn extends cn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let zd=0;const nn=new de,Ha=new Me,Bi=new U,Je=new Kr,Sr=new Kr,we=new U;class qe extends Ci{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=kn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ac(t)?Nc:Dc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Wt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return nn.makeRotationFromQuaternion(t),this.applyMatrix4(nn),this}rotateX(t){return nn.makeRotationX(t),this.applyMatrix4(nn),this}rotateY(t){return nn.makeRotationY(t),this.applyMatrix4(nn),this}rotateZ(t){return nn.makeRotationZ(t),this.applyMatrix4(nn),this}translate(t,e,i){return nn.makeTranslation(t,e,i),this.applyMatrix4(nn),this}scale(t,e,i){return nn.makeScale(t,e,i),this.applyMatrix4(nn),this}lookAt(t){return Ha.lookAt(t),Ha.updateMatrix(),this.applyMatrix4(Ha.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Bi).negate(),this.translate(Bi.x,Bi.y,Bi.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new tn(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new aa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(t){const i=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Sr.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Je.min,Sr.min),Je.expandByPoint(we),we.addVectors(Je.max,Sr.max),Je.expandByPoint(we)):(Je.expandByPoint(Sr.min),Je.expandByPoint(Sr.max))}Je.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)we.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(we));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],h=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)we.fromBufferAttribute(a,l),h&&(Bi.fromBufferAttribute(t,l),we.add(Bi)),r=Math.max(r,i.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cn(new Float32Array(4*a),4));const h=this.getAttribute("tangent").array,l=[],c=[];for(let E=0;E<a;E++)l[E]=new U,c[E]=new U;const u=new U,f=new U,m=new U,_=new At,y=new At,p=new At,d=new U,b=new U;function g(E,L,D){u.fromArray(r,E*3),f.fromArray(r,L*3),m.fromArray(r,D*3),_.fromArray(o,E*2),y.fromArray(o,L*2),p.fromArray(o,D*2),f.sub(u),m.sub(u),y.sub(_),p.sub(_);const j=1/(y.x*p.y-p.x*y.y);isFinite(j)&&(d.copy(f).multiplyScalar(p.y).addScaledVector(m,-y.y).multiplyScalar(j),b.copy(m).multiplyScalar(y.x).addScaledVector(f,-p.x).multiplyScalar(j),l[E].add(d),l[L].add(d),l[D].add(d),c[E].add(b),c[L].add(b),c[D].add(b))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let E=0,L=v.length;E<L;++E){const D=v[E],j=D.start,N=D.count;for(let z=j,q=j+N;z<q;z+=3)g(i[z+0],i[z+1],i[z+2])}const x=new U,R=new U,T=new U,A=new U;function M(E){T.fromArray(s,E*3),A.copy(T);const L=l[E];x.copy(L),x.sub(T.multiplyScalar(T.dot(L))).normalize(),R.crossVectors(A,L);const j=R.dot(c[E])<0?-1:1;h[E*4]=x.x,h[E*4+1]=x.y,h[E*4+2]=x.z,h[E*4+3]=j}for(let E=0,L=v.length;E<L;++E){const D=v[E],j=D.start,N=D.count;for(let z=j,q=j+N;z<q;z+=3)M(i[z+0]),M(i[z+1]),M(i[z+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,o=new U,a=new U,h=new U,l=new U,c=new U,u=new U;if(t)for(let f=0,m=t.count;f<m;f+=3){const _=t.getX(f+0),y=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,y),o.fromBufferAttribute(e,p),c.subVectors(o,s),u.subVectors(r,s),c.cross(u),a.fromBufferAttribute(i,_),h.fromBufferAttribute(i,y),l.fromBufferAttribute(i,p),a.add(c),h.add(c),l.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,h.x,h.y,h.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,m=e.count;f<m;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),c.subVectors(o,s),u.subVectors(r,s),c.cross(u),i.setXYZ(f+0,c.x,c.y,c.z),i.setXYZ(f+1,c.x,c.y,c.z),i.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,h){const l=a.array,c=a.itemSize,u=a.normalized,f=new l.constructor(h.length*c);let m=0,_=0;for(let y=0,p=h.length;y<p;y++){a.isInterleavedBufferAttribute?m=h[y]*a.data.stride+a.offset:m=h[y]*c;for(let d=0;d<c;d++)f[_++]=l[m++]}return new cn(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,r=this.attributes;for(const a in r){const h=r[a],l=t(h,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const h=[],l=s[a];for(let c=0,u=l.length;c<u;c++){const f=l[c],m=t(f,i);h.push(m)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const l=i[h];t.data.attributes[h]=l.toJSON(t.data)}const r={};let s=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let u=0,f=l.length;u<f;u++){const m=l[u];c.push(m.toJSON(t.data))}c.length>0&&(r[h]=c,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const c=r[l];this.setAttribute(l,c.clone(e))}const s=t.morphAttributes;for(const l in s){const c=[],u=s[l];for(let f=0,m=u.length;f<m;f++)c.push(u[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,c=o.length;l<c;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nl=new de,mi=new oa,vs=new aa,il=new U,zi=new U,ki=new U,Hi=new U,Va=new U,ys=new U,Ms=new At,xs=new At,Es=new At,rl=new U,sl=new U,al=new U,Ss=new U,bs=new U;class Mn extends Me{constructor(t=new qe,e=new Zr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ys.set(0,0,0);for(let h=0,l=s.length;h<l;h++){const c=a[h],u=s[h];c!==0&&(Va.fromBufferAttribute(u,t),o?ys.addScaledVector(Va,c):ys.addScaledVector(Va.sub(e),c))}e.add(ys)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),vs.copy(i.boundingSphere),vs.applyMatrix4(s),mi.copy(t.ray).recast(t.near),!(vs.containsPoint(mi.origin)===!1&&(mi.intersectSphere(vs,il)===null||mi.origin.distanceToSquared(il)>(t.far-t.near)**2))&&(nl.copy(s).invert(),mi.copy(t.ray).applyMatrix4(nl),!(i.boundingBox!==null&&mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,mi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,h=s.attributes.position,l=s.attributes.uv,c=s.attributes.uv1,u=s.attributes.normal,f=s.groups,m=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const p=f[_],d=o[p.materialIndex],b=Math.max(p.start,m.start),g=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let v=b,x=g;v<x;v+=3){const R=a.getX(v),T=a.getX(v+1),A=a.getX(v+2);r=ws(this,d,t,i,l,c,u,R,T,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(a.count,m.start+m.count);for(let p=_,d=y;p<d;p+=3){const b=a.getX(p),g=a.getX(p+1),v=a.getX(p+2);r=ws(this,o,t,i,l,c,u,b,g,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let _=0,y=f.length;_<y;_++){const p=f[_],d=o[p.materialIndex],b=Math.max(p.start,m.start),g=Math.min(h.count,Math.min(p.start+p.count,m.start+m.count));for(let v=b,x=g;v<x;v+=3){const R=v,T=v+1,A=v+2;r=ws(this,d,t,i,l,c,u,R,T,A),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const _=Math.max(0,m.start),y=Math.min(h.count,m.start+m.count);for(let p=_,d=y;p<d;p+=3){const b=p,g=p+1,v=p+2;r=ws(this,o,t,i,l,c,u,b,g,v),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function kd(n,t,e,i,r,s,o,a){let h;if(t.side===We?h=i.intersectTriangle(o,s,r,!0,a):h=i.intersectTriangle(r,s,o,t.side===Vn,a),h===null)return null;bs.copy(a),bs.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(bs);return l<e.near||l>e.far?null:{distance:l,point:bs.clone(),object:n}}function ws(n,t,e,i,r,s,o,a,h,l){n.getVertexPosition(a,zi),n.getVertexPosition(h,ki),n.getVertexPosition(l,Hi);const c=kd(n,t,e,i,zi,ki,Hi,Ss);if(c){r&&(Ms.fromBufferAttribute(r,a),xs.fromBufferAttribute(r,h),Es.fromBufferAttribute(r,l),c.uv=on.getInterpolation(Ss,zi,ki,Hi,Ms,xs,Es,new At)),s&&(Ms.fromBufferAttribute(s,a),xs.fromBufferAttribute(s,h),Es.fromBufferAttribute(s,l),c.uv1=on.getInterpolation(Ss,zi,ki,Hi,Ms,xs,Es,new At),c.uv2=c.uv1),o&&(rl.fromBufferAttribute(o,a),sl.fromBufferAttribute(o,h),al.fromBufferAttribute(o,l),c.normal=on.getInterpolation(Ss,zi,ki,Hi,rl,sl,al,new U),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const u={a,b:h,c:l,normal:new U,materialIndex:0};on.getNormal(zi,ki,Hi,u.normal),c.face=u}return c}class Jr extends qe{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const h=[],l=[],c=[],u=[];let f=0,m=0;_("z","y","x",-1,-1,i,e,t,o,s,0),_("z","y","x",1,-1,i,e,-t,o,s,1),_("x","z","y",1,1,t,i,e,r,o,2),_("x","z","y",1,-1,t,i,-e,r,o,3),_("x","y","z",1,-1,t,e,i,r,s,4),_("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(h),this.setAttribute("position",new tn(l,3)),this.setAttribute("normal",new tn(c,3)),this.setAttribute("uv",new tn(u,2));function _(y,p,d,b,g,v,x,R,T,A,M){const E=v/T,L=x/A,D=v/2,j=x/2,N=R/2,z=T+1,q=A+1;let $=0,et=0;const Z=new U;for(let K=0;K<q;K++){const O=K*L-j;for(let V=0;V<z;V++){const ut=V*E-D;Z[y]=ut*b,Z[p]=O*g,Z[d]=N,l.push(Z.x,Z.y,Z.z),Z[y]=0,Z[p]=0,Z[d]=R>0?1:-1,c.push(Z.x,Z.y,Z.z),u.push(V/T),u.push(1-K/A),$+=1}}for(let K=0;K<A;K++)for(let O=0;O<T;O++){const V=f+O+z*K,ut=f+O+z*(K+1),pt=f+(O+1)+z*(K+1),_t=f+(O+1)+z*K;h.push(V,ut,_t),h.push(ut,pt,_t),et+=6}a.addGroup(m,et,M),m+=et,f+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ur(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Be(n){const t={};for(let e=0;e<n.length;e++){const i=ur(n[e]);for(const r in i)t[r]=i[r]}return t}function Hd(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Ic(n){return n.getRenderTarget()===null?n.outputColorSpace:ee.workingColorSpace}const Vd={clone:ur,merge:Be};var Wd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ti extends pr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Wd,this.fragmentShader=$d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ur(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Uc extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new de,this.projectionMatrix=new de,this.projectionMatrixInverse=new de,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class hn extends Uc{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=$r*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return $r*2*Math.atan(Math.tan(Fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Fr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/h,e-=o.offsetY*i/l,r*=o.width/h,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vi=-90,Wi=1;class Xd extends Me{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new hn(Vi,Wi,t,e);r.layers=this.layers,this.add(r);const s=new hn(Vi,Wi,t,e);s.layers=this.layers,this.add(s);const o=new hn(Vi,Wi,t,e);o.layers=this.layers,this.add(o);const a=new hn(Vi,Wi,t,e);a.layers=this.layers,this.add(a);const h=new hn(Vi,Wi,t,e);h.layers=this.layers,this.add(h);const l=new hn(Vi,Wi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,h]=e;for(const l of e)this.remove(l);if(t===zn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===js)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,h,l,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),_=t.xr.enabled;t.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,h),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=y,t.setRenderTarget(i,5,r),t.render(e,c),t.setRenderTarget(u,f,m),t.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Oc extends $e{constructor(t,e,i,r,s,o,a,h,l,c){t=t!==void 0?t:[],e=e!==void 0?e:hr,super(t,e,i,r,s,o,a,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class qd extends wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(Br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===bi?Re:ln),this.texture=new Oc(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:an}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Jr(5,5,5),s=new Ti({name:"CubemapFromEquirect",uniforms:ur(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:We,blending:si});s.uniforms.tEquirect.value=e;const o=new Mn(r,s),a=e.minFilter;return e.minFilter===Vr&&(e.minFilter=an),new Xd(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const Wa=new U,jd=new U,Yd=new Wt;class ei{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=Wa.subVectors(i,e).cross(jd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Wa),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Yd.getNormalMatrix(t),r=this.coplanarPoint(Wa).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gi=new aa,Ts=new U;class Fo{constructor(t=new ei,e=new ei,i=new ei,r=new ei,s=new ei,o=new ei){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=zn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],h=r[3],l=r[4],c=r[5],u=r[6],f=r[7],m=r[8],_=r[9],y=r[10],p=r[11],d=r[12],b=r[13],g=r[14],v=r[15];if(i[0].setComponents(h-s,f-l,p-m,v-d).normalize(),i[1].setComponents(h+s,f+l,p+m,v+d).normalize(),i[2].setComponents(h+o,f+c,p+_,v+b).normalize(),i[3].setComponents(h-o,f-c,p-_,v-b).normalize(),i[4].setComponents(h-a,f-u,p-y,v-g).normalize(),e===zn)i[5].setComponents(h+a,f+u,p+y,v+g).normalize();else if(e===js)i[5].setComponents(a,u,y,g).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gi)}intersectsSprite(t){return gi.center.set(0,0,0),gi.radius=.7071067811865476,gi.applyMatrix4(t.matrixWorld),this.intersectsSphere(gi)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Ts.x=r.normal.x>0?t.max.x:t.min.x,Ts.y=r.normal.y>0?t.max.y:t.min.y,Ts.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Fc(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Kd(n,t){const e=t.isWebGL2,i=new WeakMap;function r(l,c){const u=l.array,f=l.usage,m=n.createBuffer();n.bindBuffer(c,m),n.bufferData(c,u,f),l.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:m,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version}}function s(l,c,u){const f=c.array,m=c.updateRange;n.bindBuffer(u,l),m.count===-1?n.bufferSubData(u,0,f):(e?n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):n.bufferSubData(u,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),c.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const c=i.get(l);c&&(n.deleteBuffer(c.buffer),i.delete(l))}function h(l,c){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u===void 0?i.set(l,r(l,c)):u.version<l.version&&(s(u.buffer,l,c),u.version=l.version)}return{get:o,remove:a,update:h}}class Go extends qe{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),h=Math.floor(r),l=a+1,c=h+1,u=t/a,f=e/h,m=[],_=[],y=[],p=[];for(let d=0;d<c;d++){const b=d*f-o;for(let g=0;g<l;g++){const v=g*u-s;_.push(v,-b,0),y.push(0,0,1),p.push(g/a),p.push(1-d/h)}}for(let d=0;d<h;d++)for(let b=0;b<a;b++){const g=b+l*d,v=b+l*(d+1),x=b+1+l*(d+1),R=b+1+l*d;m.push(g,v,R),m.push(v,x,R)}this.setIndex(m),this.setAttribute("position",new tn(_,3)),this.setAttribute("normal",new tn(y,3)),this.setAttribute("uv",new tn(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Go(t.width,t.height,t.widthSegments,t.heightSegments)}}var Zd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Jd=`#ifdef USE_ALPHAHASH
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
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ep=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ip=`#ifdef USE_AOMAP
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
#endif`,rp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,hp=`#ifdef USE_IRIDESCENCE
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
#endif`,lp=`#ifdef USE_BUMPMAP
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
#endif`,cp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,yp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ep=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`
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
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Lp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Np=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ip=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Gp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Vp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$p=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,jp=`struct PhysicalMaterial {
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
}`,Yp=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Qp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,em=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sm=`#if defined( USE_POINTS_UV )
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
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lm=`#ifdef USE_MORPHNORMALS
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
#endif`,cm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
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
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ym=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Em=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Sm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Nm=`float getShadowMask() {
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
}`,Im=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,Gm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,km=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tg=`#include <common>
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
}`,eg=`#if DEPTH_PACKING == 3200
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
}`,ng=`#define DISTANCE
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
}`,ig=`#define DISTANCE
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
}`,rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,sg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ag=`uniform float scale;
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
}`,og=`uniform vec3 diffuse;
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
}`,hg=`#include <common>
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
}`,lg=`uniform vec3 diffuse;
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
}`,cg=`#define LAMBERT
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
}`,ug=`#define LAMBERT
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
}`,fg=`#define MATCAP
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
}`,dg=`#define MATCAP
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
}`,pg=`#define NORMAL
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
}`,mg=`#define NORMAL
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
}`,gg=`#define PHONG
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
}`,_g=`#define PHONG
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
}`,vg=`#define STANDARD
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
}`,yg=`#define STANDARD
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
}`,Mg=`#define TOON
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
}`,xg=`#define TOON
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
}`,Eg=`uniform float size;
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
}`,Sg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,wg=`uniform vec3 color;
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
}`,Tg=`uniform float rotation;
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
}`,Ag=`uniform vec3 diffuse;
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
}`,Ht={alphahash_fragment:Zd,alphahash_pars_fragment:Jd,alphamap_fragment:Qd,alphamap_pars_fragment:tp,alphatest_fragment:ep,alphatest_pars_fragment:np,aomap_fragment:ip,aomap_pars_fragment:rp,begin_vertex:sp,beginnormal_vertex:ap,bsdfs:op,iridescence_fragment:hp,bumpmap_pars_fragment:lp,clipping_planes_fragment:cp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:fp,clipping_planes_vertex:dp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:_p,common:vp,cube_uv_reflection_fragment:yp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:xp,displacementmap_vertex:Ep,emissivemap_fragment:Sp,emissivemap_pars_fragment:bp,colorspace_fragment:wp,colorspace_pars_fragment:Tp,envmap_fragment:Ap,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Cp,envmap_pars_vertex:Lp,envmap_physical_pars_fragment:Hp,envmap_vertex:Pp,fog_vertex:Dp,fog_pars_vertex:Np,fog_fragment:Ip,fog_pars_fragment:Up,gradientmap_pars_fragment:Op,lightmap_fragment:Fp,lightmap_pars_fragment:Gp,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:zp,lights_pars_begin:kp,lights_toon_fragment:Vp,lights_toon_pars_fragment:Wp,lights_phong_fragment:$p,lights_phong_pars_fragment:Xp,lights_physical_fragment:qp,lights_physical_pars_fragment:jp,lights_fragment_begin:Yp,lights_fragment_maps:Kp,lights_fragment_end:Zp,logdepthbuf_fragment:Jp,logdepthbuf_pars_fragment:Qp,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:em,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:rm,map_particle_pars_fragment:sm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphcolor_vertex:hm,morphnormal_vertex:lm,morphtarget_pars_vertex:cm,morphtarget_vertex:um,normal_fragment_begin:fm,normal_fragment_maps:dm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:ym,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:xm,opaque_fragment:Em,packing:Sm,premultiplied_alpha_fragment:bm,project_vertex:wm,dithering_fragment:Tm,dithering_pars_fragment:Am,roughnessmap_fragment:Rm,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Lm,shadowmap_pars_vertex:Pm,shadowmap_vertex:Dm,shadowmask_pars_fragment:Nm,skinbase_vertex:Im,skinning_pars_vertex:Um,skinning_vertex:Om,skinnormal_vertex:Fm,specularmap_fragment:Gm,specularmap_pars_fragment:Bm,tonemapping_fragment:zm,tonemapping_pars_fragment:km,transmission_fragment:Hm,transmission_pars_fragment:Vm,uv_pars_fragment:Wm,uv_pars_vertex:$m,uv_vertex:Xm,worldpos_vertex:qm,background_vert:jm,background_frag:Ym,backgroundCube_vert:Km,backgroundCube_frag:Zm,cube_vert:Jm,cube_frag:Qm,depth_vert:tg,depth_frag:eg,distanceRGBA_vert:ng,distanceRGBA_frag:ig,equirect_vert:rg,equirect_frag:sg,linedashed_vert:ag,linedashed_frag:og,meshbasic_vert:hg,meshbasic_frag:lg,meshlambert_vert:cg,meshlambert_frag:ug,meshmatcap_vert:fg,meshmatcap_frag:dg,meshnormal_vert:pg,meshnormal_frag:mg,meshphong_vert:gg,meshphong_frag:_g,meshphysical_vert:vg,meshphysical_frag:yg,meshtoon_vert:Mg,meshtoon_frag:xg,points_vert:Eg,points_frag:Sg,shadow_vert:bg,shadow_frag:wg,sprite_vert:Tg,sprite_frag:Ag},lt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Wt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Wt},normalScale:{value:new At(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0},uvTransform:{value:new Wt}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new At(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Wt},alphaMap:{value:null},alphaMapTransform:{value:new Wt},alphaTest:{value:0}}},wn={basic:{uniforms:Be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Ht.meshbasic_vert,fragmentShader:Ht.meshbasic_frag},lambert:{uniforms:Be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ht.meshlambert_vert,fragmentShader:Ht.meshlambert_frag},phong:{uniforms:Be([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30}}]),vertexShader:Ht.meshphong_vert,fragmentShader:Ht.meshphong_frag},standard:{uniforms:Be([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag},toon:{uniforms:Be([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:Ht.meshtoon_vert,fragmentShader:Ht.meshtoon_frag},matcap:{uniforms:Be([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Ht.meshmatcap_vert,fragmentShader:Ht.meshmatcap_frag},points:{uniforms:Be([lt.points,lt.fog]),vertexShader:Ht.points_vert,fragmentShader:Ht.points_frag},dashed:{uniforms:Be([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ht.linedashed_vert,fragmentShader:Ht.linedashed_frag},depth:{uniforms:Be([lt.common,lt.displacementmap]),vertexShader:Ht.depth_vert,fragmentShader:Ht.depth_frag},normal:{uniforms:Be([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Ht.meshnormal_vert,fragmentShader:Ht.meshnormal_frag},sprite:{uniforms:Be([lt.sprite,lt.fog]),vertexShader:Ht.sprite_vert,fragmentShader:Ht.sprite_frag},background:{uniforms:{uvTransform:{value:new Wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ht.background_vert,fragmentShader:Ht.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ht.backgroundCube_vert,fragmentShader:Ht.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ht.cube_vert,fragmentShader:Ht.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ht.equirect_vert,fragmentShader:Ht.equirect_frag},distanceRGBA:{uniforms:Be([lt.common,lt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ht.distanceRGBA_vert,fragmentShader:Ht.distanceRGBA_frag},shadow:{uniforms:Be([lt.lights,lt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:Ht.shadow_vert,fragmentShader:Ht.shadow_frag}};wn.physical={uniforms:Be([wn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Wt},clearcoatNormalScale:{value:new At(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Wt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Wt},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Wt},transmissionSamplerSize:{value:new At},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Wt},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Wt},anisotropyVector:{value:new At},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Wt}}]),vertexShader:Ht.meshphysical_vert,fragmentShader:Ht.meshphysical_frag};const As={r:0,b:0,g:0};function Rg(n,t,e,i,r,s,o){const a=new Kt(0);let h=s===!0?0:1,l,c,u=null,f=0,m=null;function _(p,d){let b=!1,g=d.isScene===!0?d.background:null;g&&g.isTexture&&(g=(d.backgroundBlurriness>0?e:t).get(g)),g===null?y(a,h):g&&g.isColor&&(y(g,1),b=!0);const v=n.xr.getEnvironmentBlendMode();v==="additive"?i.buffers.color.setClear(0,0,0,1,o):v==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||b)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),g&&(g.isCubeTexture||g.mapping===ra)?(c===void 0&&(c=new Mn(new Jr(1,1,1),new Ti({name:"BackgroundCubeMaterial",uniforms:ur(wn.backgroundCube.uniforms),vertexShader:wn.backgroundCube.vertexShader,fragmentShader:wn.backgroundCube.fragmentShader,side:We,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(x,R,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=g,c.material.uniforms.flipEnvMap.value=g.isCubeTexture&&g.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ee.getTransfer(g.colorSpace)!==oe,(u!==g||f!==g.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,u=g,f=g.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null)):g&&g.isTexture&&(l===void 0&&(l=new Mn(new Go(2,2),new Ti({name:"BackgroundMaterial",uniforms:ur(wn.background.uniforms),vertexShader:wn.background.vertexShader,fragmentShader:wn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=g,l.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,l.material.toneMapped=ee.getTransfer(g.colorSpace)!==oe,g.matrixAutoUpdate===!0&&g.updateMatrix(),l.material.uniforms.uvTransform.value.copy(g.matrix),(u!==g||f!==g.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,u=g,f=g.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function y(p,d){p.getRGB(As,Ic(n)),i.buffers.color.setClear(As.r,As.g,As.b,d,o)}return{getClearColor:function(){return a},setClearColor:function(p,d=1){a.set(p),h=d,y(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,y(a,h)},render:_}}function Cg(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},h=p(null);let l=h,c=!1;function u(N,z,q,$,et){let Z=!1;if(o){const K=y($,q,z);l!==K&&(l=K,m(l.object)),Z=d(N,$,q,et),Z&&b(N,$,q,et)}else{const K=z.wireframe===!0;(l.geometry!==$.id||l.program!==q.id||l.wireframe!==K)&&(l.geometry=$.id,l.program=q.id,l.wireframe=K,Z=!0)}et!==null&&e.update(et,n.ELEMENT_ARRAY_BUFFER),(Z||c)&&(c=!1,A(N,z,q,$),et!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(et).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function y(N,z,q){const $=q.wireframe===!0;let et=a[N.id];et===void 0&&(et={},a[N.id]=et);let Z=et[z.id];Z===void 0&&(Z={},et[z.id]=Z);let K=Z[$];return K===void 0&&(K=p(f()),Z[$]=K),K}function p(N){const z=[],q=[],$=[];for(let et=0;et<r;et++)z[et]=0,q[et]=0,$[et]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:$,object:N,attributes:{},index:null}}function d(N,z,q,$){const et=l.attributes,Z=z.attributes;let K=0;const O=q.getAttributes();for(const V in O)if(O[V].location>=0){const pt=et[V];let _t=Z[V];if(_t===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(_t=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(_t=N.instanceColor)),pt===void 0||pt.attribute!==_t||_t&&pt.data!==_t.data)return!0;K++}return l.attributesNum!==K||l.index!==$}function b(N,z,q,$){const et={},Z=z.attributes;let K=0;const O=q.getAttributes();for(const V in O)if(O[V].location>=0){let pt=Z[V];pt===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(pt=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(pt=N.instanceColor));const _t={};_t.attribute=pt,pt&&pt.data&&(_t.data=pt.data),et[V]=_t,K++}l.attributes=et,l.attributesNum=K,l.index=$}function g(){const N=l.newAttributes;for(let z=0,q=N.length;z<q;z++)N[z]=0}function v(N){x(N,0)}function x(N,z){const q=l.newAttributes,$=l.enabledAttributes,et=l.attributeDivisors;q[N]=1,$[N]===0&&(n.enableVertexAttribArray(N),$[N]=1),et[N]!==z&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,z),et[N]=z)}function R(){const N=l.newAttributes,z=l.enabledAttributes;for(let q=0,$=z.length;q<$;q++)z[q]!==N[q]&&(n.disableVertexAttribArray(q),z[q]=0)}function T(N,z,q,$,et,Z,K){K===!0?n.vertexAttribIPointer(N,z,q,et,Z):n.vertexAttribPointer(N,z,q,$,et,Z)}function A(N,z,q,$){if(i.isWebGL2===!1&&(N.isInstancedMesh||$.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;g();const et=$.attributes,Z=q.getAttributes(),K=z.defaultAttributeValues;for(const O in Z){const V=Z[O];if(V.location>=0){let ut=et[O];if(ut===void 0&&(O==="instanceMatrix"&&N.instanceMatrix&&(ut=N.instanceMatrix),O==="instanceColor"&&N.instanceColor&&(ut=N.instanceColor)),ut!==void 0){const pt=ut.normalized,_t=ut.itemSize,Lt=e.get(ut);if(Lt===void 0)continue;const Xt=Lt.buffer,Pt=Lt.type,Ot=Lt.bytesPerElement,ae=i.isWebGL2===!0&&(Pt===n.INT||Pt===n.UNSIGNED_INT||ut.gpuType===Mc);if(ut.isInterleavedBufferAttribute){const kt=ut.data,G=kt.stride,Le=ut.offset;if(kt.isInstancedInterleavedBuffer){for(let bt=0;bt<V.locationSize;bt++)x(V.location+bt,kt.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=kt.meshPerAttribute*kt.count)}else for(let bt=0;bt<V.locationSize;bt++)v(V.location+bt);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let bt=0;bt<V.locationSize;bt++)T(V.location+bt,_t/V.locationSize,Pt,pt,G*Ot,(Le+_t/V.locationSize*bt)*Ot,ae)}else{if(ut.isInstancedBufferAttribute){for(let kt=0;kt<V.locationSize;kt++)x(V.location+kt,ut.meshPerAttribute);N.isInstancedMesh!==!0&&$._maxInstanceCount===void 0&&($._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let kt=0;kt<V.locationSize;kt++)v(V.location+kt);n.bindBuffer(n.ARRAY_BUFFER,Xt);for(let kt=0;kt<V.locationSize;kt++)T(V.location+kt,_t/V.locationSize,Pt,pt,_t*Ot,_t/V.locationSize*kt*Ot,ae)}}else if(K!==void 0){const pt=K[O];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(V.location,pt);break;case 3:n.vertexAttrib3fv(V.location,pt);break;case 4:n.vertexAttrib4fv(V.location,pt);break;default:n.vertexAttrib1fv(V.location,pt)}}}}R()}function M(){D();for(const N in a){const z=a[N];for(const q in z){const $=z[q];for(const et in $)_($[et].object),delete $[et];delete z[q]}delete a[N]}}function E(N){if(a[N.id]===void 0)return;const z=a[N.id];for(const q in z){const $=z[q];for(const et in $)_($[et].object),delete $[et];delete z[q]}delete a[N.id]}function L(N){for(const z in a){const q=a[z];if(q[N.id]===void 0)continue;const $=q[N.id];for(const et in $)_($[et].object),delete $[et];delete q[N.id]}}function D(){j(),c=!0,l!==h&&(l=h,m(l.object))}function j(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:u,reset:D,resetDefaultState:j,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfProgram:L,initAttributes:g,enableAttribute:v,disableUnusedAttributes:R}}function Lg(n,t,e,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,c){n.drawArrays(s,l,c),e.update(c,s,1)}function h(l,c,u){if(u===0)return;let f,m;if(r)f=n,m="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[m](s,l,c,u),e.update(c,s,u)}this.setMode=o,this.render=a,this.renderInstances=h}function Pg(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const h=s(a);h!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);const l=o||t.has("WEBGL_draw_buffers"),c=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),b=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),g=f>0,v=o||t.has("OES_texture_float"),x=g&&v,R=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:u,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:y,maxVertexUniforms:p,maxVaryings:d,maxFragmentUniforms:b,vertexTextures:g,floatFragmentTextures:v,floatVertexTextures:x,maxSamples:R}}function Dg(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new ei,a=new Wt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const m=u.length!==0||f||i!==0||r;return r=f,i=u.length,m},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,m){const _=u.clippingPlanes,y=u.clipIntersection,p=u.clipShadows,d=n.get(u);if(!r||_===null||_.length===0||s&&!p)s?c(null):l();else{const b=s?0:i,g=b*4;let v=d.clippingState||null;h.value=v,v=c(_,f,g,m);for(let x=0;x!==g;++x)v[x]=e[x];d.clippingState=v,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=b}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function c(u,f,m,_){const y=u!==null?u.length:0;let p=null;if(y!==0){if(p=h.value,_!==!0||p===null){const d=m+y*4,b=f.matrixWorldInverse;a.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let g=0,v=m;g!==y;++g,v+=4)o.copy(u[g]).applyMatrix4(b,a),o.normal.toArray(p,v),p[v+3]=o.constant}h.value=p,h.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,p}}function Ng(n){let t=new WeakMap;function e(o,a){return a===go?o.mapping=hr:a===_o&&(o.mapping=lr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===go||a===_o)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const l=new qd(h.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class Gc extends Uc{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=c*this.view.offsetY,h=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ji=4,ol=[.125,.215,.35,.446,.526,.582],xi=20,$a=new Gc,hl=new Kt;let Xa=null,qa=0,ja=0;const yi=(1+Math.sqrt(5))/2,$i=1/yi,ll=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,yi,$i),new U(0,yi,-$i),new U($i,0,yi),new U(-$i,0,yi),new U(yi,$i,0),new U(-yi,$i,0)];class cl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xa,qa,ja),t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xa=this._renderer.getRenderTarget(),qa=this._renderer.getActiveCubeFace(),ja=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:an,minFilter:an,generateMipmaps:!1,type:Wr,format:vn,colorSpace:Wn,depthBuffer:!1},r=ul(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ul(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ig(s)),this._blurMaterial=Ug(s,t,e)}return r}_compileMaterial(t){const e=new Mn(this._lodPlanes[0],t);this._renderer.compile(e,$a)}_sceneToCubeUV(t,e,i,r){const a=new hn(90,1,e,i),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(hl),c.toneMapping=ai,c.autoClear=!1;const m=new Zr({name:"PMREM.Background",side:We,depthWrite:!1,depthTest:!1}),_=new Mn(new Jr,m);let y=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,y=!0):(m.color.copy(hl),y=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(a.up.set(0,h[d],0),a.lookAt(l[d],0,0)):b===1?(a.up.set(0,0,h[d]),a.lookAt(0,l[d],0)):(a.up.set(0,h[d],0),a.lookAt(0,0,l[d]));const g=this._cubeSize;Rs(r,b*g,d>2?g:0,g,g),c.setRenderTarget(r),y&&c.render(_,a),c.render(t,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=f,c.autoClear=u,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===hr||t.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Mn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const h=this._cubeSize;Rs(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(o,$a)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ll[(r-1)%ll.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Mn(this._lodPlanes[r],l),f=l.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*xi-1),y=s/_,p=isFinite(s)?1+Math.floor(c*y):xi;p>xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${xi}`);const d=[];let b=0;for(let T=0;T<xi;++T){const A=T/y,M=Math.exp(-A*A/2);d.push(M),T===0?b+=M:T<p&&(b+=2*M)}for(let T=0;T<d.length;T++)d[T]=d[T]/b;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:g}=this;f.dTheta.value=_,f.mipInt.value=g-i;const v=this._sizeLods[r],x=3*v*(r>g-Ji?r-g+Ji:0),R=4*(this._cubeSize-v);Rs(e,x,R,3*v,2*v),h.setRenderTarget(e),h.render(u,$a)}}function Ig(n){const t=[],e=[],i=[];let r=n;const s=n-Ji+1+ol.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let h=1/a;o>n-Ji?h=ol[o-n+Ji-1]:o===0&&(h=0),i.push(h);const l=1/(a-2),c=-l,u=1+l,f=[c,c,u,c,u,u,c,c,u,u,c,u],m=6,_=6,y=3,p=2,d=1,b=new Float32Array(y*_*m),g=new Float32Array(p*_*m),v=new Float32Array(d*_*m);for(let R=0;R<m;R++){const T=R%3*2/3-1,A=R>2?0:-1,M=[T,A,0,T+2/3,A,0,T+2/3,A+1,0,T,A,0,T+2/3,A+1,0,T,A+1,0];b.set(M,y*_*R),g.set(f,p*_*R);const E=[R,R,R,R,R,R];v.set(E,d*_*R)}const x=new qe;x.setAttribute("position",new cn(b,y)),x.setAttribute("uv",new cn(g,p)),x.setAttribute("faceIndex",new cn(v,d)),t.push(x),r>Ji&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function ul(n,t,e){const i=new wi(n,t,e);return i.texture.mapping=ra,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function Ug(n,t,e){const i=new Float32Array(xi),r=new U(0,1,0);return new Ti({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function fl(){return new Ti({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bo(),fragmentShader:`

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
		`,blending:si,depthTest:!1,depthWrite:!1})}function dl(){return new Ti({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:si,depthTest:!1,depthWrite:!1})}function Bo(){return`

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
	`}function Og(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const h=a.mapping,l=h===go||h===_o,c=h===hr||h===lr;if(l||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new cl(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{const u=a.image;if(l&&u&&u.height>0||c&&u&&r(u)){e===null&&(e=new cl(n));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let h=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&h++;return h===l}function s(a){const h=a.target;h.removeEventListener("dispose",s);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Fg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Gg(n,t,e,i){const r={},s=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const _ in f.attributes)t.remove(f.attributes[_]);for(const _ in f.morphAttributes){const y=f.morphAttributes[_];for(let p=0,d=y.length;p<d;p++)t.remove(y[p])}f.removeEventListener("dispose",o),delete r[f.id];const m=s.get(f);m&&(t.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function h(u){const f=u.attributes;for(const _ in f)t.update(f[_],n.ARRAY_BUFFER);const m=u.morphAttributes;for(const _ in m){const y=m[_];for(let p=0,d=y.length;p<d;p++)t.update(y[p],n.ARRAY_BUFFER)}}function l(u){const f=[],m=u.index,_=u.attributes.position;let y=0;if(m!==null){const b=m.array;y=m.version;for(let g=0,v=b.length;g<v;g+=3){const x=b[g+0],R=b[g+1],T=b[g+2];f.push(x,R,R,T,T,x)}}else if(_!==void 0){const b=_.array;y=_.version;for(let g=0,v=b.length/3-1;g<v;g+=3){const x=g+0,R=g+1,T=g+2;f.push(x,R,R,T,T,x)}}else return;const p=new(Ac(f)?Nc:Dc)(f,1);p.version=y;const d=s.get(u);d&&t.remove(d),s.set(u,p)}function c(u){const f=s.get(u);if(f){const m=u.index;m!==null&&f.version<m.version&&l(u)}else l(u);return s.get(u)}return{get:a,update:h,getWireframeAttribute:c}}function Bg(n,t,e,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,h;function l(f){a=f.type,h=f.bytesPerElement}function c(f,m){n.drawElements(s,m,a,f*h),e.update(m,s,1)}function u(f,m,_){if(_===0)return;let y,p;if(r)y=n,p="drawElementsInstanced";else if(y=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",y===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}y[p](s,m,a,f*h,_),e.update(m,s,_)}this.setMode=o,this.setIndex=l,this.render=c,this.renderInstances=u}function zg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function kg(n,t){return n[0]-t[0]}function Hg(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Vg(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new Te,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function h(l,c,u){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const _=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,y=_!==void 0?_.length:0;let p=s.get(c);if(p===void 0||p.count!==y){let z=function(){j.dispose(),s.delete(c),c.removeEventListener("dispose",z)};var m=z;p!==void 0&&p.texture.dispose();const g=c.morphAttributes.position!==void 0,v=c.morphAttributes.normal!==void 0,x=c.morphAttributes.color!==void 0,R=c.morphAttributes.position||[],T=c.morphAttributes.normal||[],A=c.morphAttributes.color||[];let M=0;g===!0&&(M=1),v===!0&&(M=2),x===!0&&(M=3);let E=c.attributes.position.count*M,L=1;E>t.maxTextureSize&&(L=Math.ceil(E/t.maxTextureSize),E=t.maxTextureSize);const D=new Float32Array(E*L*4*y),j=new Lc(D,E,L,y);j.type=ri,j.needsUpdate=!0;const N=M*4;for(let q=0;q<y;q++){const $=R[q],et=T[q],Z=A[q],K=E*L*4*q;for(let O=0;O<$.count;O++){const V=O*N;g===!0&&(o.fromBufferAttribute($,O),D[K+V+0]=o.x,D[K+V+1]=o.y,D[K+V+2]=o.z,D[K+V+3]=0),v===!0&&(o.fromBufferAttribute(et,O),D[K+V+4]=o.x,D[K+V+5]=o.y,D[K+V+6]=o.z,D[K+V+7]=0),x===!0&&(o.fromBufferAttribute(Z,O),D[K+V+8]=o.x,D[K+V+9]=o.y,D[K+V+10]=o.z,D[K+V+11]=Z.itemSize===4?o.w:1)}}p={count:y,texture:j,size:new At(E,L)},s.set(c,p),c.addEventListener("dispose",z)}let d=0;for(let g=0;g<f.length;g++)d+=f[g];const b=c.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",b),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let y=i[c.id];if(y===void 0||y.length!==_){y=[];for(let v=0;v<_;v++)y[v]=[v,0];i[c.id]=y}for(let v=0;v<_;v++){const x=y[v];x[0]=v,x[1]=f[v]}y.sort(Hg);for(let v=0;v<8;v++)v<_&&y[v][1]?(a[v][0]=y[v][0],a[v][1]=y[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(kg);const p=c.morphAttributes.position,d=c.morphAttributes.normal;let b=0;for(let v=0;v<8;v++){const x=a[v],R=x[0],T=x[1];R!==Number.MAX_SAFE_INTEGER&&T?(p&&c.getAttribute("morphTarget"+v)!==p[R]&&c.setAttribute("morphTarget"+v,p[R]),d&&c.getAttribute("morphNormal"+v)!==d[R]&&c.setAttribute("morphNormal"+v,d[R]),r[v]=T,b+=T):(p&&c.hasAttribute("morphTarget"+v)===!0&&c.deleteAttribute("morphTarget"+v),d&&c.hasAttribute("morphNormal"+v)===!0&&c.deleteAttribute("morphNormal"+v),r[v]=0)}const g=c.morphTargetsRelative?1:1-b;u.getUniforms().setValue(n,"morphTargetBaseInfluence",g),u.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:h}}function Wg(n,t,e,i){let r=new WeakMap;function s(h){const l=i.render.frame,c=h.geometry,u=t.get(h,c);if(r.get(u)!==l&&(t.update(u),r.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),r.get(h)!==l&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,l))),h.isSkinnedMesh){const f=h.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return u}function o(){r=new WeakMap}function a(h){const l=h.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const Bc=new $e,zc=new Lc,kc=new Ld,Hc=new Oc,pl=[],ml=[],gl=new Float32Array(16),_l=new Float32Array(9),vl=new Float32Array(4);function mr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=pl[r];if(s===void 0&&(s=new Float32Array(r),pl[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function xe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function la(n,t){let e=ml[t];e===void 0&&(e=new Int32Array(t),ml[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function $g(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Xg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function qg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function Yg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(xe(e,i))return;vl.set(i),n.uniformMatrix2fv(this.addr,!1,vl),Ee(e,i)}}function Kg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(xe(e,i))return;_l.set(i),n.uniformMatrix3fv(this.addr,!1,_l),Ee(e,i)}}function Zg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(xe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(xe(e,i))return;gl.set(i),n.uniformMatrix4fv(this.addr,!1,gl),Ee(e,i)}}function Jg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Qg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function t0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function e0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function n0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function i0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function r0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function s0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function a0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2D(t||Bc,r)}function o0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||kc,r)}function h0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||Hc,r)}function l0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||zc,r)}function c0(n){switch(n){case 5126:return $g;case 35664:return Xg;case 35665:return qg;case 35666:return jg;case 35674:return Yg;case 35675:return Kg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return Qg;case 35668:case 35672:return t0;case 35669:case 35673:return e0;case 5125:return n0;case 36294:return i0;case 36295:return r0;case 36296:return s0;case 35678:case 36198:case 36298:case 36306:case 35682:return a0;case 35679:case 36299:case 36307:return o0;case 35680:case 36300:case 36308:case 36293:return h0;case 36289:case 36303:case 36311:case 36292:return l0}}function u0(n,t){n.uniform1fv(this.addr,t)}function f0(n,t){const e=mr(t,this.size,2);n.uniform2fv(this.addr,e)}function d0(n,t){const e=mr(t,this.size,3);n.uniform3fv(this.addr,e)}function p0(n,t){const e=mr(t,this.size,4);n.uniform4fv(this.addr,e)}function m0(n,t){const e=mr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function g0(n,t){const e=mr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function _0(n,t){const e=mr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function v0(n,t){n.uniform1iv(this.addr,t)}function y0(n,t){n.uniform2iv(this.addr,t)}function M0(n,t){n.uniform3iv(this.addr,t)}function x0(n,t){n.uniform4iv(this.addr,t)}function E0(n,t){n.uniform1uiv(this.addr,t)}function S0(n,t){n.uniform2uiv(this.addr,t)}function b0(n,t){n.uniform3uiv(this.addr,t)}function w0(n,t){n.uniform4uiv(this.addr,t)}function T0(n,t,e){const i=this.cache,r=t.length,s=la(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||Bc,s[o])}function A0(n,t,e){const i=this.cache,r=t.length,s=la(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||kc,s[o])}function R0(n,t,e){const i=this.cache,r=t.length,s=la(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||Hc,s[o])}function C0(n,t,e){const i=this.cache,r=t.length,s=la(e,r);xe(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||zc,s[o])}function L0(n){switch(n){case 5126:return u0;case 35664:return f0;case 35665:return d0;case 35666:return p0;case 35674:return m0;case 35675:return g0;case 35676:return _0;case 5124:case 35670:return v0;case 35667:case 35671:return y0;case 35668:case 35672:return M0;case 35669:case 35673:return x0;case 5125:return E0;case 36294:return S0;case 36295:return b0;case 36296:return w0;case 35678:case 36198:case 36298:case 36306:case 35682:return T0;case 35679:case 36299:case 36307:return A0;case 35680:case 36300:case 36308:case 36293:return R0;case 36289:case 36303:case 36311:case 36292:return C0}}class P0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=c0(e.type)}}class D0{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=L0(e.type)}}class N0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const Ya=/(\w+)(\])?(\[|\.)?/g;function yl(n,t){n.seq.push(t),n.map[t.id]=t}function I0(n,t,e){const i=n.name,r=i.length;for(Ya.lastIndex=0;;){const s=Ya.exec(i),o=Ya.lastIndex;let a=s[1];const h=s[2]==="]",l=s[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===r){yl(e,l===void 0?new P0(a,n,t):new D0(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new N0(a),yl(e,u)),e=u}}}class Bs{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);I0(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],h=i[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Ml(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const U0=37297;let O0=0;function F0(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function G0(n){const t=ee.getPrimaries(ee.workingColorSpace),e=ee.getPrimaries(n);let i;switch(t===e?i="":t===qs&&e===Xs?i="LinearDisplayP3ToLinearSRGB":t===Xs&&e===qs&&(i="LinearSRGBToLinearDisplayP3"),n){case Wn:case sa:return[i,"LinearTransferOETF"];case Re:case Io:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function xl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+F0(n.getShaderSource(t),o)}else return r}function B0(n,t){const e=G0(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function z0(n,t){let e;switch(t){case Ff:e="Linear";break;case Gf:e="Reinhard";break;case Bf:e="OptimizedCineon";break;case zf:e="ACESFilmic";break;case kf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function k0(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Nr).join(`
`)}function H0(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function V0(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Nr(n){return n!==""}function El(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sl(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const W0=/^[ \t]*#include +<([\w\d./]+)>/gm;function So(n){return n.replace(W0,X0)}const $0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function X0(n,t){let e=Ht[t];if(e===void 0){const i=$0.get(t);if(i!==void 0)e=Ht[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return So(e)}const q0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bl(n){return n.replace(q0,j0)}function j0(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function wl(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y0(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_c?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===uf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Fn&&(t="SHADOWMAP_TYPE_VSM"),t}function K0(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hr:case lr:t="ENVMAP_TYPE_CUBE";break;case ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Z0(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lr:t="ENVMAP_MODE_REFRACTION";break}return t}function J0(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case vc:t="ENVMAP_BLENDING_MULTIPLY";break;case Uf:t="ENVMAP_BLENDING_MIX";break;case Of:t="ENVMAP_BLENDING_ADD";break}return t}function Q0(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function t_(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=Y0(e),l=K0(e),c=Z0(e),u=J0(e),f=Q0(e),m=e.isWebGL2?"":k0(e),_=H0(s),y=r.createProgram();let p,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Nr).join(`
`),p.length>0&&(p+=`
`),d=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(Nr).join(`
`),d.length>0&&(d+=`
`)):(p=[wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Nr).join(`
`),d=[m,wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ai?"#define TONE_MAPPING":"",e.toneMapping!==ai?Ht.tonemapping_pars_fragment:"",e.toneMapping!==ai?z0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ht.colorspace_pars_fragment,B0("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Nr).join(`
`)),o=So(o),o=El(o,e),o=Sl(o,e),a=So(a),a=El(a,e),a=Sl(a,e),o=bl(o),a=bl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Vh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const g=b+p+o,v=b+d+a,x=Ml(r,r.VERTEX_SHADER,g),R=Ml(r,r.FRAGMENT_SHADER,v);r.attachShader(y,x),r.attachShader(y,R),e.index0AttributeName!==void 0?r.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(L){if(n.debug.checkShaderErrors){const D=r.getProgramInfoLog(y).trim(),j=r.getShaderInfoLog(x).trim(),N=r.getShaderInfoLog(R).trim();let z=!0,q=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(z=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,y,x,R);else{const $=xl(r,x,"vertex"),et=xl(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Program Info Log: `+D+`
`+$+`
`+et)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(j===""||N==="")&&(q=!1);q&&(L.diagnostics={runnable:z,programLog:D,vertexShader:{log:j,prefix:p},fragmentShader:{log:N,prefix:d}})}r.deleteShader(x),r.deleteShader(R),A=new Bs(r,y),M=V0(r,y)}let A;this.getUniforms=function(){return A===void 0&&T(this),A};let M;this.getAttributes=function(){return M===void 0&&T(this),M};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=r.getProgramParameter(y,U0)),E},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=O0++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=x,this.fragmentShader=R,this}let e_=0;class n_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new i_(t),e.set(t,i)),i}}class i_{constructor(t){this.id=e_++,this.code=t,this.usedTimes=0}}function r_(n,t,e,i,r,s,o){const a=new Oo,h=new n_,l=[],c=r.isWebGL2,u=r.logarithmicDepthBuffer,f=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(M){return M===0?"uv":`uv${M}`}function p(M,E,L,D,j){const N=D.fog,z=j.geometry,q=M.isMeshStandardMaterial?D.environment:null,$=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),et=$&&$.mapping===ra?$.image.height:null,Z=_[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const K=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,O=K!==void 0?K.length:0;let V=0;z.morphAttributes.position!==void 0&&(V=1),z.morphAttributes.normal!==void 0&&(V=2),z.morphAttributes.color!==void 0&&(V=3);let ut,pt,_t,Lt;if(Z){const me=wn[Z];ut=me.vertexShader,pt=me.fragmentShader}else ut=M.vertexShader,pt=M.fragmentShader,h.update(M),_t=h.getVertexShaderID(M),Lt=h.getFragmentShaderID(M);const Xt=n.getRenderTarget(),Pt=j.isInstancedMesh===!0,Ot=!!M.map,ae=!!M.matcap,kt=!!$,G=!!M.aoMap,Le=!!M.lightMap,bt=!!M.bumpMap,Dt=!!M.normalMap,Nt=!!M.displacementMap,he=!!M.emissiveMap,Bt=!!M.metalnessMap,Ft=!!M.roughnessMap,Zt=M.anisotropy>0,pe=M.clearcoat>0,Se=M.iridescence>0,C=M.sheen>0,S=M.transmission>0,B=Zt&&!!M.anisotropyMap,nt=pe&&!!M.clearcoatMap,J=pe&&!!M.clearcoatNormalMap,it=pe&&!!M.clearcoatRoughnessMap,Mt=Se&&!!M.iridescenceMap,ot=Se&&!!M.iridescenceThicknessMap,ft=C&&!!M.sheenColorMap,P=C&&!!M.sheenRoughnessMap,st=!!M.specularMap,Y=!!M.specularColorMap,Rt=!!M.specularIntensityMap,xt=S&&!!M.transmissionMap,wt=S&&!!M.thicknessMap,yt=!!M.gradientMap,vt=!!M.alphaMap,qt=M.alphaTest>0,I=!!M.alphaHash,ht=!!M.extensions,Q=!!z.attributes.uv1,X=!!z.attributes.uv2,rt=!!z.attributes.uv3;let St=ai;return M.toneMapped&&(Xt===null||Xt.isXRRenderTarget===!0)&&(St=n.toneMapping),{isWebGL2:c,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:ut,fragmentShader:pt,defines:M.defines,customVertexShaderID:_t,customFragmentShaderID:Lt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Pt,instancingColor:Pt&&j.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Xt===null?n.outputColorSpace:Xt.isXRRenderTarget===!0?Xt.texture.colorSpace:Wn,map:Ot,matcap:ae,envMap:kt,envMapMode:kt&&$.mapping,envMapCubeUVHeight:et,aoMap:G,lightMap:Le,bumpMap:bt,normalMap:Dt,displacementMap:f&&Nt,emissiveMap:he,normalMapObjectSpace:Dt&&M.normalMapType===ed,normalMapTangentSpace:Dt&&M.normalMapType===td,metalnessMap:Bt,roughnessMap:Ft,anisotropy:Zt,anisotropyMap:B,clearcoat:pe,clearcoatMap:nt,clearcoatNormalMap:J,clearcoatRoughnessMap:it,iridescence:Se,iridescenceMap:Mt,iridescenceThicknessMap:ot,sheen:C,sheenColorMap:ft,sheenRoughnessMap:P,specularMap:st,specularColorMap:Y,specularIntensityMap:Rt,transmission:S,transmissionMap:xt,thicknessMap:wt,gradientMap:yt,opaque:M.transparent===!1&&M.blending===ir,alphaMap:vt,alphaTest:qt,alphaHash:I,combine:M.combine,mapUv:Ot&&y(M.map.channel),aoMapUv:G&&y(M.aoMap.channel),lightMapUv:Le&&y(M.lightMap.channel),bumpMapUv:bt&&y(M.bumpMap.channel),normalMapUv:Dt&&y(M.normalMap.channel),displacementMapUv:Nt&&y(M.displacementMap.channel),emissiveMapUv:he&&y(M.emissiveMap.channel),metalnessMapUv:Bt&&y(M.metalnessMap.channel),roughnessMapUv:Ft&&y(M.roughnessMap.channel),anisotropyMapUv:B&&y(M.anisotropyMap.channel),clearcoatMapUv:nt&&y(M.clearcoatMap.channel),clearcoatNormalMapUv:J&&y(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&y(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&y(M.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&y(M.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&y(M.sheenColorMap.channel),sheenRoughnessMapUv:P&&y(M.sheenRoughnessMap.channel),specularMapUv:st&&y(M.specularMap.channel),specularColorMapUv:Y&&y(M.specularColorMap.channel),specularIntensityMapUv:Rt&&y(M.specularIntensityMap.channel),transmissionMapUv:xt&&y(M.transmissionMap.channel),thicknessMapUv:wt&&y(M.thicknessMap.channel),alphaMapUv:vt&&y(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Dt||Zt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:Q,vertexUv2s:X,vertexUv3s:rt,pointsUvs:j.isPoints===!0&&!!z.attributes.uv&&(Ot||vt),fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:j.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:V,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&L.length>0,shadowMapType:n.shadowMap.type,toneMapping:St,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ot&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bn,flipSided:M.side===We,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ht&&M.extensions.derivatives===!0,extensionFragDepth:ht&&M.extensions.fragDepth===!0,extensionDrawBuffers:ht&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){const E=[];if(M.shaderID?E.push(M.shaderID):(E.push(M.customVertexShaderID),E.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)E.push(L),E.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(b(E,M),g(E,M),E.push(n.outputColorSpace)),E.push(M.customProgramCacheKey),E.join()}function b(M,E){M.push(E.precision),M.push(E.outputColorSpace),M.push(E.envMapMode),M.push(E.envMapCubeUVHeight),M.push(E.mapUv),M.push(E.alphaMapUv),M.push(E.lightMapUv),M.push(E.aoMapUv),M.push(E.bumpMapUv),M.push(E.normalMapUv),M.push(E.displacementMapUv),M.push(E.emissiveMapUv),M.push(E.metalnessMapUv),M.push(E.roughnessMapUv),M.push(E.anisotropyMapUv),M.push(E.clearcoatMapUv),M.push(E.clearcoatNormalMapUv),M.push(E.clearcoatRoughnessMapUv),M.push(E.iridescenceMapUv),M.push(E.iridescenceThicknessMapUv),M.push(E.sheenColorMapUv),M.push(E.sheenRoughnessMapUv),M.push(E.specularMapUv),M.push(E.specularColorMapUv),M.push(E.specularIntensityMapUv),M.push(E.transmissionMapUv),M.push(E.thicknessMapUv),M.push(E.combine),M.push(E.fogExp2),M.push(E.sizeAttenuation),M.push(E.morphTargetsCount),M.push(E.morphAttributeCount),M.push(E.numDirLights),M.push(E.numPointLights),M.push(E.numSpotLights),M.push(E.numSpotLightMaps),M.push(E.numHemiLights),M.push(E.numRectAreaLights),M.push(E.numDirLightShadows),M.push(E.numPointLightShadows),M.push(E.numSpotLightShadows),M.push(E.numSpotLightShadowsWithMaps),M.push(E.numLightProbes),M.push(E.shadowMapType),M.push(E.toneMapping),M.push(E.numClippingPlanes),M.push(E.numClipIntersection),M.push(E.depthPacking)}function g(M,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function v(M){const E=_[M.type];let L;if(E){const D=wn[E];L=Vd.clone(D.uniforms)}else L=M.uniforms;return L}function x(M,E){let L;for(let D=0,j=l.length;D<j;D++){const N=l[D];if(N.cacheKey===E){L=N,++L.usedTimes;break}}return L===void 0&&(L=new t_(n,E,M,s),l.push(L)),L}function R(M){if(--M.usedTimes===0){const E=l.indexOf(M);l[E]=l[l.length-1],l.pop(),M.destroy()}}function T(M){h.remove(M)}function A(){h.dispose()}return{getParameters:p,getProgramCacheKey:d,getUniforms:v,acquireProgram:x,releaseProgram:R,releaseShaderCache:T,programs:l,dispose:A}}function s_(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function a_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Tl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Al(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(u,f,m,_,y,p){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:m,groupOrder:_,renderOrder:u.renderOrder,z:y,group:p},n[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=m,d.groupOrder=_,d.renderOrder=u.renderOrder,d.z=y,d.group=p),t++,d}function a(u,f,m,_,y,p){const d=o(u,f,m,_,y,p);m.transmission>0?i.push(d):m.transparent===!0?r.push(d):e.push(d)}function h(u,f,m,_,y,p){const d=o(u,f,m,_,y,p);m.transmission>0?i.unshift(d):m.transparent===!0?r.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||a_),i.length>1&&i.sort(f||Tl),r.length>1&&r.sort(f||Tl)}function c(){for(let u=t,f=n.length;u<f;u++){const m=n[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:h,finish:c,sort:l}}function o_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new Al,n.set(i,[o])):r>=s.length?(o=new Al,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function h_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Kt};break;case"SpotLight":e={position:new U,direction:new U,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function l_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new At,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let c_=0;function u_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function f_(n,t){const e=new h_,i=l_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new U);const s=new U,o=new de,a=new de;function h(c,u){let f=0,m=0,_=0;for(let D=0;D<9;D++)r.probe[D].set(0,0,0);let y=0,p=0,d=0,b=0,g=0,v=0,x=0,R=0,T=0,A=0,M=0;c.sort(u_);const E=u===!0?Math.PI:1;for(let D=0,j=c.length;D<j;D++){const N=c[D],z=N.color,q=N.intensity,$=N.distance,et=N.shadow&&N.shadow.map?N.shadow.map.texture:null;if(N.isAmbientLight)f+=z.r*q*E,m+=z.g*q*E,_+=z.b*q*E;else if(N.isLightProbe){for(let Z=0;Z<9;Z++)r.probe[Z].addScaledVector(N.sh.coefficients[Z],q);M++}else if(N.isDirectionalLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity*E),N.castShadow){const K=N.shadow,O=i.get(N);O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,r.directionalShadow[y]=O,r.directionalShadowMap[y]=et,r.directionalShadowMatrix[y]=N.shadow.matrix,v++}r.directional[y]=Z,y++}else if(N.isSpotLight){const Z=e.get(N);Z.position.setFromMatrixPosition(N.matrixWorld),Z.color.copy(z).multiplyScalar(q*E),Z.distance=$,Z.coneCos=Math.cos(N.angle),Z.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),Z.decay=N.decay,r.spot[d]=Z;const K=N.shadow;if(N.map&&(r.spotLightMap[T]=N.map,T++,K.updateMatrices(N),N.castShadow&&A++),r.spotLightMatrix[d]=K.matrix,N.castShadow){const O=i.get(N);O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,r.spotShadow[d]=O,r.spotShadowMap[d]=et,R++}d++}else if(N.isRectAreaLight){const Z=e.get(N);Z.color.copy(z).multiplyScalar(q),Z.halfWidth.set(N.width*.5,0,0),Z.halfHeight.set(0,N.height*.5,0),r.rectArea[b]=Z,b++}else if(N.isPointLight){const Z=e.get(N);if(Z.color.copy(N.color).multiplyScalar(N.intensity*E),Z.distance=N.distance,Z.decay=N.decay,N.castShadow){const K=N.shadow,O=i.get(N);O.shadowBias=K.bias,O.shadowNormalBias=K.normalBias,O.shadowRadius=K.radius,O.shadowMapSize=K.mapSize,O.shadowCameraNear=K.camera.near,O.shadowCameraFar=K.camera.far,r.pointShadow[p]=O,r.pointShadowMap[p]=et,r.pointShadowMatrix[p]=N.shadow.matrix,x++}r.point[p]=Z,p++}else if(N.isHemisphereLight){const Z=e.get(N);Z.skyColor.copy(N.color).multiplyScalar(q*E),Z.groundColor.copy(N.groundColor).multiplyScalar(q*E),r.hemi[g]=Z,g++}}b>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const L=r.hash;(L.directionalLength!==y||L.pointLength!==p||L.spotLength!==d||L.rectAreaLength!==b||L.hemiLength!==g||L.numDirectionalShadows!==v||L.numPointShadows!==x||L.numSpotShadows!==R||L.numSpotMaps!==T||L.numLightProbes!==M)&&(r.directional.length=y,r.spot.length=d,r.rectArea.length=b,r.point.length=p,r.hemi.length=g,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=R+T-A,r.spotLightMap.length=T,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=M,L.directionalLength=y,L.pointLength=p,L.spotLength=d,L.rectAreaLength=b,L.hemiLength=g,L.numDirectionalShadows=v,L.numPointShadows=x,L.numSpotShadows=R,L.numSpotMaps=T,L.numLightProbes=M,r.version=c_++)}function l(c,u){let f=0,m=0,_=0,y=0,p=0;const d=u.matrixWorldInverse;for(let b=0,g=c.length;b<g;b++){const v=c[b];if(v.isDirectionalLight){const x=r.directional[f];x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),f++}else if(v.isSpotLight){const x=r.spot[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),x.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(d),_++}else if(v.isRectAreaLight){const x=r.rectArea[y];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),a.identity(),o.copy(v.matrixWorld),o.premultiply(d),a.extractRotation(o),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),y++}else if(v.isPointLight){const x=r.point[m];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(d),m++}else if(v.isHemisphereLight){const x=r.hemi[p];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(d),p++}}}return{setup:h,setupView:l,state:r}}function Rl(n,t){const e=new f_(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(u){i.push(u)}function a(u){r.push(u)}function h(u){e.setup(i,u)}function l(u){e.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:h,setupLightsView:l,pushLight:o,pushShadow:a}}function d_(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let h;return a===void 0?(h=new Rl(n,t),e.set(s,[h])):o>=a.length?(h=new Rl(n,t),a.push(h)):h=a[o],h}function r(){e=new WeakMap}return{get:i,dispose:r}}class p_ extends pr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class m_ extends pr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
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
}`;function v_(n,t,e){let i=new Fo;const r=new At,s=new At,o=new Te,a=new p_({depthPacking:Qf}),h=new m_,l={},c=e.maxTextureSize,u={[Vn]:We,[We]:Vn,[Bn]:Bn},f=new Ti({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new At},radius:{value:4}},vertexShader:g_,fragmentShader:__}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new qe;_.setAttribute("position",new cn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Mn(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_c;let d=this.type;this.render=function(x,R,T){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const A=n.getRenderTarget(),M=n.getActiveCubeFace(),E=n.getActiveMipmapLevel(),L=n.state;L.setBlending(si),L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const D=d!==Fn&&this.type===Fn,j=d===Fn&&this.type!==Fn;for(let N=0,z=x.length;N<z;N++){const q=x[N],$=q.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;r.copy($.mapSize);const et=$.getFrameExtents();if(r.multiply(et),s.copy($.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/et.x),r.x=s.x*et.x,$.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/et.y),r.y=s.y*et.y,$.mapSize.y=s.y)),$.map===null||D===!0||j===!0){const K=this.type!==Fn?{minFilter:ke,magFilter:ke}:{};$.map!==null&&$.map.dispose(),$.map=new wi(r.x,r.y,K),$.map.texture.name=q.name+".shadowMap",$.camera.updateProjectionMatrix()}n.setRenderTarget($.map),n.clear();const Z=$.getViewportCount();for(let K=0;K<Z;K++){const O=$.getViewport(K);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),L.viewport(o),$.updateMatrices(q,K),i=$.getFrustum(),v(R,T,$.camera,q,this.type)}$.isPointLightShadow!==!0&&this.type===Fn&&b($,T),$.needsUpdate=!1}d=this.type,p.needsUpdate=!1,n.setRenderTarget(A,M,E)};function b(x,R){const T=t.update(y);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,m.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new wi(r.x,r.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(R,null,T,f,y,null),m.uniforms.shadow_pass.value=x.mapPass.texture,m.uniforms.resolution.value=x.mapSize,m.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(R,null,T,m,y,null)}function g(x,R,T,A){let M=null;const E=T.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(E!==void 0)M=E;else if(M=T.isPointLight===!0?h:a,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const L=M.uuid,D=R.uuid;let j=l[L];j===void 0&&(j={},l[L]=j);let N=j[D];N===void 0&&(N=M.clone(),j[D]=N),M=N}if(M.visible=R.visible,M.wireframe=R.wireframe,A===Fn?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,T.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const L=n.properties.get(M);L.light=T}return M}function v(x,R,T,A,M){if(x.visible===!1)return;if(x.layers.test(R.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===Fn)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,x.matrixWorld);const D=t.update(x),j=x.material;if(Array.isArray(j)){const N=D.groups;for(let z=0,q=N.length;z<q;z++){const $=N[z],et=j[$.materialIndex];if(et&&et.visible){const Z=g(x,et,A,M);n.renderBufferDirect(T,null,D,Z,x,$)}}}else if(j.visible){const N=g(x,j,A,M);n.renderBufferDirect(T,null,D,N,x,null)}}const L=x.children;for(let D=0,j=L.length;D<j;D++)v(L[D],R,T,A,M)}}function y_(n,t,e){const i=e.isWebGL2;function r(){let I=!1;const ht=new Te;let Q=null;const X=new Te(0,0,0,0);return{setMask:function(rt){Q!==rt&&!I&&(n.colorMask(rt,rt,rt,rt),Q=rt)},setLocked:function(rt){I=rt},setClear:function(rt,St,jt,me,en){en===!0&&(rt*=me,St*=me,jt*=me),ht.set(rt,St,jt,me),X.equals(ht)===!1&&(n.clearColor(rt,St,jt,me),X.copy(ht))},reset:function(){I=!1,Q=null,X.set(-1,0,0,0)}}}function s(){let I=!1,ht=null,Q=null,X=null;return{setTest:function(rt){rt?Ot(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(rt){ht!==rt&&!I&&(n.depthMask(rt),ht=rt)},setFunc:function(rt){if(Q!==rt){switch(rt){case Rf:n.depthFunc(n.NEVER);break;case Cf:n.depthFunc(n.ALWAYS);break;case Lf:n.depthFunc(n.LESS);break;case Ws:n.depthFunc(n.LEQUAL);break;case Pf:n.depthFunc(n.EQUAL);break;case Df:n.depthFunc(n.GEQUAL);break;case Nf:n.depthFunc(n.GREATER);break;case If:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=rt}},setLocked:function(rt){I=rt},setClear:function(rt){X!==rt&&(n.clearDepth(rt),X=rt)},reset:function(){I=!1,ht=null,Q=null,X=null}}}function o(){let I=!1,ht=null,Q=null,X=null,rt=null,St=null,jt=null,me=null,en=null;return{setTest:function(se){I||(se?Ot(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(se){ht!==se&&!I&&(n.stencilMask(se),ht=se)},setFunc:function(se,Oe,Sn){(Q!==se||X!==Oe||rt!==Sn)&&(n.stencilFunc(se,Oe,Sn),Q=se,X=Oe,rt=Sn)},setOp:function(se,Oe,Sn){(St!==se||jt!==Oe||me!==Sn)&&(n.stencilOp(se,Oe,Sn),St=se,jt=Oe,me=Sn)},setLocked:function(se){I=se},setClear:function(se){en!==se&&(n.clearStencil(se),en=se)},reset:function(){I=!1,ht=null,Q=null,X=null,rt=null,St=null,jt=null,me=null,en=null}}}const a=new r,h=new s,l=new o,c=new WeakMap,u=new WeakMap;let f={},m={},_=new WeakMap,y=[],p=null,d=!1,b=null,g=null,v=null,x=null,R=null,T=null,A=null,M=new Kt(0,0,0),E=0,L=!1,D=null,j=null,N=null,z=null,q=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let et=!1,Z=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(K)[1]),et=Z>=1):K.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),et=Z>=2);let O=null,V={};const ut=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),_t=new Te().fromArray(ut),Lt=new Te().fromArray(pt);function Xt(I,ht,Q,X){const rt=new Uint8Array(4),St=n.createTexture();n.bindTexture(I,St),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<Q;jt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(ht,0,n.RGBA,1,1,X,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(ht+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return St}const Pt={};Pt[n.TEXTURE_2D]=Xt(n.TEXTURE_2D,n.TEXTURE_2D,1),Pt[n.TEXTURE_CUBE_MAP]=Xt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Pt[n.TEXTURE_2D_ARRAY]=Xt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Pt[n.TEXTURE_3D]=Xt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),h.setClear(1),l.setClear(0),Ot(n.DEPTH_TEST),h.setFunc(Ws),Bt(!1),Ft(ch),Ot(n.CULL_FACE),Nt(si);function Ot(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function ae(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function kt(I,ht){return m[I]!==ht?(n.bindFramebuffer(I,ht),m[I]=ht,i&&(I===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=ht),I===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=ht)),!0):!1}function G(I,ht){let Q=y,X=!1;if(I)if(Q=_.get(ht),Q===void 0&&(Q=[],_.set(ht,Q)),I.isWebGLMultipleRenderTargets){const rt=I.texture;if(Q.length!==rt.length||Q[0]!==n.COLOR_ATTACHMENT0){for(let St=0,jt=rt.length;St<jt;St++)Q[St]=n.COLOR_ATTACHMENT0+St;Q.length=rt.length,X=!0}}else Q[0]!==n.COLOR_ATTACHMENT0&&(Q[0]=n.COLOR_ATTACHMENT0,X=!0);else Q[0]!==n.BACK&&(Q[0]=n.BACK,X=!0);X&&(e.isWebGL2?n.drawBuffers(Q):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function Le(I){return p!==I?(n.useProgram(I),p=I,!0):!1}const bt={[Mi]:n.FUNC_ADD,[df]:n.FUNC_SUBTRACT,[pf]:n.FUNC_REVERSE_SUBTRACT};if(i)bt[ph]=n.MIN,bt[mh]=n.MAX;else{const I=t.get("EXT_blend_minmax");I!==null&&(bt[ph]=I.MIN_EXT,bt[mh]=I.MAX_EXT)}const Dt={[mf]:n.ZERO,[gf]:n.ONE,[_f]:n.SRC_COLOR,[po]:n.SRC_ALPHA,[Sf]:n.SRC_ALPHA_SATURATE,[xf]:n.DST_COLOR,[yf]:n.DST_ALPHA,[vf]:n.ONE_MINUS_SRC_COLOR,[mo]:n.ONE_MINUS_SRC_ALPHA,[Ef]:n.ONE_MINUS_DST_COLOR,[Mf]:n.ONE_MINUS_DST_ALPHA,[bf]:n.CONSTANT_COLOR,[wf]:n.ONE_MINUS_CONSTANT_COLOR,[Tf]:n.CONSTANT_ALPHA,[Af]:n.ONE_MINUS_CONSTANT_ALPHA};function Nt(I,ht,Q,X,rt,St,jt,me,en,se){if(I===si){d===!0&&(ae(n.BLEND),d=!1);return}if(d===!1&&(Ot(n.BLEND),d=!0),I!==ff){if(I!==b||se!==L){if((g!==Mi||R!==Mi)&&(n.blendEquation(n.FUNC_ADD),g=Mi,R=Mi),se)switch(I){case ir:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uh:n.blendFunc(n.ONE,n.ONE);break;case fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case uh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case fh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case dh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,x=null,T=null,A=null,M.set(0,0,0),E=0,b=I,L=se}return}rt=rt||ht,St=St||Q,jt=jt||X,(ht!==g||rt!==R)&&(n.blendEquationSeparate(bt[ht],bt[rt]),g=ht,R=rt),(Q!==v||X!==x||St!==T||jt!==A)&&(n.blendFuncSeparate(Dt[Q],Dt[X],Dt[St],Dt[jt]),v=Q,x=X,T=St,A=jt),(me.equals(M)===!1||en!==E)&&(n.blendColor(me.r,me.g,me.b,en),M.copy(me),E=en),b=I,L=!1}function he(I,ht){I.side===Bn?ae(n.CULL_FACE):Ot(n.CULL_FACE);let Q=I.side===We;ht&&(Q=!Q),Bt(Q),I.blending===ir&&I.transparent===!1?Nt(si):Nt(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),h.setFunc(I.depthFunc),h.setTest(I.depthTest),h.setMask(I.depthWrite),a.setMask(I.colorWrite);const X=I.stencilWrite;l.setTest(X),X&&(l.setMask(I.stencilWriteMask),l.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),l.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),pe(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Ot(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function Bt(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function Ft(I){I!==lf?(Ot(n.CULL_FACE),I!==j&&(I===ch?n.cullFace(n.BACK):I===cf?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),j=I}function Zt(I){I!==N&&(et&&n.lineWidth(I),N=I)}function pe(I,ht,Q){I?(Ot(n.POLYGON_OFFSET_FILL),(z!==ht||q!==Q)&&(n.polygonOffset(ht,Q),z=ht,q=Q)):ae(n.POLYGON_OFFSET_FILL)}function Se(I){I?Ot(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function C(I){I===void 0&&(I=n.TEXTURE0+$-1),O!==I&&(n.activeTexture(I),O=I)}function S(I,ht,Q){Q===void 0&&(O===null?Q=n.TEXTURE0+$-1:Q=O);let X=V[Q];X===void 0&&(X={type:void 0,texture:void 0},V[Q]=X),(X.type!==I||X.texture!==ht)&&(O!==Q&&(n.activeTexture(Q),O=Q),n.bindTexture(I,ht||Pt[I]),X.type=I,X.texture=ht)}function B(){const I=V[O];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function nt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Mt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(I){_t.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),_t.copy(I))}function wt(I){Lt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Lt.copy(I))}function yt(I,ht){let Q=u.get(ht);Q===void 0&&(Q=new WeakMap,u.set(ht,Q));let X=Q.get(I);X===void 0&&(X=n.getUniformBlockIndex(ht,I.name),Q.set(I,X))}function vt(I,ht){const X=u.get(ht).get(I);c.get(ht)!==X&&(n.uniformBlockBinding(ht,X,I.__bindingPointIndex),c.set(ht,X))}function qt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},O=null,V={},m={},_=new WeakMap,y=[],p=null,d=!1,b=null,g=null,v=null,x=null,R=null,T=null,A=null,M=new Kt(0,0,0),E=0,L=!1,D=null,j=null,N=null,z=null,q=null,_t.set(0,0,n.canvas.width,n.canvas.height),Lt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),h.reset(),l.reset()}return{buffers:{color:a,depth:h,stencil:l},enable:Ot,disable:ae,bindFramebuffer:kt,drawBuffers:G,useProgram:Le,setBlending:Nt,setMaterial:he,setFlipSided:Bt,setCullFace:Ft,setLineWidth:Zt,setPolygonOffset:pe,setScissorTest:Se,activeTexture:C,bindTexture:S,unbindTexture:B,compressedTexImage2D:nt,compressedTexImage3D:J,texImage2D:Y,texImage3D:Rt,updateUBOMapping:yt,uniformBlockBinding:vt,texStorage2D:P,texStorage3D:st,texSubImage2D:it,texSubImage3D:Mt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:xt,viewport:wt,reset:qt}}function M_(n,t,e,i,r,s,o){const a=r.isWebGL2,h=r.maxTextures,l=r.maxCubemapSize,c=r.maxTextureSize,u=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let y;const p=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(C,S){return d?new OffscreenCanvas(C,S):Ks("canvas")}function g(C,S,B,nt){let J=1;if((C.width>nt||C.height>nt)&&(J=nt/Math.max(C.width,C.height)),J<1||S===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const it=S?Ys:Math.floor,Mt=it(J*C.width),ot=it(J*C.height);y===void 0&&(y=b(Mt,ot));const ft=B?b(Mt,ot):y;return ft.width=Mt,ft.height=ot,ft.getContext("2d").drawImage(C,0,0,Mt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+Mt+"x"+ot+")."),ft}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return Eo(C.width)&&Eo(C.height)}function x(C){return a?!1:C.wrapS!==_n||C.wrapT!==_n||C.minFilter!==ke&&C.minFilter!==an}function R(C,S){return C.generateMipmaps&&S&&C.minFilter!==ke&&C.minFilter!==an}function T(C){n.generateMipmap(C)}function A(C,S,B,nt,J=!1){if(a===!1)return S;if(C!==null){if(n[C]!==void 0)return n[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let it=S;if(S===n.RED&&(B===n.FLOAT&&(it=n.R32F),B===n.HALF_FLOAT&&(it=n.R16F),B===n.UNSIGNED_BYTE&&(it=n.R8)),S===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(it=n.R8UI),B===n.UNSIGNED_SHORT&&(it=n.R16UI),B===n.UNSIGNED_INT&&(it=n.R32UI),B===n.BYTE&&(it=n.R8I),B===n.SHORT&&(it=n.R16I),B===n.INT&&(it=n.R32I)),S===n.RG&&(B===n.FLOAT&&(it=n.RG32F),B===n.HALF_FLOAT&&(it=n.RG16F),B===n.UNSIGNED_BYTE&&(it=n.RG8)),S===n.RGBA){const Mt=J?$s:ee.getTransfer(nt);B===n.FLOAT&&(it=n.RGBA32F),B===n.HALF_FLOAT&&(it=n.RGBA16F),B===n.UNSIGNED_BYTE&&(it=Mt===oe?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function M(C,S,B){return R(C,B)===!0||C.isFramebufferTexture&&C.minFilter!==ke&&C.minFilter!==an?Math.log2(Math.max(S.width,S.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?S.mipmaps.length:1}function E(C){return C===ke||C===gh||C===Ea?n.NEAREST:n.LINEAR}function L(C){const S=C.target;S.removeEventListener("dispose",L),j(S),S.isVideoTexture&&_.delete(S)}function D(C){const S=C.target;S.removeEventListener("dispose",D),z(S)}function j(C){const S=i.get(C);if(S.__webglInit===void 0)return;const B=C.source,nt=p.get(B);if(nt){const J=nt[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(C),Object.keys(nt).length===0&&p.delete(B)}i.remove(C)}function N(C){const S=i.get(C);n.deleteTexture(S.__webglTexture);const B=C.source,nt=p.get(B);delete nt[S.__cacheKey],o.memory.textures--}function z(C){const S=C.texture,B=i.get(C),nt=i.get(S);if(nt.__webglTexture!==void 0&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(B.__webglFramebuffer[J]))for(let it=0;it<B.__webglFramebuffer[J].length;it++)n.deleteFramebuffer(B.__webglFramebuffer[J][it]);else n.deleteFramebuffer(B.__webglFramebuffer[J]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[J])}else{if(Array.isArray(B.__webglFramebuffer))for(let J=0;J<B.__webglFramebuffer.length;J++)n.deleteFramebuffer(B.__webglFramebuffer[J]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let J=0;J<B.__webglColorRenderbuffer.length;J++)B.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[J]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let J=0,it=S.length;J<it;J++){const Mt=i.get(S[J]);Mt.__webglTexture&&(n.deleteTexture(Mt.__webglTexture),o.memory.textures--),i.remove(S[J])}i.remove(S),i.remove(C)}let q=0;function $(){q=0}function et(){const C=q;return C>=h&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+h),q+=1,C}function Z(C){const S=[];return S.push(C.wrapS),S.push(C.wrapT),S.push(C.wrapR||0),S.push(C.magFilter),S.push(C.minFilter),S.push(C.anisotropy),S.push(C.internalFormat),S.push(C.format),S.push(C.type),S.push(C.generateMipmaps),S.push(C.premultiplyAlpha),S.push(C.flipY),S.push(C.unpackAlignment),S.push(C.colorSpace),S.join()}function K(C,S){const B=i.get(C);if(C.isVideoTexture&&pe(C),C.isRenderTargetTexture===!1&&C.version>0&&B.__version!==C.version){const nt=C.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ot(B,C,S);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+S)}function O(C,S){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Ot(B,C,S);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+S)}function V(C,S){const B=i.get(C);if(C.version>0&&B.__version!==C.version){Ot(B,C,S);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+S)}function ut(C,S){const B=i.get(C);if(C.version>0&&B.__version!==C.version){ae(B,C,S);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+S)}const pt={[vo]:n.REPEAT,[_n]:n.CLAMP_TO_EDGE,[yo]:n.MIRRORED_REPEAT},_t={[ke]:n.NEAREST,[gh]:n.NEAREST_MIPMAP_NEAREST,[Ea]:n.NEAREST_MIPMAP_LINEAR,[an]:n.LINEAR,[Hf]:n.LINEAR_MIPMAP_NEAREST,[Vr]:n.LINEAR_MIPMAP_LINEAR},Lt={[nd]:n.NEVER,[ld]:n.ALWAYS,[id]:n.LESS,[sd]:n.LEQUAL,[rd]:n.EQUAL,[hd]:n.GEQUAL,[ad]:n.GREATER,[od]:n.NOTEQUAL};function Xt(C,S,B){if(B?(n.texParameteri(C,n.TEXTURE_WRAP_S,pt[S.wrapS]),n.texParameteri(C,n.TEXTURE_WRAP_T,pt[S.wrapT]),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,pt[S.wrapR]),n.texParameteri(C,n.TEXTURE_MAG_FILTER,_t[S.magFilter]),n.texParameteri(C,n.TEXTURE_MIN_FILTER,_t[S.minFilter])):(n.texParameteri(C,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(C,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY)&&n.texParameteri(C,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(S.wrapS!==_n||S.wrapT!==_n)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(C,n.TEXTURE_MAG_FILTER,E(S.magFilter)),n.texParameteri(C,n.TEXTURE_MIN_FILTER,E(S.minFilter)),S.minFilter!==ke&&S.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),S.compareFunction&&(n.texParameteri(C,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(C,n.TEXTURE_COMPARE_FUNC,Lt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(S.magFilter===ke||S.minFilter!==Ea&&S.minFilter!==Vr||S.type===ri&&t.has("OES_texture_float_linear")===!1||a===!1&&S.type===Wr&&t.has("OES_texture_half_float_linear")===!1)return;(S.anisotropy>1||i.get(S).__currentAnisotropy)&&(n.texParameterf(C,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy)}}function Pt(C,S){let B=!1;C.__webglInit===void 0&&(C.__webglInit=!0,S.addEventListener("dispose",L));const nt=S.source;let J=p.get(nt);J===void 0&&(J={},p.set(nt,J));const it=Z(S);if(it!==C.__cacheKey){J[it]===void 0&&(J[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,B=!0),J[it].usedTimes++;const Mt=J[C.__cacheKey];Mt!==void 0&&(J[C.__cacheKey].usedTimes--,Mt.usedTimes===0&&N(S)),C.__cacheKey=it,C.__webglTexture=J[it].texture}return B}function Ot(C,S,B){let nt=n.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),S.isData3DTexture&&(nt=n.TEXTURE_3D);const J=Pt(C,S),it=S.source;e.bindTexture(nt,C.__webglTexture,n.TEXTURE0+B);const Mt=i.get(it);if(it.version!==Mt.__version||J===!0){e.activeTexture(n.TEXTURE0+B);const ot=ee.getPrimaries(ee.workingColorSpace),ft=S.colorSpace===ln?null:ee.getPrimaries(S.colorSpace),P=S.colorSpace===ln||ot===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,P);const st=x(S)&&v(S.image)===!1;let Y=g(S.image,st,!1,c);Y=Se(S,Y);const Rt=v(Y)||a,xt=s.convert(S.format,S.colorSpace);let wt=s.convert(S.type),yt=A(S.internalFormat,xt,wt,S.colorSpace,S.isVideoTexture);Xt(nt,S,Rt);let vt;const qt=S.mipmaps,I=a&&S.isVideoTexture!==!0,ht=Mt.__version===void 0||J===!0,Q=M(S,Y,Rt);if(S.isDepthTexture)yt=n.DEPTH_COMPONENT,a?S.type===ri?yt=n.DEPTH_COMPONENT32F:S.type===ii?yt=n.DEPTH_COMPONENT24:S.type===Ei?yt=n.DEPTH24_STENCIL8:yt=n.DEPTH_COMPONENT16:S.type===ri&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),S.format===Si&&yt===n.DEPTH_COMPONENT&&S.type!==No&&S.type!==ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),S.type=ii,wt=s.convert(S.type)),S.format===cr&&yt===n.DEPTH_COMPONENT&&(yt=n.DEPTH_STENCIL,S.type!==Ei&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),S.type=Ei,wt=s.convert(S.type))),ht&&(I?e.texStorage2D(n.TEXTURE_2D,1,yt,Y.width,Y.height):e.texImage2D(n.TEXTURE_2D,0,yt,Y.width,Y.height,0,xt,wt,null));else if(S.isDataTexture)if(qt.length>0&&Rt){I&&ht&&e.texStorage2D(n.TEXTURE_2D,Q,yt,qt[0].width,qt[0].height);for(let X=0,rt=qt.length;X<rt;X++)vt=qt[X],I?e.texSubImage2D(n.TEXTURE_2D,X,0,0,vt.width,vt.height,xt,wt,vt.data):e.texImage2D(n.TEXTURE_2D,X,yt,vt.width,vt.height,0,xt,wt,vt.data);S.generateMipmaps=!1}else I?(ht&&e.texStorage2D(n.TEXTURE_2D,Q,yt,Y.width,Y.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Y.width,Y.height,xt,wt,Y.data)):e.texImage2D(n.TEXTURE_2D,0,yt,Y.width,Y.height,0,xt,wt,Y.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){I&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Q,yt,qt[0].width,qt[0].height,Y.depth);for(let X=0,rt=qt.length;X<rt;X++)vt=qt[X],S.format!==vn?xt!==null?I?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,Y.depth,xt,vt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,X,yt,vt.width,vt.height,Y.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?e.texSubImage3D(n.TEXTURE_2D_ARRAY,X,0,0,0,vt.width,vt.height,Y.depth,xt,wt,vt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,X,yt,vt.width,vt.height,Y.depth,0,xt,wt,vt.data)}else{I&&ht&&e.texStorage2D(n.TEXTURE_2D,Q,yt,qt[0].width,qt[0].height);for(let X=0,rt=qt.length;X<rt;X++)vt=qt[X],S.format!==vn?xt!==null?I?e.compressedTexSubImage2D(n.TEXTURE_2D,X,0,0,vt.width,vt.height,xt,vt.data):e.compressedTexImage2D(n.TEXTURE_2D,X,yt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?e.texSubImage2D(n.TEXTURE_2D,X,0,0,vt.width,vt.height,xt,wt,vt.data):e.texImage2D(n.TEXTURE_2D,X,yt,vt.width,vt.height,0,xt,wt,vt.data)}else if(S.isDataArrayTexture)I?(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Q,yt,Y.width,Y.height,Y.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,xt,wt,Y.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,Y.width,Y.height,Y.depth,0,xt,wt,Y.data);else if(S.isData3DTexture)I?(ht&&e.texStorage3D(n.TEXTURE_3D,Q,yt,Y.width,Y.height,Y.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,xt,wt,Y.data)):e.texImage3D(n.TEXTURE_3D,0,yt,Y.width,Y.height,Y.depth,0,xt,wt,Y.data);else if(S.isFramebufferTexture){if(ht)if(I)e.texStorage2D(n.TEXTURE_2D,Q,yt,Y.width,Y.height);else{let X=Y.width,rt=Y.height;for(let St=0;St<Q;St++)e.texImage2D(n.TEXTURE_2D,St,yt,X,rt,0,xt,wt,null),X>>=1,rt>>=1}}else if(qt.length>0&&Rt){I&&ht&&e.texStorage2D(n.TEXTURE_2D,Q,yt,qt[0].width,qt[0].height);for(let X=0,rt=qt.length;X<rt;X++)vt=qt[X],I?e.texSubImage2D(n.TEXTURE_2D,X,0,0,xt,wt,vt):e.texImage2D(n.TEXTURE_2D,X,yt,xt,wt,vt);S.generateMipmaps=!1}else I?(ht&&e.texStorage2D(n.TEXTURE_2D,Q,yt,Y.width,Y.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,wt,Y)):e.texImage2D(n.TEXTURE_2D,0,yt,xt,wt,Y);R(S,Rt)&&T(nt),Mt.__version=it.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function ae(C,S,B){if(S.image.length!==6)return;const nt=Pt(C,S),J=S.source;e.bindTexture(n.TEXTURE_CUBE_MAP,C.__webglTexture,n.TEXTURE0+B);const it=i.get(J);if(J.version!==it.__version||nt===!0){e.activeTexture(n.TEXTURE0+B);const Mt=ee.getPrimaries(ee.workingColorSpace),ot=S.colorSpace===ln?null:ee.getPrimaries(S.colorSpace),ft=S.colorSpace===ln||Mt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const P=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,Y=[];for(let X=0;X<6;X++)!P&&!st?Y[X]=g(S.image[X],!1,!0,l):Y[X]=st?S.image[X].image:S.image[X],Y[X]=Se(S,Y[X]);const Rt=Y[0],xt=v(Rt)||a,wt=s.convert(S.format,S.colorSpace),yt=s.convert(S.type),vt=A(S.internalFormat,wt,yt,S.colorSpace),qt=a&&S.isVideoTexture!==!0,I=it.__version===void 0||nt===!0;let ht=M(S,Rt,xt);Xt(n.TEXTURE_CUBE_MAP,S,xt);let Q;if(P){qt&&I&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,vt,Rt.width,Rt.height);for(let X=0;X<6;X++){Q=Y[X].mipmaps;for(let rt=0;rt<Q.length;rt++){const St=Q[rt];S.format!==vn?wt!==null?qt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt,0,0,St.width,St.height,wt,St.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt,vt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt,0,0,St.width,St.height,wt,yt,St.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt,vt,St.width,St.height,0,wt,yt,St.data)}}}else{Q=S.mipmaps,qt&&I&&(Q.length>0&&ht++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,vt,Y[0].width,Y[0].height));for(let X=0;X<6;X++)if(st){qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,Y[X].width,Y[X].height,wt,yt,Y[X].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,vt,Y[X].width,Y[X].height,0,wt,yt,Y[X].data);for(let rt=0;rt<Q.length;rt++){const jt=Q[rt].image[X].image;qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt+1,0,0,jt.width,jt.height,wt,yt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt+1,vt,jt.width,jt.height,0,wt,yt,jt.data)}}else{qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,wt,yt,Y[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,vt,wt,yt,Y[X]);for(let rt=0;rt<Q.length;rt++){const St=Q[rt];qt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt+1,0,0,wt,yt,St.image[X]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+X,rt+1,vt,wt,yt,St.image[X])}}}R(S,xt)&&T(n.TEXTURE_CUBE_MAP),it.__version=J.version,S.onUpdate&&S.onUpdate(S)}C.__version=S.version}function kt(C,S,B,nt,J,it){const Mt=s.convert(B.format,B.colorSpace),ot=s.convert(B.type),ft=A(B.internalFormat,Mt,ot,B.colorSpace);if(!i.get(S).__hasExternalTextures){const st=Math.max(1,S.width>>it),Y=Math.max(1,S.height>>it);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?e.texImage3D(J,it,ft,st,Y,S.depth,0,Mt,ot,null):e.texImage2D(J,it,ft,st,Y,0,Mt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,C),Zt(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,J,i.get(B).__webglTexture,0,Ft(S)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,J,i.get(B).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function G(C,S,B){if(n.bindRenderbuffer(n.RENDERBUFFER,C),S.depthBuffer&&!S.stencilBuffer){let nt=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||Zt(S)){const J=S.depthTexture;J&&J.isDepthTexture&&(J.type===ri?nt=n.DEPTH_COMPONENT32F:J.type===ii&&(nt=n.DEPTH_COMPONENT24));const it=Ft(S);Zt(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,nt,S.width,S.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,it,nt,S.width,S.height)}else n.renderbufferStorage(n.RENDERBUFFER,nt,S.width,S.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,C)}else if(S.depthBuffer&&S.stencilBuffer){const nt=Ft(S);B&&Zt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,n.DEPTH24_STENCIL8,S.width,S.height):Zt(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,n.DEPTH24_STENCIL8,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,S.width,S.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,C)}else{const nt=S.isWebGLMultipleRenderTargets===!0?S.texture:[S.texture];for(let J=0;J<nt.length;J++){const it=nt[J],Mt=s.convert(it.format,it.colorSpace),ot=s.convert(it.type),ft=A(it.internalFormat,Mt,ot,it.colorSpace),P=Ft(S);B&&Zt(S)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,P,ft,S.width,S.height):Zt(S)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P,ft,S.width,S.height):n.renderbufferStorage(n.RENDERBUFFER,ft,S.width,S.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Le(C,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,C),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const nt=i.get(S.depthTexture).__webglTexture,J=Ft(S);if(S.depthTexture.format===Si)Zt(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(S.depthTexture.format===cr)Zt(S)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function bt(C){const S=i.get(C),B=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Le(S.__webglFramebuffer,C)}else if(B){S.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer[nt]),S.__webglDepthbuffer[nt]=n.createRenderbuffer(),G(S.__webglDepthbuffer[nt],C,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=n.createRenderbuffer(),G(S.__webglDepthbuffer,C,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(C,S,B){const nt=i.get(C);S!==void 0&&kt(nt.__webglFramebuffer,C,C.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&bt(C)}function Nt(C){const S=C.texture,B=i.get(C),nt=i.get(S);C.addEventListener("dispose",D),C.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=S.version,o.memory.textures++);const J=C.isWebGLCubeRenderTarget===!0,it=C.isWebGLMultipleRenderTargets===!0,Mt=v(C)||a;if(J){B.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ot]=[];for(let ft=0;ft<S.mipmaps.length;ft++)B.__webglFramebuffer[ot][ft]=n.createFramebuffer()}else B.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(a&&S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)B.__webglFramebuffer[ot]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(it)if(r.drawBuffers){const ot=C.texture;for(let ft=0,P=ot.length;ft<P;ft++){const st=i.get(ot[ft]);st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&Zt(C)===!1){const ot=it?S:[S];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ft=0;ft<ot.length;ft++){const P=ot[ft];B.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[ft]);const st=s.convert(P.format,P.colorSpace),Y=s.convert(P.type),Rt=A(P.internalFormat,st,Y,P.colorSpace,C.isXRRenderTarget===!0),xt=Ft(C);n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,Rt,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,B.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),C.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),G(B.__webglDepthRenderbuffer,C,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(J){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),Xt(n.TEXTURE_CUBE_MAP,S,Mt);for(let ot=0;ot<6;ot++)if(a&&S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)kt(B.__webglFramebuffer[ot][ft],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else kt(B.__webglFramebuffer[ot],C,S,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);R(S,Mt)&&T(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const ot=C.texture;for(let ft=0,P=ot.length;ft<P;ft++){const st=ot[ft],Y=i.get(st);e.bindTexture(n.TEXTURE_2D,Y.__webglTexture),Xt(n.TEXTURE_2D,st,Mt),kt(B.__webglFramebuffer,C,st,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),R(st,Mt)&&T(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?ot=C.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,nt.__webglTexture),Xt(ot,S,Mt),a&&S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)kt(B.__webglFramebuffer[ft],C,S,n.COLOR_ATTACHMENT0,ot,ft);else kt(B.__webglFramebuffer,C,S,n.COLOR_ATTACHMENT0,ot,0);R(S,Mt)&&T(ot),e.unbindTexture()}C.depthBuffer&&bt(C)}function he(C){const S=v(C)||a,B=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let nt=0,J=B.length;nt<J;nt++){const it=B[nt];if(R(it,S)){const Mt=C.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ot=i.get(it).__webglTexture;e.bindTexture(Mt,ot),T(Mt),e.unbindTexture()}}}function Bt(C){if(a&&C.samples>0&&Zt(C)===!1){const S=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],B=C.width,nt=C.height;let J=n.COLOR_BUFFER_BIT;const it=[],Mt=C.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(C),ft=C.isWebGLMultipleRenderTargets===!0;if(ft)for(let P=0;P<S.length;P++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let P=0;P<S.length;P++){it.push(n.COLOR_ATTACHMENT0+P),C.depthBuffer&&it.push(Mt);const st=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(st===!1&&(C.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),C.stencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ft&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[P]),st===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Mt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Mt])),ft){const Y=i.get(S[P]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Y,0)}n.blitFramebuffer(0,0,B,nt,0,0,B,nt,J,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let P=0;P<S.length;P++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.RENDERBUFFER,ot.__webglColorRenderbuffer[P]);const st=i.get(S[P]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+P,n.TEXTURE_2D,st,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function Ft(C){return Math.min(u,C.samples)}function Zt(C){const S=i.get(C);return a&&C.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function pe(C){const S=o.render.frame;_.get(C)!==S&&(_.set(C,S),C.update())}function Se(C,S){const B=C.colorSpace,nt=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===xo||B!==Wn&&B!==ln&&(ee.getTransfer(B)===oe?a===!1?t.has("EXT_sRGB")===!0&&nt===vn?(C.format=xo,C.minFilter=an,C.generateMipmaps=!1):S=Rc.sRGBToLinear(S):(nt!==vn||J!==oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}this.allocateTextureUnit=et,this.resetTextureUnits=$,this.setTexture2D=K,this.setTexture2DArray=O,this.setTexture3D=V,this.setTextureCube=ut,this.rebindTextures=Dt,this.setupRenderTarget=Nt,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=Bt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=kt,this.useMultisampledRTT=Zt}function x_(n,t,e){const i=e.isWebGL2;function r(s,o=ln){let a;const h=ee.getTransfer(o);if(s===oi)return n.UNSIGNED_BYTE;if(s===xc)return n.UNSIGNED_SHORT_4_4_4_4;if(s===Ec)return n.UNSIGNED_SHORT_5_5_5_1;if(s===Vf)return n.BYTE;if(s===Wf)return n.SHORT;if(s===No)return n.UNSIGNED_SHORT;if(s===Mc)return n.INT;if(s===ii)return n.UNSIGNED_INT;if(s===ri)return n.FLOAT;if(s===Wr)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===$f)return n.ALPHA;if(s===vn)return n.RGBA;if(s===Xf)return n.LUMINANCE;if(s===qf)return n.LUMINANCE_ALPHA;if(s===Si)return n.DEPTH_COMPONENT;if(s===cr)return n.DEPTH_STENCIL;if(s===xo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===jf)return n.RED;if(s===Sc)return n.RED_INTEGER;if(s===Yf)return n.RG;if(s===bc)return n.RG_INTEGER;if(s===wc)return n.RGBA_INTEGER;if(s===Sa||s===ba||s===wa||s===Ta)if(h===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Sa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Sa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===wa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ta)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===_h||s===vh||s===yh||s===Mh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===_h)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===vh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===yh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Mh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Kf)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xh||s===Eh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xh)return h===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Eh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sh||s===bh||s===wh||s===Th||s===Ah||s===Rh||s===Ch||s===Lh||s===Ph||s===Dh||s===Nh||s===Ih||s===Uh||s===Oh)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Sh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===bh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===wh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Th)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Ah)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Rh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ch)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Lh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Ph)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Dh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Ih)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Uh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Oh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Aa||s===Fh||s===Gh)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Aa)return h===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Fh)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Gh)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Zf||s===Bh||s===zh||s===kh)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Aa)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Bh)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===zh)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===kh)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ei?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class E_ extends hn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ue extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const S_={type:"move"};class Ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const y of t.hand.values()){const p=e.getJointPose(y,i),d=this._getHandJoint(l,y);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),m=.02,_=.005;l.inputState.pinching&&f>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(S_)))}return a!==null&&(a.visible=r!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Ue;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class b_ extends $e{constructor(t,e,i,r,s,o,a,h,l,c){if(c=c!==void 0?c:Si,c!==Si&&c!==cr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Si&&(i=ii),i===void 0&&c===cr&&(i=Ei),super(null,r,s,o,a,h,c,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ke,this.minFilter=h!==void 0?h:ke,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class w_ extends Ci{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",h=1,l=null,c=null,u=null,f=null,m=null,_=null;const y=e.getContextAttributes();let p=null,d=null;const b=[],g=[],v=new hn;v.layers.enable(1),v.viewport=new Te;const x=new hn;x.layers.enable(2),x.viewport=new Te;const R=[v,x],T=new E_;T.layers.enable(1),T.layers.enable(2);let A=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let V=b[O];return V===void 0&&(V=new Ka,b[O]=V),V.getTargetRaySpace()},this.getControllerGrip=function(O){let V=b[O];return V===void 0&&(V=new Ka,b[O]=V),V.getGripSpace()},this.getHand=function(O){let V=b[O];return V===void 0&&(V=new Ka,b[O]=V),V.getHandSpace()};function E(O){const V=g.indexOf(O.inputSource);if(V===-1)return;const ut=b[V];ut!==void 0&&(ut.update(O.inputSource,O.frame,l||o),ut.dispatchEvent({type:O.type,data:O.inputSource}))}function L(){r.removeEventListener("select",E),r.removeEventListener("selectstart",E),r.removeEventListener("selectend",E),r.removeEventListener("squeeze",E),r.removeEventListener("squeezestart",E),r.removeEventListener("squeezeend",E),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",D);for(let O=0;O<b.length;O++){const V=g[O];V!==null&&(g[O]=null,b[O].disconnect(V))}A=null,M=null,t.setRenderTarget(p),m=null,f=null,u=null,r=null,d=null,K.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",E),r.addEventListener("selectstart",E),r.addEventListener("selectend",E),r.addEventListener("squeeze",E),r.addEventListener("squeezestart",E),r.addEventListener("squeezeend",E),r.addEventListener("end",L),r.addEventListener("inputsourceschange",D),y.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const V={antialias:r.renderState.layers===void 0?y.antialias:!0,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,V),r.updateRenderState({baseLayer:m}),d=new wi(m.framebufferWidth,m.framebufferHeight,{format:vn,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}else{let V=null,ut=null,pt=null;y.depth&&(pt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,V=y.stencil?cr:Si,ut=y.stencil?Ei:ii);const _t={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};u=new XRWebGLBinding(r,e),f=u.createProjectionLayer(_t),r.updateRenderState({layers:[f]}),d=new wi(f.textureWidth,f.textureHeight,{format:vn,type:oi,depthTexture:new b_(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,V),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0});const Lt=t.properties.get(d);Lt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await r.requestReferenceSpace(a),K.setContext(r),K.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function D(O){for(let V=0;V<O.removed.length;V++){const ut=O.removed[V],pt=g.indexOf(ut);pt>=0&&(g[pt]=null,b[pt].disconnect(ut))}for(let V=0;V<O.added.length;V++){const ut=O.added[V];let pt=g.indexOf(ut);if(pt===-1){for(let Lt=0;Lt<b.length;Lt++)if(Lt>=g.length){g.push(ut),pt=Lt;break}else if(g[Lt]===null){g[Lt]=ut,pt=Lt;break}if(pt===-1)break}const _t=b[pt];_t&&_t.connect(ut)}}const j=new U,N=new U;function z(O,V,ut){j.setFromMatrixPosition(V.matrixWorld),N.setFromMatrixPosition(ut.matrixWorld);const pt=j.distanceTo(N),_t=V.projectionMatrix.elements,Lt=ut.projectionMatrix.elements,Xt=_t[14]/(_t[10]-1),Pt=_t[14]/(_t[10]+1),Ot=(_t[9]+1)/_t[5],ae=(_t[9]-1)/_t[5],kt=(_t[8]-1)/_t[0],G=(Lt[8]+1)/Lt[0],Le=Xt*kt,bt=Xt*G,Dt=pt/(-kt+G),Nt=Dt*-kt;V.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Nt),O.translateZ(Dt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const he=Xt+Dt,Bt=Pt+Dt,Ft=Le-Nt,Zt=bt+(pt-Nt),pe=Ot*Pt/Bt*he,Se=ae*Pt/Bt*he;O.projectionMatrix.makePerspective(Ft,Zt,pe,Se,he,Bt),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function q(O,V){V===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(V.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;T.near=x.near=v.near=O.near,T.far=x.far=v.far=O.far,(A!==T.near||M!==T.far)&&(r.updateRenderState({depthNear:T.near,depthFar:T.far}),A=T.near,M=T.far);const V=O.parent,ut=T.cameras;q(T,V);for(let pt=0;pt<ut.length;pt++)q(ut[pt],V);ut.length===2?z(T,v,x):T.projectionMatrix.copy(v.projectionMatrix),$(O,T,V)};function $(O,V,ut){ut===null?O.matrix.copy(V.matrixWorld):(O.matrix.copy(ut.matrixWorld),O.matrix.invert(),O.matrix.multiply(V.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(V.projectionMatrix),O.projectionMatrixInverse.copy(V.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=$r*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return T},this.getFoveation=function(){if(!(f===null&&m===null))return h},this.setFoveation=function(O){h=O,f!==null&&(f.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)};let et=null;function Z(O,V){if(c=V.getViewerPose(l||o),_=V,c!==null){const ut=c.views;m!==null&&(t.setRenderTargetFramebuffer(d,m.framebuffer),t.setRenderTarget(d));let pt=!1;ut.length!==T.cameras.length&&(T.cameras.length=0,pt=!0);for(let _t=0;_t<ut.length;_t++){const Lt=ut[_t];let Xt=null;if(m!==null)Xt=m.getViewport(Lt);else{const Ot=u.getViewSubImage(f,Lt);Xt=Ot.viewport,_t===0&&(t.setRenderTargetTextures(d,Ot.colorTexture,f.ignoreDepthValues?void 0:Ot.depthStencilTexture),t.setRenderTarget(d))}let Pt=R[_t];Pt===void 0&&(Pt=new hn,Pt.layers.enable(_t),Pt.viewport=new Te,R[_t]=Pt),Pt.matrix.fromArray(Lt.transform.matrix),Pt.matrix.decompose(Pt.position,Pt.quaternion,Pt.scale),Pt.projectionMatrix.fromArray(Lt.projectionMatrix),Pt.projectionMatrixInverse.copy(Pt.projectionMatrix).invert(),Pt.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),_t===0&&(T.matrix.copy(Pt.matrix),T.matrix.decompose(T.position,T.quaternion,T.scale)),pt===!0&&T.cameras.push(Pt)}}for(let ut=0;ut<b.length;ut++){const pt=g[ut],_t=b[ut];pt!==null&&_t!==void 0&&_t.update(pt,V,l||o)}et&&et(O,V),V.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:V}),_=null}const K=new Fc;K.setAnimationLoop(Z),this.setAnimationLoop=function(O){et=O},this.dispose=function(){}}}function T_(n,t){function e(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function i(p,d){d.color.getRGB(p.fogColor.value,Ic(n)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function r(p,d,b,g,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(p,d):d.isMeshToonMaterial?(s(p,d),u(p,d)):d.isMeshPhongMaterial?(s(p,d),c(p,d)):d.isMeshStandardMaterial?(s(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,v)):d.isMeshMatcapMaterial?(s(p,d),_(p,d)):d.isMeshDepthMaterial?s(p,d):d.isMeshDistanceMaterial?(s(p,d),y(p,d)):d.isMeshNormalMaterial?s(p,d):d.isLineBasicMaterial?(o(p,d),d.isLineDashedMaterial&&a(p,d)):d.isPointsMaterial?h(p,d,b,g):d.isSpriteMaterial?l(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,e(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===We&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,e(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===We&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,e(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,e(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);const b=t.get(d).envMap;if(b&&(p.envMap.value=b,p.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap){p.lightMap.value=d.lightMap;const g=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=d.lightMapIntensity*g,e(d.lightMap,p.lightMapTransform)}d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,p.aoMapTransform))}function o(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform))}function a(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function h(p,d,b,g){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=g*.5,d.map&&(p.map.value=d.map,e(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function l(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,e(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,e(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function u(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,p.roughnessMapTransform)),t.get(d).envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===We&&p.clearcoatNormalScale.value.negate())),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,d){d.matcap&&(p.matcap.value=d.matcap)}function y(p,d){const b=t.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function A_(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(b,g){const v=g.program;i.uniformBlockBinding(b,v)}function l(b,g){let v=r[b.id];v===void 0&&(_(b),v=c(b),r[b.id]=v,b.addEventListener("dispose",p));const x=g.program;i.updateUBOMapping(b,x);const R=t.render.frame;s[b.id]!==R&&(f(b),s[b.id]=R)}function c(b){const g=u();b.__bindingPointIndex=g;const v=n.createBuffer(),x=b.__size,R=b.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,x,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,g,v),v}function u(){for(let b=0;b<a;b++)if(o.indexOf(b)===-1)return o.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const g=r[b.id],v=b.uniforms,x=b.__cache;n.bindBuffer(n.UNIFORM_BUFFER,g);for(let R=0,T=v.length;R<T;R++){const A=v[R];if(m(A,R,x)===!0){const M=A.__offset,E=Array.isArray(A.value)?A.value:[A.value];let L=0;for(let D=0;D<E.length;D++){const j=E[D],N=y(j);typeof j=="number"?(A.__data[0]=j,n.bufferSubData(n.UNIFORM_BUFFER,M+L,A.__data)):j.isMatrix3?(A.__data[0]=j.elements[0],A.__data[1]=j.elements[1],A.__data[2]=j.elements[2],A.__data[3]=j.elements[0],A.__data[4]=j.elements[3],A.__data[5]=j.elements[4],A.__data[6]=j.elements[5],A.__data[7]=j.elements[0],A.__data[8]=j.elements[6],A.__data[9]=j.elements[7],A.__data[10]=j.elements[8],A.__data[11]=j.elements[0]):(j.toArray(A.__data,L),L+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,A.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(b,g,v){const x=b.value;if(v[g]===void 0){if(typeof x=="number")v[g]=x;else{const R=Array.isArray(x)?x:[x],T=[];for(let A=0;A<R.length;A++)T.push(R[A].clone());v[g]=T}return!0}else if(typeof x=="number"){if(v[g]!==x)return v[g]=x,!0}else{const R=Array.isArray(v[g])?v[g]:[v[g]],T=Array.isArray(x)?x:[x];for(let A=0;A<R.length;A++){const M=R[A];if(M.equals(T[A])===!1)return M.copy(T[A]),!0}}return!1}function _(b){const g=b.uniforms;let v=0;const x=16;let R=0;for(let T=0,A=g.length;T<A;T++){const M=g[T],E={boundary:0,storage:0},L=Array.isArray(M.value)?M.value:[M.value];for(let D=0,j=L.length;D<j;D++){const N=L[D],z=y(N);E.boundary+=z.boundary,E.storage+=z.storage}if(M.__data=new Float32Array(E.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=v,T>0){R=v%x;const D=x-R;R!==0&&D-E.boundary<0&&(v+=x-R,M.__offset=v)}v+=E.storage}return R=v%x,R>0&&(v+=x-R),b.__size=v,b.__cache={},this}function y(b){const g={boundary:0,storage:0};return typeof b=="number"?(g.boundary=4,g.storage=4):b.isVector2?(g.boundary=8,g.storage=8):b.isVector3||b.isColor?(g.boundary=16,g.storage=12):b.isVector4?(g.boundary=16,g.storage=16):b.isMatrix3?(g.boundary=48,g.storage=48):b.isMatrix4?(g.boundary=64,g.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),g}function p(b){const g=b.target;g.removeEventListener("dispose",p);const v=o.indexOf(g.__bindingPointIndex);o.splice(v,1),n.deleteBuffer(r[g.id]),delete r[g.id],delete s[g.id]}function d(){for(const b in r)n.deleteBuffer(r[b]);o=[],r={},s={}}return{bind:h,update:l,dispose:d}}class Vc{constructor(t={}){const{canvas:e=wd(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const m=new Uint32Array(4),_=new Int32Array(4);let y=null,p=null;const d=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Re,this._useLegacyLights=!1,this.toneMapping=ai,this.toneMappingExposure=1;const g=this;let v=!1,x=0,R=0,T=null,A=-1,M=null;const E=new Te,L=new Te;let D=null;const j=new Kt(0);let N=0,z=e.width,q=e.height,$=1,et=null,Z=null;const K=new Te(0,0,z,q),O=new Te(0,0,z,q);let V=!1;const ut=new Fo;let pt=!1,_t=!1,Lt=null;const Xt=new de,Pt=new At,Ot=new U,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function kt(){return T===null?$:1}let G=i;function Le(w,F){for(let k=0;k<w.length;k++){const H=w[k],W=e.getContext(H,F);if(W!==null)return W}return null}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Do}`),e.addEventListener("webglcontextlost",qt,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",ht,!1),G===null){const F=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&F.shift(),G=Le(F,w),G===null)throw Le(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&G instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),G.getShaderPrecisionFormat===void 0&&(G.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let bt,Dt,Nt,he,Bt,Ft,Zt,pe,Se,C,S,B,nt,J,it,Mt,ot,ft,P,st,Y,Rt,xt,wt;function yt(){bt=new Fg(G),Dt=new Pg(G,bt,t),bt.init(Dt),Rt=new x_(G,bt,Dt),Nt=new y_(G,bt,Dt),he=new zg(G),Bt=new s_,Ft=new M_(G,bt,Nt,Bt,Dt,Rt,he),Zt=new Ng(g),pe=new Og(g),Se=new Kd(G,Dt),xt=new Cg(G,bt,Se,Dt),C=new Gg(G,Se,he,xt),S=new Wg(G,C,Se,he),P=new Vg(G,Dt,Ft),Mt=new Dg(Bt),B=new r_(g,Zt,pe,bt,Dt,xt,Mt),nt=new T_(g,Bt),J=new o_,it=new d_(bt,Dt),ft=new Rg(g,Zt,pe,Nt,S,f,h),ot=new v_(g,S,Dt),wt=new A_(G,he,Dt,Nt),st=new Lg(G,bt,he,Dt),Y=new Bg(G,bt,he,Dt),he.programs=B.programs,g.capabilities=Dt,g.extensions=bt,g.properties=Bt,g.renderLists=J,g.shadowMap=ot,g.state=Nt,g.info=he}yt();const vt=new w_(g,G);this.xr=vt,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const w=bt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=bt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(w){w!==void 0&&($=w,this.setSize(z,q,!1))},this.getSize=function(w){return w.set(z,q)},this.setSize=function(w,F,k=!0){if(vt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=w,q=F,e.width=Math.floor(w*$),e.height=Math.floor(F*$),k===!0&&(e.style.width=w+"px",e.style.height=F+"px"),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(z*$,q*$).floor()},this.setDrawingBufferSize=function(w,F,k){z=w,q=F,$=k,e.width=Math.floor(w*k),e.height=Math.floor(F*k),this.setViewport(0,0,w,F)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(K)},this.setViewport=function(w,F,k,H){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,F,k,H),Nt.viewport(E.copy(K).multiplyScalar($).floor())},this.getScissor=function(w){return w.copy(O)},this.setScissor=function(w,F,k,H){w.isVector4?O.set(w.x,w.y,w.z,w.w):O.set(w,F,k,H),Nt.scissor(L.copy(O).multiplyScalar($).floor())},this.getScissorTest=function(){return V},this.setScissorTest=function(w){Nt.setScissorTest(V=w)},this.setOpaqueSort=function(w){et=w},this.setTransparentSort=function(w){Z=w},this.getClearColor=function(w){return w.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(w=!0,F=!0,k=!0){let H=0;if(w){let W=!1;if(T!==null){const mt=T.texture.format;W=mt===wc||mt===bc||mt===Sc}if(W){const mt=T.texture.type,Et=mt===oi||mt===ii||mt===No||mt===Ei||mt===xc||mt===Ec,Ct=ft.getClearColor(),It=ft.getClearAlpha(),Vt=Ct.r,Gt=Ct.g,zt=Ct.b;Et?(m[0]=Vt,m[1]=Gt,m[2]=zt,m[3]=It,G.clearBufferuiv(G.COLOR,0,m)):(_[0]=Vt,_[1]=Gt,_[2]=zt,_[3]=It,G.clearBufferiv(G.COLOR,0,_))}else H|=G.COLOR_BUFFER_BIT}F&&(H|=G.DEPTH_BUFFER_BIT),k&&(H|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",qt,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),J.dispose(),it.dispose(),Bt.dispose(),Zt.dispose(),pe.dispose(),S.dispose(),xt.dispose(),wt.dispose(),B.dispose(),vt.dispose(),vt.removeEventListener("sessionstart",en),vt.removeEventListener("sessionend",se),Lt&&(Lt.dispose(),Lt=null),Oe.stop()};function qt(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),v=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),v=!1;const w=he.autoReset,F=ot.enabled,k=ot.autoUpdate,H=ot.needsUpdate,W=ot.type;yt(),he.autoReset=w,ot.enabled=F,ot.autoUpdate=k,ot.needsUpdate=H,ot.type=W}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Q(w){const F=w.target;F.removeEventListener("dispose",Q),X(F)}function X(w){rt(w),Bt.remove(w)}function rt(w){const F=Bt.get(w).programs;F!==void 0&&(F.forEach(function(k){B.releaseProgram(k)}),w.isShaderMaterial&&B.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,k,H,W,mt){F===null&&(F=ae);const Et=W.isMesh&&W.matrixWorld.determinant()<0,Ct=rf(w,F,k,H,W);Nt.setMaterial(H,Et);let It=k.index,Vt=1;if(H.wireframe===!0){if(It=C.getWireframeAttribute(k),It===void 0)return;Vt=2}const Gt=k.drawRange,zt=k.attributes.position;let ue=Gt.start*Vt,Ye=(Gt.start+Gt.count)*Vt;mt!==null&&(ue=Math.max(ue,mt.start*Vt),Ye=Math.min(Ye,(mt.start+mt.count)*Vt)),It!==null?(ue=Math.max(ue,0),Ye=Math.min(Ye,It.count)):zt!=null&&(ue=Math.max(ue,0),Ye=Math.min(Ye,zt.count));const be=Ye-ue;if(be<0||be===1/0)return;xt.setup(W,H,Ct,k,It);let Pn,ce=st;if(It!==null&&(Pn=Se.get(It),ce=Y,ce.setIndex(Pn)),W.isMesh)H.wireframe===!0?(Nt.setLineWidth(H.wireframeLinewidth*kt()),ce.setMode(G.LINES)):ce.setMode(G.TRIANGLES);else if(W.isLine){let Yt=H.linewidth;Yt===void 0&&(Yt=1),Nt.setLineWidth(Yt*kt()),W.isLineSegments?ce.setMode(G.LINES):W.isLineLoop?ce.setMode(G.LINE_LOOP):ce.setMode(G.LINE_STRIP)}else W.isPoints?ce.setMode(G.POINTS):W.isSprite&&ce.setMode(G.TRIANGLES);if(W.isInstancedMesh)ce.renderInstances(ue,be,W.count);else if(k.isInstancedBufferGeometry){const Yt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,va=Math.min(k.instanceCount,Yt);ce.renderInstances(ue,be,va)}else ce.render(ue,be)};function St(w,F,k){w.transparent===!0&&w.side===Bn&&w.forceSinglePass===!1?(w.side=We,w.needsUpdate=!0,as(w,F,k),w.side=Vn,w.needsUpdate=!0,as(w,F,k),w.side=Bn):as(w,F,k)}this.compile=function(w,F,k=null){k===null&&(k=w),p=it.get(k),p.init(),b.push(p),k.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),w!==k&&w.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(p.pushLight(W),W.castShadow&&p.pushShadow(W))}),p.setupLights(g._useLegacyLights);const H=new Set;return w.traverse(function(W){const mt=W.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){const Ct=mt[Et];St(Ct,k,W),H.add(Ct)}else St(mt,k,W),H.add(mt)}),b.pop(),p=null,H},this.compileAsync=function(w,F,k=null){const H=this.compile(w,F,k);return new Promise(W=>{function mt(){if(H.forEach(function(Et){Bt.get(Et).currentProgram.isReady()&&H.delete(Et)}),H.size===0){W(w);return}setTimeout(mt,10)}bt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let jt=null;function me(w){jt&&jt(w)}function en(){Oe.stop()}function se(){Oe.start()}const Oe=new Fc;Oe.setAnimationLoop(me),typeof self<"u"&&Oe.setContext(self),this.setAnimationLoop=function(w){jt=w,vt.setAnimationLoop(w),w===null?Oe.stop():Oe.start()},vt.addEventListener("sessionstart",en),vt.addEventListener("sessionend",se),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(v===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),vt.enabled===!0&&vt.isPresenting===!0&&(vt.cameraAutoUpdate===!0&&vt.updateCamera(F),F=vt.getCamera()),w.isScene===!0&&w.onBeforeRender(g,w,F,T),p=it.get(w,b.length),p.init(),b.push(p),Xt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ut.setFromProjectionMatrix(Xt),_t=this.localClippingEnabled,pt=Mt.init(this.clippingPlanes,_t),y=J.get(w,d.length),y.init(),d.push(y),Sn(w,F,0,g.sortObjects),y.finish(),g.sortObjects===!0&&y.sort(et,Z),this.info.render.frame++,pt===!0&&Mt.beginShadows();const k=p.state.shadowsArray;if(ot.render(k,w,F),pt===!0&&Mt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ft.render(y,w),p.setupLights(g._useLegacyLights),F.isArrayCamera){const H=F.cameras;for(let W=0,mt=H.length;W<mt;W++){const Et=H[W];rh(y,w,Et,Et.viewport)}}else rh(y,w,F);T!==null&&(Ft.updateMultisampleRenderTarget(T),Ft.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(g,w,F),xt.resetDefaultState(),A=-1,M=null,b.pop(),b.length>0?p=b[b.length-1]:p=null,d.pop(),d.length>0?y=d[d.length-1]:y=null};function Sn(w,F,k,H){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)k=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ut.intersectsSprite(w)){H&&Ot.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Xt);const Et=S.update(w),Ct=w.material;Ct.visible&&y.push(w,Et,Ct,k,Ot.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||ut.intersectsObject(w))){const Et=S.update(w),Ct=w.material;if(H&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ot.copy(w.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ot.copy(Et.boundingSphere.center)),Ot.applyMatrix4(w.matrixWorld).applyMatrix4(Xt)),Array.isArray(Ct)){const It=Et.groups;for(let Vt=0,Gt=It.length;Vt<Gt;Vt++){const zt=It[Vt],ue=Ct[zt.materialIndex];ue&&ue.visible&&y.push(w,Et,ue,k,Ot.z,zt)}}else Ct.visible&&y.push(w,Et,Ct,k,Ot.z,null)}}const mt=w.children;for(let Et=0,Ct=mt.length;Et<Ct;Et++)Sn(mt[Et],F,k,H)}function rh(w,F,k,H){const W=w.opaque,mt=w.transmissive,Et=w.transparent;p.setupLightsView(k),pt===!0&&Mt.setGlobalState(g.clippingPlanes,k),mt.length>0&&nf(W,mt,F,k),H&&Nt.viewport(E.copy(H)),W.length>0&&ss(W,F,k),mt.length>0&&ss(mt,F,k),Et.length>0&&ss(Et,F,k),Nt.buffers.depth.setTest(!0),Nt.buffers.depth.setMask(!0),Nt.buffers.color.setMask(!0),Nt.setPolygonOffset(!1)}function nf(w,F,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;const mt=Dt.isWebGL2;Lt===null&&(Lt=new wi(1,1,{generateMipmaps:!0,type:bt.has("EXT_color_buffer_half_float")?Wr:oi,minFilter:Vr,samples:mt?4:0})),g.getDrawingBufferSize(Pt),mt?Lt.setSize(Pt.x,Pt.y):Lt.setSize(Ys(Pt.x),Ys(Pt.y));const Et=g.getRenderTarget();g.setRenderTarget(Lt),g.getClearColor(j),N=g.getClearAlpha(),N<1&&g.setClearColor(16777215,.5),g.clear();const Ct=g.toneMapping;g.toneMapping=ai,ss(w,k,H),Ft.updateMultisampleRenderTarget(Lt),Ft.updateRenderTargetMipmap(Lt);let It=!1;for(let Vt=0,Gt=F.length;Vt<Gt;Vt++){const zt=F[Vt],ue=zt.object,Ye=zt.geometry,be=zt.material,Pn=zt.group;if(be.side===Bn&&ue.layers.test(H.layers)){const ce=be.side;be.side=We,be.needsUpdate=!0,sh(ue,k,H,Ye,be,Pn),be.side=ce,be.needsUpdate=!0,It=!0}}It===!0&&(Ft.updateMultisampleRenderTarget(Lt),Ft.updateRenderTargetMipmap(Lt)),g.setRenderTarget(Et),g.setClearColor(j,N),g.toneMapping=Ct}function ss(w,F,k){const H=F.isScene===!0?F.overrideMaterial:null;for(let W=0,mt=w.length;W<mt;W++){const Et=w[W],Ct=Et.object,It=Et.geometry,Vt=H===null?Et.material:H,Gt=Et.group;Ct.layers.test(k.layers)&&sh(Ct,F,k,It,Vt,Gt)}}function sh(w,F,k,H,W,mt){w.onBeforeRender(g,F,k,H,W,mt),w.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),W.onBeforeRender(g,F,k,H,w,mt),W.transparent===!0&&W.side===Bn&&W.forceSinglePass===!1?(W.side=We,W.needsUpdate=!0,g.renderBufferDirect(k,F,H,W,w,mt),W.side=Vn,W.needsUpdate=!0,g.renderBufferDirect(k,F,H,W,w,mt),W.side=Bn):g.renderBufferDirect(k,F,H,W,w,mt),w.onAfterRender(g,F,k,H,W,mt)}function as(w,F,k){F.isScene!==!0&&(F=ae);const H=Bt.get(w),W=p.state.lights,mt=p.state.shadowsArray,Et=W.state.version,Ct=B.getParameters(w,W.state,mt,F,k),It=B.getProgramCacheKey(Ct);let Vt=H.programs;H.environment=w.isMeshStandardMaterial?F.environment:null,H.fog=F.fog,H.envMap=(w.isMeshStandardMaterial?pe:Zt).get(w.envMap||H.environment),Vt===void 0&&(w.addEventListener("dispose",Q),Vt=new Map,H.programs=Vt);let Gt=Vt.get(It);if(Gt!==void 0){if(H.currentProgram===Gt&&H.lightsStateVersion===Et)return oh(w,Ct),Gt}else Ct.uniforms=B.getUniforms(w),w.onBuild(k,Ct,g),w.onBeforeCompile(Ct,g),Gt=B.acquireProgram(Ct,It),Vt.set(It,Gt),H.uniforms=Ct.uniforms;const zt=H.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(zt.clippingPlanes=Mt.uniform),oh(w,Ct),H.needsLights=af(w),H.lightsStateVersion=Et,H.needsLights&&(zt.ambientLightColor.value=W.state.ambient,zt.lightProbe.value=W.state.probe,zt.directionalLights.value=W.state.directional,zt.directionalLightShadows.value=W.state.directionalShadow,zt.spotLights.value=W.state.spot,zt.spotLightShadows.value=W.state.spotShadow,zt.rectAreaLights.value=W.state.rectArea,zt.ltc_1.value=W.state.rectAreaLTC1,zt.ltc_2.value=W.state.rectAreaLTC2,zt.pointLights.value=W.state.point,zt.pointLightShadows.value=W.state.pointShadow,zt.hemisphereLights.value=W.state.hemi,zt.directionalShadowMap.value=W.state.directionalShadowMap,zt.directionalShadowMatrix.value=W.state.directionalShadowMatrix,zt.spotShadowMap.value=W.state.spotShadowMap,zt.spotLightMatrix.value=W.state.spotLightMatrix,zt.spotLightMap.value=W.state.spotLightMap,zt.pointShadowMap.value=W.state.pointShadowMap,zt.pointShadowMatrix.value=W.state.pointShadowMatrix),H.currentProgram=Gt,H.uniformsList=null,Gt}function ah(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=Bs.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function oh(w,F){const k=Bt.get(w);k.outputColorSpace=F.outputColorSpace,k.instancing=F.instancing,k.instancingColor=F.instancingColor,k.skinning=F.skinning,k.morphTargets=F.morphTargets,k.morphNormals=F.morphNormals,k.morphColors=F.morphColors,k.morphTargetsCount=F.morphTargetsCount,k.numClippingPlanes=F.numClippingPlanes,k.numIntersection=F.numClipIntersection,k.vertexAlphas=F.vertexAlphas,k.vertexTangents=F.vertexTangents,k.toneMapping=F.toneMapping}function rf(w,F,k,H,W){F.isScene!==!0&&(F=ae),Ft.resetTextureUnits();const mt=F.fog,Et=H.isMeshStandardMaterial?F.environment:null,Ct=T===null?g.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Wn,It=(H.isMeshStandardMaterial?pe:Zt).get(H.envMap||Et),Vt=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Gt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),zt=!!k.morphAttributes.position,ue=!!k.morphAttributes.normal,Ye=!!k.morphAttributes.color;let be=ai;H.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(be=g.toneMapping);const Pn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ce=Pn!==void 0?Pn.length:0,Yt=Bt.get(H),va=p.state.lights;if(pt===!0&&(_t===!0||w!==M)){const Ke=w===M&&H.id===A;Mt.setState(H,w,Ke)}let ge=!1;H.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==va.state.version||Yt.outputColorSpace!==Ct||W.isInstancedMesh&&Yt.instancing===!1||!W.isInstancedMesh&&Yt.instancing===!0||W.isSkinnedMesh&&Yt.skinning===!1||!W.isSkinnedMesh&&Yt.skinning===!0||W.isInstancedMesh&&Yt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Yt.instancingColor===!1&&W.instanceColor!==null||Yt.envMap!==It||H.fog===!0&&Yt.fog!==mt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Mt.numPlanes||Yt.numIntersection!==Mt.numIntersection)||Yt.vertexAlphas!==Vt||Yt.vertexTangents!==Gt||Yt.morphTargets!==zt||Yt.morphNormals!==ue||Yt.morphColors!==Ye||Yt.toneMapping!==be||Dt.isWebGL2===!0&&Yt.morphTargetsCount!==ce)&&(ge=!0):(ge=!0,Yt.__version=H.version);let ui=Yt.currentProgram;ge===!0&&(ui=as(H,F,W));let hh=!1,yr=!1,ya=!1;const Fe=ui.getUniforms(),fi=Yt.uniforms;if(Nt.useProgram(ui.program)&&(hh=!0,yr=!0,ya=!0),H.id!==A&&(A=H.id,yr=!0),hh||M!==w){Fe.setValue(G,"projectionMatrix",w.projectionMatrix),Fe.setValue(G,"viewMatrix",w.matrixWorldInverse);const Ke=Fe.map.cameraPosition;Ke!==void 0&&Ke.setValue(G,Ot.setFromMatrixPosition(w.matrixWorld)),Dt.logarithmicDepthBuffer&&Fe.setValue(G,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Fe.setValue(G,"isOrthographic",w.isOrthographicCamera===!0),M!==w&&(M=w,yr=!0,ya=!0)}if(W.isSkinnedMesh){Fe.setOptional(G,W,"bindMatrix"),Fe.setOptional(G,W,"bindMatrixInverse");const Ke=W.skeleton;Ke&&(Dt.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Fe.setValue(G,"boneTexture",Ke.boneTexture,Ft),Fe.setValue(G,"boneTextureSize",Ke.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ma=k.morphAttributes;if((Ma.position!==void 0||Ma.normal!==void 0||Ma.color!==void 0&&Dt.isWebGL2===!0)&&P.update(W,k,ui),(yr||Yt.receiveShadow!==W.receiveShadow)&&(Yt.receiveShadow=W.receiveShadow,Fe.setValue(G,"receiveShadow",W.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(fi.envMap.value=It,fi.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),yr&&(Fe.setValue(G,"toneMappingExposure",g.toneMappingExposure),Yt.needsLights&&sf(fi,ya),mt&&H.fog===!0&&nt.refreshFogUniforms(fi,mt),nt.refreshMaterialUniforms(fi,H,$,q,Lt),Bs.upload(G,ah(Yt),fi,Ft)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Bs.upload(G,ah(Yt),fi,Ft),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Fe.setValue(G,"center",W.center),Fe.setValue(G,"modelViewMatrix",W.modelViewMatrix),Fe.setValue(G,"normalMatrix",W.normalMatrix),Fe.setValue(G,"modelMatrix",W.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ke=H.uniformsGroups;for(let xa=0,of=Ke.length;xa<of;xa++)if(Dt.isWebGL2){const lh=Ke[xa];wt.update(lh,ui),wt.bind(lh,ui)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ui}function sf(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function af(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,F,k){Bt.get(w.texture).__webglTexture=F,Bt.get(w.depthTexture).__webglTexture=k;const H=Bt.get(w);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||bt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,F){const k=Bt.get(w);k.__webglFramebuffer=F,k.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(w,F=0,k=0){T=w,x=F,R=k;let H=!0,W=null,mt=!1,Et=!1;if(w){const It=Bt.get(w);It.__useDefaultFramebuffer!==void 0?(Nt.bindFramebuffer(G.FRAMEBUFFER,null),H=!1):It.__webglFramebuffer===void 0?Ft.setupRenderTarget(w):It.__hasExternalTextures&&Ft.rebindTextures(w,Bt.get(w.texture).__webglTexture,Bt.get(w.depthTexture).__webglTexture);const Vt=w.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Et=!0);const Gt=Bt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?W=Gt[F][k]:W=Gt[F],mt=!0):Dt.isWebGL2&&w.samples>0&&Ft.useMultisampledRTT(w)===!1?W=Bt.get(w).__webglMultisampledFramebuffer:Array.isArray(Gt)?W=Gt[k]:W=Gt,E.copy(w.viewport),L.copy(w.scissor),D=w.scissorTest}else E.copy(K).multiplyScalar($).floor(),L.copy(O).multiplyScalar($).floor(),D=V;if(Nt.bindFramebuffer(G.FRAMEBUFFER,W)&&Dt.drawBuffers&&H&&Nt.drawBuffers(w,W),Nt.viewport(E),Nt.scissor(L),Nt.setScissorTest(D),mt){const It=Bt.get(w.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+F,It.__webglTexture,k)}else if(Et){const It=Bt.get(w.texture),Vt=F||0;G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,It.__webglTexture,k||0,Vt)}A=-1},this.readRenderTargetPixels=function(w,F,k,H,W,mt,Et){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ct=Bt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Et!==void 0&&(Ct=Ct[Et]),Ct){Nt.bindFramebuffer(G.FRAMEBUFFER,Ct);try{const It=w.texture,Vt=It.format,Gt=It.type;if(Vt!==vn&&Rt.convert(Vt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const zt=Gt===Wr&&(bt.has("EXT_color_buffer_half_float")||Dt.isWebGL2&&bt.has("EXT_color_buffer_float"));if(Gt!==oi&&Rt.convert(Gt)!==G.getParameter(G.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===ri&&(Dt.isWebGL2||bt.has("OES_texture_float")||bt.has("WEBGL_color_buffer_float")))&&!zt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-H&&k>=0&&k<=w.height-W&&G.readPixels(F,k,H,W,Rt.convert(Vt),Rt.convert(Gt),mt)}finally{const It=T!==null?Bt.get(T).__webglFramebuffer:null;Nt.bindFramebuffer(G.FRAMEBUFFER,It)}}},this.copyFramebufferToTexture=function(w,F,k=0){const H=Math.pow(2,-k),W=Math.floor(F.image.width*H),mt=Math.floor(F.image.height*H);Ft.setTexture2D(F,0),G.copyTexSubImage2D(G.TEXTURE_2D,k,0,0,w.x,w.y,W,mt),Nt.unbindTexture()},this.copyTextureToTexture=function(w,F,k,H=0){const W=F.image.width,mt=F.image.height,Et=Rt.convert(k.format),Ct=Rt.convert(k.type);Ft.setTexture2D(k,0),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,k.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,k.unpackAlignment),F.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,H,w.x,w.y,W,mt,Et,Ct,F.image.data):F.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,H,w.x,w.y,F.mipmaps[0].width,F.mipmaps[0].height,Et,F.mipmaps[0].data):G.texSubImage2D(G.TEXTURE_2D,H,w.x,w.y,Et,Ct,F.image),H===0&&k.generateMipmaps&&G.generateMipmap(G.TEXTURE_2D),Nt.unbindTexture()},this.copyTextureToTexture3D=function(w,F,k,H,W=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=w.max.x-w.min.x+1,Et=w.max.y-w.min.y+1,Ct=w.max.z-w.min.z+1,It=Rt.convert(H.format),Vt=Rt.convert(H.type);let Gt;if(H.isData3DTexture)Ft.setTexture3D(H,0),Gt=G.TEXTURE_3D;else if(H.isDataArrayTexture)Ft.setTexture2DArray(H,0),Gt=G.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,H.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,H.unpackAlignment);const zt=G.getParameter(G.UNPACK_ROW_LENGTH),ue=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ye=G.getParameter(G.UNPACK_SKIP_PIXELS),be=G.getParameter(G.UNPACK_SKIP_ROWS),Pn=G.getParameter(G.UNPACK_SKIP_IMAGES),ce=k.isCompressedTexture?k.mipmaps[0]:k.image;G.pixelStorei(G.UNPACK_ROW_LENGTH,ce.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ce.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,w.min.x),G.pixelStorei(G.UNPACK_SKIP_ROWS,w.min.y),G.pixelStorei(G.UNPACK_SKIP_IMAGES,w.min.z),k.isDataTexture||k.isData3DTexture?G.texSubImage3D(Gt,W,F.x,F.y,F.z,mt,Et,Ct,It,Vt,ce.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),G.compressedTexSubImage3D(Gt,W,F.x,F.y,F.z,mt,Et,Ct,It,ce.data)):G.texSubImage3D(Gt,W,F.x,F.y,F.z,mt,Et,Ct,It,Vt,ce),G.pixelStorei(G.UNPACK_ROW_LENGTH,zt),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,ue),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ye),G.pixelStorei(G.UNPACK_SKIP_ROWS,be),G.pixelStorei(G.UNPACK_SKIP_IMAGES,Pn),W===0&&H.generateMipmaps&&G.generateMipmap(Gt),Nt.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?Ft.setTextureCube(w,0):w.isData3DTexture?Ft.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ft.setTexture2DArray(w,0):Ft.setTexture2D(w,0),Nt.unbindTexture()},this.resetState=function(){x=0,R=0,T=null,Nt.reset(),xt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Io?"display-p3":"srgb",e.unpackColorSpace=ee.workingColorSpace===sa?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Re?bi:Tc}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===bi?Re:Wn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class R_ extends Vc{}R_.prototype.isWebGL1Renderer=!0;class C_ extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class L_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ge=new U;class Zs{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}setX(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=te(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Tn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Tn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Tn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Tn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array),r=te(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=te(e,this.array),i=te(i,this.array),r=te(r,this.array),s=te(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new cn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Zs(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wc extends pr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Xi;const br=new U,qi=new U,ji=new U,Yi=new At,wr=new At,$c=new de,Cs=new U,Tr=new U,Ls=new U,Cl=new At,Za=new At,Ll=new At;class P_ extends Me{constructor(t=new Wc){if(super(),this.isSprite=!0,this.type="Sprite",Xi===void 0){Xi=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new L_(e,5);Xi.setIndex([0,1,2,0,2,3]),Xi.setAttribute("position",new Zs(i,3,0,!1)),Xi.setAttribute("uv",new Zs(i,2,3,!1))}this.geometry=Xi,this.material=t,this.center=new At(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),qi.setFromMatrixScale(this.matrixWorld),$c.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ji.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&qi.multiplyScalar(-ji.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ps(Cs.set(-.5,-.5,0),ji,o,qi,r,s),Ps(Tr.set(.5,-.5,0),ji,o,qi,r,s),Ps(Ls.set(.5,.5,0),ji,o,qi,r,s),Cl.set(0,0),Za.set(1,0),Ll.set(1,1);let a=t.ray.intersectTriangle(Cs,Tr,Ls,!1,br);if(a===null&&(Ps(Tr.set(-.5,.5,0),ji,o,qi,r,s),Za.set(0,1),a=t.ray.intersectTriangle(Cs,Ls,Tr,!1,br),a===null))return;const h=t.ray.origin.distanceTo(br);h<t.near||h>t.far||e.push({distance:h,point:br.clone(),uv:on.getInterpolation(br,Cs,Tr,Ls,Cl,Za,Ll,new At),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ps(n,t,e,i,r,s){Yi.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(wr.x=s*Yi.x-r*Yi.y,wr.y=r*Yi.x+s*Yi.y):wr.copy(Yi),n.copy(t),n.x+=wr.x,n.y+=wr.y,n.applyMatrix4($c)}class ca extends pr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Pl=new U,Dl=new U,Nl=new de,Ja=new oa,Ds=new aa;class zo extends Me{constructor(t=new qe,e=new ca){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)Pl.fromBufferAttribute(e,r-1),Dl.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=Pl.distanceTo(Dl);t.setAttribute("lineDistance",new tn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere),Ds.applyMatrix4(r),Ds.radius+=s,t.ray.intersectsSphere(Ds)===!1)return;Nl.copy(r).invert(),Ja.copy(t.ray).applyMatrix4(Nl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=new U,c=new U,u=new U,f=new U,m=this.isLineSegments?2:1,_=i.index,p=i.attributes.position;if(_!==null){const d=Math.max(0,o.start),b=Math.min(_.count,o.start+o.count);for(let g=d,v=b-1;g<v;g+=m){const x=_.getX(g),R=_.getX(g+1);if(l.fromBufferAttribute(p,x),c.fromBufferAttribute(p,R),Ja.distanceSqToSegment(l,c,f,u)>h)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,o.start),b=Math.min(p.count,o.start+o.count);for(let g=d,v=b-1;g<v;g+=m){if(l.fromBufferAttribute(p,g),c.fromBufferAttribute(p,g+1),Ja.distanceSqToSegment(l,c,f,u)>h)continue;f.applyMatrix4(this.matrixWorld);const R=t.ray.origin.distanceTo(f);R<t.near||R>t.far||e.push({distance:R,point:u.clone().applyMatrix4(this.matrixWorld),index:g,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class ko extends qe{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:h};const l=this;r=Math.floor(r),s=Math.floor(s);const c=[],u=[],f=[],m=[];let _=0;const y=[],p=i/2;let d=0;b(),o===!1&&(t>0&&g(!0),e>0&&g(!1)),this.setIndex(c),this.setAttribute("position",new tn(u,3)),this.setAttribute("normal",new tn(f,3)),this.setAttribute("uv",new tn(m,2));function b(){const v=new U,x=new U;let R=0;const T=(e-t)/i;for(let A=0;A<=s;A++){const M=[],E=A/s,L=E*(e-t)+t;for(let D=0;D<=r;D++){const j=D/r,N=j*h+a,z=Math.sin(N),q=Math.cos(N);x.x=L*z,x.y=-E*i+p,x.z=L*q,u.push(x.x,x.y,x.z),v.set(z,T,q).normalize(),f.push(v.x,v.y,v.z),m.push(j,1-E),M.push(_++)}y.push(M)}for(let A=0;A<r;A++)for(let M=0;M<s;M++){const E=y[M][A],L=y[M+1][A],D=y[M+1][A+1],j=y[M][A+1];c.push(E,L,j),c.push(L,D,j),R+=6}l.addGroup(d,R,0),d+=R}function g(v){const x=_,R=new At,T=new U;let A=0;const M=v===!0?t:e,E=v===!0?1:-1;for(let D=1;D<=r;D++)u.push(0,p*E,0),f.push(0,E,0),m.push(.5,.5),_++;const L=_;for(let D=0;D<=r;D++){const N=D/r*h+a,z=Math.cos(N),q=Math.sin(N);T.x=M*q,T.y=p*E,T.z=M*z,u.push(T.x,T.y,T.z),f.push(0,E,0),R.x=z*.5+.5,R.y=q*.5*E+.5,m.push(R.x,R.y),_++}for(let D=0;D<r;D++){const j=x+D,N=L+D;v===!0?c.push(N,N+1,j):c.push(N+1,N,j),A+=3}l.addGroup(d,A,v===!0?1:2),d+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ko(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ua extends ko{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new ua(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Xc extends Me{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Kt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Qa=new de,Il=new U,Ul=new U;class D_{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new At(512,512),this.map=null,this.mapPass=null,this.matrix=new de,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fo,this._frameExtents=new At(1,1),this._viewportCount=1,this._viewports=[new Te(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ul),e.updateMatrixWorld(),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class N_ extends D_{constructor(){super(new Gc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class I_ extends Xc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Me.DEFAULT_UP),this.updateMatrix(),this.target=new Me,this.shadow=new N_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class U_ extends Xc{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let Ns;class O_{static getContext(){return Ns===void 0&&(Ns=new(window.AudioContext||window.webkitAudioContext)),Ns}static setContext(t){Ns=t}}class F_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ol(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ol();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ol(){return(typeof performance>"u"?Date:performance).now()}const _i=new U,Fl=new $n,G_=new U,vi=new U;class qc extends Me{constructor(){super(),this.type="AudioListener",this.context=O_.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new F_}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_i,Fl,G_),vi.set(0,0,-1).applyQuaternion(Fl),e.positionX){const r=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(_i.x,r),e.positionY.linearRampToValueAtTime(_i.y,r),e.positionZ.linearRampToValueAtTime(_i.z,r),e.forwardX.linearRampToValueAtTime(vi.x,r),e.forwardY.linearRampToValueAtTime(vi.y,r),e.forwardZ.linearRampToValueAtTime(vi.z,r),e.upX.linearRampToValueAtTime(i.x,r),e.upY.linearRampToValueAtTime(i.y,r),e.upZ.linearRampToValueAtTime(i.z,r)}else e.setPosition(_i.x,_i.y,_i.z),e.setOrientation(vi.x,vi.y,vi.z,i.x,i.y,i.z)}}class B_{constructor(t,e,i=0,r=1/0){this.ray=new oa(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new Oo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return bo(t,this,i,e),i.sort(Gl),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)bo(t[r],this,i,e);return i.sort(Gl),i}}function Gl(n,t){return n.distance-t.distance}function bo(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)bo(r[s],t,e,!0)}}class Bl{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ie(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Do}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Do);const zl={type:"change"},to={type:"start"},kl={type:"end"},Is=new oa,Hl=new ei,z_=Math.cos(70*bd.DEG2RAD);class k_ extends Ci{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Gn.ROTATE,MIDDLE:Gn.DOLLY,RIGHT:Gn.PAN},this.touches={ONE:ti.ROTATE,TWO:ti.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",S),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",S),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(zl),i.update(),s=r.NONE},this.update=function(){const P=new U,st=new $n().setFromUnitVectors(t.up,new U(0,1,0)),Y=st.clone().invert(),Rt=new U,xt=new $n,wt=new U,yt=2*Math.PI;return function(qt=null){const I=i.object.position;P.copy(I).sub(i.target),P.applyQuaternion(st),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&L(M(qt)),i.enableDamping?(a.theta+=h.theta*i.dampingFactor,a.phi+=h.phi*i.dampingFactor):(a.theta+=h.theta,a.phi+=h.phi);let ht=i.minAzimuthAngle,Q=i.maxAzimuthAngle;isFinite(ht)&&isFinite(Q)&&(ht<-Math.PI?ht+=yt:ht>Math.PI&&(ht-=yt),Q<-Math.PI?Q+=yt:Q>Math.PI&&(Q-=yt),ht<=Q?a.theta=Math.max(ht,Math.min(Q,a.theta)):a.theta=a.theta>(ht+Q)/2?Math.max(ht,a.theta):Math.min(Q,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&R||i.object.isOrthographicCamera?a.radius=Z(a.radius):a.radius=Z(a.radius*l),P.setFromSpherical(a),P.applyQuaternion(Y),I.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(h.theta*=1-i.dampingFactor,h.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(h.set(0,0,0),c.set(0,0,0));let X=!1;if(i.zoomToCursor&&R){let rt=null;if(i.object.isPerspectiveCamera){const St=P.length();rt=Z(St*l);const jt=St-rt;i.object.position.addScaledVector(v,jt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const St=new U(x.x,x.y,0);St.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),X=!0;const jt=new U(x.x,x.y,0);jt.unproject(i.object),i.object.position.sub(jt).add(St),i.object.updateMatrixWorld(),rt=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;rt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(rt).add(i.object.position):(Is.origin.copy(i.object.position),Is.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Is.direction))<z_?t.lookAt(i.target):(Hl.setFromNormalAndCoplanarPoint(i.object.up,i.target),Is.intersectPlane(Hl,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),X=!0);return l=1,R=!1,X||Rt.distanceToSquared(i.object.position)>o||8*(1-xt.dot(i.object.quaternion))>o||wt.distanceToSquared(i.target)>0?(i.dispatchEvent(zl),Rt.copy(i.object.position),xt.copy(i.object.quaternion),wt.copy(i.target),X=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",J),i.domElement.removeEventListener("pointerdown",Bt),i.domElement.removeEventListener("pointercancel",Zt),i.domElement.removeEventListener("wheel",C),i.domElement.removeEventListener("pointermove",Ft),i.domElement.removeEventListener("pointerup",Zt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",S),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Bl,h=new Bl;let l=1;const c=new U,u=new At,f=new At,m=new At,_=new At,y=new At,p=new At,d=new At,b=new At,g=new At,v=new U,x=new At;let R=!1;const T=[],A={};function M(P){return P!==null?2*Math.PI/60*i.autoRotateSpeed*P:2*Math.PI/60/60*i.autoRotateSpeed}function E(){return Math.pow(.95,i.zoomSpeed)}function L(P){h.theta-=P}function D(P){h.phi-=P}const j=function(){const P=new U;return function(Y,Rt){P.setFromMatrixColumn(Rt,0),P.multiplyScalar(-Y),c.add(P)}}(),N=function(){const P=new U;return function(Y,Rt){i.screenSpacePanning===!0?P.setFromMatrixColumn(Rt,1):(P.setFromMatrixColumn(Rt,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(Y),c.add(P)}}(),z=function(){const P=new U;return function(Y,Rt){const xt=i.domElement;if(i.object.isPerspectiveCamera){const wt=i.object.position;P.copy(wt).sub(i.target);let yt=P.length();yt*=Math.tan(i.object.fov/2*Math.PI/180),j(2*Y*yt/xt.clientHeight,i.object.matrix),N(2*Rt*yt/xt.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(j(Y*(i.object.right-i.object.left)/i.object.zoom/xt.clientWidth,i.object.matrix),N(Rt*(i.object.top-i.object.bottom)/i.object.zoom/xt.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(P){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function et(P){if(!i.zoomToCursor)return;R=!0;const st=i.domElement.getBoundingClientRect(),Y=P.clientX-st.left,Rt=P.clientY-st.top,xt=st.width,wt=st.height;x.x=Y/xt*2-1,x.y=-(Rt/wt)*2+1,v.set(x.x,x.y,1).unproject(i.object).sub(i.object.position).normalize()}function Z(P){return Math.max(i.minDistance,Math.min(i.maxDistance,P))}function K(P){u.set(P.clientX,P.clientY)}function O(P){et(P),d.set(P.clientX,P.clientY)}function V(P){_.set(P.clientX,P.clientY)}function ut(P){f.set(P.clientX,P.clientY),m.subVectors(f,u).multiplyScalar(i.rotateSpeed);const st=i.domElement;L(2*Math.PI*m.x/st.clientHeight),D(2*Math.PI*m.y/st.clientHeight),u.copy(f),i.update()}function pt(P){b.set(P.clientX,P.clientY),g.subVectors(b,d),g.y>0?q(E()):g.y<0&&$(E()),d.copy(b),i.update()}function _t(P){y.set(P.clientX,P.clientY),p.subVectors(y,_).multiplyScalar(i.panSpeed),z(p.x,p.y),_.copy(y),i.update()}function Lt(P){et(P),P.deltaY<0?$(E()):P.deltaY>0&&q(E()),i.update()}function Xt(P){let st=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?D(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),st=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?D(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),st=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),st=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),st=!0;break}st&&(P.preventDefault(),i.update())}function Pt(){if(T.length===1)u.set(T[0].pageX,T[0].pageY);else{const P=.5*(T[0].pageX+T[1].pageX),st=.5*(T[0].pageY+T[1].pageY);u.set(P,st)}}function Ot(){if(T.length===1)_.set(T[0].pageX,T[0].pageY);else{const P=.5*(T[0].pageX+T[1].pageX),st=.5*(T[0].pageY+T[1].pageY);_.set(P,st)}}function ae(){const P=T[0].pageX-T[1].pageX,st=T[0].pageY-T[1].pageY,Y=Math.sqrt(P*P+st*st);d.set(0,Y)}function kt(){i.enableZoom&&ae(),i.enablePan&&Ot()}function G(){i.enableZoom&&ae(),i.enableRotate&&Pt()}function Le(P){if(T.length==1)f.set(P.pageX,P.pageY);else{const Y=ft(P),Rt=.5*(P.pageX+Y.x),xt=.5*(P.pageY+Y.y);f.set(Rt,xt)}m.subVectors(f,u).multiplyScalar(i.rotateSpeed);const st=i.domElement;L(2*Math.PI*m.x/st.clientHeight),D(2*Math.PI*m.y/st.clientHeight),u.copy(f)}function bt(P){if(T.length===1)y.set(P.pageX,P.pageY);else{const st=ft(P),Y=.5*(P.pageX+st.x),Rt=.5*(P.pageY+st.y);y.set(Y,Rt)}p.subVectors(y,_).multiplyScalar(i.panSpeed),z(p.x,p.y),_.copy(y)}function Dt(P){const st=ft(P),Y=P.pageX-st.x,Rt=P.pageY-st.y,xt=Math.sqrt(Y*Y+Rt*Rt);b.set(0,xt),g.set(0,Math.pow(b.y/d.y,i.zoomSpeed)),q(g.y),d.copy(b)}function Nt(P){i.enableZoom&&Dt(P),i.enablePan&&bt(P)}function he(P){i.enableZoom&&Dt(P),i.enableRotate&&Le(P)}function Bt(P){i.enabled!==!1&&(T.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",Ft),i.domElement.addEventListener("pointerup",Zt)),it(P),P.pointerType==="touch"?B(P):pe(P))}function Ft(P){i.enabled!==!1&&(P.pointerType==="touch"?nt(P):Se(P))}function Zt(P){Mt(P),T.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",Ft),i.domElement.removeEventListener("pointerup",Zt)),i.dispatchEvent(kl),s=r.NONE}function pe(P){let st;switch(P.button){case 0:st=i.mouseButtons.LEFT;break;case 1:st=i.mouseButtons.MIDDLE;break;case 2:st=i.mouseButtons.RIGHT;break;default:st=-1}switch(st){case Gn.DOLLY:if(i.enableZoom===!1)return;O(P),s=r.DOLLY;break;case Gn.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;V(P),s=r.PAN}else{if(i.enableRotate===!1)return;K(P),s=r.ROTATE}break;case Gn.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;K(P),s=r.ROTATE}else{if(i.enablePan===!1)return;V(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(to)}function Se(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ut(P);break;case r.DOLLY:if(i.enableZoom===!1)return;pt(P);break;case r.PAN:if(i.enablePan===!1)return;_t(P);break}}function C(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(to),Lt(P),i.dispatchEvent(kl))}function S(P){i.enabled===!1||i.enablePan===!1||Xt(P)}function B(P){switch(ot(P),T.length){case 1:switch(i.touches.ONE){case ti.ROTATE:if(i.enableRotate===!1)return;Pt(),s=r.TOUCH_ROTATE;break;case ti.PAN:if(i.enablePan===!1)return;Ot(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ti.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;kt(),s=r.TOUCH_DOLLY_PAN;break;case ti.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;G(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(to)}function nt(P){switch(ot(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Le(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;bt(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Nt(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;he(P),i.update();break;default:s=r.NONE}}function J(P){i.enabled!==!1&&P.preventDefault()}function it(P){T.push(P)}function Mt(P){delete A[P.pointerId];for(let st=0;st<T.length;st++)if(T[st].pointerId==P.pointerId){T.splice(st,1);return}}function ot(P){let st=A[P.pointerId];st===void 0&&(st=new At,A[P.pointerId]=st),st.set(P.pageX,P.pageY)}function ft(P){const st=P.pointerId===T[0].pointerId?T[1]:T[0];return A[st.pointerId]}i.domElement.addEventListener("contextmenu",J),i.domElement.addEventListener("pointerdown",Bt),i.domElement.addEventListener("pointercancel",Zt),i.domElement.addEventListener("wheel",C,{passive:!1}),this.update()}}class H_ extends k_{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:Gn.PAN,MIDDLE:Gn.DOLLY,RIGHT:Gn.ROTATE},this.touches={ONE:ti.PAN,TWO:ti.DOLLY_ROTATE}}}function V_(n){n("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),n("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),n("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),n.WGS84=n["EPSG:4326"],n["EPSG:3785"]=n["EPSG:3857"],n.GOOGLE=n["EPSG:3857"],n["EPSG:900913"]=n["EPSG:3857"],n["EPSG:102113"]=n["EPSG:3857"]}var Ai=1,Ri=2,sr=3,W_=4,wo=5,Vl=6378137,$_=6356752314e-3,Wl=.0066943799901413165,zr=484813681109536e-20,tt=Math.PI/2,X_=.16666666666666666,q_=.04722222222222222,j_=.022156084656084655,ct=1e-10,Ae=.017453292519943295,An=57.29577951308232,Jt=Math.PI/4,Xr=Math.PI*2,fe=3.14159265359,je={};je.greenwich=0;je.lisbon=-9.131906111111;je.paris=2.337229166667;je.bogota=-74.080916666667;je.madrid=-3.687938888889;je.rome=12.452333333333;je.bern=7.439583333333;je.jakarta=106.807719444444;je.ferro=-17.666666666667;je.brussels=4.367975;je.stockholm=18.058277777778;je.athens=23.7163375;je.oslo=10.722916666667;const Y_={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}};var $l=/[\s_\-\/\(\)]/g;function li(n,t){if(n[t])return n[t];for(var e=Object.keys(n),i=t.toLowerCase().replace($l,""),r=-1,s,o;++r<e.length;)if(s=e[r],o=s.toLowerCase().replace($l,""),o===i)return n[s]}function To(n){var t={},e=n.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,h){var l=h.split("=");return l.push(!0),a[l[0].toLowerCase()]=l[1],a},{}),i,r,s,o={proj:"projName",datum:"datumCode",rf:function(a){t.rf=parseFloat(a)},lat_0:function(a){t.lat0=a*Ae},lat_1:function(a){t.lat1=a*Ae},lat_2:function(a){t.lat2=a*Ae},lat_ts:function(a){t.lat_ts=a*Ae},lon_0:function(a){t.long0=a*Ae},lon_1:function(a){t.long1=a*Ae},lon_2:function(a){t.long2=a*Ae},alpha:function(a){t.alpha=parseFloat(a)*Ae},gamma:function(a){t.rectified_grid_angle=parseFloat(a)},lonc:function(a){t.longc=a*Ae},x_0:function(a){t.x0=parseFloat(a)},y_0:function(a){t.y0=parseFloat(a)},k_0:function(a){t.k0=parseFloat(a)},k:function(a){t.k0=parseFloat(a)},a:function(a){t.a=parseFloat(a)},b:function(a){t.b=parseFloat(a)},r_a:function(){t.R_A=!0},zone:function(a){t.zone=parseInt(a,10)},south:function(){t.utmSouth=!0},towgs84:function(a){t.datum_params=a.split(",").map(function(h){return parseFloat(h)})},to_meter:function(a){t.to_meter=parseFloat(a)},units:function(a){t.units=a;var h=li(Y_,a);h&&(t.to_meter=h.to_meter)},from_greenwich:function(a){t.from_greenwich=a*Ae},pm:function(a){var h=li(je,a);t.from_greenwich=(h||parseFloat(a))*Ae},nadgrids:function(a){a==="@null"?t.datumCode="none":t.nadgrids=a},axis:function(a){var h="ewnsud";a.length===3&&h.indexOf(a.substr(0,1))!==-1&&h.indexOf(a.substr(1,1))!==-1&&h.indexOf(a.substr(2,1))!==-1&&(t.axis=a)},approx:function(){t.approx=!0}};for(i in e)r=e[i],i in o?(s=o[i],typeof s=="function"?s(r):t[s]=r):t[i]=r;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}var qr=1,jc=2,Yc=3,Js=4,Kc=5,Ho=-1,K_=/\s/,Z_=/[A-Za-z]/,J_=/[A-Za-z84_]/,fa=/[,\]]/,Zc=/[\d\.E\-\+]/;function Xn(n){if(typeof n!="string")throw new Error("not a string");this.text=n.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=qr}Xn.prototype.readCharicter=function(){var n=this.text[this.place++];if(this.state!==Js)for(;K_.test(n);){if(this.place>=this.text.length)return;n=this.text[this.place++]}switch(this.state){case qr:return this.neutral(n);case jc:return this.keyword(n);case Js:return this.quoted(n);case Kc:return this.afterquote(n);case Yc:return this.number(n);case Ho:return}};Xn.prototype.afterquote=function(n){if(n==='"'){this.word+='"',this.state=Js;return}if(fa.test(n)){this.word=this.word.trim(),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in afterquote yet, index '+this.place)};Xn.prototype.afterItem=function(n){if(n===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=qr;return}if(n==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=qr,this.currentObject=this.stack.pop(),this.currentObject||(this.state=Ho);return}};Xn.prototype.number=function(n){if(Zc.test(n)){this.word+=n;return}if(fa.test(n)){this.word=parseFloat(this.word),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in number yet, index '+this.place)};Xn.prototype.quoted=function(n){if(n==='"'){this.state=Kc;return}this.word+=n};Xn.prototype.keyword=function(n){if(J_.test(n)){this.word+=n;return}if(n==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=qr;return}if(fa.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in keyword yet, index '+this.place)};Xn.prototype.neutral=function(n){if(Z_.test(n)){this.word=n,this.state=jc;return}if(n==='"'){this.word="",this.state=Js;return}if(Zc.test(n)){this.word=n,this.state=Yc;return}if(fa.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in neutral yet, index '+this.place)};Xn.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===Ho)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function Q_(n){var t=new Xn(n);return t.output()}function Xl(n,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var i=t?{}:n,r=e.reduce(function(s,o){return Qi(o,s),s},i);t&&(n[t]=r)}function Qi(n,t){if(!Array.isArray(n)){t[n]=!0;return}var e=n.shift();if(e==="PARAMETER"&&(e=n.shift()),n.length===1){if(Array.isArray(n[0])){t[e]={},Qi(n[0],t[e]);return}t[e]=n[0];return}if(!n.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=n;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(n);return}Array.isArray(e)||(t[e]={});var i;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:n[0].toLowerCase(),convert:n[1]},n.length===3&&Qi(n[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:n[0],a:n[1],rf:n[2]},n.length===4&&Qi(n[3],t[e]);return;case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":n[0]=["name",n[0]],Xl(t,e,n);return;default:for(i=-1;++i<n.length;)if(!Array.isArray(n[i]))return Qi(n,t[e]);return Xl(t,e,n)}}var tv=.017453292519943295;function ev(n,t){var e=t[0],i=t[1];!(e in n)&&i in n&&(n[e]=n[i],t.length===3&&(n[e]=t[2](n[e])))}function bn(n){return n*tv}function nv(n){if(n.type==="GEOGCS"?n.projName="longlat":n.type==="LOCAL_CS"?(n.projName="identity",n.local=!0):typeof n.PROJECTION=="object"?n.projName=Object.keys(n.PROJECTION)[0]:n.projName=n.PROJECTION,n.AXIS){for(var t="",e=0,i=n.AXIS.length;e<i;++e){var r=[n.AXIS[e][0].toLowerCase(),n.AXIS[e][1].toLowerCase()];r[0].indexOf("north")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="north"?t+="n":r[0].indexOf("south")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="south"?t+="s":r[0].indexOf("east")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="east"?t+="e":(r[0].indexOf("west")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="west")&&(t+="w")}t.length===2&&(t+="u"),t.length===3&&(n.axis=t)}n.UNIT&&(n.units=n.UNIT.name.toLowerCase(),n.units==="metre"&&(n.units="meter"),n.UNIT.convert&&(n.type==="GEOGCS"?n.DATUM&&n.DATUM.SPHEROID&&(n.to_meter=n.UNIT.convert*n.DATUM.SPHEROID.a):n.to_meter=n.UNIT.convert));var s=n.GEOGCS;n.type==="GEOGCS"&&(s=n),s&&(s.DATUM?n.datumCode=s.DATUM.name.toLowerCase():n.datumCode=s.name.toLowerCase(),n.datumCode.slice(0,2)==="d_"&&(n.datumCode=n.datumCode.slice(2)),(n.datumCode==="new_zealand_geodetic_datum_1949"||n.datumCode==="new_zealand_1949")&&(n.datumCode="nzgd49"),(n.datumCode==="wgs_1984"||n.datumCode==="world_geodetic_system_1984")&&(n.PROJECTION==="Mercator_Auxiliary_Sphere"&&(n.sphere=!0),n.datumCode="wgs84"),n.datumCode.slice(-6)==="_ferro"&&(n.datumCode=n.datumCode.slice(0,-6)),n.datumCode.slice(-8)==="_jakarta"&&(n.datumCode=n.datumCode.slice(0,-8)),~n.datumCode.indexOf("belge")&&(n.datumCode="rnb72"),s.DATUM&&s.DATUM.SPHEROID&&(n.ellps=s.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),n.ellps.toLowerCase().slice(0,13)==="international"&&(n.ellps="intl"),n.a=s.DATUM.SPHEROID.a,n.rf=parseFloat(s.DATUM.SPHEROID.rf,10)),s.DATUM&&s.DATUM.TOWGS84&&(n.datum_params=s.DATUM.TOWGS84),~n.datumCode.indexOf("osgb_1936")&&(n.datumCode="osgb36"),~n.datumCode.indexOf("osni_1952")&&(n.datumCode="osni52"),(~n.datumCode.indexOf("tm65")||~n.datumCode.indexOf("geodetic_datum_of_1965"))&&(n.datumCode="ire65"),n.datumCode==="ch1903+"&&(n.datumCode="ch1903"),~n.datumCode.indexOf("israel")&&(n.datumCode="isr93")),n.b&&!isFinite(n.b)&&(n.b=n.a);function o(l){var c=n.to_meter||1;return l*c}var a=function(l){return ev(n,l)},h=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",bn],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",bn],["x0","false_easting",o],["y0","false_northing",o],["long0","central_meridian",bn],["lat0","latitude_of_origin",bn],["lat0","standard_parallel_1",bn],["lat1","standard_parallel_1",bn],["lat2","standard_parallel_2",bn],["azimuth","Azimuth"],["alpha","azimuth",bn],["srsCode","name"]];h.forEach(a),!n.long0&&n.longc&&(n.projName==="Albers_Conic_Equal_Area"||n.projName==="Lambert_Azimuthal_Equal_Area")&&(n.long0=n.longc),!n.lat_ts&&n.lat1&&(n.projName==="Stereographic_South_Pole"||n.projName==="Polar Stereographic (variant B)")?(n.lat0=bn(n.lat1>0?90:-90),n.lat_ts=n.lat1):!n.lat_ts&&n.lat0&&n.projName==="Polar_Stereographic"&&(n.lat_ts=n.lat0,n.lat0=bn(n.lat0>0?90:-90))}function Jc(n){var t=Q_(n),e=t.shift(),i=t.shift();t.unshift(["name",i]),t.unshift(["type",e]);var r={};return Qi(t,r),nv(r),r}function ze(n){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?ze[n]=To(arguments[1]):ze[n]=Jc(arguments[1]):ze[n]=e}else if(arguments.length===1){if(Array.isArray(n))return n.map(function(i){Array.isArray(i)?ze.apply(t,i):ze(i)});if(typeof n=="string"){if(n in ze)return ze[n]}else"EPSG"in n?ze["EPSG:"+n.EPSG]=n:"ESRI"in n?ze["ESRI:"+n.ESRI]=n:"IAU2000"in n?ze["IAU2000:"+n.IAU2000]=n:console.log(n);return}}V_(ze);function iv(n){return typeof n=="string"}function rv(n){return n in ze}var sv=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function av(n){return sv.some(function(t){return n.indexOf(t)>-1})}var ov=["3857","900913","3785","102113"];function hv(n){var t=li(n,"authority");if(t){var e=li(t,"epsg");return e&&ov.indexOf(e)>-1}}function lv(n){var t=li(n,"extension");if(t)return li(t,"proj4")}function cv(n){return n[0]==="+"}function uv(n){if(iv(n)){if(rv(n))return ze[n];if(av(n)){var t=Jc(n);if(hv(t))return ze["EPSG:3857"];var e=lv(t);return e?To(e):t}if(cv(n))return To(n)}else return n}function ql(n,t){n=n||{};var e,i;if(!t)return n;for(i in t)e=t[i],e!==void 0&&(n[i]=e);return n}function Cn(n,t,e){var i=n*t;return e/Math.sqrt(1-i*i)}function Qr(n){return n<0?-1:1}function gt(n){return Math.abs(n)<=fe?n:n-Qr(n)*Xr}function xn(n,t,e){var i=n*e,r=.5*n;return i=Math.pow((1-i)/(1+i),r),Math.tan(.5*(tt-t))/i}function jr(n,t){for(var e=.5*n,i,r,s=tt-2*Math.atan(t),o=0;o<=15;o++)if(i=n*Math.sin(s),r=tt-2*Math.atan(t*Math.pow((1-i)/(1+i),e))-s,s+=r,Math.abs(r)<=1e-10)return s;return-9999}function fv(){var n=this.b/this.a;this.es=1-n*n,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=Cn(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function dv(n){var t=n.x,e=n.y;if(e*An>90&&e*An<-90&&t*An>180&&t*An<-180)return null;var i,r;if(Math.abs(Math.abs(e)-tt)<=ct)return null;if(this.sphere)i=this.x0+this.a*this.k0*gt(t-this.long0),r=this.y0+this.a*this.k0*Math.log(Math.tan(Jt+.5*e));else{var s=Math.sin(e),o=xn(this.e,e,s);i=this.x0+this.a*this.k0*gt(t-this.long0),r=this.y0-this.a*this.k0*Math.log(o)}return n.x=i,n.y=r,n}function pv(n){var t=n.x-this.x0,e=n.y-this.y0,i,r;if(this.sphere)r=tt-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var s=Math.exp(-e/(this.a*this.k0));if(r=jr(this.e,s),r===-9999)return null}return i=gt(this.long0+t/(this.a*this.k0)),n.x=i,n.y=r,n}var mv=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const gv={init:fv,forward:dv,inverse:pv,names:mv};function _v(){}function jl(n){return n}var vv=["longlat","identity"];const yv={init:_v,forward:jl,inverse:jl,names:vv};var Mv=[gv,yv],zs={},Qs=[];function Qc(n,t){var e=Qs.length;return n.names?(Qs[e]=n,n.names.forEach(function(i){zs[i.toLowerCase()]=e}),this):(console.log(t),!0)}function xv(n){if(!n)return!1;var t=n.toLowerCase();if(typeof zs[t]<"u"&&Qs[zs[t]])return Qs[zs[t]]}function Ev(){Mv.forEach(Qc)}const Sv={start:Ev,add:Qc,get:xv};var Ut={};Ut.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};Ut.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};Ut.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};Ut.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};Ut.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};Ut.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};Ut.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};Ut.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};Ut.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};Ut.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};Ut.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};Ut.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};Ut.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};Ut.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};Ut.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};Ut.clrk80ign={a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"};Ut.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};Ut.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};Ut.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};Ut.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};Ut.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};Ut.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};Ut.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};Ut.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};Ut.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};Ut.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};Ut.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};Ut.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};Ut.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};Ut.hough={a:6378270,rf:297,ellipseName:"Hough"};Ut.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};Ut.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};Ut.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};Ut.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};Ut.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};Ut.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};Ut.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};Ut.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};Ut.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};Ut.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};Ut.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};Ut.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var bv=Ut.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};Ut.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function wv(n,t,e,i){var r=n*n,s=t*t,o=(r-s)/r,a=0;i?(n*=1-o*(X_+o*(q_+o*j_)),r=n*n,o=0):a=Math.sqrt(o);var h=(r-s)/s;return{es:o,e:a,ep2:h}}function Tv(n,t,e,i,r){if(!n){var s=li(Ut,i);s||(s=bv),n=s.a,t=s.b,e=s.rf}return e&&!t&&(t=(1-1/e)*n),(e===0||Math.abs(n-t)<ct)&&(r=!0,t=n),{a:n,b:t,rf:e,sphere:r}}var ve={};ve.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"};ve.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"};ve.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"};ve.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"};ve.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"};ve.potsdam={towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"};ve.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"};ve.hermannskogel={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"};ve.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"};ve.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"};ve.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"};ve.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"};ve.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"};ve.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"};ve.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"};ve.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"};ve.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"};function Av(n,t,e,i,r,s,o){var a={};return n===void 0||n==="none"?a.datum_type=wo:a.datum_type=W_,t&&(a.datum_params=t.map(parseFloat),(a.datum_params[0]!==0||a.datum_params[1]!==0||a.datum_params[2]!==0)&&(a.datum_type=Ai),a.datum_params.length>3&&(a.datum_params[3]!==0||a.datum_params[4]!==0||a.datum_params[5]!==0||a.datum_params[6]!==0)&&(a.datum_type=Ri,a.datum_params[3]*=zr,a.datum_params[4]*=zr,a.datum_params[5]*=zr,a.datum_params[6]=a.datum_params[6]/1e6+1)),o&&(a.datum_type=sr,a.grids=o),a.a=e,a.b=i,a.es=r,a.ep2=s,a}var tu={};function Rv(n,t){var e=new DataView(t),i=Pv(e),r=Dv(e,i),s=Nv(e,r,i),o={header:r,subgrids:s};return tu[n]=o,o}function Cv(n){if(n===void 0)return null;var t=n.split(",");return t.map(Lv)}function Lv(n){if(n.length===0)return null;var t=n[0]==="@";return t&&(n=n.slice(1)),n==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:n,mandatory:!t,grid:tu[n]||null,isNull:!1}}function tr(n){return n/3600*Math.PI/180}function Pv(n){var t=n.getInt32(8,!1);return t===11?!1:(t=n.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function Dv(n,t){return{nFields:n.getInt32(8,t),nSubgridFields:n.getInt32(24,t),nSubgrids:n.getInt32(40,t),shiftType:Ao(n,56,56+8).trim(),fromSemiMajorAxis:n.getFloat64(120,t),fromSemiMinorAxis:n.getFloat64(136,t),toSemiMajorAxis:n.getFloat64(152,t),toSemiMinorAxis:n.getFloat64(168,t)}}function Ao(n,t,e){return String.fromCharCode.apply(null,new Uint8Array(n.buffer.slice(t,e)))}function Nv(n,t,e){for(var i=176,r=[],s=0;s<t.nSubgrids;s++){var o=Uv(n,i,e),a=Ov(n,i,o,e),h=Math.round(1+(o.upperLongitude-o.lowerLongitude)/o.longitudeInterval),l=Math.round(1+(o.upperLatitude-o.lowerLatitude)/o.latitudeInterval);r.push({ll:[tr(o.lowerLongitude),tr(o.lowerLatitude)],del:[tr(o.longitudeInterval),tr(o.latitudeInterval)],lim:[h,l],count:o.gridNodeCount,cvs:Iv(a)}),i+=176+o.gridNodeCount*16}return r}function Iv(n){return n.map(function(t){return[tr(t.longitudeShift),tr(t.latitudeShift)]})}function Uv(n,t,e){return{name:Ao(n,t+8,t+16).trim(),parent:Ao(n,t+24,t+24+8).trim(),lowerLatitude:n.getFloat64(t+72,e),upperLatitude:n.getFloat64(t+88,e),lowerLongitude:n.getFloat64(t+104,e),upperLongitude:n.getFloat64(t+120,e),latitudeInterval:n.getFloat64(t+136,e),longitudeInterval:n.getFloat64(t+152,e),gridNodeCount:n.getInt32(t+168,e)}}function Ov(n,t,e,i){for(var r=t+176,s=16,o=[],a=0;a<e.gridNodeCount;a++){var h={latitudeShift:n.getFloat32(r+a*s,i),longitudeShift:n.getFloat32(r+a*s+4,i),latitudeAccuracy:n.getFloat32(r+a*s+8,i),longitudeAccuracy:n.getFloat32(r+a*s+12,i)};o.push(h)}return o}function Rn(n,t){if(!(this instanceof Rn))return new Rn(n);t=t||function(l){if(l)throw l};var e=uv(n);if(typeof e!="object"){t(n);return}var i=Rn.projections.get(e.projName);if(!i){t(n);return}if(e.datumCode&&e.datumCode!=="none"){var r=li(ve,e.datumCode);r&&(e.datum_params=e.datum_params||(r.towgs84?r.towgs84.split(","):null),e.ellps=r.ellipse,e.datumName=r.datumName?r.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var s=Tv(e.a,e.b,e.rf,e.ellps,e.sphere),o=wv(s.a,s.b,s.rf,e.R_A),a=Cv(e.nadgrids),h=e.datum||Av(e.datumCode,e.datum_params,s.a,s.b,o.es,o.ep2,a);ql(this,e),ql(this,i),this.a=s.a,this.b=s.b,this.rf=s.rf,this.sphere=s.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=h,this.init(),t(null,this)}Rn.projections=Sv;Rn.projections.start();function Fv(n,t){return n.datum_type!==t.datum_type||n.a!==t.a||Math.abs(n.es-t.es)>5e-11?!1:n.datum_type===Ai?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]:n.datum_type===Ri?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]&&n.datum_params[3]===t.datum_params[3]&&n.datum_params[4]===t.datum_params[4]&&n.datum_params[5]===t.datum_params[5]&&n.datum_params[6]===t.datum_params[6]:!0}function eu(n,t,e){var i=n.x,r=n.y,s=n.z?n.z:0,o,a,h,l;if(r<-tt&&r>-1.001*tt)r=-tt;else if(r>tt&&r<1.001*tt)r=tt;else{if(r<-tt)return{x:-1/0,y:-1/0,z:n.z};if(r>tt)return{x:1/0,y:1/0,z:n.z}}return i>Math.PI&&(i-=2*Math.PI),a=Math.sin(r),l=Math.cos(r),h=a*a,o=e/Math.sqrt(1-t*h),{x:(o+s)*l*Math.cos(i),y:(o+s)*l*Math.sin(i),z:(o*(1-t)+s)*a}}function nu(n,t,e,i){var r=1e-12,s=r*r,o=30,a,h,l,c,u,f,m,_,y,p,d,b,g,v=n.x,x=n.y,R=n.z?n.z:0,T,A,M;if(a=Math.sqrt(v*v+x*x),h=Math.sqrt(v*v+x*x+R*R),a/e<r){if(T=0,h/e<r)return A=tt,M=-i,{x:n.x,y:n.y,z:n.z}}else T=Math.atan2(x,v);l=R/h,c=a/h,u=1/Math.sqrt(1-t*(2-t)*c*c),_=c*(1-t)*u,y=l*u,g=0;do g++,m=e/Math.sqrt(1-t*y*y),M=a*_+R*y-m*(1-t*y*y),f=t*m/(m+M),u=1/Math.sqrt(1-f*(2-f)*c*c),p=c*(1-f)*u,d=l*u,b=d*_-p*y,_=p,y=d;while(b*b>s&&g<o);return A=Math.atan(d/Math.abs(p)),{x:T,y:A,z:M}}function Gv(n,t,e){if(t===Ai)return{x:n.x+e[0],y:n.y+e[1],z:n.z+e[2]};if(t===Ri){var i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],h=e[5],l=e[6];return{x:l*(n.x-h*n.y+a*n.z)+i,y:l*(h*n.x+n.y-o*n.z)+r,z:l*(-a*n.x+o*n.y+n.z)+s}}}function Bv(n,t,e){if(t===Ai)return{x:n.x-e[0],y:n.y-e[1],z:n.z-e[2]};if(t===Ri){var i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],h=e[5],l=e[6],c=(n.x-i)/l,u=(n.y-r)/l,f=(n.z-s)/l;return{x:c+h*u-a*f,y:-h*c+u+o*f,z:a*c-o*u+f}}}function Us(n){return n===Ai||n===Ri}function zv(n,t,e){if(Fv(n,t)||n.datum_type===wo||t.datum_type===wo)return e;var i=n.a,r=n.es;if(n.datum_type===sr){var s=Yl(n,!1,e);if(s!==0)return;i=Vl,r=Wl}var o=t.a,a=t.b,h=t.es;if(t.datum_type===sr&&(o=Vl,a=$_,h=Wl),r===h&&i===o&&!Us(n.datum_type)&&!Us(t.datum_type))return e;if(e=eu(e,r,i),Us(n.datum_type)&&(e=Gv(e,n.datum_type,n.datum_params)),Us(t.datum_type)&&(e=Bv(e,t.datum_type,t.datum_params)),e=nu(e,h,o,a),t.datum_type===sr){var l=Yl(t,!0,e);if(l!==0)return}return e}function Yl(n,t,e){if(n.grids===null||n.grids.length===0)return console.log("Grid shift grids not found"),-1;var i={x:-e.x,y:e.y},r={x:Number.NaN,y:Number.NaN},s=[];t:for(var o=0;o<n.grids.length;o++){var a=n.grids[o];if(s.push(a.name),a.isNull){r=i;break}if(a.mandatory,a.grid===null){if(a.mandatory)return console.log("Unable to find mandatory grid '"+a.name+"'"),-1;continue}for(var h=a.grid.subgrids,l=0,c=h.length;l<c;l++){var u=h[l],f=(Math.abs(u.del[1])+Math.abs(u.del[0]))/1e4,m=u.ll[0]-f,_=u.ll[1]-f,y=u.ll[0]+(u.lim[0]-1)*u.del[0]+f,p=u.ll[1]+(u.lim[1]-1)*u.del[1]+f;if(!(_>i.y||m>i.x||p<i.y||y<i.x)&&(r=kv(i,t,u),!isNaN(r.x)))break t}}return isNaN(r.x)?(console.log("Failed to find a grid shift table for location '"+-i.x*An+" "+i.y*An+" tried: '"+s+"'"),-1):(e.x=-r.x,e.y=r.y,0)}function kv(n,t,e){var i={x:Number.NaN,y:Number.NaN};if(isNaN(n.x))return i;var r={x:n.x,y:n.y};r.x-=e.ll[0],r.y-=e.ll[1],r.x=gt(r.x-Math.PI)+Math.PI;var s=Kl(r,e);if(t){if(isNaN(s.x))return i;s.x=r.x-s.x,s.y=r.y-s.y;var o=9,a=1e-12,h,l;do{if(l=Kl(s,e),isNaN(l.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}h={x:r.x-(l.x+s.x),y:r.y-(l.y+s.y)},s.x+=h.x,s.y+=h.y}while(o--&&Math.abs(h.x)>a&&Math.abs(h.y)>a);if(o<0)return console.log("Inverse grid shift iterator failed to converge."),i;i.x=gt(s.x+e.ll[0]),i.y=s.y+e.ll[1]}else isNaN(s.x)||(i.x=n.x+s.x,i.y=n.y+s.y);return i}function Kl(n,t){var e={x:n.x/t.del[0],y:n.y/t.del[1]},i={x:Math.floor(e.x),y:Math.floor(e.y)},r={x:e.x-1*i.x,y:e.y-1*i.y},s={x:Number.NaN,y:Number.NaN},o;if(i.x<0||i.x>=t.lim[0]||i.y<0||i.y>=t.lim[1])return s;o=i.y*t.lim[0]+i.x;var a={x:t.cvs[o][0],y:t.cvs[o][1]};o++;var h={x:t.cvs[o][0],y:t.cvs[o][1]};o+=t.lim[0];var l={x:t.cvs[o][0],y:t.cvs[o][1]};o--;var c={x:t.cvs[o][0],y:t.cvs[o][1]},u=r.x*r.y,f=r.x*(1-r.y),m=(1-r.x)*(1-r.y),_=(1-r.x)*r.y;return s.x=m*a.x+f*h.x+_*c.x+u*l.x,s.y=m*a.y+f*h.y+_*c.y+u*l.y,s}function Zl(n,t,e){var i=e.x,r=e.y,s=e.z||0,o,a,h,l={};for(h=0;h<3;h++)if(!(t&&h===2&&e.z===void 0))switch(h===0?(o=i,"ew".indexOf(n.axis[h])!==-1?a="x":a="y"):h===1?(o=r,"ns".indexOf(n.axis[h])!==-1?a="y":a="x"):(o=s,a="z"),n.axis[h]){case"e":l[a]=o;break;case"w":l[a]=-o;break;case"n":l[a]=o;break;case"s":l[a]=-o;break;case"u":e[a]!==void 0&&(l.z=o);break;case"d":e[a]!==void 0&&(l.z=-o);break;default:return null}return l}function iu(n){var t={x:n[0],y:n[1]};return n.length>2&&(t.z=n[2]),n.length>3&&(t.m=n[3]),t}function Hv(n){Jl(n.x),Jl(n.y)}function Jl(n){if(typeof Number.isFinite=="function"){if(Number.isFinite(n))return;throw new TypeError("coordinates must be finite numbers")}if(typeof n!="number"||n!==n||!isFinite(n))throw new TypeError("coordinates must be finite numbers")}function Vv(n,t){return(n.datum.datum_type===Ai||n.datum.datum_type===Ri||n.datum.datum_type===sr)&&t.datumCode!=="WGS84"||(t.datum.datum_type===Ai||t.datum.datum_type===Ri||t.datum.datum_type===sr)&&n.datumCode!=="WGS84"}function ta(n,t,e,i){var r;Array.isArray(e)?e=iu(e):e={x:e.x,y:e.y,z:e.z,m:e.m};var s=e.z!==void 0;if(Hv(e),n.datum&&t.datum&&Vv(n,t)&&(r=new Rn("WGS84"),e=ta(n,r,e,i),n=r),i&&n.axis!=="enu"&&(e=Zl(n,!1,e)),n.projName==="longlat")e={x:e.x*Ae,y:e.y*Ae,z:e.z||0};else if(n.to_meter&&(e={x:e.x*n.to_meter,y:e.y*n.to_meter,z:e.z||0}),e=n.inverse(e),!e)return;if(n.from_greenwich&&(e.x+=n.from_greenwich),e=zv(n.datum,t.datum,e),!!e)return t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*An,y:e.y*An,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),i&&t.axis!=="enu"?Zl(t,!0,e):(e&&!s&&delete e.z,e)}var Ql=Rn("WGS84");function eo(n,t,e,i){var r,s,o;return Array.isArray(e)?(r=ta(n,t,e,i)||{x:NaN,y:NaN},e.length>2?typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof r.z=="number"?[r.x,r.y,r.z].concat(e.splice(3)):[r.x,r.y,e[2]].concat(e.splice(3)):[r.x,r.y].concat(e.splice(2)):[r.x,r.y]):(s=ta(n,t,e,i),o=Object.keys(e),o.length===2||o.forEach(function(a){if(typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(a==="x"||a==="y"||a==="z")return}else if(a==="x"||a==="y")return;s[a]=e[a]}),s)}function tc(n){return n instanceof Rn?n:n.oProj?n.oProj:Rn(n)}function Xe(n,t,e){n=tc(n);var i=!1,r;return typeof t>"u"?(t=n,n=Ql,i=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,t=n,n=Ql,i=!0),t=tc(t),e?eo(n,t,e):(r={forward:function(s,o){return eo(n,t,s,o)},inverse:function(s,o){return eo(t,n,s,o)}},i&&(r.oProj=t),r)}var ec=6,ru="AJSAJS",su="AFAFAF",er=65,Ve=73,sn=79,Ir=86,Ur=90;const Wv={forward:au,inverse:$v,toPoint:ou};function au(n,t){return t=t||5,jv(Xv({lat:n[1],lon:n[0]}),t)}function $v(n){var t=Vo(lu(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function ou(n){var t=Vo(lu(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function no(n){return n*(Math.PI/180)}function nc(n){return 180*(n/Math.PI)}function Xv(n){var t=n.lat,e=n.lon,i=6378137,r=.00669438,s=.9996,o,a,h,l,c,u,f,m=no(t),_=no(e),y,p;p=Math.floor((e+180)/6)+1,e===180&&(p=60),t>=56&&t<64&&e>=3&&e<12&&(p=32),t>=72&&t<84&&(e>=0&&e<9?p=31:e>=9&&e<21?p=33:e>=21&&e<33?p=35:e>=33&&e<42&&(p=37)),o=(p-1)*6-180+3,y=no(o),a=r/(1-r),h=i/Math.sqrt(1-r*Math.sin(m)*Math.sin(m)),l=Math.tan(m)*Math.tan(m),c=a*Math.cos(m)*Math.cos(m),u=Math.cos(m)*(_-y),f=i*((1-r/4-3*r*r/64-5*r*r*r/256)*m-(3*r/8+3*r*r/32+45*r*r*r/1024)*Math.sin(2*m)+(15*r*r/256+45*r*r*r/1024)*Math.sin(4*m)-35*r*r*r/3072*Math.sin(6*m));var d=s*h*(u+(1-l+c)*u*u*u/6+(5-18*l+l*l+72*c-58*a)*u*u*u*u*u/120)+5e5,b=s*(f+h*Math.tan(m)*(u*u/2+(5-l+9*c+4*c*c)*u*u*u*u/24+(61-58*l+l*l+600*c-330*a)*u*u*u*u*u*u/720));return t<0&&(b+=1e7),{northing:Math.round(b),easting:Math.round(d),zoneNumber:p,zoneLetter:qv(t)}}function Vo(n){var t=n.northing,e=n.easting,i=n.zoneLetter,r=n.zoneNumber;if(r<0||r>60)return null;var s=.9996,o=6378137,a=.00669438,h,l=(1-Math.sqrt(1-a))/(1+Math.sqrt(1-a)),c,u,f,m,_,y,p,d,b,g=e-5e5,v=t;i<"N"&&(v-=1e7),p=(r-1)*6-180+3,h=a/(1-a),y=v/s,d=y/(o*(1-a/4-3*a*a/64-5*a*a*a/256)),b=d+(3*l/2-27*l*l*l/32)*Math.sin(2*d)+(21*l*l/16-55*l*l*l*l/32)*Math.sin(4*d)+151*l*l*l/96*Math.sin(6*d),c=o/Math.sqrt(1-a*Math.sin(b)*Math.sin(b)),u=Math.tan(b)*Math.tan(b),f=h*Math.cos(b)*Math.cos(b),m=o*(1-a)/Math.pow(1-a*Math.sin(b)*Math.sin(b),1.5),_=g/(c*s);var x=b-c*Math.tan(b)/m*(_*_/2-(5+3*u+10*f-4*f*f-9*h)*_*_*_*_/24+(61+90*u+298*f+45*u*u-252*h-3*f*f)*_*_*_*_*_*_/720);x=nc(x);var R=(_-(1+2*u+f)*_*_*_/6+(5-2*f+28*u-3*f*f+8*h+24*u*u)*_*_*_*_*_/120)/Math.cos(b);R=p+nc(R);var T;if(n.accuracy){var A=Vo({northing:n.northing+n.accuracy,easting:n.easting+n.accuracy,zoneLetter:n.zoneLetter,zoneNumber:n.zoneNumber});T={top:A.lat,right:A.lon,bottom:x,left:R}}else T={lat:x,lon:R};return T}function qv(n){var t="Z";return 84>=n&&n>=72?t="X":72>n&&n>=64?t="W":64>n&&n>=56?t="V":56>n&&n>=48?t="U":48>n&&n>=40?t="T":40>n&&n>=32?t="S":32>n&&n>=24?t="R":24>n&&n>=16?t="Q":16>n&&n>=8?t="P":8>n&&n>=0?t="N":0>n&&n>=-8?t="M":-8>n&&n>=-16?t="L":-16>n&&n>=-24?t="K":-24>n&&n>=-32?t="J":-32>n&&n>=-40?t="H":-40>n&&n>=-48?t="G":-48>n&&n>=-56?t="F":-56>n&&n>=-64?t="E":-64>n&&n>=-72?t="D":-72>n&&n>=-80&&(t="C"),t}function jv(n,t){var e="00000"+n.easting,i="00000"+n.northing;return n.zoneNumber+n.zoneLetter+Yv(n.easting,n.northing,n.zoneNumber)+e.substr(e.length-5,t)+i.substr(i.length-5,t)}function Yv(n,t,e){var i=hu(e),r=Math.floor(n/1e5),s=Math.floor(t/1e5)%20;return Kv(r,s,i)}function hu(n){var t=n%ec;return t===0&&(t=ec),t}function Kv(n,t,e){var i=e-1,r=ru.charCodeAt(i),s=su.charCodeAt(i),o=r+n-1,a=s+t,h=!1;o>Ur&&(o=o-Ur+er-1,h=!0),(o===Ve||r<Ve&&o>Ve||(o>Ve||r<Ve)&&h)&&o++,(o===sn||r<sn&&o>sn||(o>sn||r<sn)&&h)&&(o++,o===Ve&&o++),o>Ur&&(o=o-Ur+er-1),a>Ir?(a=a-Ir+er-1,h=!0):h=!1,(a===Ve||s<Ve&&a>Ve||(a>Ve||s<Ve)&&h)&&a++,(a===sn||s<sn&&a>sn||(a>sn||s<sn)&&h)&&(a++,a===Ve&&a++),a>Ir&&(a=a-Ir+er-1);var l=String.fromCharCode(o)+String.fromCharCode(a);return l}function lu(n){if(n&&n.length===0)throw"MGRSPoint coverting from nothing";for(var t=n.length,e=null,i="",r,s=0;!/[A-Z]/.test(r=n.charAt(s));){if(s>=2)throw"MGRSPoint bad conversion from: "+n;i+=r,s++}var o=parseInt(i,10);if(s===0||s+3>t)throw"MGRSPoint bad conversion from: "+n;var a=n.charAt(s++);if(a<="A"||a==="B"||a==="Y"||a>="Z"||a==="I"||a==="O")throw"MGRSPoint zone letter "+a+" not handled: "+n;e=n.substring(s,s+=2);for(var h=hu(o),l=Zv(e.charAt(0),h),c=Jv(e.charAt(1),h);c<Qv(a);)c+=2e6;var u=t-s;if(u%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+n;var f=u/2,m=0,_=0,y,p,d,b,g;return f>0&&(y=1e5/Math.pow(10,f),p=n.substring(s,s+f),m=parseFloat(p)*y,d=n.substring(s+f),_=parseFloat(d)*y),b=m+l,g=_+c,{easting:b,northing:g,zoneLetter:a,zoneNumber:o,accuracy:y}}function Zv(n,t){for(var e=ru.charCodeAt(t-1),i=1e5,r=!1;e!==n.charCodeAt(0);){if(e++,e===Ve&&e++,e===sn&&e++,e>Ur){if(r)throw"Bad character: "+n;e=er,r=!0}i+=1e5}return i}function Jv(n,t){if(n>"V")throw"MGRSPoint given invalid Northing "+n;for(var e=su.charCodeAt(t-1),i=0,r=!1;e!==n.charCodeAt(0);){if(e++,e===Ve&&e++,e===sn&&e++,e>Ir){if(r)throw"Bad character: "+n;e=er,r=!0}i+=1e5}return i}function Qv(n){var t;switch(n){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+n}function fr(n,t,e){if(!(this instanceof fr))return new fr(n,t,e);if(Array.isArray(n))this.x=n[0],this.y=n[1],this.z=n[2]||0;else if(typeof n=="object")this.x=n.x,this.y=n.y,this.z=n.z||0;else if(typeof n=="string"&&typeof t>"u"){var i=n.split(",");this.x=parseFloat(i[0],10),this.y=parseFloat(i[1],10),this.z=parseFloat(i[2],10)||0}else this.x=n,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}fr.fromMGRS=function(n){return new fr(ou(n))};fr.prototype.toMGRS=function(n){return au([this.x,this.y],n)};var ty=1,ey=.25,ic=.046875,rc=.01953125,sc=.01068115234375,ny=.75,iy=.46875,ry=.013020833333333334,sy=.007120768229166667,ay=.3645833333333333,oy=.005696614583333333,hy=.3076171875;function cu(n){var t=[];t[0]=ty-n*(ey+n*(ic+n*(rc+n*sc))),t[1]=n*(ny-n*(ic+n*(rc+n*sc)));var e=n*n;return t[2]=e*(iy-n*(ry+n*sy)),e*=n,t[3]=e*(ay-n*oy),t[4]=e*n*hy,t}function da(n,t,e,i){return e*=t,t*=t,i[0]*n-e*(i[1]+t*(i[2]+t*(i[3]+t*i[4])))}var ly=20;function uu(n,t,e){for(var i=1/(1-t),r=n,s=ly;s;--s){var o=Math.sin(r),a=1-t*o*o;if(a=(da(r,o,Math.cos(r),e)-n)*(a*Math.sqrt(a))*i,r-=a,Math.abs(a)<ct)return r}return r}function cy(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=cu(this.es),this.ml0=da(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function uy(n){var t=n.x,e=n.y,i=gt(t-this.long0),r,s,o,a=Math.sin(e),h=Math.cos(e);if(this.es){var c=h*i,u=Math.pow(c,2),f=this.ep2*Math.pow(h,2),m=Math.pow(f,2),_=Math.abs(h)>ct?Math.tan(e):0,y=Math.pow(_,2),p=Math.pow(y,2);r=1-this.es*Math.pow(a,2),c=c/Math.sqrt(r);var d=da(e,a,h,this.en);s=this.a*(this.k0*c*(1+u/6*(1-y+f+u/20*(5-18*y+p+14*f-58*y*f+u/42*(61+179*p-p*y-479*y)))))+this.x0,o=this.a*(this.k0*(d-this.ml0+a*i*c/2*(1+u/12*(5-y+9*f+4*m+u/30*(61+p-58*y+270*f-330*y*f+u/56*(1385+543*p-p*y-3111*y))))))+this.y0}else{var l=h*Math.sin(i);if(Math.abs(Math.abs(l)-1)<ct)return 93;if(s=.5*this.a*this.k0*Math.log((1+l)/(1-l))+this.x0,o=h*Math.cos(i)/Math.sqrt(1-Math.pow(l,2)),l=Math.abs(o),l>=1){if(l-1>ct)return 93;o=0}else o=Math.acos(o);e<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return n.x=s,n.y=o,n}function fy(n){var t,e,i,r,s=(n.x-this.x0)*(1/this.a),o=(n.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+o/this.k0,e=uu(t,this.es,this.en),Math.abs(e)<tt){var u=Math.sin(e),f=Math.cos(e),m=Math.abs(f)>ct?Math.tan(e):0,_=this.ep2*Math.pow(f,2),y=Math.pow(_,2),p=Math.pow(m,2),d=Math.pow(p,2);t=1-this.es*Math.pow(u,2);var b=s*Math.sqrt(t)/this.k0,g=Math.pow(b,2);t=t*m,i=e-t*g/(1-this.es)*.5*(1-g/12*(5+3*p-9*_*p+_-4*y-g/30*(61+90*p-252*_*p+45*d+46*_-g/56*(1385+3633*p+4095*d+1574*d*p)))),r=gt(this.long0+b*(1-g/6*(1+2*p+_-g/20*(5+28*p+24*d+8*_*p+6*_-g/42*(61+662*p+1320*d+720*d*p))))/f)}else i=tt*Qr(o),r=0;else{var a=Math.exp(s/this.k0),h=.5*(a-1/a),l=this.lat0+o/this.k0,c=Math.cos(l);t=Math.sqrt((1-Math.pow(c,2))/(1+Math.pow(h,2))),i=Math.asin(t),o<0&&(i=-i),h===0&&c===0?r=0:r=gt(Math.atan2(h,c)+this.long0)}return n.x=r,n.y=i,n}var dy=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const ks={init:cy,forward:uy,inverse:fy,names:dy};function fu(n){var t=Math.exp(n);return t=(t-1/t)/2,t}function yn(n,t){n=Math.abs(n),t=Math.abs(t);var e=Math.max(n,t),i=Math.min(n,t)/(e||1);return e*Math.sqrt(1+Math.pow(i,2))}function py(n){var t=1+n,e=t-1;return e===0?n:n*Math.log(t)/e}function my(n){var t=Math.abs(n);return t=py(t*(1+t/(yn(1,t)+1))),n<0?-t:t}function Wo(n,t){for(var e=2*Math.cos(2*t),i=n.length-1,r=n[i],s=0,o;--i>=0;)o=-s+e*r+n[i],s=r,r=o;return t+o*Math.sin(2*t)}function gy(n,t){for(var e=2*Math.cos(t),i=n.length-1,r=n[i],s=0,o;--i>=0;)o=-s+e*r+n[i],s=r,r=o;return Math.sin(t)*o}function _y(n){var t=Math.exp(n);return t=(t+1/t)/2,t}function du(n,t,e){for(var i=Math.sin(t),r=Math.cos(t),s=fu(e),o=_y(e),a=2*r*o,h=-2*i*s,l=n.length-1,c=n[l],u=0,f=0,m=0,_,y;--l>=0;)_=f,y=u,f=c,u=m,c=-_+a*f-h*u+n[l],m=-y+h*f+a*u;return a=i*o,h=r*s,[a*c-h*m,a*m+h*c]}function vy(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(ks.init.apply(this),this.forward=ks.forward,this.inverse=ks.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var n=this.es/(1+Math.sqrt(1-this.es)),t=n/(2-n),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var i=Wo(this.cbg,this.lat0);this.Zb=-this.Qn*(i+gy(this.gtu,2*i))}function yy(n){var t=gt(n.x-this.long0),e=n.y;e=Wo(this.cbg,e);var i=Math.sin(e),r=Math.cos(e),s=Math.sin(t),o=Math.cos(t);e=Math.atan2(i,o*r),t=Math.atan2(s*r,yn(i,r*o)),t=my(Math.tan(t));var a=du(this.gtu,2*e,2*t);e=e+a[0],t=t+a[1];var h,l;return Math.abs(t)<=2.623395162778?(h=this.a*(this.Qn*t)+this.x0,l=this.a*(this.Qn*e+this.Zb)+this.y0):(h=1/0,l=1/0),n.x=h,n.y=l,n}function My(n){var t=(n.x-this.x0)*(1/this.a),e=(n.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var i,r;if(Math.abs(t)<=2.623395162778){var s=du(this.utg,2*e,2*t);e=e+s[0],t=t+s[1],t=Math.atan(fu(t));var o=Math.sin(e),a=Math.cos(e),h=Math.sin(t),l=Math.cos(t);e=Math.atan2(o*l,yn(h,l*a)),t=Math.atan2(h,l*a),i=gt(t+this.long0),r=Wo(this.cgb,e)}else i=1/0,r=1/0;return n.x=i,n.y=r,n}var xy=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","tmerc"];const Hs={init:vy,forward:yy,inverse:My,names:xy};function Ey(n,t){if(n===void 0){if(n=Math.floor((gt(t)+Math.PI)*30/Math.PI)+1,n<0)return 0;if(n>60)return 60}return n}var Sy="etmerc";function by(){var n=Ey(this.zone,this.long0);if(n===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(n)-183)*Ae,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,Hs.init.apply(this),this.forward=Hs.forward,this.inverse=Hs.inverse}var wy=["Universal Transverse Mercator System","utm"];const Ty={init:by,names:wy,dependsOn:Sy};function $o(n,t){return Math.pow((1-n)/(1+n),t)}var Ay=20;function Ry(){var n=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*n*n),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(n/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+Jt)/(Math.pow(Math.tan(.5*this.lat0+Jt),this.C)*$o(this.e*n,this.ratexp))}function Cy(n){var t=n.x,e=n.y;return n.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+Jt),this.C)*$o(this.e*Math.sin(e),this.ratexp))-tt,n.x=this.C*t,n}function Ly(n){for(var t=1e-14,e=n.x/this.C,i=n.y,r=Math.pow(Math.tan(.5*i+Jt)/this.K,1/this.C),s=Ay;s>0&&(i=2*Math.atan(r*$o(this.e*Math.sin(n.y),-.5*this.e))-tt,!(Math.abs(i-n.y)<t));--s)n.y=i;return s?(n.x=e,n.y=i,n):null}var Py=["gauss"];const Xo={init:Ry,forward:Cy,inverse:Ly,names:Py};function Dy(){Xo.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function Ny(n){var t,e,i,r;return n.x=gt(n.x-this.long0),Xo.forward.apply(this,[n]),t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),r=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*i),n.x=r*e*Math.sin(n.x),n.y=r*(this.cosc0*t-this.sinc0*e*i),n.x=this.a*n.x+this.x0,n.y=this.a*n.y+this.y0,n}function Iy(n){var t,e,i,r,s;if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,s=Math.sqrt(n.x*n.x+n.y*n.y)){var o=2*Math.atan2(s,this.R2);t=Math.sin(o),e=Math.cos(o),r=Math.asin(e*this.sinc0+n.y*t*this.cosc0/s),i=Math.atan2(n.x*t,s*this.cosc0*e-n.y*this.sinc0*t)}else r=this.phic0,i=0;return n.x=i,n.y=r,Xo.inverse.apply(this,[n]),n.x=gt(n.x+this.long0),n}var Uy=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const Oy={init:Dy,forward:Ny,inverse:Iy,names:Uy};function Fy(n,t,e){return t*=e,Math.tan(.5*(tt+n))*Math.pow((1-t)/(1+t),.5*e)}function Gy(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ct&&(this.k0=.5*(1+Qr(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=ct&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ct&&Math.abs(Math.cos(this.lat_ts))>ct&&(this.k0=.5*this.cons*Cn(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/xn(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=Cn(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-tt,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function By(n){var t=n.x,e=n.y,i=Math.sin(e),r=Math.cos(e),s,o,a,h,l,c,u=gt(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=ct&&Math.abs(e+this.lat0)<=ct?(n.x=NaN,n.y=NaN,n):this.sphere?(s=2*this.k0/(1+this.sinlat0*i+this.coslat0*r*Math.cos(u)),n.x=this.a*s*r*Math.sin(u)+this.x0,n.y=this.a*s*(this.coslat0*i-this.sinlat0*r*Math.cos(u))+this.y0,n):(o=2*Math.atan(this.ssfn_(e,i,this.e))-tt,h=Math.cos(o),a=Math.sin(o),Math.abs(this.coslat0)<=ct?(l=xn(this.e,e*this.con,this.con*i),c=2*this.a*this.k0*l/this.cons,n.x=this.x0+c*Math.sin(t-this.long0),n.y=this.y0-this.con*c*Math.cos(t-this.long0),n):(Math.abs(this.sinlat0)<ct?(s=2*this.a*this.k0/(1+h*Math.cos(u)),n.y=s*a):(s=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*a+this.cosX0*h*Math.cos(u))),n.y=s*(this.cosX0*a-this.sinX0*h*Math.cos(u))+this.y0),n.x=s*h*Math.sin(u)+this.x0,n))}function zy(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,r,s,o=Math.sqrt(n.x*n.x+n.y*n.y);if(this.sphere){var a=2*Math.atan(o/(2*this.a*this.k0));return t=this.long0,e=this.lat0,o<=ct?(n.x=t,n.y=e,n):(e=Math.asin(Math.cos(a)*this.sinlat0+n.y*Math.sin(a)*this.coslat0/o),Math.abs(this.coslat0)<ct?this.lat0>0?t=gt(this.long0+Math.atan2(n.x,-1*n.y)):t=gt(this.long0+Math.atan2(n.x,n.y)):t=gt(this.long0+Math.atan2(n.x*Math.sin(a),o*this.coslat0*Math.cos(a)-n.y*this.sinlat0*Math.sin(a))),n.x=t,n.y=e,n)}else if(Math.abs(this.coslat0)<=ct){if(o<=ct)return e=this.lat0,t=this.long0,n.x=t,n.y=e,n;n.x*=this.con,n.y*=this.con,i=o*this.cons/(2*this.a*this.k0),e=this.con*jr(this.e,i),t=this.con*gt(this.con*this.long0+Math.atan2(n.x,-1*n.y))}else r=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,o<=ct?s=this.X0:(s=Math.asin(Math.cos(r)*this.sinX0+n.y*Math.sin(r)*this.cosX0/o),t=gt(this.long0+Math.atan2(n.x*Math.sin(r),o*this.cosX0*Math.cos(r)-n.y*this.sinX0*Math.sin(r)))),e=-1*jr(this.e,Math.tan(.5*(tt+s)));return n.x=t,n.y=e,n}var ky=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)","Polar_Stereographic"];const Hy={init:Gy,forward:By,inverse:zy,names:ky,ssfn_:Fy};function Vy(){var n=this.lat0;this.lambda0=this.long0;var t=Math.sin(n),e=this.a,i=this.rf,r=1/i,s=2*r-Math.pow(r,2),o=this.e=Math.sqrt(s);this.R=this.k0*e*Math.sqrt(1-s)/(1-s*Math.pow(t,2)),this.alpha=Math.sqrt(1+s/(1-s)*Math.pow(Math.cos(n),4)),this.b0=Math.asin(t/this.alpha);var a=Math.log(Math.tan(Math.PI/4+this.b0/2)),h=Math.log(Math.tan(Math.PI/4+n/2)),l=Math.log((1+o*t)/(1-o*t));this.K=a-this.alpha*h+this.alpha*o/2*l}function Wy(n){var t=Math.log(Math.tan(Math.PI/4-n.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(n.y))/(1-this.e*Math.sin(n.y))),i=-this.alpha*(t+e)+this.K,r=2*(Math.atan(Math.exp(i))-Math.PI/4),s=this.alpha*(n.x-this.lambda0),o=Math.atan(Math.sin(s)/(Math.sin(this.b0)*Math.tan(r)+Math.cos(this.b0)*Math.cos(s))),a=Math.asin(Math.cos(this.b0)*Math.sin(r)-Math.sin(this.b0)*Math.cos(r)*Math.cos(s));return n.y=this.R/2*Math.log((1+Math.sin(a))/(1-Math.sin(a)))+this.y0,n.x=this.R*o+this.x0,n}function $y(n){for(var t=n.x-this.x0,e=n.y-this.y0,i=t/this.R,r=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),s=Math.asin(Math.cos(this.b0)*Math.sin(r)+Math.sin(this.b0)*Math.cos(r)*Math.cos(i)),o=Math.atan(Math.sin(i)/(Math.cos(this.b0)*Math.cos(i)-Math.sin(this.b0)*Math.tan(r))),a=this.lambda0+o/this.alpha,h=0,l=s,c=-1e3,u=0;Math.abs(l-c)>1e-7;){if(++u>20)return;h=1/this.alpha*(Math.log(Math.tan(Math.PI/4+s/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(l))/2)),c=l,l=2*Math.atan(Math.exp(h))-Math.PI/2}return n.x=a,n.y=l,n}var Xy=["somerc"];const qy={init:Vy,forward:Wy,inverse:$y,names:Xy};var Zi=1e-7;function jy(n){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof n.PROJECTION=="object"?Object.keys(n.PROJECTION)[0]:n.PROJECTION;return"no_uoff"in n||"no_off"in n||t.indexOf(e)!==-1}function Yy(){var n,t,e,i,r,s,o,a,h,l,c=0,u,f=0,m=0,_=0,y=0,p=0,d=0;this.no_off=jy(this),this.no_rot="no_rot"in this;var b=!1;"alpha"in this&&(b=!0);var g=!1;if("rectified_grid_angle"in this&&(g=!0),b&&(d=this.alpha),g&&(c=this.rectified_grid_angle*Ae),b||g)f=this.longc;else if(m=this.long1,y=this.lat1,_=this.long2,p=this.lat2,Math.abs(y-p)<=Zi||(n=Math.abs(y))<=Zi||Math.abs(n-tt)<=Zi||Math.abs(Math.abs(this.lat0)-tt)<=Zi||Math.abs(Math.abs(p)-tt)<=Zi)throw new Error;var v=1-this.es;t=Math.sqrt(v),Math.abs(this.lat0)>ct?(a=Math.sin(this.lat0),e=Math.cos(this.lat0),n=1-this.es*a*a,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/v),this.A=this.B*this.k0*t/n,i=this.B*t/(e*Math.sqrt(n)),r=i*i-1,r<=0?r=0:(r=Math.sqrt(r),this.lat0<0&&(r=-r)),this.E=r+=i,this.E*=Math.pow(xn(this.e,this.lat0,a),this.B)):(this.B=1/t,this.A=this.k0,this.E=i=r=1),b||g?(b?(u=Math.asin(Math.sin(d)/i),g||(c=d)):(u=c,d=Math.asin(i*Math.sin(u))),this.lam0=f-Math.asin(.5*(r-1/r)*Math.tan(u))/this.B):(s=Math.pow(xn(this.e,y,Math.sin(y)),this.B),o=Math.pow(xn(this.e,p,Math.sin(p)),this.B),r=this.E/s,h=(o-s)/(o+s),l=this.E*this.E,l=(l-o*s)/(l+o*s),n=m-_,n<-Math.pi?_-=Xr:n>Math.pi&&(_+=Xr),this.lam0=gt(.5*(m+_)-Math.atan(l*Math.tan(.5*this.B*(m-_))/h)/this.B),u=Math.atan(2*Math.sin(this.B*gt(m-this.lam0))/(r-1/r)),c=d=Math.asin(i*Math.sin(u))),this.singam=Math.sin(u),this.cosgam=Math.cos(u),this.sinrot=Math.sin(c),this.cosrot=Math.cos(c),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(i*i-1)/Math.cos(d))),this.lat0<0&&(this.u_0=-this.u_0)),r=.5*u,this.v_pole_n=this.ArB*Math.log(Math.tan(Jt-r)),this.v_pole_s=this.ArB*Math.log(Math.tan(Jt+r))}function Ky(n){var t={},e,i,r,s,o,a,h,l;if(n.x=n.x-this.lam0,Math.abs(Math.abs(n.y)-tt)>ct){if(o=this.E/Math.pow(xn(this.e,n.y,Math.sin(n.y)),this.B),a=1/o,e=.5*(o-a),i=.5*(o+a),s=Math.sin(this.B*n.x),r=(e*this.singam-s*this.cosgam)/i,Math.abs(Math.abs(r)-1)<ct)throw new Error;l=.5*this.ArB*Math.log((1-r)/(1+r)),a=Math.cos(this.B*n.x),Math.abs(a)<Zi?h=this.A*n.x:h=this.ArB*Math.atan2(e*this.cosgam+s*this.singam,a)}else l=n.y>0?this.v_pole_n:this.v_pole_s,h=this.ArB*n.y;return this.no_rot?(t.x=h,t.y=l):(h-=this.u_0,t.x=l*this.cosrot+h*this.sinrot,t.y=h*this.cosrot-l*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function Zy(n){var t,e,i,r,s,o,a,h={};if(n.x=(n.x-this.x0)*(1/this.a),n.y=(n.y-this.y0)*(1/this.a),this.no_rot?(e=n.y,t=n.x):(e=n.x*this.cosrot-n.y*this.sinrot,t=n.y*this.cosrot+n.x*this.sinrot+this.u_0),i=Math.exp(-this.BrA*e),r=.5*(i-1/i),s=.5*(i+1/i),o=Math.sin(this.BrA*t),a=(o*this.cosgam+r*this.singam)/s,Math.abs(Math.abs(a)-1)<ct)h.x=0,h.y=a<0?-tt:tt;else{if(h.y=this.E/Math.sqrt((1+a)/(1-a)),h.y=jr(this.e,Math.pow(h.y,1/this.B)),h.y===1/0)throw new Error;h.x=-this.rB*Math.atan2(r*this.cosgam-o*this.singam,Math.cos(this.BrA*t))}return h.x+=this.lam0,h}var Jy=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const Qy={init:Yy,forward:Ky,inverse:Zy,names:Jy};function tM(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<ct)){var n=this.b/this.a;this.e=Math.sqrt(1-n*n);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),i=Cn(this.e,t,e),r=xn(this.e,this.lat1,t),s=Math.sin(this.lat2),o=Math.cos(this.lat2),a=Cn(this.e,s,o),h=xn(this.e,this.lat2,s),l=xn(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>ct?this.ns=Math.log(i/a)/Math.log(r/h):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=i/(this.ns*Math.pow(r,this.ns)),this.rh=this.a*this.f0*Math.pow(l,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function eM(n){var t=n.x,e=n.y;Math.abs(2*Math.abs(e)-Math.PI)<=ct&&(e=Qr(e)*(tt-2*ct));var i=Math.abs(Math.abs(e)-tt),r,s;if(i>ct)r=xn(this.e,e,Math.sin(e)),s=this.a*this.f0*Math.pow(r,this.ns);else{if(i=e*this.ns,i<=0)return null;s=0}var o=this.ns*gt(t-this.long0);return n.x=this.k0*(s*Math.sin(o))+this.x0,n.y=this.k0*(this.rh-s*Math.cos(o))+this.y0,n}function nM(n){var t,e,i,r,s,o=(n.x-this.x0)/this.k0,a=this.rh-(n.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(o*o+a*a),e=1):(t=-Math.sqrt(o*o+a*a),e=-1);var h=0;if(t!==0&&(h=Math.atan2(e*o,e*a)),t!==0||this.ns>0){if(e=1/this.ns,i=Math.pow(t/(this.a*this.f0),e),r=jr(this.e,i),r===-9999)return null}else r=-tt;return s=gt(h/this.ns+this.long0),n.x=s,n.y=r,n}var iM=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const rM={init:tM,forward:eM,inverse:nM,names:iM};function sM(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function aM(n){var t,e,i,r,s,o,a,h=n.x,l=n.y,c=gt(h-this.long0);return t=Math.pow((1+this.e*Math.sin(l))/(1-this.e*Math.sin(l)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(l/2+this.s45),this.alfa)/t)-this.s45),i=-c*this.alfa,r=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(i)),s=Math.asin(Math.cos(e)*Math.sin(i)/Math.cos(r)),o=this.n*s,a=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(r/2+this.s45),this.n),n.y=a*Math.cos(o)/1,n.x=a*Math.sin(o)/1,this.czech||(n.y*=-1,n.x*=-1),n}function oM(n){var t,e,i,r,s,o,a,h,l=n.x;n.x=n.y,n.y=l,this.czech||(n.y*=-1,n.x*=-1),o=Math.sqrt(n.x*n.x+n.y*n.y),s=Math.atan2(n.y,n.x),r=s/Math.sin(this.s0),i=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(i)-Math.sin(this.ad)*Math.cos(i)*Math.cos(r)),e=Math.asin(Math.cos(i)*Math.sin(r)/Math.cos(t)),n.x=this.long0-e/this.alfa,a=t,h=0;var c=0;do n.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(a))/(1-this.e*Math.sin(a)),this.e/2))-this.s45),Math.abs(a-n.y)<1e-10&&(h=1),a=n.y,c+=1;while(h===0&&c<15);return c>=15?null:n}var hM=["Krovak","krovak"];const lM={init:sM,forward:aM,inverse:oM,names:hM};function He(n,t,e,i,r){return n*r-t*Math.sin(2*r)+e*Math.sin(4*r)-i*Math.sin(6*r)}function ts(n){return 1-.25*n*(1+n/16*(3+1.25*n))}function es(n){return .375*n*(1+.25*n*(1+.46875*n))}function ns(n){return .05859375*n*n*(1+.75*n)}function is(n){return n*n*n*(35/3072)}function dr(n,t,e){var i=t*e;return n/Math.sqrt(1-i*i)}function gr(n){return Math.abs(n)<tt?n:n-Qr(n)*Math.PI}function ea(n,t,e,i,r){var s,o;s=n/t;for(var a=0;a<15;a++)if(o=(n-(t*s-e*Math.sin(2*s)+i*Math.sin(4*s)-r*Math.sin(6*s)))/(t-2*e*Math.cos(2*s)+4*i*Math.cos(4*s)-6*r*Math.cos(6*s)),s+=o,Math.abs(o)<=1e-10)return s;return NaN}function cM(){this.sphere||(this.e0=ts(this.es),this.e1=es(this.es),this.e2=ns(this.es),this.e3=is(this.es),this.ml0=this.a*He(this.e0,this.e1,this.e2,this.e3,this.lat0))}function uM(n){var t,e,i=n.x,r=n.y;if(i=gt(i-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(r)*Math.sin(i)),e=this.a*(Math.atan2(Math.tan(r),Math.cos(i))-this.lat0);else{var s=Math.sin(r),o=Math.cos(r),a=dr(this.a,this.e,s),h=Math.tan(r)*Math.tan(r),l=i*Math.cos(r),c=l*l,u=this.es*o*o/(1-this.es),f=this.a*He(this.e0,this.e1,this.e2,this.e3,r);t=a*l*(1-c*h*(1/6-(8-h+8*u)*c/120)),e=f-this.ml0+a*s/o*c*(.5+(5-h+6*u)*c/24)}return n.x=t+this.x0,n.y=e+this.y0,n}function fM(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,r;if(this.sphere){var s=e+this.lat0;i=Math.asin(Math.sin(s)*Math.cos(t)),r=Math.atan2(Math.tan(t),Math.cos(s))}else{var o=this.ml0/this.a+e,a=ea(o,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(a)-tt)<=ct)return n.x=this.long0,n.y=tt,e<0&&(n.y*=-1),n;var h=dr(this.a,this.e,Math.sin(a)),l=h*h*h/this.a/this.a*(1-this.es),c=Math.pow(Math.tan(a),2),u=t*this.a/h,f=u*u;i=a-h*Math.tan(a)/l*u*u*(.5-(1+3*c)*u*u/24),r=u*(1-f*(c/3+(1+3*c)*c*f/15))/Math.cos(a)}return n.x=gt(r+this.long0),n.y=gr(i),n}var dM=["Cassini","Cassini_Soldner","cass"];const pM={init:cM,forward:uM,inverse:fM,names:dM};function hi(n,t){var e;return n>1e-7?(e=n*t,(1-n*n)*(t/(1-e*e)-.5/n*Math.log((1-e)/(1+e)))):2*t}var mM=1,gM=2,_M=3,vM=4;function yM(){var n=Math.abs(this.lat0);if(Math.abs(n-tt)<ct?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(n)<ct?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var t;switch(this.qp=hi(this.e,1),this.mmf=.5/(1-this.es),this.apa=RM(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=hi(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function MM(n){var t,e,i,r,s,o,a,h,l,c,u=n.x,f=n.y;if(u=gt(u-this.long0),this.sphere){if(s=Math.sin(f),c=Math.cos(f),i=Math.cos(u),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+c*i:1+this.sinph0*s+this.cosph0*c*i,e<=ct)return null;e=Math.sqrt(2/e),t=e*c*Math.sin(u),e*=this.mode===this.EQUIT?s:this.cosph0*s-this.sinph0*c*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(f+this.lat0)<ct)return null;e=Jt-f*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(u),e*=i}}else{switch(a=0,h=0,l=0,i=Math.cos(u),r=Math.sin(u),s=Math.sin(f),o=hi(this.e,s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(a=o/this.qp,h=Math.sqrt(1-a*a)),this.mode){case this.OBLIQ:l=1+this.sinb1*a+this.cosb1*h*i;break;case this.EQUIT:l=1+h*i;break;case this.N_POLE:l=tt+f,o=this.qp-o;break;case this.S_POLE:l=f-tt,o=this.qp+o;break}if(Math.abs(l)<ct)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:l=Math.sqrt(2/l),this.mode===this.OBLIQ?e=this.ymf*l*(this.cosb1*a-this.sinb1*h*i):e=(l=Math.sqrt(2/(1+h*i)))*a*this.ymf,t=this.xmf*l*h*r;break;case this.N_POLE:case this.S_POLE:o>=0?(t=(l=Math.sqrt(o))*r,e=i*(this.mode===this.S_POLE?l:-l)):t=e=0;break}}return n.x=this.a*t+this.x0,n.y=this.a*e+this.y0,n}function xM(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,r,s,o,a,h,l;if(this.sphere){var c=0,u,f=0;if(u=Math.sqrt(t*t+e*e),r=u*.5,r>1)return null;switch(r=2*Math.asin(r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(f=Math.sin(r),c=Math.cos(r)),this.mode){case this.EQUIT:r=Math.abs(u)<=ct?0:Math.asin(e*f/u),t*=f,e=c*u;break;case this.OBLIQ:r=Math.abs(u)<=ct?this.lat0:Math.asin(c*this.sinph0+e*f*this.cosph0/u),t*=f*this.cosph0,e=(c-Math.sin(r)*this.sinph0)*u;break;case this.N_POLE:e=-e,r=tt-r;break;case this.S_POLE:r-=tt;break}i=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(l=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,h=Math.sqrt(t*t+e*e),h<ct)return n.x=this.long0,n.y=this.lat0,n;o=2*Math.asin(.5*h/this.rq),s=Math.cos(o),t*=o=Math.sin(o),this.mode===this.OBLIQ?(l=s*this.sinb1+e*o*this.cosb1/h,a=this.qp*l,e=h*this.cosb1*s-e*this.sinb1*o):(l=e*o/h,a=this.qp*l,e=h*s)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),a=t*t+e*e,!a)return n.x=this.long0,n.y=this.lat0,n;l=1-a/this.qp,this.mode===this.S_POLE&&(l=-l)}i=Math.atan2(t,e),r=CM(Math.asin(l),this.apa)}return n.x=gt(this.long0+i),n.y=r,n}var EM=.3333333333333333,SM=.17222222222222222,bM=.10257936507936508,wM=.06388888888888888,TM=.0664021164021164,AM=.016415012942191543;function RM(n){var t,e=[];return e[0]=n*EM,t=n*n,e[0]+=t*SM,e[1]=t*wM,t*=n,e[0]+=t*bM,e[1]+=t*TM,e[2]=t*AM,e}function CM(n,t){var e=n+n;return n+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var LM=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const PM={init:yM,forward:MM,inverse:xM,names:LM,S_POLE:mM,N_POLE:gM,EQUIT:_M,OBLIQ:vM};function ci(n){return Math.abs(n)>1&&(n=n>1?1:-1),Math.asin(n)}function DM(){Math.abs(this.lat1+this.lat2)<ct||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=Cn(this.e3,this.sin_po,this.cos_po),this.qs1=hi(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=Cn(this.e3,this.sin_po,this.cos_po),this.qs2=hi(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=hi(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>ct?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function NM(n){var t=n.x,e=n.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var i=hi(this.e3,this.sin_phi),r=this.a*Math.sqrt(this.c-this.ns0*i)/this.ns0,s=this.ns0*gt(t-this.long0),o=r*Math.sin(s)+this.x0,a=this.rh-r*Math.cos(s)+this.y0;return n.x=o,n.y=a,n}function IM(n){var t,e,i,r,s,o;return n.x-=this.x0,n.y=this.rh-n.y+this.y0,this.ns0>=0?(t=Math.sqrt(n.x*n.x+n.y*n.y),i=1):(t=-Math.sqrt(n.x*n.x+n.y*n.y),i=-1),r=0,t!==0&&(r=Math.atan2(i*n.x,i*n.y)),i=t*this.ns0/this.a,this.sphere?o=Math.asin((this.c-i*i)/(2*this.ns0)):(e=(this.c-i*i)/this.ns0,o=this.phi1z(this.e3,e)),s=gt(r/this.ns0+this.long0),n.x=s,n.y=o,n}function UM(n,t){var e,i,r,s,o,a=ci(.5*t);if(n<ct)return a;for(var h=n*n,l=1;l<=25;l++)if(e=Math.sin(a),i=Math.cos(a),r=n*e,s=1-r*r,o=.5*s*s/i*(t/(1-h)-e/s+.5/n*Math.log((1-r)/(1+r))),a=a+o,Math.abs(o)<=1e-7)return a;return null}var OM=["Albers_Conic_Equal_Area","Albers","aea"];const FM={init:DM,forward:NM,inverse:IM,names:OM,phi1z:UM};function GM(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function BM(n){var t,e,i,r,s,o,a,h,l=n.x,c=n.y;return i=gt(l-this.long0),t=Math.sin(c),e=Math.cos(c),r=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*r,s=1,o>0||Math.abs(o)<=ct?(a=this.x0+this.a*s*e*Math.sin(i)/o,h=this.y0+this.a*s*(this.cos_p14*t-this.sin_p14*e*r)/o):(a=this.x0+this.infinity_dist*e*Math.sin(i),h=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*r)),n.x=a,n.y=h,n}function zM(n){var t,e,i,r,s,o;return n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,(t=Math.sqrt(n.x*n.x+n.y*n.y))?(r=Math.atan2(t,this.rc),e=Math.sin(r),i=Math.cos(r),o=ci(i*this.sin_p14+n.y*e*this.cos_p14/t),s=Math.atan2(n.x*e,t*this.cos_p14*i-n.y*this.sin_p14*e),s=gt(this.long0+s)):(o=this.phic0,s=0),n.x=s,n.y=o,n}var kM=["gnom"];const HM={init:GM,forward:BM,inverse:zM,names:kM};function VM(n,t){var e=1-(1-n*n)/(2*n)*Math.log((1-n)/(1+n));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*tt:tt;for(var i=Math.asin(.5*t),r,s,o,a,h=0;h<30;h++)if(s=Math.sin(i),o=Math.cos(i),a=n*s,r=Math.pow(1-a*a,2)/(2*o)*(t/(1-n*n)-s/(1-a*a)+.5/n*Math.log((1-a)/(1+a))),i+=r,Math.abs(r)<=1e-10)return i;return NaN}function WM(){this.sphere||(this.k0=Cn(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function $M(n){var t=n.x,e=n.y,i,r,s=gt(t-this.long0);if(this.sphere)i=this.x0+this.a*s*Math.cos(this.lat_ts),r=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var o=hi(this.e,Math.sin(e));i=this.x0+this.a*this.k0*s,r=this.y0+this.a*o*.5/this.k0}return n.x=i,n.y=r,n}function XM(n){n.x-=this.x0,n.y-=this.y0;var t,e;return this.sphere?(t=gt(this.long0+n.x/this.a/Math.cos(this.lat_ts)),e=Math.asin(n.y/this.a*Math.cos(this.lat_ts))):(e=VM(this.e,2*n.y*this.k0/this.a),t=gt(this.long0+n.x/(this.a*this.k0))),n.x=t,n.y=e,n}var qM=["cea"];const jM={init:WM,forward:$M,inverse:XM,names:qM};function YM(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function KM(n){var t=n.x,e=n.y,i=gt(t-this.long0),r=gr(e-this.lat0);return n.x=this.x0+this.a*i*this.rc,n.y=this.y0+this.a*r,n}function ZM(n){var t=n.x,e=n.y;return n.x=gt(this.long0+(t-this.x0)/(this.a*this.rc)),n.y=gr(this.lat0+(e-this.y0)/this.a),n}var JM=["Equirectangular","Equidistant_Cylindrical","eqc"];const QM={init:YM,forward:KM,inverse:ZM,names:JM};var ac=20;function tx(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=ts(this.es),this.e1=es(this.es),this.e2=ns(this.es),this.e3=is(this.es),this.ml0=this.a*He(this.e0,this.e1,this.e2,this.e3,this.lat0)}function ex(n){var t=n.x,e=n.y,i,r,s,o=gt(t-this.long0);if(s=o*Math.sin(e),this.sphere)Math.abs(e)<=ct?(i=this.a*o,r=-1*this.a*this.lat0):(i=this.a*Math.sin(s)/Math.tan(e),r=this.a*(gr(e-this.lat0)+(1-Math.cos(s))/Math.tan(e)));else if(Math.abs(e)<=ct)i=this.a*o,r=-1*this.ml0;else{var a=dr(this.a,this.e,Math.sin(e))/Math.tan(e);i=a*Math.sin(s),r=this.a*He(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+a*(1-Math.cos(s))}return n.x=i+this.x0,n.y=r+this.y0,n}function nx(n){var t,e,i,r,s,o,a,h,l;if(i=n.x-this.x0,r=n.y-this.y0,this.sphere)if(Math.abs(r+this.a*this.lat0)<=ct)t=gt(i/this.a+this.long0),e=0;else{o=this.lat0+r/this.a,a=i*i/this.a/this.a+o*o,h=o;var c;for(s=ac;s;--s)if(c=Math.tan(h),l=-1*(o*(h*c+1)-h-.5*(h*h+a)*c)/((h-o)/c-1),h+=l,Math.abs(l)<=ct){e=h;break}t=gt(this.long0+Math.asin(i*Math.tan(h)/this.a)/Math.sin(e))}else if(Math.abs(r+this.ml0)<=ct)e=0,t=gt(this.long0+i/this.a);else{o=(this.ml0+r)/this.a,a=i*i/this.a/this.a+o*o,h=o;var u,f,m,_,y;for(s=ac;s;--s)if(y=this.e*Math.sin(h),u=Math.sqrt(1-y*y)*Math.tan(h),f=this.a*He(this.e0,this.e1,this.e2,this.e3,h),m=this.e0-2*this.e1*Math.cos(2*h)+4*this.e2*Math.cos(4*h)-6*this.e3*Math.cos(6*h),_=f/this.a,l=(o*(u*_+1)-_-.5*u*(_*_+a))/(this.es*Math.sin(2*h)*(_*_+a-2*o*_)/(4*u)+(o-_)*(u*m-2/Math.sin(2*h))-m),h-=l,Math.abs(l)<=ct){e=h;break}u=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=gt(this.long0+Math.asin(i*u/this.a)/Math.sin(e))}return n.x=t,n.y=e,n}var ix=["Polyconic","poly"];const rx={init:tx,forward:ex,inverse:nx,names:ix};function sx(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function ax(n){var t,e=n.x,i=n.y,r=i-this.lat0,s=e-this.long0,o=r/zr*1e-5,a=s,h=1,l=0;for(t=1;t<=10;t++)h=h*o,l=l+this.A[t]*h;var c=l,u=a,f=1,m=0,_,y,p=0,d=0;for(t=1;t<=6;t++)_=f*c-m*u,y=m*c+f*u,f=_,m=y,p=p+this.B_re[t]*f-this.B_im[t]*m,d=d+this.B_im[t]*f+this.B_re[t]*m;return n.x=d*this.a+this.x0,n.y=p*this.a+this.y0,n}function ox(n){var t,e=n.x,i=n.y,r=e-this.x0,s=i-this.y0,o=s/this.a,a=r/this.a,h=1,l=0,c,u,f=0,m=0;for(t=1;t<=6;t++)c=h*o-l*a,u=l*o+h*a,h=c,l=u,f=f+this.C_re[t]*h-this.C_im[t]*l,m=m+this.C_im[t]*h+this.C_re[t]*l;for(var _=0;_<this.iterations;_++){var y=f,p=m,d,b,g=o,v=a;for(t=2;t<=6;t++)d=y*f-p*m,b=p*f+y*m,y=d,p=b,g=g+(t-1)*(this.B_re[t]*y-this.B_im[t]*p),v=v+(t-1)*(this.B_im[t]*y+this.B_re[t]*p);y=1,p=0;var x=this.B_re[1],R=this.B_im[1];for(t=2;t<=6;t++)d=y*f-p*m,b=p*f+y*m,y=d,p=b,x=x+t*(this.B_re[t]*y-this.B_im[t]*p),R=R+t*(this.B_im[t]*y+this.B_re[t]*p);var T=x*x+R*R;f=(g*x+v*R)/T,m=(v*x-g*R)/T}var A=f,M=m,E=1,L=0;for(t=1;t<=9;t++)E=E*A,L=L+this.D[t]*E;var D=this.lat0+L*zr*1e5,j=this.long0+M;return n.x=j,n.y=D,n}var hx=["New_Zealand_Map_Grid","nzmg"];const lx={init:sx,forward:ax,inverse:ox,names:hx};function cx(){}function ux(n){var t=n.x,e=n.y,i=gt(t-this.long0),r=this.x0+this.a*i,s=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return n.x=r,n.y=s,n}function fx(n){n.x-=this.x0,n.y-=this.y0;var t=gt(this.long0+n.x/this.a),e=2.5*(Math.atan(Math.exp(.8*n.y/this.a))-Math.PI/4);return n.x=t,n.y=e,n}var dx=["Miller_Cylindrical","mill"];const px={init:cx,forward:ux,inverse:fx,names:dx};var mx=20;function gx(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=cu(this.es)}function _x(n){var t,e,i=n.x,r=n.y;if(i=gt(i-this.long0),this.sphere){if(!this.m)r=this.n!==1?Math.asin(this.n*Math.sin(r)):r;else for(var s=this.n*Math.sin(r),o=mx;o;--o){var a=(this.m*r+Math.sin(r)-s)/(this.m+Math.cos(r));if(r-=a,Math.abs(a)<ct)break}t=this.a*this.C_x*i*(this.m+Math.cos(r)),e=this.a*this.C_y*r}else{var h=Math.sin(r),l=Math.cos(r);e=this.a*da(r,h,l,this.en),t=this.a*i*l/Math.sqrt(1-this.es*h*h)}return n.x=t,n.y=e,n}function vx(n){var t,e,i,r;return n.x-=this.x0,i=n.x/this.a,n.y-=this.y0,t=n.y/this.a,this.sphere?(t/=this.C_y,i=i/(this.C_x*(this.m+Math.cos(t))),this.m?t=ci((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=ci(Math.sin(t)/this.n)),i=gt(i+this.long0),t=gr(t)):(t=uu(n.y/this.a,this.es,this.en),r=Math.abs(t),r<tt?(r=Math.sin(t),e=this.long0+n.x*Math.sqrt(1-this.es*r*r)/(this.a*Math.cos(t)),i=gt(e)):r-ct<tt&&(i=this.long0)),n.x=i,n.y=t,n}var yx=["Sinusoidal","sinu"];const Mx={init:gx,forward:_x,inverse:vx,names:yx};function xx(){}function Ex(n){for(var t=n.x,e=n.y,i=gt(t-this.long0),r=e,s=Math.PI*Math.sin(e);;){var o=-(r+Math.sin(r)-s)/(1+Math.cos(r));if(r+=o,Math.abs(o)<ct)break}r/=2,Math.PI/2-Math.abs(e)<ct&&(i=0);var a=.900316316158*this.a*i*Math.cos(r)+this.x0,h=1.4142135623731*this.a*Math.sin(r)+this.y0;return n.x=a,n.y=h,n}function Sx(n){var t,e;n.x-=this.x0,n.y-=this.y0,e=n.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var i=gt(this.long0+n.x/(.900316316158*this.a*Math.cos(t)));i<-Math.PI&&(i=-Math.PI),i>Math.PI&&(i=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var r=Math.asin(e);return n.x=i,n.y=r,n}var bx=["Mollweide","moll"];const wx={init:xx,forward:Ex,inverse:Sx,names:bx};function Tx(){Math.abs(this.lat1+this.lat2)<ct||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=ts(this.es),this.e1=es(this.es),this.e2=ns(this.es),this.e3=is(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=Cn(this.e,this.sinphi,this.cosphi),this.ml1=He(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<ct?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=Cn(this.e,this.sinphi,this.cosphi),this.ml2=He(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=He(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function Ax(n){var t=n.x,e=n.y,i;if(this.sphere)i=this.a*(this.g-e);else{var r=He(this.e0,this.e1,this.e2,this.e3,e);i=this.a*(this.g-r)}var s=this.ns*gt(t-this.long0),o=this.x0+i*Math.sin(s),a=this.y0+this.rh-i*Math.cos(s);return n.x=o,n.y=a,n}function Rx(n){n.x-=this.x0,n.y=this.rh-n.y+this.y0;var t,e,i,r;this.ns>=0?(e=Math.sqrt(n.x*n.x+n.y*n.y),t=1):(e=-Math.sqrt(n.x*n.x+n.y*n.y),t=-1);var s=0;if(e!==0&&(s=Math.atan2(t*n.x,t*n.y)),this.sphere)return r=gt(this.long0+s/this.ns),i=gr(this.g-e/this.a),n.x=r,n.y=i,n;var o=this.g-e/this.a;return i=ea(o,this.e0,this.e1,this.e2,this.e3),r=gt(this.long0+s/this.ns),n.x=r,n.y=i,n}var Cx=["Equidistant_Conic","eqdc"];const Lx={init:Tx,forward:Ax,inverse:Rx,names:Cx};function Px(){this.R=this.a}function Dx(n){var t=n.x,e=n.y,i=gt(t-this.long0),r,s;Math.abs(e)<=ct&&(r=this.x0+this.R*i,s=this.y0);var o=ci(2*Math.abs(e/Math.PI));(Math.abs(i)<=ct||Math.abs(Math.abs(e)-tt)<=ct)&&(r=this.x0,e>=0?s=this.y0+Math.PI*this.R*Math.tan(.5*o):s=this.y0+Math.PI*this.R*-Math.tan(.5*o));var a=.5*Math.abs(Math.PI/i-i/Math.PI),h=a*a,l=Math.sin(o),c=Math.cos(o),u=c/(l+c-1),f=u*u,m=u*(2/l-1),_=m*m,y=Math.PI*this.R*(a*(u-_)+Math.sqrt(h*(u-_)*(u-_)-(_+h)*(f-_)))/(_+h);i<0&&(y=-y),r=this.x0+y;var p=h+u;return y=Math.PI*this.R*(m*p-a*Math.sqrt((_+h)*(h+1)-p*p))/(_+h),e>=0?s=this.y0+y:s=this.y0-y,n.x=r,n.y=s,n}function Nx(n){var t,e,i,r,s,o,a,h,l,c,u,f,m;return n.x-=this.x0,n.y-=this.y0,u=Math.PI*this.R,i=n.x/u,r=n.y/u,s=i*i+r*r,o=-Math.abs(r)*(1+s),a=o-2*r*r+i*i,h=-2*o+1+2*r*r+s*s,m=r*r/h+(2*a*a*a/h/h/h-9*o*a/h/h)/27,l=(o-a*a/3/h)/h,c=2*Math.sqrt(-l/3),u=3*m/l/c,Math.abs(u)>1&&(u>=0?u=1:u=-1),f=Math.acos(u)/3,n.y>=0?e=(-c*Math.cos(f+Math.PI/3)-a/3/h)*Math.PI:e=-(-c*Math.cos(f+Math.PI/3)-a/3/h)*Math.PI,Math.abs(i)<ct?t=this.long0:t=gt(this.long0+Math.PI*(s-1+Math.sqrt(1+2*(i*i-r*r)+s*s))/2/i),n.x=t,n.y=e,n}var Ix=["Van_der_Grinten_I","VanDerGrinten","vandg"];const Ux={init:Px,forward:Dx,inverse:Nx,names:Ix};function Ox(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function Fx(n){var t=n.x,e=n.y,i=Math.sin(n.y),r=Math.cos(n.y),s=gt(t-this.long0),o,a,h,l,c,u,f,m,_,y,p,d,b,g,v,x,R,T,A,M,E,L,D;return this.sphere?Math.abs(this.sin_p12-1)<=ct?(n.x=this.x0+this.a*(tt-e)*Math.sin(s),n.y=this.y0-this.a*(tt-e)*Math.cos(s),n):Math.abs(this.sin_p12+1)<=ct?(n.x=this.x0+this.a*(tt+e)*Math.sin(s),n.y=this.y0+this.a*(tt+e)*Math.cos(s),n):(T=this.sin_p12*i+this.cos_p12*r*Math.cos(s),x=Math.acos(T),R=x?x/Math.sin(x):1,n.x=this.x0+this.a*R*r*Math.sin(s),n.y=this.y0+this.a*R*(this.cos_p12*i-this.sin_p12*r*Math.cos(s)),n):(o=ts(this.es),a=es(this.es),h=ns(this.es),l=is(this.es),Math.abs(this.sin_p12-1)<=ct?(c=this.a*He(o,a,h,l,tt),u=this.a*He(o,a,h,l,e),n.x=this.x0+(c-u)*Math.sin(s),n.y=this.y0-(c-u)*Math.cos(s),n):Math.abs(this.sin_p12+1)<=ct?(c=this.a*He(o,a,h,l,tt),u=this.a*He(o,a,h,l,e),n.x=this.x0+(c+u)*Math.sin(s),n.y=this.y0+(c+u)*Math.cos(s),n):(f=i/r,m=dr(this.a,this.e,this.sin_p12),_=dr(this.a,this.e,i),y=Math.atan((1-this.es)*f+this.es*m*this.sin_p12/(_*r)),p=Math.atan2(Math.sin(s),this.cos_p12*Math.tan(y)-this.sin_p12*Math.cos(s)),p===0?A=Math.asin(this.cos_p12*Math.sin(y)-this.sin_p12*Math.cos(y)):Math.abs(Math.abs(p)-Math.PI)<=ct?A=-Math.asin(this.cos_p12*Math.sin(y)-this.sin_p12*Math.cos(y)):A=Math.asin(Math.sin(s)*Math.cos(y)/Math.sin(p)),d=this.e*this.sin_p12/Math.sqrt(1-this.es),b=this.e*this.cos_p12*Math.cos(p)/Math.sqrt(1-this.es),g=d*b,v=b*b,M=A*A,E=M*A,L=E*A,D=L*A,x=m*A*(1-M*v*(1-v)/6+E/8*g*(1-2*v)+L/120*(v*(4-7*v)-3*d*d*(1-7*v))-D/48*g),n.x=this.x0+x*Math.sin(p),n.y=this.y0+x*Math.cos(p),n))}function Gx(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,r,s,o,a,h,l,c,u,f,m,_,y,p,d,b,g,v,x,R,T,A;return this.sphere?(t=Math.sqrt(n.x*n.x+n.y*n.y),t>2*tt*this.a?void 0:(e=t/this.a,i=Math.sin(e),r=Math.cos(e),s=this.long0,Math.abs(t)<=ct?o=this.lat0:(o=ci(r*this.sin_p12+n.y*i*this.cos_p12/t),a=Math.abs(this.lat0)-tt,Math.abs(a)<=ct?this.lat0>=0?s=gt(this.long0+Math.atan2(n.x,-n.y)):s=gt(this.long0-Math.atan2(-n.x,n.y)):s=gt(this.long0+Math.atan2(n.x*i,t*this.cos_p12*r-n.y*this.sin_p12*i))),n.x=s,n.y=o,n)):(h=ts(this.es),l=es(this.es),c=ns(this.es),u=is(this.es),Math.abs(this.sin_p12-1)<=ct?(f=this.a*He(h,l,c,u,tt),t=Math.sqrt(n.x*n.x+n.y*n.y),m=f-t,o=ea(m/this.a,h,l,c,u),s=gt(this.long0+Math.atan2(n.x,-1*n.y)),n.x=s,n.y=o,n):Math.abs(this.sin_p12+1)<=ct?(f=this.a*He(h,l,c,u,tt),t=Math.sqrt(n.x*n.x+n.y*n.y),m=t-f,o=ea(m/this.a,h,l,c,u),s=gt(this.long0+Math.atan2(n.x,n.y)),n.x=s,n.y=o,n):(t=Math.sqrt(n.x*n.x+n.y*n.y),p=Math.atan2(n.x,n.y),_=dr(this.a,this.e,this.sin_p12),d=Math.cos(p),b=this.e*this.cos_p12*d,g=-b*b/(1-this.es),v=3*this.es*(1-g)*this.sin_p12*this.cos_p12*d/(1-this.es),x=t/_,R=x-g*(1+g)*Math.pow(x,3)/6-v*(1+3*g)*Math.pow(x,4)/24,T=1-g*R*R/2-x*R*R*R/6,y=Math.asin(this.sin_p12*Math.cos(R)+this.cos_p12*Math.sin(R)*d),s=gt(this.long0+Math.asin(Math.sin(p)*Math.sin(R)/Math.cos(y))),A=Math.sin(y),o=Math.atan2((A-this.es*T*this.sin_p12)*Math.tan(y),A*(1-this.es)),n.x=s,n.y=o,n))}var Bx=["Azimuthal_Equidistant","aeqd"];const zx={init:Ox,forward:Fx,inverse:Gx,names:Bx};function kx(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function Hx(n){var t,e,i,r,s,o,a,h,l=n.x,c=n.y;return i=gt(l-this.long0),t=Math.sin(c),e=Math.cos(c),r=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*r,s=1,(o>0||Math.abs(o)<=ct)&&(a=this.a*s*e*Math.sin(i),h=this.y0+this.a*s*(this.cos_p14*t-this.sin_p14*e*r)),n.x=a,n.y=h,n}function Vx(n){var t,e,i,r,s,o,a;return n.x-=this.x0,n.y-=this.y0,t=Math.sqrt(n.x*n.x+n.y*n.y),e=ci(t/this.a),i=Math.sin(e),r=Math.cos(e),o=this.long0,Math.abs(t)<=ct?(a=this.lat0,n.x=o,n.y=a,n):(a=ci(r*this.sin_p14+n.y*i*this.cos_p14/t),s=Math.abs(this.lat0)-tt,Math.abs(s)<=ct?(this.lat0>=0?o=gt(this.long0+Math.atan2(n.x,-n.y)):o=gt(this.long0-Math.atan2(-n.x,n.y)),n.x=o,n.y=a,n):(o=gt(this.long0+Math.atan2(n.x*i,t*this.cos_p14*r-n.y*this.sin_p14*i)),n.x=o,n.y=a,n))}var Wx=["ortho"];const $x={init:kx,forward:Hx,inverse:Vx,names:Wx};var le={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},Qt={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function Xx(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=tt-Jt/2?this.face=le.TOP:this.lat0<=-(tt-Jt/2)?this.face=le.BOTTOM:Math.abs(this.long0)<=Jt?this.face=le.FRONT:Math.abs(this.long0)<=tt+Jt?this.face=this.long0>0?le.RIGHT:le.LEFT:this.face=le.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function qx(n){var t={x:0,y:0},e,i,r,s,o,a,h={value:0};if(n.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(n.y)):e=n.y,i=n.x,this.face===le.TOP)s=tt-e,i>=Jt&&i<=tt+Jt?(h.value=Qt.AREA_0,r=i-tt):i>tt+Jt||i<=-(tt+Jt)?(h.value=Qt.AREA_1,r=i>0?i-fe:i+fe):i>-(tt+Jt)&&i<=-Jt?(h.value=Qt.AREA_2,r=i+tt):(h.value=Qt.AREA_3,r=i);else if(this.face===le.BOTTOM)s=tt+e,i>=Jt&&i<=tt+Jt?(h.value=Qt.AREA_0,r=-i+tt):i<Jt&&i>=-Jt?(h.value=Qt.AREA_1,r=-i):i<-Jt&&i>=-(tt+Jt)?(h.value=Qt.AREA_2,r=-i-tt):(h.value=Qt.AREA_3,r=i>0?-i+fe:-i-fe);else{var l,c,u,f,m,_,y;this.face===le.RIGHT?i=ar(i,+tt):this.face===le.BACK?i=ar(i,+fe):this.face===le.LEFT&&(i=ar(i,-tt)),f=Math.sin(e),m=Math.cos(e),_=Math.sin(i),y=Math.cos(i),l=m*y,c=m*_,u=f,this.face===le.FRONT?(s=Math.acos(l),r=Os(s,u,c,h)):this.face===le.RIGHT?(s=Math.acos(c),r=Os(s,u,-l,h)):this.face===le.BACK?(s=Math.acos(-l),r=Os(s,u,-c,h)):this.face===le.LEFT?(s=Math.acos(-c),r=Os(s,u,l,h)):(s=r=0,h.value=Qt.AREA_0)}return a=Math.atan(12/fe*(r+Math.acos(Math.sin(r)*Math.cos(Jt))-tt)),o=Math.sqrt((1-Math.cos(s))/(Math.cos(a)*Math.cos(a))/(1-Math.cos(Math.atan(1/Math.cos(r))))),h.value===Qt.AREA_1?a+=tt:h.value===Qt.AREA_2?a+=fe:h.value===Qt.AREA_3&&(a+=1.5*fe),t.x=o*Math.cos(a),t.y=o*Math.sin(a),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,n.x=t.x,n.y=t.y,n}function jx(n){var t={lam:0,phi:0},e,i,r,s,o,a,h,l,c,u={value:0};if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,i=Math.atan(Math.sqrt(n.x*n.x+n.y*n.y)),e=Math.atan2(n.y,n.x),n.x>=0&&n.x>=Math.abs(n.y)?u.value=Qt.AREA_0:n.y>=0&&n.y>=Math.abs(n.x)?(u.value=Qt.AREA_1,e-=tt):n.x<0&&-n.x>=Math.abs(n.y)?(u.value=Qt.AREA_2,e=e<0?e+fe:e-fe):(u.value=Qt.AREA_3,e+=tt),c=fe/12*Math.tan(e),o=Math.sin(c)/(Math.cos(c)-1/Math.sqrt(2)),a=Math.atan(o),r=Math.cos(e),s=Math.tan(i),h=1-r*r*s*s*(1-Math.cos(Math.atan(1/Math.cos(a)))),h<-1?h=-1:h>1&&(h=1),this.face===le.TOP)l=Math.acos(h),t.phi=tt-l,u.value===Qt.AREA_0?t.lam=a+tt:u.value===Qt.AREA_1?t.lam=a<0?a+fe:a-fe:u.value===Qt.AREA_2?t.lam=a-tt:t.lam=a;else if(this.face===le.BOTTOM)l=Math.acos(h),t.phi=l-tt,u.value===Qt.AREA_0?t.lam=-a+tt:u.value===Qt.AREA_1?t.lam=-a:u.value===Qt.AREA_2?t.lam=-a-tt:t.lam=a<0?-a-fe:-a+fe;else{var f,m,_;f=h,c=f*f,c>=1?_=0:_=Math.sqrt(1-c)*Math.sin(a),c+=_*_,c>=1?m=0:m=Math.sqrt(1-c),u.value===Qt.AREA_1?(c=m,m=-_,_=c):u.value===Qt.AREA_2?(m=-m,_=-_):u.value===Qt.AREA_3&&(c=m,m=_,_=-c),this.face===le.RIGHT?(c=f,f=-m,m=c):this.face===le.BACK?(f=-f,m=-m):this.face===le.LEFT&&(c=f,f=m,m=-c),t.phi=Math.acos(-_)-tt,t.lam=Math.atan2(m,f),this.face===le.RIGHT?t.lam=ar(t.lam,-tt):this.face===le.BACK?t.lam=ar(t.lam,-fe):this.face===le.LEFT&&(t.lam=ar(t.lam,+tt))}if(this.es!==0){var y,p,d;y=t.phi<0?1:0,p=Math.tan(t.phi),d=this.b/Math.sqrt(p*p+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-d*d)/(this.one_minus_f*d)),y&&(t.phi=-t.phi)}return t.lam+=this.long0,n.x=t.lam,n.y=t.phi,n}function Os(n,t,e,i){var r;return n<ct?(i.value=Qt.AREA_0,r=0):(r=Math.atan2(t,e),Math.abs(r)<=Jt?i.value=Qt.AREA_0:r>Jt&&r<=tt+Jt?(i.value=Qt.AREA_1,r-=tt):r>tt+Jt||r<=-(tt+Jt)?(i.value=Qt.AREA_2,r=r>=0?r-fe:r+fe):(i.value=Qt.AREA_3,r+=tt)),r}function ar(n,t){var e=n+t;return e<-fe?e+=Xr:e>+fe&&(e-=Xr),e}var Yx=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const Kx={init:Xx,forward:qx,inverse:jx,names:Yx};var Ro=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Or=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],pu=.8487,mu=1.3523,gu=An/5,Zx=1/gu,nr=18,na=function(n,t){return n[0]+t*(n[1]+t*(n[2]+t*n[3]))},Jx=function(n,t){return n[1]+t*(2*n[2]+t*3*n[3])};function Qx(n,t,e,i){for(var r=t;i;--i){var s=n(r);if(r-=s,Math.abs(s)<e)break}return r}function tE(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function eE(n){var t=gt(n.x-this.long0),e=Math.abs(n.y),i=Math.floor(e*gu);i<0?i=0:i>=nr&&(i=nr-1),e=An*(e-Zx*i);var r={x:na(Ro[i],e)*t,y:na(Or[i],e)};return n.y<0&&(r.y=-r.y),r.x=r.x*this.a*pu+this.x0,r.y=r.y*this.a*mu+this.y0,r}function nE(n){var t={x:(n.x-this.x0)/(this.a*pu),y:Math.abs(n.y-this.y0)/(this.a*mu)};if(t.y>=1)t.x/=Ro[nr][0],t.y=n.y<0?-tt:tt;else{var e=Math.floor(t.y*nr);for(e<0?e=0:e>=nr&&(e=nr-1);;)if(Or[e][0]>t.y)--e;else if(Or[e+1][0]<=t.y)++e;else break;var i=Or[e],r=5*(t.y-i[0])/(Or[e+1][0]-i[0]);r=Qx(function(s){return(na(i,s)-t.y)/Jx(i,s)},r,ct,100),t.x/=na(Ro[e],r),t.y=(5*e+r)*Ae,n.y<0&&(t.y=-t.y)}return t.x=gt(t.x+this.long0),t}var iE=["Robinson","robin"];const rE={init:tE,forward:eE,inverse:nE,names:iE};function sE(){this.name="geocent"}function aE(n){var t=eu(n,this.es,this.a);return t}function oE(n){var t=nu(n,this.es,this.a,this.b);return t}var hE=["Geocentric","geocentric","geocent","Geocent"];const lE={init:sE,forward:aE,inverse:oE,names:hE};var Ne={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},Ar={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function cE(){if(Object.keys(Ar).forEach((function(e){if(typeof this[e]>"u")this[e]=Ar[e].def;else{if(Ar[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);Ar[e].num&&(this[e]=parseFloat(this[e]))}Ar[e].degrees&&(this[e]=this[e]*Ae)}).bind(this)),Math.abs(Math.abs(this.lat0)-tt)<ct?this.mode=this.lat0<0?Ne.S_POLE:Ne.N_POLE:Math.abs(this.lat0)<ct?this.mode=Ne.EQUIT:(this.mode=Ne.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var n=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(n),this.sw=Math.sin(n)}function uE(n){n.x-=this.long0;var t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),r,s;switch(this.mode){case Ne.OBLIQ:s=this.sinph0*t+this.cosph0*e*i;break;case Ne.EQUIT:s=e*i;break;case Ne.S_POLE:s=-t;break;case Ne.N_POLE:s=t;break}switch(s=this.pn1/(this.p-s),r=s*e*Math.sin(n.x),this.mode){case Ne.OBLIQ:s*=this.cosph0*t-this.sinph0*e*i;break;case Ne.EQUIT:s*=t;break;case Ne.N_POLE:s*=-(e*i);break;case Ne.S_POLE:s*=e*i;break}var o,a;return o=s*this.cg+r*this.sg,a=1/(o*this.sw*this.h1+this.cw),r=(r*this.cg-s*this.sg)*this.cw*a,s=o*a,n.x=r*this.a,n.y=s*this.a,n}function fE(n){n.x/=this.a,n.y/=this.a;var t={x:n.x,y:n.y},e,i,r;r=1/(this.pn1-n.y*this.sw),e=this.pn1*n.x*r,i=this.pn1*n.y*this.cw*r,n.x=e*this.cg+i*this.sg,n.y=i*this.cg-e*this.sg;var s=yn(n.x,n.y);if(Math.abs(s)<ct)t.x=0,t.y=n.y;else{var o,a;switch(a=1-s*s*this.pfact,a=(this.p-Math.sqrt(a))/(this.pn1/s+s/this.pn1),o=Math.sqrt(1-a*a),this.mode){case Ne.OBLIQ:t.y=Math.asin(o*this.sinph0+n.y*a*this.cosph0/s),n.y=(o-this.sinph0*Math.sin(t.y))*s,n.x*=a*this.cosph0;break;case Ne.EQUIT:t.y=Math.asin(n.y*a/s),n.y=o*s,n.x*=a;break;case Ne.N_POLE:t.y=Math.asin(o),n.y=-n.y;break;case Ne.S_POLE:t.y=-Math.asin(o);break}t.x=Math.atan2(n.x,n.y)}return n.x=t.x+this.long0,n.y=t.y,n}var dE=["Tilted_Perspective","tpers"];const pE={init:cE,forward:uE,inverse:fE,names:dE};function mE(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var n=1-this.es,t=1/n;this.radius_p=Math.sqrt(n),this.radius_p2=n,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function gE(n){var t=n.x,e=n.y,i,r,s,o;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var a=this.radius_p/yn(this.radius_p*Math.cos(e),Math.sin(e));if(r=a*Math.cos(t)*Math.cos(e),s=a*Math.sin(t)*Math.cos(e),o=a*Math.sin(e),(this.radius_g-r)*r-s*s-o*o*this.radius_p_inv2<0)return n.x=Number.NaN,n.y=Number.NaN,n;i=this.radius_g-r,this.flip_axis?(n.x=this.radius_g_1*Math.atan(s/yn(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(s/i),n.y=this.radius_g_1*Math.atan(o/yn(s,i)))}else this.shape==="sphere"&&(i=Math.cos(e),r=Math.cos(t)*i,s=Math.sin(t)*i,o=Math.sin(e),i=this.radius_g-r,this.flip_axis?(n.x=this.radius_g_1*Math.atan(s/yn(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(s/i),n.y=this.radius_g_1*Math.atan(o/yn(s,i))));return n.x=n.x*this.a,n.y=n.y*this.a,n}function _E(n){var t=-1,e=0,i=0,r,s,o,a;if(n.x=n.x/this.a,n.y=n.y/this.a,this.shape==="ellipse"){this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*yn(1,i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*yn(1,e));var h=i/this.radius_p;if(r=e*e+h*h+t*t,s=2*this.radius_g*t,o=s*s-4*r*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-s-Math.sqrt(o))/(2*r),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t),n.y=Math.atan(this.radius_p_inv2*Math.tan(n.y))}else if(this.shape==="sphere"){if(this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*Math.sqrt(1+i*i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*Math.sqrt(1+e*e)),r=e*e+i*i+t*t,s=2*this.radius_g*t,o=s*s-4*r*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-s-Math.sqrt(o))/(2*r),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t)}return n.x=n.x+this.long0,n}var vE=["Geostationary Satellite View","Geostationary_Satellite","geos"];const yE={init:mE,forward:gE,inverse:_E,names:vE};function ME(n){n.Proj.projections.add(ks),n.Proj.projections.add(Hs),n.Proj.projections.add(Ty),n.Proj.projections.add(Oy),n.Proj.projections.add(Hy),n.Proj.projections.add(qy),n.Proj.projections.add(Qy),n.Proj.projections.add(rM),n.Proj.projections.add(lM),n.Proj.projections.add(pM),n.Proj.projections.add(PM),n.Proj.projections.add(FM),n.Proj.projections.add(HM),n.Proj.projections.add(jM),n.Proj.projections.add(QM),n.Proj.projections.add(rx),n.Proj.projections.add(lx),n.Proj.projections.add(px),n.Proj.projections.add(Mx),n.Proj.projections.add(wx),n.Proj.projections.add(Lx),n.Proj.projections.add(Ux),n.Proj.projections.add(zx),n.Proj.projections.add($x),n.Proj.projections.add(Kx),n.Proj.projections.add(rE),n.Proj.projections.add(lE),n.Proj.projections.add(pE),n.Proj.projections.add(yE)}Xe.defaultDatum="WGS84";Xe.Proj=Rn;Xe.WGS84=new Xe.Proj("WGS84");Xe.Point=fr;Xe.toPoint=iu;Xe.defs=ze;Xe.nadgrid=Rv;Xe.transform=ta;Xe.mgrs=Wv;Xe.version="__VERSION__";ME(Xe);function qo(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _u={exports:{}},vu=xE,oc=+(Math.pow(2,27)+1);function xE(n,t,e){var i=n*t,r=oc*n,s=r-n,o=r-s,a=n-o,h=oc*t,l=h-t,c=h-l,u=t-c,f=i-o*c,m=f-a*c,_=m-o*u,y=a*u-_;return e?(e[0]=y,e[1]=i,e):[y,i]}var EE=bE;function SE(n,t){var e=n+t,i=e-n,r=e-i,s=t-i,o=n-r,a=o+s;return a?[a,e]:[e]}function bE(n,t){var e=n.length|0,i=t.length|0;if(e===1&&i===1)return SE(n[0],t[0]);var r=e+i,s=new Array(r),o=0,a=0,h=0,l=Math.abs,c=n[a],u=l(c),f=t[h],m=l(f),_,y;u<m?(y=c,a+=1,a<e&&(c=n[a],u=l(c))):(y=f,h+=1,h<i&&(f=t[h],m=l(f))),a<e&&u<m||h>=i?(_=c,a+=1,a<e&&(c=n[a],u=l(c))):(_=f,h+=1,h<i&&(f=t[h],m=l(f)));for(var p=_+y,d=p-_,b=y-d,g=b,v=p,x,R,T,A,M;a<e&&h<i;)u<m?(_=c,a+=1,a<e&&(c=n[a],u=l(c))):(_=f,h+=1,h<i&&(f=t[h],m=l(f))),y=g,p=_+y,d=p-_,b=y-d,b&&(s[o++]=b),x=v+p,R=x-v,T=x-R,A=p-R,M=v-T,g=M+A,v=x;for(;a<e;)_=c,y=g,p=_+y,d=p-_,b=y-d,b&&(s[o++]=b),x=v+p,R=x-v,T=x-R,A=p-R,M=v-T,g=M+A,v=x,a+=1,a<e&&(c=n[a]);for(;h<i;)_=f,y=g,p=_+y,d=p-_,b=y-d,b&&(s[o++]=b),x=v+p,R=x-v,T=x-R,A=p-R,M=v-T,g=M+A,v=x,h+=1,h<i&&(f=t[h]);return g&&(s[o++]=g),v&&(s[o++]=v),o||(s[o++]=0),s.length=o,s}var wE=TE;function TE(n,t,e){var i=n+t,r=i-n,s=i-r,o=t-r,a=n-s;return e?(e[0]=a+o,e[1]=i,e):[a+o,i]}var io=vu,AE=wE,RE=CE;function CE(n,t){var e=n.length;if(e===1){var i=io(n[0],t);return i[0]?i:[i[1]]}var r=new Array(2*e),s=[.1,.1],o=[.1,.1],a=0;io(n[0],t,s),s[0]&&(r[a++]=s[0]);for(var h=1;h<e;++h){io(n[h],t,o);var l=s[1];AE(l,o[0],s),s[0]&&(r[a++]=s[0]);var c=o[1],u=s[1],f=c+u,m=f-c,_=u-m;s[1]=f,_&&(r[a++]=_)}return s[1]&&(r[a++]=s[1]),a===0&&(r[a++]=0),r.length=a,r}var LE=DE;function PE(n,t){var e=n+t,i=e-n,r=e-i,s=t-i,o=n-r,a=o+s;return a?[a,e]:[e]}function DE(n,t){var e=n.length|0,i=t.length|0;if(e===1&&i===1)return PE(n[0],-t[0]);var r=e+i,s=new Array(r),o=0,a=0,h=0,l=Math.abs,c=n[a],u=l(c),f=-t[h],m=l(f),_,y;u<m?(y=c,a+=1,a<e&&(c=n[a],u=l(c))):(y=f,h+=1,h<i&&(f=-t[h],m=l(f))),a<e&&u<m||h>=i?(_=c,a+=1,a<e&&(c=n[a],u=l(c))):(_=f,h+=1,h<i&&(f=-t[h],m=l(f)));for(var p=_+y,d=p-_,b=y-d,g=b,v=p,x,R,T,A,M;a<e&&h<i;)u<m?(_=c,a+=1,a<e&&(c=n[a],u=l(c))):(_=f,h+=1,h<i&&(f=-t[h],m=l(f))),y=g,p=_+y,d=p-_,b=y-d,b&&(s[o++]=b),x=v+p,R=x-v,T=x-R,A=p-R,M=v-T,g=M+A,v=x;for(;a<e;)_=c,y=g,p=_+y,d=p-_,b=y-d,b&&(s[o++]=b),x=v+p,R=x-v,T=x-R,A=p-R,M=v-T,g=M+A,v=x,a+=1,a<e&&(c=n[a]);for(;h<i;)_=f,y=g,p=_+y,d=p-_,b=y-d,b&&(s[o++]=b),x=v+p,R=x-v,T=x-R,A=p-R,M=v-T,g=M+A,v=x,h+=1,h<i&&(f=-t[h]);return g&&(s[o++]=g),v&&(s[o++]=v),o||(s[o++]=0),s.length=o,s}(function(n){var t=vu,e=EE,i=RE,r=LE,s=5,o=11102230246251565e-32,a=(3+16*o)*o,h=(7+56*o)*o;function l(g,v,x,R){return function(A,M,E){var L=g(g(v(M[1],E[0]),v(-E[1],M[0])),g(v(A[1],M[0]),v(-M[1],A[0]))),D=g(v(A[1],E[0]),v(-E[1],A[0])),j=R(L,D);return j[j.length-1]}}function c(g,v,x,R){return function(A,M,E,L){var D=g(g(x(g(v(E[1],L[0]),v(-L[1],E[0])),M[2]),g(x(g(v(M[1],L[0]),v(-L[1],M[0])),-E[2]),x(g(v(M[1],E[0]),v(-E[1],M[0])),L[2]))),g(x(g(v(M[1],L[0]),v(-L[1],M[0])),A[2]),g(x(g(v(A[1],L[0]),v(-L[1],A[0])),-M[2]),x(g(v(A[1],M[0]),v(-M[1],A[0])),L[2])))),j=g(g(x(g(v(E[1],L[0]),v(-L[1],E[0])),A[2]),g(x(g(v(A[1],L[0]),v(-L[1],A[0])),-E[2]),x(g(v(A[1],E[0]),v(-E[1],A[0])),L[2]))),g(x(g(v(M[1],E[0]),v(-E[1],M[0])),A[2]),g(x(g(v(A[1],E[0]),v(-E[1],A[0])),-M[2]),x(g(v(A[1],M[0]),v(-M[1],A[0])),E[2])))),N=R(D,j);return N[N.length-1]}}function u(g,v,x,R){return function(A,M,E,L,D){var j=g(g(g(x(g(x(g(v(L[1],D[0]),v(-D[1],L[0])),E[2]),g(x(g(v(E[1],D[0]),v(-D[1],E[0])),-L[2]),x(g(v(E[1],L[0]),v(-L[1],E[0])),D[2]))),M[3]),g(x(g(x(g(v(L[1],D[0]),v(-D[1],L[0])),M[2]),g(x(g(v(M[1],D[0]),v(-D[1],M[0])),-L[2]),x(g(v(M[1],L[0]),v(-L[1],M[0])),D[2]))),-E[3]),x(g(x(g(v(E[1],D[0]),v(-D[1],E[0])),M[2]),g(x(g(v(M[1],D[0]),v(-D[1],M[0])),-E[2]),x(g(v(M[1],E[0]),v(-E[1],M[0])),D[2]))),L[3]))),g(x(g(x(g(v(E[1],L[0]),v(-L[1],E[0])),M[2]),g(x(g(v(M[1],L[0]),v(-L[1],M[0])),-E[2]),x(g(v(M[1],E[0]),v(-E[1],M[0])),L[2]))),-D[3]),g(x(g(x(g(v(L[1],D[0]),v(-D[1],L[0])),M[2]),g(x(g(v(M[1],D[0]),v(-D[1],M[0])),-L[2]),x(g(v(M[1],L[0]),v(-L[1],M[0])),D[2]))),A[3]),x(g(x(g(v(L[1],D[0]),v(-D[1],L[0])),A[2]),g(x(g(v(A[1],D[0]),v(-D[1],A[0])),-L[2]),x(g(v(A[1],L[0]),v(-L[1],A[0])),D[2]))),-M[3])))),g(g(x(g(x(g(v(M[1],D[0]),v(-D[1],M[0])),A[2]),g(x(g(v(A[1],D[0]),v(-D[1],A[0])),-M[2]),x(g(v(A[1],M[0]),v(-M[1],A[0])),D[2]))),L[3]),g(x(g(x(g(v(M[1],L[0]),v(-L[1],M[0])),A[2]),g(x(g(v(A[1],L[0]),v(-L[1],A[0])),-M[2]),x(g(v(A[1],M[0]),v(-M[1],A[0])),L[2]))),-D[3]),x(g(x(g(v(E[1],L[0]),v(-L[1],E[0])),M[2]),g(x(g(v(M[1],L[0]),v(-L[1],M[0])),-E[2]),x(g(v(M[1],E[0]),v(-E[1],M[0])),L[2]))),A[3]))),g(x(g(x(g(v(E[1],L[0]),v(-L[1],E[0])),A[2]),g(x(g(v(A[1],L[0]),v(-L[1],A[0])),-E[2]),x(g(v(A[1],E[0]),v(-E[1],A[0])),L[2]))),-M[3]),g(x(g(x(g(v(M[1],L[0]),v(-L[1],M[0])),A[2]),g(x(g(v(A[1],L[0]),v(-L[1],A[0])),-M[2]),x(g(v(A[1],M[0]),v(-M[1],A[0])),L[2]))),E[3]),x(g(x(g(v(M[1],E[0]),v(-E[1],M[0])),A[2]),g(x(g(v(A[1],E[0]),v(-E[1],A[0])),-M[2]),x(g(v(A[1],M[0]),v(-M[1],A[0])),E[2]))),-L[3]))))),N=g(g(g(x(g(x(g(v(L[1],D[0]),v(-D[1],L[0])),E[2]),g(x(g(v(E[1],D[0]),v(-D[1],E[0])),-L[2]),x(g(v(E[1],L[0]),v(-L[1],E[0])),D[2]))),A[3]),x(g(x(g(v(L[1],D[0]),v(-D[1],L[0])),A[2]),g(x(g(v(A[1],D[0]),v(-D[1],A[0])),-L[2]),x(g(v(A[1],L[0]),v(-L[1],A[0])),D[2]))),-E[3])),g(x(g(x(g(v(E[1],D[0]),v(-D[1],E[0])),A[2]),g(x(g(v(A[1],D[0]),v(-D[1],A[0])),-E[2]),x(g(v(A[1],E[0]),v(-E[1],A[0])),D[2]))),L[3]),x(g(x(g(v(E[1],L[0]),v(-L[1],E[0])),A[2]),g(x(g(v(A[1],L[0]),v(-L[1],A[0])),-E[2]),x(g(v(A[1],E[0]),v(-E[1],A[0])),L[2]))),-D[3]))),g(g(x(g(x(g(v(E[1],D[0]),v(-D[1],E[0])),M[2]),g(x(g(v(M[1],D[0]),v(-D[1],M[0])),-E[2]),x(g(v(M[1],E[0]),v(-E[1],M[0])),D[2]))),A[3]),x(g(x(g(v(E[1],D[0]),v(-D[1],E[0])),A[2]),g(x(g(v(A[1],D[0]),v(-D[1],A[0])),-E[2]),x(g(v(A[1],E[0]),v(-E[1],A[0])),D[2]))),-M[3])),g(x(g(x(g(v(M[1],D[0]),v(-D[1],M[0])),A[2]),g(x(g(v(A[1],D[0]),v(-D[1],A[0])),-M[2]),x(g(v(A[1],M[0]),v(-M[1],A[0])),D[2]))),E[3]),x(g(x(g(v(M[1],E[0]),v(-E[1],M[0])),A[2]),g(x(g(v(A[1],E[0]),v(-E[1],A[0])),-M[2]),x(g(v(A[1],M[0]),v(-M[1],A[0])),E[2]))),-D[3])))),z=R(j,N);return z[z.length-1]}}function f(g){var v=g===3?l:g===4?c:u;return v(e,t,i,r)}var m=f(3),_=f(4),y=[function(){return 0},function(){return 0},function(v,x){return x[0]-v[0]},function(v,x,R){var T=(v[1]-R[1])*(x[0]-R[0]),A=(v[0]-R[0])*(x[1]-R[1]),M=T-A,E;if(T>0){if(A<=0)return M;E=T+A}else if(T<0){if(A>=0)return M;E=-(T+A)}else return M;var L=a*E;return M>=L||M<=-L?M:m(v,x,R)},function(v,x,R,T){var A=v[0]-T[0],M=x[0]-T[0],E=R[0]-T[0],L=v[1]-T[1],D=x[1]-T[1],j=R[1]-T[1],N=v[2]-T[2],z=x[2]-T[2],q=R[2]-T[2],$=M*j,et=E*D,Z=E*L,K=A*j,O=A*D,V=M*L,ut=N*($-et)+z*(Z-K)+q*(O-V),pt=(Math.abs($)+Math.abs(et))*Math.abs(N)+(Math.abs(Z)+Math.abs(K))*Math.abs(z)+(Math.abs(O)+Math.abs(V))*Math.abs(q),_t=h*pt;return ut>_t||-ut>_t?ut:_(v,x,R,T)}];function p(g){var v=y[g.length];return v||(v=y[g.length]=f(g.length)),v.apply(void 0,g)}function d(g,v,x,R,T,A,M){return function(L,D,j,N,z){switch(arguments.length){case 0:case 1:return 0;case 2:return R(L,D);case 3:return T(L,D,j);case 4:return A(L,D,j,N);case 5:return M(L,D,j,N,z)}for(var q=new Array(arguments.length),$=0;$<arguments.length;++$)q[$]=arguments[$];return g(q)}}function b(){for(;y.length<=s;)y.push(f(y.length));n.exports=d.apply(void 0,[p].concat(y));for(var g=0;g<=s;++g)n.exports[g]=y[g]}b()})(_u);var NE=_u.exports;NE[3];var IE=new Array(256);(function(n){for(var t=0;t<256;++t){var e=t,i=t,r=7;for(e>>>=1;e;e>>>=1)i<<=1,i|=e&1,--r;n[t]=i<<r&255}})(IE);function UE(n){this.roots=new Array(n),this.ranks=new Array(n);for(var t=0;t<n;++t)this.roots[t]=t,this.ranks[t]=0}var pa=UE.prototype;Object.defineProperty(pa,"length",{get:function(){return this.roots.length}});pa.makeSet=function(){var n=this.roots.length;return this.roots.push(n),this.ranks.push(0),n};pa.find=function(n){for(var t=n,e=this.roots;e[n]!==n;)n=e[n];for(;e[t]!==n;){var i=e[t];e[t]=n,t=i}return n};pa.link=function(n,t){var e=this.find(n),i=this.find(t);if(e!==i){var r=this.ranks,s=this.roots,o=r[e],a=r[i];o<a?s[e]=i:a<o?s[i]=e:(s[i]=e,++r[e])}};var jo={exports:{}},or=typeof Reflect=="object"?Reflect:null,hc=or&&typeof or.apply=="function"?or.apply:function(t,e,i){return Function.prototype.apply.call(t,e,i)},Vs;or&&typeof or.ownKeys=="function"?Vs=or.ownKeys:Object.getOwnPropertySymbols?Vs=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:Vs=function(t){return Object.getOwnPropertyNames(t)};function OE(n){console&&console.warn&&console.warn(n)}var yu=Number.isNaN||function(t){return t!==t};function ne(){ne.init.call(this)}jo.exports=ne;jo.exports.once=zE;ne.EventEmitter=ne;ne.prototype._events=void 0;ne.prototype._eventsCount=0;ne.prototype._maxListeners=void 0;var lc=10;function ma(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(ne,"defaultMaxListeners",{enumerable:!0,get:function(){return lc},set:function(n){if(typeof n!="number"||n<0||yu(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");lc=n}});ne.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ne.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||yu(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function Mu(n){return n._maxListeners===void 0?ne.defaultMaxListeners:n._maxListeners}ne.prototype.getMaxListeners=function(){return Mu(this)};ne.prototype.emit=function(t){for(var e=[],i=1;i<arguments.length;i++)e.push(arguments[i]);var r=t==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var h=s[t];if(h===void 0)return!1;if(typeof h=="function")hc(h,this,e);else for(var l=h.length,c=wu(h,l),i=0;i<l;++i)hc(c[i],this,e);return!0};function xu(n,t,e,i){var r,s,o;if(ma(e),s=n._events,s===void 0?(s=n._events=Object.create(null),n._eventsCount=0):(s.newListener!==void 0&&(n.emit("newListener",t,e.listener?e.listener:e),s=n._events),o=s[t]),o===void 0)o=s[t]=e,++n._eventsCount;else if(typeof o=="function"?o=s[t]=i?[e,o]:[o,e]:i?o.unshift(e):o.push(e),r=Mu(n),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=n,a.type=t,a.count=o.length,OE(a)}return n}ne.prototype.addListener=function(t,e){return xu(this,t,e,!1)};ne.prototype.on=ne.prototype.addListener;ne.prototype.prependListener=function(t,e){return xu(this,t,e,!0)};function FE(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Eu(n,t,e){var i={fired:!1,wrapFn:void 0,target:n,type:t,listener:e},r=FE.bind(i);return r.listener=e,i.wrapFn=r,r}ne.prototype.once=function(t,e){return ma(e),this.on(t,Eu(this,t,e)),this};ne.prototype.prependOnceListener=function(t,e){return ma(e),this.prependListener(t,Eu(this,t,e)),this};ne.prototype.removeListener=function(t,e){var i,r,s,o,a;if(ma(e),r=this._events,r===void 0)return this;if(i=r[t],i===void 0)return this;if(i===e||i.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,i.listener||e));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===e||i[o].listener===e){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():GE(i,s),i.length===1&&(r[t]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",t,a||e)}return this};ne.prototype.off=ne.prototype.removeListener;ne.prototype.removeAllListeners=function(t){var e,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[t]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=i[t],typeof e=="function")this.removeListener(t,e);else if(e!==void 0)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this};function Su(n,t,e){var i=n._events;if(i===void 0)return[];var r=i[t];return r===void 0?[]:typeof r=="function"?e?[r.listener||r]:[r]:e?BE(r):wu(r,r.length)}ne.prototype.listeners=function(t){return Su(this,t,!0)};ne.prototype.rawListeners=function(t){return Su(this,t,!1)};ne.listenerCount=function(n,t){return typeof n.listenerCount=="function"?n.listenerCount(t):bu.call(n,t)};ne.prototype.listenerCount=bu;function bu(n){var t=this._events;if(t!==void 0){var e=t[n];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}ne.prototype.eventNames=function(){return this._eventsCount>0?Vs(this._events):[]};function wu(n,t){for(var e=new Array(t),i=0;i<t;++i)e[i]=n[i];return e}function GE(n,t){for(;t+1<n.length;t++)n[t]=n[t+1];n.pop()}function BE(n){for(var t=new Array(n.length),e=0;e<t.length;++e)t[e]=n[e].listener||n[e];return t}function zE(n,t){return new Promise(function(e,i){function r(o){n.removeListener(t,s),i(o)}function s(){typeof n.removeListener=="function"&&n.removeListener("error",r),e([].slice.call(arguments))}Tu(n,t,s,{once:!0}),t!=="error"&&kE(n,r,{once:!0})})}function kE(n,t,e){typeof n.on=="function"&&Tu(n,"error",t,e)}function Tu(n,t,e,i){if(typeof n.on=="function")i.once?n.once(t,e):n.on(t,e);else if(typeof n.addEventListener=="function")n.addEventListener(t,function r(s){i.once&&n.removeEventListener(t,r),e(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var HE=jo.exports;function Ln(n){if(typeof n!="function")throw new Error("obliterator/iterator: expecting a function!");this.next=n}typeof Symbol<"u"&&(Ln.prototype[Symbol.iterator]=function(){return this});Ln.of=function(){var n=arguments,t=n.length,e=0;return new Ln(function(){return e>=t?{done:!0}:{done:!1,value:n[e++]}})};Ln.empty=function(){var n=new Ln(function(){return{done:!0}});return n};Ln.fromSequence=function(n){var t=0,e=n.length;return new Ln(function(){return t>=e?{done:!0}:{done:!1,value:n[t++]}})};Ln.is=function(n){return n instanceof Ln?!0:typeof n=="object"&&n!==null&&typeof n.next=="function"};var Yo=Ln;const fn=qo(Yo);var Ko={};Ko.ARRAY_BUFFER_SUPPORT=typeof ArrayBuffer<"u";Ko.SYMBOL_SUPPORT=typeof Symbol<"u";var VE=Yo,Au=Ko,WE=Au.ARRAY_BUFFER_SUPPORT,$E=Au.SYMBOL_SUPPORT;function XE(n){return typeof n=="string"||Array.isArray(n)||WE&&ArrayBuffer.isView(n)?VE.fromSequence(n):typeof n!="object"||n===null?null:$E&&typeof n[Symbol.iterator]=="function"?n[Symbol.iterator]():typeof n.next=="function"?n:null}var Ru=function(t){var e=XE(t);if(!e)throw new Error("obliterator: target is not iterable nor a valid iterator.");return e},qE=Ru,jE=function(t,e){for(var i=arguments.length>1?e:1/0,r=i!==1/0?new Array(i):[],s,o=0,a=qE(t);;){if(o===i)return r;if(s=a.next(),s.done)return o!==e&&(r.length=o),r;r[o++]=s.value}};const Cu=qo(jE);var YE=Yo,KE=Ru,ZE=function(){var t=arguments,e=null,i=-1;return new YE(function(){var s=null;do{if(e===null){if(i++,i>=t.length)return{done:!0};e=KE(t[i])}if(s=e.next(),s.done===!0){e=null;continue}break}while(!0);return s})};const Hn=qo(ZE);function JE(){const n=arguments[0];for(let t=1,e=arguments.length;t<e;t++)if(arguments[t])for(const i in arguments[t])n[i]=arguments[t][i];return n}let ye=JE;typeof Object.assign=="function"&&(ye=Object.assign);function un(n,t,e,i){const r=n._nodes.get(t);let s=null;return r&&(i==="mixed"?s=r.out&&r.out[e]||r.undirected&&r.undirected[e]:i==="directed"?s=r.out&&r.out[e]:s=r.undirected&&r.undirected[e]),s}function Ce(n){return typeof n=="object"&&n!==null}function Lu(n){let t;for(t in n)return!1;return!0}function rn(n,t,e){Object.defineProperty(n,t,{enumerable:!1,configurable:!1,writable:!0,value:e})}function gn(n,t,e){const i={enumerable:!0,configurable:!0};typeof e=="function"?i.get=e:(i.value=e,i.writable=!1),Object.defineProperty(n,t,i)}function cc(n){return!(!Ce(n)||n.attributes&&!Array.isArray(n.attributes))}function QE(){let n=Math.floor(Math.random()*256)&255;return()=>n++}class Zo extends Error{constructor(t){super(),this.name="GraphError",this.message=t}}class dt extends Zo{constructor(t){super(t),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,dt.prototype.constructor)}}class at extends Zo{constructor(t){super(t),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,at.prototype.constructor)}}class Tt extends Zo{constructor(t){super(t),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Tt.prototype.constructor)}}function Pu(n,t){this.key=n,this.attributes=t,this.clear()}Pu.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function Du(n,t){this.key=n,this.attributes=t,this.clear()}Du.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function Nu(n,t){this.key=n,this.attributes=t,this.clear()}Nu.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function _r(n,t,e,i,r){this.key=t,this.attributes=r,this.undirected=n,this.source=e,this.target=i}_r.prototype.attach=function(){let n="out",t="in";this.undirected&&(n=t="undirected");const e=this.source.key,i=this.target.key;this.source[n][i]=this,!(this.undirected&&e===i)&&(this.target[t][e]=this)};_r.prototype.attachMulti=function(){let n="out",t="in";const e=this.source.key,i=this.target.key;this.undirected&&(n=t="undirected");const r=this.source[n],s=r[i];if(typeof s>"u"){r[i]=this,this.undirected&&e===i||(this.target[t][e]=this);return}s.previous=this,this.next=s,r[i]=this,this.target[t][e]=this};_r.prototype.detach=function(){const n=this.source.key,t=this.target.key;let e="out",i="in";this.undirected&&(e=i="undirected"),delete this.source[e][t],delete this.target[i][n]};_r.prototype.detachMulti=function(){const n=this.source.key,t=this.target.key;let e="out",i="in";this.undirected&&(e=i="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[e][t],delete this.target[i][n]):(this.next.previous=void 0,this.source[e][t]=this.next,this.target[i][n]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const Iu=0,Uu=1,tS=2,Ou=3;function qn(n,t,e,i,r,s,o){let a,h,l,c;if(i=""+i,e===Iu){if(a=n._nodes.get(i),!a)throw new at(`Graph.${t}: could not find the "${i}" node in the graph.`);l=r,c=s}else if(e===Ou){if(r=""+r,h=n._edges.get(r),!h)throw new at(`Graph.${t}: could not find the "${r}" edge in the graph.`);const u=h.source.key,f=h.target.key;if(i===u)a=h.target;else if(i===f)a=h.source;else throw new at(`Graph.${t}: the "${i}" node is not attached to the "${r}" edge (${u}, ${f}).`);l=s,c=o}else{if(h=n._edges.get(i),!h)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`);e===Uu?a=h.source:a=h.target,l=r,c=s}return[a,l,c]}function eS(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=qn(this,t,e,i,r,s);return o.attributes[a]}}function nS(n,t,e){n.prototype[t]=function(i,r){const[s]=qn(this,t,e,i,r);return s.attributes}}function iS(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=qn(this,t,e,i,r,s);return o.attributes.hasOwnProperty(a)}}function rS(n,t,e){n.prototype[t]=function(i,r,s,o){const[a,h,l]=qn(this,t,e,i,r,s,o);return a.attributes[h]=l,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:h}),this}}function sS(n,t,e){n.prototype[t]=function(i,r,s,o){const[a,h,l]=qn(this,t,e,i,r,s,o);if(typeof l!="function")throw new dt(`Graph.${t}: updater should be a function.`);const c=a.attributes,u=l(c[h]);return c[h]=u,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:h}),this}}function aS(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=qn(this,t,e,i,r,s);return delete o.attributes[a],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:a}),this}}function oS(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=qn(this,t,e,i,r,s);if(!Ce(a))throw new dt(`Graph.${t}: provided attributes are not a plain object.`);return o.attributes=a,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function hS(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=qn(this,t,e,i,r,s);if(!Ce(a))throw new dt(`Graph.${t}: provided attributes are not a plain object.`);return ye(o.attributes,a),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:a}),this}}function lS(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=qn(this,t,e,i,r,s);if(typeof a!="function")throw new dt(`Graph.${t}: provided updater is not a function.`);return o.attributes=a(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}const cS=[{name:n=>`get${n}Attribute`,attacher:eS},{name:n=>`get${n}Attributes`,attacher:nS},{name:n=>`has${n}Attribute`,attacher:iS},{name:n=>`set${n}Attribute`,attacher:rS},{name:n=>`update${n}Attribute`,attacher:sS},{name:n=>`remove${n}Attribute`,attacher:aS},{name:n=>`replace${n}Attributes`,attacher:oS},{name:n=>`merge${n}Attributes`,attacher:hS},{name:n=>`update${n}Attributes`,attacher:lS}];function uS(n){cS.forEach(function({name:t,attacher:e}){e(n,t("Node"),Iu),e(n,t("Source"),Uu),e(n,t("Target"),tS),e(n,t("Opposite"),Ou)})}function fS(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=un(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}return s.attributes[r]}}function dS(n,t,e){n.prototype[t]=function(i){let r;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const s=""+i,o=""+arguments[1];if(r=un(this,s,o,e),!r)throw new at(`Graph.${t}: could not find an edge for the given path ("${s}" - "${o}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,r=this._edges.get(i),!r)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}return r.attributes}}function pS(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=un(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}return s.attributes.hasOwnProperty(r)}}function mS(n,t,e){n.prototype[t]=function(i,r,s){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+i,h=""+r;if(r=arguments[2],s=arguments[3],o=un(this,a,h,e),!o)throw new at(`Graph.${t}: could not find an edge for the given path ("${a}" - "${h}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,o=this._edges.get(i),!o)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}return o.attributes[r]=s,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function gS(n,t,e){n.prototype[t]=function(i,r,s){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+i,h=""+r;if(r=arguments[2],s=arguments[3],o=un(this,a,h,e),!o)throw new at(`Graph.${t}: could not find an edge for the given path ("${a}" - "${h}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,o=this._edges.get(i),!o)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}if(typeof s!="function")throw new dt(`Graph.${t}: updater should be a function.`);return o.attributes[r]=s(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function _S(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=un(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}return delete s.attributes[r],this.emit("edgeAttributesUpdated",{key:s.key,type:"remove",attributes:s.attributes,name:r}),this}}function vS(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=un(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}if(!Ce(r))throw new dt(`Graph.${t}: provided attributes are not a plain object.`);return s.attributes=r,this.emit("edgeAttributesUpdated",{key:s.key,type:"replace",attributes:s.attributes}),this}}function yS(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=un(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}if(!Ce(r))throw new dt(`Graph.${t}: provided attributes are not a plain object.`);return ye(s.attributes,r),this.emit("edgeAttributesUpdated",{key:s.key,type:"merge",attributes:s.attributes,data:r}),this}}function MS(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=un(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}if(typeof r!="function")throw new dt(`Graph.${t}: provided updater is not a function.`);return s.attributes=r(s.attributes),this.emit("edgeAttributesUpdated",{key:s.key,type:"update",attributes:s.attributes}),this}}const xS=[{name:n=>`get${n}Attribute`,attacher:fS},{name:n=>`get${n}Attributes`,attacher:dS},{name:n=>`has${n}Attribute`,attacher:pS},{name:n=>`set${n}Attribute`,attacher:mS},{name:n=>`update${n}Attribute`,attacher:gS},{name:n=>`remove${n}Attribute`,attacher:_S},{name:n=>`replace${n}Attributes`,attacher:vS},{name:n=>`merge${n}Attributes`,attacher:yS},{name:n=>`update${n}Attributes`,attacher:MS}];function ES(n){xS.forEach(function({name:t,attacher:e}){e(n,t("Edge"),"mixed"),e(n,t("DirectedEdge"),"directed"),e(n,t("UndirectedEdge"),"undirected")})}const SS=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function bS(n,t,e,i){let r=!1;for(const s in t){if(s===i)continue;const o=t[s];if(r=e(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),n&&r)return o.key}}function wS(n,t,e,i){let r,s,o,a=!1;for(const h in t)if(h!==i){r=t[h];do{if(s=r.source,o=r.target,a=e(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected),n&&a)return r.key;r=r.next}while(r!==void 0)}}function ro(n,t){const e=Object.keys(n),i=e.length;let r,s=0;return new fn(function(){do if(r)r=r.next;else{if(s>=i)return{done:!0};const a=e[s++];if(a===t){r=void 0;continue}r=n[a]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}})}function TS(n,t,e,i){const r=t[e];if(!r)return;const s=r.source,o=r.target;if(i(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected)&&n)return r.key}function AS(n,t,e,i){let r=t[e];if(!r)return;let s=!1;do{if(s=i(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),n&&s)return r.key;r=r.next}while(r!==void 0)}function so(n,t){let e=n[t];return e.next!==void 0?new fn(function(){if(!e)return{done:!0};const i={edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected};return e=e.next,{done:!1,value:i}}):fn.of({edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected})}function RS(n,t){if(n.size===0)return[];if(t==="mixed"||t===n.type)return typeof Array.from=="function"?Array.from(n._edges.keys()):Cu(n._edges.keys(),n._edges.size);const e=t==="undirected"?n.undirectedSize:n.directedSize,i=new Array(e),r=t==="undirected",s=n._edges.values();let o=0,a,h;for(;a=s.next(),a.done!==!0;)h=a.value,h.undirected===r&&(i[o++]=h.key);return i}function Fu(n,t,e,i){if(t.size===0)return;const r=e!=="mixed"&&e!==t.type,s=e==="undirected";let o,a,h=!1;const l=t._edges.values();for(;o=l.next(),o.done!==!0;){if(a=o.value,r&&a.undirected!==s)continue;const{key:c,attributes:u,source:f,target:m}=a;if(h=i(c,u,f.key,m.key,f.attributes,m.attributes,a.undirected),n&&h)return c}}function CS(n,t){if(n.size===0)return fn.empty();const e=t!=="mixed"&&t!==n.type,i=t==="undirected",r=n._edges.values();return new fn(function(){let o,a;for(;;){if(o=r.next(),o.done)return o;if(a=o.value,!(e&&a.undirected!==i))break}return{value:{edge:a.key,attributes:a.attributes,source:a.source.key,target:a.target.key,sourceAttributes:a.source.attributes,targetAttributes:a.target.attributes,undirected:a.undirected},done:!1}})}function Jo(n,t,e,i,r,s){const o=t?wS:bS;let a;if(e!=="undirected"&&(i!=="out"&&(a=o(n,r.in,s),n&&a)||i!=="in"&&(a=o(n,r.out,s,i?void 0:r.key),n&&a))||e!=="directed"&&(a=o(n,r.undirected,s),n&&a))return a}function LS(n,t,e,i){const r=[];return Jo(!1,n,t,e,i,function(s){r.push(s)}),r}function PS(n,t,e){let i=fn.empty();return n!=="undirected"&&(t!=="out"&&typeof e.in<"u"&&(i=Hn(i,ro(e.in))),t!=="in"&&typeof e.out<"u"&&(i=Hn(i,ro(e.out,t?void 0:e.key)))),n!=="directed"&&typeof e.undirected<"u"&&(i=Hn(i,ro(e.undirected))),i}function Qo(n,t,e,i,r,s,o){const a=e?AS:TS;let h;if(t!=="undirected"&&(typeof r.in<"u"&&i!=="out"&&(h=a(n,r.in,s,o),n&&h)||typeof r.out<"u"&&i!=="in"&&(i||r.key!==s)&&(h=a(n,r.out,s,o),n&&h))||t!=="directed"&&typeof r.undirected<"u"&&(h=a(n,r.undirected,s,o),n&&h))return h}function DS(n,t,e,i,r){const s=[];return Qo(!1,n,t,e,i,r,function(o){s.push(o)}),s}function NS(n,t,e,i){let r=fn.empty();return n!=="undirected"&&(typeof e.in<"u"&&t!=="out"&&i in e.in&&(r=Hn(r,so(e.in,i))),typeof e.out<"u"&&t!=="in"&&i in e.out&&(t||e.key!==i)&&(r=Hn(r,so(e.out,i)))),n!=="directed"&&typeof e.undirected<"u"&&i in e.undirected&&(r=Hn(r,so(e.undirected,i))),r}function IS(n,t){const{name:e,type:i,direction:r}=t;n.prototype[e]=function(s,o){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return[];if(!arguments.length)return RS(this,i);if(arguments.length===1){s=""+s;const a=this._nodes.get(s);if(typeof a>"u")throw new at(`Graph.${e}: could not find the "${s}" node in the graph.`);return LS(this.multi,i==="mixed"?this.type:i,r,a)}if(arguments.length===2){s=""+s,o=""+o;const a=this._nodes.get(s);if(!a)throw new at(`Graph.${e}:  could not find the "${s}" source node in the graph.`);if(!this._nodes.has(o))throw new at(`Graph.${e}:  could not find the "${o}" target node in the graph.`);return DS(i,this.multi,r,a,o)}throw new dt(`Graph.${e}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function US(n,t){const{name:e,type:i,direction:r}=t,s="forEach"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[s]=function(l,c,u){if(!(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)){if(arguments.length===1)return u=l,Fu(!1,this,i,u);if(arguments.length===2){l=""+l,u=c;const f=this._nodes.get(l);if(typeof f>"u")throw new at(`Graph.${s}: could not find the "${l}" node in the graph.`);return Jo(!1,this.multi,i==="mixed"?this.type:i,r,f,u)}if(arguments.length===3){l=""+l,c=""+c;const f=this._nodes.get(l);if(!f)throw new at(`Graph.${s}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(c))throw new at(`Graph.${s}:  could not find the "${c}" target node in the graph.`);return Qo(!1,i,this.multi,r,f,c,u)}throw new dt(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const o="map"+e[0].toUpperCase()+e.slice(1);n.prototype[o]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop();let u;if(l.length===0){let f=0;i!=="directed"&&(f+=this.undirectedSize),i!=="undirected"&&(f+=this.directedSize),u=new Array(f);let m=0;l.push((_,y,p,d,b,g,v)=>{u[m++]=c(_,y,p,d,b,g,v)})}else u=[],l.push((f,m,_,y,p,d,b)=>{u.push(c(f,m,_,y,p,d,b))});return this[s].apply(this,l),u};const a="filter"+e[0].toUpperCase()+e.slice(1);n.prototype[a]=function(){const l=Array.prototype.slice.call(arguments),c=l.pop(),u=[];return l.push((f,m,_,y,p,d,b)=>{c(f,m,_,y,p,d,b)&&u.push(f)}),this[s].apply(this,l),u};const h="reduce"+e[0].toUpperCase()+e.slice(1);n.prototype[h]=function(){let l=Array.prototype.slice.call(arguments);if(l.length<2||l.length>4)throw new dt(`Graph.${h}: invalid number of arguments (expecting 2, 3 or 4 and got ${l.length}).`);if(typeof l[l.length-1]=="function"&&typeof l[l.length-2]!="function")throw new dt(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let c,u;l.length===2?(c=l[0],u=l[1],l=[]):l.length===3?(c=l[1],u=l[2],l=[l[0]]):l.length===4&&(c=l[2],u=l[3],l=[l[0],l[1]]);let f=u;return l.push((m,_,y,p,d,b,g)=>{f=c(f,m,_,y,p,d,b,g)}),this[s].apply(this,l),f}}function OS(n,t){const{name:e,type:i,direction:r}=t,s="find"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[s]=function(h,l,c){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return!1;if(arguments.length===1)return c=h,Fu(!0,this,i,c);if(arguments.length===2){h=""+h,c=l;const u=this._nodes.get(h);if(typeof u>"u")throw new at(`Graph.${s}: could not find the "${h}" node in the graph.`);return Jo(!0,this.multi,i==="mixed"?this.type:i,r,u,c)}if(arguments.length===3){h=""+h,l=""+l;const u=this._nodes.get(h);if(!u)throw new at(`Graph.${s}:  could not find the "${h}" source node in the graph.`);if(!this._nodes.has(l))throw new at(`Graph.${s}:  could not find the "${l}" target node in the graph.`);return Qo(!0,i,this.multi,r,u,l,c)}throw new dt(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const o="some"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[o]=function(){const h=Array.prototype.slice.call(arguments),l=h.pop();return h.push((u,f,m,_,y,p,d)=>l(u,f,m,_,y,p,d)),!!this[s].apply(this,h)};const a="every"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[a]=function(){const h=Array.prototype.slice.call(arguments),l=h.pop();return h.push((u,f,m,_,y,p,d)=>!l(u,f,m,_,y,p,d)),!this[s].apply(this,h)}}function FS(n,t){const{name:e,type:i,direction:r}=t,s=e.slice(0,-1)+"Entries";n.prototype[s]=function(o,a){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return fn.empty();if(!arguments.length)return CS(this,i);if(arguments.length===1){o=""+o;const h=this._nodes.get(o);if(!h)throw new at(`Graph.${s}: could not find the "${o}" node in the graph.`);return PS(i,r,h)}if(arguments.length===2){o=""+o,a=""+a;const h=this._nodes.get(o);if(!h)throw new at(`Graph.${s}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(a))throw new at(`Graph.${s}:  could not find the "${a}" target node in the graph.`);return NS(i,r,h,a)}throw new dt(`Graph.${s}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function GS(n){SS.forEach(t=>{IS(n,t),US(n,t),OS(n,t),FS(n,t)})}const BS=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function ga(){this.A=null,this.B=null}ga.prototype.wrap=function(n){this.A===null?this.A=n:this.B===null&&(this.B=n)};ga.prototype.has=function(n){return this.A!==null&&n in this.A||this.B!==null&&n in this.B};function Rr(n,t,e,i,r){for(const s in i){const o=i[s],a=o.source,h=o.target,l=a===e?h:a;if(t&&t.has(l.key))continue;const c=r(l.key,l.attributes);if(n&&c)return l.key}}function th(n,t,e,i,r){if(t!=="mixed"){if(t==="undirected")return Rr(n,null,i,i.undirected,r);if(typeof e=="string")return Rr(n,null,i,i[e],r)}const s=new ga;let o;if(t!=="undirected"){if(e!=="out"){if(o=Rr(n,null,i,i.in,r),n&&o)return o;s.wrap(i.in)}if(e!=="in"){if(o=Rr(n,s,i,i.out,r),n&&o)return o;s.wrap(i.out)}}if(t!=="directed"&&(o=Rr(n,s,i,i.undirected,r),n&&o))return o}function zS(n,t,e){if(n!=="mixed"){if(n==="undirected")return Object.keys(e.undirected);if(typeof t=="string")return Object.keys(e[t])}const i=[];return th(!1,n,t,e,function(r){i.push(r)}),i}function Cr(n,t,e){const i=Object.keys(e),r=i.length;let s=0;return new fn(function(){let a=null;do{if(s>=r)return n&&n.wrap(e),{done:!0};const h=e[i[s++]],l=h.source,c=h.target;if(a=l===t?c:l,n&&n.has(a.key)){a=null;continue}}while(a===null);return{done:!1,value:{neighbor:a.key,attributes:a.attributes}}})}function kS(n,t,e){if(n!=="mixed"){if(n==="undirected")return Cr(null,e,e.undirected);if(typeof t=="string")return Cr(null,e,e[t])}let i=fn.empty();const r=new ga;return n!=="undirected"&&(t!=="out"&&(i=Hn(i,Cr(r,e,e.in))),t!=="in"&&(i=Hn(i,Cr(r,e,e.out)))),n!=="directed"&&(i=Hn(i,Cr(r,e,e.undirected))),i}function HS(n,t){const{name:e,type:i,direction:r}=t;n.prototype[e]=function(s){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return[];s=""+s;const o=this._nodes.get(s);if(typeof o>"u")throw new at(`Graph.${e}: could not find the "${s}" node in the graph.`);return zS(i==="mixed"?this.type:i,r,o)}}function VS(n,t){const{name:e,type:i,direction:r}=t,s="forEach"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[s]=function(l,c){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return;l=""+l;const u=this._nodes.get(l);if(typeof u>"u")throw new at(`Graph.${s}: could not find the "${l}" node in the graph.`);th(!1,i==="mixed"?this.type:i,r,u,c)};const o="map"+e[0].toUpperCase()+e.slice(1);n.prototype[o]=function(l,c){const u=[];return this[s](l,(f,m)=>{u.push(c(f,m))}),u};const a="filter"+e[0].toUpperCase()+e.slice(1);n.prototype[a]=function(l,c){const u=[];return this[s](l,(f,m)=>{c(f,m)&&u.push(f)}),u};const h="reduce"+e[0].toUpperCase()+e.slice(1);n.prototype[h]=function(l,c,u){if(arguments.length<3)throw new dt(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let f=u;return this[s](l,(m,_)=>{f=c(f,m,_)}),f}}function WS(n,t){const{name:e,type:i,direction:r}=t,s=e[0].toUpperCase()+e.slice(1,-1),o="find"+s;n.prototype[o]=function(l,c){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return;l=""+l;const u=this._nodes.get(l);if(typeof u>"u")throw new at(`Graph.${o}: could not find the "${l}" node in the graph.`);return th(!0,i==="mixed"?this.type:i,r,u,c)};const a="some"+s;n.prototype[a]=function(l,c){return!!this[o](l,c)};const h="every"+s;n.prototype[h]=function(l,c){return!this[o](l,(f,m)=>!c(f,m))}}function $S(n,t){const{name:e,type:i,direction:r}=t,s=e.slice(0,-1)+"Entries";n.prototype[s]=function(o){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return fn.empty();o=""+o;const a=this._nodes.get(o);if(typeof a>"u")throw new at(`Graph.${s}: could not find the "${o}" node in the graph.`);return kS(i==="mixed"?this.type:i,r,a)}}function XS(n){BS.forEach(t=>{HS(n,t),VS(n,t),WS(n,t),$S(n,t)})}function Fs(n,t,e,i,r){const s=i._nodes.values(),o=i.type;let a,h,l,c,u,f,m;for(;a=s.next(),a.done!==!0;){let _=!1;if(h=a.value,o!=="undirected"){c=h.out;for(l in c){u=c[l];do{if(f=u.target,_=!0,m=r(h.key,f.key,h.attributes,f.attributes,u.key,u.attributes,u.undirected),n&&m)return u;u=u.next}while(u)}}if(o!=="directed"){c=h.undirected;for(l in c)if(!(t&&h.key>l)){u=c[l];do{if(f=u.target,f.key!==l&&(f=u.source),_=!0,m=r(h.key,f.key,h.attributes,f.attributes,u.key,u.attributes,u.undirected),n&&m)return u;u=u.next}while(u)}}if(e&&!_&&(m=r(h.key,null,h.attributes,null,null,null,null),n&&m))return null}}function qS(n,t){const e={key:n};return Lu(t.attributes)||(e.attributes=ye({},t.attributes)),e}function jS(n,t,e){const i={key:t,source:e.source.key,target:e.target.key};return Lu(e.attributes)||(i.attributes=ye({},e.attributes)),n==="mixed"&&e.undirected&&(i.undirected=!0),i}function YS(n){if(!Ce(n))throw new dt('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in n))throw new dt("Graph.import: serialized node is missing its key.");if("attributes"in n&&(!Ce(n.attributes)||n.attributes===null))throw new dt("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function KS(n){if(!Ce(n))throw new dt('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in n))throw new dt("Graph.import: serialized edge is missing its source.");if(!("target"in n))throw new dt("Graph.import: serialized edge is missing its target.");if("attributes"in n&&(!Ce(n.attributes)||n.attributes===null))throw new dt("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in n&&typeof n.undirected!="boolean")throw new dt("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const ZS=QE(),JS=new Set(["directed","undirected","mixed"]),uc=new Set(["domain","_events","_eventsCount","_maxListeners"]),QS=[{name:n=>`${n}Edge`,generateKey:!0},{name:n=>`${n}DirectedEdge`,generateKey:!0,type:"directed"},{name:n=>`${n}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:n=>`${n}EdgeWithKey`},{name:n=>`${n}DirectedEdgeWithKey`,type:"directed"},{name:n=>`${n}UndirectedEdgeWithKey`,type:"undirected"}],t1={allowSelfLoops:!0,multi:!1,type:"mixed"};function e1(n,t,e){if(e&&!Ce(e))throw new dt(`Graph.addNode: invalid attributes. Expecting an object but got "${e}"`);if(t=""+t,e=e||{},n._nodes.has(t))throw new Tt(`Graph.addNode: the "${t}" node already exist in the graph.`);const i=new n.NodeDataClass(t,e);return n._nodes.set(t,i),n.emit("nodeAdded",{key:t,attributes:e}),i}function fc(n,t,e){const i=new n.NodeDataClass(t,e);return n._nodes.set(t,i),n.emit("nodeAdded",{key:t,attributes:e}),i}function Gu(n,t,e,i,r,s,o,a){if(!i&&n.type==="undirected")throw new Tt(`Graph.${t}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(i&&n.type==="directed")throw new Tt(`Graph.${t}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(a&&!Ce(a))throw new dt(`Graph.${t}: invalid attributes. Expecting an object but got "${a}"`);if(s=""+s,o=""+o,a=a||{},!n.allowSelfLoops&&s===o)throw new Tt(`Graph.${t}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const h=n._nodes.get(s),l=n._nodes.get(o);if(!h)throw new at(`Graph.${t}: source node "${s}" not found.`);if(!l)throw new at(`Graph.${t}: target node "${o}" not found.`);const c={key:null,undirected:i,source:s,target:o,attributes:a};if(e)r=n._edgeKeyGenerator();else if(r=""+r,n._edges.has(r))throw new Tt(`Graph.${t}: the "${r}" edge already exists in the graph.`);if(!n.multi&&(i?typeof h.undirected[o]<"u":typeof h.out[o]<"u"))throw new Tt(`Graph.${t}: an edge linking "${s}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const u=new _r(i,r,h,l,a);n._edges.set(r,u);const f=s===o;return i?(h.undirectedDegree++,l.undirectedDegree++,f&&(h.undirectedLoops++,n._undirectedSelfLoopCount++)):(h.outDegree++,l.inDegree++,f&&(h.directedLoops++,n._directedSelfLoopCount++)),n.multi?u.attachMulti():u.attach(),i?n._undirectedSize++:n._directedSize++,c.key=r,n.emit("edgeAdded",c),r}function n1(n,t,e,i,r,s,o,a,h){if(!i&&n.type==="undirected")throw new Tt(`Graph.${t}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(i&&n.type==="directed")throw new Tt(`Graph.${t}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(a){if(h){if(typeof a!="function")throw new dt(`Graph.${t}: invalid updater function. Expecting a function but got "${a}"`)}else if(!Ce(a))throw new dt(`Graph.${t}: invalid attributes. Expecting an object but got "${a}"`)}s=""+s,o=""+o;let l;if(h&&(l=a,a=void 0),!n.allowSelfLoops&&s===o)throw new Tt(`Graph.${t}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let c=n._nodes.get(s),u=n._nodes.get(o),f,m;if(!e&&(f=n._edges.get(r),f)){if((f.source.key!==s||f.target.key!==o)&&(!i||f.source.key!==o||f.target.key!==s))throw new Tt(`Graph.${t}: inconsistency detected when attempting to merge the "${r}" edge with "${s}" source & "${o}" target vs. ("${f.source.key}", "${f.target.key}").`);m=f}if(!m&&!n.multi&&c&&(m=i?c.undirected[o]:c.out[o]),m){const b=[m.key,!1,!1,!1];if(h?!l:!a)return b;if(h){const g=m.attributes;m.attributes=l(g),n.emit("edgeAttributesUpdated",{type:"replace",key:m.key,attributes:m.attributes})}else ye(m.attributes,a),n.emit("edgeAttributesUpdated",{type:"merge",key:m.key,attributes:m.attributes,data:a});return b}a=a||{},h&&l&&(a=l(a));const _={key:null,undirected:i,source:s,target:o,attributes:a};if(e)r=n._edgeKeyGenerator();else if(r=""+r,n._edges.has(r))throw new Tt(`Graph.${t}: the "${r}" edge already exists in the graph.`);let y=!1,p=!1;c||(c=fc(n,s,{}),y=!0,s===o&&(u=c,p=!0)),u||(u=fc(n,o,{}),p=!0),f=new _r(i,r,c,u,a),n._edges.set(r,f);const d=s===o;return i?(c.undirectedDegree++,u.undirectedDegree++,d&&(c.undirectedLoops++,n._undirectedSelfLoopCount++)):(c.outDegree++,u.inDegree++,d&&(c.directedLoops++,n._directedSelfLoopCount++)),n.multi?f.attachMulti():f.attach(),i?n._undirectedSize++:n._directedSize++,_.key=r,n.emit("edgeAdded",_),[r,!0,y,p]}function Ki(n,t){n._edges.delete(t.key);const{source:e,target:i,attributes:r}=t,s=t.undirected,o=e===i;s?(e.undirectedDegree--,i.undirectedDegree--,o&&(e.undirectedLoops--,n._undirectedSelfLoopCount--)):(e.outDegree--,i.inDegree--,o&&(e.directedLoops--,n._directedSelfLoopCount--)),n.multi?t.detachMulti():t.detach(),s?n._undirectedSize--:n._directedSize--,n.emit("edgeDropped",{key:t.key,attributes:r,source:e.key,target:i.key,undirected:s})}class re extends HE.EventEmitter{constructor(t){if(super(),t=ye({},t1,t),typeof t.multi!="boolean")throw new dt(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${t.multi}".`);if(!JS.has(t.type))throw new dt(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${t.type}".`);if(typeof t.allowSelfLoops!="boolean")throw new dt(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${t.allowSelfLoops}".`);const e=t.type==="mixed"?Pu:t.type==="directed"?Du:Nu;rn(this,"NodeDataClass",e);const i="geid_"+ZS()+"_";let r=0;const s=()=>{let o;do o=i+r++;while(this._edges.has(o));return o};rn(this,"_attributes",{}),rn(this,"_nodes",new Map),rn(this,"_edges",new Map),rn(this,"_directedSize",0),rn(this,"_undirectedSize",0),rn(this,"_directedSelfLoopCount",0),rn(this,"_undirectedSelfLoopCount",0),rn(this,"_edgeKeyGenerator",s),rn(this,"_options",t),uc.forEach(o=>rn(this,o,this[o])),gn(this,"order",()=>this._nodes.size),gn(this,"size",()=>this._edges.size),gn(this,"directedSize",()=>this._directedSize),gn(this,"undirectedSize",()=>this._undirectedSize),gn(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),gn(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),gn(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),gn(this,"multi",this._options.multi),gn(this,"type",this._options.type),gn(this,"allowSelfLoops",this._options.allowSelfLoops),gn(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(t){return this._nodes.has(""+t)}hasDirectedEdge(t,e){if(this.type==="undirected")return!1;if(arguments.length===1){const i=""+t,r=this._edges.get(i);return!!r&&!r.undirected}else if(arguments.length===2){t=""+t,e=""+e;const i=this._nodes.get(t);return i?i.out.hasOwnProperty(e):!1}throw new dt(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(t,e){if(this.type==="directed")return!1;if(arguments.length===1){const i=""+t,r=this._edges.get(i);return!!r&&r.undirected}else if(arguments.length===2){t=""+t,e=""+e;const i=this._nodes.get(t);return i?i.undirected.hasOwnProperty(e):!1}throw new dt(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(t,e){if(arguments.length===1){const i=""+t;return this._edges.has(i)}else if(arguments.length===2){t=""+t,e=""+e;const i=this._nodes.get(t);return i?typeof i.out<"u"&&i.out.hasOwnProperty(e)||typeof i.undirected<"u"&&i.undirected.hasOwnProperty(e):!1}throw new dt(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(t,e){if(this.type==="undirected")return;if(t=""+t,e=""+e,this.multi)throw new Tt("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const i=this._nodes.get(t);if(!i)throw new at(`Graph.directedEdge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new at(`Graph.directedEdge: could not find the "${e}" target node in the graph.`);const r=i.out&&i.out[e]||void 0;if(r)return r.key}undirectedEdge(t,e){if(this.type==="directed")return;if(t=""+t,e=""+e,this.multi)throw new Tt("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const i=this._nodes.get(t);if(!i)throw new at(`Graph.undirectedEdge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new at(`Graph.undirectedEdge: could not find the "${e}" target node in the graph.`);const r=i.undirected&&i.undirected[e]||void 0;if(r)return r.key}edge(t,e){if(this.multi)throw new Tt("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.edge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new at(`Graph.edge: could not find the "${e}" target node in the graph.`);const r=i.out&&i.out[e]||i.undirected&&i.undirected[e]||void 0;if(r)return r.key}areDirectedNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areDirectedNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in i.in||e in i.out}areOutNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areOutNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in i.out}areInNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areInNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in i.in}areUndirectedNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areUndirectedNeighbors: could not find the "${t}" node in the graph.`);return this.type==="directed"?!1:e in i.undirected}areNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&(e in i.in||e in i.out)||this.type!=="directed"&&e in i.undirected}areInboundNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areInboundNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&e in i.in||this.type!=="directed"&&e in i.undirected}areOutboundNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areOutboundNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&e in i.out||this.type!=="directed"&&e in i.undirected}inDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.inDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree}outDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.outDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.outDegree}directedDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.directedDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree}undirectedDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.undirectedDegree: could not find the "${t}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree}inboundDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.inboundDegree: could not find the "${t}" node in the graph.`);let i=0;return this.type!=="directed"&&(i+=e.undirectedDegree),this.type!=="undirected"&&(i+=e.inDegree),i}outboundDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.outboundDegree: could not find the "${t}" node in the graph.`);let i=0;return this.type!=="directed"&&(i+=e.undirectedDegree),this.type!=="undirected"&&(i+=e.outDegree),i}degree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.degree: could not find the "${t}" node in the graph.`);let i=0;return this.type!=="directed"&&(i+=e.undirectedDegree),this.type!=="undirected"&&(i+=e.inDegree+e.outDegree),i}inDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.inDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree-e.directedLoops}outDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.outDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.outDegree-e.directedLoops}directedDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.directedDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree-e.directedLoops*2}undirectedDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree-e.undirectedLoops*2}inboundDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let i=0,r=0;return this.type!=="directed"&&(i+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(i+=e.inDegree,r+=e.directedLoops),i-r}outboundDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let i=0,r=0;return this.type!=="directed"&&(i+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(i+=e.outDegree,r+=e.directedLoops),i-r}degreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.degreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let i=0,r=0;return this.type!=="directed"&&(i+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(i+=e.inDegree+e.outDegree,r+=e.directedLoops*2),i-r}source(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.source: could not find the "${t}" edge in the graph.`);return e.source.key}target(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.target: could not find the "${t}" edge in the graph.`);return e.target.key}extremities(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.extremities: could not find the "${t}" edge in the graph.`);return[e.source.key,e.target.key]}opposite(t,e){t=""+t,e=""+e;const i=this._edges.get(e);if(!i)throw new at(`Graph.opposite: could not find the "${e}" edge in the graph.`);const r=i.source.key,s=i.target.key;if(t===r)return s;if(t===s)return r;throw new at(`Graph.opposite: the "${t}" node is not attached to the "${e}" edge (${r}, ${s}).`)}hasExtremity(t,e){t=""+t,e=""+e;const i=this._edges.get(t);if(!i)throw new at(`Graph.hasExtremity: could not find the "${t}" edge in the graph.`);return i.source.key===e||i.target.key===e}isUndirected(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.isUndirected: could not find the "${t}" edge in the graph.`);return e.undirected}isDirected(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.isDirected: could not find the "${t}" edge in the graph.`);return!e.undirected}isSelfLoop(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.isSelfLoop: could not find the "${t}" edge in the graph.`);return e.source===e.target}addNode(t,e){return e1(this,t,e).key}mergeNode(t,e){if(e&&!Ce(e))throw new dt(`Graph.mergeNode: invalid attributes. Expecting an object but got "${e}"`);t=""+t,e=e||{};let i=this._nodes.get(t);return i?(e&&(ye(i.attributes,e),this.emit("nodeAttributesUpdated",{type:"merge",key:t,attributes:i.attributes,data:e})),[t,!1]):(i=new this.NodeDataClass(t,e),this._nodes.set(t,i),this.emit("nodeAdded",{key:t,attributes:e}),[t,!0])}updateNode(t,e){if(e&&typeof e!="function")throw new dt(`Graph.updateNode: invalid updater function. Expecting a function but got "${e}"`);t=""+t;let i=this._nodes.get(t);if(i){if(e){const s=i.attributes;i.attributes=e(s),this.emit("nodeAttributesUpdated",{type:"replace",key:t,attributes:i.attributes})}return[t,!1]}const r=e?e({}):{};return i=new this.NodeDataClass(t,r),this._nodes.set(t,i),this.emit("nodeAdded",{key:t,attributes:r}),[t,!0]}dropNode(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.dropNode: could not find the "${t}" node in the graph.`);let i;if(this.type!=="undirected"){for(const r in e.out){i=e.out[r];do Ki(this,i),i=i.next;while(i)}for(const r in e.in){i=e.in[r];do Ki(this,i),i=i.next;while(i)}}if(this.type!=="directed")for(const r in e.undirected){i=e.undirected[r];do Ki(this,i),i=i.next;while(i)}this._nodes.delete(t),this.emit("nodeDropped",{key:t,attributes:e.attributes})}dropEdge(t){let e;if(arguments.length>1){const i=""+arguments[0],r=""+arguments[1];if(e=un(this,i,r,this.type),!e)throw new at(`Graph.dropEdge: could not find the "${i}" -> "${r}" edge in the graph.`)}else if(t=""+t,e=this._edges.get(t),!e)throw new at(`Graph.dropEdge: could not find the "${t}" edge in the graph.`);return Ki(this,e),this}dropDirectedEdge(t,e){if(arguments.length<2)throw new Tt("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new Tt("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");t=""+t,e=""+e;const i=un(this,t,e,"directed");if(!i)throw new at(`Graph.dropDirectedEdge: could not find a "${t}" -> "${e}" edge in the graph.`);return Ki(this,i),this}dropUndirectedEdge(t,e){if(arguments.length<2)throw new Tt("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new Tt("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const i=un(this,t,e,"undirected");if(!i)throw new at(`Graph.dropUndirectedEdge: could not find a "${t}" -> "${e}" edge in the graph.`);return Ki(this,i),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const t=this._nodes.values();let e;for(;e=t.next(),e.done!==!0;)e.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(t){return this._attributes[t]}getAttributes(){return this._attributes}hasAttribute(t){return this._attributes.hasOwnProperty(t)}setAttribute(t,e){return this._attributes[t]=e,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this}updateAttribute(t,e){if(typeof e!="function")throw new dt("Graph.updateAttribute: updater should be a function.");const i=this._attributes[t];return this._attributes[t]=e(i),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this}removeAttribute(t){return delete this._attributes[t],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:t}),this}replaceAttributes(t){if(!Ce(t))throw new dt("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=t,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(t){if(!Ce(t))throw new dt("Graph.mergeAttributes: provided attributes are not a plain object.");return ye(this._attributes,t),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:t}),this}updateAttributes(t){if(typeof t!="function")throw new dt("Graph.updateAttributes: provided updater is not a function.");return this._attributes=t(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(t,e){if(typeof t!="function")throw new dt("Graph.updateEachNodeAttributes: expecting an updater function.");if(e&&!cc(e))throw new dt("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const i=this._nodes.values();let r,s;for(;r=i.next(),r.done!==!0;)s=r.value,s.attributes=t(s.key,s.attributes);this.emit("eachNodeAttributesUpdated",{hints:e||null})}updateEachEdgeAttributes(t,e){if(typeof t!="function")throw new dt("Graph.updateEachEdgeAttributes: expecting an updater function.");if(e&&!cc(e))throw new dt("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const i=this._edges.values();let r,s,o,a;for(;r=i.next(),r.done!==!0;)s=r.value,o=s.source,a=s.target,s.attributes=t(s.key,s.attributes,o.key,a.key,o.attributes,a.attributes,s.undirected);this.emit("eachEdgeAttributesUpdated",{hints:e||null})}forEachAdjacencyEntry(t){if(typeof t!="function")throw new dt("Graph.forEachAdjacencyEntry: expecting a callback.");Fs(!1,!1,!1,this,t)}forEachAdjacencyEntryWithOrphans(t){if(typeof t!="function")throw new dt("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");Fs(!1,!1,!0,this,t)}forEachAssymetricAdjacencyEntry(t){if(typeof t!="function")throw new dt("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");Fs(!1,!0,!1,this,t)}forEachAssymetricAdjacencyEntryWithOrphans(t){if(typeof t!="function")throw new dt("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");Fs(!1,!0,!0,this,t)}nodes(){return typeof Array.from=="function"?Array.from(this._nodes.keys()):Cu(this._nodes.keys(),this._nodes.size)}forEachNode(t){if(typeof t!="function")throw new dt("Graph.forEachNode: expecting a callback.");const e=this._nodes.values();let i,r;for(;i=e.next(),i.done!==!0;)r=i.value,t(r.key,r.attributes)}findNode(t){if(typeof t!="function")throw new dt("Graph.findNode: expecting a callback.");const e=this._nodes.values();let i,r;for(;i=e.next(),i.done!==!0;)if(r=i.value,t(r.key,r.attributes))return r.key}mapNodes(t){if(typeof t!="function")throw new dt("Graph.mapNode: expecting a callback.");const e=this._nodes.values();let i,r;const s=new Array(this.order);let o=0;for(;i=e.next(),i.done!==!0;)r=i.value,s[o++]=t(r.key,r.attributes);return s}someNode(t){if(typeof t!="function")throw new dt("Graph.someNode: expecting a callback.");const e=this._nodes.values();let i,r;for(;i=e.next(),i.done!==!0;)if(r=i.value,t(r.key,r.attributes))return!0;return!1}everyNode(t){if(typeof t!="function")throw new dt("Graph.everyNode: expecting a callback.");const e=this._nodes.values();let i,r;for(;i=e.next(),i.done!==!0;)if(r=i.value,!t(r.key,r.attributes))return!1;return!0}filterNodes(t){if(typeof t!="function")throw new dt("Graph.filterNodes: expecting a callback.");const e=this._nodes.values();let i,r;const s=[];for(;i=e.next(),i.done!==!0;)r=i.value,t(r.key,r.attributes)&&s.push(r.key);return s}reduceNodes(t,e){if(typeof t!="function")throw new dt("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new dt("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let i=e;const r=this._nodes.values();let s,o;for(;s=r.next(),s.done!==!0;)o=s.value,i=t(i,o.key,o.attributes);return i}nodeEntries(){const t=this._nodes.values();return new fn(()=>{const e=t.next();if(e.done)return e;const i=e.value;return{value:{node:i.key,attributes:i.attributes},done:!1}})}export(){const t=new Array(this._nodes.size);let e=0;this._nodes.forEach((r,s)=>{t[e++]=qS(s,r)});const i=new Array(this._edges.size);return e=0,this._edges.forEach((r,s)=>{i[e++]=jS(this.type,s,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:t,edges:i}}import(t,e=!1){if(t instanceof re)return t.forEachNode((h,l)=>{e?this.mergeNode(h,l):this.addNode(h,l)}),t.forEachEdge((h,l,c,u,f,m,_)=>{e?_?this.mergeUndirectedEdgeWithKey(h,c,u,l):this.mergeDirectedEdgeWithKey(h,c,u,l):_?this.addUndirectedEdgeWithKey(h,c,u,l):this.addDirectedEdgeWithKey(h,c,u,l)}),this;if(!Ce(t))throw new dt("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(t.attributes){if(!Ce(t.attributes))throw new dt("Graph.import: invalid attributes. Expecting a plain object.");e?this.mergeAttributes(t.attributes):this.replaceAttributes(t.attributes)}let i,r,s,o,a;if(t.nodes){if(s=t.nodes,!Array.isArray(s))throw new dt("Graph.import: invalid nodes. Expecting an array.");for(i=0,r=s.length;i<r;i++){o=s[i],YS(o);const{key:h,attributes:l}=o;e?this.mergeNode(h,l):this.addNode(h,l)}}if(t.edges){let h=!1;if(this.type==="undirected"&&(h=!0),s=t.edges,!Array.isArray(s))throw new dt("Graph.import: invalid edges. Expecting an array.");for(i=0,r=s.length;i<r;i++){a=s[i],KS(a);const{source:l,target:c,attributes:u,undirected:f=h}=a;let m;"key"in a?(m=e?f?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:f?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,m.call(this,a.key,l,c,u)):(m=e?f?this.mergeUndirectedEdge:this.mergeDirectedEdge:f?this.addUndirectedEdge:this.addDirectedEdge,m.call(this,l,c,u))}}return this}nullCopy(t){const e=new re(ye({},this._options,t));return e.replaceAttributes(ye({},this.getAttributes())),e}emptyCopy(t){const e=this.nullCopy(t);return this._nodes.forEach((i,r)=>{const s=ye({},i.attributes);i=new e.NodeDataClass(r,s),e._nodes.set(r,i)}),e}copy(t){if(t=t||{},typeof t.type=="string"&&t.type!==this.type&&t.type!=="mixed")throw new Tt(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${t.type}" because this would mean losing information about the current graph.`);if(typeof t.multi=="boolean"&&t.multi!==this.multi&&t.multi!==!0)throw new Tt("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof t.allowSelfLoops=="boolean"&&t.allowSelfLoops!==this.allowSelfLoops&&t.allowSelfLoops!==!0)throw new Tt("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const e=this.emptyCopy(t),i=this._edges.values();let r,s;for(;r=i.next(),r.done!==!0;)s=r.value,Gu(e,"copy",!1,s.undirected,s.key,s.source.key,s.target.key,ye({},s.attributes));return e}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const t={};this._nodes.forEach((s,o)=>{t[o]=s.attributes});const e={},i={};this._edges.forEach((s,o)=>{const a=s.undirected?"--":"->";let h="",l=s.source.key,c=s.target.key,u;s.undirected&&l>c&&(u=l,l=c,c=u);const f=`(${l})${a}(${c})`;o.startsWith("geid_")?this.multi&&(typeof i[f]>"u"?i[f]=0:i[f]++,h+=`${i[f]}. `):h+=`[${o}]: `,h+=f,e[h]=s.attributes});const r={};for(const s in this)this.hasOwnProperty(s)&&!uc.has(s)&&typeof this[s]!="function"&&typeof s!="symbol"&&(r[s]=this[s]);return r.attributes=this._attributes,r.nodes=t,r.edges=e,rn(r,"constructor",this.constructor),r}}typeof Symbol<"u"&&(re.prototype[Symbol.for("nodejs.util.inspect.custom")]=re.prototype.inspect);QS.forEach(n=>{["add","merge","update"].forEach(t=>{const e=n.name(t),i=t==="add"?Gu:n1;n.generateKey?re.prototype[e]=function(r,s,o){return i(this,e,!0,(n.type||this.type)==="undirected",null,r,s,o,t==="update")}:re.prototype[e]=function(r,s,o,a){return i(this,e,!1,(n.type||this.type)==="undirected",r,s,o,a,t==="update")}})});uS(re);ES(re);GS(re);XS(re);class Bu extends re{constructor(t){const e=ye({type:"directed"},t);if("multi"in e&&e.multi!==!1)throw new dt("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="directed")throw new dt('DirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}class zu extends re{constructor(t){const e=ye({type:"undirected"},t);if("multi"in e&&e.multi!==!1)throw new dt("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="undirected")throw new dt('UndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}class ku extends re{constructor(t){const e=ye({multi:!0},t);if("multi"in e&&e.multi!==!0)throw new dt("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(e)}}class Hu extends re{constructor(t){const e=ye({type:"directed",multi:!0},t);if("multi"in e&&e.multi!==!0)throw new dt("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="directed")throw new dt('MultiDirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}class Vu extends re{constructor(t){const e=ye({type:"undirected",multi:!0},t);if("multi"in e&&e.multi!==!0)throw new dt("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="undirected")throw new dt('MultiUndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}function vr(n){n.from=function(t,e){const i=ye({},t.options,e),r=new n(i);return r.import(t),r}}vr(re);vr(Bu);vr(zu);vr(ku);vr(Hu);vr(Vu);re.Graph=re;re.DirectedGraph=Bu;re.UndirectedGraph=zu;re.MultiGraph=ku;re.MultiDirectedGraph=Hu;re.MultiUndirectedGraph=Vu;re.InvalidArgumentsGraphError=dt;re.NotFoundGraphError=at;re.UsageGraphError=Tt;new Ue;new Ue;let ao=new Ue,oo=new Ue,ho=new Ue,lo=new Ue;const En={graticuleColor:"#2f2f2f0b",ambientLightColor:"#404040",directionalLightColor:"#ffffff",backgroundColor:"#000000",polygonColor:"#FF1493",pyramidColorFM:"#FFFF00",pyramidColorCellular:"#ffffff",lowestElevationColor:"#0000ff",middleElevationColor:"#00ff00",highestElevationColor:"#ff0000",mstFmColor:"#FFFF00",mstCellColor:"#f3f0ef"},i1="+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";Xe.defs("EPSG:32118",i1);function rs(n,t){if(!Number.isFinite(n)||!Number.isFinite(t))throw new Error(`Invalid coordinates: longitude (${n}), latitude (${t})`);return Xe("EPSG:32118").forward([n,t])}let Wu=600;const dc=["←","↖","↑","↗","→","↘","↓","↙"];let co=0,pc=0;const r1=75,s1=new ca({color:16711680}),$u=new qe,kr=new zo($u,s1);function Xu(n){if(n-pc>r1){pc=n;const t=document.getElementById("progress-bar");t.textContent=dc[co],co=(co+1)%dc.length}requestAnimationFrame(Xu)}requestAnimationFrame(Xu);let qu=document.getElementById("progress-bar");qu.style.width="0%";const mc=[{progress:100,duration:Wu}];let uo=0,Gs=null,fo=0;function Co(n){Gs===null&&(Gs=n);const t=mc[uo],e=n-Gs;fo+(t.progress-fo)*(e/t.duration),e<t.duration?requestAnimationFrame(Co):(Gs=n,fo=t.progress,uo++,uo<mc.length?requestAnimationFrame(Co):setTimeout(()=>{qu.style.display="none";const i=document.getElementById("three-container");i.style.visibility="visible"},500))}let Qe,$t,ni,ie,Lo=!1,Hr,Lr=new B_,ia=new At,a1=[];function o1(){Qe=new C_,$t=new hn(75,window.innerWidth/window.innerHeight,.1,1e3),$t.up.set(0,0,1),$t.position.z=20,ni=new Vc({antialias:!0}),ni.setSize(window.innerWidth,window.innerHeight),document.getElementById("three-container").appendChild(ni.domElement),$u.setAttribute("position",new cn(new Float32Array(6),3)),Qe.add(kr),kr.scale.set(1,1,1),kr.material.linewidth=2,ie=new H_($t,ni.domElement),ie.screenSpacePanning=!0,ie.enableRotate=!1,ie.enableDamping=!0,ie.dampingFactor=.05,ie.minPolarAngle=0,ie.maxPolarAngle=Math.PI/2-.05,ie.maxDistance=5,ie.minDistance=.2;const n=new qc;$t.add(n);let t=new U_(En.ambientLightColor);Qe.add(t);let e=new I_(En.directionalLightColor,.5);e.position.set(0,1,0),Qe.add(e),ni.setClearColor(En.backgroundColor),window.addEventListener("resize",h1,!1),eh()}function h1(){$t&&ni&&($t.aspect=window.innerWidth/window.innerHeight,$t.updateProjectionMatrix(),ni.setSize(window.innerWidth,window.innerHeight),eh())}function eh(){if($t){const r=(window.innerWidth-600)/600,s=90+(60-90)*Math.max(0,Math.min(1,r));$t.fov=s,$t.updateProjectionMatrix()}}eh();function ju(){Lr.setFromCamera(ia,$t);const n=new U;Lr.ray.direction.normalize();const t=Lr.ray.origin.clone(),e=t.clone().add(n.clone().multiplyScalar(1e3)),i=kr.geometry.attributes.position.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=e.y,i[5]=e.z,kr.geometry.attributes.position.needsUpdate=!0,Lr.setFromCamera(ia,$t);const r=Lr.intersectObjects(a1,!0);if(r.length>0){let s=r[0].object;s.name.startsWith("polygon-")&&(s.material.opacity=1)}}function Yu(){requestAnimationFrame(Yu),ju(),ie.update(),ni.render(Qe,$t)}document.addEventListener("DOMContentLoaded",n=>{const t=document.getElementById("start-button"),e=document.getElementById("progress-bar"),i=document.getElementById("three-container"),r=document.getElementById("info-button");e.style.visibility="hidden",r.style.visibility="hidden";function s(){y1(),o1(),nh()}function o(){i.style.pointerEvents="auto",i.style.opacity="1",r.style.pointerEvents="auto",r.style.opacity="1",e.style.visibility="visible",requestAnimationFrame(Co),t.addEventListener("click",()=>{o()}),t.remove(),setTimeout(()=>{document.getElementById("progress-bar"),r.style.visibility="visible"},Wu),Yu(),_a(!1),document.addEventListener("keydown",Zu,!1)}t.addEventListener("click",o),s()});function nh(){const n=document.getElementById("info-container"),t=document.getElementById("info-button");n.style.opacity!=="0"&&(n.style.opacity="0",n.style.pointerEvents="none",t.style.display="block")}function Ku(){const n=document.getElementById("info-container"),t=document.getElementById("info-button");n.style.opacity="1",n.style.visibility="visible",n.style.pointerEvents="auto",t.style.display="none"}document.getElementById("info-container").addEventListener("transitionend",function(n){n.propertyName==="opacity"&&getComputedStyle(this).opacity==0&&(this.style.visibility="hidden")});Ku();document.addEventListener("mousedown",n=>{n.target.id!=="camera-lock"&&n.target.htmlFor!=="camera-lock"&&nh()});document.addEventListener("keypress",nh);document.getElementById("info-button").addEventListener("click",function(){Ku()});let Pr;document.addEventListener("click",function n(){Pr||(Pr=new qc,$t.add(Pr),Pr.context.state==="suspended"&&Pr.context.resume()),document.removeEventListener("click",n)});function l1(n){ia.x=n.clientX/window.innerWidth*2-1,ia.y=-(n.clientY/window.innerHeight)*2+1,ju()}window.addEventListener("mousemove",l1,!1);const Qn=.05;function Zu(n){if(n.key==="l"||n.key==="L"){_a(!Lo),n.preventDefault();return}if(Lo){if(n.key==="r"||n.key==="f")return;n.preventDefault();const t=.025,e=new U,i=new U(1,0,0);switch(console.log(`Key pressed: ${n.key}`),n.key){case"w":$t.position.y+=Qn,ie.target.y+=Qn;break;case"s":$t.position.y-=Qn,ie.target.y-=Qn;break;case"a":$t.position.x-=Qn,ie.target.x-=Qn;break;case"d":$t.position.x+=Qn,ie.target.x+=Qn;break;case"f":case"r":const r=(n.key==="f"?1:-1)*t;e.copy($t.position).sub(ie.target);const o=e.angleTo(new U(0,0,1))+r;if(o>=0&&o<=Math.PI/2){const a=new $n().setFromAxisAngle(i,r);e.applyQuaternion(a),$t.position.copy(ie.target).add(e),$t.lookAt(ie.target)}break}ie.update()}}document.addEventListener("keydown",Zu,!1);function gc(n){let t=1/0,e=-1/0,i=1/0,r=-1/0;const s=o=>{o.forEach(a=>{if(Array.isArray(a[0]))s(a);else{const[h,l]=a,[c,u]=rs(h,l);t=Math.min(t,c),e=Math.max(e,c),i=Math.min(i,u),r=Math.max(r,u)}})};return n.features.forEach(o=>{s(o.geometry.coordinates)}),{min:new U(t-2,i-2,-1/0),max:new U(e+2,r+2,1/0)}}function c1(n,t){n.addEventListener("change",()=>{$t.position.x=Math.max(t.min.x,Math.min(t.max.x,$t.position.x)),$t.position.y=Math.max(t.min.y+.25,Math.min(t.max.y,$t.position.y)),$t.position.z=Math.max(t.min.z,Math.min(t.max.z,$t.position.z)),n.target.x=Math.max(t.min.x,Math.min(t.max.x,n.target.x)),n.target.y=Math.max(t.min.y,Math.min(t.max.y,n.target.y)),n.target.z=Math.max(t.min.z,Math.min(t.max.z,n.target.z))})}function ih(n){return new U((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,0)}function Ju(n){return new U(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)}function Qu(n){ih(n);const t=Ju(n),e=Math.max(t.x,t.y),i=$t.fov*(Math.PI/100);let r=Math.abs(e/2/Math.tan(i/2));return r*=1.1,r}function _a(n){if(Lo=n,!(!ie||!$t))if(n){if(!Hr){console.error("globalBoundingBox is not set");return}const t=ih(Hr),e=Qu(Hr);$t.position.set(t.x,t.y,e),$t.lookAt(t.x,t.y,0);const i=new U(0,1,0);$t.up.copy(i),$t.up.set(0,1,0),$t.lookAt(t),ie.enablePan=!0,ie.enableRotate=!1,ie.update()}else $t.up.set(0,0,1),ie.enableRotate=!0,ie.update()}_a(!1);document.getElementById("camera-lock").addEventListener("change",n=>{_a(n.target.checked)});document.getElementById("camera-lock").addEventListener("click",n=>{n.stopPropagation()});const Yr=4e-4;function u1(n,t,e){const i=[{stop:0,color:new Kt(En.lowestElevationColor)},{stop:.5,color:new Kt(En.middleElevationColor)},{stop:1,color:new Kt(En.highestElevationColor)}],r=(n-t)/(e-t);let s=i[0],o=i[i.length-1];for(let h=0;h<i.length-1;h++)if(r>=i[h].stop&&r<=i[h+1].stop){s=i[h],o=i[h+1];break}return s.color.clone().lerp(o.color,(r-s.stop)/(o.stop-s.stop))}let Po=1/0;function f1(n){ho=new Ue;const t=n.features.map(r=>r.properties.Contour),e=Math.min(...t);Po=Math.min(Po,e);const i=Math.max(...t);n.features.forEach((r,s)=>{const o=r.properties.Contour,a=r.geometry.coordinates,h=u1(o,e,i);let l=new ca({color:h});const c=(u,f)=>{let m=[];if(u.forEach(_=>{if(!Array.isArray(_)||_.length!==2||_.some(d=>isNaN(d))){console.error(`Feature ${s} has invalid coordinates`,_);return}const[y,p]=_;try{const[d,b]=rs(y,p),g=f*Yr;m.push(d,b,g)}catch(d){console.error(`Feature ${s} error in toStatePlane:`,d.message)}}),m.length>0){const _=new qe;_.setAttribute("position",new tn(m,3));const y=new zo(_,l);ho.add(y)}Qe.add(ho)};r.geometry.type==="LineString"?c(a,o):r.geometry.type==="MultiLineString"?a.forEach(u=>{c(u,o)}):console.error(`Unsupported geometry type: ${r.geometry.type}`)})}function d1(n,t=10){lo=new Ue;for(let e=0;e<n.features.length;e+=t){const i=n.features[e],r=new Zr({color:En.polygonColor,transparent:!0,wireframe:!0,dithering:!0,opacity:.8,side:Vn});try{const s=i.geometry.coordinates[0],o=[];let a=new U(0,0,0);s.forEach(u=>{const[f,m]=rs(u[0],u[1]),_=Po*Yr;o.push(new U(f,m,_)),a.add(new U(f,m,_))}),a.divideScalar(s.length),o.unshift(a);const h=new qe,l=[];for(let u=1;u<=s.length;u++)l.push(a.x,a.y,a.z),l.push(o[u%s.length].x,o[u%s.length].y,o[u%s.length].z),l.push(o[(u+1)%s.length].x,o[(u+1)%s.length].y,o[(u+1)%s.length].z);h.setAttribute("position",new tn(l,3)),h.computeVertexNormals();const c=new Mn(h,r);c.name="polygon-"+e,Qe.add(c),lo.add(c)}catch(s){console.error(`Error processing feature at index ${e}:`,s)}}Qe.add(lo)}function p1(n){let t=new Ue,e=new Ue;const i=.003,r=.015;let s=new Zr({color:En.pyramidColorFM,wireframe:!0,transparent:!0,opacity:.5});const o=[];if(n.features.forEach(a=>{if(a.geometry.type==="Point"){const[h,l]=a.geometry.coordinates,c=a.properties.Elevation;try{const[u,f]=rs(h,l),m=c*Yr,_=new ua(i,r,5);_.rotateX(Math.PI/2);const y=new Mn(_,s);y.position.set(u,f,m),t.add(y),o.push(new U(u,f,m))}catch(u){console.error("Error projecting point:",u.message)}}else console.error(`Unsupported geometry type for points: ${a.geometry.type}`)}),Qe.add(t),o.length>0){const a=tf(o);ef(a,En.mstFmColor,e)}Qe.add(e),console.log("adding mstlines")}function m1(n,t,e){ao=new Ue,oo=new Ue;const i=.003,r=.015;let s=new Zr({color:En.pyramidColorCellular,wireframe:!0,transparent:!0,opacity:.4});const o=[];if(n.features.forEach((a,h)=>{if(a.geometry.type==="Point"){const[l,c]=a.geometry.coordinates,u=a.properties.Elevation;try{const[f,m]=rs(l,c),_=u*Yr,y=new ua(i,r,4);y.rotateX(Math.PI/2);const p=new Mn(y,s);p.position.set(f,m,_),ao.add(p);const d=a.properties.Callsign||`Tower ${h}`,b=_1(l,c,d,4,1e-4),g=v1(` ${d} `,{fontsize:24,strokeColor:"rgba(255, 255, 255, 0.9)",strokeWidth:1}),v=r*Yr;g.position.set(f,m,_+v+b+.009),g.scale.set(.05,.025,1),Qe.add(g),o.push(new U(f,m,_))}catch(f){console.error("Error projecting point:",f.message)}}else console.error(`Unsupported geometry type for points: ${a.geometry.type}`)}),o.length>0){const a=tf(o);ef(a,En.mstCellColor,oo)}Qe.add(ao),Qe.add(oo)}function tf(n){const t=n.length,e=new Array(t),i=new Array(t).fill(!1),r=new Array(t).fill(1/0);r[0]=0;const s=new Array(t).fill(-1);for(let o=0;o<t-1;o++){let a=-1;for(let h=0;h<t;h++)!i[h]&&(a===-1||r[h]<r[a])&&(a=h);i[a]=!0;for(let h=0;h<t;h++){const l=n[a].distanceTo(n[h]);!i[h]&&l<r[h]&&(s[h]=a,r[h]=l)}}for(let o=1;o<t;o++)e[o-1]={from:n[s[o]],to:n[o]};return e}function ef(n,t,e){n.forEach(i=>{const r=new ca({color:t}),s=new qe().setFromPoints([i.from,i.to]),o=new zo(s,r);e.add(o)})}const Dr={};function g1(n,t,e){return`${n.toFixed(4)}:${t.toFixed(4)}:${e}`}function _1(n,t,e,i=4,r=1e-4){const s=g1(n,t,e);if(!Dr[s])Dr[s]={count:1,labelContent:e};else{if(Dr[s].labelContent===e)return 0;Dr[s].count+=1}return(Dr[s].count-1)*r}function v1(n,t){t===void 0&&(t={});var e=t.hasOwnProperty("fontface")?t.fontface:"Arial",i=t.hasOwnProperty("fontsize")?t.fontsize:18,r=t.hasOwnProperty("strokeColor")?t.strokeColor:"rgba(0, 0, 0, 0.8)",s=document.createElement("canvas"),o=s.getContext("2d"),a=window.devicePixelRatio;s.width=256*a,s.height=128*a,o.scale(a,a),o.font="Bold "+i+"px "+e,o.fillStyle="rgba(255, 255, 255, 0.0)",o.strokeStyle=r,o.lineWidth=t.hasOwnProperty("strokeWidth")?t.strokeWidth:1,o.textAlign="center",o.textBaseline="middle";var h=s.width/(2*a),l=s.height/(2*a);o.strokeText(n,h,l),o.fillText(n,h,l);var c=new $e(s);c.needsUpdate=!0;var u=new Wc({map:c,transparent:!0,depthTest:!1}),f=new P_(u);return f.scale.set(.5*a,.25*a,1),f}function y1(){fetch("data/cont49l010a_Clip_SimplifyLin_simplified.geojson").then(n=>n.json()).then(n=>{f1(n),fetch("data/Cellular_Tower_HIFLD_NYSclip_20231101_simplified.geojson").then(s=>s.json()).then(s=>{m1(s)}).catch(s=>{console.error("Error loading points GeoJSON:",s)}),fetch("data/FM_contours_NYS_clip_20231101.geojson").then(s=>s.json()).then(s=>{d1(s)}).catch(s=>{console.error("Error loading polygon GeoJSON:",s)}),fetch("data/FM_TransTowers_PairwiseClip_NYS_20231101_simplified.geojson").then(s=>s.json()).then(s=>{p1(s)}).catch(s=>{console.error("Error loading points GeoJSON:",s)});const t=gc(n);Hr=gc(n);const e=ih(t),i=Ju(t);Math.max(i.x,i.y),$t.fov*(Math.PI/180);const r=Qu(Hr);$t.position.set(e.x,e.y,r),ie.target.set(e.x,e.y,0),c1(ie,t),ie.update()}).catch(n=>{console.error("Error loading GeoJSON:",n)})}});export default M1();
