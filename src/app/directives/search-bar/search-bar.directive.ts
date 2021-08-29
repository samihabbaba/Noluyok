import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appSearchBar]',
})
export class SearchBarDirective {
  @Input('appSearchBar') searchFocused: any;
  @Output() closeSearch: any = new EventEmitter<any>();

  constructor(private elRef: ElementRef) {}

  @HostListener('document: click', ['$event']) clickOutOfSearch(event: any) {
    if (
      !this.elRef.nativeElement.contains(event.target) &&
      this.searchFocused
    ) {
      this.closeSearch.emit();
    }
  }
}
