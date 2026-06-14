import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sobre-nosotros',
  standalone: false,
  templateUrl: './sobre-nosotros.html',
  styleUrls: ['./sobre-nosotros.scss'],
})
export class SobreNosotros {
  constructor(private router: Router) { }
  navigationToRegister() {

    this.router.navigate(['/registro']);
  }
}
