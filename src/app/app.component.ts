import { Component } from '@angular/core';

@Component({
    selector: 'app-root', // for angular to locate custom html element and apply the component to
    template: '<h1>My App</h1>' // will fill the inner of targeted custom element when it processes it
}) // needed at least two arguments: selector and template/template component
export class AppComponent {

}
