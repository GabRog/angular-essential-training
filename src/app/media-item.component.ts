import { Input, Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'mw-media-item',
    templateUrl: './media-item.component.html',
    styleUrls: ['media-item.component.css']
})
export class MediaItemComponent {
    @Input() mediaItem; // this field is marked as an input property and supplies configuration data
    // it is bound to a DOM property in the template. During change detection, Angular automatically updates 
    // the data property with the DOM's property value.
    // it is exposed for use

    // @Input('mediaItemToWatch') mediaItem;
    // argument of decorator is name for property binding in HTML - better not to use them, stick to name of property

    @Output() delete = new EventEmitter();
    // Output decorator allows me to pass in a string value if I want to alias the property - only when needed
    // to emit delete event we need sth to happen
    onDelete() { // linked to click event on remove button
        console.log('deleted');
        this.delete.emit(this.mediaItem); 
    }
}