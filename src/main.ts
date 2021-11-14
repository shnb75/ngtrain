import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


console.log("---------------------------------------");

let a:number=3;
console.log(a);
let b:string="sdts";
console.log(b);
let s:boolean=true;
console.log(s);
let cars:string [] =["pride","206","pars"];
console.log(cars);
let num:number [] =[2,3,5,6,9];
console.log(num);
let f:any = "dfghfsd";
f=[2,3,5,6];
console.log(f);
let g:any[]=["salal",2,false];
console.log(g);
let h:number|string="sgdsg";
// h=2;
console.log(h);
console.log(typeof h);
if (typeof h == "number"){
  console.log("h is number");
}else if(typeof h == "string") {
console.log("h is string");
}
let j :"ali"|2|'reza'="reza";
console.log(j);
let bb;
console.log(bb);





console.log("---------------------------------------");






























platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
