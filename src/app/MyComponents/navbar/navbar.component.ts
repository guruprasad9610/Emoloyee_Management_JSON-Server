import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent
{
  onLogout()
  {
    Swal.fire
    (
      'Log Out Successfully',
      '',
      'success'
    )
  }

}
