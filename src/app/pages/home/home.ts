import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.html',
  styleUrls: ['./home.scss']
})
export class HomeComponent {
  constructor(private router: Router) { }

  navigationToRegister() {
    this.router.navigate(['/registro']);
  }

  navigationToSobreNosotros() {
    this.router.navigate(['/sobre-nosotros']);
  }
}
