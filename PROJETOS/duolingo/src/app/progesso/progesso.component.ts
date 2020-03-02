import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progesso',
  templateUrl: './progesso.component.html',
  styleUrls: ['./progesso.component.scss']
})
export class ProgessoComponent implements OnInit {

  @Input() progresso: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
