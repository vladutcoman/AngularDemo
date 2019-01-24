import { 
  Directive, 
  OnInit, 
  ElementRef, 
  Renderer2, 
  HostListener,
  HostBinding,
  Input } from '@angular/core';

@Directive({
  selector: '[appBetterDirective]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transarent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    // this.renderer.setStyle(this.elRef.nativeElement, 'cursor', 'pointer');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}