import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/common/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
model: any = {};
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.auth.login(this.model).subscribe(next => {
      console.log('Logged in success');
    }, error => {
      console.log('Failed to login');
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
      localStorage.removeItem('token');
      console.log('logged out');
  }

}
