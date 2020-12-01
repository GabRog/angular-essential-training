// putting boostrap logic in this file
// needed bootstrapping for browser
// Platform Browser Dynamic can be used

// module loading syntax supports importing any of exported things (class types, functions, constants, variables, JSON file data)
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'; // has a bootstrap module function in it
import { AppModule } from './app/app.module';
// I will use it to bootstrap root module on the platform

platformBrowserDynamic().bootstrapModule(AppModule);


