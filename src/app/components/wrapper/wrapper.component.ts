import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'advtech-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit {
  @ViewChild(HTMLElement, { static: true })
  public element: HTMLElement;
  constructor(private config: string) { }

  ngOnInit() {
  }

  loadChildren(config: any) {

  }
}
