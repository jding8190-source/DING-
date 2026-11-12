const Xo=()=>{};var ks={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ir=function(i){const t=[];let n=0;for(let s=0;s<i.length;s++){let o=i.charCodeAt(s);o<128?t[n++]=o:o<2048?(t[n++]=o>>6|192,t[n++]=o&63|128):(o&64512)===55296&&s+1<i.length&&(i.charCodeAt(s+1)&64512)===56320?(o=65536+((o&1023)<<10)+(i.charCodeAt(++s)&1023),t[n++]=o>>18|240,t[n++]=o>>12&63|128,t[n++]=o>>6&63|128,t[n++]=o&63|128):(t[n++]=o>>12|224,t[n++]=o>>6&63|128,t[n++]=o&63|128)}return t},Yo=function(i){const t=[];let n=0,s=0;for(;n<i.length;){const o=i[n++];if(o<128)t[s++]=String.fromCharCode(o);else if(o>191&&o<224){const c=i[n++];t[s++]=String.fromCharCode((o&31)<<6|c&63)}else if(o>239&&o<365){const c=i[n++],l=i[n++],w=i[n++],v=((o&7)<<18|(c&63)<<12|(l&63)<<6|w&63)-65536;t[s++]=String.fromCharCode(55296+(v>>10)),t[s++]=String.fromCharCode(56320+(v&1023))}else{const c=i[n++],l=i[n++];t[s++]=String.fromCharCode((o&15)<<12|(c&63)<<6|l&63)}}return t.join("")},wr={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,t){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let o=0;o<i.length;o+=3){const c=i[o],l=o+1<i.length,w=l?i[o+1]:0,v=o+2<i.length,E=v?i[o+2]:0,A=c>>2,S=(c&3)<<4|w>>4;let D=(w&15)<<2|E>>6,H=E&63;v||(H=64,l||(D=64)),s.push(n[A],n[S],n[D],n[H])}return s.join("")},encodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(i):this.encodeByteArray(Ir(i),t)},decodeString(i,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(i):Yo(this.decodeStringToByteArray(i,t))},decodeStringToByteArray(i,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let o=0;o<i.length;){const c=n[i.charAt(o++)],w=o<i.length?n[i.charAt(o)]:0;++o;const E=o<i.length?n[i.charAt(o)]:64;++o;const S=o<i.length?n[i.charAt(o)]:64;if(++o,c==null||w==null||E==null||S==null)throw new Qo;const D=c<<2|w>>4;if(s.push(D),E!==64){const H=w<<4&240|E>>2;if(s.push(H),S!==64){const x=E<<6&192|S;s.push(x)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class Qo extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Zo=function(i){const t=Ir(i);return wr.encodeByteArray(t,!0)},cn=function(i){return Zo(i).replace(/\./g,"")},vr=function(i){try{return wr.decodeString(i,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=()=>ta().__FIREBASE_DEFAULTS__,na=()=>{if(typeof process>"u"||typeof ks>"u")return;const i=ks.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},ia=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=i&&vr(i[1]);return t&&JSON.parse(t)},di=()=>{try{return Xo()||ea()||na()||ia()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},Er=i=>{var t,n;return(n=(t=di())==null?void 0:t.emulatorHosts)==null?void 0:n[i]},sa=i=>{const t=Er(i);if(!t)return;const n=t.lastIndexOf(":");if(n<=0||n+1===t.length)throw new Error(`Invalid host ${t} with no separate hostname and port!`);const s=parseInt(t.substring(n+1),10);return t[0]==="["?[t.substring(1,n-1),s]:[t.substring(0,n),s]},Tr=()=>{var i;return(i=di())==null?void 0:i.config},Sr=i=>{var t;return(t=di())==null?void 0:t[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(i,t){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=t||"demo-project",o=i.iat||0,c=i.sub||i.user_id;if(!c)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const l={iss:`https://securetoken.google.com/${s}`,aud:s,iat:o,exp:o+3600,auth_time:o,sub:c,user_id:c,firebase:{sign_in_provider:"custom",identities:{}},...i};return[cn(JSON.stringify(n)),cn(JSON.stringify(l)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function aa(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(q())}function ca(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ha(){const i=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof i=="object"&&i.id!==void 0}function la(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function ua(){const i=q();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function da(){try{return typeof indexedDB=="object"}catch{return!1}}function fa(){return new Promise((i,t)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",o=self.indexedDB.open(s);o.onsuccess=()=>{o.result.close(),n||self.indexedDB.deleteDatabase(s),i(!0)},o.onupgradeneeded=()=>{n=!1},o.onerror=()=>{var c;t(((c=o.error)==null?void 0:c.message)||"")}}catch(n){t(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pa="FirebaseError";class gt extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name=pa,Object.setPrototypeOf(this,gt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Le.prototype.create)}}class Le{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},o=`${this.service}/${t}`,c=this.errors[t],l=c?ga(c,s):"Error",w=`${this.serviceName}: ${l} (${o}).`;return new gt(o,w,s)}}function ga(i,t){return i.replace(ma,(n,s)=>{const o=t[s];return o!=null?String(o):`<${s}?>`})}const ma=/\{\$([^}]+)}/g;function _a(i){for(const t in i)if(Object.prototype.hasOwnProperty.call(i,t))return!1;return!0}function qt(i,t){if(i===t)return!0;const n=Object.keys(i),s=Object.keys(t);for(const o of n){if(!s.includes(o))return!1;const c=i[o],l=t[o];if(Ns(c)&&Ns(l)){if(!qt(c,l))return!1}else if(c!==l)return!1}for(const o of s)if(!n.includes(o))return!1;return!0}function Ns(i){return i!==null&&typeof i=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(i){const t=[];for(const[n,s]of Object.entries(i))Array.isArray(s)?s.forEach(o=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(o))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}function ya(i,t){const n=new Ia(i,t);return n.subscribe.bind(n)}class Ia{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let o;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");wa(t,["next","error","complete"])?o=t:o={next:t,error:n,complete:s},o.next===void 0&&(o.next=qn),o.error===void 0&&(o.error=qn),o.complete===void 0&&(o.complete=qn);const c=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?o.error(this.finalError):o.complete()}catch{}}),this.observers.push(o),c}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wa(i,t){if(typeof i!="object"||i===null)return!1;for(const n of t)if(n in i&&typeof i[n]=="function")return!0;return!1}function qn(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mt(i){return i&&i._delegate?i._delegate:i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(i){try{return(i.startsWith("http://")||i.startsWith("https://")?new URL(i).hostname:i).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ar(i){return(await fetch(i,{credentials:"include"})).ok}class Kt{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jt="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class va{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new ra;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const o=this.getOrInitializeService({instanceIdentifier:n});o&&s.resolve(o)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){const n=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(t==null?void 0:t.optional)??!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Ta(t))try{this.getOrInitializeService({instanceIdentifier:jt})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(n);try{const c=this.getOrInitializeService({instanceIdentifier:o});s.resolve(c)}catch{}}}}clearInstance(t=jt){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=jt){return this.instances.has(t)}getOptions(t=jt){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const o=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[c,l]of this.instancesDeferred.entries()){const w=this.normalizeInstanceIdentifier(c);s===w&&l.resolve(o)}return o}onInit(t,n){const s=this.normalizeInstanceIdentifier(n),o=this.onInitCallbacks.get(s)??new Set;o.add(t),this.onInitCallbacks.set(s,o);const c=this.instances.get(s);return c&&t(c,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const o of s)try{o(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ea(t),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}return s||null}normalizeInstanceIdentifier(t=jt){return this.component?this.component.multipleInstances?t:jt:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ea(i){return i===jt?void 0:i}function Ta(i){return i.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new va(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(N||(N={}));const Aa={debug:N.DEBUG,verbose:N.VERBOSE,info:N.INFO,warn:N.WARN,error:N.ERROR,silent:N.SILENT},ba=N.INFO,Pa={[N.DEBUG]:"log",[N.VERBOSE]:"log",[N.INFO]:"info",[N.WARN]:"warn",[N.ERROR]:"error"},Ra=(i,t,...n)=>{if(t<i.logLevel)return;const s=new Date().toISOString(),o=Pa[t];if(o)console[o](`[${s}]  ${i.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class fi{constructor(t){this.name=t,this._logLevel=ba,this._logHandler=Ra,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in N))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Aa[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,N.DEBUG,...t),this._logHandler(this,N.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,N.VERBOSE,...t),this._logHandler(this,N.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,N.INFO,...t),this._logHandler(this,N.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,N.WARN,...t),this._logHandler(this,N.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,N.ERROR,...t),this._logHandler(this,N.ERROR,...t)}}const Ca=(i,t)=>t.some(n=>i instanceof n);let Os,Ds;function ka(){return Os||(Os=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Na(){return Ds||(Ds=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const br=new WeakMap,ni=new WeakMap,Pr=new WeakMap,Kn=new WeakMap,pi=new WeakMap;function Oa(i){const t=new Promise((n,s)=>{const o=()=>{i.removeEventListener("success",c),i.removeEventListener("error",l)},c=()=>{n(Nt(i.result)),o()},l=()=>{s(i.error),o()};i.addEventListener("success",c),i.addEventListener("error",l)});return t.then(n=>{n instanceof IDBCursor&&br.set(n,i)}).catch(()=>{}),pi.set(t,i),t}function Da(i){if(ni.has(i))return;const t=new Promise((n,s)=>{const o=()=>{i.removeEventListener("complete",c),i.removeEventListener("error",l),i.removeEventListener("abort",l)},c=()=>{n(),o()},l=()=>{s(i.error||new DOMException("AbortError","AbortError")),o()};i.addEventListener("complete",c),i.addEventListener("error",l),i.addEventListener("abort",l)});ni.set(i,t)}let ii={get(i,t,n){if(i instanceof IDBTransaction){if(t==="done")return ni.get(i);if(t==="objectStoreNames")return i.objectStoreNames||Pr.get(i);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nt(i[t])},set(i,t,n){return i[t]=n,!0},has(i,t){return i instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in i}};function La(i){ii=i(ii)}function Ma(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const s=i.call(Jn(this),t,...n);return Pr.set(s,t.sort?t.sort():[t]),Nt(s)}:Na().includes(i)?function(...t){return i.apply(Jn(this),t),Nt(br.get(this))}:function(...t){return Nt(i.apply(Jn(this),t))}}function Ua(i){return typeof i=="function"?Ma(i):(i instanceof IDBTransaction&&Da(i),Ca(i,ka())?new Proxy(i,ii):i)}function Nt(i){if(i instanceof IDBRequest)return Oa(i);if(Kn.has(i))return Kn.get(i);const t=Ua(i);return t!==i&&(Kn.set(i,t),pi.set(t,i)),t}const Jn=i=>pi.get(i);function xa(i,t,{blocked:n,upgrade:s,blocking:o,terminated:c}={}){const l=indexedDB.open(i,t),w=Nt(l);return s&&l.addEventListener("upgradeneeded",v=>{s(Nt(l.result),v.oldVersion,v.newVersion,Nt(l.transaction),v)}),n&&l.addEventListener("blocked",v=>n(v.oldVersion,v.newVersion,v)),w.then(v=>{c&&v.addEventListener("close",()=>c()),o&&v.addEventListener("versionchange",E=>o(E.oldVersion,E.newVersion,E))}).catch(()=>{}),w}const Fa=["get","getKey","getAll","getAllKeys","count"],Va=["put","add","delete","clear"],Xn=new Map;function Ls(i,t){if(!(i instanceof IDBDatabase&&!(t in i)&&typeof t=="string"))return;if(Xn.get(t))return Xn.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,o=Va.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(o||Fa.includes(n)))return;const c=async function(l,...w){const v=this.transaction(l,o?"readwrite":"readonly");let E=v.store;return s&&(E=E.index(w.shift())),(await Promise.all([E[n](...w),o&&v.done]))[0]};return Xn.set(t,c),c}La(i=>({...i,get:(t,n,s)=>Ls(t,n)||i.get(t,n,s),has:(t,n)=>!!Ls(t,n)||i.has(t,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Ba(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Ba(i){const t=i.getComponent();return(t==null?void 0:t.type)==="VERSION"}const si="@firebase/app",Ms="0.14.11";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft=new fi("@firebase/app"),Ha="@firebase/app-compat",$a="@firebase/analytics-compat",Wa="@firebase/analytics",za="@firebase/app-check-compat",Ga="@firebase/app-check",qa="@firebase/auth",Ka="@firebase/auth-compat",Ja="@firebase/database",Xa="@firebase/data-connect",Ya="@firebase/database-compat",Qa="@firebase/functions",Za="@firebase/functions-compat",tc="@firebase/installations",ec="@firebase/installations-compat",nc="@firebase/messaging",ic="@firebase/messaging-compat",sc="@firebase/performance",rc="@firebase/performance-compat",oc="@firebase/remote-config",ac="@firebase/remote-config-compat",cc="@firebase/storage",hc="@firebase/storage-compat",lc="@firebase/firestore",uc="@firebase/ai",dc="@firebase/firestore-compat",fc="firebase",pc="12.12.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ri="[DEFAULT]",gc={[si]:"fire-core",[Ha]:"fire-core-compat",[Wa]:"fire-analytics",[$a]:"fire-analytics-compat",[Ga]:"fire-app-check",[za]:"fire-app-check-compat",[qa]:"fire-auth",[Ka]:"fire-auth-compat",[Ja]:"fire-rtdb",[Xa]:"fire-data-connect",[Ya]:"fire-rtdb-compat",[Qa]:"fire-fn",[Za]:"fire-fn-compat",[tc]:"fire-iid",[ec]:"fire-iid-compat",[nc]:"fire-fcm",[ic]:"fire-fcm-compat",[sc]:"fire-perf",[rc]:"fire-perf-compat",[oc]:"fire-rc",[ac]:"fire-rc-compat",[cc]:"fire-gcs",[hc]:"fire-gcs-compat",[lc]:"fire-fst",[dc]:"fire-fst-compat",[uc]:"fire-vertex","fire-js":"fire-js",[fc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn=new Map,mc=new Map,oi=new Map;function Us(i,t){try{i.container.addComponent(t)}catch(n){ft.debug(`Component ${t.name} failed to register with FirebaseApp ${i.name}`,n)}}function oe(i){const t=i.name;if(oi.has(t))return ft.debug(`There were multiple attempts to register component ${t}.`),!1;oi.set(t,i);for(const n of hn.values())Us(n,i);for(const n of mc.values())Us(n,i);return!0}function gi(i,t){const n=i.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),i.container.getProvider(t)}function Q(i){return i==null?!1:i.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ot=new Le("app","Firebase",_c);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(t,n,s){this._isDeleted=!1,this._options={...t},this._config={...n},this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Kt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const he=pc;function Ic(i,t={}){let n=i;typeof t!="object"&&(t={name:t});const s={name:ri,automaticDataCollectionEnabled:!0,...t},o=s.name;if(typeof o!="string"||!o)throw Ot.create("bad-app-name",{appName:String(o)});if(n||(n=Tr()),!n)throw Ot.create("no-options");const c=hn.get(o);if(c){if(qt(n,c.options)&&qt(s,c.config))return c;throw Ot.create("duplicate-app",{appName:o})}const l=new Sa(o);for(const v of oi.values())l.addComponent(v);const w=new yc(n,s,l);return hn.set(o,w),w}function Rr(i=ri){const t=hn.get(i);if(!t&&i===ri&&Tr())return Ic();if(!t)throw Ot.create("no-app",{appName:i});return t}function Dt(i,t,n){let s=gc[i]??i;n&&(s+=`-${n}`);const o=s.match(/\s|\//),c=t.match(/\s|\//);if(o||c){const l=[`Unable to register library "${s}" with version "${t}":`];o&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&c&&l.push("and"),c&&l.push(`version name "${t}" contains illegal characters (whitespace or "/")`),ft.warn(l.join(" "));return}oe(new Kt(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc="firebase-heartbeat-database",vc=1,Ne="firebase-heartbeat-store";let Yn=null;function Cr(){return Yn||(Yn=xa(wc,vc,{upgrade:(i,t)=>{switch(t){case 0:try{i.createObjectStore(Ne)}catch(n){console.warn(n)}}}}).catch(i=>{throw Ot.create("idb-open",{originalErrorMessage:i.message})})),Yn}async function Ec(i){try{const n=(await Cr()).transaction(Ne),s=await n.objectStore(Ne).get(kr(i));return await n.done,s}catch(t){if(t instanceof gt)ft.warn(t.message);else{const n=Ot.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});ft.warn(n.message)}}}async function xs(i,t){try{const s=(await Cr()).transaction(Ne,"readwrite");await s.objectStore(Ne).put(t,kr(i)),await s.done}catch(n){if(n instanceof gt)ft.warn(n.message);else{const s=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ft.warn(s.message)}}}function kr(i){return`${i.name}!${i.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tc=1024,Sc=30;class Ac{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Pc(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var t,n;try{const o=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=Fs();if(((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)==null?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(l=>l.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:o}),this._heartbeatsCache.heartbeats.length>Sc){const l=Rc(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(l,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ft.warn(s)}}async getHeartbeatsHeader(){var t;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Fs(),{heartbeatsToSend:s,unsentEntries:o}=bc(this._heartbeatsCache.heartbeats),c=cn(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,o.length>0?(this._heartbeatsCache.heartbeats=o,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(n){return ft.warn(n),""}}}function Fs(){return new Date().toISOString().substring(0,10)}function bc(i,t=Tc){const n=[];let s=i.slice();for(const o of i){const c=n.find(l=>l.agent===o.agent);if(c){if(c.dates.push(o.date),Vs(n)>t){c.dates.pop();break}}else if(n.push({agent:o.agent,dates:[o.date]}),Vs(n)>t){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Pc{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return da()?fa().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Ec(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return xs(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){if(await this._canUseIndexedDBPromise){const s=await this.read();return xs(this.app,{lastSentHeartbeatDate:t.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Vs(i){return cn(JSON.stringify({version:2,heartbeats:i})).length}function Rc(i){if(i.length===0)return-1;let t=0,n=i[0].date;for(let s=1;s<i.length;s++)i[s].date<n&&(n=i[s].date,t=s);return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(i){oe(new Kt("platform-logger",t=>new ja(t),"PRIVATE")),oe(new Kt("heartbeat",t=>new Ac(t),"PRIVATE")),Dt(si,Ms,i),Dt(si,Ms,"esm2020"),Dt("fire-js","")}Cc("");var kc="firebase",Nc="12.12.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Dt(kc,Nc,"app");function Nr(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Oc=Nr,Or=new Le("auth","Firebase",Nr());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new fi("@firebase/auth");function Dc(i,...t){ln.logLevel<=N.WARN&&ln.warn(`Auth (${he}): ${i}`,...t)}function nn(i,...t){ln.logLevel<=N.ERROR&&ln.error(`Auth (${he}): ${i}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(i,...t){throw _i(i,...t)}function et(i,...t){return _i(i,...t)}function mi(i,t,n){const s={...Oc(),[t]:n};return new Le("auth","Firebase",s).create(t,{appName:i.name})}function Wt(i){return mi(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lc(i,t,n){const s=n;if(!(t instanceof s))throw s.name!==t.constructor.name&&ht(i,"argument-error"),mi(i,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _i(i,...t){if(typeof i!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(n,...s)}return Or.create(i,...t)}function b(i,t,...n){if(!i)throw _i(t,...n)}function ut(i){const t="INTERNAL ASSERTION FAILED: "+i;throw nn(t),new Error(t)}function pt(i,t){i||ut(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.href)||""}function Mc(){return js()==="http:"||js()==="https:"}function js(){var i;return typeof self<"u"&&((i=self.location)==null?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mc()||ha()||"connection"in navigator)?navigator.onLine:!0}function xc(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(t,n){this.shortDelay=t,this.longDelay=n,pt(n>t,"Short delay should be less than long delay!"),this.isMobile=aa()||la()}get(){return Uc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yi(i,t){pt(i.emulator,"Emulator should always be set here");const{url:n}=i.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ut("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ut("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ut("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],jc=new Ue(3e4,6e4);function Ii(i,t){return i.tenantId&&!t.tenantId?{...t,tenantId:i.tenantId}:t}async function le(i,t,n,s,o={}){return Lr(i,o,async()=>{let c={},l={};s&&(t==="GET"?l=s:c={body:JSON.stringify(s)});const w=Me({key:i.config.apiKey,...l}).slice(1),v=await i._getAdditionalHeaders();v["Content-Type"]="application/json",i.languageCode&&(v["X-Firebase-Locale"]=i.languageCode);const E={method:t,headers:v,...c};return ca()||(E.referrerPolicy="no-referrer"),i.emulatorConfig&&_n(i.emulatorConfig.host)&&(E.credentials="include"),Dr.fetch()(await Mr(i,i.config.apiHost,n,w),E)})}async function Lr(i,t,n){i._canInitEmulator=!1;const s={...Fc,...t};try{const o=new Hc(i),c=await Promise.race([n(),o.promise]);o.clearNetworkTimeout();const l=await c.json();if("needConfirmation"in l)throw Ze(i,"account-exists-with-different-credential",l);if(c.ok&&!("errorMessage"in l))return l;{const w=c.ok?l.errorMessage:l.error.message,[v,E]=w.split(" : ");if(v==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ze(i,"credential-already-in-use",l);if(v==="EMAIL_EXISTS")throw Ze(i,"email-already-in-use",l);if(v==="USER_DISABLED")throw Ze(i,"user-disabled",l);const A=s[v]||v.toLowerCase().replace(/[_\s]+/g,"-");if(E)throw mi(i,A,E);ht(i,A)}}catch(o){if(o instanceof gt)throw o;ht(i,"network-request-failed",{message:String(o)})}}async function Bc(i,t,n,s,o={}){const c=await le(i,t,n,s,o);return"mfaPendingCredential"in c&&ht(i,"multi-factor-auth-required",{_serverResponse:c}),c}async function Mr(i,t,n,s){const o=`${t}${n}?${s}`,c=i,l=c.config.emulator?yi(i.config,o):`${i.config.apiScheme}://${o}`;return Vc.includes(n)&&(await c._persistenceManagerAvailable,c._getPersistenceType()==="COOKIE")?c._getPersistence()._getFinalTarget(l).toString():l}class Hc{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(et(this.auth,"network-request-failed")),jc.get())})}}function Ze(i,t,n){const s={appName:i.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const o=et(i,t,s);return o.customData._tokenResponse=n,o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $c(i,t){return le(i,"POST","/v1/accounts:delete",t)}async function un(i,t){return le(i,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(i){if(i)try{const t=new Date(Number(i));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function Wc(i,t=!1){const n=mt(i),s=await n.getIdToken(t),o=wi(s);b(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const c=typeof o.firebase=="object"?o.firebase:void 0,l=c==null?void 0:c.sign_in_provider;return{claims:o,token:s,authTime:Pe(Qn(o.auth_time)),issuedAtTime:Pe(Qn(o.iat)),expirationTime:Pe(Qn(o.exp)),signInProvider:l||null,signInSecondFactor:(c==null?void 0:c.sign_in_second_factor)||null}}function Qn(i){return Number(i)*1e3}function wi(i){const[t,n,s]=i.split(".");if(t===void 0||n===void 0||s===void 0)return nn("JWT malformed, contained fewer than 3 sections"),null;try{const o=vr(n);return o?JSON.parse(o):(nn("Failed to decode base64 JWT payload"),null)}catch(o){return nn("Caught error parsing JWT payload as JSON",o==null?void 0:o.toString()),null}}function Bs(i){const t=wi(i);return b(t,"internal-error"),b(typeof t.exp<"u","internal-error"),b(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oe(i,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof gt&&zc(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function zc({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gc{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){if(t){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const s=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pe(this.lastLoginAt),this.creationTime=Pe(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dn(i){var S;const t=i.auth,n=await i.getIdToken(),s=await Oe(i,un(t,{idToken:n}));b(s==null?void 0:s.users.length,t,"internal-error");const o=s.users[0];i._notifyReloadListener(o);const c=(S=o.providerUserInfo)!=null&&S.length?Ur(o.providerUserInfo):[],l=Kc(i.providerData,c),w=i.isAnonymous,v=!(i.email&&o.passwordHash)&&!(l!=null&&l.length),E=w?v:!1,A={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:l,metadata:new ci(o.createdAt,o.lastLoginAt),isAnonymous:E};Object.assign(i,A)}async function qc(i){const t=mt(i);await dn(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Kc(i,t){return[...i.filter(s=>!t.some(o=>o.providerId===s.providerId)),...t]}function Ur(i){return i.map(({providerId:t,...n})=>({providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jc(i,t){const n=await Lr(i,{},async()=>{const s=Me({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:o,apiKey:c}=i.config,l=await Mr(i,o,"/v1/token",`key=${c}`),w=await i._getAdditionalHeaders();w["Content-Type"]="application/x-www-form-urlencoded";const v={method:"POST",headers:w,body:s};return i.emulatorConfig&&_n(i.emulatorConfig.host)&&(v.credentials="include"),Dr.fetch()(l,v)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Xc(i,t){return le(i,"POST","/v2/accounts:revokeToken",Ii(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){b(t.idToken,"internal-error"),b(typeof t.idToken<"u","internal-error"),b(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):Bs(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}updateFromIdToken(t){b(t.length!==0,"internal-error");const n=Bs(t);this.updateTokensAndExpiration(t,null,n)}async getToken(t,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(b(this.refreshToken,t,"user-token-expired"),this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:o,expiresIn:c}=await Jc(t,n);this.updateTokensAndExpiration(s,o,Number(c))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(t,n){const{refreshToken:s,accessToken:o,expirationTime:c}=n,l=new ne;return s&&(b(typeof s=="string","internal-error",{appName:t}),l.refreshToken=s),o&&(b(typeof o=="string","internal-error",{appName:t}),l.accessToken=o),c&&(b(typeof c=="number","internal-error",{appName:t}),l.expirationTime=c),l}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new ne,this.toJSON())}_performRefresh(){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bt(i,t){b(typeof i=="string"||typeof i>"u","internal-error",{appName:t})}class Z{constructor({uid:t,auth:n,stsTokenManager:s,...o}){this.providerId="firebase",this.proactiveRefresh=new Gc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new ci(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(t){const n=await Oe(this,this.stsTokenManager.getToken(this.auth,t));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return Wc(this,t)}reload(){return qc(this)}_assign(t){this!==t&&(b(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>({...n})),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Z({...this,auth:t,stsTokenManager:this.stsTokenManager._clone()});return n.metadata._copy(this.metadata),n}_onReload(t){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await dn(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Q(this.auth.app))return Promise.reject(Wt(this.auth));const t=await this.getIdToken();return await Oe(this,$c(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>({...t})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){const s=n.displayName??void 0,o=n.email??void 0,c=n.phoneNumber??void 0,l=n.photoURL??void 0,w=n.tenantId??void 0,v=n._redirectEventId??void 0,E=n.createdAt??void 0,A=n.lastLoginAt??void 0,{uid:S,emailVerified:D,isAnonymous:H,providerData:x,stsTokenManager:B}=n;b(S&&B,t,"internal-error");const M=ne.fromJSON(this.name,B);b(typeof S=="string",t,"internal-error"),bt(s,t.name),bt(o,t.name),b(typeof D=="boolean",t,"internal-error"),b(typeof H=="boolean",t,"internal-error"),bt(c,t.name),bt(l,t.name),bt(w,t.name),bt(v,t.name),bt(E,t.name),bt(A,t.name);const nt=new Z({uid:S,auth:t,email:o,emailVerified:D,displayName:s,isAnonymous:H,photoURL:l,phoneNumber:c,tenantId:w,stsTokenManager:M,createdAt:E,lastLoginAt:A});return x&&Array.isArray(x)&&(nt.providerData=x.map(_t=>({..._t}))),v&&(nt._redirectEventId=v),nt}static async _fromIdTokenResponse(t,n,s=!1){const o=new ne;o.updateFromServerResponse(n);const c=new Z({uid:n.localId,auth:t,stsTokenManager:o,isAnonymous:s});return await dn(c),c}static async _fromGetAccountInfoResponse(t,n,s){const o=n.users[0];b(o.localId!==void 0,"internal-error");const c=o.providerUserInfo!==void 0?Ur(o.providerUserInfo):[],l=!(o.email&&o.passwordHash)&&!(c!=null&&c.length),w=new ne;w.updateFromIdToken(s);const v=new Z({uid:o.localId,auth:t,stsTokenManager:w,isAnonymous:l}),E={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:c,metadata:new ci(o.createdAt,o.lastLoginAt),isAnonymous:!(o.email&&o.passwordHash)&&!(c!=null&&c.length)};return Object.assign(v,E),v}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=new Map;function dt(i){pt(i instanceof Function,"Expected a class definition");let t=Hs.get(i);return t?(pt(t instanceof i,"Instance stored in cache mismatched with class"),t):(t=new i,Hs.set(i,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}xr.type="NONE";const $s=xr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(i,t,n){return`firebase:${i}:${t}:${n}`}class ie{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:o,name:c}=this.auth;this.fullUserKey=sn(this.userKey,o.apiKey,c),this.fullPersistenceKey=sn("persistence",o.apiKey,c),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);if(!t)return null;if(typeof t=="string"){const n=await un(this.auth,{idToken:t}).catch(()=>{});return n?Z._fromGetAccountInfoResponse(this.auth,n,t):null}return Z._fromJSON(this.auth,t)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new ie(dt($s),t,s);const o=(await Promise.all(n.map(async E=>{if(await E._isAvailable())return E}))).filter(E=>E);let c=o[0]||dt($s);const l=sn(s,t.config.apiKey,t.name);let w=null;for(const E of n)try{const A=await E._get(l);if(A){let S;if(typeof A=="string"){const D=await un(t,{idToken:A}).catch(()=>{});if(!D)break;S=await Z._fromGetAccountInfoResponse(t,D,A)}else S=Z._fromJSON(t,A);E!==c&&(w=S),c=E;break}}catch{}const v=o.filter(E=>E._shouldAllowMigration);return!c._shouldAllowMigration||!v.length?new ie(c,t,s):(c=v[0],w&&await c._set(l,w.toJSON()),await Promise.all(n.map(async E=>{if(E!==c)try{await E._remove(l)}catch{}})),new ie(c,t,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(i){const t=i.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Br(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Fr(t))return"Firefox";if(t.includes("silk/"))return"Silk";if($r(t))return"Blackberry";if(Wr(t))return"Webos";if(Vr(t))return"Safari";if((t.includes("chrome/")||jr(t))&&!t.includes("edge/"))return"Chrome";if(Hr(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Fr(i=q()){return/firefox\//i.test(i)}function Vr(i=q()){const t=i.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function jr(i=q()){return/crios\//i.test(i)}function Br(i=q()){return/iemobile/i.test(i)}function Hr(i=q()){return/android/i.test(i)}function $r(i=q()){return/blackberry/i.test(i)}function Wr(i=q()){return/webos/i.test(i)}function vi(i=q()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function Yc(i=q()){var t;return vi(i)&&!!((t=window.navigator)!=null&&t.standalone)}function Qc(){return ua()&&document.documentMode===10}function zr(i=q()){return vi(i)||Hr(i)||Wr(i)||$r(i)||/windows phone/i.test(i)||Br(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(i,t=[]){let n;switch(i){case"Browser":n=Ws(q());break;case"Worker":n=`${Ws(q())}-${i}`;break;default:n=i}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${he}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=c=>new Promise((l,w)=>{try{const v=t(c);l(v)}catch(v){w(v)}});s.onAbort=n,this.queue.push(s);const o=this.queue.length-1;return()=>{this.queue[o]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const o of n)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function th(i,t={}){return le(i,"GET","/v2/passwordPolicy",Ii(i,t))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eh=6;class nh{constructor(t){var s;const n=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=n.minPasswordLength??eh,n.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=n.maxPasswordLength),n.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=n.containsLowercaseCharacter),n.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=n.containsUppercaseCharacter),n.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=n.containsNumericCharacter),n.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=n.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((s=t.allowedNonAlphanumericCharacters)==null?void 0:s.join(""))??"",this.forceUpgradeOnSignin=t.forceUpgradeOnSignin??!1,this.schemaVersion=t.schemaVersion}validatePassword(t){const n={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,n),this.validatePasswordCharacterOptions(t,n),n.isValid&&(n.isValid=n.meetsMinPasswordLength??!0),n.isValid&&(n.isValid=n.meetsMaxPasswordLength??!0),n.isValid&&(n.isValid=n.containsLowercaseLetter??!0),n.isValid&&(n.isValid=n.containsUppercaseLetter??!0),n.isValid&&(n.isValid=n.containsNumericCharacter??!0),n.isValid&&(n.isValid=n.containsNonAlphanumericCharacter??!0),n}validatePasswordLengthOptions(t,n){const s=this.customStrengthOptions.minPasswordLength,o=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=t.length>=s),o&&(n.meetsMaxPasswordLength=t.length<=o)}validatePasswordCharacterOptions(t,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let o=0;o<t.length;o++)s=t.charAt(o),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(t,n,s,o,c){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=o)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=c))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(t,n,s,o){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=o,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new zs(this),this.idTokenSubscription=new zs(this),this.beforeStateQueue=new Zc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Or,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=o.sdkClientVersion,this._persistenceManagerAvailable=new Promise(c=>this._resolvePersistenceManagerAvailable=c)}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=dt(n)),this._initializationPromise=this.queue(async()=>{var s,o,c;if(!this._deleted&&(this.persistenceManager=await ie.create(this,t),(s=this._resolvePersistenceManagerAvailable)==null||s.call(this),!this._deleted)){if((o=this._popupRedirectResolver)!=null&&o._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((c=this.currentUser)==null?void 0:c.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUserFromIdToken(t){try{const n=await un(this,{idToken:t}),s=await Z._fromGetAccountInfoResponse(this,n,t);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(t){var c;if(Q(this.app)){const l=this.app.settings.authIdToken;return l?new Promise(w=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(l).then(w,w))}):this.directlySetCurrentUser(null)}const n=await this.assertedPersistence.getCurrentUser();let s=n,o=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const l=(c=this.redirectUser)==null?void 0:c._redirectEventId,w=s==null?void 0:s._redirectEventId,v=await this.tryRedirectSignIn(t);(!l||l===w)&&(v!=null&&v.user)&&(s=v.user,o=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(s)}catch(l){s=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(l))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await dn(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=xc()}async _delete(){this._deleted=!0}async updateCurrentUser(t){if(Q(this.app))return Promise.reject(Wt(this));const n=t?mt(t):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&b(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return Q(this.app)?Promise.reject(Wt(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(t){return Q(this.app)?Promise.reject(Wt(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dt(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await th(this),n=new nh(t);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(t){this._errorFactory=new Le("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const s=this.onAuthStateChanged(()=>{s(),t()},n)}})}async revokeAccessToken(t){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await Xc(this,s)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)==null?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&dt(t)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await ie.create(this,[dt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)==null?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)==null?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const t=((n=this.currentUser)==null?void 0:n.uid)??null;this.lastNotifiedUid!==t&&(this.lastNotifiedUid=t,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,o){if(this._deleted)return()=>{};const c=typeof n=="function"?n:n.next.bind(n);let l=!1;const w=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(w,this,"internal-error"),w.then(()=>{l||c(this.currentUser)}),typeof n=="function"){const v=t.addObserver(n,s,o);return()=>{l=!0,v()}}else{const v=t.addObserver(n);return()=>{l=!0,v()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Gr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var o;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await((o=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:o.getHeartbeatsHeader());n&&(t["X-Firebase-Client"]=n);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var n;if(Q(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((n=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:n.getToken());return t!=null&&t.error&&Dc(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yn(i){return mt(i)}class zs{constructor(t){this.auth=t,this.observer=null,this.addObserver=ya(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ei={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function sh(i){Ei=i}function rh(i){return Ei.loadJS(i)}function oh(){return Ei.gapiScript}function ah(i){return`__${i}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ch(i,t){const n=gi(i,"auth");if(n.isInitialized()){const o=n.getImmediate(),c=n.getOptions();if(qt(c,t??{}))return o;ht(o,"already-initialized")}return n.initialize({options:t})}function hh(i,t){const n=(t==null?void 0:t.persistence)||[],s=(Array.isArray(n)?n:[n]).map(dt);t!=null&&t.errorMap&&i._updateErrorMap(t.errorMap),i._initializeWithPersistence(s,t==null?void 0:t.popupRedirectResolver)}function lh(i,t,n){const s=yn(i);b(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const o=!1,c=qr(t),{host:l,port:w}=uh(t),v=w===null?"":`:${w}`,E={url:`${c}//${l}${v}/`},A=Object.freeze({host:l,port:w,protocol:c.replace(":",""),options:Object.freeze({disableWarnings:o})});if(!s._canInitEmulator){b(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),b(qt(E,s.config.emulator)&&qt(A,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=E,s.emulatorConfig=A,s.settings.appVerificationDisabledForTesting=!0,_n(l)?Ar(`${c}//${l}${v}`):dh()}function qr(i){const t=i.indexOf(":");return t<0?"":i.substr(0,t+1)}function uh(i){const t=qr(i),n=/(\/\/)?([^?#/]+)/.exec(i.substr(t.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",o=/^(\[[^\]]+\])(:|$)/.exec(s);if(o){const c=o[1];return{host:c,port:Gs(s.substr(c.length+1))}}else{const[c,l]=s.split(":");return{host:c,port:Gs(l)}}}function Gs(i){if(!i)return null;const t=Number(i);return isNaN(t)?null:t}function dh(){function i(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return ut("not implemented")}_getIdTokenResponse(t){return ut("not implemented")}_linkToIdToken(t,n){return ut("not implemented")}_getReauthenticationResolver(t){return ut("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se(i,t){return Bc(i,"POST","/v1/accounts:signInWithIdp",Ii(i,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fh="http://localhost";class Jt extends Kr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new Jt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):ht("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:o,...c}=n;if(!s||!o)return null;const l=new Jt(s,o);return l.idToken=c.idToken||void 0,l.accessToken=c.accessToken||void 0,l.secret=c.secret,l.nonce=c.nonce,l.pendingToken=c.pendingToken||null,l}_getIdTokenResponse(t){const n=this.buildRequest();return se(t,n)}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,se(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,se(t,n)}buildRequest(){const t={requestUri:fh,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Me(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe extends Ti{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends xe{constructor(){super("facebook.com")}static credential(t){return Jt._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Pt.credentialFromTaggedObject(t)}static credentialFromError(t){return Pt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Pt.credential(t.oauthAccessToken)}catch{return null}}}Pt.FACEBOOK_SIGN_IN_METHOD="facebook.com";Pt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt extends xe{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return Jt._fromParams({providerId:Rt.PROVIDER_ID,signInMethod:Rt.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Rt.credentialFromTaggedObject(t)}static credentialFromError(t){return Rt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Rt.credential(n,s)}catch{return null}}}Rt.GOOGLE_SIGN_IN_METHOD="google.com";Rt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends xe{constructor(){super("github.com")}static credential(t){return Jt._fromParams({providerId:Ct.PROVIDER_ID,signInMethod:Ct.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ct.credentialFromTaggedObject(t)}static credentialFromError(t){return Ct.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ct.credential(t.oauthAccessToken)}catch{return null}}}Ct.GITHUB_SIGN_IN_METHOD="github.com";Ct.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt extends xe{constructor(){super("twitter.com")}static credential(t,n){return Jt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return kt.credential(n,s)}catch{return null}}}kt.TWITTER_SIGN_IN_METHOD="twitter.com";kt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,o=!1){const c=await Z._fromIdTokenResponse(t,s,o),l=qs(s);return new ae({user:c,providerId:l,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const o=qs(s);return new ae({user:t,providerId:o,_tokenResponse:s,operationType:n})}}function qs(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn extends gt{constructor(t,n,s,o){super(n.code,n.message),this.operationType=s,this.user=o,Object.setPrototypeOf(this,fn.prototype),this.customData={appName:t.name,tenantId:t.tenantId??void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,o){return new fn(t,n,s,o)}}function Jr(i,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(i):n._getIdTokenResponse(i)).catch(c=>{throw c.code==="auth/multi-factor-auth-required"?fn._fromErrorAndOperation(i,c,t,s):c})}async function ph(i,t,n=!1){const s=await Oe(i,t._linkToIdToken(i.auth,await i.getIdToken()),n);return ae._forOperation(i,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gh(i,t,n=!1){const{auth:s}=i;if(Q(s.app))return Promise.reject(Wt(s));const o="reauthenticate";try{const c=await Oe(i,Jr(s,o,t,i),n);b(c.idToken,s,"internal-error");const l=wi(c.idToken);b(l,s,"internal-error");const{sub:w}=l;return b(i.uid===w,s,"user-mismatch"),ae._forOperation(i,o,c)}catch(c){throw(c==null?void 0:c.code)==="auth/user-not-found"&&ht(s,"user-mismatch"),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mh(i,t,n=!1){if(Q(i.app))return Promise.reject(Wt(i));const s="signIn",o=await Jr(i,s,t),c=await ae._fromIdTokenResponse(i,s,o);return n||await i._updateCurrentUser(c.user),c}function _h(i,t,n,s){return mt(i).onIdTokenChanged(t,n,s)}function yh(i,t,n){return mt(i).beforeAuthStateChanged(t,n)}function hu(i,t,n,s){return mt(i).onAuthStateChanged(t,n,s)}function lu(i){return mt(i).signOut()}const pn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xr{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pn,"1"),this.storage.removeItem(pn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ih=1e3,wh=10;class Yr extends Xr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zr(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),o=this.localCache[n];s!==o&&t(n,o,s)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((l,w,v)=>{this.notifyListeners(l,v)});return}const s=t.key;n?this.detachListener():this.stopPolling();const o=()=>{const l=this.storage.getItem(s);!n&&this.localCache[s]===l||this.notifyListeners(s,l)},c=this.storage.getItem(s);Qc()&&c!==t.newValue&&t.newValue!==t.oldValue?setTimeout(o,wh):o()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},Ih)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Yr.type="LOCAL";const vh=Yr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qr extends Xr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Qr.type="SESSION";const Zr=Qr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eh(i){return Promise.all(i.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class In{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(o=>o.isListeningto(t));if(n)return n;const s=new In(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:o,data:c}=n.data,l=this.handlersMap[o];if(!(l!=null&&l.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:o});const w=Array.from(l).map(async E=>E(n.origin,c)),v=await Eh(w);n.ports[0].postMessage({status:"done",eventId:s,eventType:o,response:v})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}In.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(i="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(Math.random()*10);return i+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Th{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const o=typeof MessageChannel<"u"?new MessageChannel:null;if(!o)throw new Error("connection_unavailable");let c,l;return new Promise((w,v)=>{const E=Si("",20);o.port1.start();const A=setTimeout(()=>{v(new Error("unsupported_event"))},s);l={messageChannel:o,onMessage(S){const D=S;if(D.data.eventId===E)switch(D.data.status){case"ack":clearTimeout(A),c=setTimeout(()=>{v(new Error("timeout"))},3e3);break;case"done":clearTimeout(c),w(D.data.response);break;default:clearTimeout(A),clearTimeout(c),v(new Error("invalid_response"));break}}},this.handlers.add(l),o.port1.addEventListener("message",l.onMessage),this.target.postMessage({eventType:t,eventId:E,data:n},[o.port2])}).finally(()=>{l&&this.removeMessageHandler(l)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(){return window}function Sh(i){ct().location.href=i}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(){return typeof ct().WorkerGlobalScope<"u"&&typeof ct().importScripts=="function"}async function Ah(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bh(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)==null?void 0:i.controller)||null}function Ph(){return to()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eo="firebaseLocalStorageDb",Rh=1,gn="firebaseLocalStorage",no="fbase_key";class Fe{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function wn(i,t){return i.transaction([gn],t?"readwrite":"readonly").objectStore(gn)}function Ch(){const i=indexedDB.deleteDatabase(eo);return new Fe(i).toPromise()}function hi(){const i=indexedDB.open(eo,Rh);return new Promise((t,n)=>{i.addEventListener("error",()=>{n(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(gn,{keyPath:no})}catch(o){n(o)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(gn)?t(s):(s.close(),await Ch(),t(await hi()))})})}async function Ks(i,t,n){const s=wn(i,!0).put({[no]:t,value:n});return new Fe(s).toPromise()}async function kh(i,t){const n=wn(i,!1).get(t),s=await new Fe(n).toPromise();return s===void 0?null:s.value}function Js(i,t){const n=wn(i,!0).delete(t);return new Fe(n).toPromise()}const Nh=800,Oh=3;class io{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hi(),this.db)}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>Oh)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return to()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=In._getInstance(Ph()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var n,s;if(this.activeServiceWorker=await Ah(),!this.activeServiceWorker)return;this.sender=new Th(this.activeServiceWorker);const t=await this.sender._send("ping",{},800);t&&(n=t[0])!=null&&n.fulfilled&&(s=t[0])!=null&&s.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||bh()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await hi();return await Ks(t,pn,"1"),await Js(t,pn),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ks(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>kh(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Js(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(o=>{const c=wn(o,!1).getAll();return new Fe(c).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(t.length!==0)for(const{fbase_key:o,value:c}of t)s.add(o),JSON.stringify(this.localCache[o])!==JSON.stringify(c)&&(this.notifyListeners(o,c),n.push(o));for(const o of Object.keys(this.localCache))this.localCache[o]&&!s.has(o)&&(this.notifyListeners(o,null),n.push(o));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const o of Array.from(s))o(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Nh)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}io.type="LOCAL";const Dh=io;new Ue(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function so(i,t){return t?dt(t):(b(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai extends Kr{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return se(t,this._buildIdpRequest())}_linkToIdToken(t,n){return se(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return se(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Lh(i){return mh(i.auth,new Ai(i),i.bypassAuthState)}function Mh(i){const{auth:t,user:n}=i;return b(n,t,"internal-error"),gh(n,new Ai(i),i.bypassAuthState)}async function Uh(i){const{auth:t,user:n}=i;return b(n,t,"internal-error"),ph(n,new Ai(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ro{constructor(t,n,s,o,c=!1){this.auth=t,this.resolver=s,this.user=o,this.bypassAuthState=c,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:o,tenantId:c,error:l,type:w}=t;if(l){this.reject(l);return}const v={auth:this.auth,requestUri:n,sessionId:s,tenantId:c||void 0,postBody:o||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(w)(v))}catch(E){this.reject(E)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Lh;case"linkViaPopup":case"linkViaRedirect":return Uh;case"reauthViaPopup":case"reauthViaRedirect":return Mh;default:ht(this.auth,"internal-error")}}resolve(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){pt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=new Ue(2e3,1e4);async function uu(i,t,n){if(Q(i.app))return Promise.reject(et(i,"operation-not-supported-in-this-environment"));const s=yn(i);Lc(i,t,Ti);const o=so(s,n);return new Ht(s,"signInViaPopup",t,o).executeNotNull()}class Ht extends ro{constructor(t,n,s,o,c){super(t,n,o,c),this.provider=s,this.authWindow=null,this.pollId=null,Ht.currentPopupAction&&Ht.currentPopupAction.cancel(),Ht.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return b(t,this.auth,"internal-error"),t}async onExecution(){pt(this.filter.length===1,"Popup operations only handle one event");const t=Si();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(et(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)==null?void 0:t.associatedEvent)||null}cancel(){this.reject(et(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ht.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;if((s=(n=this.authWindow)==null?void 0:n.window)!=null&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(et(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,xh.get())};t()}}Ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fh="pendingRedirect",rn=new Map;class Vh extends ro{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=rn.get(this.auth._key());if(!t){try{const s=await jh(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}rn.set(this.auth._key(),t)}return this.bypassAuthState||rn.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function jh(i,t){const n=$h(t),s=Hh(i);if(!await s._isAvailable())return!1;const o=await s._get(n)==="true";return await s._remove(n),o}function Bh(i,t){rn.set(i._key(),t)}function Hh(i){return dt(i._redirectPersistence)}function $h(i){return sn(Fh,i.config.apiKey,i.name)}async function Wh(i,t,n=!1){if(Q(i.app))return Promise.reject(Wt(i));const s=yn(i),o=so(s,t),l=await new Vh(s,o,n).execute();return l&&!n&&(delete l.user._redirectEventId,await s._persistUserIfCurrent(l.user),await s._setRedirectUser(null,t)),l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zh=600*1e3;class Gh{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!qh(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!oo(t)){const o=((s=t.error.code)==null?void 0:s.split("auth/")[1])||"internal-error";n.onError(et(this.auth,o))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=zh&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xs(t))}saveEventToCache(t){this.cachedEventUids.add(Xs(t)),this.lastProcessedEventTime=Date.now()}}function Xs(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(t=>t).join("-")}function oo({type:i,error:t}){return i==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function qh(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oo(i);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kh(i,t={}){return le(i,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Xh=/^https?/;async function Yh(i){if(i.config.emulator)return;const{authorizedDomains:t}=await Kh(i);for(const n of t)try{if(Qh(n))return}catch{}ht(i,"unauthorized-domain")}function Qh(i){const t=ai(),{protocol:n,hostname:s}=new URL(t);if(i.startsWith("chrome-extension://")){const l=new URL(i);return l.hostname===""&&s===""?n==="chrome-extension:"&&i.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&l.hostname===s}if(!Xh.test(n))return!1;if(Jh.test(i))return s===i;const o=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zh=new Ue(3e4,6e4);function Ys(){const i=ct().___jsl;if(i!=null&&i.H){for(const t of Object.keys(i.H))if(i.H[t].r=i.H[t].r||[],i.H[t].L=i.H[t].L||[],i.H[t].r=[...i.H[t].L],i.CP)for(let n=0;n<i.CP.length;n++)i.CP[n]=null}}function tl(i){return new Promise((t,n)=>{var o,c,l;function s(){Ys(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Ys(),n(et(i,"network-request-failed"))},timeout:Zh.get()})}if((c=(o=ct().gapi)==null?void 0:o.iframes)!=null&&c.Iframe)t(gapi.iframes.getContext());else if((l=ct().gapi)!=null&&l.load)s();else{const w=ah("iframefcb");return ct()[w]=()=>{gapi.load?s():n(et(i,"network-request-failed"))},rh(`${oh()}?onload=${w}`).catch(v=>n(v))}}).catch(t=>{throw on=null,t})}let on=null;function el(i){return on=on||tl(i),on}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nl=new Ue(5e3,15e3),il="__/auth/iframe",sl="emulator/auth/iframe",rl={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ol=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function al(i){const t=i.config;b(t.authDomain,i,"auth-domain-config-required");const n=t.emulator?yi(t,sl):`https://${i.config.authDomain}/${il}`,s={apiKey:t.apiKey,appName:i.name,v:he},o=ol.get(i.config.apiHost);o&&(s.eid=o);const c=i._getFrameworks();return c.length&&(s.fw=c.join(",")),`${n}?${Me(s).slice(1)}`}async function cl(i){const t=await el(i),n=ct().gapi;return b(n,i,"internal-error"),t.open({where:document.body,url:al(i),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:rl,dontclear:!0},s=>new Promise(async(o,c)=>{await s.restyle({setHideOnLeave:!1});const l=et(i,"network-request-failed"),w=ct().setTimeout(()=>{c(l)},nl.get());function v(){ct().clearTimeout(w),o(s)}s.ping(v).then(v,()=>{c(l)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hl={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ll=500,ul=600,dl="_blank",fl="http://localhost";class Qs{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function pl(i,t,n,s=ll,o=ul){const c=Math.max((window.screen.availHeight-o)/2,0).toString(),l=Math.max((window.screen.availWidth-s)/2,0).toString();let w="";const v={...hl,width:s.toString(),height:o.toString(),top:c,left:l},E=q().toLowerCase();n&&(w=jr(E)?dl:n),Fr(E)&&(t=t||fl,v.scrollbars="yes");const A=Object.entries(v).reduce((D,[H,x])=>`${D}${H}=${x},`,"");if(Yc(E)&&w!=="_self")return gl(t||"",w),new Qs(null);const S=window.open(t||"",w,A);b(S,i,"popup-blocked");try{S.focus()}catch{}return new Qs(S)}function gl(i,t){const n=document.createElement("a");n.href=i,n.target=t;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml="__/auth/handler",_l="emulator/auth/handler",yl=encodeURIComponent("fac");async function Zs(i,t,n,s,o,c){b(i.config.authDomain,i,"auth-domain-config-required"),b(i.config.apiKey,i,"invalid-api-key");const l={apiKey:i.config.apiKey,appName:i.name,authType:n,redirectUrl:s,v:he,eventId:o};if(t instanceof Ti){t.setDefaultLanguage(i.languageCode),l.providerId=t.providerId||"",_a(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[A,S]of Object.entries({}))l[A]=S}if(t instanceof xe){const A=t.getScopes().filter(S=>S!=="");A.length>0&&(l.scopes=A.join(","))}i.tenantId&&(l.tid=i.tenantId);const w=l;for(const A of Object.keys(w))w[A]===void 0&&delete w[A];const v=await i._getAppCheckToken(),E=v?`#${yl}=${encodeURIComponent(v)}`:"";return`${Il(i)}?${Me(w).slice(1)}${E}`}function Il({config:i}){return i.emulator?yi(i,_l):`https://${i.authDomain}/${ml}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="webStorageSupport";class wl{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Zr,this._completeRedirectFn=Wh,this._overrideRedirectResult=Bh}async _openPopup(t,n,s,o){var l;pt((l=this.eventManagers[t._key()])==null?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await Zs(t,n,s,ai(),o);return pl(t,c,Si())}async _openRedirect(t,n,s,o){await this._originValidation(t);const c=await Zs(t,n,s,ai(),o);return Sh(c),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:o,promise:c}=this.eventManagers[n];return o?Promise.resolve(o):(pt(c,"If manager is not set, promise should be"),c)}const s=this.initAndGetManager(t);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(t){const n=await cl(t),s=new Gh(t);return n.register("authEvent",o=>(b(o==null?void 0:o.authEvent,t,"invalid-auth-event"),{status:s.onEvent(o.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:s},this.iframes[t._key()]=n,s}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Zn,{type:Zn},o=>{var l;const c=(l=o==null?void 0:o[0])==null?void 0:l[Zn];c!==void 0&&n(!!c),ht(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Yh(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return zr()||Vr()||vi()}}const vl=wl;var tr="@firebase/auth",er="1.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)==null?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tl(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Sl(i){oe(new Kt("auth",(t,{options:n})=>{const s=t.getProvider("app").getImmediate(),o=t.getProvider("heartbeat"),c=t.getProvider("app-check-internal"),{apiKey:l,authDomain:w}=s.options;b(l&&!l.includes(":"),"invalid-api-key",{appName:s.name});const v={apiKey:l,authDomain:w,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gr(i)},E=new ih(s,o,c,v);return hh(E,n),E},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,s)=>{t.getProvider("auth-internal").initialize()})),oe(new Kt("auth-internal",t=>{const n=yn(t.getProvider("auth").getImmediate());return(s=>new El(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dt(tr,er,Tl(i)),Dt(tr,er,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al=300,bl=Sr("authIdTokenMaxAge")||Al;let nr=null;const Pl=i=>async t=>{const n=t&&await t.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>bl)return;const o=n==null?void 0:n.token;nr!==o&&(nr=o,await fetch(i,{method:o?"POST":"DELETE",headers:o?{Authorization:`Bearer ${o}`}:{}}))};function du(i=Rr()){const t=gi(i,"auth");if(t.isInitialized())return t.getImmediate();const n=ch(i,{popupRedirectResolver:vl,persistence:[Dh,vh,Zr]}),s=Sr("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const c=new URL(s,location.origin);if(location.origin===c.origin){const l=Pl(c.toString());yh(n,l,()=>l(n.currentUser)),_h(n,w=>l(w))}}const o=Er("auth");return o&&lh(n,`http://${o}`),n}function Rl(){var i;return((i=document.getElementsByTagName("head"))==null?void 0:i[0])??document}sh({loadJS(i){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=t,s.onerror=o=>{const c=et("internal-error");c.customData=o,n(c)},s.type="text/javascript",s.charset="UTF-8",Rl().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Sl("Browser");var ir=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var bi;(function(){var i;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(g,u){function f(){}f.prototype=u.prototype,g.F=u.prototype,g.prototype=new f,g.prototype.constructor=g,g.D=function(m,p,y){for(var d=Array(arguments.length-2),K=2;K<arguments.length;K++)d[K-2]=arguments[K];return u.prototype[p].apply(m,d)}}function n(){this.blockSize=-1}function s(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}t(s,n),s.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function o(g,u,f){f||(f=0);const m=Array(16);if(typeof u=="string")for(var p=0;p<16;++p)m[p]=u.charCodeAt(f++)|u.charCodeAt(f++)<<8|u.charCodeAt(f++)<<16|u.charCodeAt(f++)<<24;else for(p=0;p<16;++p)m[p]=u[f++]|u[f++]<<8|u[f++]<<16|u[f++]<<24;u=g.g[0],f=g.g[1],p=g.g[2];let y=g.g[3],d;d=u+(y^f&(p^y))+m[0]+3614090360&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(p^u&(f^p))+m[1]+3905402710&4294967295,y=u+(d<<12&4294967295|d>>>20),d=p+(f^y&(u^f))+m[2]+606105819&4294967295,p=y+(d<<17&4294967295|d>>>15),d=f+(u^p&(y^u))+m[3]+3250441966&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(y^f&(p^y))+m[4]+4118548399&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(p^u&(f^p))+m[5]+1200080426&4294967295,y=u+(d<<12&4294967295|d>>>20),d=p+(f^y&(u^f))+m[6]+2821735955&4294967295,p=y+(d<<17&4294967295|d>>>15),d=f+(u^p&(y^u))+m[7]+4249261313&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(y^f&(p^y))+m[8]+1770035416&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(p^u&(f^p))+m[9]+2336552879&4294967295,y=u+(d<<12&4294967295|d>>>20),d=p+(f^y&(u^f))+m[10]+4294925233&4294967295,p=y+(d<<17&4294967295|d>>>15),d=f+(u^p&(y^u))+m[11]+2304563134&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(y^f&(p^y))+m[12]+1804603682&4294967295,u=f+(d<<7&4294967295|d>>>25),d=y+(p^u&(f^p))+m[13]+4254626195&4294967295,y=u+(d<<12&4294967295|d>>>20),d=p+(f^y&(u^f))+m[14]+2792965006&4294967295,p=y+(d<<17&4294967295|d>>>15),d=f+(u^p&(y^u))+m[15]+1236535329&4294967295,f=p+(d<<22&4294967295|d>>>10),d=u+(p^y&(f^p))+m[1]+4129170786&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^p&(u^f))+m[6]+3225465664&4294967295,y=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(y^u))+m[11]+643717713&4294967295,p=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(p^y))+m[0]+3921069994&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^y&(f^p))+m[5]+3593408605&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^p&(u^f))+m[10]+38016083&4294967295,y=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(y^u))+m[15]+3634488961&4294967295,p=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(p^y))+m[4]+3889429448&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^y&(f^p))+m[9]+568446438&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^p&(u^f))+m[14]+3275163606&4294967295,y=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(y^u))+m[3]+4107603335&4294967295,p=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(p^y))+m[8]+1163531501&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(p^y&(f^p))+m[13]+2850285829&4294967295,u=f+(d<<5&4294967295|d>>>27),d=y+(f^p&(u^f))+m[2]+4243563512&4294967295,y=u+(d<<9&4294967295|d>>>23),d=p+(u^f&(y^u))+m[7]+1735328473&4294967295,p=y+(d<<14&4294967295|d>>>18),d=f+(y^u&(p^y))+m[12]+2368359562&4294967295,f=p+(d<<20&4294967295|d>>>12),d=u+(f^p^y)+m[5]+4294588738&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^p)+m[8]+2272392833&4294967295,y=u+(d<<11&4294967295|d>>>21),d=p+(y^u^f)+m[11]+1839030562&4294967295,p=y+(d<<16&4294967295|d>>>16),d=f+(p^y^u)+m[14]+4259657740&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^y)+m[1]+2763975236&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^p)+m[4]+1272893353&4294967295,y=u+(d<<11&4294967295|d>>>21),d=p+(y^u^f)+m[7]+4139469664&4294967295,p=y+(d<<16&4294967295|d>>>16),d=f+(p^y^u)+m[10]+3200236656&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^y)+m[13]+681279174&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^p)+m[0]+3936430074&4294967295,y=u+(d<<11&4294967295|d>>>21),d=p+(y^u^f)+m[3]+3572445317&4294967295,p=y+(d<<16&4294967295|d>>>16),d=f+(p^y^u)+m[6]+76029189&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(f^p^y)+m[9]+3654602809&4294967295,u=f+(d<<4&4294967295|d>>>28),d=y+(u^f^p)+m[12]+3873151461&4294967295,y=u+(d<<11&4294967295|d>>>21),d=p+(y^u^f)+m[15]+530742520&4294967295,p=y+(d<<16&4294967295|d>>>16),d=f+(p^y^u)+m[2]+3299628645&4294967295,f=p+(d<<23&4294967295|d>>>9),d=u+(p^(f|~y))+m[0]+4096336452&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~p))+m[7]+1126891415&4294967295,y=u+(d<<10&4294967295|d>>>22),d=p+(u^(y|~f))+m[14]+2878612391&4294967295,p=y+(d<<15&4294967295|d>>>17),d=f+(y^(p|~u))+m[5]+4237533241&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~y))+m[12]+1700485571&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~p))+m[3]+2399980690&4294967295,y=u+(d<<10&4294967295|d>>>22),d=p+(u^(y|~f))+m[10]+4293915773&4294967295,p=y+(d<<15&4294967295|d>>>17),d=f+(y^(p|~u))+m[1]+2240044497&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~y))+m[8]+1873313359&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~p))+m[15]+4264355552&4294967295,y=u+(d<<10&4294967295|d>>>22),d=p+(u^(y|~f))+m[6]+2734768916&4294967295,p=y+(d<<15&4294967295|d>>>17),d=f+(y^(p|~u))+m[13]+1309151649&4294967295,f=p+(d<<21&4294967295|d>>>11),d=u+(p^(f|~y))+m[4]+4149444226&4294967295,u=f+(d<<6&4294967295|d>>>26),d=y+(f^(u|~p))+m[11]+3174756917&4294967295,y=u+(d<<10&4294967295|d>>>22),d=p+(u^(y|~f))+m[2]+718787259&4294967295,p=y+(d<<15&4294967295|d>>>17),d=f+(y^(p|~u))+m[9]+3951481745&4294967295,g.g[0]=g.g[0]+u&4294967295,g.g[1]=g.g[1]+(p+(d<<21&4294967295|d>>>11))&4294967295,g.g[2]=g.g[2]+p&4294967295,g.g[3]=g.g[3]+y&4294967295}s.prototype.v=function(g,u){u===void 0&&(u=g.length);const f=u-this.blockSize,m=this.C;let p=this.h,y=0;for(;y<u;){if(p==0)for(;y<=f;)o(this,g,y),y+=this.blockSize;if(typeof g=="string"){for(;y<u;)if(m[p++]=g.charCodeAt(y++),p==this.blockSize){o(this,m),p=0;break}}else for(;y<u;)if(m[p++]=g[y++],p==this.blockSize){o(this,m),p=0;break}}this.h=p,this.o+=u},s.prototype.A=function(){var g=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);g[0]=128;for(var u=1;u<g.length-8;++u)g[u]=0;u=this.o*8;for(var f=g.length-8;f<g.length;++f)g[f]=u&255,u/=256;for(this.v(g),g=Array(16),u=0,f=0;f<4;++f)for(let m=0;m<32;m+=8)g[u++]=this.g[f]>>>m&255;return g};function c(g,u){var f=w;return Object.prototype.hasOwnProperty.call(f,g)?f[g]:f[g]=u(g)}function l(g,u){this.h=u;const f=[];let m=!0;for(let p=g.length-1;p>=0;p--){const y=g[p]|0;m&&y==u||(f[p]=y,m=!1)}this.g=f}var w={};function v(g){return-128<=g&&g<128?c(g,function(u){return new l([u|0],u<0?-1:0)}):new l([g|0],g<0?-1:0)}function E(g){if(isNaN(g)||!isFinite(g))return S;if(g<0)return M(E(-g));const u=[];let f=1;for(let m=0;g>=f;m++)u[m]=g/f|0,f*=4294967296;return new l(u,0)}function A(g,u){if(g.length==0)throw Error("number format error: empty string");if(u=u||10,u<2||36<u)throw Error("radix out of range: "+u);if(g.charAt(0)=="-")return M(A(g.substring(1),u));if(g.indexOf("-")>=0)throw Error('number format error: interior "-" character');const f=E(Math.pow(u,8));let m=S;for(let y=0;y<g.length;y+=8){var p=Math.min(8,g.length-y);const d=parseInt(g.substring(y,y+p),u);p<8?(p=E(Math.pow(u,p)),m=m.j(p).add(E(d))):(m=m.j(f),m=m.add(E(d)))}return m}var S=v(0),D=v(1),H=v(16777216);i=l.prototype,i.m=function(){if(B(this))return-M(this).m();let g=0,u=1;for(let f=0;f<this.g.length;f++){const m=this.i(f);g+=(m>=0?m:4294967296+m)*u,u*=4294967296}return g},i.toString=function(g){if(g=g||10,g<2||36<g)throw Error("radix out of range: "+g);if(x(this))return"0";if(B(this))return"-"+M(this).toString(g);const u=E(Math.pow(g,6));var f=this;let m="";for(;;){const p=Yt(f,u).g;f=nt(f,p.j(u));let y=((f.g.length>0?f.g[0]:f.h)>>>0).toString(g);if(f=p,x(f))return y+m;for(;y.length<6;)y="0"+y;m=y+m}},i.i=function(g){return g<0?0:g<this.g.length?this.g[g]:this.h};function x(g){if(g.h!=0)return!1;for(let u=0;u<g.g.length;u++)if(g.g[u]!=0)return!1;return!0}function B(g){return g.h==-1}i.l=function(g){return g=nt(this,g),B(g)?-1:x(g)?0:1};function M(g){const u=g.g.length,f=[];for(let m=0;m<u;m++)f[m]=~g.g[m];return new l(f,~g.h).add(D)}i.abs=function(){return B(this)?M(this):this},i.add=function(g){const u=Math.max(this.g.length,g.g.length),f=[];let m=0;for(let p=0;p<=u;p++){let y=m+(this.i(p)&65535)+(g.i(p)&65535),d=(y>>>16)+(this.i(p)>>>16)+(g.i(p)>>>16);m=d>>>16,y&=65535,d&=65535,f[p]=d<<16|y}return new l(f,f[f.length-1]&-2147483648?-1:0)};function nt(g,u){return g.add(M(u))}i.j=function(g){if(x(this)||x(g))return S;if(B(this))return B(g)?M(this).j(M(g)):M(M(this).j(g));if(B(g))return M(this.j(M(g)));if(this.l(H)<0&&g.l(H)<0)return E(this.m()*g.m());const u=this.g.length+g.g.length,f=[];for(var m=0;m<2*u;m++)f[m]=0;for(m=0;m<this.g.length;m++)for(let p=0;p<g.g.length;p++){const y=this.i(m)>>>16,d=this.i(m)&65535,K=g.i(p)>>>16,Mt=g.i(p)&65535;f[2*m+2*p]+=d*Mt,_t(f,2*m+2*p),f[2*m+2*p+1]+=y*Mt,_t(f,2*m+2*p+1),f[2*m+2*p+1]+=d*K,_t(f,2*m+2*p+1),f[2*m+2*p+2]+=y*K,_t(f,2*m+2*p+2)}for(g=0;g<u;g++)f[g]=f[2*g+1]<<16|f[2*g];for(g=u;g<2*u;g++)f[g]=0;return new l(f,0)};function _t(g,u){for(;(g[u]&65535)!=g[u];)g[u+1]+=g[u]>>>16,g[u]&=65535,u++}function yt(g,u){this.g=g,this.h=u}function Yt(g,u){if(x(u))throw Error("division by zero");if(x(g))return new yt(S,S);if(B(g))return u=Yt(M(g),u),new yt(M(u.g),M(u.h));if(B(u))return u=Yt(g,M(u)),new yt(M(u.g),u.h);if(g.g.length>30){if(B(g)||B(u))throw Error("slowDivide_ only works with positive integers.");for(var f=D,m=u;m.l(g)<=0;)f=It(f),m=It(m);var p=J(f,1),y=J(m,1);for(m=J(m,2),f=J(f,2);!x(m);){var d=y.add(m);d.l(g)<=0&&(p=p.add(f),y=d),m=J(m,1),f=J(f,1)}return u=nt(g,p.j(u)),new yt(p,u)}for(p=S;g.l(u)>=0;){for(f=Math.max(1,Math.floor(g.m()/u.m())),m=Math.ceil(Math.log(f)/Math.LN2),m=m<=48?1:Math.pow(2,m-48),y=E(f),d=y.j(u);B(d)||d.l(g)>0;)f-=m,y=E(f),d=y.j(u);x(y)&&(y=D),p=p.add(y),g=nt(g,d)}return new yt(p,g)}i.B=function(g){return Yt(this,g).h},i.and=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)&g.i(m);return new l(f,this.h&g.h)},i.or=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)|g.i(m);return new l(f,this.h|g.h)},i.xor=function(g){const u=Math.max(this.g.length,g.g.length),f=[];for(let m=0;m<u;m++)f[m]=this.i(m)^g.i(m);return new l(f,this.h^g.h)};function It(g){const u=g.g.length+1,f=[];for(let m=0;m<u;m++)f[m]=g.i(m)<<1|g.i(m-1)>>>31;return new l(f,g.h)}function J(g,u){const f=u>>5;u%=32;const m=g.g.length-f,p=[];for(let y=0;y<m;y++)p[y]=u>0?g.i(y+f)>>>u|g.i(y+f+1)<<32-u:g.i(y+f);return new l(p,g.h)}s.prototype.digest=s.prototype.A,s.prototype.reset=s.prototype.u,s.prototype.update=s.prototype.v,l.prototype.add=l.prototype.add,l.prototype.multiply=l.prototype.j,l.prototype.modulo=l.prototype.B,l.prototype.compare=l.prototype.l,l.prototype.toNumber=l.prototype.m,l.prototype.toString=l.prototype.toString,l.prototype.getBits=l.prototype.i,l.fromNumber=E,l.fromString=A,bi=l}).apply(typeof ir<"u"?ir:typeof self<"u"?self:typeof window<"u"?window:{});var tn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var i,t=Object.defineProperty;function n(e){e=[typeof globalThis=="object"&&globalThis,e,typeof window=="object"&&window,typeof self=="object"&&self,typeof tn=="object"&&tn];for(var r=0;r<e.length;++r){var a=e[r];if(a&&a.Math==Math)return a}throw Error("Cannot find global object")}var s=n(this);function o(e,r){if(r)t:{var a=s;e=e.split(".");for(var h=0;h<e.length-1;h++){var _=e[h];if(!(_ in a))break t;a=a[_]}e=e[e.length-1],h=a[e],r=r(h),r!=h&&r!=null&&t(a,e,{configurable:!0,writable:!0,value:r})}}o("Symbol.dispose",function(e){return e||Symbol("Symbol.dispose")}),o("Array.prototype.values",function(e){return e||function(){return this[Symbol.iterator]()}}),o("Object.entries",function(e){return e||function(r){var a=[],h;for(h in r)Object.prototype.hasOwnProperty.call(r,h)&&a.push([h,r[h]]);return a}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},l=this||self;function w(e){var r=typeof e;return r=="object"&&e!=null||r=="function"}function v(e,r,a){return e.call.apply(e.bind,arguments)}function E(e,r,a){return E=v,E.apply(null,arguments)}function A(e,r){var a=Array.prototype.slice.call(arguments,1);return function(){var h=a.slice();return h.push.apply(h,arguments),e.apply(this,h)}}function S(e,r){function a(){}a.prototype=r.prototype,e.Z=r.prototype,e.prototype=new a,e.prototype.constructor=e,e.Ob=function(h,_,I){for(var T=Array(arguments.length-2),P=2;P<arguments.length;P++)T[P-2]=arguments[P];return r.prototype[_].apply(h,T)}}var D=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?e=>e&&AsyncContext.Snapshot.wrap(e):e=>e;function H(e){const r=e.length;if(r>0){const a=Array(r);for(let h=0;h<r;h++)a[h]=e[h];return a}return[]}function x(e,r){for(let h=1;h<arguments.length;h++){const _=arguments[h];var a=typeof _;if(a=a!="object"?a:_?Array.isArray(_)?"array":a:"null",a=="array"||a=="object"&&typeof _.length=="number"){a=e.length||0;const I=_.length||0;e.length=a+I;for(let T=0;T<I;T++)e[a+T]=_[T]}else e.push(_)}}class B{constructor(r,a){this.i=r,this.j=a,this.h=0,this.g=null}get(){let r;return this.h>0?(this.h--,r=this.g,this.g=r.next,r.next=null):r=this.i(),r}}function M(e){l.setTimeout(()=>{throw e},0)}function nt(){var e=g;let r=null;return e.g&&(r=e.g,e.g=e.g.next,e.g||(e.h=null),r.next=null),r}class _t{constructor(){this.h=this.g=null}add(r,a){const h=yt.get();h.set(r,a),this.h?this.h.next=h:this.g=h,this.h=h}}var yt=new B(()=>new Yt,e=>e.reset());class Yt{constructor(){this.next=this.g=this.h=null}set(r,a){this.h=r,this.g=a,this.next=null}reset(){this.next=this.g=this.h=null}}let It,J=!1,g=new _t,u=()=>{const e=Promise.resolve(void 0);It=()=>{e.then(f)}};function f(){for(var e;e=nt();){try{e.h.call(e.g)}catch(a){M(a)}var r=yt;r.j(e),r.h<100&&(r.h++,e.next=r.g,r.g=e)}J=!1}function m(){this.u=this.u,this.C=this.C}m.prototype.u=!1,m.prototype.dispose=function(){this.u||(this.u=!0,this.N())},m.prototype[Symbol.dispose]=function(){this.dispose()},m.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function p(e,r){this.type=e,this.g=this.target=r,this.defaultPrevented=!1}p.prototype.h=function(){this.defaultPrevented=!0};var y=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var e=!1,r=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const a=()=>{};l.addEventListener("test",a,r),l.removeEventListener("test",a,r)}catch{}return e})();function d(e){return/^[\s\xa0]*$/.test(e)}function K(e,r){p.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e&&this.init(e,r)}S(K,p),K.prototype.init=function(e,r){const a=this.type=e.type,h=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;this.target=e.target||e.srcElement,this.g=r,r=e.relatedTarget,r||(a=="mouseover"?r=e.fromElement:a=="mouseout"&&(r=e.toElement)),this.relatedTarget=r,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=e.pointerType,this.state=e.state,this.i=e,e.defaultPrevented&&K.Z.h.call(this)},K.prototype.h=function(){K.Z.h.call(this);const e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var Mt="closure_listenable_"+(Math.random()*1e6|0),mo=0;function _o(e,r,a,h,_){this.listener=e,this.proxy=null,this.src=r,this.type=a,this.capture=!!h,this.ha=_,this.key=++mo,this.da=this.fa=!1}function Be(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function He(e,r,a){for(const h in e)r.call(a,e[h],h,e)}function yo(e,r){for(const a in e)r.call(void 0,e[a],a,e)}function Ni(e){const r={};for(const a in e)r[a]=e[a];return r}const Oi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Di(e,r){let a,h;for(let _=1;_<arguments.length;_++){h=arguments[_];for(a in h)e[a]=h[a];for(let I=0;I<Oi.length;I++)a=Oi[I],Object.prototype.hasOwnProperty.call(h,a)&&(e[a]=h[a])}}function $e(e){this.src=e,this.g={},this.h=0}$e.prototype.add=function(e,r,a,h,_){const I=e.toString();e=this.g[I],e||(e=this.g[I]=[],this.h++);const T=En(e,r,h,_);return T>-1?(r=e[T],a||(r.fa=!1)):(r=new _o(r,this.src,I,!!h,_),r.fa=a,e.push(r)),r};function vn(e,r){const a=r.type;if(a in e.g){var h=e.g[a],_=Array.prototype.indexOf.call(h,r,void 0),I;(I=_>=0)&&Array.prototype.splice.call(h,_,1),I&&(Be(r),e.g[a].length==0&&(delete e.g[a],e.h--))}}function En(e,r,a,h){for(let _=0;_<e.length;++_){const I=e[_];if(!I.da&&I.listener==r&&I.capture==!!a&&I.ha==h)return _}return-1}var Tn="closure_lm_"+(Math.random()*1e6|0),Sn={};function Li(e,r,a,h,_){if(Array.isArray(r)){for(let I=0;I<r.length;I++)Li(e,r[I],a,h,_);return null}return a=xi(a),e&&e[Mt]?e.J(r,a,w(h)?!!h.capture:!1,_):Io(e,r,a,!1,h,_)}function Io(e,r,a,h,_,I){if(!r)throw Error("Invalid event type");const T=w(_)?!!_.capture:!!_;let P=bn(e);if(P||(e[Tn]=P=new $e(e)),a=P.add(r,a,h,T,I),a.proxy)return a;if(h=wo(),a.proxy=h,h.src=e,h.listener=a,e.addEventListener)y||(_=T),_===void 0&&(_=!1),e.addEventListener(r.toString(),h,_);else if(e.attachEvent)e.attachEvent(Ui(r.toString()),h);else if(e.addListener&&e.removeListener)e.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return a}function wo(){function e(a){return r.call(e.src,e.listener,a)}const r=vo;return e}function Mi(e,r,a,h,_){if(Array.isArray(r))for(var I=0;I<r.length;I++)Mi(e,r[I],a,h,_);else h=w(h)?!!h.capture:!!h,a=xi(a),e&&e[Mt]?(e=e.i,I=String(r).toString(),I in e.g&&(r=e.g[I],a=En(r,a,h,_),a>-1&&(Be(r[a]),Array.prototype.splice.call(r,a,1),r.length==0&&(delete e.g[I],e.h--)))):e&&(e=bn(e))&&(r=e.g[r.toString()],e=-1,r&&(e=En(r,a,h,_)),(a=e>-1?r[e]:null)&&An(a))}function An(e){if(typeof e!="number"&&e&&!e.da){var r=e.src;if(r&&r[Mt])vn(r.i,e);else{var a=e.type,h=e.proxy;r.removeEventListener?r.removeEventListener(a,h,e.capture):r.detachEvent?r.detachEvent(Ui(a),h):r.addListener&&r.removeListener&&r.removeListener(h),(a=bn(r))?(vn(a,e),a.h==0&&(a.src=null,r[Tn]=null)):Be(e)}}}function Ui(e){return e in Sn?Sn[e]:Sn[e]="on"+e}function vo(e,r){if(e.da)e=!0;else{r=new K(r,this);const a=e.listener,h=e.ha||e.src;e.fa&&An(e),e=a.call(h,r)}return e}function bn(e){return e=e[Tn],e instanceof $e?e:null}var Pn="__closure_events_fn_"+(Math.random()*1e9>>>0);function xi(e){return typeof e=="function"?e:(e[Pn]||(e[Pn]=function(r){return e.handleEvent(r)}),e[Pn])}function $(){m.call(this),this.i=new $e(this),this.M=this,this.G=null}S($,m),$.prototype[Mt]=!0,$.prototype.removeEventListener=function(e,r,a,h){Mi(this,e,r,a,h)};function W(e,r){var a,h=e.G;if(h)for(a=[];h;h=h.G)a.push(h);if(e=e.M,h=r.type||r,typeof r=="string")r=new p(r,e);else if(r instanceof p)r.target=r.target||e;else{var _=r;r=new p(h,e),Di(r,_)}_=!0;let I,T;if(a)for(T=a.length-1;T>=0;T--)I=r.g=a[T],_=We(I,h,!0,r)&&_;if(I=r.g=e,_=We(I,h,!0,r)&&_,_=We(I,h,!1,r)&&_,a)for(T=0;T<a.length;T++)I=r.g=a[T],_=We(I,h,!1,r)&&_}$.prototype.N=function(){if($.Z.N.call(this),this.i){var e=this.i;for(const r in e.g){const a=e.g[r];for(let h=0;h<a.length;h++)Be(a[h]);delete e.g[r],e.h--}}this.G=null},$.prototype.J=function(e,r,a,h){return this.i.add(String(e),r,!1,a,h)},$.prototype.K=function(e,r,a,h){return this.i.add(String(e),r,!0,a,h)};function We(e,r,a,h){if(r=e.i.g[String(r)],!r)return!0;r=r.concat();let _=!0;for(let I=0;I<r.length;++I){const T=r[I];if(T&&!T.da&&T.capture==a){const P=T.listener,V=T.ha||T.src;T.fa&&vn(e.i,T),_=P.call(V,h)!==!1&&_}}return _&&!h.defaultPrevented}function Eo(e,r){if(typeof e!="function")if(e&&typeof e.handleEvent=="function")e=E(e.handleEvent,e);else throw Error("Invalid listener argument");return Number(r)>2147483647?-1:l.setTimeout(e,r||0)}function Fi(e){e.g=Eo(()=>{e.g=null,e.i&&(e.i=!1,Fi(e))},e.l);const r=e.h;e.h=null,e.m.apply(null,r)}class To extends m{constructor(r,a){super(),this.m=r,this.l=a,this.h=null,this.i=!1,this.g=null}j(r){this.h=arguments,this.g?this.i=!0:Fi(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ue(e){m.call(this),this.h=e,this.g={}}S(ue,m);var Vi=[];function ji(e){He(e.g,function(r,a){this.g.hasOwnProperty(a)&&An(r)},e),e.g={}}ue.prototype.N=function(){ue.Z.N.call(this),ji(this)},ue.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Rn=l.JSON.stringify,So=l.JSON.parse,Ao=class{stringify(e){return l.JSON.stringify(e,void 0)}parse(e){return l.JSON.parse(e,void 0)}};function Bi(){}function bo(){}var de={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Cn(){p.call(this,"d")}S(Cn,p);function kn(){p.call(this,"c")}S(kn,p);var Qt={},Hi=null;function Nn(){return Hi=Hi||new $}Qt.Ia="serverreachability";function $i(e){p.call(this,Qt.Ia,e)}S($i,p);function fe(e){const r=Nn();W(r,new $i(r))}Qt.STAT_EVENT="statevent";function Wi(e,r){p.call(this,Qt.STAT_EVENT,e),this.stat=r}S(Wi,p);function z(e){const r=Nn();W(r,new Wi(r,e))}Qt.Ja="timingevent";function zi(e,r){p.call(this,Qt.Ja,e),this.size=r}S(zi,p);function pe(e,r){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){e()},r)}function ge(){this.g=!0}ge.prototype.ua=function(){this.g=!1};function Po(e,r,a,h,_,I){e.info(function(){if(e.g)if(I){var T="",P=I.split("&");for(let O=0;O<P.length;O++){var V=P[O].split("=");if(V.length>1){const j=V[0];V=V[1];const st=j.split("_");T=st.length>=2&&st[1]=="type"?T+(j+"="+V+"&"):T+(j+"=redacted&")}}}else T=null;else T=I;return"XMLHTTP REQ ("+h+") [attempt "+_+"]: "+r+`
`+a+`
`+T})}function Ro(e,r,a,h,_,I,T){e.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+_+"]: "+r+`
`+a+`
`+I+" "+T})}function Zt(e,r,a,h){e.info(function(){return"XMLHTTP TEXT ("+r+"): "+ko(e,a)+(h?" "+h:"")})}function Co(e,r){e.info(function(){return"TIMEOUT: "+r})}ge.prototype.info=function(){};function ko(e,r){if(!e.g)return r;if(!r)return null;try{const I=JSON.parse(r);if(I){for(e=0;e<I.length;e++)if(Array.isArray(I[e])){var a=I[e];if(!(a.length<2)){var h=a[1];if(Array.isArray(h)&&!(h.length<1)){var _=h[0];if(_!="noop"&&_!="stop"&&_!="close")for(let T=1;T<h.length;T++)h[T]=""}}}}return Rn(I)}catch{return r}}var On={NO_ERROR:0,TIMEOUT:8},No={},Gi;function Dn(){}S(Dn,Bi),Dn.prototype.g=function(){return new XMLHttpRequest},Gi=new Dn;function me(e){return encodeURIComponent(String(e))}function Oo(e){var r=1;e=e.split(":");const a=[];for(;r>0&&e.length;)a.push(e.shift()),r--;return e.length&&a.push(e.join(":")),a}function wt(e,r,a,h){this.j=e,this.i=r,this.l=a,this.S=h||1,this.V=new ue(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new qi}function qi(){this.i=null,this.g="",this.h=!1}var Ki={},Ln={};function Mn(e,r,a){e.M=1,e.A=Ge(it(r)),e.u=a,e.R=!0,Ji(e,null)}function Ji(e,r){e.F=Date.now(),ze(e),e.B=it(e.A);var a=e.B,h=e.S;Array.isArray(h)||(h=[String(h)]),cs(a.i,"t",h),e.C=0,a=e.j.L,e.h=new qi,e.g=bs(e.j,a?r:null,!e.u),e.P>0&&(e.O=new To(E(e.Y,e,e.g),e.P)),r=e.V,a=e.g,h=e.ba;var _="readystatechange";Array.isArray(_)||(_&&(Vi[0]=_.toString()),_=Vi);for(let I=0;I<_.length;I++){const T=Li(a,_[I],h||r.handleEvent,!1,r.h||r);if(!T)break;r.g[T.key]=T}r=e.J?Ni(e.J):{},e.u?(e.v||(e.v="POST"),r["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.B,e.v,e.u,r)):(e.v="GET",e.g.ea(e.B,e.v,null,r)),fe(),Po(e.i,e.v,e.B,e.l,e.S,e.u)}wt.prototype.ba=function(e){e=e.target;const r=this.O;r&&Tt(e)==3?r.j():this.Y(e)},wt.prototype.Y=function(e){try{if(e==this.g)t:{const P=Tt(this.g),V=this.g.ya(),O=this.g.ca();if(!(P<3)&&(P!=3||this.g&&(this.h.h||this.g.la()||gs(this.g)))){this.K||P!=4||V==7||(V==8||O<=0?fe(3):fe(2)),Un(this);var r=this.g.ca();this.X=r;var a=Do(this);if(this.o=r==200,Ro(this.i,this.v,this.B,this.l,this.S,P,r),this.o){if(this.U&&!this.L){e:{if(this.g){var h,_=this.g;if((h=_.g?_.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!d(h)){var I=h;break e}}I=null}if(e=I)Zt(this.i,this.l,e,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,xn(this,e);else{this.o=!1,this.m=3,z(12),Ut(this),_e(this);break t}}if(this.R){e=!0;let j;for(;!this.K&&this.C<a.length;)if(j=Lo(this,a),j==Ln){P==4&&(this.m=4,z(14),e=!1),Zt(this.i,this.l,null,"[Incomplete Response]");break}else if(j==Ki){this.m=4,z(15),Zt(this.i,this.l,a,"[Invalid Chunk]"),e=!1;break}else Zt(this.i,this.l,j,null),xn(this,j);if(Xi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),P!=4||a.length!=0||this.h.h||(this.m=1,z(16),e=!1),this.o=this.o&&e,!e)Zt(this.i,this.l,a,"[Invalid Chunked Response]"),Ut(this),_e(this);else if(a.length>0&&!this.W){this.W=!0;var T=this.j;T.g==this&&T.aa&&!T.P&&(T.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),zn(T),T.P=!0,z(11))}}else Zt(this.i,this.l,a,null),xn(this,a);P==4&&Ut(this),this.o&&!this.K&&(P==4?Es(this.j,this):(this.o=!1,ze(this)))}else Ko(this.g),r==400&&a.indexOf("Unknown SID")>0?(this.m=3,z(12)):(this.m=0,z(13)),Ut(this),_e(this)}}}catch{}finally{}};function Do(e){if(!Xi(e))return e.g.la();const r=gs(e.g);if(r==="")return"";let a="";const h=r.length,_=Tt(e.g)==4;if(!e.h.i){if(typeof TextDecoder>"u")return Ut(e),_e(e),"";e.h.i=new l.TextDecoder}for(let I=0;I<h;I++)e.h.h=!0,a+=e.h.i.decode(r[I],{stream:!(_&&I==h-1)});return r.length=0,e.h.g+=a,e.C=0,e.h.g}function Xi(e){return e.g?e.v=="GET"&&e.M!=2&&e.j.Aa:!1}function Lo(e,r){var a=e.C,h=r.indexOf(`
`,a);return h==-1?Ln:(a=Number(r.substring(a,h)),isNaN(a)?Ki:(h+=1,h+a>r.length?Ln:(r=r.slice(h,h+a),e.C=h+a,r)))}wt.prototype.cancel=function(){this.K=!0,Ut(this)};function ze(e){e.T=Date.now()+e.H,Yi(e,e.H)}function Yi(e,r){if(e.D!=null)throw Error("WatchDog timer not null");e.D=pe(E(e.aa,e),r)}function Un(e){e.D&&(l.clearTimeout(e.D),e.D=null)}wt.prototype.aa=function(){this.D=null;const e=Date.now();e-this.T>=0?(Co(this.i,this.B),this.M!=2&&(fe(),z(17)),Ut(this),this.m=2,_e(this)):Yi(this,this.T-e)};function _e(e){e.j.I==0||e.K||Es(e.j,e)}function Ut(e){Un(e);var r=e.O;r&&typeof r.dispose=="function"&&r.dispose(),e.O=null,ji(e.V),e.g&&(r=e.g,e.g=null,r.abort(),r.dispose())}function xn(e,r){try{var a=e.j;if(a.I!=0&&(a.g==e||Fn(a.h,e))){if(!e.L&&Fn(a.h,e)&&a.I==3){try{var h=a.Ba.g.parse(r)}catch{h=null}if(Array.isArray(h)&&h.length==3){var _=h;if(_[0]==0){t:if(!a.v){if(a.g)if(a.g.F+3e3<e.F)Ye(a),Je(a);else break t;Wn(a),z(18)}}else a.xa=_[1],0<a.xa-a.K&&_[2]<37500&&a.F&&a.A==0&&!a.C&&(a.C=pe(E(a.Va,a),6e3));ts(a.h)<=1&&a.ta&&(a.ta=void 0)}else Ft(a,11)}else if((e.L||a.g==e)&&Ye(a),!d(r))for(_=a.Ba.g.parse(r),r=0;r<_.length;r++){let O=_[r];const j=O[0];if(!(j<=a.K))if(a.K=j,O=O[1],a.I==2)if(O[0]=="c"){a.M=O[1],a.ba=O[2];const st=O[3];st!=null&&(a.ka=st,a.j.info("VER="+a.ka));const Vt=O[4];Vt!=null&&(a.za=Vt,a.j.info("SVER="+a.za));const St=O[5];St!=null&&typeof St=="number"&&St>0&&(h=1.5*St,a.O=h,a.j.info("backChannelRequestTimeoutMs_="+h)),h=a;const At=e.g;if(At){const Qe=At.g?At.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Qe){var I=h.h;I.g||Qe.indexOf("spdy")==-1&&Qe.indexOf("quic")==-1&&Qe.indexOf("h2")==-1||(I.j=I.l,I.g=new Set,I.h&&(Vn(I,I.h),I.h=null))}if(h.G){const Gn=At.g?At.g.getResponseHeader("X-HTTP-Session-Id"):null;Gn&&(h.wa=Gn,L(h.J,h.G,Gn))}}a.I=3,a.l&&a.l.ra(),a.aa&&(a.T=Date.now()-e.F,a.j.info("Handshake RTT: "+a.T+"ms")),h=a;var T=e;if(h.na=As(h,h.L?h.ba:null,h.W),T.L){es(h.h,T);var P=T,V=h.O;V&&(P.H=V),P.D&&(Un(P),ze(P)),h.g=T}else ws(h);a.i.length>0&&Xe(a)}else O[0]!="stop"&&O[0]!="close"||Ft(a,7);else a.I==3&&(O[0]=="stop"||O[0]=="close"?O[0]=="stop"?Ft(a,7):$n(a):O[0]!="noop"&&a.l&&a.l.qa(O),a.A=0)}}fe(4)}catch{}}var Mo=class{constructor(e,r){this.g=e,this.map=r}};function Qi(e){this.l=e||10,l.PerformanceNavigationTiming?(e=l.performance.getEntriesByType("navigation"),e=e.length>0&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2")):e=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Zi(e){return e.h?!0:e.g?e.g.size>=e.j:!1}function ts(e){return e.h?1:e.g?e.g.size:0}function Fn(e,r){return e.h?e.h==r:e.g?e.g.has(r):!1}function Vn(e,r){e.g?e.g.add(r):e.h=r}function es(e,r){e.h&&e.h==r?e.h=null:e.g&&e.g.has(r)&&e.g.delete(r)}Qi.prototype.cancel=function(){if(this.i=ns(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}};function ns(e){if(e.h!=null)return e.i.concat(e.h.G);if(e.g!=null&&e.g.size!==0){let r=e.i;for(const a of e.g.values())r=r.concat(a.G);return r}return H(e.i)}var is=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Uo(e,r){if(e){e=e.split("&");for(let a=0;a<e.length;a++){const h=e[a].indexOf("=");let _,I=null;h>=0?(_=e[a].substring(0,h),I=e[a].substring(h+1)):_=e[a],r(_,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function vt(e){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let r;e instanceof vt?(this.l=e.l,ye(this,e.j),this.o=e.o,this.g=e.g,Ie(this,e.u),this.h=e.h,jn(this,hs(e.i)),this.m=e.m):e&&(r=String(e).match(is))?(this.l=!1,ye(this,r[1]||"",!0),this.o=we(r[2]||""),this.g=we(r[3]||"",!0),Ie(this,r[4]),this.h=we(r[5]||"",!0),jn(this,r[6]||"",!0),this.m=we(r[7]||"")):(this.l=!1,this.i=new Ee(null,this.l))}vt.prototype.toString=function(){const e=[];var r=this.j;r&&e.push(ve(r,ss,!0),":");var a=this.g;return(a||r=="file")&&(e.push("//"),(r=this.o)&&e.push(ve(r,ss,!0),"@"),e.push(me(a).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a=this.u,a!=null&&e.push(":",String(a))),(a=this.h)&&(this.g&&a.charAt(0)!="/"&&e.push("/"),e.push(ve(a,a.charAt(0)=="/"?Vo:Fo,!0))),(a=this.i.toString())&&e.push("?",a),(a=this.m)&&e.push("#",ve(a,Bo)),e.join("")},vt.prototype.resolve=function(e){const r=it(this);let a=!!e.j;a?ye(r,e.j):a=!!e.o,a?r.o=e.o:a=!!e.g,a?r.g=e.g:a=e.u!=null;var h=e.h;if(a)Ie(r,e.u);else if(a=!!e.h){if(h.charAt(0)!="/")if(this.g&&!this.h)h="/"+h;else{var _=r.h.lastIndexOf("/");_!=-1&&(h=r.h.slice(0,_+1)+h)}if(_=h,_==".."||_==".")h="";else if(_.indexOf("./")!=-1||_.indexOf("/.")!=-1){h=_.lastIndexOf("/",0)==0,_=_.split("/");const I=[];for(let T=0;T<_.length;){const P=_[T++];P=="."?h&&T==_.length&&I.push(""):P==".."?((I.length>1||I.length==1&&I[0]!="")&&I.pop(),h&&T==_.length&&I.push("")):(I.push(P),h=!0)}h=I.join("/")}else h=_}return a?r.h=h:a=e.i.toString()!=="",a?jn(r,hs(e.i)):a=!!e.m,a&&(r.m=e.m),r};function it(e){return new vt(e)}function ye(e,r,a){e.j=a?we(r,!0):r,e.j&&(e.j=e.j.replace(/:$/,""))}function Ie(e,r){if(r){if(r=Number(r),isNaN(r)||r<0)throw Error("Bad port number "+r);e.u=r}else e.u=null}function jn(e,r,a){r instanceof Ee?(e.i=r,Ho(e.i,e.l)):(a||(r=ve(r,jo)),e.i=new Ee(r,e.l))}function L(e,r,a){e.i.set(r,a)}function Ge(e){return L(e,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),e}function we(e,r){return e?r?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function ve(e,r,a){return typeof e=="string"?(e=encodeURI(e).replace(r,xo),a&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function xo(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(e&15).toString(16)}var ss=/[#\/\?@]/g,Fo=/[#\?:]/g,Vo=/[#\?]/g,jo=/[#\?@]/g,Bo=/#/g;function Ee(e,r){this.h=this.g=null,this.i=e||null,this.j=!!r}function xt(e){e.g||(e.g=new Map,e.h=0,e.i&&Uo(e.i,function(r,a){e.add(decodeURIComponent(r.replace(/\+/g," ")),a)}))}i=Ee.prototype,i.add=function(e,r){xt(this),this.i=null,e=te(this,e);let a=this.g.get(e);return a||this.g.set(e,a=[]),a.push(r),this.h+=1,this};function rs(e,r){xt(e),r=te(e,r),e.g.has(r)&&(e.i=null,e.h-=e.g.get(r).length,e.g.delete(r))}function os(e,r){return xt(e),r=te(e,r),e.g.has(r)}i.forEach=function(e,r){xt(this),this.g.forEach(function(a,h){a.forEach(function(_){e.call(r,_,h,this)},this)},this)};function as(e,r){xt(e);let a=[];if(typeof r=="string")os(e,r)&&(a=a.concat(e.g.get(te(e,r))));else for(e=Array.from(e.g.values()),r=0;r<e.length;r++)a=a.concat(e[r]);return a}i.set=function(e,r){return xt(this),this.i=null,e=te(this,e),os(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[r]),this.h+=1,this},i.get=function(e,r){return e?(e=as(this,e),e.length>0?String(e[0]):r):r};function cs(e,r,a){rs(e,r),a.length>0&&(e.i=null,e.g.set(te(e,r),H(a)),e.h+=a.length)}i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],r=Array.from(this.g.keys());for(let h=0;h<r.length;h++){var a=r[h];const _=me(a);a=as(this,a);for(let I=0;I<a.length;I++){let T=_;a[I]!==""&&(T+="="+me(a[I])),e.push(T)}}return this.i=e.join("&")};function hs(e){const r=new Ee;return r.i=e.i,e.g&&(r.g=new Map(e.g),r.h=e.h),r}function te(e,r){return r=String(r),e.j&&(r=r.toLowerCase()),r}function Ho(e,r){r&&!e.j&&(xt(e),e.i=null,e.g.forEach(function(a,h){const _=h.toLowerCase();h!=_&&(rs(this,h),cs(this,_,a))},e)),e.j=r}function $o(e,r){const a=new ge;if(l.Image){const h=new Image;h.onload=A(Et,a,"TestLoadImage: loaded",!0,r,h),h.onerror=A(Et,a,"TestLoadImage: error",!1,r,h),h.onabort=A(Et,a,"TestLoadImage: abort",!1,r,h),h.ontimeout=A(Et,a,"TestLoadImage: timeout",!1,r,h),l.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=e}else r(!1)}function Wo(e,r){const a=new ge,h=new AbortController,_=setTimeout(()=>{h.abort(),Et(a,"TestPingServer: timeout",!1,r)},1e4);fetch(e,{signal:h.signal}).then(I=>{clearTimeout(_),I.ok?Et(a,"TestPingServer: ok",!0,r):Et(a,"TestPingServer: server error",!1,r)}).catch(()=>{clearTimeout(_),Et(a,"TestPingServer: error",!1,r)})}function Et(e,r,a,h,_){try{_&&(_.onload=null,_.onerror=null,_.onabort=null,_.ontimeout=null),h(a)}catch{}}function zo(){this.g=new Ao}function Bn(e){this.i=e.Sb||null,this.h=e.ab||!1}S(Bn,Bi),Bn.prototype.g=function(){return new qe(this.i,this.h)};function qe(e,r){$.call(this),this.H=e,this.o=r,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}S(qe,$),i=qe.prototype,i.open=function(e,r){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=e,this.D=r,this.readyState=1,Se(this)},i.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const r={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};e&&(r.body=e),(this.H||l).fetch(new Request(this.D,r)).then(this.Pa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,Te(this)),this.readyState=0},i.Pa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Se(this)),this.g&&(this.readyState=3,Se(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;ls(this)}else e.text().then(this.Oa.bind(this),this.ga.bind(this))};function ls(e){e.j.read().then(e.Ma.bind(e)).catch(e.ga.bind(e))}i.Ma=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var r=e.value?e.value:new Uint8Array(0);(r=this.B.decode(r,{stream:!e.done}))&&(this.response=this.responseText+=r)}e.done?Te(this):Se(this),this.readyState==3&&ls(this)}},i.Oa=function(e){this.g&&(this.response=this.responseText=e,Te(this))},i.Na=function(e){this.g&&(this.response=e,Te(this))},i.ga=function(){this.g&&Te(this)};function Te(e){e.readyState=4,e.l=null,e.j=null,e.B=null,Se(e)}i.setRequestHeader=function(e,r){this.A.append(e,r)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],r=this.h.entries();for(var a=r.next();!a.done;)a=a.value,e.push(a[0]+": "+a[1]),a=r.next();return e.join(`\r
`)};function Se(e){e.onreadystatechange&&e.onreadystatechange.call(e)}Object.defineProperty(qe.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});function us(e){let r="";return He(e,function(a,h){r+=h,r+=":",r+=a,r+=`\r
`}),r}function Hn(e,r,a){t:{for(h in a){var h=!1;break t}h=!0}h||(a=us(a),typeof e=="string"?a!=null&&me(a):L(e,r,a))}function U(e){$.call(this),this.headers=new Map,this.L=e||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}S(U,$);var Go=/^https?$/i,qo=["POST","PUT"];i=U.prototype,i.Fa=function(e){this.H=e},i.ea=function(e,r,a,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);r=r?r.toUpperCase():"GET",this.D=e,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Gi.g(),this.g.onreadystatechange=D(E(this.Ca,this));try{this.B=!0,this.g.open(r,String(e),!0),this.B=!1}catch(I){ds(this,I);return}if(e=a||"",a=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var _ in h)a.set(_,h[_]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const I of h.keys())a.set(I,h.get(I));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(a.keys()).find(I=>I.toLowerCase()=="content-type"),_=l.FormData&&e instanceof l.FormData,!(Array.prototype.indexOf.call(qo,r,void 0)>=0)||h||_||a.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[I,T]of a)this.g.setRequestHeader(I,T);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(e),this.v=!1}catch(I){ds(this,I)}};function ds(e,r){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=r,e.o=5,fs(e),Ke(e)}function fs(e){e.A||(e.A=!0,W(e,"complete"),W(e,"error"))}i.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=e||7,W(this,"complete"),W(this,"abort"),Ke(this))},i.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ke(this,!0)),U.Z.N.call(this)},i.Ca=function(){this.u||(this.B||this.v||this.j?ps(this):this.Xa())},i.Xa=function(){ps(this)};function ps(e){if(e.h&&typeof c<"u"){if(e.v&&Tt(e)==4)setTimeout(e.Ca.bind(e),0);else if(W(e,"readystatechange"),Tt(e)==4){e.h=!1;try{const I=e.ca();t:switch(I){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}var a;if(!(a=r)){var h;if(h=I===0){let T=String(e.D).match(is)[1]||null;!T&&l.self&&l.self.location&&(T=l.self.location.protocol.slice(0,-1)),h=!Go.test(T?T.toLowerCase():"")}a=h}if(a)W(e,"complete"),W(e,"success");else{e.o=6;try{var _=Tt(e)>2?e.g.statusText:""}catch{_=""}e.l=_+" ["+e.ca()+"]",fs(e)}}finally{Ke(e)}}}}function Ke(e,r){if(e.g){e.m&&(clearTimeout(e.m),e.m=null);const a=e.g;e.g=null,r||W(e,"ready");try{a.onreadystatechange=null}catch{}}}i.isActive=function(){return!!this.g};function Tt(e){return e.g?e.g.readyState:0}i.ca=function(){try{return Tt(this)>2?this.g.status:-1}catch{return-1}},i.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},i.La=function(e){if(this.g){var r=this.g.responseText;return e&&r.indexOf(e)==0&&(r=r.substring(e.length)),So(r)}};function gs(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.F){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function Ko(e){const r={};e=(e.g&&Tt(e)>=2&&e.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<e.length;h++){if(d(e[h]))continue;var a=Oo(e[h]);const _=a[0];if(a=a[1],typeof a!="string")continue;a=a.trim();const I=r[_]||[];r[_]=I,I.push(a)}yo(r,function(h){return h.join(", ")})}i.ya=function(){return this.o},i.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ae(e,r,a){return a&&a.internalChannelParams&&a.internalChannelParams[e]||r}function ms(e){this.za=0,this.i=[],this.j=new ge,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ae("failFast",!1,e),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ae("baseRetryDelayMs",5e3,e),this.Za=Ae("retryDelaySeedMs",1e4,e),this.Ta=Ae("forwardChannelMaxRetries",2,e),this.va=Ae("forwardChannelRequestTimeoutMs",2e4,e),this.ma=e&&e.xmlHttpFactory||void 0,this.Ua=e&&e.Rb||void 0,this.Aa=e&&e.useFetchStreams||!1,this.O=void 0,this.L=e&&e.supportsCrossDomainXhr||!1,this.M="",this.h=new Qi(e&&e.concurrentRequestLimit),this.Ba=new zo,this.S=e&&e.fastHandshake||!1,this.R=e&&e.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=e&&e.Pb||!1,e&&e.ua&&this.j.ua(),e&&e.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&e&&e.detectBufferingProxy||!1,this.ia=void 0,e&&e.longPollingTimeout&&e.longPollingTimeout>0&&(this.ia=e.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}i=ms.prototype,i.ka=8,i.I=1,i.connect=function(e,r,a,h){z(0),this.W=e,this.H=r||{},a&&h!==void 0&&(this.H.OSID=a,this.H.OAID=h),this.F=this.X,this.J=As(this,null,this.W),Xe(this)};function $n(e){if(_s(e),e.I==3){var r=e.V++,a=it(e.J);if(L(a,"SID",e.M),L(a,"RID",r),L(a,"TYPE","terminate"),be(e,a),r=new wt(e,e.j,r),r.M=2,r.A=Ge(it(a)),a=!1,l.navigator&&l.navigator.sendBeacon)try{a=l.navigator.sendBeacon(r.A.toString(),"")}catch{}!a&&l.Image&&(new Image().src=r.A,a=!0),a||(r.g=bs(r.j,null),r.g.ea(r.A)),r.F=Date.now(),ze(r)}Ss(e)}function Je(e){e.g&&(zn(e),e.g.cancel(),e.g=null)}function _s(e){Je(e),e.v&&(l.clearTimeout(e.v),e.v=null),Ye(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&l.clearTimeout(e.m),e.m=null)}function Xe(e){if(!Zi(e.h)&&!e.m){e.m=!0;var r=e.Ea;It||u(),J||(It(),J=!0),g.add(r,e),e.D=0}}function Jo(e,r){return ts(e.h)>=e.h.j-(e.m?1:0)?!1:e.m?(e.i=r.G.concat(e.i),!0):e.I==1||e.I==2||e.D>=(e.Sa?0:e.Ta)?!1:(e.m=pe(E(e.Ea,e,r),Ts(e,e.D)),e.D++,!0)}i.Ea=function(e){if(this.m)if(this.m=null,this.I==1){if(!e){this.V=Math.floor(Math.random()*1e5),e=this.V++;const _=new wt(this,this.j,e);let I=this.o;if(this.U&&(I?(I=Ni(I),Di(I,this.U)):I=this.U),this.u!==null||this.R||(_.J=I,I=null),this.S)t:{for(var r=0,a=0;a<this.i.length;a++){e:{var h=this.i[a];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(r+=h,r>4096){r=a;break t}if(r===4096||a===this.i.length-1){r=a+1;break t}}r=1e3}else r=1e3;r=Is(this,_,r),a=it(this.J),L(a,"RID",e),L(a,"CVER",22),this.G&&L(a,"X-HTTP-Session-Id",this.G),be(this,a),I&&(this.R?r="headers="+me(us(I))+"&"+r:this.u&&Hn(a,this.u,I)),Vn(this.h,_),this.Ra&&L(a,"TYPE","init"),this.S?(L(a,"$req",r),L(a,"SID","null"),_.U=!0,Mn(_,a,null)):Mn(_,a,r),this.I=2}}else this.I==3&&(e?ys(this,e):this.i.length==0||Zi(this.h)||ys(this))};function ys(e,r){var a;r?a=r.l:a=e.V++;const h=it(e.J);L(h,"SID",e.M),L(h,"RID",a),L(h,"AID",e.K),be(e,h),e.u&&e.o&&Hn(h,e.u,e.o),a=new wt(e,e.j,a,e.D+1),e.u===null&&(a.J=e.o),r&&(e.i=r.G.concat(e.i)),r=Is(e,a,1e3),a.H=Math.round(e.va*.5)+Math.round(e.va*.5*Math.random()),Vn(e.h,a),Mn(a,h,r)}function be(e,r){e.H&&He(e.H,function(a,h){L(r,h,a)}),e.l&&He({},function(a,h){L(r,h,a)})}function Is(e,r,a){a=Math.min(e.i.length,a);const h=e.l?E(e.l.Ka,e.l,e):null;t:{var _=e.i;let P=-1;for(;;){const V=["count="+a];P==-1?a>0?(P=_[0].g,V.push("ofs="+P)):P=0:V.push("ofs="+P);let O=!0;for(let j=0;j<a;j++){var I=_[j].g;const st=_[j].map;if(I-=P,I<0)P=Math.max(0,_[j].g-100),O=!1;else try{I="req"+I+"_"||"";try{var T=st instanceof Map?st:Object.entries(st);for(const[Vt,St]of T){let At=St;w(St)&&(At=Rn(St)),V.push(I+Vt+"="+encodeURIComponent(At))}}catch(Vt){throw V.push(I+"type="+encodeURIComponent("_badmap")),Vt}}catch{h&&h(st)}}if(O){T=V.join("&");break t}}T=void 0}return e=e.i.splice(0,a),r.G=e,T}function ws(e){if(!e.g&&!e.v){e.Y=1;var r=e.Da;It||u(),J||(It(),J=!0),g.add(r,e),e.A=0}}function Wn(e){return e.g||e.v||e.A>=3?!1:(e.Y++,e.v=pe(E(e.Da,e),Ts(e,e.A)),e.A++,!0)}i.Da=function(){if(this.v=null,vs(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var e=4*this.T;this.j.info("BP detection timer enabled: "+e),this.B=pe(E(this.Wa,this),e)}},i.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,z(10),Je(this),vs(this))};function zn(e){e.B!=null&&(l.clearTimeout(e.B),e.B=null)}function vs(e){e.g=new wt(e,e.j,"rpc",e.Y),e.u===null&&(e.g.J=e.o),e.g.P=0;var r=it(e.na);L(r,"RID","rpc"),L(r,"SID",e.M),L(r,"AID",e.K),L(r,"CI",e.F?"0":"1"),!e.F&&e.ia&&L(r,"TO",e.ia),L(r,"TYPE","xmlhttp"),be(e,r),e.u&&e.o&&Hn(r,e.u,e.o),e.O&&(e.g.H=e.O);var a=e.g;e=e.ba,a.M=1,a.A=Ge(it(r)),a.u=null,a.R=!0,Ji(a,e)}i.Va=function(){this.C!=null&&(this.C=null,Je(this),Wn(this),z(19))};function Ye(e){e.C!=null&&(l.clearTimeout(e.C),e.C=null)}function Es(e,r){var a=null;if(e.g==r){Ye(e),zn(e),e.g=null;var h=2}else if(Fn(e.h,r))a=r.G,es(e.h,r),h=1;else return;if(e.I!=0){if(r.o)if(h==1){a=r.u?r.u.length:0,r=Date.now()-r.F;var _=e.D;h=Nn(),W(h,new zi(h,a)),Xe(e)}else ws(e);else if(_=r.m,_==3||_==0&&r.X>0||!(h==1&&Jo(e,r)||h==2&&Wn(e)))switch(a&&a.length>0&&(r=e.h,r.i=r.i.concat(a)),_){case 1:Ft(e,5);break;case 4:Ft(e,10);break;case 3:Ft(e,6);break;default:Ft(e,2)}}}function Ts(e,r){let a=e.Qa+Math.floor(Math.random()*e.Za);return e.isActive()||(a*=2),a*r}function Ft(e,r){if(e.j.info("Error code "+r),r==2){var a=E(e.bb,e),h=e.Ua;const _=!h;h=new vt(h||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||ye(h,"https"),Ge(h),_?$o(h.toString(),a):Wo(h.toString(),a)}else z(2);e.I=0,e.l&&e.l.pa(r),Ss(e),_s(e)}i.bb=function(e){e?(this.j.info("Successfully pinged google.com"),z(2)):(this.j.info("Failed to ping google.com"),z(1))};function Ss(e){if(e.I=0,e.ja=[],e.l){const r=ns(e.h);(r.length!=0||e.i.length!=0)&&(x(e.ja,r),x(e.ja,e.i),e.h.i.length=0,H(e.i),e.i.length=0),e.l.oa()}}function As(e,r,a){var h=a instanceof vt?it(a):new vt(a);if(h.g!="")r&&(h.g=r+"."+h.g),Ie(h,h.u);else{var _=l.location;h=_.protocol,r=r?r+"."+_.hostname:_.hostname,_=+_.port;const I=new vt(null);h&&ye(I,h),r&&(I.g=r),_&&Ie(I,_),a&&(I.h=a),h=I}return a=e.G,r=e.wa,a&&r&&L(h,a,r),L(h,"VER",e.ka),be(e,h),h}function bs(e,r,a){if(r&&!e.L)throw Error("Can't create secondary domain capable XhrIo object.");return r=e.Aa&&!e.ma?new U(new Bn({ab:a})):new U(e.ma),r.Fa(e.L),r}i.isActive=function(){return!!this.l&&this.l.isActive(this)};function Ps(){}i=Ps.prototype,i.ra=function(){},i.qa=function(){},i.pa=function(){},i.oa=function(){},i.isActive=function(){return!0},i.Ka=function(){};function X(e,r){$.call(this),this.g=new ms(r),this.l=e,this.h=r&&r.messageUrlParams||null,e=r&&r.messageHeaders||null,r&&r.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=r&&r.initMessageHeaders||null,r&&r.messageContentType&&(e?e["X-WebChannel-Content-Type"]=r.messageContentType:e={"X-WebChannel-Content-Type":r.messageContentType}),r&&r.sa&&(e?e["X-WebChannel-Client-Profile"]=r.sa:e={"X-WebChannel-Client-Profile":r.sa}),this.g.U=e,(e=r&&r.Qb)&&!d(e)&&(this.g.u=e),this.A=r&&r.supportsCrossDomainXhr||!1,this.v=r&&r.sendRawJson||!1,(r=r&&r.httpSessionIdParam)&&!d(r)&&(this.g.G=r,e=this.h,e!==null&&r in e&&(e=this.h,r in e&&delete e[r])),this.j=new ee(this)}S(X,$),X.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},X.prototype.close=function(){$n(this.g)},X.prototype.o=function(e){var r=this.g;if(typeof e=="string"){var a={};a.__data__=e,e=a}else this.v&&(a={},a.__data__=Rn(e),e=a);r.i.push(new Mo(r.Ya++,e)),r.I==3&&Xe(r)},X.prototype.N=function(){this.g.l=null,delete this.j,$n(this.g),delete this.g,X.Z.N.call(this)};function Rs(e){Cn.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var r=e.__sm__;if(r){t:{for(const a in r){e=a;break t}e=void 0}(this.i=e)&&(e=this.i,r=r!==null&&e in r?r[e]:void 0),this.data=r}else this.data=e}S(Rs,Cn);function Cs(){kn.call(this),this.status=1}S(Cs,kn);function ee(e){this.g=e}S(ee,Ps),ee.prototype.ra=function(){W(this.g,"a")},ee.prototype.qa=function(e){W(this.g,new Rs(e))},ee.prototype.pa=function(e){W(this.g,new Cs)},ee.prototype.oa=function(){W(this.g,"b")},X.prototype.send=X.prototype.o,X.prototype.open=X.prototype.m,X.prototype.close=X.prototype.close,On.NO_ERROR=0,On.TIMEOUT=8,On.HTTP_ERROR=6,No.COMPLETE="complete",bo.EventType=de,de.OPEN="a",de.CLOSE="b",de.ERROR="c",de.MESSAGE="d",$.prototype.listen=$.prototype.J,U.prototype.listenOnce=U.prototype.K,U.prototype.getLastError=U.prototype.Ha,U.prototype.getLastErrorCode=U.prototype.ya,U.prototype.getStatus=U.prototype.ca,U.prototype.getResponseJson=U.prototype.La,U.prototype.getResponseText=U.prototype.la,U.prototype.send=U.prototype.ea,U.prototype.setWithCredentials=U.prototype.Fa}).apply(typeof tn<"u"?tn:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}G.UNAUTHENTICATED=new G(null),G.GOOGLE_CREDENTIALS=new G("google-credentials-uid"),G.FIRST_PARTY=new G("first-party-uid"),G.MOCK_USER=new G("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve="12.12.0";function Cl(i){Ve=i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ce=new fi("@firebase/firestore");function tt(i,...t){if(ce.logLevel<=N.DEBUG){const n=t.map(Pi);ce.debug(`Firestore (${Ve}): ${i}`,...n)}}function ao(i,...t){if(ce.logLevel<=N.ERROR){const n=t.map(Pi);ce.error(`Firestore (${Ve}): ${i}`,...n)}}function kl(i,...t){if(ce.logLevel<=N.WARN){const n=t.map(Pi);ce.warn(`Firestore (${Ve}): ${i}`,...n)}}function Pi(i){if(typeof i=="string")return i;try{return(function(n){return JSON.stringify(n)})(i)}catch{return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function De(i,t,n){let s="Unexpected state";typeof t=="string"?s=t:n=t,co(i,s,n)}function co(i,t,n){let s=`FIRESTORE (${Ve}) INTERNAL ASSERTION FAILED: ${t} (ID: ${i.toString(16)})`;if(n!==void 0)try{s+=" CONTEXT: "+JSON.stringify(n)}catch{s+=" CONTEXT: "+n}throw ao(s),new Error(s)}function Re(i,t,n,s){let o="Unexpected state";typeof n=="string"?o=n:s=n,i||co(t,o,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class k extends gt{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ce{constructor(){this.promise=new Promise(((t,n)=>{this.resolve=t,this.reject=n}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class Nl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable((()=>n(G.UNAUTHENTICATED)))}shutdown(){}}class Ol{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable((()=>n(this.token.user)))}shutdown(){this.changeListener=null}}class Dl{constructor(t){this.t=t,this.currentUser=G.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){Re(this.o===void 0,42304);let s=this.i;const o=v=>this.i!==s?(s=this.i,n(v)):Promise.resolve();let c=new Ce;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Ce,t.enqueueRetryable((()=>o(this.currentUser)))};const l=()=>{const v=c;t.enqueueRetryable((async()=>{await v.promise,await o(this.currentUser)}))},w=v=>{tt("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),l())};this.t.onInit((v=>w(v))),setTimeout((()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?w(v):(tt("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Ce)}}),0),l()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((s=>this.i!==t?(tt("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(Re(typeof s.accessToken=="string",31837,{l:s}),new ho(s.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return Re(t===null||typeof t=="string",2055,{h:t}),new G(t)}}class Ll{constructor(t,n,s){this.P=t,this.T=n,this.I=s,this.type="FirstParty",this.user=G.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const t=this.A();return t&&this.R.set("Authorization",t),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class Ml{constructor(t,n,s){this.P=t,this.T=n,this.I=s}getToken(){return Promise.resolve(new Ll(this.P,this.T,this.I))}start(t,n){t.enqueueRetryable((()=>n(G.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class sr{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Ul{constructor(t,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Q(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,n){Re(this.o===void 0,3512);const s=c=>{c.error!=null&&tt("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const l=c.token!==this.m;return this.m=c.token,tt("FirebaseAppCheckTokenProvider",`Received ${l?"new":"existing"} token.`),l?n(c.token):Promise.resolve()};this.o=c=>{t.enqueueRetryable((()=>s(c)))};const o=c=>{tt("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((c=>o(c))),setTimeout((()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?o(c):tt("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new sr(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((n=>n?(Re(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new sr(n.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xl(i){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(i);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<i;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const o=xl(40);for(let c=0;c<o.length;++c)s.length<20&&o[c]<n&&(s+=t.charAt(o[c]%62))}return s}}function Lt(i,t){return i<t?-1:i>t?1:0}function Vl(i,t){const n=Math.min(i.length,t.length);for(let s=0;s<n;s++){const o=i.charAt(s),c=t.charAt(s);if(o!==c)return ti(o)===ti(c)?Lt(o,c):ti(o)?1:-1}return Lt(i.length,t.length)}const jl=55296,Bl=57343;function ti(i){const t=i.charCodeAt(0);return t>=jl&&t<=Bl}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rr="__name__";class rt{constructor(t,n,s){n===void 0?n=0:n>t.length&&De(637,{offset:n,range:t.length}),s===void 0?s=t.length-n:s>t.length-n&&De(1746,{length:s,range:t.length-n}),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return rt.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof rt?t.forEach((s=>{n.push(s)})):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let o=0;o<s;o++){const c=rt.compareSegments(t.get(o),n.get(o));if(c!==0)return c}return Lt(t.length,n.length)}static compareSegments(t,n){const s=rt.isNumericId(t),o=rt.isNumericId(n);return s&&!o?-1:!s&&o?1:s&&o?rt.extractNumericId(t).compare(rt.extractNumericId(n)):Vl(t,n)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return bi.fromString(t.substring(4,t.length-2))}}class Y extends rt{construct(t,n,s){return new Y(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new k(C.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter((o=>o.length>0)))}return new Y(n)}static emptyPath(){return new Y([])}}const Hl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Bt extends rt{construct(t,n,s){return new Bt(t,n,s)}static isValidIdentifier(t){return Hl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Bt.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===rr}static keyField(){return new Bt([rr])}static fromServerFormat(t){const n=[];let s="",o=0;const c=()=>{if(s.length===0)throw new k(C.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let l=!1;for(;o<t.length;){const w=t[o];if(w==="\\"){if(o+1===t.length)throw new k(C.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const v=t[o+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new k(C.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=v,o+=2}else w==="`"?(l=!l,o++):w!=="."||l?(s+=w,o++):(c(),o++)}if(c(),l)throw new k(C.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Bt(n)}static emptyPath(){return new Bt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(t){this.path=t}static fromPath(t){return new $t(Y.fromString(t))}static fromName(t){return new $t(Y.fromString(t).popFirst(5))}static empty(){return new $t(Y.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&Y.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return Y.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new $t(new Y(t.slice()))}}function $l(i,t,n,s){if(t===!0&&s===!0)throw new k(C.INVALID_ARGUMENT,`${i} and ${n} cannot be used together.`)}function Wl(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}function zl(i){if(i===void 0)return"undefined";if(i===null)return"null";if(typeof i=="string")return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if(typeof i=="number"||typeof i=="boolean")return""+i;if(typeof i=="object"){if(i instanceof Array)return"an array";{const t=(function(s){return s.constructor?s.constructor.name:null})(i);return t?`a custom ${t} object`:"an object"}}return typeof i=="function"?"a function":De(12329,{type:typeof i})}function Gl(i,t){if("_delegate"in i&&(i=i._delegate),!(i instanceof t)){if(t.name===i.constructor.name)throw new k(C.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zl(i);throw new k(C.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return i}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(i,t){const n={typeString:i};return t&&(n.value=t),n}function je(i,t){if(!Wl(i))throw new k(C.INVALID_ARGUMENT,"JSON must be an object");let n;for(const s in t)if(t[s]){const o=t[s].typeString,c="value"in t[s]?{value:t[s].value}:void 0;if(!(s in i)){n=`JSON missing required field: '${s}'`;break}const l=i[s];if(o&&typeof l!==o){n=`JSON field '${s}' must be a ${o}.`;break}if(c!==void 0&&l!==c.value){n=`Expected '${s}' field to equal '${c.value}'`;break}}if(n)throw new k(C.INVALID_ARGUMENT,n);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or=-62135596800,ar=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(t){return ot.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor((t-1e3*n)*ar);return new ot(n,s)}constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new k(C.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<or)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new k(C.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ar}_compareTo(t){return this.seconds===t.seconds?Lt(this.nanoseconds,t.nanoseconds):Lt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:ot._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(je(t,ot._jsonSchema))return new ot(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-or;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}ot._jsonSchemaVersion="firestore/timestamp/1.0",ot._jsonSchema={type:F("string",ot._jsonSchemaVersion),seconds:F("number"),nanoseconds:F("number")};function ql(i){return i.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xt{constructor(t){this.binaryString=t}static fromBase64String(t){const n=(function(o){try{return atob(o)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new Kl("Invalid base64 string: "+c):c}})(t);return new Xt(n)}static fromUint8Array(t){const n=(function(o){let c="";for(let l=0;l<o.length;++l)c+=String.fromCharCode(o[l]);return c})(t);return new Xt(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(n){return btoa(n)})(this.binaryString)}toUint8Array(){return(function(n){const s=new Uint8Array(n.length);for(let o=0;o<n.length;o++)s[o]=n.charCodeAt(o);return s})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return Lt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}Xt.EMPTY_BYTE_STRING=new Xt("");const li="(default)";class mn{constructor(t,n){this.projectId=t,this.database=n||li}static empty(){return new mn("","")}get isDefaultDatabase(){return this.database===li}isEqual(t){return t instanceof mn&&t.projectId===this.projectId&&t.database===this.database}}function Jl(i,t){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new k(C.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new mn(i.options.projectId,t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(t,n=null,s=[],o=[],c=null,l="F",w=null,v=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=o,this.limit=c,this.limitType=l,this.startAt=w,this.endAt=v,this.Ee=null,this.Ie=null,this.Re=null,this.startAt,this.endAt}}function Yl(i){return new Xl(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cr,R;(R=cr||(cr={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new bi([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ql=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zl=1048576;function ei(){return typeof document<"u"?document:null}class tu{constructor(t,n,s=1e3,o=1.5,c=6e4){this.Ci=t,this.timerId=n,this.R_=s,this.A_=o,this.V_=c,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(t){this.cancel();const n=Math.floor(this.d_+this.y_()),s=Math.max(0,Date.now()-this.f_),o=Math.max(0,n-s);o>0&&tt("ExponentialBackoff",`Backing off for ${o} ms (base delay: ${this.d_} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,o,(()=>(this.f_=Date.now(),t()))),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri{constructor(t,n,s,o,c){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=o,this.removalCallback=c,this.deferred=new Ce,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((l=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,n,s,o,c){const l=Date.now()+s,w=new Ri(t,n,l,o,c);return w.start(s),w}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new k(C.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var hr,lr;(lr=hr||(hr={})).Ma="default",lr.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(i){const t={};return i.timeoutSeconds!==void 0&&(t.timeoutSeconds=i.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu="ComponentProvider",ur=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lo="firestore.googleapis.com",dr=!0;class fr{constructor(t){if(t.host===void 0){if(t.ssl!==void 0)throw new k(C.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lo,this.ssl=dr}else this.host=t.host,this.ssl=t.ssl??dr;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Ql;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Zl)throw new k(C.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}$l("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=eu(t.experimentalLongPollingOptions??{}),(function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new k(C.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(s,o){return s.timeoutSeconds===o.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class uo{constructor(t,n,s,o){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=o,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new fr({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new k(C.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new k(C.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new fr(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(s){if(!s)return new Nl;switch(s.type){case"firstParty":return new Ml(s.sessionIndex||"0",s.iamToken||null,s.authTokenFactory||null);case"provider":return s.client;default:throw new k(C.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(n){const s=ur.get(n);s&&(tt(nu,"Removing Datastore"),ur.delete(n),s.terminate())})(this),Promise.resolve()}}function iu(i,t,n,s={}){var E;i=Gl(i,uo);const o=_n(t),c=i._getSettings(),l={...c,emulatorOptions:i._getEmulatorOptions()},w=`${t}:${n}`;o&&Ar(`https://${w}`),c.host!==lo&&c.host!==w&&kl("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const v={...c,host:w,ssl:o,emulatorOptions:s};if(!qt(v,l)&&(i._setSettings(v),s.mockUserToken)){let A,S;if(typeof s.mockUserToken=="string")A=s.mockUserToken,S=G.MOCK_USER;else{A=oa(s.mockUserToken,(E=i._app)==null?void 0:E.options.projectId);const D=s.mockUserToken.sub||s.mockUserToken.user_id;if(!D)throw new k(C.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");S=new G(D)}i._authCredentials=new Ol(new ho(A,S))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new Ci(this.firestore,t,this._query)}}class at{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ki(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new at(this.firestore,t,this._key)}toJSON(){return{type:at._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,n,s){if(je(n,at._jsonSchema))return new at(t,s||null,new $t(Y.fromString(n.referencePath)))}}at._jsonSchemaVersion="firestore/documentReference/1.0",at._jsonSchema={type:F("string",at._jsonSchemaVersion),referencePath:F("string")};class ki extends Ci{constructor(t,n,s){super(t,n,Yl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new at(this.firestore,null,new $t(t))}withConverter(t){return new ki(this.firestore,t,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="AsyncQueue";class gr{constructor(t=Promise.resolve()){this.Yu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new tu(this,"async_queue_retry"),this._c=()=>{const s=ei();s&&tt(pr,"Visibility state changed to "+s.visibilityState),this.M_.w_()},this.ac=t;const n=ei();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.uc(),this.cc(t)}enterRestrictedMode(t){if(!this.ec){this.ec=!0,this.sc=t||!1;const n=ei();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this._c)}}enqueue(t){if(this.uc(),this.ec)return new Promise((()=>{}));const n=new Ce;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise))).then((()=>n.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Yu.push(t),this.lc())))}async lc(){if(this.Yu.length!==0){try{await this.Yu[0](),this.Yu.shift(),this.M_.reset()}catch(t){if(!ql(t))throw t;tt(pr,"Operation failed with retryable error: "+t)}this.Yu.length>0&&this.M_.p_((()=>this.lc()))}}cc(t){const n=this.ac.then((()=>(this.rc=!0,t().catch((s=>{throw this.nc=s,this.rc=!1,ao("INTERNAL UNHANDLED ERROR: ",mr(s)),s})).then((s=>(this.rc=!1,s))))));return this.ac=n,n}enqueueAfterDelay(t,n,s){this.uc(),this.oc.indexOf(t)>-1&&(n=0);const o=Ri.createAndSchedule(this,t,n,s,(c=>this.hc(c)));return this.tc.push(o),o}uc(){this.nc&&De(47125,{Pc:mr(this.nc)})}verifyOperationInProgress(){}async Tc(){let t;do t=this.ac,await t;while(t!==this.ac)}Ec(t){for(const n of this.tc)if(n.timerId===t)return!0;return!1}Ic(t){return this.Tc().then((()=>{this.tc.sort(((n,s)=>n.targetTimeMs-s.targetTimeMs));for(const n of this.tc)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.Tc()}))}Rc(t){this.oc.push(t)}hc(t){const n=this.tc.indexOf(t);this.tc.splice(n,1)}}function mr(i){let t=i.message||"";return i.stack&&(t=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),t}class su extends uo{constructor(t,n,s,o){super(t,n,s,o),this.type="firestore",this._queue=new gr,this._persistenceKey=(o==null?void 0:o.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new gr(t),this._firestoreClient=void 0,await t}}}function fu(i,t){const n=typeof i=="object"?i:Rr(),s=typeof i=="string"?i:t||li,o=gi(n,"firestore").getImmediate({identifier:s});if(!o._initialized){const c=sa("firestore");c&&iu(o,...c)}return o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new lt(Xt.fromBase64String(t))}catch(n){throw new k(C.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new lt(Xt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(je(t,lt._jsonSchema))return lt.fromBase64String(t.bytes)}}lt._jsonSchemaVersion="firestore/bytes/1.0",lt._jsonSchema={type:F("string",lt._jsonSchemaVersion),bytes:F("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new k(C.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Bt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new k(C.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new k(C.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return Lt(this._lat,t._lat)||Lt(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:zt._jsonSchemaVersion}}static fromJSON(t){if(je(t,zt._jsonSchema))return new zt(t.latitude,t.longitude)}}zt._jsonSchemaVersion="firestore/geoPoint/1.0",zt._jsonSchema={type:F("string",zt._jsonSchemaVersion),latitude:F("number"),longitude:F("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this._values=(t||[]).map((n=>n))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(s,o){if(s.length!==o.length)return!1;for(let c=0;c<s.length;++c)if(s[c]!==o[c])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Gt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(je(t,Gt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((n=>typeof n=="number")))return new Gt(t.vectorValues);throw new k(C.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Gt._jsonSchemaVersion="firestore/vectorValue/1.0",Gt._jsonSchema={type:F("string",Gt._jsonSchemaVersion),vectorValues:F("object")};function po(i,t,n){if((t=mt(t))instanceof fo)return t._internalPath;if(typeof t=="string")return ou(i,t);throw ui("Field path arguments must be of type string or ",i)}const ru=new RegExp("[~\\*/\\[\\]]");function ou(i,t,n){if(t.search(ru)>=0)throw ui(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,i);try{return new fo(...t.split("."))._internalPath}catch{throw ui(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,i)}}function ui(i,t,n,s,o){let c=`Function ${t}() called with invalid data`;c+=". ";let l="";return new k(C.INVALID_ARGUMENT,c+i+l)}const _r="@firebase/firestore",yr="4.14.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(t,n,s,o,c){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=o,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new at(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new au(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var t;return((t=this._document)==null?void 0:t.data.clone().value.mapValue.fields)??void 0}get(t){if(this._document){const n=this._document.data.field(po("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class au extends go{data(){return super.data()}}class en{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class re extends go{constructor(t,n,s,o,c,l){super(t,n,s,o,l),this._firestore=t,this._firestoreImpl=t,this.metadata=c}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new an(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(po("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new k(C.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,n={};return n.type=re._jsonSchemaVersion,n.bundle="",n.bundleSource="DocumentSnapshot",n.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?n:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),n.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),n)}}re._jsonSchemaVersion="firestore/documentSnapshot/1.0",re._jsonSchema={type:F("string",re._jsonSchemaVersion),bundleSource:F("string","DocumentSnapshot"),bundleName:F("string"),bundle:F("string")};class an extends re{data(t={}){return super.data(t)}}class ke{constructor(t,n,s,o){this._firestore=t,this._userDataWriter=n,this._snapshot=o,this.metadata=new en(o.hasPendingWrites,o.fromCache),this.query=s}get docs(){const t=[];return this.forEach((n=>t.push(n))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach((s=>{t.call(n,new an(this._firestore,this._userDataWriter,s.key,s,new en(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new k(C.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=(function(o,c){if(o._snapshot.oldDocs.isEmpty()){let l=0;return o._snapshot.docChanges.map((w=>{const v=new an(o._firestore,o._userDataWriter,w.doc.key,w.doc,new en(o._snapshot.mutatedKeys.has(w.doc.key),o._snapshot.fromCache),o.query.converter);return w.doc,{type:"added",doc:v,oldIndex:-1,newIndex:l++}}))}{let l=o._snapshot.oldDocs;return o._snapshot.docChanges.filter((w=>c||w.type!==3)).map((w=>{const v=new an(o._firestore,o._userDataWriter,w.doc.key,w.doc,new en(o._snapshot.mutatedKeys.has(w.doc.key),o._snapshot.fromCache),o.query.converter);let E=-1,A=-1;return w.type!==0&&(E=l.indexOf(w.doc.key),l=l.delete(w.doc.key)),w.type!==1&&(l=l.add(w.doc),A=l.indexOf(w.doc.key)),{type:cu(w.type),doc:v,oldIndex:E,newIndex:A}}))}})(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new k(C.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=ke._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Fl.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const n=[],s=[],o=[];return this.docs.forEach((c=>{c._document!==null&&(n.push(c._document),s.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),o.push(c.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function cu(i){switch(i){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return De(61501,{type:i})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ke._jsonSchemaVersion="firestore/querySnapshot/1.0",ke._jsonSchema={type:F("string",ke._jsonSchemaVersion),bundleSource:F("string","QuerySnapshot"),bundleName:F("string"),bundle:F("string")};(function(t,n=!0){Cl(he),oe(new Kt("firestore",((s,{instanceIdentifier:o,options:c})=>{const l=s.getProvider("app").getImmediate(),w=new su(new Dl(s.getProvider("auth-internal")),new Ul(l,s.getProvider("app-check-internal")),Jl(l,o),l);return c={useFetchStreams:n,...c},w._setSettings(c),w}),"PUBLIC").setMultipleInstances(!0)),Dt(_r,yr,t),Dt(_r,yr,"esm2020")})();export{Rt as G,fu as a,lu as b,du as g,Ic as i,hu as o,uu as s};
