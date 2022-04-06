import { Component, Input } from "@angular/core";
import { recepeListService } from "./recepeList.service";


@Component({
    selector:'app-recepes',
    templateUrl: './Recepes.component.html',
    providers:[recepeListService]

})

export class Recepes{

 @Input() content:string='recepe';

}