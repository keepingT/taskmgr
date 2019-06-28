import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  items: string[];

  constructor() { }

  ngOnInit() {
    this.items = Array(16).fill(0).map((v, i) => `avatars: svg-${i+1}`);
  }

}
