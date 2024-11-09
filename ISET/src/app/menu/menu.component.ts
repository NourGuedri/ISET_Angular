import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent {
  

  constructor(public authServ : AuthService) { 
    
  }
  ngOnInit() {}

}


