import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
// import Validation from './utils/validation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent
{
  loginObj: any;
  constructor(private router: Router)
  {
    // this.loginObj = {
    //   mail: '',
    //   password: ''
    // };
  }

  loginForm= new FormGroup
  ({
    mail: new FormControl('',[Validators.required,Validators.email]),      //,Validators.pattern('[a-zA-Z@]+$')
    password: new FormControl('',[Validators.required,Validators.minLength(8),Validators.maxLength(16)])
  });

  get mail()
  {
    return this.loginForm.get('mail');
  }

  get password()
  {
    return this.loginForm.get('password');
  }

  userLogin()
  {
    if (this.loginForm.invalid)
    {
      console.log(JSON.stringify(this.loginForm.value, null, 2));
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'INVALID DETAILS !'
      })
    }

    else
    {
      console.log(JSON.stringify(this.loginForm.value, null, 2));
      this.router.navigateByUrl('home');
    }
    
    // debugger;
    // if(this.loginObj.mail == 'test@email.com' || this.loginObj.password =='test7890#')
    // {
    //   this.router.navigateByUrl('about');
    // }

    // else
    // {
    //   Swal.fire
    //   ({
    //     icon: 'error',
    //     title: 'Oops...',
    //     text: 'INVALID DETAILS !'
    //   })
    // }
    
  }

}