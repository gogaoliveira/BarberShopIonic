import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public menus = [
    { title: 'Cortes', url: '/cortes', icon: 'cut' },
    { title: 'Clientes', url: '/clientes', icon: 'people' },
    { title: 'Agenda', url: '/agenda', icon: 'book' },
  ];

  constructor() {}
}
