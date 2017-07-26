import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  @Input("appHighlighted") newColor: string;

  constructor(private el: ElementRef) {
    console.log("hello directive!");
    // el.nativeElement.style.backgroundColor = "blue";
   }

   @HostListener('mouseenter') mouseEnter(){

    this.highlighted(this.newColor ||'yellow');
      
   }

   @HostListener('mouseleave') mouseLeage(){
   this.highlighted("");
      
   }

   private highlighted(color: string){
      this.el.nativeElement.style.backgroundColor = color;
   }




}
