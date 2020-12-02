import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // without extension, configured to interpret files as typescript
import { MediaItemComponent } from './media-item.component';

@NgModule({
    imports: [
        BrowserModule // I am building web-based app, so browser will be needed
    ], // Used to bring in modules that my module will need.
    declarations: [
        AppComponent,
        MediaItemComponent
    ], // Make components, directives, and pipes (declarables) available to my module that don't come from another module.
    bootstrap: [
        AppComponent // used as a target for bootstrapping the app
    ] // Let now Angular which component/s will 
}) // indicates that class is NgModule will be the starting point for bootstap process.
export class AppModule {


}