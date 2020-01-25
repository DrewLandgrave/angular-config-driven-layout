import {Component, OnInit, Input, ViewChild, ViewContainerRef, ViewRef} from '@angular/core';
import {CustomComponent} from '../../interfaces/custom-component.interface';
import {WrapperComponent} from '../wrapper/wrapper.component';

@Component({
  selector: 'advtech-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss'],
})
export class PanelComponent implements OnInit, CustomComponent {

  @ViewChild('insertionPoint', {read: ViewContainerRef, static: true})
  @Input() public insertionPoint: ViewContainerRef;

  @Input() label = '';

  constructor() {
  }

  ngOnInit() {
  }

  @Input()
  insertChild(component: ViewRef) {
    this.insertionPoint.insert(component);
  }
}
