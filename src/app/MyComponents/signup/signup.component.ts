import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {AbstractControl,FormBuilder,FormGroup,Validators,FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import Validation from 'src/app/utils/validation';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit
{

  public signupForm !: FormGroup;
  // form: FormGroup = new FormGroup
  // ({
  //   fullname: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl(''),
  //   confirmPassword: new FormControl('')
  // });
  submitted = false;

  constructor(private formBuilder: FormBuilder, private router: Router, private http :HttpClient) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: ['',[Validators.required,Validators.minLength(6),Validators.maxLength(16)]],
        confirmPassword: ['',[ Validators.required,Validators.minLength(6),Validators.maxLength(16)]]
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );
  }

  get f(): { [key: string]: AbstractControl }
  {
    return this.signupForm.controls;
  }

  signUp(): void
  {
    this.submitted = true;
    this.http.post<any>("http://localhost:3000/signupUsers", this.signupForm.value)
    .subscribe(res => {
      console.log(res);
      alert("Signup successful");
      // Swal.fire(
      //   'Account Created Successfully',
      //   'Go to LogIn Page',
      //   'success'
      // )
      this.router.navigateByUrl('login');
    },err =>{
      console.log(err);
      alert("Something went wrong!!!");
      // Swal.fire({
      //   icon: 'error',
      //   title: 'Oops...',
      //   text: 'INVALID DETAILS !',
      // })
    })
    
  }

}