import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrollable-component',
  templateUrl: './scrollable-component.component.html',
  styleUrls: ['./scrollable-component.component.css'],
})
export class ScrollableComponentComponent {
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;
  isClickedLeft: boolean = true;
  @Input() componentHeader: string = '';
  @Input() items: any[] = [];

  scrollLeft(): void {
    this.isClickedLeft = true;
    this.scrollContainer.nativeElement.scrollBy({
      left: -260,
      behavior: 'smooth',
    });
  }

  scrollRight(): void {
    this.isClickedLeft = false;
    this.scrollContainer.nativeElement.scrollBy({
      left: 260,
      behavior: 'smooth',
    });
  }
}
