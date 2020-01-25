import { Component, ElementRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { CustomFormComponent } from '../../interfaces/custom-form-component.interface';

@Component({
  selector: 'advtech-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  public element: CustomFormComponent;
  public elementRef: ElementRef;

  @ViewChild('insertionPoint', {read: ViewContainerRef, static: true })
  public insertionPoint: ViewContainerRef;

  ngOnInit() {
  }

  createElement(config) {
    this.element = document.createElement(config.tag);
    this.element.label = config.label;
    this.insertionPoint.element.nativeElement.append(this.element);
    this.elementRef = new ElementRef(this.element);
  }
}
