
import { Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2, RendererStyleFlags2 } from "@angular/core";

// w are using renderer
@Directive({
        selector:'[betterStyleDirective]',
    }
)
export class betterDirective implements OnInit
{
    constructor(private eleRef:ElementRef,private renderer:Renderer2){}
    @HostBinding('style.backgroundColor') 
    background:string = 'transparent'

    ngOnInit()
    {
       this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','red');
    }
    //react On event using HostListener
    // hostlistener ki jagah HostBindibng vgi use kr skate hai
    @HostListener('mouseenter')
     mouseover(event:Event){
       // this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','green');
        this.background = 'green'; // same chij HostBinding se ki hai
     }
     @HostListener('mouseleave')
     mouseleave(event:Event){
       // this.renderer.setStyle(this.eleRef.nativeElement,'backgroundColor','pink');
        this.background = 'black';
     }

    

}