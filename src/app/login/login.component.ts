import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });

  constructor(private router: Router) {}

  onSubmit() {
    const { username, password } = this.loginForm.value;
    let error="Error: Invalid login credentials";
    
    // Ensure that username and password are not null or undefined
    if (typeof username === 'string' && typeof password === 'string') {
      if (this.verifyLogin(username, password)) {
        this.router.navigate(['/dashbody']);
      }
       else
       {

       alert('Error: Invalid login credentials');
      //  this.showit();
      }
    } 
    else 
    {

      alert('Error: Invalid login credentials');
      
    }
  }
  

  
  verifyLogin(username: string, password: string): boolean {
    // Implement your own login verification logic here
    // For now, it's just a simple hardcoded check
    return username === 'ismail' && password === '1234';
  }
  
}