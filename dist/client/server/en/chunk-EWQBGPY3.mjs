import './polyfills.server.mjs';
import{a as Z,l as de}from"./chunk-7W4EFSXQ.mjs";import{$ as L,Da as q,I as E,Ia as z,K as w,Ka as I,L as F,M as B,O as p,Pa as ce,R,V as H,W as d,aa as ue,da as $,f as se,fa as C,i as oe,n as ae,ra as a,s as le,ua as W,ya as g}from"./chunk-FJFEIO2B.mjs";import{a as l,b as u}from"./chunk-63Y3PX24.mjs";var Ve=(()=>{let e=class e{constructor(i,r){this._renderer=i,this._elementRef=r,this.onChange=s=>{},this.onTouched=()=>{}}setProperty(i,r){this._renderer.setProperty(this._elementRef.nativeElement,i,r)}registerOnTouched(i){this.onTouched=i}registerOnChange(i){this.onChange=i}setDisabledState(i){this.setProperty("disabled",i)}};e.\u0275fac=function(r){return new(r||e)(a(W),a($))},e.\u0275dir=d({type:e});let t=e;return t})(),We=(()=>{let e=class e extends Ve{};e.\u0275fac=(()=>{let i;return function(s){return(i||(i=ue(e)))(s||e)}})(),e.\u0275dir=d({type:e,features:[g]});let t=e;return t})(),De=new p("");var qe={provide:De,useExisting:w(()=>be),multi:!0};function ze(){let t=Z()?Z().getUserAgent():"";return/android (\d+)/.test(t.toLowerCase())}var Ze=new p(""),be=(()=>{let e=class e extends Ve{constructor(i,r,s){super(i,r),this._compositionMode=s,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!ze())}writeValue(i){let r=i??"";this.setProperty("value",r)}_handleInput(i){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(i)}_compositionStart(){this._composing=!0}_compositionEnd(i){this._composing=!1,this._compositionMode&&this.onChange(i)}};e.\u0275fac=function(r){return new(r||e)(a(W),a($),a(Ze,8))},e.\u0275dir=d({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,s){r&1&&z("input",function(c){return s._handleInput(c.target.value)})("blur",function(){return s.onTouched()})("compositionstart",function(){return s._compositionStart()})("compositionend",function(c){return s._compositionEnd(c.target.value)})},features:[I([qe]),g]});let t=e;return t})();function h(t){return t==null||(typeof t=="string"||Array.isArray(t))&&t.length===0}function Ae(t){return t!=null&&typeof t.length=="number"}var Me=new p(""),Ee=new p(""),Xe=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,he=class{static min(e){return Ye(e)}static max(e){return Ke(e)}static required(e){return Je(e)}static requiredTrue(e){return Qe(e)}static email(e){return et(e)}static minLength(e){return tt(e)}static maxLength(e){return it(e)}static pattern(e){return nt(e)}static nullValidator(e){return we(e)}static compose(e){return Ne(e)}static composeAsync(e){return ke(e)}};function Ye(t){return e=>{if(h(e.value)||h(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<t?{min:{min:t,actual:e.value}}:null}}function Ke(t){return e=>{if(h(e.value)||h(t))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>t?{max:{max:t,actual:e.value}}:null}}function Je(t){return h(t.value)?{required:!0}:null}function Qe(t){return t.value===!0?null:{required:!0}}function et(t){return h(t.value)||Xe.test(t.value)?null:{email:!0}}function tt(t){return e=>h(e.value)||!Ae(e.value)?null:e.value.length<t?{minlength:{requiredLength:t,actualLength:e.value.length}}:null}function it(t){return e=>Ae(e.value)&&e.value.length>t?{maxlength:{requiredLength:t,actualLength:e.value.length}}:null}function nt(t){if(!t)return we;let e,n;return typeof t=="string"?(n="",t.charAt(0)!=="^"&&(n+="^"),n+=t,t.charAt(t.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=t.toString(),e=t),i=>{if(h(i.value))return null;let r=i.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function we(t){return null}function Fe(t){return t!=null}function Ie(t){return ce(t)?oe(t):t}function Se(t){let e={};return t.forEach(n=>{e=n!=null?l(l({},e),n):e}),Object.keys(e).length===0?null:e}function Oe(t,e){return e.map(n=>n(t))}function rt(t){return!t.validate}function xe(t){return t.map(e=>rt(e)?e:n=>e.validate(n))}function Ne(t){if(!t)return null;let e=t.filter(Fe);return e.length==0?null:function(n){return Se(Oe(n,e))}}function Pe(t){return t!=null?Ne(xe(t)):null}function ke(t){if(!t)return null;let e=t.filter(Fe);return e.length==0?null:function(n){let i=Oe(n,e).map(Ie);return le(i).pipe(ae(Se))}}function Ge(t){return t!=null?ke(xe(t)):null}function fe(t,e){return t===null?[e]:Array.isArray(t)?[...t,e]:[t,e]}function je(t){return t._rawValidators}function Te(t){return t._rawAsyncValidators}function X(t){return t?Array.isArray(t)?t:[t]:[]}function x(t,e){return Array.isArray(t)?t.includes(e):t===e}function pe(t,e){let n=X(e);return X(t).forEach(r=>{x(n,r)||n.push(r)}),n}function ge(t,e){return X(e).filter(n=>!x(t,n))}var N=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=Pe(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=Ge(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},y=class extends N{get formDirective(){return null}get path(){return null}},M=class extends N{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},P=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},st={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},qt=u(l({},st),{"[class.ng-submitted]":"isSubmitted"}),zt=(()=>{let e=class e extends P{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(M,2))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,s){r&2&&q("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)},features:[g]});let t=e;return t})(),Zt=(()=>{let e=class e extends P{constructor(i){super(i)}};e.\u0275fac=function(r){return new(r||e)(a(y,10))},e.\u0275dir=d({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,s){r&2&&q("ng-untouched",s.isUntouched)("ng-touched",s.isTouched)("ng-pristine",s.isPristine)("ng-dirty",s.isDirty)("ng-valid",s.isValid)("ng-invalid",s.isInvalid)("ng-pending",s.isPending)("ng-submitted",s.isSubmitted)},features:[g]});let t=e;return t})();var V="VALID",S="INVALID",m="PENDING",D="DISABLED",f=class{},k=class extends f{constructor(e,n){super(),this.value=e,this.source=n}},b=class extends f{constructor(e,n){super(),this.pristine=e,this.source=n}},A=class extends f{constructor(e,n){super(),this.touched=e,this.source=n}},v=class extends f{constructor(e,n){super(),this.status=e,this.source=n}},Y=class extends f{constructor(e){super(),this.source=e}},K=class extends f{constructor(e){super(),this.source=e}};function ee(t){return(U(t)?t.validators:t)||null}function ot(t){return Array.isArray(t)?Pe(t):t||null}function te(t,e){return(U(e)?e.asyncValidators:t)||null}function at(t){return Array.isArray(t)?Ge(t):t||null}function U(t){return t!=null&&!Array.isArray(t)&&typeof t=="object"}function Ue(t,e,n){let i=t.controls;if(!(e?Object.keys(i):i).length)throw new E(1e3,"");if(!i[n])throw new E(1001,"")}function Be(t,e,n){t._forEachChild((i,r)=>{if(n[r]===void 0)throw new E(1002,"")})}var _=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._events=new se,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===V}get invalid(){return this.status===S}get pending(){return this.status==m}get disabled(){return this.status===D}get enabled(){return this.status!==D}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(pe(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(pe(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(ge(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(ge(e,this._rawAsyncValidators))}hasValidator(e){return x(this._rawValidators,e)}hasAsyncValidator(e){return x(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let n=this.touched===!1;this.touched=!0;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(u(l({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new A(!0,i))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(n=>n.markAllAsTouched(e))}markAsUntouched(e={}){let n=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:i})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,i),n&&e.emitEvent!==!1&&this._events.next(new A(!1,i))}markAsDirty(e={}){let n=this.pristine===!0;this.pristine=!1;let i=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(u(l({},e),{sourceControl:i})),n&&e.emitEvent!==!1&&this._events.next(new b(!1,i))}markAsPristine(e={}){let n=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let i=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,i),n&&e.emitEvent!==!1&&this._events.next(new b(!0,i))}markAsPending(e={}){this.status=m;let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new v(this.status,n)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(u(l({},e),{sourceControl:n}))}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=D,this.errors=null,this._forEachChild(r=>{r.disable(u(l({},e),{onlySelf:!0}))}),this._updateValue();let i=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new k(this.value,i)),this._events.next(new v(this.status,i)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(u(l({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=V,this._forEachChild(i=>{i.enable(u(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(u(l({},e),{skipPristineCheck:n}),this),this._onDisabledChange.forEach(i=>i(!1))}_updateAncestors(e,n){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},n),this._parent._updateTouched({},n))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let i=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===V||this.status===m)&&this._runAsyncValidator(i,e.emitEvent)}let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new k(this.value,n)),this._events.next(new v(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(u(l({},e),{sourceControl:n}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?D:V}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,n){if(this.asyncValidator){this.status=m,this._hasOwnPendingAsyncValidator={emitEvent:n!==!1};let i=Ie(this.asyncValidator(this));this._asyncValidationSubscription=i.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:n,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1,this,n.shouldHaveEmitted)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((i,r)=>i&&i._find(r),this)}getError(e,n){let i=n?this.get(n):this;return i&&i.errors?i.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,n,i){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||i)&&this._events.next(new v(this.status,n)),this._parent&&this._parent._updateControlsErrors(e,n,i)}_initObservables(){this.valueChanges=new C,this.statusChanges=new C}_calculateStatus(){return this._allControlsDisabled()?D:this.errors?S:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(m)?m:this._anyControlsHaveStatus(S)?S:V}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,n){let i=!this._anyControlsDirty(),r=this.pristine!==i;this.pristine=i,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),r&&this._events.next(new b(this.pristine,n))}_updateTouched(e={},n){this.touched=this._anyControlsTouched(),this._events.next(new A(this.touched,n)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){U(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=ot(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=at(this._rawAsyncValidators)}},G=class extends _{constructor(e,n,i){super(ee(n),te(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,i={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,i={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){Be(this,!0,e),Object.keys(e).forEach(i=>{Ue(this,!0,i),this.controls[i].setValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(i=>{let r=this.controls[i];r&&r.patchValue(e[i],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((i,r)=>{i.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,i)=>(e[i]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,i)=>i._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let i=this.controls[n];i&&e(i,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,i]of Object.entries(this.controls))if(this.contains(n)&&e(i))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,i,r)=>((i.enabled||this.disabled)&&(n[r]=i.value),n))}_reduceChildren(e,n){let i=e;return this._forEachChild((r,s)=>{i=n(i,r,s)}),i}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var J=class extends G{};var Re=new p("CallSetDisabledState",{providedIn:"root",factory:()=>ie}),ie="always";function lt(t,e){return[...e.path,t]}function me(t,e,n=ie){ne(t,e),e.valueAccessor.writeValue(t.value),(t.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(t.disabled),ct(t,e),ht(t,e),dt(t,e),ut(t,e)}function ve(t,e,n=!0){let i=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(i),e.valueAccessor.registerOnTouched(i)),T(t,e),t&&(e._invokeOnDestroyCallbacks(),t._registerOnCollectionChange(()=>{}))}function j(t,e){t.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function ut(t,e){if(e.valueAccessor.setDisabledState){let n=i=>{e.valueAccessor.setDisabledState(i)};t.registerOnDisabledChange(n),e._registerOnDestroy(()=>{t._unregisterOnDisabledChange(n)})}}function ne(t,e){let n=je(t);e.validator!==null?t.setValidators(fe(n,e.validator)):typeof n=="function"&&t.setValidators([n]);let i=Te(t);e.asyncValidator!==null?t.setAsyncValidators(fe(i,e.asyncValidator)):typeof i=="function"&&t.setAsyncValidators([i]);let r=()=>t.updateValueAndValidity();j(e._rawValidators,r),j(e._rawAsyncValidators,r)}function T(t,e){let n=!1;if(t!==null){if(e.validator!==null){let r=je(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.validator);s.length!==r.length&&(n=!0,t.setValidators(s))}}if(e.asyncValidator!==null){let r=Te(t);if(Array.isArray(r)&&r.length>0){let s=r.filter(o=>o!==e.asyncValidator);s.length!==r.length&&(n=!0,t.setAsyncValidators(s))}}}let i=()=>{};return j(e._rawValidators,i),j(e._rawAsyncValidators,i),n}function ct(t,e){e.valueAccessor.registerOnChange(n=>{t._pendingValue=n,t._pendingChange=!0,t._pendingDirty=!0,t.updateOn==="change"&&He(t,e)})}function dt(t,e){e.valueAccessor.registerOnTouched(()=>{t._pendingTouched=!0,t.updateOn==="blur"&&t._pendingChange&&He(t,e),t.updateOn!=="submit"&&t.markAsTouched()})}function He(t,e){t._pendingDirty&&t.markAsDirty(),t.setValue(t._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(t._pendingValue),t._pendingChange=!1}function ht(t,e){let n=(i,r)=>{e.valueAccessor.writeValue(i),r&&e.viewToModelUpdate(i)};t.registerOnChange(n),e._registerOnDestroy(()=>{t._unregisterOnChange(n)})}function ft(t,e){t==null,ne(t,e)}function pt(t,e){return T(t,e)}function gt(t,e){if(!t.hasOwnProperty("model"))return!1;let n=t.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function mt(t){return Object.getPrototypeOf(t.constructor)===We}function vt(t,e){t._syncPendingControls(),e.forEach(n=>{let i=n.control;i.updateOn==="submit"&&i._pendingChange&&(n.viewToModelUpdate(i._pendingValue),i._pendingChange=!1)})}function yt(t,e){if(!e)return null;Array.isArray(e);let n,i,r;return e.forEach(s=>{s.constructor===be?n=s:mt(s)?i=s:r=s}),r||i||n||null}function _t(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function ye(t,e){let n=t.indexOf(e);n>-1&&t.splice(n,1)}function _e(t){return typeof t=="object"&&t!==null&&Object.keys(t).length===2&&"value"in t&&"disabled"in t}var O=class extends _{constructor(e=null,n,i){super(ee(n),te(i,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),U(n)&&(n.nonNullable||n.initialValueIsDefault)&&(_e(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(i=>i(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){ye(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){ye(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){_e(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var Ct=t=>t instanceof O;var Yt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=d({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let t=e;return t})();var Le=new p("");var Vt={provide:y,useExisting:w(()=>Dt)},Dt=(()=>{let e=class e extends y{constructor(i,r,s){super(),this.callSetDisabledState=s,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new C,this._setValidators(i),this._setAsyncValidators(r)}ngOnChanges(i){this._checkFormPresent(),i.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(T(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(i){let r=this.form.get(i.path);return me(r,i,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(i),r}getControl(i){return this.form.get(i.path)}removeControl(i){ve(i.control||null,i,!1),_t(this.directives,i)}addFormGroup(i){this._setUpFormContainer(i)}removeFormGroup(i){this._cleanUpFormContainer(i)}getFormGroup(i){return this.form.get(i.path)}addFormArray(i){this._setUpFormContainer(i)}removeFormArray(i){this._cleanUpFormContainer(i)}getFormArray(i){return this.form.get(i.path)}updateModel(i,r){this.form.get(i.path).setValue(r)}onSubmit(i){return this.submitted=!0,vt(this.form,this.directives),this.ngSubmit.emit(i),this.form._events.next(new Y(this.control)),i?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(i=void 0){this.form.reset(i),this.submitted=!1,this.form._events.next(new K(this.form))}_updateDomValue(){this.directives.forEach(i=>{let r=i.control,s=this.form.get(i.path);r!==s&&(ve(r||null,i),Ct(s)&&(me(s,i,this.callSetDisabledState),i.control=s))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(i){let r=this.form.get(i.path);ft(r,i),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(i){if(this.form){let r=this.form.get(i.path);r&&pt(r,i)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ne(this.form,this),this._oldForm&&T(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(a(Me,10),a(Ee,10),a(Re,8))},e.\u0275dir=d({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,s){r&1&&z("submit",function(c){return s.onSubmit(c)})("reset",function(){return s.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[I([Vt]),g,L]});let t=e;return t})();var bt={provide:M,useExisting:w(()=>At)},At=(()=>{let e=class e extends M{set isDisabled(i){}constructor(i,r,s,o,c){super(),this._ngModelWarningConfig=c,this._added=!1,this.name=null,this.update=new C,this._ngModelWarningSent=!1,this._parent=i,this._setValidators(r),this._setAsyncValidators(s),this.valueAccessor=yt(this,o)}ngOnChanges(i){this._added||this._setUpControl(),gt(i,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(i){this.viewModel=i,this.update.emit(i)}get path(){return lt(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(a(y,13),a(Me,10),a(Ee,10),a(De,10),a(Le,8))},e.\u0275dir=d({type:e,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[I([bt]),g,L]});let t=e;return t})();var Mt=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=H({type:e}),e.\u0275inj=B({});let t=e;return t})(),Q=class extends _{constructor(e,n,i){super(ee(n),te(i,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,i={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:i.emitEvent})}removeAt(e,n={}){let i=this._adjustIndex(e);i<0&&(i=0),this.controls[i]&&this.controls[i]._registerOnCollectionChange(()=>{}),this.controls.splice(i,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,i={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:i.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){Be(this,!1,e),e.forEach((i,r)=>{Ue(this,!1,r),this.at(r).setValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((i,r)=>{this.at(r)&&this.at(r).patchValue(i,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((i,r)=>{i.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n,this),this._updateTouched(n,this),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,i)=>i._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,i)=>{e(n,i)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Ce(t){return!!t&&(t.asyncValidators!==void 0||t.validators!==void 0||t.updateOn!==void 0)}var Kt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let i=new e;return i.useNonNullable=!0,i}group(i,r=null){let s=this._reduceControls(i),o={};return Ce(r)?o=r:r!==null&&(o.validators=r.validator,o.asyncValidators=r.asyncValidator),new G(s,o)}record(i,r=null){let s=this._reduceControls(i);return new J(s,r)}control(i,r,s){let o={};return this.useNonNullable?(Ce(r)?o=r:(o.validators=r,o.asyncValidators=s),new O(i,u(l({},o),{nonNullable:!0}))):new O(i,r,s)}array(i,r,s){let o=i.map(c=>this._createControl(c));return new Q(o,r,s)}_reduceControls(i){let r={};return Object.keys(i).forEach(s=>{r[s]=this._createControl(i[s])}),r}_createControl(i){if(i instanceof O)return i;if(i instanceof _)return i;if(Array.isArray(i)){let r=i[0],s=i.length>1?i[1]:null,o=i.length>2?i[2]:null;return this.control(r,s,o)}else return this.control(i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var Jt=(()=>{let e=class e{static withConfig(i){return{ngModule:e,providers:[{provide:Le,useValue:i.warnOnNgModelWithFormControl??"always"},{provide:Re,useValue:i.callSetDisabledState??ie}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=H({type:e}),e.\u0275inj=B({imports:[Mt]});let t=e;return t})();var re={authServiceApi:"http://localhost:8800/api/auth/"};var oi=(()=>{let e=class e{constructor(){this.http=R(de)}registerService(i){return this.http.post(`${re.authServiceApi}register`,i)}loginService(i){return this.http.post(`${re.authServiceApi}login`,i)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=F({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{be as a,he as b,zt as c,Zt as d,Yt as e,Dt as f,At as g,Kt as h,Jt as i,oi as j};
/**i18n:b4befb39f552161274a3bff6194322ed1709f00556e578d79f451384a64ff146*/
