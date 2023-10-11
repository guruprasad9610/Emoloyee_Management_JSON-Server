import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent
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