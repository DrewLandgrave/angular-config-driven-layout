import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'advtech-advtech-text-input',
  templateUrl: './advtech-text-input.component.html',
  styleUrls: ['./advtech-text-input.component.scss']
})
export class AdvtechTextInputComponent implements OnInit {
  private internalLabel: string;

  constructor() { }

  ngOnInit() {
  }

  @Input()
  set label(label: string){
    this.internalLabel = label;
  }

  get label(){
    return this.internalLabel;
  }

}
