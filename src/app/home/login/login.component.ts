import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';


  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  login() {
    this.authService.authentication(this.username, this.password).subscribe(() => {
        this.router.navigate(['animals']);
      }, error => {
        alert('Invalid username or password');
        console.log(error);
      }
    );
  }

}
