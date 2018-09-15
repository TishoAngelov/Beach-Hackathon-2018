import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'wis-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Как е морето :)';

  constructor(private titleService: Title) {
    this.titleService.setTitle(this.title);
  }
}
