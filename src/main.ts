/*port { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}


console.log("---------------------------------------");
let cars:string[]=["pride","206","207"];
for (let i=0; i<cars.length; i++){
  console.log(cars[i]);

}


for(let item of cars){
  console.log(item);
}

for (let idx in cars){
  console.log(cars[idx]);
}

console.log("---------------------------------------");
*/




/*
console.log("salam \n new line ");
let n=9;

for (let i=0;i<n;i++){
  for (let j=0;j<(n-i-1);j++){
      console.log(" ");}
    for (let j = 0; j<(2 * i + 1);j++){
      console.log("*");}
    console.log("\n");
}
 }*/


let n = 5;
let string = "";


for (let i = 1; i <= n; i++) {

  for (let j = n; j > i; j--) {
    string += " ";
  }

  for (let k = 0; k < i * 2 - 1; k++) {
    if (k === 0 || k === 2 * i - 2) {
      string += "*";
    }
    else {
      string += " ";
    }
  }
  string += "\n";
}

for (let i = 1; i <= n - 1; i++) {

  for (let j = 0; j < i; j++) {
    string += " ";
  }

  for (let k = (n - i) * 2 - 1; k >= 1; k--) {
    if (k === 1 || k === (n - i) * 2 - 1) {
      string += "*";
    }
    else {
      string += " ";
    }
  }
  string += "\n";
}
;
















console.log(string);
