import { Component } from '@angular/core';

@Component({
    selector: 'mw-app', // for angular to locate custom html element and apply the component to
    // template: `
    //     <h1>My App</h1>
    //     <p>My awesome application in Angular</p>
    //     ` // will fill the inner of targeted custom element when it processes it
    templateUrl: './app.component.html',
    // styles: [`
    //     h1 { color: #ffffff; }
    //     .description {
    //         font-style: italic;
    //         color: green;
    //     }
    // `],
    styleUrls: ['./app.component.css']
}) // needed at least two arguments: selector and template/template component
export class AppComponent {
    firstMediaItem = {
        id: 1,
        name: 'Firebug',
        medium: 'Series',
        category: 'Science Fiction',
        year: 2010,
        // watchedOn: null, // to see that ngIf works correctly
        watchedOn: 1294166565384,
        isFavorite: false
      };
      
    onMediaItemDelete(mediaItem) {
        
    }
}
