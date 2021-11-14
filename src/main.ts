import { enableProdMode } from '@angular/core';
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






























platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
