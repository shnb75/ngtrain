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


/*let n = 5 ;
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
      string += "*";

    }


  }


  string += "\n";

}
console.log(string);

console.log("**shahab**");
string = "";

for (let i = 1; i <= n - 1; i++) {


  for (let j = 0; j < i; j++) {
    string += " ";
  }

  for (let k = (n - i) * 2 - 1; k >= 1; k--) {
    if (k === 1 || k === (n - i) * 2 - 1) {
      string += "*";
    }
    else {
      string += "*";
    }
  }
  string += "\n";


}

console.log(string);
*/


function sum(num1: number, num2: number): number {
  return (num1 + num2);
}

let a: number;
a = sum(3, 5);
console.log(a);
sum(1, 4);

sum(3, 8);

function printf(n1: any, n2?: any) {
  console.log(n1);
  if (typeof n2 !== 'undefined') {
    console.log(n2);
  }


}

printf("salam");
printf("rdgte", 3);


function print1(n1: any, n2: any = "ewfe") {
  console.log(n1, n2);
}

print1(3);
print1(4, 4);


function pp(...o: any[]) {
  console.log(o.length);
}

pp(1, "adad", 2, 3, "dfsaf");


let add = (n1: number, n2: number): number => n1 + n2;
add(3, 3);

let v: number = add(3, 1);
console.log(v);


function dd(n1: number, n2: number): number {
  return n1 + n2
}


function mm(n1: number | string, n2: number | string) {
  if (typeof n1 == 'number' && typeof n2 == 'number') {
    console.log(n1 + n2)
  }


  if (typeof n1 == 'string' && typeof n2 == 'string') {
    console.log(n1 + ' ' + n2);
  }
}


mm(7, 2);
mm('ali', 'farhadi');















