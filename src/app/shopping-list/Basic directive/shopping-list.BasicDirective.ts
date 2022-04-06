import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({
   selector: '[app-BasicDirective]',

})
export class BasicDirective implements OnInit {

    constructor(private elementRef:ElementRef){
    }

     ngOnInit(){
        this.elementRef.nativeElement.style.backgroundColor='green';
     }

}