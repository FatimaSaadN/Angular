import'./polyfills.server.mjs';import{a as N,b as d,c as R,d as w,e as F,f as P,g as x,h as b,i as T,j as q}from"./chunk-EWQBGPY3.mjs";import{f as y,g as h,w as C}from"./chunk-7W4EFSXQ.mjs";import{Ba as p,Ca as m,Da as E,Ea as r,Fa as t,Ga as u,Ha as _,Ia as S,Ja as n,La as v,R as f,U as g,qa as s}from"./chunk-FJFEIO2B.mjs";import"./chunk-63Y3PX24.mjs";var I=(e,o)=>c=>{let l=c.controls[e],a=c.controls[o];a.errors&&!a.errors.confirmPasswordValidator||(l.value!==a.value?a.setErrors({confirmPasswordValidator:!0}):a.setErrors(null));};function G(e,o){e&1&&(r(0,"span",14),n(1,"First Name is Required"),t());}function M(e,o){e&1&&(r(0,"span",14),_(1,0),t());}function A(e,o){e&1&&(r(0,"span",14),n(1,"Email is Required"),t());}function V(e,o){e&1&&(r(0,"span",14),n(1,"Email is Invalid"),t());}function L(e,o){e&1&&(r(0,"span",14),n(1,"Username is Required"),t());}function O(e,o){e&1&&(r(0,"span",14),n(1,"Password is Required"),t());}function $(e,o){e&1&&(r(0,"span",14),n(1,"Confirm Password is Required"),t());}function D(e,o){e&1&&(r(0,"span",14),n(1,"Password didn't match"),t());}var Z=(()=>{let o=class o{constructor(){this.fb=f(b),this.authService=f(q),this.router=f(C);}ngOnInit(){this.registerForm=this.fb.group({firstName:["",d.required],lastName:["",d.required],username:["",d.required],email:["",d.compose([d.required,d.email])],password:["",d.required],confirmPassword:["",d.required]},{validator:I("password","confirmPassword")});}register(){this.authService.registerService(this.registerForm.value).subscribe({next:l=>{alert("User Created!"),this.registerForm.reset(),this.router.navigate(["/login"]);},error:l=>{console.log(l);}});}};o.ɵfac=function(a){return new(a||o)();},o.ɵcmp=g({type:o,selectors:[["app-register"]],standalone:!0,features:[v],decls:31,vars:12,consts:()=>{let l;return l="Last Name is Required",[l,[1,"lg:","w-4/5","mt-10","p-10","shadow-lg","mx-auto","rounded-lg","bg-gradient-to-b","from-[#f3e7f2]","to-[#a876a7]","mb-10"],[1,"text-3xl","text-center","font-semibold","py-5","text-purple-950"],[1,"flex","flex-col",3,"formGroup"],[1,"flex","flex-col","mt-4","mb-1"],["formControlName","firstName","type","text","placeholder","FirstName",1,"p-2","border-gray-300","rounded"],["class","text-purple-950",4,"ngIf"],["formControlName","lastName","type","text","placeholder","LastName",1,"p-2","border-gray-300","rounded"],["formControlName","email","type","text","placeholder","Email",1,"p-2","border-gray-300","rounded"],["formControlName","username","type","text","placeholder","Username",1,"p-2","border-gray-300","rounded"],["formControlName","password","type","password","placeholder","Password",1,"p-2","border-gray-300","rounded"],["formControlName","confirmPassword","type","password","placeholder","Confirm Password",1,"p-2","border-gray-300","rounded"],[1,"bg-purple-950","p-2","rounded","mt-3","text-white",3,"click","disabled"],[1,"flex","justify-center","mt-5"],[1,"text-purple-950"],[1,"text-purple-950","ml-2","cursor-pointer"]];},template:function(a,i){a&1&&(r(0,"div",1)(1,"h3",2),n(2,"Register"),t(),r(3,"form",3)(4,"div",4),u(5,"input",5),p(6,G,2,0,"span",6),t(),r(7,"div",4),u(8,"input",7),p(9,M,2,0,"span",6),t(),r(10,"div",4),u(11,"input",8),p(12,A,2,0,"span",6)(13,V,2,0,"span",6),t(),r(14,"div",4),u(15,"input",9),p(16,L,2,0,"span",6),t(),r(17,"div",4),u(18,"input",10),p(19,O,2,0,"span",6),t(),r(20,"div",4),u(21,"input",11),p(22,$,2,0,"span",6)(23,D,2,0,"span",6),t(),r(24,"button",12),S("click",function(){return i.register();}),n(25,"Submit"),t()(),r(26,"div",13)(27,"span",14),n(28,"Already have an account?"),t(),r(29,"a",15),n(30,"Login Here"),t()()()),a&2&&(s(3),m("formGroup",i.registerForm),s(3),m("ngIf",i.registerForm.hasError("required","firstName")&&i.registerForm.controls.firstName.dirty),s(3),m("ngIf",i.registerForm.hasError("required","lastName")&&i.registerForm.controls.lastName.dirty),s(3),m("ngIf",i.registerForm.hasError("required","email")&&i.registerForm.controls.email.dirty),s(),m("ngIf",i.registerForm.hasError("email","email")),s(3),m("ngIf",i.registerForm.hasError("required","username")&&i.registerForm.controls.username.dirty),s(3),m("ngIf",i.registerForm.hasError("required","password")&&i.registerForm.controls.password.dirty),s(3),m("ngIf",i.registerForm.hasError("required","confirmPassword")&&i.registerForm.controls.confirmPassword.dirty),s(),m("ngIf",i.registerForm.hasError("confirmPasswordValidator","confirmPassword")),s(),E("disabled",i.registerForm.invalid),m("disabled",i.registerForm.invalid));},dependencies:[h,y,T,F,N,R,w,P,x]});let e=o;return e;})();export{Z as default};/**i18n:b4befb39f552161274a3bff6194322ed1709f00556e578d79f451384a64ff146*/