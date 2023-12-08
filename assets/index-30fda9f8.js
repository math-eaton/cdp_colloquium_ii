var Vf=(n,t)=>()=>(t||n((t={exports:{}}).exports,t),t.exports);var Hb=Vf(ye=>{(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const rh="158",qn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ci={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Wf=0,zh=1,$f=2,Kc=1,Xf=2,Xn=3,Tn=0,Je=1,Yn=2,mi=0,gr=1,kh=2,Hh=3,Vh=4,qf=5,Pi=100,Yf=101,jf=102,Wh=103,$h=104,Kf=200,Zf=201,Jf=202,Qf=203,Fo=204,Bo=205,td=206,ed=207,nd=208,id=209,rd=210,sd=211,ad=212,od=213,hd=214,ld=0,cd=1,ud=2,fa=3,fd=4,dd=5,pd=6,md=7,Zc=0,gd=1,_d=2,gi=0,vd=1,yd=2,Md=3,xd=4,Sd=5,Jc=300,xr=301,Sr=302,Go=303,zo=304,Aa=306,ko=1e3,En=1001,Ho=1002,Ye=1003,Xh=1004,$a=1005,cn=1006,Ed=1007,os=1008,_i=1009,bd=1010,wd=1011,sh=1012,Qc=1013,di=1014,pi=1015,hs=1016,tu=1017,eu=1018,Ni=1020,Ad=1021,bn=1023,Td=1024,Cd=1025,Ii=1026,Er=1027,Rd=1028,nu=1029,Ld=1030,iu=1031,ru=1033,Xa=33776,qa=33777,Ya=33778,ja=33779,qh=35840,Yh=35841,jh=35842,Kh=35843,Pd=36196,Zh=37492,Jh=37496,Qh=37808,tl=37809,el=37810,nl=37811,il=37812,rl=37813,sl=37814,al=37815,ol=37816,hl=37817,ll=37818,cl=37819,ul=37820,fl=37821,Ka=36492,dl=36494,pl=36495,Dd=36283,ml=36284,gl=36285,_l=36286,su=3e3,Ui=3001,Nd=3200,Id=3201,Ud=0,Od=1,pn="",De="srgb",ti="srgb-linear",ah="display-p3",Ta="display-p3-linear",da="linear",oe="srgb",pa="rec709",ma="p3",ki=7680,vl=519,Fd=512,Bd=513,Gd=514,zd=515,kd=516,Hd=517,Vd=518,Wd=519,Vo=35044,yl="300 es",Wo=1035,jn=2e3,ga=2001;class zi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ue=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ml=1234567;const Qr=Math.PI/180,ls=180/Math.PI;function Zn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ue[n&255]+Ue[n>>8&255]+Ue[n>>16&255]+Ue[n>>24&255]+"-"+Ue[t&255]+Ue[t>>8&255]+"-"+Ue[t>>16&15|64]+Ue[t>>24&255]+"-"+Ue[e&63|128]+Ue[e>>8&255]+"-"+Ue[e>>16&255]+Ue[e>>24&255]+Ue[i&255]+Ue[i>>8&255]+Ue[i>>16&255]+Ue[i>>24&255]).toLowerCase()}function Ce(n,t,e){return Math.max(t,Math.min(e,n))}function oh(n,t){return(n%t+t)%t}function $d(n,t,e,i,r){return i+(n-t)*(r-i)/(e-t)}function Xd(n,t,e){return n!==t?(e-n)/(t-n):0}function ts(n,t,e){return(1-e)*n+e*t}function qd(n,t,e,i){return ts(n,t,1-Math.exp(-e*i))}function Yd(n,t=1){return t-Math.abs(oh(n,t*2)-t)}function jd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function Kd(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function Zd(n,t){return n+Math.floor(Math.random()*(t-n+1))}function Jd(n,t){return n+Math.random()*(t-n)}function Qd(n){return n*(.5-Math.random())}function tp(n){n!==void 0&&(Ml=n);let t=Ml+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function ep(n){return n*Qr}function np(n){return n*ls}function $o(n){return(n&n-1)===0&&n!==0}function ip(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function _a(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function rp(n,t,e,i,r){const s=Math.cos,o=Math.sin,a=s(e/2),h=o(e/2),l=s((t+i)/2),u=o((t+i)/2),c=s((t-i)/2),f=o((t-i)/2),d=s((i-t)/2),g=o((i-t)/2);switch(r){case"XYX":n.set(a*u,h*c,h*f,a*l);break;case"YZY":n.set(h*f,a*u,h*c,a*l);break;case"ZXZ":n.set(h*c,h*f,a*u,a*l);break;case"XZX":n.set(a*u,h*g,h*d,a*l);break;case"YXY":n.set(h*d,a*u,h*g,a*l);break;case"ZYZ":n.set(h*g,h*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Pn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const sp={DEG2RAD:Qr,RAD2DEG:ls,generateUUID:Zn,clamp:Ce,euclideanModulo:oh,mapLinear:$d,inverseLerp:Xd,lerp:ts,damp:qd,pingpong:Yd,smoothstep:jd,smootherstep:Kd,randInt:Zd,randFloat:Jd,randFloatSpread:Qd,seededRandom:tp,degToRad:ep,radToDeg:np,isPowerOfTwo:$o,ceilPowerOfTwo:ip,floorPowerOfTwo:_a,setQuaternionFromProperEuler:rp,normalize:ee,denormalize:Pn};class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6],this.y=r[1]*e+r[4]*i+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*i-o*r+t.x,this.y=s*r+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,i,r,s,o,a,h,l){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,h,l)}set(t,e,i,r,s,o,a,h,l){const u=this.elements;return u[0]=t,u[1]=r,u[2]=a,u[3]=e,u[4]=s,u[5]=h,u[6]=i,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[3],h=i[6],l=i[1],u=i[4],c=i[7],f=i[2],d=i[5],g=i[8],v=r[0],p=r[3],m=r[6],E=r[1],_=r[4],y=r[7],x=r[2],T=r[5],w=r[8];return s[0]=o*v+a*E+h*x,s[3]=o*p+a*_+h*T,s[6]=o*m+a*y+h*w,s[1]=l*v+u*E+c*x,s[4]=l*p+u*_+c*T,s[7]=l*m+u*y+c*w,s[2]=f*v+d*E+g*x,s[5]=f*p+d*_+g*T,s[8]=f*m+d*y+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-i*s*u+i*a*h+r*s*l-r*o*h}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8],c=u*o-a*l,f=a*h-u*s,d=l*s-o*h,g=e*c+i*f+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=c*v,t[1]=(r*l-u*i)*v,t[2]=(a*i-r*o)*v,t[3]=f*v,t[4]=(u*e-r*h)*v,t[5]=(r*s-a*e)*v,t[6]=d*v,t[7]=(i*h-l*e)*v,t[8]=(o*e-i*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,r,s,o,a){const h=Math.cos(s),l=Math.sin(s);return this.set(i*h,i*l,-i*(h*o+l*a)+o+t,-r*l,r*h,-r*(-l*o+h*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<9;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Xt;function au(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function cs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ap(){const n=cs("canvas");return n.style.display="block",n}const xl={};function es(n){n in xl||(xl[n]=!0,console.warn(n))}const Sl=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),El=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),bs={[ti]:{transfer:da,primaries:pa,toReference:n=>n,fromReference:n=>n},[De]:{transfer:oe,primaries:pa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[Ta]:{transfer:da,primaries:ma,toReference:n=>n.applyMatrix3(El),fromReference:n=>n.applyMatrix3(Sl)},[ah]:{transfer:oe,primaries:ma,toReference:n=>n.convertSRGBToLinear().applyMatrix3(El),fromReference:n=>n.applyMatrix3(Sl).convertLinearToSRGB()}},op=new Set([ti,Ta]),ne={enabled:!0,_workingColorSpace:ti,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!op.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;const i=bs[t].toReference,r=bs[e].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return bs[n].primaries},getTransfer:function(n){return n===pn?da:bs[n].transfer}};function _r(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ja(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hi;class ou{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Hi===void 0&&(Hi=cs("canvas")),Hi.width=t.width,Hi.height=t.height;const i=Hi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Hi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=cs("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const r=i.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_r(s[o]/255)*255;return i.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_r(e[i]/255)*255):e[i]=_r(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hp=0;class hu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Zn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Qa(r[o].image)):s.push(Qa(r[o]))}else s=Qa(r);i.url=s}return e||(t.images[this.uuid]=i),i}}function Qa(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?ou.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;class Ke extends zi{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,i=En,r=En,s=cn,o=os,a=bn,h=_i,l=Ke.DEFAULT_ANISOTROPY,u=pn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Zn(),this.name="",this.source=new hu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=h,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===Ui?De:pn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Jc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ko:t.x=t.x-Math.floor(t.x);break;case En:t.x=t.x<0?0:1;break;case Ho:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ko:t.y=t.y-Math.floor(t.y);break;case En:t.y=t.y<0?0:1;break;case Ho:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===De?Ui:su}set encoding(t){es("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Ui?De:pn}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=Jc;Ke.DEFAULT_ANISOTROPY=1;class Le{constructor(t=0,e=0,i=0,r=1){Le.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,r){return this.x=t,this.y=e,this.z=i,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,r,s;const h=t.elements,l=h[0],u=h[4],c=h[8],f=h[1],d=h[5],g=h[9],v=h[2],p=h[6],m=h[10];if(Math.abs(u-f)<.01&&Math.abs(c-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(c+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const _=(l+1)/2,y=(d+1)/2,x=(m+1)/2,T=(u+f)/4,w=(c+v)/4,A=(g+p)/4;return _>y&&_>x?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=w/i):y>x?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=A/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=w/s,r=A/s),this.set(i,r,s,e),this}let E=Math.sqrt((p-g)*(p-g)+(c-v)*(c-v)+(f-u)*(f-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(c-v)/E,this.z=(f-u)/E,this.w=Math.acos((l+d+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cp extends zi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Le(0,0,t,e),this.scissorTest=!1,this.viewport=new Le(0,0,t,e);const r={width:t,height:e,depth:1};i.encoding!==void 0&&(es("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Ui?De:pn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:cn,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new Ke(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends cp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class lu extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class up extends Ke{constructor(t=null,e=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:r},this.magFilter=Ye,this.minFilter=Ye,this.wrapR=En,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class In{constructor(t=0,e=0,i=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=r}static slerpFlat(t,e,i,r,s,o,a){let h=i[r+0],l=i[r+1],u=i[r+2],c=i[r+3];const f=s[o+0],d=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=h,t[e+1]=l,t[e+2]=u,t[e+3]=c;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=v;return}if(c!==v||h!==f||l!==d||u!==g){let p=1-a;const m=h*f+l*d+u*g+c*v,E=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const x=Math.sqrt(_),T=Math.atan2(x,m*E);p=Math.sin(p*T)/x,a=Math.sin(a*T)/x}const y=a*E;if(h=h*p+f*y,l=l*p+d*y,u=u*p+g*y,c=c*p+v*y,p===1-a){const x=1/Math.sqrt(h*h+l*l+u*u+c*c);h*=x,l*=x,u*=x,c*=x}}t[e]=h,t[e+1]=l,t[e+2]=u,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,r,s,o){const a=i[r],h=i[r+1],l=i[r+2],u=i[r+3],c=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return t[e]=a*g+u*c+h*d-l*f,t[e+1]=h*g+u*f+l*c-a*d,t[e+2]=l*g+u*d+a*f-h*c,t[e+3]=u*g-a*c-h*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,r){return this._x=t,this._y=e,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const i=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,h=Math.sin,l=a(i/2),u=a(r/2),c=a(s/2),f=h(i/2),d=h(r/2),g=h(s/2);switch(o){case"XYZ":this._x=f*u*c+l*d*g,this._y=l*d*c-f*u*g,this._z=l*u*g+f*d*c,this._w=l*u*c-f*d*g;break;case"YXZ":this._x=f*u*c+l*d*g,this._y=l*d*c-f*u*g,this._z=l*u*g-f*d*c,this._w=l*u*c+f*d*g;break;case"ZXY":this._x=f*u*c-l*d*g,this._y=l*d*c+f*u*g,this._z=l*u*g+f*d*c,this._w=l*u*c-f*d*g;break;case"ZYX":this._x=f*u*c-l*d*g,this._y=l*d*c+f*u*g,this._z=l*u*g-f*d*c,this._w=l*u*c+f*d*g;break;case"YZX":this._x=f*u*c+l*d*g,this._y=l*d*c+f*u*g,this._z=l*u*g-f*d*c,this._w=l*u*c-f*d*g;break;case"XZY":this._x=f*u*c-l*d*g,this._y=l*d*c-f*u*g,this._z=l*u*g+f*d*c,this._w=l*u*c+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,r=Math.sin(i);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],r=e[4],s=e[8],o=e[1],a=e[5],h=e[9],l=e[2],u=e[6],c=e[10],f=i+a+c;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-h)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(i>a&&i>c){const d=2*Math.sqrt(1+i-a-c);this._w=(u-h)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>c){const d=2*Math.sqrt(1+a-i-c);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(h+u)/d}else{const d=2*Math.sqrt(1+c-i-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(h+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ce(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const r=Math.min(1,e/i);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,r=t._y,s=t._z,o=t._w,a=e._x,h=e._y,l=e._z,u=e._w;return this._x=i*u+o*a+r*l-s*h,this._y=r*u+o*h+s*a-i*l,this._z=s*u+o*l+i*h-r*a,this._w=o*u-i*a-r*h-s*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+i*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const h=1-a*a;if(h<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*i+e*this._x,this._y=d*r+e*this._y,this._z=d*s+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(h),u=Math.atan2(l,a),c=Math.sin((1-e)*u)/l,f=Math.sin(e*u)/l;return this._w=o*c+this._w*f,this._x=i*c+this._x*f,this._y=r*c+this._y*f,this._z=s*c+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(e*Math.cos(r),i*Math.sin(s),i*Math.cos(s),e*Math.sin(r))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,i=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6]*r,this.y=s[1]*e+s[4]*i+s[7]*r,this.z=s[2]*e+s[5]*i+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,r=this.z,s=t.x,o=t.y,a=t.z,h=t.w,l=2*(o*r-a*i),u=2*(a*e-s*r),c=2*(s*i-o*e);return this.x=e+h*l+o*c-a*u,this.y=i+h*u+a*l-s*c,this.z=r+h*c+s*u-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*i+s[8]*r,this.y=s[1]*e+s[5]*i+s[9]*r,this.z=s[2]*e+s[6]*i+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,r=t.y,s=t.z,o=e.x,a=e.y,h=e.z;return this.x=r*h-s*a,this.y=s*o-i*h,this.z=i*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return to.copy(this).projectOnVector(t),this.sub(to)}reflect(t){return this.sub(to.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ce(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,r=this.z-t.z;return e*e+i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const r=Math.sin(e)*t;return this.x=r*Math.sin(i),this.y=Math.cos(e)*t,this.z=r*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const to=new D,bl=new In;class ps{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const s=i.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,yn):yn.fromBufferAttribute(s,o),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ws.copy(i.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ir),As.subVectors(this.max,Ir),Vi.subVectors(t.a,Ir),Wi.subVectors(t.b,Ir),$i.subVectors(t.c,Ir),ri.subVectors(Wi,Vi),si.subVectors($i,Wi),Ei.subVectors(Vi,$i);let e=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Ei.z,Ei.y,ri.z,0,-ri.x,si.z,0,-si.x,Ei.z,0,-Ei.x,-ri.y,ri.x,0,-si.y,si.x,0,-Ei.y,Ei.x,0];return!eo(e,Vi,Wi,$i,As)||(e=[1,0,0,0,1,0,0,0,1],!eo(e,Vi,Wi,$i,As))?!1:(Ts.crossVectors(ri,si),e=[Ts.x,Ts.y,Ts.z],eo(e,Vi,Wi,$i,As))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new D,new D,new D,new D,new D,new D,new D,new D],yn=new D,ws=new ps,Vi=new D,Wi=new D,$i=new D,ri=new D,si=new D,Ei=new D,Ir=new D,As=new D,Ts=new D,bi=new D;function eo(n,t,e,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){bi.fromArray(n,s);const a=r.x*Math.abs(bi.x)+r.y*Math.abs(bi.y)+r.z*Math.abs(bi.z),h=t.dot(bi),l=e.dot(bi),u=i.dot(bi);if(Math.max(-Math.max(h,l,u),Math.min(h,l,u))>a)return!1}return!0}const fp=new ps,Ur=new D,no=new D;class Ca{constructor(t=new D,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):fp.setFromPoints(t).getCenter(i);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,i.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ur.subVectors(t,this.center);const e=Ur.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),r=(i-this.radius)*.5;this.center.addScaledVector(Ur,r/i),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(no.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ur.copy(t.center).add(no)),this.expandByPoint(Ur.copy(t.center).sub(no))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new D,io=new D,Cs=new D,ai=new D,ro=new D,Rs=new D,so=new D;class Ra{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,i,r){io.copy(t).add(e).multiplyScalar(.5),Cs.copy(e).sub(t).normalize(),ai.copy(this.origin).sub(io);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Cs),a=ai.dot(this.direction),h=-ai.dot(Cs),l=ai.lengthSq(),u=Math.abs(1-o*o);let c,f,d,g;if(u>0)if(c=o*h-a,f=o*a-h,g=s*u,c>=0)if(f>=-g)if(f<=g){const v=1/u;c*=v,f*=v,d=c*(c+o*f+2*a)+f*(o*c+f+2*h)+l}else f=s,c=Math.max(0,-(o*f+a)),d=-c*c+f*(f+2*h)+l;else f=-s,c=Math.max(0,-(o*f+a)),d=-c*c+f*(f+2*h)+l;else f<=-g?(c=Math.max(0,-(-o*s+a)),f=c>0?-s:Math.min(Math.max(-s,-h),s),d=-c*c+f*(f+2*h)+l):f<=g?(c=0,f=Math.min(Math.max(-s,-h),s),d=f*(f+2*h)+l):(c=Math.max(0,-(o*s+a)),f=c>0?s:Math.min(Math.max(-s,-h),s),d=-c*c+f*(f+2*h)+l);else f=o>0?-s:s,c=Math.max(0,-(o*f+a)),d=-c*c+f*(f+2*h)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,c),r&&r.copy(io).addScaledVector(Cs,f),d}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const i=Hn.dot(this.direction),r=Hn.dot(Hn)-i*i,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,h=i+o;return h<0?null:a<0?this.at(h,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,r,s,o,a,h;const l=1/this.direction.x,u=1/this.direction.y,c=1/this.direction.z,f=this.origin;return l>=0?(i=(t.min.x-f.x)*l,r=(t.max.x-f.x)*l):(i=(t.max.x-f.x)*l,r=(t.min.x-f.x)*l),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),c>=0?(a=(t.min.z-f.z)*c,h=(t.max.z-f.z)*c):(a=(t.max.z-f.z)*c,h=(t.min.z-f.z)*c),i>h||a>r)||((a>i||i!==i)&&(i=a),(h<r||r!==r)&&(r=h),r<0)?null:this.at(i>=0?i:r,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,i,r,s){ro.subVectors(e,t),Rs.subVectors(i,t),so.crossVectors(ro,Rs);let o=this.direction.dot(so),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ai.subVectors(this.origin,t);const h=a*this.direction.dot(Rs.crossVectors(ai,Rs));if(h<0)return null;const l=a*this.direction.dot(ro.cross(ai));if(l<0||h+l>o)return null;const u=-a*ai.dot(so);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,i,r,s,o,a,h,l,u,c,f,d,g,v,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,r,s,o,a,h,l,u,c,f,d,g,v,p)}set(t,e,i,r,s,o,a,h,l,u,c,f,d,g,v,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=h,m[2]=l,m[6]=u,m[10]=c,m[14]=f,m[3]=d,m[7]=g,m[11]=v,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,r=1/Xi.setFromMatrixColumn(t,0).length(),s=1/Xi.setFromMatrixColumn(t,1).length(),o=1/Xi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*r,e[1]=i[1]*r,e[2]=i[2]*r,e[3]=0,e[4]=i[4]*s,e[5]=i[5]*s,e[6]=i[6]*s,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,r=t.y,s=t.z,o=Math.cos(i),a=Math.sin(i),h=Math.cos(r),l=Math.sin(r),u=Math.cos(s),c=Math.sin(s);if(t.order==="XYZ"){const f=o*u,d=o*c,g=a*u,v=a*c;e[0]=h*u,e[4]=-h*c,e[8]=l,e[1]=d+g*l,e[5]=f-v*l,e[9]=-a*h,e[2]=v-f*l,e[6]=g+d*l,e[10]=o*h}else if(t.order==="YXZ"){const f=h*u,d=h*c,g=l*u,v=l*c;e[0]=f+v*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*c,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=v+f*a,e[10]=o*h}else if(t.order==="ZXY"){const f=h*u,d=h*c,g=l*u,v=l*c;e[0]=f-v*a,e[4]=-o*c,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=v-f*a,e[2]=-o*l,e[6]=a,e[10]=o*h}else if(t.order==="ZYX"){const f=o*u,d=o*c,g=a*u,v=a*c;e[0]=h*u,e[4]=g*l-d,e[8]=f*l+v,e[1]=h*c,e[5]=v*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*h,e[10]=o*h}else if(t.order==="YZX"){const f=o*h,d=o*l,g=a*h,v=a*l;e[0]=h*u,e[4]=v-f*c,e[8]=g*c+d,e[1]=c,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*c+g,e[10]=f-v*c}else if(t.order==="XZY"){const f=o*h,d=o*l,g=a*h,v=a*l;e[0]=h*u,e[4]=-c,e[8]=l*u,e[1]=f*c+v,e[5]=o*u,e[9]=d*c-g,e[2]=g*c-d,e[6]=a*u,e[10]=v*c+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,pp)}lookAt(t,e,i){const r=this.elements;return rn.subVectors(t,e),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),oi.crossVectors(i,rn),oi.lengthSq()===0&&(Math.abs(i.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),oi.crossVectors(i,rn)),oi.normalize(),Ls.crossVectors(rn,oi),r[0]=oi.x,r[4]=Ls.x,r[8]=rn.x,r[1]=oi.y,r[5]=Ls.y,r[9]=rn.y,r[2]=oi.z,r[6]=Ls.z,r[10]=rn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,r=e.elements,s=this.elements,o=i[0],a=i[4],h=i[8],l=i[12],u=i[1],c=i[5],f=i[9],d=i[13],g=i[2],v=i[6],p=i[10],m=i[14],E=i[3],_=i[7],y=i[11],x=i[15],T=r[0],w=r[4],A=r[8],M=r[12],S=r[1],R=r[5],P=r[9],k=r[13],I=r[2],G=r[6],q=r[10],B=r[14],J=r[3],K=r[7],j=r[11],O=r[15];return s[0]=o*T+a*S+h*I+l*J,s[4]=o*w+a*R+h*G+l*K,s[8]=o*A+a*P+h*q+l*j,s[12]=o*M+a*k+h*B+l*O,s[1]=u*T+c*S+f*I+d*J,s[5]=u*w+c*R+f*G+d*K,s[9]=u*A+c*P+f*q+d*j,s[13]=u*M+c*k+f*B+d*O,s[2]=g*T+v*S+p*I+m*J,s[6]=g*w+v*R+p*G+m*K,s[10]=g*A+v*P+p*q+m*j,s[14]=g*M+v*k+p*B+m*O,s[3]=E*T+_*S+y*I+x*J,s[7]=E*w+_*R+y*G+x*K,s[11]=E*A+_*P+y*q+x*j,s[15]=E*M+_*k+y*B+x*O,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],r=t[8],s=t[12],o=t[1],a=t[5],h=t[9],l=t[13],u=t[2],c=t[6],f=t[10],d=t[14],g=t[3],v=t[7],p=t[11],m=t[15];return g*(+s*h*c-r*l*c-s*a*f+i*l*f+r*a*d-i*h*d)+v*(+e*h*d-e*l*f+s*o*f-r*o*d+r*l*u-s*h*u)+p*(+e*l*c-e*a*d-s*o*c+i*o*d+s*a*u-i*l*u)+m*(-r*a*u-e*h*c+e*a*f+r*o*c-i*o*f+i*h*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],r=t[2],s=t[3],o=t[4],a=t[5],h=t[6],l=t[7],u=t[8],c=t[9],f=t[10],d=t[11],g=t[12],v=t[13],p=t[14],m=t[15],E=c*p*l-v*f*l+v*h*d-a*p*d-c*h*m+a*f*m,_=g*f*l-u*p*l-g*h*d+o*p*d+u*h*m-o*f*m,y=u*v*l-g*c*l+g*a*d-o*v*d-u*a*m+o*c*m,x=g*c*h-u*v*h-g*a*f+o*v*f+u*a*p-o*c*p,T=e*E+i*_+r*y+s*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=E*w,t[1]=(v*f*s-c*p*s-v*r*d+i*p*d+c*r*m-i*f*m)*w,t[2]=(a*p*s-v*h*s+v*r*l-i*p*l-a*r*m+i*h*m)*w,t[3]=(c*h*s-a*f*s-c*r*l+i*f*l+a*r*d-i*h*d)*w,t[4]=_*w,t[5]=(u*p*s-g*f*s+g*r*d-e*p*d-u*r*m+e*f*m)*w,t[6]=(g*h*s-o*p*s-g*r*l+e*p*l+o*r*m-e*h*m)*w,t[7]=(o*f*s-u*h*s+u*r*l-e*f*l-o*r*d+e*h*d)*w,t[8]=y*w,t[9]=(g*c*s-u*v*s-g*i*d+e*v*d+u*i*m-e*c*m)*w,t[10]=(o*v*s-g*a*s+g*i*l-e*v*l-o*i*m+e*a*m)*w,t[11]=(u*a*s-o*c*s-u*i*l+e*c*l+o*i*d-e*a*d)*w,t[12]=x*w,t[13]=(u*v*r-g*c*r+g*i*f-e*v*f-u*i*p+e*c*p)*w,t[14]=(g*a*r-o*v*r-g*i*h+e*v*h+o*i*p-e*a*p)*w,t[15]=(o*c*r-u*a*r+u*i*h-e*c*h-o*i*f+e*a*f)*w,this}scale(t){const e=this.elements,i=t.x,r=t.y,s=t.z;return e[0]*=i,e[4]*=r,e[8]*=s,e[1]*=i,e[5]*=r,e[9]*=s,e[2]*=i,e[6]*=r,e[10]*=s,e[3]*=i,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,r))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),r=Math.sin(e),s=1-i,o=t.x,a=t.y,h=t.z,l=s*o,u=s*a;return this.set(l*o+i,l*a-r*h,l*h+r*a,0,l*a+r*h,u*a+i,u*h-r*o,0,l*h-r*a,u*h+r*o,s*h*h+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,r,s,o){return this.set(1,i,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,i){const r=this.elements,s=e._x,o=e._y,a=e._z,h=e._w,l=s+s,u=o+o,c=a+a,f=s*l,d=s*u,g=s*c,v=o*u,p=o*c,m=a*c,E=h*l,_=h*u,y=h*c,x=i.x,T=i.y,w=i.z;return r[0]=(1-(v+m))*x,r[1]=(d+y)*x,r[2]=(g-_)*x,r[3]=0,r[4]=(d-y)*T,r[5]=(1-(f+m))*T,r[6]=(p+E)*T,r[7]=0,r[8]=(g+_)*w,r[9]=(p-E)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,i){const r=this.elements;let s=Xi.set(r[0],r[1],r[2]).length();const o=Xi.set(r[4],r[5],r[6]).length(),a=Xi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],Mn.copy(this);const l=1/s,u=1/o,c=1/a;return Mn.elements[0]*=l,Mn.elements[1]*=l,Mn.elements[2]*=l,Mn.elements[4]*=u,Mn.elements[5]*=u,Mn.elements[6]*=u,Mn.elements[8]*=c,Mn.elements[9]*=c,Mn.elements[10]*=c,e.setFromRotationMatrix(Mn),i.x=s,i.y=o,i.z=a,this}makePerspective(t,e,i,r,s,o,a=jn){const h=this.elements,l=2*s/(e-t),u=2*s/(i-r),c=(e+t)/(e-t),f=(i+r)/(i-r);let d,g;if(a===jn)d=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===ga)d=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=l,h[4]=0,h[8]=c,h[12]=0,h[1]=0,h[5]=u,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=d,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,i,r,s,o,a=jn){const h=this.elements,l=1/(e-t),u=1/(i-r),c=1/(o-s),f=(e+t)*l,d=(i+r)*u;let g,v;if(a===jn)g=(o+s)*c,v=-2*c;else if(a===ga)g=s*c,v=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=2*l,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*u,h[9]=0,h[13]=-d,h[2]=0,h[6]=0,h[10]=v,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let r=0;r<16;r++)if(e[r]!==i[r])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Xi=new D,Mn=new ue,dp=new D(0,0,0),pp=new D(1,1,1),oi=new D,Ls=new D,rn=new D,wl=new ue,Al=new In;class La{constructor(t=0,e=0,i=0,r=La.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,r=this._order){return this._x=t,this._y=e,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],h=r[1],l=r[5],u=r[9],c=r[2],f=r[6],d=r[10];switch(e){case"XYZ":this._y=Math.asin(Ce(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ce(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-c,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ce(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(h,s));break;case"ZYX":this._y=Math.asin(-Ce(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(h,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ce(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-c,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Ce(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(wl,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Al.setFromEuler(this),this.setFromQuaternion(Al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}La.DEFAULT_ORDER="XYZ";class hh{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let mp=0;const Tl=new D,qi=new In,Vn=new ue,Ps=new D,Or=new D,gp=new D,_p=new In,Cl=new D(1,0,0),Rl=new D(0,1,0),Ll=new D(0,0,1),vp={type:"added"},yp={type:"removed"};class xe extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Zn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new D,e=new La,i=new In,r=new D(1,1,1);function s(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ue},normalMatrix:{value:new Xt}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new hh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.multiply(qi),this}rotateOnWorldAxis(t,e){return qi.setFromAxisAngle(t,e),this.quaternion.premultiply(qi),this}rotateX(t){return this.rotateOnAxis(Cl,t)}rotateY(t){return this.rotateOnAxis(Rl,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,e){return Tl.copy(t).applyQuaternion(this.quaternion),this.position.add(Tl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cl,t)}translateY(t){return this.translateOnAxis(Rl,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ps.copy(t):Ps.set(t,e,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(Or,Ps,this.up):Vn.lookAt(Ps,Or,this.up),this.quaternion.setFromRotationMatrix(Vn),r&&(Vn.extractRotation(r.matrixWorld),qi.setFromRotationMatrix(Vn),this.quaternion.premultiply(qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(vp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(yp)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let i=[];this[t]===e&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(t,e);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,t,gp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,_p,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,r=e.length;i<r;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,r=e.length;i<r;i++){const s=e[i];(s.matrixWorldAutoUpdate===!0||t===!0)&&s.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,h){return a[h.uuid]===void 0&&(a[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const h=a.shapes;if(Array.isArray(h))for(let l=0,u=h.length;l<u;l++){const c=h[l];s(t.shapes,c)}else s(t.shapes,h)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let h=0,l=this.material.length;h<l;h++)a.push(s(t.materials,this.material[h]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const h=this.animations[a];r.animations.push(s(t.animations,h))}}if(e){const a=o(t.geometries),h=o(t.materials),l=o(t.textures),u=o(t.images),c=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),h.length>0&&(i.materials=h),l.length>0&&(i.textures=l),u.length>0&&(i.images=u),c.length>0&&(i.shapes=c),f.length>0&&(i.skeletons=f),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const h=[];for(const l in a){const u=a[l];delete u.metadata,h.push(u)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const r=t.children[i];this.add(r.clone())}return this}}xe.DEFAULT_UP=new D(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const xn=new D,Wn=new D,ao=new D,$n=new D,Yi=new D,ji=new D,Pl=new D,oo=new D,ho=new D,lo=new D;let Ds=!1;class un{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,r){r.subVectors(i,e),xn.subVectors(t,e),r.cross(xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,i,r,s){xn.subVectors(r,e),Wn.subVectors(i,e),ao.subVectors(t,e);const o=xn.dot(xn),a=xn.dot(Wn),h=xn.dot(ao),l=Wn.dot(Wn),u=Wn.dot(ao),c=o*l-a*a;if(c===0)return s.set(-2,-1,-1);const f=1/c,d=(l*h-a*u)*f,g=(o*u-a*h)*f;return s.set(1-d-g,g,d)}static containsPoint(t,e,i,r){return this.getBarycoord(t,e,i,r,$n),$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getUV(t,e,i,r,s,o,a,h){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),this.getInterpolation(t,e,i,r,s,o,a,h)}static getInterpolation(t,e,i,r,s,o,a,h){return this.getBarycoord(t,e,i,r,$n),h.setScalar(0),h.addScaledVector(s,$n.x),h.addScaledVector(o,$n.y),h.addScaledVector(a,$n.z),h}static isFrontFacing(t,e,i,r){return xn.subVectors(i,e),Wn.subVectors(t,e),xn.cross(Wn).dot(r)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,r){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,i,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Wn.subVectors(this.a,this.b),xn.cross(Wn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,r,s){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),un.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}getInterpolation(t,e,i,r,s){return un.getInterpolation(t,this.a,this.b,this.c,e,i,r,s)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,r=this.b,s=this.c;let o,a;Yi.subVectors(r,i),ji.subVectors(s,i),oo.subVectors(t,i);const h=Yi.dot(oo),l=ji.dot(oo);if(h<=0&&l<=0)return e.copy(i);ho.subVectors(t,r);const u=Yi.dot(ho),c=ji.dot(ho);if(u>=0&&c<=u)return e.copy(r);const f=h*c-u*l;if(f<=0&&h>=0&&u<=0)return o=h/(h-u),e.copy(i).addScaledVector(Yi,o);lo.subVectors(t,s);const d=Yi.dot(lo),g=ji.dot(lo);if(g>=0&&d<=g)return e.copy(s);const v=d*l-h*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(ji,a);const p=u*g-d*c;if(p<=0&&c-u>=0&&d-g>=0)return Pl.subVectors(s,r),a=(c-u)/(c-u+(d-g)),e.copy(r).addScaledVector(Pl,a);const m=1/(p+v+f);return o=v*m,a=f*m,e.copy(i).addScaledVector(Yi,o).addScaledVector(ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const cu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},hi={h:0,s:0,l:0},Ns={h:0,s:0,l:0};function co(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class $t{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,r=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,r),this}setHSL(t,e,i,r=ne.workingColorSpace){if(t=oh(t,1),e=Ce(e,0,1),i=Ce(i,0,1),e===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+e):i+e-i*e,o=2*i-s;this.r=co(o,s,t+1/3),this.g=co(o,s,t),this.b=co(o,s,t-1/3)}return ne.toWorkingColorSpace(this,r),this}setStyle(t,e=De){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const i=cu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}copyLinearToSRGB(t){return this.r=Ja(t.r),this.g=Ja(t.g),this.b=Ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ne.fromWorkingColorSpace(Oe.copy(this),t),Math.round(Ce(Oe.r*255,0,255))*65536+Math.round(Ce(Oe.g*255,0,255))*256+Math.round(Ce(Oe.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Oe.copy(this),e);const i=Oe.r,r=Oe.g,s=Oe.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let h,l;const u=(a+o)/2;if(a===o)h=0,l=0;else{const c=o-a;switch(l=u<=.5?c/(o+a):c/(2-o-a),o){case i:h=(r-s)/c+(r<s?6:0);break;case r:h=(s-i)/c+2;break;case s:h=(i-r)/c+4;break}h/=6}return t.h=h,t.s=l,t.l=u,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Oe.copy(this),e),t.r=Oe.r,t.g=Oe.g,t.b=Oe.b,t}getStyle(t=De){ne.fromWorkingColorSpace(Oe.copy(this),t);const e=Oe.r,i=Oe.g,r=Oe.b;return t!==De?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(t,e,i){return this.getHSL(hi),this.setHSL(hi.h+t,hi.s+e,hi.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(hi),t.getHSL(Ns);const i=ts(hi.h,Ns.h,e),r=ts(hi.s,Ns.s,e),s=ts(hi.l,Ns.l,e);return this.setHSL(i,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*i+s[6]*r,this.g=s[1]*e+s[4]*i+s[7]*r,this.b=s[2]*e+s[5]*i+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Oe=new $t;$t.NAMES=cu;let Mp=0;class Cr extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mp++}),this.uuid=Zn(),this.name="",this.type="Material",this.blending=gr,this.side=Tn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fo,this.blendDst=Bo,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $t(0,0,0),this.blendAlpha=0,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(i.blending=this.blending),this.side!==Tn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Fo&&(i.blendSrc=this.blendSrc),this.blendDst!==Bo&&(i.blendDst=this.blendDst),this.blendEquation!==Pi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==fa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==vl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const h=s[a];delete h.metadata,o.push(h)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const r=e.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=e[s].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Un extends Cr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $t(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Zc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const _e=new D,Is=new gt;class gn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Vo,this.updateRange={offset:0,count:-1},this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[i+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Is.fromBufferAttribute(this,e),Is.applyMatrix3(t),this.setXY(e,Is.x,Is.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix3(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyMatrix4(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.applyNormalMatrix(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)_e.fromBufferAttribute(this,e),_e.transformDirection(t),this.setXYZ(e,_e.x,_e.y,_e.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),r=ee(r,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vo&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}}class uu extends gn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class fu extends gn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class ze extends gn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let xp=0;const on=new ue,uo=new xe,Ki=new D,sn=new ps,Fr=new ps,Ae=new D;class ke extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=Zn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(au(t)?fu:uu)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Xt().getNormalMatrix(t);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return uo.lookAt(t),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){const e=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];e.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new ze(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,r=e.length;i<r;i++){const s=e[i];sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ae.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(Ae),Ae.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(Ae)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ca);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){const i=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Fr.setFromBufferAttribute(a),this.morphTargetsRelative?(Ae.addVectors(sn.min,Fr.min),sn.expandByPoint(Ae),Ae.addVectors(sn.max,Fr.max),sn.expandByPoint(Ae)):(sn.expandByPoint(Fr.min),sn.expandByPoint(Fr.max))}sn.getCenter(i);let r=0;for(let s=0,o=t.count;s<o;s++)Ae.fromBufferAttribute(t,s),r=Math.max(r,i.distanceToSquared(Ae));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],h=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)Ae.fromBufferAttribute(a,l),h&&(Ki.fromBufferAttribute(t,l),Ae.add(Ki)),r=Math.max(r,i.distanceToSquared(Ae))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.array,r=e.position.array,s=e.normal.array,o=e.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*a),4));const h=this.getAttribute("tangent").array,l=[],u=[];for(let S=0;S<a;S++)l[S]=new D,u[S]=new D;const c=new D,f=new D,d=new D,g=new gt,v=new gt,p=new gt,m=new D,E=new D;function _(S,R,P){c.fromArray(r,S*3),f.fromArray(r,R*3),d.fromArray(r,P*3),g.fromArray(o,S*2),v.fromArray(o,R*2),p.fromArray(o,P*2),f.sub(c),d.sub(c),v.sub(g),p.sub(g);const k=1/(v.x*p.y-p.x*v.y);isFinite(k)&&(m.copy(f).multiplyScalar(p.y).addScaledVector(d,-v.y).multiplyScalar(k),E.copy(d).multiplyScalar(v.x).addScaledVector(f,-p.x).multiplyScalar(k),l[S].add(m),l[R].add(m),l[P].add(m),u[S].add(E),u[R].add(E),u[P].add(E))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let S=0,R=y.length;S<R;++S){const P=y[S],k=P.start,I=P.count;for(let G=k,q=k+I;G<q;G+=3)_(i[G+0],i[G+1],i[G+2])}const x=new D,T=new D,w=new D,A=new D;function M(S){w.fromArray(s,S*3),A.copy(w);const R=l[S];x.copy(R),x.sub(w.multiplyScalar(w.dot(R))).normalize(),T.crossVectors(A,R);const k=T.dot(u[S])<0?-1:1;h[S*4]=x.x,h[S*4+1]=x.y,h[S*4+2]=x.z,h[S*4+3]=k}for(let S=0,R=y.length;S<R;++S){const P=y[S],k=P.start,I=P.count;for(let G=k,q=k+I;G<q;G+=3)M(i[G+0]),M(i[G+1]),M(i[G+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,d=i.count;f<d;f++)i.setXYZ(f,0,0,0);const r=new D,s=new D,o=new D,a=new D,h=new D,l=new D,u=new D,c=new D;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),v=t.getX(f+1),p=t.getX(f+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),u.subVectors(o,s),c.subVectors(r,s),u.cross(c),a.fromBufferAttribute(i,g),h.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(u),h.add(u),l.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,h.x,h.y,h.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)r.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),c.subVectors(r,s),u.cross(c),i.setXYZ(f+0,u.x,u.y,u.z),i.setXYZ(f+1,u.x,u.y,u.z),i.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Ae.fromBufferAttribute(t,e),Ae.normalize(),t.setXYZ(e,Ae.x,Ae.y,Ae.z)}toNonIndexed(){function t(a,h){const l=a.array,u=a.itemSize,c=a.normalized,f=new l.constructor(h.length*u);let d=0,g=0;for(let v=0,p=h.length;v<p;v++){a.isInterleavedBufferAttribute?d=h[v]*a.data.stride+a.offset:d=h[v]*u;for(let m=0;m<u;m++)f[g++]=l[d++]}return new gn(f,u,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ke,i=this.index.array,r=this.attributes;for(const a in r){const h=r[a],l=t(h,i);e.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const h=[],l=s[a];for(let u=0,c=l.length;u<c;u++){const f=l[u],d=t(f,i);h.push(d)}e.morphAttributes[a]=h}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,h=o.length;a<h;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const h in i){const l=i[h];t.data.attributes[h]=l.toJSON(t.data)}const r={};let s=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],u=[];for(let c=0,f=l.length;c<f;c++){const d=l[c];u.push(d.toJSON(t.data))}u.length>0&&(r[h]=u,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const r=t.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(e))}const s=t.morphAttributes;for(const l in s){const u=[],c=s[l];for(let f=0,d=c.length;f<d;f++)u.push(c[f].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const c=o[l];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Dl=new ue,wi=new Ra,Us=new Ca,Nl=new D,Zi=new D,Ji=new D,Qi=new D,fo=new D,Os=new D,Fs=new gt,Bs=new gt,Gs=new gt,Il=new D,Ul=new D,Ol=new D,zs=new D,ks=new D;class Ge extends xe{constructor(t=new ke,e=new Un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){Os.set(0,0,0);for(let h=0,l=s.length;h<l;h++){const u=a[h],c=s[h];u!==0&&(fo.fromBufferAttribute(c,t),o?Os.addScaledVector(fo,u):Os.addScaledVector(fo.sub(e),u))}e.add(Os)}return e}raycast(t,e){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Us.copy(i.boundingSphere),Us.applyMatrix4(s),wi.copy(t.ray).recast(t.near),!(Us.containsPoint(wi.origin)===!1&&(wi.intersectSphere(Us,Nl)===null||wi.origin.distanceToSquared(Nl)>(t.far-t.near)**2))&&(Dl.copy(s).invert(),wi.copy(t.ray).applyMatrix4(Dl),!(i.boundingBox!==null&&wi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,i){let r;const s=this.geometry,o=this.material,a=s.index,h=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,c=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],E=Math.max(p.start,d.start),_=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let y=E,x=_;y<x;y+=3){const T=a.getX(y),w=a.getX(y+1),A=a.getX(y+2);r=Hs(this,m,t,i,l,u,c,T,w,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(a.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const E=a.getX(p),_=a.getX(p+1),y=a.getX(p+2);r=Hs(this,o,t,i,l,u,c,E,_,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}else if(h!==void 0)if(Array.isArray(o))for(let g=0,v=f.length;g<v;g++){const p=f[g],m=o[p.materialIndex],E=Math.max(p.start,d.start),_=Math.min(h.count,Math.min(p.start+p.count,d.start+d.count));for(let y=E,x=_;y<x;y+=3){const T=y,w=y+1,A=y+2;r=Hs(this,m,t,i,l,u,c,T,w,A),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=p.materialIndex,e.push(r))}}else{const g=Math.max(0,d.start),v=Math.min(h.count,d.start+d.count);for(let p=g,m=v;p<m;p+=3){const E=p,_=p+1,y=p+2;r=Hs(this,o,t,i,l,u,c,E,_,y),r&&(r.faceIndex=Math.floor(p/3),e.push(r))}}}}function Sp(n,t,e,i,r,s,o,a){let h;if(t.side===Je?h=i.intersectTriangle(o,s,r,!0,a):h=i.intersectTriangle(r,s,o,t.side===Tn,a),h===null)return null;ks.copy(a),ks.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(ks);return l<e.near||l>e.far?null:{distance:l,point:ks.clone(),object:n}}function Hs(n,t,e,i,r,s,o,a,h,l){n.getVertexPosition(a,Zi),n.getVertexPosition(h,Ji),n.getVertexPosition(l,Qi);const u=Sp(n,t,e,i,Zi,Ji,Qi,zs);if(u){r&&(Fs.fromBufferAttribute(r,a),Bs.fromBufferAttribute(r,h),Gs.fromBufferAttribute(r,l),u.uv=un.getInterpolation(zs,Zi,Ji,Qi,Fs,Bs,Gs,new gt)),s&&(Fs.fromBufferAttribute(s,a),Bs.fromBufferAttribute(s,h),Gs.fromBufferAttribute(s,l),u.uv1=un.getInterpolation(zs,Zi,Ji,Qi,Fs,Bs,Gs,new gt),u.uv2=u.uv1),o&&(Il.fromBufferAttribute(o,a),Ul.fromBufferAttribute(o,h),Ol.fromBufferAttribute(o,l),u.normal=un.getInterpolation(zs,Zi,Ji,Qi,Il,Ul,Ol,new D),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const c={a,b:h,c:l,normal:new D,materialIndex:0};un.getNormal(Zi,Ji,Qi,c.normal),u.face=c}return u}class ms extends ke{constructor(t=1,e=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const h=[],l=[],u=[],c=[];let f=0,d=0;g("z","y","x",-1,-1,i,e,t,o,s,0),g("z","y","x",1,-1,i,e,-t,o,s,1),g("x","z","y",1,1,t,i,e,r,o,2),g("x","z","y",1,-1,t,i,-e,r,o,3),g("x","y","z",1,-1,t,e,i,r,s,4),g("x","y","z",-1,-1,t,e,-i,r,s,5),this.setIndex(h),this.setAttribute("position",new ze(l,3)),this.setAttribute("normal",new ze(u,3)),this.setAttribute("uv",new ze(c,2));function g(v,p,m,E,_,y,x,T,w,A,M){const S=y/w,R=x/A,P=y/2,k=x/2,I=T/2,G=w+1,q=A+1;let B=0,J=0;const K=new D;for(let j=0;j<q;j++){const O=j*R-k;for(let W=0;W<G;W++){const ut=W*S-P;K[v]=ut*E,K[p]=O*_,K[m]=I,l.push(K.x,K.y,K.z),K[v]=0,K[p]=0,K[m]=T>0?1:-1,u.push(K.x,K.y,K.z),c.push(W/w),c.push(1-j/A),B+=1}}for(let j=0;j<A;j++)for(let O=0;O<w;O++){const W=f+O+G*j,ut=f+O+G*(j+1),pt=f+(O+1)+G*(j+1),vt=f+(O+1)+G*j;h.push(W,ut,vt),h.push(ut,pt,vt),J+=6}a.addGroup(d,J,M),d+=J,f+=B}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ms(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function br(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const r=n[e][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=r.clone():Array.isArray(r)?t[e][i]=r.slice():t[e][i]=r}}return t}function Xe(n){const t={};for(let e=0;e<n.length;e++){const i=br(n[e]);for(const r in i)t[r]=i[r]}return t}function Ep(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function du(n){return n.getRenderTarget()===null?n.outputColorSpace:ne.workingColorSpace}const bp={clone:br,merge:Xe};var wp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ap=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fi extends Cr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wp,this.fragmentShader=Ap,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=br(t.uniforms),this.uniformsGroups=Ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class pu extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=jn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class fn extends pu{constructor(t=50,e=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ls*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ls*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*e,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const h=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/h,e-=o.offsetY*i/l,r*=o.width/h,i*=o.height/l}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const tr=-90,er=1;class Tp extends xe{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new fn(tr,er,t,e);r.layers=this.layers,this.add(r);const s=new fn(tr,er,t,e);s.layers=this.layers,this.add(s);const o=new fn(tr,er,t,e);o.layers=this.layers,this.add(o);const a=new fn(tr,er,t,e);a.layers=this.layers,this.add(a);const h=new fn(tr,er,t,e);h.layers=this.layers,this.add(h);const l=new fn(tr,er,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,r,s,o,a,h]=e;for(const l of e)this.remove(l);if(t===jn)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,h,l,u]=this.children,c=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,r),t.render(e,s),t.setRenderTarget(i,1,r),t.render(e,o),t.setRenderTarget(i,2,r),t.render(e,a),t.setRenderTarget(i,3,r),t.render(e,h),t.setRenderTarget(i,4,r),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,r),t.render(e,u),t.setRenderTarget(c,f,d),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class mu extends Ke{constructor(t,e,i,r,s,o,a,h,l,u){t=t!==void 0?t:[],e=e!==void 0?e:xr,super(t,e,i,r,s,o,a,h,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Cp extends Oi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},r=[i,i,i,i,i,i];e.encoding!==void 0&&(es("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Ui?De:pn),this.texture=new mu(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:cn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new ms(5,5,5),s=new Fi({name:"CubemapFromEquirect",uniforms:br(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Je,blending:mi});s.uniforms.tEquirect.value=e;const o=new Ge(r,s),a=e.minFilter;return e.minFilter===os&&(e.minFilter=cn),new Tp(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,r){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,r);t.setRenderTarget(s)}}const po=new D,Rp=new D,Lp=new Xt;class ui{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,r){return this.normal.set(t,e,i),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const r=po.subVectors(i,e).cross(Rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(po),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(i,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Lp.getNormalMatrix(t),r=this.coplanarPoint(po).applyMatrix4(t),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ai=new Ca,Vs=new D;class lh{constructor(t=new ui,e=new ui,i=new ui,r=new ui,s=new ui,o=new ui){this.planes=[t,e,i,r,s,o]}set(t,e,i,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=jn){const i=this.planes,r=t.elements,s=r[0],o=r[1],a=r[2],h=r[3],l=r[4],u=r[5],c=r[6],f=r[7],d=r[8],g=r[9],v=r[10],p=r[11],m=r[12],E=r[13],_=r[14],y=r[15];if(i[0].setComponents(h-s,f-l,p-d,y-m).normalize(),i[1].setComponents(h+s,f+l,p+d,y+m).normalize(),i[2].setComponents(h+o,f+u,p+g,y+E).normalize(),i[3].setComponents(h-o,f-u,p-g,y-E).normalize(),i[4].setComponents(h-a,f-c,p-v,y-_).normalize(),e===jn)i[5].setComponents(h+a,f+c,p+v,y+_).normalize();else if(e===ga)i[5].setComponents(a,c,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ai.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ai.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ai)}intersectsSprite(t){return Ai.center.set(0,0,0),Ai.radius=.7071067811865476,Ai.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ai)}intersectsSphere(t){const e=this.planes,i=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const r=e[i];if(Vs.x=r.normal.x>0?t.max.x:t.min.x,Vs.y=r.normal.y>0?t.max.y:t.min.y,Vs.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Vs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function gu(){let n=null,t=!1,e=null,i=null;function r(s,o){e(s,o),i=n.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(r),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){n=s}}}function Pp(n,t){const e=t.isWebGL2,i=new WeakMap;function r(l,u){const c=l.array,f=l.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,c,f),l.onUploadCallback();let g;if(c instanceof Float32Array)g=n.FLOAT;else if(c instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=n.SHORT;else if(c instanceof Uint32Array)g=n.UNSIGNED_INT;else if(c instanceof Int32Array)g=n.INT;else if(c instanceof Int8Array)g=n.BYTE;else if(c instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,c){const f=u.array,d=u.updateRange;n.bindBuffer(c,l),d.count===-1?n.bufferSubData(c,0,f):(e?n.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):n.bufferSubData(c,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=i.get(l);u&&(n.deleteBuffer(u.buffer),i.delete(l))}function h(l,u){if(l.isGLBufferAttribute){const f=i.get(l);(!f||f.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const c=i.get(l);c===void 0?i.set(l,r(l,u)):c.version<l.version&&(s(c.buffer,l,u),c.version=l.version)}return{get:o,remove:a,update:h}}class Pa extends ke{constructor(t=1,e=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(i),h=Math.floor(r),l=a+1,u=h+1,c=t/a,f=e/h,d=[],g=[],v=[],p=[];for(let m=0;m<u;m++){const E=m*f-o;for(let _=0;_<l;_++){const y=_*c-s;g.push(y,-E,0),v.push(0,0,1),p.push(_/a),p.push(1-m/h)}}for(let m=0;m<h;m++)for(let E=0;E<a;E++){const _=E+l*m,y=E+l*(m+1),x=E+1+l*(m+1),T=E+1+l*m;d.push(_,y,T),d.push(y,x,T)}this.setIndex(d),this.setAttribute("position",new ze(g,3)),this.setAttribute("normal",new ze(v,3)),this.setAttribute("uv",new ze(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Pa(t.width,t.height,t.widthSegments,t.heightSegments)}}var Dp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Np=`#ifdef USE_ALPHAHASH
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
#endif`,Ip=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Up=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Op=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Fp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Bp=`#ifdef USE_AOMAP
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
#endif`,Gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,kp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vp=`#ifdef USE_IRIDESCENCE
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
#endif`,Wp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Jp=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Qp=`#define PI 3.141592653589793
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
} // validated`,tm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,em=`vec3 transformedNormal = objectNormal;
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
#endif`,nm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,am="gl_FragColor = linearToOutputTexel( gl_FragColor );",om=`
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
}`,hm=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_m=`#ifdef USE_GRADIENTMAP
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
}`,vm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,ym=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Mm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sm=`uniform bool receiveShadow;
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
#endif`,Em=`#ifdef USE_ENVMAP
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
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Am=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cm=`PhysicalMaterial material;
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
#endif`,Rm=`struct PhysicalMaterial {
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
}`,Lm=`
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
#endif`,Pm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Im=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Um=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Om=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Fm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zm=`#if defined( USE_POINTS_UV )
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
#endif`,km=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wm=`#ifdef USE_MORPHNORMALS
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
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
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
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Jm=`#ifdef USE_NORMALMAP
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
#endif`,Qm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ng=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ig=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,og=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,hg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ug=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pg=`float getShadowMask() {
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
}`,mg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gg=`#ifdef USE_SKINNING
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
#endif`,_g=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vg=`#ifdef USE_SKINNING
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
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,bg=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Rg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lg=`uniform sampler2D t2D;
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ig=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ug=`#include <common>
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
}`,Og=`#if DEPTH_PACKING == 3200
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
}`,Fg=`#define DISTANCE
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
}`,Bg=`#define DISTANCE
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`uniform float scale;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Wg=`uniform vec3 diffuse;
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
}`,$g=`#define LAMBERT
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
}`,Xg=`#define LAMBERT
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
}`,qg=`#define MATCAP
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
}`,Yg=`#define MATCAP
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
}`,jg=`#define NORMAL
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
}`,Kg=`#define NORMAL
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
}`,Zg=`#define PHONG
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
}`,Jg=`#define PHONG
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
}`,Qg=`#define STANDARD
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
}`,t0=`#define STANDARD
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
}`,e0=`#define TOON
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
}`,n0=`#define TOON
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
}`,i0=`uniform float size;
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
}`,r0=`uniform vec3 diffuse;
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
}`,s0=`#include <common>
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
}`,a0=`uniform vec3 color;
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
}`,o0=`uniform float rotation;
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
}`,h0=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:Dp,alphahash_pars_fragment:Np,alphamap_fragment:Ip,alphamap_pars_fragment:Up,alphatest_fragment:Op,alphatest_pars_fragment:Fp,aomap_fragment:Bp,aomap_pars_fragment:Gp,begin_vertex:zp,beginnormal_vertex:kp,bsdfs:Hp,iridescence_fragment:Vp,bumpmap_pars_fragment:Wp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Yp,color_fragment:jp,color_pars_fragment:Kp,color_pars_vertex:Zp,color_vertex:Jp,common:Qp,cube_uv_reflection_fragment:tm,defaultnormal_vertex:em,displacementmap_pars_vertex:nm,displacementmap_vertex:im,emissivemap_fragment:rm,emissivemap_pars_fragment:sm,colorspace_fragment:am,colorspace_pars_fragment:om,envmap_fragment:hm,envmap_common_pars_fragment:lm,envmap_pars_fragment:cm,envmap_pars_vertex:um,envmap_physical_pars_fragment:Em,envmap_vertex:fm,fog_vertex:dm,fog_pars_vertex:pm,fog_fragment:mm,fog_pars_fragment:gm,gradientmap_pars_fragment:_m,lightmap_fragment:vm,lightmap_pars_fragment:ym,lights_lambert_fragment:Mm,lights_lambert_pars_fragment:xm,lights_pars_begin:Sm,lights_toon_fragment:bm,lights_toon_pars_fragment:wm,lights_phong_fragment:Am,lights_phong_pars_fragment:Tm,lights_physical_fragment:Cm,lights_physical_pars_fragment:Rm,lights_fragment_begin:Lm,lights_fragment_maps:Pm,lights_fragment_end:Dm,logdepthbuf_fragment:Nm,logdepthbuf_pars_fragment:Im,logdepthbuf_pars_vertex:Um,logdepthbuf_vertex:Om,map_fragment:Fm,map_pars_fragment:Bm,map_particle_fragment:Gm,map_particle_pars_fragment:zm,metalnessmap_fragment:km,metalnessmap_pars_fragment:Hm,morphcolor_vertex:Vm,morphnormal_vertex:Wm,morphtarget_pars_vertex:$m,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:Ym,normal_pars_fragment:jm,normal_pars_vertex:Km,normal_vertex:Zm,normalmap_pars_fragment:Jm,clearcoat_normal_fragment_begin:Qm,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:eg,iridescence_pars_fragment:ng,opaque_fragment:ig,packing:rg,premultiplied_alpha_fragment:sg,project_vertex:ag,dithering_fragment:og,dithering_pars_fragment:hg,roughnessmap_fragment:lg,roughnessmap_pars_fragment:cg,shadowmap_pars_fragment:ug,shadowmap_pars_vertex:fg,shadowmap_vertex:dg,shadowmask_pars_fragment:pg,skinbase_vertex:mg,skinning_pars_vertex:gg,skinning_vertex:_g,skinnormal_vertex:vg,specularmap_fragment:yg,specularmap_pars_fragment:Mg,tonemapping_fragment:xg,tonemapping_pars_fragment:Sg,transmission_fragment:Eg,transmission_pars_fragment:bg,uv_pars_fragment:wg,uv_pars_vertex:Ag,uv_vertex:Tg,worldpos_vertex:Cg,background_vert:Rg,background_frag:Lg,backgroundCube_vert:Pg,backgroundCube_frag:Dg,cube_vert:Ng,cube_frag:Ig,depth_vert:Ug,depth_frag:Og,distanceRGBA_vert:Fg,distanceRGBA_frag:Bg,equirect_vert:Gg,equirect_frag:zg,linedashed_vert:kg,linedashed_frag:Hg,meshbasic_vert:Vg,meshbasic_frag:Wg,meshlambert_vert:$g,meshlambert_frag:Xg,meshmatcap_vert:qg,meshmatcap_frag:Yg,meshnormal_vert:jg,meshnormal_frag:Kg,meshphong_vert:Zg,meshphong_frag:Jg,meshphysical_vert:Qg,meshphysical_frag:t0,meshtoon_vert:e0,meshtoon_frag:n0,points_vert:i0,points_frag:r0,shadow_vert:s0,shadow_frag:a0,sprite_vert:o0,sprite_frag:h0},lt={common:{diffuse:{value:new $t(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $t(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $t(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new $t(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},Ln={basic:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:Xe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new $t(0)},specular:{value:new $t(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:Xe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new $t(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:Xe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new $t(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:Xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:Xe([lt.points,lt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:Xe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:Xe([lt.common,lt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:Xe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:Xe([lt.sprite,lt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:Xe([lt.common,lt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:Xe([lt.lights,lt.fog,{color:{value:new $t(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};Ln.physical={uniforms:Xe([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new $t(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new $t(0)},specularColor:{value:new $t(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Ws={r:0,b:0,g:0};function l0(n,t,e,i,r,s,o){const a=new $t(0);let h=s===!0?0:1,l,u,c=null,f=0,d=null;function g(p,m){let E=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?e:t).get(_)),_===null?v(a,h):_&&_.isColor&&(v(_,1),E=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||E)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Aa)?(u===void 0&&(u=new Ge(new ms(1,1,1),new Fi({name:"BackgroundCubeMaterial",uniforms:br(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:Je,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(x,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,u.material.toneMapped=ne.getTransfer(_.colorSpace)!==oe,(c!==_||f!==_.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,c=_,f=_.version,d=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ge(new Pa(2,2),new Fi({name:"BackgroundMaterial",uniforms:br(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,l.material.toneMapped=ne.getTransfer(_.colorSpace)!==oe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||f!==_.version||d!==n.toneMapping)&&(l.material.needsUpdate=!0,c=_,f=_.version,d=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,m){p.getRGB(Ws,du(n)),i.buffers.color.setClear(Ws.r,Ws.g,Ws.b,m,o)}return{getClearColor:function(){return a},setClearColor:function(p,m=1){a.set(p),h=m,v(a,h)},getClearAlpha:function(){return h},setClearAlpha:function(p){h=p,v(a,h)},render:g}}function c0(n,t,e,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},h=p(null);let l=h,u=!1;function c(I,G,q,B,J){let K=!1;if(o){const j=v(B,q,G);l!==j&&(l=j,d(l.object)),K=m(I,B,q,J),K&&E(I,B,q,J)}else{const j=G.wireframe===!0;(l.geometry!==B.id||l.program!==q.id||l.wireframe!==j)&&(l.geometry=B.id,l.program=q.id,l.wireframe=j,K=!0)}J!==null&&e.update(J,n.ELEMENT_ARRAY_BUFFER),(K||u)&&(u=!1,A(I,G,q,B),J!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function f(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(I){return i.isWebGL2?n.bindVertexArray(I):s.bindVertexArrayOES(I)}function g(I){return i.isWebGL2?n.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function v(I,G,q){const B=q.wireframe===!0;let J=a[I.id];J===void 0&&(J={},a[I.id]=J);let K=J[G.id];K===void 0&&(K={},J[G.id]=K);let j=K[B];return j===void 0&&(j=p(f()),K[B]=j),j}function p(I){const G=[],q=[],B=[];for(let J=0;J<r;J++)G[J]=0,q[J]=0,B[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:q,attributeDivisors:B,object:I,attributes:{},index:null}}function m(I,G,q,B){const J=l.attributes,K=G.attributes;let j=0;const O=q.getAttributes();for(const W in O)if(O[W].location>=0){const pt=J[W];let vt=K[W];if(vt===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(vt=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(vt=I.instanceColor)),pt===void 0||pt.attribute!==vt||vt&&pt.data!==vt.data)return!0;j++}return l.attributesNum!==j||l.index!==B}function E(I,G,q,B){const J={},K=G.attributes;let j=0;const O=q.getAttributes();for(const W in O)if(O[W].location>=0){let pt=K[W];pt===void 0&&(W==="instanceMatrix"&&I.instanceMatrix&&(pt=I.instanceMatrix),W==="instanceColor"&&I.instanceColor&&(pt=I.instanceColor));const vt={};vt.attribute=pt,pt&&pt.data&&(vt.data=pt.data),J[W]=vt,j++}l.attributes=J,l.attributesNum=j,l.index=B}function _(){const I=l.newAttributes;for(let G=0,q=I.length;G<q;G++)I[G]=0}function y(I){x(I,0)}function x(I,G){const q=l.newAttributes,B=l.enabledAttributes,J=l.attributeDivisors;q[I]=1,B[I]===0&&(n.enableVertexAttribArray(I),B[I]=1),J[I]!==G&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,G),J[I]=G)}function T(){const I=l.newAttributes,G=l.enabledAttributes;for(let q=0,B=G.length;q<B;q++)G[q]!==I[q]&&(n.disableVertexAttribArray(q),G[q]=0)}function w(I,G,q,B,J,K,j){j===!0?n.vertexAttribIPointer(I,G,q,J,K):n.vertexAttribPointer(I,G,q,B,J,K)}function A(I,G,q,B){if(i.isWebGL2===!1&&(I.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;_();const J=B.attributes,K=q.getAttributes(),j=G.defaultAttributeValues;for(const O in K){const W=K[O];if(W.location>=0){let ut=J[O];if(ut===void 0&&(O==="instanceMatrix"&&I.instanceMatrix&&(ut=I.instanceMatrix),O==="instanceColor"&&I.instanceColor&&(ut=I.instanceColor)),ut!==void 0){const pt=ut.normalized,vt=ut.itemSize,Lt=e.get(ut);if(Lt===void 0)continue;const qt=Lt.buffer,Dt=Lt.type,Ft=Lt.bytesPerElement,ae=i.isWebGL2===!0&&(Dt===n.INT||Dt===n.UNSIGNED_INT||ut.gpuType===Qc);if(ut.isInterleavedBufferAttribute){const Ht=ut.data,z=Ht.stride,Ie=ut.offset;if(Ht.isInstancedInterleavedBuffer){for(let wt=0;wt<W.locationSize;wt++)x(W.location+wt,Ht.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ht.meshPerAttribute*Ht.count)}else for(let wt=0;wt<W.locationSize;wt++)y(W.location+wt);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let wt=0;wt<W.locationSize;wt++)w(W.location+wt,vt/W.locationSize,Dt,pt,z*Ft,(Ie+vt/W.locationSize*wt)*Ft,ae)}else{if(ut.isInstancedBufferAttribute){for(let Ht=0;Ht<W.locationSize;Ht++)x(W.location+Ht,ut.meshPerAttribute);I.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ht=0;Ht<W.locationSize;Ht++)y(W.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,qt);for(let Ht=0;Ht<W.locationSize;Ht++)w(W.location+Ht,vt/W.locationSize,Dt,pt,vt*Ft,vt/W.locationSize*Ht*Ft,ae)}}else if(j!==void 0){const pt=j[O];if(pt!==void 0)switch(pt.length){case 2:n.vertexAttrib2fv(W.location,pt);break;case 3:n.vertexAttrib3fv(W.location,pt);break;case 4:n.vertexAttrib4fv(W.location,pt);break;default:n.vertexAttrib1fv(W.location,pt)}}}}T()}function M(){P();for(const I in a){const G=a[I];for(const q in G){const B=G[q];for(const J in B)g(B[J].object),delete B[J];delete G[q]}delete a[I]}}function S(I){if(a[I.id]===void 0)return;const G=a[I.id];for(const q in G){const B=G[q];for(const J in B)g(B[J].object),delete B[J];delete G[q]}delete a[I.id]}function R(I){for(const G in a){const q=a[G];if(q[I.id]===void 0)continue;const B=q[I.id];for(const J in B)g(B[J].object),delete B[J];delete q[I.id]}}function P(){k(),u=!0,l!==h&&(l=h,d(l.object))}function k(){h.geometry=null,h.program=null,h.wireframe=!1}return{setup:c,reset:P,resetDefaultState:k,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function u0(n,t,e,i){const r=i.isWebGL2;let s;function o(l){s=l}function a(l,u){n.drawArrays(s,l,u),e.update(u,s,1)}function h(l,u,c){if(c===0)return;let f,d;if(r)f=n,d="drawArraysInstanced";else if(f=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[d](s,l,u,c),e.update(u,s,c)}this.setMode=o,this.render=a,this.renderInstances=h}function f0(n,t,e){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=e.precision!==void 0?e.precision:"highp";const h=s(a);h!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",h,"instead."),a=h);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,c=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),m=n.getParameter(n.MAX_VARYING_VECTORS),E=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,y=o||t.has("OES_texture_float"),x=_&&y,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:c,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:m,maxFragmentUniforms:E,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:x,maxSamples:T}}function d0(n){const t=this;let e=null,i=0,r=!1,s=!1;const o=new ui,a=new Xt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(c,f){const d=c.length!==0||f||i!==0||r;return r=f,i=c.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(c,f){e=u(c,f,0)},this.setState=function(c,f,d){const g=c.clippingPlanes,v=c.clipIntersection,p=c.clipShadows,m=n.get(c);if(!r||g===null||g.length===0||s&&!p)s?u(null):l();else{const E=s?0:i,_=E*4;let y=m.clippingState||null;h.value=y,y=u(g,f,_,d);for(let x=0;x!==_;++x)y[x]=e[x];m.clippingState=y,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(c,f,d,g){const v=c!==null?c.length:0;let p=null;if(v!==0){if(p=h.value,g!==!0||p===null){const m=d+v*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<m)&&(p=new Float32Array(m));for(let _=0,y=d;_!==v;++_,y+=4)o.copy(c[_]).applyMatrix4(E,a),o.normal.toArray(p,y),p[y+3]=o.constant}h.value=p,h.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function p0(n){let t=new WeakMap;function e(o,a){return a===Go?o.mapping=xr:a===zo&&(o.mapping=Sr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Go||a===zo)if(t.has(o)){const h=t.get(o).texture;return e(h,o.mapping)}else{const h=o.image;if(h&&h.height>0){const l=new Cp(h.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",r),e(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function s(){t=new WeakMap}return{get:i,dispose:s}}class _u extends pu{constructor(t=-1,e=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-t,o=i+t,a=r+e,h=r-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,h=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const cr=4,Fl=[.125,.215,.35,.446,.526,.582],Di=20,mo=new _u,Bl=new $t;let go=null,_o=0,vo=0;const Ri=(1+Math.sqrt(5))/2,nr=1/Ri,Gl=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Ri,nr),new D(0,Ri,-nr),new D(nr,0,Ri),new D(-nr,0,Ri),new D(Ri,nr,0),new D(-Ri,nr,0)];class zl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,r=100){go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,i,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go,_o,vo),t.scissorTest=!1,$s(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===Sr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget(),_o=this._renderer.getActiveCubeFace(),vo=this._renderer.getActiveMipmapLevel();const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:cn,minFilter:cn,generateMipmaps:!1,type:hs,format:bn,colorSpace:ti,depthBuffer:!1},r=kl(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=kl(t,e,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=m0(s)),this._blurMaterial=g0(s,t,e)}return r}_compileMaterial(t){const e=new Ge(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,i,r){const a=new fn(90,1,e,i),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,c=u.autoClear,f=u.toneMapping;u.getClearColor(Bl),u.toneMapping=gi,u.autoClear=!1;const d=new Un({name:"PMREM.Background",side:Je,depthWrite:!1,depthTest:!1}),g=new Ge(new ms,d);let v=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,v=!0):(d.color.copy(Bl),v=!0);for(let m=0;m<6;m++){const E=m%3;E===0?(a.up.set(0,h[m],0),a.lookAt(l[m],0,0)):E===1?(a.up.set(0,0,h[m]),a.lookAt(0,l[m],0)):(a.up.set(0,h[m],0),a.lookAt(0,0,l[m]));const _=this._cubeSize;$s(r,E*_,m>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=c,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,r=t.mapping===xr||t.mapping===Sr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hl());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Ge(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const h=this._cubeSize;$s(e,0,0,3*h,2*h),i.setRenderTarget(e),i.render(o,mo)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Gl[(r-1)%Gl.length];this._blur(t,r-1,r,s,o)}e.autoClear=i}_blur(t,e,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,r,"latitudinal",s),this._halfBlur(o,t,i,i,r,"longitudinal",s)}_halfBlur(t,e,i,r,s,o,a){const h=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,c=new Ge(this._lodPlanes[r],l),f=l.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Di-1),v=s/g,p=isFinite(s)?1+Math.floor(u*v):Di;p>Di&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Di}`);const m=[];let E=0;for(let w=0;w<Di;++w){const A=w/v,M=Math.exp(-A*A/2);m.push(M),w===0?E+=M:w<p&&(E+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/E;f.envMap.value=t.texture,f.samples.value=p,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-i;const y=this._sizeLods[r],x=3*y*(r>_-cr?r-_+cr:0),T=4*(this._cubeSize-y);$s(e,x,T,3*y,2*y),h.setRenderTarget(e),h.render(c,mo)}}function m0(n){const t=[],e=[],i=[];let r=n;const s=n-cr+1+Fl.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let h=1/a;o>n-cr?h=Fl[o-n+cr-1]:o===0&&(h=0),i.push(h);const l=1/(a-2),u=-l,c=1+l,f=[u,u,c,u,c,c,u,u,c,c,u,c],d=6,g=6,v=3,p=2,m=1,E=new Float32Array(v*g*d),_=new Float32Array(p*g*d),y=new Float32Array(m*g*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,A=T>2?0:-1,M=[w,A,0,w+2/3,A,0,w+2/3,A+1,0,w,A,0,w+2/3,A+1,0,w,A+1,0];E.set(M,v*g*T),_.set(f,p*g*T);const S=[T,T,T,T,T,T];y.set(S,m*g*T)}const x=new ke;x.setAttribute("position",new gn(E,v)),x.setAttribute("uv",new gn(_,p)),x.setAttribute("faceIndex",new gn(y,m)),t.push(x),r>cr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function kl(n,t,e){const i=new Oi(n,t,e);return i.texture.mapping=Aa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function $s(n,t,e,i,r){n.viewport.set(t,e,i,r),n.scissor.set(t,e,i,r)}function g0(n,t,e){const i=new Float32Array(Di),r=new D(0,1,0);return new Fi({name:"SphericalGaussianBlur",defines:{n:Di,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ch(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Hl(){return new Fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ch(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Vl(){return new Fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ch(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function ch(){return`

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
	`}function _0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const h=a.mapping,l=h===Go||h===zo,u=h===xr||h===Sr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let c=t.get(a);return e===null&&(e=new zl(n)),c=l?e.fromEquirectangular(a,c):e.fromCubemap(a,c),t.set(a,c),c.texture}else{if(t.has(a))return t.get(a).texture;{const c=a.image;if(l&&c&&c.height>0||u&&c&&r(c)){e===null&&(e=new zl(n));const f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",s),f.texture}else return null}}}return a}function r(a){let h=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&h++;return h===l}function s(a){const h=a.target;h.removeEventListener("dispose",s);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function v0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return t[i]=r,r}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){const r=e(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y0(n,t,e,i){const r={},s=new WeakMap;function o(c){const f=c.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let p=0,m=v.length;p<m;p++)t.remove(v[p])}f.removeEventListener("dispose",o),delete r[f.id];const d=s.get(f);d&&(t.remove(d),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(c,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,e.memory.geometries++),f}function h(c){const f=c.attributes;for(const g in f)t.update(f[g],n.ARRAY_BUFFER);const d=c.morphAttributes;for(const g in d){const v=d[g];for(let p=0,m=v.length;p<m;p++)t.update(v[p],n.ARRAY_BUFFER)}}function l(c){const f=[],d=c.index,g=c.attributes.position;let v=0;if(d!==null){const E=d.array;v=d.version;for(let _=0,y=E.length;_<y;_+=3){const x=E[_+0],T=E[_+1],w=E[_+2];f.push(x,T,T,w,w,x)}}else if(g!==void 0){const E=g.array;v=g.version;for(let _=0,y=E.length/3-1;_<y;_+=3){const x=_+0,T=_+1,w=_+2;f.push(x,T,T,w,w,x)}}else return;const p=new(au(f)?fu:uu)(f,1);p.version=v;const m=s.get(c);m&&t.remove(m),s.set(c,p)}function u(c){const f=s.get(c);if(f){const d=c.index;d!==null&&f.version<d.version&&l(c)}else l(c);return s.get(c)}return{get:a,update:h,getWireframeAttribute:u}}function M0(n,t,e,i){const r=i.isWebGL2;let s;function o(f){s=f}let a,h;function l(f){a=f.type,h=f.bytesPerElement}function u(f,d){n.drawElements(s,d,a,f*h),e.update(d,s,1)}function c(f,d,g){if(g===0)return;let v,p;if(r)v=n,p="drawElementsInstanced";else if(v=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[p](s,d,a,f*h,g),e.update(d,s,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=c}function x0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(s/3);break;case n.LINES:e.lines+=a*(s/2);break;case n.LINE_STRIP:e.lines+=a*(s-1);break;case n.LINE_LOOP:e.lines+=a*s;break;case n.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:i}}function S0(n,t){return n[0]-t[0]}function E0(n,t){return Math.abs(t[1])-Math.abs(n[1])}function b0(n,t,e){const i={},r=new Float32Array(8),s=new WeakMap,o=new Le,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function h(l,u,c){const f=l.morphTargetInfluences;if(t.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let p=s.get(u);if(p===void 0||p.count!==v){let G=function(){k.dispose(),s.delete(u),u.removeEventListener("dispose",G)};var d=G;p!==void 0&&p.texture.dispose();const _=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,x=u.morphAttributes.color!==void 0,T=u.morphAttributes.position||[],w=u.morphAttributes.normal||[],A=u.morphAttributes.color||[];let M=0;_===!0&&(M=1),y===!0&&(M=2),x===!0&&(M=3);let S=u.attributes.position.count*M,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const P=new Float32Array(S*R*4*v),k=new lu(P,S,R,v);k.type=pi,k.needsUpdate=!0;const I=M*4;for(let q=0;q<v;q++){const B=T[q],J=w[q],K=A[q],j=S*R*4*q;for(let O=0;O<B.count;O++){const W=O*I;_===!0&&(o.fromBufferAttribute(B,O),P[j+W+0]=o.x,P[j+W+1]=o.y,P[j+W+2]=o.z,P[j+W+3]=0),y===!0&&(o.fromBufferAttribute(J,O),P[j+W+4]=o.x,P[j+W+5]=o.y,P[j+W+6]=o.z,P[j+W+7]=0),x===!0&&(o.fromBufferAttribute(K,O),P[j+W+8]=o.x,P[j+W+9]=o.y,P[j+W+10]=o.z,P[j+W+11]=K.itemSize===4?o.w:1)}}p={count:v,texture:k,size:new gt(S,R)},s.set(u,p),u.addEventListener("dispose",G)}let m=0;for(let _=0;_<f.length;_++)m+=f[_];const E=u.morphTargetsRelative?1:1-m;c.getUniforms().setValue(n,"morphTargetBaseInfluence",E),c.getUniforms().setValue(n,"morphTargetInfluences",f),c.getUniforms().setValue(n,"morphTargetsTexture",p.texture,e),c.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}else{const g=f===void 0?0:f.length;let v=i[u.id];if(v===void 0||v.length!==g){v=[];for(let y=0;y<g;y++)v[y]=[y,0];i[u.id]=v}for(let y=0;y<g;y++){const x=v[y];x[0]=y,x[1]=f[y]}v.sort(E0);for(let y=0;y<8;y++)y<g&&v[y][1]?(a[y][0]=v[y][0],a[y][1]=v[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(S0);const p=u.morphAttributes.position,m=u.morphAttributes.normal;let E=0;for(let y=0;y<8;y++){const x=a[y],T=x[0],w=x[1];T!==Number.MAX_SAFE_INTEGER&&w?(p&&u.getAttribute("morphTarget"+y)!==p[T]&&u.setAttribute("morphTarget"+y,p[T]),m&&u.getAttribute("morphNormal"+y)!==m[T]&&u.setAttribute("morphNormal"+y,m[T]),r[y]=w,E+=w):(p&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),m&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),r[y]=0)}const _=u.morphTargetsRelative?1:1-E;c.getUniforms().setValue(n,"morphTargetBaseInfluence",_),c.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:h}}function w0(n,t,e,i){let r=new WeakMap;function s(h){const l=i.render.frame,u=h.geometry,c=t.get(h,u);if(r.get(c)!==l&&(t.update(c),r.set(c,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",a)===!1&&h.addEventListener("dispose",a),r.get(h)!==l&&(e.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,n.ARRAY_BUFFER),r.set(h,l))),h.isSkinnedMesh){const f=h.skeleton;r.get(f)!==l&&(f.update(),r.set(f,l))}return c}function o(){r=new WeakMap}function a(h){const l=h.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:s,dispose:o}}const vu=new Ke,yu=new lu,Mu=new up,xu=new mu,Wl=[],$l=[],Xl=new Float32Array(16),ql=new Float32Array(9),Yl=new Float32Array(4);function Rr(n,t,e){const i=n[0];if(i<=0||i>0)return n;const r=t*e;let s=Wl[r];if(s===void 0&&(s=new Float32Array(r),Wl[r]=s),t!==0){i.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(s,a)}return s}function Se(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Da(n,t){let e=$l[t];e===void 0&&(e=new Int32Array(t),$l[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function A0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function T0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function C0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function R0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function L0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;Yl.set(i),n.uniformMatrix2fv(this.addr,!1,Yl),Ee(e,i)}}function P0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;ql.set(i),n.uniformMatrix3fv(this.addr,!1,ql),Ee(e,i)}}function D0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Se(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,i))return;Xl.set(i),n.uniformMatrix4fv(this.addr,!1,Xl),Ee(e,i)}}function N0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function I0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function U0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function O0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function F0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function B0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function G0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function z0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function k0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2D(t||vu,r)}function H0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture3D(t||Mu,r)}function V0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTextureCube(t||xu,r)}function W0(n,t,e){const i=this.cache,r=e.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),e.setTexture2DArray(t||yu,r)}function $0(n){switch(n){case 5126:return A0;case 35664:return T0;case 35665:return C0;case 35666:return R0;case 35674:return L0;case 35675:return P0;case 35676:return D0;case 5124:case 35670:return N0;case 35667:case 35671:return I0;case 35668:case 35672:return U0;case 35669:case 35673:return O0;case 5125:return F0;case 36294:return B0;case 36295:return G0;case 36296:return z0;case 35678:case 36198:case 36298:case 36306:case 35682:return k0;case 35679:case 36299:case 36307:return H0;case 35680:case 36300:case 36308:case 36293:return V0;case 36289:case 36303:case 36311:case 36292:return W0}}function X0(n,t){n.uniform1fv(this.addr,t)}function q0(n,t){const e=Rr(t,this.size,2);n.uniform2fv(this.addr,e)}function Y0(n,t){const e=Rr(t,this.size,3);n.uniform3fv(this.addr,e)}function j0(n,t){const e=Rr(t,this.size,4);n.uniform4fv(this.addr,e)}function K0(n,t){const e=Rr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Z0(n,t){const e=Rr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function J0(n,t){const e=Rr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Q0(n,t){n.uniform1iv(this.addr,t)}function t_(n,t){n.uniform2iv(this.addr,t)}function e_(n,t){n.uniform3iv(this.addr,t)}function n_(n,t){n.uniform4iv(this.addr,t)}function i_(n,t){n.uniform1uiv(this.addr,t)}function r_(n,t){n.uniform2uiv(this.addr,t)}function s_(n,t){n.uniform3uiv(this.addr,t)}function a_(n,t){n.uniform4uiv(this.addr,t)}function o_(n,t,e){const i=this.cache,r=t.length,s=Da(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||vu,s[o])}function h_(n,t,e){const i=this.cache,r=t.length,s=Da(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||Mu,s[o])}function l_(n,t,e){const i=this.cache,r=t.length,s=Da(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||xu,s[o])}function c_(n,t,e){const i=this.cache,r=t.length,s=Da(e,r);Se(i,s)||(n.uniform1iv(this.addr,s),Ee(i,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||yu,s[o])}function u_(n){switch(n){case 5126:return X0;case 35664:return q0;case 35665:return Y0;case 35666:return j0;case 35674:return K0;case 35675:return Z0;case 35676:return J0;case 5124:case 35670:return Q0;case 35667:case 35671:return t_;case 35668:case 35672:return e_;case 35669:case 35673:return n_;case 5125:return i_;case 36294:return r_;case 36295:return s_;case 36296:return a_;case 35678:case 36198:case 36298:case 36306:case 35682:return o_;case 35679:case 36299:case 36307:return h_;case 35680:case 36300:case 36308:case 36293:return l_;case 36289:case 36303:case 36311:case 36292:return c_}}class f_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.setValue=$0(e.type)}}class d_{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.size=e.size,this.setValue=u_(e.type)}}class p_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],i)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function jl(n,t){n.seq.push(t),n.map[t.id]=t}function m_(n,t,e){const i=n.name,r=i.length;for(yo.lastIndex=0;;){const s=yo.exec(i),o=yo.lastIndex;let a=s[1];const h=s[2]==="]",l=s[3];if(h&&(a=a|0),l===void 0||l==="["&&o+2===r){jl(e,l===void 0?new f_(a,n,t):new d_(a,n,t));break}else{let c=e.map[a];c===void 0&&(c=new p_(a),jl(e,c)),e=c}}}class ra{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);m_(s,o,this)}}setValue(t,e,i,r){const s=this.map[e];s!==void 0&&s.setValue(t,i,r)}setOptional(t,e,i){const r=e[i];r!==void 0&&this.setValue(t,i,r)}static upload(t,e,i,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],h=i[a.id];h.needsUpdate!==!1&&a.setValue(t,h.value,r)}}static seqWithValue(t,e){const i=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&i.push(o)}return i}}function Kl(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const g_=37297;let __=0;function v_(n,t){const e=n.split(`
`),i=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function y_(n){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(n);let i;switch(t===e?i="":t===ma&&e===pa?i="LinearDisplayP3ToLinearSRGB":t===pa&&e===ma&&(i="LinearSRGBToLinearDisplayP3"),n){case ti:case Ta:return[i,"LinearTransferOETF"];case De:case ah:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Zl(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),r=n.getShaderInfoLog(t).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+v_(n.getShaderSource(t),o)}else return r}function M_(n,t){const e=y_(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function x_(n,t){let e;switch(t){case vd:e="Linear";break;case yd:e="Reinhard";break;case Md:e="OptimizedCineon";break;case xd:e="ACESFilmic";break;case Sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function S_(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Yr).join(`
`)}function E_(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function b_(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(t,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Yr(n){return n!==""}function Jl(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ql(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const w_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(n){return n.replace(w_,T_)}const A_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function T_(n,t){let e=Vt[t];if(e===void 0){const i=A_.get(t);if(i!==void 0)e=Vt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Xo(e)}const C_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tc(n){return n.replace(C_,R_)}function R_(n,t,e,i){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ec(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function L_(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Kc?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Xf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function P_(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case xr:case Sr:t="ENVMAP_TYPE_CUBE";break;case Aa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function D_(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Sr:t="ENVMAP_MODE_REFRACTION";break}return t}function N_(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Zc:t="ENVMAP_BLENDING_MULTIPLY";break;case gd:t="ENVMAP_BLENDING_MIX";break;case _d:t="ENVMAP_BLENDING_ADD";break}return t}function I_(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function U_(n,t,e,i){const r=n.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const h=L_(e),l=P_(e),u=D_(e),c=N_(e),f=I_(e),d=e.isWebGL2?"":S_(e),g=E_(s),v=r.createProgram();let p,m,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),p.length>0&&(p+=`
`),m=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Yr).join(`
`),m.length>0&&(m+=`
`)):(p=[ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),m=[d,ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+c:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?Vt.tonemapping_pars_fragment:"",e.toneMapping!==gi?x_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,M_("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Yr).join(`
`)),o=Xo(o),o=Jl(o,e),o=Ql(o,e),a=Xo(a),a=Jl(a,e),a=Ql(a,e),o=tc(o),a=tc(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=E+p+o,y=E+m+a,x=Kl(r,r.VERTEX_SHADER,_),T=Kl(r,r.FRAGMENT_SHADER,y);r.attachShader(v,x),r.attachShader(v,T),e.index0AttributeName!==void 0?r.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(R){if(n.debug.checkShaderErrors){const P=r.getProgramInfoLog(v).trim(),k=r.getShaderInfoLog(x).trim(),I=r.getShaderInfoLog(T).trim();let G=!0,q=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(G=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,v,x,T);else{const B=Zl(r,x,"vertex"),J=Zl(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+P+`
`+B+`
`+J)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(k===""||I==="")&&(q=!1);q&&(R.diagnostics={runnable:G,programLog:P,vertexShader:{log:k,prefix:p},fragmentShader:{log:I,prefix:m}})}r.deleteShader(x),r.deleteShader(T),A=new ra(r,v),M=b_(r,v)}let A;this.getUniforms=function(){return A===void 0&&w(this),A};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(v,g_)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=__++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=x,this.fragmentShader=T,this}let O_=0;class F_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new B_(t),e.set(t,i)),i}}class B_{constructor(t){this.id=O_++,this.code=t,this.usedTimes=0}}function G_(n,t,e,i,r,s,o){const a=new hh,h=new F_,l=[],u=r.isWebGL2,c=r.logarithmicDepthBuffer,f=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,S,R,P,k){const I=P.fog,G=k.geometry,q=M.isMeshStandardMaterial?P.environment:null,B=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),J=B&&B.mapping===Aa?B.image.height:null,K=g[M.type];M.precision!==null&&(d=r.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const j=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,O=j!==void 0?j.length:0;let W=0;G.morphAttributes.position!==void 0&&(W=1),G.morphAttributes.normal!==void 0&&(W=2),G.morphAttributes.color!==void 0&&(W=3);let ut,pt,vt,Lt;if(K){const me=Ln[K];ut=me.vertexShader,pt=me.fragmentShader}else ut=M.vertexShader,pt=M.fragmentShader,h.update(M),vt=h.getVertexShaderID(M),Lt=h.getFragmentShaderID(M);const qt=n.getRenderTarget(),Dt=k.isInstancedMesh===!0,Ft=!!M.map,ae=!!M.matcap,Ht=!!B,z=!!M.aoMap,Ie=!!M.lightMap,wt=!!M.bumpMap,Nt=!!M.normalMap,It=!!M.displacementMap,he=!!M.emissiveMap,zt=!!M.metalnessMap,Bt=!!M.roughnessMap,Jt=M.anisotropy>0,pe=M.clearcoat>0,be=M.iridescence>0,L=M.sheen>0,b=M.transmission>0,H=Jt&&!!M.anisotropyMap,nt=pe&&!!M.clearcoatMap,Q=pe&&!!M.clearcoatNormalMap,it=pe&&!!M.clearcoatRoughnessMap,xt=be&&!!M.iridescenceMap,ot=be&&!!M.iridescenceThicknessMap,ft=L&&!!M.sheenColorMap,N=L&&!!M.sheenRoughnessMap,st=!!M.specularMap,Z=!!M.specularColorMap,Ct=!!M.specularIntensityMap,St=b&&!!M.transmissionMap,At=b&&!!M.thicknessMap,Mt=!!M.gradientMap,yt=!!M.alphaMap,Yt=M.alphaTest>0,U=!!M.alphaHash,ht=!!M.extensions,tt=!!G.attributes.uv1,Y=!!G.attributes.uv2,rt=!!G.attributes.uv3;let bt=gi;return M.toneMapped&&(qt===null||qt.isXRRenderTarget===!0)&&(bt=n.toneMapping),{isWebGL2:u,shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:ut,fragmentShader:pt,defines:M.defines,customVertexShaderID:vt,customFragmentShaderID:Lt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,instancing:Dt,instancingColor:Dt&&k.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:qt===null?n.outputColorSpace:qt.isXRRenderTarget===!0?qt.texture.colorSpace:ti,map:Ft,matcap:ae,envMap:Ht,envMapMode:Ht&&B.mapping,envMapCubeUVHeight:J,aoMap:z,lightMap:Ie,bumpMap:wt,normalMap:Nt,displacementMap:f&&It,emissiveMap:he,normalMapObjectSpace:Nt&&M.normalMapType===Od,normalMapTangentSpace:Nt&&M.normalMapType===Ud,metalnessMap:zt,roughnessMap:Bt,anisotropy:Jt,anisotropyMap:H,clearcoat:pe,clearcoatMap:nt,clearcoatNormalMap:Q,clearcoatRoughnessMap:it,iridescence:be,iridescenceMap:xt,iridescenceThicknessMap:ot,sheen:L,sheenColorMap:ft,sheenRoughnessMap:N,specularMap:st,specularColorMap:Z,specularIntensityMap:Ct,transmission:b,transmissionMap:St,thicknessMap:At,gradientMap:Mt,opaque:M.transparent===!1&&M.blending===gr,alphaMap:yt,alphaTest:Yt,alphaHash:U,combine:M.combine,mapUv:Ft&&v(M.map.channel),aoMapUv:z&&v(M.aoMap.channel),lightMapUv:Ie&&v(M.lightMap.channel),bumpMapUv:wt&&v(M.bumpMap.channel),normalMapUv:Nt&&v(M.normalMap.channel),displacementMapUv:It&&v(M.displacementMap.channel),emissiveMapUv:he&&v(M.emissiveMap.channel),metalnessMapUv:zt&&v(M.metalnessMap.channel),roughnessMapUv:Bt&&v(M.roughnessMap.channel),anisotropyMapUv:H&&v(M.anisotropyMap.channel),clearcoatMapUv:nt&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:Q&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:ft&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:N&&v(M.sheenRoughnessMap.channel),specularMapUv:st&&v(M.specularMap.channel),specularColorMapUv:Z&&v(M.specularColorMap.channel),specularIntensityMapUv:Ct&&v(M.specularIntensityMap.channel),transmissionMapUv:St&&v(M.transmissionMap.channel),thicknessMapUv:At&&v(M.thicknessMap.channel),alphaMapUv:yt&&v(M.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Nt||Jt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,vertexUv1s:tt,vertexUv2s:Y,vertexUv3s:rt,pointsUvs:k.isPoints===!0&&!!G.attributes.uv&&(Ft||yt),fog:!!I,useFog:M.fog===!0,fogExp2:I&&I.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:c,skinning:k.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:W,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:bt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ft&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===oe,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Yn,flipSided:M.side===Je,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ht&&M.extensions.derivatives===!0,extensionFragDepth:ht&&M.extensions.fragDepth===!0,extensionDrawBuffers:ht&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ht&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(E(S,M),_(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function E(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function _(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const S=g[M.type];let R;if(S){const P=Ln[S];R=bp.clone(P.uniforms)}else R=M.uniforms;return R}function x(M,S){let R;for(let P=0,k=l.length;P<k;P++){const I=l[P];if(I.cacheKey===S){R=I,++R.usedTimes;break}}return R===void 0&&(R=new U_(n,S,M,s),l.push(R)),R}function T(M){if(--M.usedTimes===0){const S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function w(M){h.remove(M)}function A(){h.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:y,acquireProgram:x,releaseProgram:T,releaseShaderCache:w,programs:l,dispose:A}}function z_(){let n=new WeakMap;function t(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function e(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:r}}function k_(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function nc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ic(){const n=[];let t=0;const e=[],i=[],r=[];function s(){t=0,e.length=0,i.length=0,r.length=0}function o(c,f,d,g,v,p){let m=n[t];return m===void 0?(m={id:c.id,object:c,geometry:f,material:d,groupOrder:g,renderOrder:c.renderOrder,z:v,group:p},n[t]=m):(m.id=c.id,m.object=c,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=c.renderOrder,m.z=v,m.group=p),t++,m}function a(c,f,d,g,v,p){const m=o(c,f,d,g,v,p);d.transmission>0?i.push(m):d.transparent===!0?r.push(m):e.push(m)}function h(c,f,d,g,v,p){const m=o(c,f,d,g,v,p);d.transmission>0?i.unshift(m):d.transparent===!0?r.unshift(m):e.unshift(m)}function l(c,f){e.length>1&&e.sort(c||k_),i.length>1&&i.sort(f||nc),r.length>1&&r.sort(f||nc)}function u(){for(let c=t,f=n.length;c<f;c++){const d=n[c];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:r,init:s,push:a,unshift:h,finish:u,sort:l}}function H_(){let n=new WeakMap;function t(i,r){const s=n.get(i);let o;return s===void 0?(o=new ic,n.set(i,[o])):r>=s.length?(o=new ic,s.push(o)):o=s[r],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function V_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new $t};break;case"SpotLight":e={position:new D,direction:new D,color:new $t,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new $t,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new $t,groundColor:new $t};break;case"RectAreaLight":e={color:new $t,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function W_(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let $_=0;function X_(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function q_(n,t){const e=new V_,i=W_(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new ue,a=new ue;function h(u,c){let f=0,d=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let v=0,p=0,m=0,E=0,_=0,y=0,x=0,T=0,w=0,A=0,M=0;u.sort(X_);const S=c===!0?Math.PI:1;for(let P=0,k=u.length;P<k;P++){const I=u[P],G=I.color,q=I.intensity,B=I.distance,J=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=G.r*q*S,d+=G.g*q*S,g+=G.b*q*S;else if(I.isLightProbe){for(let K=0;K<9;K++)r.probe[K].addScaledVector(I.sh.coefficients[K],q);M++}else if(I.isDirectionalLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const j=I.shadow,O=i.get(I);O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,r.directionalShadow[v]=O,r.directionalShadowMap[v]=J,r.directionalShadowMatrix[v]=I.shadow.matrix,y++}r.directional[v]=K,v++}else if(I.isSpotLight){const K=e.get(I);K.position.setFromMatrixPosition(I.matrixWorld),K.color.copy(G).multiplyScalar(q*S),K.distance=B,K.coneCos=Math.cos(I.angle),K.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),K.decay=I.decay,r.spot[m]=K;const j=I.shadow;if(I.map&&(r.spotLightMap[w]=I.map,w++,j.updateMatrices(I),I.castShadow&&A++),r.spotLightMatrix[m]=j.matrix,I.castShadow){const O=i.get(I);O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,r.spotShadow[m]=O,r.spotShadowMap[m]=J,T++}m++}else if(I.isRectAreaLight){const K=e.get(I);K.color.copy(G).multiplyScalar(q),K.halfWidth.set(I.width*.5,0,0),K.halfHeight.set(0,I.height*.5,0),r.rectArea[E]=K,E++}else if(I.isPointLight){const K=e.get(I);if(K.color.copy(I.color).multiplyScalar(I.intensity*S),K.distance=I.distance,K.decay=I.decay,I.castShadow){const j=I.shadow,O=i.get(I);O.shadowBias=j.bias,O.shadowNormalBias=j.normalBias,O.shadowRadius=j.radius,O.shadowMapSize=j.mapSize,O.shadowCameraNear=j.camera.near,O.shadowCameraFar=j.camera.far,r.pointShadow[p]=O,r.pointShadowMap[p]=J,r.pointShadowMatrix[p]=I.shadow.matrix,x++}r.point[p]=K,p++}else if(I.isHemisphereLight){const K=e.get(I);K.skyColor.copy(I.color).multiplyScalar(q*S),K.groundColor.copy(I.groundColor).multiplyScalar(q*S),r.hemi[_]=K,_++}}E>0&&(t.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_FLOAT_1,r.rectAreaLTC2=lt.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=lt.LTC_HALF_1,r.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=d,r.ambient[2]=g;const R=r.hash;(R.directionalLength!==v||R.pointLength!==p||R.spotLength!==m||R.rectAreaLength!==E||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==x||R.numSpotShadows!==T||R.numSpotMaps!==w||R.numLightProbes!==M)&&(r.directional.length=v,r.spot.length=m,r.rectArea.length=E,r.point.length=p,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=T+w-A,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=A,r.numLightProbes=M,R.directionalLength=v,R.pointLength=p,R.spotLength=m,R.rectAreaLength=E,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=x,R.numSpotShadows=T,R.numSpotMaps=w,R.numLightProbes=M,r.version=$_++)}function l(u,c){let f=0,d=0,g=0,v=0,p=0;const m=c.matrixWorldInverse;for(let E=0,_=u.length;E<_;E++){const y=u[E];if(y.isDirectionalLight){const x=r.directional[f];x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),f++}else if(y.isSpotLight){const x=r.spot[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(m),g++}else if(y.isRectAreaLight){const x=r.rectArea[v];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),a.identity(),o.copy(y.matrixWorld),o.premultiply(m),a.extractRotation(o),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(y.isPointLight){const x=r.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=r.hemi[p];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),p++}}}return{setup:h,setupView:l,state:r}}function rc(n,t){const e=new q_(n,t),i=[],r=[];function s(){i.length=0,r.length=0}function o(c){i.push(c)}function a(c){r.push(c)}function h(c){e.setup(i,c)}function l(c){e.setupView(i,c)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:e},setupLights:h,setupLightsView:l,pushLight:o,pushShadow:a}}function Y_(n,t){let e=new WeakMap;function i(s,o=0){const a=e.get(s);let h;return a===void 0?(h=new rc(n,t),e.set(s,[h])):o>=a.length?(h=new rc(n,t),a.push(h)):h=a[o],h}function r(){e=new WeakMap}return{get:i,dispose:r}}class j_ extends Cr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class K_ extends Cr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,J_=`uniform sampler2D shadow_pass;
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
}`;function Q_(n,t,e){let i=new lh;const r=new gt,s=new gt,o=new Le,a=new j_({depthPacking:Id}),h=new K_,l={},u=e.maxTextureSize,c={[Tn]:Je,[Je]:Tn,[Yn]:Yn},f=new Fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Z_,fragmentShader:J_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new ke;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Ge(g,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kc;let m=this.type;this.render=function(x,T,w){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||x.length===0)return;const A=n.getRenderTarget(),M=n.getActiveCubeFace(),S=n.getActiveMipmapLevel(),R=n.state;R.setBlending(mi),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);const P=m!==Xn&&this.type===Xn,k=m===Xn&&this.type!==Xn;for(let I=0,G=x.length;I<G;I++){const q=x[I],B=q.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const J=B.getFrameExtents();if(r.multiply(J),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/J.x),r.x=s.x*J.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/J.y),r.y=s.y*J.y,B.mapSize.y=s.y)),B.map===null||P===!0||k===!0){const j=this.type!==Xn?{minFilter:Ye,magFilter:Ye}:{};B.map!==null&&B.map.dispose(),B.map=new Oi(r.x,r.y,j),B.map.texture.name=q.name+".shadowMap",B.camera.updateProjectionMatrix()}n.setRenderTarget(B.map),n.clear();const K=B.getViewportCount();for(let j=0;j<K;j++){const O=B.getViewport(j);o.set(s.x*O.x,s.y*O.y,s.x*O.z,s.y*O.w),R.viewport(o),B.updateMatrices(q,j),i=B.getFrustum(),y(T,w,B.camera,q,this.type)}B.isPointLightShadow!==!0&&this.type===Xn&&E(B,w),B.needsUpdate=!1}m=this.type,p.needsUpdate=!1,n.setRenderTarget(A,M,S)};function E(x,T){const w=t.update(v);f.defines.VSM_SAMPLES!==x.blurSamples&&(f.defines.VSM_SAMPLES=x.blurSamples,d.defines.VSM_SAMPLES=x.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Oi(r.x,r.y)),f.uniforms.shadow_pass.value=x.map.texture,f.uniforms.resolution.value=x.mapSize,f.uniforms.radius.value=x.radius,n.setRenderTarget(x.mapPass),n.clear(),n.renderBufferDirect(T,null,w,f,v,null),d.uniforms.shadow_pass.value=x.mapPass.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,n.setRenderTarget(x.map),n.clear(),n.renderBufferDirect(T,null,w,d,v,null)}function _(x,T,w,A){let M=null;const S=w.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(S!==void 0)M=S;else if(M=w.isPointLight===!0?h:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const R=M.uuid,P=T.uuid;let k=l[R];k===void 0&&(k={},l[R]=k);let I=k[P];I===void 0&&(I=M.clone(),k[P]=I),M=I}if(M.visible=T.visible,M.wireframe=T.wireframe,A===Xn?M.side=T.shadowSide!==null?T.shadowSide:T.side:M.side=T.shadowSide!==null?T.shadowSide:c[T.side],M.alphaMap=T.alphaMap,M.alphaTest=T.alphaTest,M.map=T.map,M.clipShadows=T.clipShadows,M.clippingPlanes=T.clippingPlanes,M.clipIntersection=T.clipIntersection,M.displacementMap=T.displacementMap,M.displacementScale=T.displacementScale,M.displacementBias=T.displacementBias,M.wireframeLinewidth=T.wireframeLinewidth,M.linewidth=T.linewidth,w.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const R=n.properties.get(M);R.light=w}return M}function y(x,T,w,A,M){if(x.visible===!1)return;if(x.layers.test(T.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&M===Xn)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,x.matrixWorld);const P=t.update(x),k=x.material;if(Array.isArray(k)){const I=P.groups;for(let G=0,q=I.length;G<q;G++){const B=I[G],J=k[B.materialIndex];if(J&&J.visible){const K=_(x,J,A,M);n.renderBufferDirect(w,null,P,K,x,B)}}}else if(k.visible){const I=_(x,k,A,M);n.renderBufferDirect(w,null,P,I,x,null)}}const R=x.children;for(let P=0,k=R.length;P<k;P++)y(R[P],T,w,A,M)}}function tv(n,t,e){const i=e.isWebGL2;function r(){let U=!1;const ht=new Le;let tt=null;const Y=new Le(0,0,0,0);return{setMask:function(rt){tt!==rt&&!U&&(n.colorMask(rt,rt,rt,rt),tt=rt)},setLocked:function(rt){U=rt},setClear:function(rt,bt,jt,me,an){an===!0&&(rt*=me,bt*=me,jt*=me),ht.set(rt,bt,jt,me),Y.equals(ht)===!1&&(n.clearColor(rt,bt,jt,me),Y.copy(ht))},reset:function(){U=!1,tt=null,Y.set(-1,0,0,0)}}}function s(){let U=!1,ht=null,tt=null,Y=null;return{setTest:function(rt){rt?Ft(n.DEPTH_TEST):ae(n.DEPTH_TEST)},setMask:function(rt){ht!==rt&&!U&&(n.depthMask(rt),ht=rt)},setFunc:function(rt){if(tt!==rt){switch(rt){case ld:n.depthFunc(n.NEVER);break;case cd:n.depthFunc(n.ALWAYS);break;case ud:n.depthFunc(n.LESS);break;case fa:n.depthFunc(n.LEQUAL);break;case fd:n.depthFunc(n.EQUAL);break;case dd:n.depthFunc(n.GEQUAL);break;case pd:n.depthFunc(n.GREATER);break;case md:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=rt}},setLocked:function(rt){U=rt},setClear:function(rt){Y!==rt&&(n.clearDepth(rt),Y=rt)},reset:function(){U=!1,ht=null,tt=null,Y=null}}}function o(){let U=!1,ht=null,tt=null,Y=null,rt=null,bt=null,jt=null,me=null,an=null;return{setTest:function(se){U||(se?Ft(n.STENCIL_TEST):ae(n.STENCIL_TEST))},setMask:function(se){ht!==se&&!U&&(n.stencilMask(se),ht=se)},setFunc:function(se,He,Cn){(tt!==se||Y!==He||rt!==Cn)&&(n.stencilFunc(se,He,Cn),tt=se,Y=He,rt=Cn)},setOp:function(se,He,Cn){(bt!==se||jt!==He||me!==Cn)&&(n.stencilOp(se,He,Cn),bt=se,jt=He,me=Cn)},setLocked:function(se){U=se},setClear:function(se){an!==se&&(n.clearStencil(se),an=se)},reset:function(){U=!1,ht=null,tt=null,Y=null,rt=null,bt=null,jt=null,me=null,an=null}}}const a=new r,h=new s,l=new o,u=new WeakMap,c=new WeakMap;let f={},d={},g=new WeakMap,v=[],p=null,m=!1,E=null,_=null,y=null,x=null,T=null,w=null,A=null,M=new $t(0,0,0),S=0,R=!1,P=null,k=null,I=null,G=null,q=null;const B=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let J=!1,K=0;const j=n.getParameter(n.VERSION);j.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(j)[1]),J=K>=1):j.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),J=K>=2);let O=null,W={};const ut=n.getParameter(n.SCISSOR_BOX),pt=n.getParameter(n.VIEWPORT),vt=new Le().fromArray(ut),Lt=new Le().fromArray(pt);function qt(U,ht,tt,Y){const rt=new Uint8Array(4),bt=n.createTexture();n.bindTexture(U,bt),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let jt=0;jt<tt;jt++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(ht,0,n.RGBA,1,1,Y,0,n.RGBA,n.UNSIGNED_BYTE,rt):n.texImage2D(ht+jt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,rt);return bt}const Dt={};Dt[n.TEXTURE_2D]=qt(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=qt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Dt[n.TEXTURE_2D_ARRAY]=qt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=qt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),h.setClear(1),l.setClear(0),Ft(n.DEPTH_TEST),h.setFunc(fa),zt(!1),Bt(zh),Ft(n.CULL_FACE),It(mi);function Ft(U){f[U]!==!0&&(n.enable(U),f[U]=!0)}function ae(U){f[U]!==!1&&(n.disable(U),f[U]=!1)}function Ht(U,ht){return d[U]!==ht?(n.bindFramebuffer(U,ht),d[U]=ht,i&&(U===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ht),U===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ht)),!0):!1}function z(U,ht){let tt=v,Y=!1;if(U)if(tt=g.get(ht),tt===void 0&&(tt=[],g.set(ht,tt)),U.isWebGLMultipleRenderTargets){const rt=U.texture;if(tt.length!==rt.length||tt[0]!==n.COLOR_ATTACHMENT0){for(let bt=0,jt=rt.length;bt<jt;bt++)tt[bt]=n.COLOR_ATTACHMENT0+bt;tt.length=rt.length,Y=!0}}else tt[0]!==n.COLOR_ATTACHMENT0&&(tt[0]=n.COLOR_ATTACHMENT0,Y=!0);else tt[0]!==n.BACK&&(tt[0]=n.BACK,Y=!0);Y&&(e.isWebGL2?n.drawBuffers(tt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(tt))}function Ie(U){return p!==U?(n.useProgram(U),p=U,!0):!1}const wt={[Pi]:n.FUNC_ADD,[Yf]:n.FUNC_SUBTRACT,[jf]:n.FUNC_REVERSE_SUBTRACT};if(i)wt[Wh]=n.MIN,wt[$h]=n.MAX;else{const U=t.get("EXT_blend_minmax");U!==null&&(wt[Wh]=U.MIN_EXT,wt[$h]=U.MAX_EXT)}const Nt={[Kf]:n.ZERO,[Zf]:n.ONE,[Jf]:n.SRC_COLOR,[Fo]:n.SRC_ALPHA,[rd]:n.SRC_ALPHA_SATURATE,[nd]:n.DST_COLOR,[td]:n.DST_ALPHA,[Qf]:n.ONE_MINUS_SRC_COLOR,[Bo]:n.ONE_MINUS_SRC_ALPHA,[id]:n.ONE_MINUS_DST_COLOR,[ed]:n.ONE_MINUS_DST_ALPHA,[sd]:n.CONSTANT_COLOR,[ad]:n.ONE_MINUS_CONSTANT_COLOR,[od]:n.CONSTANT_ALPHA,[hd]:n.ONE_MINUS_CONSTANT_ALPHA};function It(U,ht,tt,Y,rt,bt,jt,me,an,se){if(U===mi){m===!0&&(ae(n.BLEND),m=!1);return}if(m===!1&&(Ft(n.BLEND),m=!0),U!==qf){if(U!==E||se!==R){if((_!==Pi||T!==Pi)&&(n.blendEquation(n.FUNC_ADD),_=Pi,T=Pi),se)switch(U){case gr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kh:n.blendFunc(n.ONE,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case gr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case kh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Hh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Vh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,x=null,w=null,A=null,M.set(0,0,0),S=0,E=U,R=se}return}rt=rt||ht,bt=bt||tt,jt=jt||Y,(ht!==_||rt!==T)&&(n.blendEquationSeparate(wt[ht],wt[rt]),_=ht,T=rt),(tt!==y||Y!==x||bt!==w||jt!==A)&&(n.blendFuncSeparate(Nt[tt],Nt[Y],Nt[bt],Nt[jt]),y=tt,x=Y,w=bt,A=jt),(me.equals(M)===!1||an!==S)&&(n.blendColor(me.r,me.g,me.b,an),M.copy(me),S=an),E=U,R=!1}function he(U,ht){U.side===Yn?ae(n.CULL_FACE):Ft(n.CULL_FACE);let tt=U.side===Je;ht&&(tt=!tt),zt(tt),U.blending===gr&&U.transparent===!1?It(mi):It(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),h.setFunc(U.depthFunc),h.setTest(U.depthTest),h.setMask(U.depthWrite),a.setMask(U.colorWrite);const Y=U.stencilWrite;l.setTest(Y),Y&&(l.setMask(U.stencilWriteMask),l.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),l.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),pe(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?Ft(n.SAMPLE_ALPHA_TO_COVERAGE):ae(n.SAMPLE_ALPHA_TO_COVERAGE)}function zt(U){P!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),P=U)}function Bt(U){U!==Wf?(Ft(n.CULL_FACE),U!==k&&(U===zh?n.cullFace(n.BACK):U===$f?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ae(n.CULL_FACE),k=U}function Jt(U){U!==I&&(J&&n.lineWidth(U),I=U)}function pe(U,ht,tt){U?(Ft(n.POLYGON_OFFSET_FILL),(G!==ht||q!==tt)&&(n.polygonOffset(ht,tt),G=ht,q=tt)):ae(n.POLYGON_OFFSET_FILL)}function be(U){U?Ft(n.SCISSOR_TEST):ae(n.SCISSOR_TEST)}function L(U){U===void 0&&(U=n.TEXTURE0+B-1),O!==U&&(n.activeTexture(U),O=U)}function b(U,ht,tt){tt===void 0&&(O===null?tt=n.TEXTURE0+B-1:tt=O);let Y=W[tt];Y===void 0&&(Y={type:void 0,texture:void 0},W[tt]=Y),(Y.type!==U||Y.texture!==ht)&&(O!==tt&&(n.activeTexture(tt),O=tt),n.bindTexture(U,ht||Dt[U]),Y.type=U,Y.texture=ht)}function H(){const U=W[O];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function nt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function it(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function xt(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function N(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function st(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ct(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(U){vt.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),vt.copy(U))}function At(U){Lt.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),Lt.copy(U))}function Mt(U,ht){let tt=c.get(ht);tt===void 0&&(tt=new WeakMap,c.set(ht,tt));let Y=tt.get(U);Y===void 0&&(Y=n.getUniformBlockIndex(ht,U.name),tt.set(U,Y))}function yt(U,ht){const Y=c.get(ht).get(U);u.get(ht)!==Y&&(n.uniformBlockBinding(ht,Y,U.__bindingPointIndex),u.set(ht,Y))}function Yt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},O=null,W={},d={},g=new WeakMap,v=[],p=null,m=!1,E=null,_=null,y=null,x=null,T=null,w=null,A=null,M=new $t(0,0,0),S=0,R=!1,P=null,k=null,I=null,G=null,q=null,vt.set(0,0,n.canvas.width,n.canvas.height),Lt.set(0,0,n.canvas.width,n.canvas.height),a.reset(),h.reset(),l.reset()}return{buffers:{color:a,depth:h,stencil:l},enable:Ft,disable:ae,bindFramebuffer:Ht,drawBuffers:z,useProgram:Ie,setBlending:It,setMaterial:he,setFlipSided:zt,setCullFace:Bt,setLineWidth:Jt,setPolygonOffset:pe,setScissorTest:be,activeTexture:L,bindTexture:b,unbindTexture:H,compressedTexImage2D:nt,compressedTexImage3D:Q,texImage2D:Z,texImage3D:Ct,updateUBOMapping:Mt,uniformBlockBinding:yt,texStorage2D:N,texStorage3D:st,texSubImage2D:it,texSubImage3D:xt,compressedTexSubImage2D:ot,compressedTexSubImage3D:ft,scissor:St,viewport:At,reset:Yt}}function ev(n,t,e,i,r,s,o){const a=r.isWebGL2,h=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,c=r.maxSamples,f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,b){return m?new OffscreenCanvas(L,b):cs("canvas")}function _(L,b,H,nt){let Q=1;if((L.width>nt||L.height>nt)&&(Q=nt/Math.max(L.width,L.height)),Q<1||b===!0)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap){const it=b?_a:Math.floor,xt=it(Q*L.width),ot=it(Q*L.height);v===void 0&&(v=E(xt,ot));const ft=H?E(xt,ot):v;return ft.width=xt,ft.height=ot,ft.getContext("2d").drawImage(L,0,0,xt,ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+L.width+"x"+L.height+") to ("+xt+"x"+ot+")."),ft}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+L.width+"x"+L.height+")."),L;return L}function y(L){return $o(L.width)&&$o(L.height)}function x(L){return a?!1:L.wrapS!==En||L.wrapT!==En||L.minFilter!==Ye&&L.minFilter!==cn}function T(L,b){return L.generateMipmaps&&b&&L.minFilter!==Ye&&L.minFilter!==cn}function w(L){n.generateMipmap(L)}function A(L,b,H,nt,Q=!1){if(a===!1)return b;if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let it=b;if(b===n.RED&&(H===n.FLOAT&&(it=n.R32F),H===n.HALF_FLOAT&&(it=n.R16F),H===n.UNSIGNED_BYTE&&(it=n.R8)),b===n.RED_INTEGER&&(H===n.UNSIGNED_BYTE&&(it=n.R8UI),H===n.UNSIGNED_SHORT&&(it=n.R16UI),H===n.UNSIGNED_INT&&(it=n.R32UI),H===n.BYTE&&(it=n.R8I),H===n.SHORT&&(it=n.R16I),H===n.INT&&(it=n.R32I)),b===n.RG&&(H===n.FLOAT&&(it=n.RG32F),H===n.HALF_FLOAT&&(it=n.RG16F),H===n.UNSIGNED_BYTE&&(it=n.RG8)),b===n.RGBA){const xt=Q?da:ne.getTransfer(nt);H===n.FLOAT&&(it=n.RGBA32F),H===n.HALF_FLOAT&&(it=n.RGBA16F),H===n.UNSIGNED_BYTE&&(it=xt===oe?n.SRGB8_ALPHA8:n.RGBA8),H===n.UNSIGNED_SHORT_4_4_4_4&&(it=n.RGBA4),H===n.UNSIGNED_SHORT_5_5_5_1&&(it=n.RGB5_A1)}return(it===n.R16F||it===n.R32F||it===n.RG16F||it===n.RG32F||it===n.RGBA16F||it===n.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function M(L,b,H){return T(L,H)===!0||L.isFramebufferTexture&&L.minFilter!==Ye&&L.minFilter!==cn?Math.log2(Math.max(b.width,b.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?b.mipmaps.length:1}function S(L){return L===Ye||L===Xh||L===$a?n.NEAREST:n.LINEAR}function R(L){const b=L.target;b.removeEventListener("dispose",R),k(b),b.isVideoTexture&&g.delete(b)}function P(L){const b=L.target;b.removeEventListener("dispose",P),G(b)}function k(L){const b=i.get(L);if(b.__webglInit===void 0)return;const H=L.source,nt=p.get(H);if(nt){const Q=nt[b.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&I(L),Object.keys(nt).length===0&&p.delete(H)}i.remove(L)}function I(L){const b=i.get(L);n.deleteTexture(b.__webglTexture);const H=L.source,nt=p.get(H);delete nt[b.__cacheKey],o.memory.textures--}function G(L){const b=L.texture,H=i.get(L),nt=i.get(b);if(nt.__webglTexture!==void 0&&(n.deleteTexture(nt.__webglTexture),o.memory.textures--),L.depthTexture&&L.depthTexture.dispose(),L.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(H.__webglFramebuffer[Q]))for(let it=0;it<H.__webglFramebuffer[Q].length;it++)n.deleteFramebuffer(H.__webglFramebuffer[Q][it]);else n.deleteFramebuffer(H.__webglFramebuffer[Q]);H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer[Q])}else{if(Array.isArray(H.__webglFramebuffer))for(let Q=0;Q<H.__webglFramebuffer.length;Q++)n.deleteFramebuffer(H.__webglFramebuffer[Q]);else n.deleteFramebuffer(H.__webglFramebuffer);if(H.__webglDepthbuffer&&n.deleteRenderbuffer(H.__webglDepthbuffer),H.__webglMultisampledFramebuffer&&n.deleteFramebuffer(H.__webglMultisampledFramebuffer),H.__webglColorRenderbuffer)for(let Q=0;Q<H.__webglColorRenderbuffer.length;Q++)H.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(H.__webglColorRenderbuffer[Q]);H.__webglDepthRenderbuffer&&n.deleteRenderbuffer(H.__webglDepthRenderbuffer)}if(L.isWebGLMultipleRenderTargets)for(let Q=0,it=b.length;Q<it;Q++){const xt=i.get(b[Q]);xt.__webglTexture&&(n.deleteTexture(xt.__webglTexture),o.memory.textures--),i.remove(b[Q])}i.remove(b),i.remove(L)}let q=0;function B(){q=0}function J(){const L=q;return L>=h&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+h),q+=1,L}function K(L){const b=[];return b.push(L.wrapS),b.push(L.wrapT),b.push(L.wrapR||0),b.push(L.magFilter),b.push(L.minFilter),b.push(L.anisotropy),b.push(L.internalFormat),b.push(L.format),b.push(L.type),b.push(L.generateMipmaps),b.push(L.premultiplyAlpha),b.push(L.flipY),b.push(L.unpackAlignment),b.push(L.colorSpace),b.join()}function j(L,b){const H=i.get(L);if(L.isVideoTexture&&pe(L),L.isRenderTargetTexture===!1&&L.version>0&&H.__version!==L.version){const nt=L.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ft(H,L,b);return}}e.bindTexture(n.TEXTURE_2D,H.__webglTexture,n.TEXTURE0+b)}function O(L,b){const H=i.get(L);if(L.version>0&&H.__version!==L.version){Ft(H,L,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,H.__webglTexture,n.TEXTURE0+b)}function W(L,b){const H=i.get(L);if(L.version>0&&H.__version!==L.version){Ft(H,L,b);return}e.bindTexture(n.TEXTURE_3D,H.__webglTexture,n.TEXTURE0+b)}function ut(L,b){const H=i.get(L);if(L.version>0&&H.__version!==L.version){ae(H,L,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,H.__webglTexture,n.TEXTURE0+b)}const pt={[ko]:n.REPEAT,[En]:n.CLAMP_TO_EDGE,[Ho]:n.MIRRORED_REPEAT},vt={[Ye]:n.NEAREST,[Xh]:n.NEAREST_MIPMAP_NEAREST,[$a]:n.NEAREST_MIPMAP_LINEAR,[cn]:n.LINEAR,[Ed]:n.LINEAR_MIPMAP_NEAREST,[os]:n.LINEAR_MIPMAP_LINEAR},Lt={[Fd]:n.NEVER,[Wd]:n.ALWAYS,[Bd]:n.LESS,[zd]:n.LEQUAL,[Gd]:n.EQUAL,[Vd]:n.GEQUAL,[kd]:n.GREATER,[Hd]:n.NOTEQUAL};function qt(L,b,H){if(H?(n.texParameteri(L,n.TEXTURE_WRAP_S,pt[b.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,pt[b.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,pt[b.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,vt[b.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,vt[b.minFilter])):(n.texParameteri(L,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(L,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==En||b.wrapT!==En)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(L,n.TEXTURE_MAG_FILTER,S(b.magFilter)),n.texParameteri(L,n.TEXTURE_MIN_FILTER,S(b.minFilter)),b.minFilter!==Ye&&b.minFilter!==cn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,Lt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){const nt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===Ye||b.minFilter!==$a&&b.minFilter!==os||b.type===pi&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===hs&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(L,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,r.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function Dt(L,b){let H=!1;L.__webglInit===void 0&&(L.__webglInit=!0,b.addEventListener("dispose",R));const nt=b.source;let Q=p.get(nt);Q===void 0&&(Q={},p.set(nt,Q));const it=K(b);if(it!==L.__cacheKey){Q[it]===void 0&&(Q[it]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,H=!0),Q[it].usedTimes++;const xt=Q[L.__cacheKey];xt!==void 0&&(Q[L.__cacheKey].usedTimes--,xt.usedTimes===0&&I(b)),L.__cacheKey=it,L.__webglTexture=Q[it].texture}return H}function Ft(L,b,H){let nt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(nt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(nt=n.TEXTURE_3D);const Q=Dt(L,b),it=b.source;e.bindTexture(nt,L.__webglTexture,n.TEXTURE0+H);const xt=i.get(it);if(it.version!==xt.__version||Q===!0){e.activeTexture(n.TEXTURE0+H);const ot=ne.getPrimaries(ne.workingColorSpace),ft=b.colorSpace===pn?null:ne.getPrimaries(b.colorSpace),N=b.colorSpace===pn||ot===ft?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,N);const st=x(b)&&y(b.image)===!1;let Z=_(b.image,st,!1,u);Z=be(b,Z);const Ct=y(Z)||a,St=s.convert(b.format,b.colorSpace);let At=s.convert(b.type),Mt=A(b.internalFormat,St,At,b.colorSpace,b.isVideoTexture);qt(nt,b,Ct);let yt;const Yt=b.mipmaps,U=a&&b.isVideoTexture!==!0,ht=xt.__version===void 0||Q===!0,tt=M(b,Z,Ct);if(b.isDepthTexture)Mt=n.DEPTH_COMPONENT,a?b.type===pi?Mt=n.DEPTH_COMPONENT32F:b.type===di?Mt=n.DEPTH_COMPONENT24:b.type===Ni?Mt=n.DEPTH24_STENCIL8:Mt=n.DEPTH_COMPONENT16:b.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===Ii&&Mt===n.DEPTH_COMPONENT&&b.type!==sh&&b.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=di,At=s.convert(b.type)),b.format===Er&&Mt===n.DEPTH_COMPONENT&&(Mt=n.DEPTH_STENCIL,b.type!==Ni&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=Ni,At=s.convert(b.type))),ht&&(U?e.texStorage2D(n.TEXTURE_2D,1,Mt,Z.width,Z.height):e.texImage2D(n.TEXTURE_2D,0,Mt,Z.width,Z.height,0,St,At,null));else if(b.isDataTexture)if(Yt.length>0&&Ct){U&&ht&&e.texStorage2D(n.TEXTURE_2D,tt,Mt,Yt[0].width,Yt[0].height);for(let Y=0,rt=Yt.length;Y<rt;Y++)yt=Yt[Y],U?e.texSubImage2D(n.TEXTURE_2D,Y,0,0,yt.width,yt.height,St,At,yt.data):e.texImage2D(n.TEXTURE_2D,Y,Mt,yt.width,yt.height,0,St,At,yt.data);b.generateMipmaps=!1}else U?(ht&&e.texStorage2D(n.TEXTURE_2D,tt,Mt,Z.width,Z.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Z.width,Z.height,St,At,Z.data)):e.texImage2D(n.TEXTURE_2D,0,Mt,Z.width,Z.height,0,St,At,Z.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){U&&ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Mt,Yt[0].width,Yt[0].height,Z.depth);for(let Y=0,rt=Yt.length;Y<rt;Y++)yt=Yt[Y],b.format!==bn?St!==null?U?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,Z.depth,St,yt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Mt,yt.width,yt.height,Z.depth,0,yt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?e.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,yt.width,yt.height,Z.depth,St,At,yt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Y,Mt,yt.width,yt.height,Z.depth,0,St,At,yt.data)}else{U&&ht&&e.texStorage2D(n.TEXTURE_2D,tt,Mt,Yt[0].width,Yt[0].height);for(let Y=0,rt=Yt.length;Y<rt;Y++)yt=Yt[Y],b.format!==bn?St!==null?U?e.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(n.TEXTURE_2D,Y,Mt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):U?e.texSubImage2D(n.TEXTURE_2D,Y,0,0,yt.width,yt.height,St,At,yt.data):e.texImage2D(n.TEXTURE_2D,Y,Mt,yt.width,yt.height,0,St,At,yt.data)}else if(b.isDataArrayTexture)U?(ht&&e.texStorage3D(n.TEXTURE_2D_ARRAY,tt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,St,At,Z.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,Z.width,Z.height,Z.depth,0,St,At,Z.data);else if(b.isData3DTexture)U?(ht&&e.texStorage3D(n.TEXTURE_3D,tt,Mt,Z.width,Z.height,Z.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,St,At,Z.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,Z.width,Z.height,Z.depth,0,St,At,Z.data);else if(b.isFramebufferTexture){if(ht)if(U)e.texStorage2D(n.TEXTURE_2D,tt,Mt,Z.width,Z.height);else{let Y=Z.width,rt=Z.height;for(let bt=0;bt<tt;bt++)e.texImage2D(n.TEXTURE_2D,bt,Mt,Y,rt,0,St,At,null),Y>>=1,rt>>=1}}else if(Yt.length>0&&Ct){U&&ht&&e.texStorage2D(n.TEXTURE_2D,tt,Mt,Yt[0].width,Yt[0].height);for(let Y=0,rt=Yt.length;Y<rt;Y++)yt=Yt[Y],U?e.texSubImage2D(n.TEXTURE_2D,Y,0,0,St,At,yt):e.texImage2D(n.TEXTURE_2D,Y,Mt,St,At,yt);b.generateMipmaps=!1}else U?(ht&&e.texStorage2D(n.TEXTURE_2D,tt,Mt,Z.width,Z.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,St,At,Z)):e.texImage2D(n.TEXTURE_2D,0,Mt,St,At,Z);T(b,Ct)&&w(nt),xt.__version=it.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function ae(L,b,H){if(b.image.length!==6)return;const nt=Dt(L,b),Q=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+H);const it=i.get(Q);if(Q.version!==it.__version||nt===!0){e.activeTexture(n.TEXTURE0+H);const xt=ne.getPrimaries(ne.workingColorSpace),ot=b.colorSpace===pn?null:ne.getPrimaries(b.colorSpace),ft=b.colorSpace===pn||xt===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const N=b.isCompressedTexture||b.image[0].isCompressedTexture,st=b.image[0]&&b.image[0].isDataTexture,Z=[];for(let Y=0;Y<6;Y++)!N&&!st?Z[Y]=_(b.image[Y],!1,!0,l):Z[Y]=st?b.image[Y].image:b.image[Y],Z[Y]=be(b,Z[Y]);const Ct=Z[0],St=y(Ct)||a,At=s.convert(b.format,b.colorSpace),Mt=s.convert(b.type),yt=A(b.internalFormat,At,Mt,b.colorSpace),Yt=a&&b.isVideoTexture!==!0,U=it.__version===void 0||nt===!0;let ht=M(b,Ct,St);qt(n.TEXTURE_CUBE_MAP,b,St);let tt;if(N){Yt&&U&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,yt,Ct.width,Ct.height);for(let Y=0;Y<6;Y++){tt=Z[Y].mipmaps;for(let rt=0;rt<tt.length;rt++){const bt=tt[rt];b.format!==bn?At!==null?Yt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt,0,0,bt.width,bt.height,At,bt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt,yt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Yt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt,0,0,bt.width,bt.height,At,Mt,bt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt,yt,bt.width,bt.height,0,At,Mt,bt.data)}}}else{tt=b.mipmaps,Yt&&U&&(tt.length>0&&ht++,e.texStorage2D(n.TEXTURE_CUBE_MAP,ht,yt,Z[0].width,Z[0].height));for(let Y=0;Y<6;Y++)if(st){Yt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Z[Y].width,Z[Y].height,At,Mt,Z[Y].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,yt,Z[Y].width,Z[Y].height,0,At,Mt,Z[Y].data);for(let rt=0;rt<tt.length;rt++){const jt=tt[rt].image[Y].image;Yt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt+1,0,0,jt.width,jt.height,At,Mt,jt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt+1,yt,jt.width,jt.height,0,At,Mt,jt.data)}}else{Yt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,At,Mt,Z[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,yt,At,Mt,Z[Y]);for(let rt=0;rt<tt.length;rt++){const bt=tt[rt];Yt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt+1,0,0,At,Mt,bt.image[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,rt+1,yt,At,Mt,bt.image[Y])}}}T(b,St)&&w(n.TEXTURE_CUBE_MAP),it.__version=Q.version,b.onUpdate&&b.onUpdate(b)}L.__version=b.version}function Ht(L,b,H,nt,Q,it){const xt=s.convert(H.format,H.colorSpace),ot=s.convert(H.type),ft=A(H.internalFormat,xt,ot,H.colorSpace);if(!i.get(b).__hasExternalTextures){const st=Math.max(1,b.width>>it),Z=Math.max(1,b.height>>it);Q===n.TEXTURE_3D||Q===n.TEXTURE_2D_ARRAY?e.texImage3D(Q,it,ft,st,Z,b.depth,0,xt,ot,null):e.texImage2D(Q,it,ft,st,Z,0,xt,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),Jt(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,nt,Q,i.get(H).__webglTexture,0,Bt(b)):(Q===n.TEXTURE_2D||Q>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,nt,Q,i.get(H).__webglTexture,it),e.bindFramebuffer(n.FRAMEBUFFER,null)}function z(L,b,H){if(n.bindRenderbuffer(n.RENDERBUFFER,L),b.depthBuffer&&!b.stencilBuffer){let nt=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(H||Jt(b)){const Q=b.depthTexture;Q&&Q.isDepthTexture&&(Q.type===pi?nt=n.DEPTH_COMPONENT32F:Q.type===di&&(nt=n.DEPTH_COMPONENT24));const it=Bt(b);Jt(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,nt,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,it,nt,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,nt,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,L)}else if(b.depthBuffer&&b.stencilBuffer){const nt=Bt(b);H&&Jt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,nt,n.DEPTH24_STENCIL8,b.width,b.height):Jt(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,nt,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,L)}else{const nt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let Q=0;Q<nt.length;Q++){const it=nt[Q],xt=s.convert(it.format,it.colorSpace),ot=s.convert(it.type),ft=A(it.internalFormat,xt,ot,it.colorSpace),N=Bt(b);H&&Jt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,N,ft,b.width,b.height):Jt(b)?f.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,N,ft,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ft,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ie(L,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),j(b.depthTexture,0);const nt=i.get(b.depthTexture).__webglTexture,Q=Bt(b);if(b.depthTexture.format===Ii)Jt(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,nt,0);else if(b.depthTexture.format===Er)Jt(b)?f.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function wt(L){const b=i.get(L),H=L.isWebGLCubeRenderTarget===!0;if(L.depthTexture&&!b.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");Ie(b.__webglFramebuffer,L)}else if(H){b.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[nt]),b.__webglDepthbuffer[nt]=n.createRenderbuffer(),z(b.__webglDepthbuffer[nt],L,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),z(b.__webglDepthbuffer,L,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(L,b,H){const nt=i.get(L);b!==void 0&&Ht(nt.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),H!==void 0&&wt(L)}function It(L){const b=L.texture,H=i.get(L),nt=i.get(b);L.addEventListener("dispose",P),L.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=n.createTexture()),nt.__version=b.version,o.memory.textures++);const Q=L.isWebGLCubeRenderTarget===!0,it=L.isWebGLMultipleRenderTargets===!0,xt=y(L)||a;if(Q){H.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(a&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer[ot]=[];for(let ft=0;ft<b.mipmaps.length;ft++)H.__webglFramebuffer[ot][ft]=n.createFramebuffer()}else H.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){H.__webglFramebuffer=[];for(let ot=0;ot<b.mipmaps.length;ot++)H.__webglFramebuffer[ot]=n.createFramebuffer()}else H.__webglFramebuffer=n.createFramebuffer();if(it)if(r.drawBuffers){const ot=L.texture;for(let ft=0,N=ot.length;ft<N;ft++){const st=i.get(ot[ft]);st.__webglTexture===void 0&&(st.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&L.samples>0&&Jt(L)===!1){const ot=it?b:[b];H.__webglMultisampledFramebuffer=n.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ft=0;ft<ot.length;ft++){const N=ot[ft];H.__webglColorRenderbuffer[ft]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,H.__webglColorRenderbuffer[ft]);const st=s.convert(N.format,N.colorSpace),Z=s.convert(N.type),Ct=A(N.internalFormat,st,Z,N.colorSpace,L.isXRRenderTarget===!0),St=Bt(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,St,Ct,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ft,n.RENDERBUFFER,H.__webglColorRenderbuffer[ft])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(H.__webglDepthRenderbuffer=n.createRenderbuffer(),z(H.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,nt.__webglTexture),qt(n.TEXTURE_CUBE_MAP,b,xt);for(let ot=0;ot<6;ot++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)Ht(H.__webglFramebuffer[ot][ft],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ft);else Ht(H.__webglFramebuffer[ot],L,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);T(b,xt)&&w(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(it){const ot=L.texture;for(let ft=0,N=ot.length;ft<N;ft++){const st=ot[ft],Z=i.get(st);e.bindTexture(n.TEXTURE_2D,Z.__webglTexture),qt(n.TEXTURE_2D,st,xt),Ht(H.__webglFramebuffer,L,st,n.COLOR_ATTACHMENT0+ft,n.TEXTURE_2D,0),T(st,xt)&&w(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(a?ot=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ot,nt.__webglTexture),qt(ot,b,xt),a&&b.mipmaps&&b.mipmaps.length>0)for(let ft=0;ft<b.mipmaps.length;ft++)Ht(H.__webglFramebuffer[ft],L,b,n.COLOR_ATTACHMENT0,ot,ft);else Ht(H.__webglFramebuffer,L,b,n.COLOR_ATTACHMENT0,ot,0);T(b,xt)&&w(ot),e.unbindTexture()}L.depthBuffer&&wt(L)}function he(L){const b=y(L)||a,H=L.isWebGLMultipleRenderTargets===!0?L.texture:[L.texture];for(let nt=0,Q=H.length;nt<Q;nt++){const it=H[nt];if(T(it,b)){const xt=L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ot=i.get(it).__webglTexture;e.bindTexture(xt,ot),w(xt),e.unbindTexture()}}}function zt(L){if(a&&L.samples>0&&Jt(L)===!1){const b=L.isWebGLMultipleRenderTargets?L.texture:[L.texture],H=L.width,nt=L.height;let Q=n.COLOR_BUFFER_BIT;const it=[],xt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=i.get(L),ft=L.isWebGLMultipleRenderTargets===!0;if(ft)for(let N=0;N<b.length;N++)e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+N,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+N,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ot.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglFramebuffer);for(let N=0;N<b.length;N++){it.push(n.COLOR_ATTACHMENT0+N),L.depthBuffer&&it.push(xt);const st=ot.__ignoreDepthValues!==void 0?ot.__ignoreDepthValues:!1;if(st===!1&&(L.depthBuffer&&(Q|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&(Q|=n.STENCIL_BUFFER_BIT)),ft&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ot.__webglColorRenderbuffer[N]),st===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[xt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[xt])),ft){const Z=i.get(b[N]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Z,0)}n.blitFramebuffer(0,0,H,nt,0,0,H,nt,Q,n.NEAREST),d&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,it)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ft)for(let N=0;N<b.length;N++){e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+N,n.RENDERBUFFER,ot.__webglColorRenderbuffer[N]);const st=i.get(b[N]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+N,n.TEXTURE_2D,st,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ot.__webglMultisampledFramebuffer)}}function Bt(L){return Math.min(c,L.samples)}function Jt(L){const b=i.get(L);return a&&L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function pe(L){const b=o.render.frame;g.get(L)!==b&&(g.set(L,b),L.update())}function be(L,b){const H=L.colorSpace,nt=L.format,Q=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||L.format===Wo||H!==ti&&H!==pn&&(ne.getTransfer(H)===oe?a===!1?t.has("EXT_sRGB")===!0&&nt===bn?(L.format=Wo,L.minFilter=cn,L.generateMipmaps=!1):b=ou.sRGBToLinear(b):(nt!==bn||Q!==_i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),b}this.allocateTextureUnit=J,this.resetTextureUnits=B,this.setTexture2D=j,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=ut,this.rebindTextures=Nt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=he,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=Ht,this.useMultisampledRTT=Jt}function nv(n,t,e){const i=e.isWebGL2;function r(s,o=pn){let a;const h=ne.getTransfer(o);if(s===_i)return n.UNSIGNED_BYTE;if(s===tu)return n.UNSIGNED_SHORT_4_4_4_4;if(s===eu)return n.UNSIGNED_SHORT_5_5_5_1;if(s===bd)return n.BYTE;if(s===wd)return n.SHORT;if(s===sh)return n.UNSIGNED_SHORT;if(s===Qc)return n.INT;if(s===di)return n.UNSIGNED_INT;if(s===pi)return n.FLOAT;if(s===hs)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Ad)return n.ALPHA;if(s===bn)return n.RGBA;if(s===Td)return n.LUMINANCE;if(s===Cd)return n.LUMINANCE_ALPHA;if(s===Ii)return n.DEPTH_COMPONENT;if(s===Er)return n.DEPTH_STENCIL;if(s===Wo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Rd)return n.RED;if(s===nu)return n.RED_INTEGER;if(s===Ld)return n.RG;if(s===iu)return n.RG_INTEGER;if(s===ru)return n.RGBA_INTEGER;if(s===Xa||s===qa||s===Ya||s===ja)if(h===oe)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Xa)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===qa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ya)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ja)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Xa)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===qa)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ya)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ja)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===qh||s===Yh||s===jh||s===Kh)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===qh)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yh)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===jh)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kh)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Pd)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Zh||s===Jh)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Zh)return h===oe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===Jh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Qh||s===tl||s===el||s===nl||s===il||s===rl||s===sl||s===al||s===ol||s===hl||s===ll||s===cl||s===ul||s===fl)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Qh)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tl)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===el)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===nl)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===il)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===rl)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===sl)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===al)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===ol)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===hl)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ll)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===cl)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===ul)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fl)return h===oe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ka||s===dl||s===pl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(s===Ka)return h===oe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===dl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===pl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Dd||s===ml||s===gl||s===_l)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(s===Ka)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ml)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===gl)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===_l)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ni?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class iv extends fn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class mn extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const rv={type:"move"};class Mo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new mn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new mn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new mn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let r=null,s=null,o=null;const a=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const p=e.getJointPose(v,i),m=this._getHandJoint(l,v);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const u=l.joints["index-finger-tip"],c=l.joints["thumb-tip"],f=u.position.distanceTo(c.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,i),s!==null&&(h.matrix.fromArray(s.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,s.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(s.linearVelocity)):h.hasLinearVelocity=!1,s.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(s.angularVelocity)):h.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(rv)))}return a!==null&&(a.visible=r!==null),h!==null&&(h.visible=s!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new mn;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}class sv extends Ke{constructor(t,e,i,r,s,o,a,h,l,u){if(u=u!==void 0?u:Ii,u!==Ii&&u!==Er)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ii&&(i=di),i===void 0&&u===Er&&(i=Ni),super(null,r,s,o,a,h,u,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Ye,this.minFilter=h!==void 0?h:Ye,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class av extends zi{constructor(t,e){super();const i=this;let r=null,s=1,o=null,a="local-floor",h=1,l=null,u=null,c=null,f=null,d=null,g=null;const v=e.getContextAttributes();let p=null,m=null;const E=[],_=[],y=new fn;y.layers.enable(1),y.viewport=new Le;const x=new fn;x.layers.enable(2),x.viewport=new Le;const T=[y,x],w=new iv;w.layers.enable(1),w.layers.enable(2);let A=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=E[O];return W===void 0&&(W=new Mo,E[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=E[O];return W===void 0&&(W=new Mo,E[O]=W),W.getGripSpace()},this.getHand=function(O){let W=E[O];return W===void 0&&(W=new Mo,E[O]=W),W.getHandSpace()};function S(O){const W=_.indexOf(O.inputSource);if(W===-1)return;const ut=E[W];ut!==void 0&&(ut.update(O.inputSource,O.frame,l||o),ut.dispatchEvent({type:O.type,data:O.inputSource}))}function R(){r.removeEventListener("select",S),r.removeEventListener("selectstart",S),r.removeEventListener("selectend",S),r.removeEventListener("squeeze",S),r.removeEventListener("squeezestart",S),r.removeEventListener("squeezeend",S),r.removeEventListener("end",R),r.removeEventListener("inputsourceschange",P);for(let O=0;O<E.length;O++){const W=_[O];W!==null&&(_[O]=null,E[O].disconnect(W))}A=null,M=null,t.setRenderTarget(p),d=null,f=null,c=null,r=null,m=null,j.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){a=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(O){l=O},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",S),r.addEventListener("selectstart",S),r.addEventListener("selectend",S),r.addEventListener("squeeze",S),r.addEventListener("squeezestart",S),r.addEventListener("squeezeend",S),r.addEventListener("end",R),r.addEventListener("inputsourceschange",P),v.xrCompatible!==!0&&await e.makeXRCompatible(),r.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,e,W),r.updateRenderState({baseLayer:d}),m=new Oi(d.framebufferWidth,d.framebufferHeight,{format:bn,type:_i,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let W=null,ut=null,pt=null;v.depth&&(pt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,W=v.stencil?Er:Ii,ut=v.stencil?Ni:di);const vt={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:s};c=new XRWebGLBinding(r,e),f=c.createProjectionLayer(vt),r.updateRenderState({layers:[f]}),m=new Oi(f.textureWidth,f.textureHeight,{format:bn,type:_i,depthTexture:new sv(f.textureWidth,f.textureHeight,ut,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});const Lt=t.properties.get(m);Lt.__ignoreDepthValues=f.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(h),l=null,o=await r.requestReferenceSpace(a),j.setContext(r),j.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function P(O){for(let W=0;W<O.removed.length;W++){const ut=O.removed[W],pt=_.indexOf(ut);pt>=0&&(_[pt]=null,E[pt].disconnect(ut))}for(let W=0;W<O.added.length;W++){const ut=O.added[W];let pt=_.indexOf(ut);if(pt===-1){for(let Lt=0;Lt<E.length;Lt++)if(Lt>=_.length){_.push(ut),pt=Lt;break}else if(_[Lt]===null){_[Lt]=ut,pt=Lt;break}if(pt===-1)break}const vt=E[pt];vt&&vt.connect(ut)}}const k=new D,I=new D;function G(O,W,ut){k.setFromMatrixPosition(W.matrixWorld),I.setFromMatrixPosition(ut.matrixWorld);const pt=k.distanceTo(I),vt=W.projectionMatrix.elements,Lt=ut.projectionMatrix.elements,qt=vt[14]/(vt[10]-1),Dt=vt[14]/(vt[10]+1),Ft=(vt[9]+1)/vt[5],ae=(vt[9]-1)/vt[5],Ht=(vt[8]-1)/vt[0],z=(Lt[8]+1)/Lt[0],Ie=qt*Ht,wt=qt*z,Nt=pt/(-Ht+z),It=Nt*-Ht;W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(It),O.translateZ(Nt),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const he=qt+Nt,zt=Dt+Nt,Bt=Ie-It,Jt=wt+(pt-It),pe=Ft*Dt/zt*he,be=ae*Dt/zt*he;O.projectionMatrix.makePerspective(Bt,Jt,pe,be,he,zt),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function q(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;w.near=x.near=y.near=O.near,w.far=x.far=y.far=O.far,(A!==w.near||M!==w.far)&&(r.updateRenderState({depthNear:w.near,depthFar:w.far}),A=w.near,M=w.far);const W=O.parent,ut=w.cameras;q(w,W);for(let pt=0;pt<ut.length;pt++)q(ut[pt],W);ut.length===2?G(w,y,x):w.projectionMatrix.copy(y.projectionMatrix),B(O,w,W)};function B(O,W,ut){ut===null?O.matrix.copy(W.matrixWorld):(O.matrix.copy(ut.matrixWorld),O.matrix.invert(),O.matrix.multiply(W.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ls*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return w},this.getFoveation=function(){if(!(f===null&&d===null))return h},this.setFoveation=function(O){h=O,f!==null&&(f.fixedFoveation=O),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=O)};let J=null;function K(O,W){if(u=W.getViewerPose(l||o),g=W,u!==null){const ut=u.views;d!==null&&(t.setRenderTargetFramebuffer(m,d.framebuffer),t.setRenderTarget(m));let pt=!1;ut.length!==w.cameras.length&&(w.cameras.length=0,pt=!0);for(let vt=0;vt<ut.length;vt++){const Lt=ut[vt];let qt=null;if(d!==null)qt=d.getViewport(Lt);else{const Ft=c.getViewSubImage(f,Lt);qt=Ft.viewport,vt===0&&(t.setRenderTargetTextures(m,Ft.colorTexture,f.ignoreDepthValues?void 0:Ft.depthStencilTexture),t.setRenderTarget(m))}let Dt=T[vt];Dt===void 0&&(Dt=new fn,Dt.layers.enable(vt),Dt.viewport=new Le,T[vt]=Dt),Dt.matrix.fromArray(Lt.transform.matrix),Dt.matrix.decompose(Dt.position,Dt.quaternion,Dt.scale),Dt.projectionMatrix.fromArray(Lt.projectionMatrix),Dt.projectionMatrixInverse.copy(Dt.projectionMatrix).invert(),Dt.viewport.set(qt.x,qt.y,qt.width,qt.height),vt===0&&(w.matrix.copy(Dt.matrix),w.matrix.decompose(w.position,w.quaternion,w.scale)),pt===!0&&w.cameras.push(Dt)}}for(let ut=0;ut<E.length;ut++){const pt=_[ut],vt=E[ut];pt!==null&&vt!==void 0&&vt.update(pt,W,l||o)}J&&J(O,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),g=null}const j=new gu;j.setAnimationLoop(K),this.setAnimationLoop=function(O){J=O},this.dispose=function(){}}}function ov(n,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,du(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function r(p,m,E,_,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(p,m):m.isMeshToonMaterial?(s(p,m),c(p,m)):m.isMeshPhongMaterial?(s(p,m),u(p,m)):m.isMeshStandardMaterial?(s(p,m),f(p,m),m.isMeshPhysicalMaterial&&d(p,m,y)):m.isMeshMatcapMaterial?(s(p,m),g(p,m)):m.isMeshDepthMaterial?s(p,m):m.isMeshDistanceMaterial?(s(p,m),v(p,m)):m.isMeshNormalMaterial?s(p,m):m.isLineBasicMaterial?(o(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?h(p,m,E,_):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Je&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Je&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const E=t.get(m).envMap;if(E&&(p.envMap.value=E,p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const _=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*_,e(m.lightMap,p.lightMapTransform)}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function o(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function h(p,m,E,_){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*E,p.scale.value=_*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function u(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function c(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),t.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,E){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Je&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function v(p,m){const E=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hv(n,t,e,i){let r={},s={},o=[];const a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function h(E,_){const y=_.program;i.uniformBlockBinding(E,y)}function l(E,_){let y=r[E.id];y===void 0&&(g(E),y=u(E),r[E.id]=y,E.addEventListener("dispose",p));const x=_.program;i.updateUBOMapping(E,x);const T=t.render.frame;s[E.id]!==T&&(f(E),s[E.id]=T)}function u(E){const _=c();E.__bindingPointIndex=_;const y=n.createBuffer(),x=E.__size,T=E.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,x,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function c(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const _=r[E.id],y=E.uniforms,x=E.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,w=y.length;T<w;T++){const A=y[T];if(d(A,T,x)===!0){const M=A.__offset,S=Array.isArray(A.value)?A.value:[A.value];let R=0;for(let P=0;P<S.length;P++){const k=S[P],I=v(k);typeof k=="number"?(A.__data[0]=k,n.bufferSubData(n.UNIFORM_BUFFER,M+R,A.__data)):k.isMatrix3?(A.__data[0]=k.elements[0],A.__data[1]=k.elements[1],A.__data[2]=k.elements[2],A.__data[3]=k.elements[0],A.__data[4]=k.elements[3],A.__data[5]=k.elements[4],A.__data[6]=k.elements[5],A.__data[7]=k.elements[0],A.__data[8]=k.elements[6],A.__data[9]=k.elements[7],A.__data[10]=k.elements[8],A.__data[11]=k.elements[0]):(k.toArray(A.__data,R),R+=I.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,A.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(E,_,y){const x=E.value;if(y[_]===void 0){if(typeof x=="number")y[_]=x;else{const T=Array.isArray(x)?x:[x],w=[];for(let A=0;A<T.length;A++)w.push(T[A].clone());y[_]=w}return!0}else if(typeof x=="number"){if(y[_]!==x)return y[_]=x,!0}else{const T=Array.isArray(y[_])?y[_]:[y[_]],w=Array.isArray(x)?x:[x];for(let A=0;A<T.length;A++){const M=T[A];if(M.equals(w[A])===!1)return M.copy(w[A]),!0}}return!1}function g(E){const _=E.uniforms;let y=0;const x=16;let T=0;for(let w=0,A=_.length;w<A;w++){const M=_[w],S={boundary:0,storage:0},R=Array.isArray(M.value)?M.value:[M.value];for(let P=0,k=R.length;P<k;P++){const I=R[P],G=v(I);S.boundary+=G.boundary,S.storage+=G.storage}if(M.__data=new Float32Array(S.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,w>0){T=y%x;const P=x-T;T!==0&&P-S.boundary<0&&(y+=x-T,M.__offset=y)}y+=S.storage}return T=y%x,T>0&&(y+=x-T),E.__size=y,E.__cache={},this}function v(E){const _={boundary:0,storage:0};return typeof E=="number"?(_.boundary=4,_.storage=4):E.isVector2?(_.boundary=8,_.storage=8):E.isVector3||E.isColor?(_.boundary=16,_.storage=12):E.isVector4?(_.boundary=16,_.storage=16):E.isMatrix3?(_.boundary=48,_.storage=48):E.isMatrix4?(_.boundary=64,_.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),_}function p(E){const _=E.target;_.removeEventListener("dispose",p);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function m(){for(const E in r)n.deleteBuffer(r[E]);o=[],r={},s={}}return{bind:h,update:l,dispose:m}}class Su{constructor(t={}){const{canvas:e=ap(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:c=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=o;const d=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const m=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this._useLegacyLights=!1,this.toneMapping=gi,this.toneMappingExposure=1;const _=this;let y=!1,x=0,T=0,w=null,A=-1,M=null;const S=new Le,R=new Le;let P=null;const k=new $t(0);let I=0,G=e.width,q=e.height,B=1,J=null,K=null;const j=new Le(0,0,G,q),O=new Le(0,0,G,q);let W=!1;const ut=new lh;let pt=!1,vt=!1,Lt=null;const qt=new ue,Dt=new gt,Ft=new D,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ht(){return w===null?B:1}let z=i;function Ie(C,F){for(let V=0;V<C.length;V++){const $=C[V],X=e.getContext($,F);if(X!==null)return X}return null}try{const C={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${rh}`),e.addEventListener("webglcontextlost",Yt,!1),e.addEventListener("webglcontextrestored",U,!1),e.addEventListener("webglcontextcreationerror",ht,!1),z===null){const F=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&F.shift(),z=Ie(F,C),z===null)throw Ie(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let wt,Nt,It,he,zt,Bt,Jt,pe,be,L,b,H,nt,Q,it,xt,ot,ft,N,st,Z,Ct,St,At;function Mt(){wt=new v0(z),Nt=new f0(z,wt,t),wt.init(Nt),Ct=new nv(z,wt,Nt),It=new tv(z,wt,Nt),he=new x0(z),zt=new z_,Bt=new ev(z,wt,It,zt,Nt,Ct,he),Jt=new p0(_),pe=new _0(_),be=new Pp(z,Nt),St=new c0(z,wt,be,Nt),L=new y0(z,be,he,St),b=new w0(z,L,be,he),N=new b0(z,Nt,Bt),xt=new d0(zt),H=new G_(_,Jt,pe,wt,Nt,St,xt),nt=new ov(_,zt),Q=new H_,it=new Y_(wt,Nt),ft=new l0(_,Jt,pe,It,b,f,h),ot=new Q_(_,b,Nt),At=new hv(z,he,Nt,It),st=new u0(z,wt,he,Nt),Z=new M0(z,wt,he,Nt),he.programs=H.programs,_.capabilities=Nt,_.extensions=wt,_.properties=zt,_.renderLists=Q,_.shadowMap=ot,_.state=It,_.info=he}Mt();const yt=new av(_,z);this.xr=yt,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const C=wt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=wt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(G,q,!1))},this.getSize=function(C){return C.set(G,q)},this.setSize=function(C,F,V=!0){if(yt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=C,q=F,e.width=Math.floor(C*B),e.height=Math.floor(F*B),V===!0&&(e.style.width=C+"px",e.style.height=F+"px"),this.setViewport(0,0,C,F)},this.getDrawingBufferSize=function(C){return C.set(G*B,q*B).floor()},this.setDrawingBufferSize=function(C,F,V){G=C,q=F,B=V,e.width=Math.floor(C*V),e.height=Math.floor(F*V),this.setViewport(0,0,C,F)},this.getCurrentViewport=function(C){return C.copy(S)},this.getViewport=function(C){return C.copy(j)},this.setViewport=function(C,F,V,$){C.isVector4?j.set(C.x,C.y,C.z,C.w):j.set(C,F,V,$),It.viewport(S.copy(j).multiplyScalar(B).floor())},this.getScissor=function(C){return C.copy(O)},this.setScissor=function(C,F,V,$){C.isVector4?O.set(C.x,C.y,C.z,C.w):O.set(C,F,V,$),It.scissor(R.copy(O).multiplyScalar(B).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(C){It.setScissorTest(W=C)},this.setOpaqueSort=function(C){J=C},this.setTransparentSort=function(C){K=C},this.getClearColor=function(C){return C.copy(ft.getClearColor())},this.setClearColor=function(){ft.setClearColor.apply(ft,arguments)},this.getClearAlpha=function(){return ft.getClearAlpha()},this.setClearAlpha=function(){ft.setClearAlpha.apply(ft,arguments)},this.clear=function(C=!0,F=!0,V=!0){let $=0;if(C){let X=!1;if(w!==null){const mt=w.texture.format;X=mt===ru||mt===iu||mt===nu}if(X){const mt=w.texture.type,Et=mt===_i||mt===di||mt===sh||mt===Ni||mt===tu||mt===eu,Rt=ft.getClearColor(),Ut=ft.getClearAlpha(),Wt=Rt.r,Gt=Rt.g,kt=Rt.b;Et?(d[0]=Wt,d[1]=Gt,d[2]=kt,d[3]=Ut,z.clearBufferuiv(z.COLOR,0,d)):(g[0]=Wt,g[1]=Gt,g[2]=kt,g[3]=Ut,z.clearBufferiv(z.COLOR,0,g))}else $|=z.COLOR_BUFFER_BIT}F&&($|=z.DEPTH_BUFFER_BIT),V&&($|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Yt,!1),e.removeEventListener("webglcontextrestored",U,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),Q.dispose(),it.dispose(),zt.dispose(),Jt.dispose(),pe.dispose(),b.dispose(),St.dispose(),At.dispose(),H.dispose(),yt.dispose(),yt.removeEventListener("sessionstart",an),yt.removeEventListener("sessionend",se),Lt&&(Lt.dispose(),Lt=null),He.stop()};function Yt(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const C=he.autoReset,F=ot.enabled,V=ot.autoUpdate,$=ot.needsUpdate,X=ot.type;Mt(),he.autoReset=C,ot.enabled=F,ot.autoUpdate=V,ot.needsUpdate=$,ot.type=X}function ht(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function tt(C){const F=C.target;F.removeEventListener("dispose",tt),Y(F)}function Y(C){rt(C),zt.remove(C)}function rt(C){const F=zt.get(C).programs;F!==void 0&&(F.forEach(function(V){H.releaseProgram(V)}),C.isShaderMaterial&&H.releaseShaderCache(C))}this.renderBufferDirect=function(C,F,V,$,X,mt){F===null&&(F=ae);const Et=X.isMesh&&X.matrixWorld.determinant()<0,Rt=Gf(C,F,V,$,X);It.setMaterial($,Et);let Ut=V.index,Wt=1;if($.wireframe===!0){if(Ut=L.getWireframeAttribute(V),Ut===void 0)return;Wt=2}const Gt=V.drawRange,kt=V.attributes.position;let fe=Gt.start*Wt,en=(Gt.start+Gt.count)*Wt;mt!==null&&(fe=Math.max(fe,mt.start*Wt),en=Math.min(en,(mt.start+mt.count)*Wt)),Ut!==null?(fe=Math.max(fe,0),en=Math.min(en,Ut.count)):kt!=null&&(fe=Math.max(fe,0),en=Math.min(en,kt.count));const we=en-fe;if(we<0||we===1/0)return;St.setup(X,$,Rt,V,Ut);let zn,ce=st;if(Ut!==null&&(zn=be.get(Ut),ce=Z,ce.setIndex(zn)),X.isMesh)$.wireframe===!0?(It.setLineWidth($.wireframeLinewidth*Ht()),ce.setMode(z.LINES)):ce.setMode(z.TRIANGLES);else if(X.isLine){let Kt=$.linewidth;Kt===void 0&&(Kt=1),It.setLineWidth(Kt*Ht()),X.isLineSegments?ce.setMode(z.LINES):X.isLineLoop?ce.setMode(z.LINE_LOOP):ce.setMode(z.LINE_STRIP)}else X.isPoints?ce.setMode(z.POINTS):X.isSprite&&ce.setMode(z.TRIANGLES);if(X.isInstancedMesh)ce.renderInstances(fe,we,X.count);else if(V.isInstancedBufferGeometry){const Kt=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,ka=Math.min(V.instanceCount,Kt);ce.renderInstances(fe,we,ka)}else ce.render(fe,we)};function bt(C,F,V){C.transparent===!0&&C.side===Yn&&C.forceSinglePass===!1?(C.side=Je,C.needsUpdate=!0,Es(C,F,V),C.side=Tn,C.needsUpdate=!0,Es(C,F,V),C.side=Yn):Es(C,F,V)}this.compile=function(C,F,V=null){V===null&&(V=C),p=it.get(V),p.init(),E.push(p),V.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),C!==V&&C.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights(_._useLegacyLights);const $=new Set;return C.traverse(function(X){const mt=X.material;if(mt)if(Array.isArray(mt))for(let Et=0;Et<mt.length;Et++){const Rt=mt[Et];bt(Rt,V,X),$.add(Rt)}else bt(mt,V,X),$.add(mt)}),E.pop(),p=null,$},this.compileAsync=function(C,F,V=null){const $=this.compile(C,F,V);return new Promise(X=>{function mt(){if($.forEach(function(Et){zt.get(Et).currentProgram.isReady()&&$.delete(Et)}),$.size===0){X(C);return}setTimeout(mt,10)}wt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let jt=null;function me(C){jt&&jt(C)}function an(){He.stop()}function se(){He.start()}const He=new gu;He.setAnimationLoop(me),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(C){jt=C,yt.setAnimationLoop(C),C===null?He.stop():He.start()},yt.addEventListener("sessionstart",an),yt.addEventListener("sessionend",se),this.render=function(C,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),yt.enabled===!0&&yt.isPresenting===!0&&(yt.cameraAutoUpdate===!0&&yt.updateCamera(F),F=yt.getCamera()),C.isScene===!0&&C.onBeforeRender(_,C,F,w),p=it.get(C,E.length),p.init(),E.push(p),qt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),ut.setFromProjectionMatrix(qt),vt=this.localClippingEnabled,pt=xt.init(this.clippingPlanes,vt),v=Q.get(C,m.length),v.init(),m.push(v),Cn(C,F,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(J,K),this.info.render.frame++,pt===!0&&xt.beginShadows();const V=p.state.shadowsArray;if(ot.render(V,C,F),pt===!0&&xt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ft.render(v,C),p.setupLights(_._useLegacyLights),F.isArrayCamera){const $=F.cameras;for(let X=0,mt=$.length;X<mt;X++){const Et=$[X];Ih(v,C,Et,Et.viewport)}}else Ih(v,C,F);w!==null&&(Bt.updateMultisampleRenderTarget(w),Bt.updateRenderTargetMipmap(w)),C.isScene===!0&&C.onAfterRender(_,C,F),St.resetDefaultState(),A=-1,M=null,E.pop(),E.length>0?p=E[E.length-1]:p=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Cn(C,F,V,$){if(C.visible===!1)return;if(C.layers.test(F.layers)){if(C.isGroup)V=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(F);else if(C.isLight)p.pushLight(C),C.castShadow&&p.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||ut.intersectsSprite(C)){$&&Ft.setFromMatrixPosition(C.matrixWorld).applyMatrix4(qt);const Et=b.update(C),Rt=C.material;Rt.visible&&v.push(C,Et,Rt,V,Ft.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||ut.intersectsObject(C))){const Et=b.update(C),Rt=C.material;if($&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Ft.copy(C.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Ft.copy(Et.boundingSphere.center)),Ft.applyMatrix4(C.matrixWorld).applyMatrix4(qt)),Array.isArray(Rt)){const Ut=Et.groups;for(let Wt=0,Gt=Ut.length;Wt<Gt;Wt++){const kt=Ut[Wt],fe=Rt[kt.materialIndex];fe&&fe.visible&&v.push(C,Et,fe,V,Ft.z,kt)}}else Rt.visible&&v.push(C,Et,Rt,V,Ft.z,null)}}const mt=C.children;for(let Et=0,Rt=mt.length;Et<Rt;Et++)Cn(mt[Et],F,V,$)}function Ih(C,F,V,$){const X=C.opaque,mt=C.transmissive,Et=C.transparent;p.setupLightsView(V),pt===!0&&xt.setGlobalState(_.clippingPlanes,V),mt.length>0&&Bf(X,mt,F,V),$&&It.viewport(S.copy($)),X.length>0&&Ss(X,F,V),mt.length>0&&Ss(mt,F,V),Et.length>0&&Ss(Et,F,V),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Bf(C,F,V,$){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;const mt=Nt.isWebGL2;Lt===null&&(Lt=new Oi(1,1,{generateMipmaps:!0,type:wt.has("EXT_color_buffer_half_float")?hs:_i,minFilter:os,samples:mt?4:0})),_.getDrawingBufferSize(Dt),mt?Lt.setSize(Dt.x,Dt.y):Lt.setSize(_a(Dt.x),_a(Dt.y));const Et=_.getRenderTarget();_.setRenderTarget(Lt),_.getClearColor(k),I=_.getClearAlpha(),I<1&&_.setClearColor(16777215,.5),_.clear();const Rt=_.toneMapping;_.toneMapping=gi,Ss(C,V,$),Bt.updateMultisampleRenderTarget(Lt),Bt.updateRenderTargetMipmap(Lt);let Ut=!1;for(let Wt=0,Gt=F.length;Wt<Gt;Wt++){const kt=F[Wt],fe=kt.object,en=kt.geometry,we=kt.material,zn=kt.group;if(we.side===Yn&&fe.layers.test($.layers)){const ce=we.side;we.side=Je,we.needsUpdate=!0,Uh(fe,V,$,en,we,zn),we.side=ce,we.needsUpdate=!0,Ut=!0}}Ut===!0&&(Bt.updateMultisampleRenderTarget(Lt),Bt.updateRenderTargetMipmap(Lt)),_.setRenderTarget(Et),_.setClearColor(k,I),_.toneMapping=Rt}function Ss(C,F,V){const $=F.isScene===!0?F.overrideMaterial:null;for(let X=0,mt=C.length;X<mt;X++){const Et=C[X],Rt=Et.object,Ut=Et.geometry,Wt=$===null?Et.material:$,Gt=Et.group;Rt.layers.test(V.layers)&&Uh(Rt,F,V,Ut,Wt,Gt)}}function Uh(C,F,V,$,X,mt){C.onBeforeRender(_,F,V,$,X,mt),C.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),X.onBeforeRender(_,F,V,$,C,mt),X.transparent===!0&&X.side===Yn&&X.forceSinglePass===!1?(X.side=Je,X.needsUpdate=!0,_.renderBufferDirect(V,F,$,X,C,mt),X.side=Tn,X.needsUpdate=!0,_.renderBufferDirect(V,F,$,X,C,mt),X.side=Yn):_.renderBufferDirect(V,F,$,X,C,mt),C.onAfterRender(_,F,V,$,X,mt)}function Es(C,F,V){F.isScene!==!0&&(F=ae);const $=zt.get(C),X=p.state.lights,mt=p.state.shadowsArray,Et=X.state.version,Rt=H.getParameters(C,X.state,mt,F,V),Ut=H.getProgramCacheKey(Rt);let Wt=$.programs;$.environment=C.isMeshStandardMaterial?F.environment:null,$.fog=F.fog,$.envMap=(C.isMeshStandardMaterial?pe:Jt).get(C.envMap||$.environment),Wt===void 0&&(C.addEventListener("dispose",tt),Wt=new Map,$.programs=Wt);let Gt=Wt.get(Ut);if(Gt!==void 0){if($.currentProgram===Gt&&$.lightsStateVersion===Et)return Fh(C,Rt),Gt}else Rt.uniforms=H.getUniforms(C),C.onBuild(V,Rt,_),C.onBeforeCompile(Rt,_),Gt=H.acquireProgram(Rt,Ut),Wt.set(Ut,Gt),$.uniforms=Rt.uniforms;const kt=$.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(kt.clippingPlanes=xt.uniform),Fh(C,Rt),$.needsLights=kf(C),$.lightsStateVersion=Et,$.needsLights&&(kt.ambientLightColor.value=X.state.ambient,kt.lightProbe.value=X.state.probe,kt.directionalLights.value=X.state.directional,kt.directionalLightShadows.value=X.state.directionalShadow,kt.spotLights.value=X.state.spot,kt.spotLightShadows.value=X.state.spotShadow,kt.rectAreaLights.value=X.state.rectArea,kt.ltc_1.value=X.state.rectAreaLTC1,kt.ltc_2.value=X.state.rectAreaLTC2,kt.pointLights.value=X.state.point,kt.pointLightShadows.value=X.state.pointShadow,kt.hemisphereLights.value=X.state.hemi,kt.directionalShadowMap.value=X.state.directionalShadowMap,kt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,kt.spotShadowMap.value=X.state.spotShadowMap,kt.spotLightMatrix.value=X.state.spotLightMatrix,kt.spotLightMap.value=X.state.spotLightMap,kt.pointShadowMap.value=X.state.pointShadowMap,kt.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=Gt,$.uniformsList=null,Gt}function Oh(C){if(C.uniformsList===null){const F=C.currentProgram.getUniforms();C.uniformsList=ra.seqWithValue(F.seq,C.uniforms)}return C.uniformsList}function Fh(C,F){const V=zt.get(C);V.outputColorSpace=F.outputColorSpace,V.instancing=F.instancing,V.instancingColor=F.instancingColor,V.skinning=F.skinning,V.morphTargets=F.morphTargets,V.morphNormals=F.morphNormals,V.morphColors=F.morphColors,V.morphTargetsCount=F.morphTargetsCount,V.numClippingPlanes=F.numClippingPlanes,V.numIntersection=F.numClipIntersection,V.vertexAlphas=F.vertexAlphas,V.vertexTangents=F.vertexTangents,V.toneMapping=F.toneMapping}function Gf(C,F,V,$,X){F.isScene!==!0&&(F=ae),Bt.resetTextureUnits();const mt=F.fog,Et=$.isMeshStandardMaterial?F.environment:null,Rt=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ti,Ut=($.isMeshStandardMaterial?pe:Jt).get($.envMap||Et),Wt=$.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Gt=!!V.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),kt=!!V.morphAttributes.position,fe=!!V.morphAttributes.normal,en=!!V.morphAttributes.color;let we=gi;$.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(we=_.toneMapping);const zn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,ce=zn!==void 0?zn.length:0,Kt=zt.get($),ka=p.state.lights;if(pt===!0&&(vt===!0||C!==M)){const nn=C===M&&$.id===A;xt.setState($,C,nn)}let ge=!1;$.version===Kt.__version?(Kt.needsLights&&Kt.lightsStateVersion!==ka.state.version||Kt.outputColorSpace!==Rt||X.isInstancedMesh&&Kt.instancing===!1||!X.isInstancedMesh&&Kt.instancing===!0||X.isSkinnedMesh&&Kt.skinning===!1||!X.isSkinnedMesh&&Kt.skinning===!0||X.isInstancedMesh&&Kt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Kt.instancingColor===!1&&X.instanceColor!==null||Kt.envMap!==Ut||$.fog===!0&&Kt.fog!==mt||Kt.numClippingPlanes!==void 0&&(Kt.numClippingPlanes!==xt.numPlanes||Kt.numIntersection!==xt.numIntersection)||Kt.vertexAlphas!==Wt||Kt.vertexTangents!==Gt||Kt.morphTargets!==kt||Kt.morphNormals!==fe||Kt.morphColors!==en||Kt.toneMapping!==we||Nt.isWebGL2===!0&&Kt.morphTargetsCount!==ce)&&(ge=!0):(ge=!0,Kt.__version=$.version);let xi=Kt.currentProgram;ge===!0&&(xi=Es($,F,X));let Bh=!1,Nr=!1,Ha=!1;const Ve=xi.getUniforms(),Si=Kt.uniforms;if(It.useProgram(xi.program)&&(Bh=!0,Nr=!0,Ha=!0),$.id!==A&&(A=$.id,Nr=!0),Bh||M!==C){Ve.setValue(z,"projectionMatrix",C.projectionMatrix),Ve.setValue(z,"viewMatrix",C.matrixWorldInverse);const nn=Ve.map.cameraPosition;nn!==void 0&&nn.setValue(z,Ft.setFromMatrixPosition(C.matrixWorld)),Nt.logarithmicDepthBuffer&&Ve.setValue(z,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Ve.setValue(z,"isOrthographic",C.isOrthographicCamera===!0),M!==C&&(M=C,Nr=!0,Ha=!0)}if(X.isSkinnedMesh){Ve.setOptional(z,X,"bindMatrix"),Ve.setOptional(z,X,"bindMatrixInverse");const nn=X.skeleton;nn&&(Nt.floatVertexTextures?(nn.boneTexture===null&&nn.computeBoneTexture(),Ve.setValue(z,"boneTexture",nn.boneTexture,Bt),Ve.setValue(z,"boneTextureSize",nn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Va=V.morphAttributes;if((Va.position!==void 0||Va.normal!==void 0||Va.color!==void 0&&Nt.isWebGL2===!0)&&N.update(X,V,xi),(Nr||Kt.receiveShadow!==X.receiveShadow)&&(Kt.receiveShadow=X.receiveShadow,Ve.setValue(z,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Si.envMap.value=Ut,Si.flipEnvMap.value=Ut.isCubeTexture&&Ut.isRenderTargetTexture===!1?-1:1),Nr&&(Ve.setValue(z,"toneMappingExposure",_.toneMappingExposure),Kt.needsLights&&zf(Si,Ha),mt&&$.fog===!0&&nt.refreshFogUniforms(Si,mt),nt.refreshMaterialUniforms(Si,$,B,q,Lt),ra.upload(z,Oh(Kt),Si,Bt)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(ra.upload(z,Oh(Kt),Si,Bt),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Ve.setValue(z,"center",X.center),Ve.setValue(z,"modelViewMatrix",X.modelViewMatrix),Ve.setValue(z,"normalMatrix",X.normalMatrix),Ve.setValue(z,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const nn=$.uniformsGroups;for(let Wa=0,Hf=nn.length;Wa<Hf;Wa++)if(Nt.isWebGL2){const Gh=nn[Wa];At.update(Gh,xi),At.bind(Gh,xi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return xi}function zf(C,F){C.ambientLightColor.needsUpdate=F,C.lightProbe.needsUpdate=F,C.directionalLights.needsUpdate=F,C.directionalLightShadows.needsUpdate=F,C.pointLights.needsUpdate=F,C.pointLightShadows.needsUpdate=F,C.spotLights.needsUpdate=F,C.spotLightShadows.needsUpdate=F,C.rectAreaLights.needsUpdate=F,C.hemisphereLights.needsUpdate=F}function kf(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(C,F,V){zt.get(C.texture).__webglTexture=F,zt.get(C.depthTexture).__webglTexture=V;const $=zt.get(C);$.__hasExternalTextures=!0,$.__hasExternalTextures&&($.__autoAllocateDepthBuffer=V===void 0,$.__autoAllocateDepthBuffer||wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(C,F){const V=zt.get(C);V.__webglFramebuffer=F,V.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(C,F=0,V=0){w=C,x=F,T=V;let $=!0,X=null,mt=!1,Et=!1;if(C){const Ut=zt.get(C);Ut.__useDefaultFramebuffer!==void 0?(It.bindFramebuffer(z.FRAMEBUFFER,null),$=!1):Ut.__webglFramebuffer===void 0?Bt.setupRenderTarget(C):Ut.__hasExternalTextures&&Bt.rebindTextures(C,zt.get(C.texture).__webglTexture,zt.get(C.depthTexture).__webglTexture);const Wt=C.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(Et=!0);const Gt=zt.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Gt[F])?X=Gt[F][V]:X=Gt[F],mt=!0):Nt.isWebGL2&&C.samples>0&&Bt.useMultisampledRTT(C)===!1?X=zt.get(C).__webglMultisampledFramebuffer:Array.isArray(Gt)?X=Gt[V]:X=Gt,S.copy(C.viewport),R.copy(C.scissor),P=C.scissorTest}else S.copy(j).multiplyScalar(B).floor(),R.copy(O).multiplyScalar(B).floor(),P=W;if(It.bindFramebuffer(z.FRAMEBUFFER,X)&&Nt.drawBuffers&&$&&It.drawBuffers(C,X),It.viewport(S),It.scissor(R),It.setScissorTest(P),mt){const Ut=zt.get(C.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Ut.__webglTexture,V)}else if(Et){const Ut=zt.get(C.texture),Wt=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ut.__webglTexture,V||0,Wt)}A=-1},this.readRenderTargetPixels=function(C,F,V,$,X,mt,Et){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=zt.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Et!==void 0&&(Rt=Rt[Et]),Rt){It.bindFramebuffer(z.FRAMEBUFFER,Rt);try{const Ut=C.texture,Wt=Ut.format,Gt=Ut.type;if(Wt!==bn&&Ct.convert(Wt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const kt=Gt===hs&&(wt.has("EXT_color_buffer_half_float")||Nt.isWebGL2&&wt.has("EXT_color_buffer_float"));if(Gt!==_i&&Ct.convert(Gt)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Gt===pi&&(Nt.isWebGL2||wt.has("OES_texture_float")||wt.has("WEBGL_color_buffer_float")))&&!kt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=C.width-$&&V>=0&&V<=C.height-X&&z.readPixels(F,V,$,X,Ct.convert(Wt),Ct.convert(Gt),mt)}finally{const Ut=w!==null?zt.get(w).__webglFramebuffer:null;It.bindFramebuffer(z.FRAMEBUFFER,Ut)}}},this.copyFramebufferToTexture=function(C,F,V=0){const $=Math.pow(2,-V),X=Math.floor(F.image.width*$),mt=Math.floor(F.image.height*$);Bt.setTexture2D(F,0),z.copyTexSubImage2D(z.TEXTURE_2D,V,0,0,C.x,C.y,X,mt),It.unbindTexture()},this.copyTextureToTexture=function(C,F,V,$=0){const X=F.image.width,mt=F.image.height,Et=Ct.convert(V.format),Rt=Ct.convert(V.type);Bt.setTexture2D(V,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,V.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,V.unpackAlignment),F.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,$,C.x,C.y,X,mt,Et,Rt,F.image.data):F.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,$,C.x,C.y,F.mipmaps[0].width,F.mipmaps[0].height,Et,F.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,$,C.x,C.y,Et,Rt,F.image),$===0&&V.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),It.unbindTexture()},this.copyTextureToTexture3D=function(C,F,V,$,X=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const mt=C.max.x-C.min.x+1,Et=C.max.y-C.min.y+1,Rt=C.max.z-C.min.z+1,Ut=Ct.convert($.format),Wt=Ct.convert($.type);let Gt;if($.isData3DTexture)Bt.setTexture3D($,0),Gt=z.TEXTURE_3D;else if($.isDataArrayTexture)Bt.setTexture2DArray($,0),Gt=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,$.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,$.unpackAlignment);const kt=z.getParameter(z.UNPACK_ROW_LENGTH),fe=z.getParameter(z.UNPACK_IMAGE_HEIGHT),en=z.getParameter(z.UNPACK_SKIP_PIXELS),we=z.getParameter(z.UNPACK_SKIP_ROWS),zn=z.getParameter(z.UNPACK_SKIP_IMAGES),ce=V.isCompressedTexture?V.mipmaps[0]:V.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ce.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ce.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,C.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,C.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,C.min.z),V.isDataTexture||V.isData3DTexture?z.texSubImage3D(Gt,X,F.x,F.y,F.z,mt,Et,Rt,Ut,Wt,ce.data):V.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(Gt,X,F.x,F.y,F.z,mt,Et,Rt,Ut,ce.data)):z.texSubImage3D(Gt,X,F.x,F.y,F.z,mt,Et,Rt,Ut,Wt,ce),z.pixelStorei(z.UNPACK_ROW_LENGTH,kt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,fe),z.pixelStorei(z.UNPACK_SKIP_PIXELS,en),z.pixelStorei(z.UNPACK_SKIP_ROWS,we),z.pixelStorei(z.UNPACK_SKIP_IMAGES,zn),X===0&&$.generateMipmaps&&z.generateMipmap(Gt),It.unbindTexture()},this.initTexture=function(C){C.isCubeTexture?Bt.setTextureCube(C,0):C.isData3DTexture?Bt.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?Bt.setTexture2DArray(C,0):Bt.setTexture2D(C,0),It.unbindTexture()},this.resetState=function(){x=0,T=0,w=null,It.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===ah?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===Ta?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(t){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!t}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===De?Ui:su}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Ui?De:ti}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}}class lv extends Su{}lv.prototype.isWebGL1Renderer=!0;class uh{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new $t(t),this.near=e,this.far=i}clone(){return new uh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class cv extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}}class uv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Vo,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Zn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let r=0,s=this.stride;r<s;r++)this.array[t+r]=e.array[i+r];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Zn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const We=new D;class va{constructor(t,e,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Pn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this}setXYZW(t,e,i,r,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),r=ee(r,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=r,this.data.array[t+3]=s,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return new gn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new va(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Eu extends Cr{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $t(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ir;const Br=new D,rr=new D,sr=new D,ar=new gt,Gr=new gt,bu=new ue,Xs=new D,zr=new D,qs=new D,sc=new gt,xo=new gt,ac=new gt;class fv extends xe{constructor(t=new Eu){if(super(),this.isSprite=!0,this.type="Sprite",ir===void 0){ir=new ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new uv(e,5);ir.setIndex([0,1,2,0,2,3]),ir.setAttribute("position",new va(i,3,0,!1)),ir.setAttribute("uv",new va(i,2,3,!1))}this.geometry=ir,this.material=t,this.center=new gt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),rr.setFromMatrixScale(this.matrixWorld),bu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),sr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&rr.multiplyScalar(-sr.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ys(Xs.set(-.5,-.5,0),sr,o,rr,r,s),Ys(zr.set(.5,-.5,0),sr,o,rr,r,s),Ys(qs.set(.5,.5,0),sr,o,rr,r,s),sc.set(0,0),xo.set(1,0),ac.set(1,1);let a=t.ray.intersectTriangle(Xs,zr,qs,!1,Br);if(a===null&&(Ys(zr.set(-.5,.5,0),sr,o,rr,r,s),xo.set(0,1),a=t.ray.intersectTriangle(Xs,qs,zr,!1,Br),a===null))return;const h=t.ray.origin.distanceTo(Br);h<t.near||h>t.far||e.push({distance:h,point:Br.clone(),uv:un.getInterpolation(Br,Xs,zr,qs,sc,xo,ac,new gt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Ys(n,t,e,i,r,s){ar.subVectors(n,e).addScalar(.5).multiply(i),r!==void 0?(Gr.x=s*ar.x-r*ar.y,Gr.y=r*ar.x+s*ar.y):Gr.copy(ar),n.copy(t),n.x+=Gr.x,n.y+=Gr.y,n.applyMatrix4(bu)}class Na extends Cr{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new $t(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const oc=new D,hc=new D,lc=new ue,So=new Ra,js=new Ca;class fh extends xe{constructor(t=new ke,e=new Na){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let r=1,s=e.count;r<s;r++)oc.fromBufferAttribute(e,r-1),hc.fromBufferAttribute(e,r),i[r]=i[r-1],i[r]+=oc.distanceTo(hc);t.setAttribute("lineDistance",new ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,r=this.matrixWorld,s=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),js.copy(i.boundingSphere),js.applyMatrix4(r),js.radius+=s,t.ray.intersectsSphere(js)===!1)return;lc.copy(r).invert(),So.copy(t.ray).applyMatrix4(lc);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),h=a*a,l=new D,u=new D,c=new D,f=new D,d=this.isLineSegments?2:1,g=i.index,p=i.attributes.position;if(g!==null){const m=Math.max(0,o.start),E=Math.min(g.count,o.start+o.count);for(let _=m,y=E-1;_<y;_+=d){const x=g.getX(_),T=g.getX(_+1);if(l.fromBufferAttribute(p,x),u.fromBufferAttribute(p,T),So.distanceSqToSegment(l,u,f,c)>h)continue;f.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(f);A<t.near||A>t.far||e.push({distance:A,point:c.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,o.start),E=Math.min(p.count,o.start+o.count);for(let _=m,y=E-1;_<y;_+=d){if(l.fromBufferAttribute(p,_),u.fromBufferAttribute(p,_+1),So.distanceSqToSegment(l,u,f,c)>h)continue;f.applyMatrix4(this.matrixWorld);const T=t.ray.origin.distanceTo(f);T<t.near||T>t.far||e.push({distance:T,point:c.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const r=e[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){const e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let i,r=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)i=this.getPoint(o/t),s+=i.distanceTo(r),e.push(s),r=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const i=this.getLengths();let r=0;const s=i.length;let o;e?o=e:o=t*i[s-1];let a=0,h=s-1,l;for(;a<=h;)if(r=Math.floor(a+(h-a)/2),l=i[r]-o,l<0)a=r+1;else if(l>0)h=r-1;else{h=r;break}if(r=h,i[r]===o)return r/(s-1);const u=i[r],f=i[r+1]-u,d=(o-u)/f;return(r+d)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),h=e||(o.isVector2?new gt:new D);return h.copy(a).sub(o).normalize(),h}getTangentAt(t,e){const i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){const i=new D,r=[],s=[],o=[],a=new D,h=new ue;for(let d=0;d<=t;d++){const g=d/t;r[d]=this.getTangentAt(g,new D)}s[0]=new D,o[0]=new D;let l=Number.MAX_VALUE;const u=Math.abs(r[0].x),c=Math.abs(r[0].y),f=Math.abs(r[0].z);u<=l&&(l=u,i.set(1,0,0)),c<=l&&(l=c,i.set(0,1,0)),f<=l&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(r[d-1],r[d]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ce(r[d-1].dot(r[d]),-1,1));s[d].applyMatrix4(h.makeRotationAxis(a,g))}o[d].crossVectors(r[d],s[d])}if(e===!0){let d=Math.acos(Ce(s[0].dot(s[t]),-1,1));d/=t,r[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let g=1;g<=t;g++)s[g].applyMatrix4(h.makeRotationAxis(r[g],d*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class wu extends Gn{constructor(t=0,e=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=h}getPoint(t,e){const i=e||new gt,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+t*s;let h=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),c=Math.sin(this.aRotation),f=h-this.aX,d=l-this.aY;h=f*u-d*c+this.aX,l=f*c+d*u+this.aY}return i.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class dv extends wu{constructor(t,e,i,r,s,o){super(t,e,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function dh(){let n=0,t=0,e=0,i=0;function r(s,o,a,h){n=s,t=a,e=-3*s+3*o-2*a-h,i=2*s-2*o+a+h}return{initCatmullRom:function(s,o,a,h,l){r(o,a,l*(a-s),l*(h-o))},initNonuniformCatmullRom:function(s,o,a,h,l,u,c){let f=(o-s)/l-(a-s)/(l+u)+(a-o)/u,d=(a-o)/u-(h-o)/(u+c)+(h-a)/c;f*=u,d*=u,r(o,a,f,d)},calc:function(s){const o=s*s,a=o*s;return n+t*s+e*o+i*a}}}const Ks=new D,Eo=new dh,bo=new dh,wo=new dh;class pv extends Gn{constructor(t=[],e=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=r}getPoint(t,e=new D){const i=e,r=this.points,s=r.length,o=(s-(this.closed?0:1))*t;let a=Math.floor(o),h=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:h===0&&a===s-1&&(a=s-2,h=1);let l,u;this.closed||a>0?l=r[(a-1)%s]:(Ks.subVectors(r[0],r[1]).add(r[0]),l=Ks);const c=r[a%s],f=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Ks.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Ks),this.curveType==="centripetal"||this.curveType==="chordal"){const d=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(c),d),v=Math.pow(c.distanceToSquared(f),d),p=Math.pow(f.distanceToSquared(u),d);v<1e-4&&(v=1),g<1e-4&&(g=v),p<1e-4&&(p=v),Eo.initNonuniformCatmullRom(l.x,c.x,f.x,u.x,g,v,p),bo.initNonuniformCatmullRom(l.y,c.y,f.y,u.y,g,v,p),wo.initNonuniformCatmullRom(l.z,c.z,f.z,u.z,g,v,p)}else this.curveType==="catmullrom"&&(Eo.initCatmullRom(l.x,c.x,f.x,u.x,this.tension),bo.initCatmullRom(l.y,c.y,f.y,u.y,this.tension),wo.initCatmullRom(l.z,c.z,f.z,u.z,this.tension));return i.set(Eo.calc(h),bo.calc(h),wo.calc(h)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function cc(n,t,e,i,r){const s=(i-t)*.5,o=(r-e)*.5,a=n*n,h=n*a;return(2*e-2*i+s+o)*h+(-3*e+3*i-2*s-o)*a+s*n+e}function mv(n,t){const e=1-n;return e*e*t}function gv(n,t){return 2*(1-n)*n*t}function _v(n,t){return n*n*t}function ns(n,t,e,i){return mv(n,t)+gv(n,e)+_v(n,i)}function vv(n,t){const e=1-n;return e*e*e*t}function yv(n,t){const e=1-n;return 3*e*e*n*t}function Mv(n,t){return 3*(1-n)*n*n*t}function xv(n,t){return n*n*n*t}function is(n,t,e,i,r){return vv(n,t)+yv(n,e)+Mv(n,i)+xv(n,r)}class Sv extends Gn{constructor(t=new gt,e=new gt,i=new gt,r=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new gt){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(is(t,r.x,s.x,o.x,a.x),is(t,r.y,s.y,o.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Ev extends Gn{constructor(t=new D,e=new D,i=new D,r=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=r}getPoint(t,e=new D){const i=e,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(is(t,r.x,s.x,o.x,a.x),is(t,r.y,s.y,o.y,a.y),is(t,r.z,s.z,o.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class bv extends Gn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Au extends Gn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class wv extends Gn{constructor(t=new gt,e=new gt,i=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new gt){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ns(t,r.x,s.x,o.x),ns(t,r.y,s.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Tu extends Gn{constructor(t=new D,e=new D,i=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new D){const i=e,r=this.v0,s=this.v1,o=this.v2;return i.set(ns(t,r.x,s.x,o.x),ns(t,r.y,s.y,o.y),ns(t,r.z,s.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Av extends Gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const i=e,r=this.points,s=(r.length-1)*t,o=Math.floor(s),a=s-o,h=r[o===0?o:o-1],l=r[o],u=r[o>r.length-2?r.length-1:o+1],c=r[o>r.length-3?r.length-1:o+2];return i.set(cc(a,h.x,l.x,u.x,c.x),cc(a,h.y,l.y,u.y,c.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(r.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){const r=this.points[e];t.points.push(r.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){const r=t.points[e];this.points.push(new gt().fromArray(r))}return this}}var qo=Object.freeze({__proto__:null,ArcCurve:dv,CatmullRomCurve3:pv,CubicBezierCurve:Sv,CubicBezierCurve3:Ev,EllipseCurve:wu,LineCurve:bv,LineCurve3:Au,QuadraticBezierCurve:wv,QuadraticBezierCurve3:Tu,SplineCurve:Av});class Tv extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qo[i](e,t))}return this}getPoint(t,e){const i=t*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],h=a.getLength(),l=h===0?0:1-o/h;return a.getPointAt(l,e)}s++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let i=0,r=this.curves.length;i<r;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,h=o.getPoints(a);for(let l=0;l<h.length;l++){const u=h[l];i&&i.equals(u)||(e.push(u),i=u)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(r.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){const r=this.curves[e];t.curves.push(r.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){const r=t.curves[e];this.curves.push(new qo[r.type]().fromJSON(r))}return this}}class ph extends ke{constructor(t=1,e=1,i=1,r=32,s=1,o=!1,a=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:h};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],c=[],f=[],d=[];let g=0;const v=[],p=i/2;let m=0;E(),o===!1&&(t>0&&_(!0),e>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(f,3)),this.setAttribute("uv",new ze(d,2));function E(){const y=new D,x=new D;let T=0;const w=(e-t)/i;for(let A=0;A<=s;A++){const M=[],S=A/s,R=S*(e-t)+t;for(let P=0;P<=r;P++){const k=P/r,I=k*h+a,G=Math.sin(I),q=Math.cos(I);x.x=R*G,x.y=-S*i+p,x.z=R*q,c.push(x.x,x.y,x.z),y.set(G,w,q).normalize(),f.push(y.x,y.y,y.z),d.push(k,1-S),M.push(g++)}v.push(M)}for(let A=0;A<r;A++)for(let M=0;M<s;M++){const S=v[M][A],R=v[M+1][A],P=v[M+1][A+1],k=v[M][A+1];u.push(S,R,k),u.push(R,P,k),T+=6}l.addGroup(m,T,0),m+=T}function _(y){const x=g,T=new gt,w=new D;let A=0;const M=y===!0?t:e,S=y===!0?1:-1;for(let P=1;P<=r;P++)c.push(0,p*S,0),f.push(0,S,0),d.push(.5,.5),g++;const R=g;for(let P=0;P<=r;P++){const I=P/r*h+a,G=Math.cos(I),q=Math.sin(I);w.x=M*q,w.y=p*S,w.z=M*G,c.push(w.x,w.y,w.z),f.push(0,S,0),T.x=G*.5+.5,T.y=q*.5*S+.5,d.push(T.x,T.y),g++}for(let P=0;P<r;P++){const k=x+P,I=R+P;y===!0?u.push(I,I+1,k):u.push(I+1,I,k),A+=3}l.addGroup(m,A,y===!0?1:2),m+=A}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ph(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ia extends ph{constructor(t=1,e=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,t,e,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ia(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ya extends ke{constructor(t=new Tu(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),e=64,i=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:r,closed:s};const o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const a=new D,h=new D,l=new gt;let u=new D;const c=[],f=[],d=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ze(c,3)),this.setAttribute("normal",new ze(f,3)),this.setAttribute("uv",new ze(d,2));function v(){for(let _=0;_<e;_++)p(_);p(s===!1?e:0),E(),m()}function p(_){u=t.getPointAt(_/e,u);const y=o.normals[_],x=o.binormals[_];for(let T=0;T<=r;T++){const w=T/r*Math.PI*2,A=Math.sin(w),M=-Math.cos(w);h.x=M*y.x+A*x.x,h.y=M*y.y+A*x.y,h.z=M*y.z+A*x.z,h.normalize(),f.push(h.x,h.y,h.z),a.x=u.x+i*h.x,a.y=u.y+i*h.y,a.z=u.z+i*h.z,c.push(a.x,a.y,a.z)}}function m(){for(let _=1;_<=e;_++)for(let y=1;y<=r;y++){const x=(r+1)*(_-1)+(y-1),T=(r+1)*_+(y-1),w=(r+1)*_+y,A=(r+1)*(_-1)+y;g.push(x,T,A),g.push(T,w,A)}}function E(){for(let _=0;_<=e;_++)for(let y=0;y<=r;y++)l.x=_/e,l.y=y/r,d.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new ya(new qo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}const uc={enabled:!1,files:{},add:function(n,t){this.enabled!==!1&&(this.files[n]=t)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Cv{constructor(t,e,i){const r=this;let s=!1,o=0,a=0,h;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return h?h(u):u},this.setURLModifier=function(u){return h=u,this},this.addHandler=function(u,c){return l.push(u,c),this},this.removeHandler=function(u){const c=l.indexOf(u);return c!==-1&&l.splice(c,2),this},this.getHandler=function(u){for(let c=0,f=l.length;c<f;c+=2){const d=l[c],g=l[c+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Rv=new Cv;class mh{constructor(t){this.manager=t!==void 0?t:Rv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const i=this;return new Promise(function(r,s){i.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}mh.DEFAULT_MATERIAL_NAME="__DEFAULT";class Lv extends mh{constructor(t){super(t)}load(t,e,i,r){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=uc.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=cs("img");function h(){u(),uc.add(t,this),e&&e(this),s.manager.itemEnd(t)}function l(c){u(),r&&r(c),s.manager.itemError(t),s.manager.itemEnd(t)}function u(){a.removeEventListener("load",h,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",h,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class Pv extends mh{constructor(t){super(t)}load(t,e,i,r){const s=new Ke,o=new Lv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},i,r),s}}class Cu extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new $t(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}const Ao=new ue,fc=new D,dc=new D;class Dv{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lh,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new Le(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;fc.setFromMatrixPosition(t.matrixWorld),e.position.copy(fc),dc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dc),e.updateMatrixWorld(),Ao.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ao),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ao)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Nv extends Dv{constructor(){super(new _u(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Iv extends Cu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Nv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Uv extends Cu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}let Zs;class Ov{static getContext(){return Zs===void 0&&(Zs=new(window.AudioContext||window.webkitAudioContext)),Zs}static setContext(t){Zs=t}}class Fv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=pc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=pc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function pc(){return(typeof performance>"u"?Date:performance).now()}const Ti=new D,mc=new In,Bv=new D,Ci=new D;class Ru extends xe{constructor(){super(),this.type="AudioListener",this.context=Ov.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Fv}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(t){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=t,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(t){return this.gain.gain.setTargetAtTime(t,this.context.currentTime,.01),this}updateMatrixWorld(t){super.updateMatrixWorld(t);const e=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Ti,mc,Bv),Ci.set(0,0,-1).applyQuaternion(mc),e.positionX){const r=this.context.currentTime+this.timeDelta;e.positionX.linearRampToValueAtTime(Ti.x,r),e.positionY.linearRampToValueAtTime(Ti.y,r),e.positionZ.linearRampToValueAtTime(Ti.z,r),e.forwardX.linearRampToValueAtTime(Ci.x,r),e.forwardY.linearRampToValueAtTime(Ci.y,r),e.forwardZ.linearRampToValueAtTime(Ci.z,r),e.upX.linearRampToValueAtTime(i.x,r),e.upY.linearRampToValueAtTime(i.y,r),e.upZ.linearRampToValueAtTime(i.z,r)}else e.setPosition(Ti.x,Ti.y,Ti.z),e.setOrientation(Ci.x,Ci.y,Ci.z,i.x,i.y,i.z)}}class Gv{constructor(t,e,i=0,r=1/0){this.ray=new Ra(t,e),this.near=i,this.far=r,this.camera=null,this.layers=new hh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}intersectObject(t,e=!0,i=[]){return Yo(t,this,i,e),i.sort(gc),i}intersectObjects(t,e=!0,i=[]){for(let r=0,s=t.length;r<s;r++)Yo(t[r],this,i,e);return i.sort(gc),i}}function gc(n,t){return n.distance-t.distance}function Yo(n,t,e,i){if(n.layers.test(t.layers)&&n.raycast(t,e),i===!0){const r=n.children;for(let s=0,o=r.length;s<o;s++)Yo(r[s],t,e,!0)}}class _c{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(Ce(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:rh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=rh);const vc={type:"change"},To={type:"start"},yc={type:"end"},Js=new Ra,Mc=new ui,zv=Math.cos(70*sp.DEG2RAD);class kv extends zi{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:qn.ROTATE,MIDDLE:qn.DOLLY,RIGHT:qn.PAN},this.touches={ONE:ci.ROTATE,TWO:ci.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",b),this._domElementKeyEvents=N},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",b),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(vc),i.update(),s=r.NONE},this.update=function(){const N=new D,st=new In().setFromUnitVectors(t.up,new D(0,1,0)),Z=st.clone().invert(),Ct=new D,St=new In,At=new D,Mt=2*Math.PI;return function(Yt=null){const U=i.object.position;N.copy(U).sub(i.target),N.applyQuaternion(st),a.setFromVector3(N),i.autoRotate&&s===r.NONE&&R(M(Yt)),i.enableDamping?(a.theta+=h.theta*i.dampingFactor,a.phi+=h.phi*i.dampingFactor):(a.theta+=h.theta,a.phi+=h.phi);let ht=i.minAzimuthAngle,tt=i.maxAzimuthAngle;isFinite(ht)&&isFinite(tt)&&(ht<-Math.PI?ht+=Mt:ht>Math.PI&&(ht-=Mt),tt<-Math.PI?tt+=Mt:tt>Math.PI&&(tt-=Mt),ht<=tt?a.theta=Math.max(ht,Math.min(tt,a.theta)):a.theta=a.theta>(ht+tt)/2?Math.max(ht,a.theta):Math.min(tt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&T||i.object.isOrthographicCamera?a.radius=K(a.radius):a.radius=K(a.radius*l),N.setFromSpherical(a),N.applyQuaternion(Z),U.copy(i.target).add(N),i.object.lookAt(i.target),i.enableDamping===!0?(h.theta*=1-i.dampingFactor,h.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(h.set(0,0,0),u.set(0,0,0));let Y=!1;if(i.zoomToCursor&&T){let rt=null;if(i.object.isPerspectiveCamera){const bt=N.length();rt=K(bt*l);const jt=bt-rt;i.object.position.addScaledVector(y,jt),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const bt=new D(x.x,x.y,0);bt.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Y=!0;const jt=new D(x.x,x.y,0);jt.unproject(i.object),i.object.position.sub(jt).add(bt),i.object.updateMatrixWorld(),rt=N.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;rt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(rt).add(i.object.position):(Js.origin.copy(i.object.position),Js.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(Js.direction))<zv?t.lookAt(i.target):(Mc.setFromNormalAndCoplanarPoint(i.object.up,i.target),Js.intersectPlane(Mc,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/l)),i.object.updateProjectionMatrix(),Y=!0);return l=1,T=!1,Y||Ct.distanceToSquared(i.object.position)>o||8*(1-St.dot(i.object.quaternion))>o||At.distanceToSquared(i.target)>0?(i.dispatchEvent(vc),Ct.copy(i.object.position),St.copy(i.object.quaternion),At.copy(i.target),Y=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Q),i.domElement.removeEventListener("pointerdown",zt),i.domElement.removeEventListener("pointercancel",Jt),i.domElement.removeEventListener("wheel",L),i.domElement.removeEventListener("pointermove",Bt),i.domElement.removeEventListener("pointerup",Jt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",b),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new _c,h=new _c;let l=1;const u=new D,c=new gt,f=new gt,d=new gt,g=new gt,v=new gt,p=new gt,m=new gt,E=new gt,_=new gt,y=new D,x=new gt;let T=!1;const w=[],A={};function M(N){return N!==null?2*Math.PI/60*i.autoRotateSpeed*N:2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function R(N){h.theta-=N}function P(N){h.phi-=N}const k=function(){const N=new D;return function(Z,Ct){N.setFromMatrixColumn(Ct,0),N.multiplyScalar(-Z),u.add(N)}}(),I=function(){const N=new D;return function(Z,Ct){i.screenSpacePanning===!0?N.setFromMatrixColumn(Ct,1):(N.setFromMatrixColumn(Ct,0),N.crossVectors(i.object.up,N)),N.multiplyScalar(Z),u.add(N)}}(),G=function(){const N=new D;return function(Z,Ct){const St=i.domElement;if(i.object.isPerspectiveCamera){const At=i.object.position;N.copy(At).sub(i.target);let Mt=N.length();Mt*=Math.tan(i.object.fov/2*Math.PI/180),k(2*Z*Mt/St.clientHeight,i.object.matrix),I(2*Ct*Mt/St.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(k(Z*(i.object.right-i.object.left)/i.object.zoom/St.clientWidth,i.object.matrix),I(Ct*(i.object.top-i.object.bottom)/i.object.zoom/St.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function q(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l/=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(N){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?l*=N:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function J(N){if(!i.zoomToCursor)return;T=!0;const st=i.domElement.getBoundingClientRect(),Z=N.clientX-st.left,Ct=N.clientY-st.top,St=st.width,At=st.height;x.x=Z/St*2-1,x.y=-(Ct/At)*2+1,y.set(x.x,x.y,1).unproject(i.object).sub(i.object.position).normalize()}function K(N){return Math.max(i.minDistance,Math.min(i.maxDistance,N))}function j(N){c.set(N.clientX,N.clientY)}function O(N){J(N),m.set(N.clientX,N.clientY)}function W(N){g.set(N.clientX,N.clientY)}function ut(N){f.set(N.clientX,N.clientY),d.subVectors(f,c).multiplyScalar(i.rotateSpeed);const st=i.domElement;R(2*Math.PI*d.x/st.clientHeight),P(2*Math.PI*d.y/st.clientHeight),c.copy(f),i.update()}function pt(N){E.set(N.clientX,N.clientY),_.subVectors(E,m),_.y>0?q(S()):_.y<0&&B(S()),m.copy(E),i.update()}function vt(N){v.set(N.clientX,N.clientY),p.subVectors(v,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(v),i.update()}function Lt(N){J(N),N.deltaY<0?B(S()):N.deltaY>0&&q(S()),i.update()}function qt(N){let st=!1;switch(N.code){case i.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,i.keyPanSpeed),st=!0;break;case i.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(0,-i.keyPanSpeed),st=!0;break;case i.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(i.keyPanSpeed,0),st=!0;break;case i.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):G(-i.keyPanSpeed,0),st=!0;break}st&&(N.preventDefault(),i.update())}function Dt(){if(w.length===1)c.set(w[0].pageX,w[0].pageY);else{const N=.5*(w[0].pageX+w[1].pageX),st=.5*(w[0].pageY+w[1].pageY);c.set(N,st)}}function Ft(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const N=.5*(w[0].pageX+w[1].pageX),st=.5*(w[0].pageY+w[1].pageY);g.set(N,st)}}function ae(){const N=w[0].pageX-w[1].pageX,st=w[0].pageY-w[1].pageY,Z=Math.sqrt(N*N+st*st);m.set(0,Z)}function Ht(){i.enableZoom&&ae(),i.enablePan&&Ft()}function z(){i.enableZoom&&ae(),i.enableRotate&&Dt()}function Ie(N){if(w.length==1)f.set(N.pageX,N.pageY);else{const Z=ft(N),Ct=.5*(N.pageX+Z.x),St=.5*(N.pageY+Z.y);f.set(Ct,St)}d.subVectors(f,c).multiplyScalar(i.rotateSpeed);const st=i.domElement;R(2*Math.PI*d.x/st.clientHeight),P(2*Math.PI*d.y/st.clientHeight),c.copy(f)}function wt(N){if(w.length===1)v.set(N.pageX,N.pageY);else{const st=ft(N),Z=.5*(N.pageX+st.x),Ct=.5*(N.pageY+st.y);v.set(Z,Ct)}p.subVectors(v,g).multiplyScalar(i.panSpeed),G(p.x,p.y),g.copy(v)}function Nt(N){const st=ft(N),Z=N.pageX-st.x,Ct=N.pageY-st.y,St=Math.sqrt(Z*Z+Ct*Ct);E.set(0,St),_.set(0,Math.pow(E.y/m.y,i.zoomSpeed)),q(_.y),m.copy(E)}function It(N){i.enableZoom&&Nt(N),i.enablePan&&wt(N)}function he(N){i.enableZoom&&Nt(N),i.enableRotate&&Ie(N)}function zt(N){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(N.pointerId),i.domElement.addEventListener("pointermove",Bt),i.domElement.addEventListener("pointerup",Jt)),it(N),N.pointerType==="touch"?H(N):pe(N))}function Bt(N){i.enabled!==!1&&(N.pointerType==="touch"?nt(N):be(N))}function Jt(N){xt(N),w.length===0&&(i.domElement.releasePointerCapture(N.pointerId),i.domElement.removeEventListener("pointermove",Bt),i.domElement.removeEventListener("pointerup",Jt)),i.dispatchEvent(yc),s=r.NONE}function pe(N){let st;switch(N.button){case 0:st=i.mouseButtons.LEFT;break;case 1:st=i.mouseButtons.MIDDLE;break;case 2:st=i.mouseButtons.RIGHT;break;default:st=-1}switch(st){case qn.DOLLY:if(i.enableZoom===!1)return;O(N),s=r.DOLLY;break;case qn.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enablePan===!1)return;W(N),s=r.PAN}else{if(i.enableRotate===!1)return;j(N),s=r.ROTATE}break;case qn.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(i.enableRotate===!1)return;j(N),s=r.ROTATE}else{if(i.enablePan===!1)return;W(N),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(To)}function be(N){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ut(N);break;case r.DOLLY:if(i.enableZoom===!1)return;pt(N);break;case r.PAN:if(i.enablePan===!1)return;vt(N);break}}function L(N){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(N.preventDefault(),i.dispatchEvent(To),Lt(N),i.dispatchEvent(yc))}function b(N){i.enabled===!1||i.enablePan===!1||qt(N)}function H(N){switch(ot(N),w.length){case 1:switch(i.touches.ONE){case ci.ROTATE:if(i.enableRotate===!1)return;Dt(),s=r.TOUCH_ROTATE;break;case ci.PAN:if(i.enablePan===!1)return;Ft(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case ci.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ht(),s=r.TOUCH_DOLLY_PAN;break;case ci.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;z(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(To)}function nt(N){switch(ot(N),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ie(N),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;wt(N),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;It(N),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;he(N),i.update();break;default:s=r.NONE}}function Q(N){i.enabled!==!1&&N.preventDefault()}function it(N){w.push(N)}function xt(N){delete A[N.pointerId];for(let st=0;st<w.length;st++)if(w[st].pointerId==N.pointerId){w.splice(st,1);return}}function ot(N){let st=A[N.pointerId];st===void 0&&(st=new gt,A[N.pointerId]=st),st.set(N.pageX,N.pageY)}function ft(N){const st=N.pointerId===w[0].pointerId?w[1]:w[0];return A[st.pointerId]}i.domElement.addEventListener("contextmenu",Q),i.domElement.addEventListener("pointerdown",zt),i.domElement.addEventListener("pointercancel",Jt),i.domElement.addEventListener("wheel",L,{passive:!1}),this.update()}}class Hv extends kv{constructor(t,e){super(t,e),this.screenSpacePanning=!1,this.mouseButtons={LEFT:qn.PAN,MIDDLE:qn.DOLLY,RIGHT:qn.ROTATE},this.touches={ONE:ci.PAN,TWO:ci.DOLLY_ROTATE}}}function Vv(n){n("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),n("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),n("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs"),n.WGS84=n["EPSG:4326"],n["EPSG:3785"]=n["EPSG:3857"],n.GOOGLE=n["EPSG:3857"],n["EPSG:900913"]=n["EPSG:3857"],n["EPSG:102113"]=n["EPSG:3857"]}var Bi=1,Gi=2,vr=3,Wv=4,jo=5,xc=6378137,$v=6356752314e-3,Sc=.0066943799901413165,rs=484813681109536e-20,et=Math.PI/2,Xv=.16666666666666666,qv=.04722222222222222,Yv=.022156084656084655,ct=1e-10,Pe=.017453292519943295,Dn=57.29577951308232,Qt=Math.PI/4,us=Math.PI*2,de=3.14159265359,tn={};tn.greenwich=0;tn.lisbon=-9.131906111111;tn.paris=2.337229166667;tn.bogota=-74.080916666667;tn.madrid=-3.687938888889;tn.rome=12.452333333333;tn.bern=7.439583333333;tn.jakarta=106.807719444444;tn.ferro=-17.666666666667;tn.brussels=4.367975;tn.stockholm=18.058277777778;tn.athens=23.7163375;tn.oslo=10.722916666667;const jv={ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937}};var Ec=/[\s_\-\/\(\)]/g;function yi(n,t){if(n[t])return n[t];for(var e=Object.keys(n),i=t.toLowerCase().replace(Ec,""),r=-1,s,o;++r<e.length;)if(s=e[r],o=s.toLowerCase().replace(Ec,""),o===i)return n[s]}function Ko(n){var t={},e=n.split("+").map(function(a){return a.trim()}).filter(function(a){return a}).reduce(function(a,h){var l=h.split("=");return l.push(!0),a[l[0].toLowerCase()]=l[1],a},{}),i,r,s,o={proj:"projName",datum:"datumCode",rf:function(a){t.rf=parseFloat(a)},lat_0:function(a){t.lat0=a*Pe},lat_1:function(a){t.lat1=a*Pe},lat_2:function(a){t.lat2=a*Pe},lat_ts:function(a){t.lat_ts=a*Pe},lon_0:function(a){t.long0=a*Pe},lon_1:function(a){t.long1=a*Pe},lon_2:function(a){t.long2=a*Pe},alpha:function(a){t.alpha=parseFloat(a)*Pe},gamma:function(a){t.rectified_grid_angle=parseFloat(a)},lonc:function(a){t.longc=a*Pe},x_0:function(a){t.x0=parseFloat(a)},y_0:function(a){t.y0=parseFloat(a)},k_0:function(a){t.k0=parseFloat(a)},k:function(a){t.k0=parseFloat(a)},a:function(a){t.a=parseFloat(a)},b:function(a){t.b=parseFloat(a)},r_a:function(){t.R_A=!0},zone:function(a){t.zone=parseInt(a,10)},south:function(){t.utmSouth=!0},towgs84:function(a){t.datum_params=a.split(",").map(function(h){return parseFloat(h)})},to_meter:function(a){t.to_meter=parseFloat(a)},units:function(a){t.units=a;var h=yi(jv,a);h&&(t.to_meter=h.to_meter)},from_greenwich:function(a){t.from_greenwich=a*Pe},pm:function(a){var h=yi(tn,a);t.from_greenwich=(h||parseFloat(a))*Pe},nadgrids:function(a){a==="@null"?t.datumCode="none":t.nadgrids=a},axis:function(a){var h="ewnsud";a.length===3&&h.indexOf(a.substr(0,1))!==-1&&h.indexOf(a.substr(1,1))!==-1&&h.indexOf(a.substr(2,1))!==-1&&(t.axis=a)},approx:function(){t.approx=!0}};for(i in e)r=e[i],i in o?(s=o[i],typeof s=="function"?s(r):t[s]=r):t[i]=r;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}var fs=1,Lu=2,Pu=3,Ma=4,Du=5,gh=-1,Kv=/\s/,Zv=/[A-Za-z]/,Jv=/[A-Za-z84_]/,Ua=/[,\]]/,Nu=/[\d\.E\-\+]/;function ni(n){if(typeof n!="string")throw new Error("not a string");this.text=n.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=fs}ni.prototype.readCharicter=function(){var n=this.text[this.place++];if(this.state!==Ma)for(;Kv.test(n);){if(this.place>=this.text.length)return;n=this.text[this.place++]}switch(this.state){case fs:return this.neutral(n);case Lu:return this.keyword(n);case Ma:return this.quoted(n);case Du:return this.afterquote(n);case Pu:return this.number(n);case gh:return}};ni.prototype.afterquote=function(n){if(n==='"'){this.word+='"',this.state=Ma;return}if(Ua.test(n)){this.word=this.word.trim(),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in afterquote yet, index '+this.place)};ni.prototype.afterItem=function(n){if(n===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=fs;return}if(n==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=fs,this.currentObject=this.stack.pop(),this.currentObject||(this.state=gh);return}};ni.prototype.number=function(n){if(Nu.test(n)){this.word+=n;return}if(Ua.test(n)){this.word=parseFloat(this.word),this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in number yet, index '+this.place)};ni.prototype.quoted=function(n){if(n==='"'){this.state=Du;return}this.word+=n};ni.prototype.keyword=function(n){if(Jv.test(n)){this.word+=n;return}if(n==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=fs;return}if(Ua.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in keyword yet, index '+this.place)};ni.prototype.neutral=function(n){if(Zv.test(n)){this.word=n,this.state=Lu;return}if(n==='"'){this.word="",this.state=Ma;return}if(Nu.test(n)){this.word=n,this.state=Pu;return}if(Ua.test(n)){this.afterItem(n);return}throw new Error(`havn't handled "`+n+'" in neutral yet, index '+this.place)};ni.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===gh)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function Qv(n){var t=new ni(n);return t.output()}function bc(n,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var i=t?{}:n,r=e.reduce(function(s,o){return ur(o,s),s},i);t&&(n[t]=r)}function ur(n,t){if(!Array.isArray(n)){t[n]=!0;return}var e=n.shift();if(e==="PARAMETER"&&(e=n.shift()),n.length===1){if(Array.isArray(n[0])){t[e]={},ur(n[0],t[e]);return}t[e]=n[0];return}if(!n.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=n;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(n);return}Array.isArray(e)||(t[e]={});var i;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:n[0].toLowerCase(),convert:n[1]},n.length===3&&ur(n[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:n[0],a:n[1],rf:n[2]},n.length===4&&ur(n[3],t[e]);return;case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"EDATUM":case"ENGINEERINGDATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":case"COMPD_CS":case"COMPOUNDCRS":case"ENGINEERINGCRS":case"ENGCRS":case"FITTED_CS":case"LOCAL_DATUM":case"DATUM":n[0]=["name",n[0]],bc(t,e,n);return;default:for(i=-1;++i<n.length;)if(!Array.isArray(n[i]))return ur(n,t[e]);return bc(t,e,n)}}var ty=.017453292519943295;function ey(n,t){var e=t[0],i=t[1];!(e in n)&&i in n&&(n[e]=n[i],t.length===3&&(n[e]=t[2](n[e])))}function Rn(n){return n*ty}function ny(n){if(n.type==="GEOGCS"?n.projName="longlat":n.type==="LOCAL_CS"?(n.projName="identity",n.local=!0):typeof n.PROJECTION=="object"?n.projName=Object.keys(n.PROJECTION)[0]:n.projName=n.PROJECTION,n.AXIS){for(var t="",e=0,i=n.AXIS.length;e<i;++e){var r=[n.AXIS[e][0].toLowerCase(),n.AXIS[e][1].toLowerCase()];r[0].indexOf("north")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="north"?t+="n":r[0].indexOf("south")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="south"?t+="s":r[0].indexOf("east")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="east"?t+="e":(r[0].indexOf("west")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="west")&&(t+="w")}t.length===2&&(t+="u"),t.length===3&&(n.axis=t)}n.UNIT&&(n.units=n.UNIT.name.toLowerCase(),n.units==="metre"&&(n.units="meter"),n.UNIT.convert&&(n.type==="GEOGCS"?n.DATUM&&n.DATUM.SPHEROID&&(n.to_meter=n.UNIT.convert*n.DATUM.SPHEROID.a):n.to_meter=n.UNIT.convert));var s=n.GEOGCS;n.type==="GEOGCS"&&(s=n),s&&(s.DATUM?n.datumCode=s.DATUM.name.toLowerCase():n.datumCode=s.name.toLowerCase(),n.datumCode.slice(0,2)==="d_"&&(n.datumCode=n.datumCode.slice(2)),(n.datumCode==="new_zealand_geodetic_datum_1949"||n.datumCode==="new_zealand_1949")&&(n.datumCode="nzgd49"),(n.datumCode==="wgs_1984"||n.datumCode==="world_geodetic_system_1984")&&(n.PROJECTION==="Mercator_Auxiliary_Sphere"&&(n.sphere=!0),n.datumCode="wgs84"),n.datumCode.slice(-6)==="_ferro"&&(n.datumCode=n.datumCode.slice(0,-6)),n.datumCode.slice(-8)==="_jakarta"&&(n.datumCode=n.datumCode.slice(0,-8)),~n.datumCode.indexOf("belge")&&(n.datumCode="rnb72"),s.DATUM&&s.DATUM.SPHEROID&&(n.ellps=s.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),n.ellps.toLowerCase().slice(0,13)==="international"&&(n.ellps="intl"),n.a=s.DATUM.SPHEROID.a,n.rf=parseFloat(s.DATUM.SPHEROID.rf,10)),s.DATUM&&s.DATUM.TOWGS84&&(n.datum_params=s.DATUM.TOWGS84),~n.datumCode.indexOf("osgb_1936")&&(n.datumCode="osgb36"),~n.datumCode.indexOf("osni_1952")&&(n.datumCode="osni52"),(~n.datumCode.indexOf("tm65")||~n.datumCode.indexOf("geodetic_datum_of_1965"))&&(n.datumCode="ire65"),n.datumCode==="ch1903+"&&(n.datumCode="ch1903"),~n.datumCode.indexOf("israel")&&(n.datumCode="isr93")),n.b&&!isFinite(n.b)&&(n.b=n.a);function o(l){var u=n.to_meter||1;return l*u}var a=function(l){return ey(n,l)},h=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",Rn],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",Rn],["x0","false_easting",o],["y0","false_northing",o],["long0","central_meridian",Rn],["lat0","latitude_of_origin",Rn],["lat0","standard_parallel_1",Rn],["lat1","standard_parallel_1",Rn],["lat2","standard_parallel_2",Rn],["azimuth","Azimuth"],["alpha","azimuth",Rn],["srsCode","name"]];h.forEach(a),!n.long0&&n.longc&&(n.projName==="Albers_Conic_Equal_Area"||n.projName==="Lambert_Azimuthal_Equal_Area")&&(n.long0=n.longc),!n.lat_ts&&n.lat1&&(n.projName==="Stereographic_South_Pole"||n.projName==="Polar Stereographic (variant B)")?(n.lat0=Rn(n.lat1>0?90:-90),n.lat_ts=n.lat1):!n.lat_ts&&n.lat0&&n.projName==="Polar_Stereographic"&&(n.lat_ts=n.lat0,n.lat0=Rn(n.lat0>0?90:-90))}function Iu(n){var t=Qv(n),e=t.shift(),i=t.shift();t.unshift(["name",i]),t.unshift(["type",e]);var r={};return ur(t,r),ny(r),r}function qe(n){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?qe[n]=Ko(arguments[1]):qe[n]=Iu(arguments[1]):qe[n]=e}else if(arguments.length===1){if(Array.isArray(n))return n.map(function(i){Array.isArray(i)?qe.apply(t,i):qe(i)});if(typeof n=="string"){if(n in qe)return qe[n]}else"EPSG"in n?qe["EPSG:"+n.EPSG]=n:"ESRI"in n?qe["ESRI:"+n.ESRI]=n:"IAU2000"in n?qe["IAU2000:"+n.IAU2000]=n:console.log(n);return}}Vv(qe);function iy(n){return typeof n=="string"}function ry(n){return n in qe}var sy=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function ay(n){return sy.some(function(t){return n.indexOf(t)>-1})}var oy=["3857","900913","3785","102113"];function hy(n){var t=yi(n,"authority");if(t){var e=yi(t,"epsg");return e&&oy.indexOf(e)>-1}}function ly(n){var t=yi(n,"extension");if(t)return yi(t,"proj4")}function cy(n){return n[0]==="+"}function uy(n){if(iy(n)){if(ry(n))return qe[n];if(ay(n)){var t=Iu(n);if(hy(t))return qe["EPSG:3857"];var e=ly(t);return e?Ko(e):t}if(cy(n))return Ko(n)}else return n}function wc(n,t){n=n||{};var e,i;if(!t)return n;for(i in t)e=t[i],e!==void 0&&(n[i]=e);return n}function On(n,t,e){var i=n*t;return e/Math.sqrt(1-i*i)}function gs(n){return n<0?-1:1}function _t(n){return Math.abs(n)<=de?n:n-gs(n)*us}function An(n,t,e){var i=n*e,r=.5*n;return i=Math.pow((1-i)/(1+i),r),Math.tan(.5*(et-t))/i}function ds(n,t){for(var e=.5*n,i,r,s=et-2*Math.atan(t),o=0;o<=15;o++)if(i=n*Math.sin(s),r=et-2*Math.atan(t*Math.pow((1-i)/(1+i),e))-s,s+=r,Math.abs(r)<=1e-10)return s;return-9999}function fy(){var n=this.b/this.a;this.es=1-n*n,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=On(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function dy(n){var t=n.x,e=n.y;if(e*Dn>90&&e*Dn<-90&&t*Dn>180&&t*Dn<-180)return null;var i,r;if(Math.abs(Math.abs(e)-et)<=ct)return null;if(this.sphere)i=this.x0+this.a*this.k0*_t(t-this.long0),r=this.y0+this.a*this.k0*Math.log(Math.tan(Qt+.5*e));else{var s=Math.sin(e),o=An(this.e,e,s);i=this.x0+this.a*this.k0*_t(t-this.long0),r=this.y0-this.a*this.k0*Math.log(o)}return n.x=i,n.y=r,n}function py(n){var t=n.x-this.x0,e=n.y-this.y0,i,r;if(this.sphere)r=et-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var s=Math.exp(-e/(this.a*this.k0));if(r=ds(this.e,s),r===-9999)return null}return i=_t(this.long0+t/(this.a*this.k0)),n.x=i,n.y=r,n}var my=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const gy={init:fy,forward:dy,inverse:py,names:my};function _y(){}function Ac(n){return n}var vy=["longlat","identity"];const yy={init:_y,forward:Ac,inverse:Ac,names:vy};var My=[gy,yy],sa={},xa=[];function Uu(n,t){var e=xa.length;return n.names?(xa[e]=n,n.names.forEach(function(i){sa[i.toLowerCase()]=e}),this):(console.log(t),!0)}function xy(n){if(!n)return!1;var t=n.toLowerCase();if(typeof sa[t]<"u"&&xa[sa[t]])return xa[sa[t]]}function Sy(){My.forEach(Uu)}const Ey={start:Sy,add:Uu,get:xy};var Ot={};Ot.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};Ot.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};Ot.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};Ot.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};Ot.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};Ot.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};Ot.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};Ot.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};Ot.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};Ot.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};Ot.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};Ot.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};Ot.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};Ot.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};Ot.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};Ot.clrk80ign={a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"};Ot.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};Ot.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};Ot.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};Ot.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};Ot.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};Ot.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};Ot.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};Ot.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};Ot.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};Ot.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};Ot.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};Ot.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};Ot.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};Ot.hough={a:6378270,rf:297,ellipseName:"Hough"};Ot.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};Ot.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};Ot.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};Ot.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};Ot.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};Ot.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};Ot.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};Ot.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};Ot.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};Ot.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};Ot.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};Ot.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var by=Ot.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};Ot.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function wy(n,t,e,i){var r=n*n,s=t*t,o=(r-s)/r,a=0;i?(n*=1-o*(Xv+o*(qv+o*Yv)),r=n*n,o=0):a=Math.sqrt(o);var h=(r-s)/s;return{es:o,e:a,ep2:h}}function Ay(n,t,e,i,r){if(!n){var s=yi(Ot,i);s||(s=by),n=s.a,t=s.b,e=s.rf}return e&&!t&&(t=(1-1/e)*n),(e===0||Math.abs(n-t)<ct)&&(r=!0,t=n),{a:n,b:t,rf:e,sphere:r}}var ye={};ye.wgs84={towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"};ye.ch1903={towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"};ye.ggrs87={towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"};ye.nad83={towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"};ye.nad27={nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"};ye.potsdam={towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"};ye.carthage={towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"};ye.hermannskogel={towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"};ye.osni52={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"};ye.ire65={towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"};ye.rassadiran={towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"};ye.nzgd49={towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"};ye.osgb36={towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Airy 1830"};ye.s_jtsk={towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"};ye.beduaram={towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"};ye.gunung_segara={towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"};ye.rnb72={towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"};function Ty(n,t,e,i,r,s,o){var a={};return n===void 0||n==="none"?a.datum_type=jo:a.datum_type=Wv,t&&(a.datum_params=t.map(parseFloat),(a.datum_params[0]!==0||a.datum_params[1]!==0||a.datum_params[2]!==0)&&(a.datum_type=Bi),a.datum_params.length>3&&(a.datum_params[3]!==0||a.datum_params[4]!==0||a.datum_params[5]!==0||a.datum_params[6]!==0)&&(a.datum_type=Gi,a.datum_params[3]*=rs,a.datum_params[4]*=rs,a.datum_params[5]*=rs,a.datum_params[6]=a.datum_params[6]/1e6+1)),o&&(a.datum_type=vr,a.grids=o),a.a=e,a.b=i,a.es=r,a.ep2=s,a}var Ou={};function Cy(n,t){var e=new DataView(t),i=Py(e),r=Dy(e,i),s=Ny(e,r,i),o={header:r,subgrids:s};return Ou[n]=o,o}function Ry(n){if(n===void 0)return null;var t=n.split(",");return t.map(Ly)}function Ly(n){if(n.length===0)return null;var t=n[0]==="@";return t&&(n=n.slice(1)),n==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:n,mandatory:!t,grid:Ou[n]||null,isNull:!1}}function fr(n){return n/3600*Math.PI/180}function Py(n){var t=n.getInt32(8,!1);return t===11?!1:(t=n.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function Dy(n,t){return{nFields:n.getInt32(8,t),nSubgridFields:n.getInt32(24,t),nSubgrids:n.getInt32(40,t),shiftType:Zo(n,56,56+8).trim(),fromSemiMajorAxis:n.getFloat64(120,t),fromSemiMinorAxis:n.getFloat64(136,t),toSemiMajorAxis:n.getFloat64(152,t),toSemiMinorAxis:n.getFloat64(168,t)}}function Zo(n,t,e){return String.fromCharCode.apply(null,new Uint8Array(n.buffer.slice(t,e)))}function Ny(n,t,e){for(var i=176,r=[],s=0;s<t.nSubgrids;s++){var o=Uy(n,i,e),a=Oy(n,i,o,e),h=Math.round(1+(o.upperLongitude-o.lowerLongitude)/o.longitudeInterval),l=Math.round(1+(o.upperLatitude-o.lowerLatitude)/o.latitudeInterval);r.push({ll:[fr(o.lowerLongitude),fr(o.lowerLatitude)],del:[fr(o.longitudeInterval),fr(o.latitudeInterval)],lim:[h,l],count:o.gridNodeCount,cvs:Iy(a)}),i+=176+o.gridNodeCount*16}return r}function Iy(n){return n.map(function(t){return[fr(t.longitudeShift),fr(t.latitudeShift)]})}function Uy(n,t,e){return{name:Zo(n,t+8,t+16).trim(),parent:Zo(n,t+24,t+24+8).trim(),lowerLatitude:n.getFloat64(t+72,e),upperLatitude:n.getFloat64(t+88,e),lowerLongitude:n.getFloat64(t+104,e),upperLongitude:n.getFloat64(t+120,e),latitudeInterval:n.getFloat64(t+136,e),longitudeInterval:n.getFloat64(t+152,e),gridNodeCount:n.getInt32(t+168,e)}}function Oy(n,t,e,i){for(var r=t+176,s=16,o=[],a=0;a<e.gridNodeCount;a++){var h={latitudeShift:n.getFloat32(r+a*s,i),longitudeShift:n.getFloat32(r+a*s+4,i),latitudeAccuracy:n.getFloat32(r+a*s+8,i),longitudeAccuracy:n.getFloat32(r+a*s+12,i)};o.push(h)}return o}function Nn(n,t){if(!(this instanceof Nn))return new Nn(n);t=t||function(l){if(l)throw l};var e=uy(n);if(typeof e!="object"){t(n);return}var i=Nn.projections.get(e.projName);if(!i){t(n);return}if(e.datumCode&&e.datumCode!=="none"){var r=yi(ye,e.datumCode);r&&(e.datum_params=e.datum_params||(r.towgs84?r.towgs84.split(","):null),e.ellps=r.ellipse,e.datumName=r.datumName?r.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var s=Ay(e.a,e.b,e.rf,e.ellps,e.sphere),o=wy(s.a,s.b,s.rf,e.R_A),a=Ry(e.nadgrids),h=e.datum||Ty(e.datumCode,e.datum_params,s.a,s.b,o.es,o.ep2,a);wc(this,e),wc(this,i),this.a=s.a,this.b=s.b,this.rf=s.rf,this.sphere=s.sphere,this.es=o.es,this.e=o.e,this.ep2=o.ep2,this.datum=h,this.init(),t(null,this)}Nn.projections=Ey;Nn.projections.start();function Fy(n,t){return n.datum_type!==t.datum_type||n.a!==t.a||Math.abs(n.es-t.es)>5e-11?!1:n.datum_type===Bi?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]:n.datum_type===Gi?n.datum_params[0]===t.datum_params[0]&&n.datum_params[1]===t.datum_params[1]&&n.datum_params[2]===t.datum_params[2]&&n.datum_params[3]===t.datum_params[3]&&n.datum_params[4]===t.datum_params[4]&&n.datum_params[5]===t.datum_params[5]&&n.datum_params[6]===t.datum_params[6]:!0}function Fu(n,t,e){var i=n.x,r=n.y,s=n.z?n.z:0,o,a,h,l;if(r<-et&&r>-1.001*et)r=-et;else if(r>et&&r<1.001*et)r=et;else{if(r<-et)return{x:-1/0,y:-1/0,z:n.z};if(r>et)return{x:1/0,y:1/0,z:n.z}}return i>Math.PI&&(i-=2*Math.PI),a=Math.sin(r),l=Math.cos(r),h=a*a,o=e/Math.sqrt(1-t*h),{x:(o+s)*l*Math.cos(i),y:(o+s)*l*Math.sin(i),z:(o*(1-t)+s)*a}}function Bu(n,t,e,i){var r=1e-12,s=r*r,o=30,a,h,l,u,c,f,d,g,v,p,m,E,_,y=n.x,x=n.y,T=n.z?n.z:0,w,A,M;if(a=Math.sqrt(y*y+x*x),h=Math.sqrt(y*y+x*x+T*T),a/e<r){if(w=0,h/e<r)return A=et,M=-i,{x:n.x,y:n.y,z:n.z}}else w=Math.atan2(x,y);l=T/h,u=a/h,c=1/Math.sqrt(1-t*(2-t)*u*u),g=u*(1-t)*c,v=l*c,_=0;do _++,d=e/Math.sqrt(1-t*v*v),M=a*g+T*v-d*(1-t*v*v),f=t*d/(d+M),c=1/Math.sqrt(1-f*(2-f)*u*u),p=u*(1-f)*c,m=l*c,E=m*g-p*v,g=p,v=m;while(E*E>s&&_<o);return A=Math.atan(m/Math.abs(p)),{x:w,y:A,z:M}}function By(n,t,e){if(t===Bi)return{x:n.x+e[0],y:n.y+e[1],z:n.z+e[2]};if(t===Gi){var i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],h=e[5],l=e[6];return{x:l*(n.x-h*n.y+a*n.z)+i,y:l*(h*n.x+n.y-o*n.z)+r,z:l*(-a*n.x+o*n.y+n.z)+s}}}function Gy(n,t,e){if(t===Bi)return{x:n.x-e[0],y:n.y-e[1],z:n.z-e[2]};if(t===Gi){var i=e[0],r=e[1],s=e[2],o=e[3],a=e[4],h=e[5],l=e[6],u=(n.x-i)/l,c=(n.y-r)/l,f=(n.z-s)/l;return{x:u+h*c-a*f,y:-h*u+c+o*f,z:a*u-o*c+f}}}function Qs(n){return n===Bi||n===Gi}function zy(n,t,e){if(Fy(n,t)||n.datum_type===jo||t.datum_type===jo)return e;var i=n.a,r=n.es;if(n.datum_type===vr){var s=Tc(n,!1,e);if(s!==0)return;i=xc,r=Sc}var o=t.a,a=t.b,h=t.es;if(t.datum_type===vr&&(o=xc,a=$v,h=Sc),r===h&&i===o&&!Qs(n.datum_type)&&!Qs(t.datum_type))return e;if(e=Fu(e,r,i),Qs(n.datum_type)&&(e=By(e,n.datum_type,n.datum_params)),Qs(t.datum_type)&&(e=Gy(e,t.datum_type,t.datum_params)),e=Bu(e,h,o,a),t.datum_type===vr){var l=Tc(t,!0,e);if(l!==0)return}return e}function Tc(n,t,e){if(n.grids===null||n.grids.length===0)return console.log("Grid shift grids not found"),-1;var i={x:-e.x,y:e.y},r={x:Number.NaN,y:Number.NaN},s=[];t:for(var o=0;o<n.grids.length;o++){var a=n.grids[o];if(s.push(a.name),a.isNull){r=i;break}if(a.mandatory,a.grid===null){if(a.mandatory)return console.log("Unable to find mandatory grid '"+a.name+"'"),-1;continue}for(var h=a.grid.subgrids,l=0,u=h.length;l<u;l++){var c=h[l],f=(Math.abs(c.del[1])+Math.abs(c.del[0]))/1e4,d=c.ll[0]-f,g=c.ll[1]-f,v=c.ll[0]+(c.lim[0]-1)*c.del[0]+f,p=c.ll[1]+(c.lim[1]-1)*c.del[1]+f;if(!(g>i.y||d>i.x||p<i.y||v<i.x)&&(r=ky(i,t,c),!isNaN(r.x)))break t}}return isNaN(r.x)?(console.log("Failed to find a grid shift table for location '"+-i.x*Dn+" "+i.y*Dn+" tried: '"+s+"'"),-1):(e.x=-r.x,e.y=r.y,0)}function ky(n,t,e){var i={x:Number.NaN,y:Number.NaN};if(isNaN(n.x))return i;var r={x:n.x,y:n.y};r.x-=e.ll[0],r.y-=e.ll[1],r.x=_t(r.x-Math.PI)+Math.PI;var s=Cc(r,e);if(t){if(isNaN(s.x))return i;s.x=r.x-s.x,s.y=r.y-s.y;var o=9,a=1e-12,h,l;do{if(l=Cc(s,e),isNaN(l.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}h={x:r.x-(l.x+s.x),y:r.y-(l.y+s.y)},s.x+=h.x,s.y+=h.y}while(o--&&Math.abs(h.x)>a&&Math.abs(h.y)>a);if(o<0)return console.log("Inverse grid shift iterator failed to converge."),i;i.x=_t(s.x+e.ll[0]),i.y=s.y+e.ll[1]}else isNaN(s.x)||(i.x=n.x+s.x,i.y=n.y+s.y);return i}function Cc(n,t){var e={x:n.x/t.del[0],y:n.y/t.del[1]},i={x:Math.floor(e.x),y:Math.floor(e.y)},r={x:e.x-1*i.x,y:e.y-1*i.y},s={x:Number.NaN,y:Number.NaN},o;if(i.x<0||i.x>=t.lim[0]||i.y<0||i.y>=t.lim[1])return s;o=i.y*t.lim[0]+i.x;var a={x:t.cvs[o][0],y:t.cvs[o][1]};o++;var h={x:t.cvs[o][0],y:t.cvs[o][1]};o+=t.lim[0];var l={x:t.cvs[o][0],y:t.cvs[o][1]};o--;var u={x:t.cvs[o][0],y:t.cvs[o][1]},c=r.x*r.y,f=r.x*(1-r.y),d=(1-r.x)*(1-r.y),g=(1-r.x)*r.y;return s.x=d*a.x+f*h.x+g*u.x+c*l.x,s.y=d*a.y+f*h.y+g*u.y+c*l.y,s}function Rc(n,t,e){var i=e.x,r=e.y,s=e.z||0,o,a,h,l={};for(h=0;h<3;h++)if(!(t&&h===2&&e.z===void 0))switch(h===0?(o=i,"ew".indexOf(n.axis[h])!==-1?a="x":a="y"):h===1?(o=r,"ns".indexOf(n.axis[h])!==-1?a="y":a="x"):(o=s,a="z"),n.axis[h]){case"e":l[a]=o;break;case"w":l[a]=-o;break;case"n":l[a]=o;break;case"s":l[a]=-o;break;case"u":e[a]!==void 0&&(l.z=o);break;case"d":e[a]!==void 0&&(l.z=-o);break;default:return null}return l}function Gu(n){var t={x:n[0],y:n[1]};return n.length>2&&(t.z=n[2]),n.length>3&&(t.m=n[3]),t}function Hy(n){Lc(n.x),Lc(n.y)}function Lc(n){if(typeof Number.isFinite=="function"){if(Number.isFinite(n))return;throw new TypeError("coordinates must be finite numbers")}if(typeof n!="number"||n!==n||!isFinite(n))throw new TypeError("coordinates must be finite numbers")}function Vy(n,t){return(n.datum.datum_type===Bi||n.datum.datum_type===Gi||n.datum.datum_type===vr)&&t.datumCode!=="WGS84"||(t.datum.datum_type===Bi||t.datum.datum_type===Gi||t.datum.datum_type===vr)&&n.datumCode!=="WGS84"}function Sa(n,t,e,i){var r;Array.isArray(e)?e=Gu(e):e={x:e.x,y:e.y,z:e.z,m:e.m};var s=e.z!==void 0;if(Hy(e),n.datum&&t.datum&&Vy(n,t)&&(r=new Nn("WGS84"),e=Sa(n,r,e,i),n=r),i&&n.axis!=="enu"&&(e=Rc(n,!1,e)),n.projName==="longlat")e={x:e.x*Pe,y:e.y*Pe,z:e.z||0};else if(n.to_meter&&(e={x:e.x*n.to_meter,y:e.y*n.to_meter,z:e.z||0}),e=n.inverse(e),!e)return;if(n.from_greenwich&&(e.x+=n.from_greenwich),e=zy(n.datum,t.datum,e),!!e)return t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*Dn,y:e.y*Dn,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),i&&t.axis!=="enu"?Rc(t,!0,e):(e&&!s&&delete e.z,e)}var Pc=Nn("WGS84");function Co(n,t,e,i){var r,s,o;return Array.isArray(e)?(r=Sa(n,t,e,i)||{x:NaN,y:NaN},e.length>2?typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof r.z=="number"?[r.x,r.y,r.z].concat(e.splice(3)):[r.x,r.y,e[2]].concat(e.splice(3)):[r.x,r.y].concat(e.splice(2)):[r.x,r.y]):(s=Sa(n,t,e,i),o=Object.keys(e),o.length===2||o.forEach(function(a){if(typeof n.name<"u"&&n.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(a==="x"||a==="y"||a==="z")return}else if(a==="x"||a==="y")return;s[a]=e[a]}),s)}function Dc(n){return n instanceof Nn?n:n.oProj?n.oProj:Nn(n)}function Qe(n,t,e){n=Dc(n);var i=!1,r;return typeof t>"u"?(t=n,n=Pc,i=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,t=n,n=Pc,i=!0),t=Dc(t),e?Co(n,t,e):(r={forward:function(s,o){return Co(n,t,s,o)},inverse:function(s,o){return Co(t,n,s,o)}},i&&(r.oProj=t),r)}var Nc=6,zu="AJSAJS",ku="AFAFAF",dr=65,Ze=73,ln=79,jr=86,Kr=90;const Wy={forward:Hu,inverse:$y,toPoint:Vu};function Hu(n,t){return t=t||5,Yy(Xy({lat:n[1],lon:n[0]}),t)}function $y(n){var t=_h($u(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function Vu(n){var t=_h($u(n.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function Ro(n){return n*(Math.PI/180)}function Ic(n){return 180*(n/Math.PI)}function Xy(n){var t=n.lat,e=n.lon,i=6378137,r=.00669438,s=.9996,o,a,h,l,u,c,f,d=Ro(t),g=Ro(e),v,p;p=Math.floor((e+180)/6)+1,e===180&&(p=60),t>=56&&t<64&&e>=3&&e<12&&(p=32),t>=72&&t<84&&(e>=0&&e<9?p=31:e>=9&&e<21?p=33:e>=21&&e<33?p=35:e>=33&&e<42&&(p=37)),o=(p-1)*6-180+3,v=Ro(o),a=r/(1-r),h=i/Math.sqrt(1-r*Math.sin(d)*Math.sin(d)),l=Math.tan(d)*Math.tan(d),u=a*Math.cos(d)*Math.cos(d),c=Math.cos(d)*(g-v),f=i*((1-r/4-3*r*r/64-5*r*r*r/256)*d-(3*r/8+3*r*r/32+45*r*r*r/1024)*Math.sin(2*d)+(15*r*r/256+45*r*r*r/1024)*Math.sin(4*d)-35*r*r*r/3072*Math.sin(6*d));var m=s*h*(c+(1-l+u)*c*c*c/6+(5-18*l+l*l+72*u-58*a)*c*c*c*c*c/120)+5e5,E=s*(f+h*Math.tan(d)*(c*c/2+(5-l+9*u+4*u*u)*c*c*c*c/24+(61-58*l+l*l+600*u-330*a)*c*c*c*c*c*c/720));return t<0&&(E+=1e7),{northing:Math.round(E),easting:Math.round(m),zoneNumber:p,zoneLetter:qy(t)}}function _h(n){var t=n.northing,e=n.easting,i=n.zoneLetter,r=n.zoneNumber;if(r<0||r>60)return null;var s=.9996,o=6378137,a=.00669438,h,l=(1-Math.sqrt(1-a))/(1+Math.sqrt(1-a)),u,c,f,d,g,v,p,m,E,_=e-5e5,y=t;i<"N"&&(y-=1e7),p=(r-1)*6-180+3,h=a/(1-a),v=y/s,m=v/(o*(1-a/4-3*a*a/64-5*a*a*a/256)),E=m+(3*l/2-27*l*l*l/32)*Math.sin(2*m)+(21*l*l/16-55*l*l*l*l/32)*Math.sin(4*m)+151*l*l*l/96*Math.sin(6*m),u=o/Math.sqrt(1-a*Math.sin(E)*Math.sin(E)),c=Math.tan(E)*Math.tan(E),f=h*Math.cos(E)*Math.cos(E),d=o*(1-a)/Math.pow(1-a*Math.sin(E)*Math.sin(E),1.5),g=_/(u*s);var x=E-u*Math.tan(E)/d*(g*g/2-(5+3*c+10*f-4*f*f-9*h)*g*g*g*g/24+(61+90*c+298*f+45*c*c-252*h-3*f*f)*g*g*g*g*g*g/720);x=Ic(x);var T=(g-(1+2*c+f)*g*g*g/6+(5-2*f+28*c-3*f*f+8*h+24*c*c)*g*g*g*g*g/120)/Math.cos(E);T=p+Ic(T);var w;if(n.accuracy){var A=_h({northing:n.northing+n.accuracy,easting:n.easting+n.accuracy,zoneLetter:n.zoneLetter,zoneNumber:n.zoneNumber});w={top:A.lat,right:A.lon,bottom:x,left:T}}else w={lat:x,lon:T};return w}function qy(n){var t="Z";return 84>=n&&n>=72?t="X":72>n&&n>=64?t="W":64>n&&n>=56?t="V":56>n&&n>=48?t="U":48>n&&n>=40?t="T":40>n&&n>=32?t="S":32>n&&n>=24?t="R":24>n&&n>=16?t="Q":16>n&&n>=8?t="P":8>n&&n>=0?t="N":0>n&&n>=-8?t="M":-8>n&&n>=-16?t="L":-16>n&&n>=-24?t="K":-24>n&&n>=-32?t="J":-32>n&&n>=-40?t="H":-40>n&&n>=-48?t="G":-48>n&&n>=-56?t="F":-56>n&&n>=-64?t="E":-64>n&&n>=-72?t="D":-72>n&&n>=-80&&(t="C"),t}function Yy(n,t){var e="00000"+n.easting,i="00000"+n.northing;return n.zoneNumber+n.zoneLetter+jy(n.easting,n.northing,n.zoneNumber)+e.substr(e.length-5,t)+i.substr(i.length-5,t)}function jy(n,t,e){var i=Wu(e),r=Math.floor(n/1e5),s=Math.floor(t/1e5)%20;return Ky(r,s,i)}function Wu(n){var t=n%Nc;return t===0&&(t=Nc),t}function Ky(n,t,e){var i=e-1,r=zu.charCodeAt(i),s=ku.charCodeAt(i),o=r+n-1,a=s+t,h=!1;o>Kr&&(o=o-Kr+dr-1,h=!0),(o===Ze||r<Ze&&o>Ze||(o>Ze||r<Ze)&&h)&&o++,(o===ln||r<ln&&o>ln||(o>ln||r<ln)&&h)&&(o++,o===Ze&&o++),o>Kr&&(o=o-Kr+dr-1),a>jr?(a=a-jr+dr-1,h=!0):h=!1,(a===Ze||s<Ze&&a>Ze||(a>Ze||s<Ze)&&h)&&a++,(a===ln||s<ln&&a>ln||(a>ln||s<ln)&&h)&&(a++,a===Ze&&a++),a>jr&&(a=a-jr+dr-1);var l=String.fromCharCode(o)+String.fromCharCode(a);return l}function $u(n){if(n&&n.length===0)throw"MGRSPoint coverting from nothing";for(var t=n.length,e=null,i="",r,s=0;!/[A-Z]/.test(r=n.charAt(s));){if(s>=2)throw"MGRSPoint bad conversion from: "+n;i+=r,s++}var o=parseInt(i,10);if(s===0||s+3>t)throw"MGRSPoint bad conversion from: "+n;var a=n.charAt(s++);if(a<="A"||a==="B"||a==="Y"||a>="Z"||a==="I"||a==="O")throw"MGRSPoint zone letter "+a+" not handled: "+n;e=n.substring(s,s+=2);for(var h=Wu(o),l=Zy(e.charAt(0),h),u=Jy(e.charAt(1),h);u<Qy(a);)u+=2e6;var c=t-s;if(c%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+n;var f=c/2,d=0,g=0,v,p,m,E,_;return f>0&&(v=1e5/Math.pow(10,f),p=n.substring(s,s+f),d=parseFloat(p)*v,m=n.substring(s+f),g=parseFloat(m)*v),E=d+l,_=g+u,{easting:E,northing:_,zoneLetter:a,zoneNumber:o,accuracy:v}}function Zy(n,t){for(var e=zu.charCodeAt(t-1),i=1e5,r=!1;e!==n.charCodeAt(0);){if(e++,e===Ze&&e++,e===ln&&e++,e>Kr){if(r)throw"Bad character: "+n;e=dr,r=!0}i+=1e5}return i}function Jy(n,t){if(n>"V")throw"MGRSPoint given invalid Northing "+n;for(var e=ku.charCodeAt(t-1),i=0,r=!1;e!==n.charCodeAt(0);){if(e++,e===Ze&&e++,e===ln&&e++,e>jr){if(r)throw"Bad character: "+n;e=dr,r=!0}i+=1e5}return i}function Qy(n){var t;switch(n){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+n}function wr(n,t,e){if(!(this instanceof wr))return new wr(n,t,e);if(Array.isArray(n))this.x=n[0],this.y=n[1],this.z=n[2]||0;else if(typeof n=="object")this.x=n.x,this.y=n.y,this.z=n.z||0;else if(typeof n=="string"&&typeof t>"u"){var i=n.split(",");this.x=parseFloat(i[0],10),this.y=parseFloat(i[1],10),this.z=parseFloat(i[2],10)||0}else this.x=n,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}wr.fromMGRS=function(n){return new wr(Vu(n))};wr.prototype.toMGRS=function(n){return Hu([this.x,this.y],n)};var tM=1,eM=.25,Uc=.046875,Oc=.01953125,Fc=.01068115234375,nM=.75,iM=.46875,rM=.013020833333333334,sM=.007120768229166667,aM=.3645833333333333,oM=.005696614583333333,hM=.3076171875;function Xu(n){var t=[];t[0]=tM-n*(eM+n*(Uc+n*(Oc+n*Fc))),t[1]=n*(nM-n*(Uc+n*(Oc+n*Fc)));var e=n*n;return t[2]=e*(iM-n*(rM+n*sM)),e*=n,t[3]=e*(aM-n*oM),t[4]=e*n*hM,t}function Oa(n,t,e,i){return e*=t,t*=t,i[0]*n-e*(i[1]+t*(i[2]+t*(i[3]+t*i[4])))}var lM=20;function qu(n,t,e){for(var i=1/(1-t),r=n,s=lM;s;--s){var o=Math.sin(r),a=1-t*o*o;if(a=(Oa(r,o,Math.cos(r),e)-n)*(a*Math.sqrt(a))*i,r-=a,Math.abs(a)<ct)return r}return r}function cM(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=Xu(this.es),this.ml0=Oa(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function uM(n){var t=n.x,e=n.y,i=_t(t-this.long0),r,s,o,a=Math.sin(e),h=Math.cos(e);if(this.es){var u=h*i,c=Math.pow(u,2),f=this.ep2*Math.pow(h,2),d=Math.pow(f,2),g=Math.abs(h)>ct?Math.tan(e):0,v=Math.pow(g,2),p=Math.pow(v,2);r=1-this.es*Math.pow(a,2),u=u/Math.sqrt(r);var m=Oa(e,a,h,this.en);s=this.a*(this.k0*u*(1+c/6*(1-v+f+c/20*(5-18*v+p+14*f-58*v*f+c/42*(61+179*p-p*v-479*v)))))+this.x0,o=this.a*(this.k0*(m-this.ml0+a*i*u/2*(1+c/12*(5-v+9*f+4*d+c/30*(61+p-58*v+270*f-330*v*f+c/56*(1385+543*p-p*v-3111*v))))))+this.y0}else{var l=h*Math.sin(i);if(Math.abs(Math.abs(l)-1)<ct)return 93;if(s=.5*this.a*this.k0*Math.log((1+l)/(1-l))+this.x0,o=h*Math.cos(i)/Math.sqrt(1-Math.pow(l,2)),l=Math.abs(o),l>=1){if(l-1>ct)return 93;o=0}else o=Math.acos(o);e<0&&(o=-o),o=this.a*this.k0*(o-this.lat0)+this.y0}return n.x=s,n.y=o,n}function fM(n){var t,e,i,r,s=(n.x-this.x0)*(1/this.a),o=(n.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+o/this.k0,e=qu(t,this.es,this.en),Math.abs(e)<et){var c=Math.sin(e),f=Math.cos(e),d=Math.abs(f)>ct?Math.tan(e):0,g=this.ep2*Math.pow(f,2),v=Math.pow(g,2),p=Math.pow(d,2),m=Math.pow(p,2);t=1-this.es*Math.pow(c,2);var E=s*Math.sqrt(t)/this.k0,_=Math.pow(E,2);t=t*d,i=e-t*_/(1-this.es)*.5*(1-_/12*(5+3*p-9*g*p+g-4*v-_/30*(61+90*p-252*g*p+45*m+46*g-_/56*(1385+3633*p+4095*m+1574*m*p)))),r=_t(this.long0+E*(1-_/6*(1+2*p+g-_/20*(5+28*p+24*m+8*g*p+6*g-_/42*(61+662*p+1320*m+720*m*p))))/f)}else i=et*gs(o),r=0;else{var a=Math.exp(s/this.k0),h=.5*(a-1/a),l=this.lat0+o/this.k0,u=Math.cos(l);t=Math.sqrt((1-Math.pow(u,2))/(1+Math.pow(h,2))),i=Math.asin(t),o<0&&(i=-i),h===0&&u===0?r=0:r=_t(Math.atan2(h,u)+this.long0)}return n.x=r,n.y=i,n}var dM=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const aa={init:cM,forward:uM,inverse:fM,names:dM};function Yu(n){var t=Math.exp(n);return t=(t-1/t)/2,t}function wn(n,t){n=Math.abs(n),t=Math.abs(t);var e=Math.max(n,t),i=Math.min(n,t)/(e||1);return e*Math.sqrt(1+Math.pow(i,2))}function pM(n){var t=1+n,e=t-1;return e===0?n:n*Math.log(t)/e}function mM(n){var t=Math.abs(n);return t=pM(t*(1+t/(wn(1,t)+1))),n<0?-t:t}function vh(n,t){for(var e=2*Math.cos(2*t),i=n.length-1,r=n[i],s=0,o;--i>=0;)o=-s+e*r+n[i],s=r,r=o;return t+o*Math.sin(2*t)}function gM(n,t){for(var e=2*Math.cos(t),i=n.length-1,r=n[i],s=0,o;--i>=0;)o=-s+e*r+n[i],s=r,r=o;return Math.sin(t)*o}function _M(n){var t=Math.exp(n);return t=(t+1/t)/2,t}function ju(n,t,e){for(var i=Math.sin(t),r=Math.cos(t),s=Yu(e),o=_M(e),a=2*r*o,h=-2*i*s,l=n.length-1,u=n[l],c=0,f=0,d=0,g,v;--l>=0;)g=f,v=c,f=u,c=d,u=-g+a*f-h*c+n[l],d=-v+h*f+a*c;return a=i*o,h=r*s,[a*u-h*d,a*d+h*u]}function vM(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(aa.init.apply(this),this.forward=aa.forward,this.inverse=aa.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var n=this.es/(1+Math.sqrt(1-this.es)),t=n/(2-n),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var i=vh(this.cbg,this.lat0);this.Zb=-this.Qn*(i+gM(this.gtu,2*i))}function yM(n){var t=_t(n.x-this.long0),e=n.y;e=vh(this.cbg,e);var i=Math.sin(e),r=Math.cos(e),s=Math.sin(t),o=Math.cos(t);e=Math.atan2(i,o*r),t=Math.atan2(s*r,wn(i,r*o)),t=mM(Math.tan(t));var a=ju(this.gtu,2*e,2*t);e=e+a[0],t=t+a[1];var h,l;return Math.abs(t)<=2.623395162778?(h=this.a*(this.Qn*t)+this.x0,l=this.a*(this.Qn*e+this.Zb)+this.y0):(h=1/0,l=1/0),n.x=h,n.y=l,n}function MM(n){var t=(n.x-this.x0)*(1/this.a),e=(n.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var i,r;if(Math.abs(t)<=2.623395162778){var s=ju(this.utg,2*e,2*t);e=e+s[0],t=t+s[1],t=Math.atan(Yu(t));var o=Math.sin(e),a=Math.cos(e),h=Math.sin(t),l=Math.cos(t);e=Math.atan2(o*l,wn(h,l*a)),t=Math.atan2(h,l*a),i=_t(t+this.long0),r=vh(this.cgb,e)}else i=1/0,r=1/0;return n.x=i,n.y=r,n}var xM=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","tmerc"];const oa={init:vM,forward:yM,inverse:MM,names:xM};function SM(n,t){if(n===void 0){if(n=Math.floor((_t(t)+Math.PI)*30/Math.PI)+1,n<0)return 0;if(n>60)return 60}return n}var EM="etmerc";function bM(){var n=SM(this.zone,this.long0);if(n===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(n)-183)*Pe,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,oa.init.apply(this),this.forward=oa.forward,this.inverse=oa.inverse}var wM=["Universal Transverse Mercator System","utm"];const AM={init:bM,names:wM,dependsOn:EM};function yh(n,t){return Math.pow((1-n)/(1+n),t)}var TM=20;function CM(){var n=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*n*n),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(n/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+Qt)/(Math.pow(Math.tan(.5*this.lat0+Qt),this.C)*yh(this.e*n,this.ratexp))}function RM(n){var t=n.x,e=n.y;return n.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+Qt),this.C)*yh(this.e*Math.sin(e),this.ratexp))-et,n.x=this.C*t,n}function LM(n){for(var t=1e-14,e=n.x/this.C,i=n.y,r=Math.pow(Math.tan(.5*i+Qt)/this.K,1/this.C),s=TM;s>0&&(i=2*Math.atan(r*yh(this.e*Math.sin(n.y),-.5*this.e))-et,!(Math.abs(i-n.y)<t));--s)n.y=i;return s?(n.x=e,n.y=i,n):null}var PM=["gauss"];const Mh={init:CM,forward:RM,inverse:LM,names:PM};function DM(){Mh.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function NM(n){var t,e,i,r;return n.x=_t(n.x-this.long0),Mh.forward.apply(this,[n]),t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),r=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*i),n.x=r*e*Math.sin(n.x),n.y=r*(this.cosc0*t-this.sinc0*e*i),n.x=this.a*n.x+this.x0,n.y=this.a*n.y+this.y0,n}function IM(n){var t,e,i,r,s;if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,s=Math.sqrt(n.x*n.x+n.y*n.y)){var o=2*Math.atan2(s,this.R2);t=Math.sin(o),e=Math.cos(o),r=Math.asin(e*this.sinc0+n.y*t*this.cosc0/s),i=Math.atan2(n.x*t,s*this.cosc0*e-n.y*this.sinc0*t)}else r=this.phic0,i=0;return n.x=i,n.y=r,Mh.inverse.apply(this,[n]),n.x=_t(n.x+this.long0),n}var UM=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const OM={init:DM,forward:NM,inverse:IM,names:UM};function FM(n,t,e){return t*=e,Math.tan(.5*(et+n))*Math.pow((1-t)/(1+t),.5*e)}function BM(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ct&&(this.k0=.5*(1+gs(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=ct&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=ct&&Math.abs(Math.cos(this.lat_ts))>ct&&(this.k0=.5*this.cons*On(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/An(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=On(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-et,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function GM(n){var t=n.x,e=n.y,i=Math.sin(e),r=Math.cos(e),s,o,a,h,l,u,c=_t(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=ct&&Math.abs(e+this.lat0)<=ct?(n.x=NaN,n.y=NaN,n):this.sphere?(s=2*this.k0/(1+this.sinlat0*i+this.coslat0*r*Math.cos(c)),n.x=this.a*s*r*Math.sin(c)+this.x0,n.y=this.a*s*(this.coslat0*i-this.sinlat0*r*Math.cos(c))+this.y0,n):(o=2*Math.atan(this.ssfn_(e,i,this.e))-et,h=Math.cos(o),a=Math.sin(o),Math.abs(this.coslat0)<=ct?(l=An(this.e,e*this.con,this.con*i),u=2*this.a*this.k0*l/this.cons,n.x=this.x0+u*Math.sin(t-this.long0),n.y=this.y0-this.con*u*Math.cos(t-this.long0),n):(Math.abs(this.sinlat0)<ct?(s=2*this.a*this.k0/(1+h*Math.cos(c)),n.y=s*a):(s=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*a+this.cosX0*h*Math.cos(c))),n.y=s*(this.cosX0*a-this.sinX0*h*Math.cos(c))+this.y0),n.x=s*h*Math.sin(c)+this.x0,n))}function zM(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,r,s,o=Math.sqrt(n.x*n.x+n.y*n.y);if(this.sphere){var a=2*Math.atan(o/(2*this.a*this.k0));return t=this.long0,e=this.lat0,o<=ct?(n.x=t,n.y=e,n):(e=Math.asin(Math.cos(a)*this.sinlat0+n.y*Math.sin(a)*this.coslat0/o),Math.abs(this.coslat0)<ct?this.lat0>0?t=_t(this.long0+Math.atan2(n.x,-1*n.y)):t=_t(this.long0+Math.atan2(n.x,n.y)):t=_t(this.long0+Math.atan2(n.x*Math.sin(a),o*this.coslat0*Math.cos(a)-n.y*this.sinlat0*Math.sin(a))),n.x=t,n.y=e,n)}else if(Math.abs(this.coslat0)<=ct){if(o<=ct)return e=this.lat0,t=this.long0,n.x=t,n.y=e,n;n.x*=this.con,n.y*=this.con,i=o*this.cons/(2*this.a*this.k0),e=this.con*ds(this.e,i),t=this.con*_t(this.con*this.long0+Math.atan2(n.x,-1*n.y))}else r=2*Math.atan(o*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,o<=ct?s=this.X0:(s=Math.asin(Math.cos(r)*this.sinX0+n.y*Math.sin(r)*this.cosX0/o),t=_t(this.long0+Math.atan2(n.x*Math.sin(r),o*this.cosX0*Math.cos(r)-n.y*this.sinX0*Math.sin(r)))),e=-1*ds(this.e,Math.tan(.5*(et+s)));return n.x=t,n.y=e,n}var kM=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)","Polar_Stereographic"];const HM={init:BM,forward:GM,inverse:zM,names:kM,ssfn_:FM};function VM(){var n=this.lat0;this.lambda0=this.long0;var t=Math.sin(n),e=this.a,i=this.rf,r=1/i,s=2*r-Math.pow(r,2),o=this.e=Math.sqrt(s);this.R=this.k0*e*Math.sqrt(1-s)/(1-s*Math.pow(t,2)),this.alpha=Math.sqrt(1+s/(1-s)*Math.pow(Math.cos(n),4)),this.b0=Math.asin(t/this.alpha);var a=Math.log(Math.tan(Math.PI/4+this.b0/2)),h=Math.log(Math.tan(Math.PI/4+n/2)),l=Math.log((1+o*t)/(1-o*t));this.K=a-this.alpha*h+this.alpha*o/2*l}function WM(n){var t=Math.log(Math.tan(Math.PI/4-n.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(n.y))/(1-this.e*Math.sin(n.y))),i=-this.alpha*(t+e)+this.K,r=2*(Math.atan(Math.exp(i))-Math.PI/4),s=this.alpha*(n.x-this.lambda0),o=Math.atan(Math.sin(s)/(Math.sin(this.b0)*Math.tan(r)+Math.cos(this.b0)*Math.cos(s))),a=Math.asin(Math.cos(this.b0)*Math.sin(r)-Math.sin(this.b0)*Math.cos(r)*Math.cos(s));return n.y=this.R/2*Math.log((1+Math.sin(a))/(1-Math.sin(a)))+this.y0,n.x=this.R*o+this.x0,n}function $M(n){for(var t=n.x-this.x0,e=n.y-this.y0,i=t/this.R,r=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),s=Math.asin(Math.cos(this.b0)*Math.sin(r)+Math.sin(this.b0)*Math.cos(r)*Math.cos(i)),o=Math.atan(Math.sin(i)/(Math.cos(this.b0)*Math.cos(i)-Math.sin(this.b0)*Math.tan(r))),a=this.lambda0+o/this.alpha,h=0,l=s,u=-1e3,c=0;Math.abs(l-u)>1e-7;){if(++c>20)return;h=1/this.alpha*(Math.log(Math.tan(Math.PI/4+s/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(l))/2)),u=l,l=2*Math.atan(Math.exp(h))-Math.PI/2}return n.x=a,n.y=l,n}var XM=["somerc"];const qM={init:VM,forward:WM,inverse:$M,names:XM};var lr=1e-7;function YM(n){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof n.PROJECTION=="object"?Object.keys(n.PROJECTION)[0]:n.PROJECTION;return"no_uoff"in n||"no_off"in n||t.indexOf(e)!==-1}function jM(){var n,t,e,i,r,s,o,a,h,l,u=0,c,f=0,d=0,g=0,v=0,p=0,m=0;this.no_off=YM(this),this.no_rot="no_rot"in this;var E=!1;"alpha"in this&&(E=!0);var _=!1;if("rectified_grid_angle"in this&&(_=!0),E&&(m=this.alpha),_&&(u=this.rectified_grid_angle*Pe),E||_)f=this.longc;else if(d=this.long1,v=this.lat1,g=this.long2,p=this.lat2,Math.abs(v-p)<=lr||(n=Math.abs(v))<=lr||Math.abs(n-et)<=lr||Math.abs(Math.abs(this.lat0)-et)<=lr||Math.abs(Math.abs(p)-et)<=lr)throw new Error;var y=1-this.es;t=Math.sqrt(y),Math.abs(this.lat0)>ct?(a=Math.sin(this.lat0),e=Math.cos(this.lat0),n=1-this.es*a*a,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/y),this.A=this.B*this.k0*t/n,i=this.B*t/(e*Math.sqrt(n)),r=i*i-1,r<=0?r=0:(r=Math.sqrt(r),this.lat0<0&&(r=-r)),this.E=r+=i,this.E*=Math.pow(An(this.e,this.lat0,a),this.B)):(this.B=1/t,this.A=this.k0,this.E=i=r=1),E||_?(E?(c=Math.asin(Math.sin(m)/i),_||(u=m)):(c=u,m=Math.asin(i*Math.sin(c))),this.lam0=f-Math.asin(.5*(r-1/r)*Math.tan(c))/this.B):(s=Math.pow(An(this.e,v,Math.sin(v)),this.B),o=Math.pow(An(this.e,p,Math.sin(p)),this.B),r=this.E/s,h=(o-s)/(o+s),l=this.E*this.E,l=(l-o*s)/(l+o*s),n=d-g,n<-Math.pi?g-=us:n>Math.pi&&(g+=us),this.lam0=_t(.5*(d+g)-Math.atan(l*Math.tan(.5*this.B*(d-g))/h)/this.B),c=Math.atan(2*Math.sin(this.B*_t(d-this.lam0))/(r-1/r)),u=m=Math.asin(i*Math.sin(c))),this.singam=Math.sin(c),this.cosgam=Math.cos(c),this.sinrot=Math.sin(u),this.cosrot=Math.cos(u),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(i*i-1)/Math.cos(m))),this.lat0<0&&(this.u_0=-this.u_0)),r=.5*c,this.v_pole_n=this.ArB*Math.log(Math.tan(Qt-r)),this.v_pole_s=this.ArB*Math.log(Math.tan(Qt+r))}function KM(n){var t={},e,i,r,s,o,a,h,l;if(n.x=n.x-this.lam0,Math.abs(Math.abs(n.y)-et)>ct){if(o=this.E/Math.pow(An(this.e,n.y,Math.sin(n.y)),this.B),a=1/o,e=.5*(o-a),i=.5*(o+a),s=Math.sin(this.B*n.x),r=(e*this.singam-s*this.cosgam)/i,Math.abs(Math.abs(r)-1)<ct)throw new Error;l=.5*this.ArB*Math.log((1-r)/(1+r)),a=Math.cos(this.B*n.x),Math.abs(a)<lr?h=this.A*n.x:h=this.ArB*Math.atan2(e*this.cosgam+s*this.singam,a)}else l=n.y>0?this.v_pole_n:this.v_pole_s,h=this.ArB*n.y;return this.no_rot?(t.x=h,t.y=l):(h-=this.u_0,t.x=l*this.cosrot+h*this.sinrot,t.y=h*this.cosrot-l*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function ZM(n){var t,e,i,r,s,o,a,h={};if(n.x=(n.x-this.x0)*(1/this.a),n.y=(n.y-this.y0)*(1/this.a),this.no_rot?(e=n.y,t=n.x):(e=n.x*this.cosrot-n.y*this.sinrot,t=n.y*this.cosrot+n.x*this.sinrot+this.u_0),i=Math.exp(-this.BrA*e),r=.5*(i-1/i),s=.5*(i+1/i),o=Math.sin(this.BrA*t),a=(o*this.cosgam+r*this.singam)/s,Math.abs(Math.abs(a)-1)<ct)h.x=0,h.y=a<0?-et:et;else{if(h.y=this.E/Math.sqrt((1+a)/(1-a)),h.y=ds(this.e,Math.pow(h.y,1/this.B)),h.y===1/0)throw new Error;h.x=-this.rB*Math.atan2(r*this.cosgam-o*this.singam,Math.cos(this.BrA*t))}return h.x+=this.lam0,h}var JM=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const QM={init:jM,forward:KM,inverse:ZM,names:JM};function tx(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<ct)){var n=this.b/this.a;this.e=Math.sqrt(1-n*n);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),i=On(this.e,t,e),r=An(this.e,this.lat1,t),s=Math.sin(this.lat2),o=Math.cos(this.lat2),a=On(this.e,s,o),h=An(this.e,this.lat2,s),l=An(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>ct?this.ns=Math.log(i/a)/Math.log(r/h):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=i/(this.ns*Math.pow(r,this.ns)),this.rh=this.a*this.f0*Math.pow(l,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function ex(n){var t=n.x,e=n.y;Math.abs(2*Math.abs(e)-Math.PI)<=ct&&(e=gs(e)*(et-2*ct));var i=Math.abs(Math.abs(e)-et),r,s;if(i>ct)r=An(this.e,e,Math.sin(e)),s=this.a*this.f0*Math.pow(r,this.ns);else{if(i=e*this.ns,i<=0)return null;s=0}var o=this.ns*_t(t-this.long0);return n.x=this.k0*(s*Math.sin(o))+this.x0,n.y=this.k0*(this.rh-s*Math.cos(o))+this.y0,n}function nx(n){var t,e,i,r,s,o=(n.x-this.x0)/this.k0,a=this.rh-(n.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(o*o+a*a),e=1):(t=-Math.sqrt(o*o+a*a),e=-1);var h=0;if(t!==0&&(h=Math.atan2(e*o,e*a)),t!==0||this.ns>0){if(e=1/this.ns,i=Math.pow(t/(this.a*this.f0),e),r=ds(this.e,i),r===-9999)return null}else r=-et;return s=_t(h/this.ns+this.long0),n.x=s,n.y=r,n}var ix=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const rx={init:tx,forward:ex,inverse:nx,names:ix};function sx(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function ax(n){var t,e,i,r,s,o,a,h=n.x,l=n.y,u=_t(h-this.long0);return t=Math.pow((1+this.e*Math.sin(l))/(1-this.e*Math.sin(l)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(l/2+this.s45),this.alfa)/t)-this.s45),i=-u*this.alfa,r=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(i)),s=Math.asin(Math.cos(e)*Math.sin(i)/Math.cos(r)),o=this.n*s,a=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(r/2+this.s45),this.n),n.y=a*Math.cos(o)/1,n.x=a*Math.sin(o)/1,this.czech||(n.y*=-1,n.x*=-1),n}function ox(n){var t,e,i,r,s,o,a,h,l=n.x;n.x=n.y,n.y=l,this.czech||(n.y*=-1,n.x*=-1),o=Math.sqrt(n.x*n.x+n.y*n.y),s=Math.atan2(n.y,n.x),r=s/Math.sin(this.s0),i=2*(Math.atan(Math.pow(this.ro0/o,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(i)-Math.sin(this.ad)*Math.cos(i)*Math.cos(r)),e=Math.asin(Math.cos(i)*Math.sin(r)/Math.cos(t)),n.x=this.long0-e/this.alfa,a=t,h=0;var u=0;do n.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(a))/(1-this.e*Math.sin(a)),this.e/2))-this.s45),Math.abs(a-n.y)<1e-10&&(h=1),a=n.y,u+=1;while(h===0&&u<15);return u>=15?null:n}var hx=["Krovak","krovak"];const lx={init:sx,forward:ax,inverse:ox,names:hx};function je(n,t,e,i,r){return n*r-t*Math.sin(2*r)+e*Math.sin(4*r)-i*Math.sin(6*r)}function _s(n){return 1-.25*n*(1+n/16*(3+1.25*n))}function vs(n){return .375*n*(1+.25*n*(1+.46875*n))}function ys(n){return .05859375*n*n*(1+.75*n)}function Ms(n){return n*n*n*(35/3072)}function Ar(n,t,e){var i=t*e;return n/Math.sqrt(1-i*i)}function Lr(n){return Math.abs(n)<et?n:n-gs(n)*Math.PI}function Ea(n,t,e,i,r){var s,o;s=n/t;for(var a=0;a<15;a++)if(o=(n-(t*s-e*Math.sin(2*s)+i*Math.sin(4*s)-r*Math.sin(6*s)))/(t-2*e*Math.cos(2*s)+4*i*Math.cos(4*s)-6*r*Math.cos(6*s)),s+=o,Math.abs(o)<=1e-10)return s;return NaN}function cx(){this.sphere||(this.e0=_s(this.es),this.e1=vs(this.es),this.e2=ys(this.es),this.e3=Ms(this.es),this.ml0=this.a*je(this.e0,this.e1,this.e2,this.e3,this.lat0))}function ux(n){var t,e,i=n.x,r=n.y;if(i=_t(i-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(r)*Math.sin(i)),e=this.a*(Math.atan2(Math.tan(r),Math.cos(i))-this.lat0);else{var s=Math.sin(r),o=Math.cos(r),a=Ar(this.a,this.e,s),h=Math.tan(r)*Math.tan(r),l=i*Math.cos(r),u=l*l,c=this.es*o*o/(1-this.es),f=this.a*je(this.e0,this.e1,this.e2,this.e3,r);t=a*l*(1-u*h*(1/6-(8-h+8*c)*u/120)),e=f-this.ml0+a*s/o*u*(.5+(5-h+6*c)*u/24)}return n.x=t+this.x0,n.y=e+this.y0,n}function fx(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,r;if(this.sphere){var s=e+this.lat0;i=Math.asin(Math.sin(s)*Math.cos(t)),r=Math.atan2(Math.tan(t),Math.cos(s))}else{var o=this.ml0/this.a+e,a=Ea(o,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(a)-et)<=ct)return n.x=this.long0,n.y=et,e<0&&(n.y*=-1),n;var h=Ar(this.a,this.e,Math.sin(a)),l=h*h*h/this.a/this.a*(1-this.es),u=Math.pow(Math.tan(a),2),c=t*this.a/h,f=c*c;i=a-h*Math.tan(a)/l*c*c*(.5-(1+3*u)*c*c/24),r=c*(1-f*(u/3+(1+3*u)*u*f/15))/Math.cos(a)}return n.x=_t(r+this.long0),n.y=Lr(i),n}var dx=["Cassini","Cassini_Soldner","cass"];const px={init:cx,forward:ux,inverse:fx,names:dx};function vi(n,t){var e;return n>1e-7?(e=n*t,(1-n*n)*(t/(1-e*e)-.5/n*Math.log((1-e)/(1+e)))):2*t}var mx=1,gx=2,_x=3,vx=4;function yx(){var n=Math.abs(this.lat0);if(Math.abs(n-et)<ct?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(n)<ct?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var t;switch(this.qp=vi(this.e,1),this.mmf=.5/(1-this.es),this.apa=Cx(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=vi(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function Mx(n){var t,e,i,r,s,o,a,h,l,u,c=n.x,f=n.y;if(c=_t(c-this.long0),this.sphere){if(s=Math.sin(f),u=Math.cos(f),i=Math.cos(c),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+u*i:1+this.sinph0*s+this.cosph0*u*i,e<=ct)return null;e=Math.sqrt(2/e),t=e*u*Math.sin(c),e*=this.mode===this.EQUIT?s:this.cosph0*s-this.sinph0*u*i}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(i=-i),Math.abs(f+this.lat0)<ct)return null;e=Qt-f*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(c),e*=i}}else{switch(a=0,h=0,l=0,i=Math.cos(c),r=Math.sin(c),s=Math.sin(f),o=vi(this.e,s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(a=o/this.qp,h=Math.sqrt(1-a*a)),this.mode){case this.OBLIQ:l=1+this.sinb1*a+this.cosb1*h*i;break;case this.EQUIT:l=1+h*i;break;case this.N_POLE:l=et+f,o=this.qp-o;break;case this.S_POLE:l=f-et,o=this.qp+o;break}if(Math.abs(l)<ct)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:l=Math.sqrt(2/l),this.mode===this.OBLIQ?e=this.ymf*l*(this.cosb1*a-this.sinb1*h*i):e=(l=Math.sqrt(2/(1+h*i)))*a*this.ymf,t=this.xmf*l*h*r;break;case this.N_POLE:case this.S_POLE:o>=0?(t=(l=Math.sqrt(o))*r,e=i*(this.mode===this.S_POLE?l:-l)):t=e=0;break}}return n.x=this.a*t+this.x0,n.y=this.a*e+this.y0,n}function xx(n){n.x-=this.x0,n.y-=this.y0;var t=n.x/this.a,e=n.y/this.a,i,r,s,o,a,h,l;if(this.sphere){var u=0,c,f=0;if(c=Math.sqrt(t*t+e*e),r=c*.5,r>1)return null;switch(r=2*Math.asin(r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(f=Math.sin(r),u=Math.cos(r)),this.mode){case this.EQUIT:r=Math.abs(c)<=ct?0:Math.asin(e*f/c),t*=f,e=u*c;break;case this.OBLIQ:r=Math.abs(c)<=ct?this.lat0:Math.asin(u*this.sinph0+e*f*this.cosph0/c),t*=f*this.cosph0,e=(u-Math.sin(r)*this.sinph0)*c;break;case this.N_POLE:e=-e,r=et-r;break;case this.S_POLE:r-=et;break}i=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(l=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,h=Math.sqrt(t*t+e*e),h<ct)return n.x=this.long0,n.y=this.lat0,n;o=2*Math.asin(.5*h/this.rq),s=Math.cos(o),t*=o=Math.sin(o),this.mode===this.OBLIQ?(l=s*this.sinb1+e*o*this.cosb1/h,a=this.qp*l,e=h*this.cosb1*s-e*this.sinb1*o):(l=e*o/h,a=this.qp*l,e=h*s)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),a=t*t+e*e,!a)return n.x=this.long0,n.y=this.lat0,n;l=1-a/this.qp,this.mode===this.S_POLE&&(l=-l)}i=Math.atan2(t,e),r=Rx(Math.asin(l),this.apa)}return n.x=_t(this.long0+i),n.y=r,n}var Sx=.3333333333333333,Ex=.17222222222222222,bx=.10257936507936508,wx=.06388888888888888,Ax=.0664021164021164,Tx=.016415012942191543;function Cx(n){var t,e=[];return e[0]=n*Sx,t=n*n,e[0]+=t*Ex,e[1]=t*wx,t*=n,e[0]+=t*bx,e[1]+=t*Ax,e[2]=t*Tx,e}function Rx(n,t){var e=n+n;return n+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var Lx=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const Px={init:yx,forward:Mx,inverse:xx,names:Lx,S_POLE:mx,N_POLE:gx,EQUIT:_x,OBLIQ:vx};function Mi(n){return Math.abs(n)>1&&(n=n>1?1:-1),Math.asin(n)}function Dx(){Math.abs(this.lat1+this.lat2)<ct||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=On(this.e3,this.sin_po,this.cos_po),this.qs1=vi(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=On(this.e3,this.sin_po,this.cos_po),this.qs2=vi(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=vi(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>ct?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function Nx(n){var t=n.x,e=n.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var i=vi(this.e3,this.sin_phi),r=this.a*Math.sqrt(this.c-this.ns0*i)/this.ns0,s=this.ns0*_t(t-this.long0),o=r*Math.sin(s)+this.x0,a=this.rh-r*Math.cos(s)+this.y0;return n.x=o,n.y=a,n}function Ix(n){var t,e,i,r,s,o;return n.x-=this.x0,n.y=this.rh-n.y+this.y0,this.ns0>=0?(t=Math.sqrt(n.x*n.x+n.y*n.y),i=1):(t=-Math.sqrt(n.x*n.x+n.y*n.y),i=-1),r=0,t!==0&&(r=Math.atan2(i*n.x,i*n.y)),i=t*this.ns0/this.a,this.sphere?o=Math.asin((this.c-i*i)/(2*this.ns0)):(e=(this.c-i*i)/this.ns0,o=this.phi1z(this.e3,e)),s=_t(r/this.ns0+this.long0),n.x=s,n.y=o,n}function Ux(n,t){var e,i,r,s,o,a=Mi(.5*t);if(n<ct)return a;for(var h=n*n,l=1;l<=25;l++)if(e=Math.sin(a),i=Math.cos(a),r=n*e,s=1-r*r,o=.5*s*s/i*(t/(1-h)-e/s+.5/n*Math.log((1-r)/(1+r))),a=a+o,Math.abs(o)<=1e-7)return a;return null}var Ox=["Albers_Conic_Equal_Area","Albers","aea"];const Fx={init:Dx,forward:Nx,inverse:Ix,names:Ox,phi1z:Ux};function Bx(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function Gx(n){var t,e,i,r,s,o,a,h,l=n.x,u=n.y;return i=_t(l-this.long0),t=Math.sin(u),e=Math.cos(u),r=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*r,s=1,o>0||Math.abs(o)<=ct?(a=this.x0+this.a*s*e*Math.sin(i)/o,h=this.y0+this.a*s*(this.cos_p14*t-this.sin_p14*e*r)/o):(a=this.x0+this.infinity_dist*e*Math.sin(i),h=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*r)),n.x=a,n.y=h,n}function zx(n){var t,e,i,r,s,o;return n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,n.x/=this.k0,n.y/=this.k0,(t=Math.sqrt(n.x*n.x+n.y*n.y))?(r=Math.atan2(t,this.rc),e=Math.sin(r),i=Math.cos(r),o=Mi(i*this.sin_p14+n.y*e*this.cos_p14/t),s=Math.atan2(n.x*e,t*this.cos_p14*i-n.y*this.sin_p14*e),s=_t(this.long0+s)):(o=this.phic0,s=0),n.x=s,n.y=o,n}var kx=["gnom"];const Hx={init:Bx,forward:Gx,inverse:zx,names:kx};function Vx(n,t){var e=1-(1-n*n)/(2*n)*Math.log((1-n)/(1+n));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*et:et;for(var i=Math.asin(.5*t),r,s,o,a,h=0;h<30;h++)if(s=Math.sin(i),o=Math.cos(i),a=n*s,r=Math.pow(1-a*a,2)/(2*o)*(t/(1-n*n)-s/(1-a*a)+.5/n*Math.log((1-a)/(1+a))),i+=r,Math.abs(r)<=1e-10)return i;return NaN}function Wx(){this.sphere||(this.k0=On(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function $x(n){var t=n.x,e=n.y,i,r,s=_t(t-this.long0);if(this.sphere)i=this.x0+this.a*s*Math.cos(this.lat_ts),r=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var o=vi(this.e,Math.sin(e));i=this.x0+this.a*this.k0*s,r=this.y0+this.a*o*.5/this.k0}return n.x=i,n.y=r,n}function Xx(n){n.x-=this.x0,n.y-=this.y0;var t,e;return this.sphere?(t=_t(this.long0+n.x/this.a/Math.cos(this.lat_ts)),e=Math.asin(n.y/this.a*Math.cos(this.lat_ts))):(e=Vx(this.e,2*n.y*this.k0/this.a),t=_t(this.long0+n.x/(this.a*this.k0))),n.x=t,n.y=e,n}var qx=["cea"];const Yx={init:Wx,forward:$x,inverse:Xx,names:qx};function jx(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function Kx(n){var t=n.x,e=n.y,i=_t(t-this.long0),r=Lr(e-this.lat0);return n.x=this.x0+this.a*i*this.rc,n.y=this.y0+this.a*r,n}function Zx(n){var t=n.x,e=n.y;return n.x=_t(this.long0+(t-this.x0)/(this.a*this.rc)),n.y=Lr(this.lat0+(e-this.y0)/this.a),n}var Jx=["Equirectangular","Equidistant_Cylindrical","eqc"];const Qx={init:jx,forward:Kx,inverse:Zx,names:Jx};var Bc=20;function tS(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=_s(this.es),this.e1=vs(this.es),this.e2=ys(this.es),this.e3=Ms(this.es),this.ml0=this.a*je(this.e0,this.e1,this.e2,this.e3,this.lat0)}function eS(n){var t=n.x,e=n.y,i,r,s,o=_t(t-this.long0);if(s=o*Math.sin(e),this.sphere)Math.abs(e)<=ct?(i=this.a*o,r=-1*this.a*this.lat0):(i=this.a*Math.sin(s)/Math.tan(e),r=this.a*(Lr(e-this.lat0)+(1-Math.cos(s))/Math.tan(e)));else if(Math.abs(e)<=ct)i=this.a*o,r=-1*this.ml0;else{var a=Ar(this.a,this.e,Math.sin(e))/Math.tan(e);i=a*Math.sin(s),r=this.a*je(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+a*(1-Math.cos(s))}return n.x=i+this.x0,n.y=r+this.y0,n}function nS(n){var t,e,i,r,s,o,a,h,l;if(i=n.x-this.x0,r=n.y-this.y0,this.sphere)if(Math.abs(r+this.a*this.lat0)<=ct)t=_t(i/this.a+this.long0),e=0;else{o=this.lat0+r/this.a,a=i*i/this.a/this.a+o*o,h=o;var u;for(s=Bc;s;--s)if(u=Math.tan(h),l=-1*(o*(h*u+1)-h-.5*(h*h+a)*u)/((h-o)/u-1),h+=l,Math.abs(l)<=ct){e=h;break}t=_t(this.long0+Math.asin(i*Math.tan(h)/this.a)/Math.sin(e))}else if(Math.abs(r+this.ml0)<=ct)e=0,t=_t(this.long0+i/this.a);else{o=(this.ml0+r)/this.a,a=i*i/this.a/this.a+o*o,h=o;var c,f,d,g,v;for(s=Bc;s;--s)if(v=this.e*Math.sin(h),c=Math.sqrt(1-v*v)*Math.tan(h),f=this.a*je(this.e0,this.e1,this.e2,this.e3,h),d=this.e0-2*this.e1*Math.cos(2*h)+4*this.e2*Math.cos(4*h)-6*this.e3*Math.cos(6*h),g=f/this.a,l=(o*(c*g+1)-g-.5*c*(g*g+a))/(this.es*Math.sin(2*h)*(g*g+a-2*o*g)/(4*c)+(o-g)*(c*d-2/Math.sin(2*h))-d),h-=l,Math.abs(l)<=ct){e=h;break}c=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=_t(this.long0+Math.asin(i*c/this.a)/Math.sin(e))}return n.x=t,n.y=e,n}var iS=["Polyconic","poly"];const rS={init:tS,forward:eS,inverse:nS,names:iS};function sS(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function aS(n){var t,e=n.x,i=n.y,r=i-this.lat0,s=e-this.long0,o=r/rs*1e-5,a=s,h=1,l=0;for(t=1;t<=10;t++)h=h*o,l=l+this.A[t]*h;var u=l,c=a,f=1,d=0,g,v,p=0,m=0;for(t=1;t<=6;t++)g=f*u-d*c,v=d*u+f*c,f=g,d=v,p=p+this.B_re[t]*f-this.B_im[t]*d,m=m+this.B_im[t]*f+this.B_re[t]*d;return n.x=m*this.a+this.x0,n.y=p*this.a+this.y0,n}function oS(n){var t,e=n.x,i=n.y,r=e-this.x0,s=i-this.y0,o=s/this.a,a=r/this.a,h=1,l=0,u,c,f=0,d=0;for(t=1;t<=6;t++)u=h*o-l*a,c=l*o+h*a,h=u,l=c,f=f+this.C_re[t]*h-this.C_im[t]*l,d=d+this.C_im[t]*h+this.C_re[t]*l;for(var g=0;g<this.iterations;g++){var v=f,p=d,m,E,_=o,y=a;for(t=2;t<=6;t++)m=v*f-p*d,E=p*f+v*d,v=m,p=E,_=_+(t-1)*(this.B_re[t]*v-this.B_im[t]*p),y=y+(t-1)*(this.B_im[t]*v+this.B_re[t]*p);v=1,p=0;var x=this.B_re[1],T=this.B_im[1];for(t=2;t<=6;t++)m=v*f-p*d,E=p*f+v*d,v=m,p=E,x=x+t*(this.B_re[t]*v-this.B_im[t]*p),T=T+t*(this.B_im[t]*v+this.B_re[t]*p);var w=x*x+T*T;f=(_*x+y*T)/w,d=(y*x-_*T)/w}var A=f,M=d,S=1,R=0;for(t=1;t<=9;t++)S=S*A,R=R+this.D[t]*S;var P=this.lat0+R*rs*1e5,k=this.long0+M;return n.x=k,n.y=P,n}var hS=["New_Zealand_Map_Grid","nzmg"];const lS={init:sS,forward:aS,inverse:oS,names:hS};function cS(){}function uS(n){var t=n.x,e=n.y,i=_t(t-this.long0),r=this.x0+this.a*i,s=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return n.x=r,n.y=s,n}function fS(n){n.x-=this.x0,n.y-=this.y0;var t=_t(this.long0+n.x/this.a),e=2.5*(Math.atan(Math.exp(.8*n.y/this.a))-Math.PI/4);return n.x=t,n.y=e,n}var dS=["Miller_Cylindrical","mill"];const pS={init:cS,forward:uS,inverse:fS,names:dS};var mS=20;function gS(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=Xu(this.es)}function _S(n){var t,e,i=n.x,r=n.y;if(i=_t(i-this.long0),this.sphere){if(!this.m)r=this.n!==1?Math.asin(this.n*Math.sin(r)):r;else for(var s=this.n*Math.sin(r),o=mS;o;--o){var a=(this.m*r+Math.sin(r)-s)/(this.m+Math.cos(r));if(r-=a,Math.abs(a)<ct)break}t=this.a*this.C_x*i*(this.m+Math.cos(r)),e=this.a*this.C_y*r}else{var h=Math.sin(r),l=Math.cos(r);e=this.a*Oa(r,h,l,this.en),t=this.a*i*l/Math.sqrt(1-this.es*h*h)}return n.x=t,n.y=e,n}function vS(n){var t,e,i,r;return n.x-=this.x0,i=n.x/this.a,n.y-=this.y0,t=n.y/this.a,this.sphere?(t/=this.C_y,i=i/(this.C_x*(this.m+Math.cos(t))),this.m?t=Mi((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=Mi(Math.sin(t)/this.n)),i=_t(i+this.long0),t=Lr(t)):(t=qu(n.y/this.a,this.es,this.en),r=Math.abs(t),r<et?(r=Math.sin(t),e=this.long0+n.x*Math.sqrt(1-this.es*r*r)/(this.a*Math.cos(t)),i=_t(e)):r-ct<et&&(i=this.long0)),n.x=i,n.y=t,n}var yS=["Sinusoidal","sinu"];const MS={init:gS,forward:_S,inverse:vS,names:yS};function xS(){}function SS(n){for(var t=n.x,e=n.y,i=_t(t-this.long0),r=e,s=Math.PI*Math.sin(e);;){var o=-(r+Math.sin(r)-s)/(1+Math.cos(r));if(r+=o,Math.abs(o)<ct)break}r/=2,Math.PI/2-Math.abs(e)<ct&&(i=0);var a=.900316316158*this.a*i*Math.cos(r)+this.x0,h=1.4142135623731*this.a*Math.sin(r)+this.y0;return n.x=a,n.y=h,n}function ES(n){var t,e;n.x-=this.x0,n.y-=this.y0,e=n.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var i=_t(this.long0+n.x/(.900316316158*this.a*Math.cos(t)));i<-Math.PI&&(i=-Math.PI),i>Math.PI&&(i=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var r=Math.asin(e);return n.x=i,n.y=r,n}var bS=["Mollweide","moll"];const wS={init:xS,forward:SS,inverse:ES,names:bS};function AS(){Math.abs(this.lat1+this.lat2)<ct||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=_s(this.es),this.e1=vs(this.es),this.e2=ys(this.es),this.e3=Ms(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=On(this.e,this.sinphi,this.cosphi),this.ml1=je(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<ct?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=On(this.e,this.sinphi,this.cosphi),this.ml2=je(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=je(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function TS(n){var t=n.x,e=n.y,i;if(this.sphere)i=this.a*(this.g-e);else{var r=je(this.e0,this.e1,this.e2,this.e3,e);i=this.a*(this.g-r)}var s=this.ns*_t(t-this.long0),o=this.x0+i*Math.sin(s),a=this.y0+this.rh-i*Math.cos(s);return n.x=o,n.y=a,n}function CS(n){n.x-=this.x0,n.y=this.rh-n.y+this.y0;var t,e,i,r;this.ns>=0?(e=Math.sqrt(n.x*n.x+n.y*n.y),t=1):(e=-Math.sqrt(n.x*n.x+n.y*n.y),t=-1);var s=0;if(e!==0&&(s=Math.atan2(t*n.x,t*n.y)),this.sphere)return r=_t(this.long0+s/this.ns),i=Lr(this.g-e/this.a),n.x=r,n.y=i,n;var o=this.g-e/this.a;return i=Ea(o,this.e0,this.e1,this.e2,this.e3),r=_t(this.long0+s/this.ns),n.x=r,n.y=i,n}var RS=["Equidistant_Conic","eqdc"];const LS={init:AS,forward:TS,inverse:CS,names:RS};function PS(){this.R=this.a}function DS(n){var t=n.x,e=n.y,i=_t(t-this.long0),r,s;Math.abs(e)<=ct&&(r=this.x0+this.R*i,s=this.y0);var o=Mi(2*Math.abs(e/Math.PI));(Math.abs(i)<=ct||Math.abs(Math.abs(e)-et)<=ct)&&(r=this.x0,e>=0?s=this.y0+Math.PI*this.R*Math.tan(.5*o):s=this.y0+Math.PI*this.R*-Math.tan(.5*o));var a=.5*Math.abs(Math.PI/i-i/Math.PI),h=a*a,l=Math.sin(o),u=Math.cos(o),c=u/(l+u-1),f=c*c,d=c*(2/l-1),g=d*d,v=Math.PI*this.R*(a*(c-g)+Math.sqrt(h*(c-g)*(c-g)-(g+h)*(f-g)))/(g+h);i<0&&(v=-v),r=this.x0+v;var p=h+c;return v=Math.PI*this.R*(d*p-a*Math.sqrt((g+h)*(h+1)-p*p))/(g+h),e>=0?s=this.y0+v:s=this.y0-v,n.x=r,n.y=s,n}function NS(n){var t,e,i,r,s,o,a,h,l,u,c,f,d;return n.x-=this.x0,n.y-=this.y0,c=Math.PI*this.R,i=n.x/c,r=n.y/c,s=i*i+r*r,o=-Math.abs(r)*(1+s),a=o-2*r*r+i*i,h=-2*o+1+2*r*r+s*s,d=r*r/h+(2*a*a*a/h/h/h-9*o*a/h/h)/27,l=(o-a*a/3/h)/h,u=2*Math.sqrt(-l/3),c=3*d/l/u,Math.abs(c)>1&&(c>=0?c=1:c=-1),f=Math.acos(c)/3,n.y>=0?e=(-u*Math.cos(f+Math.PI/3)-a/3/h)*Math.PI:e=-(-u*Math.cos(f+Math.PI/3)-a/3/h)*Math.PI,Math.abs(i)<ct?t=this.long0:t=_t(this.long0+Math.PI*(s-1+Math.sqrt(1+2*(i*i-r*r)+s*s))/2/i),n.x=t,n.y=e,n}var IS=["Van_der_Grinten_I","VanDerGrinten","vandg"];const US={init:PS,forward:DS,inverse:NS,names:IS};function OS(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function FS(n){var t=n.x,e=n.y,i=Math.sin(n.y),r=Math.cos(n.y),s=_t(t-this.long0),o,a,h,l,u,c,f,d,g,v,p,m,E,_,y,x,T,w,A,M,S,R,P;return this.sphere?Math.abs(this.sin_p12-1)<=ct?(n.x=this.x0+this.a*(et-e)*Math.sin(s),n.y=this.y0-this.a*(et-e)*Math.cos(s),n):Math.abs(this.sin_p12+1)<=ct?(n.x=this.x0+this.a*(et+e)*Math.sin(s),n.y=this.y0+this.a*(et+e)*Math.cos(s),n):(w=this.sin_p12*i+this.cos_p12*r*Math.cos(s),x=Math.acos(w),T=x?x/Math.sin(x):1,n.x=this.x0+this.a*T*r*Math.sin(s),n.y=this.y0+this.a*T*(this.cos_p12*i-this.sin_p12*r*Math.cos(s)),n):(o=_s(this.es),a=vs(this.es),h=ys(this.es),l=Ms(this.es),Math.abs(this.sin_p12-1)<=ct?(u=this.a*je(o,a,h,l,et),c=this.a*je(o,a,h,l,e),n.x=this.x0+(u-c)*Math.sin(s),n.y=this.y0-(u-c)*Math.cos(s),n):Math.abs(this.sin_p12+1)<=ct?(u=this.a*je(o,a,h,l,et),c=this.a*je(o,a,h,l,e),n.x=this.x0+(u+c)*Math.sin(s),n.y=this.y0+(u+c)*Math.cos(s),n):(f=i/r,d=Ar(this.a,this.e,this.sin_p12),g=Ar(this.a,this.e,i),v=Math.atan((1-this.es)*f+this.es*d*this.sin_p12/(g*r)),p=Math.atan2(Math.sin(s),this.cos_p12*Math.tan(v)-this.sin_p12*Math.cos(s)),p===0?A=Math.asin(this.cos_p12*Math.sin(v)-this.sin_p12*Math.cos(v)):Math.abs(Math.abs(p)-Math.PI)<=ct?A=-Math.asin(this.cos_p12*Math.sin(v)-this.sin_p12*Math.cos(v)):A=Math.asin(Math.sin(s)*Math.cos(v)/Math.sin(p)),m=this.e*this.sin_p12/Math.sqrt(1-this.es),E=this.e*this.cos_p12*Math.cos(p)/Math.sqrt(1-this.es),_=m*E,y=E*E,M=A*A,S=M*A,R=S*A,P=R*A,x=d*A*(1-M*y*(1-y)/6+S/8*_*(1-2*y)+R/120*(y*(4-7*y)-3*m*m*(1-7*y))-P/48*_),n.x=this.x0+x*Math.sin(p),n.y=this.y0+x*Math.cos(p),n))}function BS(n){n.x-=this.x0,n.y-=this.y0;var t,e,i,r,s,o,a,h,l,u,c,f,d,g,v,p,m,E,_,y,x,T,w,A;return this.sphere?(t=Math.sqrt(n.x*n.x+n.y*n.y),t>2*et*this.a?void 0:(e=t/this.a,i=Math.sin(e),r=Math.cos(e),s=this.long0,Math.abs(t)<=ct?o=this.lat0:(o=Mi(r*this.sin_p12+n.y*i*this.cos_p12/t),a=Math.abs(this.lat0)-et,Math.abs(a)<=ct?this.lat0>=0?s=_t(this.long0+Math.atan2(n.x,-n.y)):s=_t(this.long0-Math.atan2(-n.x,n.y)):s=_t(this.long0+Math.atan2(n.x*i,t*this.cos_p12*r-n.y*this.sin_p12*i))),n.x=s,n.y=o,n)):(h=_s(this.es),l=vs(this.es),u=ys(this.es),c=Ms(this.es),Math.abs(this.sin_p12-1)<=ct?(f=this.a*je(h,l,u,c,et),t=Math.sqrt(n.x*n.x+n.y*n.y),d=f-t,o=Ea(d/this.a,h,l,u,c),s=_t(this.long0+Math.atan2(n.x,-1*n.y)),n.x=s,n.y=o,n):Math.abs(this.sin_p12+1)<=ct?(f=this.a*je(h,l,u,c,et),t=Math.sqrt(n.x*n.x+n.y*n.y),d=t-f,o=Ea(d/this.a,h,l,u,c),s=_t(this.long0+Math.atan2(n.x,n.y)),n.x=s,n.y=o,n):(t=Math.sqrt(n.x*n.x+n.y*n.y),p=Math.atan2(n.x,n.y),g=Ar(this.a,this.e,this.sin_p12),m=Math.cos(p),E=this.e*this.cos_p12*m,_=-E*E/(1-this.es),y=3*this.es*(1-_)*this.sin_p12*this.cos_p12*m/(1-this.es),x=t/g,T=x-_*(1+_)*Math.pow(x,3)/6-y*(1+3*_)*Math.pow(x,4)/24,w=1-_*T*T/2-x*T*T*T/6,v=Math.asin(this.sin_p12*Math.cos(T)+this.cos_p12*Math.sin(T)*m),s=_t(this.long0+Math.asin(Math.sin(p)*Math.sin(T)/Math.cos(v))),A=Math.sin(v),o=Math.atan2((A-this.es*w*this.sin_p12)*Math.tan(v),A*(1-this.es)),n.x=s,n.y=o,n))}var GS=["Azimuthal_Equidistant","aeqd"];const zS={init:OS,forward:FS,inverse:BS,names:GS};function kS(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function HS(n){var t,e,i,r,s,o,a,h,l=n.x,u=n.y;return i=_t(l-this.long0),t=Math.sin(u),e=Math.cos(u),r=Math.cos(i),o=this.sin_p14*t+this.cos_p14*e*r,s=1,(o>0||Math.abs(o)<=ct)&&(a=this.a*s*e*Math.sin(i),h=this.y0+this.a*s*(this.cos_p14*t-this.sin_p14*e*r)),n.x=a,n.y=h,n}function VS(n){var t,e,i,r,s,o,a;return n.x-=this.x0,n.y-=this.y0,t=Math.sqrt(n.x*n.x+n.y*n.y),e=Mi(t/this.a),i=Math.sin(e),r=Math.cos(e),o=this.long0,Math.abs(t)<=ct?(a=this.lat0,n.x=o,n.y=a,n):(a=Mi(r*this.sin_p14+n.y*i*this.cos_p14/t),s=Math.abs(this.lat0)-et,Math.abs(s)<=ct?(this.lat0>=0?o=_t(this.long0+Math.atan2(n.x,-n.y)):o=_t(this.long0-Math.atan2(-n.x,n.y)),n.x=o,n.y=a,n):(o=_t(this.long0+Math.atan2(n.x*i,t*this.cos_p14*r-n.y*this.sin_p14*i)),n.x=o,n.y=a,n))}var WS=["ortho"];const $S={init:kS,forward:HS,inverse:VS,names:WS};var le={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},te={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function XS(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=et-Qt/2?this.face=le.TOP:this.lat0<=-(et-Qt/2)?this.face=le.BOTTOM:Math.abs(this.long0)<=Qt?this.face=le.FRONT:Math.abs(this.long0)<=et+Qt?this.face=this.long0>0?le.RIGHT:le.LEFT:this.face=le.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function qS(n){var t={x:0,y:0},e,i,r,s,o,a,h={value:0};if(n.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(n.y)):e=n.y,i=n.x,this.face===le.TOP)s=et-e,i>=Qt&&i<=et+Qt?(h.value=te.AREA_0,r=i-et):i>et+Qt||i<=-(et+Qt)?(h.value=te.AREA_1,r=i>0?i-de:i+de):i>-(et+Qt)&&i<=-Qt?(h.value=te.AREA_2,r=i+et):(h.value=te.AREA_3,r=i);else if(this.face===le.BOTTOM)s=et+e,i>=Qt&&i<=et+Qt?(h.value=te.AREA_0,r=-i+et):i<Qt&&i>=-Qt?(h.value=te.AREA_1,r=-i):i<-Qt&&i>=-(et+Qt)?(h.value=te.AREA_2,r=-i-et):(h.value=te.AREA_3,r=i>0?-i+de:-i-de);else{var l,u,c,f,d,g,v;this.face===le.RIGHT?i=yr(i,+et):this.face===le.BACK?i=yr(i,+de):this.face===le.LEFT&&(i=yr(i,-et)),f=Math.sin(e),d=Math.cos(e),g=Math.sin(i),v=Math.cos(i),l=d*v,u=d*g,c=f,this.face===le.FRONT?(s=Math.acos(l),r=ta(s,c,u,h)):this.face===le.RIGHT?(s=Math.acos(u),r=ta(s,c,-l,h)):this.face===le.BACK?(s=Math.acos(-l),r=ta(s,c,-u,h)):this.face===le.LEFT?(s=Math.acos(-u),r=ta(s,c,l,h)):(s=r=0,h.value=te.AREA_0)}return a=Math.atan(12/de*(r+Math.acos(Math.sin(r)*Math.cos(Qt))-et)),o=Math.sqrt((1-Math.cos(s))/(Math.cos(a)*Math.cos(a))/(1-Math.cos(Math.atan(1/Math.cos(r))))),h.value===te.AREA_1?a+=et:h.value===te.AREA_2?a+=de:h.value===te.AREA_3&&(a+=1.5*de),t.x=o*Math.cos(a),t.y=o*Math.sin(a),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,n.x=t.x,n.y=t.y,n}function YS(n){var t={lam:0,phi:0},e,i,r,s,o,a,h,l,u,c={value:0};if(n.x=(n.x-this.x0)/this.a,n.y=(n.y-this.y0)/this.a,i=Math.atan(Math.sqrt(n.x*n.x+n.y*n.y)),e=Math.atan2(n.y,n.x),n.x>=0&&n.x>=Math.abs(n.y)?c.value=te.AREA_0:n.y>=0&&n.y>=Math.abs(n.x)?(c.value=te.AREA_1,e-=et):n.x<0&&-n.x>=Math.abs(n.y)?(c.value=te.AREA_2,e=e<0?e+de:e-de):(c.value=te.AREA_3,e+=et),u=de/12*Math.tan(e),o=Math.sin(u)/(Math.cos(u)-1/Math.sqrt(2)),a=Math.atan(o),r=Math.cos(e),s=Math.tan(i),h=1-r*r*s*s*(1-Math.cos(Math.atan(1/Math.cos(a)))),h<-1?h=-1:h>1&&(h=1),this.face===le.TOP)l=Math.acos(h),t.phi=et-l,c.value===te.AREA_0?t.lam=a+et:c.value===te.AREA_1?t.lam=a<0?a+de:a-de:c.value===te.AREA_2?t.lam=a-et:t.lam=a;else if(this.face===le.BOTTOM)l=Math.acos(h),t.phi=l-et,c.value===te.AREA_0?t.lam=-a+et:c.value===te.AREA_1?t.lam=-a:c.value===te.AREA_2?t.lam=-a-et:t.lam=a<0?-a-de:-a+de;else{var f,d,g;f=h,u=f*f,u>=1?g=0:g=Math.sqrt(1-u)*Math.sin(a),u+=g*g,u>=1?d=0:d=Math.sqrt(1-u),c.value===te.AREA_1?(u=d,d=-g,g=u):c.value===te.AREA_2?(d=-d,g=-g):c.value===te.AREA_3&&(u=d,d=g,g=-u),this.face===le.RIGHT?(u=f,f=-d,d=u):this.face===le.BACK?(f=-f,d=-d):this.face===le.LEFT&&(u=f,f=d,d=-u),t.phi=Math.acos(-g)-et,t.lam=Math.atan2(d,f),this.face===le.RIGHT?t.lam=yr(t.lam,-et):this.face===le.BACK?t.lam=yr(t.lam,-de):this.face===le.LEFT&&(t.lam=yr(t.lam,+et))}if(this.es!==0){var v,p,m;v=t.phi<0?1:0,p=Math.tan(t.phi),m=this.b/Math.sqrt(p*p+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-m*m)/(this.one_minus_f*m)),v&&(t.phi=-t.phi)}return t.lam+=this.long0,n.x=t.lam,n.y=t.phi,n}function ta(n,t,e,i){var r;return n<ct?(i.value=te.AREA_0,r=0):(r=Math.atan2(t,e),Math.abs(r)<=Qt?i.value=te.AREA_0:r>Qt&&r<=et+Qt?(i.value=te.AREA_1,r-=et):r>et+Qt||r<=-(et+Qt)?(i.value=te.AREA_2,r=r>=0?r-de:r+de):(i.value=te.AREA_3,r+=et)),r}function yr(n,t){var e=n+t;return e<-de?e+=us:e>+de&&(e-=us),e}var jS=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const KS={init:XS,forward:qS,inverse:YS,names:jS};var Jo=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],Zr=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],Ku=.8487,Zu=1.3523,Ju=Dn/5,ZS=1/Ju,pr=18,ba=function(n,t){return n[0]+t*(n[1]+t*(n[2]+t*n[3]))},JS=function(n,t){return n[1]+t*(2*n[2]+t*3*n[3])};function QS(n,t,e,i){for(var r=t;i;--i){var s=n(r);if(r-=s,Math.abs(s)<e)break}return r}function tE(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function eE(n){var t=_t(n.x-this.long0),e=Math.abs(n.y),i=Math.floor(e*Ju);i<0?i=0:i>=pr&&(i=pr-1),e=Dn*(e-ZS*i);var r={x:ba(Jo[i],e)*t,y:ba(Zr[i],e)};return n.y<0&&(r.y=-r.y),r.x=r.x*this.a*Ku+this.x0,r.y=r.y*this.a*Zu+this.y0,r}function nE(n){var t={x:(n.x-this.x0)/(this.a*Ku),y:Math.abs(n.y-this.y0)/(this.a*Zu)};if(t.y>=1)t.x/=Jo[pr][0],t.y=n.y<0?-et:et;else{var e=Math.floor(t.y*pr);for(e<0?e=0:e>=pr&&(e=pr-1);;)if(Zr[e][0]>t.y)--e;else if(Zr[e+1][0]<=t.y)++e;else break;var i=Zr[e],r=5*(t.y-i[0])/(Zr[e+1][0]-i[0]);r=QS(function(s){return(ba(i,s)-t.y)/JS(i,s)},r,ct,100),t.x/=ba(Jo[e],r),t.y=(5*e+r)*Pe,n.y<0&&(t.y=-t.y)}return t.x=_t(t.x+this.long0),t}var iE=["Robinson","robin"];const rE={init:tE,forward:eE,inverse:nE,names:iE};function sE(){this.name="geocent"}function aE(n){var t=Fu(n,this.es,this.a);return t}function oE(n){var t=Bu(n,this.es,this.a,this.b);return t}var hE=["Geocentric","geocentric","geocent","Geocent"];const lE={init:sE,forward:aE,inverse:oE,names:hE};var Be={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},kr={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function cE(){if(Object.keys(kr).forEach((function(e){if(typeof this[e]>"u")this[e]=kr[e].def;else{if(kr[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);kr[e].num&&(this[e]=parseFloat(this[e]))}kr[e].degrees&&(this[e]=this[e]*Pe)}).bind(this)),Math.abs(Math.abs(this.lat0)-et)<ct?this.mode=this.lat0<0?Be.S_POLE:Be.N_POLE:Math.abs(this.lat0)<ct?this.mode=Be.EQUIT:(this.mode=Be.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var n=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(n),this.sw=Math.sin(n)}function uE(n){n.x-=this.long0;var t=Math.sin(n.y),e=Math.cos(n.y),i=Math.cos(n.x),r,s;switch(this.mode){case Be.OBLIQ:s=this.sinph0*t+this.cosph0*e*i;break;case Be.EQUIT:s=e*i;break;case Be.S_POLE:s=-t;break;case Be.N_POLE:s=t;break}switch(s=this.pn1/(this.p-s),r=s*e*Math.sin(n.x),this.mode){case Be.OBLIQ:s*=this.cosph0*t-this.sinph0*e*i;break;case Be.EQUIT:s*=t;break;case Be.N_POLE:s*=-(e*i);break;case Be.S_POLE:s*=e*i;break}var o,a;return o=s*this.cg+r*this.sg,a=1/(o*this.sw*this.h1+this.cw),r=(r*this.cg-s*this.sg)*this.cw*a,s=o*a,n.x=r*this.a,n.y=s*this.a,n}function fE(n){n.x/=this.a,n.y/=this.a;var t={x:n.x,y:n.y},e,i,r;r=1/(this.pn1-n.y*this.sw),e=this.pn1*n.x*r,i=this.pn1*n.y*this.cw*r,n.x=e*this.cg+i*this.sg,n.y=i*this.cg-e*this.sg;var s=wn(n.x,n.y);if(Math.abs(s)<ct)t.x=0,t.y=n.y;else{var o,a;switch(a=1-s*s*this.pfact,a=(this.p-Math.sqrt(a))/(this.pn1/s+s/this.pn1),o=Math.sqrt(1-a*a),this.mode){case Be.OBLIQ:t.y=Math.asin(o*this.sinph0+n.y*a*this.cosph0/s),n.y=(o-this.sinph0*Math.sin(t.y))*s,n.x*=a*this.cosph0;break;case Be.EQUIT:t.y=Math.asin(n.y*a/s),n.y=o*s,n.x*=a;break;case Be.N_POLE:t.y=Math.asin(o),n.y=-n.y;break;case Be.S_POLE:t.y=-Math.asin(o);break}t.x=Math.atan2(n.x,n.y)}return n.x=t.x+this.long0,n.y=t.y,n}var dE=["Tilted_Perspective","tpers"];const pE={init:cE,forward:uE,inverse:fE,names:dE};function mE(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var n=1-this.es,t=1/n;this.radius_p=Math.sqrt(n),this.radius_p2=n,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function gE(n){var t=n.x,e=n.y,i,r,s,o;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var a=this.radius_p/wn(this.radius_p*Math.cos(e),Math.sin(e));if(r=a*Math.cos(t)*Math.cos(e),s=a*Math.sin(t)*Math.cos(e),o=a*Math.sin(e),(this.radius_g-r)*r-s*s-o*o*this.radius_p_inv2<0)return n.x=Number.NaN,n.y=Number.NaN,n;i=this.radius_g-r,this.flip_axis?(n.x=this.radius_g_1*Math.atan(s/wn(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(s/i),n.y=this.radius_g_1*Math.atan(o/wn(s,i)))}else this.shape==="sphere"&&(i=Math.cos(e),r=Math.cos(t)*i,s=Math.sin(t)*i,o=Math.sin(e),i=this.radius_g-r,this.flip_axis?(n.x=this.radius_g_1*Math.atan(s/wn(o,i)),n.y=this.radius_g_1*Math.atan(o/i)):(n.x=this.radius_g_1*Math.atan(s/i),n.y=this.radius_g_1*Math.atan(o/wn(s,i))));return n.x=n.x*this.a,n.y=n.y*this.a,n}function _E(n){var t=-1,e=0,i=0,r,s,o,a;if(n.x=n.x/this.a,n.y=n.y/this.a,this.shape==="ellipse"){this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*wn(1,i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*wn(1,e));var h=i/this.radius_p;if(r=e*e+h*h+t*t,s=2*this.radius_g*t,o=s*s-4*r*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-s-Math.sqrt(o))/(2*r),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t),n.y=Math.atan(this.radius_p_inv2*Math.tan(n.y))}else if(this.shape==="sphere"){if(this.flip_axis?(i=Math.tan(n.y/this.radius_g_1),e=Math.tan(n.x/this.radius_g_1)*Math.sqrt(1+i*i)):(e=Math.tan(n.x/this.radius_g_1),i=Math.tan(n.y/this.radius_g_1)*Math.sqrt(1+e*e)),r=e*e+i*i+t*t,s=2*this.radius_g*t,o=s*s-4*r*this.C,o<0)return n.x=Number.NaN,n.y=Number.NaN,n;a=(-s-Math.sqrt(o))/(2*r),t=this.radius_g+a*t,e*=a,i*=a,n.x=Math.atan2(e,t),n.y=Math.atan(i*Math.cos(n.x)/t)}return n.x=n.x+this.long0,n}var vE=["Geostationary Satellite View","Geostationary_Satellite","geos"];const yE={init:mE,forward:gE,inverse:_E,names:vE};function ME(n){n.Proj.projections.add(aa),n.Proj.projections.add(oa),n.Proj.projections.add(AM),n.Proj.projections.add(OM),n.Proj.projections.add(HM),n.Proj.projections.add(qM),n.Proj.projections.add(QM),n.Proj.projections.add(rx),n.Proj.projections.add(lx),n.Proj.projections.add(px),n.Proj.projections.add(Px),n.Proj.projections.add(Fx),n.Proj.projections.add(Hx),n.Proj.projections.add(Yx),n.Proj.projections.add(Qx),n.Proj.projections.add(rS),n.Proj.projections.add(lS),n.Proj.projections.add(pS),n.Proj.projections.add(MS),n.Proj.projections.add(wS),n.Proj.projections.add(LS),n.Proj.projections.add(US),n.Proj.projections.add(zS),n.Proj.projections.add($S),n.Proj.projections.add(KS),n.Proj.projections.add(rE),n.Proj.projections.add(lE),n.Proj.projections.add(pE),n.Proj.projections.add(yE)}Qe.defaultDatum="WGS84";Qe.Proj=Nn;Qe.WGS84=new Qe.Proj("WGS84");Qe.Point=wr;Qe.toPoint=Gu;Qe.defs=qe;Qe.nadgrid=Cy;Qe.transform=Sa;Qe.mgrs=Wy;Qe.version="__VERSION__";ME(Qe);function xh(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Qu={exports:{}},tf=xE,Gc=+(Math.pow(2,27)+1);function xE(n,t,e){var i=n*t,r=Gc*n,s=r-n,o=r-s,a=n-o,h=Gc*t,l=h-t,u=h-l,c=t-u,f=i-o*u,d=f-a*u,g=d-o*c,v=a*c-g;return e?(e[0]=v,e[1]=i,e):[v,i]}var SE=bE;function EE(n,t){var e=n+t,i=e-n,r=e-i,s=t-i,o=n-r,a=o+s;return a?[a,e]:[e]}function bE(n,t){var e=n.length|0,i=t.length|0;if(e===1&&i===1)return EE(n[0],t[0]);var r=e+i,s=new Array(r),o=0,a=0,h=0,l=Math.abs,u=n[a],c=l(u),f=t[h],d=l(f),g,v;c<d?(v=u,a+=1,a<e&&(u=n[a],c=l(u))):(v=f,h+=1,h<i&&(f=t[h],d=l(f))),a<e&&c<d||h>=i?(g=u,a+=1,a<e&&(u=n[a],c=l(u))):(g=f,h+=1,h<i&&(f=t[h],d=l(f)));for(var p=g+v,m=p-g,E=v-m,_=E,y=p,x,T,w,A,M;a<e&&h<i;)c<d?(g=u,a+=1,a<e&&(u=n[a],c=l(u))):(g=f,h+=1,h<i&&(f=t[h],d=l(f))),v=_,p=g+v,m=p-g,E=v-m,E&&(s[o++]=E),x=y+p,T=x-y,w=x-T,A=p-T,M=y-w,_=M+A,y=x;for(;a<e;)g=u,v=_,p=g+v,m=p-g,E=v-m,E&&(s[o++]=E),x=y+p,T=x-y,w=x-T,A=p-T,M=y-w,_=M+A,y=x,a+=1,a<e&&(u=n[a]);for(;h<i;)g=f,v=_,p=g+v,m=p-g,E=v-m,E&&(s[o++]=E),x=y+p,T=x-y,w=x-T,A=p-T,M=y-w,_=M+A,y=x,h+=1,h<i&&(f=t[h]);return _&&(s[o++]=_),y&&(s[o++]=y),o||(s[o++]=0),s.length=o,s}var wE=AE;function AE(n,t,e){var i=n+t,r=i-n,s=i-r,o=t-r,a=n-s;return e?(e[0]=a+o,e[1]=i,e):[a+o,i]}var Lo=tf,TE=wE,CE=RE;function RE(n,t){var e=n.length;if(e===1){var i=Lo(n[0],t);return i[0]?i:[i[1]]}var r=new Array(2*e),s=[.1,.1],o=[.1,.1],a=0;Lo(n[0],t,s),s[0]&&(r[a++]=s[0]);for(var h=1;h<e;++h){Lo(n[h],t,o);var l=s[1];TE(l,o[0],s),s[0]&&(r[a++]=s[0]);var u=o[1],c=s[1],f=u+c,d=f-u,g=c-d;s[1]=f,g&&(r[a++]=g)}return s[1]&&(r[a++]=s[1]),a===0&&(r[a++]=0),r.length=a,r}var LE=DE;function PE(n,t){var e=n+t,i=e-n,r=e-i,s=t-i,o=n-r,a=o+s;return a?[a,e]:[e]}function DE(n,t){var e=n.length|0,i=t.length|0;if(e===1&&i===1)return PE(n[0],-t[0]);var r=e+i,s=new Array(r),o=0,a=0,h=0,l=Math.abs,u=n[a],c=l(u),f=-t[h],d=l(f),g,v;c<d?(v=u,a+=1,a<e&&(u=n[a],c=l(u))):(v=f,h+=1,h<i&&(f=-t[h],d=l(f))),a<e&&c<d||h>=i?(g=u,a+=1,a<e&&(u=n[a],c=l(u))):(g=f,h+=1,h<i&&(f=-t[h],d=l(f)));for(var p=g+v,m=p-g,E=v-m,_=E,y=p,x,T,w,A,M;a<e&&h<i;)c<d?(g=u,a+=1,a<e&&(u=n[a],c=l(u))):(g=f,h+=1,h<i&&(f=-t[h],d=l(f))),v=_,p=g+v,m=p-g,E=v-m,E&&(s[o++]=E),x=y+p,T=x-y,w=x-T,A=p-T,M=y-w,_=M+A,y=x;for(;a<e;)g=u,v=_,p=g+v,m=p-g,E=v-m,E&&(s[o++]=E),x=y+p,T=x-y,w=x-T,A=p-T,M=y-w,_=M+A,y=x,a+=1,a<e&&(u=n[a]);for(;h<i;)g=f,v=_,p=g+v,m=p-g,E=v-m,E&&(s[o++]=E),x=y+p,T=x-y,w=x-T,A=p-T,M=y-w,_=M+A,y=x,h+=1,h<i&&(f=-t[h]);return _&&(s[o++]=_),y&&(s[o++]=y),o||(s[o++]=0),s.length=o,s}(function(n){var t=tf,e=SE,i=CE,r=LE,s=5,o=11102230246251565e-32,a=(3+16*o)*o,h=(7+56*o)*o;function l(_,y,x,T){return function(A,M,S){var R=_(_(y(M[1],S[0]),y(-S[1],M[0])),_(y(A[1],M[0]),y(-M[1],A[0]))),P=_(y(A[1],S[0]),y(-S[1],A[0])),k=T(R,P);return k[k.length-1]}}function u(_,y,x,T){return function(A,M,S,R){var P=_(_(x(_(y(S[1],R[0]),y(-R[1],S[0])),M[2]),_(x(_(y(M[1],R[0]),y(-R[1],M[0])),-S[2]),x(_(y(M[1],S[0]),y(-S[1],M[0])),R[2]))),_(x(_(y(M[1],R[0]),y(-R[1],M[0])),A[2]),_(x(_(y(A[1],R[0]),y(-R[1],A[0])),-M[2]),x(_(y(A[1],M[0]),y(-M[1],A[0])),R[2])))),k=_(_(x(_(y(S[1],R[0]),y(-R[1],S[0])),A[2]),_(x(_(y(A[1],R[0]),y(-R[1],A[0])),-S[2]),x(_(y(A[1],S[0]),y(-S[1],A[0])),R[2]))),_(x(_(y(M[1],S[0]),y(-S[1],M[0])),A[2]),_(x(_(y(A[1],S[0]),y(-S[1],A[0])),-M[2]),x(_(y(A[1],M[0]),y(-M[1],A[0])),S[2])))),I=T(P,k);return I[I.length-1]}}function c(_,y,x,T){return function(A,M,S,R,P){var k=_(_(_(x(_(x(_(y(R[1],P[0]),y(-P[1],R[0])),S[2]),_(x(_(y(S[1],P[0]),y(-P[1],S[0])),-R[2]),x(_(y(S[1],R[0]),y(-R[1],S[0])),P[2]))),M[3]),_(x(_(x(_(y(R[1],P[0]),y(-P[1],R[0])),M[2]),_(x(_(y(M[1],P[0]),y(-P[1],M[0])),-R[2]),x(_(y(M[1],R[0]),y(-R[1],M[0])),P[2]))),-S[3]),x(_(x(_(y(S[1],P[0]),y(-P[1],S[0])),M[2]),_(x(_(y(M[1],P[0]),y(-P[1],M[0])),-S[2]),x(_(y(M[1],S[0]),y(-S[1],M[0])),P[2]))),R[3]))),_(x(_(x(_(y(S[1],R[0]),y(-R[1],S[0])),M[2]),_(x(_(y(M[1],R[0]),y(-R[1],M[0])),-S[2]),x(_(y(M[1],S[0]),y(-S[1],M[0])),R[2]))),-P[3]),_(x(_(x(_(y(R[1],P[0]),y(-P[1],R[0])),M[2]),_(x(_(y(M[1],P[0]),y(-P[1],M[0])),-R[2]),x(_(y(M[1],R[0]),y(-R[1],M[0])),P[2]))),A[3]),x(_(x(_(y(R[1],P[0]),y(-P[1],R[0])),A[2]),_(x(_(y(A[1],P[0]),y(-P[1],A[0])),-R[2]),x(_(y(A[1],R[0]),y(-R[1],A[0])),P[2]))),-M[3])))),_(_(x(_(x(_(y(M[1],P[0]),y(-P[1],M[0])),A[2]),_(x(_(y(A[1],P[0]),y(-P[1],A[0])),-M[2]),x(_(y(A[1],M[0]),y(-M[1],A[0])),P[2]))),R[3]),_(x(_(x(_(y(M[1],R[0]),y(-R[1],M[0])),A[2]),_(x(_(y(A[1],R[0]),y(-R[1],A[0])),-M[2]),x(_(y(A[1],M[0]),y(-M[1],A[0])),R[2]))),-P[3]),x(_(x(_(y(S[1],R[0]),y(-R[1],S[0])),M[2]),_(x(_(y(M[1],R[0]),y(-R[1],M[0])),-S[2]),x(_(y(M[1],S[0]),y(-S[1],M[0])),R[2]))),A[3]))),_(x(_(x(_(y(S[1],R[0]),y(-R[1],S[0])),A[2]),_(x(_(y(A[1],R[0]),y(-R[1],A[0])),-S[2]),x(_(y(A[1],S[0]),y(-S[1],A[0])),R[2]))),-M[3]),_(x(_(x(_(y(M[1],R[0]),y(-R[1],M[0])),A[2]),_(x(_(y(A[1],R[0]),y(-R[1],A[0])),-M[2]),x(_(y(A[1],M[0]),y(-M[1],A[0])),R[2]))),S[3]),x(_(x(_(y(M[1],S[0]),y(-S[1],M[0])),A[2]),_(x(_(y(A[1],S[0]),y(-S[1],A[0])),-M[2]),x(_(y(A[1],M[0]),y(-M[1],A[0])),S[2]))),-R[3]))))),I=_(_(_(x(_(x(_(y(R[1],P[0]),y(-P[1],R[0])),S[2]),_(x(_(y(S[1],P[0]),y(-P[1],S[0])),-R[2]),x(_(y(S[1],R[0]),y(-R[1],S[0])),P[2]))),A[3]),x(_(x(_(y(R[1],P[0]),y(-P[1],R[0])),A[2]),_(x(_(y(A[1],P[0]),y(-P[1],A[0])),-R[2]),x(_(y(A[1],R[0]),y(-R[1],A[0])),P[2]))),-S[3])),_(x(_(x(_(y(S[1],P[0]),y(-P[1],S[0])),A[2]),_(x(_(y(A[1],P[0]),y(-P[1],A[0])),-S[2]),x(_(y(A[1],S[0]),y(-S[1],A[0])),P[2]))),R[3]),x(_(x(_(y(S[1],R[0]),y(-R[1],S[0])),A[2]),_(x(_(y(A[1],R[0]),y(-R[1],A[0])),-S[2]),x(_(y(A[1],S[0]),y(-S[1],A[0])),R[2]))),-P[3]))),_(_(x(_(x(_(y(S[1],P[0]),y(-P[1],S[0])),M[2]),_(x(_(y(M[1],P[0]),y(-P[1],M[0])),-S[2]),x(_(y(M[1],S[0]),y(-S[1],M[0])),P[2]))),A[3]),x(_(x(_(y(S[1],P[0]),y(-P[1],S[0])),A[2]),_(x(_(y(A[1],P[0]),y(-P[1],A[0])),-S[2]),x(_(y(A[1],S[0]),y(-S[1],A[0])),P[2]))),-M[3])),_(x(_(x(_(y(M[1],P[0]),y(-P[1],M[0])),A[2]),_(x(_(y(A[1],P[0]),y(-P[1],A[0])),-M[2]),x(_(y(A[1],M[0]),y(-M[1],A[0])),P[2]))),S[3]),x(_(x(_(y(M[1],S[0]),y(-S[1],M[0])),A[2]),_(x(_(y(A[1],S[0]),y(-S[1],A[0])),-M[2]),x(_(y(A[1],M[0]),y(-M[1],A[0])),S[2]))),-P[3])))),G=T(k,I);return G[G.length-1]}}function f(_){var y=_===3?l:_===4?u:c;return y(e,t,i,r)}var d=f(3),g=f(4),v=[function(){return 0},function(){return 0},function(y,x){return x[0]-y[0]},function(y,x,T){var w=(y[1]-T[1])*(x[0]-T[0]),A=(y[0]-T[0])*(x[1]-T[1]),M=w-A,S;if(w>0){if(A<=0)return M;S=w+A}else if(w<0){if(A>=0)return M;S=-(w+A)}else return M;var R=a*S;return M>=R||M<=-R?M:d(y,x,T)},function(y,x,T,w){var A=y[0]-w[0],M=x[0]-w[0],S=T[0]-w[0],R=y[1]-w[1],P=x[1]-w[1],k=T[1]-w[1],I=y[2]-w[2],G=x[2]-w[2],q=T[2]-w[2],B=M*k,J=S*P,K=S*R,j=A*k,O=A*P,W=M*R,ut=I*(B-J)+G*(K-j)+q*(O-W),pt=(Math.abs(B)+Math.abs(J))*Math.abs(I)+(Math.abs(K)+Math.abs(j))*Math.abs(G)+(Math.abs(O)+Math.abs(W))*Math.abs(q),vt=h*pt;return ut>vt||-ut>vt?ut:g(y,x,T,w)}];function p(_){var y=v[_.length];return y||(y=v[_.length]=f(_.length)),y.apply(void 0,_)}function m(_,y,x,T,w,A,M){return function(R,P,k,I,G){switch(arguments.length){case 0:case 1:return 0;case 2:return T(R,P);case 3:return w(R,P,k);case 4:return A(R,P,k,I);case 5:return M(R,P,k,I,G)}for(var q=new Array(arguments.length),B=0;B<arguments.length;++B)q[B]=arguments[B];return _(q)}}function E(){for(;v.length<=s;)v.push(f(v.length));n.exports=m.apply(void 0,[p].concat(v));for(var _=0;_<=s;++_)n.exports[_]=v[_]}E()})(Qu);var NE=Qu.exports;NE[3];var IE=new Array(256);(function(n){for(var t=0;t<256;++t){var e=t,i=t,r=7;for(e>>>=1;e;e>>>=1)i<<=1,i|=e&1,--r;n[t]=i<<r&255}})(IE);function UE(n){this.roots=new Array(n),this.ranks=new Array(n);for(var t=0;t<n;++t)this.roots[t]=t,this.ranks[t]=0}var Fa=UE.prototype;Object.defineProperty(Fa,"length",{get:function(){return this.roots.length}});Fa.makeSet=function(){var n=this.roots.length;return this.roots.push(n),this.ranks.push(0),n};Fa.find=function(n){for(var t=n,e=this.roots;e[n]!==n;)n=e[n];for(;e[t]!==n;){var i=e[t];e[t]=n,t=i}return n};Fa.link=function(n,t){var e=this.find(n),i=this.find(t);if(e!==i){var r=this.ranks,s=this.roots,o=r[e],a=r[i];o<a?s[e]=i:a<o?s[i]=e:(s[i]=e,++r[e])}};const Jn=11102230246251565e-32,Fe=134217729,OE=(3+8*Jn)*Jn;function Po(n,t,e,i,r){let s,o,a,h,l=t[0],u=i[0],c=0,f=0;u>l==u>-l?(s=l,l=t[++c]):(s=u,u=i[++f]);let d=0;if(c<n&&f<e)for(u>l==u>-l?(o=l+s,a=s-(o-l),l=t[++c]):(o=u+s,a=s-(o-u),u=i[++f]),s=o,a!==0&&(r[d++]=a);c<n&&f<e;)u>l==u>-l?(o=s+l,h=o-s,a=s-(o-h)+(l-h),l=t[++c]):(o=s+u,h=o-s,a=s-(o-h)+(u-h),u=i[++f]),s=o,a!==0&&(r[d++]=a);for(;c<n;)o=s+l,h=o-s,a=s-(o-h)+(l-h),l=t[++c],s=o,a!==0&&(r[d++]=a);for(;f<e;)o=s+u,h=o-s,a=s-(o-h)+(u-h),u=i[++f],s=o,a!==0&&(r[d++]=a);return(s!==0||d===0)&&(r[d++]=s),d}function FE(n,t){let e=t[0];for(let i=1;i<n;i++)e+=t[i];return e}function xs(n){return new Float64Array(n)}const BE=(3+16*Jn)*Jn,GE=(2+12*Jn)*Jn,zE=(9+64*Jn)*Jn*Jn,or=xs(4),zc=xs(8),kc=xs(12),Hc=xs(16),$e=xs(4);function kE(n,t,e,i,r,s,o){let a,h,l,u,c,f,d,g,v,p,m,E,_,y,x,T,w,A;const M=n-r,S=e-r,R=t-s,P=i-s;y=M*P,f=Fe*M,d=f-(f-M),g=M-d,f=Fe*P,v=f-(f-P),p=P-v,x=g*p-(y-d*v-g*v-d*p),T=R*S,f=Fe*R,d=f-(f-R),g=R-d,f=Fe*S,v=f-(f-S),p=S-v,w=g*p-(T-d*v-g*v-d*p),m=x-w,c=x-m,or[0]=x-(m+c)+(c-w),E=y+m,c=E-y,_=y-(E-c)+(m-c),m=_-T,c=_-m,or[1]=_-(m+c)+(c-T),A=E+m,c=A-E,or[2]=E-(A-c)+(m-c),or[3]=A;let k=FE(4,or),I=GE*o;if(k>=I||-k>=I||(c=n-M,a=n-(M+c)+(c-r),c=e-S,l=e-(S+c)+(c-r),c=t-R,h=t-(R+c)+(c-s),c=i-P,u=i-(P+c)+(c-s),a===0&&h===0&&l===0&&u===0)||(I=zE*o+OE*Math.abs(k),k+=M*u+P*a-(R*l+S*h),k>=I||-k>=I))return k;y=a*P,f=Fe*a,d=f-(f-a),g=a-d,f=Fe*P,v=f-(f-P),p=P-v,x=g*p-(y-d*v-g*v-d*p),T=h*S,f=Fe*h,d=f-(f-h),g=h-d,f=Fe*S,v=f-(f-S),p=S-v,w=g*p-(T-d*v-g*v-d*p),m=x-w,c=x-m,$e[0]=x-(m+c)+(c-w),E=y+m,c=E-y,_=y-(E-c)+(m-c),m=_-T,c=_-m,$e[1]=_-(m+c)+(c-T),A=E+m,c=A-E,$e[2]=E-(A-c)+(m-c),$e[3]=A;const G=Po(4,or,4,$e,zc);y=M*u,f=Fe*M,d=f-(f-M),g=M-d,f=Fe*u,v=f-(f-u),p=u-v,x=g*p-(y-d*v-g*v-d*p),T=R*l,f=Fe*R,d=f-(f-R),g=R-d,f=Fe*l,v=f-(f-l),p=l-v,w=g*p-(T-d*v-g*v-d*p),m=x-w,c=x-m,$e[0]=x-(m+c)+(c-w),E=y+m,c=E-y,_=y-(E-c)+(m-c),m=_-T,c=_-m,$e[1]=_-(m+c)+(c-T),A=E+m,c=A-E,$e[2]=E-(A-c)+(m-c),$e[3]=A;const q=Po(G,zc,4,$e,kc);y=a*u,f=Fe*a,d=f-(f-a),g=a-d,f=Fe*u,v=f-(f-u),p=u-v,x=g*p-(y-d*v-g*v-d*p),T=h*l,f=Fe*h,d=f-(f-h),g=h-d,f=Fe*l,v=f-(f-l),p=l-v,w=g*p-(T-d*v-g*v-d*p),m=x-w,c=x-m,$e[0]=x-(m+c)+(c-w),E=y+m,c=E-y,_=y-(E-c)+(m-c),m=_-T,c=_-m,$e[1]=_-(m+c)+(c-T),A=E+m,c=A-E,$e[2]=E-(A-c)+(m-c),$e[3]=A;const B=Po(q,kc,4,$e,Hc);return Hc[B-1]}function ea(n,t,e,i,r,s){const o=(t-s)*(e-r),a=(n-r)*(i-s),h=o-a,l=Math.abs(o+a);return Math.abs(h)>=BE*l?h:-kE(n,t,e,i,r,s,l)}const Vc=Math.pow(2,-52),na=new Uint32Array(512);class Sh{static from(t,e=XE,i=qE){const r=t.length,s=new Float64Array(r*2);for(let o=0;o<r;o++){const a=t[o];s[2*o]=e(a),s[2*o+1]=i(a)}return new Sh(s)}constructor(t){const e=t.length>>1;if(e>0&&typeof t[0]!="number")throw new Error("Expected coords to contain numbers.");this.coords=t;const i=Math.max(2*e-5,0);this._triangles=new Uint32Array(i*3),this._halfedges=new Int32Array(i*3),this._hashSize=Math.ceil(Math.sqrt(e)),this._hullPrev=new Uint32Array(e),this._hullNext=new Uint32Array(e),this._hullTri=new Uint32Array(e),this._hullHash=new Int32Array(this._hashSize).fill(-1),this._ids=new Uint32Array(e),this._dists=new Float64Array(e),this.update()}update(){const{coords:t,_hullPrev:e,_hullNext:i,_hullTri:r,_hullHash:s}=this,o=t.length>>1;let a=1/0,h=1/0,l=-1/0,u=-1/0;for(let S=0;S<o;S++){const R=t[2*S],P=t[2*S+1];R<a&&(a=R),P<h&&(h=P),R>l&&(l=R),P>u&&(u=P),this._ids[S]=S}const c=(a+l)/2,f=(h+u)/2;let d=1/0,g,v,p;for(let S=0;S<o;S++){const R=Do(c,f,t[2*S],t[2*S+1]);R<d&&(g=S,d=R)}const m=t[2*g],E=t[2*g+1];d=1/0;for(let S=0;S<o;S++){if(S===g)continue;const R=Do(m,E,t[2*S],t[2*S+1]);R<d&&R>0&&(v=S,d=R)}let _=t[2*v],y=t[2*v+1],x=1/0;for(let S=0;S<o;S++){if(S===g||S===v)continue;const R=WE(m,E,_,y,t[2*S],t[2*S+1]);R<x&&(p=S,x=R)}let T=t[2*p],w=t[2*p+1];if(x===1/0){for(let P=0;P<o;P++)this._dists[P]=t[2*P]-t[0]||t[2*P+1]-t[1];mr(this._ids,this._dists,0,o-1);const S=new Uint32Array(o);let R=0;for(let P=0,k=-1/0;P<o;P++){const I=this._ids[P];this._dists[I]>k&&(S[R++]=I,k=this._dists[I])}this.hull=S.subarray(0,R),this.triangles=new Uint32Array(0),this.halfedges=new Uint32Array(0);return}if(ea(m,E,_,y,T,w)<0){const S=v,R=_,P=y;v=p,_=T,y=w,p=S,T=R,w=P}const A=$E(m,E,_,y,T,w);this._cx=A.x,this._cy=A.y;for(let S=0;S<o;S++)this._dists[S]=Do(t[2*S],t[2*S+1],A.x,A.y);mr(this._ids,this._dists,0,o-1),this._hullStart=g;let M=3;i[g]=e[p]=v,i[v]=e[g]=p,i[p]=e[v]=g,r[g]=0,r[v]=1,r[p]=2,s.fill(-1),s[this._hashKey(m,E)]=g,s[this._hashKey(_,y)]=v,s[this._hashKey(T,w)]=p,this.trianglesLen=0,this._addTriangle(g,v,p,-1,-1,-1);for(let S=0,R,P;S<this._ids.length;S++){const k=this._ids[S],I=t[2*k],G=t[2*k+1];if(S>0&&Math.abs(I-R)<=Vc&&Math.abs(G-P)<=Vc||(R=I,P=G,k===g||k===v||k===p))continue;let q=0;for(let O=0,W=this._hashKey(I,G);O<this._hashSize&&(q=s[(W+O)%this._hashSize],!(q!==-1&&q!==i[q]));O++);q=e[q];let B=q,J;for(;J=i[B],ea(I,G,t[2*B],t[2*B+1],t[2*J],t[2*J+1])>=0;)if(B=J,B===q){B=-1;break}if(B===-1)continue;let K=this._addTriangle(B,k,i[B],-1,-1,r[B]);r[k]=this._legalize(K+2),r[B]=K,M++;let j=i[B];for(;J=i[j],ea(I,G,t[2*j],t[2*j+1],t[2*J],t[2*J+1])<0;)K=this._addTriangle(j,k,J,r[k],-1,r[j]),r[k]=this._legalize(K+2),i[j]=j,M--,j=J;if(B===q)for(;J=e[B],ea(I,G,t[2*J],t[2*J+1],t[2*B],t[2*B+1])<0;)K=this._addTriangle(J,k,B,-1,r[B],r[J]),this._legalize(K+2),r[J]=K,i[B]=B,M--,B=J;this._hullStart=e[k]=B,i[B]=e[j]=k,i[k]=j,s[this._hashKey(I,G)]=k,s[this._hashKey(t[2*B],t[2*B+1])]=B}this.hull=new Uint32Array(M);for(let S=0,R=this._hullStart;S<M;S++)this.hull[S]=R,R=i[R];this.triangles=this._triangles.subarray(0,this.trianglesLen),this.halfedges=this._halfedges.subarray(0,this.trianglesLen)}_hashKey(t,e){return Math.floor(HE(t-this._cx,e-this._cy)*this._hashSize)%this._hashSize}_legalize(t){const{_triangles:e,_halfedges:i,coords:r}=this;let s=0,o=0;for(;;){const a=i[t],h=t-t%3;if(o=h+(t+2)%3,a===-1){if(s===0)break;t=na[--s];continue}const l=a-a%3,u=h+(t+1)%3,c=l+(a+2)%3,f=e[o],d=e[t],g=e[u],v=e[c];if(VE(r[2*f],r[2*f+1],r[2*d],r[2*d+1],r[2*g],r[2*g+1],r[2*v],r[2*v+1])){e[t]=v,e[a]=f;const m=i[c];if(m===-1){let _=this._hullStart;do{if(this._hullTri[_]===c){this._hullTri[_]=t;break}_=this._hullPrev[_]}while(_!==this._hullStart)}this._link(t,m),this._link(a,i[o]),this._link(o,c);const E=l+(a+1)%3;s<na.length&&(na[s++]=E)}else{if(s===0)break;t=na[--s]}}return o}_link(t,e){this._halfedges[t]=e,e!==-1&&(this._halfedges[e]=t)}_addTriangle(t,e,i,r,s,o){const a=this.trianglesLen;return this._triangles[a]=t,this._triangles[a+1]=e,this._triangles[a+2]=i,this._link(a,r),this._link(a+1,s),this._link(a+2,o),this.trianglesLen+=3,a}}function HE(n,t){const e=n/(Math.abs(n)+Math.abs(t));return(t>0?3-e:1+e)/4}function Do(n,t,e,i){const r=n-e,s=t-i;return r*r+s*s}function VE(n,t,e,i,r,s,o,a){const h=n-o,l=t-a,u=e-o,c=i-a,f=r-o,d=s-a,g=h*h+l*l,v=u*u+c*c,p=f*f+d*d;return h*(c*p-v*d)-l*(u*p-v*f)+g*(u*d-c*f)<0}function WE(n,t,e,i,r,s){const o=e-n,a=i-t,h=r-n,l=s-t,u=o*o+a*a,c=h*h+l*l,f=.5/(o*l-a*h),d=(l*u-a*c)*f,g=(o*c-h*u)*f;return d*d+g*g}function $E(n,t,e,i,r,s){const o=e-n,a=i-t,h=r-n,l=s-t,u=o*o+a*a,c=h*h+l*l,f=.5/(o*l-a*h),d=n+(l*u-a*c)*f,g=t+(o*c-h*u)*f;return{x:d,y:g}}function mr(n,t,e,i){if(i-e<=20)for(let r=e+1;r<=i;r++){const s=n[r],o=t[s];let a=r-1;for(;a>=e&&t[n[a]]>o;)n[a+1]=n[a--];n[a+1]=s}else{const r=e+i>>1;let s=e+1,o=i;Hr(n,r,s),t[n[e]]>t[n[i]]&&Hr(n,e,i),t[n[s]]>t[n[i]]&&Hr(n,s,i),t[n[e]]>t[n[s]]&&Hr(n,e,s);const a=n[s],h=t[a];for(;;){do s++;while(t[n[s]]<h);do o--;while(t[n[o]]>h);if(o<s)break;Hr(n,s,o)}n[e+1]=n[o],n[o]=a,i-s+1>=o-e?(mr(n,t,s,i),mr(n,t,e,o-1)):(mr(n,t,e,o-1),mr(n,t,s,i))}}function Hr(n,t,e){const i=n[t];n[t]=n[e],n[e]=i}function XE(n){return n[0]}function qE(n){return n[1]}var Eh={exports:{}},Mr=typeof Reflect=="object"?Reflect:null,Wc=Mr&&typeof Mr.apply=="function"?Mr.apply:function(t,e,i){return Function.prototype.apply.call(t,e,i)},ha;Mr&&typeof Mr.ownKeys=="function"?ha=Mr.ownKeys:Object.getOwnPropertySymbols?ha=function(t){return Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t))}:ha=function(t){return Object.getOwnPropertyNames(t)};function YE(n){console&&console.warn&&console.warn(n)}var ef=Number.isNaN||function(t){return t!==t};function ie(){ie.init.call(this)}Eh.exports=ie;Eh.exports.once=JE;ie.EventEmitter=ie;ie.prototype._events=void 0;ie.prototype._eventsCount=0;ie.prototype._maxListeners=void 0;var $c=10;function Ba(n){if(typeof n!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n)}Object.defineProperty(ie,"defaultMaxListeners",{enumerable:!0,get:function(){return $c},set:function(n){if(typeof n!="number"||n<0||ef(n))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+n+".");$c=n}});ie.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};ie.prototype.setMaxListeners=function(t){if(typeof t!="number"||t<0||ef(t))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+t+".");return this._maxListeners=t,this};function nf(n){return n._maxListeners===void 0?ie.defaultMaxListeners:n._maxListeners}ie.prototype.getMaxListeners=function(){return nf(this)};ie.prototype.emit=function(t){for(var e=[],i=1;i<arguments.length;i++)e.push(arguments[i]);var r=t==="error",s=this._events;if(s!==void 0)r=r&&s.error===void 0;else if(!r)return!1;if(r){var o;if(e.length>0&&(o=e[0]),o instanceof Error)throw o;var a=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var h=s[t];if(h===void 0)return!1;if(typeof h=="function")Wc(h,this,e);else for(var l=h.length,u=hf(h,l),i=0;i<l;++i)Wc(u[i],this,e);return!0};function rf(n,t,e,i){var r,s,o;if(Ba(e),s=n._events,s===void 0?(s=n._events=Object.create(null),n._eventsCount=0):(s.newListener!==void 0&&(n.emit("newListener",t,e.listener?e.listener:e),s=n._events),o=s[t]),o===void 0)o=s[t]=e,++n._eventsCount;else if(typeof o=="function"?o=s[t]=i?[e,o]:[o,e]:i?o.unshift(e):o.push(e),r=nf(n),r>0&&o.length>r&&!o.warned){o.warned=!0;var a=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");a.name="MaxListenersExceededWarning",a.emitter=n,a.type=t,a.count=o.length,YE(a)}return n}ie.prototype.addListener=function(t,e){return rf(this,t,e,!1)};ie.prototype.on=ie.prototype.addListener;ie.prototype.prependListener=function(t,e){return rf(this,t,e,!0)};function jE(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function sf(n,t,e){var i={fired:!1,wrapFn:void 0,target:n,type:t,listener:e},r=jE.bind(i);return r.listener=e,i.wrapFn=r,r}ie.prototype.once=function(t,e){return Ba(e),this.on(t,sf(this,t,e)),this};ie.prototype.prependOnceListener=function(t,e){return Ba(e),this.prependListener(t,sf(this,t,e)),this};ie.prototype.removeListener=function(t,e){var i,r,s,o,a;if(Ba(e),r=this._events,r===void 0)return this;if(i=r[t],i===void 0)return this;if(i===e||i.listener===e)--this._eventsCount===0?this._events=Object.create(null):(delete r[t],r.removeListener&&this.emit("removeListener",t,i.listener||e));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===e||i[o].listener===e){a=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():KE(i,s),i.length===1&&(r[t]=i[0]),r.removeListener!==void 0&&this.emit("removeListener",t,a||e)}return this};ie.prototype.off=ie.prototype.removeListener;ie.prototype.removeAllListeners=function(t){var e,i,r;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[t]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[t]),this;if(arguments.length===0){var s=Object.keys(i),o;for(r=0;r<s.length;++r)o=s[r],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(e=i[t],typeof e=="function")this.removeListener(t,e);else if(e!==void 0)for(r=e.length-1;r>=0;r--)this.removeListener(t,e[r]);return this};function af(n,t,e){var i=n._events;if(i===void 0)return[];var r=i[t];return r===void 0?[]:typeof r=="function"?e?[r.listener||r]:[r]:e?ZE(r):hf(r,r.length)}ie.prototype.listeners=function(t){return af(this,t,!0)};ie.prototype.rawListeners=function(t){return af(this,t,!1)};ie.listenerCount=function(n,t){return typeof n.listenerCount=="function"?n.listenerCount(t):of.call(n,t)};ie.prototype.listenerCount=of;function of(n){var t=this._events;if(t!==void 0){var e=t[n];if(typeof e=="function")return 1;if(e!==void 0)return e.length}return 0}ie.prototype.eventNames=function(){return this._eventsCount>0?ha(this._events):[]};function hf(n,t){for(var e=new Array(t),i=0;i<t;++i)e[i]=n[i];return e}function KE(n,t){for(;t+1<n.length;t++)n[t]=n[t+1];n.pop()}function ZE(n){for(var t=new Array(n.length),e=0;e<t.length;++e)t[e]=n[e].listener||n[e];return t}function JE(n,t){return new Promise(function(e,i){function r(o){n.removeListener(t,s),i(o)}function s(){typeof n.removeListener=="function"&&n.removeListener("error",r),e([].slice.call(arguments))}lf(n,t,s,{once:!0}),t!=="error"&&QE(n,r,{once:!0})})}function QE(n,t,e){typeof n.on=="function"&&lf(n,"error",t,e)}function lf(n,t,e,i){if(typeof n.on=="function")i.once?n.once(t,e):n.on(t,e);else if(typeof n.addEventListener=="function")n.addEventListener(t,function r(s){i.once&&n.removeEventListener(t,r),e(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof n)}var t1=Eh.exports;function Fn(n){if(typeof n!="function")throw new Error("obliterator/iterator: expecting a function!");this.next=n}typeof Symbol<"u"&&(Fn.prototype[Symbol.iterator]=function(){return this});Fn.of=function(){var n=arguments,t=n.length,e=0;return new Fn(function(){return e>=t?{done:!0}:{done:!1,value:n[e++]}})};Fn.empty=function(){var n=new Fn(function(){return{done:!0}});return n};Fn.fromSequence=function(n){var t=0,e=n.length;return new Fn(function(){return t>=e?{done:!0}:{done:!1,value:n[t++]}})};Fn.is=function(n){return n instanceof Fn?!0:typeof n=="object"&&n!==null&&typeof n.next=="function"};var bh=Fn;const vn=xh(bh);var wh={};wh.ARRAY_BUFFER_SUPPORT=typeof ArrayBuffer<"u";wh.SYMBOL_SUPPORT=typeof Symbol<"u";var e1=bh,cf=wh,n1=cf.ARRAY_BUFFER_SUPPORT,i1=cf.SYMBOL_SUPPORT;function r1(n){return typeof n=="string"||Array.isArray(n)||n1&&ArrayBuffer.isView(n)?e1.fromSequence(n):typeof n!="object"||n===null?null:i1&&typeof n[Symbol.iterator]=="function"?n[Symbol.iterator]():typeof n.next=="function"?n:null}var uf=function(t){var e=r1(t);if(!e)throw new Error("obliterator: target is not iterable nor a valid iterator.");return e},s1=uf,a1=function(t,e){for(var i=arguments.length>1?e:1/0,r=i!==1/0?new Array(i):[],s,o=0,a=s1(t);;){if(o===i)return r;if(s=a.next(),s.done)return o!==e&&(r.length=o),r;r[o++]=s.value}};const ff=xh(a1);var o1=bh,h1=uf,l1=function(){var t=arguments,e=null,i=-1;return new o1(function(){var s=null;do{if(e===null){if(i++,i>=t.length)return{done:!0};e=h1(t[i])}if(s=e.next(),s.done===!0){e=null;continue}break}while(!0);return s})};const Qn=xh(l1);function c1(){const n=arguments[0];for(let t=1,e=arguments.length;t<e;t++)if(arguments[t])for(const i in arguments[t])n[i]=arguments[t][i];return n}let Me=c1;typeof Object.assign=="function"&&(Me=Object.assign);function _n(n,t,e,i){const r=n._nodes.get(t);let s=null;return r&&(i==="mixed"?s=r.out&&r.out[e]||r.undirected&&r.undirected[e]:i==="directed"?s=r.out&&r.out[e]:s=r.undirected&&r.undirected[e]),s}function Ne(n){return typeof n=="object"&&n!==null}function df(n){let t;for(t in n)return!1;return!0}function hn(n,t,e){Object.defineProperty(n,t,{enumerable:!1,configurable:!1,writable:!0,value:e})}function Sn(n,t,e){const i={enumerable:!0,configurable:!0};typeof e=="function"?i.get=e:(i.value=e,i.writable=!1),Object.defineProperty(n,t,i)}function Xc(n){return!(!Ne(n)||n.attributes&&!Array.isArray(n.attributes))}function u1(){let n=Math.floor(Math.random()*256)&255;return()=>n++}class Ah extends Error{constructor(t){super(),this.name="GraphError",this.message=t}}class dt extends Ah{constructor(t){super(t),this.name="InvalidArgumentsGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,dt.prototype.constructor)}}class at extends Ah{constructor(t){super(t),this.name="NotFoundGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,at.prototype.constructor)}}class Tt extends Ah{constructor(t){super(t),this.name="UsageGraphError",typeof Error.captureStackTrace=="function"&&Error.captureStackTrace(this,Tt.prototype.constructor)}}function pf(n,t){this.key=n,this.attributes=t,this.clear()}pf.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.undirectedDegree=0,this.undirectedLoops=0,this.directedLoops=0,this.in={},this.out={},this.undirected={}};function mf(n,t){this.key=n,this.attributes=t,this.clear()}mf.prototype.clear=function(){this.inDegree=0,this.outDegree=0,this.directedLoops=0,this.in={},this.out={}};function gf(n,t){this.key=n,this.attributes=t,this.clear()}gf.prototype.clear=function(){this.undirectedDegree=0,this.undirectedLoops=0,this.undirected={}};function Pr(n,t,e,i,r){this.key=t,this.attributes=r,this.undirected=n,this.source=e,this.target=i}Pr.prototype.attach=function(){let n="out",t="in";this.undirected&&(n=t="undirected");const e=this.source.key,i=this.target.key;this.source[n][i]=this,!(this.undirected&&e===i)&&(this.target[t][e]=this)};Pr.prototype.attachMulti=function(){let n="out",t="in";const e=this.source.key,i=this.target.key;this.undirected&&(n=t="undirected");const r=this.source[n],s=r[i];if(typeof s>"u"){r[i]=this,this.undirected&&e===i||(this.target[t][e]=this);return}s.previous=this,this.next=s,r[i]=this,this.target[t][e]=this};Pr.prototype.detach=function(){const n=this.source.key,t=this.target.key;let e="out",i="in";this.undirected&&(e=i="undirected"),delete this.source[e][t],delete this.target[i][n]};Pr.prototype.detachMulti=function(){const n=this.source.key,t=this.target.key;let e="out",i="in";this.undirected&&(e=i="undirected"),this.previous===void 0?this.next===void 0?(delete this.source[e][t],delete this.target[i][n]):(this.next.previous=void 0,this.source[e][t]=this.next,this.target[i][n]=this.next):(this.previous.next=this.next,this.next!==void 0&&(this.next.previous=this.previous))};const _f=0,vf=1,f1=2,yf=3;function ii(n,t,e,i,r,s,o){let a,h,l,u;if(i=""+i,e===_f){if(a=n._nodes.get(i),!a)throw new at(`Graph.${t}: could not find the "${i}" node in the graph.`);l=r,u=s}else if(e===yf){if(r=""+r,h=n._edges.get(r),!h)throw new at(`Graph.${t}: could not find the "${r}" edge in the graph.`);const c=h.source.key,f=h.target.key;if(i===c)a=h.target;else if(i===f)a=h.source;else throw new at(`Graph.${t}: the "${i}" node is not attached to the "${r}" edge (${c}, ${f}).`);l=s,u=o}else{if(h=n._edges.get(i),!h)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`);e===vf?a=h.source:a=h.target,l=r,u=s}return[a,l,u]}function d1(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=ii(this,t,e,i,r,s);return o.attributes[a]}}function p1(n,t,e){n.prototype[t]=function(i,r){const[s]=ii(this,t,e,i,r);return s.attributes}}function m1(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=ii(this,t,e,i,r,s);return o.attributes.hasOwnProperty(a)}}function g1(n,t,e){n.prototype[t]=function(i,r,s,o){const[a,h,l]=ii(this,t,e,i,r,s,o);return a.attributes[h]=l,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:h}),this}}function _1(n,t,e){n.prototype[t]=function(i,r,s,o){const[a,h,l]=ii(this,t,e,i,r,s,o);if(typeof l!="function")throw new dt(`Graph.${t}: updater should be a function.`);const u=a.attributes,c=l(u[h]);return u[h]=c,this.emit("nodeAttributesUpdated",{key:a.key,type:"set",attributes:a.attributes,name:h}),this}}function v1(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=ii(this,t,e,i,r,s);return delete o.attributes[a],this.emit("nodeAttributesUpdated",{key:o.key,type:"remove",attributes:o.attributes,name:a}),this}}function y1(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=ii(this,t,e,i,r,s);if(!Ne(a))throw new dt(`Graph.${t}: provided attributes are not a plain object.`);return o.attributes=a,this.emit("nodeAttributesUpdated",{key:o.key,type:"replace",attributes:o.attributes}),this}}function M1(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=ii(this,t,e,i,r,s);if(!Ne(a))throw new dt(`Graph.${t}: provided attributes are not a plain object.`);return Me(o.attributes,a),this.emit("nodeAttributesUpdated",{key:o.key,type:"merge",attributes:o.attributes,data:a}),this}}function x1(n,t,e){n.prototype[t]=function(i,r,s){const[o,a]=ii(this,t,e,i,r,s);if(typeof a!="function")throw new dt(`Graph.${t}: provided updater is not a function.`);return o.attributes=a(o.attributes),this.emit("nodeAttributesUpdated",{key:o.key,type:"update",attributes:o.attributes}),this}}const S1=[{name:n=>`get${n}Attribute`,attacher:d1},{name:n=>`get${n}Attributes`,attacher:p1},{name:n=>`has${n}Attribute`,attacher:m1},{name:n=>`set${n}Attribute`,attacher:g1},{name:n=>`update${n}Attribute`,attacher:_1},{name:n=>`remove${n}Attribute`,attacher:v1},{name:n=>`replace${n}Attributes`,attacher:y1},{name:n=>`merge${n}Attributes`,attacher:M1},{name:n=>`update${n}Attributes`,attacher:x1}];function E1(n){S1.forEach(function({name:t,attacher:e}){e(n,t("Node"),_f),e(n,t("Source"),vf),e(n,t("Target"),f1),e(n,t("Opposite"),yf)})}function b1(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=_n(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}return s.attributes[r]}}function w1(n,t,e){n.prototype[t]=function(i){let r;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>1){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const s=""+i,o=""+arguments[1];if(r=_n(this,s,o,e),!r)throw new at(`Graph.${t}: could not find an edge for the given path ("${s}" - "${o}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,r=this._edges.get(i),!r)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}return r.attributes}}function A1(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=_n(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}return s.attributes.hasOwnProperty(r)}}function T1(n,t,e){n.prototype[t]=function(i,r,s){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+i,h=""+r;if(r=arguments[2],s=arguments[3],o=_n(this,a,h,e),!o)throw new at(`Graph.${t}: could not find an edge for the given path ("${a}" - "${h}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,o=this._edges.get(i),!o)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}return o.attributes[r]=s,this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function C1(n,t,e){n.prototype[t]=function(i,r,s){let o;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>3){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const a=""+i,h=""+r;if(r=arguments[2],s=arguments[3],o=_n(this,a,h,e),!o)throw new at(`Graph.${t}: could not find an edge for the given path ("${a}" - "${h}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,o=this._edges.get(i),!o)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}if(typeof s!="function")throw new dt(`Graph.${t}: updater should be a function.`);return o.attributes[r]=s(o.attributes[r]),this.emit("edgeAttributesUpdated",{key:o.key,type:"set",attributes:o.attributes,name:r}),this}}function R1(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=_n(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}return delete s.attributes[r],this.emit("edgeAttributesUpdated",{key:s.key,type:"remove",attributes:s.attributes,name:r}),this}}function L1(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=_n(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}if(!Ne(r))throw new dt(`Graph.${t}: provided attributes are not a plain object.`);return s.attributes=r,this.emit("edgeAttributesUpdated",{key:s.key,type:"replace",attributes:s.attributes}),this}}function P1(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=_n(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}if(!Ne(r))throw new dt(`Graph.${t}: provided attributes are not a plain object.`);return Me(s.attributes,r),this.emit("edgeAttributesUpdated",{key:s.key,type:"merge",attributes:s.attributes,data:r}),this}}function D1(n,t,e){n.prototype[t]=function(i,r){let s;if(this.type!=="mixed"&&e!=="mixed"&&e!==this.type)throw new Tt(`Graph.${t}: cannot find this type of edges in your ${this.type} graph.`);if(arguments.length>2){if(this.multi)throw new Tt(`Graph.${t}: cannot use a {source,target} combo when asking about an edge's attributes in a MultiGraph since we cannot infer the one you want information about.`);const o=""+i,a=""+r;if(r=arguments[2],s=_n(this,o,a,e),!s)throw new at(`Graph.${t}: could not find an edge for the given path ("${o}" - "${a}").`)}else{if(e!=="mixed")throw new Tt(`Graph.${t}: calling this method with only a key (vs. a source and target) does not make sense since an edge with this key could have the other type.`);if(i=""+i,s=this._edges.get(i),!s)throw new at(`Graph.${t}: could not find the "${i}" edge in the graph.`)}if(typeof r!="function")throw new dt(`Graph.${t}: provided updater is not a function.`);return s.attributes=r(s.attributes),this.emit("edgeAttributesUpdated",{key:s.key,type:"update",attributes:s.attributes}),this}}const N1=[{name:n=>`get${n}Attribute`,attacher:b1},{name:n=>`get${n}Attributes`,attacher:w1},{name:n=>`has${n}Attribute`,attacher:A1},{name:n=>`set${n}Attribute`,attacher:T1},{name:n=>`update${n}Attribute`,attacher:C1},{name:n=>`remove${n}Attribute`,attacher:R1},{name:n=>`replace${n}Attributes`,attacher:L1},{name:n=>`merge${n}Attributes`,attacher:P1},{name:n=>`update${n}Attributes`,attacher:D1}];function I1(n){N1.forEach(function({name:t,attacher:e}){e(n,t("Edge"),"mixed"),e(n,t("DirectedEdge"),"directed"),e(n,t("UndirectedEdge"),"undirected")})}const U1=[{name:"edges",type:"mixed"},{name:"inEdges",type:"directed",direction:"in"},{name:"outEdges",type:"directed",direction:"out"},{name:"inboundEdges",type:"mixed",direction:"in"},{name:"outboundEdges",type:"mixed",direction:"out"},{name:"directedEdges",type:"directed"},{name:"undirectedEdges",type:"undirected"}];function O1(n,t,e,i){let r=!1;for(const s in t){if(s===i)continue;const o=t[s];if(r=e(o.key,o.attributes,o.source.key,o.target.key,o.source.attributes,o.target.attributes,o.undirected),n&&r)return o.key}}function F1(n,t,e,i){let r,s,o,a=!1;for(const h in t)if(h!==i){r=t[h];do{if(s=r.source,o=r.target,a=e(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected),n&&a)return r.key;r=r.next}while(r!==void 0)}}function No(n,t){const e=Object.keys(n),i=e.length;let r,s=0;return new vn(function(){do if(r)r=r.next;else{if(s>=i)return{done:!0};const a=e[s++];if(a===t){r=void 0;continue}r=n[a]}while(!r);return{done:!1,value:{edge:r.key,attributes:r.attributes,source:r.source.key,target:r.target.key,sourceAttributes:r.source.attributes,targetAttributes:r.target.attributes,undirected:r.undirected}}})}function B1(n,t,e,i){const r=t[e];if(!r)return;const s=r.source,o=r.target;if(i(r.key,r.attributes,s.key,o.key,s.attributes,o.attributes,r.undirected)&&n)return r.key}function G1(n,t,e,i){let r=t[e];if(!r)return;let s=!1;do{if(s=i(r.key,r.attributes,r.source.key,r.target.key,r.source.attributes,r.target.attributes,r.undirected),n&&s)return r.key;r=r.next}while(r!==void 0)}function Io(n,t){let e=n[t];return e.next!==void 0?new vn(function(){if(!e)return{done:!0};const i={edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected};return e=e.next,{done:!1,value:i}}):vn.of({edge:e.key,attributes:e.attributes,source:e.source.key,target:e.target.key,sourceAttributes:e.source.attributes,targetAttributes:e.target.attributes,undirected:e.undirected})}function z1(n,t){if(n.size===0)return[];if(t==="mixed"||t===n.type)return typeof Array.from=="function"?Array.from(n._edges.keys()):ff(n._edges.keys(),n._edges.size);const e=t==="undirected"?n.undirectedSize:n.directedSize,i=new Array(e),r=t==="undirected",s=n._edges.values();let o=0,a,h;for(;a=s.next(),a.done!==!0;)h=a.value,h.undirected===r&&(i[o++]=h.key);return i}function Mf(n,t,e,i){if(t.size===0)return;const r=e!=="mixed"&&e!==t.type,s=e==="undirected";let o,a,h=!1;const l=t._edges.values();for(;o=l.next(),o.done!==!0;){if(a=o.value,r&&a.undirected!==s)continue;const{key:u,attributes:c,source:f,target:d}=a;if(h=i(u,c,f.key,d.key,f.attributes,d.attributes,a.undirected),n&&h)return u}}function k1(n,t){if(n.size===0)return vn.empty();const e=t!=="mixed"&&t!==n.type,i=t==="undirected",r=n._edges.values();return new vn(function(){let o,a;for(;;){if(o=r.next(),o.done)return o;if(a=o.value,!(e&&a.undirected!==i))break}return{value:{edge:a.key,attributes:a.attributes,source:a.source.key,target:a.target.key,sourceAttributes:a.source.attributes,targetAttributes:a.target.attributes,undirected:a.undirected},done:!1}})}function Th(n,t,e,i,r,s){const o=t?F1:O1;let a;if(e!=="undirected"&&(i!=="out"&&(a=o(n,r.in,s),n&&a)||i!=="in"&&(a=o(n,r.out,s,i?void 0:r.key),n&&a))||e!=="directed"&&(a=o(n,r.undirected,s),n&&a))return a}function H1(n,t,e,i){const r=[];return Th(!1,n,t,e,i,function(s){r.push(s)}),r}function V1(n,t,e){let i=vn.empty();return n!=="undirected"&&(t!=="out"&&typeof e.in<"u"&&(i=Qn(i,No(e.in))),t!=="in"&&typeof e.out<"u"&&(i=Qn(i,No(e.out,t?void 0:e.key)))),n!=="directed"&&typeof e.undirected<"u"&&(i=Qn(i,No(e.undirected))),i}function Ch(n,t,e,i,r,s,o){const a=e?G1:B1;let h;if(t!=="undirected"&&(typeof r.in<"u"&&i!=="out"&&(h=a(n,r.in,s,o),n&&h)||typeof r.out<"u"&&i!=="in"&&(i||r.key!==s)&&(h=a(n,r.out,s,o),n&&h))||t!=="directed"&&typeof r.undirected<"u"&&(h=a(n,r.undirected,s,o),n&&h))return h}function W1(n,t,e,i,r){const s=[];return Ch(!1,n,t,e,i,r,function(o){s.push(o)}),s}function $1(n,t,e,i){let r=vn.empty();return n!=="undirected"&&(typeof e.in<"u"&&t!=="out"&&i in e.in&&(r=Qn(r,Io(e.in,i))),typeof e.out<"u"&&t!=="in"&&i in e.out&&(t||e.key!==i)&&(r=Qn(r,Io(e.out,i)))),n!=="directed"&&typeof e.undirected<"u"&&i in e.undirected&&(r=Qn(r,Io(e.undirected,i))),r}function X1(n,t){const{name:e,type:i,direction:r}=t;n.prototype[e]=function(s,o){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return[];if(!arguments.length)return z1(this,i);if(arguments.length===1){s=""+s;const a=this._nodes.get(s);if(typeof a>"u")throw new at(`Graph.${e}: could not find the "${s}" node in the graph.`);return H1(this.multi,i==="mixed"?this.type:i,r,a)}if(arguments.length===2){s=""+s,o=""+o;const a=this._nodes.get(s);if(!a)throw new at(`Graph.${e}:  could not find the "${s}" source node in the graph.`);if(!this._nodes.has(o))throw new at(`Graph.${e}:  could not find the "${o}" target node in the graph.`);return W1(i,this.multi,r,a,o)}throw new dt(`Graph.${e}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function q1(n,t){const{name:e,type:i,direction:r}=t,s="forEach"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[s]=function(l,u,c){if(!(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)){if(arguments.length===1)return c=l,Mf(!1,this,i,c);if(arguments.length===2){l=""+l,c=u;const f=this._nodes.get(l);if(typeof f>"u")throw new at(`Graph.${s}: could not find the "${l}" node in the graph.`);return Th(!1,this.multi,i==="mixed"?this.type:i,r,f,c)}if(arguments.length===3){l=""+l,u=""+u;const f=this._nodes.get(l);if(!f)throw new at(`Graph.${s}:  could not find the "${l}" source node in the graph.`);if(!this._nodes.has(u))throw new at(`Graph.${s}:  could not find the "${u}" target node in the graph.`);return Ch(!1,i,this.multi,r,f,u,c)}throw new dt(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)}};const o="map"+e[0].toUpperCase()+e.slice(1);n.prototype[o]=function(){const l=Array.prototype.slice.call(arguments),u=l.pop();let c;if(l.length===0){let f=0;i!=="directed"&&(f+=this.undirectedSize),i!=="undirected"&&(f+=this.directedSize),c=new Array(f);let d=0;l.push((g,v,p,m,E,_,y)=>{c[d++]=u(g,v,p,m,E,_,y)})}else c=[],l.push((f,d,g,v,p,m,E)=>{c.push(u(f,d,g,v,p,m,E))});return this[s].apply(this,l),c};const a="filter"+e[0].toUpperCase()+e.slice(1);n.prototype[a]=function(){const l=Array.prototype.slice.call(arguments),u=l.pop(),c=[];return l.push((f,d,g,v,p,m,E)=>{u(f,d,g,v,p,m,E)&&c.push(f)}),this[s].apply(this,l),c};const h="reduce"+e[0].toUpperCase()+e.slice(1);n.prototype[h]=function(){let l=Array.prototype.slice.call(arguments);if(l.length<2||l.length>4)throw new dt(`Graph.${h}: invalid number of arguments (expecting 2, 3 or 4 and got ${l.length}).`);if(typeof l[l.length-1]=="function"&&typeof l[l.length-2]!="function")throw new dt(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let u,c;l.length===2?(u=l[0],c=l[1],l=[]):l.length===3?(u=l[1],c=l[2],l=[l[0]]):l.length===4&&(u=l[2],c=l[3],l=[l[0],l[1]]);let f=c;return l.push((d,g,v,p,m,E,_)=>{f=u(f,d,g,v,p,m,E,_)}),this[s].apply(this,l),f}}function Y1(n,t){const{name:e,type:i,direction:r}=t,s="find"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[s]=function(h,l,u){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return!1;if(arguments.length===1)return u=h,Mf(!0,this,i,u);if(arguments.length===2){h=""+h,u=l;const c=this._nodes.get(h);if(typeof c>"u")throw new at(`Graph.${s}: could not find the "${h}" node in the graph.`);return Th(!0,this.multi,i==="mixed"?this.type:i,r,c,u)}if(arguments.length===3){h=""+h,l=""+l;const c=this._nodes.get(h);if(!c)throw new at(`Graph.${s}:  could not find the "${h}" source node in the graph.`);if(!this._nodes.has(l))throw new at(`Graph.${s}:  could not find the "${l}" target node in the graph.`);return Ch(!0,i,this.multi,r,c,l,u)}throw new dt(`Graph.${s}: too many arguments (expecting 1, 2 or 3 and got ${arguments.length}).`)};const o="some"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[o]=function(){const h=Array.prototype.slice.call(arguments),l=h.pop();return h.push((c,f,d,g,v,p,m)=>l(c,f,d,g,v,p,m)),!!this[s].apply(this,h)};const a="every"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[a]=function(){const h=Array.prototype.slice.call(arguments),l=h.pop();return h.push((c,f,d,g,v,p,m)=>!l(c,f,d,g,v,p,m)),!this[s].apply(this,h)}}function j1(n,t){const{name:e,type:i,direction:r}=t,s=e.slice(0,-1)+"Entries";n.prototype[s]=function(o,a){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return vn.empty();if(!arguments.length)return k1(this,i);if(arguments.length===1){o=""+o;const h=this._nodes.get(o);if(!h)throw new at(`Graph.${s}: could not find the "${o}" node in the graph.`);return V1(i,r,h)}if(arguments.length===2){o=""+o,a=""+a;const h=this._nodes.get(o);if(!h)throw new at(`Graph.${s}:  could not find the "${o}" source node in the graph.`);if(!this._nodes.has(a))throw new at(`Graph.${s}:  could not find the "${a}" target node in the graph.`);return $1(i,r,h,a)}throw new dt(`Graph.${s}: too many arguments (expecting 0, 1 or 2 and got ${arguments.length}).`)}}function K1(n){U1.forEach(t=>{X1(n,t),q1(n,t),Y1(n,t),j1(n,t)})}const Z1=[{name:"neighbors",type:"mixed"},{name:"inNeighbors",type:"directed",direction:"in"},{name:"outNeighbors",type:"directed",direction:"out"},{name:"inboundNeighbors",type:"mixed",direction:"in"},{name:"outboundNeighbors",type:"mixed",direction:"out"},{name:"directedNeighbors",type:"directed"},{name:"undirectedNeighbors",type:"undirected"}];function Ga(){this.A=null,this.B=null}Ga.prototype.wrap=function(n){this.A===null?this.A=n:this.B===null&&(this.B=n)};Ga.prototype.has=function(n){return this.A!==null&&n in this.A||this.B!==null&&n in this.B};function Vr(n,t,e,i,r){for(const s in i){const o=i[s],a=o.source,h=o.target,l=a===e?h:a;if(t&&t.has(l.key))continue;const u=r(l.key,l.attributes);if(n&&u)return l.key}}function Rh(n,t,e,i,r){if(t!=="mixed"){if(t==="undirected")return Vr(n,null,i,i.undirected,r);if(typeof e=="string")return Vr(n,null,i,i[e],r)}const s=new Ga;let o;if(t!=="undirected"){if(e!=="out"){if(o=Vr(n,null,i,i.in,r),n&&o)return o;s.wrap(i.in)}if(e!=="in"){if(o=Vr(n,s,i,i.out,r),n&&o)return o;s.wrap(i.out)}}if(t!=="directed"&&(o=Vr(n,s,i,i.undirected,r),n&&o))return o}function J1(n,t,e){if(n!=="mixed"){if(n==="undirected")return Object.keys(e.undirected);if(typeof t=="string")return Object.keys(e[t])}const i=[];return Rh(!1,n,t,e,function(r){i.push(r)}),i}function Wr(n,t,e){const i=Object.keys(e),r=i.length;let s=0;return new vn(function(){let a=null;do{if(s>=r)return n&&n.wrap(e),{done:!0};const h=e[i[s++]],l=h.source,u=h.target;if(a=l===t?u:l,n&&n.has(a.key)){a=null;continue}}while(a===null);return{done:!1,value:{neighbor:a.key,attributes:a.attributes}}})}function Q1(n,t,e){if(n!=="mixed"){if(n==="undirected")return Wr(null,e,e.undirected);if(typeof t=="string")return Wr(null,e,e[t])}let i=vn.empty();const r=new Ga;return n!=="undirected"&&(t!=="out"&&(i=Qn(i,Wr(r,e,e.in))),t!=="in"&&(i=Qn(i,Wr(r,e,e.out)))),n!=="directed"&&(i=Qn(i,Wr(r,e,e.undirected))),i}function tb(n,t){const{name:e,type:i,direction:r}=t;n.prototype[e]=function(s){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return[];s=""+s;const o=this._nodes.get(s);if(typeof o>"u")throw new at(`Graph.${e}: could not find the "${s}" node in the graph.`);return J1(i==="mixed"?this.type:i,r,o)}}function eb(n,t){const{name:e,type:i,direction:r}=t,s="forEach"+e[0].toUpperCase()+e.slice(1,-1);n.prototype[s]=function(l,u){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return;l=""+l;const c=this._nodes.get(l);if(typeof c>"u")throw new at(`Graph.${s}: could not find the "${l}" node in the graph.`);Rh(!1,i==="mixed"?this.type:i,r,c,u)};const o="map"+e[0].toUpperCase()+e.slice(1);n.prototype[o]=function(l,u){const c=[];return this[s](l,(f,d)=>{c.push(u(f,d))}),c};const a="filter"+e[0].toUpperCase()+e.slice(1);n.prototype[a]=function(l,u){const c=[];return this[s](l,(f,d)=>{u(f,d)&&c.push(f)}),c};const h="reduce"+e[0].toUpperCase()+e.slice(1);n.prototype[h]=function(l,u,c){if(arguments.length<3)throw new dt(`Graph.${h}: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.`);let f=c;return this[s](l,(d,g)=>{f=u(f,d,g)}),f}}function nb(n,t){const{name:e,type:i,direction:r}=t,s=e[0].toUpperCase()+e.slice(1,-1),o="find"+s;n.prototype[o]=function(l,u){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return;l=""+l;const c=this._nodes.get(l);if(typeof c>"u")throw new at(`Graph.${o}: could not find the "${l}" node in the graph.`);return Rh(!0,i==="mixed"?this.type:i,r,c,u)};const a="some"+s;n.prototype[a]=function(l,u){return!!this[o](l,u)};const h="every"+s;n.prototype[h]=function(l,u){return!this[o](l,(f,d)=>!u(f,d))}}function ib(n,t){const{name:e,type:i,direction:r}=t,s=e.slice(0,-1)+"Entries";n.prototype[s]=function(o){if(i!=="mixed"&&this.type!=="mixed"&&i!==this.type)return vn.empty();o=""+o;const a=this._nodes.get(o);if(typeof a>"u")throw new at(`Graph.${s}: could not find the "${o}" node in the graph.`);return Q1(i==="mixed"?this.type:i,r,a)}}function rb(n){Z1.forEach(t=>{tb(n,t),eb(n,t),nb(n,t),ib(n,t)})}function ia(n,t,e,i,r){const s=i._nodes.values(),o=i.type;let a,h,l,u,c,f,d;for(;a=s.next(),a.done!==!0;){let g=!1;if(h=a.value,o!=="undirected"){u=h.out;for(l in u){c=u[l];do{if(f=c.target,g=!0,d=r(h.key,f.key,h.attributes,f.attributes,c.key,c.attributes,c.undirected),n&&d)return c;c=c.next}while(c)}}if(o!=="directed"){u=h.undirected;for(l in u)if(!(t&&h.key>l)){c=u[l];do{if(f=c.target,f.key!==l&&(f=c.source),g=!0,d=r(h.key,f.key,h.attributes,f.attributes,c.key,c.attributes,c.undirected),n&&d)return c;c=c.next}while(c)}}if(e&&!g&&(d=r(h.key,null,h.attributes,null,null,null,null),n&&d))return null}}function sb(n,t){const e={key:n};return df(t.attributes)||(e.attributes=Me({},t.attributes)),e}function ab(n,t,e){const i={key:t,source:e.source.key,target:e.target.key};return df(e.attributes)||(i.attributes=Me({},e.attributes)),n==="mixed"&&e.undirected&&(i.undirected=!0),i}function ob(n){if(!Ne(n))throw new dt('Graph.import: invalid serialized node. A serialized node should be a plain object with at least a "key" property.');if(!("key"in n))throw new dt("Graph.import: serialized node is missing its key.");if("attributes"in n&&(!Ne(n.attributes)||n.attributes===null))throw new dt("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.")}function hb(n){if(!Ne(n))throw new dt('Graph.import: invalid serialized edge. A serialized edge should be a plain object with at least a "source" & "target" property.');if(!("source"in n))throw new dt("Graph.import: serialized edge is missing its source.");if(!("target"in n))throw new dt("Graph.import: serialized edge is missing its target.");if("attributes"in n&&(!Ne(n.attributes)||n.attributes===null))throw new dt("Graph.import: invalid attributes. Attributes should be a plain object, null or omitted.");if("undirected"in n&&typeof n.undirected!="boolean")throw new dt("Graph.import: invalid undirectedness information. Undirected should be boolean or omitted.")}const lb=u1(),cb=new Set(["directed","undirected","mixed"]),qc=new Set(["domain","_events","_eventsCount","_maxListeners"]),ub=[{name:n=>`${n}Edge`,generateKey:!0},{name:n=>`${n}DirectedEdge`,generateKey:!0,type:"directed"},{name:n=>`${n}UndirectedEdge`,generateKey:!0,type:"undirected"},{name:n=>`${n}EdgeWithKey`},{name:n=>`${n}DirectedEdgeWithKey`,type:"directed"},{name:n=>`${n}UndirectedEdgeWithKey`,type:"undirected"}],fb={allowSelfLoops:!0,multi:!1,type:"mixed"};function db(n,t,e){if(e&&!Ne(e))throw new dt(`Graph.addNode: invalid attributes. Expecting an object but got "${e}"`);if(t=""+t,e=e||{},n._nodes.has(t))throw new Tt(`Graph.addNode: the "${t}" node already exist in the graph.`);const i=new n.NodeDataClass(t,e);return n._nodes.set(t,i),n.emit("nodeAdded",{key:t,attributes:e}),i}function Yc(n,t,e){const i=new n.NodeDataClass(t,e);return n._nodes.set(t,i),n.emit("nodeAdded",{key:t,attributes:e}),i}function xf(n,t,e,i,r,s,o,a){if(!i&&n.type==="undirected")throw new Tt(`Graph.${t}: you cannot add a directed edge to an undirected graph. Use the #.addEdge or #.addUndirectedEdge instead.`);if(i&&n.type==="directed")throw new Tt(`Graph.${t}: you cannot add an undirected edge to a directed graph. Use the #.addEdge or #.addDirectedEdge instead.`);if(a&&!Ne(a))throw new dt(`Graph.${t}: invalid attributes. Expecting an object but got "${a}"`);if(s=""+s,o=""+o,a=a||{},!n.allowSelfLoops&&s===o)throw new Tt(`Graph.${t}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);const h=n._nodes.get(s),l=n._nodes.get(o);if(!h)throw new at(`Graph.${t}: source node "${s}" not found.`);if(!l)throw new at(`Graph.${t}: target node "${o}" not found.`);const u={key:null,undirected:i,source:s,target:o,attributes:a};if(e)r=n._edgeKeyGenerator();else if(r=""+r,n._edges.has(r))throw new Tt(`Graph.${t}: the "${r}" edge already exists in the graph.`);if(!n.multi&&(i?typeof h.undirected[o]<"u":typeof h.out[o]<"u"))throw new Tt(`Graph.${t}: an edge linking "${s}" to "${o}" already exists. If you really want to add multiple edges linking those nodes, you should create a multi graph by using the 'multi' option.`);const c=new Pr(i,r,h,l,a);n._edges.set(r,c);const f=s===o;return i?(h.undirectedDegree++,l.undirectedDegree++,f&&(h.undirectedLoops++,n._undirectedSelfLoopCount++)):(h.outDegree++,l.inDegree++,f&&(h.directedLoops++,n._directedSelfLoopCount++)),n.multi?c.attachMulti():c.attach(),i?n._undirectedSize++:n._directedSize++,u.key=r,n.emit("edgeAdded",u),r}function pb(n,t,e,i,r,s,o,a,h){if(!i&&n.type==="undirected")throw new Tt(`Graph.${t}: you cannot merge/update a directed edge to an undirected graph. Use the #.mergeEdge/#.updateEdge or #.addUndirectedEdge instead.`);if(i&&n.type==="directed")throw new Tt(`Graph.${t}: you cannot merge/update an undirected edge to a directed graph. Use the #.mergeEdge/#.updateEdge or #.addDirectedEdge instead.`);if(a){if(h){if(typeof a!="function")throw new dt(`Graph.${t}: invalid updater function. Expecting a function but got "${a}"`)}else if(!Ne(a))throw new dt(`Graph.${t}: invalid attributes. Expecting an object but got "${a}"`)}s=""+s,o=""+o;let l;if(h&&(l=a,a=void 0),!n.allowSelfLoops&&s===o)throw new Tt(`Graph.${t}: source & target are the same ("${s}"), thus creating a loop explicitly forbidden by this graph 'allowSelfLoops' option set to false.`);let u=n._nodes.get(s),c=n._nodes.get(o),f,d;if(!e&&(f=n._edges.get(r),f)){if((f.source.key!==s||f.target.key!==o)&&(!i||f.source.key!==o||f.target.key!==s))throw new Tt(`Graph.${t}: inconsistency detected when attempting to merge the "${r}" edge with "${s}" source & "${o}" target vs. ("${f.source.key}", "${f.target.key}").`);d=f}if(!d&&!n.multi&&u&&(d=i?u.undirected[o]:u.out[o]),d){const E=[d.key,!1,!1,!1];if(h?!l:!a)return E;if(h){const _=d.attributes;d.attributes=l(_),n.emit("edgeAttributesUpdated",{type:"replace",key:d.key,attributes:d.attributes})}else Me(d.attributes,a),n.emit("edgeAttributesUpdated",{type:"merge",key:d.key,attributes:d.attributes,data:a});return E}a=a||{},h&&l&&(a=l(a));const g={key:null,undirected:i,source:s,target:o,attributes:a};if(e)r=n._edgeKeyGenerator();else if(r=""+r,n._edges.has(r))throw new Tt(`Graph.${t}: the "${r}" edge already exists in the graph.`);let v=!1,p=!1;u||(u=Yc(n,s,{}),v=!0,s===o&&(c=u,p=!0)),c||(c=Yc(n,o,{}),p=!0),f=new Pr(i,r,u,c,a),n._edges.set(r,f);const m=s===o;return i?(u.undirectedDegree++,c.undirectedDegree++,m&&(u.undirectedLoops++,n._undirectedSelfLoopCount++)):(u.outDegree++,c.inDegree++,m&&(u.directedLoops++,n._directedSelfLoopCount++)),n.multi?f.attachMulti():f.attach(),i?n._undirectedSize++:n._directedSize++,g.key=r,n.emit("edgeAdded",g),[r,!0,v,p]}function hr(n,t){n._edges.delete(t.key);const{source:e,target:i,attributes:r}=t,s=t.undirected,o=e===i;s?(e.undirectedDegree--,i.undirectedDegree--,o&&(e.undirectedLoops--,n._undirectedSelfLoopCount--)):(e.outDegree--,i.inDegree--,o&&(e.directedLoops--,n._directedSelfLoopCount--)),n.multi?t.detachMulti():t.detach(),s?n._undirectedSize--:n._directedSize--,n.emit("edgeDropped",{key:t.key,attributes:r,source:e.key,target:i.key,undirected:s})}class re extends t1.EventEmitter{constructor(t){if(super(),t=Me({},fb,t),typeof t.multi!="boolean")throw new dt(`Graph.constructor: invalid 'multi' option. Expecting a boolean but got "${t.multi}".`);if(!cb.has(t.type))throw new dt(`Graph.constructor: invalid 'type' option. Should be one of "mixed", "directed" or "undirected" but got "${t.type}".`);if(typeof t.allowSelfLoops!="boolean")throw new dt(`Graph.constructor: invalid 'allowSelfLoops' option. Expecting a boolean but got "${t.allowSelfLoops}".`);const e=t.type==="mixed"?pf:t.type==="directed"?mf:gf;hn(this,"NodeDataClass",e);const i="geid_"+lb()+"_";let r=0;const s=()=>{let o;do o=i+r++;while(this._edges.has(o));return o};hn(this,"_attributes",{}),hn(this,"_nodes",new Map),hn(this,"_edges",new Map),hn(this,"_directedSize",0),hn(this,"_undirectedSize",0),hn(this,"_directedSelfLoopCount",0),hn(this,"_undirectedSelfLoopCount",0),hn(this,"_edgeKeyGenerator",s),hn(this,"_options",t),qc.forEach(o=>hn(this,o,this[o])),Sn(this,"order",()=>this._nodes.size),Sn(this,"size",()=>this._edges.size),Sn(this,"directedSize",()=>this._directedSize),Sn(this,"undirectedSize",()=>this._undirectedSize),Sn(this,"selfLoopCount",()=>this._directedSelfLoopCount+this._undirectedSelfLoopCount),Sn(this,"directedSelfLoopCount",()=>this._directedSelfLoopCount),Sn(this,"undirectedSelfLoopCount",()=>this._undirectedSelfLoopCount),Sn(this,"multi",this._options.multi),Sn(this,"type",this._options.type),Sn(this,"allowSelfLoops",this._options.allowSelfLoops),Sn(this,"implementation",()=>"graphology")}_resetInstanceCounters(){this._directedSize=0,this._undirectedSize=0,this._directedSelfLoopCount=0,this._undirectedSelfLoopCount=0}hasNode(t){return this._nodes.has(""+t)}hasDirectedEdge(t,e){if(this.type==="undirected")return!1;if(arguments.length===1){const i=""+t,r=this._edges.get(i);return!!r&&!r.undirected}else if(arguments.length===2){t=""+t,e=""+e;const i=this._nodes.get(t);return i?i.out.hasOwnProperty(e):!1}throw new dt(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasUndirectedEdge(t,e){if(this.type==="directed")return!1;if(arguments.length===1){const i=""+t,r=this._edges.get(i);return!!r&&r.undirected}else if(arguments.length===2){t=""+t,e=""+e;const i=this._nodes.get(t);return i?i.undirected.hasOwnProperty(e):!1}throw new dt(`Graph.hasDirectedEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}hasEdge(t,e){if(arguments.length===1){const i=""+t;return this._edges.has(i)}else if(arguments.length===2){t=""+t,e=""+e;const i=this._nodes.get(t);return i?typeof i.out<"u"&&i.out.hasOwnProperty(e)||typeof i.undirected<"u"&&i.undirected.hasOwnProperty(e):!1}throw new dt(`Graph.hasEdge: invalid arity (${arguments.length}, instead of 1 or 2). You can either ask for an edge id or for the existence of an edge between a source & a target.`)}directedEdge(t,e){if(this.type==="undirected")return;if(t=""+t,e=""+e,this.multi)throw new Tt("Graph.directedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.directedEdges instead.");const i=this._nodes.get(t);if(!i)throw new at(`Graph.directedEdge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new at(`Graph.directedEdge: could not find the "${e}" target node in the graph.`);const r=i.out&&i.out[e]||void 0;if(r)return r.key}undirectedEdge(t,e){if(this.type==="directed")return;if(t=""+t,e=""+e,this.multi)throw new Tt("Graph.undirectedEdge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.undirectedEdges instead.");const i=this._nodes.get(t);if(!i)throw new at(`Graph.undirectedEdge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new at(`Graph.undirectedEdge: could not find the "${e}" target node in the graph.`);const r=i.undirected&&i.undirected[e]||void 0;if(r)return r.key}edge(t,e){if(this.multi)throw new Tt("Graph.edge: this method is irrelevant with multigraphs since there might be multiple edges between source & target. See #.edges instead.");t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.edge: could not find the "${t}" source node in the graph.`);if(!this._nodes.has(e))throw new at(`Graph.edge: could not find the "${e}" target node in the graph.`);const r=i.out&&i.out[e]||i.undirected&&i.undirected[e]||void 0;if(r)return r.key}areDirectedNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areDirectedNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in i.in||e in i.out}areOutNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areOutNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in i.out}areInNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areInNeighbors: could not find the "${t}" node in the graph.`);return this.type==="undirected"?!1:e in i.in}areUndirectedNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areUndirectedNeighbors: could not find the "${t}" node in the graph.`);return this.type==="directed"?!1:e in i.undirected}areNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&(e in i.in||e in i.out)||this.type!=="directed"&&e in i.undirected}areInboundNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areInboundNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&e in i.in||this.type!=="directed"&&e in i.undirected}areOutboundNeighbors(t,e){t=""+t,e=""+e;const i=this._nodes.get(t);if(!i)throw new at(`Graph.areOutboundNeighbors: could not find the "${t}" node in the graph.`);return this.type!=="undirected"&&e in i.out||this.type!=="directed"&&e in i.undirected}inDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.inDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree}outDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.outDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.outDegree}directedDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.directedDegree: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree}undirectedDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.undirectedDegree: could not find the "${t}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree}inboundDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.inboundDegree: could not find the "${t}" node in the graph.`);let i=0;return this.type!=="directed"&&(i+=e.undirectedDegree),this.type!=="undirected"&&(i+=e.inDegree),i}outboundDegree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.outboundDegree: could not find the "${t}" node in the graph.`);let i=0;return this.type!=="directed"&&(i+=e.undirectedDegree),this.type!=="undirected"&&(i+=e.outDegree),i}degree(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.degree: could not find the "${t}" node in the graph.`);let i=0;return this.type!=="directed"&&(i+=e.undirectedDegree),this.type!=="undirected"&&(i+=e.inDegree+e.outDegree),i}inDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.inDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree-e.directedLoops}outDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.outDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.outDegree-e.directedLoops}directedDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.directedDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="undirected"?0:e.inDegree+e.outDegree-e.directedLoops*2}undirectedDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.undirectedDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);return this.type==="directed"?0:e.undirectedDegree-e.undirectedLoops*2}inboundDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.inboundDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let i=0,r=0;return this.type!=="directed"&&(i+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(i+=e.inDegree,r+=e.directedLoops),i-r}outboundDegreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.outboundDegreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let i=0,r=0;return this.type!=="directed"&&(i+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(i+=e.outDegree,r+=e.directedLoops),i-r}degreeWithoutSelfLoops(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.degreeWithoutSelfLoops: could not find the "${t}" node in the graph.`);let i=0,r=0;return this.type!=="directed"&&(i+=e.undirectedDegree,r+=e.undirectedLoops*2),this.type!=="undirected"&&(i+=e.inDegree+e.outDegree,r+=e.directedLoops*2),i-r}source(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.source: could not find the "${t}" edge in the graph.`);return e.source.key}target(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.target: could not find the "${t}" edge in the graph.`);return e.target.key}extremities(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.extremities: could not find the "${t}" edge in the graph.`);return[e.source.key,e.target.key]}opposite(t,e){t=""+t,e=""+e;const i=this._edges.get(e);if(!i)throw new at(`Graph.opposite: could not find the "${e}" edge in the graph.`);const r=i.source.key,s=i.target.key;if(t===r)return s;if(t===s)return r;throw new at(`Graph.opposite: the "${t}" node is not attached to the "${e}" edge (${r}, ${s}).`)}hasExtremity(t,e){t=""+t,e=""+e;const i=this._edges.get(t);if(!i)throw new at(`Graph.hasExtremity: could not find the "${t}" edge in the graph.`);return i.source.key===e||i.target.key===e}isUndirected(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.isUndirected: could not find the "${t}" edge in the graph.`);return e.undirected}isDirected(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.isDirected: could not find the "${t}" edge in the graph.`);return!e.undirected}isSelfLoop(t){t=""+t;const e=this._edges.get(t);if(!e)throw new at(`Graph.isSelfLoop: could not find the "${t}" edge in the graph.`);return e.source===e.target}addNode(t,e){return db(this,t,e).key}mergeNode(t,e){if(e&&!Ne(e))throw new dt(`Graph.mergeNode: invalid attributes. Expecting an object but got "${e}"`);t=""+t,e=e||{};let i=this._nodes.get(t);return i?(e&&(Me(i.attributes,e),this.emit("nodeAttributesUpdated",{type:"merge",key:t,attributes:i.attributes,data:e})),[t,!1]):(i=new this.NodeDataClass(t,e),this._nodes.set(t,i),this.emit("nodeAdded",{key:t,attributes:e}),[t,!0])}updateNode(t,e){if(e&&typeof e!="function")throw new dt(`Graph.updateNode: invalid updater function. Expecting a function but got "${e}"`);t=""+t;let i=this._nodes.get(t);if(i){if(e){const s=i.attributes;i.attributes=e(s),this.emit("nodeAttributesUpdated",{type:"replace",key:t,attributes:i.attributes})}return[t,!1]}const r=e?e({}):{};return i=new this.NodeDataClass(t,r),this._nodes.set(t,i),this.emit("nodeAdded",{key:t,attributes:r}),[t,!0]}dropNode(t){t=""+t;const e=this._nodes.get(t);if(!e)throw new at(`Graph.dropNode: could not find the "${t}" node in the graph.`);let i;if(this.type!=="undirected"){for(const r in e.out){i=e.out[r];do hr(this,i),i=i.next;while(i)}for(const r in e.in){i=e.in[r];do hr(this,i),i=i.next;while(i)}}if(this.type!=="directed")for(const r in e.undirected){i=e.undirected[r];do hr(this,i),i=i.next;while(i)}this._nodes.delete(t),this.emit("nodeDropped",{key:t,attributes:e.attributes})}dropEdge(t){let e;if(arguments.length>1){const i=""+arguments[0],r=""+arguments[1];if(e=_n(this,i,r,this.type),!e)throw new at(`Graph.dropEdge: could not find the "${i}" -> "${r}" edge in the graph.`)}else if(t=""+t,e=this._edges.get(t),!e)throw new at(`Graph.dropEdge: could not find the "${t}" edge in the graph.`);return hr(this,e),this}dropDirectedEdge(t,e){if(arguments.length<2)throw new Tt("Graph.dropDirectedEdge: it does not make sense to try and drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new Tt("Graph.dropDirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");t=""+t,e=""+e;const i=_n(this,t,e,"directed");if(!i)throw new at(`Graph.dropDirectedEdge: could not find a "${t}" -> "${e}" edge in the graph.`);return hr(this,i),this}dropUndirectedEdge(t,e){if(arguments.length<2)throw new Tt("Graph.dropUndirectedEdge: it does not make sense to drop a directed edge by key. What if the edge with this key is undirected? Use #.dropEdge for this purpose instead.");if(this.multi)throw new Tt("Graph.dropUndirectedEdge: cannot use a {source,target} combo when dropping an edge in a MultiGraph since we cannot infer the one you want to delete as there could be multiple ones.");const i=_n(this,t,e,"undirected");if(!i)throw new at(`Graph.dropUndirectedEdge: could not find a "${t}" -> "${e}" edge in the graph.`);return hr(this,i),this}clear(){this._edges.clear(),this._nodes.clear(),this._resetInstanceCounters(),this.emit("cleared")}clearEdges(){const t=this._nodes.values();let e;for(;e=t.next(),e.done!==!0;)e.value.clear();this._edges.clear(),this._resetInstanceCounters(),this.emit("edgesCleared")}getAttribute(t){return this._attributes[t]}getAttributes(){return this._attributes}hasAttribute(t){return this._attributes.hasOwnProperty(t)}setAttribute(t,e){return this._attributes[t]=e,this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this}updateAttribute(t,e){if(typeof e!="function")throw new dt("Graph.updateAttribute: updater should be a function.");const i=this._attributes[t];return this._attributes[t]=e(i),this.emit("attributesUpdated",{type:"set",attributes:this._attributes,name:t}),this}removeAttribute(t){return delete this._attributes[t],this.emit("attributesUpdated",{type:"remove",attributes:this._attributes,name:t}),this}replaceAttributes(t){if(!Ne(t))throw new dt("Graph.replaceAttributes: provided attributes are not a plain object.");return this._attributes=t,this.emit("attributesUpdated",{type:"replace",attributes:this._attributes}),this}mergeAttributes(t){if(!Ne(t))throw new dt("Graph.mergeAttributes: provided attributes are not a plain object.");return Me(this._attributes,t),this.emit("attributesUpdated",{type:"merge",attributes:this._attributes,data:t}),this}updateAttributes(t){if(typeof t!="function")throw new dt("Graph.updateAttributes: provided updater is not a function.");return this._attributes=t(this._attributes),this.emit("attributesUpdated",{type:"update",attributes:this._attributes}),this}updateEachNodeAttributes(t,e){if(typeof t!="function")throw new dt("Graph.updateEachNodeAttributes: expecting an updater function.");if(e&&!Xc(e))throw new dt("Graph.updateEachNodeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const i=this._nodes.values();let r,s;for(;r=i.next(),r.done!==!0;)s=r.value,s.attributes=t(s.key,s.attributes);this.emit("eachNodeAttributesUpdated",{hints:e||null})}updateEachEdgeAttributes(t,e){if(typeof t!="function")throw new dt("Graph.updateEachEdgeAttributes: expecting an updater function.");if(e&&!Xc(e))throw new dt("Graph.updateEachEdgeAttributes: invalid hints. Expecting an object having the following shape: {attributes?: [string]}");const i=this._edges.values();let r,s,o,a;for(;r=i.next(),r.done!==!0;)s=r.value,o=s.source,a=s.target,s.attributes=t(s.key,s.attributes,o.key,a.key,o.attributes,a.attributes,s.undirected);this.emit("eachEdgeAttributesUpdated",{hints:e||null})}forEachAdjacencyEntry(t){if(typeof t!="function")throw new dt("Graph.forEachAdjacencyEntry: expecting a callback.");ia(!1,!1,!1,this,t)}forEachAdjacencyEntryWithOrphans(t){if(typeof t!="function")throw new dt("Graph.forEachAdjacencyEntryWithOrphans: expecting a callback.");ia(!1,!1,!0,this,t)}forEachAssymetricAdjacencyEntry(t){if(typeof t!="function")throw new dt("Graph.forEachAssymetricAdjacencyEntry: expecting a callback.");ia(!1,!0,!1,this,t)}forEachAssymetricAdjacencyEntryWithOrphans(t){if(typeof t!="function")throw new dt("Graph.forEachAssymetricAdjacencyEntryWithOrphans: expecting a callback.");ia(!1,!0,!0,this,t)}nodes(){return typeof Array.from=="function"?Array.from(this._nodes.keys()):ff(this._nodes.keys(),this._nodes.size)}forEachNode(t){if(typeof t!="function")throw new dt("Graph.forEachNode: expecting a callback.");const e=this._nodes.values();let i,r;for(;i=e.next(),i.done!==!0;)r=i.value,t(r.key,r.attributes)}findNode(t){if(typeof t!="function")throw new dt("Graph.findNode: expecting a callback.");const e=this._nodes.values();let i,r;for(;i=e.next(),i.done!==!0;)if(r=i.value,t(r.key,r.attributes))return r.key}mapNodes(t){if(typeof t!="function")throw new dt("Graph.mapNode: expecting a callback.");const e=this._nodes.values();let i,r;const s=new Array(this.order);let o=0;for(;i=e.next(),i.done!==!0;)r=i.value,s[o++]=t(r.key,r.attributes);return s}someNode(t){if(typeof t!="function")throw new dt("Graph.someNode: expecting a callback.");const e=this._nodes.values();let i,r;for(;i=e.next(),i.done!==!0;)if(r=i.value,t(r.key,r.attributes))return!0;return!1}everyNode(t){if(typeof t!="function")throw new dt("Graph.everyNode: expecting a callback.");const e=this._nodes.values();let i,r;for(;i=e.next(),i.done!==!0;)if(r=i.value,!t(r.key,r.attributes))return!1;return!0}filterNodes(t){if(typeof t!="function")throw new dt("Graph.filterNodes: expecting a callback.");const e=this._nodes.values();let i,r;const s=[];for(;i=e.next(),i.done!==!0;)r=i.value,t(r.key,r.attributes)&&s.push(r.key);return s}reduceNodes(t,e){if(typeof t!="function")throw new dt("Graph.reduceNodes: expecting a callback.");if(arguments.length<2)throw new dt("Graph.reduceNodes: missing initial value. You must provide it because the callback takes more than one argument and we cannot infer the initial value from the first iteration, as you could with a simple array.");let i=e;const r=this._nodes.values();let s,o;for(;s=r.next(),s.done!==!0;)o=s.value,i=t(i,o.key,o.attributes);return i}nodeEntries(){const t=this._nodes.values();return new vn(()=>{const e=t.next();if(e.done)return e;const i=e.value;return{value:{node:i.key,attributes:i.attributes},done:!1}})}export(){const t=new Array(this._nodes.size);let e=0;this._nodes.forEach((r,s)=>{t[e++]=sb(s,r)});const i=new Array(this._edges.size);return e=0,this._edges.forEach((r,s)=>{i[e++]=ab(this.type,s,r)}),{options:{type:this.type,multi:this.multi,allowSelfLoops:this.allowSelfLoops},attributes:this.getAttributes(),nodes:t,edges:i}}import(t,e=!1){if(t instanceof re)return t.forEachNode((h,l)=>{e?this.mergeNode(h,l):this.addNode(h,l)}),t.forEachEdge((h,l,u,c,f,d,g)=>{e?g?this.mergeUndirectedEdgeWithKey(h,u,c,l):this.mergeDirectedEdgeWithKey(h,u,c,l):g?this.addUndirectedEdgeWithKey(h,u,c,l):this.addDirectedEdgeWithKey(h,u,c,l)}),this;if(!Ne(t))throw new dt("Graph.import: invalid argument. Expecting a serialized graph or, alternatively, a Graph instance.");if(t.attributes){if(!Ne(t.attributes))throw new dt("Graph.import: invalid attributes. Expecting a plain object.");e?this.mergeAttributes(t.attributes):this.replaceAttributes(t.attributes)}let i,r,s,o,a;if(t.nodes){if(s=t.nodes,!Array.isArray(s))throw new dt("Graph.import: invalid nodes. Expecting an array.");for(i=0,r=s.length;i<r;i++){o=s[i],ob(o);const{key:h,attributes:l}=o;e?this.mergeNode(h,l):this.addNode(h,l)}}if(t.edges){let h=!1;if(this.type==="undirected"&&(h=!0),s=t.edges,!Array.isArray(s))throw new dt("Graph.import: invalid edges. Expecting an array.");for(i=0,r=s.length;i<r;i++){a=s[i],hb(a);const{source:l,target:u,attributes:c,undirected:f=h}=a;let d;"key"in a?(d=e?f?this.mergeUndirectedEdgeWithKey:this.mergeDirectedEdgeWithKey:f?this.addUndirectedEdgeWithKey:this.addDirectedEdgeWithKey,d.call(this,a.key,l,u,c)):(d=e?f?this.mergeUndirectedEdge:this.mergeDirectedEdge:f?this.addUndirectedEdge:this.addDirectedEdge,d.call(this,l,u,c))}}return this}nullCopy(t){const e=new re(Me({},this._options,t));return e.replaceAttributes(Me({},this.getAttributes())),e}emptyCopy(t){const e=this.nullCopy(t);return this._nodes.forEach((i,r)=>{const s=Me({},i.attributes);i=new e.NodeDataClass(r,s),e._nodes.set(r,i)}),e}copy(t){if(t=t||{},typeof t.type=="string"&&t.type!==this.type&&t.type!=="mixed")throw new Tt(`Graph.copy: cannot create an incompatible copy from "${this.type}" type to "${t.type}" because this would mean losing information about the current graph.`);if(typeof t.multi=="boolean"&&t.multi!==this.multi&&t.multi!==!0)throw new Tt("Graph.copy: cannot create an incompatible copy by downgrading a multi graph to a simple one because this would mean losing information about the current graph.");if(typeof t.allowSelfLoops=="boolean"&&t.allowSelfLoops!==this.allowSelfLoops&&t.allowSelfLoops!==!0)throw new Tt("Graph.copy: cannot create an incompatible copy from a graph allowing self loops to one that does not because this would mean losing information about the current graph.");const e=this.emptyCopy(t),i=this._edges.values();let r,s;for(;r=i.next(),r.done!==!0;)s=r.value,xf(e,"copy",!1,s.undirected,s.key,s.source.key,s.target.key,Me({},s.attributes));return e}toJSON(){return this.export()}toString(){return"[object Graph]"}inspect(){const t={};this._nodes.forEach((s,o)=>{t[o]=s.attributes});const e={},i={};this._edges.forEach((s,o)=>{const a=s.undirected?"--":"->";let h="",l=s.source.key,u=s.target.key,c;s.undirected&&l>u&&(c=l,l=u,u=c);const f=`(${l})${a}(${u})`;o.startsWith("geid_")?this.multi&&(typeof i[f]>"u"?i[f]=0:i[f]++,h+=`${i[f]}. `):h+=`[${o}]: `,h+=f,e[h]=s.attributes});const r={};for(const s in this)this.hasOwnProperty(s)&&!qc.has(s)&&typeof this[s]!="function"&&typeof s!="symbol"&&(r[s]=this[s]);return r.attributes=this._attributes,r.nodes=t,r.edges=e,hn(r,"constructor",this.constructor),r}}typeof Symbol<"u"&&(re.prototype[Symbol.for("nodejs.util.inspect.custom")]=re.prototype.inspect);ub.forEach(n=>{["add","merge","update"].forEach(t=>{const e=n.name(t),i=t==="add"?xf:pb;n.generateKey?re.prototype[e]=function(r,s,o){return i(this,e,!0,(n.type||this.type)==="undirected",null,r,s,o,t==="update")}:re.prototype[e]=function(r,s,o,a){return i(this,e,!1,(n.type||this.type)==="undirected",r,s,o,a,t==="update")}})});E1(re);I1(re);K1(re);rb(re);class Sf extends re{constructor(t){const e=Me({type:"directed"},t);if("multi"in e&&e.multi!==!1)throw new dt("DirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="directed")throw new dt('DirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}class Ef extends re{constructor(t){const e=Me({type:"undirected"},t);if("multi"in e&&e.multi!==!1)throw new dt("UndirectedGraph.from: inconsistent indication that the graph should be multi in given options!");if(e.type!=="undirected")throw new dt('UndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}class bf extends re{constructor(t){const e=Me({multi:!0},t);if("multi"in e&&e.multi!==!0)throw new dt("MultiGraph.from: inconsistent indication that the graph should be simple in given options!");super(e)}}class wf extends re{constructor(t){const e=Me({type:"directed",multi:!0},t);if("multi"in e&&e.multi!==!0)throw new dt("MultiDirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="directed")throw new dt('MultiDirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}class Af extends re{constructor(t){const e=Me({type:"undirected",multi:!0},t);if("multi"in e&&e.multi!==!0)throw new dt("MultiUndirectedGraph.from: inconsistent indication that the graph should be simple in given options!");if(e.type!=="undirected")throw new dt('MultiUndirectedGraph.from: inconsistent "'+e.type+'" type in given options!');super(e)}}function Dr(n){n.from=function(t,e){const i=Me({},t.options,e),r=new n(i);return r.import(t),r}}Dr(re);Dr(Sf);Dr(Ef);Dr(bf);Dr(wf);Dr(Af);re.Graph=re;re.DirectedGraph=Sf;re.UndirectedGraph=Ef;re.MultiGraph=bf;re.MultiDirectedGraph=wf;re.MultiUndirectedGraph=Af;re.InvalidArgumentsGraphError=dt;re.NotFoundGraphError=at;re.UsageGraphError=Tt;let Jr=new mn,la=new mn,ca=new mn,Qo=new mn,th=new mn,ua=new mn,ve=new mn;ve.visible=!1;const Te={graticuleColor:"#2f2f2f0b",ambientLightColor:"#404040",directionalLightColor:"#ffffff",backgroundColor:"#000000",polygonColor:"#FF1493",pyramidColorFM:"#FF5F1F",pyramidColorCellular:"#FFFF00",mstFmColor:"#FF5F1F",mstCellColor:"#FFFF00",boundingBoxColor:"#0000FF",contoursLabelColor:"#00ff00",cellColor:"#FF1493"},mb="+proj=longlat +lat_0=40 +lon_0=-76.58333333333333 +k=0.9999375 +x_0=249999.9998983998 +y_0=0 +ellps=GRS80 +datum=NAD83 +to_meter=0.3048006096012192 +no_defs";Qe.defs("EPSG:2261",mb);function Bn(n,t){if(!Number.isFinite(n)||!Number.isFinite(t))throw new Error(`Invalid coordinates: longitude (${n}), latitude (${t})`);return Qe("EPSG:2261").forward([n,t])}let Re,Pt,dn,Zt,ss,$r=new Gv,wa=new gt,gb=[],eh=!1;const _b=.005;let Kn=8;const Tr=10,vb=new Na({color:16711680}),Tf=new ke,as=new fh(Tf,vb);let Uo=!1;function yb(){Re=new cv,Pt=new fn(75,window.innerWidth/window.innerHeight,.1,1e3),Pt.up.set(0,0,1),dn=new Su({antialias:!1});var n=1,t=window.innerWidth*n,e=window.innerHeight*n;dn.setSize(t,e,!1),dn.setPixelRatio(window.devicePixelRatio*n),document.getElementById("three-container").appendChild(dn.domElement),Tf.setAttribute("position",new gn(new Float32Array(6),3)),Re.add(as),as.scale.set(1,1,1),as.material.linewidth=2,Zt=new Hv(Pt,dn.domElement),Zt.screenSpacePanning=!1,Zt.enableRotate=!1,Zt.enableDamping=!0,Zt.dampingFactor=.05,Zt.minPolarAngle=0,Zt.maxPolarAngle=Math.PI/2-.05,Zt.maxDistance=5.5,Zt.minDistance=.2;const i=new Ru;Pt.add(i),Pt.position.distanceTo(Zt.target);let r=new Uv(Te.ambientLightColor);Re.add(r);let s=new Iv(Te.directionalLightColor,.5);s.position.set(0,1,0),Re.add(s);const o=4.5,a=9;Re.fog=new uh(Te.backgroundColor,o,a),Pt.far=a,Pt.updateProjectionMatrix();const h=document.getElementById("resolution-slider");Mb(Kn,h),dn.setClearColor(Te.backgroundColor),window.addEventListener("resize",za,!1),wb(),Ph()}function Lh(){var n=Math.round(window.innerWidth*(Kn/Tr)),t=Math.round(window.innerHeight*(Kn/Tr));document.getElementById("resolution-display").textContent=`resolution: ${n*10} x ${t*10}px`}document.getElementById("resolution-slider").addEventListener("input",function(n){Kn=.2+parseFloat(n.target.value)/Tr*.8,za(),Lh()});za();function Mb(n,t){let e="[";for(let i=0;i<Tr;i++)e+=i<n?"#":"-";e+="]",t.textContent=e}function za(){Kn=.2+parseFloat(document.getElementById("resolution-slider").value)/Tr*.8;var n=Math.max(1,window.innerWidth*Kn),t=Math.max(1,window.innerHeight*Kn);dn&&Pt&&(dn.setSize(n,t,!1),dn.setPixelRatio(window.devicePixelRatio*Kn),Pt.aspect=n/t,Pt.updateProjectionMatrix()),Lh(),Ph()}let Oo=!1;document.addEventListener("keydown",function(n){if(n.key==="h"||n.key==="H"){const t=document.getElementById("three-container");Oo?(t.classList.remove("cursor-transparent"),t.classList.add("cursor-default")):(t.classList.remove("cursor-default"),t.classList.add("cursor-transparent")),Oo=!Oo}});function Ph(){if(Pt){const r=(window.innerWidth-600)/600,s=90+(60-90)*Math.max(0,Math.min(1,r));Pt.fov=s,Pt.updateProjectionMatrix()}}Ph();function Cf(){$r.setFromCamera(wa,Pt);const n=new D;$r.ray.direction.normalize();const t=$r.ray.origin.clone(),e=t.clone().add(n.clone().multiplyScalar(1e3)),i=as.geometry.attributes.position.array;i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=e.x,i[4]=e.y,i[5]=e.z,as.geometry.attributes.position.needsUpdate=!0,$r.setFromCamera(wa,Pt);const r=$r.intersectObjects(gb,!0);if(r.length>0){let s=r[0].object;s.name.startsWith("polygon-")&&(s.material.opacity=1)}}function Rf(){if(requestAnimationFrame(Rf),Cf(),Zt.update(),Pt&&Zt&&eh){const n=Pt.position.distanceTo(Zt.target),t=_b,e=new D().subVectors(Pt.position,Zt.target),i=new D(0,0,1),r=new In().setFromAxisAngle(i,t);e.applyQuaternion(r),Pt.position.copy(Zt.target).add(e.setLength(n)),Pt.lookAt(Zt.target)}Cb(),dn.render(Re,Pt)}async function xb(){yb(),document.getElementById("start-button").style.display="none",document.getElementById("info-container").style.display="none",document.getElementById("info-button").style.display="none";try{await Gb()}catch(n){console.error("Error during initialization:",n)}Kn=.2+parseFloat(document.getElementById("resolution-slider").value)/Tr*.8,za(),Lh(),document.getElementById("progress-bar").style.display="none",document.getElementById("start-button").style.display="block"}function Sb(){const n=document.getElementById("three-container"),t=document.getElementById("info-button");dn.render(Re,Pt),requestAnimationFrame(()=>{n.style.visibility="visible",n.style.opacity="1",n.style.pointerEvents="auto",t.style.pointerEvents="auto",Rf(),Nf(!1),document.addEventListener("keydown",Lf,!1)})}document.addEventListener("DOMContentLoaded",n=>{xb();const t=document.getElementById("start-button");document.getElementById("info-button"),t.addEventListener("click",()=>{Sb(),t.remove()})});function Dh(){const n=document.getElementById("info-container"),t=document.getElementById("info-button");n.style.opacity="0",n.style.pointerEvents="none",t.style.opacity=0,t.style.transition="opacity 10ms ease-in-out",t.style.display="block",setTimeout(()=>{t.style.opacity=1},90)}document.getElementById("hide-legend").addEventListener("click",Dh);function Eb(){const n=document.getElementById("info-container"),t=document.getElementById("info-button");n.style.opacity="1",n.style.visibility="visible",n.style.pointerEvents="auto",t.style.display="none",n.style.display="block",n.classList.remove("hidden")}document.getElementById("info-container").addEventListener("transitionend",function(n){n.propertyName==="opacity"&&getComputedStyle(this).opacity==0&&(this.style.visibility="hidden")});document.addEventListener("mousedown",n=>{!document.getElementById("info-container").contains(n.target)&&n.target.id!=="info-button"&&Dh()});document.addEventListener("keypress",Dh);document.getElementById("info-button").addEventListener("click",function(){Eb()});function bb(){Uo=!Uo,ve.children.forEach(n=>{n.material&&(n.material.wireframe=Uo,n.material.needsUpdate=!0)})}function wb(){const n=document.getElementById("legend-controls");[{name:"fm transmitter points",color:Te.pyramidColorFM},{name:"fm minimum spanning tree lines",color:Te.mstFmColor},{name:"cell transmitter points",color:Te.pyramidColorCellular},{name:"cell MST lines",color:Te.mstCellColor},{name:"contour lines",color:Te.contoursLabelColor},{name:"fm propagation curves",color:Te.polygonColor},{name:"cell dead zones",color:Te.cellColor}].forEach(e=>{const i=document.createElement("div");i.className="custom-checkbox-container";const r=document.createElement("input");r.type="checkbox",r.id=e.name,r.className="hidden-checkbox",r.checked=!0;const s=document.createElement("label");s.htmlFor=e.name,s.className="custom-checkbox-label";const o=document.createElement("span");o.className="custom-checkbox";const a=document.createElement("span");a.textContent=e.name,a.style.color=e.color,s.appendChild(o),s.appendChild(a),i.appendChild(r),i.appendChild(s),n.appendChild(i),r.addEventListener("change",function(){console.log(`Toggling visibility for ${e.name}`),Li(e.name,this.checked)}),e.name==="fm propagation curves"&&(r.checked=!1)})}const fi={"fm transmitter points":Jr,"fm minimum spanning tree lines":la,"cell transmitter points":ca,"cell MST lines":Qo,"contour lines":th,"fm propagation curves":ua,"cell dead zones":ve};function Ab(n){ve.visible=n,ve.children.forEach(t=>{t.children.forEach(e=>{e.visible=n})})}function Li(n,t){if(fi[n]){fi[n].visible=t,n==="cell dead zones"&&ve.children.forEach(i=>{i.visible=t,i.children.forEach(r=>{r.visible=t})});const e=document.getElementById(n);e&&(e.checked=t)}else console.warn(`Layer "${n}" not found in the scene.`);dn.render(Re,Pt)}let Xr;document.addEventListener("click",function n(){Xr||(Xr=new Ru,Pt.add(Xr),Xr.context.state==="suspended"&&Xr.context.resume()),document.removeEventListener("click",n)});function Tb(n){wa.x=n.clientX/window.innerWidth*2-1,wa.y=-(n.clientY/window.innerHeight)*2+1,Cf()}window.addEventListener("mousemove",Tb,!1);const li=.05;function Lf(n){switch(n.key){case"1":Li("fm transmitter points",!fi["fm transmitter points"].visible);break;case"2":Li("fm minimum spanning tree lines",!fi["fm minimum spanning tree lines"].visible);break;case"3":Li("cell transmitter points",!fi["cell transmitter points"].visible);break;case"4":Li("cell MST lines",!fi["cell MST lines"].visible);break;case"5":Li("contour lines",!fi["contour lines"].visible);break;case"6":Li("fm propagation curves",!fi["fm propagation curves"].visible);break;case"7":ve.visible=!ve.visible,ve.children.forEach(s=>{s.visible=ve.visible,s.children.forEach(o=>o.visible=ve.visible)}),console.log(`Cell Service Mesh visibility: ${ve.visible}`);const r=document.getElementById("cell dead zones");r&&(r.checked=ve.visible);break}console.log(`Toggling Cell Service Mesh to ${!isCellMeshVisible}`),console.log("Before toggle: ",ve.children.map(r=>r.children.map(s=>s.visible))),Ab(!isCellMeshVisible),console.log("After toggle: ",ve.children.map(r=>r.children.map(s=>s.visible)));const t=.025,e=new D,i=new D(1,0,0);switch(n.key){case"q":bb();break;case"w":Pt.position.y+=li,Zt.target.y+=li;break;case"s":Pt.position.y-=li,Zt.target.y-=li;break;case"a":Pt.position.x-=li,Zt.target.x-=li;break;case"d":Pt.position.x+=li,Zt.target.x+=li;break;case"g":case"t":const r=(n.key==="g"?1:-1)*t;e.copy(Pt.position).sub(Zt.target);const o=e.angleTo(new D(0,0,1))+r;if(o>=0&&o<=Math.PI/2){const a=new In().setFromAxisAngle(i,r);e.applyQuaternion(a),Pt.position.copy(Zt.target).add(e),Pt.lookAt(Zt.target)}break}if(n.key==="y"||n.key==="Y"){eh=!eh,n.preventDefault();return}Zt.update(),n.preventDefault()}document.addEventListener("keydown",Lf,!1);function Cb(){if(Pt&&Zt&&Zt.target){const n=Pt.position.distanceTo(Zt.target),t=3;ve.visible=n<=t}else console.log("Camera or controls not defined.")}function jc(n){let t=1/0,e=-1/0,i=1/0,r=-1/0;const s=o=>{o.forEach(a=>{if(Array.isArray(a[0]))s(a);else{const[h,l]=a,[u,c]=Bn(h,l);t=Math.min(t,u),e=Math.max(e,u),i=Math.min(i,c),r=Math.max(r,c)}})};return n.features.forEach(o=>{s(o.geometry.coordinates)}),{min:new D(t-2,i-2,-1/0),max:new D(e+2,r+2,1/0)}}function Rb(n,t){n.addEventListener("change",()=>{const e=Pt.position.distanceTo(n.target);Pt.position.clamp(t.min,t.max),n.target.clamp(t.min,t.max);const i=new D().subVectors(Pt.position,n.target).normalize();Pt.position.copy(n.target).add(i.multiplyScalar(e))})}function Nh(n){return new D((n.min.x+n.max.x)/2,(n.min.y+n.max.y)/2,0)}function Pf(n){return new D(n.max.x-n.min.x,n.max.y-n.min.y,n.max.z-n.min.z)}function Df(n){Nh(n);const t=Pf(n),e=Math.max(t.x,t.y),i=Pt.fov*(Math.PI/100);let r=Math.abs(e/2/Math.tan(i/2));return r*=1.1,r}function Nf(n){if(!(!Zt||!Pt))if(n){if(!ss){console.error("globalBoundingBox is not set");return}const t=Nh(ss),e=Df(ss);Pt.position.set(t.x,t.y,e),Pt.lookAt(t.x,t.y,0);const i=new D(0,1,0);Pt.up.copy(i),Pt.up.set(0,1,0),Pt.lookAt(t),Zt.enablePan=!0,Zt.enableRotate=!1,Zt.update()}else Pt.up.set(0,0,1),Zt.enableRotate=!0,Zt.update()}Nf(!1);const ei=35e-5;function Lb(n,t,e){const i=[{stop:0,color:new $t("#0000ff")},{stop:.2,color:new $t("#007fff")},{stop:.4,color:new $t("#00ff95")},{stop:.5,color:new $t("#00ff00")},{stop:.6,color:new $t("#bfff00")},{stop:.8,color:new $t("#ffbf00")},{stop:1,color:new $t("#ff0000")}],r=(n-t)/(e-t);let s=i[0],o=i[i.length-1];for(let h=0;h<i.length-1;h++)if(r>=i[h].stop&&r<=i[h+1].stop){s=i[h],o=i[h+1];break}return s.color.clone().lerp(o.color,(r-s.stop)/(o.stop-s.stop))}let nh=1/0;function Pb(n){return new Promise((t,e)=>{if(!n||!n.features){e("Invalid GeoJSON data");return}const i=n.features.map(o=>o.properties.contour),r=Math.min(...i);nh=Math.min(nh,r);const s=Math.max(...i);n.features.forEach((o,a)=>{const h=o.properties.contour,l=o.geometry.coordinates,u=Lb(h,r,s);let c=new Na({color:u});const f=(d,g)=>{let v=[];if(d.forEach(p=>{if(!Array.isArray(p)||p.length!==2||p.some(_=>isNaN(_))){console.error(`Feature ${a} has invalid coordinates`,p);return}const[m,E]=p;try{const[_,y]=Bn(m,E),x=g*ei;v.push(_,y,x)}catch(_){console.error(`Feature ${a} error in toStatePlane:`,_.message)}}),v.length>0){const p=new ke;p.setAttribute("position",new ze(v,3));const m=new fh(p,c);th.add(m)}};o.geometry.type==="LineString"?f(l,h):o.geometry.type==="MultiLineString"?l.forEach(d=>{f(d,h)}):console.error(`Unsupported geometry type: ${o.geometry.type}`)});try{Re.add(th),t()}catch(o){e(`Error in addContourLines: ${o.message}`)}})}function Db(n){return new Promise((t,e)=>{try{ve.clear(),console.log("Processing GeoJSON features for mesh generation by groups.");const i={};n.features.forEach(r=>{const s=r.properties.Group_ID,[o,a]=r.geometry.coordinates,[h,l]=Bn(o,a),u=r.properties.Z*ei;i[s]||(i[s]=[]),i[s].push(new D(h,l,u))}),Object.keys(i).forEach(r=>{const s=i[r];var o=Sh.from(s.map(g=>[g.x,g.y])),a=[];for(let g=0;g<o.triangles.length;g++)a.push(o.triangles[g]);var h=new ke().setFromPoints(s);h.setIndex(a),h.computeVertexNormals();const l=new Un({color:0,transparent:!0,opacity:.5,side:Tn}),u=new Un({color:Te.cellColor,transparent:!1,wireframe:!0,side:Tn});var c=new Ge(h,l);c.name="fillMesh-"+r;var f=new Ge(h,u);f.name="wireframeMesh-"+r;var d=new mn;d.add(c),d.add(f),ve.add(d)}),Re.add(ve),ve.visible=!1}catch(i){e(`Error in cellServiceMesh: ${i.message}`)}})}function Nb(n,t=10){return new Promise((e,i)=>{try{for(let r=0;r<n.features.length;r+=t){const s=n.features[r],o=new Un({color:Te.polygonColor,transparent:!0,wireframe:!0,dithering:!0,opacity:.8,side:Tn});try{const a=s.geometry.coordinates[0],h=[];let l=new D(0,0,0);a.forEach(d=>{const[g,v]=Bn(d[0],d[1]),p=nh*ei;h.push(new D(g,v,p)),l.add(new D(g,v,p))}),l.divideScalar(a.length),h.unshift(l);const u=new ke,c=[];for(let d=1;d<=a.length;d++)c.push(l.x,l.y,l.z),c.push(h[d%a.length].x,h[d%a.length].y,h[d%a.length].z),c.push(h[(d+1)%a.length].x,h[(d+1)%a.length].y,h[(d+1)%a.length].z);u.setAttribute("position",new ze(c,3)),u.computeVertexNormals();const f=new Ge(u,o);f.name="polygon-"+r,Re.add(f),ua.add(f)}catch(a){console.error(`Error processing feature at index ${r}:`,a)}}Re.add(ua),ua.visible=!1,e()}catch(r){i(`Error in addPolygons: ${r.message}`)}})}function Ib(n){return new Promise((t,e)=>{try{let s=new Un({color:Te.pyramidColorFM,wireframe:!0,transparent:!0,opacity:.5});const o=[];if(n.features.forEach(a=>{if(a.geometry.type==="Point"){const[h,l]=a.geometry.coordinates,u=a.properties.Z;try{const[c,f]=Bn(h,l),d=u*ei;if(c===null||f===null||isNaN(d)){console.error("Invalid point coordinates:",c,f,d);return}const g=new Ia(.003,.015,5);g.rotateX(Math.PI/2);const v=new Ge(g,s);v.position.set(c,f,d),Jr.add(v);const p="fm",m=Of(h,l,8,1e-5),E=Ff(` ${p} `,{fontsize:24,strokeColor:"rgba(255, 255, 255, 0.9)",strokeWidth:1}),_=.015*ei;E.position.set(c,f,d+_+m+.009),E.scale.set(.05,.025,1),Jr.add(E),o.push(new D(c,f,d))}catch(c){console.error(`Error projecting point: ${c.message}`)}}else console.error(`Unsupported geometry type for points: ${a.geometry.type}`)}),Re.add(Jr),Jr.visible=!1,o.length>0){const a=If(o);Uf(a,"#FFFFFF",Te.mstFmColor,25e-5,75e-5,la)}Re.add(la),la.visible=!1,t()}catch(i){console.error("Error in addFMTowerPts:",i),e(`Error in addFMTowerPts: ${i.message}`)}})}function Ub(n,t,e){return new Promise((i,r)=>{try{let a=new Un({color:Te.pyramidColorCellular,wireframe:!0,transparent:!0,opacity:.4});const h=[];if(n.features.forEach((l,u)=>{if(l.geometry.type==="Point"){const[c,f]=l.geometry.coordinates,d=l.properties.Z;try{const[g,v]=Bn(c,f),p=d*ei,m=new Ia(.003,.015,4);m.rotateX(Math.PI/2);const E=new Ge(m,a);E.position.set(g,v,p),ca.add(E);const _="cell",y=Of(c,f,8,1e-5),x=Ff(` ${_} `,{fontsize:24,strokeColor:"rgba(255, 255, 255, 0.9)",strokeWidth:1}),T=.015*ei;x.position.set(g,v,p+T+y+.009),x.scale.set(.05,.025,1),ca.add(x),h.push(new D(g,v,p))}catch(g){console.error("Error projecting point:",g.message)}}else console.error(`Unsupported geometry type for points: ${l.geometry.type}`)}),h.length>0){const l=If(h);Uf(l,"#FFFFFF",Te.mstCellColor,25e-5,75e-5,Qo)}Re.add(ca),Re.add(Qo),i()}catch(s){r(`Error in addCellTowerPts: ${s.message}`)}})}function Ob(){const n=new Pv,t=[-76.6,40.8],e=[-76.4,40.6],i=Bn(...t),r=Bn(...e),s=Math.abs(i[0]-r[0]),o=Math.abs(i[1]-r[1]),a=(i[0]+r[0])/2,h=(i[1]+r[1])/2;n.load("path/to/Merged_Viewshed_NYS_Resample.jpg",function(l){const u=new Pa(s,o),c=new Un({map:l}),f=new Ge(u,c);f.position.set(a,h,0),Re.add(f)})}function If(n){const t=n.length,e=new Array(t),i=new Array(t).fill(!1),r=new Array(t).fill(1/0);r[0]=0;const s=new Array(t).fill(-1);for(let o=0;o<t-1;o++){let a=-1;for(let h=0;h<t;h++)!i[h]&&(a===-1||r[h]<r[a])&&(a=h);i[a]=!0;for(let h=0;h<t;h++){const l=n[a].distanceTo(n[h]);!i[h]&&l<r[h]&&(s[h]=a,r[h]=l)}}for(let o=1;o<t;o++)e[o-1]={from:n[s[o]],to:n[o]};return e}function Uf(n,t,e,i,r,s){n.forEach(o=>{const a=new Tv;a.add(new Au(o.from,o.to));const h=new ya(a,1,i,8,!1),l=new Un({color:t}),u=new Ge(h,l);s.add(u);const c=new ya(a,1,r,8,!1),f=new Un({color:e,transparent:!0,opacity:.5}),d=new Ge(c,f);s.add(d)})}function Fb(n){return new Promise((t,e)=>{try{const i=new Na({color:Te.boundingBoxColor});n.features.forEach(r=>{const s=new ke,o=[];if(r.geometry.coordinates[0].forEach(h=>{const[l,u]=h,[c,f]=Bn(l,u),d=ei*20;o.push(new D(c,f,d))}),r.geometry.coordinates[0].length>2){const[h,l]=r.geometry.coordinates[0][0],[u,c]=Bn(h,l),f=ei*20;o.push(new D(u,c,f))}s.setFromPoints(o);const a=new fh(s,i);Re.add(a)}),t()}catch(i){e(`Error in visualizeBoundingBoxGeoJSON: ${i.message}`)}})}const qr={};function Bb(n,t,e){return`${n.toFixed(4)}:${t.toFixed(4)}:${e}`}function Of(n,t,e,i=4,r=1e-4){const s=Bb(n,t,e);if(!qr[s])qr[s]={count:1,labelContent:e};else{if(qr[s].labelContent===e)return 0;qr[s].count+=1}return(qr[s].count-1)*r}function Ff(n,t){t===void 0&&(t={});var e=t.hasOwnProperty("fontface")?t.fontface:"Arial",i=t.hasOwnProperty("fontsize")?t.fontsize:18,r=t.hasOwnProperty("strokeColor")?t.strokeColor:"rgba(0, 0, 0, 0.8)",s=document.createElement("canvas"),o=s.getContext("2d"),a=window.devicePixelRatio;s.width=256*a,s.height=128*a,o.scale(a,a),o.font="Bold "+i+"px "+e,o.fillStyle="rgba(255, 255, 255, 0.0)",o.strokeStyle=r,o.lineWidth=t.hasOwnProperty("strokeWidth")?t.strokeWidth:1,o.textAlign="center",o.textBaseline="middle";var h=s.width/(2*a),l=s.height/(2*a);o.strokeText(n,h,l),o.fillText(n,h,l);var u=new Ke(s);u.needsUpdate=!0;var c=new Eu({map:u,transparent:!0,depthTest:!1}),f=new fv(c);return f.scale.set(.5*a,.25*a,1),f}async function Gb(){const n=["data/stanford_contours_simplified1000m_20231124.geojson","data/CellularTowers_FeaturesToJSON_HIFLD_AOI_20231204.geojson","data/FM_contours_NYS_clip_20231101.geojson","data/FmTowers_FeaturesToJSON_AOI_20231204.geojson","data/NYS_fullElevDEM_boundingBox.geojson","data/cellServiceCentroids_2000m_20231205.geojson"];try{(await Promise.all(n.map(e=>fetch(e).then(i=>i.json())))).forEach((e,i)=>zb(n[i],e)),kb()}catch(t){console.error("Error loading GeoJSON data:",t)}}let ih;function zb(n,t){switch(n){case"data/stanford_contours_simplified1000m_20231124.geojson":ih=t,Pb(t);break;case"data/CellularTowers_FeaturesToJSON_HIFLD_AOI_20231204.geojson":Ub(t);break;case"data/FM_contours_NYS_clip_20231101.geojson":Nb(t);break;case"data/FmTowers_FeaturesToJSON_AOI_20231204.geojson":Ib(t);break;case"data/NYS_fullElevDEM_boundingBox.geojson":Fb(t);break;case"data/NYS_cellTower_viewshed_20231130.jpg":viewshedJPG=t,Ob();break;case"data/cellServiceCentroids_2000m_20231205.geojson":Db(t);break;default:console.warn("Unrecognized URL:",n);break}}function kb(){const n=jc(ih);ss=jc(ih);const t=Nh(n),e=Pf(n);Math.max(e.x,e.y),Pt.fov*(Math.PI/100);const i=Df(ss);Pt.position.set(t.x,t.y,i),Zt.target.set(t.x,t.y,0),Rb(Zt,n),Zt.update(),document.getElementById("start-container").style.display="block"}});export default Hb();
