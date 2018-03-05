import {Directive, Renderer2, OnInit, ElementRef,HostListener,HostBinding,Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor:string ;
  @Input('appBetterHighlight') highlightColor:string;

  @HostBinding('style.backgroundColor')backgroundColor:string;

  constructor(private eleRef:ElementRef, private renderer:Renderer2) {//we can access the dom using renderer
  }

  ngOnInit() {
    this.backgroundColor = this.defaultColor
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color','violet')
    this.backgroundColor = this.highlightColor
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.eleRef.nativeElement, 'background-color', 'transparent')
    this.backgroundColor = this.defaultColor
  }

}
