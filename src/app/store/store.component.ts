import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor() { }
  images:Array<string>=[
    "coffeemachine1","vaccum","printer1",
  // "printer2","coffeemachine2","vacuum2",
  // "coffeemachine1","vacuum","printer1",
  // "printer2","coffeemachine2","vacuum2"
]

  ngOnInit() {
  }

}
