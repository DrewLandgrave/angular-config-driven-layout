import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'advtech-advtech-textarea-input',
  templateUrl: './advtech-textarea-input.component.html',
  styleUrls: ['./advtech-textarea-input.component.scss']
})
export class AdvtechTextareaInputComponent implements OnInit {
  private internalLabel: string;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set label(label: string) {
    this.internalLabel = label;
  }

  get label() {
    return this.internalLabel;
  }

}
